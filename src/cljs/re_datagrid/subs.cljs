(ns re-datagrid.subs
  (:require [re-frame.core :as rf]
            [taoensso.timbre :as timbre
             :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                 logf tracef debugf infof warnf errorf fatalf reportf
                                 spy get-env log-env)]
            [reagent.core :as r]
            [cljs-time.coerce :as coerce]
            [cljs-time.format :as fmt]))

;;TODO make this a dynamic var that can be set
(def time-formatter (fmt/formatter "dd-MM-yyyy HH:mm"))
(def date-formatter (fmt/formatter "dd-MM-yyyy"))

(defn sensible-sort
  [k r]
  (let [v (get r k)]
    (cond
      (nil? v)    v
      (number? v) v
      (string? v) (clojure.string/lower-case v)
      :otherwise v)))


(defn sort-records
  "Assumes a `:<k>-formatted` key exists in each record for k"
  [records fields k direction]
  (if (or (nil? k) (= :none direction))
    ;no sorting to be done, return records untouched.
    records
    (let [dir-fn  (if (= :asc direction) identity reverse)
          fmt-key (keyword (str (name k) "-formatted"))
          field   (first (filter #(= (:name %) k) fields))
          sort-fn (if (:sort-value-fn field)
                    #((:sort-value-fn field) (or (get % k) (get % fmt-key)) %)
                    (partial sensible-sort fmt-key))]
      (->> records
           (sort-by sort-fn)
           dir-fn))))

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

(defn is-match?
  [s q]
  (let [s (if (string? s) s (str s))]
    (cond
      (nil? q) true
      (empty? q) true

      (and
       (nil? s)
       (not (nil? q))) false

      :otherwise
      (clojure.string/includes?
       (clojure.string/lower-case s)
       (clojure.string/lower-case q)))))

(defn field-matches?
  [record acc [field query]]
  (let [v (get record (-> field name (str "-formatted") keyword))]
    (and acc (is-match? v query))))

(defn record-matches-filters?
  [filters r]
  (reduce (partial field-matches? r)
          true filters))

(defn filter-by-header-filters
  [records filters]
  (filter (partial record-matches-filters? filters)
          records))

(defmulti default-formatter (fn [{t :type :as field}]
                              (or t :default)))

(defmethod default-formatter :default
  [_]
  identity)

(defmethod default-formatter :yesno
  [_]
  (fn [v r]
    (if v "ja" "nee")))

(defmethod default-formatter :date
  [_]
  (fn [v r]
    (if v
      (let [v (coerce/from-date v)]
        (fmt/unparse date-formatter v))
      "")))

(defmethod default-formatter :date-time
  [_]
  (fn [v r]
    (if v
      (let [v (coerce/from-date v)]
        (fmt/unparse time-formatter v))
      "")))

(defn apply-formatters
  "Applies formatters under <keyname>-formatted key"
  [fields record]
  (reduce
   (fn [rec
        {fmt :formatter
         k   :name
         :as field}]
     ;;add formatted value
     (let [fmt (or fmt (default-formatter field))]
       (assoc rec (keyword (str (name k) "-formatted"))
              (fmt (get record k) record))))
   record
   fields))

(rf/reg-sub
 ;;formats records according to the formatter
 :datagrid/formatted-records
 (fn [[_ id data-sub] _]
   [(rf/subscribe [:datagrid/fields id])
    (rf/subscribe [:datagrid/records data-sub])])
 (fn [[fields records]]
   (debug fields)
   (map (partial apply-formatters fields) records)))

(rf/reg-sub
 :datagrid/sorted-records
 (fn [[_ id data-sub] _]
   [(rf/subscribe [:datagrid/options id])
    (rf/subscribe [:datagrid/formatted-records id data-sub])
    (rf/subscribe [:datagrid/expanded? id])
    (rf/subscribe [:datagrid/sorting id])
    (rf/subscribe [:datagrid/fields id])
    (rf/subscribe [:datagrid/header-filter-values id])])
 (fn [[options formatted-records expanded? sorting fields filters] _]
   (let [rs (if (and (:key sorting)
                     (:direction sorting))
              (sort-records formatted-records fields (:key sorting) (:direction sorting))
              formatted-records)
         rs (if (:header-filters options)
              (filter-by-header-filters rs filters)
              rs)
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

(rf/reg-sub
 :datagrid/header-filter-values
 (fn [db [_ id]]
   (get-in db [:datagrid/data id :header-filter-values])))

(rf/reg-sub
 :datagrid/header-filter-value
 (fn [db [_ id k]]
   (get-in db [:datagrid/data id :header-filter-values k])))
