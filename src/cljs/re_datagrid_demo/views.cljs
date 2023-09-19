(ns re-datagrid-demo.views
  (:require [fipp.clojure :refer [pprint]]
            [re-datagrid.views :as datagrid]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [taoensso.timbre :as timbre
             :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                 logf tracef debugf infof warnf errorf fatalf reportf
                                 spy get-env log-env)]))

(defn my-partitioner
  [row-idx row all-rows]
  (str "every-" (mod row-idx 3)))

(def opts
  {:grid-id                    :my-grid
   :data-subscription          [:large-data]
   :id-field                   :id
   :header-filters             true
   :progressive-loading        true
   :can-sort                   true
   :can-edit                   true
   :can-reorder                true
   :checkbox-select            true
   :partition-fn my-partitioner
   :show-max-num-rows          3
   :loading-subscription       [:my-loading]
   :sort-dispatch              [:sort]
   :header-filter-dispatch     [:header-filter-dispatch]
   :reorder-dispatch           [:reorder]
   :extra-header-row           [:tr
                                [:th
                                 {:col-span 6}
                                 "Extra custom header row"]]
   :create-dispatch            [:create]
   :start-edit-dispatch        [:start-edit]
   :update-dispatch            [:update]
   :delete-dispatch            [:delete]
   :additional-css-class-names "table-striped table-sm"})

(def fields
  [{:name     :id
    :can-sort true
    :title    "ID"
    :type     :number}
   {:name      :firstname
    :can-sort  true
    :custom-filter-fn (fn [v q r]
                        ;; TODO add custom filter logic
                        true
                        )
    :formatter (fn [v r]
                 [:b v])
    :title     "Firstname"}
   {:name  :surname
    :type :no-edit
    :title "Surname"}
   {:name  :birthdate
    :type  :date
    :title "Birthdate"}
   {:name  :login
    :type  :date-time
    :title "Logged in at"}
   {:name  :male
    :type  :yesno
    :title "Male?"}])
;;max_allowed_packet
;22.324.930
;16.777.216
(defn main-panel
  []
  [:div.container
   [:h1 "Datagrid Demo"]
   [datagrid/datagrid opts fields]])
