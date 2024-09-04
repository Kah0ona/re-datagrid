(ns re-datagrid.views
    (:require [cljs-time.coerce :as coerce]
              [cljs-time.format :as fmt]
              [cljs.pprint :as pprint]
              [re-datagrid.events]
              [re-datagrid.schema :as ds]
              [re-datagrid.subs]
              [re-frame.core :as rf]
              [reagent.core :as r]
              [schema.core :as s
               :include-macros true]
              [taoensso.timbre :as timbre
               :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                  logf tracef debugf infof warnf errorf fatalf reportf
                                  spy get-env log-env)])
    (:import
     (goog.async Debouncer)))

(defn debounced
  "Returns a function that applies args to function 'f' with debounce 'interval' milliseconds.
  Usefull for dispatching events: `((debounced rf/dispatch) [:dispatch/event])`"
  ([] (debounced rf/dispatch 500))
  ([f] (debounced f 500))
  ([f interval]
   (let [f          (if (ifn? f) f rf/dispatch)
         interval   (if (pos-int? interval) interval 500)
         debouncer  (Debouncer. f interval)]
     (fn debounced* [& args]
       (.apply (.-fire debouncer) debouncer (to-array args))))))

(defn clean-formatted-keys
  [r]
  (into {}
        (remove
         (fn [[k v]]
           (clojure.string/ends-with? (name k) "-formatted" ))
         r)))

(def dutch-formatter (fmt/formatter "dd-MM-yyyy HH:mm"))
(def dutch-formatter-date (fmt/formatter "dd-MM-yyyy"))

(defn is-checked?
  [pkey record selected-records]
  (let [rs (keys (group-by pkey selected-records))]
    (some #{(pkey record)} rs)))

(defn cell-select-checkbox
  [id record]
  (let [options          (rf/subscribe [:datagrid/options id])
        record-selected? (rf/subscribe [:datagrid/record-selected? id record])]
    (fn [id record]
      (let [pkey (:id-field @options)]
        [:td.check {:key (str "checkbox_" (get record pkey))}
         [:div.checkbox
          [:label
           [:input {:type      :checkbox
                    :checked   (if @record-selected? true false)
                    :on-change #(rf/dispatch [:datagrid/toggle-checkbox id record])}]
           [:i.input-helper]]]]))))

(defn are-you-sure-modal
  [id]
  (let [options (rf/subscribe [:datagrid/options id])]
    (fn [id]
      [:div
       [:div.sweet-overlay.are-you-sure {:style {:display :block}}]
       [:div.sweet-alert.showSweetAlert.visible
        {:style {:display :block} }
        [:div.icon.warning.pulseWarning
         [:span.body.pulseWarningIns]
         [:span.dot.pulseWarningIns]]
        [:h2 (:delete-are-you-sure-title @options)]
        [:p.lead.text-muted (:delete-are-you-sure-message @options)]
        [:p
         [:button.btn.cancel.btn-lg.btn-default
          {:on-click #(rf/dispatch [:datagrid/show-are-you-sure-popup id false])}
          (or (:no-text @options) "Nee")]
         [:button.btn.btn-lg.confirm.btn-warning
          {:on-click #(rf/dispatch [:datagrid/delete-record id])}
          (or (:yes-text @options) "Ja")]]]])))

(defn create-button
  [id]
  (fn [id]
    [:button.btn.btn-xs.btn-primary.waves-effect.waves-circle.waves-float
     {:on-click #(rf/dispatch [:datagrid/create-new-record id])}
     [:i.zmdi.zmdi-plus]]))

(defn save-cell-button
  [id pk]
  [:td.commands {:key "SAVECELLBUTTON" :className "save"}
   [:button.btn.btn-xs.bgm-teal.waves-effect.waves-circle.waves-float
    {:on-click #(rf/dispatch [:datagrid/save-edited-record id pk])}
    [:i.zmdi.zmdi-check]]])

(defn delete-cell-button
  [id record]
  (let []
    (fn [id record]
      [:span {:key "DELETE" :className "delete"}
       [:button.btn.btn-xs.btn-danger.waves-effect.waves-circle.waves-float
        {:on-click #(rf/dispatch [:datagrid/delete-record-maybe id record])}
        [:i.zmdi.zmdi-close]]])))

(defn reorder-cell-button-up
  [callback]
  [:span {:key "REORDER" :className "reorder reorder-up"}
   [:button.btn.btn-xs.bgm-gray.waves-effect.waves-circle.waves-float
    {:on-click callback}
    [:i.zmdi.zmdi-long-arrow-up]]])

(defn reorder-cell-button-down
  [callback]
  [:span {:key "REORDER" :className "reorder reorder-down"}
   [:button.btn.btn-xs.bgm-gray.waves-effect.waves-circle.waves-float
    {:on-click callback}
    [:i.zmdi.zmdi-long-arrow-down]]])

(defn edit-cell-button
  "Starts editing the row"
  [id pk record]
  [:span {:key "EDITING" :className "edit"}
    [:button.btn.btn-xs.btn-info.waves-effect.waves-circle.waves-float
     {:on-click #(rf/dispatch [:datagrid/start-edit id pk (clean-formatted-keys record)])}
     [:i.zmdi.zmdi-edit]]])

(defmulti table-header-filter (fn [id field]
                                (:type field)))

(defmethod table-header-filter :default
  [id {:keys [name] :as field}]
  (let [v (rf/subscribe [:datagrid/header-filter-value id name])]
    (fn [id {:keys [name] :as field}]
      [:div.table-header-filter.m-b-10
       [:input.form-control
        {:value       (or @v "")
         :placeholder "Filter..."
         :on-change   #(rf/dispatch [:datagrid/header-filter-value id name (-> % .-target .-value)])
         :on-blur     #(rf/dispatch [:datagrid/header-filter-value id name @v true])
         :type        :text}]])))

(defmethod table-header-filter :number
  [id {:keys [name] :as field}]
  (let [v (rf/subscribe [:datagrid/header-filter-value id name])]
    (fn [id {:keys [name] :as field}]
      [:div.table-header-filter.m-b-10
       [:input.form-control
        {:value       (or @v "")
         :placeholder "Filter..."
         :on-change   #(rf/dispatch [:datagrid/header-filter-value id name (-> % .-target .-value )])
         :on-blur     #(rf/dispatch [:datagrid/header-filter-value id name @v true])
         :type        :number}]])))

(defn table-header-cell
  [id {:keys [title align width can-sort hide-header-filter custom-header-filter] :as field}]
  (let [align   (if-not align :text-left align)
        atts    (cond-> {:className align
                         :key (name (:name field))}
                  width
                  (assoc :style {:width width}))
        sorting (rf/subscribe [:datagrid/sorting id])
        options (rf/subscribe [:datagrid/options id])]
    (fn [id {:keys [title align width can-sort] :as field}]
      (let [sort-by-key      (:key @sorting)
            sort-direction   (:direction @sorting)
            can-sort-global? (:can-sort @options)
            header-filters?  (:header-filters @options)]
        [:th atts

         (if (and can-sort-global?
                  (not= false can-sort))
           [:a.column-header-anchor

            [:span.text.m-r-5
             {:style    {:cursor :pointer}
              :on-click #(rf/dispatch [:datagrid/sort-field id (:name field)])}
             title]
            (cond
              (and
               (= (:name field) sort-by-key)
               (= sort-direction :asc))  [:i.zmdi.zmdi-caret-up]
              (and
               (= (:name field) sort-by-key)
               (= sort-direction :desc)) [:i.zmdi.zmdi-caret-down]

              :otherwise
              [:i {:style {:display :inline-block
                           :width   "5px"
                           :height  "5px"}}])]
           ;;else
           [:span
            [:span.text.m-r-5 title]
            (cond
              (and
               (= (:name field) sort-by-key)
               (= sort-direction :asc))  [:i.zmdi.zmdi-caret-up]
              (and
               (= (:name field) sort-by-key)
               (= sort-direction :desc)) [:i.zmdi.zmdi-caret-down]

              :otherwise
              [:i {:style {:display :inline-block
                           :width   "5px"
                           :height  "5px"}}])])

         (when (and header-filters?
                    (or (nil? hide-header-filter)
                        (not hide-header-filter))
                    (not custom-header-filter))
           [table-header-filter id field])
         (when (and header-filters?
                    (or (nil? hide-header-filter)
                        (not hide-header-filter))
                    custom-header-filter)
           (custom-header-filter id field))

         (when (and header-filters? hide-header-filter)
           [:div.m-b-10 {:style {:height "35px"}} " "])]))))

(defn mass-select
  [id data-sub]
  (let [visible-records (rf/subscribe [:datagrid/sorted-records id data-sub])
        checked?        (rf/subscribe [:datagrid/mass-select-checked? id])]
    (fn
      [id data-sub]
      [:div.checkbox
       [:label
        [:input {:type      :checkbox
                 :checked   (if @checked? true false)
                 :on-change #(rf/dispatch [:datagrid/toggle-mass-select id @visible-records])}]
        [:i.input-helper]]])))

(defn table-header
  [id data-sub]
  (let [fields           (rf/subscribe [:datagrid/fields id])
        sorting          (rf/subscribe [:datagrid/sorting id])
        options          (rf/subscribe [:datagrid/options id])
        selected-records (rf/subscribe [:datagrid/selected-record-pks id data-sub])]
    (fn [id data-sub]
      (let [cells (mapv (fn [f]
                          ^{:key (:name f)}
                          [table-header-cell id f]) @fields)
            cells (cond->> cells
                    (:checkbox-select @options)
                    (concat [^{:key "check"}
                             [:th.check
                              {:key "check"}
                              [mass-select id data-sub]]]))]
        [:thead  {:key "head"}
         (when (:extra-header-row @options)
           (:extra-header-row @options))
         (when-not (:hide-heading @options)
           [:tr
            (cond
              (:can-create @options)
              (concat cells [ ^{:key "cmds"}
                             [:th.commands
                              [create-button id]]])
              (:can-delete @options)
              (concat cells [ ^{:key "cmds2"}
                             [:th.commands ]])
              :else

              cells)])]))))

(defmulti edit-cell
  (fn [_ {t :type} _]
    (or t :string)))

(defmethod edit-cell :number
  [id field pk]
  (let [r (rf/subscribe [:datagrid/edited-record-by-pk id pk])]
    (fn [id field pk]
      (let [v (get @r (:name field))]
        [:td {:key       (:name field)
              :className "editing"}
         [:div.fg-line
          [:input.form-control {:type      "number"
                                :value     v
                                :on-change #(rf/dispatch [:datagrid/update-edited-record id pk
                                                          (:name field) (.-target.value %)])}]]]))))

(defmethod edit-cell :custom
  [id field pk]
  (let [r (rf/subscribe [:datagrid/edited-record-by-pk id pk])]
    (fn [id field pk]
      (let [v (get @r (:name field))]
        [:td {:key (:name field)
              :className "editing"}
         ((:custom-element-edit-renderer field) field @r
          #(rf/dispatch [:datagrid/update-edited-record id pk (:name field) %]) v)]))))

(defmethod edit-cell :yesno
  [id field pk]
  (let [r (rf/subscribe [:datagrid/edited-record-by-pk id pk])]
    (fn [id field pk]
      (let [v (get @r (:name field))]
        [:td {:key       (:name field)
              :className "editing"}
         [:div.fg-line
          [:div.select
           [:select.form-control
            {:value     (if v "true" "false")
             :on-change #(rf/dispatch [:datagrid/update-edited-record id pk
                                      (:name field) (= "true" (.-target.value %))])}
            [:option {:value "true"}  "ja"]
            [:option {:value "false"} "nee"]]]]]))))

(defmethod edit-cell :no-edit
  [id field pk]
  (let [r (rf/subscribe [:datagrid/edited-record-by-pk id pk])]
    (fn [id field pk]
      (let [v (get @r (:name field))]
        [:td {:key       (:name field)
              :className "editing"}
         (if (:formatter field)
           ((:formatter field) v @r)
           v)]))))


(defmethod edit-cell :default
  [id field pk]
  (let [r (rf/subscribe [:datagrid/edited-record-by-pk id pk])]
    (fn [id field pk]
      (let [v (get @r (:name field))]
        [:td {:key       (:name field)
              :className "editing"}
         [:div.fg-line
          [:input.form-control {:type      "text"
                                :value     v
                                :on-change #(rf/dispatch [:datagrid/update-edited-record id pk
                                                          (:name field) (.-target.value %)])}]]]))))

(defn create-row
  [id]
  (let []
    (fn [id]
      [:div "TODO"]
      )))

(defn edit-row
  "shows a row with inline editing elements"
  [id pk]
  (let [fields (rf/subscribe [:datagrid/fields id])]
    (fn [id pk]
      (let [cells       (doall
                         (map (fn [f]
                                ^{:key (:name f)}
                                [edit-cell id f pk]) @fields))
            save-button ^{:key (or pk -1)} [save-cell-button id pk]]
        [:tr.editing {:key pk} (concat cells [save-button])]))))


(defmulti table-cell
  (fn [_ {t :type} _]
    (or t :string)))

(defmethod table-cell :custom
  [id field record]
  (let [is-clickable? (not (nil? (:on-click field)))
        fieldname     (:name field)
        fmt-fieldname (-> field :name name (str "-formatted") keyword)
        value         (or
                       (get record fmt-fieldname)
                       (get record fieldname))
        align         (if (nil? (:align field)) :text-left (:align field))]
    [:td {:key (:name field) :className align}
     [:span {:on-click #((:custom-element-click field) record)}
      [(:custom-element-renderer field) record]]]))

(defmethod table-cell :default
  [id field record]
  (let [options (rf/subscribe [:datagrid/options id])]
    (fn [id field record]
      (let [is-clickable?   (not (nil? (:on-click field)))
            formatter       (:formatter field)
            fieldname       (:name field)
            fmt-fieldname   (-> field :name name (str "-formatted") keyword)
            formatted-value (or
                             (get record fmt-fieldname)
                             (get record fieldname))
            align           (if (nil? (:align field)) :text-left (:align field))
            formatted-value (if is-clickable?
                              [:a.table-link {:on-click
                                              (fn [e]
                                                (let [f (:on-click field)]
                                                  (f (clean-formatted-keys record)
                                                     field e
                                                     @options)))}
                               formatted-value]
                              formatted-value)]
        [:td {:key       fieldname
              :className align}
         formatted-value]))))

(defn command-td
  [id
   {:keys [can-edit can-edit-fn can-reorder can-reorder-fn-up
           id-field can-reorder-fn-down can-delete can-delete-fn data-subscription]
    :as   options}
   record]
  (let [sorted-records (rf/subscribe [:datagrid/sorted-records id data-subscription])]
    (fn [id
         {:keys [can-edit can-edit-fn can-reorder can-reorder-fn-up
                 id-field can-reorder-fn-down can-delete can-delete-fn data-subscription]
          :as   options}
         record]
      [:td.commands
       (when
           (and can-edit
                (or
                 (nil? can-edit-fn)
                 (and
                  (not (nil? can-edit-fn))
                  (can-edit-fn record))))
         [edit-cell-button id (get record id-field) record])

       (when (and can-reorder
                  (or (nil? can-reorder-fn-up)
                      (can-reorder-fn-up record @sorted-records)))
         [reorder-cell-button-up #(rf/dispatch [:datagrid/reorder id :up (clean-formatted-keys record)])])

       (when (and can-reorder
                  (or (nil? can-reorder-fn-down)
                      (can-reorder-fn-down record @sorted-records)))
         [reorder-cell-button-down #(rf/dispatch [:datagrid/reorder id :down (clean-formatted-keys record)])])

       (when
           (and can-delete
                (or
                 (nil? can-delete-fn)
                 (and
                  (not (nil? can-delete-fn))
                  (can-delete-fn record))))
         [delete-cell-button id record])])))

(defn non-edit-row
  [id record row-class]
  (let [options (rf/subscribe [:datagrid/options id])
        fields  (rf/subscribe [:datagrid/fields id])]
    (fn [id record row-class]
      (let [pk (get record (:id-field @options))
            k  (if (or (= "" pk) (nil? pk))
                 "editing"
                 pk)

            classNames (if (:row-formatter @options)
                         ((:row-formatter @options) record)
                         "")

            classNames (if (:show-max-num-rows @options)
                         (str classNames " " "expandable")
                         classNames)
            atts       (cond-> {:key k :class classNames}
                         ;;(:show-max-num-rows @options) (assoc :on-click (:expand-handler @options)))
                         row-class (update :class (fn [c]
                                                    (str c " " row-class)))
                         false (assoc :on-click (:expand-handler @options)))

            atts (if (:on-record-click @options)
                   (assoc atts :on-click #((:on-record-click @options) record @fields @options))
                   atts)
            cells (cond->> (doall
                            (map (fn [f]
                                   ^{:key (:name f)}
                                   [table-cell id f record]) @fields))
                    (:checkbox-select @options)
                    (concat [^{:key "checkbox__"}
                             [cell-select-checkbox id record]]))]
        [:tr atts
         (cond-> cells
           (or (:can-update @options) (:can-edit @options) (:can-delete @options))
           (concat [^{:key "commands"}
                    [command-td id @options record]]))]))))

(defn table-row
  [id record row-class]
  (let [options  (rf/subscribe [:datagrid/options id])
        editing? (rf/subscribe [:datagrid/editing-record? id record])]
    (fn [id record row-class]
      (if @editing?
        ^{:key ((:id-field @options) record)}
        [edit-row id (get record (:id-field @options)) row-class]

        ^{:key ((:id-field @options) record)}
        [non-edit-row id record row-class]))))

(defn build-partition-map
  [rs partition-fn]
  (->> rs
       (partition-by partition-fn)
       (reduce
        (fn [[prev-idx acc] partition]
          (let [n (count partition)
                v (partition-fn (first partition))
                ]
            [(+ prev-idx n) (assoc acc prev-idx v)]))
        [0 {}])
       last))

(comment

  (build-partition-map
   [{:a 1}
    {:a 1}
    {:a 1}
    {:a :x}
    {:a :x}
    {:a 2}
    {:a 2}]
   :a)
;; => {0 1, 3 :x, 5 2}

  )

(defn table-data
  [id data-sub]
  (let [
        options         (rf/subscribe [:datagrid/options id])
        fields          (rf/subscribe [:datagrid/fields id])
        creating?       (rf/subscribe [:datagrid/creating? id])
        all-records     (rf/subscribe [:datagrid/records data-sub])
        visible-records (rf/subscribe [:datagrid/sorted-records id data-sub])]
    (fn [id data-sub]
      (let [partition-fn (:partition-fn @options)
            rs           @visible-records
            ;;row-idx -> result val, where only the first row of partition returns something
            partition-map (when partition-fn
                            (build-partition-map rs partition-fn))
            rows         (doall
                          (map-indexed (fn [i r]
                                         (let [partition-value (get partition-map i)]
                                           ^{:key ((:id-field @options) r)}
                                           [table-row id r partition-value]))
                                       rs))
            max-rows     (:show-max-num-rows @options)]
        [:tbody {:key "body"}
         (cond-> rows
           @creating? (conj ^{:key -9}
                            [edit-row id nil]))]))))





(defn table-footer
  [id fields records]
  (let []
    [:tfoot
     [:tr
      (doall
       (map-indexed
        (fn [i f]
          ^{:key i}
          [:td
           (when (:footer-cell f)
             ((:footer-cell f) records))])
        fields))]]))

(s/defn ^:always-validate datagrid
  "Creates a datagrid"
  [options :- ds/GridConfiguration
   fields  :- [ds/GridField]]
  (let [id              (:grid-id options)
        data-sub        (:data-subscription options)
        loading-sub     (:loading-subscription options)
        creating?       (rf/subscribe [:datagrid/creating? id])
        show-sure?      (rf/subscribe [:datagrid/show-sure? id])
        ;; we do this aliassing, since we have 'sorted-records' depend on this one
        records         (rf/subscribe [:datagrid/records data-sub])
        current-options (rf/subscribe [:datagrid/options id])
        current-fields  (rf/subscribe [:datagrid/fields id])
        expanded?       (rf/subscribe [:datagrid/expanded? id])
        initialized?    (rf/subscribe [:datagrid/initialized? id])
        loading?        (rf/subscribe [:datagrid/loading? loading-sub])]
    (fn [options fields]
      (if-not @initialized?
        (do (rf/dispatch [:datagrid/initialize options fields])
            [:div.p-30
             {:style {:text-align :center}}
             [:div.preloader.pl-xl
              [:svg.pl-circular
               {:viewBox "25 25 50 50"}
               [:circle.plc-path {:r "20", :cy "50", :cx "50"}]]]])
        ;;else
        (let [colspan (cond-> (count fields)
                        (:checkbox-select options) inc)]
          (when (not= options @current-options)
            (rf/dispatch [:datagrid/update-options id options]))
          (when (not= fields @current-fields)
            (rf/dispatch [:datagrid/update-fields id fields]))
          [:div
           (when @show-sure?
             [are-you-sure-modal id])
           [:div.table-responsive
            [:table.table.bootgrid-table
             {:class (str (name id) " " (:additional-css-class-names options))}
             (when-not (and (:hide-heading options)
                            (not (:extra-header-row options)))
               [table-header id data-sub])
             (when-not (empty?
                        (filter (fn [f]
                                  (not (nil? (:footer-cell f)))) fields))
               [table-footer id fields @records])
             (cond
               @loading?
               [:tbody
                [:tr
                 [:td {:col-span (count fields)}
                  [:div.p-30
                   {:style {:text-align :center}}
                   [:div.preloader.pl-xl
                    [:svg.pl-circular
                     {:viewBox "25 25 50 50"}
                     [:circle.plc-path {:r "20", :cy "50", :cx "50"}]]]]]]]

               (and (empty? @records) (not @creating?))
               [:tbody
                [:tr
                 [:td.nodata {:style   {:padding-top "20px"}
                              :col-span colspan}
                  [:i (or (:no-records-text options) "Geen gegevens gevonden.")]]]]

               :otherwise
               [table-data id (:data-subscription options)])]
            (when (:progressive-loading options)
              [:div.re-datagrid-read-more-marker])

            (when (and (:show-max-num-rows options)
                       (not @expanded?)
                       (> (count @records) (:show-max-num-rows options)))
              [:div.re-datagrid-button-container
               [:button.btn.btn-primary.btn-read-more
                {:on-click #(rf/dispatch [:datagrid/toggle-expand id])} "Toon meer"]])

            (when (and
                   (:show-max-num-rows options)
                   @expanded?
                   (> (count @records) (:show-max-num-rows options)))
              [:div.re-datagrid-button-container
               [:button.btn.btn-primary.btn-read-less
                {:on-click #(rf/dispatch [:datagrid/toggle-expand id])} "Toon minder"]])]])))))
