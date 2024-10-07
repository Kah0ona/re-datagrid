(ns re-datagrid.events
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [taoensso.timbre :as timbre
             :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                 logf tracef debugf infof warnf errorf fatalf reportf
                                 spy get-env log-env)]
            [re-datagrid.local-db :as local-db]))

(defn get-next-sort-direction
  [c]
  (condp = c
    nil  :asc
    :asc :desc
    :desc :none
    :none :asc))

(defn extend-options-with-defaults
  [options]
  (let [merged (merge
                {:can-edit                    true
                 :can-create                  true
                 :can-delete                  true
                 :delete-are-you-sure-message "De gegevens kunnen niet meer worden teruggehaald."
                 :debug                       false}
                options)]
    ;;  (debug merged)
    merged))


(defn register-scroll-events
  [id]
  ;;whenever there 's a div re-datagrid-read-more-marker IN the viewport
  ;;dispatch the expand max-num-rows variable


  )

(rf/reg-event-db
 :datagrid/initialize
 (fn [db [_ opts fields]]
   (assert (:data-subscription opts)
           "No subscription for records. Please set a :data-subscription re-frame subscribe pattern on init-time.")
   (let [id (:grid-id opts)
         header-filter-expanded? (-> @local-db/db
                                     (get-in  [id :header-filter-expanded?])
                                     boolean)]
     (when (:progressive-loading opts)
       (register-scroll-events id))
     (assoc-in db [:datagrid/data id] {:options                 (extend-options-with-defaults opts)
                                       :fields                  fields
                                       :selected-records        #{}
                                       :are-you-sure-callback   nil
                                       :show-sure?              false
                                       :creating?               false
                                       :create-record           nil
                                       :expanded?               false
                                       :mass-select-check       false
                                       :header-filter-expanded? header-filter-expanded?
                                       :rec-marked-for-deletion nil
                                       :header-filter-values    {}
                                       :edit-rows               {} ;; map of pk -> rec
                                       :sorting                 {:key       (:default-sort-key opts)
                                                                 :direction (when (:default-sort-key opts)
                                                                              (or (:default-sort-direction opts) :asc))}}))))

(rf/reg-event-db
 :datagrid/update-options
 (fn [db [_ grid-id o]]
   (assoc-in db [:datagrid/data grid-id :options] o)))


(rf/reg-event-db
 :datagrid/update-fields
 (fn [db [_ grid-id o]]
   (assoc-in db [:datagrid/data grid-id :fields] o)))

(rf/reg-event-db
 :datagrid/header-filter-expanded?
 (fn [db [_ id expanded?]]
   (let [exp (or expanded? (not (get-in db [:datagrid/data id :header-filter-expanded?])))]
     (swap! local-db/db assoc-in [id :header-filter-expanded?] exp)
     (assoc-in db [:datagrid/data id :header-filter-expanded?] exp))))

(rf/reg-event-fx
 :datagrid/sort-field
 (fn [{db :db} [_ grid-id field-name]]
   (let [nd             (get-next-sort-direction (get-in db [:datagrid/data grid-id :sorting :direction]))
         extra-dispatch (get-in db [:datagrid/data grid-id :options :sort-dispatch])
         extra-dispatch (when extra-dispatch
                          (vec (concat extra-dispatch [field-name nd])))]
     (debug "Sorting" grid-id ", field:" field-name " in direction:" nd)
     (cond-> {:db
              (-> db
                  (assoc-in [:datagrid/data  grid-id :sorting :key] field-name)
                  (update-in [:datagrid/data  grid-id :sorting :direction] get-next-sort-direction))}
       extra-dispatch (assoc :dispatch extra-dispatch)))))

(rf/reg-event-db
 :datagrid/toggle-mass-select
 (fn [db [_ id all-records]]
   (let [id-field (get-in db [:datagrid/data  id :options :id-field])
         checked? (get-in db [:datagrid/data  id :mass-select-check])]
     (-> db
         (update-in [:datagrid/data  id :mass-select-check] not)
         (assoc-in [:datagrid/data  id :selected-records]
                   (if checked? ;;now it won't be
                     #{}
                     (->>
                      all-records
                      (map id-field)
                      set)))))))

(rf/reg-event-db
 :datagrid/toggle-checkbox
 (fn [db [_ id record]]
   (let [id-field    (get-in db [:datagrid/data id :options :id-field])
         callback-fn (get-in db [:datagrid/data id :options :on-selection-change])
         pk          (get record id-field)]
     (update-in db [:datagrid/data  id :selected-records]
                (fn [o pk']
                  (let [n' (if (some #{pk'} o)
                             (disj o pk')
                             (conj o pk'))]
                    (when callback-fn
                      (callback-fn n' record))
                    n'))
                pk))))

(rf/reg-event-db
 :datagrid/create-new-record
 (fn [db [_ id]]
   (let [defaults (get-in db [:datagrid/data  id :options :default-values])]
     (-> db
         ;;put it under 'nil' key in edit-rows
         (assoc-in [:datagrid/data  id :edit-rows nil] (or defaults {}))
         (assoc-in [:datagrid/data  id :creating?] true)))))

(rf/reg-event-db
 :datagrid/update-edited-record
 (fn [db [_ id pk k v]]
   (debug "Updating grid" id ", pk:" pk ", k:" k ",v:" v)
   (assoc-in db [:datagrid/data  id :edit-rows pk k] v)))

;;rec-with-only-grid-fields (if is-update?
 ;;                           (assoc (remove-keys-not-in-gridfields @edit-record fields)
  ;;                                 (:id-field options) (get @edit-record (:id-field options)))
   ;;                         (remove-keys-not-in-gridfields @edit-record fields))
;;rec-with-added-defaults   (if (:default-values options)
 ;;                           (merge (:default-values options) rec-with-only-grid-fields)
  ;;                          rec-with-only-grid-fields)

(rf/reg-event-fx
 :datagrid/save-edited-record
 (fn [{db :db} [_ id pk]]
   (if (nil? pk) ;; it's a create, redispatch
     {:db       db
      :dispatch [:datagrid/save-new-record id]}
     ;;else
     (let [fields          (get-in db [:datagrid/data  id :fields])
           id-field        (get-in db [:datagrid/data  id :options :id-field])
           defaults        (get-in db [:datagrid/data  id :options :default-values])
           update-dispatch (get-in db [:datagrid/data  id :options :update-dispatch])
           keys-from-grid  (map :name fields)
           r               (as-> (get-in db [:datagrid/data  id :edit-rows pk]) r'
                             (select-keys r' keys-from-grid)
                             (assoc r' id-field pk)
                             (merge defaults r'))
           update-dispatch (conj update-dispatch r)]
       {:db       (update-in db [:datagrid/data  id :edit-rows] dissoc pk)
        :dispatch update-dispatch}))))


(rf/reg-event-fx
 :datagrid/save-new-record
 (fn [{db :db} [_ id]]
   (let [edited-record (get-in db [:datagrid/data  id :edit-rows nil])
         dispatch      (-> (get-in db [:datagrid/data  id :options :create-dispatch])
                           (conj edited-record))]
     {:db       (-> db
                    (update-in [:datagrid/data  id :edit-rows] dissoc nil)
                    (assoc-in  [:datagrid/data  id :creating?] false))
      :dispatch dispatch})))

(rf/reg-event-db
 :datagrid/toggle-expand
 (fn [db [_ id]]
   (update-in db [:datagrid/data  id :expanded?] not)))



(rf/reg-event-fx
 :datagrid/start-edit
 (fn [{db :db} [_ id pk record]]
   (let [start-edit-dispatch (get-in db [:datagrid/data id :options :start-edit-dispatch])]
     (merge
      {:db (assoc-in db [:datagrid/data id :edit-rows pk] record)}
      (when start-edit-dispatch
        {:dispatch (conj start-edit-dispatch record)})))))


(rf/reg-event-fx
 :datagrid/reorder
 (fn [{db :db} [_ id direction record]]
   (assert (get-in db [:datagrid/data id :options :reorder-dispatch]) "There is no :reorder-dispatch set in the options!")
   (debug "reorder " id "," direction "," record)
   (let [disp (-> db
                  (get-in [:datagrid/data id :options :reorder-dispatch])
                  (concat [direction record])
                  vec)]
     (debug disp)
     {:db       db
      :dispatch disp})))

(rf/reg-event-db
 :datagrid/show-are-you-sure-popup
 (fn [db [_ id show?]]
   (assoc-in db [:datagrid/data  id :show-sure?] show?)))

(rf/reg-event-fx
 :datagrid/delete-record-maybe
 (fn [{db :db} [_ id record]]
   (let [show? (get-in db [:datagrid/data id :options :delete-are-you-sure-message])]
     (cond-> {:db (-> db
                      (assoc-in [:datagrid/data id :rec-marked-for-deletion] record)
                      (assoc-in [:datagrid/data id :show-sure?] show?))}
       (not show?)
       (assoc :dispatch [:datagrid/delete-record id])))))

(rf/reg-event-fx
 :datagrid/delete-record
 (fn [{db :db} [_ id]]
   (let [delete-dispatch (get-in db [:datagrid/data id :options :delete-dispatch])
         record          (get-in db [:datagrid/data id :rec-marked-for-deletion])]
     (assert record)
     {:db       (-> db
                    (assoc-in [:datagrid/data id :show-sure?] false)
                    (assoc-in [:datagrid/data id :options :rec-marked-for-deletion] nil))
      :dispatch (conj delete-dispatch record)})))

(rf/reg-event-fx
 :datagrid/header-filter-value
 (fn [{db :db} [_ id k v blur?]]
   (let [extra-dispatch (get-in db [:datagrid/data id :options :header-filter-dispatch])
         extra-dispatch (when extra-dispatch
                          (vec (concat extra-dispatch [id k v blur?])))]
     (cond->
         {:db (assoc-in db [:datagrid/data id :header-filter-values k] v)}
       extra-dispatch (assoc :dispatch extra-dispatch)))))
