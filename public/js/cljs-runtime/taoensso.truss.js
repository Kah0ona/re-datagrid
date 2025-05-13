goog.provide('taoensso.truss');
/**
 * Returns true iff `sub-map` is a (possibly nested) submap of `super-map`,
 *   i.e. iff every (nested) value in `sub-map` has the same (nested) value in `super-map`.
 * 
 *   `sub-map` may contain special values:
 *  `:submap/nx`     - Matches iff `super-map` does not contain key
 *  `:submap/ex`     - Matches iff `super-map` does     contain key (any     val)
 *  `:submap/some`   - Matches iff `super-map` does     contain key (non-nil val)
 *  (fn [super-val]) - Matches iff given unary predicate returns truthy
 * 
 *   Uses stack recursion so supports only limited nesting.
 */
taoensso.truss.submap_QMARK_ = (function taoensso$truss$submap_QMARK_(super_map,sub_map){
return cljs.core.reduce_kv((function (_,sub_key,sub_val){
if(cljs.core.map_QMARK_(sub_val)){
var super_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(super_map,sub_key);
var temp__5821__auto__ = (function (){var and__5023__auto__ = cljs.core.map_QMARK_(super_val);
if(and__5023__auto__){
return (taoensso.truss.submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.truss.submap_QMARK_.cljs$core$IFn$_invoke$arity$2(super_val,sub_val) : taoensso.truss.submap_QMARK_.call(null,super_val,sub_val));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var match_QMARK_ = temp__5821__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
} else {
var super_val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(super_map,sub_key,new cljs.core.Keyword("taoensso.truss","nx","taoensso.truss/nx",1464090303));
var temp__5821__auto__ = (function (){var temp__5821__auto__ = ((cljs.core.fn_QMARK_(sub_val))?sub_val:null);
if(cljs.core.truth_(temp__5821__auto__)){
var pred_fn = temp__5821__auto__;
return (pred_fn.cljs$core$IFn$_invoke$arity$1 ? pred_fn.cljs$core$IFn$_invoke$arity$1(super_val) : pred_fn.call(null,super_val));
} else {
var G__46625 = sub_val;
var G__46625__$1 = (((G__46625 instanceof cljs.core.Keyword))?G__46625.fqn:null);
switch (G__46625__$1) {
case "submap/nx":
return cljs.core.keyword_identical_QMARK_(super_val,new cljs.core.Keyword("taoensso.truss","nx","taoensso.truss/nx",1464090303));

break;
case "submap/ex":
return (!(cljs.core.keyword_identical_QMARK_(super_val,new cljs.core.Keyword("taoensso.truss","nx","taoensso.truss/nx",1464090303))));

break;
case "submap/some":
return (!((super_val == null)));

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_val,super_val);

}
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var match_QMARK_ = temp__5821__auto__;
return true;
} else {
return cljs.core.reduced(false);
}
}
}),true,sub_map);
});
/**
 * Optional context to add to the data of exceptions created by `truss/ex-info`.
 * 
 *   Value may be any type, but is usually nil or a map. Default (root) value is nil.
 *   When present, value will be assoc'ed to `:truss/ctx` key of exception data.
 * 
 *   Useful for dynamically providing arbitrary contextual info to exceptions:
 * 
 *   Re/bind dynamic        value using `with-ctx`, `with-ctx+`, or `binding`.
 *   Modify  root (default) value using `set-ctx!`.
 * 
 *   As with all dynamic Clojure vars, "binding conveyance" applies when using
 *   futures, agents, etc.
 */
taoensso.truss._STAR_ctx_STAR_ = null;
/**
 * Like `core/ex-info` but when dynamic `*ctx*` value is present, it will be
 *   assoc'ed to `:truss/ctx` key of returned exception's data.
 * 
 *   Useful for dynamically providing arbitrary contextual info to exceptions.
 *   See `*ctx*` for details.
 */
taoensso.truss.ex_info = (function taoensso$truss$ex_info(var_args){
var G__46640 = arguments.length;
switch (G__46640) {
case 1:
return taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3(msg,cljs.core.PersistentArrayMap.EMPTY,null);
}));

(taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$2 = (function (msg,data_map){
return taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3(msg,data_map,null);
}));

(taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3 = (function (msg,data_map,cause){
var temp__5821__auto__ = taoensso.truss._STAR_ctx_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var ctx = temp__5821__auto__;
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(msg,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_map,new cljs.core.Keyword("truss","ctx","truss/ctx",-336831129),ctx),cause);
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(msg,data_map,cause);
}
}));

(taoensso.truss.ex_info.cljs$lang$maxFixedArity = 3);

/**
 * Throws a `truss/ex-info`.
 */
taoensso.truss.ex_info_BANG_ = (function taoensso$truss$ex_info_BANG_(var_args){
var G__46648 = arguments.length;
switch (G__46648) {
case 1:
return taoensso.truss.ex_info_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.truss.ex_info_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.truss.ex_info_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.ex_info_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3(msg,cljs.core.PersistentArrayMap.EMPTY,null);
}));

(taoensso.truss.ex_info_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,data_map){
throw taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3(msg,data_map,null);
}));

(taoensso.truss.ex_info_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (msg,data_map,cause){
throw taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3(msg,data_map,cause);
}));

(taoensso.truss.ex_info_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Set `*ctx*` var's default (root) value. See `*ctx*` for details.
 */
taoensso.truss.set_ctx_BANG_ = (function taoensso$truss$set_ctx_BANG_(root_ctx_val){
return (taoensso.truss._STAR_ctx_STAR_ = root_ctx_val);
});
/**
 * Returns `new-ctx` given `old-ctx` and an update map or fn.
 */
taoensso.truss.update_ctx = (function taoensso$truss$update_ctx(old_ctx,update_map_or_fn){
if((update_map_or_fn == null)){
return old_ctx;
} else {
if(cljs.core.map_QMARK_(update_map_or_fn)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old_ctx,update_map_or_fn);
} else {
if(cljs.core.ifn_QMARK_(update_map_or_fn)){
return (update_map_or_fn.cljs$core$IFn$_invoke$arity$1 ? update_map_or_fn.cljs$core$IFn$_invoke$arity$1(old_ctx) : update_map_or_fn.call(null,old_ctx));
} else {
var G__46653 = update_map_or_fn;
var G__46654 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"update-map-or-fn","update-map-or-fn",1067081399,null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.truss","update-ctx","taoensso.truss/update-ctx",2138642429,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,"null",new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null"], null), null)], null);
return (taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 ? taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(G__46653,G__46654) : taoensso.truss.unexpected_arg_BANG_.call(null,G__46653,G__46654));

}
}
}
});
/**
 * Returns true iff given platform error (`Throwable` or `js/Error`).
 */
taoensso.truss.error_QMARK_ = (function taoensso$truss$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Private, don't use.
 *   Returns root cause of given platform error.
 */
taoensso.truss.ex_root = (function taoensso$truss$ex_root(x){
if(cljs.core.truth_(taoensso.truss.error_QMARK_(x))){
var error = x;
while(true){
var temp__5821__auto__ = cljs.core.ex_cause(error);
if(cljs.core.truth_(temp__5821__auto__)){
var cause = temp__5821__auto__;
var G__46811 = cause;
error = G__46811;
continue;
} else {
return error;
}
break;
}
} else {
return null;
}
});
/**
 * Private, don't use.
 *   Returns class symbol of given platform error.
 */
taoensso.truss.ex_type = (function taoensso$truss$ex_type(x){
if((x instanceof cljs.core.ExceptionInfo)){
return new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null);
} else {
if((x instanceof Error)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",x.name);
} else {
return null;
}
}
});
/**
 * Private, don't use.
 *   Returns ?{:keys [type msg data]} for given platform error.
 */
taoensso.truss.ex_map_STAR_ = (function taoensso$truss$ex_map_STAR_(x){
var temp__5823__auto__ = cljs.core.ex_message(x);
if(cljs.core.truth_(temp__5823__auto__)){
var msg = temp__5823__auto__;
var temp__5821__auto__ = cljs.core.not_empty(cljs.core.ex_data(x));
if(cljs.core.truth_(temp__5821__auto__)){
var data = temp__5821__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),taoensso.truss.ex_type(x),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),taoensso.truss.ex_type(x),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
}
} else {
return null;
}
});
/**
 * Private, don't use.
 *   Returns vector cause chain of given platform error.
 */
taoensso.truss.ex_chain = (function taoensso$truss$ex_chain(var_args){
var G__46661 = arguments.length;
switch (G__46661) {
case 1:
return taoensso.truss.ex_chain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.truss.ex_chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.ex_chain.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.truss.ex_chain.cljs$core$IFn$_invoke$arity$2(false,x);
}));

(taoensso.truss.ex_chain.cljs$core$IFn$_invoke$arity$2 = (function (as_maps_QMARK_,x){
if(cljs.core.truth_(taoensso.truss.error_QMARK_(x))){
var xf = (cljs.core.truth_(as_maps_QMARK_)?taoensso.truss.ex_map_STAR_:cljs.core.identity);
var acc = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(x) : xf.call(null,x))], null);
var error = x;
while(true){
var temp__5821__auto__ = cljs.core.ex_cause(error);
if(cljs.core.truth_(temp__5821__auto__)){
var cause = temp__5821__auto__;
var G__46813 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(cause) : xf.call(null,cause)));
var G__46814 = cause;
acc = G__46813;
error = G__46814;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
}));

(taoensso.truss.ex_chain.cljs$lang$maxFixedArity = 2);

/**
 * Private, don't use.
 *   Returns ?{:keys [type msg data chain trace]} for given platform error.
 */
taoensso.truss.ex_map = (function taoensso$truss$ex_map(x){
var temp__5823__auto__ = taoensso.truss.ex_chain.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5823__auto__)){
var chain = temp__5823__auto__;
var maps = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.truss.ex_map_STAR_,chain);
var root = cljs.core.peek(chain);
var root_map = cljs.core.peek(maps);
return taoensso.truss.impl.assoc_some.cljs$core$IFn$_invoke$arity$2(root_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chain","chain",15631029),maps,new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){var temp__5823__auto____$1 = root.stack;
if(cljs.core.truth_(temp__5823__auto____$1)){
var st = temp__5823__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(st,"")){
return null;
} else {
return st;
}
} else {
return null;
}
})()], null));
} else {
return null;
}
});
/**
 * Throws `truss/ex-info` to indicate an unexpected argument.
 *   Takes optional kvs for merging into exception's data map.
 * 
 *  (let [mode :unexpected]
 *    (case mode
 *      :read  (do <...>)
 *      :write (do <...>)
 *      (unexpected-arg! mode
 *        {:param       'mode
 *         :context  `my-function
 *         :expected #{:read :write}}))) =>
 * 
 *  Unexpected argument: :unexpected
 *  {:param 'mode,
 *   :arg {:value :unexpected, :type clojure.lang.Keyword},
 *   :context 'taoensso.encore/my-function,
 *   :expected #{:read :write}}
 */
taoensso.truss.unexpected_arg_BANG_ = (function taoensso$truss$unexpected_arg_BANG_(var_args){
var G__46675 = arguments.length;
switch (G__46675) {
case 1:
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 9:
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,null);
}));

(taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (arg,opts){
throw taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"msg","msg",-1386103444));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ["Unexpected argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg == null))?"<nil>":arg))].join('');
}
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),arg,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(arg)], null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"msg","msg",-1386103444))));
}));

(taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (arg,k1,v1){
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1]));
}));

(taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (arg,k1,v1,k2,v2){
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2]));
}));

(taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (arg,k1,v1,k2,v2,k3,v3){
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3]));
}));

(taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (arg,k1,v1,k2,v2,k3,v3,k4,v4){
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(arg,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v1,k2,v2,k3,v3,k4,v4]));
}));

(taoensso.truss.unexpected_arg_BANG_.cljs$lang$maxFixedArity = 9);

/**
 * Given a platform error and criteria for matching, returns the error if it
 *   matches all criteria. Otherwise returns nil.
 * 
 *   `kind` may be:
 *  - A class (`ArithmeticException`, `AssertionError`, etc.)
 *  - A special keyword as given to `try*` (`:default`, `:common`, `:ex-info`, `:all`)
 *  - A set of `kind`s  as above, at least one of which must match
 *  - A predicate function, (fn match? [x]) -> bool
 * 
 *   `pattern` may be:
 *  - A string or Regex against which `ex-message` must match
 *  - A map             against which `ex-data`    must match using `submap?`
 *  - A set of `pattern`s as above, at least one of which must match
 * 
 *   When an error with (nested) causes doesn't match, a match will be attempted
 *   against its (nested) causes.
 * 
 *   This is a low-level util, see also `throws`, `throws?`.
 */
taoensso.truss.matching_error = (function taoensso$truss$matching_error(var_args){
var G__46687 = arguments.length;
switch (G__46687) {
case 1:
return taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$1 = (function (error){
return error;
}));

(taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$2 = (function (kind,error){
var temp__5823__auto__ = (((kind instanceof cljs.core.Keyword))?(function (){var G__46691 = kind;
var G__46691__$1 = (((G__46691 instanceof cljs.core.Keyword))?G__46691.fqn:null);
switch (G__46691__$1) {
case "default":
case "all-but-critical":
return (!((error == null)));

break;
case "common":
return (error instanceof Error);

break;
case "ex-info":
return (error instanceof cljs.core.ExceptionInfo);

break;
case "all":
case "any":
return (!((error == null)));

break;
default:
throw taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected Truss `matching-error` `kind` keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),kind,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(kind)], null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),"null",new cljs.core.Keyword(null,"all","all",892129742),"null",new cljs.core.Keyword(null,"common","common",-1822281391),"null",new cljs.core.Keyword(null,"ex-info","ex-info",2114560529),"null"], null), null)], null));

}
})():(cljs.core.truth_(taoensso.truss.error_QMARK_(kind))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind,error):((cljs.core.fn_QMARK_(kind))?(kind.cljs$core$IFn$_invoke$arity$1 ? kind.cljs$core$IFn$_invoke$arity$1(error) : kind.call(null,error)):((cljs.core.set_QMARK_(kind))?taoensso.truss.impl.rsome((function (p1__46682_SHARP_){
return taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$2(p1__46682_SHARP_,error);
}),kind):(error instanceof kind)
))));
if(cljs.core.truth_(temp__5823__auto__)){
var match_QMARK_ = temp__5823__auto__;
return error;
} else {
return null;
}
}));

(taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$3 = (function (kind,pattern,error){
var temp__5821__auto__ = (function (){var and__5023__auto__ = taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$2(kind,error);
if(cljs.core.truth_(and__5023__auto__)){
if((pattern == null)){
return true;
} else {
if(cljs.core.set_QMARK_(pattern)){
return taoensso.truss.impl.rsome((function (p1__46684_SHARP_){
return taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$3(kind,p1__46684_SHARP_,error);
}),pattern);
} else {
if(typeof pattern === 'string'){
return taoensso.truss.impl.str_contains_QMARK_(cljs.core.ex_message(error),pattern);
} else {
if(taoensso.truss.impl.re_pattern_QMARK_(pattern)){
return cljs.core.re_find(pattern,cljs.core.ex_message(error));
} else {
if(cljs.core.map_QMARK_(pattern)){
var temp__5823__auto__ = cljs.core.ex_data(error);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return taoensso.truss.submap_QMARK_(data,pattern);
} else {
return null;
}
} else {
return taoensso.truss.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.truss","matching-error","taoensso.truss/matching-error",557680092,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [null,"null",new cljs.core.Symbol(null,"set","set",1945134081,null),"null",new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null)], null));

}
}
}
}
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var match_QMARK_ = temp__5821__auto__;
return error;
} else {
var temp__5823__auto__ = cljs.core.ex_cause(error);
if(cljs.core.truth_(temp__5823__auto__)){
var cause = temp__5823__auto__;
return taoensso.truss.matching_error.cljs$core$IFn$_invoke$arity$3(kind,pattern,cause);
} else {
return null;
}
}
}));

(taoensso.truss.matching_error.cljs$lang$maxFixedArity = 3);

var get_default_error_fn_46850 = (function (base_data){
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$3(base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468),"Error thrown during reduction");
var base_data__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base_data,new cljs.core.Keyword("error","msg","error/msg",-1549923468));
return (function taoensso$truss$default_error_fn(data,cause){
throw taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3(msg,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_data__$1,data),cause);
});
});
/**
 * Returns wrapper around given reducing function `rf` so that if `rf`
 *  throws, (error-fn <thrown-error> <contextual-data>) will be called.
 * 
 *  The default `error-fn` will rethrow the original error, wrapped in
 *  extra contextual information to aid debugging.
 * 
 *  Helps make reducing fns easier to debug!
 *  See also `catching-xform`.
 */
taoensso.truss.catching_rf = (function taoensso$truss$catching_rf(var_args){
var G__46698 = arguments.length;
switch (G__46698) {
case 1:
return taoensso.truss.catching_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.truss.catching_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.catching_rf.cljs$core$IFn$_invoke$arity$1 = (function (rf){
return taoensso.truss.catching_rf.cljs$core$IFn$_invoke$arity$2(get_default_error_fn_46850(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf], null)),rf);
}));

(taoensso.truss.catching_rf.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,rf){
var error_fn__$1 = ((cljs.core.map_QMARK_(error_fn))?get_default_error_fn_46850(error_fn):error_fn);
return (function() {
var taoensso$truss$catching_rf = null;
var taoensso$truss$catching_rf__0 = (function (){
try{return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
}catch (e46699){var t = e46699;
var G__46700 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null))], null);
var G__46701 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__46700,G__46701) : error_fn__$1.call(null,G__46700,G__46701));
}});
var taoensso$truss$catching_rf__1 = (function (acc){
try{return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}catch (e46704){var t = e46704;
var G__46705 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null)], null)], null);
var G__46706 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__46705,G__46706) : error_fn__$1.call(null,G__46705,G__46706));
}});
var taoensso$truss$catching_rf__2 = (function (acc,in$){
try{return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
}catch (e46707){var t = e46707;
var G__46708 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"in","in",109346662,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),in$,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(in$)], null)], null)], null);
var G__46709 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__46708,G__46709) : error_fn__$1.call(null,G__46708,G__46709));
}});
var taoensso$truss$catching_rf__3 = (function (acc,k,v){
try{return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
}catch (e46710){var t = e46710;
var G__46711 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rf","rf",2002878243),rf,new cljs.core.Keyword(null,"call","call",-519999866),cljs.core.list(new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),acc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(acc)], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(k)], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(v)], null)], null)], null);
var G__46712 = t;
return (error_fn__$1.cljs$core$IFn$_invoke$arity$2 ? error_fn__$1.cljs$core$IFn$_invoke$arity$2(G__46711,G__46712) : error_fn__$1.call(null,G__46711,G__46712));
}});
taoensso$truss$catching_rf = function(acc,k,v){
switch(arguments.length){
case 0:
return taoensso$truss$catching_rf__0.call(this);
case 1:
return taoensso$truss$catching_rf__1.call(this,acc);
case 2:
return taoensso$truss$catching_rf__2.call(this,acc,k);
case 3:
return taoensso$truss$catching_rf__3.call(this,acc,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$truss$catching_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$truss$catching_rf__0;
taoensso$truss$catching_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$truss$catching_rf__1;
taoensso$truss$catching_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$truss$catching_rf__2;
taoensso$truss$catching_rf.cljs$core$IFn$_invoke$arity$3 = taoensso$truss$catching_rf__3;
return taoensso$truss$catching_rf;
})()
}));

(taoensso.truss.catching_rf.cljs$lang$maxFixedArity = 2);

/**
 * Like `catching-rf`, but applies to a transducer (`xform`).
 * 
 *   Helps make transductions much easier to debug by greatly improving
 *   the info provided in any errors thrown by `xform` or the reducing fn:
 * 
 *  (transduce
 *    (catching-xform (comp (filter even?) (map inc))) ; Modified xform
 *    <reducing-fn>
 *    <...>)
 */
taoensso.truss.catching_xform = (function taoensso$truss$catching_xform(var_args){
var G__46714 = arguments.length;
switch (G__46714) {
case 2:
return taoensso.truss.catching_xform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.truss.catching_xform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.catching_xform.cljs$core$IFn$_invoke$arity$2 = (function (error_fn,xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (rf){
return taoensso.truss.catching_rf.cljs$core$IFn$_invoke$arity$2(error_fn,rf);
}),xform);
}));

(taoensso.truss.catching_xform.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.truss.catching_rf,xform);
}));

(taoensso.truss.catching_xform.cljs$lang$maxFixedArity = 2);

var newline_46859 = "\n";
var legacy_ex_data_QMARK__46860 = false;
/**
 * Returns an appropriate `truss/ex-info` for given failed assertion info map.
 */
taoensso.truss.failed_assertion_ex_info = (function taoensso$truss$failed_assertion_ex_info(var_args){
var G__46716 = arguments.length;
switch (G__46716) {
case 1:
return taoensso.truss.failed_assertion_ex_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.truss.failed_assertion_ex_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.failed_assertion_ex_info.cljs$core$IFn$_invoke$arity$1 = (function (failed_assertion_info){
return taoensso.truss.failed_assertion_ex_info.cljs$core$IFn$_invoke$arity$2(legacy_ex_data_QMARK__46860,failed_assertion_info);
}));

(taoensso.truss.failed_assertion_ex_info.cljs$core$IFn$_invoke$arity$2 = (function (legacy_ex_data_QMARK___$1,failed_assertion_info){
var map__46717 = failed_assertion_info;
var map__46717__$1 = cljs.core.__destructure_map(map__46717);
var inst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var coords = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"coords","coords",-599429112));
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var arg_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"arg-form","arg-form",1400564013));
var arg_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"arg-val","arg-val",1802419280));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46717__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var undefined_arg_QMARK_ = cljs.core.keyword_identical_QMARK_(arg_val,new cljs.core.Keyword("truss","exception","truss/exception",1369199181));
var coords_str = (function (){var temp__5823__auto__ = coords;
if(cljs.core.truth_(temp__5823__auto__)){
var vec__46718 = temp__5823__auto__;
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46718,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46718,(1),null);
if(cljs.core.truth_(column)){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),"]"].join('');
} else {
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"]"].join('');
}
} else {
return null;
}
})();
var msg = ["Truss assertion failed at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),coords_str,": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,pred,(new cljs.core.List(null,arg_form,null,(1),null)),(2),null)))].join('');
var msg__$1 = (cljs.core.truth_(error)?(function (){var error_msg = cljs.core.ex_message(error);
if(undefined_arg_QMARK_){
return [msg,newline_46859,"Error evaluating arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_msg)].join('');
} else {
return [msg,newline_46859,"Error evaluating pred: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_msg)].join('');
}
})():msg);
return taoensso.truss.ex_info.cljs$core$IFn$_invoke$arity$3(msg__$1,(cljs.core.truth_(legacy_ex_data_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"dt","dt",-368444759),(new Date()),new cljs.core.Keyword(null,"loc","loc",-584284901),(function (){var vec__46721 = coords;
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46721,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46721,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
})(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),data,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),taoensso.truss._STAR_ctx_STAR_], null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*assert*","*assert*",-160895053),cljs.core._STAR_assert_STAR_], null),new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),arg_form,new cljs.core.Keyword(null,"value","value",305978217),arg_val,new cljs.core.Keyword(null,"type","type",1174270348),((undefined_arg_QMARK_)?new cljs.core.Keyword("truss","exception","truss/exception",1369199181):cljs.core.type(arg_val))], null)], null):taoensso.truss.impl.assoc_some.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inst","inst",645962501),(new Date()),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),arg_form,new cljs.core.Keyword(null,"value","value",305978217),arg_val,new cljs.core.Keyword(null,"type","type",1174270348),((undefined_arg_QMARK_)?new cljs.core.Keyword("truss","exception","truss/exception",1369199181):cljs.core.type(arg_val))], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coords","coords",-599429112),coords,new cljs.core.Keyword(null,"data","data",-232669377),data], null))),error);
}));

(taoensso.truss.failed_assertion_ex_info.cljs$lang$maxFixedArity = 2);

/**
 * ?(fn [failed-assertion-info]) to call with failed assertion info map
 *   when a Truss assertion (`have`, `have?`, `have!`, `have!?`) fails.
 * 
 *   Will by default throw an appropriate `truss/ex-info`.
 *   This is a decent place to inject logging for assertion failures.
 */
taoensso.truss._STAR_failed_assertion_handler_STAR_ = (function taoensso$truss$_STAR_failed_assertion_handler_STAR_(failed_assertion_info){
throw taoensso.truss.failed_assertion_ex_info.cljs$core$IFn$_invoke$arity$1(failed_assertion_info);
});
/**
 * Private, don't use.
 */
taoensso.truss.failed_assertion_BANG_ = (function taoensso$truss$failed_assertion_BANG_(ns,line,column,pred,arg_form,arg_val,data_fn,error){
var temp__5821__auto__ = taoensso.truss._STAR_failed_assertion_handler_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var handler = temp__5821__auto__;
var G__46737 = (function (){var undefined_arg_QMARK_ = (arg_val instanceof taoensso.truss.impl.ArgEvalError);
return (new taoensso.truss.impl.FailedAssertionInfo(ns,(cljs.core.truth_(line)?(cljs.core.truth_(column)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null)):null),pred,arg_form,((undefined_arg_QMARK_)?new cljs.core.Keyword("truss","exception","truss/exception",1369199181):arg_val),(function (){var temp__5823__auto__ = data_fn;
if(cljs.core.truth_(temp__5823__auto__)){
var df = temp__5823__auto__;
try{return (df.cljs$core$IFn$_invoke$arity$0 ? df.cljs$core$IFn$_invoke$arity$0() : df.call(null));
}catch (e46756){var _ = e46756;
return new cljs.core.Keyword("truss","exception","truss/exception",1369199181);
}} else {
return null;
}
})(),(((error === taoensso.truss.impl.FalsePredError))?null:((undefined_arg_QMARK_)?error.ex:error
)),null,null,null));
})();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__46737) : handler.call(null,G__46737));
} else {
return arg_val;
}
});
taoensso.truss.get_dynamic_assertion_data = (function taoensso$truss$get_dynamic_assertion_data(){
return taoensso.truss._STAR_ctx_STAR_;
});
taoensso.truss.get_data = (function taoensso$truss$get_data(){
return taoensso.truss._STAR_ctx_STAR_;
});
taoensso.truss.set_error_fn_BANG_ = (function taoensso$truss$set_error_fn_BANG_(f){
return (taoensso.truss._STAR_failed_assertion_handler_STAR_ = f);
});

//# sourceMappingURL=taoensso.truss.js.map
