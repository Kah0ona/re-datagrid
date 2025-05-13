goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_29603 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._header[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null,value));
} else {
var m__5349__auto__ = (devtools.format._header["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_29603(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_29606 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._has_body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null,value));
} else {
var m__5349__auto__ = (devtools.format._has_body["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_29606(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_29607 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null,value));
} else {
var m__5349__auto__ = (devtools.format._body["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_29607(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o29463 = temp__5821__auto__;
var temp__5821__auto____$1 = (o29463["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o29465 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o29465["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o29466 = temp__5821__auto____$2;
return (o29466["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o29471 = temp__5821__auto__;
var temp__5821__auto____$1 = (o29471["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o29472 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o29472["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o29473 = temp__5821__auto____$2;
return (o29473["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o29474 = temp__5821__auto__;
var temp__5821__auto____$1 = (o29474["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o29475 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o29475["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o29476 = temp__5821__auto____$2;
return (o29476["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o29481 = temp__5821__auto__;
var temp__5821__auto____$1 = (o29481["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o29482 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o29482["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o29483 = temp__5821__auto____$2;
return (o29483["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o29484 = temp__5821__auto__;
var temp__5821__auto____$1 = (o29484["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o29485 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o29485["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o29486 = temp__5821__auto____$2;
return (o29486["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o29488 = temp__5821__auto__;
var temp__5821__auto____$1 = (o29488["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o29489 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o29489["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o29490 = temp__5821__auto____$2;
return (o29490["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o29492 = temp__5821__auto__;
var temp__5821__auto____$1 = (o29492["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o29493 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o29493["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o29494 = temp__5821__auto____$2;
return (o29494["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29621 = arguments.length;
var i__5727__auto___29622 = (0);
while(true){
if((i__5727__auto___29622 < len__5726__auto___29621)){
args__5732__auto__.push((arguments[i__5727__auto___29622]));

var G__29623 = (i__5727__auto___29622 + (1));
i__5727__auto___29622 = G__29623;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq29495){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29495));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29624 = arguments.length;
var i__5727__auto___29625 = (0);
while(true){
if((i__5727__auto___29625 < len__5726__auto___29624)){
args__5732__auto__.push((arguments[i__5727__auto___29625]));

var G__29626 = (i__5727__auto___29625 + (1));
i__5727__auto___29625 = G__29626;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq29498){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29498));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29628 = arguments.length;
var i__5727__auto___29629 = (0);
while(true){
if((i__5727__auto___29629 < len__5726__auto___29628)){
args__5732__auto__.push((arguments[i__5727__auto___29629]));

var G__29630 = (i__5727__auto___29629 + (1));
i__5727__auto___29629 = G__29630;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq29504){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29504));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29631 = arguments.length;
var i__5727__auto___29632 = (0);
while(true){
if((i__5727__auto___29632 < len__5726__auto___29631)){
args__5732__auto__.push((arguments[i__5727__auto___29632]));

var G__29633 = (i__5727__auto___29632 + (1));
i__5727__auto___29632 = G__29633;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq29524){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29524));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29635 = arguments.length;
var i__5727__auto___29636 = (0);
while(true){
if((i__5727__auto___29636 < len__5726__auto___29635)){
args__5732__auto__.push((arguments[i__5727__auto___29636]));

var G__29637 = (i__5727__auto___29636 + (1));
i__5727__auto___29636 = G__29637;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq29526){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29526));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29639 = arguments.length;
var i__5727__auto___29640 = (0);
while(true){
if((i__5727__auto___29640 < len__5726__auto___29639)){
args__5732__auto__.push((arguments[i__5727__auto___29640]));

var G__29641 = (i__5727__auto___29640 + (1));
i__5727__auto___29640 = G__29641;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq29535){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29535));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29642 = arguments.length;
var i__5727__auto___29643 = (0);
while(true){
if((i__5727__auto___29643 < len__5726__auto___29642)){
args__5732__auto__.push((arguments[i__5727__auto___29643]));

var G__29644 = (i__5727__auto___29643 + (1));
i__5727__auto___29643 = G__29644;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq29548){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29548));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29645 = arguments.length;
var i__5727__auto___29646 = (0);
while(true){
if((i__5727__auto___29646 < len__5726__auto___29645)){
args__5732__auto__.push((arguments[i__5727__auto___29646]));

var G__29647 = (i__5727__auto___29646 + (1));
i__5727__auto___29646 = G__29647;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29566){
var vec__29568 = p__29566;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29568,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__29557_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__29557_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq29562){
var G__29563 = cljs.core.first(seq29562);
var seq29562__$1 = cljs.core.next(seq29562);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29563,seq29562__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__29580 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__29581 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__29582 = (function (){var G__29583 = new cljs.core.Keyword(null,"li","li",723558921);
var G__29584 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__29585 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__29583,G__29584,G__29585) : devtools.format.make_template_fn.call(null,G__29583,G__29584,G__29585));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__29580,G__29581,G__29582) : devtools.format.make_template_fn.call(null,G__29580,G__29581,G__29582));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29648 = arguments.length;
var i__5727__auto___29649 = (0);
while(true){
if((i__5727__auto___29649 < len__5726__auto___29648)){
args__5732__auto__.push((arguments[i__5727__auto___29649]));

var G__29650 = (i__5727__auto___29649 + (1));
i__5727__auto___29649 = G__29650;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq29588){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29588));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29651 = arguments.length;
var i__5727__auto___29652 = (0);
while(true){
if((i__5727__auto___29652 < len__5726__auto___29651)){
args__5732__auto__.push((arguments[i__5727__auto___29652]));

var G__29653 = (i__5727__auto___29652 + (1));
i__5727__auto___29652 = G__29653;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq29590){
var G__29591 = cljs.core.first(seq29590);
var seq29590__$1 = cljs.core.next(seq29590);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29591,seq29590__$1);
}));


//# sourceMappingURL=devtools.format.js.map
