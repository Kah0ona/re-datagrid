goog.provide('re_frame.utils');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__44550){
var vec__44551 = p__44550;
var seq__44552 = cljs.core.seq(vec__44551);
var first__44553 = cljs.core.first(seq__44552);
var seq__44552__$1 = cljs.core.next(seq__44552);
var k = first__44553;
var ks = seq__44552__$1;
var keys = vec__44551;
if(ks){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5821__auto__)){
var nextmap = temp__5821__auto__;
var newmap = (re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : re_frame.utils.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
re_frame.utils.apply_kw = (function re_frame$utils$apply_kw(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44610 = arguments.length;
var i__5750__auto___44611 = (0);
while(true){
if((i__5750__auto___44611 < len__5749__auto___44610)){
args__5755__auto__.push((arguments[i__5750__auto___44611]));

var G__44612 = (i__5750__auto___44611 + (1));
i__5750__auto___44611 = G__44612;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_(cljs.core.last(args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

(re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq44564){
var G__44565 = cljs.core.first(seq44564);
var seq44564__$1 = cljs.core.next(seq44564);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44565,seq44564__$1);
}));

re_frame.utils.map_vals = (function re_frame$utils$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__44567){
var vec__44568 = p__44567;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44568,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.utils.find_cycle = (function re_frame$utils$find_cycle(graph,visited,node){
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var path = cljs.core.PersistentVector.EMPTY;
while(true){
var current = cljs.core.peek(stack);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([current]),path))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (stack,path,current){
return (function (p1__44572_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__44572_SHARP_,current);
});})(stack,path,current))
,cljs.core.reverse(path)),current);
} else {
var temp__5821__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,current));
if(temp__5821__auto__){
var neighbors = temp__5821__auto__;
var G__44613 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(neighbors),visited));
var G__44614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,current);
stack = G__44613;
path = G__44614;
continue;
} else {
var G__44615 = cljs.core.pop(stack);
var G__44616 = path;
stack = G__44615;
path = G__44616;
continue;
}
}
break;
}
});
re_frame.utils.topsort_kahn = (function re_frame$utils$topsort_kahn(graph){
var in_degree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__44590){
var vec__44591 = p__44590;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44591,(0),null);
var neighbors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44591,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,neighbor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,neighbor,cljs.core.inc);
}),acc,neighbors);
}),cljs.core.PersistentArrayMap.EMPTY,graph);
var ks = cljs.core.keys(graph);
var q = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (in_degree,ks){
return (function (p1__44578_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$3(in_degree,p1__44578_SHARP_,(0)) === (0));
});})(in_degree,ks))
,ks);
var sorted = re_frame.interop.empty_queue;
var in_degree__$1 = in_degree;
while(true){
if(cljs.core.seq(q)){
var current = cljs.core.first(q);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$3(graph,current,cljs.core.PersistentVector.EMPTY);
var updated_in_degree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,sorted,in_degree__$1,current,neighbors,in_degree,ks){
return (function (acc,neighbor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,neighbor,cljs.core.dec);
});})(q,sorted,in_degree__$1,current,neighbors,in_degree,ks))
,in_degree__$1,neighbors);
var new_q = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(q),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (q,sorted,in_degree__$1,current,neighbors,updated_in_degree,in_degree,ks){
return (function (p1__44579_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(updated_in_degree,p1__44579_SHARP_));
});})(q,sorted,in_degree__$1,current,neighbors,updated_in_degree,in_degree,ks))
,neighbors));
var G__44619 = new_q;
var G__44620 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sorted,current);
var G__44621 = updated_in_degree;
q = G__44619;
sorted = G__44620;
in_degree__$1 = G__44621;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sorted),cljs.core.count(ks))){
return sorted;
} else {
var unvisited = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(sorted),ks);
var cycle = cljs.core.some(((function (q,sorted,in_degree__$1,unvisited,in_degree,ks){
return (function (p1__44584_SHARP_){
return re_frame.utils.find_cycle(graph,cljs.core.set(sorted),p1__44584_SHARP_);
});})(q,sorted,in_degree__$1,unvisited,in_degree,ks))
,unvisited);
throw (new Error(["Graph has a cycle: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cycle)].join('')));

}
}
break;
}
});
re_frame.utils.remove_orphans = (function re_frame$utils$remove_orphans(graph){
return re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filterv,cljs.core.set(cljs.core.keys(graph))),graph);
});
re_frame.utils.safe_update_in = (function re_frame$utils$safe_update_in(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44623 = arguments.length;
var i__5750__auto___44624 = (0);
while(true){
if((i__5750__auto___44624 < len__5749__auto___44623)){
args__5755__auto__.push((arguments[i__5750__auto___44624]));

var G__44625 = (i__5750__auto___44624 + (1));
i__5750__auto___44624 = G__44625;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return re_frame.utils.safe_update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(re_frame.utils.safe_update_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,path,f,args){
if(cljs.core.empty_QMARK_(path)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,m,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,path,f,args);
}
}));

(re_frame.utils.safe_update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.utils.safe_update_in.cljs$lang$applyTo = (function (seq44601){
var G__44602 = cljs.core.first(seq44601);
var seq44601__$1 = cljs.core.next(seq44601);
var G__44603 = cljs.core.first(seq44601__$1);
var seq44601__$2 = cljs.core.next(seq44601__$1);
var G__44604 = cljs.core.first(seq44601__$2);
var seq44601__$3 = cljs.core.next(seq44601__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44602,G__44603,G__44604,seq44601__$3);
}));

/**
 * Dissoces the map entry at the path, then recurs through the ancestors,
 *   dissocing each ancestor until one is found with a descendent outside the path.
 * 
 *   ```
 *   (deep-dissoc {:a {:b {:c {:d 1}}}}
 *             [:a :b :c :d])
 *   ```
 * 
 *   This yields an empty map, since each node has a sole descendant.
 * 
 *   ```
 *   (deep-dissoc {:a {:x 2 :b {:c {:d 1}}}}
 *             [:a :b :c :d])
 *   ```
 * 
 *   This yields `{:a {:x 2}}`, since `:a` has a descendent `:x` outside the path.
 *   
 */
re_frame.utils.deep_dissoc = (function re_frame$utils$deep_dissoc(m,path){
while(true){
if(cljs.core.empty_QMARK_(path)){
return m;
} else {
var new_data = re_frame.utils.safe_update_in.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.pop(path),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.peek(path)], 0));
if((!(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_data,cljs.core.pop(path)))))){
return new_data;
} else {
var G__44626 = new_data;
var G__44627 = cljs.core.pop(path);
m = G__44626;
path = G__44627;
continue;
}
}
break;
}
});

//# sourceMappingURL=re_frame.utils.js.map
