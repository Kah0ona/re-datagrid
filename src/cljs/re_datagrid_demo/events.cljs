(ns re-datagrid-demo.events
  (:require [re-datagrid-demo.db :as db]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [taoensso.timbre :as timbre
             :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                 logf tracef debugf infof warnf errorf fatalf reportf
                                 spy get-env log-env)]))

(rf/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))


(def last-id (r/atom 100))

(rf/reg-event-db
 :create
 (fn [db [_ r]]
   (swap! last-id inc)
   (update db :data conj
           (assoc r :id @last-id))))

(rf/reg-event-db
 :delete
 (fn [db [_ r]]
   (update db
           :data
           #(remove
             (fn [r'] (= (:id r') (:id %2)))
             %1)
           r)))

(rf/reg-event-db
 :start-edit
 (fn [db [_ r]]
   (debug "custom start-edit-dispatch effect, record: " r)
   db))

(rf/reg-event-db
 :update
 (fn [db [_ r]]
   (update db
           :data
           #(map
             (fn [r']
               (if (= (:id r') (:id %2))
                 %2
                 r'))
             %1)
           r)))

(defn swap [v i1 i2]
  (assoc v i2 (v i1) i1 (v i2)))


(defn index-of [coll v pk]
  (let [i (count (take-while #(not= (get v pk) (get % pk)) coll))]
    (when (or (< i (count coll))
              (= (get v pk) (get (last coll) pk)))
      i)))

(defn move
  [db direction record]
  (let [i (index-of (:data db) record :id)
        i2 (if (= :up direction)
             (dec i)
             (inc i))
        n (count (:data db))
        data (if (and (>= i2 0) (< i2 n)
                      (>= i 0) (< i n))
               (swap (:data db) i i2)
               (:data db))]
    (assoc db :data data)))

(rf/reg-event-db
 :reorder
 (fn [db [_ direction record]]
   (move db direction record)))



(rf/reg-event-db
 :sort
 (fn [db [_ field direction]]
   (debug "custom sort effect, sorting: " field " direction " direction)
   db))


(rf/reg-event-db
 :header-filter-dispatch
 (fn [db [_ id k v blur?]]
   (debug "custom header-filter-dispatch effect, " id k v blur?)
   db))
