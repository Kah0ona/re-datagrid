(defproject re-datagrid "2.0.0"
  :description "A datagrid component for re-frame apps, with sorting, editing, etc."
  :url "https://github.com/Kah0ona/re-datagrid.git"
  :dependencies [[thheller/shadow-cljs "2.28.23"]
                 [org.clojure/clojure "1.12.0"]
                 [reagent/reagent "1.3.0"]
                 [org.clojure/clojurescript "1.12.38"]
                 [com.taoensso/timbre "6.7.0"]
                 [prismatic/schema "1.4.1"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [re-frame/re-frame "1.4.3"]
                 [alandipert/storage-atom "2.0.1"]]

  :repositories
  {"clojars" {:url "https://clojars.org/repo"
              :sign-releases false}}

  :license
  {:name "Eclipse Public License"
   :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :source-paths ["src/cljs"]

  )
