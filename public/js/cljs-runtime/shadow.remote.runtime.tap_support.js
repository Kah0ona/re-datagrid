goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43968,p__43969){
var map__43970 = p__43968;
var map__43970__$1 = cljs.core.__destructure_map(map__43970);
var svc = map__43970__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43970__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43970__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43970__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43971 = p__43969;
var map__43971__$1 = cljs.core.__destructure_map(map__43971);
var msg = map__43971__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43971__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43971__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43971__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43971__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43976,p__43977){
var map__43978 = p__43976;
var map__43978__$1 = cljs.core.__destructure_map(map__43978);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43978__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43981 = p__43977;
var map__43981__$1 = cljs.core.__destructure_map(map__43981);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43981__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43984,p__43985){
var map__43986 = p__43984;
var map__43986__$1 = cljs.core.__destructure_map(map__43986);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43986__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43986__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43987 = p__43985;
var map__43987__$1 = cljs.core.__destructure_map(map__43987);
var msg = map__43987__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43987__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43989,tid){
var map__43990 = p__43989;
var map__43990__$1 = cljs.core.__destructure_map(map__43990);
var svc = map__43990__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43990__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44003 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44004 = null;
var count__44005 = (0);
var i__44006 = (0);
while(true){
if((i__44006 < count__44005)){
var vec__44024 = chunk__44004.cljs$core$IIndexed$_nth$arity$2(null,i__44006);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44024,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44024,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44034 = seq__44003;
var G__44035 = chunk__44004;
var G__44036 = count__44005;
var G__44037 = (i__44006 + (1));
seq__44003 = G__44034;
chunk__44004 = G__44035;
count__44005 = G__44036;
i__44006 = G__44037;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44003);
if(temp__5823__auto__){
var seq__44003__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44003__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__44003__$1);
var G__44038 = cljs.core.chunk_rest(seq__44003__$1);
var G__44039 = c__5548__auto__;
var G__44040 = cljs.core.count(c__5548__auto__);
var G__44041 = (0);
seq__44003 = G__44038;
chunk__44004 = G__44039;
count__44005 = G__44040;
i__44006 = G__44041;
continue;
} else {
var vec__44028 = cljs.core.first(seq__44003__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44028,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44028,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44042 = cljs.core.next(seq__44003__$1);
var G__44043 = null;
var G__44044 = (0);
var G__44045 = (0);
seq__44003 = G__44042;
chunk__44004 = G__44043;
count__44005 = G__44044;
i__44006 = G__44045;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43992_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43992_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44000_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44000_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44001_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44001_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44002_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44002_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44032){
var map__44033 = p__44032;
var map__44033__$1 = cljs.core.__destructure_map(map__44033);
var svc = map__44033__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44033__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44033__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
