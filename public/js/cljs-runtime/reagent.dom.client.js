goog.provide('reagent.dom.client');
goog.scope(function(){
  reagent.dom.client.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
/**
 * Create a React Root connected to given container DOM element.
 */
reagent.dom.client.create_root = (function reagent$dom$client$create_root(container){
return module$node_modules$react_dom$client.createRoot(container);
});
/**
 * Unmount the given React Root
 */
reagent.dom.client.unmount = (function reagent$dom$client$unmount(root){
return root.unmount();
});
reagent.dom.client.reagent_root = (function reagent$dom$client$reagent_root(js_props){
var el = reagent.dom.client.goog$module$goog$object.get(js_props,"comp");
module$node_modules$react$index.useEffect((function (){
var _STAR_always_update_STAR__orig_val__51785 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51786 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51786);

try{reagent.impl.batching.flush_after_render();

return undefined;
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51785);
}}));

var _STAR_always_update_STAR__orig_val__51787 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__51788 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__51788);

try{return (el.cljs$core$IFn$_invoke$arity$0 ? el.cljs$core$IFn$_invoke$arity$0() : el.call(null));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__51787);
}});
/**
 * Render the given Reagent element (i.e. Hiccup data)
 *   into a given React root.
 */
reagent.dom.client.render = (function reagent$dom$client$render(var_args){
var G__51790 = arguments.length;
switch (G__51790) {
case 2:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2 = (function (root,el){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3(root,el,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3 = (function (root,el,compiler){
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
return root.render(module$node_modules$react$index.createElement(reagent.dom.client.reagent_root,({"comp": comp})));
}));

(reagent.dom.client.render.cljs$lang$maxFixedArity = 3);

reagent.dom.client.hydrate_root = (function reagent$dom$client$hydrate_root(var_args){
var G__51792 = arguments.length;
switch (G__51792) {
case 2:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,el){
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3(container,el,null);
}));

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,el,p__51793){
var map__51794 = p__51793;
var map__51794__$1 = cljs.core.__destructure_map(map__51794);
var compiler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51794__$1,new cljs.core.Keyword(null,"compiler","compiler",-267926731),reagent.impl.template._STAR_current_default_compiler_STAR_);
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51794__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51794__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
return module$node_modules$react_dom$client.hydrateRoot(container,module$node_modules$react$index.createElement(reagent.dom.client.reagent_root,({"comp": comp})));
}));

(reagent.dom.client.hydrate_root.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reagent.dom.client.js.map
