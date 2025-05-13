(ns re-datagrid-demo.core
  (:require
   [re-datagrid.config :as config]
   [re-datagrid-demo.views :as my-views]
   [re-datagrid-demo.subs]
   [re-datagrid-demo.events]
   [re-datagrid.events]
   [re-datagrid.subs]
   [re-datagrid.views]
   [re-frame.core :as re-frame]
   [reagent.dom :as rdom]
   [reagent.core :as reagent]))

(defonce root (atom nil))

(defn dev-setup []
  (when config/debug?
 ;;   (devtools.core/enable-feature! :sanity-hints)
  ;;  (devtools.core/install!)
    (enable-console-print!)
    (println "dev mode")))

(defn ^:dev/after-load
  mount-root []
  (re-frame/clear-subscription-cache!)
  (let [container (.getElementById js/document "app")]
    (rdom/render  [my-views/main-panel] container)))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))


(defn -main
  ""
  [args]
  (init))
