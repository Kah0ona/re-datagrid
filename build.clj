(ns build
  (:require [clojure.tools.build.api :as b]))

(def lib 're-datagrid/re-datagrid) ; 👈 update with your actual group/artifact
(def version (format "1.0.%s" (b/git-count-revs nil))) ; auto version

(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def jar-file (format "target/%s-%s.jar" (name lib) version))

(defn clean [_]
  (b/delete {:path "target"}))

(defn jar [_]
  (clean nil)
  (b/copy-dir {:src-dirs ["src/cljs"]
               :target-dir class-dir})
  (b/write-pom {:class-dir class-dir
                :lib lib
                :version version
                :basis basis
                :src-dirs ["src/cljs"]})
  (b/jar {:class-dir class-dir
          :jar-file jar-file})
  (println "Jar created:" jar-file))

(defn deploy [_]
  (jar nil)
  (b/deploy {:installer :remote
             :sign-releases? true
             :artifact jar-file
             :pom-file (b/pom-path {:class-dir class-dir :lib lib})}))
