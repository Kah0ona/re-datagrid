goog.provide('cljs_time.internal.unparse');
cljs_time.internal.unparse.unparse_period = (function cljs_time$internal$unparse$unparse_period(s,d,num,min,max){
var n = cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(num,min);
var c = ((n).length);
var n__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(c - max));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),n__$1].join(''),d], null);
});
cljs_time.internal.unparse.unparse_millis = (function cljs_time$internal$unparse$unparse_millis(var_args){
var G__39066 = arguments.length;
switch (G__39066) {
case 1:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_millis.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getMilliseconds(),min,max);
});
}));

(cljs_time.internal.unparse.unparse_millis.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_seconds = (function cljs_time$internal$unparse$unparse_seconds(var_args){
var G__39072 = arguments.length;
switch (G__39072) {
case 1:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_seconds.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getSeconds(),min,max);
});
}));

(cljs_time.internal.unparse.unparse_seconds.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_minutes = (function cljs_time$internal$unparse$unparse_minutes(var_args){
var G__39082 = arguments.length;
switch (G__39082) {
case 1:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_minutes.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getMinutes(),min,max);
});
}));

(cljs_time.internal.unparse.unparse_minutes.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_hours = (function cljs_time$internal$unparse$unparse_hours(var_args){
var G__39092 = arguments.length;
switch (G__39092) {
case 1:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_hours.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var hr = cljs.core.mod(d.getHours(),(12));
var hours = (((hr === (0)))?(12):hr);
return cljs_time.internal.unparse.unparse_period(s,d,hours,min,max);
});
}));

(cljs_time.internal.unparse.unparse_hours.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_HOURS = (function cljs_time$internal$unparse$unparse_HOURS(var_args){
var G__39095 = arguments.length;
switch (G__39095) {
case 1:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_HOURS.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getHours(),min,max);
});
}));

(cljs_time.internal.unparse.unparse_HOURS.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_day = (function cljs_time$internal$unparse$unparse_day(var_args){
var G__39099 = arguments.length;
switch (G__39099) {
case 1:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getDate(),min,max);
});
}));

(cljs_time.internal.unparse.unparse_day.cljs$lang$maxFixedArity = 2);

/**
 * .getDay returns 0-6, shifts to 1-7
 */
cljs_time.internal.unparse.unparse_day_of_week = (function cljs_time$internal$unparse$unparse_day_of_week(var_args){
var G__39101 = arguments.length;
switch (G__39101) {
case 1:
return cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_day_of_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var raw_day_of_week = d.getDay();
var day_of_week = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_day_of_week,(0)))?(7):raw_day_of_week);
return cljs_time.internal.unparse.unparse_period(s,d,day_of_week,min,max);
});
}));

(cljs_time.internal.unparse.unparse_day_of_week.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_day_of_year = (function cljs_time$internal$unparse$unparse_day_of_year(var_args){
var G__39104 = arguments.length;
switch (G__39104) {
case 1:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_day.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_day_of_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getDate(),min,max);
});
}));

(cljs_time.internal.unparse.unparse_day_of_year.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_month = (function cljs_time$internal$unparse$unparse_month(var_args){
var G__39114 = arguments.length;
switch (G__39114) {
case 1:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_month.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,(d.getMonth() + (1)),min,max);
});
}));

(cljs_time.internal.unparse.unparse_month.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_year = (function cljs_time$internal$unparse$unparse_year(var_args){
var G__39118 = arguments.length;
switch (G__39118) {
case 1:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_year.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period(s,d,d.getYear(),min,max);
});
}));

(cljs_time.internal.unparse.unparse_year.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_quoted = (function cljs_time$internal$unparse$unparse_quoted(quoted){
return (function (s,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,s,quoted),d], null);
});
});
cljs_time.internal.unparse.unparse_period_name = (function cljs_time$internal$unparse$unparse_period_name(s,d,n,periods,short_QMARK_){
var periods__$1 = cljs.core.vec((function (){var G__39123 = periods;
if(cljs.core.truth_(short_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39122_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__39122_SHARP_,(0),(3));
}),G__39123);
} else {
return G__39123;
}
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1((periods__$1.cljs$core$IFn$_invoke$arity$1 ? periods__$1.cljs$core$IFn$_invoke$arity$1(n) : periods__$1.call(null,n)))].join(''),d], null);
});
cljs_time.internal.unparse.unparse_month_name = (function cljs_time$internal$unparse$unparse_month_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name(s,d,d.getMonth(),cljs_time.internal.core.months,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_day_name = (function cljs_time$internal$unparse$unparse_day_name(short_QMARK_){
return (function (s,d){
return cljs_time.internal.unparse.unparse_period_name(s,d,d.getDay(),cljs_time.internal.core.days,short_QMARK_);
});
});
cljs_time.internal.unparse.unparse_weekyear = (function cljs_time$internal$unparse$unparse_weekyear(var_args){
var G__39127 = arguments.length;
switch (G__39127) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_weekyear.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period(s,d,cljs_time.internal.core.get_week_year(year,month,day),min,max);
});
}));

(cljs_time.internal.unparse.unparse_weekyear.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_weekyear_week = (function cljs_time$internal$unparse$unparse_weekyear_week(var_args){
var G__39132 = arguments.length;
switch (G__39132) {
case 1:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$1 = (function (min){
return cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2(min,min);
}));

(cljs_time.internal.unparse.unparse_weekyear_week.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (s,d){
var year = d.getYear();
var month = d.getMonth();
var day = d.getDate();
return cljs_time.internal.unparse.unparse_period(s,d,goog.date.getWeekNumber(year,month,day),min,max);
});
}));

(cljs_time.internal.unparse.unparse_weekyear_week.cljs$lang$maxFixedArity = 2);

cljs_time.internal.unparse.unparse_meridiem = (function cljs_time$internal$unparse$unparse_meridiem(capitalize_QMARK_){
return (function (s,d){
var hours = d.getHours();
var meridiem = (cljs.core.truth_(capitalize_QMARK_)?(((hours < (12)))?"AM":"PM"):(((hours < (12)))?"am":"pm"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),meridiem].join(''),d], null);
});
});
cljs_time.internal.unparse.unparse_timezone = (function cljs_time$internal$unparse$unparse_timezone(){
return (function (s,d){
if((d instanceof goog.date.UtcDateTime)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getTimezoneOffsetString())].join(''),d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,d], null);
}
});
});
cljs_time.internal.unparse.unparse_ordinal_suffix = (function cljs_time$internal$unparse$unparse_ordinal_suffix(getter){
return (function (s,d){
var n = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(d) : getter.call(null,d));
var o = (function (){var G__39133 = n;
switch (G__39133) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)].join(''),d], null);
});
});
cljs_time.internal.unparse.lookup = (function cljs_time$internal$unparse$lookup(p__39134){
var vec__39135 = p__39134;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39135,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39135,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"token","token",-1211463215))){
var G__39142 = pattern;
switch (G__39142) {
case "S":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(1),(2)], null);

break;
case "SSS":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387),(3),(3)], null);

break;
case "s":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(1),(2)], null);

break;
case "ss":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(2),(2)], null);

break;
case "m":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(1),(2)], null);

break;
case "mm":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),(2),(2)], null);

break;
case "h":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(1),(2)], null);

break;
case "hh":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(2),(2)], null);

break;
case "H":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(1),(2)], null);

break;
case "HH":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),(2),(2)], null);

break;
case "d":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(2)], null);

break;
case "dd":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(2)], null);

break;
case "D":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(1),(3)], null);

break;
case "DD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(2),(3)], null);

break;
case "DDD":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day","day",-274800446),(3),(3)], null);

break;
case "M":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(1),(2)], null);

break;
case "MM":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533),(2),(2)], null);

break;
case "MMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),true], null);

break;
case "MMMM":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-name","month-name",-605509534),false], null);

break;
case "y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "yy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "yyyy":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "Y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(1),(4)], null);

break;
case "YY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(2),(2)], null);

break;
case "YYYY":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),(4),(4)], null);

break;
case "x":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(1),(4)], null);

break;
case "xx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(2),(2)], null);

break;
case "xxxx":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),(4),(4)], null);

break;
case "w":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(1),(2)], null);

break;
case "ww":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),(2),(2)], null);

break;
case "e":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(1),(1)], null);

break;
case "E":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),true], null);

break;
case "EEEE":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-name","day-name",1806125744),false], null);

break;
case "a":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),false], null);

break;
case "A":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),true], null);

break;
case "Z":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "ZZ":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null);

break;
case "o":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39142)].join('')));

}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quoted","quoted",2117344952),pattern], null);
}
});
cljs_time.internal.unparse.lookup_getter = (function cljs_time$internal$unparse$lookup_getter(key){
var G__39176 = key;
var G__39176__$1 = (((G__39176 instanceof cljs.core.Keyword))?G__39176.fqn:null);
switch (G__39176__$1) {
case "millis":
return (function (p1__39167_SHARP_){
return p1__39167_SHARP_.getMilliseconds();
});

break;
case "seconds":
return (function (p1__39169_SHARP_){
return p1__39169_SHARP_.getSeconds();
});

break;
case "minutes":
return (function (p1__39170_SHARP_){
return p1__39170_SHARP_.getMinutes();
});

break;
case "hours":
return (function (p1__39171_SHARP_){
return p1__39171_SHARP_.getHours();
});

break;
case "HOURS":
return (function (p1__39172_SHARP_){
return p1__39172_SHARP_.getHours();
});

break;
case "day":
return (function (p1__39173_SHARP_){
return p1__39173_SHARP_.getDate();
});

break;
case "month":
return (function (p1__39174_SHARP_){
return p1__39174_SHARP_.getMonth();
});

break;
case "year":
return (function (p1__39175_SHARP_){
return p1__39175_SHARP_.getYear();
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39176__$1)].join('')));

}
});
cljs_time.internal.unparse.lookup_fn = (function cljs_time$internal$unparse$lookup_fn(syntax_list,i,p__39178){
var vec__39179 = p__39178;
var seq__39180 = cljs.core.seq(vec__39179);
var first__39181 = cljs.core.first(seq__39180);
var seq__39180__$1 = cljs.core.next(seq__39180);
var key = first__39181;
var args = seq__39180__$1;
var G__39183 = key;
var G__39183__$1 = (((G__39183 instanceof cljs.core.Keyword))?G__39183.fqn:null);
switch (G__39183__$1) {
case "millis":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_millis,args);

break;
case "seconds":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_seconds,args);

break;
case "minutes":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_minutes,args);

break;
case "hours":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_hours,args);

break;
case "HOURS":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_HOURS,args);

break;
case "day":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_day,args);

break;
case "month":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_month,args);

break;
case "month-name":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_month_name,args);

break;
case "year":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_year,args);

break;
case "weekyear":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_weekyear,args);

break;
case "weekyear-week":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_weekyear_week,args);

break;
case "day-name":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_day_name,args);

break;
case "day-of-week":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_day_of_week,args);

break;
case "meridiem":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_meridiem,args);

break;
case "timezone":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_timezone,args);

break;
case "ordinal-suffix":
var vec__39185 = (function (){var G__39188 = (i - (1));
return (syntax_list.cljs$core$IFn$_invoke$arity$1 ? syntax_list.cljs$core$IFn$_invoke$arity$1(G__39188) : syntax_list.call(null,G__39188));
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39185,(0),null);
return cljs_time.internal.unparse.unparse_ordinal_suffix(cljs_time.internal.unparse.lookup_getter(k));

break;
case "quoted":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.unparse_quoted,args);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39183__$1)].join('')));

}
});
cljs_time.internal.unparse.unparse = (function cljs_time$internal$unparse$unparse(pattern,value){
var syn_list = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.lookup,cljs_time.internal.parse.read_pattern(pattern));
var d = value;
var G__39193 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.unparse.lookup_fn,syn_list),syn_list);
var vec__39194 = G__39193;
var seq__39195 = cljs.core.seq(vec__39194);
var first__39196 = cljs.core.first(seq__39195);
var seq__39195__$1 = cljs.core.next(seq__39195);
var unparser = first__39196;
var more = seq__39195__$1;
var s = "";
var d__$1 = d;
var G__39193__$1 = G__39193;
var s__$1 = s;
while(true){
var d__$2 = d__$1;
var vec__39207 = G__39193__$1;
var seq__39208 = cljs.core.seq(vec__39207);
var first__39209 = cljs.core.first(seq__39208);
var seq__39208__$1 = cljs.core.next(seq__39208);
var unparser__$1 = first__39209;
var more__$1 = seq__39208__$1;
var s__$2 = s__$1;
if((unparser__$1 == null)){
return s__$2;
} else {
var vec__39210 = (unparser__$1.cljs$core$IFn$_invoke$arity$2 ? unparser__$1.cljs$core$IFn$_invoke$arity$2(s__$2,d__$2) : unparser__$1.call(null,s__$2,d__$2));
var s__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39210,(0),null);
var d__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39210,(1),null);
var G__39233 = d__$3;
var G__39234 = more__$1;
var G__39235 = s__$3;
d__$1 = G__39233;
G__39193__$1 = G__39234;
s__$1 = G__39235;
continue;
}
break;
}
});

//# sourceMappingURL=cljs_time.internal.unparse.js.map
