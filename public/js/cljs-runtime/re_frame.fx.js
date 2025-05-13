goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46702 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46703 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46703);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___46862 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___46862)){
var new_db_46863 = temp__5823__auto___46862;
var fexpr__46732_46864 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46732_46864.cljs$core$IFn$_invoke$arity$1 ? fexpr__46732_46864.cljs$core$IFn$_invoke$arity$1(new_db_46863) : fexpr__46732_46864.call(null,new_db_46863));
} else {
}

var seq__46733 = cljs.core.seq(effects_without_db);
var chunk__46734 = null;
var count__46735 = (0);
var i__46736 = (0);
while(true){
if((i__46736 < count__46735)){
var vec__46763 = chunk__46734.cljs$core$IIndexed$_nth$arity$2(null,i__46736);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46763,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46763,(1),null);
var temp__5821__auto___46865 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___46865)){
var effect_fn_46866 = temp__5821__auto___46865;
(effect_fn_46866.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46866.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46866.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__46867 = seq__46733;
var G__46868 = chunk__46734;
var G__46869 = count__46735;
var G__46870 = (i__46736 + (1));
seq__46733 = G__46867;
chunk__46734 = G__46868;
count__46735 = G__46869;
i__46736 = G__46870;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46733);
if(temp__5823__auto__){
var seq__46733__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46733__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__46733__$1);
var G__46871 = cljs.core.chunk_rest(seq__46733__$1);
var G__46872 = c__5548__auto__;
var G__46873 = cljs.core.count(c__5548__auto__);
var G__46874 = (0);
seq__46733 = G__46871;
chunk__46734 = G__46872;
count__46735 = G__46873;
i__46736 = G__46874;
continue;
} else {
var vec__46767 = cljs.core.first(seq__46733__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46767,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46767,(1),null);
var temp__5821__auto___46875 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___46875)){
var effect_fn_46876 = temp__5821__auto___46875;
(effect_fn_46876.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46876.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46876.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__46877 = cljs.core.next(seq__46733__$1);
var G__46878 = null;
var G__46879 = (0);
var G__46880 = (0);
seq__46733 = G__46877;
chunk__46734 = G__46878;
count__46735 = G__46879;
i__46736 = G__46880;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45611__auto___46881 = re_frame.interop.now();
var duration__45612__auto___46882 = (end__45611__auto___46881 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45612__auto___46882,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45611__auto___46881);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46702);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___46883 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___46883)){
var new_db_46884 = temp__5823__auto___46883;
var fexpr__46772_46885 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46772_46885.cljs$core$IFn$_invoke$arity$1 ? fexpr__46772_46885.cljs$core$IFn$_invoke$arity$1(new_db_46884) : fexpr__46772_46885.call(null,new_db_46884));
} else {
}

var seq__46773 = cljs.core.seq(effects_without_db);
var chunk__46774 = null;
var count__46775 = (0);
var i__46776 = (0);
while(true){
if((i__46776 < count__46775)){
var vec__46785 = chunk__46774.cljs$core$IIndexed$_nth$arity$2(null,i__46776);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(1),null);
var temp__5821__auto___46886 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___46886)){
var effect_fn_46887 = temp__5821__auto___46886;
(effect_fn_46887.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46887.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46887.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__46888 = seq__46773;
var G__46889 = chunk__46774;
var G__46890 = count__46775;
var G__46891 = (i__46776 + (1));
seq__46773 = G__46888;
chunk__46774 = G__46889;
count__46775 = G__46890;
i__46776 = G__46891;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46773);
if(temp__5823__auto__){
var seq__46773__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46773__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__46773__$1);
var G__46892 = cljs.core.chunk_rest(seq__46773__$1);
var G__46893 = c__5548__auto__;
var G__46894 = cljs.core.count(c__5548__auto__);
var G__46895 = (0);
seq__46773 = G__46892;
chunk__46774 = G__46893;
count__46775 = G__46894;
i__46776 = G__46895;
continue;
} else {
var vec__46798 = cljs.core.first(seq__46773__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(1),null);
var temp__5821__auto___46896 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___46896)){
var effect_fn_46897 = temp__5821__auto___46896;
(effect_fn_46897.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46897.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46897.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__46898 = cljs.core.next(seq__46773__$1);
var G__46899 = null;
var G__46900 = (0);
var G__46901 = (0);
seq__46773 = G__46898;
chunk__46774 = G__46899;
count__46775 = G__46900;
i__46776 = G__46901;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__46804){
var map__46806 = p__46804;
var map__46806__$1 = cljs.core.__destructure_map(map__46806);
var effect = map__46806__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46806__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46806__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__46807 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46808 = null;
var count__46809 = (0);
var i__46810 = (0);
while(true){
if((i__46810 < count__46809)){
var effect = chunk__46808.cljs$core$IIndexed$_nth$arity$2(null,i__46810);
re_frame.fx.dispatch_later(effect);


var G__46902 = seq__46807;
var G__46903 = chunk__46808;
var G__46904 = count__46809;
var G__46905 = (i__46810 + (1));
seq__46807 = G__46902;
chunk__46808 = G__46903;
count__46809 = G__46904;
i__46810 = G__46905;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46807);
if(temp__5823__auto__){
var seq__46807__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46807__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__46807__$1);
var G__46906 = cljs.core.chunk_rest(seq__46807__$1);
var G__46907 = c__5548__auto__;
var G__46908 = cljs.core.count(c__5548__auto__);
var G__46909 = (0);
seq__46807 = G__46906;
chunk__46808 = G__46907;
count__46809 = G__46908;
i__46810 = G__46909;
continue;
} else {
var effect = cljs.core.first(seq__46807__$1);
re_frame.fx.dispatch_later(effect);


var G__46910 = cljs.core.next(seq__46807__$1);
var G__46911 = null;
var G__46912 = (0);
var G__46913 = (0);
seq__46807 = G__46910;
chunk__46808 = G__46911;
count__46809 = G__46912;
i__46810 = G__46913;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__46815 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__46816 = null;
var count__46817 = (0);
var i__46818 = (0);
while(true){
if((i__46818 < count__46817)){
var vec__46826 = chunk__46816.cljs$core$IIndexed$_nth$arity$2(null,i__46818);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46826,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46826,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___46915 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___46915)){
var effect_fn_46916 = temp__5821__auto___46915;
(effect_fn_46916.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46916.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46916.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46917 = seq__46815;
var G__46918 = chunk__46816;
var G__46919 = count__46817;
var G__46920 = (i__46818 + (1));
seq__46815 = G__46917;
chunk__46816 = G__46918;
count__46817 = G__46919;
i__46818 = G__46920;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46815);
if(temp__5823__auto__){
var seq__46815__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46815__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__46815__$1);
var G__46921 = cljs.core.chunk_rest(seq__46815__$1);
var G__46922 = c__5548__auto__;
var G__46923 = cljs.core.count(c__5548__auto__);
var G__46924 = (0);
seq__46815 = G__46921;
chunk__46816 = G__46922;
count__46817 = G__46923;
i__46818 = G__46924;
continue;
} else {
var vec__46829 = cljs.core.first(seq__46815__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46829,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46829,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___46928 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___46928)){
var effect_fn_46929 = temp__5821__auto___46928;
(effect_fn_46929.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46929.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46929.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46930 = cljs.core.next(seq__46815__$1);
var G__46931 = null;
var G__46932 = (0);
var G__46933 = (0);
seq__46815 = G__46930;
chunk__46816 = G__46931;
count__46817 = G__46932;
i__46818 = G__46933;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__46838 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46839 = null;
var count__46840 = (0);
var i__46841 = (0);
while(true){
if((i__46841 < count__46840)){
var event = chunk__46839.cljs$core$IIndexed$_nth$arity$2(null,i__46841);
re_frame.router.dispatch(event);


var G__46934 = seq__46838;
var G__46935 = chunk__46839;
var G__46936 = count__46840;
var G__46937 = (i__46841 + (1));
seq__46838 = G__46934;
chunk__46839 = G__46935;
count__46840 = G__46936;
i__46841 = G__46937;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46838);
if(temp__5823__auto__){
var seq__46838__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46838__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__46838__$1);
var G__46938 = cljs.core.chunk_rest(seq__46838__$1);
var G__46939 = c__5548__auto__;
var G__46940 = cljs.core.count(c__5548__auto__);
var G__46941 = (0);
seq__46838 = G__46938;
chunk__46839 = G__46939;
count__46840 = G__46940;
i__46841 = G__46941;
continue;
} else {
var event = cljs.core.first(seq__46838__$1);
re_frame.router.dispatch(event);


var G__46942 = cljs.core.next(seq__46838__$1);
var G__46943 = null;
var G__46944 = (0);
var G__46945 = (0);
seq__46838 = G__46942;
chunk__46839 = G__46943;
count__46840 = G__46944;
i__46841 = G__46945;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__46845 = cljs.core.seq(value);
var chunk__46846 = null;
var count__46847 = (0);
var i__46848 = (0);
while(true){
if((i__46848 < count__46847)){
var event = chunk__46846.cljs$core$IIndexed$_nth$arity$2(null,i__46848);
clear_event(event);


var G__46946 = seq__46845;
var G__46947 = chunk__46846;
var G__46948 = count__46847;
var G__46949 = (i__46848 + (1));
seq__46845 = G__46946;
chunk__46846 = G__46947;
count__46847 = G__46948;
i__46848 = G__46949;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__46845);
if(temp__5823__auto__){
var seq__46845__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46845__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__46845__$1);
var G__46950 = cljs.core.chunk_rest(seq__46845__$1);
var G__46951 = c__5548__auto__;
var G__46952 = cljs.core.count(c__5548__auto__);
var G__46953 = (0);
seq__46845 = G__46950;
chunk__46846 = G__46951;
count__46847 = G__46952;
i__46848 = G__46953;
continue;
} else {
var event = cljs.core.first(seq__46845__$1);
clear_event(event);


var G__46954 = cljs.core.next(seq__46845__$1);
var G__46955 = null;
var G__46956 = (0);
var G__46957 = (0);
seq__46845 = G__46954;
chunk__46846 = G__46955;
count__46847 = G__46956;
i__46848 = G__46957;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46856 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46857 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46857);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__45611__auto___46958 = re_frame.interop.now();
var duration__45612__auto___46959 = (end__45611__auto___46958 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45612__auto___46959,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__45611__auto___46958);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46856);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
