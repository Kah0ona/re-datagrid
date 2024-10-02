(ns re-datagrid.local-db
  (:require [alandipert.storage-atom :refer [local-storage]]))

(def db (local-storage (atom {}) :re-datagrid))
