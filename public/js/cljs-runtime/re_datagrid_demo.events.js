goog.provide('re_datagrid_demo.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return re_datagrid_demo.db.default_db;
}));
re_datagrid_demo.events.last_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),(function (db,p__55326){
var vec__55327 = p__55326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55327,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55327,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_datagrid_demo.events.last_id,cljs.core.inc);

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref(re_datagrid_demo.events.last_id)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete","delete",-1768633620),(function (db,p__55338){
var vec__55339 = p__55338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55339,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55339,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"data","data",-232669377),(function (p1__55333_SHARP_,p2__55330_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (r_SINGLEQUOTE_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r_SINGLEQUOTE_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__55330_SHARP_));
}),p1__55333_SHARP_);
}),r);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-edit","start-edit",2031179152),(function (db,p__55345){
var vec__55346 = p__55345;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55346,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55346,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid-demo.events","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid_demo/events.cljs",38,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["custom start-edit-dispatch effect, record: ",r], null);
}),null)),null,(3),null,null,null);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update","update",1045576396),(function (db,p__55385){
var vec__55386 = p__55385;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55386,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55386,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"data","data",-232669377),(function (p1__55380_SHARP_,p2__55379_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r_SINGLEQUOTE_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__55379_SHARP_))){
return p2__55379_SHARP_;
} else {
return r_SINGLEQUOTE_;
}
}),p1__55380_SHARP_);
}),r);
}));
re_datagrid_demo.events.swap = (function re_datagrid_demo$events$swap(v,i1,i2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,i2,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i1) : v.call(null,i1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i1,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i2) : v.call(null,i2))], 0));
});
re_datagrid_demo.events.index_of = (function re_datagrid_demo$events$index_of(coll,v,pk){
var i = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__55394_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,pk),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55394_SHARP_,pk));
}),coll));
if((((i < cljs.core.count(coll))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,pk),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.last(coll),pk))))){
return i;
} else {
return null;
}
});
re_datagrid_demo.events.move = (function re_datagrid_demo$events$move(db,direction,record){
var i = re_datagrid_demo.events.index_of(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db),record,new cljs.core.Keyword(null,"id","id",-1388402092));
var i2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction))?(i - (1)):(i + (1)));
var n = cljs.core.count(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db));
var data = (((((i2 >= (0))) && ((((i2 < n)) && ((((i >= (0))) && ((i < n))))))))?re_datagrid_demo.events.swap(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db),i,i2):new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"data","data",-232669377),data);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reorder","reorder",-469010802),(function (db,p__55429){
var vec__55430 = p__55429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55430,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55430,(1),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55430,(2),null);
return re_datagrid_demo.events.move(db,direction,record);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),(function (db,p__55435){
var vec__55437 = p__55435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55437,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55437,(1),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55437,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid-demo.events","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid_demo/events.cljs",87,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["custom sort effect, sorting: ",field," direction ",direction], null);
}),null)),null,(4),null,null,null);

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"header-filter-dispatch","header-filter-dispatch",-114997801),(function (db,p__55453){
var vec__55454 = p__55453;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55454,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55454,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55454,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55454,(3),null);
var blur_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55454,(4),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid-demo.events","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid_demo/events.cljs",94,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["custom header-filter-dispatch effect, ",id,k,v,blur_QMARK_], null);
}),null)),null,(6),null,null,null);

return db;
}));

//# sourceMappingURL=re_datagrid_demo.events.js.map
