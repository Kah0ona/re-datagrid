goog.provide('re_datagrid.views');
/**
 * Returns a function that applies args to function 'f' with debounce 'interval' milliseconds.
 *   Usefull for dispatching events: `((debounced rf/dispatch) [:dispatch/event])`
 */
re_datagrid.views.debounced = (function re_datagrid$views$debounced(var_args){
var G__55643 = arguments.length;
switch (G__55643) {
case 0:
return re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$2(re_frame.core.dispatch,(500));
}));

(re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$2(f,(500));
}));

(re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$2 = (function (f,interval){
var f__$1 = ((cljs.core.ifn_QMARK_(f))?f:re_frame.core.dispatch);
var interval__$1 = ((cljs.core.pos_int_QMARK_(interval))?interval:(500));
var debouncer = (new goog.async.Debouncer(f__$1,interval__$1));
return (function() { 
var re_datagrid$views$debounced_STAR___delegate = function (args){
return debouncer.fire.apply(debouncer,cljs.core.to_array(args));
};
var re_datagrid$views$debounced_STAR_ = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55739__i = 0, G__55739__a = new Array(arguments.length -  0);
while (G__55739__i < G__55739__a.length) {G__55739__a[G__55739__i] = arguments[G__55739__i + 0]; ++G__55739__i;}
  args = new cljs.core.IndexedSeq(G__55739__a,0,null);
} 
return re_datagrid$views$debounced_STAR___delegate.call(this,args);};
re_datagrid$views$debounced_STAR_.cljs$lang$maxFixedArity = 0;
re_datagrid$views$debounced_STAR_.cljs$lang$applyTo = (function (arglist__55740){
var args = cljs.core.seq(arglist__55740);
return re_datagrid$views$debounced_STAR___delegate(args);
});
re_datagrid$views$debounced_STAR_.cljs$core$IFn$_invoke$arity$variadic = re_datagrid$views$debounced_STAR___delegate;
return re_datagrid$views$debounced_STAR_;
})()
;
}));

(re_datagrid.views.debounced.cljs$lang$maxFixedArity = 2);

re_datagrid.views.debounced_dispatch = re_datagrid.views.debounced.cljs$core$IFn$_invoke$arity$0();
re_datagrid.views.clean_formatted_keys = (function re_datagrid$views$clean_formatted_keys(r){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55644){
var vec__55645 = p__55644;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55645,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55645,(1),null);
return clojure.string.ends_with_QMARK_(cljs.core.name(k),"-formatted");
}),r));
});
re_datagrid.views.is_checked_QMARK_ = (function re_datagrid$views$is_checked_QMARK_(pkey,record,selected_records){
var rs = cljs.core.keys(cljs.core.group_by(pkey,selected_records));
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([(pkey.cljs$core$IFn$_invoke$arity$1 ? pkey.cljs$core$IFn$_invoke$arity$1(record) : pkey.call(null,record))]),rs);
});
re_datagrid.views.cell_select_checkbox = (function re_datagrid$views$cell_select_checkbox(id,record){
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
var record_selected_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","record-selected?","datagrid/record-selected?",-707935261),id,record], null));
return (function (id__$1,record__$1){
var pkey = new cljs.core.Keyword(null,"id-field","id-field",86199450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.check","td.check",-546708063),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["checkbox_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(record__$1,pkey))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkbox","div.checkbox",389009838),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.deref(record_selected_QMARK_))?true:false),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","toggle-checkbox","datagrid/toggle-checkbox",2059551576),id__$1,record__$1], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.input-helper","i.input-helper",141784907)], null)], null)], null)], null);
});
});
re_datagrid.views.are_you_sure_modal = (function re_datagrid$views$are_you_sure_modal(id){
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
return (function (id__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sweet-overlay.are-you-sure","div.sweet-overlay.are-you-sure",-672303508),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sweet-alert.showSweetAlert.visible","div.sweet-alert.showSweetAlert.visible",1647356004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.warning.pulseWarning","div.icon.warning.pulseWarning",-1294941639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.body.pulseWarningIns","span.body.pulseWarningIns",1753090962)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dot.pulseWarningIns","span.dot.pulseWarningIns",-544108461)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"delete-are-you-sure-title","delete-are-you-sure-title",1011290498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead.text-muted","p.lead.text-muted",-1960521452),new cljs.core.Keyword(null,"delete-are-you-sure-message","delete-are-you-sure-message",-716234461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.cancel.btn-lg.btn-default","button.btn.cancel.btn-lg.btn-default",-486645850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","show-are-you-sure-popup","datagrid/show-are-you-sure-popup",238147764),id__$1,false], null));
})], null),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"no-text","no-text",-18093061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Nee";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.confirm.btn-warning","button.btn.btn-lg.confirm.btn-warning",-723017789),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","delete-record","datagrid/delete-record",-1411044479),id__$1], null));
})], null),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"yes-text","yes-text",337752378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Ja";
}
})()], null)], null)], null)], null);
});
});
re_datagrid.views.create_button = (function re_datagrid$views$create_button(id){
return (function (id__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-primary.waves-effect.waves-circle.waves-float","button.btn.btn-xs.btn-primary.waves-effect.waves-circle.waves-float",-474920284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","create-new-record","datagrid/create-new-record",-1609351004),id__$1], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-plus","i.zmdi.zmdi-plus",1663963764)], null)], null);
});
});
re_datagrid.views.save_cell_button = (function re_datagrid$views$save_cell_button(id,pk){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.commands","td.commands",726346454),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"SAVECELLBUTTON",new cljs.core.Keyword(null,"className","className",-1983287057),"save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.bgm-teal.waves-effect.waves-circle.waves-float","button.btn.btn-xs.bgm-teal.waves-effect.waves-circle.waves-float",-964968948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","save-edited-record","datagrid/save-edited-record",348207309),id,pk], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-check","i.zmdi.zmdi-check",-148570353)], null)], null)], null);
});
re_datagrid.views.delete_cell_button = (function re_datagrid$views$delete_cell_button(id,record){
return (function (id__$1,record__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"DELETE",new cljs.core.Keyword(null,"className","className",-1983287057),"delete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-danger.waves-effect.waves-circle.waves-float","button.btn.btn-xs.btn-danger.waves-effect.waves-circle.waves-float",-1398627836),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","delete-record-maybe","datagrid/delete-record-maybe",1616274395),id__$1,record__$1], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-close","i.zmdi.zmdi-close",1663309273)], null)], null)], null);
});
});
re_datagrid.views.reorder_cell_button_up = (function re_datagrid$views$reorder_cell_button_up(callback){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"REORDER",new cljs.core.Keyword(null,"className","className",-1983287057),"reorder reorder-up"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.bgm-gray.waves-effect.waves-circle.waves-float","button.btn.btn-xs.bgm-gray.waves-effect.waves-circle.waves-float",-1911916997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),callback], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-long-arrow-up","i.zmdi.zmdi-long-arrow-up",1006494584)], null)], null)], null);
});
re_datagrid.views.reorder_cell_button_down = (function re_datagrid$views$reorder_cell_button_down(callback){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"REORDER",new cljs.core.Keyword(null,"className","className",-1983287057),"reorder reorder-down"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.bgm-gray.waves-effect.waves-circle.waves-float","button.btn.btn-xs.bgm-gray.waves-effect.waves-circle.waves-float",-1911916997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),callback], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-long-arrow-down","i.zmdi.zmdi-long-arrow-down",-1907110225)], null)], null)], null);
});
/**
 * Starts editing the row
 */
re_datagrid.views.edit_cell_button = (function re_datagrid$views$edit_cell_button(id,pk,record){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"EDITING",new cljs.core.Keyword(null,"className","className",-1983287057),"edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-info.waves-effect.waves-circle.waves-float","button.btn.btn-xs.btn-info.waves-effect.waves-circle.waves-float",1414783715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","start-edit","datagrid/start-edit",-538630432),id,pk,re_datagrid.views.clean_formatted_keys(record)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-edit","i.zmdi.zmdi-edit",-1454471844)], null)], null)], null);
});
if((typeof re_datagrid !== 'undefined') && (typeof re_datagrid.views !== 'undefined') && (typeof re_datagrid.views.table_header_filter !== 'undefined')){
} else {
re_datagrid.views.table_header_filter = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55648 = cljs.core.get_global_hierarchy;
return (fexpr__55648.cljs$core$IFn$_invoke$arity$0 ? fexpr__55648.cljs$core$IFn$_invoke$arity$0() : fexpr__55648.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-datagrid.views","table-header-filter"),(function (id,field){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
re_datagrid.views.table_header_filter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (id,p__55650){
var map__55651 = p__55650;
var map__55651__$1 = cljs.core.__destructure_map(map__55651);
var field = map__55651__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var v = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),id,name], null));
var lv = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v));
return (function (id__$1,p__55652){
var map__55653 = p__55652;
var map__55653__$1 = cljs.core.__destructure_map(map__55653);
var field__$1 = map__55653__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-header-filter.m-b-10","div.table-header-filter.m-b-10",1799090983),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = cljs.core.deref(lv);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55649_SHARP_){
cljs.core.reset_BANG_(lv,p1__55649_SHARP_.target.value);

var G__55654 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),id__$1,name__$1,cljs.core.deref(lv)], null);
return (re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1 ? re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1(G__55654) : re_datagrid.views.debounced_dispatch.call(null,G__55654));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
var G__55655 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),id__$1,name__$1,cljs.core.deref(lv),true], null);
return (re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1 ? re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1(G__55655) : re_datagrid.views.debounced_dispatch.call(null,G__55655));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null);
});
}));
re_datagrid.views.table_header_filter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"number","number",1570378438),(function (id,p__55657){
var map__55658 = p__55657;
var map__55658__$1 = cljs.core.__destructure_map(map__55658);
var field = map__55658__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var v = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),id,name], null));
var lv = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v));
return (function (id__$1,p__55659){
var map__55660 = p__55659;
var map__55660__$1 = cljs.core.__destructure_map(map__55660);
var field__$1 = map__55660__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-header-filter.m-b-10","div.table-header-filter.m-b-10",1799090983),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = cljs.core.deref(lv);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55656_SHARP_){
cljs.core.reset_BANG_(lv,p1__55656_SHARP_.target.value);

var G__55661 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),id__$1,name__$1,cljs.core.deref(lv)], null);
return (re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1 ? re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1(G__55661) : re_datagrid.views.debounced_dispatch.call(null,G__55661));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
var G__55662 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-value","datagrid/header-filter-value",372752142),id__$1,name__$1,cljs.core.deref(lv),true], null);
return (re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1 ? re_datagrid.views.debounced_dispatch.cljs$core$IFn$_invoke$arity$1(G__55662) : re_datagrid.views.debounced_dispatch.call(null,G__55662));
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null);
});
}));
re_datagrid.views.table_header_cell = (function re_datagrid$views$table_header_cell(id,p__55663){
var map__55664 = p__55663;
var map__55664__$1 = cljs.core.__destructure_map(map__55664);
var field = map__55664__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55664__$1,new cljs.core.Keyword(null,"title","title",636505583));
var align = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55664__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55664__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var can_sort = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55664__$1,new cljs.core.Keyword(null,"can-sort","can-sort",1966742797));
var hide_header_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55664__$1,new cljs.core.Keyword(null,"hide-header-filter","hide-header-filter",1780452045));
var custom_header_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55664__$1,new cljs.core.Keyword(null,"custom-header-filter","custom-header-filter",1152657330));
var align__$1 = ((cljs.core.not(align))?new cljs.core.Keyword(null,"text-left","text-left",-1347161610):align);
var atts = (function (){var G__55665 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),align__$1,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field))], null);
if(cljs.core.truth_(width)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55665,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null));
} else {
return G__55665;
}
})();
var header_filter_expanded_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-expanded?","datagrid/header-filter-expanded?",560104957),id], null));
var sorting = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorting","datagrid/sorting",-945141110),id], null));
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
return (function (id__$1,p__55666){
var map__55667 = p__55666;
var map__55667__$1 = cljs.core.__destructure_map(map__55667);
var field__$1 = map__55667__$1;
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55667__$1,new cljs.core.Keyword(null,"title","title",636505583));
var align__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55667__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55667__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var can_sort__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55667__$1,new cljs.core.Keyword(null,"can-sort","can-sort",1966742797));
var sort_by_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sorting));
var sort_direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sorting));
var can_sort_global_QMARK_ = new cljs.core.Keyword(null,"can-sort","can-sort",1966742797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
var header_filter_expanded_QMARK___$1 = cljs.core.deref(header_filter_expanded_QMARK_);
var header_filters_QMARK_ = new cljs.core.Keyword(null,"header-filters","header-filters",1589451948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),atts,(cljs.core.truth_((function (){var and__5023__auto__ = can_sort_global_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,can_sort__$1);
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.column-header-anchor","a.column-header-anchor",-757553265),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text.m-r-5","span.text.m-r-5",-609039677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sort-field","datagrid/sort-field",1933012559),id__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1)], null));
})], null),title__$1], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),sort_by_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-caret-up","i.zmdi.zmdi-caret-up",-1537923190)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),sort_by_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"desc","desc",2093485764)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-caret-down","i.zmdi.zmdi-caret-down",521440024)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"height","height",1025178622),"5px"], null)], null)], null)
))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text.m-r-5","span.text.m-r-5",-609039677),title__$1], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),sort_by_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-caret-up","i.zmdi.zmdi-caret-up",-1537923190)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),sort_by_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"desc","desc",2093485764)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-caret-down","i.zmdi.zmdi-caret-down",521440024)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"height","height",1025178622),"5px"], null)], null)], null)
))], null)),(cljs.core.truth_((function (){var and__5023__auto__ = header_filters_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = header_filter_expanded_QMARK___$1;
if(cljs.core.truth_(and__5023__auto____$1)){
return (((((hide_header_filter == null)) || (cljs.core.not(hide_header_filter)))) && (cljs.core.not(custom_header_filter)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.table_header_filter,id__$1,field__$1], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = header_filters_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = header_filter_expanded_QMARK___$1;
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = (((hide_header_filter == null)) || (cljs.core.not(hide_header_filter)));
if(and__5023__auto____$2){
return custom_header_filter;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(custom_header_filter.cljs$core$IFn$_invoke$arity$2 ? custom_header_filter.cljs$core$IFn$_invoke$arity$2(id__$1,field__$1) : custom_header_filter.call(null,id__$1,field__$1)):null),(cljs.core.truth_((function (){var and__5023__auto__ = header_filters_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = header_filter_expanded_QMARK___$1;
if(cljs.core.truth_(and__5023__auto____$1)){
return hide_header_filter;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.m-b-10","div.m-b-10",-1495053788),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"35px"], null)], null)," "], null):null)], null);
});
});
re_datagrid.views.mass_select = (function re_datagrid$views$mass_select(id,data_sub){
var visible_records = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorted-records","datagrid/sorted-records",-1473405693),id,data_sub], null));
var checked_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","mass-select-checked?","datagrid/mass-select-checked?",-1377306351),id], null));
return (function (id__$1,data_sub__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkbox","div.checkbox",389009838),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.deref(checked_QMARK_))?true:false),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","toggle-mass-select","datagrid/toggle-mass-select",-207918624),id__$1,cljs.core.deref(visible_records)], null));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.input-helper","i.input-helper",141784907)], null)], null)], null);
});
});
re_datagrid.views.header_filter_toggle = (function re_datagrid$views$header_filter_toggle(id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-default.waves-effect.waves-circle.waves-float","button.btn.btn-xs.btn-default.waves-effect.waves-circle.waves-float",-231680501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","header-filter-expanded?","datagrid/header-filter-expanded?",560104957),id], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-search","i.zmdi.zmdi-search",-628330641)], null)], null);
});
re_datagrid.views.table_header = (function re_datagrid$views$table_header(id,data_sub){
var fields = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),id], null));
var sorting = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorting","datagrid/sorting",-945141110),id], null));
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
var selected_records = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","selected-record-pks","datagrid/selected-record-pks",-1031906076),id,data_sub], null));
return (function (id__$1,data_sub__$1){
var cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.table_header_cell,id__$1,f], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null));
}),cljs.core.deref(fields));
var cells__$1 = (function (){var G__55668 = cells;
if(cljs.core.truth_(new cljs.core.Keyword(null,"checkbox-select","checkbox-select",-1482968664).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.check","th.check",321992776),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"check"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.mass_select,id__$1,data_sub__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"check"], null))], null),G__55668);
} else {
return G__55668;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"head"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"extra-header-row","extra-header-row",-104137703).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?new cljs.core.Keyword(null,"extra-header-row","extra-header-row",-104137703).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"hide-heading","hide-heading",1411475970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(cljs.core.truth_(new cljs.core.Keyword(null,"can-create","can-create",1924761963).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cells__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.commands","th.commands",-1097299881),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.commands-inner","div.commands-inner",-115268226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.create_button,id__$1], null),(cljs.core.truth_(new cljs.core.Keyword(null,"header-filters","header-filters",1589451948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.header_filter_toggle,id__$1], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmds"], null))], null)):(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"header-filters","header-filters",1589451948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"can-delete","can-delete",1620748590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cells__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.commands","th.commands",-1097299881),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.commands-inner","div.commands-inner",-115268226),(cljs.core.truth_(new cljs.core.Keyword(null,"header-filters","header-filters",1589451948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.header_filter_toggle,id__$1], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"cmds2"], null))], null)):cells__$1
))], null))], null);
});
});
if((typeof re_datagrid !== 'undefined') && (typeof re_datagrid.views !== 'undefined') && (typeof re_datagrid.views.edit_cell !== 'undefined')){
} else {
re_datagrid.views.edit_cell = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55669 = cljs.core.get_global_hierarchy;
return (fexpr__55669.cljs$core$IFn$_invoke$arity$0 ? fexpr__55669.cljs$core$IFn$_invoke$arity$0() : fexpr__55669.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-datagrid.views","edit-cell"),(function (_,p__55670,___$1){
var map__55671 = p__55670;
var map__55671__$1 = cljs.core.__destructure_map(map__55671);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55671__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__5025__auto__ = t;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"string","string",-1989541586);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
re_datagrid.views.edit_cell.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"number","number",1570378438),(function (id,field,pk){
var r = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","edited-record-by-pk","datagrid/edited-record-by-pk",-840717120),id,pk], null));
return (function (id__$1,field__$1,pk__$1){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(r),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),new cljs.core.Keyword(null,"className","className",-1983287057),"editing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fg-line","div.fg-line",572290800),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55672_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","update-edited-record","datagrid/update-edited-record",216180815),id__$1,pk__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),p1__55672_SHARP_.target.value], null));
})], null)], null)], null)], null);
});
}));
re_datagrid.views.edit_cell.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"custom","custom",340151948),(function (id,field,pk){
var r = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","edited-record-by-pk","datagrid/edited-record-by-pk",-840717120),id,pk], null));
return (function (id__$1,field__$1,pk__$1){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(r),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),new cljs.core.Keyword(null,"className","className",-1983287057),"editing"], null),(function (){var G__55675 = field__$1;
var G__55676 = cljs.core.deref(r);
var G__55677 = (function (p1__55673_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","update-edited-record","datagrid/update-edited-record",216180815),id__$1,pk__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),p1__55673_SHARP_], null));
});
var G__55678 = v;
var fexpr__55674 = new cljs.core.Keyword(null,"custom-element-edit-renderer","custom-element-edit-renderer",-2035811759).cljs$core$IFn$_invoke$arity$1(field__$1);
return (fexpr__55674.cljs$core$IFn$_invoke$arity$4 ? fexpr__55674.cljs$core$IFn$_invoke$arity$4(G__55675,G__55676,G__55677,G__55678) : fexpr__55674.call(null,G__55675,G__55676,G__55677,G__55678));
})()], null);
});
}));
re_datagrid.views.edit_cell.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"yesno","yesno",53679186),(function (id,field,pk){
var r = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","edited-record-by-pk","datagrid/edited-record-by-pk",-840717120),id,pk], null));
return (function (id__$1,field__$1,pk__$1){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(r),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),new cljs.core.Keyword(null,"className","className",-1983287057),"editing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fg-line","div.fg-line",572290800),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select","div.select",1512138448),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(v)?"true":"false"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55679_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","update-edited-record","datagrid/update-edited-record",216180815),id__$1,pk__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__55679_SHARP_.target.value)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"true"], null),"ja"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"false"], null),"nee"], null)], null)], null)], null)], null);
});
}));
re_datagrid.views.edit_cell.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-edit","no-edit",985300170),(function (id,field,pk){
var r = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","edited-record-by-pk","datagrid/edited-record-by-pk",-840717120),id,pk], null));
return (function (id__$1,field__$1,pk__$1){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(r),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),new cljs.core.Keyword(null,"className","className",-1983287057),"editing"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(field__$1))?(function (){var G__55681 = v;
var G__55682 = cljs.core.deref(r);
var fexpr__55680 = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(field__$1);
return (fexpr__55680.cljs$core$IFn$_invoke$arity$2 ? fexpr__55680.cljs$core$IFn$_invoke$arity$2(G__55681,G__55682) : fexpr__55680.call(null,G__55681,G__55682));
})():v)], null);
});
}));
re_datagrid.views.edit_cell.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (id,field,pk){
var r = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","edited-record-by-pk","datagrid/edited-record-by-pk",-840717120),id,pk], null));
return (function (id__$1,field__$1,pk__$1){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(r),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),new cljs.core.Keyword(null,"className","className",-1983287057),"editing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fg-line","div.fg-line",572290800),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55683_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","update-edited-record","datagrid/update-edited-record",216180815),id__$1,pk__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1),p1__55683_SHARP_.target.value], null));
})], null)], null)], null)], null);
});
}));
re_datagrid.views.create_row = (function re_datagrid$views$create_row(id){
return (function (id__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"TODO"], null);
});
});
/**
 * shows a row with inline editing elements
 */
re_datagrid.views.edit_row = (function re_datagrid$views$edit_row(id,pk){
var fields = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),id], null));
return (function (id__$1,pk__$1){
var cells = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.edit_cell,id__$1,f,pk__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null));
}),cljs.core.deref(fields)));
var save_button = cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.save_cell_button,id__$1,pk__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5025__auto__ = pk__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (-1);
}
})()], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.editing","tr.editing",89060466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pk__$1], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cells,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [save_button], null))], null);
});
});
if((typeof re_datagrid !== 'undefined') && (typeof re_datagrid.views !== 'undefined') && (typeof re_datagrid.views.table_cell !== 'undefined')){
} else {
re_datagrid.views.table_cell = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__55684 = cljs.core.get_global_hierarchy;
return (fexpr__55684.cljs$core$IFn$_invoke$arity$0 ? fexpr__55684.cljs$core$IFn$_invoke$arity$0() : fexpr__55684.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-datagrid.views","table-cell"),(function (_,p__55685,___$1){
var map__55686 = p__55685;
var map__55686__$1 = cljs.core.__destructure_map(map__55686);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55686__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__5025__auto__ = t;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"string","string",-1989541586);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
re_datagrid.views.table_cell.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"custom","custom",340151948),(function (id,field,record){
var is_clickable_QMARK_ = (!((new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(field) == null)));
var fieldname = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var fmt_fieldname = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field)),"-formatted"].join(''));
var value = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(record,fmt_fieldname);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(record,fieldname);
}
})();
var align = (((new cljs.core.Keyword(null,"align","align",1964212802).cljs$core$IFn$_invoke$arity$1(field) == null))?new cljs.core.Keyword(null,"text-left","text-left",-1347161610):new cljs.core.Keyword(null,"align","align",1964212802).cljs$core$IFn$_invoke$arity$1(field));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field),new cljs.core.Keyword(null,"className","className",-1983287057),align], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var fexpr__55687 = new cljs.core.Keyword(null,"custom-element-click","custom-element-click",-533687691).cljs$core$IFn$_invoke$arity$1(field);
return (fexpr__55687.cljs$core$IFn$_invoke$arity$1 ? fexpr__55687.cljs$core$IFn$_invoke$arity$1(record) : fexpr__55687.call(null,record));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-element-renderer","custom-element-renderer",-472683862).cljs$core$IFn$_invoke$arity$1(field),record], null)], null)], null);
}));
re_datagrid.views.table_cell.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (id,field,record){
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
return (function (id__$1,field__$1,record__$1){
var is_clickable_QMARK_ = (!((new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(field__$1) == null)));
var formatter = new cljs.core.Keyword(null,"formatter","formatter",-483008823).cljs$core$IFn$_invoke$arity$1(field__$1);
var fieldname = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1);
var fmt_fieldname = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field__$1)),"-formatted"].join(''));
var formatted_value = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(record__$1,fmt_fieldname);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(record__$1,fieldname);
}
})();
var align = (((new cljs.core.Keyword(null,"align","align",1964212802).cljs$core$IFn$_invoke$arity$1(field__$1) == null))?new cljs.core.Keyword(null,"text-left","text-left",-1347161610):new cljs.core.Keyword(null,"align","align",1964212802).cljs$core$IFn$_invoke$arity$1(field__$1));
var formatted_value__$1 = ((is_clickable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.table-link","a.table-link",1221322472),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

var f = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(field__$1);
var G__55688 = re_datagrid.views.clean_formatted_keys(record__$1);
var G__55689 = field__$1;
var G__55690 = e;
var G__55691 = cljs.core.deref(options);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__55688,G__55689,G__55690,G__55691) : f.call(null,G__55688,G__55689,G__55690,G__55691));
})], null),formatted_value], null):formatted_value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),fieldname,new cljs.core.Keyword(null,"className","className",-1983287057),align], null),formatted_value__$1], null);
});
}));
re_datagrid.views.command_td = (function re_datagrid$views$command_td(id,p__55692,record){
var map__55693 = p__55692;
var map__55693__$1 = cljs.core.__destructure_map(map__55693);
var options = map__55693__$1;
var id_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"id-field","id-field",86199450));
var can_edit_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"can-edit-fn","can-edit-fn",1568280032));
var can_reorder_fn_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"can-reorder-fn-up","can-reorder-fn-up",2130483554));
var can_reorder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"can-reorder","can-reorder",-181129978));
var data_subscription = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"data-subscription","data-subscription",692319594));
var can_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"can-delete","can-delete",1620748590));
var can_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"can-edit","can-edit",442089902));
var can_reorder_fn_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"can-reorder-fn-down","can-reorder-fn-down",-1420667185));
var can_delete_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55693__$1,new cljs.core.Keyword(null,"can-delete-fn","can-delete-fn",1053536630));
var sorted_records = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorted-records","datagrid/sorted-records",-1473405693),id,data_subscription], null));
return (function (id__$1,p__55694,record__$1){
var map__55695 = p__55694;
var map__55695__$1 = cljs.core.__destructure_map(map__55695);
var options__$1 = map__55695__$1;
var id_field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"id-field","id-field",86199450));
var can_edit_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"can-edit-fn","can-edit-fn",1568280032));
var can_reorder_fn_up__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"can-reorder-fn-up","can-reorder-fn-up",2130483554));
var can_reorder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"can-reorder","can-reorder",-181129978));
var data_subscription__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"data-subscription","data-subscription",692319594));
var can_delete__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"can-delete","can-delete",1620748590));
var can_edit__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"can-edit","can-edit",442089902));
var can_reorder_fn_down__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"can-reorder-fn-down","can-reorder-fn-down",-1420667185));
var can_delete_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55695__$1,new cljs.core.Keyword(null,"can-delete-fn","can-delete-fn",1053536630));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.commands","td.commands",726346454),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.commands-inner","div.commands-inner",-115268226),(cljs.core.truth_((function (){var and__5023__auto__ = can_edit__$1;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = (can_edit_fn__$1 == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto____$1 = (!((can_edit_fn__$1 == null)));
if(and__5023__auto____$1){
return (can_edit_fn__$1.cljs$core$IFn$_invoke$arity$1 ? can_edit_fn__$1.cljs$core$IFn$_invoke$arity$1(record__$1) : can_edit_fn__$1.call(null,record__$1));
} else {
return and__5023__auto____$1;
}
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.edit_cell_button,id__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(record__$1,id_field__$1),record__$1], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = can_reorder__$1;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = (can_reorder_fn_up__$1 == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var G__55696 = record__$1;
var G__55697 = cljs.core.deref(sorted_records);
return (can_reorder_fn_up__$1.cljs$core$IFn$_invoke$arity$2 ? can_reorder_fn_up__$1.cljs$core$IFn$_invoke$arity$2(G__55696,G__55697) : can_reorder_fn_up__$1.call(null,G__55696,G__55697));
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.reorder_cell_button_up,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","reorder","datagrid/reorder",-1662582658),id__$1,new cljs.core.Keyword(null,"up","up",-269712113),re_datagrid.views.clean_formatted_keys(record__$1)], null));
})], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = can_reorder__$1;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = (can_reorder_fn_down__$1 == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var G__55698 = record__$1;
var G__55699 = cljs.core.deref(sorted_records);
return (can_reorder_fn_down__$1.cljs$core$IFn$_invoke$arity$2 ? can_reorder_fn_down__$1.cljs$core$IFn$_invoke$arity$2(G__55698,G__55699) : can_reorder_fn_down__$1.call(null,G__55698,G__55699));
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.reorder_cell_button_down,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","reorder","datagrid/reorder",-1662582658),id__$1,new cljs.core.Keyword(null,"down","down",1565245570),re_datagrid.views.clean_formatted_keys(record__$1)], null));
})], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = can_delete__$1;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = (can_delete_fn__$1 == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto____$1 = (!((can_delete_fn__$1 == null)));
if(and__5023__auto____$1){
return (can_delete_fn__$1.cljs$core$IFn$_invoke$arity$1 ? can_delete_fn__$1.cljs$core$IFn$_invoke$arity$1(record__$1) : can_delete_fn__$1.call(null,record__$1));
} else {
return and__5023__auto____$1;
}
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.delete_cell_button,id__$1,record__$1], null):null)], null)], null);
});
});
re_datagrid.views.non_edit_row = (function re_datagrid$views$non_edit_row(id,record,row_class){
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
var fields = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),id], null));
return (function (id__$1,record__$1,row_class__$1){
var pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(record__$1,new cljs.core.Keyword(null,"id-field","id-field",86199450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)));
var k = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",pk)) || ((pk == null))))?"editing":pk);
var classNames = (cljs.core.truth_(new cljs.core.Keyword(null,"row-formatter","row-formatter",2060627346).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?(function (){var fexpr__55700 = new cljs.core.Keyword(null,"row-formatter","row-formatter",2060627346).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return (fexpr__55700.cljs$core$IFn$_invoke$arity$1 ? fexpr__55700.cljs$core$IFn$_invoke$arity$1(record__$1) : fexpr__55700.call(null,record__$1));
})():"");
var classNames__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"show-max-num-rows","show-max-num-rows",-268482446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(classNames)," ","expandable"].join(''):classNames);
var atts = (function (){var G__55701 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"class","class",-2030961996),classNames__$1], null);
var G__55701__$1 = (cljs.core.truth_(row_class__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__55701,new cljs.core.Keyword(null,"class","class",-2030961996),(function (c){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_class__$1)].join('');
})):G__55701);
return G__55701__$1;

})();
var atts__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"on-record-click","on-record-click",300815164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(atts,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__55703 = record__$1;
var G__55704 = cljs.core.deref(fields);
var G__55705 = cljs.core.deref(options);
var fexpr__55702 = new cljs.core.Keyword(null,"on-record-click","on-record-click",300815164).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return (fexpr__55702.cljs$core$IFn$_invoke$arity$3 ? fexpr__55702.cljs$core$IFn$_invoke$arity$3(G__55703,G__55704,G__55705) : fexpr__55702.call(null,G__55703,G__55704,G__55705));
})),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)):atts);
var cells = (function (){var G__55706 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.table_cell,id__$1,f,record__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null));
}),cljs.core.deref(fields)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"checkbox-select","checkbox-select",-1482968664).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.cell_select_checkbox,id__$1,record__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"checkbox__"], null))], null),G__55706);
} else {
return G__55706;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),atts__$1,(function (){var G__55707 = cells;
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"can-update","can-update",32981056).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"can-delete","can-delete",1620748590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
}
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__55707,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.command_td,id__$1,cljs.core.deref(options),record__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"commands"], null))], null));
} else {
return G__55707;
}
})()], null);
});
});
re_datagrid.views.table_row = (function re_datagrid$views$table_row(id,record,row_class){
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
var editing_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","editing-record?","datagrid/editing-record?",-774675884),id,record], null));
return (function (id__$1,record__$1,row_class__$1){
if(cljs.core.truth_(cljs.core.deref(editing_QMARK_))){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.edit_row,id__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(record__$1,new cljs.core.Keyword(null,"id-field","id-field",86199450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options))),row_class__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var fexpr__55708 = new cljs.core.Keyword(null,"id-field","id-field",86199450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return (fexpr__55708.cljs$core$IFn$_invoke$arity$1 ? fexpr__55708.cljs$core$IFn$_invoke$arity$1(record__$1) : fexpr__55708.call(null,record__$1));
})()], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.non_edit_row,id__$1,record__$1,row_class__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var fexpr__55709 = new cljs.core.Keyword(null,"id-field","id-field",86199450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return (fexpr__55709.cljs$core$IFn$_invoke$arity$1 ? fexpr__55709.cljs$core$IFn$_invoke$arity$1(record__$1) : fexpr__55709.call(null,record__$1));
})()], null));
}
});
});
re_datagrid.views.build_partition_map = (function re_datagrid$views$build_partition_map(rs,partition_fn){
return cljs.core.last(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__55710,partition){
var vec__55711 = p__55710;
var prev_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55711,(0),null);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55711,(1),null);
var n = cljs.core.count(partition);
var v = (function (){var G__55714 = cljs.core.first(partition);
return (partition_fn.cljs$core$IFn$_invoke$arity$1 ? partition_fn.cljs$core$IFn$_invoke$arity$1(G__55714) : partition_fn.call(null,G__55714));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(prev_idx + n),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,prev_idx,v)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(partition_fn,rs)));
});
re_datagrid.views.table_data = (function re_datagrid$views$table_data(id,data_sub){
var options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
var fields = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),id], null));
var creating_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","creating?","datagrid/creating?",1676380630),id], null));
var all_records = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","records","datagrid/records",1673214848),data_sub], null));
var visible_records = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","sorted-records","datagrid/sorted-records",-1473405693),id,data_sub], null));
return (function (id__$1,data_sub__$1){
var partition_fn = new cljs.core.Keyword(null,"partition-fn","partition-fn",-148644873).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
var rs = cljs.core.deref(visible_records);
var partition_map = (cljs.core.truth_(partition_fn)?re_datagrid.views.build_partition_map(rs,partition_fn):null);
var rows = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,r){
var partition_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(partition_map,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.table_row,id__$1,r,partition_value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var fexpr__55715 = new cljs.core.Keyword(null,"id-field","id-field",86199450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return (fexpr__55715.cljs$core$IFn$_invoke$arity$1 ? fexpr__55715.cljs$core$IFn$_invoke$arity$1(r) : fexpr__55715.call(null,r));
})()], null));
}),rs));
var max_rows = new cljs.core.Keyword(null,"show-max-num-rows","show-max-num-rows",-268482446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(options));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"body"], null),(function (){var G__55716 = rows;
if(cljs.core.truth_(cljs.core.deref(creating_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55716,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.edit_row,id__$1,null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-9)], null)));
} else {
return G__55716;
}
})()], null);
});
});
re_datagrid.views.table_footer = (function re_datagrid$views$table_footer(id,fields,records){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,f){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(cljs.core.truth_(new cljs.core.Keyword(null,"footer-cell","footer-cell",-1600992291).cljs$core$IFn$_invoke$arity$1(f))?(function (){var fexpr__55717 = new cljs.core.Keyword(null,"footer-cell","footer-cell",-1600992291).cljs$core$IFn$_invoke$arity$1(f);
return (fexpr__55717.cljs$core$IFn$_invoke$arity$1 ? fexpr__55717.cljs$core$IFn$_invoke$arity$1(records) : fexpr__55717.call(null,records));
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),fields))], null)], null);
});
var ufv55719_55741 = schema.utils.use_fn_validation;
var output_schema55718_55742 = schema.core.Any;
var input_schema55720_55743 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(re_datagrid.schema.GridConfiguration,cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("ds","GridConfiguration","ds/GridConfiguration",769799306,null)], null))),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.schema.GridField], null),cljs.core.with_meta(new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("ds","GridField","ds/GridField",1788630637,null)], null)], null)))], null);
var input_checker55721_55744 = (new cljs.core.Delay((function (){
return schema.core.checker(input_schema55720_55743);
}),null));
var output_checker55722_55745 = (new cljs.core.Delay((function (){
return schema.core.checker(output_schema55718_55742);
}),null));
var ret__49219__auto___55746 = /**
 * Inputs: [options :- ds/GridConfiguration fields :- [ds/GridField]]
 * 
 *   Creates a datagrid
 */
re_datagrid.views.datagrid = (function re_datagrid$views$datagrid(G__55723,G__55724){
var validate__47236__auto__ = true;
if(validate__47236__auto__){
var args__47237__auto___55747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__55723,G__55724], null);
if(cljs.core.truth_(schema.core.fn_validator)){
var G__55725_55748 = new cljs.core.Keyword(null,"input","input",556931961);
var G__55726_55749 = cljs.core.with_meta(new cljs.core.Symbol(null,"datagrid","datagrid",-864403051,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a datagrid"], null));
var G__55727_55750 = input_schema55720_55743;
var G__55728_55751 = cljs.core.deref(input_checker55721_55744);
var G__55729_55752 = args__47237__auto___55747;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__55725_55748,G__55726_55749,G__55727_55750,G__55728_55751,G__55729_55752) : schema.core.fn_validator.call(null,G__55725_55748,G__55726_55749,G__55727_55750,G__55728_55751,G__55729_55752));
} else {
var temp__5823__auto___55753 = (function (){var fexpr__55730 = cljs.core.deref(input_checker55721_55744);
return (fexpr__55730.cljs$core$IFn$_invoke$arity$1 ? fexpr__55730.cljs$core$IFn$_invoke$arity$1(args__47237__auto___55747) : fexpr__55730.call(null,args__47237__auto___55747));
})();
if(cljs.core.truth_(temp__5823__auto___55753)){
var error__47238__auto___55754 = temp__5823__auto___55753;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"datagrid","datagrid",-864403051,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a datagrid"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__47238__auto___55754], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema55720_55743,new cljs.core.Keyword(null,"value","value",305978217),args__47237__auto___55747,new cljs.core.Keyword(null,"error","error",-978969032),error__47238__auto___55754], null));
} else {
}
}
} else {
}

var o__47239__auto__ = (function (){var options = G__55723;
var fields = G__55724;
while(true){
var id = new cljs.core.Keyword(null,"grid-id","grid-id",1007140206).cljs$core$IFn$_invoke$arity$1(options);
var data_sub = new cljs.core.Keyword(null,"data-subscription","data-subscription",692319594).cljs$core$IFn$_invoke$arity$1(options);
var loading_sub = new cljs.core.Keyword(null,"loading-subscription","loading-subscription",1785931062).cljs$core$IFn$_invoke$arity$1(options);
var creating_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","creating?","datagrid/creating?",1676380630),id], null));
var show_sure_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","show-sure?","datagrid/show-sure?",-483615106),id], null));
var records = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","records","datagrid/records",1673214848),data_sub], null));
var current_options = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","options","datagrid/options",1883554505),id], null));
var current_fields = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","fields","datagrid/fields",962703418),id], null));
var expanded_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","expanded?","datagrid/expanded?",122106104),id], null));
var initialized_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","initialized?","datagrid/initialized?",1248819818),id], null));
var loading_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","loading?","datagrid/loading?",1547849145),loading_sub], null));
return ((function (id,data_sub,loading_sub,creating_QMARK_,show_sure_QMARK_,records,current_options,current_fields,expanded_QMARK_,initialized_QMARK_,loading_QMARK_,validate__47236__auto__,ufv55719_55741,output_schema55718_55742,input_schema55720_55743,input_checker55721_55744,output_checker55722_55745){
return (function (options__$1,fields__$1){
if(cljs.core.not(cljs.core.deref(initialized_QMARK_))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","initialize","datagrid/initialize",-1147761023),options__$1,fields__$1], null));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-30","div.p-30",1478504619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.preloader.pl-xl","div.preloader.pl-xl",997160492),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.pl-circular","svg.pl-circular",-1681244946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"25 25 50 50"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.plc-path","circle.plc-path",-307041562),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"20",new cljs.core.Keyword(null,"cy","cy",755331060),"50",new cljs.core.Keyword(null,"cx","cx",1272694324),"50"], null)], null)], null)], null)], null);
} else {
var colspan = (function (){var G__55731 = cljs.core.count(fields__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"checkbox-select","checkbox-select",-1482968664).cljs$core$IFn$_invoke$arity$1(options__$1))){
return (G__55731 + (1));
} else {
return G__55731;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(options__$1,cljs.core.deref(current_options))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","update-options","datagrid/update-options",-620511477),id,options__$1], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fields__$1,cljs.core.deref(current_fields))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","update-fields","datagrid/update-fields",1706846468),id,fields__$1], null));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(show_sure_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.are_you_sure_modal,id], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.bootgrid-table","table.table.bootgrid-table",1583641944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.name(id)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"additional-css-class-names","additional-css-class-names",595329642).cljs$core$IFn$_invoke$arity$1(options__$1))].join('')], null),(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"hide-heading","hide-heading",1411475970).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"extra-header-row","extra-header-row",-104137703).cljs$core$IFn$_invoke$arity$1(options__$1));
} else {
return and__5023__auto__;
}
})())?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.table_header,id,data_sub], null)),((cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return (!((new cljs.core.Keyword(null,"footer-cell","footer-cell",-1600992291).cljs$core$IFn$_invoke$arity$1(f) == null)));
}),fields__$1)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.table_footer,id,fields__$1,cljs.core.deref(records)], null)),(cljs.core.truth_(cljs.core.deref(loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(cljs.core.count(fields__$1) + (2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-30","div.p-30",1478504619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.preloader.pl-xl","div.preloader.pl-xl",997160492),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.pl-circular","svg.pl-circular",-1681244946),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"25 25 50 50"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.plc-path","circle.plc-path",-307041562),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"20",new cljs.core.Keyword(null,"cy","cy",755331060),"50",new cljs.core.Keyword(null,"cx","cx",1272694324),"50"], null)], null)], null)], null)], null)], null)], null)], null):((((cljs.core.empty_QMARK_(cljs.core.deref(records))) && (cljs.core.not(cljs.core.deref(creating_QMARK_)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.nodata","td.nodata",-2095066340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"20px"], null),new cljs.core.Keyword(null,"col-span","col-span",-232603210),colspan], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"no-records-text","no-records-text",32518417).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Geen gegevens gevonden.";
}
})()], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid.views.table_data,id,new cljs.core.Keyword(null,"data-subscription","data-subscription",692319594).cljs$core$IFn$_invoke$arity$1(options__$1)], null)
))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"progressive-loading","progressive-loading",-1510379081).cljs$core$IFn$_invoke$arity$1(options__$1))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-datagrid-read-more-marker","div.re-datagrid-read-more-marker",1228194263)], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"show-max-num-rows","show-max-num-rows",-268482446).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(cljs.core.deref(expanded_QMARK_))) && ((cljs.core.count(cljs.core.deref(records)) > new cljs.core.Keyword(null,"show-max-num-rows","show-max-num-rows",-268482446).cljs$core$IFn$_invoke$arity$1(options__$1))));
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-datagrid-button-container","div.re-datagrid-button-container",1046964954),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-read-more","button.btn.btn-primary.btn-read-more",-1115596941),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","toggle-expand","datagrid/toggle-expand",2018058685),id], null));
})], null),"Toon meer"], null)], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"show-max-num-rows","show-max-num-rows",-268482446).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__5023__auto____$1)){
return (cljs.core.count(cljs.core.deref(records)) > new cljs.core.Keyword(null,"show-max-num-rows","show-max-num-rows",-268482446).cljs$core$IFn$_invoke$arity$1(options__$1));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.re-datagrid-button-container","div.re-datagrid-button-container",1046964954),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-read-less","button.btn.btn-primary.btn-read-less",528515967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datagrid","toggle-expand","datagrid/toggle-expand",2018058685),id], null));
})], null),"Toon minder"], null)], null):null)], null)], null);
}
});
;})(id,data_sub,loading_sub,creating_QMARK_,show_sure_QMARK_,records,current_options,current_fields,expanded_QMARK_,initialized_QMARK_,loading_QMARK_,validate__47236__auto__,ufv55719_55741,output_schema55718_55742,input_schema55720_55743,input_checker55721_55744,output_checker55722_55745))
break;
}
})();
if(validate__47236__auto__){
if(cljs.core.truth_(schema.core.fn_validator)){
var G__55732_55755 = new cljs.core.Keyword(null,"output","output",-1105869043);
var G__55733_55756 = cljs.core.with_meta(new cljs.core.Symbol(null,"datagrid","datagrid",-864403051,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a datagrid"], null));
var G__55734_55757 = output_schema55718_55742;
var G__55735_55758 = cljs.core.deref(output_checker55722_55745);
var G__55736_55759 = o__47239__auto__;
(schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5 ? schema.core.fn_validator.cljs$core$IFn$_invoke$arity$5(G__55732_55755,G__55733_55756,G__55734_55757,G__55735_55758,G__55736_55759) : schema.core.fn_validator.call(null,G__55732_55755,G__55733_55756,G__55734_55757,G__55735_55758,G__55736_55759));
} else {
var temp__5823__auto___55760 = (function (){var fexpr__55737 = cljs.core.deref(output_checker55722_55745);
return (fexpr__55737.cljs$core$IFn$_invoke$arity$1 ? fexpr__55737.cljs$core$IFn$_invoke$arity$1(o__47239__auto__) : fexpr__55737.call(null,o__47239__auto__));
})();
if(cljs.core.truth_(temp__5823__auto___55760)){
var error__47238__auto___55761 = temp__5823__auto___55760;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.with_meta(new cljs.core.Symbol(null,"datagrid","datagrid",-864403051,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates a datagrid"], null)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error__47238__auto___55761], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema55718_55742,new cljs.core.Keyword(null,"value","value",305978217),o__47239__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__47238__auto___55761], null));
} else {
}
}
} else {
}

return o__47239__auto__;
});
schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(re_datagrid.views.datagrid),schema.core.__GT_FnSchema(output_schema55718_55742,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema55720_55743], null)));


//# sourceMappingURL=re_datagrid.views.js.map
