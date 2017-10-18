(ns re-datagrid.subs
  (:require [re-frame.core :as rf]
            [taoensso.timbre :as timbre
             :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                 logf tracef debugf infof warnf errorf fatalf reportf
                                 spy get-env log-env)]
            [reagent.core :as r]))

(defn sensible-sort
  [k r]
  (let [v (get r k)]
    (cond
      (nil? v)    v
      (number? v) v
      (string? v) (clojure.string/lower-case v)
      :otherwise v)))


(defn sort-records
  [records fields k direction]
  (if (or (nil? k) (= :none direction))
    ;no sorting to be done, return records untouched.
    records
    (let [dir-fn (if (= :asc direction) identity reverse)
          fmt-key (keyword (str (name k) "-formatted"))
          field (first (filter #(= (:name %) k) fields))]
      (if-let [formatter (->> fields
                        (filter #(= (:name %) k))
                        first
                        :formatter)]
        (dir-fn (sort-by
                  ;sort formatted value of each record. Note: there is performance boost to be had though,
                  ;because now upon rendering the formatters will be re-applied, potentially doing double the work
                 (if (:sort-value-fn field)
                   fmt-key
                   (partial sensible-sort fmt-key))
                 (map (fn [rec]
                        (let [formatted-value (if (:sort-value-fn field) ;field has a custom sort value fn, to use for sorting
                                                ((:sort-value-fn field) (get rec k) rec)
                                                (formatter (get rec k) rec))]
                                        ;each record will get a ...-formatted key, which will be used to sort
                          (assoc rec fmt-key formatted-value))) records)))
        ;no formatter in the field detected, normal sort on the original key 'k'
        (dir-fn (sort-by
                  (if (:sort-value-fn field)  ;field has a custom sort value fn, to use for sorting
                    #(do
;;                       (debug %)
                       ((:sort-value-fn field) (get % k) %)) ; wrap in lambda because sort-value-fn takes [val rec]
                    (partial sensible-sort k))
                  records))))))
(rf/reg-sub
 :datagrid/all
 (fn [db [_ id]]
   (get-in db [:datagrid/data id])))

(rf/reg-sub
 :datagrid/initialized?
 (fn [db [_ id]]
   (let [options (get-in db [:datagrid/data id :options])]
     (and
      (not (nil? options))
      (not (empty? options))))))

(rf/reg-sub
 :datagrid/data-subscription
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :options :data-subscription])))

(rf/reg-sub
 :datagrid/records
 (fn [[_ subscription-path] _]
   (assert subscription-path "make sure subscription-path is set")
   (rf/subscribe subscription-path))
 (fn [records _]
   (debug (count records) "records were found")
   records))

(rf/reg-sub
 :datagrid/fields
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :fields])))

(rf/reg-sub
 :datagrid/options
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :options])))

(rf/reg-sub
 :datagrid/sorting
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :sorting])))

(rf/reg-sub
 :datagrid/sorted-records
 (fn [[_ id data-sub] _]
   [(rf/subscribe [:datagrid/options id])
    (rf/subscribe [:datagrid/records data-sub])
    (rf/subscribe [:datagrid/expanded? id])
    (rf/subscribe [:datagrid/sorting id])
    (rf/subscribe [:datagrid/fields id])])
 (fn [[options records expanded? sorting fields] _]
   (debug records)
   (let [rs (if (and (:key sorting)
                     (:direction sorting))
              (sort-records records fields (:key sorting) (:direction sorting))
              records)
         n (:show-max-num-rows options)]
     (if (and n (not expanded?))
       (take n rs)
       rs))))

(rf/reg-sub
 :datagrid/mass-select-checked?
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :mass-select-check])))

(rf/reg-sub
 :datagrid/primary-key
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :options :id-field])))

(rf/reg-sub
 :datagrid/creating?
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :creating?])))

(rf/reg-sub
 :datagrid/editing?
 (fn [[_ id] _]
   (rf/subscribe [:datagrid/edit-rows id]))
 (fn [edit-rows]
   (debug edit-rows)
   (not (empty? edit-rows))))

(rf/reg-sub
 :datagrid/editing-record?
 (fn [[_ id _] _]
   [(rf/subscribe [:datagrid/options id])
    (rf/subscribe [:datagrid/edit-rows id])])
 (fn [[options edit-rows] [_ id record]]
   (let [pk     (:id-field options)
         rec-id (get record pk)]
     (get edit-rows rec-id))))

(rf/reg-sub
 :datagrid/edited-record-by-pk
 (fn [db [_ id pk]]
   (get-in db [:datagrid/data id :edit-rows pk])))

(rf/reg-sub
 :datagrid/selected-record-pks-internal
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :selected-records])))

(rf/reg-sub
 :datagrid/selected-record-pks
 (fn [[_ id data-sub]]
   (assert data-sub)
   [(rf/subscribe [:datagrid/selected-record-pks-internal id])
    (rf/subscribe [:datagrid/primary-key id])
    (rf/subscribe [:datagrid/sorted-records id data-sub])])
 (fn [pks pk-key records]
   (let [s (->> records (map pk-key) set)]
     (filter #(some #{%} s) pks))))

(rf/reg-sub
 :datagrid/selected-records
 (fn [[_ id data-sub] _]
   (assert data-sub)
   [(rf/subscribe [:datagrid/selected-record-pks-internal id])
    (rf/subscribe [:datagrid/primary-key id])
    (rf/subscribe [:datagrid/sorted-records id data-sub])])
 (fn [[pks pk-key records] _]
   (debug pks pk-key records)
   (filter #(some #{(get % pk-key)} pks)
           records)))

(rf/reg-sub
 :datagrid/record-selected?
 (fn [[_ id _]]
   [(rf/subscribe [:datagrid/primary-key id])
    ;;TODO this might need selected-record-pks id
    (rf/subscribe [:datagrid/selected-record-pks-internal id])])
 (fn [[pk selected-pks] [_ id record]]
   (some #{(get record pk)} selected-pks)))

(rf/reg-sub
 :datagrid/expanded?
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :expanded?])))

(rf/reg-sub
 :datagrid/edit-rows
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :edit-rows])))

(rf/reg-sub
 :datagrid/show-sure?
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :show-sure?])))
