goog.provide('taoensso.truss.impl');
taoensso.truss.impl.re_pattern_QMARK_ = (function taoensso$truss$impl$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.truss.impl.str_contains_QMARK_ = (function taoensso$truss$impl$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});
taoensso.truss.impl.revery = (function taoensso$truss$impl$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,in$){
var temp__5823__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__5823__auto__)){
var p = temp__5823__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.assoc_some = (function taoensso$truss$impl$assoc_some(var_args){
var G__46005 = arguments.length;
switch (G__46005) {
case 3:
return taoensso.truss.impl.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.truss.impl.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.truss.impl.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((!((v == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}));

(taoensso.truss.impl.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,m_kvs){
return cljs.core.reduce_kv(taoensso.truss.impl.assoc_some,m,m_kvs);
}));

(taoensso.truss.impl.assoc_some.cljs$lang$maxFixedArity = 3);

taoensso.truss.impl.ensure_set = (function taoensso$truss$impl$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_((function (p1__46011_SHARP_){
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__46011_SHARP_) == null)));
}),ks);
});
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
var and__5023__auto__ = (cljs.core.count(m) === cljs.core.count(ks));
if(and__5023__auto__){
return taoensso.truss.impl.revery_QMARK_((function (p1__46013_SHARP_){
return cljs.core.contains_QMARK_(m,p1__46013_SHARP_);
}),ks);
} else {
return and__5023__auto__;
}
});
taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
var and__5023__auto__ = (cljs.core.count(m) >= cljs.core.count(ks));
if(and__5023__auto__){
return taoensso.truss.impl.revery_QMARK_((function (p1__46017_SHARP_){
return cljs.core.contains_QMARK_(m,p1__46017_SHARP_);
}),ks);
} else {
return and__5023__auto__;
}
});
taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
var counted_ks = ((cljs.core.counted_QMARK_(ks))?ks:cljs.core.set(ks));
var and__5023__auto__ = (cljs.core.count(m) <= cljs.core.count(counted_ks));
if(and__5023__auto__){
var ks_set = taoensso.truss.impl.ensure_set(counted_ks);
return cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.contains_QMARK_(ks_set,k)){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,m);
} else {
return and__5023__auto__;
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
taoensso.truss.impl.FailedAssertionInfo = (function (ns,coords,pred,arg_form,arg_val,data,error,__meta,__extmap,__hash){
this.ns = ns;
this.coords = coords;
this.pred = pred;
this.arg_form = arg_form;
this.arg_val = arg_val;
this.data = data;
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k46043,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__46047 = k46043;
var G__46047__$1 = (((G__46047 instanceof cljs.core.Keyword))?G__46047.fqn:null);
switch (G__46047__$1) {
case "ns":
return self__.ns;

break;
case "coords":
return self__.coords;

break;
case "pred":
return self__.pred;

break;
case "arg-form":
return self__.arg_form;

break;
case "arg-val":
return self__.arg_val;

break;
case "data":
return self__.data;

break;
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46043,else__5326__auto__);

}
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__46053){
var vec__46054 = p__46053;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46054,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46054,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#taoensso.truss.impl.FailedAssertionInfo{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns","ns",441598760),self__.ns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coords","coords",-599429112),self__.coords],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-form","arg-form",1400564013),self__.arg_form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),self__.arg_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46042){
var self__ = this;
var G__46042__$1 = this;
return (new cljs.core.RecordIter((0),G__46042__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"arg-form","arg-form",1400564013),new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,self__.arg_form,self__.arg_val,self__.data,self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-352893736 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46044,other46045){
var self__ = this;
var this46044__$1 = this;
return (((!((other46045 == null)))) && ((((this46044__$1.constructor === other46045.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.ns,other46045.ns)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.coords,other46045.coords)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.pred,other46045.pred)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.arg_form,other46045.arg_form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.arg_val,other46045.arg_val)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.data,other46045.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.error,other46045.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46044__$1.__extmap,other46045.__extmap)))))))))))))))))));
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"coords","coords",-599429112),null,new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"arg-form","arg-form",1400564013),null,new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,self__.arg_form,self__.arg_val,self__.data,self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k46043){
var self__ = this;
var this__5330__auto____$1 = this;
var G__46066 = k46043;
var G__46066__$1 = (((G__46066 instanceof cljs.core.Keyword))?G__46066.fqn:null);
switch (G__46066__$1) {
case "ns":
case "coords":
case "pred":
case "arg-form":
case "arg-val":
case "data":
case "error":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46043);

}
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__46042){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__46067 = cljs.core.keyword_identical_QMARK_;
var expr__46068 = k__5332__auto__;
if(cljs.core.truth_((pred__46067.cljs$core$IFn$_invoke$arity$2 ? pred__46067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760),expr__46068) : pred__46067.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),expr__46068)))){
return (new taoensso.truss.impl.FailedAssertionInfo(G__46042,self__.coords,self__.pred,self__.arg_form,self__.arg_val,self__.data,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46067.cljs$core$IFn$_invoke$arity$2 ? pred__46067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coords","coords",-599429112),expr__46068) : pred__46067.call(null,new cljs.core.Keyword(null,"coords","coords",-599429112),expr__46068)))){
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,G__46042,self__.pred,self__.arg_form,self__.arg_val,self__.data,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46067.cljs$core$IFn$_invoke$arity$2 ? pred__46067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred","pred",1927423397),expr__46068) : pred__46067.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__46068)))){
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,G__46042,self__.arg_form,self__.arg_val,self__.data,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46067.cljs$core$IFn$_invoke$arity$2 ? pred__46067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg-form","arg-form",1400564013),expr__46068) : pred__46067.call(null,new cljs.core.Keyword(null,"arg-form","arg-form",1400564013),expr__46068)))){
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,G__46042,self__.arg_val,self__.data,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46067.cljs$core$IFn$_invoke$arity$2 ? pred__46067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),expr__46068) : pred__46067.call(null,new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),expr__46068)))){
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,self__.arg_form,G__46042,self__.data,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46067.cljs$core$IFn$_invoke$arity$2 ? pred__46067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__46068) : pred__46067.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__46068)))){
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,self__.arg_form,self__.arg_val,G__46042,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46067.cljs$core$IFn$_invoke$arity$2 ? pred__46067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__46068) : pred__46067.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__46068)))){
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,self__.arg_form,self__.arg_val,self__.data,G__46042,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,self__.arg_form,self__.arg_val,self__.data,self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__46042),null));
}
}
}
}
}
}
}
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ns","ns",441598760),self__.ns,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"coords","coords",-599429112),self__.coords,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg-form","arg-form",1400564013),self__.arg_form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),self__.arg_val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__46042){
var self__ = this;
var this__5322__auto____$1 = this;
return (new taoensso.truss.impl.FailedAssertionInfo(self__.ns,self__.coords,self__.pred,self__.arg_form,self__.arg_val,self__.data,self__.error,G__46042,self__.__extmap,self__.__hash));
}));

(taoensso.truss.impl.FailedAssertionInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(taoensso.truss.impl.FailedAssertionInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"coords","coords",1041102415,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"arg-form","arg-form",-1253871756,null),new cljs.core.Symbol(null,"arg-val","arg-val",-852016489,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(taoensso.truss.impl.FailedAssertionInfo.cljs$lang$type = true);

(taoensso.truss.impl.FailedAssertionInfo.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"taoensso.truss.impl/FailedAssertionInfo",null,(1),null));
}));

(taoensso.truss.impl.FailedAssertionInfo.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"taoensso.truss.impl/FailedAssertionInfo");
}));

/**
 * Positional factory function for taoensso.truss.impl/FailedAssertionInfo.
 */
taoensso.truss.impl.__GT_FailedAssertionInfo = (function taoensso$truss$impl$__GT_FailedAssertionInfo(ns,coords,pred,arg_form,arg_val,data,error){
return (new taoensso.truss.impl.FailedAssertionInfo(ns,coords,pred,arg_form,arg_val,data,error,null,null,null));
});

/**
 * Factory function for taoensso.truss.impl/FailedAssertionInfo, taking a map of keywords to field values.
 */
taoensso.truss.impl.map__GT_FailedAssertionInfo = (function taoensso$truss$impl$map__GT_FailedAssertionInfo(G__46046){
var extmap__5365__auto__ = (function (){var G__46090 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46046,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"arg-form","arg-form",1400564013),new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"error","error",-978969032)], 0));
if(cljs.core.record_QMARK_(G__46046)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46090);
} else {
return G__46090;
}
})();
return (new taoensso.truss.impl.FailedAssertionInfo(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__46046),new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(G__46046),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__46046),new cljs.core.Keyword(null,"arg-form","arg-form",1400564013).cljs$core$IFn$_invoke$arity$1(G__46046),new cljs.core.Keyword(null,"arg-val","arg-val",1802419280).cljs$core$IFn$_invoke$arity$1(G__46046),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__46046),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__46046),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


/**
* @constructor
*/
taoensso.truss.impl.ArgEvalError = (function (ex){
this.ex = ex;
});

(taoensso.truss.impl.ArgEvalError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ex","ex",226760186,null)], null);
}));

(taoensso.truss.impl.ArgEvalError.cljs$lang$type = true);

(taoensso.truss.impl.ArgEvalError.cljs$lang$ctorStr = "taoensso.truss.impl/ArgEvalError");

(taoensso.truss.impl.ArgEvalError.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"taoensso.truss.impl/ArgEvalError");
}));

/**
 * Positional factory function for taoensso.truss.impl/ArgEvalError.
 */
taoensso.truss.impl.__GT_ArgEvalError = (function taoensso$truss$impl$__GT_ArgEvalError(ex){
return (new taoensso.truss.impl.ArgEvalError(ex));
});

taoensso.truss.impl.FalsePredError = ({});

//# sourceMappingURL=taoensso.truss.impl.js.map
