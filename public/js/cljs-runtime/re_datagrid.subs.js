goog.provide('re_datagrid.subs');
re_datagrid.subs.sensible_sort = (function re_datagrid$subs$sensible_sort(k,r){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,k);
if((v == null)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if(typeof v === 'string'){
return clojure.string.lower_case(v);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
}
});
/**
 * Assumes a `:<k>-formatted` key exists in each record for k
 */
re_datagrid.subs.sort_records = (function re_datagrid$subs$sort_records(records,fields,k,direction){
if((((k == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),direction)))){
return records;
} else {
var dir_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asc","asc",356854569),direction))?cljs.core.identity:cljs.core.reverse);
var fmt_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(k),"-formatted"].join(''));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55331_SHARP_),k);
}),fields));
var sort_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"sort-value-fn","sort-value-fn",-1113308331).cljs$core$IFn$_invoke$arity$1(field))?(function (p1__55332_SHARP_){
var G__55343 = (function (){var or__5025__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55332_SHARP_,k));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55332_SHARP_,fmt_key));
}
})();
var G__55344 = p1__55332_SHARP_;
var fexpr__55342 = new cljs.core.Keyword(null,"sort-value-fn","sort-value-fn",-1113308331).cljs$core$IFn$_invoke$arity$1(field);
return (fexpr__55342.cljs$core$IFn$_invoke$arity$2 ? fexpr__55342.cljs$core$IFn$_invoke$arity$2(G__55343,G__55344) : fexpr__55342.call(null,G__55343,G__55344));
}):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_datagrid.subs.sensible_sort,fmt_key));
var G__55350 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_fn,records);
return (dir_fn.cljs$core$IFn$_invoke$arity$1 ? dir_fn.cljs$core$IFn$_invoke$arity$1(G__55350) : dir_fn.call(null,G__55350));
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","all","datagrid/all",-616944674),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55351){
var vec__55352 = p__55351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55352,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55352,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","initialized?","datagrid/initialized?",1248819818),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55355){
var vec__55356 = p__55355;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55356,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55356,(1),null);
var options = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489)], null));
return (((!((options == null)))) && ((!(cljs.core.empty_QMARK_(options)))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","data-subscription","datagrid/data-subscription",-1875932422),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55363){
var vec__55364 = p__55363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55364,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55364,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"data-subscription","data-subscription",692319594)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","records","datagrid/records",1673214848),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55367,_){
var vec__55368 = p__55367;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55368,(0),null);
var subscription_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55368,(1),null);
if(cljs.core.truth_(subscription_path)){
} else {
throw (new Error(["Assert failed: ","make sure subscription-path is set","\n","subscription-path"].join('')));
}

return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(subscription_path);
}),(function (records,_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid.subs","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid/subs.cljs",60,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(records),"records were found"], null);
}),null)),null,(2),null,null,null);

return records;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55381){
var vec__55382 = p__55381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55382,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55382,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55389){
var vec__55390 = p__55389;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55390,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55390,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","sorting","datagrid/sorting",-945141110),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55393){
var vec__55395 = p__55393;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55395,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55395,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"sorting","sorting",622249690)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","header-filter-expanded?","datagrid/header-filter-expanded?",560104957),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55398){
var vec__55399 = p__55398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55399,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55399,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"header-filter-expanded?","header-filter-expanded?",-1932577683)], null));
})], 0));
re_datagrid.subs.is_match_QMARK_ = (function re_datagrid$subs$is_match_QMARK_(s,q){
var s__$1 = ((typeof s === 'string')?s:cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if((q == null)){
return true;
} else {
if(cljs.core.empty_QMARK_(q)){
return true;
} else {
if((((s__$1 == null)) && ((!((q == null)))))){
return false;
} else {
return clojure.string.includes_QMARK_(clojure.string.lower_case(s__$1),clojure.string.lower_case(q));

}
}
}
});
re_datagrid.subs.field_matches_QMARK_ = (function re_datagrid$subs$field_matches_QMARK_(record,fields,acc,p__55425){
var vec__55426 = p__55425;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55426,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55426,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(record,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(field),"-formatted"].join('')));
var field__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([field]),new cljs.core.Keyword(null,"name","name",1843675177)),fields));
var and__5023__auto__ = acc;
if(cljs.core.truth_(and__5023__auto__)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"custom-filter-fn","custom-filter-fn",-2783263).cljs$core$IFn$_invoke$arity$1(field__$1))){
var fexpr__55440 = new cljs.core.Keyword(null,"custom-filter-fn","custom-filter-fn",-2783263).cljs$core$IFn$_invoke$arity$1(field__$1);
return (fexpr__55440.cljs$core$IFn$_invoke$arity$3 ? fexpr__55440.cljs$core$IFn$_invoke$arity$3(v,query,record) : fexpr__55440.call(null,v,query,record));
} else {
return re_datagrid.subs.is_match_QMARK_(v,query);
}
} else {
return and__5023__auto__;
}
});
re_datagrid.subs.record_matches_filters_QMARK_ = (function re_datagrid$subs$record_matches_filters_QMARK_(filters,fields,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_datagrid.subs.field_matches_QMARK_,r,fields),true,filters);
});
re_datagrid.subs.filter_by_header_filters = (function re_datagrid$subs$filter_by_header_filters(records,filters,fields){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_datagrid.subs.record_matches_filters_QMARK_,filters,fields),records);
});
if((typeof re_datagrid !== 'undefined') && (typeof re_datagrid.subs !== 'undefined') && (typeof re_datagrid.subs.default_formatter !== 'undefined')){
} else {
re_datagrid.subs.default_formatter = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55457 = cljs.core.get_global_hierarchy;
return (fexpr__55457.cljs$core$IFn$_invoke$arity$0 ? fexpr__55457.cljs$core$IFn$_invoke$arity$0() : fexpr__55457.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-datagrid.subs","default-formatter"),(function (p__55458){
var map__55459 = p__55458;
var map__55459__$1 = cljs.core.__destructure_map(map__55459);
var field = map__55459__$1;
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55459__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__5025__auto__ = t;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
re_datagrid.subs.default_formatter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.identity;
}));
re_datagrid.subs.default_formatter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"yesno","yesno",53679186),(function (_){
return (function (v,r){
if(cljs.core.truth_(v)){
return "ja";
} else {
return "nee";
}
});
}));
/**
 * Applies formatters under <keyname>-formatted key
 */
re_datagrid.subs.apply_formatters = (function re_datagrid$subs$apply_formatters(fields,record){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (rec,p__55477){
var map__55481 = p__55477;
var map__55481__$1 = cljs.core.__destructure_map(map__55481);
var field = map__55481__$1;
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"formatter","formatter",-483008823));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var fmt__$1 = (function (){var or__5025__auto__ = fmt;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return re_datagrid.subs.default_formatter.cljs$core$IFn$_invoke$arity$1(field);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rec,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(k),"-formatted"].join('')),(function (){var G__55486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(record,k);
var G__55487 = record;
return (fmt__$1.cljs$core$IFn$_invoke$arity$2 ? fmt__$1.cljs$core$IFn$_invoke$arity$2(G__55486,G__55487) : fmt__$1.call(null,G__55486,G__55487));
})());
}),record,fields);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","formatted-records","datagrid/formatted-records",-458226943),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55488,_){
var vec__55489 = p__55488;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55489,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55489,(1),null);
var data_sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55489,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","records","datagrid/records",1673214848),data_sub], null))], null);
}),(function (p__55498){
var vec__55499 = p__55498;
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55499,(0),null);
var records = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55499,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_datagrid.subs.apply_formatters,fields),records);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","sorted-records","datagrid/sorted-records",-1473405693),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55502,_){
var vec__55503 = p__55502;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55503,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55503,(1),null);
var data_sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55503,(2),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","formatted-records","datagrid/formatted-records",-458226943),id,data_sub], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","expanded?","datagrid/expanded?",122106104),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorting","datagrid/sorting",-945141110),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-values","datagrid/header-filter-values",-665580320),id], null))], null);
}),(function (p__55506,_){
var vec__55507 = p__55506;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55507,(0),null);
var formatted_records = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55507,(1),null);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55507,(2),null);
var sorting = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55507,(3),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55507,(4),null);
var filters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55507,(5),null);
var rs = (cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sorting);
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sorting);
} else {
return and__5023__auto__;
}
})())?re_datagrid.subs.sort_records(formatted_records,fields,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(sorting),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sorting)):formatted_records);
var rs__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header-filters","header-filters",1589451948).cljs$core$IFn$_invoke$arity$1(options))?re_datagrid.subs.filter_by_header_filters(rs,filters,fields):rs);
var n = new cljs.core.Keyword(null,"show-max-num-rows","show-max-num-rows",-268482446).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_((function (){var and__5023__auto__ = n;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(expanded_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,rs__$1);
} else {
return rs__$1;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","mass-select-checked?","datagrid/mass-select-checked?",-1377306351),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55532){
var vec__55533 = p__55532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55533,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55533,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"mass-select-check","mass-select-check",1625566489)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","primary-key","datagrid/primary-key",-869897235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55536){
var vec__55537 = p__55536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55537,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55537,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"id-field","id-field",86199450)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","creating?","datagrid/creating?",1676380630),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55540){
var vec__55541 = p__55540;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55541,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55541,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"creating?","creating?",1447232454)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","editing?","datagrid/editing?",-163628176),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55544,_){
var vec__55545 = p__55544;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55545,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55545,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","edit-rows","datagrid/edit-rows",-934791667),id], null));
}),(function (edit_rows){
return (!(cljs.core.empty_QMARK_(edit_rows)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","editing-record?","datagrid/editing-record?",-774675884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55548,_){
var vec__55549 = p__55548;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55549,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55549,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55549,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","edit-rows","datagrid/edit-rows",-934791667),id], null))], null);
}),(function (p__55552,p__55553){
var vec__55554 = p__55552;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55554,(0),null);
var edit_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55554,(1),null);
var vec__55557 = p__55553;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55557,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55557,(1),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55557,(2),null);
var pk = new cljs.core.Keyword(null,"id-field","id-field",86199450).cljs$core$IFn$_invoke$arity$1(options);
var rec_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(record,pk);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edit_rows,rec_id);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","edited-record-by-pk","datagrid/edited-record-by-pk",-840717120),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55560){
var vec__55561 = p__55560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55561,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55561,(1),null);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55561,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917),pk], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","selected-record-pks-internal","datagrid/selected-record-pks-internal",264964944),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55564){
var vec__55565 = p__55564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55565,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55565,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"selected-records","selected-records",599012925)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","selected-record-pks","datagrid/selected-record-pks",-1031906076),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55569){
var vec__55570 = p__55569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55570,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55570,(1),null);
var data_sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55570,(2),null);
if(cljs.core.truth_(data_sub)){
} else {
throw (new Error("Assert failed: data-sub"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","selected-record-pks-internal","datagrid/selected-record-pks-internal",264964944),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","primary-key","datagrid/primary-key",-869897235),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorted-records","datagrid/sorted-records",-1473405693),id,data_sub], null))], null);
}),(function (pks,pk_key,records){
var s = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(pk_key,records));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55568_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p1__55568_SHARP_]),s);
}),pks);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","selected-records","datagrid/selected-records",-770797491),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55591,_){
var vec__55592 = p__55591;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55592,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55592,(1),null);
var data_sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55592,(2),null);
if(cljs.core.truth_(data_sub)){
} else {
throw (new Error("Assert failed: data-sub"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","selected-record-pks-internal","datagrid/selected-record-pks-internal",264964944),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","primary-key","datagrid/primary-key",-869897235),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorted-records","datagrid/sorted-records",-1473405693),id,data_sub], null))], null);
}),(function (p__55597,_){
var vec__55602 = p__55597;
var pks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55602,(0),null);
var pk_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55602,(1),null);
var records = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55602,(2),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55590_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__55590_SHARP_,pk_key)]),pks);
}),records);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","record-selected?","datagrid/record-selected?",-707935261),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55605){
var vec__55606 = p__55605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55606,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55606,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55606,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","primary-key","datagrid/primary-key",-869897235),id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","selected-record-pks-internal","datagrid/selected-record-pks-internal",264964944),id], null))], null);
}),(function (p__55609,p__55610){
var vec__55611 = p__55609;
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55611,(0),null);
var selected_pks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55611,(1),null);
var vec__55614 = p__55610;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55614,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55614,(1),null);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55614,(2),null);
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.get.cljs$core$IFn$_invoke$arity$2(record,pk)]),selected_pks);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","expanded?","datagrid/expanded?",122106104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55617){
var vec__55618 = p__55617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55618,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55618,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","edit-rows","datagrid/edit-rows",-934791667),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55622){
var vec__55623 = p__55622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55623,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55623,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"edit-rows","edit-rows",2074321917)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","show-sure?","datagrid/show-sure?",-483615106),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55626){
var vec__55627 = p__55626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55627,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55627,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"show-sure?","show-sure?",-1646187378)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","header-filter-values","datagrid/header-filter-values",-665580320),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55630){
var vec__55631 = p__55630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55631,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55631,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"header-filter-values","header-filter-values",1306493840)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__55634){
var vec__55635 = p__55634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55635,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55635,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55635,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","data","datagrid/data",1788228943),id,new cljs.core.Keyword(null,"header-filter-values","header-filter-values",1306493840),k], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","always-false","datagrid/always-false",-1991988272),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return false;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("datagrid","loading?","datagrid/loading?",1547849145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__55638){
var vec__55639 = p__55638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55639,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55639,(1),null);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = sub;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","always-false","datagrid/always-false",-1991988272)], null);
}
})());
}),(function (v){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"re-datagrid.subs","file:/Users/marten/Sites/clojure/re-datagrid/src/cljs/re_datagrid/subs.cljs",289,4,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}),null)),null,(10),null,null,null);

return v;
})], 0));

//# sourceMappingURL=re_datagrid.subs.js.map
