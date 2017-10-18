(ns re-datagrid.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [re-datagrid.core-test]))

(doo-tests 're-datagrid.core-test)
