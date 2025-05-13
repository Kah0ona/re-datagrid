goog.provide('schema.spec.variant');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker(o,params);
var step = (cljs.core.truth_(g)?(function (x){
var guard_result = (function (){try{return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
}catch (e47517){if((e47517 instanceof Object)){
var e_SHARP_ = e47517;
return new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523);
} else {
throw e47517;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("schema.spec.variant","exception","schema.spec.variant/exception",-253680523),guard_result)){
return schema.utils.error(schema.utils.make_ValidationError(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay((function (){
return (new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(g)),(new cljs.core.List(null,schema.utils.value_name(x),null,(1),null)),(2),null));
}),null)),new cljs.core.Symbol(null,"throws?","throws?",789734533,null)));
} else {
if(cljs.core.truth_(guard_result)){
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(x) : c.call(null,x));
} else {
return (else$.cljs$core$IFn$_invoke$arity$1 ? else$.cljs$core$IFn$_invoke$arity$1(x) : else$.call(null,x));

}
}
}):c);
var temp__5821__auto__ = new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__5821__auto__)){
var wrap_error = temp__5821__auto__;
return (function (x){
var res = (step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(x) : step.call(null,x));
var temp__5821__auto____$1 = schema.utils.error_val(res);
if(cljs.core.truth_(temp__5821__auto____$1)){
var e = temp__5821__auto____$1;
return schema.utils.error((wrap_error.cljs$core$IFn$_invoke$arity$1 ? wrap_error.cljs$core$IFn$_invoke$arity$1(e) : wrap_error.call(null,e)));
} else {
return res;
}
});
} else {
return step;
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
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.variant.VariantSpec = (function (pre,options,err_f,post,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.post = post;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k47531,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__47543 = k47531;
var G__47543__$1 = (((G__47543 instanceof cljs.core.Keyword))?G__47543.fqn:null);
switch (G__47543__$1) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
case "post":
return self__.post;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47531,else__5326__auto__);

}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__47553){
var vec__47554 = p__47553;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47554,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47554,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.options);
}));

(schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,o){
return schema.spec.variant.option_step(o,params,f);
}),(function (x){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay((function (){
var G__47557 = schema.utils.value_name(x);
return (self__.err_f.cljs$core$IFn$_invoke$arity$1 ? self__.err_f.cljs$core$IFn$_invoke$arity$1(G__47557) : self__.err_f.call(null,G__47557));
}),null)),null));
}),cljs.core.reverse(self__.options));
if(cljs.core.truth_(self__.post)){
return (function (x){
var or__5025__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var v = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(schema.utils.error_QMARK_(v)){
return v;
} else {
var or__5025__auto____$1 = (function (){var G__47558 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?v:x);
return (self__.post.cljs$core$IFn$_invoke$arity$1 ? self__.post.cljs$core$IFn$_invoke$arity$1(G__47558) : self__.post.call(null,G__47558));
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return v;
}
}
}
});
} else {
return (function (x){
var or__5025__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
}
});
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post","post",269697687),self__.post],null))], null),self__.__extmap));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47530){
var self__ = this;
var G__47530__$1 = this;
return (new cljs.core.RecordIter((0),G__47530__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941),new cljs.core.Keyword(null,"post","post",269697687)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1524878868 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47532,other47533){
var self__ = this;
var this47532__$1 = this;
return (((!((other47533 == null)))) && ((((this47532__$1.constructor === other47533.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47532__$1.pre,other47533.pre)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47532__$1.options,other47533.options)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47532__$1.err_f,other47533.err_f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47532__$1.post,other47533.post)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47532__$1.__extmap,other47533.__extmap)))))))))))));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"err-f","err-f",651620941),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"options","options",99638489),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k47531){
var self__ = this;
var this__5330__auto____$1 = this;
var G__47565 = k47531;
var G__47565__$1 = (((G__47565 instanceof cljs.core.Keyword))?G__47565.fqn:null);
switch (G__47565__$1) {
case "pre":
case "options":
case "err-f":
case "post":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47531);

}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__47530){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__47566 = cljs.core.keyword_identical_QMARK_;
var expr__47567 = k__5332__auto__;
if(cljs.core.truth_((pred__47566.cljs$core$IFn$_invoke$arity$2 ? pred__47566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pre","pre",2118456869),expr__47567) : pred__47566.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__47567)))){
return (new schema.spec.variant.VariantSpec(G__47530,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47566.cljs$core$IFn$_invoke$arity$2 ? pred__47566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__47567) : pred__47566.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__47567)))){
return (new schema.spec.variant.VariantSpec(self__.pre,G__47530,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47566.cljs$core$IFn$_invoke$arity$2 ? pred__47566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"err-f","err-f",651620941),expr__47567) : pred__47566.call(null,new cljs.core.Keyword(null,"err-f","err-f",651620941),expr__47567)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__47530,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47566.cljs$core$IFn$_invoke$arity$2 ? pred__47566.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post","post",269697687),expr__47567) : pred__47566.call(null,new cljs.core.Keyword(null,"post","post",269697687),expr__47567)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__47530,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__47530),null));
}
}
}
}
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"err-f","err-f",651620941),self__.err_f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"post","post",269697687),self__.post,null))], null),self__.__extmap));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__47530){
var self__ = this;
var this__5322__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,G__47530,self__.__extmap,self__.__hash));
}));

(schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"err-f","err-f",-2002814828,null),new cljs.core.Symbol(null,"post","post",1910229214,null)], null);
}));

(schema.spec.variant.VariantSpec.cljs$lang$type = true);

(schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"schema.spec.variant/VariantSpec",null,(1),null));
}));

(schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"schema.spec.variant/VariantSpec");
}));

/**
 * Positional factory function for schema.spec.variant/VariantSpec.
 */
schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f,post){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,post,null,null,null));
});

/**
 * Factory function for schema.spec.variant/VariantSpec, taking a map of keywords to field values.
 */
schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__47539){
var extmap__5365__auto__ = (function (){var G__47576 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47539,new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"err-f","err-f",651620941),new cljs.core.Keyword(null,"post","post",269697687)], 0));
if(cljs.core.record_QMARK_(G__47539)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47576);
} else {
return G__47576;
}
})();
return (new schema.spec.variant.VariantSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__47539),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__47539),new cljs.core.Keyword(null,"err-f","err-f",651620941).cljs$core$IFn$_invoke$arity$1(G__47539),new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(G__47539),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(var_args){
var G__47583 = arguments.length;
switch (G__47583) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(pre,options,null);
}));

(schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(pre,options,err_f,null);
}));

(schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4 = (function (pre,options,err_f,post){
if(cljs.core.truth_((function (){var or__5025__auto__ = err_f;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.Keyword(null,"guard","guard",-873147811).cljs$core$IFn$_invoke$arity$1(cljs.core.last(options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_("when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec(pre,options,err_f,post);
}));

(schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=schema.spec.variant.js.map
