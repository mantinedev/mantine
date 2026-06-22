(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},604363,(e,t,a)=>{e.e,t.exports=function(e,t,a){var n=function(e){return e.add(4-e.isoWeekday(),"day")},r=t.prototype;r.isoWeekYear=function(){return n(this).year()},r.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,r,o,s=n(this),i=(t=this.isoWeekYear(),o=4-(r=(this.$u?a.utc:a)().year(t).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(o+=7),r.add(o,"day"));return s.diff(i,"week")+1},r.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var o=r.startOf;r.startOf=function(e,t){var a=this.$utils(),n=!!a.u(t)||t;return"isoweek"===a.p(e)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):o.bind(this)(e,t)}}},462138,e=>{"use strict";var t=e.i(779177),a=e.i(391398);function n({style:e,size:r=16,...o}){return(0,a.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(r),height:(0,t.rem)(r),display:"block"},...o,children:(0,a.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,n])},494834,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",n="hour",r="week",o="month",s="quarter",i="year",l="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},m="en",f={};f[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var p="$isDayjsObject",D=function(e){return e instanceof v||!(!e||!e[p])},y=function e(t,a,n){var r;if(!t)return m;if("string"==typeof t){var o=t.toLowerCase();f[o]&&(r=o),a&&(f[o]=a,r=o);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var i=t.name;f[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},x=function(e,t){if(D(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new v(a)},g={s:h,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(a/60),2,"0")+":"+h(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),r=t.clone().add(n,o),s=a-r<0,i=t.clone().add(n+(s?-1:1),o);return+(-(n+(a-r)/(s?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(d){return({M:o,y:i,w:r,d:"day",D:l,h:n,m:a,s:t,ms:e,Q:s})[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};g.l=y,g.i=D,g.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function h(e){this.$L=y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(c);if(n){var r=n[2]-1||0,o=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return g},m.isValid=function(){return this.$d.toString()!==d},m.isSame=function(e,t){var a=x(e);return this.startOf(t)<=a&&a<=this.endOf(t)},m.isAfter=function(e,t){return x(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<x(e)},m.$g=function(e,t,a){return g.u(e)?this[t]:this.set(a,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,s){var d=this,c=!!g.u(s)||s,u=g.p(e),h=function(e,t){var a=g.w(d.$u?Date.UTC(d.$y,t,e):new Date(d.$y,t,e),d);return c?a:a.endOf("day")},m=function(e,t){return g.w(d.toDate()[e].apply(d.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),d)},f=this.$W,p=this.$M,D=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case i:return c?h(1,0):h(31,11);case o:return c?h(1,p):h(0,p+1);case r:var x=this.$locale().weekStart||0,v=(f<x?f+7:f)-x;return h(c?D-v:D+(6-v),p);case"day":case l:return m(y+"Hours",0);case n:return m(y+"Minutes",1);case a:return m(y+"Seconds",2);case t:return m(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(r,s){var d,c=g.p(r),u="set"+(this.$u?"UTC":""),h=((d={}).day=u+"Date",d[l]=u+"Date",d[o]=u+"Month",d[i]=u+"FullYear",d[n]=u+"Hours",d[a]=u+"Minutes",d[t]=u+"Seconds",d[e]=u+"Milliseconds",d)[c],m="day"===c?this.$D+(s-this.$W):s;if(c===o||c===i){var f=this.clone().set(l,1);f.$d[h](m),f.init(),this.$d=f.set(l,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[g.p(e)]()},m.add=function(e,s){var l,d=this;e=Number(e);var c=g.p(s),u=function(t){var a=x(d);return g.w(a.date(a.date()+Math.round(t*e)),d)};if(c===o)return this.set(o,this.$M+e);if(c===i)return this.set(i,this.$y+e);if("day"===c)return u(1);if(c===r)return u(7);var h=((l={})[a]=6e4,l[n]=36e5,l[t]=1e3,l)[c]||1,m=this.$d.getTime()+e*h;return g.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),o=this.$H,s=this.$m,i=this.$M,l=a.weekdays,c=a.months,h=a.meridiem,m=function(e,a,r,o){return e&&(e[a]||e(t,n))||r[a].slice(0,o)},f=function(e){return g.s(o%12||12,e,"0")},p=h||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n};return n.replace(u,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return g.s(t.$y,4,"0");case"M":return i+1;case"MM":return g.s(i+1,2,"0");case"MMM":return m(a.monthsShort,i,c,3);case"MMMM":return m(c,i);case"D":return t.$D;case"DD":return g.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(a.weekdaysMin,t.$W,l,2);case"ddd":return m(a.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return g.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,s,!0);case"A":return p(o,s,!1);case"m":return String(s);case"mm":return g.s(s,2,"0");case"s":return String(t.$s);case"ss":return g.s(t.$s,2,"0");case"SSS":return g.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,l,d){var c,u=this,h=g.p(l),m=x(e),f=(m.utcOffset()-this.utcOffset())*6e4,p=this-m,D=function(){return g.m(u,m)};switch(h){case i:c=D()/12;break;case o:c=D();break;case s:c=D()/3;break;case r:c=(p-f)/6048e5;break;case"day":c=(p-f)/864e5;break;case n:c=p/36e5;break;case a:c=p/6e4;break;case t:c=p/1e3;break;default:c=p}return d?c:g.a(c)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=y(e,t,!0);return n&&(a.$L=n),a},m.clone=function(){return g.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),j=v.prototype;return x.prototype=j,[["$ms",e],["$s",t],["$m",a],["$H",n],["$W","day"],["$M",o],["$y",i],["$D",l]].forEach(function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),x.extend=function(e,t){return e.$i||(e(t,v,x),e.$i=!0),x},x.locale=y,x.isDayjs=D,x.unix=function(e){return x(1e3*e)},x.en=f[m],x.Ls=f,x.p={},x}()},205693,135140,e=>{"use strict";var t=e.i(191788),a=e.i(391398);let n={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},r=(0,t.createContext)(n);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,a.jsx)(r,{value:{...n,...e},children:t})},"DatesProviderContext",0,r],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(r),a=(0,t.useCallback)(t=>t||e.locale,[e.locale]),n=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),o=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),s=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:a,getFirstDayOfWeek:n,getWeekendDays:o,getLabelSeparator:s}}],205693)},110198,e=>{"use strict";var t=e.i(494834);e.s(["toDateString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD")},"toDateTimeString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD HH:mm:ss")}])},831474,e=>{"use strict";e.s(["pickCalendarProps",0,function(e){let{maxLevel:t,minLevel:a,defaultLevel:n,level:r,onLevelChange:o,nextIcon:s,previousIcon:i,date:l,defaultDate:d,onDateChange:c,numberOfColumns:u,columnsToScroll:h,ariaLabels:m,nextLabel:f,previousLabel:p,onYearSelect:D,onMonthSelect:y,onYearMouseEnter:x,onMonthMouseEnter:g,onNextMonth:v,onPreviousMonth:j,onNextYear:Y,onPreviousYear:k,onNextDecade:b,onPreviousDecade:M,withCellSpacing:P,highlightToday:S,__updateDateOnYearSelect:w,__updateDateOnMonthSelect:_,__setDateRef:C,__setLevelRef:$,withWeekNumbers:L,headerControlsOrder:O,firstDayOfWeek:W,weekdayFormat:F,weekendDays:T,getDayProps:N,excludeDate:R,renderDay:V,hideOutsideDates:A,hideWeekdays:I,getDayAriaLabel:z,monthLabelFormat:H,monthsListFormat:U,getMonthControlProps:B,yearLabelFormat:E,yearsListFormat:G,getYearControlProps:Z,decadeLabelFormat:X,allowSingleDateInRange:J,allowDeselect:K,minDate:q,maxDate:Q,locale:ee,...et}=e;return{calendarProps:{maxLevel:t,minLevel:a,defaultLevel:n,level:r,onLevelChange:o,nextIcon:s,previousIcon:i,date:l,defaultDate:d,onDateChange:c,numberOfColumns:u,columnsToScroll:h,ariaLabels:m,nextLabel:f,previousLabel:p,onYearSelect:D,onMonthSelect:y,onYearMouseEnter:x,onMonthMouseEnter:g,onNextMonth:v,onPreviousMonth:j,onNextYear:Y,onPreviousYear:k,onNextDecade:b,onPreviousDecade:M,withCellSpacing:P,highlightToday:S,__updateDateOnYearSelect:w,__updateDateOnMonthSelect:_,__setDateRef:C,withWeekNumbers:L,headerControlsOrder:O,firstDayOfWeek:W,weekdayFormat:F,weekendDays:T,getDayProps:N,excludeDate:R,renderDay:V,hideOutsideDates:A,hideWeekdays:I,getDayAriaLabel:z,monthLabelFormat:H,monthsListFormat:U,getMonthControlProps:B,yearLabelFormat:E,yearsListFormat:G,getYearControlProps:Z,decadeLabelFormat:X,allowSingleDateInRange:J,allowDeselect:K,minDate:q,maxDate:Q,locale:ee},others:et}}])},337976,e=>{"use strict";var t=e.i(422696),a=e.i(494834);function n(e,t){let n=[...t].sort((e,t)=>(0,a.default)(e).isAfter((0,a.default)(t))?1:-1);return(0,a.default)(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&(0,a.default)(n[1]).endOf("day").add(1,"ms").isAfter(e)}var r=e.i(191788);e.s(["useDatesState",0,function({type:e,level:o,value:s,defaultValue:i,onChange:l,allowSingleDateInRange:d,allowDeselect:c,onMouseLeave:u}){let[h,m]=(0,t.useUncontrolledDates)({type:e,value:s,defaultValue:i,onChange:l}),[f,p]=(0,r.useState)("range"===e&&h[0]&&!h[1]?h[0]:null),[D,y]=(0,r.useState)(null),x="range"===e?e=>{u?.(e),y(null)}:u,g="range"===e&&f?y:()=>{};return(0,r.useEffect)(()=>{if("range"===e)if(h[0]&&!h[1])p(h[0]);else{let e=null==h[0]&&null==h[1],t=null!=h[0]&&null!=h[1];(e||t)&&(p(null),y(null))}},[h]),{onDateChange:t=>{if("range"===e){if(f&&!h[1]){if((0,a.default)(t).isSame(f,o)&&!d){p(null),y(null),m([null,null]);return}let e=[t,f];e.sort((e,t)=>(0,a.default)(e).isAfter((0,a.default)(t))?1:-1),m(e),y(null),p(null);return}if(h[0]&&!h[1]&&(0,a.default)(t).isSame(h[0],o)&&!d){p(null),y(null),m([null,null]);return}m([t,null]),y(null),p(t);return}"multiple"===e?h.some(e=>(0,a.default)(e).isSame(t,o))?m(h.filter(e=>!(0,a.default)(e).isSame(t,o))):m([...h,t]):h&&c&&(0,a.default)(t).isSame(h,o)?m(null):m(t)},onRootMouseLeave:x,onHoveredDateChange:g,getControlProps:t=>{if("range"===e)return{selected:h.some(e=>e&&(0,a.default)(e).isSame(t,o)),inRange:f&&D?n(t,[D,f]):!!h[0]&&!!h[1]&&n(t,h),firstInRange:!!h[0]&&!!(0,a.default)(t).isSame(h[0],o)&&!(D&&(0,a.default)(D).isBefore(h[0])),lastInRange:h[1]?(0,a.default)(t).isSame(h[1],o):!!h[0]&&!!D&&(0,a.default)(D).isBefore(h[0])&&(0,a.default)(t).isSame(h[0],o),"data-autofocus":!!h[0]&&(0,a.default)(h[0]).isSame(t,o)||void 0};if("multiple"===e)return{selected:h.some(e=>e&&(0,a.default)(e).isSame(t,o)),"data-autofocus":!!h[0]&&(0,a.default)(h[0]).isSame(t,o)||void 0};let r=(0,a.default)(h).isSame(t,o);return{selected:r,"data-autofocus":r||void 0}},_value:h,setValue:m}}],337976)},777141,e=>{"use strict";var t=e.i(146509),a=e.i(337976),n=e.i(164036),r=e.i(831474),o={datePickerRoot:"m_765a40cf",presetsList:"m_d6a681e1",presetButton:"m_acd30b22"},s=e.i(494834),i=e.i(191788),l=e.i(391398),d=e.i(232471),c=e.i(284629),u=e.i(481178),h=e.i(275519),m=e.i(433512),f=e.i(44091),p=e.i(62904),D=e.i(391466);let y=(0,u.createVarsResolver)((e,{size:t})=>({datePickerRoot:{"--preset-font-size":(0,m.getFontSize)(t)}})),x={type:"default",defaultLevel:"month",numberOfColumns:1,size:"sm"},g=(0,h.factory)(e=>{let u=(0,f.useProps)("DatePicker",x,e),{allowDeselect:h,allowSingleDateInRange:m,value:g,defaultValue:v,onChange:j,onMouseLeave:Y,classNames:k,styles:b,__staticSelector:M,__onDayClick:P,__onDayMouseEnter:S,__onPresetSelect:w,__stopPropagation:_,presets:C,className:$,style:L,unstyled:O,size:W,vars:F,attributes:T,fullWidth:N,...R}=u,{calendarProps:V,others:A}=(0,r.pickCalendarProps)(R),I=(0,i.useRef)(null),z=(0,i.useRef)(null),H=(0,D.useStyles)({name:M||"DatePicker",classes:o,props:u,className:$,style:L,classNames:k,styles:b,unstyled:O,attributes:T,rootSelector:C?"datePickerRoot":void 0,varsResolver:y,vars:F}),{onDateChange:U,onRootMouseLeave:B,onHoveredDateChange:E,getControlProps:G,_value:Z,setValue:X}=(0,a.useDatesState)({type:A.type,level:"day",allowDeselect:h,allowSingleDateInRange:m,value:g,defaultValue:v,onChange:j,onMouseLeave:Y}),{resolvedClassNames:J,resolvedStyles:K}=(0,p.useResolvedStylesApi)({classNames:k,styles:b,props:u}),q=(0,l.jsx)(n.Calendar,{classNames:J,styles:K,__staticSelector:M||"DatePicker",onMouseLeave:B,size:W,fullWidth:N,...V,...!C?A:{},__stopPropagation:_,__setDateRef:I,__setLevelRef:z,minLevel:V.minLevel||"month",__onDayMouseEnter:(e,t)=>{E(t),S?.(e,t)},__onDayClick:(e,t)=>{U(t),P?.(e,t)},getDayProps:e=>({...G(e),...V.getDayProps?.(e)}),getMonthControlProps:e=>({selected:"string"==typeof Z&&(0,t.isSameMonth)(e,Z),...V.getMonthControlProps?.(e)}),getYearControlProps:e=>({selected:"string"==typeof Z&&(0,s.default)(e).isSame(Z,"year"),...V.getYearControlProps?.(e)}),hideOutsideDates:V.hideOutsideDates??1!==V.numberOfColumns,attributes:T,...!C?{className:$,style:L}:{}});if(!C)return q;let Q=C.map((e,t)=>(0,l.jsx)(c.UnstyledButton,{...H("presetButton"),onClick:()=>{var t;let a;void 0!==(a=Array.isArray(t=e.value)?t[0]:t)&&(I.current?.(a),z.current?.("month"),w?w(t):X(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":_||void 0,children:e.label},t));return(0,l.jsxs)(d.Box,{...H("datePickerRoot"),size:W,...A,children:[(0,l.jsx)("div",{...H("presetsList"),children:Q}),q]})});g.classes=n.Calendar.classes,g.varsResolver=y,g.displayName="@mantine/dates/DatePicker",e.s(["DatePicker",0,g],777141)},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),n=e.i(481178),r=e.i(317477),o=e.i(700145),s=e.i(853487),i=e.i(44091),l=e.i(391466),d=e.i(275519),c=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},h=e.i(391398);let m={position:"top-end",offset:0,showZero:!0},f=(0,n.createVarsResolver)((e,{color:n,position:i,offset:l,size:d,radius:c,zIndex:u,autoContrast:h})=>({root:{"--indicator-color":n?(0,r.getThemeColor)(n,e):void 0,"--indicator-text-color":(0,s.getAutoContrastValue)(h,e)?(0,o.getContrastColor)({color:n,theme:e,autoContrast:h}):void 0,"--indicator-size":(0,t.rem)(d),"--indicator-radius":void 0===c?void 0:(0,a.getRadius)(c),"--indicator-z-index":u?.toString(),...function(e="top-end",a=0){let n={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},r="number"==typeof a?a:a.x,o="number"==typeof a?a:a.y,s=(0,t.rem)(r),i=(0,t.rem)(o),[l,d]=e.split("-");return"top"===l&&(n["--indicator-top"]=i,n["--indicator-translate-y"]="-50%"),"middle"===l&&(n["--indicator-top"]="50%",n["--indicator-translate-y"]="-50%"),"bottom"===l&&(n["--indicator-bottom"]=i,n["--indicator-translate-y"]="50%"),"start"===d&&(n["--indicator-left"]=s,n["--indicator-translate-x"]="-50%"),"center"===d&&(n["--indicator-left"]="50%",n["--indicator-translate-x"]="-50%"),"end"===d&&(n["--indicator-right"]=s,n["--indicator-translate-x"]="50%"),n}(i,l)}})),p=(0,d.factory)(e=>{let t=(0,i.useProps)("Indicator",m,e),{classNames:a,className:n,style:r,styles:o,unstyled:s,vars:d,children:p,position:D,offset:y,inline:x,label:g,radius:v,color:j,withBorder:Y,disabled:k,processing:b,zIndex:M,autoContrast:P,maxValue:S,showZero:w,mod:_,attributes:C,...$}=t,L=(0,l.useStyles)({name:"Indicator",classes:u,props:t,className:n,style:r,classNames:a,styles:o,unstyled:s,attributes:C,vars:d,varsResolver:f}),O=!w&&(0===g||"0"===g),W=void 0!==S&&"number"==typeof g&&g>S?`${S}+`:g;return(0,h.jsxs)(c.Box,{...L("root"),mod:[{inline:x},_],...$,children:[!k&&!O&&(0,h.jsx)(c.Box,{mod:{"with-label":!!g,"with-border":Y,processing:b},...L("indicator"),children:W}),p]})});p.classes=u,p.varsResolver=f,p.displayName="@mantine/core/Indicator",e.s(["Indicator",0,p],393353)},39167,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),a="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),n="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),r="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(e,t,a){var n,r;return"m"===a?t?"минута":"минуту":e+" "+(n=+e,r=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[a].split("_"),n%10==1&&n%100!=11?r[0]:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?r[1]:r[2])}var i=function(e,n){return o.test(n)?t[e.month()]:a[e.month()]};i.s=a,i.f=t;var l=function(e,t){return o.test(t)?n[e.month()]:r[e.month()]};l.s=r,l.f=n;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:i,monthsShort:l,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(d,null,!0),d}(e.r(494834))},111018,e=>{"use strict";var t=e.i(191788),a=e.i(391398),n=e.i(883364),r=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let o,s,i,l,d,c,u;return{usage:{type:"code",centered:!0,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${o} value={value} onChange={setValue} />;
}
`),component:()=>{let[n,r]=(0,t.useState)(null);return(0,a.jsx)(e,{value:n,onChange:r})}},range:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${s} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[n,r]=(0,t.useState)([null,null]);return(0,a.jsx)(e,{type:"range",value:n,onChange:r})}},multiple:{type:"code",centered:!0,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${i} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[n,r]=(0,t.useState)([]);return(0,a.jsx)(e,{type:"multiple",value:n,onChange:r})}},deselect:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${l} allowDeselect value={value} onChange={setValue} />;
}
`),component:()=>{let[n,r]=(0,t.useState)(null);return(0,a.jsx)(e,{allowDeselect:!0,value:n,onChange:r})}},singleRange:{type:"code",centered:!0,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${d} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`),component:()=>{let[n,r]=(0,t.useState)([null,null]);return(0,a.jsx)(e,{type:"range",allowSingleDateInRange:!0,value:n,onChange:r})}},numberOfColumns:{type:"code",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${c} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${c} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`),component:()=>{let[r,o]=(0,t.useState)([null,null]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{type:"range",numberOfColumns:2,value:r,onChange:o,visibleFrom:"sm"}),(0,a.jsx)(n.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(u=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${u} } from '@mantine/dates';

function Demo() {
  return <${u} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,a.jsx)(e,{defaultValue:(0,r.default)().format("YYYY-MM-DD"),...t})}}}],111018)},271706,e=>{"use strict";var t=e.i(648863),a=e.i(111018),n=e.i(191788),r=e.i(391398),o=e.i(777141),s=e.i(494834);let i={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)([null,null]),[a,i]=(0,n.useState)((0,s.default)().format("YYYY-MM-DD"));return(0,r.jsx)(o.DatePicker,{date:a,onDateChange:i,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&i(e=>(0,s.default)(e).add(1,"month").format("YYYY-MM-DD")),t(e)}})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`},l=e=>{let t=(0,s.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},d=e=>{let t=(0,s.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},c=e=>{let t=(0,s.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},u={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,r.jsx)(o.DatePicker,{value:e,onChange:t,defaultDate:"2021-08-01",getDayProps:l,getYearControlProps:d,getMonthControlProps:c})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
  const d = dayjs(date);

  if (d.day() === 5 && d.date() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
  const d = dayjs(date);

  if (d.year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
  const d = dayjs(date);
  if (d.month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2021-08-01"
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},h={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,r.jsx)(o.DatePicker,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},m={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,r.jsx)(o.DatePicker,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
`},f={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`};e.i(39167);let p={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`};var D=e.i(725695);let y={type:"code",component:function(){return(0,r.jsxs)(D.Group,{justify:"center",children:[(0,r.jsx)(o.DatePicker,{maxLevel:"year"}),(0,r.jsx)(o.DatePicker,{maxLevel:"month"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`},x={type:"code",centered:!0,component:function(){let[e,t]=(0,n.useState)(null);return(0,r.jsx)(o.DatePicker,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-10",maxDate:"2022-02-25"})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-10"
      maxDate="2022-02-25"
    />
  );
}
`},g={type:"code",component:function(){return(0,r.jsxs)(D.Group,{justify:"center",children:[(0,r.jsx)(o.DatePicker,{defaultLevel:"decade"}),(0,r.jsx)(o.DatePicker,{defaultLevel:"year"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`},v={type:"code",component:function(){return(0,r.jsxs)(D.Group,{justify:"center",children:[(0,r.jsx)(o.DatePicker,{firstDayOfWeek:0}),(0,r.jsx)(o.DatePicker,{firstDayOfWeek:6})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`},j={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{weekendDays:[1,2]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`};var Y=e.i(393353);let k=e=>{let t=(0,s.default)(e).date();return(0,r.jsx)(Y.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,r.jsx)("div",{children:t})})},b={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{renderDay:k})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}
`},M={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{hideWeekdays:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`},P={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{hideOutsideDates:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`},S={type:"code",component:function(){return(0,r.jsx)(o.DatePicker,{excludeDate:e=>5!==new Date(e).getDay()})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => new Date(date).getDay() !== 5} />;
}
`,centered:!0},w={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`},_={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{presets:[{value:(0,s.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,s.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,s.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,s.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,s.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,s.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,s.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},C={type:"code",centered:!0,component:function(){let e=(0,s.default)();return(0,r.jsx)(o.DatePicker,{type:"range",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePicker
      type="range"
      presets={[
        {
          value: [today.subtract(2, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last two days',
        },
        {
          value: [today.subtract(7, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last 7 days',
        },
        {
          value: [today.startOf('month').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'This month',
        },
        {
          value: [
            today.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
            today.subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last month',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1},$={type:"code",centered:!0,component:function(){return(0,r.jsx)(o.DatePicker,{defaultDate:"2022-02-01",headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}}})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      defaultDate="2022-02-01"
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
    />
  );
}
`},L={type:"code",centered:!0,maxWidth:600,component:function(){let[e,t]=(0,n.useState)(null);return(0,r.jsx)(o.DatePicker,{fullWidth:!0,value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker fullWidth value={value} onChange={setValue} />;
}
`};var O=(0,t.__exportAll)({controlProps:()=>u,controlledDate:()=>i,defaultDate:()=>h,defaultLevel:()=>g,deselect:()=>T,excludeDate:()=>S,firstDayOfWeek:()=>v,fullWidth:()=>L,headerControlsOrder:()=>$,hideOutsideDates:()=>P,hideWeekdays:()=>M,labelFormat:()=>m,listFormat:()=>f,locale:()=>p,maxLevel:()=>y,minMax:()=>x,multiple:()=>F,numberOfColumns:()=>V,presets:()=>_,presetsRange:()=>C,range:()=>N,renderDay:()=>b,singleRange:()=>R,sizeConfigurator:()=>A,usage:()=>W,weekendDays:()=>j,withWeekNumbers:()=>w});let{usage:W,multiple:F,deselect:T,range:N,singleRange:R,numberOfColumns:V,sizeConfigurator:A}=(0,a.getSharedPickerDemos)(o.DatePicker);e.s(["DatePickerDemos",0,O],271706)},999673,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(271706);e.i(603441);var r=e.i(62558);e.i(457450);var o=e.i(418026);let s=(0,r.Layout)(o.MDX_DATA.DatePicker);function i(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:o,KeyboardEventsTable:s}=r;return o||l("Demo",!0),s||l("KeyboardEventsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.usage}),"\n",(0,t.jsx)(r.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"allowDeselect"})," to allow users to deselect the currently selected date by clicking on it.\n",(0,t.jsx)(r.code,{children:"allowDeselect"})," is disregarded when the ",(0,t.jsx)(r.code,{children:"type"})," prop is ",(0,t.jsx)(r.code,{children:"range"})," or ",(0,t.jsx)(r.code,{children:"multiple"}),". When a date is\ndeselected, ",(0,t.jsx)(r.code,{children:"onChange"})," is called with ",(0,t.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.deselect}),"\n",(0,t.jsx)(r.h2,{id:"multiple-dates",children:"Multiple dates"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:'type="multiple"'})," to allow users to pick multiple dates:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.multiple}),"\n",(0,t.jsx)(r.h2,{id:"dates-range",children:"Dates range"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:'type="range"'})," to allow users to pick a date range:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.range}),"\n",(0,t.jsx)(r.h2,{id:"single-date-in-range",children:"Single date in range"}),"\n",(0,t.jsxs)(r.p,{children:["By default, it is not allowed to select a single date as a range – when the user clicks the same date a second time, it is deselected.\nTo change this behavior, set the ",(0,t.jsx)(r.code,{children:"allowSingleDateInRange"})," prop. ",(0,t.jsx)(r.code,{children:"allowSingleDateInRange"})," is ignored when the\n",(0,t.jsx)(r.code,{children:"type"})," prop is not ",(0,t.jsx)(r.code,{children:"range"}),"."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.singleRange}),"\n",(0,t.jsx)(r.h2,{id:"presets",children:"Presets"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"presets"})," prop to add custom date presets. Presets are displayed next to the calendar:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.presets}),"\n",(0,t.jsxs)(r.p,{children:["To use ",(0,t.jsx)(r.code,{children:"presets"})," with ",(0,t.jsx)(r.code,{children:'type="range"'}),", define the value as a tuple of two dates:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.presetsRange}),"\n",(0,t.jsx)(r.h2,{id:"default-date",children:"Default date"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"defaultDate"})," prop to set the date value that will be used to determine which year should be displayed initially.\nFor example, to display the ",(0,t.jsx)(r.code,{children:"2015 February"})," month, set ",(0,t.jsx)(r.code,{children:"defaultDate={new Date(2015, 1)}"}),". If the value is not specified,\nthen ",(0,t.jsx)(r.code,{children:"defaultDate"})," will use ",(0,t.jsx)(r.code,{children:"new Date()"}),". Day, minutes and seconds are ignored in the provided date object, only year and month data is used –\nyou can specify any date value."]}),"\n",(0,t.jsxs)(r.p,{children:["Note that if you set the ",(0,t.jsx)(r.code,{children:"date"})," prop, then the ",(0,t.jsx)(r.code,{children:"defaultDate"})," value will be ignored."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.defaultDate}),"\n",(0,t.jsx)(r.h2,{id:"controlled-date",children:"Controlled date"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"date"})," and ",(0,t.jsx)(r.code,{children:"onDateChange"})," props to make the currently displayed month, year and decade controlled.\nBy doing so, you can customize the date picking experience. For example, when the user selects the first date in a range,\nyou can add one month to the current date value:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.controlledDate}),"\n",(0,t.jsx)(r.h2,{id:"default-level",children:"Default level"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"defaultLevel"})," prop to configure the initial level that will be displayed:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.defaultLevel}),"\n",(0,t.jsx)(r.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"hideOutsideDates"})," prop to remove all dates that do not belong to the current month:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.hideOutsideDates}),"\n",(0,t.jsx)(r.h2,{id:"display-week-numbers",children:"Display week numbers"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"withWeekNumbers"})," prop to display week numbers:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.withWeekNumbers}),"\n",(0,t.jsx)(r.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"firstDayOfWeek"})," prop to configure the first day of the week. The prop accepts a number from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. The default value is 1 – Monday. You can also configure this option\nfor all components with ",(0,t.jsx)(r.a,{href:"/dates/getting-started/",children:"DatesProvider"}),"."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.firstDayOfWeek}),"\n",(0,t.jsx)(r.h2,{id:"hide-weekdays",children:"Hide weekdays"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"hideWeekdays"})," prop to hide weekday names:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.hideWeekdays}),"\n",(0,t.jsx)(r.h2,{id:"weekend-days",children:"Weekend days"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"weekendDays"})," prop to configure weekend days. The prop accepts an array of numbers from 0 to 6,\nwhere 0 is Sunday and 6 is Saturday. The default value is ",(0,t.jsx)(r.code,{children:"[0, 6]"})," – Saturday and Sunday. You can also configure this option\nfor all components with ",(0,t.jsx)(r.a,{href:"/dates/getting-started/",children:"DatesProvider"}),"."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.weekendDays}),"\n",(0,t.jsx)(r.h2,{id:"render-day-function",children:"Render day function"}),"\n",(0,t.jsxs)(r.p,{children:["You can customize day rendering with the ",(0,t.jsx)(r.code,{children:"renderDay"})," prop. For example, it can be used to add\n",(0,t.jsx)(r.a,{href:"/core/indicator/",children:"Indicator"})," to certain days."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.renderDay}),"\n",(0,t.jsx)(r.h2,{id:"min-and-max-date",children:"Min and max date"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"minDate"})," and ",(0,t.jsx)(r.code,{children:"maxDate"})," props to define minimum and maximum dates. If the previous/next page is not available,\nthen the corresponding control will be disabled."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.minMax}),"\n",(0,t.jsx)(r.h2,{id:"change-header-controls-order",children:"Change header controls order"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"headerControlsOrder"})," prop to change the order of header controls. The prop accepts an array of\n",(0,t.jsx)(r.code,{children:"'next' | 'previous' | 'level'"}),". Note that each control can be used only once in the array."]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.headerControlsOrder}),"\n",(0,t.jsx)(r.h2,{id:"add-props-to-day-year-and-month-control",children:"Add props to day, year and month control"}),"\n",(0,t.jsxs)(r.p,{children:["You can add props to year, month and day controls with the ",(0,t.jsx)(r.code,{children:"getYearControlProps"}),", ",(0,t.jsx)(r.code,{children:"getMonthControlProps"})," and ",(0,t.jsx)(r.code,{children:"getDayProps"})," functions. All functions accept a date as a single argument,\nand props returned from the function will be added to the year/month/day control. For example, it can be used to disable a specific\ncontrol or add styles:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.controlProps}),"\n",(0,t.jsx)(r.h2,{id:"exclude-dates",children:"Exclude dates"}),"\n",(0,t.jsxs)(r.p,{children:["To disable specific dates, use the ",(0,t.jsx)(r.code,{children:"excludeDate"})," prop.\nIt accepts a function that takes a date as an argument and returns a boolean value – if ",(0,t.jsx)(r.code,{children:"true"})," is returned, the date will be disabled.\nExample of disabling all dates that are not Fridays:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.excludeDate}),"\n",(0,t.jsx)(r.h2,{id:"number-of-columns",children:"Number of columns"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"numberOfColumns"})," prop to define the number of pickers that will be rendered side by side:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.numberOfColumns}),"\n",(0,t.jsx)(r.h2,{id:"max-level",children:"Max level"}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.maxLevel}),"\n",(0,t.jsx)(r.h2,{id:"full-width",children:"Full width"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"fullWidth"})," prop to make the date picker stretch to fill 100% of its parent container width:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.fullWidth}),"\n",(0,t.jsx)(r.h2,{id:"size",children:"Size"}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.sizeConfigurator}),"\n",(0,t.jsx)(r.h2,{id:"change-year-and-months-controls-format",children:"Change year and months controls format"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"yearsListFormat"})," and ",(0,t.jsx)(r.code,{children:"monthsListFormat"})," props to change the ",(0,t.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of year/month controls:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.listFormat}),"\n",(0,t.jsx)(r.h2,{id:"change-label-format",children:"Change label format"}),"\n",(0,t.jsxs)(r.p,{children:["Use the ",(0,t.jsx)(r.code,{children:"decadeLabelFormat"}),", ",(0,t.jsx)(r.code,{children:"yearLabelFormat"})," and ",(0,t.jsx)(r.code,{children:"monthLabelFormat"})," props to change the ",(0,t.jsx)(r.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of the decade/year label:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.labelFormat}),"\n",(0,t.jsx)(r.h2,{id:"localization",children:"Localization"}),"\n",(0,t.jsxs)(r.p,{children:["Usually it is better to specify the ",(0,t.jsx)(r.code,{children:"@mantine/dates"})," package locale in ",(0,t.jsx)(r.a,{href:"/dates/getting-started/",children:"DatesProvider"}),",\nbut you can also override the locale per component:"]}),"\n",(0,t.jsx)(o,{data:n.DatePickerDemos.locale}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsx)(r.h3,{id:"aria-labels",children:"Aria labels"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"ariaLabels"})," prop to specify ",(0,t.jsx)(r.code,{children:"aria-label"})," attributes for next/previous controls:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      ariaLabels={{\n        nextDecade: 'Next decade',\n        previousDecade: 'Previous decade',\n        nextYear: 'Next year',\n        previousYear: 'Previous year',\n        nextMonth: 'Next month',\n        previousMonth: 'Previous month',\n        yearLevelControl: 'Change to decade view',\n        monthLevelControl: 'Change to year view',\n      }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"yearmonth-control-aria-label",children:"Year/month control aria-label"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"getYearControlProps"}),"/",(0,t.jsx)(r.code,{children:"getMonthControlProps"}),"/",(0,t.jsx)(r.code,{children:"getDayProps"})," to customize the ",(0,t.jsx)(r.code,{children:"aria-label"})," attribute:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { DatePicker } from '@mantine/dates';\n\nfunction Demo() {\n  return (\n    <DatePicker\n      getDayProps={(date) => ({\n        'aria-label': `Select date ${\n          date.getMonth() + 1\n        }/${date.getDate()}/${date.getFullYear()}`,\n      })}\n      getYearControlProps={(date) => ({\n        'aria-label': `Select year ${date.getFullYear()}`,\n      })}\n      getMonthControlProps={(date) => ({\n        'aria-label': `Select month ${date.getFullYear()}/${date.getMonth()}`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(r.p,{children:"Note that the following events will only trigger if focus is on a date control."}),"\n",(0,t.jsx)(s,{data:[{key:"ArrowRight",description:"Focuses next non-disabled date"},{key:"ArrowLeft",description:"Focuses previous non-disabled date"},{key:"ArrowDown",description:"Focuses next non-disabled date in the same column"},{key:"ArrowUp",description:"Focuses previous non-disabled date in the same column"}]})]})}function l(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})})}])},855937,(e,t,a)=>{let n="/dates/date-picker";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(999673)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);