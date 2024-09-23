# re-datagrid

[![Clojars Project](https://img.shields.io/clojars/v/re-datagrid.svg)](https://clojars.org/re-datagrid)

A re-frame datagrid component that is configurable with fields, etc. It is based/depends on re-frame.
It has various configuration options, but the main usage is:

```clojure
(use '[re-datagrid.views :refer [datagrid]])
(def opts
 {:grid-id :my-id
  ;;Each record should have a primary key, which is unique.
  ;;Doesn't have to be rendered/present in `field` vector
  :id-field :key-that-is-the-primary-key

  ;;should return a list of maps, where (some) keys correspond to the value for :name in the `fields` array.
  :data-subscription [:my-re-frame-data-subscription]
  ;; other options...
  })
(def fields
[{:name :my-field
  :title "My column"}
  {:name :my-field-2
  :title "My column 2"}])
[datagrid opts fields]
```

It features:
- Sorting
- Filtering
- Checkbox select rows
- CRUD operations (and in-line editing)
- Various config options for CRUD operations
- Configuration over cell formatting
- Extensible field (column) types through multi-methods

See the available options for `opts` and `fields` in the `re-datagrid.schema` namespace.
Also, see the `re-datagrid-demo.views` namespace for example usage.

Field types are extensible via multi-methods, but the basic one is already pretty flexible:

Basic field:
```clojure
{:name :my-field :title "Header title"}
```

Add a formatter:
```clojure
{:name  :my-field
 :title "Header title"
 :formatter (fn [value record]
             ;;return a string for the value in the cell
            )}
```

## Run demo application / development mode:

The demo uses figwheel-main

From Emacs/CIDER
```
cider-jack-in-clj&cljs
```
When the prompt comes, type `dev`.

From Tools CLI:
```
clojure -m figwheel.main -b dev -r
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3447/figwheel.html](http://localhost:3447/figwheel.html).

## Release a new version
To release a new version:

```
clojure -A:release --patch # patch, minor, major
```
