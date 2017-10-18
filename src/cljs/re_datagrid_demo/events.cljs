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
