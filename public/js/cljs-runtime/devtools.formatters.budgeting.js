goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__29349__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29349__auto__["add"]).call(o__29349__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__29349__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29349__auto__["delete"]).call(o__29349__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__29349__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__29349__auto__["has"]).call(o__29349__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__32401 = data;
var target__29369__auto__ = G__32401;
if(cljs.core.truth_(target__29369__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32401)].join(''),"\n","target__29369__auto__"].join('')));
}

(target__29369__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__32401;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_32426 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_32426);
} else {
var seq__32406_32427 = cljs.core.seq(json_ml);
var chunk__32407_32428 = null;
var count__32408_32429 = (0);
var i__32409_32430 = (0);
while(true){
if((i__32409_32430 < count__32408_32429)){
var item_32431 = chunk__32407_32428.cljs$core$IIndexed$_nth$arity$2(null,i__32409_32430);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_32431,new_depth_budget_32426) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32431,new_depth_budget_32426));


var G__32437 = seq__32406_32427;
var G__32438 = chunk__32407_32428;
var G__32439 = count__32408_32429;
var G__32440 = (i__32409_32430 + (1));
seq__32406_32427 = G__32437;
chunk__32407_32428 = G__32438;
count__32408_32429 = G__32439;
i__32409_32430 = G__32440;
continue;
} else {
var temp__5823__auto___32441 = cljs.core.seq(seq__32406_32427);
if(temp__5823__auto___32441){
var seq__32406_32442__$1 = temp__5823__auto___32441;
if(cljs.core.chunked_seq_QMARK_(seq__32406_32442__$1)){
var c__5525__auto___32443 = cljs.core.chunk_first(seq__32406_32442__$1);
var G__32444 = cljs.core.chunk_rest(seq__32406_32442__$1);
var G__32445 = c__5525__auto___32443;
var G__32446 = cljs.core.count(c__5525__auto___32443);
var G__32447 = (0);
seq__32406_32427 = G__32444;
chunk__32407_32428 = G__32445;
count__32408_32429 = G__32446;
i__32409_32430 = G__32447;
continue;
} else {
var item_32448 = cljs.core.first(seq__32406_32442__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_32448,new_depth_budget_32426) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_32448,new_depth_budget_32426));


var G__32449 = cljs.core.next(seq__32406_32442__$1);
var G__32450 = null;
var G__32451 = (0);
var G__32452 = (0);
seq__32406_32427 = G__32449;
chunk__32407_32428 = G__32450;
count__32408_32429 = G__32451;
i__32409_32430 = G__32452;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5821__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5821__auto__)){
var initial_hierarchy_depth_budget = temp__5821__auto__;
var remaining_depth_budget = (function (){var or__5002__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
