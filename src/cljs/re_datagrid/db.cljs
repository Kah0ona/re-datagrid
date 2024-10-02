(ns re-datagrid.db
  (:require [alandipert.storage-atom :refer [local-storage]]))

(def local-db (local-storage (atom {}) :re-datagrid))
