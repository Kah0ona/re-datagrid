(ns re-datagrid.db
  (:require [alandipert.storage-atom :refer [local-storage]]
            [taoensso.timbre :as timbre
             :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                 logf tracef debugf infof warnf errorf fatalf reportf
                                 spy get-env log-env)]))

(def local-db (local-storage (atom {}) :re-datagrid))
