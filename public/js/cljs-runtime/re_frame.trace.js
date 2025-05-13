goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__45682){
var map__45683 = p__45682;
var map__45683__$1 = cljs.core.__destructure_map(map__45683);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5025__auto__ = child_of;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__45711_45803 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__45712_45804 = null;
var count__45713_45805 = (0);
var i__45714_45806 = (0);
while(true){
if((i__45714_45806 < count__45713_45805)){
var vec__45735_45807 = chunk__45712_45804.cljs$core$IIndexed$_nth$arity$2(null,i__45714_45806);
var k_45808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45735_45807,(0),null);
var cb_45809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45735_45807,(1),null);
try{var G__45740_45811 = cljs.core.deref(re_frame.trace.traces);
(cb_45809.cljs$core$IFn$_invoke$arity$1 ? cb_45809.cljs$core$IFn$_invoke$arity$1(G__45740_45811) : cb_45809.call(null,G__45740_45811));
}catch (e45739){var e_45812 = e45739;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_45808,"while storing",cljs.core.deref(re_frame.trace.traces),e_45812], 0));
}

var G__45813 = seq__45711_45803;
var G__45814 = chunk__45712_45804;
var G__45815 = count__45713_45805;
var G__45816 = (i__45714_45806 + (1));
seq__45711_45803 = G__45813;
chunk__45712_45804 = G__45814;
count__45713_45805 = G__45815;
i__45714_45806 = G__45816;
continue;
} else {
var temp__5823__auto___45817 = cljs.core.seq(seq__45711_45803);
if(temp__5823__auto___45817){
var seq__45711_45818__$1 = temp__5823__auto___45817;
if(cljs.core.chunked_seq_QMARK_(seq__45711_45818__$1)){
var c__5548__auto___45819 = cljs.core.chunk_first(seq__45711_45818__$1);
var G__45820 = cljs.core.chunk_rest(seq__45711_45818__$1);
var G__45821 = c__5548__auto___45819;
var G__45822 = cljs.core.count(c__5548__auto___45819);
var G__45823 = (0);
seq__45711_45803 = G__45820;
chunk__45712_45804 = G__45821;
count__45713_45805 = G__45822;
i__45714_45806 = G__45823;
continue;
} else {
var vec__45741_45824 = cljs.core.first(seq__45711_45818__$1);
var k_45825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741_45824,(0),null);
var cb_45826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45741_45824,(1),null);
try{var G__45750_45831 = cljs.core.deref(re_frame.trace.traces);
(cb_45826.cljs$core$IFn$_invoke$arity$1 ? cb_45826.cljs$core$IFn$_invoke$arity$1(G__45750_45831) : cb_45826.call(null,G__45750_45831));
}catch (e45744){var e_45832 = e45744;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_45825,"while storing",cljs.core.deref(re_frame.trace.traces),e_45832], 0));
}

var G__45848 = cljs.core.next(seq__45711_45818__$1);
var G__45849 = null;
var G__45850 = (0);
var G__45851 = (0);
seq__45711_45803 = G__45848;
chunk__45712_45804 = G__45849;
count__45713_45805 = G__45850;
i__45714_45806 = G__45851;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
