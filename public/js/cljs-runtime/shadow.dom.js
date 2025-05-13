goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38550 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38550(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38552 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38552(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37284 = coll;
var G__37285 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37284,G__37285) : shadow.dom.lazy_native_coll_seq.call(null,G__37284,G__37285));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37328 = arguments.length;
switch (G__37328) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37396 = arguments.length;
switch (G__37396) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37414 = arguments.length;
switch (G__37414) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37422 = arguments.length;
switch (G__37422) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37449 = arguments.length;
switch (G__37449) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37452 = arguments.length;
switch (G__37452) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37487){if((e37487 instanceof Object)){
var e = e37487;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37487;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37501 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37502 = null;
var count__37503 = (0);
var i__37504 = (0);
while(true){
if((i__37504 < count__37503)){
var el = chunk__37502.cljs$core$IIndexed$_nth$arity$2(null,i__37504);
var handler_38573__$1 = ((function (seq__37501,chunk__37502,count__37503,i__37504,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37501,chunk__37502,count__37503,i__37504,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38573__$1);


var G__38574 = seq__37501;
var G__38575 = chunk__37502;
var G__38576 = count__37503;
var G__38577 = (i__37504 + (1));
seq__37501 = G__38574;
chunk__37502 = G__38575;
count__37503 = G__38576;
i__37504 = G__38577;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37501);
if(temp__5823__auto__){
var seq__37501__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37501__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37501__$1);
var G__38578 = cljs.core.chunk_rest(seq__37501__$1);
var G__38579 = c__5548__auto__;
var G__38580 = cljs.core.count(c__5548__auto__);
var G__38581 = (0);
seq__37501 = G__38578;
chunk__37502 = G__38579;
count__37503 = G__38580;
i__37504 = G__38581;
continue;
} else {
var el = cljs.core.first(seq__37501__$1);
var handler_38582__$1 = ((function (seq__37501,chunk__37502,count__37503,i__37504,el,seq__37501__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37501,chunk__37502,count__37503,i__37504,el,seq__37501__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38582__$1);


var G__38584 = cljs.core.next(seq__37501__$1);
var G__38585 = null;
var G__38586 = (0);
var G__38587 = (0);
seq__37501 = G__38584;
chunk__37502 = G__38585;
count__37503 = G__38586;
i__37504 = G__38587;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37533 = arguments.length;
switch (G__37533) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37576 = cljs.core.seq(events);
var chunk__37578 = null;
var count__37579 = (0);
var i__37580 = (0);
while(true){
if((i__37580 < count__37579)){
var vec__37597 = chunk__37578.cljs$core$IIndexed$_nth$arity$2(null,i__37580);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37597,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38593 = seq__37576;
var G__38594 = chunk__37578;
var G__38595 = count__37579;
var G__38596 = (i__37580 + (1));
seq__37576 = G__38593;
chunk__37578 = G__38594;
count__37579 = G__38595;
i__37580 = G__38596;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37576);
if(temp__5823__auto__){
var seq__37576__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37576__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37576__$1);
var G__38597 = cljs.core.chunk_rest(seq__37576__$1);
var G__38598 = c__5548__auto__;
var G__38599 = cljs.core.count(c__5548__auto__);
var G__38600 = (0);
seq__37576 = G__38597;
chunk__37578 = G__38598;
count__37579 = G__38599;
i__37580 = G__38600;
continue;
} else {
var vec__37613 = cljs.core.first(seq__37576__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37613,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38601 = cljs.core.next(seq__37576__$1);
var G__38602 = null;
var G__38603 = (0);
var G__38604 = (0);
seq__37576 = G__38601;
chunk__37578 = G__38602;
count__37579 = G__38603;
i__37580 = G__38604;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37632 = cljs.core.seq(styles);
var chunk__37633 = null;
var count__37634 = (0);
var i__37635 = (0);
while(true){
if((i__37635 < count__37634)){
var vec__37646 = chunk__37633.cljs$core$IIndexed$_nth$arity$2(null,i__37635);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37646,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38607 = seq__37632;
var G__38608 = chunk__37633;
var G__38609 = count__37634;
var G__38610 = (i__37635 + (1));
seq__37632 = G__38607;
chunk__37633 = G__38608;
count__37634 = G__38609;
i__37635 = G__38610;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37632);
if(temp__5823__auto__){
var seq__37632__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37632__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37632__$1);
var G__38612 = cljs.core.chunk_rest(seq__37632__$1);
var G__38613 = c__5548__auto__;
var G__38614 = cljs.core.count(c__5548__auto__);
var G__38615 = (0);
seq__37632 = G__38612;
chunk__37633 = G__38613;
count__37634 = G__38614;
i__37635 = G__38615;
continue;
} else {
var vec__37650 = cljs.core.first(seq__37632__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37650,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37650,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38616 = cljs.core.next(seq__37632__$1);
var G__38617 = null;
var G__38618 = (0);
var G__38619 = (0);
seq__37632 = G__38616;
chunk__37633 = G__38617;
count__37634 = G__38618;
i__37635 = G__38619;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37653_38620 = key;
var G__37653_38621__$1 = (((G__37653_38620 instanceof cljs.core.Keyword))?G__37653_38620.fqn:null);
switch (G__37653_38621__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38624 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_38624,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_38624,"aria-");
}
})())){
el.setAttribute(ks_38624,value);
} else {
(el[ks_38624] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37737){
var map__37738 = p__37737;
var map__37738__$1 = cljs.core.__destructure_map(map__37738);
var props = map__37738__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37744 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37754 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37754,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37754;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37774 = arguments.length;
switch (G__37774) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37802){
var vec__37804 = p__37802;
var seq__37805 = cljs.core.seq(vec__37804);
var first__37806 = cljs.core.first(seq__37805);
var seq__37805__$1 = cljs.core.next(seq__37805);
var nn = first__37806;
var first__37806__$1 = cljs.core.first(seq__37805__$1);
var seq__37805__$2 = cljs.core.next(seq__37805__$1);
var np = first__37806__$1;
var nc = seq__37805__$2;
var node = vec__37804;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37813 = nn;
var G__37814 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37813,G__37814) : create_fn.call(null,G__37813,G__37814));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37824 = nn;
var G__37825 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37824,G__37825) : create_fn.call(null,G__37824,G__37825));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37861 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(1),null);
var seq__37864_38655 = cljs.core.seq(node_children);
var chunk__37865_38656 = null;
var count__37866_38657 = (0);
var i__37867_38658 = (0);
while(true){
if((i__37867_38658 < count__37866_38657)){
var child_struct_38659 = chunk__37865_38656.cljs$core$IIndexed$_nth$arity$2(null,i__37867_38658);
var children_38660 = shadow.dom.dom_node(child_struct_38659);
if(cljs.core.seq_QMARK_(children_38660)){
var seq__37996_38661 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38660));
var chunk__37998_38662 = null;
var count__37999_38663 = (0);
var i__38000_38664 = (0);
while(true){
if((i__38000_38664 < count__37999_38663)){
var child_38665 = chunk__37998_38662.cljs$core$IIndexed$_nth$arity$2(null,i__38000_38664);
if(cljs.core.truth_(child_38665)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38665);


var G__38666 = seq__37996_38661;
var G__38667 = chunk__37998_38662;
var G__38668 = count__37999_38663;
var G__38669 = (i__38000_38664 + (1));
seq__37996_38661 = G__38666;
chunk__37998_38662 = G__38667;
count__37999_38663 = G__38668;
i__38000_38664 = G__38669;
continue;
} else {
var G__38670 = seq__37996_38661;
var G__38671 = chunk__37998_38662;
var G__38672 = count__37999_38663;
var G__38673 = (i__38000_38664 + (1));
seq__37996_38661 = G__38670;
chunk__37998_38662 = G__38671;
count__37999_38663 = G__38672;
i__38000_38664 = G__38673;
continue;
}
} else {
var temp__5823__auto___38674 = cljs.core.seq(seq__37996_38661);
if(temp__5823__auto___38674){
var seq__37996_38675__$1 = temp__5823__auto___38674;
if(cljs.core.chunked_seq_QMARK_(seq__37996_38675__$1)){
var c__5548__auto___38678 = cljs.core.chunk_first(seq__37996_38675__$1);
var G__38679 = cljs.core.chunk_rest(seq__37996_38675__$1);
var G__38680 = c__5548__auto___38678;
var G__38681 = cljs.core.count(c__5548__auto___38678);
var G__38682 = (0);
seq__37996_38661 = G__38679;
chunk__37998_38662 = G__38680;
count__37999_38663 = G__38681;
i__38000_38664 = G__38682;
continue;
} else {
var child_38686 = cljs.core.first(seq__37996_38675__$1);
if(cljs.core.truth_(child_38686)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38686);


var G__38687 = cljs.core.next(seq__37996_38675__$1);
var G__38688 = null;
var G__38689 = (0);
var G__38690 = (0);
seq__37996_38661 = G__38687;
chunk__37998_38662 = G__38688;
count__37999_38663 = G__38689;
i__38000_38664 = G__38690;
continue;
} else {
var G__38691 = cljs.core.next(seq__37996_38675__$1);
var G__38692 = null;
var G__38693 = (0);
var G__38694 = (0);
seq__37996_38661 = G__38691;
chunk__37998_38662 = G__38692;
count__37999_38663 = G__38693;
i__38000_38664 = G__38694;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38660);
}


var G__38698 = seq__37864_38655;
var G__38699 = chunk__37865_38656;
var G__38700 = count__37866_38657;
var G__38701 = (i__37867_38658 + (1));
seq__37864_38655 = G__38698;
chunk__37865_38656 = G__38699;
count__37866_38657 = G__38700;
i__37867_38658 = G__38701;
continue;
} else {
var temp__5823__auto___38702 = cljs.core.seq(seq__37864_38655);
if(temp__5823__auto___38702){
var seq__37864_38703__$1 = temp__5823__auto___38702;
if(cljs.core.chunked_seq_QMARK_(seq__37864_38703__$1)){
var c__5548__auto___38704 = cljs.core.chunk_first(seq__37864_38703__$1);
var G__38705 = cljs.core.chunk_rest(seq__37864_38703__$1);
var G__38706 = c__5548__auto___38704;
var G__38707 = cljs.core.count(c__5548__auto___38704);
var G__38708 = (0);
seq__37864_38655 = G__38705;
chunk__37865_38656 = G__38706;
count__37866_38657 = G__38707;
i__37867_38658 = G__38708;
continue;
} else {
var child_struct_38709 = cljs.core.first(seq__37864_38703__$1);
var children_38710 = shadow.dom.dom_node(child_struct_38709);
if(cljs.core.seq_QMARK_(children_38710)){
var seq__38003_38711 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38710));
var chunk__38005_38712 = null;
var count__38006_38713 = (0);
var i__38007_38714 = (0);
while(true){
if((i__38007_38714 < count__38006_38713)){
var child_38715 = chunk__38005_38712.cljs$core$IIndexed$_nth$arity$2(null,i__38007_38714);
if(cljs.core.truth_(child_38715)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38715);


var G__38716 = seq__38003_38711;
var G__38717 = chunk__38005_38712;
var G__38718 = count__38006_38713;
var G__38719 = (i__38007_38714 + (1));
seq__38003_38711 = G__38716;
chunk__38005_38712 = G__38717;
count__38006_38713 = G__38718;
i__38007_38714 = G__38719;
continue;
} else {
var G__38721 = seq__38003_38711;
var G__38722 = chunk__38005_38712;
var G__38723 = count__38006_38713;
var G__38724 = (i__38007_38714 + (1));
seq__38003_38711 = G__38721;
chunk__38005_38712 = G__38722;
count__38006_38713 = G__38723;
i__38007_38714 = G__38724;
continue;
}
} else {
var temp__5823__auto___38725__$1 = cljs.core.seq(seq__38003_38711);
if(temp__5823__auto___38725__$1){
var seq__38003_38726__$1 = temp__5823__auto___38725__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38003_38726__$1)){
var c__5548__auto___38727 = cljs.core.chunk_first(seq__38003_38726__$1);
var G__38728 = cljs.core.chunk_rest(seq__38003_38726__$1);
var G__38729 = c__5548__auto___38727;
var G__38730 = cljs.core.count(c__5548__auto___38727);
var G__38731 = (0);
seq__38003_38711 = G__38728;
chunk__38005_38712 = G__38729;
count__38006_38713 = G__38730;
i__38007_38714 = G__38731;
continue;
} else {
var child_38732 = cljs.core.first(seq__38003_38726__$1);
if(cljs.core.truth_(child_38732)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38732);


var G__38733 = cljs.core.next(seq__38003_38726__$1);
var G__38734 = null;
var G__38735 = (0);
var G__38736 = (0);
seq__38003_38711 = G__38733;
chunk__38005_38712 = G__38734;
count__38006_38713 = G__38735;
i__38007_38714 = G__38736;
continue;
} else {
var G__38737 = cljs.core.next(seq__38003_38726__$1);
var G__38738 = null;
var G__38739 = (0);
var G__38740 = (0);
seq__38003_38711 = G__38737;
chunk__38005_38712 = G__38738;
count__38006_38713 = G__38739;
i__38007_38714 = G__38740;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38710);
}


var G__38741 = cljs.core.next(seq__37864_38703__$1);
var G__38742 = null;
var G__38743 = (0);
var G__38744 = (0);
seq__37864_38655 = G__38741;
chunk__37865_38656 = G__38742;
count__37866_38657 = G__38743;
i__37867_38658 = G__38744;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38030 = cljs.core.seq(node);
var chunk__38031 = null;
var count__38032 = (0);
var i__38033 = (0);
while(true){
if((i__38033 < count__38032)){
var n = chunk__38031.cljs$core$IIndexed$_nth$arity$2(null,i__38033);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38745 = seq__38030;
var G__38746 = chunk__38031;
var G__38747 = count__38032;
var G__38748 = (i__38033 + (1));
seq__38030 = G__38745;
chunk__38031 = G__38746;
count__38032 = G__38747;
i__38033 = G__38748;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38030);
if(temp__5823__auto__){
var seq__38030__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38030__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38030__$1);
var G__38750 = cljs.core.chunk_rest(seq__38030__$1);
var G__38751 = c__5548__auto__;
var G__38752 = cljs.core.count(c__5548__auto__);
var G__38753 = (0);
seq__38030 = G__38750;
chunk__38031 = G__38751;
count__38032 = G__38752;
i__38033 = G__38753;
continue;
} else {
var n = cljs.core.first(seq__38030__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38754 = cljs.core.next(seq__38030__$1);
var G__38755 = null;
var G__38756 = (0);
var G__38757 = (0);
seq__38030 = G__38754;
chunk__38031 = G__38755;
count__38032 = G__38756;
i__38033 = G__38757;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38090 = arguments.length;
switch (G__38090) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38102 = arguments.length;
switch (G__38102) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38110 = arguments.length;
switch (G__38110) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38775 = arguments.length;
var i__5750__auto___38776 = (0);
while(true){
if((i__5750__auto___38776 < len__5749__auto___38775)){
args__5755__auto__.push((arguments[i__5750__auto___38776]));

var G__38777 = (i__5750__auto___38776 + (1));
i__5750__auto___38776 = G__38777;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38119_38778 = cljs.core.seq(nodes);
var chunk__38120_38779 = null;
var count__38121_38780 = (0);
var i__38122_38781 = (0);
while(true){
if((i__38122_38781 < count__38121_38780)){
var node_38782 = chunk__38120_38779.cljs$core$IIndexed$_nth$arity$2(null,i__38122_38781);
fragment.appendChild(shadow.dom._to_dom(node_38782));


var G__38783 = seq__38119_38778;
var G__38784 = chunk__38120_38779;
var G__38785 = count__38121_38780;
var G__38786 = (i__38122_38781 + (1));
seq__38119_38778 = G__38783;
chunk__38120_38779 = G__38784;
count__38121_38780 = G__38785;
i__38122_38781 = G__38786;
continue;
} else {
var temp__5823__auto___38787 = cljs.core.seq(seq__38119_38778);
if(temp__5823__auto___38787){
var seq__38119_38788__$1 = temp__5823__auto___38787;
if(cljs.core.chunked_seq_QMARK_(seq__38119_38788__$1)){
var c__5548__auto___38789 = cljs.core.chunk_first(seq__38119_38788__$1);
var G__38790 = cljs.core.chunk_rest(seq__38119_38788__$1);
var G__38791 = c__5548__auto___38789;
var G__38792 = cljs.core.count(c__5548__auto___38789);
var G__38793 = (0);
seq__38119_38778 = G__38790;
chunk__38120_38779 = G__38791;
count__38121_38780 = G__38792;
i__38122_38781 = G__38793;
continue;
} else {
var node_38794 = cljs.core.first(seq__38119_38788__$1);
fragment.appendChild(shadow.dom._to_dom(node_38794));


var G__38795 = cljs.core.next(seq__38119_38788__$1);
var G__38796 = null;
var G__38797 = (0);
var G__38798 = (0);
seq__38119_38778 = G__38795;
chunk__38120_38779 = G__38796;
count__38121_38780 = G__38797;
i__38122_38781 = G__38798;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38117){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38117));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38135_38799 = cljs.core.seq(scripts);
var chunk__38136_38800 = null;
var count__38137_38801 = (0);
var i__38138_38802 = (0);
while(true){
if((i__38138_38802 < count__38137_38801)){
var vec__38147_38803 = chunk__38136_38800.cljs$core$IIndexed$_nth$arity$2(null,i__38138_38802);
var script_tag_38804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38147_38803,(0),null);
var script_body_38806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38147_38803,(1),null);
eval(script_body_38806);


var G__38807 = seq__38135_38799;
var G__38808 = chunk__38136_38800;
var G__38809 = count__38137_38801;
var G__38810 = (i__38138_38802 + (1));
seq__38135_38799 = G__38807;
chunk__38136_38800 = G__38808;
count__38137_38801 = G__38809;
i__38138_38802 = G__38810;
continue;
} else {
var temp__5823__auto___38811 = cljs.core.seq(seq__38135_38799);
if(temp__5823__auto___38811){
var seq__38135_38812__$1 = temp__5823__auto___38811;
if(cljs.core.chunked_seq_QMARK_(seq__38135_38812__$1)){
var c__5548__auto___38813 = cljs.core.chunk_first(seq__38135_38812__$1);
var G__38814 = cljs.core.chunk_rest(seq__38135_38812__$1);
var G__38815 = c__5548__auto___38813;
var G__38816 = cljs.core.count(c__5548__auto___38813);
var G__38817 = (0);
seq__38135_38799 = G__38814;
chunk__38136_38800 = G__38815;
count__38137_38801 = G__38816;
i__38138_38802 = G__38817;
continue;
} else {
var vec__38153_38818 = cljs.core.first(seq__38135_38812__$1);
var script_tag_38819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153_38818,(0),null);
var script_body_38820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153_38818,(1),null);
eval(script_body_38820);


var G__38821 = cljs.core.next(seq__38135_38812__$1);
var G__38822 = null;
var G__38823 = (0);
var G__38824 = (0);
seq__38135_38799 = G__38821;
chunk__38136_38800 = G__38822;
count__38137_38801 = G__38823;
i__38138_38802 = G__38824;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38156){
var vec__38157 = p__38156;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38157,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38157,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38161 = arguments.length;
switch (G__38161) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38167 = cljs.core.seq(style_keys);
var chunk__38168 = null;
var count__38169 = (0);
var i__38170 = (0);
while(true){
if((i__38170 < count__38169)){
var it = chunk__38168.cljs$core$IIndexed$_nth$arity$2(null,i__38170);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38826 = seq__38167;
var G__38827 = chunk__38168;
var G__38828 = count__38169;
var G__38829 = (i__38170 + (1));
seq__38167 = G__38826;
chunk__38168 = G__38827;
count__38169 = G__38828;
i__38170 = G__38829;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38167);
if(temp__5823__auto__){
var seq__38167__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38167__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38167__$1);
var G__38830 = cljs.core.chunk_rest(seq__38167__$1);
var G__38831 = c__5548__auto__;
var G__38832 = cljs.core.count(c__5548__auto__);
var G__38833 = (0);
seq__38167 = G__38830;
chunk__38168 = G__38831;
count__38169 = G__38832;
i__38170 = G__38833;
continue;
} else {
var it = cljs.core.first(seq__38167__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38834 = cljs.core.next(seq__38167__$1);
var G__38835 = null;
var G__38836 = (0);
var G__38837 = (0);
seq__38167 = G__38834;
chunk__38168 = G__38835;
count__38169 = G__38836;
i__38170 = G__38837;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k38185,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__38198 = k38185;
var G__38198__$1 = (((G__38198 instanceof cljs.core.Keyword))?G__38198.fqn:null);
switch (G__38198__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38185,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__38199){
var vec__38200 = p__38199;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38184){
var self__ = this;
var G__38184__$1 = this;
return (new cljs.core.RecordIter((0),G__38184__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38186,other38187){
var self__ = this;
var this38186__$1 = this;
return (((!((other38187 == null)))) && ((((this38186__$1.constructor === other38187.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38186__$1.x,other38187.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38186__$1.y,other38187.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38186__$1.__extmap,other38187.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k38185){
var self__ = this;
var this__5330__auto____$1 = this;
var G__38244 = k38185;
var G__38244__$1 = (((G__38244 instanceof cljs.core.Keyword))?G__38244.fqn:null);
switch (G__38244__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38185);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__38184){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__38246 = cljs.core.keyword_identical_QMARK_;
var expr__38247 = k__5332__auto__;
if(cljs.core.truth_((pred__38246.cljs$core$IFn$_invoke$arity$2 ? pred__38246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38247) : pred__38246.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38247)))){
return (new shadow.dom.Coordinate(G__38184,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38246.cljs$core$IFn$_invoke$arity$2 ? pred__38246.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38247) : pred__38246.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38247)))){
return (new shadow.dom.Coordinate(self__.x,G__38184,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__38184),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__38184){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38184,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38189){
var extmap__5365__auto__ = (function (){var G__38296 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38189,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38296);
} else {
return G__38296;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38189),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38189),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k38301,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__38305 = k38301;
var G__38305__$1 = (((G__38305 instanceof cljs.core.Keyword))?G__38305.fqn:null);
switch (G__38305__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38301,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__38307){
var vec__38310 = p__38307;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38310,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38310,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38300){
var self__ = this;
var G__38300__$1 = this;
return (new cljs.core.RecordIter((0),G__38300__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38302,other38303){
var self__ = this;
var this38302__$1 = this;
return (((!((other38303 == null)))) && ((((this38302__$1.constructor === other38303.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38302__$1.w,other38303.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38302__$1.h,other38303.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38302__$1.__extmap,other38303.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k38301){
var self__ = this;
var this__5330__auto____$1 = this;
var G__38316 = k38301;
var G__38316__$1 = (((G__38316 instanceof cljs.core.Keyword))?G__38316.fqn:null);
switch (G__38316__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38301);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__38300){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__38318 = cljs.core.keyword_identical_QMARK_;
var expr__38319 = k__5332__auto__;
if(cljs.core.truth_((pred__38318.cljs$core$IFn$_invoke$arity$2 ? pred__38318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38319) : pred__38318.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38319)))){
return (new shadow.dom.Size(G__38300,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38318.cljs$core$IFn$_invoke$arity$2 ? pred__38318.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38319) : pred__38318.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38319)))){
return (new shadow.dom.Size(self__.w,G__38300,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__38300),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__38300){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38300,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38304){
var extmap__5365__auto__ = (function (){var G__38338 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38304,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38304)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38338);
} else {
return G__38338;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38304),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38304),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__38846 = (i + (1));
var G__38847 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38846;
ret = G__38847;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38387){
var vec__38388 = p__38387;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38388,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38388,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38402 = arguments.length;
switch (G__38402) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38850 = ps;
var G__38851 = (i + (1));
el__$1 = G__38850;
i = G__38851;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38429 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38429,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38429,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38429,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38435_38856 = cljs.core.seq(props);
var chunk__38436_38857 = null;
var count__38437_38858 = (0);
var i__38438_38859 = (0);
while(true){
if((i__38438_38859 < count__38437_38858)){
var vec__38451_38860 = chunk__38436_38857.cljs$core$IIndexed$_nth$arity$2(null,i__38438_38859);
var k_38861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38451_38860,(0),null);
var v_38862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38451_38860,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_38861);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38861),v_38862);


var G__38863 = seq__38435_38856;
var G__38864 = chunk__38436_38857;
var G__38865 = count__38437_38858;
var G__38866 = (i__38438_38859 + (1));
seq__38435_38856 = G__38863;
chunk__38436_38857 = G__38864;
count__38437_38858 = G__38865;
i__38438_38859 = G__38866;
continue;
} else {
var temp__5823__auto___38867 = cljs.core.seq(seq__38435_38856);
if(temp__5823__auto___38867){
var seq__38435_38868__$1 = temp__5823__auto___38867;
if(cljs.core.chunked_seq_QMARK_(seq__38435_38868__$1)){
var c__5548__auto___38869 = cljs.core.chunk_first(seq__38435_38868__$1);
var G__38870 = cljs.core.chunk_rest(seq__38435_38868__$1);
var G__38871 = c__5548__auto___38869;
var G__38872 = cljs.core.count(c__5548__auto___38869);
var G__38873 = (0);
seq__38435_38856 = G__38870;
chunk__38436_38857 = G__38871;
count__38437_38858 = G__38872;
i__38438_38859 = G__38873;
continue;
} else {
var vec__38459_38874 = cljs.core.first(seq__38435_38868__$1);
var k_38875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38459_38874,(0),null);
var v_38876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38459_38874,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_38875);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38875),v_38876);


var G__38878 = cljs.core.next(seq__38435_38868__$1);
var G__38879 = null;
var G__38880 = (0);
var G__38881 = (0);
seq__38435_38856 = G__38878;
chunk__38436_38857 = G__38879;
count__38437_38858 = G__38880;
i__38438_38859 = G__38881;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38472 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38472,(1),null);
var seq__38476_38883 = cljs.core.seq(node_children);
var chunk__38478_38884 = null;
var count__38479_38885 = (0);
var i__38480_38886 = (0);
while(true){
if((i__38480_38886 < count__38479_38885)){
var child_struct_38889 = chunk__38478_38884.cljs$core$IIndexed$_nth$arity$2(null,i__38480_38886);
if((!((child_struct_38889 == null)))){
if(typeof child_struct_38889 === 'string'){
var text_38890 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38890),child_struct_38889].join(''));
} else {
var children_38891 = shadow.dom.svg_node(child_struct_38889);
if(cljs.core.seq_QMARK_(children_38891)){
var seq__38516_38892 = cljs.core.seq(children_38891);
var chunk__38518_38893 = null;
var count__38519_38894 = (0);
var i__38520_38895 = (0);
while(true){
if((i__38520_38895 < count__38519_38894)){
var child_38896 = chunk__38518_38893.cljs$core$IIndexed$_nth$arity$2(null,i__38520_38895);
if(cljs.core.truth_(child_38896)){
node.appendChild(child_38896);


var G__38897 = seq__38516_38892;
var G__38898 = chunk__38518_38893;
var G__38899 = count__38519_38894;
var G__38900 = (i__38520_38895 + (1));
seq__38516_38892 = G__38897;
chunk__38518_38893 = G__38898;
count__38519_38894 = G__38899;
i__38520_38895 = G__38900;
continue;
} else {
var G__38901 = seq__38516_38892;
var G__38902 = chunk__38518_38893;
var G__38903 = count__38519_38894;
var G__38904 = (i__38520_38895 + (1));
seq__38516_38892 = G__38901;
chunk__38518_38893 = G__38902;
count__38519_38894 = G__38903;
i__38520_38895 = G__38904;
continue;
}
} else {
var temp__5823__auto___38906 = cljs.core.seq(seq__38516_38892);
if(temp__5823__auto___38906){
var seq__38516_38907__$1 = temp__5823__auto___38906;
if(cljs.core.chunked_seq_QMARK_(seq__38516_38907__$1)){
var c__5548__auto___38908 = cljs.core.chunk_first(seq__38516_38907__$1);
var G__38909 = cljs.core.chunk_rest(seq__38516_38907__$1);
var G__38910 = c__5548__auto___38908;
var G__38911 = cljs.core.count(c__5548__auto___38908);
var G__38912 = (0);
seq__38516_38892 = G__38909;
chunk__38518_38893 = G__38910;
count__38519_38894 = G__38911;
i__38520_38895 = G__38912;
continue;
} else {
var child_38913 = cljs.core.first(seq__38516_38907__$1);
if(cljs.core.truth_(child_38913)){
node.appendChild(child_38913);


var G__38914 = cljs.core.next(seq__38516_38907__$1);
var G__38915 = null;
var G__38916 = (0);
var G__38917 = (0);
seq__38516_38892 = G__38914;
chunk__38518_38893 = G__38915;
count__38519_38894 = G__38916;
i__38520_38895 = G__38917;
continue;
} else {
var G__38918 = cljs.core.next(seq__38516_38907__$1);
var G__38919 = null;
var G__38920 = (0);
var G__38921 = (0);
seq__38516_38892 = G__38918;
chunk__38518_38893 = G__38919;
count__38519_38894 = G__38920;
i__38520_38895 = G__38921;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38891);
}
}


var G__38922 = seq__38476_38883;
var G__38923 = chunk__38478_38884;
var G__38924 = count__38479_38885;
var G__38925 = (i__38480_38886 + (1));
seq__38476_38883 = G__38922;
chunk__38478_38884 = G__38923;
count__38479_38885 = G__38924;
i__38480_38886 = G__38925;
continue;
} else {
var G__38926 = seq__38476_38883;
var G__38927 = chunk__38478_38884;
var G__38928 = count__38479_38885;
var G__38929 = (i__38480_38886 + (1));
seq__38476_38883 = G__38926;
chunk__38478_38884 = G__38927;
count__38479_38885 = G__38928;
i__38480_38886 = G__38929;
continue;
}
} else {
var temp__5823__auto___38930 = cljs.core.seq(seq__38476_38883);
if(temp__5823__auto___38930){
var seq__38476_38931__$1 = temp__5823__auto___38930;
if(cljs.core.chunked_seq_QMARK_(seq__38476_38931__$1)){
var c__5548__auto___38932 = cljs.core.chunk_first(seq__38476_38931__$1);
var G__38933 = cljs.core.chunk_rest(seq__38476_38931__$1);
var G__38934 = c__5548__auto___38932;
var G__38935 = cljs.core.count(c__5548__auto___38932);
var G__38936 = (0);
seq__38476_38883 = G__38933;
chunk__38478_38884 = G__38934;
count__38479_38885 = G__38935;
i__38480_38886 = G__38936;
continue;
} else {
var child_struct_38939 = cljs.core.first(seq__38476_38931__$1);
if((!((child_struct_38939 == null)))){
if(typeof child_struct_38939 === 'string'){
var text_38940 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38940),child_struct_38939].join(''));
} else {
var children_38941 = shadow.dom.svg_node(child_struct_38939);
if(cljs.core.seq_QMARK_(children_38941)){
var seq__38527_38942 = cljs.core.seq(children_38941);
var chunk__38529_38943 = null;
var count__38530_38944 = (0);
var i__38531_38945 = (0);
while(true){
if((i__38531_38945 < count__38530_38944)){
var child_38946 = chunk__38529_38943.cljs$core$IIndexed$_nth$arity$2(null,i__38531_38945);
if(cljs.core.truth_(child_38946)){
node.appendChild(child_38946);


var G__38947 = seq__38527_38942;
var G__38948 = chunk__38529_38943;
var G__38949 = count__38530_38944;
var G__38950 = (i__38531_38945 + (1));
seq__38527_38942 = G__38947;
chunk__38529_38943 = G__38948;
count__38530_38944 = G__38949;
i__38531_38945 = G__38950;
continue;
} else {
var G__38951 = seq__38527_38942;
var G__38952 = chunk__38529_38943;
var G__38953 = count__38530_38944;
var G__38954 = (i__38531_38945 + (1));
seq__38527_38942 = G__38951;
chunk__38529_38943 = G__38952;
count__38530_38944 = G__38953;
i__38531_38945 = G__38954;
continue;
}
} else {
var temp__5823__auto___38955__$1 = cljs.core.seq(seq__38527_38942);
if(temp__5823__auto___38955__$1){
var seq__38527_38956__$1 = temp__5823__auto___38955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38527_38956__$1)){
var c__5548__auto___38957 = cljs.core.chunk_first(seq__38527_38956__$1);
var G__38958 = cljs.core.chunk_rest(seq__38527_38956__$1);
var G__38959 = c__5548__auto___38957;
var G__38960 = cljs.core.count(c__5548__auto___38957);
var G__38961 = (0);
seq__38527_38942 = G__38958;
chunk__38529_38943 = G__38959;
count__38530_38944 = G__38960;
i__38531_38945 = G__38961;
continue;
} else {
var child_38963 = cljs.core.first(seq__38527_38956__$1);
if(cljs.core.truth_(child_38963)){
node.appendChild(child_38963);


var G__38964 = cljs.core.next(seq__38527_38956__$1);
var G__38965 = null;
var G__38966 = (0);
var G__38967 = (0);
seq__38527_38942 = G__38964;
chunk__38529_38943 = G__38965;
count__38530_38944 = G__38966;
i__38531_38945 = G__38967;
continue;
} else {
var G__38968 = cljs.core.next(seq__38527_38956__$1);
var G__38969 = null;
var G__38970 = (0);
var G__38971 = (0);
seq__38527_38942 = G__38968;
chunk__38529_38943 = G__38969;
count__38530_38944 = G__38970;
i__38531_38945 = G__38971;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38941);
}
}


var G__38972 = cljs.core.next(seq__38476_38931__$1);
var G__38973 = null;
var G__38974 = (0);
var G__38975 = (0);
seq__38476_38883 = G__38972;
chunk__38478_38884 = G__38973;
count__38479_38885 = G__38974;
i__38480_38886 = G__38975;
continue;
} else {
var G__38976 = cljs.core.next(seq__38476_38931__$1);
var G__38977 = null;
var G__38978 = (0);
var G__38979 = (0);
seq__38476_38883 = G__38976;
chunk__38478_38884 = G__38977;
count__38479_38885 = G__38978;
i__38480_38886 = G__38979;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38982 = arguments.length;
var i__5750__auto___38983 = (0);
while(true){
if((i__5750__auto___38983 < len__5749__auto___38982)){
args__5755__auto__.push((arguments[i__5750__auto___38983]));

var G__38984 = (i__5750__auto___38983 + (1));
i__5750__auto___38983 = G__38984;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38537){
var G__38538 = cljs.core.first(seq38537);
var seq38537__$1 = cljs.core.next(seq38537);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38538,seq38537__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
