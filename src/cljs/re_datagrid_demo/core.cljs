(ns ^:figwheel-hooks re-datagrid-demo.core
  (:require
   [re-datagrid.config :as config]
   [re-datagrid-demo.views :as my-views]
   [re-datagrid-demo.subs]
   [re-datagrid-demo.events]
   [re-datagrid.events]
   [re-datagrid.subs]
   [re-datagrid.views]
   [re-frame.core :as re-frame]
   [reagent.core :as reagent]))

(defn dev-setup []
  (when config/debug?
 ;;   (devtools.core/enable-feature! :sanity-hints)
  ;;  (devtools.core/install!)
    (enable-console-print!)
    (println "dev mode")))

(defn ^:after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [my-views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))

(defn -main
  "Used for figwheel main"
  [args]
  (init))
