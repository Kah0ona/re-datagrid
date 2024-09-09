(defproject re-datagrid "0.2.16"
  :description "A datagrid component for re-frame apps, with sorting, editing, etc."
  :url "https://github.com/Kah0ona/re-datagrid.git"
  :license {:name "MIT"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [reagent "0.8.1"]
                 [re-frame-utils "0.1.0"]
                 [com.taoensso/timbre "4.10.0"]
                 [prismatic/schema "1.1.6"]
                 [fipp "0.6.10"] ;;pretty printer cljs
                 [com.andrewmcveigh/cljs-time "0.5.1"] ;date/time
                 [re-frame "0.10.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj" "src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target" "test/js"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

  :aliases {"dev"   ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "build" ["do" "clean"
                     ["cljsbuild" "once" "min"]]}

  :profiles
  {:dev
   {:dependencies [[figwheel-sidecar "0.5.16"]
                   [cider/piggieback "0.3.6"]
                   [org.clojure/tools.nrepl "0.2.13"]
                   [com.bhauman/figwheel-main "0.2.0"]
                   [com.bhauman/rebel-readline-cljs "0.1.4"]]

    :plugins [[lein-figwheel "0.5.13"]
              [lein-doo "0.1.8"]
              [lein-pdo "0.1.1"]]}}

  :cljsbuild
  {:builds
   [{:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            re-datagrid.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :pseudo-names    false
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}

    {:id           "test"
     :source-paths ["src/cljs" "test/cljs"]
     :compiler     {:main          re-datagrid.runner
                    :output-to     "resources/public/js/compiled/test.js"
                    :output-dir    "resources/public/js/compiled/test/out"
                    :optimizations :none}}]})
