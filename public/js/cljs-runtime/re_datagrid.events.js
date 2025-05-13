goog.provide('re_datagrid.events');
re_datagrid.events.get_next_sort_direction = (function re_datagrid$events$get_next_sort_direction(c){
var pred__55323 = cljs.core._EQ_;
var expr__55324 = c;
if(cljs.core.truth_((pred__55323.cljs$core$IFn$_invoke$arity$2 ? pred__55323.cljs$core$IFn$_invoke$arity$2(null,expr__55324) : pred__55323.call(null,null,expr__55324)))){
return new cljs.core.Keyword(null,"asc","asc",356854569);
} else {
if(cljs.core.truth_((pred__55323.cljs$core$IFn$_invoke$arity$2 ? pred__55323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asc","asc",356854569),expr__55324) : pred__55323.call(null,new cljs.core.Keyword(null,"asc","asc",356854569),expr__55324)))){
return new cljs.core.Keyword(null,"desc","desc",2093485764);
} else {
if(cljs.core.truth_((pred__55323.cljs$core$IFn$_invoke$arity$2 ? pred__55323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),expr__55324) : pred__55323.call(null,new cljs.core.Keyword(null,"desc","desc",2093485764),expr__55324)))){
return new cljs.core.Keyword(null,"none","none",1333468478);
} else {
if(cljs.core.truth_((pred__55323.cljs$core$IFn$_invoke$arity$2 ? pred__55323.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),expr__55324) : pred__55323.call(null,new cljs.core.Keyword(null,"none","none",1333468478),expr__55324)))){
return new cljs.core.Keyword(null,"asc","asc",356854569);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__55324)].join('')));
}
}
}
}
});
re_datagrid.events.extend_options_with_defaults = (function re_datagrid$events$extend_options_with_defaults(options){
var merged = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"can-edit","can-edit",442089902),true,new cljs.core.Keyword(null,"can-create","can-create",1924761963),true,new cljs.core.Keyword(null,"can-delete","can-delete",1620748590),true,new cljs.core.Keyword(null,"delete-are-you-sure-message","delete-are-you-sure-message",-716234461),"De gegevens kunnen niet meer worden teruggehaald.",new cljs.core.Keyword(null,"debug","debug",-1608172596),false], null),options], 0));
return merged;
});
re_datagrid.events.register_scroll_events = (function re_datagrid$events$register_scroll_events(id){
return null;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","initialize","datagrid/initialize",-1147761023),(function (db,p__55334){
var vec__55335 = p__55334;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55335,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55335,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55335,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"data-subscription","data-subscription",692319594).cljs$core$IFn$_invoke$arity$1(opts))){
} else {
throw (new Error(["Assert failed: ","No subscription for records. Please set a :data-subscription re-frame subscribe pattern on init-time.","\n","(:data-subscription opts)"].join('')));
}

var id = new cljs.core.Keyword(null,"grid-id","grid-id",1007140206).cljs$core$IFn$_invoke$arity$1(opts);
var header_filter_expanded_QMARK_ = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_datagrid.local_db.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"header-filter-expanded?","header-filter-expanded?",-1932577683)], null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"progressive-loading","progressive-loading",-1510379081).cljs$core$IFn$_invoke$arity$1(opts))){
re_datagrid.events.register_scroll_events(id);
} else {
}

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"are-you-sure-callback","are-you-sure-callback",1082464645),new cljs.core.Keyword(null,"creating?","creating?",1447232454),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"header-filter-expanded?","header-filter-expanded?",-1932577683),new cljs.core.Keyword(null,"show-sure?","show-sure?",-1646187378),new cljs.core.Keyword(null,"rec-marked-for-deletion","rec-marked-for-deletion",-243334962),new cljs.core.Keyword(null,"header-filter-values","header-filter-values",1306493840),new cljs.core.Keyword(null,"create-record","create-record",1184607928),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"mass-select-check","mass-select-check",1625566489),new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"selected-records","selected-records",599012925),new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917)],[null,false,false,fields,header_filter_expanded_QMARK_,false,null,cljs.core.PersistentArrayMap.EMPTY,null,re_datagrid.events.extend_options_with_defaults(opts),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"default-sort-key","default-sort-key",-1124858347).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"direction","direction",-633359395),(cljs.core.truth_(new cljs.core.Keyword(null,"default-sort-key","default-sort-key",-1124858347).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"default-sort-direction","default-sort-direction",1473683846).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"asc","asc",356854569);
}
})():null)], null),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","update-options","datagrid/update-options",-620511477),(function (db,p__55402){
var vec__55403 = p__55402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55403,(0),null);
var grid_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55403,(1),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55403,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),grid_id,new cljs.core.Keyword(null,"options","options",99638489)], null),o);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","update-fields","datagrid/update-fields",1706846468),(function (db,p__55407){
var vec__55408 = p__55407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55408,(0),null);
var grid_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55408,(1),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55408,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),grid_id,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),o);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","header-filter-expanded?","datagrid/header-filter-expanded?",560104957),(function (db,p__55411){
var vec__55422 = p__55411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55422,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55422,(1),null);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55422,(2),null);
var exp = (function (){var or__5025__auto__ = expanded_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"header-filter-expanded?","header-filter-expanded?",-1932577683)], null)));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_datagrid.local_db.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"header-filter-expanded?","header-filter-expanded?",-1932577683)], null),exp);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"header-filter-expanded?","header-filter-expanded?",-1932577683)], null),exp);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","sort-field","datagrid/sort-field",1933012559),(function (p__55433,p__55434){
var map__55436 = p__55433;
var map__55436__$1 = cljs.core.__destructure_map(map__55436);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55436__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55442 = p__55434;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55442,(0),null);
var grid_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55442,(1),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55442,(2),null);
var nd = re_datagrid.events.get_next_sort_direction(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),grid_id,new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"direction","direction",-633359395)], null)));
var extra_dispatch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),grid_id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"sort-dispatch","sort-dispatch",1190032583)], null));
var extra_dispatch__$1 = (cljs.core.truth_(extra_dispatch)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(extra_dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_name,nd], null))):null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid.events","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid/events.cljs",92,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sorting",grid_id,", field:",field_name," in direction:",nd], null);
}),null)),null,(5),null,null,null);

var G__55461 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),grid_id,new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"key","key",-1516042587)], null),field_name),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),grid_id,new cljs.core.Keyword(null,"sorting","sorting",622249690),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),re_datagrid.events.get_next_sort_direction)], null);
if(cljs.core.truth_(extra_dispatch__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55461,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),extra_dispatch__$1);
} else {
return G__55461;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","toggle-mass-select","datagrid/toggle-mass-select",-207918624),(function (db,p__55464){
var vec__55465 = p__55464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55465,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55465,(1),null);
var all_records = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55465,(2),null);
var id_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"id-field","id-field",86199450)], null));
var checked_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"mass-select-check","mass-select-check",1625566489)], null));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"mass-select-check","mass-select-check",1625566489)], null),cljs.core.not),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"selected-records","selected-records",599012925)], null),(cljs.core.truth_(checked_QMARK_)?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_field,all_records))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","toggle-checkbox","datagrid/toggle-checkbox",2059551576),(function (db,p__55471){
var vec__55472 = p__55471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55472,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55472,(1),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55472,(2),null);
var id_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"id-field","id-field",86199450)], null));
var callback_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910)], null));
var pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(record,id_field);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"selected-records","selected-records",599012925)], null),(function (o,pk_SINGLEQUOTE_){
var n_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([pk_SINGLEQUOTE_]),o))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(o,pk_SINGLEQUOTE_):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,pk_SINGLEQUOTE_));
if(cljs.core.truth_(callback_fn)){
(callback_fn.cljs$core$IFn$_invoke$arity$2 ? callback_fn.cljs$core$IFn$_invoke$arity$2(n_SINGLEQUOTE_,record) : callback_fn.call(null,n_SINGLEQUOTE_,record));
} else {
}

return n_SINGLEQUOTE_;
}),pk);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","create-new-record","datagrid/create-new-record",-1609351004),(function (db,p__55476){
var vec__55478 = p__55476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55478,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55478,(1),null);
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"default-values","default-values",1480201073)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917),null], null),(function (){var or__5025__auto__ = defaults;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"creating?","creating?",1447232454)], null),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","update-edited-record","datagrid/update-edited-record",216180815),(function (db,p__55482){
var vec__55483 = p__55482;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55483,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55483,(1),null);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55483,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55483,(3),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55483,(4),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid.events","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid/events.cljs",142,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Updating grid",id,", pk:",pk,", k:",k,",v:",v], null);
}),null)),null,(7),null,null,null);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917),pk,k], null),v);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","save-edited-record","datagrid/save-edited-record",348207309),(function (p__55492,p__55493){
var map__55494 = p__55492;
var map__55494__$1 = cljs.core.__destructure_map(map__55494);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55494__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55495 = p__55493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55495,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55495,(1),null);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55495,(2),null);
if((pk == null)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","save-new-record","datagrid/save-new-record",2096785490),id], null)], null);
} else {
var fields = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));
var id_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"id-field","id-field",86199450)], null));
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"default-values","default-values",1480201073)], null));
var update_dispatch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"update-dispatch","update-dispatch",848880184)], null));
var keys_from_grid = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),fields);
var r = (function (){var r_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917),pk], null));
var r_SINGLEQUOTE___$1 = cljs.core.select_keys(r_SINGLEQUOTE_,keys_from_grid);
var r_SINGLEQUOTE___$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r_SINGLEQUOTE___$1,id_field,pk);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,r_SINGLEQUOTE___$2], 0));
})();
var update_dispatch__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(update_dispatch,r);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917)], null),cljs.core.dissoc,pk),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),update_dispatch__$1], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","save-new-record","datagrid/save-new-record",2096785490),(function (p__55510,p__55511){
var map__55512 = p__55510;
var map__55512__$1 = cljs.core.__destructure_map(map__55512);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55512__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55513 = p__55511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55513,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55513,(1),null);
var edited_record = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917),null], null));
var dispatch = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"create-dispatch","create-dispatch",-1027443640)], null)),edited_record);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917)], null),cljs.core.dissoc,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"creating?","creating?",1447232454)], null),false),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","toggle-expand","datagrid/toggle-expand",2018058685),(function (db,p__55516){
var vec__55517 = p__55516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55517,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55517,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),cljs.core.not);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","start-edit","datagrid/start-edit",-538630432),(function (p__55520,p__55521){
var map__55522 = p__55520;
var map__55522__$1 = cljs.core.__destructure_map(map__55522);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55522__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55523 = p__55521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55523,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55523,(1),null);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55523,(2),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55523,(3),null);
var start_edit_dispatch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"start-edit-dispatch","start-edit-dispatch",1356970228)], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917),pk], null),record)], null),(cljs.core.truth_(start_edit_dispatch)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start_edit_dispatch,record)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","reorder","datagrid/reorder",-1662582658),(function (p__55526,p__55527){
var map__55528 = p__55526;
var map__55528__$1 = cljs.core.__destructure_map(map__55528);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55528__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55529 = p__55527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55529,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55529,(1),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55529,(2),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55529,(3),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"reorder-dispatch","reorder-dispatch",182397050)], null)))){
} else {
throw (new Error(["Assert failed: ","There is no :reorder-dispatch set in the options!","\n","(get-in db [:datagrid/data id :options :reorder-dispatch])"].join('')));
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid.events","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid/events.cljs",206,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reorder ",id,",",direction,",",record], null);
}),null)),null,(8),null,null,null);

var disp = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"reorder-dispatch","reorder-dispatch",182397050)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [direction,record], null)));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid.events","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid/events.cljs",211,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [disp], null);
}),null)),null,(9),null,null,null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),disp], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","show-are-you-sure-popup","datagrid/show-are-you-sure-popup",238147764),(function (db,p__55573){
var vec__55574 = p__55573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55574,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55574,(1),null);
var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55574,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"show-sure?","show-sure?",-1646187378)], null),show_QMARK_);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","delete-record-maybe","datagrid/delete-record-maybe",1616274395),(function (p__55577,p__55578){
var map__55579 = p__55577;
var map__55579__$1 = cljs.core.__destructure_map(map__55579);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55579__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55580 = p__55578;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55580,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55580,(1),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55580,(2),null);
var show_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"delete-are-you-sure-message","delete-are-you-sure-message",-716234461)], null));
var G__55583 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"rec-marked-for-deletion","rec-marked-for-deletion",-243334962)], null),record),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"show-sure?","show-sure?",-1646187378)], null),show_QMARK_)], null);
if(cljs.core.not(show_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55583,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","delete-record","datagrid/delete-record",-1411044479),id], null));
} else {
return G__55583;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","delete-record","datagrid/delete-record",-1411044479),(function (p__55584,p__55585){
var map__55586 = p__55584;
var map__55586__$1 = cljs.core.__destructure_map(map__55586);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55586__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55587 = p__55585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55587,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55587,(1),null);
var delete_dispatch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"delete-dispatch","delete-dispatch",-1270026897)], null));
var record = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"rec-marked-for-deletion","rec-marked-for-deletion",-243334962)], null));
if(cljs.core.truth_(record)){
} else {
throw (new Error("Assert failed: record"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"show-sure?","show-sure?",-1646187378)], null),false),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"rec-marked-for-deletion","rec-marked-for-deletion",-243334962)], null),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(delete_dispatch,record)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),(function (p__55595,p__55596){
var map__55598 = p__55595;
var map__55598__$1 = cljs.core.__destructure_map(map__55598);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55598__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55599 = p__55596;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55599,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55599,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55599,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55599,(3),null);
var blur_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55599,(4),null);
var extra_dispatch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"header-filter-dispatch","header-filter-dispatch",-114997801)], null));
var extra_dispatch__$1 = (cljs.core.truth_(extra_dispatch)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(extra_dispatch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k,v,blur_QMARK_], null))):null);
var G__55621 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"header-filter-values","header-filter-values",1306493840),k], null),v)], null);
if(cljs.core.truth_(extra_dispatch__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55621,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),extra_dispatch__$1);
} else {
return G__55621;
}
}));

//# sourceMappingURL=re_datagrid.events.js.map
