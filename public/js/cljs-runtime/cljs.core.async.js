goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38995 = (function (f,blockable,meta38996){
this.f = f;
this.blockable = blockable;
this.meta38996 = meta38996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38997,meta38996__$1){
var self__ = this;
var _38997__$1 = this;
return (new cljs.core.async.t_cljs$core$async38995(self__.f,self__.blockable,meta38996__$1));
}));

(cljs.core.async.t_cljs$core$async38995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38997){
var self__ = this;
var _38997__$1 = this;
return self__.meta38996;
}));

(cljs.core.async.t_cljs$core$async38995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38996","meta38996",-573329571,null)], null);
}));

(cljs.core.async.t_cljs$core$async38995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38995");

(cljs.core.async.t_cljs$core$async38995.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async38995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38995.
 */
cljs.core.async.__GT_t_cljs$core$async38995 = (function cljs$core$async$__GT_t_cljs$core$async38995(f,blockable,meta38996){
return (new cljs.core.async.t_cljs$core$async38995(f,blockable,meta38996));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38994 = arguments.length;
switch (G__38994) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async38995(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39007 = arguments.length;
switch (G__39007) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39016 = arguments.length;
switch (G__39016) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39020 = arguments.length;
switch (G__39020) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41735 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41735) : fn1.call(null,val_41735));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41735) : fn1.call(null,val_41735));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39025 = arguments.length;
switch (G__39025) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___41741 = n;
var x_41742 = (0);
while(true){
if((x_41742 < n__5616__auto___41741)){
(a[x_41742] = x_41742);

var G__41743 = (x_41742 + (1));
x_41742 = G__41743;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39032 = (function (flag,meta39033){
this.flag = flag;
this.meta39033 = meta39033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39034,meta39033__$1){
var self__ = this;
var _39034__$1 = this;
return (new cljs.core.async.t_cljs$core$async39032(self__.flag,meta39033__$1));
}));

(cljs.core.async.t_cljs$core$async39032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39034){
var self__ = this;
var _39034__$1 = this;
return self__.meta39033;
}));

(cljs.core.async.t_cljs$core$async39032.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39032.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39033","meta39033",-1884507987,null)], null);
}));

(cljs.core.async.t_cljs$core$async39032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39032");

(cljs.core.async.t_cljs$core$async39032.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async39032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39032.
 */
cljs.core.async.__GT_t_cljs$core$async39032 = (function cljs$core$async$__GT_t_cljs$core$async39032(flag,meta39033){
return (new cljs.core.async.t_cljs$core$async39032(flag,meta39033));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async39032(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39040 = (function (flag,cb,meta39041){
this.flag = flag;
this.cb = cb;
this.meta39041 = meta39041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39042,meta39041__$1){
var self__ = this;
var _39042__$1 = this;
return (new cljs.core.async.t_cljs$core$async39040(self__.flag,self__.cb,meta39041__$1));
}));

(cljs.core.async.t_cljs$core$async39040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39042){
var self__ = this;
var _39042__$1 = this;
return self__.meta39041;
}));

(cljs.core.async.t_cljs$core$async39040.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39041","meta39041",684505629,null)], null);
}));

(cljs.core.async.t_cljs$core$async39040.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39040");

(cljs.core.async.t_cljs$core$async39040.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async39040");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39040.
 */
cljs.core.async.__GT_t_cljs$core$async39040 = (function cljs$core$async$__GT_t_cljs$core$async39040(flag,cb,meta39041){
return (new cljs.core.async.t_cljs$core$async39040(flag,cb,meta39041));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async39040(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_41750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_41750)){
if((!(((port_41750.cljs$core$IFn$_invoke$arity$1 ? port_41750.cljs$core$IFn$_invoke$arity$1((1)) : port_41750.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__41751 = (i + (1));
i = G__41751;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__39045_SHARP_){
var G__39055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39045_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39055) : fret.call(null,G__39055));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__39046_SHARP_){
var G__39058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39046_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39058) : fret.call(null,G__39058));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41758 = (i + (1));
i = G__41758;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41772 = arguments.length;
var i__5750__auto___41773 = (0);
while(true){
if((i__5750__auto___41773 < len__5749__auto___41772)){
args__5755__auto__.push((arguments[i__5750__auto___41773]));

var G__41774 = (i__5750__auto___41773 + (1));
i__5750__auto___41773 = G__41774;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39074){
var map__39075 = p__39074;
var map__39075__$1 = cljs.core.__destructure_map(map__39075);
var opts = map__39075__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39068){
var G__39069 = cljs.core.first(seq39068);
var seq39068__$1 = cljs.core.next(seq39068);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39069,seq39068__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39093 = arguments.length;
switch (G__39093) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38570__auto___41806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39162){
var state_val_39164 = (state_39162[(1)]);
if((state_val_39164 === (7))){
var inst_39158 = (state_39162[(2)]);
var state_39162__$1 = state_39162;
var statearr_39173_41809 = state_39162__$1;
(statearr_39173_41809[(2)] = inst_39158);

(statearr_39173_41809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (1))){
var state_39162__$1 = state_39162;
var statearr_39176_41810 = state_39162__$1;
(statearr_39176_41810[(2)] = null);

(statearr_39176_41810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (4))){
var inst_39141 = (state_39162[(7)]);
var inst_39141__$1 = (state_39162[(2)]);
var inst_39142 = (inst_39141__$1 == null);
var state_39162__$1 = (function (){var statearr_39178 = state_39162;
(statearr_39178[(7)] = inst_39141__$1);

return statearr_39178;
})();
if(cljs.core.truth_(inst_39142)){
var statearr_39179_41813 = state_39162__$1;
(statearr_39179_41813[(1)] = (5));

} else {
var statearr_39180_41814 = state_39162__$1;
(statearr_39180_41814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (13))){
var state_39162__$1 = state_39162;
var statearr_39182_41815 = state_39162__$1;
(statearr_39182_41815[(2)] = null);

(statearr_39182_41815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (6))){
var inst_39141 = (state_39162[(7)]);
var state_39162__$1 = state_39162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39162__$1,(11),to,inst_39141);
} else {
if((state_val_39164 === (3))){
var inst_39160 = (state_39162[(2)]);
var state_39162__$1 = state_39162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39162__$1,inst_39160);
} else {
if((state_val_39164 === (12))){
var state_39162__$1 = state_39162;
var statearr_39190_41818 = state_39162__$1;
(statearr_39190_41818[(2)] = null);

(statearr_39190_41818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (2))){
var state_39162__$1 = state_39162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39162__$1,(4),from);
} else {
if((state_val_39164 === (11))){
var inst_39151 = (state_39162[(2)]);
var state_39162__$1 = state_39162;
if(cljs.core.truth_(inst_39151)){
var statearr_39194_41819 = state_39162__$1;
(statearr_39194_41819[(1)] = (12));

} else {
var statearr_39201_41826 = state_39162__$1;
(statearr_39201_41826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (9))){
var state_39162__$1 = state_39162;
var statearr_39202_41827 = state_39162__$1;
(statearr_39202_41827[(2)] = null);

(statearr_39202_41827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (5))){
var state_39162__$1 = state_39162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39206_41828 = state_39162__$1;
(statearr_39206_41828[(1)] = (8));

} else {
var statearr_39207_41829 = state_39162__$1;
(statearr_39207_41829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (14))){
var inst_39156 = (state_39162[(2)]);
var state_39162__$1 = state_39162;
var statearr_39209_41830 = state_39162__$1;
(statearr_39209_41830[(2)] = inst_39156);

(statearr_39209_41830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (10))){
var inst_39148 = (state_39162[(2)]);
var state_39162__$1 = state_39162;
var statearr_39212_41831 = state_39162__$1;
(statearr_39212_41831[(2)] = inst_39148);

(statearr_39212_41831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (8))){
var inst_39145 = cljs.core.async.close_BANG_(to);
var state_39162__$1 = state_39162;
var statearr_39214_41832 = state_39162__$1;
(statearr_39214_41832[(2)] = inst_39145);

(statearr_39214_41832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_39223 = [null,null,null,null,null,null,null,null];
(statearr_39223[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_39223[(1)] = (1));

return statearr_39223;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_39162){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39162);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39225){var ex__37216__auto__ = e39225;
var statearr_39226_41849 = state_39162;
(statearr_39226_41849[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39162[(4)]))){
var statearr_39227_41850 = state_39162;
(statearr_39227_41850[(1)] = cljs.core.first((state_39162[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41851 = state_39162;
state_39162 = G__41851;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_39162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_39162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39291 = f__38571__auto__();
(statearr_39291[(6)] = c__38570__auto___41806);

return statearr_39291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__39296){
var vec__39297 = p__39296;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39297,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39297,(1),null);
var job = vec__39297;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38570__auto___41866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39304){
var state_val_39305 = (state_39304[(1)]);
if((state_val_39305 === (1))){
var state_39304__$1 = state_39304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39304__$1,(2),res,v);
} else {
if((state_val_39305 === (2))){
var inst_39301 = (state_39304[(2)]);
var inst_39302 = cljs.core.async.close_BANG_(res);
var state_39304__$1 = (function (){var statearr_39306 = state_39304;
(statearr_39306[(7)] = inst_39301);

return statearr_39306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39304__$1,inst_39302);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0 = (function (){
var statearr_39307 = [null,null,null,null,null,null,null,null];
(statearr_39307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__);

(statearr_39307[(1)] = (1));

return statearr_39307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1 = (function (state_39304){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39304);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39309){var ex__37216__auto__ = e39309;
var statearr_39310_41873 = state_39304;
(statearr_39310_41873[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39304[(4)]))){
var statearr_39311_41874 = state_39304;
(statearr_39311_41874[(1)] = cljs.core.first((state_39304[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41875 = state_39304;
state_39304 = G__41875;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = function(state_39304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1.call(this,state_39304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39312 = f__38571__auto__();
(statearr_39312[(6)] = c__38570__auto___41866);

return statearr_39312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39313){
var vec__39314 = p__39313;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39314,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39314,(1),null);
var job = vec__39314;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___41878 = n;
var __41879 = (0);
while(true){
if((__41879 < n__5616__auto___41878)){
var G__39317_41880 = type;
var G__39317_41881__$1 = (((G__39317_41880 instanceof cljs.core.Keyword))?G__39317_41880.fqn:null);
switch (G__39317_41881__$1) {
case "compute":
var c__38570__auto___41887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41879,c__38570__auto___41887,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async){
return (function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = ((function (__41879,c__38570__auto___41887,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async){
return (function (state_39330){
var state_val_39331 = (state_39330[(1)]);
if((state_val_39331 === (1))){
var state_39330__$1 = state_39330;
var statearr_39332_41889 = state_39330__$1;
(statearr_39332_41889[(2)] = null);

(statearr_39332_41889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39331 === (2))){
var state_39330__$1 = state_39330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39330__$1,(4),jobs);
} else {
if((state_val_39331 === (3))){
var inst_39328 = (state_39330[(2)]);
var state_39330__$1 = state_39330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39330__$1,inst_39328);
} else {
if((state_val_39331 === (4))){
var inst_39320 = (state_39330[(2)]);
var inst_39321 = process__$1(inst_39320);
var state_39330__$1 = state_39330;
if(cljs.core.truth_(inst_39321)){
var statearr_39337_41892 = state_39330__$1;
(statearr_39337_41892[(1)] = (5));

} else {
var statearr_39338_41893 = state_39330__$1;
(statearr_39338_41893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39331 === (5))){
var state_39330__$1 = state_39330;
var statearr_39339_41894 = state_39330__$1;
(statearr_39339_41894[(2)] = null);

(statearr_39339_41894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39331 === (6))){
var state_39330__$1 = state_39330;
var statearr_39340_41895 = state_39330__$1;
(statearr_39340_41895[(2)] = null);

(statearr_39340_41895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39331 === (7))){
var inst_39326 = (state_39330[(2)]);
var state_39330__$1 = state_39330;
var statearr_39341_41896 = state_39330__$1;
(statearr_39341_41896[(2)] = inst_39326);

(statearr_39341_41896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41879,c__38570__auto___41887,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async))
;
return ((function (__41879,switch__37212__auto__,c__38570__auto___41887,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0 = (function (){
var statearr_39342 = [null,null,null,null,null,null,null];
(statearr_39342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__);

(statearr_39342[(1)] = (1));

return statearr_39342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1 = (function (state_39330){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39330);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39343){var ex__37216__auto__ = e39343;
var statearr_39344_41902 = state_39330;
(statearr_39344_41902[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39330[(4)]))){
var statearr_39345_41903 = state_39330;
(statearr_39345_41903[(1)] = cljs.core.first((state_39330[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41904 = state_39330;
state_39330 = G__41904;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = function(state_39330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1.call(this,state_39330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__;
})()
;})(__41879,switch__37212__auto__,c__38570__auto___41887,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async))
})();
var state__38572__auto__ = (function (){var statearr_39346 = f__38571__auto__();
(statearr_39346[(6)] = c__38570__auto___41887);

return statearr_39346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
});})(__41879,c__38570__auto___41887,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async))
);


break;
case "async":
var c__38570__auto___41905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41879,c__38570__auto___41905,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async){
return (function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = ((function (__41879,c__38570__auto___41905,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async){
return (function (state_39359){
var state_val_39360 = (state_39359[(1)]);
if((state_val_39360 === (1))){
var state_39359__$1 = state_39359;
var statearr_39361_41906 = state_39359__$1;
(statearr_39361_41906[(2)] = null);

(statearr_39361_41906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (2))){
var state_39359__$1 = state_39359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39359__$1,(4),jobs);
} else {
if((state_val_39360 === (3))){
var inst_39357 = (state_39359[(2)]);
var state_39359__$1 = state_39359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39359__$1,inst_39357);
} else {
if((state_val_39360 === (4))){
var inst_39349 = (state_39359[(2)]);
var inst_39350 = async(inst_39349);
var state_39359__$1 = state_39359;
if(cljs.core.truth_(inst_39350)){
var statearr_39362_41907 = state_39359__$1;
(statearr_39362_41907[(1)] = (5));

} else {
var statearr_39363_41908 = state_39359__$1;
(statearr_39363_41908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (5))){
var state_39359__$1 = state_39359;
var statearr_39364_41909 = state_39359__$1;
(statearr_39364_41909[(2)] = null);

(statearr_39364_41909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (6))){
var state_39359__$1 = state_39359;
var statearr_39365_41910 = state_39359__$1;
(statearr_39365_41910[(2)] = null);

(statearr_39365_41910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39360 === (7))){
var inst_39355 = (state_39359[(2)]);
var state_39359__$1 = state_39359;
var statearr_39366_41911 = state_39359__$1;
(statearr_39366_41911[(2)] = inst_39355);

(statearr_39366_41911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41879,c__38570__auto___41905,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async))
;
return ((function (__41879,switch__37212__auto__,c__38570__auto___41905,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0 = (function (){
var statearr_39367 = [null,null,null,null,null,null,null];
(statearr_39367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__);

(statearr_39367[(1)] = (1));

return statearr_39367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1 = (function (state_39359){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39359);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39368){var ex__37216__auto__ = e39368;
var statearr_39369_41912 = state_39359;
(statearr_39369_41912[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39359[(4)]))){
var statearr_39370_41913 = state_39359;
(statearr_39370_41913[(1)] = cljs.core.first((state_39359[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41914 = state_39359;
state_39359 = G__41914;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = function(state_39359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1.call(this,state_39359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__;
})()
;})(__41879,switch__37212__auto__,c__38570__auto___41905,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async))
})();
var state__38572__auto__ = (function (){var statearr_39371 = f__38571__auto__();
(statearr_39371[(6)] = c__38570__auto___41905);

return statearr_39371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
});})(__41879,c__38570__auto___41905,G__39317_41880,G__39317_41881__$1,n__5616__auto___41878,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39317_41881__$1)].join('')));

}

var G__41915 = (__41879 + (1));
__41879 = G__41915;
continue;
} else {
}
break;
}

var c__38570__auto___41916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39399){
var state_val_39400 = (state_39399[(1)]);
if((state_val_39400 === (7))){
var inst_39395 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
var statearr_39402_41917 = state_39399__$1;
(statearr_39402_41917[(2)] = inst_39395);

(statearr_39402_41917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (1))){
var state_39399__$1 = state_39399;
var statearr_39404_41918 = state_39399__$1;
(statearr_39404_41918[(2)] = null);

(statearr_39404_41918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (4))){
var inst_39379 = (state_39399[(7)]);
var inst_39379__$1 = (state_39399[(2)]);
var inst_39380 = (inst_39379__$1 == null);
var state_39399__$1 = (function (){var statearr_39406 = state_39399;
(statearr_39406[(7)] = inst_39379__$1);

return statearr_39406;
})();
if(cljs.core.truth_(inst_39380)){
var statearr_39407_41919 = state_39399__$1;
(statearr_39407_41919[(1)] = (5));

} else {
var statearr_39408_41920 = state_39399__$1;
(statearr_39408_41920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (6))){
var inst_39379 = (state_39399[(7)]);
var inst_39384 = (state_39399[(8)]);
var inst_39384__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39387 = [inst_39379,inst_39384__$1];
var inst_39388 = (new cljs.core.PersistentVector(null,2,(5),inst_39386,inst_39387,null));
var state_39399__$1 = (function (){var statearr_39409 = state_39399;
(statearr_39409[(8)] = inst_39384__$1);

return statearr_39409;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39399__$1,(8),jobs,inst_39388);
} else {
if((state_val_39400 === (3))){
var inst_39397 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39399__$1,inst_39397);
} else {
if((state_val_39400 === (2))){
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39399__$1,(4),from);
} else {
if((state_val_39400 === (9))){
var inst_39392 = (state_39399[(2)]);
var state_39399__$1 = (function (){var statearr_39410 = state_39399;
(statearr_39410[(9)] = inst_39392);

return statearr_39410;
})();
var statearr_39411_41922 = state_39399__$1;
(statearr_39411_41922[(2)] = null);

(statearr_39411_41922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (5))){
var inst_39382 = cljs.core.async.close_BANG_(jobs);
var state_39399__$1 = state_39399;
var statearr_39413_41923 = state_39399__$1;
(statearr_39413_41923[(2)] = inst_39382);

(statearr_39413_41923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (8))){
var inst_39384 = (state_39399[(8)]);
var inst_39390 = (state_39399[(2)]);
var state_39399__$1 = (function (){var statearr_39415 = state_39399;
(statearr_39415[(10)] = inst_39390);

return statearr_39415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39399__$1,(9),results,inst_39384);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0 = (function (){
var statearr_39416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__);

(statearr_39416[(1)] = (1));

return statearr_39416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1 = (function (state_39399){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39399);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39417){var ex__37216__auto__ = e39417;
var statearr_39419_41925 = state_39399;
(statearr_39419_41925[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39399[(4)]))){
var statearr_39420_41926 = state_39399;
(statearr_39420_41926[(1)] = cljs.core.first((state_39399[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41927 = state_39399;
state_39399 = G__41927;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = function(state_39399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1.call(this,state_39399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39421 = f__38571__auto__();
(statearr_39421[(6)] = c__38570__auto___41916);

return statearr_39421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


var c__38570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39460){
var state_val_39461 = (state_39460[(1)]);
if((state_val_39461 === (7))){
var inst_39456 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
var statearr_39462_41928 = state_39460__$1;
(statearr_39462_41928[(2)] = inst_39456);

(statearr_39462_41928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (20))){
var state_39460__$1 = state_39460;
var statearr_39463_41929 = state_39460__$1;
(statearr_39463_41929[(2)] = null);

(statearr_39463_41929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (1))){
var state_39460__$1 = state_39460;
var statearr_39464_41930 = state_39460__$1;
(statearr_39464_41930[(2)] = null);

(statearr_39464_41930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (4))){
var inst_39424 = (state_39460[(7)]);
var inst_39424__$1 = (state_39460[(2)]);
var inst_39425 = (inst_39424__$1 == null);
var state_39460__$1 = (function (){var statearr_39465 = state_39460;
(statearr_39465[(7)] = inst_39424__$1);

return statearr_39465;
})();
if(cljs.core.truth_(inst_39425)){
var statearr_39466_41931 = state_39460__$1;
(statearr_39466_41931[(1)] = (5));

} else {
var statearr_39467_41932 = state_39460__$1;
(statearr_39467_41932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (15))){
var inst_39438 = (state_39460[(8)]);
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39460__$1,(18),to,inst_39438);
} else {
if((state_val_39461 === (21))){
var inst_39451 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
var statearr_39469_41933 = state_39460__$1;
(statearr_39469_41933[(2)] = inst_39451);

(statearr_39469_41933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (13))){
var inst_39453 = (state_39460[(2)]);
var state_39460__$1 = (function (){var statearr_39470 = state_39460;
(statearr_39470[(9)] = inst_39453);

return statearr_39470;
})();
var statearr_39471_41934 = state_39460__$1;
(statearr_39471_41934[(2)] = null);

(statearr_39471_41934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (6))){
var inst_39424 = (state_39460[(7)]);
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39460__$1,(11),inst_39424);
} else {
if((state_val_39461 === (17))){
var inst_39446 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
if(cljs.core.truth_(inst_39446)){
var statearr_39472_41936 = state_39460__$1;
(statearr_39472_41936[(1)] = (19));

} else {
var statearr_39473_41937 = state_39460__$1;
(statearr_39473_41937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (3))){
var inst_39458 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39460__$1,inst_39458);
} else {
if((state_val_39461 === (12))){
var inst_39434 = (state_39460[(10)]);
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39460__$1,(14),inst_39434);
} else {
if((state_val_39461 === (2))){
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39460__$1,(4),results);
} else {
if((state_val_39461 === (19))){
var state_39460__$1 = state_39460;
var statearr_39480_41938 = state_39460__$1;
(statearr_39480_41938[(2)] = null);

(statearr_39480_41938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (11))){
var inst_39434 = (state_39460[(2)]);
var state_39460__$1 = (function (){var statearr_39481 = state_39460;
(statearr_39481[(10)] = inst_39434);

return statearr_39481;
})();
var statearr_39482_41939 = state_39460__$1;
(statearr_39482_41939[(2)] = null);

(statearr_39482_41939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (9))){
var state_39460__$1 = state_39460;
var statearr_39483_41940 = state_39460__$1;
(statearr_39483_41940[(2)] = null);

(statearr_39483_41940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (5))){
var state_39460__$1 = state_39460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39484_41941 = state_39460__$1;
(statearr_39484_41941[(1)] = (8));

} else {
var statearr_39485_41942 = state_39460__$1;
(statearr_39485_41942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (14))){
var inst_39438 = (state_39460[(8)]);
var inst_39440 = (state_39460[(11)]);
var inst_39438__$1 = (state_39460[(2)]);
var inst_39439 = (inst_39438__$1 == null);
var inst_39440__$1 = cljs.core.not(inst_39439);
var state_39460__$1 = (function (){var statearr_39486 = state_39460;
(statearr_39486[(8)] = inst_39438__$1);

(statearr_39486[(11)] = inst_39440__$1);

return statearr_39486;
})();
if(inst_39440__$1){
var statearr_39487_41943 = state_39460__$1;
(statearr_39487_41943[(1)] = (15));

} else {
var statearr_39488_41945 = state_39460__$1;
(statearr_39488_41945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (16))){
var inst_39440 = (state_39460[(11)]);
var state_39460__$1 = state_39460;
var statearr_39489_41946 = state_39460__$1;
(statearr_39489_41946[(2)] = inst_39440);

(statearr_39489_41946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (10))){
var inst_39431 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
var statearr_39490_41947 = state_39460__$1;
(statearr_39490_41947[(2)] = inst_39431);

(statearr_39490_41947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (18))){
var inst_39443 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
var statearr_39491_41948 = state_39460__$1;
(statearr_39491_41948[(2)] = inst_39443);

(statearr_39491_41948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (8))){
var inst_39428 = cljs.core.async.close_BANG_(to);
var state_39460__$1 = state_39460;
var statearr_39492_41949 = state_39460__$1;
(statearr_39492_41949[(2)] = inst_39428);

(statearr_39492_41949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0 = (function (){
var statearr_39493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__);

(statearr_39493[(1)] = (1));

return statearr_39493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1 = (function (state_39460){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39460);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39494){var ex__37216__auto__ = e39494;
var statearr_39495_41950 = state_39460;
(statearr_39495_41950[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39460[(4)]))){
var statearr_39496_41951 = state_39460;
(statearr_39496_41951[(1)] = cljs.core.first((state_39460[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41956 = state_39460;
state_39460 = G__41956;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__ = function(state_39460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1.call(this,state_39460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37213__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39497 = f__38571__auto__();
(statearr_39497[(6)] = c__38570__auto__);

return statearr_39497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));

return c__38570__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39504 = arguments.length;
switch (G__39504) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39507 = arguments.length;
switch (G__39507) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39509 = arguments.length;
switch (G__39509) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38570__auto___41988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39535){
var state_val_39536 = (state_39535[(1)]);
if((state_val_39536 === (7))){
var inst_39531 = (state_39535[(2)]);
var state_39535__$1 = state_39535;
var statearr_39537_41989 = state_39535__$1;
(statearr_39537_41989[(2)] = inst_39531);

(statearr_39537_41989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (1))){
var state_39535__$1 = state_39535;
var statearr_39538_41994 = state_39535__$1;
(statearr_39538_41994[(2)] = null);

(statearr_39538_41994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (4))){
var inst_39512 = (state_39535[(7)]);
var inst_39512__$1 = (state_39535[(2)]);
var inst_39513 = (inst_39512__$1 == null);
var state_39535__$1 = (function (){var statearr_39539 = state_39535;
(statearr_39539[(7)] = inst_39512__$1);

return statearr_39539;
})();
if(cljs.core.truth_(inst_39513)){
var statearr_39540_42002 = state_39535__$1;
(statearr_39540_42002[(1)] = (5));

} else {
var statearr_39541_42003 = state_39535__$1;
(statearr_39541_42003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (13))){
var state_39535__$1 = state_39535;
var statearr_39542_42007 = state_39535__$1;
(statearr_39542_42007[(2)] = null);

(statearr_39542_42007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (6))){
var inst_39512 = (state_39535[(7)]);
var inst_39518 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39512) : p.call(null,inst_39512));
var state_39535__$1 = state_39535;
if(cljs.core.truth_(inst_39518)){
var statearr_39543_42008 = state_39535__$1;
(statearr_39543_42008[(1)] = (9));

} else {
var statearr_39544_42009 = state_39535__$1;
(statearr_39544_42009[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (3))){
var inst_39533 = (state_39535[(2)]);
var state_39535__$1 = state_39535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39535__$1,inst_39533);
} else {
if((state_val_39536 === (12))){
var state_39535__$1 = state_39535;
var statearr_39545_42018 = state_39535__$1;
(statearr_39545_42018[(2)] = null);

(statearr_39545_42018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (2))){
var state_39535__$1 = state_39535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39535__$1,(4),ch);
} else {
if((state_val_39536 === (11))){
var inst_39512 = (state_39535[(7)]);
var inst_39522 = (state_39535[(2)]);
var state_39535__$1 = state_39535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39535__$1,(8),inst_39522,inst_39512);
} else {
if((state_val_39536 === (9))){
var state_39535__$1 = state_39535;
var statearr_39546_42039 = state_39535__$1;
(statearr_39546_42039[(2)] = tc);

(statearr_39546_42039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (5))){
var inst_39515 = cljs.core.async.close_BANG_(tc);
var inst_39516 = cljs.core.async.close_BANG_(fc);
var state_39535__$1 = (function (){var statearr_39549 = state_39535;
(statearr_39549[(8)] = inst_39515);

return statearr_39549;
})();
var statearr_39550_42040 = state_39535__$1;
(statearr_39550_42040[(2)] = inst_39516);

(statearr_39550_42040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (14))){
var inst_39529 = (state_39535[(2)]);
var state_39535__$1 = state_39535;
var statearr_39551_42041 = state_39535__$1;
(statearr_39551_42041[(2)] = inst_39529);

(statearr_39551_42041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (10))){
var state_39535__$1 = state_39535;
var statearr_39552_42042 = state_39535__$1;
(statearr_39552_42042[(2)] = fc);

(statearr_39552_42042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39536 === (8))){
var inst_39524 = (state_39535[(2)]);
var state_39535__$1 = state_39535;
if(cljs.core.truth_(inst_39524)){
var statearr_39553_42047 = state_39535__$1;
(statearr_39553_42047[(1)] = (12));

} else {
var statearr_39554_42048 = state_39535__$1;
(statearr_39554_42048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_39555 = [null,null,null,null,null,null,null,null,null];
(statearr_39555[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_39555[(1)] = (1));

return statearr_39555;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_39535){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39535);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39556){var ex__37216__auto__ = e39556;
var statearr_39557_42052 = state_39535;
(statearr_39557_42052[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39535[(4)]))){
var statearr_39558_42054 = state_39535;
(statearr_39558_42054[(1)] = cljs.core.first((state_39535[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42060 = state_39535;
state_39535 = G__42060;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_39535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_39535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39559 = f__38571__auto__();
(statearr_39559[(6)] = c__38570__auto___41988);

return statearr_39559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39581){
var state_val_39582 = (state_39581[(1)]);
if((state_val_39582 === (7))){
var inst_39577 = (state_39581[(2)]);
var state_39581__$1 = state_39581;
var statearr_39583_42075 = state_39581__$1;
(statearr_39583_42075[(2)] = inst_39577);

(statearr_39583_42075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (1))){
var inst_39560 = init;
var inst_39561 = inst_39560;
var state_39581__$1 = (function (){var statearr_39585 = state_39581;
(statearr_39585[(7)] = inst_39561);

return statearr_39585;
})();
var statearr_39587_42080 = state_39581__$1;
(statearr_39587_42080[(2)] = null);

(statearr_39587_42080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (4))){
var inst_39564 = (state_39581[(8)]);
var inst_39564__$1 = (state_39581[(2)]);
var inst_39565 = (inst_39564__$1 == null);
var state_39581__$1 = (function (){var statearr_39589 = state_39581;
(statearr_39589[(8)] = inst_39564__$1);

return statearr_39589;
})();
if(cljs.core.truth_(inst_39565)){
var statearr_39590_42081 = state_39581__$1;
(statearr_39590_42081[(1)] = (5));

} else {
var statearr_39591_42082 = state_39581__$1;
(statearr_39591_42082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (6))){
var inst_39561 = (state_39581[(7)]);
var inst_39564 = (state_39581[(8)]);
var inst_39568 = (state_39581[(9)]);
var inst_39568__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39561,inst_39564) : f.call(null,inst_39561,inst_39564));
var inst_39569 = cljs.core.reduced_QMARK_(inst_39568__$1);
var state_39581__$1 = (function (){var statearr_39592 = state_39581;
(statearr_39592[(9)] = inst_39568__$1);

return statearr_39592;
})();
if(inst_39569){
var statearr_39593_42083 = state_39581__$1;
(statearr_39593_42083[(1)] = (8));

} else {
var statearr_39594_42084 = state_39581__$1;
(statearr_39594_42084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (3))){
var inst_39579 = (state_39581[(2)]);
var state_39581__$1 = state_39581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39581__$1,inst_39579);
} else {
if((state_val_39582 === (2))){
var state_39581__$1 = state_39581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39581__$1,(4),ch);
} else {
if((state_val_39582 === (9))){
var inst_39568 = (state_39581[(9)]);
var inst_39561 = inst_39568;
var state_39581__$1 = (function (){var statearr_39595 = state_39581;
(statearr_39595[(7)] = inst_39561);

return statearr_39595;
})();
var statearr_39596_42085 = state_39581__$1;
(statearr_39596_42085[(2)] = null);

(statearr_39596_42085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (5))){
var inst_39561 = (state_39581[(7)]);
var state_39581__$1 = state_39581;
var statearr_39597_42090 = state_39581__$1;
(statearr_39597_42090[(2)] = inst_39561);

(statearr_39597_42090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (10))){
var inst_39575 = (state_39581[(2)]);
var state_39581__$1 = state_39581;
var statearr_39598_42091 = state_39581__$1;
(statearr_39598_42091[(2)] = inst_39575);

(statearr_39598_42091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39582 === (8))){
var inst_39568 = (state_39581[(9)]);
var inst_39571 = cljs.core.deref(inst_39568);
var state_39581__$1 = state_39581;
var statearr_39599_42093 = state_39581__$1;
(statearr_39599_42093[(2)] = inst_39571);

(statearr_39599_42093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37213__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37213__auto____0 = (function (){
var statearr_39600 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39600[(0)] = cljs$core$async$reduce_$_state_machine__37213__auto__);

(statearr_39600[(1)] = (1));

return statearr_39600;
});
var cljs$core$async$reduce_$_state_machine__37213__auto____1 = (function (state_39581){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39581);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39602){var ex__37216__auto__ = e39602;
var statearr_39605_42097 = state_39581;
(statearr_39605_42097[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39581[(4)]))){
var statearr_39606_42100 = state_39581;
(statearr_39606_42100[(1)] = cljs.core.first((state_39581[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42102 = state_39581;
state_39581 = G__42102;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37213__auto__ = function(state_39581){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37213__auto____1.call(this,state_39581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37213__auto____0;
cljs$core$async$reduce_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37213__auto____1;
return cljs$core$async$reduce_$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39607 = f__38571__auto__();
(statearr_39607[(6)] = c__38570__auto__);

return statearr_39607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));

return c__38570__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39621){
var state_val_39622 = (state_39621[(1)]);
if((state_val_39622 === (1))){
var inst_39616 = cljs.core.async.reduce(f__$1,init,ch);
var state_39621__$1 = state_39621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39621__$1,(2),inst_39616);
} else {
if((state_val_39622 === (2))){
var inst_39618 = (state_39621[(2)]);
var inst_39619 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39618) : f__$1.call(null,inst_39618));
var state_39621__$1 = state_39621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39621__$1,inst_39619);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37213__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37213__auto____0 = (function (){
var statearr_39623 = [null,null,null,null,null,null,null];
(statearr_39623[(0)] = cljs$core$async$transduce_$_state_machine__37213__auto__);

(statearr_39623[(1)] = (1));

return statearr_39623;
});
var cljs$core$async$transduce_$_state_machine__37213__auto____1 = (function (state_39621){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39621);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39632){var ex__37216__auto__ = e39632;
var statearr_39633_42122 = state_39621;
(statearr_39633_42122[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39621[(4)]))){
var statearr_39634_42123 = state_39621;
(statearr_39634_42123[(1)] = cljs.core.first((state_39621[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42124 = state_39621;
state_39621 = G__42124;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37213__auto__ = function(state_39621){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37213__auto____1.call(this,state_39621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37213__auto____0;
cljs$core$async$transduce_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37213__auto____1;
return cljs$core$async$transduce_$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39635 = f__38571__auto__();
(statearr_39635[(6)] = c__38570__auto__);

return statearr_39635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));

return c__38570__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__39638 = arguments.length;
switch (G__39638) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39671){
var state_val_39672 = (state_39671[(1)]);
if((state_val_39672 === (7))){
var inst_39649 = (state_39671[(2)]);
var state_39671__$1 = state_39671;
var statearr_39680_42126 = state_39671__$1;
(statearr_39680_42126[(2)] = inst_39649);

(statearr_39680_42126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (1))){
var inst_39639 = cljs.core.seq(coll);
var inst_39640 = inst_39639;
var state_39671__$1 = (function (){var statearr_39682 = state_39671;
(statearr_39682[(7)] = inst_39640);

return statearr_39682;
})();
var statearr_39683_42133 = state_39671__$1;
(statearr_39683_42133[(2)] = null);

(statearr_39683_42133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (4))){
var inst_39640 = (state_39671[(7)]);
var inst_39647 = cljs.core.first(inst_39640);
var state_39671__$1 = state_39671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39671__$1,(7),ch,inst_39647);
} else {
if((state_val_39672 === (13))){
var inst_39664 = (state_39671[(2)]);
var state_39671__$1 = state_39671;
var statearr_39684_42135 = state_39671__$1;
(statearr_39684_42135[(2)] = inst_39664);

(statearr_39684_42135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (6))){
var inst_39652 = (state_39671[(2)]);
var state_39671__$1 = state_39671;
if(cljs.core.truth_(inst_39652)){
var statearr_39689_42139 = state_39671__$1;
(statearr_39689_42139[(1)] = (8));

} else {
var statearr_39690_42140 = state_39671__$1;
(statearr_39690_42140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (3))){
var inst_39668 = (state_39671[(2)]);
var state_39671__$1 = state_39671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39671__$1,inst_39668);
} else {
if((state_val_39672 === (12))){
var state_39671__$1 = state_39671;
var statearr_39691_42141 = state_39671__$1;
(statearr_39691_42141[(2)] = null);

(statearr_39691_42141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (2))){
var inst_39640 = (state_39671[(7)]);
var state_39671__$1 = state_39671;
if(cljs.core.truth_(inst_39640)){
var statearr_39695_42146 = state_39671__$1;
(statearr_39695_42146[(1)] = (4));

} else {
var statearr_39696_42147 = state_39671__$1;
(statearr_39696_42147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (11))){
var inst_39661 = cljs.core.async.close_BANG_(ch);
var state_39671__$1 = state_39671;
var statearr_39698_42149 = state_39671__$1;
(statearr_39698_42149[(2)] = inst_39661);

(statearr_39698_42149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (9))){
var state_39671__$1 = state_39671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39699_42154 = state_39671__$1;
(statearr_39699_42154[(1)] = (11));

} else {
var statearr_39700_42155 = state_39671__$1;
(statearr_39700_42155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (5))){
var inst_39640 = (state_39671[(7)]);
var state_39671__$1 = state_39671;
var statearr_39702_42156 = state_39671__$1;
(statearr_39702_42156[(2)] = inst_39640);

(statearr_39702_42156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (10))){
var inst_39666 = (state_39671[(2)]);
var state_39671__$1 = state_39671;
var statearr_39703_42157 = state_39671__$1;
(statearr_39703_42157[(2)] = inst_39666);

(statearr_39703_42157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39672 === (8))){
var inst_39640 = (state_39671[(7)]);
var inst_39654 = cljs.core.next(inst_39640);
var inst_39640__$1 = inst_39654;
var state_39671__$1 = (function (){var statearr_39704 = state_39671;
(statearr_39704[(7)] = inst_39640__$1);

return statearr_39704;
})();
var statearr_39705_42160 = state_39671__$1;
(statearr_39705_42160[(2)] = null);

(statearr_39705_42160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_39706 = [null,null,null,null,null,null,null,null];
(statearr_39706[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_39706[(1)] = (1));

return statearr_39706;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_39671){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39671);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e39707){var ex__37216__auto__ = e39707;
var statearr_39708_42168 = state_39671;
(statearr_39708_42168[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39671[(4)]))){
var statearr_39709_42169 = state_39671;
(statearr_39709_42169[(1)] = cljs.core.first((state_39671[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42170 = state_39671;
state_39671 = G__42170;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_39671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_39671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_39718 = f__38571__auto__();
(statearr_39718[(6)] = c__38570__auto__);

return statearr_39718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));

return c__38570__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39724 = arguments.length;
switch (G__39724) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42182 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42182(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42183 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42183(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42184 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42184(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42187 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42187(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39763 = (function (ch,cs,meta39764){
this.ch = ch;
this.cs = cs;
this.meta39764 = meta39764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39765,meta39764__$1){
var self__ = this;
var _39765__$1 = this;
return (new cljs.core.async.t_cljs$core$async39763(self__.ch,self__.cs,meta39764__$1));
}));

(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39765){
var self__ = this;
var _39765__$1 = this;
return self__.meta39764;
}));

(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39763.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39764","meta39764",545241400,null)], null);
}));

(cljs.core.async.t_cljs$core$async39763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39763");

(cljs.core.async.t_cljs$core$async39763.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async39763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39763.
 */
cljs.core.async.__GT_t_cljs$core$async39763 = (function cljs$core$async$__GT_t_cljs$core$async39763(ch,cs,meta39764){
return (new cljs.core.async.t_cljs$core$async39763(ch,cs,meta39764));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async39763(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38570__auto___42206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_39930){
var state_val_39931 = (state_39930[(1)]);
if((state_val_39931 === (7))){
var inst_39926 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_39934_42207 = state_39930__$1;
(statearr_39934_42207[(2)] = inst_39926);

(statearr_39934_42207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (20))){
var inst_39826 = (state_39930[(7)]);
var inst_39838 = cljs.core.first(inst_39826);
var inst_39839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39838,(0),null);
var inst_39840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39838,(1),null);
var state_39930__$1 = (function (){var statearr_39935 = state_39930;
(statearr_39935[(8)] = inst_39839);

return statearr_39935;
})();
if(cljs.core.truth_(inst_39840)){
var statearr_39938_42208 = state_39930__$1;
(statearr_39938_42208[(1)] = (22));

} else {
var statearr_39939_42209 = state_39930__$1;
(statearr_39939_42209[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (27))){
var inst_39868 = (state_39930[(9)]);
var inst_39870 = (state_39930[(10)]);
var inst_39875 = (state_39930[(11)]);
var inst_39787 = (state_39930[(12)]);
var inst_39875__$1 = cljs.core._nth(inst_39868,inst_39870);
var inst_39876 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39875__$1,inst_39787,done);
var state_39930__$1 = (function (){var statearr_39941 = state_39930;
(statearr_39941[(11)] = inst_39875__$1);

return statearr_39941;
})();
if(cljs.core.truth_(inst_39876)){
var statearr_39942_42210 = state_39930__$1;
(statearr_39942_42210[(1)] = (30));

} else {
var statearr_39943_42211 = state_39930__$1;
(statearr_39943_42211[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (1))){
var state_39930__$1 = state_39930;
var statearr_39944_42212 = state_39930__$1;
(statearr_39944_42212[(2)] = null);

(statearr_39944_42212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (24))){
var inst_39826 = (state_39930[(7)]);
var inst_39845 = (state_39930[(2)]);
var inst_39846 = cljs.core.next(inst_39826);
var inst_39800 = inst_39846;
var inst_39801 = null;
var inst_39802 = (0);
var inst_39803 = (0);
var state_39930__$1 = (function (){var statearr_39952 = state_39930;
(statearr_39952[(13)] = inst_39845);

(statearr_39952[(14)] = inst_39800);

(statearr_39952[(15)] = inst_39801);

(statearr_39952[(16)] = inst_39802);

(statearr_39952[(17)] = inst_39803);

return statearr_39952;
})();
var statearr_39953_42213 = state_39930__$1;
(statearr_39953_42213[(2)] = null);

(statearr_39953_42213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (39))){
var state_39930__$1 = state_39930;
var statearr_39957_42214 = state_39930__$1;
(statearr_39957_42214[(2)] = null);

(statearr_39957_42214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (4))){
var inst_39787 = (state_39930[(12)]);
var inst_39787__$1 = (state_39930[(2)]);
var inst_39788 = (inst_39787__$1 == null);
var state_39930__$1 = (function (){var statearr_39958 = state_39930;
(statearr_39958[(12)] = inst_39787__$1);

return statearr_39958;
})();
if(cljs.core.truth_(inst_39788)){
var statearr_39959_42216 = state_39930__$1;
(statearr_39959_42216[(1)] = (5));

} else {
var statearr_39960_42218 = state_39930__$1;
(statearr_39960_42218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (15))){
var inst_39803 = (state_39930[(17)]);
var inst_39800 = (state_39930[(14)]);
var inst_39801 = (state_39930[(15)]);
var inst_39802 = (state_39930[(16)]);
var inst_39822 = (state_39930[(2)]);
var inst_39823 = (inst_39803 + (1));
var tmp39954 = inst_39802;
var tmp39955 = inst_39801;
var tmp39956 = inst_39800;
var inst_39800__$1 = tmp39956;
var inst_39801__$1 = tmp39955;
var inst_39802__$1 = tmp39954;
var inst_39803__$1 = inst_39823;
var state_39930__$1 = (function (){var statearr_39961 = state_39930;
(statearr_39961[(18)] = inst_39822);

(statearr_39961[(14)] = inst_39800__$1);

(statearr_39961[(15)] = inst_39801__$1);

(statearr_39961[(16)] = inst_39802__$1);

(statearr_39961[(17)] = inst_39803__$1);

return statearr_39961;
})();
var statearr_39962_42224 = state_39930__$1;
(statearr_39962_42224[(2)] = null);

(statearr_39962_42224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (21))){
var inst_39849 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_39966_42225 = state_39930__$1;
(statearr_39966_42225[(2)] = inst_39849);

(statearr_39966_42225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (31))){
var inst_39875 = (state_39930[(11)]);
var inst_39879 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39875);
var state_39930__$1 = state_39930;
var statearr_39967_42226 = state_39930__$1;
(statearr_39967_42226[(2)] = inst_39879);

(statearr_39967_42226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (32))){
var inst_39870 = (state_39930[(10)]);
var inst_39867 = (state_39930[(19)]);
var inst_39868 = (state_39930[(9)]);
var inst_39869 = (state_39930[(20)]);
var inst_39881 = (state_39930[(2)]);
var inst_39882 = (inst_39870 + (1));
var tmp39963 = inst_39868;
var tmp39964 = inst_39869;
var tmp39965 = inst_39867;
var inst_39867__$1 = tmp39965;
var inst_39868__$1 = tmp39963;
var inst_39869__$1 = tmp39964;
var inst_39870__$1 = inst_39882;
var state_39930__$1 = (function (){var statearr_39968 = state_39930;
(statearr_39968[(21)] = inst_39881);

(statearr_39968[(19)] = inst_39867__$1);

(statearr_39968[(9)] = inst_39868__$1);

(statearr_39968[(20)] = inst_39869__$1);

(statearr_39968[(10)] = inst_39870__$1);

return statearr_39968;
})();
var statearr_39969_42229 = state_39930__$1;
(statearr_39969_42229[(2)] = null);

(statearr_39969_42229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (40))){
var inst_39894 = (state_39930[(22)]);
var inst_39898 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39894);
var state_39930__$1 = state_39930;
var statearr_39970_42230 = state_39930__$1;
(statearr_39970_42230[(2)] = inst_39898);

(statearr_39970_42230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (33))){
var inst_39885 = (state_39930[(23)]);
var inst_39887 = cljs.core.chunked_seq_QMARK_(inst_39885);
var state_39930__$1 = state_39930;
if(inst_39887){
var statearr_39971_42231 = state_39930__$1;
(statearr_39971_42231[(1)] = (36));

} else {
var statearr_39990_42232 = state_39930__$1;
(statearr_39990_42232[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (13))){
var inst_39812 = (state_39930[(24)]);
var inst_39817 = cljs.core.async.close_BANG_(inst_39812);
var state_39930__$1 = state_39930;
var statearr_39991_42233 = state_39930__$1;
(statearr_39991_42233[(2)] = inst_39817);

(statearr_39991_42233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (22))){
var inst_39839 = (state_39930[(8)]);
var inst_39842 = cljs.core.async.close_BANG_(inst_39839);
var state_39930__$1 = state_39930;
var statearr_39998_42234 = state_39930__$1;
(statearr_39998_42234[(2)] = inst_39842);

(statearr_39998_42234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (36))){
var inst_39885 = (state_39930[(23)]);
var inst_39889 = cljs.core.chunk_first(inst_39885);
var inst_39890 = cljs.core.chunk_rest(inst_39885);
var inst_39891 = cljs.core.count(inst_39889);
var inst_39867 = inst_39890;
var inst_39868 = inst_39889;
var inst_39869 = inst_39891;
var inst_39870 = (0);
var state_39930__$1 = (function (){var statearr_40000 = state_39930;
(statearr_40000[(19)] = inst_39867);

(statearr_40000[(9)] = inst_39868);

(statearr_40000[(20)] = inst_39869);

(statearr_40000[(10)] = inst_39870);

return statearr_40000;
})();
var statearr_40001_42235 = state_39930__$1;
(statearr_40001_42235[(2)] = null);

(statearr_40001_42235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (41))){
var inst_39885 = (state_39930[(23)]);
var inst_39900 = (state_39930[(2)]);
var inst_39901 = cljs.core.next(inst_39885);
var inst_39867 = inst_39901;
var inst_39868 = null;
var inst_39869 = (0);
var inst_39870 = (0);
var state_39930__$1 = (function (){var statearr_40002 = state_39930;
(statearr_40002[(25)] = inst_39900);

(statearr_40002[(19)] = inst_39867);

(statearr_40002[(9)] = inst_39868);

(statearr_40002[(20)] = inst_39869);

(statearr_40002[(10)] = inst_39870);

return statearr_40002;
})();
var statearr_40004_42236 = state_39930__$1;
(statearr_40004_42236[(2)] = null);

(statearr_40004_42236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (43))){
var state_39930__$1 = state_39930;
var statearr_40005_42237 = state_39930__$1;
(statearr_40005_42237[(2)] = null);

(statearr_40005_42237[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (29))){
var inst_39909 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_40006_42238 = state_39930__$1;
(statearr_40006_42238[(2)] = inst_39909);

(statearr_40006_42238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (44))){
var inst_39921 = (state_39930[(2)]);
var state_39930__$1 = (function (){var statearr_40007 = state_39930;
(statearr_40007[(26)] = inst_39921);

return statearr_40007;
})();
var statearr_40008_42239 = state_39930__$1;
(statearr_40008_42239[(2)] = null);

(statearr_40008_42239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (6))){
var inst_39859 = (state_39930[(27)]);
var inst_39858 = cljs.core.deref(cs);
var inst_39859__$1 = cljs.core.keys(inst_39858);
var inst_39860 = cljs.core.count(inst_39859__$1);
var inst_39861 = cljs.core.reset_BANG_(dctr,inst_39860);
var inst_39866 = cljs.core.seq(inst_39859__$1);
var inst_39867 = inst_39866;
var inst_39868 = null;
var inst_39869 = (0);
var inst_39870 = (0);
var state_39930__$1 = (function (){var statearr_40009 = state_39930;
(statearr_40009[(27)] = inst_39859__$1);

(statearr_40009[(28)] = inst_39861);

(statearr_40009[(19)] = inst_39867);

(statearr_40009[(9)] = inst_39868);

(statearr_40009[(20)] = inst_39869);

(statearr_40009[(10)] = inst_39870);

return statearr_40009;
})();
var statearr_40010_42247 = state_39930__$1;
(statearr_40010_42247[(2)] = null);

(statearr_40010_42247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (28))){
var inst_39867 = (state_39930[(19)]);
var inst_39885 = (state_39930[(23)]);
var inst_39885__$1 = cljs.core.seq(inst_39867);
var state_39930__$1 = (function (){var statearr_40011 = state_39930;
(statearr_40011[(23)] = inst_39885__$1);

return statearr_40011;
})();
if(inst_39885__$1){
var statearr_40012_42248 = state_39930__$1;
(statearr_40012_42248[(1)] = (33));

} else {
var statearr_40013_42249 = state_39930__$1;
(statearr_40013_42249[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (25))){
var inst_39870 = (state_39930[(10)]);
var inst_39869 = (state_39930[(20)]);
var inst_39872 = (inst_39870 < inst_39869);
var inst_39873 = inst_39872;
var state_39930__$1 = state_39930;
if(cljs.core.truth_(inst_39873)){
var statearr_40022_42256 = state_39930__$1;
(statearr_40022_42256[(1)] = (27));

} else {
var statearr_40023_42257 = state_39930__$1;
(statearr_40023_42257[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (34))){
var state_39930__$1 = state_39930;
var statearr_40024_42259 = state_39930__$1;
(statearr_40024_42259[(2)] = null);

(statearr_40024_42259[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (17))){
var state_39930__$1 = state_39930;
var statearr_40026_42260 = state_39930__$1;
(statearr_40026_42260[(2)] = null);

(statearr_40026_42260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (3))){
var inst_39928 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39930__$1,inst_39928);
} else {
if((state_val_39931 === (12))){
var inst_39854 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_40035_42261 = state_39930__$1;
(statearr_40035_42261[(2)] = inst_39854);

(statearr_40035_42261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (2))){
var state_39930__$1 = state_39930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39930__$1,(4),ch);
} else {
if((state_val_39931 === (23))){
var state_39930__$1 = state_39930;
var statearr_40040_42262 = state_39930__$1;
(statearr_40040_42262[(2)] = null);

(statearr_40040_42262[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (35))){
var inst_39907 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_40041_42263 = state_39930__$1;
(statearr_40041_42263[(2)] = inst_39907);

(statearr_40041_42263[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (19))){
var inst_39826 = (state_39930[(7)]);
var inst_39830 = cljs.core.chunk_first(inst_39826);
var inst_39831 = cljs.core.chunk_rest(inst_39826);
var inst_39832 = cljs.core.count(inst_39830);
var inst_39800 = inst_39831;
var inst_39801 = inst_39830;
var inst_39802 = inst_39832;
var inst_39803 = (0);
var state_39930__$1 = (function (){var statearr_40042 = state_39930;
(statearr_40042[(14)] = inst_39800);

(statearr_40042[(15)] = inst_39801);

(statearr_40042[(16)] = inst_39802);

(statearr_40042[(17)] = inst_39803);

return statearr_40042;
})();
var statearr_40043_42264 = state_39930__$1;
(statearr_40043_42264[(2)] = null);

(statearr_40043_42264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (11))){
var inst_39800 = (state_39930[(14)]);
var inst_39826 = (state_39930[(7)]);
var inst_39826__$1 = cljs.core.seq(inst_39800);
var state_39930__$1 = (function (){var statearr_40047 = state_39930;
(statearr_40047[(7)] = inst_39826__$1);

return statearr_40047;
})();
if(inst_39826__$1){
var statearr_40048_42266 = state_39930__$1;
(statearr_40048_42266[(1)] = (16));

} else {
var statearr_40049_42267 = state_39930__$1;
(statearr_40049_42267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (9))){
var inst_39856 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_40050_42268 = state_39930__$1;
(statearr_40050_42268[(2)] = inst_39856);

(statearr_40050_42268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (5))){
var inst_39798 = cljs.core.deref(cs);
var inst_39799 = cljs.core.seq(inst_39798);
var inst_39800 = inst_39799;
var inst_39801 = null;
var inst_39802 = (0);
var inst_39803 = (0);
var state_39930__$1 = (function (){var statearr_40051 = state_39930;
(statearr_40051[(14)] = inst_39800);

(statearr_40051[(15)] = inst_39801);

(statearr_40051[(16)] = inst_39802);

(statearr_40051[(17)] = inst_39803);

return statearr_40051;
})();
var statearr_40052_42275 = state_39930__$1;
(statearr_40052_42275[(2)] = null);

(statearr_40052_42275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (14))){
var state_39930__$1 = state_39930;
var statearr_40053_42276 = state_39930__$1;
(statearr_40053_42276[(2)] = null);

(statearr_40053_42276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (45))){
var inst_39918 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_40054_42277 = state_39930__$1;
(statearr_40054_42277[(2)] = inst_39918);

(statearr_40054_42277[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (26))){
var inst_39859 = (state_39930[(27)]);
var inst_39911 = (state_39930[(2)]);
var inst_39912 = cljs.core.seq(inst_39859);
var state_39930__$1 = (function (){var statearr_40055 = state_39930;
(statearr_40055[(29)] = inst_39911);

return statearr_40055;
})();
if(inst_39912){
var statearr_40056_42278 = state_39930__$1;
(statearr_40056_42278[(1)] = (42));

} else {
var statearr_40057_42279 = state_39930__$1;
(statearr_40057_42279[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (16))){
var inst_39826 = (state_39930[(7)]);
var inst_39828 = cljs.core.chunked_seq_QMARK_(inst_39826);
var state_39930__$1 = state_39930;
if(inst_39828){
var statearr_40064_42280 = state_39930__$1;
(statearr_40064_42280[(1)] = (19));

} else {
var statearr_40065_42281 = state_39930__$1;
(statearr_40065_42281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (38))){
var inst_39904 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_40066_42283 = state_39930__$1;
(statearr_40066_42283[(2)] = inst_39904);

(statearr_40066_42283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (30))){
var state_39930__$1 = state_39930;
var statearr_40067_42284 = state_39930__$1;
(statearr_40067_42284[(2)] = null);

(statearr_40067_42284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (10))){
var inst_39801 = (state_39930[(15)]);
var inst_39803 = (state_39930[(17)]);
var inst_39811 = cljs.core._nth(inst_39801,inst_39803);
var inst_39812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39811,(0),null);
var inst_39813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39811,(1),null);
var state_39930__$1 = (function (){var statearr_40069 = state_39930;
(statearr_40069[(24)] = inst_39812);

return statearr_40069;
})();
if(cljs.core.truth_(inst_39813)){
var statearr_40072_42286 = state_39930__$1;
(statearr_40072_42286[(1)] = (13));

} else {
var statearr_40074_42287 = state_39930__$1;
(statearr_40074_42287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (18))){
var inst_39852 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_40075_42288 = state_39930__$1;
(statearr_40075_42288[(2)] = inst_39852);

(statearr_40075_42288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (42))){
var state_39930__$1 = state_39930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39930__$1,(45),dchan);
} else {
if((state_val_39931 === (37))){
var inst_39885 = (state_39930[(23)]);
var inst_39894 = (state_39930[(22)]);
var inst_39787 = (state_39930[(12)]);
var inst_39894__$1 = cljs.core.first(inst_39885);
var inst_39895 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39894__$1,inst_39787,done);
var state_39930__$1 = (function (){var statearr_40082 = state_39930;
(statearr_40082[(22)] = inst_39894__$1);

return statearr_40082;
})();
if(cljs.core.truth_(inst_39895)){
var statearr_40083_42292 = state_39930__$1;
(statearr_40083_42292[(1)] = (39));

} else {
var statearr_40090_42293 = state_39930__$1;
(statearr_40090_42293[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (8))){
var inst_39803 = (state_39930[(17)]);
var inst_39802 = (state_39930[(16)]);
var inst_39805 = (inst_39803 < inst_39802);
var inst_39806 = inst_39805;
var state_39930__$1 = state_39930;
if(cljs.core.truth_(inst_39806)){
var statearr_40091_42295 = state_39930__$1;
(statearr_40091_42295[(1)] = (10));

} else {
var statearr_40092_42296 = state_39930__$1;
(statearr_40092_42296[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37213__auto__ = null;
var cljs$core$async$mult_$_state_machine__37213__auto____0 = (function (){
var statearr_40103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40103[(0)] = cljs$core$async$mult_$_state_machine__37213__auto__);

(statearr_40103[(1)] = (1));

return statearr_40103;
});
var cljs$core$async$mult_$_state_machine__37213__auto____1 = (function (state_39930){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_39930);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e40104){var ex__37216__auto__ = e40104;
var statearr_40105_42315 = state_39930;
(statearr_40105_42315[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_39930[(4)]))){
var statearr_40106_42316 = state_39930;
(statearr_40106_42316[(1)] = cljs.core.first((state_39930[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42317 = state_39930;
state_39930 = G__42317;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37213__auto__ = function(state_39930){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37213__auto____1.call(this,state_39930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37213__auto____0;
cljs$core$async$mult_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37213__auto____1;
return cljs$core$async$mult_$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_40110 = f__38571__auto__();
(statearr_40110[(6)] = c__38570__auto___42206);

return statearr_40110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40114 = arguments.length;
switch (G__40114) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_42326 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_42326(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_42330 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_42330(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_42333 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_42333(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_42334 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_42334(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_42337 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_42337(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___42342 = arguments.length;
var i__5750__auto___42343 = (0);
while(true){
if((i__5750__auto___42343 < len__5749__auto___42342)){
args__5755__auto__.push((arguments[i__5750__auto___42343]));

var G__42344 = (i__5750__auto___42343 + (1));
i__5750__auto___42343 = G__42344;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40146){
var map__40147 = p__40146;
var map__40147__$1 = cljs.core.__destructure_map(map__40147);
var opts = map__40147__$1;
var statearr_40149_42349 = state;
(statearr_40149_42349[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40151_42350 = state;
(statearr_40151_42350[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_40154_42351 = state;
(statearr_40154_42351[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40142){
var G__40143 = cljs.core.first(seq40142);
var seq40142__$1 = cljs.core.next(seq40142);
var G__40144 = cljs.core.first(seq40142__$1);
var seq40142__$2 = cljs.core.next(seq40142__$1);
var G__40145 = cljs.core.first(seq40142__$2);
var seq40142__$3 = cljs.core.next(seq40142__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40143,G__40144,G__40145,seq40142__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40175 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40176){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40176 = meta40176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40177,meta40176__$1){
var self__ = this;
var _40177__$1 = this;
return (new cljs.core.async.t_cljs$core$async40175(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40176__$1));
}));

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40177){
var self__ = this;
var _40177__$1 = this;
return self__.meta40176;
}));

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40175.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40176","meta40176",-442672011,null)], null);
}));

(cljs.core.async.t_cljs$core$async40175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40175");

(cljs.core.async.t_cljs$core$async40175.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async40175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40175.
 */
cljs.core.async.__GT_t_cljs$core$async40175 = (function cljs$core$async$__GT_t_cljs$core$async40175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40176){
return (new cljs.core.async.t_cljs$core$async40175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40176));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async40175(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__38570__auto___42370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_40262){
var state_val_40263 = (state_40262[(1)]);
if((state_val_40263 === (7))){
var inst_40209 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
if(cljs.core.truth_(inst_40209)){
var statearr_40271_42372 = state_40262__$1;
(statearr_40271_42372[(1)] = (8));

} else {
var statearr_40272_42373 = state_40262__$1;
(statearr_40272_42373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (20))){
var inst_40202 = (state_40262[(7)]);
var state_40262__$1 = state_40262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40262__$1,(23),out,inst_40202);
} else {
if((state_val_40263 === (1))){
var inst_40185 = calc_state();
var inst_40186 = cljs.core.__destructure_map(inst_40185);
var inst_40187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40190 = inst_40185;
var state_40262__$1 = (function (){var statearr_40273 = state_40262;
(statearr_40273[(8)] = inst_40187);

(statearr_40273[(9)] = inst_40188);

(statearr_40273[(10)] = inst_40189);

(statearr_40273[(11)] = inst_40190);

return statearr_40273;
})();
var statearr_40275_42375 = state_40262__$1;
(statearr_40275_42375[(2)] = null);

(statearr_40275_42375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (24))){
var inst_40193 = (state_40262[(12)]);
var inst_40190 = inst_40193;
var state_40262__$1 = (function (){var statearr_40276 = state_40262;
(statearr_40276[(11)] = inst_40190);

return statearr_40276;
})();
var statearr_40277_42376 = state_40262__$1;
(statearr_40277_42376[(2)] = null);

(statearr_40277_42376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (4))){
var inst_40202 = (state_40262[(7)]);
var inst_40204 = (state_40262[(13)]);
var inst_40201 = (state_40262[(2)]);
var inst_40202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40201,(0),null);
var inst_40203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40201,(1),null);
var inst_40204__$1 = (inst_40202__$1 == null);
var state_40262__$1 = (function (){var statearr_40278 = state_40262;
(statearr_40278[(7)] = inst_40202__$1);

(statearr_40278[(14)] = inst_40203);

(statearr_40278[(13)] = inst_40204__$1);

return statearr_40278;
})();
if(cljs.core.truth_(inst_40204__$1)){
var statearr_40279_42382 = state_40262__$1;
(statearr_40279_42382[(1)] = (5));

} else {
var statearr_40280_42383 = state_40262__$1;
(statearr_40280_42383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (15))){
var inst_40194 = (state_40262[(15)]);
var inst_40223 = (state_40262[(16)]);
var inst_40223__$1 = cljs.core.empty_QMARK_(inst_40194);
var state_40262__$1 = (function (){var statearr_40281 = state_40262;
(statearr_40281[(16)] = inst_40223__$1);

return statearr_40281;
})();
if(inst_40223__$1){
var statearr_40282_42384 = state_40262__$1;
(statearr_40282_42384[(1)] = (17));

} else {
var statearr_40283_42385 = state_40262__$1;
(statearr_40283_42385[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (21))){
var inst_40193 = (state_40262[(12)]);
var inst_40190 = inst_40193;
var state_40262__$1 = (function (){var statearr_40285 = state_40262;
(statearr_40285[(11)] = inst_40190);

return statearr_40285;
})();
var statearr_40287_42390 = state_40262__$1;
(statearr_40287_42390[(2)] = null);

(statearr_40287_42390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (13))){
var inst_40216 = (state_40262[(2)]);
var inst_40217 = calc_state();
var inst_40190 = inst_40217;
var state_40262__$1 = (function (){var statearr_40290 = state_40262;
(statearr_40290[(17)] = inst_40216);

(statearr_40290[(11)] = inst_40190);

return statearr_40290;
})();
var statearr_40291_42391 = state_40262__$1;
(statearr_40291_42391[(2)] = null);

(statearr_40291_42391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (22))){
var inst_40243 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40292_42395 = state_40262__$1;
(statearr_40292_42395[(2)] = inst_40243);

(statearr_40292_42395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (6))){
var inst_40203 = (state_40262[(14)]);
var inst_40207 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40203,change);
var state_40262__$1 = state_40262;
var statearr_40294_42397 = state_40262__$1;
(statearr_40294_42397[(2)] = inst_40207);

(statearr_40294_42397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (25))){
var state_40262__$1 = state_40262;
var statearr_40297_42398 = state_40262__$1;
(statearr_40297_42398[(2)] = null);

(statearr_40297_42398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (17))){
var inst_40195 = (state_40262[(18)]);
var inst_40203 = (state_40262[(14)]);
var inst_40225 = (inst_40195.cljs$core$IFn$_invoke$arity$1 ? inst_40195.cljs$core$IFn$_invoke$arity$1(inst_40203) : inst_40195.call(null,inst_40203));
var inst_40226 = cljs.core.not(inst_40225);
var state_40262__$1 = state_40262;
var statearr_40304_42399 = state_40262__$1;
(statearr_40304_42399[(2)] = inst_40226);

(statearr_40304_42399[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (3))){
var inst_40247 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40262__$1,inst_40247);
} else {
if((state_val_40263 === (12))){
var state_40262__$1 = state_40262;
var statearr_40309_42405 = state_40262__$1;
(statearr_40309_42405[(2)] = null);

(statearr_40309_42405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (2))){
var inst_40190 = (state_40262[(11)]);
var inst_40193 = (state_40262[(12)]);
var inst_40193__$1 = cljs.core.__destructure_map(inst_40190);
var inst_40194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40193__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40193__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40193__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40262__$1 = (function (){var statearr_40311 = state_40262;
(statearr_40311[(12)] = inst_40193__$1);

(statearr_40311[(15)] = inst_40194);

(statearr_40311[(18)] = inst_40195);

return statearr_40311;
})();
return cljs.core.async.ioc_alts_BANG_(state_40262__$1,(4),inst_40196);
} else {
if((state_val_40263 === (23))){
var inst_40234 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
if(cljs.core.truth_(inst_40234)){
var statearr_40320_42418 = state_40262__$1;
(statearr_40320_42418[(1)] = (24));

} else {
var statearr_40321_42419 = state_40262__$1;
(statearr_40321_42419[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (19))){
var inst_40229 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40327_42427 = state_40262__$1;
(statearr_40327_42427[(2)] = inst_40229);

(statearr_40327_42427[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (11))){
var inst_40203 = (state_40262[(14)]);
var inst_40213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40203);
var state_40262__$1 = state_40262;
var statearr_40329_42432 = state_40262__$1;
(statearr_40329_42432[(2)] = inst_40213);

(statearr_40329_42432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (9))){
var inst_40194 = (state_40262[(15)]);
var inst_40203 = (state_40262[(14)]);
var inst_40220 = (state_40262[(19)]);
var inst_40220__$1 = (inst_40194.cljs$core$IFn$_invoke$arity$1 ? inst_40194.cljs$core$IFn$_invoke$arity$1(inst_40203) : inst_40194.call(null,inst_40203));
var state_40262__$1 = (function (){var statearr_40334 = state_40262;
(statearr_40334[(19)] = inst_40220__$1);

return statearr_40334;
})();
if(cljs.core.truth_(inst_40220__$1)){
var statearr_40340_42441 = state_40262__$1;
(statearr_40340_42441[(1)] = (14));

} else {
var statearr_40341_42442 = state_40262__$1;
(statearr_40341_42442[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (5))){
var inst_40204 = (state_40262[(13)]);
var state_40262__$1 = state_40262;
var statearr_40342_42447 = state_40262__$1;
(statearr_40342_42447[(2)] = inst_40204);

(statearr_40342_42447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (14))){
var inst_40220 = (state_40262[(19)]);
var state_40262__$1 = state_40262;
var statearr_40344_42448 = state_40262__$1;
(statearr_40344_42448[(2)] = inst_40220);

(statearr_40344_42448[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (26))){
var inst_40239 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40356_42449 = state_40262__$1;
(statearr_40356_42449[(2)] = inst_40239);

(statearr_40356_42449[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (16))){
var inst_40231 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
if(cljs.core.truth_(inst_40231)){
var statearr_40368_42455 = state_40262__$1;
(statearr_40368_42455[(1)] = (20));

} else {
var statearr_40369_42456 = state_40262__$1;
(statearr_40369_42456[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (10))){
var inst_40245 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40370_42457 = state_40262__$1;
(statearr_40370_42457[(2)] = inst_40245);

(statearr_40370_42457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (18))){
var inst_40223 = (state_40262[(16)]);
var state_40262__$1 = state_40262;
var statearr_40371_42459 = state_40262__$1;
(statearr_40371_42459[(2)] = inst_40223);

(statearr_40371_42459[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (8))){
var inst_40202 = (state_40262[(7)]);
var inst_40211 = (inst_40202 == null);
var state_40262__$1 = state_40262;
if(cljs.core.truth_(inst_40211)){
var statearr_40372_42465 = state_40262__$1;
(statearr_40372_42465[(1)] = (11));

} else {
var statearr_40373_42466 = state_40262__$1;
(statearr_40373_42466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37213__auto__ = null;
var cljs$core$async$mix_$_state_machine__37213__auto____0 = (function (){
var statearr_40374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40374[(0)] = cljs$core$async$mix_$_state_machine__37213__auto__);

(statearr_40374[(1)] = (1));

return statearr_40374;
});
var cljs$core$async$mix_$_state_machine__37213__auto____1 = (function (state_40262){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_40262);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e40375){var ex__37216__auto__ = e40375;
var statearr_40376_42469 = state_40262;
(statearr_40376_42469[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_40262[(4)]))){
var statearr_40377_42470 = state_40262;
(statearr_40377_42470[(1)] = cljs.core.first((state_40262[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42471 = state_40262;
state_40262 = G__42471;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37213__auto__ = function(state_40262){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37213__auto____1.call(this,state_40262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37213__auto____0;
cljs$core$async$mix_$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37213__auto____1;
return cljs$core$async$mix_$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_40379 = f__38571__auto__();
(statearr_40379[(6)] = c__38570__auto___42370);

return statearr_40379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42476 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42476(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42482 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42482(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42502 = (function() {
var G__42503 = null;
var G__42503__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42503__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42503 = function(p,v){
switch(arguments.length){
case 1:
return G__42503__1.call(this,p);
case 2:
return G__42503__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42503.cljs$core$IFn$_invoke$arity$1 = G__42503__1;
G__42503.cljs$core$IFn$_invoke$arity$2 = G__42503__2;
return G__42503;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40400 = arguments.length;
switch (G__40400) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42502(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42502(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40411 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40412){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40412 = meta40412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40413,meta40412__$1){
var self__ = this;
var _40413__$1 = this;
return (new cljs.core.async.t_cljs$core$async40411(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40412__$1));
}));

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40413){
var self__ = this;
var _40413__$1 = this;
return self__.meta40412;
}));

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40411.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40412","meta40412",-868054381,null)], null);
}));

(cljs.core.async.t_cljs$core$async40411.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40411");

(cljs.core.async.t_cljs$core$async40411.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async40411");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40411.
 */
cljs.core.async.__GT_t_cljs$core$async40411 = (function cljs$core$async$__GT_t_cljs$core$async40411(ch,topic_fn,buf_fn,mults,ensure_mult,meta40412){
return (new cljs.core.async.t_cljs$core$async40411(ch,topic_fn,buf_fn,mults,ensure_mult,meta40412));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40406 = arguments.length;
switch (G__40406) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40404_SHARP_){
if(cljs.core.truth_((p1__40404_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40404_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40404_SHARP_.call(null,topic)))){
return p1__40404_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40404_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async40411(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__38570__auto___42571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_40545){
var state_val_40546 = (state_40545[(1)]);
if((state_val_40546 === (7))){
var inst_40535 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
var statearr_40547_42572 = state_40545__$1;
(statearr_40547_42572[(2)] = inst_40535);

(statearr_40547_42572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (20))){
var state_40545__$1 = state_40545;
var statearr_40550_42573 = state_40545__$1;
(statearr_40550_42573[(2)] = null);

(statearr_40550_42573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (1))){
var state_40545__$1 = state_40545;
var statearr_40557_42574 = state_40545__$1;
(statearr_40557_42574[(2)] = null);

(statearr_40557_42574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (24))){
var inst_40478 = (state_40545[(7)]);
var inst_40527 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40478);
var state_40545__$1 = state_40545;
var statearr_40560_42578 = state_40545__$1;
(statearr_40560_42578[(2)] = inst_40527);

(statearr_40560_42578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (4))){
var inst_40416 = (state_40545[(8)]);
var inst_40416__$1 = (state_40545[(2)]);
var inst_40417 = (inst_40416__$1 == null);
var state_40545__$1 = (function (){var statearr_40561 = state_40545;
(statearr_40561[(8)] = inst_40416__$1);

return statearr_40561;
})();
if(cljs.core.truth_(inst_40417)){
var statearr_40562_42583 = state_40545__$1;
(statearr_40562_42583[(1)] = (5));

} else {
var statearr_40563_42584 = state_40545__$1;
(statearr_40563_42584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (15))){
var inst_40472 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
var statearr_40564_42585 = state_40545__$1;
(statearr_40564_42585[(2)] = inst_40472);

(statearr_40564_42585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (21))){
var inst_40532 = (state_40545[(2)]);
var state_40545__$1 = (function (){var statearr_40565 = state_40545;
(statearr_40565[(9)] = inst_40532);

return statearr_40565;
})();
var statearr_40567_42587 = state_40545__$1;
(statearr_40567_42587[(2)] = null);

(statearr_40567_42587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (13))){
var inst_40442 = (state_40545[(10)]);
var inst_40444 = cljs.core.chunked_seq_QMARK_(inst_40442);
var state_40545__$1 = state_40545;
if(inst_40444){
var statearr_40568_42588 = state_40545__$1;
(statearr_40568_42588[(1)] = (16));

} else {
var statearr_40569_42589 = state_40545__$1;
(statearr_40569_42589[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (22))){
var inst_40524 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
if(cljs.core.truth_(inst_40524)){
var statearr_40570_42590 = state_40545__$1;
(statearr_40570_42590[(1)] = (23));

} else {
var statearr_40571_42593 = state_40545__$1;
(statearr_40571_42593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (6))){
var inst_40416 = (state_40545[(8)]);
var inst_40478 = (state_40545[(7)]);
var inst_40480 = (state_40545[(11)]);
var inst_40478__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40416) : topic_fn.call(null,inst_40416));
var inst_40479 = cljs.core.deref(mults);
var inst_40480__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40479,inst_40478__$1);
var state_40545__$1 = (function (){var statearr_40575 = state_40545;
(statearr_40575[(7)] = inst_40478__$1);

(statearr_40575[(11)] = inst_40480__$1);

return statearr_40575;
})();
if(cljs.core.truth_(inst_40480__$1)){
var statearr_40576_42596 = state_40545__$1;
(statearr_40576_42596[(1)] = (19));

} else {
var statearr_40577_42597 = state_40545__$1;
(statearr_40577_42597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (25))){
var inst_40529 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
var statearr_40578_42598 = state_40545__$1;
(statearr_40578_42598[(2)] = inst_40529);

(statearr_40578_42598[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (17))){
var inst_40442 = (state_40545[(10)]);
var inst_40451 = cljs.core.first(inst_40442);
var inst_40463 = cljs.core.async.muxch_STAR_(inst_40451);
var inst_40464 = cljs.core.async.close_BANG_(inst_40463);
var inst_40466 = cljs.core.next(inst_40442);
var inst_40426 = inst_40466;
var inst_40427 = null;
var inst_40428 = (0);
var inst_40429 = (0);
var state_40545__$1 = (function (){var statearr_40579 = state_40545;
(statearr_40579[(12)] = inst_40464);

(statearr_40579[(13)] = inst_40426);

(statearr_40579[(14)] = inst_40427);

(statearr_40579[(15)] = inst_40428);

(statearr_40579[(16)] = inst_40429);

return statearr_40579;
})();
var statearr_40580_42606 = state_40545__$1;
(statearr_40580_42606[(2)] = null);

(statearr_40580_42606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (3))){
var inst_40537 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40545__$1,inst_40537);
} else {
if((state_val_40546 === (12))){
var inst_40474 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
var statearr_40581_42609 = state_40545__$1;
(statearr_40581_42609[(2)] = inst_40474);

(statearr_40581_42609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (2))){
var state_40545__$1 = state_40545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40545__$1,(4),ch);
} else {
if((state_val_40546 === (23))){
var state_40545__$1 = state_40545;
var statearr_40582_42610 = state_40545__$1;
(statearr_40582_42610[(2)] = null);

(statearr_40582_42610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (19))){
var inst_40480 = (state_40545[(11)]);
var inst_40416 = (state_40545[(8)]);
var inst_40522 = cljs.core.async.muxch_STAR_(inst_40480);
var state_40545__$1 = state_40545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40545__$1,(22),inst_40522,inst_40416);
} else {
if((state_val_40546 === (11))){
var inst_40426 = (state_40545[(13)]);
var inst_40442 = (state_40545[(10)]);
var inst_40442__$1 = cljs.core.seq(inst_40426);
var state_40545__$1 = (function (){var statearr_40583 = state_40545;
(statearr_40583[(10)] = inst_40442__$1);

return statearr_40583;
})();
if(inst_40442__$1){
var statearr_40584_42611 = state_40545__$1;
(statearr_40584_42611[(1)] = (13));

} else {
var statearr_40585_42612 = state_40545__$1;
(statearr_40585_42612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (9))){
var inst_40476 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
var statearr_40586_42613 = state_40545__$1;
(statearr_40586_42613[(2)] = inst_40476);

(statearr_40586_42613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (5))){
var inst_40423 = cljs.core.deref(mults);
var inst_40424 = cljs.core.vals(inst_40423);
var inst_40425 = cljs.core.seq(inst_40424);
var inst_40426 = inst_40425;
var inst_40427 = null;
var inst_40428 = (0);
var inst_40429 = (0);
var state_40545__$1 = (function (){var statearr_40587 = state_40545;
(statearr_40587[(13)] = inst_40426);

(statearr_40587[(14)] = inst_40427);

(statearr_40587[(15)] = inst_40428);

(statearr_40587[(16)] = inst_40429);

return statearr_40587;
})();
var statearr_40588_42614 = state_40545__$1;
(statearr_40588_42614[(2)] = null);

(statearr_40588_42614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (14))){
var state_40545__$1 = state_40545;
var statearr_40592_42615 = state_40545__$1;
(statearr_40592_42615[(2)] = null);

(statearr_40592_42615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (16))){
var inst_40442 = (state_40545[(10)]);
var inst_40446 = cljs.core.chunk_first(inst_40442);
var inst_40447 = cljs.core.chunk_rest(inst_40442);
var inst_40448 = cljs.core.count(inst_40446);
var inst_40426 = inst_40447;
var inst_40427 = inst_40446;
var inst_40428 = inst_40448;
var inst_40429 = (0);
var state_40545__$1 = (function (){var statearr_40596 = state_40545;
(statearr_40596[(13)] = inst_40426);

(statearr_40596[(14)] = inst_40427);

(statearr_40596[(15)] = inst_40428);

(statearr_40596[(16)] = inst_40429);

return statearr_40596;
})();
var statearr_40598_42616 = state_40545__$1;
(statearr_40598_42616[(2)] = null);

(statearr_40598_42616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (10))){
var inst_40427 = (state_40545[(14)]);
var inst_40429 = (state_40545[(16)]);
var inst_40426 = (state_40545[(13)]);
var inst_40428 = (state_40545[(15)]);
var inst_40434 = cljs.core._nth(inst_40427,inst_40429);
var inst_40436 = cljs.core.async.muxch_STAR_(inst_40434);
var inst_40437 = cljs.core.async.close_BANG_(inst_40436);
var inst_40438 = (inst_40429 + (1));
var tmp40589 = inst_40427;
var tmp40590 = inst_40428;
var tmp40591 = inst_40426;
var inst_40426__$1 = tmp40591;
var inst_40427__$1 = tmp40589;
var inst_40428__$1 = tmp40590;
var inst_40429__$1 = inst_40438;
var state_40545__$1 = (function (){var statearr_40602 = state_40545;
(statearr_40602[(17)] = inst_40437);

(statearr_40602[(13)] = inst_40426__$1);

(statearr_40602[(14)] = inst_40427__$1);

(statearr_40602[(15)] = inst_40428__$1);

(statearr_40602[(16)] = inst_40429__$1);

return statearr_40602;
})();
var statearr_40603_42617 = state_40545__$1;
(statearr_40603_42617[(2)] = null);

(statearr_40603_42617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (18))){
var inst_40469 = (state_40545[(2)]);
var state_40545__$1 = state_40545;
var statearr_40604_42618 = state_40545__$1;
(statearr_40604_42618[(2)] = inst_40469);

(statearr_40604_42618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40546 === (8))){
var inst_40429 = (state_40545[(16)]);
var inst_40428 = (state_40545[(15)]);
var inst_40431 = (inst_40429 < inst_40428);
var inst_40432 = inst_40431;
var state_40545__$1 = state_40545;
if(cljs.core.truth_(inst_40432)){
var statearr_40605_42623 = state_40545__$1;
(statearr_40605_42623[(1)] = (10));

} else {
var statearr_40606_42624 = state_40545__$1;
(statearr_40606_42624[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_40607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40607[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_40607[(1)] = (1));

return statearr_40607;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_40545){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_40545);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e40608){var ex__37216__auto__ = e40608;
var statearr_40609_42631 = state_40545;
(statearr_40609_42631[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_40545[(4)]))){
var statearr_40610_42632 = state_40545;
(statearr_40610_42632[(1)] = cljs.core.first((state_40545[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42633 = state_40545;
state_40545 = G__42633;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_40545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_40545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_40613 = f__38571__auto__();
(statearr_40613[(6)] = c__38570__auto___42571);

return statearr_40613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40615 = arguments.length;
switch (G__40615) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40630 = arguments.length;
switch (G__40630) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40635 = arguments.length;
switch (G__40635) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__38570__auto___42650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_40698){
var state_val_40699 = (state_40698[(1)]);
if((state_val_40699 === (7))){
var state_40698__$1 = state_40698;
var statearr_40701_42651 = state_40698__$1;
(statearr_40701_42651[(2)] = null);

(statearr_40701_42651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (1))){
var state_40698__$1 = state_40698;
var statearr_40705_42652 = state_40698__$1;
(statearr_40705_42652[(2)] = null);

(statearr_40705_42652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (4))){
var inst_40653 = (state_40698[(7)]);
var inst_40652 = (state_40698[(8)]);
var inst_40655 = (inst_40653 < inst_40652);
var state_40698__$1 = state_40698;
if(cljs.core.truth_(inst_40655)){
var statearr_40707_42653 = state_40698__$1;
(statearr_40707_42653[(1)] = (6));

} else {
var statearr_40708_42654 = state_40698__$1;
(statearr_40708_42654[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (15))){
var inst_40684 = (state_40698[(9)]);
var inst_40689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40684);
var state_40698__$1 = state_40698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40698__$1,(17),out,inst_40689);
} else {
if((state_val_40699 === (13))){
var inst_40684 = (state_40698[(9)]);
var inst_40684__$1 = (state_40698[(2)]);
var inst_40685 = cljs.core.some(cljs.core.nil_QMARK_,inst_40684__$1);
var state_40698__$1 = (function (){var statearr_40709 = state_40698;
(statearr_40709[(9)] = inst_40684__$1);

return statearr_40709;
})();
if(cljs.core.truth_(inst_40685)){
var statearr_40713_42656 = state_40698__$1;
(statearr_40713_42656[(1)] = (14));

} else {
var statearr_40714_42657 = state_40698__$1;
(statearr_40714_42657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (6))){
var state_40698__$1 = state_40698;
var statearr_40715_42659 = state_40698__$1;
(statearr_40715_42659[(2)] = null);

(statearr_40715_42659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (17))){
var inst_40691 = (state_40698[(2)]);
var state_40698__$1 = (function (){var statearr_40729 = state_40698;
(statearr_40729[(10)] = inst_40691);

return statearr_40729;
})();
var statearr_40730_42660 = state_40698__$1;
(statearr_40730_42660[(2)] = null);

(statearr_40730_42660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (3))){
var inst_40696 = (state_40698[(2)]);
var state_40698__$1 = state_40698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40698__$1,inst_40696);
} else {
if((state_val_40699 === (12))){
var _ = (function (){var statearr_40733 = state_40698;
(statearr_40733[(4)] = cljs.core.rest((state_40698[(4)])));

return statearr_40733;
})();
var state_40698__$1 = state_40698;
var ex40723 = (state_40698__$1[(2)]);
var statearr_40734_42665 = state_40698__$1;
(statearr_40734_42665[(5)] = ex40723);


if((ex40723 instanceof Object)){
var statearr_40737_42666 = state_40698__$1;
(statearr_40737_42666[(1)] = (11));

(statearr_40737_42666[(5)] = null);

} else {
throw ex40723;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (2))){
var inst_40651 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40652 = cnt;
var inst_40653 = (0);
var state_40698__$1 = (function (){var statearr_40738 = state_40698;
(statearr_40738[(11)] = inst_40651);

(statearr_40738[(8)] = inst_40652);

(statearr_40738[(7)] = inst_40653);

return statearr_40738;
})();
var statearr_40739_42670 = state_40698__$1;
(statearr_40739_42670[(2)] = null);

(statearr_40739_42670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (11))){
var inst_40663 = (state_40698[(2)]);
var inst_40664 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40698__$1 = (function (){var statearr_40740 = state_40698;
(statearr_40740[(12)] = inst_40663);

return statearr_40740;
})();
var statearr_40741_42671 = state_40698__$1;
(statearr_40741_42671[(2)] = inst_40664);

(statearr_40741_42671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (9))){
var inst_40653 = (state_40698[(7)]);
var _ = (function (){var statearr_40742 = state_40698;
(statearr_40742[(4)] = cljs.core.cons((12),(state_40698[(4)])));

return statearr_40742;
})();
var inst_40670 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40653) : chs__$1.call(null,inst_40653));
var inst_40671 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40653) : done.call(null,inst_40653));
var inst_40672 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40670,inst_40671);
var ___$1 = (function (){var statearr_40743 = state_40698;
(statearr_40743[(4)] = cljs.core.rest((state_40698[(4)])));

return statearr_40743;
})();
var state_40698__$1 = state_40698;
var statearr_40744_42672 = state_40698__$1;
(statearr_40744_42672[(2)] = inst_40672);

(statearr_40744_42672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (5))){
var inst_40682 = (state_40698[(2)]);
var state_40698__$1 = (function (){var statearr_40757 = state_40698;
(statearr_40757[(13)] = inst_40682);

return statearr_40757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40698__$1,(13),dchan);
} else {
if((state_val_40699 === (14))){
var inst_40687 = cljs.core.async.close_BANG_(out);
var state_40698__$1 = state_40698;
var statearr_40758_42673 = state_40698__$1;
(statearr_40758_42673[(2)] = inst_40687);

(statearr_40758_42673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (16))){
var inst_40694 = (state_40698[(2)]);
var state_40698__$1 = state_40698;
var statearr_40759_42674 = state_40698__$1;
(statearr_40759_42674[(2)] = inst_40694);

(statearr_40759_42674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (10))){
var inst_40653 = (state_40698[(7)]);
var inst_40675 = (state_40698[(2)]);
var inst_40676 = (inst_40653 + (1));
var inst_40653__$1 = inst_40676;
var state_40698__$1 = (function (){var statearr_40762 = state_40698;
(statearr_40762[(14)] = inst_40675);

(statearr_40762[(7)] = inst_40653__$1);

return statearr_40762;
})();
var statearr_40763_42675 = state_40698__$1;
(statearr_40763_42675[(2)] = null);

(statearr_40763_42675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (8))){
var inst_40680 = (state_40698[(2)]);
var state_40698__$1 = state_40698;
var statearr_40764_42676 = state_40698__$1;
(statearr_40764_42676[(2)] = inst_40680);

(statearr_40764_42676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_40765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40765[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_40765[(1)] = (1));

return statearr_40765;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_40698){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_40698);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e40769){var ex__37216__auto__ = e40769;
var statearr_40771_42677 = state_40698;
(statearr_40771_42677[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_40698[(4)]))){
var statearr_40772_42678 = state_40698;
(statearr_40772_42678[(1)] = cljs.core.first((state_40698[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42679 = state_40698;
state_40698 = G__42679;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_40698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_40698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_40774 = f__38571__auto__();
(statearr_40774[(6)] = c__38570__auto___42650);

return statearr_40774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40781 = arguments.length;
switch (G__40781) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38570__auto___42687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_40873){
var state_val_40874 = (state_40873[(1)]);
if((state_val_40874 === (7))){
var inst_40816 = (state_40873[(7)]);
var inst_40817 = (state_40873[(8)]);
var inst_40816__$1 = (state_40873[(2)]);
var inst_40817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40816__$1,(0),null);
var inst_40818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40816__$1,(1),null);
var inst_40822 = (inst_40817__$1 == null);
var state_40873__$1 = (function (){var statearr_40881 = state_40873;
(statearr_40881[(7)] = inst_40816__$1);

(statearr_40881[(8)] = inst_40817__$1);

(statearr_40881[(9)] = inst_40818);

return statearr_40881;
})();
if(cljs.core.truth_(inst_40822)){
var statearr_40882_42688 = state_40873__$1;
(statearr_40882_42688[(1)] = (8));

} else {
var statearr_40883_42689 = state_40873__$1;
(statearr_40883_42689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (1))){
var inst_40802 = cljs.core.vec(chs);
var inst_40803 = inst_40802;
var state_40873__$1 = (function (){var statearr_40884 = state_40873;
(statearr_40884[(10)] = inst_40803);

return statearr_40884;
})();
var statearr_40885_42690 = state_40873__$1;
(statearr_40885_42690[(2)] = null);

(statearr_40885_42690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (4))){
var inst_40803 = (state_40873[(10)]);
var state_40873__$1 = state_40873;
return cljs.core.async.ioc_alts_BANG_(state_40873__$1,(7),inst_40803);
} else {
if((state_val_40874 === (6))){
var inst_40860 = (state_40873[(2)]);
var state_40873__$1 = state_40873;
var statearr_40886_42691 = state_40873__$1;
(statearr_40886_42691[(2)] = inst_40860);

(statearr_40886_42691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (3))){
var inst_40862 = (state_40873[(2)]);
var state_40873__$1 = state_40873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40873__$1,inst_40862);
} else {
if((state_val_40874 === (2))){
var inst_40803 = (state_40873[(10)]);
var inst_40808 = cljs.core.count(inst_40803);
var inst_40809 = (inst_40808 > (0));
var state_40873__$1 = state_40873;
if(cljs.core.truth_(inst_40809)){
var statearr_40888_42695 = state_40873__$1;
(statearr_40888_42695[(1)] = (4));

} else {
var statearr_40889_42697 = state_40873__$1;
(statearr_40889_42697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (11))){
var inst_40803 = (state_40873[(10)]);
var inst_40853 = (state_40873[(2)]);
var tmp40887 = inst_40803;
var inst_40803__$1 = tmp40887;
var state_40873__$1 = (function (){var statearr_40890 = state_40873;
(statearr_40890[(11)] = inst_40853);

(statearr_40890[(10)] = inst_40803__$1);

return statearr_40890;
})();
var statearr_40891_42698 = state_40873__$1;
(statearr_40891_42698[(2)] = null);

(statearr_40891_42698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (9))){
var inst_40817 = (state_40873[(8)]);
var state_40873__$1 = state_40873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40873__$1,(11),out,inst_40817);
} else {
if((state_val_40874 === (5))){
var inst_40858 = cljs.core.async.close_BANG_(out);
var state_40873__$1 = state_40873;
var statearr_40901_42699 = state_40873__$1;
(statearr_40901_42699[(2)] = inst_40858);

(statearr_40901_42699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (10))){
var inst_40856 = (state_40873[(2)]);
var state_40873__$1 = state_40873;
var statearr_40902_42700 = state_40873__$1;
(statearr_40902_42700[(2)] = inst_40856);

(statearr_40902_42700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40874 === (8))){
var inst_40803 = (state_40873[(10)]);
var inst_40816 = (state_40873[(7)]);
var inst_40817 = (state_40873[(8)]);
var inst_40818 = (state_40873[(9)]);
var inst_40831 = (function (){var cs = inst_40803;
var vec__40812 = inst_40816;
var v = inst_40817;
var c = inst_40818;
return (function (p1__40775_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40775_SHARP_);
});
})();
var inst_40838 = cljs.core.filterv(inst_40831,inst_40803);
var inst_40803__$1 = inst_40838;
var state_40873__$1 = (function (){var statearr_40903 = state_40873;
(statearr_40903[(10)] = inst_40803__$1);

return statearr_40903;
})();
var statearr_40904_42701 = state_40873__$1;
(statearr_40904_42701[(2)] = null);

(statearr_40904_42701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_40905 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40905[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_40905[(1)] = (1));

return statearr_40905;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_40873){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_40873);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e40906){var ex__37216__auto__ = e40906;
var statearr_40907_42702 = state_40873;
(statearr_40907_42702[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_40873[(4)]))){
var statearr_40908_42703 = state_40873;
(statearr_40908_42703[(1)] = cljs.core.first((state_40873[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42705 = state_40873;
state_40873 = G__42705;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_40873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_40873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_40909 = f__38571__auto__();
(statearr_40909[(6)] = c__38570__auto___42687);

return statearr_40909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40917 = arguments.length;
switch (G__40917) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38570__auto___42712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_40950){
var state_val_40951 = (state_40950[(1)]);
if((state_val_40951 === (7))){
var inst_40926 = (state_40950[(7)]);
var inst_40926__$1 = (state_40950[(2)]);
var inst_40927 = (inst_40926__$1 == null);
var inst_40928 = cljs.core.not(inst_40927);
var state_40950__$1 = (function (){var statearr_40953 = state_40950;
(statearr_40953[(7)] = inst_40926__$1);

return statearr_40953;
})();
if(inst_40928){
var statearr_40954_42714 = state_40950__$1;
(statearr_40954_42714[(1)] = (8));

} else {
var statearr_40955_42716 = state_40950__$1;
(statearr_40955_42716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (1))){
var inst_40921 = (0);
var state_40950__$1 = (function (){var statearr_40956 = state_40950;
(statearr_40956[(8)] = inst_40921);

return statearr_40956;
})();
var statearr_40960_42717 = state_40950__$1;
(statearr_40960_42717[(2)] = null);

(statearr_40960_42717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (4))){
var state_40950__$1 = state_40950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40950__$1,(7),ch);
} else {
if((state_val_40951 === (6))){
var inst_40945 = (state_40950[(2)]);
var state_40950__$1 = state_40950;
var statearr_40961_42719 = state_40950__$1;
(statearr_40961_42719[(2)] = inst_40945);

(statearr_40961_42719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (3))){
var inst_40947 = (state_40950[(2)]);
var inst_40948 = cljs.core.async.close_BANG_(out);
var state_40950__$1 = (function (){var statearr_40964 = state_40950;
(statearr_40964[(9)] = inst_40947);

return statearr_40964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40950__$1,inst_40948);
} else {
if((state_val_40951 === (2))){
var inst_40921 = (state_40950[(8)]);
var inst_40923 = (inst_40921 < n);
var state_40950__$1 = state_40950;
if(cljs.core.truth_(inst_40923)){
var statearr_40965_42720 = state_40950__$1;
(statearr_40965_42720[(1)] = (4));

} else {
var statearr_40966_42721 = state_40950__$1;
(statearr_40966_42721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (11))){
var inst_40921 = (state_40950[(8)]);
var inst_40931 = (state_40950[(2)]);
var inst_40938 = (inst_40921 + (1));
var inst_40921__$1 = inst_40938;
var state_40950__$1 = (function (){var statearr_40967 = state_40950;
(statearr_40967[(10)] = inst_40931);

(statearr_40967[(8)] = inst_40921__$1);

return statearr_40967;
})();
var statearr_40968_42722 = state_40950__$1;
(statearr_40968_42722[(2)] = null);

(statearr_40968_42722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (9))){
var state_40950__$1 = state_40950;
var statearr_40969_42723 = state_40950__$1;
(statearr_40969_42723[(2)] = null);

(statearr_40969_42723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (5))){
var state_40950__$1 = state_40950;
var statearr_40970_42724 = state_40950__$1;
(statearr_40970_42724[(2)] = null);

(statearr_40970_42724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (10))){
var inst_40942 = (state_40950[(2)]);
var state_40950__$1 = state_40950;
var statearr_40972_42727 = state_40950__$1;
(statearr_40972_42727[(2)] = inst_40942);

(statearr_40972_42727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40951 === (8))){
var inst_40926 = (state_40950[(7)]);
var state_40950__$1 = state_40950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40950__$1,(11),out,inst_40926);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_40983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40983[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_40983[(1)] = (1));

return statearr_40983;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_40950){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_40950);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e40984){var ex__37216__auto__ = e40984;
var statearr_40985_42730 = state_40950;
(statearr_40985_42730[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_40950[(4)]))){
var statearr_40986_42731 = state_40950;
(statearr_40986_42731[(1)] = cljs.core.first((state_40950[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42732 = state_40950;
state_40950 = G__42732;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_40950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_40950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_40987 = f__38571__auto__();
(statearr_40987[(6)] = c__38570__auto___42712);

return statearr_40987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40995 = (function (f,ch,meta40992,_,fn1,meta40996){
this.f = f;
this.ch = ch;
this.meta40992 = meta40992;
this._ = _;
this.fn1 = fn1;
this.meta40996 = meta40996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40997,meta40996__$1){
var self__ = this;
var _40997__$1 = this;
return (new cljs.core.async.t_cljs$core$async40995(self__.f,self__.ch,self__.meta40992,self__._,self__.fn1,meta40996__$1));
}));

(cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40997){
var self__ = this;
var _40997__$1 = this;
return self__.meta40996;
}));

(cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40989_SHARP_){
var G__41004 = (((p1__40989_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40989_SHARP_) : self__.f.call(null,p1__40989_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41004) : f1.call(null,G__41004));
});
}));

(cljs.core.async.t_cljs$core$async40995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40992","meta40992",963629502,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40991","cljs.core.async/t_cljs$core$async40991",1308362811,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40996","meta40996",-310170980,null)], null);
}));

(cljs.core.async.t_cljs$core$async40995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40995");

(cljs.core.async.t_cljs$core$async40995.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async40995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40995.
 */
cljs.core.async.__GT_t_cljs$core$async40995 = (function cljs$core$async$__GT_t_cljs$core$async40995(f,ch,meta40992,_,fn1,meta40996){
return (new cljs.core.async.t_cljs$core$async40995(f,ch,meta40992,_,fn1,meta40996));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40991 = (function (f,ch,meta40992){
this.f = f;
this.ch = ch;
this.meta40992 = meta40992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40993,meta40992__$1){
var self__ = this;
var _40993__$1 = this;
return (new cljs.core.async.t_cljs$core$async40991(self__.f,self__.ch,meta40992__$1));
}));

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40993){
var self__ = this;
var _40993__$1 = this;
return self__.meta40992;
}));

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async40995(self__.f,self__.ch,self__.meta40992,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41011 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41011) : self__.f.call(null,G__41011));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40992","meta40992",963629502,null)], null);
}));

(cljs.core.async.t_cljs$core$async40991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40991");

(cljs.core.async.t_cljs$core$async40991.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async40991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40991.
 */
cljs.core.async.__GT_t_cljs$core$async40991 = (function cljs$core$async$__GT_t_cljs$core$async40991(f,ch,meta40992){
return (new cljs.core.async.t_cljs$core$async40991(f,ch,meta40992));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40991(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41030 = (function (f,ch,meta41031){
this.f = f;
this.ch = ch;
this.meta41031 = meta41031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41032,meta41031__$1){
var self__ = this;
var _41032__$1 = this;
return (new cljs.core.async.t_cljs$core$async41030(self__.f,self__.ch,meta41031__$1));
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41032){
var self__ = this;
var _41032__$1 = this;
return self__.meta41031;
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41031","meta41031",-121535707,null)], null);
}));

(cljs.core.async.t_cljs$core$async41030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41030");

(cljs.core.async.t_cljs$core$async41030.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async41030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41030.
 */
cljs.core.async.__GT_t_cljs$core$async41030 = (function cljs$core$async$__GT_t_cljs$core$async41030(f,ch,meta41031){
return (new cljs.core.async.t_cljs$core$async41030(f,ch,meta41031));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async41030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41046 = (function (p,ch,meta41047){
this.p = p;
this.ch = ch;
this.meta41047 = meta41047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41048,meta41047__$1){
var self__ = this;
var _41048__$1 = this;
return (new cljs.core.async.t_cljs$core$async41046(self__.p,self__.ch,meta41047__$1));
}));

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41048){
var self__ = this;
var _41048__$1 = this;
return self__.meta41047;
}));

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41047","meta41047",1566139668,null)], null);
}));

(cljs.core.async.t_cljs$core$async41046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41046");

(cljs.core.async.t_cljs$core$async41046.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async41046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41046.
 */
cljs.core.async.__GT_t_cljs$core$async41046 = (function cljs$core$async$__GT_t_cljs$core$async41046(p,ch,meta41047){
return (new cljs.core.async.t_cljs$core$async41046(p,ch,meta41047));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async41046(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41066 = arguments.length;
switch (G__41066) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38570__auto___42766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_41089){
var state_val_41090 = (state_41089[(1)]);
if((state_val_41090 === (7))){
var inst_41085 = (state_41089[(2)]);
var state_41089__$1 = state_41089;
var statearr_41103_42767 = state_41089__$1;
(statearr_41103_42767[(2)] = inst_41085);

(statearr_41103_42767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (1))){
var state_41089__$1 = state_41089;
var statearr_41104_42768 = state_41089__$1;
(statearr_41104_42768[(2)] = null);

(statearr_41104_42768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (4))){
var inst_41071 = (state_41089[(7)]);
var inst_41071__$1 = (state_41089[(2)]);
var inst_41072 = (inst_41071__$1 == null);
var state_41089__$1 = (function (){var statearr_41105 = state_41089;
(statearr_41105[(7)] = inst_41071__$1);

return statearr_41105;
})();
if(cljs.core.truth_(inst_41072)){
var statearr_41106_42769 = state_41089__$1;
(statearr_41106_42769[(1)] = (5));

} else {
var statearr_41107_42770 = state_41089__$1;
(statearr_41107_42770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (6))){
var inst_41071 = (state_41089[(7)]);
var inst_41076 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41071) : p.call(null,inst_41071));
var state_41089__$1 = state_41089;
if(cljs.core.truth_(inst_41076)){
var statearr_41108_42771 = state_41089__$1;
(statearr_41108_42771[(1)] = (8));

} else {
var statearr_41109_42772 = state_41089__$1;
(statearr_41109_42772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (3))){
var inst_41087 = (state_41089[(2)]);
var state_41089__$1 = state_41089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41089__$1,inst_41087);
} else {
if((state_val_41090 === (2))){
var state_41089__$1 = state_41089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41089__$1,(4),ch);
} else {
if((state_val_41090 === (11))){
var inst_41079 = (state_41089[(2)]);
var state_41089__$1 = state_41089;
var statearr_41110_42777 = state_41089__$1;
(statearr_41110_42777[(2)] = inst_41079);

(statearr_41110_42777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (9))){
var state_41089__$1 = state_41089;
var statearr_41111_42778 = state_41089__$1;
(statearr_41111_42778[(2)] = null);

(statearr_41111_42778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (5))){
var inst_41074 = cljs.core.async.close_BANG_(out);
var state_41089__$1 = state_41089;
var statearr_41119_42781 = state_41089__$1;
(statearr_41119_42781[(2)] = inst_41074);

(statearr_41119_42781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (10))){
var inst_41082 = (state_41089[(2)]);
var state_41089__$1 = (function (){var statearr_41120 = state_41089;
(statearr_41120[(8)] = inst_41082);

return statearr_41120;
})();
var statearr_41121_42785 = state_41089__$1;
(statearr_41121_42785[(2)] = null);

(statearr_41121_42785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41090 === (8))){
var inst_41071 = (state_41089[(7)]);
var state_41089__$1 = state_41089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41089__$1,(11),out,inst_41071);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_41122 = [null,null,null,null,null,null,null,null,null];
(statearr_41122[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_41122[(1)] = (1));

return statearr_41122;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_41089){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_41089);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e41124){var ex__37216__auto__ = e41124;
var statearr_41125_42790 = state_41089;
(statearr_41125_42790[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_41089[(4)]))){
var statearr_41126_42791 = state_41089;
(statearr_41126_42791[(1)] = cljs.core.first((state_41089[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42796 = state_41089;
state_41089 = G__42796;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_41089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_41089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_41127 = f__38571__auto__();
(statearr_41127[(6)] = c__38570__auto___42766);

return statearr_41127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41138 = arguments.length;
switch (G__41138) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38570__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_41218){
var state_val_41219 = (state_41218[(1)]);
if((state_val_41219 === (7))){
var inst_41214 = (state_41218[(2)]);
var state_41218__$1 = state_41218;
var statearr_41230_42798 = state_41218__$1;
(statearr_41230_42798[(2)] = inst_41214);

(statearr_41230_42798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (20))){
var inst_41180 = (state_41218[(7)]);
var inst_41195 = (state_41218[(2)]);
var inst_41196 = cljs.core.next(inst_41180);
var inst_41160 = inst_41196;
var inst_41161 = null;
var inst_41162 = (0);
var inst_41163 = (0);
var state_41218__$1 = (function (){var statearr_41235 = state_41218;
(statearr_41235[(8)] = inst_41195);

(statearr_41235[(9)] = inst_41160);

(statearr_41235[(10)] = inst_41161);

(statearr_41235[(11)] = inst_41162);

(statearr_41235[(12)] = inst_41163);

return statearr_41235;
})();
var statearr_41236_42799 = state_41218__$1;
(statearr_41236_42799[(2)] = null);

(statearr_41236_42799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (1))){
var state_41218__$1 = state_41218;
var statearr_41237_42800 = state_41218__$1;
(statearr_41237_42800[(2)] = null);

(statearr_41237_42800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (4))){
var inst_41148 = (state_41218[(13)]);
var inst_41148__$1 = (state_41218[(2)]);
var inst_41149 = (inst_41148__$1 == null);
var state_41218__$1 = (function (){var statearr_41239 = state_41218;
(statearr_41239[(13)] = inst_41148__$1);

return statearr_41239;
})();
if(cljs.core.truth_(inst_41149)){
var statearr_41240_42801 = state_41218__$1;
(statearr_41240_42801[(1)] = (5));

} else {
var statearr_41241_42802 = state_41218__$1;
(statearr_41241_42802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (15))){
var state_41218__$1 = state_41218;
var statearr_41251_42804 = state_41218__$1;
(statearr_41251_42804[(2)] = null);

(statearr_41251_42804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (21))){
var state_41218__$1 = state_41218;
var statearr_41252_42805 = state_41218__$1;
(statearr_41252_42805[(2)] = null);

(statearr_41252_42805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (13))){
var inst_41163 = (state_41218[(12)]);
var inst_41160 = (state_41218[(9)]);
var inst_41161 = (state_41218[(10)]);
var inst_41162 = (state_41218[(11)]);
var inst_41176 = (state_41218[(2)]);
var inst_41177 = (inst_41163 + (1));
var tmp41245 = inst_41162;
var tmp41246 = inst_41160;
var tmp41247 = inst_41161;
var inst_41160__$1 = tmp41246;
var inst_41161__$1 = tmp41247;
var inst_41162__$1 = tmp41245;
var inst_41163__$1 = inst_41177;
var state_41218__$1 = (function (){var statearr_41254 = state_41218;
(statearr_41254[(14)] = inst_41176);

(statearr_41254[(9)] = inst_41160__$1);

(statearr_41254[(10)] = inst_41161__$1);

(statearr_41254[(11)] = inst_41162__$1);

(statearr_41254[(12)] = inst_41163__$1);

return statearr_41254;
})();
var statearr_41255_42806 = state_41218__$1;
(statearr_41255_42806[(2)] = null);

(statearr_41255_42806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (22))){
var state_41218__$1 = state_41218;
var statearr_41256_42807 = state_41218__$1;
(statearr_41256_42807[(2)] = null);

(statearr_41256_42807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (6))){
var inst_41148 = (state_41218[(13)]);
var inst_41157 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41148) : f.call(null,inst_41148));
var inst_41158 = cljs.core.seq(inst_41157);
var inst_41160 = inst_41158;
var inst_41161 = null;
var inst_41162 = (0);
var inst_41163 = (0);
var state_41218__$1 = (function (){var statearr_41257 = state_41218;
(statearr_41257[(9)] = inst_41160);

(statearr_41257[(10)] = inst_41161);

(statearr_41257[(11)] = inst_41162);

(statearr_41257[(12)] = inst_41163);

return statearr_41257;
})();
var statearr_41259_42808 = state_41218__$1;
(statearr_41259_42808[(2)] = null);

(statearr_41259_42808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (17))){
var inst_41180 = (state_41218[(7)]);
var inst_41188 = cljs.core.chunk_first(inst_41180);
var inst_41189 = cljs.core.chunk_rest(inst_41180);
var inst_41190 = cljs.core.count(inst_41188);
var inst_41160 = inst_41189;
var inst_41161 = inst_41188;
var inst_41162 = inst_41190;
var inst_41163 = (0);
var state_41218__$1 = (function (){var statearr_41268 = state_41218;
(statearr_41268[(9)] = inst_41160);

(statearr_41268[(10)] = inst_41161);

(statearr_41268[(11)] = inst_41162);

(statearr_41268[(12)] = inst_41163);

return statearr_41268;
})();
var statearr_41269_42809 = state_41218__$1;
(statearr_41269_42809[(2)] = null);

(statearr_41269_42809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (3))){
var inst_41216 = (state_41218[(2)]);
var state_41218__$1 = state_41218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41218__$1,inst_41216);
} else {
if((state_val_41219 === (12))){
var inst_41204 = (state_41218[(2)]);
var state_41218__$1 = state_41218;
var statearr_41284_42810 = state_41218__$1;
(statearr_41284_42810[(2)] = inst_41204);

(statearr_41284_42810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (2))){
var state_41218__$1 = state_41218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41218__$1,(4),in$);
} else {
if((state_val_41219 === (23))){
var inst_41212 = (state_41218[(2)]);
var state_41218__$1 = state_41218;
var statearr_41289_42811 = state_41218__$1;
(statearr_41289_42811[(2)] = inst_41212);

(statearr_41289_42811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (19))){
var inst_41199 = (state_41218[(2)]);
var state_41218__$1 = state_41218;
var statearr_41291_42812 = state_41218__$1;
(statearr_41291_42812[(2)] = inst_41199);

(statearr_41291_42812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (11))){
var inst_41160 = (state_41218[(9)]);
var inst_41180 = (state_41218[(7)]);
var inst_41180__$1 = cljs.core.seq(inst_41160);
var state_41218__$1 = (function (){var statearr_41294 = state_41218;
(statearr_41294[(7)] = inst_41180__$1);

return statearr_41294;
})();
if(inst_41180__$1){
var statearr_41295_42813 = state_41218__$1;
(statearr_41295_42813[(1)] = (14));

} else {
var statearr_41296_42814 = state_41218__$1;
(statearr_41296_42814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (9))){
var inst_41206 = (state_41218[(2)]);
var inst_41207 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41218__$1 = (function (){var statearr_41306 = state_41218;
(statearr_41306[(15)] = inst_41206);

return statearr_41306;
})();
if(cljs.core.truth_(inst_41207)){
var statearr_41314_42815 = state_41218__$1;
(statearr_41314_42815[(1)] = (21));

} else {
var statearr_41315_42816 = state_41218__$1;
(statearr_41315_42816[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (5))){
var inst_41151 = cljs.core.async.close_BANG_(out);
var state_41218__$1 = state_41218;
var statearr_41316_42817 = state_41218__$1;
(statearr_41316_42817[(2)] = inst_41151);

(statearr_41316_42817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (14))){
var inst_41180 = (state_41218[(7)]);
var inst_41186 = cljs.core.chunked_seq_QMARK_(inst_41180);
var state_41218__$1 = state_41218;
if(inst_41186){
var statearr_41318_42818 = state_41218__$1;
(statearr_41318_42818[(1)] = (17));

} else {
var statearr_41319_42819 = state_41218__$1;
(statearr_41319_42819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (16))){
var inst_41202 = (state_41218[(2)]);
var state_41218__$1 = state_41218;
var statearr_41326_42820 = state_41218__$1;
(statearr_41326_42820[(2)] = inst_41202);

(statearr_41326_42820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41219 === (10))){
var inst_41161 = (state_41218[(10)]);
var inst_41163 = (state_41218[(12)]);
var inst_41174 = cljs.core._nth(inst_41161,inst_41163);
var state_41218__$1 = state_41218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41218__$1,(13),out,inst_41174);
} else {
if((state_val_41219 === (18))){
var inst_41180 = (state_41218[(7)]);
var inst_41193 = cljs.core.first(inst_41180);
var state_41218__$1 = state_41218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41218__$1,(20),out,inst_41193);
} else {
if((state_val_41219 === (8))){
var inst_41163 = (state_41218[(12)]);
var inst_41162 = (state_41218[(11)]);
var inst_41171 = (inst_41163 < inst_41162);
var inst_41172 = inst_41171;
var state_41218__$1 = state_41218;
if(cljs.core.truth_(inst_41172)){
var statearr_41336_42821 = state_41218__$1;
(statearr_41336_42821[(1)] = (10));

} else {
var statearr_41337_42822 = state_41218__$1;
(statearr_41337_42822[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37213__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37213__auto____0 = (function (){
var statearr_41338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41338[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37213__auto__);

(statearr_41338[(1)] = (1));

return statearr_41338;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37213__auto____1 = (function (state_41218){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_41218);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e41339){var ex__37216__auto__ = e41339;
var statearr_41340_42825 = state_41218;
(statearr_41340_42825[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_41218[(4)]))){
var statearr_41341_42826 = state_41218;
(statearr_41341_42826[(1)] = cljs.core.first((state_41218[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42827 = state_41218;
state_41218 = G__42827;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37213__auto__ = function(state_41218){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37213__auto____1.call(this,state_41218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37213__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37213__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_41342 = f__38571__auto__();
(statearr_41342[(6)] = c__38570__auto__);

return statearr_41342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));

return c__38570__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41345 = arguments.length;
switch (G__41345) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41352 = arguments.length;
switch (G__41352) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41364 = arguments.length;
switch (G__41364) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38570__auto___42833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_41488){
var state_val_41489 = (state_41488[(1)]);
if((state_val_41489 === (7))){
var inst_41483 = (state_41488[(2)]);
var state_41488__$1 = state_41488;
var statearr_41490_42836 = state_41488__$1;
(statearr_41490_42836[(2)] = inst_41483);

(statearr_41490_42836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (1))){
var inst_41457 = null;
var state_41488__$1 = (function (){var statearr_41491 = state_41488;
(statearr_41491[(7)] = inst_41457);

return statearr_41491;
})();
var statearr_41492_42842 = state_41488__$1;
(statearr_41492_42842[(2)] = null);

(statearr_41492_42842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (4))){
var inst_41464 = (state_41488[(8)]);
var inst_41464__$1 = (state_41488[(2)]);
var inst_41469 = (inst_41464__$1 == null);
var inst_41470 = cljs.core.not(inst_41469);
var state_41488__$1 = (function (){var statearr_41493 = state_41488;
(statearr_41493[(8)] = inst_41464__$1);

return statearr_41493;
})();
if(inst_41470){
var statearr_41494_42843 = state_41488__$1;
(statearr_41494_42843[(1)] = (5));

} else {
var statearr_41495_42847 = state_41488__$1;
(statearr_41495_42847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (6))){
var state_41488__$1 = state_41488;
var statearr_41496_42851 = state_41488__$1;
(statearr_41496_42851[(2)] = null);

(statearr_41496_42851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (3))){
var inst_41485 = (state_41488[(2)]);
var inst_41486 = cljs.core.async.close_BANG_(out);
var state_41488__$1 = (function (){var statearr_41497 = state_41488;
(statearr_41497[(9)] = inst_41485);

return statearr_41497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41488__$1,inst_41486);
} else {
if((state_val_41489 === (2))){
var state_41488__$1 = state_41488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41488__$1,(4),ch);
} else {
if((state_val_41489 === (11))){
var inst_41464 = (state_41488[(8)]);
var inst_41477 = (state_41488[(2)]);
var inst_41457 = inst_41464;
var state_41488__$1 = (function (){var statearr_41498 = state_41488;
(statearr_41498[(10)] = inst_41477);

(statearr_41498[(7)] = inst_41457);

return statearr_41498;
})();
var statearr_41499_42852 = state_41488__$1;
(statearr_41499_42852[(2)] = null);

(statearr_41499_42852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (9))){
var inst_41464 = (state_41488[(8)]);
var state_41488__$1 = state_41488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41488__$1,(11),out,inst_41464);
} else {
if((state_val_41489 === (5))){
var inst_41464 = (state_41488[(8)]);
var inst_41457 = (state_41488[(7)]);
var inst_41472 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41464,inst_41457);
var state_41488__$1 = state_41488;
if(inst_41472){
var statearr_41501_42856 = state_41488__$1;
(statearr_41501_42856[(1)] = (8));

} else {
var statearr_41502_42857 = state_41488__$1;
(statearr_41502_42857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (10))){
var inst_41480 = (state_41488[(2)]);
var state_41488__$1 = state_41488;
var statearr_41503_42858 = state_41488__$1;
(statearr_41503_42858[(2)] = inst_41480);

(statearr_41503_42858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (8))){
var inst_41457 = (state_41488[(7)]);
var tmp41500 = inst_41457;
var inst_41457__$1 = tmp41500;
var state_41488__$1 = (function (){var statearr_41504 = state_41488;
(statearr_41504[(7)] = inst_41457__$1);

return statearr_41504;
})();
var statearr_41505_42860 = state_41488__$1;
(statearr_41505_42860[(2)] = null);

(statearr_41505_42860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_41510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41510[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_41510[(1)] = (1));

return statearr_41510;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_41488){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_41488);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e41511){var ex__37216__auto__ = e41511;
var statearr_41512_42863 = state_41488;
(statearr_41512_42863[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_41488[(4)]))){
var statearr_41513_42867 = state_41488;
(statearr_41513_42867[(1)] = cljs.core.first((state_41488[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42869 = state_41488;
state_41488 = G__42869;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_41488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_41488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_41514 = f__38571__auto__();
(statearr_41514[(6)] = c__38570__auto___42833);

return statearr_41514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41524 = arguments.length;
switch (G__41524) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38570__auto___42875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_41571){
var state_val_41572 = (state_41571[(1)]);
if((state_val_41572 === (7))){
var inst_41567 = (state_41571[(2)]);
var state_41571__$1 = state_41571;
var statearr_41574_42876 = state_41571__$1;
(statearr_41574_42876[(2)] = inst_41567);

(statearr_41574_42876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (1))){
var inst_41534 = (new Array(n));
var inst_41535 = inst_41534;
var inst_41536 = (0);
var state_41571__$1 = (function (){var statearr_41576 = state_41571;
(statearr_41576[(7)] = inst_41535);

(statearr_41576[(8)] = inst_41536);

return statearr_41576;
})();
var statearr_41577_42877 = state_41571__$1;
(statearr_41577_42877[(2)] = null);

(statearr_41577_42877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (4))){
var inst_41539 = (state_41571[(9)]);
var inst_41539__$1 = (state_41571[(2)]);
var inst_41540 = (inst_41539__$1 == null);
var inst_41541 = cljs.core.not(inst_41540);
var state_41571__$1 = (function (){var statearr_41578 = state_41571;
(statearr_41578[(9)] = inst_41539__$1);

return statearr_41578;
})();
if(inst_41541){
var statearr_41579_42885 = state_41571__$1;
(statearr_41579_42885[(1)] = (5));

} else {
var statearr_41580_42886 = state_41571__$1;
(statearr_41580_42886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (15))){
var inst_41561 = (state_41571[(2)]);
var state_41571__$1 = state_41571;
var statearr_41581_42889 = state_41571__$1;
(statearr_41581_42889[(2)] = inst_41561);

(statearr_41581_42889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (13))){
var state_41571__$1 = state_41571;
var statearr_41582_42890 = state_41571__$1;
(statearr_41582_42890[(2)] = null);

(statearr_41582_42890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (6))){
var inst_41536 = (state_41571[(8)]);
var inst_41557 = (inst_41536 > (0));
var state_41571__$1 = state_41571;
if(cljs.core.truth_(inst_41557)){
var statearr_41583_42893 = state_41571__$1;
(statearr_41583_42893[(1)] = (12));

} else {
var statearr_41584_42894 = state_41571__$1;
(statearr_41584_42894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (3))){
var inst_41569 = (state_41571[(2)]);
var state_41571__$1 = state_41571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41571__$1,inst_41569);
} else {
if((state_val_41572 === (12))){
var inst_41535 = (state_41571[(7)]);
var inst_41559 = cljs.core.vec(inst_41535);
var state_41571__$1 = state_41571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41571__$1,(15),out,inst_41559);
} else {
if((state_val_41572 === (2))){
var state_41571__$1 = state_41571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41571__$1,(4),ch);
} else {
if((state_val_41572 === (11))){
var inst_41551 = (state_41571[(2)]);
var inst_41552 = (new Array(n));
var inst_41535 = inst_41552;
var inst_41536 = (0);
var state_41571__$1 = (function (){var statearr_41585 = state_41571;
(statearr_41585[(10)] = inst_41551);

(statearr_41585[(7)] = inst_41535);

(statearr_41585[(8)] = inst_41536);

return statearr_41585;
})();
var statearr_41586_42896 = state_41571__$1;
(statearr_41586_42896[(2)] = null);

(statearr_41586_42896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (9))){
var inst_41535 = (state_41571[(7)]);
var inst_41549 = cljs.core.vec(inst_41535);
var state_41571__$1 = state_41571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41571__$1,(11),out,inst_41549);
} else {
if((state_val_41572 === (5))){
var inst_41535 = (state_41571[(7)]);
var inst_41536 = (state_41571[(8)]);
var inst_41539 = (state_41571[(9)]);
var inst_41544 = (state_41571[(11)]);
var inst_41543 = (inst_41535[inst_41536] = inst_41539);
var inst_41544__$1 = (inst_41536 + (1));
var inst_41545 = (inst_41544__$1 < n);
var state_41571__$1 = (function (){var statearr_41587 = state_41571;
(statearr_41587[(12)] = inst_41543);

(statearr_41587[(11)] = inst_41544__$1);

return statearr_41587;
})();
if(cljs.core.truth_(inst_41545)){
var statearr_41588_42897 = state_41571__$1;
(statearr_41588_42897[(1)] = (8));

} else {
var statearr_41589_42898 = state_41571__$1;
(statearr_41589_42898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (14))){
var inst_41564 = (state_41571[(2)]);
var inst_41565 = cljs.core.async.close_BANG_(out);
var state_41571__$1 = (function (){var statearr_41591 = state_41571;
(statearr_41591[(13)] = inst_41564);

return statearr_41591;
})();
var statearr_41592_42899 = state_41571__$1;
(statearr_41592_42899[(2)] = inst_41565);

(statearr_41592_42899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (10))){
var inst_41555 = (state_41571[(2)]);
var state_41571__$1 = state_41571;
var statearr_41593_42901 = state_41571__$1;
(statearr_41593_42901[(2)] = inst_41555);

(statearr_41593_42901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41572 === (8))){
var inst_41535 = (state_41571[(7)]);
var inst_41544 = (state_41571[(11)]);
var tmp41590 = inst_41535;
var inst_41535__$1 = tmp41590;
var inst_41536 = inst_41544;
var state_41571__$1 = (function (){var statearr_41594 = state_41571;
(statearr_41594[(7)] = inst_41535__$1);

(statearr_41594[(8)] = inst_41536);

return statearr_41594;
})();
var statearr_41595_42902 = state_41571__$1;
(statearr_41595_42902[(2)] = null);

(statearr_41595_42902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_41596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41596[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_41596[(1)] = (1));

return statearr_41596;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_41571){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_41571);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e41597){var ex__37216__auto__ = e41597;
var statearr_41598_42903 = state_41571;
(statearr_41598_42903[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_41571[(4)]))){
var statearr_41599_42904 = state_41571;
(statearr_41599_42904[(1)] = cljs.core.first((state_41571[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42905 = state_41571;
state_41571 = G__42905;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_41571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_41571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_41603 = f__38571__auto__();
(statearr_41603[(6)] = c__38570__auto___42875);

return statearr_41603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41609 = arguments.length;
switch (G__41609) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38570__auto___42909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38571__auto__ = (function (){var switch__37212__auto__ = (function (state_41664){
var state_val_41665 = (state_41664[(1)]);
if((state_val_41665 === (7))){
var inst_41660 = (state_41664[(2)]);
var state_41664__$1 = state_41664;
var statearr_41674_42915 = state_41664__$1;
(statearr_41674_42915[(2)] = inst_41660);

(statearr_41674_42915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (1))){
var inst_41619 = [];
var inst_41620 = inst_41619;
var inst_41621 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41664__$1 = (function (){var statearr_41675 = state_41664;
(statearr_41675[(7)] = inst_41620);

(statearr_41675[(8)] = inst_41621);

return statearr_41675;
})();
var statearr_41676_42919 = state_41664__$1;
(statearr_41676_42919[(2)] = null);

(statearr_41676_42919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (4))){
var inst_41625 = (state_41664[(9)]);
var inst_41625__$1 = (state_41664[(2)]);
var inst_41626 = (inst_41625__$1 == null);
var inst_41627 = cljs.core.not(inst_41626);
var state_41664__$1 = (function (){var statearr_41677 = state_41664;
(statearr_41677[(9)] = inst_41625__$1);

return statearr_41677;
})();
if(inst_41627){
var statearr_41678_42922 = state_41664__$1;
(statearr_41678_42922[(1)] = (5));

} else {
var statearr_41679_42924 = state_41664__$1;
(statearr_41679_42924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (15))){
var inst_41620 = (state_41664[(7)]);
var inst_41652 = cljs.core.vec(inst_41620);
var state_41664__$1 = state_41664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41664__$1,(18),out,inst_41652);
} else {
if((state_val_41665 === (13))){
var inst_41647 = (state_41664[(2)]);
var state_41664__$1 = state_41664;
var statearr_41680_42926 = state_41664__$1;
(statearr_41680_42926[(2)] = inst_41647);

(statearr_41680_42926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (6))){
var inst_41620 = (state_41664[(7)]);
var inst_41649 = inst_41620.length;
var inst_41650 = (inst_41649 > (0));
var state_41664__$1 = state_41664;
if(cljs.core.truth_(inst_41650)){
var statearr_41681_42927 = state_41664__$1;
(statearr_41681_42927[(1)] = (15));

} else {
var statearr_41682_42928 = state_41664__$1;
(statearr_41682_42928[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (17))){
var inst_41657 = (state_41664[(2)]);
var inst_41658 = cljs.core.async.close_BANG_(out);
var state_41664__$1 = (function (){var statearr_41683 = state_41664;
(statearr_41683[(10)] = inst_41657);

return statearr_41683;
})();
var statearr_41684_42929 = state_41664__$1;
(statearr_41684_42929[(2)] = inst_41658);

(statearr_41684_42929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (3))){
var inst_41662 = (state_41664[(2)]);
var state_41664__$1 = state_41664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41664__$1,inst_41662);
} else {
if((state_val_41665 === (12))){
var inst_41620 = (state_41664[(7)]);
var inst_41640 = cljs.core.vec(inst_41620);
var state_41664__$1 = state_41664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41664__$1,(14),out,inst_41640);
} else {
if((state_val_41665 === (2))){
var state_41664__$1 = state_41664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41664__$1,(4),ch);
} else {
if((state_val_41665 === (11))){
var inst_41620 = (state_41664[(7)]);
var inst_41625 = (state_41664[(9)]);
var inst_41629 = (state_41664[(11)]);
var inst_41637 = inst_41620.push(inst_41625);
var tmp41685 = inst_41620;
var inst_41620__$1 = tmp41685;
var inst_41621 = inst_41629;
var state_41664__$1 = (function (){var statearr_41687 = state_41664;
(statearr_41687[(12)] = inst_41637);

(statearr_41687[(7)] = inst_41620__$1);

(statearr_41687[(8)] = inst_41621);

return statearr_41687;
})();
var statearr_41688_42930 = state_41664__$1;
(statearr_41688_42930[(2)] = null);

(statearr_41688_42930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (9))){
var inst_41621 = (state_41664[(8)]);
var inst_41633 = cljs.core.keyword_identical_QMARK_(inst_41621,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_41664__$1 = state_41664;
var statearr_41689_42931 = state_41664__$1;
(statearr_41689_42931[(2)] = inst_41633);

(statearr_41689_42931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (5))){
var inst_41625 = (state_41664[(9)]);
var inst_41629 = (state_41664[(11)]);
var inst_41621 = (state_41664[(8)]);
var inst_41630 = (state_41664[(13)]);
var inst_41629__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41625) : f.call(null,inst_41625));
var inst_41630__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41629__$1,inst_41621);
var state_41664__$1 = (function (){var statearr_41691 = state_41664;
(statearr_41691[(11)] = inst_41629__$1);

(statearr_41691[(13)] = inst_41630__$1);

return statearr_41691;
})();
if(inst_41630__$1){
var statearr_41693_42932 = state_41664__$1;
(statearr_41693_42932[(1)] = (8));

} else {
var statearr_41697_42933 = state_41664__$1;
(statearr_41697_42933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (14))){
var inst_41625 = (state_41664[(9)]);
var inst_41629 = (state_41664[(11)]);
var inst_41642 = (state_41664[(2)]);
var inst_41643 = [];
var inst_41644 = inst_41643.push(inst_41625);
var inst_41620 = inst_41643;
var inst_41621 = inst_41629;
var state_41664__$1 = (function (){var statearr_41698 = state_41664;
(statearr_41698[(14)] = inst_41642);

(statearr_41698[(15)] = inst_41644);

(statearr_41698[(7)] = inst_41620);

(statearr_41698[(8)] = inst_41621);

return statearr_41698;
})();
var statearr_41699_42935 = state_41664__$1;
(statearr_41699_42935[(2)] = null);

(statearr_41699_42935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (16))){
var state_41664__$1 = state_41664;
var statearr_41700_42936 = state_41664__$1;
(statearr_41700_42936[(2)] = null);

(statearr_41700_42936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (10))){
var inst_41635 = (state_41664[(2)]);
var state_41664__$1 = state_41664;
if(cljs.core.truth_(inst_41635)){
var statearr_41701_42937 = state_41664__$1;
(statearr_41701_42937[(1)] = (11));

} else {
var statearr_41702_42938 = state_41664__$1;
(statearr_41702_42938[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (18))){
var inst_41654 = (state_41664[(2)]);
var state_41664__$1 = state_41664;
var statearr_41703_42939 = state_41664__$1;
(statearr_41703_42939[(2)] = inst_41654);

(statearr_41703_42939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41665 === (8))){
var inst_41630 = (state_41664[(13)]);
var state_41664__$1 = state_41664;
var statearr_41704_42940 = state_41664__$1;
(statearr_41704_42940[(2)] = inst_41630);

(statearr_41704_42940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37213__auto__ = null;
var cljs$core$async$state_machine__37213__auto____0 = (function (){
var statearr_41705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41705[(0)] = cljs$core$async$state_machine__37213__auto__);

(statearr_41705[(1)] = (1));

return statearr_41705;
});
var cljs$core$async$state_machine__37213__auto____1 = (function (state_41664){
while(true){
var ret_value__37214__auto__ = (function (){try{while(true){
var result__37215__auto__ = switch__37212__auto__(state_41664);
if(cljs.core.keyword_identical_QMARK_(result__37215__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37215__auto__;
}
break;
}
}catch (e41706){var ex__37216__auto__ = e41706;
var statearr_41707_42943 = state_41664;
(statearr_41707_42943[(2)] = ex__37216__auto__);


if(cljs.core.seq((state_41664[(4)]))){
var statearr_41708_42944 = state_41664;
(statearr_41708_42944[(1)] = cljs.core.first((state_41664[(4)])));

} else {
throw ex__37216__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42946 = state_41664;
state_41664 = G__42946;
continue;
} else {
return ret_value__37214__auto__;
}
break;
}
});
cljs$core$async$state_machine__37213__auto__ = function(state_41664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37213__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37213__auto____1.call(this,state_41664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37213__auto____0;
cljs$core$async$state_machine__37213__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37213__auto____1;
return cljs$core$async$state_machine__37213__auto__;
})()
})();
var state__38572__auto__ = (function (){var statearr_41709 = f__38571__auto__();
(statearr_41709[(6)] = c__38570__auto___42909);

return statearr_41709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38572__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
