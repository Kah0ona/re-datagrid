goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__40465__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40551__i = 0, G__40551__a = new Array(arguments.length -  0);
while (G__40551__i < G__40551__a.length) {G__40551__a[G__40551__i] = arguments[G__40551__i + 0]; ++G__40551__i;}
  args = new cljs.core.IndexedSeq(G__40551__a,0,null);
} 
return G__40465__delegate.call(this,args);};
G__40465.cljs$lang$maxFixedArity = 0;
G__40465.cljs$lang$applyTo = (function (arglist__40552){
var args = cljs.core.seq(arglist__40552);
return G__40465__delegate(args);
});
G__40465.cljs$core$IFn$_invoke$arity$variadic = G__40465__delegate;
return G__40465;
})()
);

(o.error = (function() { 
var G__40553__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40558__i = 0, G__40558__a = new Array(arguments.length -  0);
while (G__40558__i < G__40558__a.length) {G__40558__a[G__40558__i] = arguments[G__40558__i + 0]; ++G__40558__i;}
  args = new cljs.core.IndexedSeq(G__40558__a,0,null);
} 
return G__40553__delegate.call(this,args);};
G__40553.cljs$lang$maxFixedArity = 0;
G__40553.cljs$lang$applyTo = (function (arglist__40559){
var args = cljs.core.seq(arglist__40559);
return G__40553__delegate(args);
});
G__40553.cljs$core$IFn$_invoke$arity$variadic = G__40553__delegate;
return G__40553;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
