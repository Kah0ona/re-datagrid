goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41981){
var map__41985 = p__41981;
var map__41985__$1 = cljs.core.__destructure_map(map__41985);
var m = map__41985__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41985__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42019_42483 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42020_42484 = null;
var count__42021_42485 = (0);
var i__42022_42486 = (0);
while(true){
if((i__42022_42486 < count__42021_42485)){
var f_42490 = chunk__42020_42484.cljs$core$IIndexed$_nth$arity$2(null,i__42022_42486);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42490], 0));


var G__42491 = seq__42019_42483;
var G__42492 = chunk__42020_42484;
var G__42493 = count__42021_42485;
var G__42494 = (i__42022_42486 + (1));
seq__42019_42483 = G__42491;
chunk__42020_42484 = G__42492;
count__42021_42485 = G__42493;
i__42022_42486 = G__42494;
continue;
} else {
var temp__5823__auto___42495 = cljs.core.seq(seq__42019_42483);
if(temp__5823__auto___42495){
var seq__42019_42496__$1 = temp__5823__auto___42495;
if(cljs.core.chunked_seq_QMARK_(seq__42019_42496__$1)){
var c__5548__auto___42497 = cljs.core.chunk_first(seq__42019_42496__$1);
var G__42498 = cljs.core.chunk_rest(seq__42019_42496__$1);
var G__42499 = c__5548__auto___42497;
var G__42500 = cljs.core.count(c__5548__auto___42497);
var G__42501 = (0);
seq__42019_42483 = G__42498;
chunk__42020_42484 = G__42499;
count__42021_42485 = G__42500;
i__42022_42486 = G__42501;
continue;
} else {
var f_42504 = cljs.core.first(seq__42019_42496__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42504], 0));


var G__42505 = cljs.core.next(seq__42019_42496__$1);
var G__42506 = null;
var G__42507 = (0);
var G__42508 = (0);
seq__42019_42483 = G__42505;
chunk__42020_42484 = G__42506;
count__42021_42485 = G__42507;
i__42022_42486 = G__42508;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42510 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42510], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42510)))?cljs.core.second(arglists_42510):arglists_42510)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42109_42512 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42110_42513 = null;
var count__42111_42514 = (0);
var i__42112_42515 = (0);
while(true){
if((i__42112_42515 < count__42111_42514)){
var vec__42142_42516 = chunk__42110_42513.cljs$core$IIndexed$_nth$arity$2(null,i__42112_42515);
var name_42517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42142_42516,(0),null);
var map__42145_42518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42142_42516,(1),null);
var map__42145_42519__$1 = cljs.core.__destructure_map(map__42145_42518);
var doc_42520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42145_42519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42145_42519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42517], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42521], 0));

if(cljs.core.truth_(doc_42520)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42520], 0));
} else {
}


var G__42523 = seq__42109_42512;
var G__42524 = chunk__42110_42513;
var G__42525 = count__42111_42514;
var G__42526 = (i__42112_42515 + (1));
seq__42109_42512 = G__42523;
chunk__42110_42513 = G__42524;
count__42111_42514 = G__42525;
i__42112_42515 = G__42526;
continue;
} else {
var temp__5823__auto___42534 = cljs.core.seq(seq__42109_42512);
if(temp__5823__auto___42534){
var seq__42109_42535__$1 = temp__5823__auto___42534;
if(cljs.core.chunked_seq_QMARK_(seq__42109_42535__$1)){
var c__5548__auto___42536 = cljs.core.chunk_first(seq__42109_42535__$1);
var G__42537 = cljs.core.chunk_rest(seq__42109_42535__$1);
var G__42538 = c__5548__auto___42536;
var G__42539 = cljs.core.count(c__5548__auto___42536);
var G__42540 = (0);
seq__42109_42512 = G__42537;
chunk__42110_42513 = G__42538;
count__42111_42514 = G__42539;
i__42112_42515 = G__42540;
continue;
} else {
var vec__42161_42541 = cljs.core.first(seq__42109_42535__$1);
var name_42542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42161_42541,(0),null);
var map__42164_42543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42161_42541,(1),null);
var map__42164_42544__$1 = cljs.core.__destructure_map(map__42164_42543);
var doc_42545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42164_42544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42164_42544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42542], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42546], 0));

if(cljs.core.truth_(doc_42545)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42545], 0));
} else {
}


var G__42547 = cljs.core.next(seq__42109_42535__$1);
var G__42548 = null;
var G__42549 = (0);
var G__42550 = (0);
seq__42109_42512 = G__42547;
chunk__42110_42513 = G__42548;
count__42111_42514 = G__42549;
i__42112_42515 = G__42550;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42177 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42178 = null;
var count__42179 = (0);
var i__42180 = (0);
while(true){
if((i__42180 < count__42179)){
var role = chunk__42178.cljs$core$IIndexed$_nth$arity$2(null,i__42180);
var temp__5823__auto___42551__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___42551__$1)){
var spec_42552 = temp__5823__auto___42551__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42552)], 0));
} else {
}


var G__42557 = seq__42177;
var G__42558 = chunk__42178;
var G__42559 = count__42179;
var G__42560 = (i__42180 + (1));
seq__42177 = G__42557;
chunk__42178 = G__42558;
count__42179 = G__42559;
i__42180 = G__42560;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__42177);
if(temp__5823__auto____$1){
var seq__42177__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42177__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__42177__$1);
var G__42561 = cljs.core.chunk_rest(seq__42177__$1);
var G__42562 = c__5548__auto__;
var G__42563 = cljs.core.count(c__5548__auto__);
var G__42564 = (0);
seq__42177 = G__42561;
chunk__42178 = G__42562;
count__42179 = G__42563;
i__42180 = G__42564;
continue;
} else {
var role = cljs.core.first(seq__42177__$1);
var temp__5823__auto___42565__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___42565__$2)){
var spec_42566 = temp__5823__auto___42565__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42566)], 0));
} else {
}


var G__42567 = cljs.core.next(seq__42177__$1);
var G__42568 = null;
var G__42569 = (0);
var G__42570 = (0);
seq__42177 = G__42567;
chunk__42178 = G__42568;
count__42179 = G__42569;
i__42180 = G__42570;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42240 = datafied_throwable;
var map__42240__$1 = cljs.core.__destructure_map(map__42240);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42240__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42240__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42240__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42241 = cljs.core.last(via);
var map__42241__$1 = cljs.core.__destructure_map(map__42241);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42242 = data;
var map__42242__$1 = cljs.core.__destructure_map(map__42242);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42242__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42242__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42242__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42243 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42243__$1 = cljs.core.__destructure_map(map__42243);
var top_data = map__42243__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42243__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42255 = phase;
var G__42255__$1 = (((G__42255 instanceof cljs.core.Keyword))?G__42255.fqn:null);
switch (G__42255__$1) {
case "read-source":
var map__42265 = data;
var map__42265__$1 = cljs.core.__destructure_map(map__42265);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42265__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42265__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42269 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42269__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42269,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42269);
var G__42269__$2 = (cljs.core.truth_((function (){var fexpr__42274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42274.cljs$core$IFn$_invoke$arity$1 ? fexpr__42274.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42274.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42269__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42269__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42269__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42282 = top_data;
var G__42282__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42282,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42282);
var G__42282__$2 = (cljs.core.truth_((function (){var fexpr__42285 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42285.cljs$core$IFn$_invoke$arity$1 ? fexpr__42285.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42285.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42282__$1);
var G__42282__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42282__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42282__$2);
var G__42282__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42282__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42282__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42282__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42282__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42289 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42289,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42289,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42289,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42289,(3),null);
var G__42294 = top_data;
var G__42294__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42294,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42294);
var G__42294__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42294__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42294__$1);
var G__42294__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42294__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42294__$2);
var G__42294__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42294__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42294__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42294__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42294__$4;
}

break;
case "execution":
var vec__42299 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42299,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42228_SHARP_){
var or__5025__auto__ = (p1__42228_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__42324 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42324.cljs$core$IFn$_invoke$arity$1 ? fexpr__42324.cljs$core$IFn$_invoke$arity$1(p1__42228_SHARP_) : fexpr__42324.call(null,p1__42228_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__42325 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42325__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42325);
var G__42325__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42325__$1);
var G__42325__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42325__$2);
var G__42325__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42325__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42325__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42255__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42362){
var map__42364 = p__42362;
var map__42364__$1 = cljs.core.__destructure_map(map__42364);
var triage_data = map__42364__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42364__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42374 = phase;
var G__42374__$1 = (((G__42374 instanceof cljs.core.Keyword))?G__42374.fqn:null);
switch (G__42374__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42377 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42378 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42379 = loc;
var G__42380 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42386_42627 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42387_42628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42388_42629 = true;
var _STAR_print_fn_STAR__temp_val__42389_42630 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42388_42629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42389_42630);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42357_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42357_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42387_42628);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42386_42627);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42377,G__42378,G__42379,G__42380) : format.call(null,G__42377,G__42378,G__42379,G__42380));

break;
case "macroexpansion":
var G__42408 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42409 = cause_type;
var G__42410 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42411 = loc;
var G__42412 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42408,G__42409,G__42410,G__42411,G__42412) : format.call(null,G__42408,G__42409,G__42410,G__42411,G__42412));

break;
case "compile-syntax-check":
var G__42413 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42414 = cause_type;
var G__42415 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42416 = loc;
var G__42417 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42413,G__42414,G__42415,G__42416,G__42417) : format.call(null,G__42413,G__42414,G__42415,G__42416,G__42417));

break;
case "compilation":
var G__42422 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42423 = cause_type;
var G__42424 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42425 = loc;
var G__42426 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42422,G__42423,G__42424,G__42425,G__42426) : format.call(null,G__42422,G__42423,G__42424,G__42425,G__42426));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42433 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42434 = symbol;
var G__42435 = loc;
var G__42436 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42443_42639 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42444_42640 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42445_42641 = true;
var _STAR_print_fn_STAR__temp_val__42446_42642 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42445_42641);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42446_42642);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42361_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42361_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42444_42640);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42443_42639);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42433,G__42434,G__42435,G__42436) : format.call(null,G__42433,G__42434,G__42435,G__42436));
} else {
var G__42460 = "Execution error%s at %s(%s).\n%s\n";
var G__42461 = cause_type;
var G__42462 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42463 = loc;
var G__42464 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42460,G__42461,G__42462,G__42463,G__42464) : format.call(null,G__42460,G__42461,G__42462,G__42463,G__42464));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42374__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
