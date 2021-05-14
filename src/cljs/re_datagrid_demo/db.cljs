(ns re-datagrid-demo.db)

(def default-db
  {:data [{:id 1 :firstname "Mick" :surname "Jagger" :birthdate (js/Date.) :login (js/Date.) :male true}
          {:id 2 :firstname "Keith" :surname "Richards" :birthdate (js/Date.) :login (js/Date.) :male true}
          {:id 3 :firstname "Cher" :surname  nil :birthdate (js/Date.) :login (js/Date.) :male false}
          {:id 4 :firstname "Paul" :surname "McCartney" :birthdate (js/Date.) :login (js/Date.) :male true}
          {:id 5 :firstname "John" :surname "Lennon" :birthdate (js/Date.) :login (js/Date.) :male true}]
   :large-data (mapv
                (fn [i]
                  {:id        i
                   :firstname (str "Name " i)
                   :surname   (str "Surname i")
                   :birthdate (js/Date.)
                   :login     (js/Date.)
                   :male      (odd? i)})
                (range 5000))})
