goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37381){
var map__37382 = p__37381;
var map__37382__$1 = cljs.core.__destructure_map(map__37382);
var runtime = map__37382__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37382__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_37649 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_37649)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__37398 = runtime;
var G__37399 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_37649);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__37398,G__37399) : shadow.remote.runtime.shared.process.call(null,G__37398,G__37399));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37402,res){
var map__37403 = p__37402;
var map__37403__$1 = cljs.core.__destructure_map(map__37403);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37404 = res;
var G__37404__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37404,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37404);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37404__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37404__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37416 = arguments.length;
switch (G__37416) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37419,msg,handlers,timeout_after_ms){
var map__37420 = p__37419;
var map__37420__$1 = cljs.core.__destructure_map(map__37420);
var runtime = map__37420__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37420__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37665 = arguments.length;
var i__5750__auto___37669 = (0);
while(true){
if((i__5750__auto___37669 < len__5749__auto___37665)){
args__5755__auto__.push((arguments[i__5750__auto___37669]));

var G__37670 = (i__5750__auto___37669 + (1));
i__5750__auto___37669 = G__37670;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37434,ev,args){
var map__37435 = p__37434;
var map__37435__$1 = cljs.core.__destructure_map(map__37435);
var runtime = map__37435__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37435__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37436 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37439 = null;
var count__37440 = (0);
var i__37441 = (0);
while(true){
if((i__37441 < count__37440)){
var ext = chunk__37439.cljs$core$IIndexed$_nth$arity$2(null,i__37441);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37678 = seq__37436;
var G__37679 = chunk__37439;
var G__37680 = count__37440;
var G__37681 = (i__37441 + (1));
seq__37436 = G__37678;
chunk__37439 = G__37679;
count__37440 = G__37680;
i__37441 = G__37681;
continue;
} else {
var G__37682 = seq__37436;
var G__37683 = chunk__37439;
var G__37684 = count__37440;
var G__37685 = (i__37441 + (1));
seq__37436 = G__37682;
chunk__37439 = G__37683;
count__37440 = G__37684;
i__37441 = G__37685;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37436);
if(temp__5823__auto__){
var seq__37436__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37436__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37436__$1);
var G__37686 = cljs.core.chunk_rest(seq__37436__$1);
var G__37687 = c__5548__auto__;
var G__37688 = cljs.core.count(c__5548__auto__);
var G__37689 = (0);
seq__37436 = G__37686;
chunk__37439 = G__37687;
count__37440 = G__37688;
i__37441 = G__37689;
continue;
} else {
var ext = cljs.core.first(seq__37436__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37690 = cljs.core.next(seq__37436__$1);
var G__37691 = null;
var G__37692 = (0);
var G__37693 = (0);
seq__37436 = G__37690;
chunk__37439 = G__37691;
count__37440 = G__37692;
i__37441 = G__37693;
continue;
} else {
var G__37694 = cljs.core.next(seq__37436__$1);
var G__37695 = null;
var G__37696 = (0);
var G__37697 = (0);
seq__37436 = G__37694;
chunk__37439 = G__37695;
count__37440 = G__37696;
i__37441 = G__37697;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37424){
var G__37425 = cljs.core.first(seq37424);
var seq37424__$1 = cljs.core.next(seq37424);
var G__37432 = cljs.core.first(seq37424__$1);
var seq37424__$2 = cljs.core.next(seq37424__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37425,G__37432,seq37424__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37463,p__37464){
var map__37465 = p__37463;
var map__37465__$1 = cljs.core.__destructure_map(map__37465);
var runtime = map__37465__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37465__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37466 = p__37464;
var map__37466__$1 = cljs.core.__destructure_map(map__37466);
var msg = map__37466__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37466__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__37469 = cljs.core.deref(state_ref);
var map__37469__$1 = cljs.core.__destructure_map(map__37469);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37469__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37473,msg){
var map__37475 = p__37473;
var map__37475__$1 = cljs.core.__destructure_map(map__37475);
var runtime = map__37475__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37488,key,p__37489){
var map__37490 = p__37488;
var map__37490__$1 = cljs.core.__destructure_map(map__37490);
var state = map__37490__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37492 = p__37489;
var map__37492__$1 = cljs.core.__destructure_map(map__37492);
var spec = map__37492__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37492__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37492__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37508,key,spec){
var map__37509 = p__37508;
var map__37509__$1 = cljs.core.__destructure_map(map__37509);
var runtime = map__37509__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37509__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___37717 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___37717 == null)){
} else {
var on_welcome_37718 = temp__5827__auto___37717;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_37718.cljs$core$IFn$_invoke$arity$0 ? on_welcome_37718.cljs$core$IFn$_invoke$arity$0() : on_welcome_37718.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37510_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37510_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37511_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37511_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37512_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37512_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37513_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37513_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37514_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37514_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37515,key){
var map__37516 = p__37515;
var map__37516__$1 = cljs.core.__destructure_map(map__37516);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37516__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37517,msg){
var map__37526 = p__37517;
var map__37526__$1 = cljs.core.__destructure_map(map__37526);
var runtime = map__37526__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37526__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37545,p__37546){
var map__37547 = p__37545;
var map__37547__$1 = cljs.core.__destructure_map(map__37547);
var runtime = map__37547__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37547__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37549 = p__37546;
var map__37549__$1 = cljs.core.__destructure_map(map__37549);
var msg = map__37549__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__37570 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37572 = null;
var count__37573 = (0);
var i__37574 = (0);
while(true){
if((i__37574 < count__37573)){
var map__37585 = chunk__37572.cljs$core$IIndexed$_nth$arity$2(null,i__37574);
var map__37585__$1 = cljs.core.__destructure_map(map__37585);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37585__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37750 = seq__37570;
var G__37751 = chunk__37572;
var G__37752 = count__37573;
var G__37753 = (i__37574 + (1));
seq__37570 = G__37750;
chunk__37572 = G__37751;
count__37573 = G__37752;
i__37574 = G__37753;
continue;
} else {
var G__37755 = seq__37570;
var G__37756 = chunk__37572;
var G__37757 = count__37573;
var G__37758 = (i__37574 + (1));
seq__37570 = G__37755;
chunk__37572 = G__37756;
count__37573 = G__37757;
i__37574 = G__37758;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37570);
if(temp__5823__auto__){
var seq__37570__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37570__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37570__$1);
var G__37759 = cljs.core.chunk_rest(seq__37570__$1);
var G__37760 = c__5548__auto__;
var G__37761 = cljs.core.count(c__5548__auto__);
var G__37762 = (0);
seq__37570 = G__37759;
chunk__37572 = G__37760;
count__37573 = G__37761;
i__37574 = G__37762;
continue;
} else {
var map__37604 = cljs.core.first(seq__37570__$1);
var map__37604__$1 = cljs.core.__destructure_map(map__37604);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37604__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37764 = cljs.core.next(seq__37570__$1);
var G__37765 = null;
var G__37766 = (0);
var G__37767 = (0);
seq__37570 = G__37764;
chunk__37572 = G__37765;
count__37573 = G__37766;
i__37574 = G__37767;
continue;
} else {
var G__37768 = cljs.core.next(seq__37570__$1);
var G__37769 = null;
var G__37770 = (0);
var G__37771 = (0);
seq__37570 = G__37768;
chunk__37572 = G__37769;
count__37573 = G__37770;
i__37574 = G__37771;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
