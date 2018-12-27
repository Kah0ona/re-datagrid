(ns re-datagrid.schema
    (:require [reagent.core :as r]
              [schema.core :as s
               :include-macros true]
              [taoensso.timbre :as timbre
               :refer-macros (log  trace  debug  info  warn  error  fatal  report
                                  logf tracef debugf infof warnf errorf fatalf reportf
                                  spy get-env log-env)]))

; ================ Prismatic Schema for various input maps ================ ;
(def GridRecord
 "A grid row, or record."
  s/Any)

(def GridValue
 "Raw value of a grid"
  s/Any)

(def LoadingMessage s/Str)


(def DataArrivedFunction
  (s/make-fn-schema
    s/Any ;returns anything
    [[[GridRecord]]])) ; should take a list of grid records

(def DataFetchErrorFunction
  (s/make-fn-schema
    s/Any ;returns anything
    [[s/Str]])) ; takes an error message

(def GridConfiguration
  "A schema for the top-level configuration of the grid"
  {(s/optional-key :debug)                       s/Bool
   (s/optional-key :title)                       s/Str
   :grid-id                                      s/Keyword
   ;; datapath in the db
   (s/optional-key :data-path)                   [s/Keyword]
   ;; callback that should return a class name to be added to the tr belonging to the passed in record
   (s/optional-key :row-formatter)               s/Any
   ;;if set to like 3, it shows 3 rows. There will be a button added to expand the table to show all.
   (s/optional-key :show-max-num-rows)           s/Int
   (s/optional-key :can-edit)                    s/Bool
   (s/optional-key :can-edit-fn)                 s/Any
   (s/optional-key :can-create)                  s/Bool
   (s/optional-key :can-delete)                  s/Bool
   (s/optional-key :default-sort-key)            s/Keyword
   (s/optional-key :default-sort-direction)      s/Keyword
   (s/optional-key :can-reorder)                 s/Bool
   (s/optional-key :can-reorder-fn-up)           s/Any
   (s/optional-key :can-reorder-fn-down)         s/Any
   (s/optional-key :on-record-click)             s/Any
   (s/optional-key :can-sort)                    s/Bool
   (s/optional-key :header-filters)              s/Bool
   ;;a subscription that returns true if data is still loading, or false/nil if it doesn't
   (s/optional-key :loading-subscription)        s/Any
   ;; handler to implement reordering.
   ;; NOTE: it's the handler's responsibility to do actual reordering, ie. swap records around!
   ;; TODO: make a macro in the crud handlers that automatically generates this handler
   (s/optional-key :reorder-dispatch)            s/Any
   ;; this dispatch is called when the user clicks on a sort header.
   ;; If you want to do extra side-effects, ie. fetch server data, you can do that here.
   ;; It gets passed in field-name (ie. the key being sorted) and the new sort-direction
   (s/optional-key :sort-dispatch)               s/Any
   (s/optional-key :hide-heading)                s/Bool
   (s/optional-key :delete-are-you-sure-message) s/Str
   (s/optional-key :delete-are-you-sure-title)   s/Str
   (s/optional-key :yes-text)                    s/Str
   (s/optional-key :no-text)                     s/Str
   (s/optional-key :no-records-text)             s/Any
   ;;callback that provides row grained control wether to show a delete button.
   ;;takes a record as input, should return true/false
   (s/optional-key :can-delete-fn)               s/Any
   :id-field                                     s/Keyword
   (s/optional-key :default-values)              s/Any
   ;;which url to PUT data to upon saving?
   ;;which url to POST data to upon saving?
   (s/optional-key :checkbox-select)             s/Bool
   (s/optional-key :on-selection-change)         s/Any
   ;;callback fn that gets set of all selected records as argumentlist
   :data-subscription                            s/Any
   (s/optional-key :create-dispatch)             s/Any
   (s/optional-key :update-dispatch)             s/Any
   (s/optional-key :delete-dispatch)             s/Any
   (s/optional-key :additional-css-class-names)  s/Str ; additional css-class-names to be applied to the <table> tag.
   })

(def GridField
  "A schema for grid field configuration"
  {:name                                          s/Keyword
   :title                                         s/Any
   ;;list of validators, a validator should return [true nil] if valid
   ;;and [false "some error msg] if invalid
   ;;the first validator to fail will return
   (s/optional-key :on-click)                     s/Any
   (s/optional-key :footer-cell)                  s/Any
   (s/optional-key :validators)                   s/Any
   (s/optional-key :align)                        s/Any
   (s/optional-key :custom-element-renderer)      s/Any
   (s/optional-key :custom-element-edit-renderer) s/Any
   ;;click callback which gets passed in a record that was being clicked
   (s/optional-key :custom-element-click)         s/Any
   (s/optional-key :width)                        s/Num
   (s/optional-key :placeholder)                  s/Any
   (s/optional-key :hide-header-filter)           s/Bool
   (s/optional-key :type)                         s/Any
   (s/optional-key :can-sort)                     s/Any
   (s/optional-key :sort-value-fn)                s/Any ; uses this as the sort-by argument, should be a fn like: (fn [val rec] ...)
   (s/optional-key :formatter)                    (s/make-fn-schema ; should be a function
                                                   s/Str ; should return a string
                                        ; Input should conform as below.
                                        ; (we have one vector in the vector here,
                                        ; because the function is not multi-arity,
                                        ; then it would need a vector to match for each arity, ie. [[..][..][..]])
                                                   [[{GridValue GridRecord}]])
   ;;for a future feature for exporting the current grid as it's displaying now, we want to allow this.
   ;;we'll base it on SheetJS cljsjs package: https://github.com/cljsjs/packages/tree/master/xlsx
   (s/optional-key :excel-formatter)              s/Any
   })
