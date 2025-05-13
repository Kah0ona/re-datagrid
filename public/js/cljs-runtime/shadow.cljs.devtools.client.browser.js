goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45021 = arguments.length;
var i__5750__auto___45022 = (0);
while(true){
if((i__5750__auto___45022 < len__5749__auto___45021)){
args__5755__auto__.push((arguments[i__5750__auto___45022]));

var G__45024 = (i__5750__auto___45022 + (1));
i__5750__auto___45022 = G__45024;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44461){
var G__44462 = cljs.core.first(seq44461);
var seq44461__$1 = cljs.core.next(seq44461);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44462,seq44461__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44469 = cljs.core.seq(sources);
var chunk__44470 = null;
var count__44471 = (0);
var i__44472 = (0);
while(true){
if((i__44472 < count__44471)){
var map__44487 = chunk__44470.cljs$core$IIndexed$_nth$arity$2(null,i__44472);
var map__44487__$1 = cljs.core.__destructure_map(map__44487);
var src = map__44487__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44487__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44487__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44487__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44487__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44492){var e_45025 = e44492;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45025);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45025.message)].join('')));
}

var G__45033 = seq__44469;
var G__45034 = chunk__44470;
var G__45035 = count__44471;
var G__45036 = (i__44472 + (1));
seq__44469 = G__45033;
chunk__44470 = G__45034;
count__44471 = G__45035;
i__44472 = G__45036;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44469);
if(temp__5823__auto__){
var seq__44469__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44469__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__44469__$1);
var G__45037 = cljs.core.chunk_rest(seq__44469__$1);
var G__45038 = c__5548__auto__;
var G__45039 = cljs.core.count(c__5548__auto__);
var G__45040 = (0);
seq__44469 = G__45037;
chunk__44470 = G__45038;
count__44471 = G__45039;
i__44472 = G__45040;
continue;
} else {
var map__44500 = cljs.core.first(seq__44469__$1);
var map__44500__$1 = cljs.core.__destructure_map(map__44500);
var src = map__44500__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44500__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44500__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44500__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44500__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44504){var e_45041 = e44504;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45041);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45041.message)].join('')));
}

var G__45042 = cljs.core.next(seq__44469__$1);
var G__45043 = null;
var G__45044 = (0);
var G__45045 = (0);
seq__44469 = G__45042;
chunk__44470 = G__45043;
count__44471 = G__45044;
i__44472 = G__45045;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__44513 = cljs.core.seq(js_requires);
var chunk__44514 = null;
var count__44515 = (0);
var i__44516 = (0);
while(true){
if((i__44516 < count__44515)){
var js_ns = chunk__44514.cljs$core$IIndexed$_nth$arity$2(null,i__44516);
var require_str_45047 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45047);


var G__45048 = seq__44513;
var G__45049 = chunk__44514;
var G__45050 = count__44515;
var G__45051 = (i__44516 + (1));
seq__44513 = G__45048;
chunk__44514 = G__45049;
count__44515 = G__45050;
i__44516 = G__45051;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44513);
if(temp__5823__auto__){
var seq__44513__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44513__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__44513__$1);
var G__45052 = cljs.core.chunk_rest(seq__44513__$1);
var G__45053 = c__5548__auto__;
var G__45054 = cljs.core.count(c__5548__auto__);
var G__45055 = (0);
seq__44513 = G__45052;
chunk__44514 = G__45053;
count__44515 = G__45054;
i__44516 = G__45055;
continue;
} else {
var js_ns = cljs.core.first(seq__44513__$1);
var require_str_45056 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45056);


var G__45057 = cljs.core.next(seq__44513__$1);
var G__45058 = null;
var G__45059 = (0);
var G__45060 = (0);
seq__44513 = G__45057;
chunk__44514 = G__45058;
count__44515 = G__45059;
i__44516 = G__45060;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44524){
var map__44525 = p__44524;
var map__44525__$1 = cljs.core.__destructure_map(map__44525);
var msg = map__44525__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44526(s__44527){
return (new cljs.core.LazySeq(null,(function (){
var s__44527__$1 = s__44527;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__44527__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__44532 = cljs.core.first(xs__6383__auto__);
var map__44532__$1 = cljs.core.__destructure_map(map__44532);
var src = map__44532__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44532__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__44527__$1,map__44532,map__44532__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__44525,map__44525__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44526_$_iter__44528(s__44529){
return (new cljs.core.LazySeq(null,((function (s__44527__$1,map__44532,map__44532__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__44525,map__44525__$1,msg,info,reload_info){
return (function (){
var s__44529__$1 = s__44529;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__44529__$1);
if(temp__5823__auto____$1){
var s__44529__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44529__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__44529__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__44531 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__44530 = (0);
while(true){
if((i__44530 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__44530);
cljs.core.chunk_append(b__44531,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45069 = (i__44530 + (1));
i__44530 = G__45069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44531),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44526_$_iter__44528(cljs.core.chunk_rest(s__44529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44531),null);
}
} else {
var warning = cljs.core.first(s__44529__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44526_$_iter__44528(cljs.core.rest(s__44529__$2)));
}
} else {
return null;
}
break;
}
});})(s__44527__$1,map__44532,map__44532__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__44525,map__44525__$1,msg,info,reload_info))
,null,null));
});})(s__44527__$1,map__44532,map__44532__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__44525,map__44525__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44526(cljs.core.rest(s__44527__$1)));
} else {
var G__45070 = cljs.core.rest(s__44527__$1);
s__44527__$1 = G__45070;
continue;
}
} else {
var G__45072 = cljs.core.rest(s__44527__$1);
s__44527__$1 = G__45072;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__44535_45073 = cljs.core.seq(warnings);
var chunk__44536_45074 = null;
var count__44537_45075 = (0);
var i__44538_45076 = (0);
while(true){
if((i__44538_45076 < count__44537_45075)){
var map__44541_45077 = chunk__44536_45074.cljs$core$IIndexed$_nth$arity$2(null,i__44538_45076);
var map__44541_45078__$1 = cljs.core.__destructure_map(map__44541_45077);
var w_45079 = map__44541_45078__$1;
var msg_45080__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44541_45078__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44541_45078__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44541_45078__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44541_45078__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45083)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45081),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45082),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45080__$1)].join(''));


var G__45084 = seq__44535_45073;
var G__45085 = chunk__44536_45074;
var G__45086 = count__44537_45075;
var G__45087 = (i__44538_45076 + (1));
seq__44535_45073 = G__45084;
chunk__44536_45074 = G__45085;
count__44537_45075 = G__45086;
i__44538_45076 = G__45087;
continue;
} else {
var temp__5823__auto___45088 = cljs.core.seq(seq__44535_45073);
if(temp__5823__auto___45088){
var seq__44535_45089__$1 = temp__5823__auto___45088;
if(cljs.core.chunked_seq_QMARK_(seq__44535_45089__$1)){
var c__5548__auto___45090 = cljs.core.chunk_first(seq__44535_45089__$1);
var G__45091 = cljs.core.chunk_rest(seq__44535_45089__$1);
var G__45092 = c__5548__auto___45090;
var G__45093 = cljs.core.count(c__5548__auto___45090);
var G__45094 = (0);
seq__44535_45073 = G__45091;
chunk__44536_45074 = G__45092;
count__44537_45075 = G__45093;
i__44538_45076 = G__45094;
continue;
} else {
var map__44546_45095 = cljs.core.first(seq__44535_45089__$1);
var map__44546_45096__$1 = cljs.core.__destructure_map(map__44546_45095);
var w_45097 = map__44546_45096__$1;
var msg_45098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44546_45096__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44546_45096__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44546_45096__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44546_45096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45101)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45099),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45100),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45098__$1)].join(''));


var G__45102 = cljs.core.next(seq__44535_45089__$1);
var G__45103 = null;
var G__45104 = (0);
var G__45105 = (0);
seq__44535_45073 = G__45102;
chunk__44536_45074 = G__45103;
count__44537_45075 = G__45104;
i__44538_45076 = G__45105;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44523_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44523_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__44555 = node_uri;
G__44555.setQuery(null);

G__44555.setPath(new$);

return G__44555;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44556){
var map__44557 = p__44556;
var map__44557__$1 = cljs.core.__destructure_map(map__44557);
var msg = map__44557__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44557__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44557__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__44558 = cljs.core.seq(updates);
var chunk__44560 = null;
var count__44561 = (0);
var i__44562 = (0);
while(true){
if((i__44562 < count__44561)){
var path = chunk__44560.cljs$core$IIndexed$_nth$arity$2(null,i__44562);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44751_45113 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44755_45114 = null;
var count__44756_45115 = (0);
var i__44757_45116 = (0);
while(true){
if((i__44757_45116 < count__44756_45115)){
var node_45117 = chunk__44755_45114.cljs$core$IIndexed$_nth$arity$2(null,i__44757_45116);
if(cljs.core.not(node_45117.shadow$old)){
var path_match_45118 = shadow.cljs.devtools.client.browser.match_paths(node_45117.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45118)){
var new_link_45119 = (function (){var G__44783 = node_45117.cloneNode(true);
G__44783.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45118),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44783;
})();
(node_45117.shadow$old = true);

(new_link_45119.onload = ((function (seq__44751_45113,chunk__44755_45114,count__44756_45115,i__44757_45116,seq__44558,chunk__44560,count__44561,i__44562,new_link_45119,path_match_45118,node_45117,path,map__44557,map__44557__$1,msg,updates,reload_info){
return (function (e){
var seq__44786_45121 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44788_45122 = null;
var count__44789_45123 = (0);
var i__44790_45124 = (0);
while(true){
if((i__44790_45124 < count__44789_45123)){
var map__44795_45125 = chunk__44788_45122.cljs$core$IIndexed$_nth$arity$2(null,i__44790_45124);
var map__44795_45126__$1 = cljs.core.__destructure_map(map__44795_45125);
var task_45127 = map__44795_45126__$1;
var fn_str_45128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44795_45126__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44795_45126__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45130 = goog.getObjectByName(fn_str_45128,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45129)].join(''));

(fn_obj_45130.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45130.cljs$core$IFn$_invoke$arity$2(path,new_link_45119) : fn_obj_45130.call(null,path,new_link_45119));


var G__45131 = seq__44786_45121;
var G__45132 = chunk__44788_45122;
var G__45133 = count__44789_45123;
var G__45134 = (i__44790_45124 + (1));
seq__44786_45121 = G__45131;
chunk__44788_45122 = G__45132;
count__44789_45123 = G__45133;
i__44790_45124 = G__45134;
continue;
} else {
var temp__5823__auto___45135 = cljs.core.seq(seq__44786_45121);
if(temp__5823__auto___45135){
var seq__44786_45136__$1 = temp__5823__auto___45135;
if(cljs.core.chunked_seq_QMARK_(seq__44786_45136__$1)){
var c__5548__auto___45137 = cljs.core.chunk_first(seq__44786_45136__$1);
var G__45138 = cljs.core.chunk_rest(seq__44786_45136__$1);
var G__45139 = c__5548__auto___45137;
var G__45140 = cljs.core.count(c__5548__auto___45137);
var G__45141 = (0);
seq__44786_45121 = G__45138;
chunk__44788_45122 = G__45139;
count__44789_45123 = G__45140;
i__44790_45124 = G__45141;
continue;
} else {
var map__44799_45142 = cljs.core.first(seq__44786_45136__$1);
var map__44799_45143__$1 = cljs.core.__destructure_map(map__44799_45142);
var task_45144 = map__44799_45143__$1;
var fn_str_45145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44799_45143__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44799_45143__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45147 = goog.getObjectByName(fn_str_45145,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45146)].join(''));

(fn_obj_45147.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45147.cljs$core$IFn$_invoke$arity$2(path,new_link_45119) : fn_obj_45147.call(null,path,new_link_45119));


var G__45148 = cljs.core.next(seq__44786_45136__$1);
var G__45149 = null;
var G__45150 = (0);
var G__45151 = (0);
seq__44786_45121 = G__45148;
chunk__44788_45122 = G__45149;
count__44789_45123 = G__45150;
i__44790_45124 = G__45151;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45117);
});})(seq__44751_45113,chunk__44755_45114,count__44756_45115,i__44757_45116,seq__44558,chunk__44560,count__44561,i__44562,new_link_45119,path_match_45118,node_45117,path,map__44557,map__44557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45118], 0));

goog.dom.insertSiblingAfter(new_link_45119,node_45117);


var G__45152 = seq__44751_45113;
var G__45153 = chunk__44755_45114;
var G__45154 = count__44756_45115;
var G__45155 = (i__44757_45116 + (1));
seq__44751_45113 = G__45152;
chunk__44755_45114 = G__45153;
count__44756_45115 = G__45154;
i__44757_45116 = G__45155;
continue;
} else {
var G__45156 = seq__44751_45113;
var G__45157 = chunk__44755_45114;
var G__45158 = count__44756_45115;
var G__45159 = (i__44757_45116 + (1));
seq__44751_45113 = G__45156;
chunk__44755_45114 = G__45157;
count__44756_45115 = G__45158;
i__44757_45116 = G__45159;
continue;
}
} else {
var G__45160 = seq__44751_45113;
var G__45161 = chunk__44755_45114;
var G__45162 = count__44756_45115;
var G__45163 = (i__44757_45116 + (1));
seq__44751_45113 = G__45160;
chunk__44755_45114 = G__45161;
count__44756_45115 = G__45162;
i__44757_45116 = G__45163;
continue;
}
} else {
var temp__5823__auto___45164 = cljs.core.seq(seq__44751_45113);
if(temp__5823__auto___45164){
var seq__44751_45165__$1 = temp__5823__auto___45164;
if(cljs.core.chunked_seq_QMARK_(seq__44751_45165__$1)){
var c__5548__auto___45166 = cljs.core.chunk_first(seq__44751_45165__$1);
var G__45167 = cljs.core.chunk_rest(seq__44751_45165__$1);
var G__45168 = c__5548__auto___45166;
var G__45169 = cljs.core.count(c__5548__auto___45166);
var G__45170 = (0);
seq__44751_45113 = G__45167;
chunk__44755_45114 = G__45168;
count__44756_45115 = G__45169;
i__44757_45116 = G__45170;
continue;
} else {
var node_45171 = cljs.core.first(seq__44751_45165__$1);
if(cljs.core.not(node_45171.shadow$old)){
var path_match_45172 = shadow.cljs.devtools.client.browser.match_paths(node_45171.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45172)){
var new_link_45173 = (function (){var G__44806 = node_45171.cloneNode(true);
G__44806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45172),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44806;
})();
(node_45171.shadow$old = true);

(new_link_45173.onload = ((function (seq__44751_45113,chunk__44755_45114,count__44756_45115,i__44757_45116,seq__44558,chunk__44560,count__44561,i__44562,new_link_45173,path_match_45172,node_45171,seq__44751_45165__$1,temp__5823__auto___45164,path,map__44557,map__44557__$1,msg,updates,reload_info){
return (function (e){
var seq__44807_45174 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44809_45175 = null;
var count__44810_45176 = (0);
var i__44811_45177 = (0);
while(true){
if((i__44811_45177 < count__44810_45176)){
var map__44815_45178 = chunk__44809_45175.cljs$core$IIndexed$_nth$arity$2(null,i__44811_45177);
var map__44815_45179__$1 = cljs.core.__destructure_map(map__44815_45178);
var task_45180 = map__44815_45179__$1;
var fn_str_45181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44815_45179__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44815_45179__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45183 = goog.getObjectByName(fn_str_45181,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45182)].join(''));

(fn_obj_45183.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45183.cljs$core$IFn$_invoke$arity$2(path,new_link_45173) : fn_obj_45183.call(null,path,new_link_45173));


var G__45184 = seq__44807_45174;
var G__45185 = chunk__44809_45175;
var G__45186 = count__44810_45176;
var G__45187 = (i__44811_45177 + (1));
seq__44807_45174 = G__45184;
chunk__44809_45175 = G__45185;
count__44810_45176 = G__45186;
i__44811_45177 = G__45187;
continue;
} else {
var temp__5823__auto___45188__$1 = cljs.core.seq(seq__44807_45174);
if(temp__5823__auto___45188__$1){
var seq__44807_45189__$1 = temp__5823__auto___45188__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44807_45189__$1)){
var c__5548__auto___45190 = cljs.core.chunk_first(seq__44807_45189__$1);
var G__45191 = cljs.core.chunk_rest(seq__44807_45189__$1);
var G__45192 = c__5548__auto___45190;
var G__45193 = cljs.core.count(c__5548__auto___45190);
var G__45194 = (0);
seq__44807_45174 = G__45191;
chunk__44809_45175 = G__45192;
count__44810_45176 = G__45193;
i__44811_45177 = G__45194;
continue;
} else {
var map__44816_45195 = cljs.core.first(seq__44807_45189__$1);
var map__44816_45196__$1 = cljs.core.__destructure_map(map__44816_45195);
var task_45197 = map__44816_45196__$1;
var fn_str_45198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816_45196__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44816_45196__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45200 = goog.getObjectByName(fn_str_45198,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45199)].join(''));

(fn_obj_45200.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45200.cljs$core$IFn$_invoke$arity$2(path,new_link_45173) : fn_obj_45200.call(null,path,new_link_45173));


var G__45201 = cljs.core.next(seq__44807_45189__$1);
var G__45202 = null;
var G__45203 = (0);
var G__45204 = (0);
seq__44807_45174 = G__45201;
chunk__44809_45175 = G__45202;
count__44810_45176 = G__45203;
i__44811_45177 = G__45204;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45171);
});})(seq__44751_45113,chunk__44755_45114,count__44756_45115,i__44757_45116,seq__44558,chunk__44560,count__44561,i__44562,new_link_45173,path_match_45172,node_45171,seq__44751_45165__$1,temp__5823__auto___45164,path,map__44557,map__44557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45172], 0));

goog.dom.insertSiblingAfter(new_link_45173,node_45171);


var G__45205 = cljs.core.next(seq__44751_45165__$1);
var G__45206 = null;
var G__45207 = (0);
var G__45208 = (0);
seq__44751_45113 = G__45205;
chunk__44755_45114 = G__45206;
count__44756_45115 = G__45207;
i__44757_45116 = G__45208;
continue;
} else {
var G__45209 = cljs.core.next(seq__44751_45165__$1);
var G__45210 = null;
var G__45211 = (0);
var G__45212 = (0);
seq__44751_45113 = G__45209;
chunk__44755_45114 = G__45210;
count__44756_45115 = G__45211;
i__44757_45116 = G__45212;
continue;
}
} else {
var G__45213 = cljs.core.next(seq__44751_45165__$1);
var G__45214 = null;
var G__45215 = (0);
var G__45216 = (0);
seq__44751_45113 = G__45213;
chunk__44755_45114 = G__45214;
count__44756_45115 = G__45215;
i__44757_45116 = G__45216;
continue;
}
}
} else {
}
}
break;
}


var G__45217 = seq__44558;
var G__45218 = chunk__44560;
var G__45219 = count__44561;
var G__45220 = (i__44562 + (1));
seq__44558 = G__45217;
chunk__44560 = G__45218;
count__44561 = G__45219;
i__44562 = G__45220;
continue;
} else {
var G__45221 = seq__44558;
var G__45222 = chunk__44560;
var G__45223 = count__44561;
var G__45224 = (i__44562 + (1));
seq__44558 = G__45221;
chunk__44560 = G__45222;
count__44561 = G__45223;
i__44562 = G__45224;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44558);
if(temp__5823__auto__){
var seq__44558__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44558__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__44558__$1);
var G__45225 = cljs.core.chunk_rest(seq__44558__$1);
var G__45226 = c__5548__auto__;
var G__45227 = cljs.core.count(c__5548__auto__);
var G__45228 = (0);
seq__44558 = G__45225;
chunk__44560 = G__45226;
count__44561 = G__45227;
i__44562 = G__45228;
continue;
} else {
var path = cljs.core.first(seq__44558__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44817_45229 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44821_45230 = null;
var count__44822_45231 = (0);
var i__44823_45232 = (0);
while(true){
if((i__44823_45232 < count__44822_45231)){
var node_45233 = chunk__44821_45230.cljs$core$IIndexed$_nth$arity$2(null,i__44823_45232);
if(cljs.core.not(node_45233.shadow$old)){
var path_match_45234 = shadow.cljs.devtools.client.browser.match_paths(node_45233.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45234)){
var new_link_45235 = (function (){var G__44853 = node_45233.cloneNode(true);
G__44853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45234),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44853;
})();
(node_45233.shadow$old = true);

(new_link_45235.onload = ((function (seq__44817_45229,chunk__44821_45230,count__44822_45231,i__44823_45232,seq__44558,chunk__44560,count__44561,i__44562,new_link_45235,path_match_45234,node_45233,path,seq__44558__$1,temp__5823__auto__,map__44557,map__44557__$1,msg,updates,reload_info){
return (function (e){
var seq__44855_45236 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44857_45237 = null;
var count__44858_45238 = (0);
var i__44859_45239 = (0);
while(true){
if((i__44859_45239 < count__44858_45238)){
var map__44866_45240 = chunk__44857_45237.cljs$core$IIndexed$_nth$arity$2(null,i__44859_45239);
var map__44866_45241__$1 = cljs.core.__destructure_map(map__44866_45240);
var task_45242 = map__44866_45241__$1;
var fn_str_45243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44866_45241__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44866_45241__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45245 = goog.getObjectByName(fn_str_45243,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45244)].join(''));

(fn_obj_45245.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45245.cljs$core$IFn$_invoke$arity$2(path,new_link_45235) : fn_obj_45245.call(null,path,new_link_45235));


var G__45246 = seq__44855_45236;
var G__45247 = chunk__44857_45237;
var G__45248 = count__44858_45238;
var G__45249 = (i__44859_45239 + (1));
seq__44855_45236 = G__45246;
chunk__44857_45237 = G__45247;
count__44858_45238 = G__45248;
i__44859_45239 = G__45249;
continue;
} else {
var temp__5823__auto___45250__$1 = cljs.core.seq(seq__44855_45236);
if(temp__5823__auto___45250__$1){
var seq__44855_45251__$1 = temp__5823__auto___45250__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44855_45251__$1)){
var c__5548__auto___45252 = cljs.core.chunk_first(seq__44855_45251__$1);
var G__45253 = cljs.core.chunk_rest(seq__44855_45251__$1);
var G__45254 = c__5548__auto___45252;
var G__45255 = cljs.core.count(c__5548__auto___45252);
var G__45256 = (0);
seq__44855_45236 = G__45253;
chunk__44857_45237 = G__45254;
count__44858_45238 = G__45255;
i__44859_45239 = G__45256;
continue;
} else {
var map__44867_45258 = cljs.core.first(seq__44855_45251__$1);
var map__44867_45259__$1 = cljs.core.__destructure_map(map__44867_45258);
var task_45260 = map__44867_45259__$1;
var fn_str_45261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44867_45259__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44867_45259__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45263 = goog.getObjectByName(fn_str_45261,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45262)].join(''));

(fn_obj_45263.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45263.cljs$core$IFn$_invoke$arity$2(path,new_link_45235) : fn_obj_45263.call(null,path,new_link_45235));


var G__45264 = cljs.core.next(seq__44855_45251__$1);
var G__45265 = null;
var G__45266 = (0);
var G__45267 = (0);
seq__44855_45236 = G__45264;
chunk__44857_45237 = G__45265;
count__44858_45238 = G__45266;
i__44859_45239 = G__45267;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45233);
});})(seq__44817_45229,chunk__44821_45230,count__44822_45231,i__44823_45232,seq__44558,chunk__44560,count__44561,i__44562,new_link_45235,path_match_45234,node_45233,path,seq__44558__$1,temp__5823__auto__,map__44557,map__44557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45234], 0));

goog.dom.insertSiblingAfter(new_link_45235,node_45233);


var G__45268 = seq__44817_45229;
var G__45269 = chunk__44821_45230;
var G__45270 = count__44822_45231;
var G__45271 = (i__44823_45232 + (1));
seq__44817_45229 = G__45268;
chunk__44821_45230 = G__45269;
count__44822_45231 = G__45270;
i__44823_45232 = G__45271;
continue;
} else {
var G__45272 = seq__44817_45229;
var G__45273 = chunk__44821_45230;
var G__45274 = count__44822_45231;
var G__45275 = (i__44823_45232 + (1));
seq__44817_45229 = G__45272;
chunk__44821_45230 = G__45273;
count__44822_45231 = G__45274;
i__44823_45232 = G__45275;
continue;
}
} else {
var G__45276 = seq__44817_45229;
var G__45277 = chunk__44821_45230;
var G__45278 = count__44822_45231;
var G__45279 = (i__44823_45232 + (1));
seq__44817_45229 = G__45276;
chunk__44821_45230 = G__45277;
count__44822_45231 = G__45278;
i__44823_45232 = G__45279;
continue;
}
} else {
var temp__5823__auto___45280__$1 = cljs.core.seq(seq__44817_45229);
if(temp__5823__auto___45280__$1){
var seq__44817_45286__$1 = temp__5823__auto___45280__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44817_45286__$1)){
var c__5548__auto___45287 = cljs.core.chunk_first(seq__44817_45286__$1);
var G__45288 = cljs.core.chunk_rest(seq__44817_45286__$1);
var G__45289 = c__5548__auto___45287;
var G__45290 = cljs.core.count(c__5548__auto___45287);
var G__45291 = (0);
seq__44817_45229 = G__45288;
chunk__44821_45230 = G__45289;
count__44822_45231 = G__45290;
i__44823_45232 = G__45291;
continue;
} else {
var node_45292 = cljs.core.first(seq__44817_45286__$1);
if(cljs.core.not(node_45292.shadow$old)){
var path_match_45293 = shadow.cljs.devtools.client.browser.match_paths(node_45292.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45293)){
var new_link_45294 = (function (){var G__44872 = node_45292.cloneNode(true);
G__44872.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45293),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44872;
})();
(node_45292.shadow$old = true);

(new_link_45294.onload = ((function (seq__44817_45229,chunk__44821_45230,count__44822_45231,i__44823_45232,seq__44558,chunk__44560,count__44561,i__44562,new_link_45294,path_match_45293,node_45292,seq__44817_45286__$1,temp__5823__auto___45280__$1,path,seq__44558__$1,temp__5823__auto__,map__44557,map__44557__$1,msg,updates,reload_info){
return (function (e){
var seq__44874_45295 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44876_45296 = null;
var count__44877_45297 = (0);
var i__44878_45298 = (0);
while(true){
if((i__44878_45298 < count__44877_45297)){
var map__44885_45299 = chunk__44876_45296.cljs$core$IIndexed$_nth$arity$2(null,i__44878_45298);
var map__44885_45300__$1 = cljs.core.__destructure_map(map__44885_45299);
var task_45301 = map__44885_45300__$1;
var fn_str_45302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44885_45300__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44885_45300__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45305 = goog.getObjectByName(fn_str_45302,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45303)].join(''));

(fn_obj_45305.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45305.cljs$core$IFn$_invoke$arity$2(path,new_link_45294) : fn_obj_45305.call(null,path,new_link_45294));


var G__45306 = seq__44874_45295;
var G__45307 = chunk__44876_45296;
var G__45308 = count__44877_45297;
var G__45309 = (i__44878_45298 + (1));
seq__44874_45295 = G__45306;
chunk__44876_45296 = G__45307;
count__44877_45297 = G__45308;
i__44878_45298 = G__45309;
continue;
} else {
var temp__5823__auto___45311__$2 = cljs.core.seq(seq__44874_45295);
if(temp__5823__auto___45311__$2){
var seq__44874_45312__$1 = temp__5823__auto___45311__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44874_45312__$1)){
var c__5548__auto___45313 = cljs.core.chunk_first(seq__44874_45312__$1);
var G__45314 = cljs.core.chunk_rest(seq__44874_45312__$1);
var G__45315 = c__5548__auto___45313;
var G__45316 = cljs.core.count(c__5548__auto___45313);
var G__45317 = (0);
seq__44874_45295 = G__45314;
chunk__44876_45296 = G__45315;
count__44877_45297 = G__45316;
i__44878_45298 = G__45317;
continue;
} else {
var map__44890_45319 = cljs.core.first(seq__44874_45312__$1);
var map__44890_45320__$1 = cljs.core.__destructure_map(map__44890_45319);
var task_45321 = map__44890_45320__$1;
var fn_str_45322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44890_45320__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44890_45320__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45324 = goog.getObjectByName(fn_str_45322,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45323)].join(''));

(fn_obj_45324.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45324.cljs$core$IFn$_invoke$arity$2(path,new_link_45294) : fn_obj_45324.call(null,path,new_link_45294));


var G__45326 = cljs.core.next(seq__44874_45312__$1);
var G__45327 = null;
var G__45328 = (0);
var G__45329 = (0);
seq__44874_45295 = G__45326;
chunk__44876_45296 = G__45327;
count__44877_45297 = G__45328;
i__44878_45298 = G__45329;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45292);
});})(seq__44817_45229,chunk__44821_45230,count__44822_45231,i__44823_45232,seq__44558,chunk__44560,count__44561,i__44562,new_link_45294,path_match_45293,node_45292,seq__44817_45286__$1,temp__5823__auto___45280__$1,path,seq__44558__$1,temp__5823__auto__,map__44557,map__44557__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45293], 0));

goog.dom.insertSiblingAfter(new_link_45294,node_45292);


var G__45330 = cljs.core.next(seq__44817_45286__$1);
var G__45331 = null;
var G__45332 = (0);
var G__45333 = (0);
seq__44817_45229 = G__45330;
chunk__44821_45230 = G__45331;
count__44822_45231 = G__45332;
i__44823_45232 = G__45333;
continue;
} else {
var G__45334 = cljs.core.next(seq__44817_45286__$1);
var G__45335 = null;
var G__45336 = (0);
var G__45337 = (0);
seq__44817_45229 = G__45334;
chunk__44821_45230 = G__45335;
count__44822_45231 = G__45336;
i__44823_45232 = G__45337;
continue;
}
} else {
var G__45338 = cljs.core.next(seq__44817_45286__$1);
var G__45339 = null;
var G__45340 = (0);
var G__45341 = (0);
seq__44817_45229 = G__45338;
chunk__44821_45230 = G__45339;
count__44822_45231 = G__45340;
i__44823_45232 = G__45341;
continue;
}
}
} else {
}
}
break;
}


var G__45342 = cljs.core.next(seq__44558__$1);
var G__45343 = null;
var G__45344 = (0);
var G__45345 = (0);
seq__44558 = G__45342;
chunk__44560 = G__45343;
count__44561 = G__45344;
i__44562 = G__45345;
continue;
} else {
var G__45346 = cljs.core.next(seq__44558__$1);
var G__45347 = null;
var G__45348 = (0);
var G__45349 = (0);
seq__44558 = G__45346;
chunk__44560 = G__45347;
count__44561 = G__45348;
i__44562 = G__45349;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__44935 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__44935) : success.call(null,G__44935));
}catch (e44917){var e = e44917;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__44938,success,fail){
var map__44939 = p__44938;
var map__44939__$1 = cljs.core.__destructure_map(map__44939);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44939__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__44943 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__44943) : success.call(null,G__44943));
}catch (e44940){var e = e44940;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44946,done,error){
var map__44949 = p__44946;
var map__44949__$1 = cljs.core.__destructure_map(map__44949);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44949__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44957,done,error){
var map__44958 = p__44957;
var map__44958__$1 = cljs.core.__destructure_map(map__44958);
var msg = map__44958__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44958__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44972){
var map__44974 = p__44972;
var map__44974__$1 = cljs.core.__destructure_map(map__44974);
var src = map__44974__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44974__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44984 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44984) : done.call(null,G__44984));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44988){
var map__44991 = p__44988;
var map__44991__$1 = cljs.core.__destructure_map(map__44991);
var msg__$1 = map__44991__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44991__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44992){var ex = e44992;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44995){
var map__44996 = p__44995;
var map__44996__$1 = cljs.core.__destructure_map(map__44996);
var env = map__44996__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45007){
var map__45008 = p__45007;
var map__45008__$1 = cljs.core.__destructure_map(map__45008);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45008__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45008__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45012){
var map__45013 = p__45012;
var map__45013__$1 = cljs.core.__destructure_map(map__45013);
var svc = map__45013__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
