goog.provide('re_datagrid_demo.core');
if((typeof re_datagrid_demo !== 'undefined') && (typeof re_datagrid_demo.core !== 'undefined') && (typeof re_datagrid_demo.core.root !== 'undefined')){
} else {
re_datagrid_demo.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_datagrid_demo.core.dev_setup = (function re_datagrid_demo$core$dev_setup(){
if(re_datagrid.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
re_datagrid_demo.core.mount_root = (function re_datagrid_demo$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var container = document.getElementById("app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_datagrid_demo.views.main_panel], null),container);
});
re_datagrid_demo.core.init = (function re_datagrid_demo$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_datagrid_demo.core.dev_setup();

return re_datagrid_demo.core.mount_root();
});
goog.exportSymbol('re_datagrid_demo.core.init', re_datagrid_demo.core.init);
/**
 * 
 */
re_datagrid_demo.core._main = (function re_datagrid_demo$core$_main(args){
return re_datagrid_demo.core.init();
});

//# sourceMappingURL=re_datagrid_demo.core.js.map
