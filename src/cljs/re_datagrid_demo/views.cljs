(ns re-datagrid-demo.views
  (:require [fipp.clojure :refer [pprint]]
            [re-datagrid.views :as datagrid]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [taoensso.timbre :as timbre
             :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                 logf tracef debugf infof warnf errorf fatalf reportf
                                 spy get-env log-env)]))

(def opts
  {:grid-id           :my-grid
   :data-subscription [:data]
   :id-field          :id
   :create-dispatch   [:create]
   :update-dispatch   [:update]
   :delete-dispatch   [:delete]
   })

(def fields
  [{:name :firstname
    :title "Firstname"}
   {:name :surname
    :title "Surname"}])

(defn main-panel
  []
  [:div.container
   [:h1 "Datagrid Demo"]
   [datagrid/datagrid opts fields]])
