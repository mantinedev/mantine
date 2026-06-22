(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var o in e)t(n,o,{get:e[o],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(317477),o=e.i(44091),i=e.i(391466),s=e.i(956449),r=e.i(232471),d={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},l=e.i(391398);let c=(0,a.createVarsResolver)((e,{radius:a,color:o,gradient:i,variant:s,size:r,autoContrast:d,circle:l})=>{let c=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:i,variant:s||"filled",autoContrast:d});return{root:{"--badge-height":(0,t.getSize)(r,"badge-height"),"--badge-padding-x":(0,t.getSize)(r,"badge-padding-x"),"--badge-fz":(0,t.getSize)(r,"badge-fz"),"--badge-radius":l||void 0===a?void 0:(0,t.getRadius)(a),"--badge-bg":o||s?c.background:void 0,"--badge-color":o||s?c.color:void 0,"--badge-bd":o||s?c.border:void 0,"--badge-dot-color":"dot"===s?(0,n.getThemeColor)(o,e):void 0}}}),u=(0,s.polymorphicFactory)(e=>{let t=(0,o.useProps)("Badge",null,e),{classNames:a,className:n,style:s,styles:u,unstyled:h,vars:f,radius:m,color:M,gradient:D,leftSection:y,rightSection:Y,children:g,variant:b,fullWidth:w,autoContrast:p,circle:v,mod:x,attributes:j,...S}=t,k=(0,i.useStyles)({name:"Badge",props:t,classes:d,className:n,style:s,classNames:a,styles:u,unstyled:h,attributes:j,vars:f,varsResolver:c});return(0,l.jsxs)(r.Box,{variant:b,mod:[{block:w,circle:v,"with-right-section":!!Y,"with-left-section":!!y},x],...k("root",{variant:b}),...S,children:[y&&(0,l.jsx)("span",{...k("section"),"data-position":"left",children:y}),(0,l.jsx)("span",{...k("label"),children:g}),Y&&(0,l.jsx)("span",{...k("section"),"data-position":"right",children:Y})]})});u.classes=d,u.varsResolver=c,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},898770,e=>{"use strict";var t=e.i(494834);e.s(["isMultidayEvent",0,function(e){let a=(0,t.default)(e.start).startOf("day"),n=(0,t.default)(e.end);return(0===n.hour()&&0===n.minute()&&0===n.second()?n.startOf("day").subtract(1,"day"):n.startOf("day")).isAfter(a)}])},813982,e=>{"use strict";var t=e.i(494834);e.s(["sortEvents",0,function(e){return e.toSorted((e,a)=>{let n=(0,t.default)(e.start).diff((0,t.default)(a.start));return 0!==n?n:(0,t.default)(a.end).diff((0,t.default)(a.start))-(0,t.default)(e.end).diff((0,t.default)(e.start))})}])},462138,e=>{"use strict";var t=e.i(779177),a=e.i(391398);function n({style:e,size:o=16,...i}){return(0,a.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(o),height:(0,t.rem)(o),display:"block"},...i,children:(0,a.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}n.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,n])},494834,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",n="hour",o="week",i="month",s="quarter",r="year",d="date",l="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},f="en",m={};m[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var M="$isDayjsObject",D=function(e){return e instanceof b||!(!e||!e[M])},y=function e(t,a,n){var o;if(!t)return f;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(o=i),a&&(m[i]=a,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var r=t.name;m[r]=t,o=r}return!n&&o&&(f=o),o||!n&&f},Y=function(e,t){if(D(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new b(a)},g={s:h,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(a/60),2,"0")+":"+h(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),o=t.clone().add(n,i),s=a-o<0,r=t.clone().add(n+(s?-1:1),i);return+(-(n+(a-o)/(s?o-r:r-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:i,y:r,w:o,d:"day",D:d,h:n,m:a,s:t,ms:e,Q:s})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};g.l=y,g.i=D,g.w=function(e,t){return Y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var b=function(){function h(e){this.$L=y(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[M]=!0}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(c);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==l},f.isSame=function(e,t){var a=Y(e);return this.startOf(t)<=a&&a<=this.endOf(t)},f.isAfter=function(e,t){return Y(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<Y(e)},f.$g=function(e,t,a){return g.u(e)?this[t]:this.set(a,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,s){var l=this,c=!!g.u(s)||s,u=g.p(e),h=function(e,t){var a=g.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?a:a.endOf("day")},f=function(e,t){return g.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,M=this.$M,D=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case r:return c?h(1,0):h(31,11);case i:return c?h(1,M):h(0,M+1);case o:var Y=this.$locale().weekStart||0,b=(m<Y?m+7:m)-Y;return h(c?D-b:D+(6-b),M);case"day":case d:return f(y+"Hours",0);case n:return f(y+"Minutes",1);case a:return f(y+"Seconds",2);case t:return f(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(o,s){var l,c=g.p(o),u="set"+(this.$u?"UTC":""),h=((l={}).day=u+"Date",l[d]=u+"Date",l[i]=u+"Month",l[r]=u+"FullYear",l[n]=u+"Hours",l[a]=u+"Minutes",l[t]=u+"Seconds",l[e]=u+"Milliseconds",l)[c],f="day"===c?this.$D+(s-this.$W):s;if(c===i||c===r){var m=this.clone().set(d,1);m.$d[h](f),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[g.p(e)]()},f.add=function(e,s){var d,l=this;e=Number(e);var c=g.p(s),u=function(t){var a=Y(l);return g.w(a.date(a.date()+Math.round(t*e)),l)};if(c===i)return this.set(i,this.$M+e);if(c===r)return this.set(r,this.$y+e);if("day"===c)return u(1);if(c===o)return u(7);var h=((d={})[a]=6e4,d[n]=36e5,d[t]=1e3,d)[c]||1,f=this.$d.getTime()+e*h;return g.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||l;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=g.z(this),i=this.$H,s=this.$m,r=this.$M,d=a.weekdays,c=a.months,h=a.meridiem,f=function(e,a,o,i){return e&&(e[a]||e(t,n))||o[a].slice(0,i)},m=function(e){return g.s(i%12||12,e,"0")},M=h||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n};return n.replace(u,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return g.s(t.$y,4,"0");case"M":return r+1;case"MM":return g.s(r+1,2,"0");case"MMM":return f(a.monthsShort,r,c,3);case"MMMM":return f(c,r);case"D":return t.$D;case"DD":return g.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(a.weekdaysMin,t.$W,d,2);case"ddd":return f(a.weekdaysShort,t.$W,d,3);case"dddd":return d[t.$W];case"H":return String(i);case"HH":return g.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return M(i,s,!0);case"A":return M(i,s,!1);case"m":return String(s);case"mm":return g.s(s,2,"0");case"s":return String(t.$s);case"ss":return g.s(t.$s,2,"0");case"SSS":return g.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,d,l){var c,u=this,h=g.p(d),f=Y(e),m=(f.utcOffset()-this.utcOffset())*6e4,M=this-f,D=function(){return g.m(u,f)};switch(h){case r:c=D()/12;break;case i:c=D();break;case s:c=D()/3;break;case o:c=(M-m)/6048e5;break;case"day":c=(M-m)/864e5;break;case n:c=M/36e5;break;case a:c=M/6e4;break;case t:c=M/1e3;break;default:c=M}return l?c:g.a(c)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=y(e,t,!0);return n&&(a.$L=n),a},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),w=b.prototype;return Y.prototype=w,[["$ms",e],["$s",t],["$m",a],["$H",n],["$W","day"],["$M",i],["$y",r],["$D",d]].forEach(function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),Y.extend=function(e,t){return e.$i||(e(t,b,Y),e.$i=!0),Y},Y.locale=y,Y.isDayjs=D,Y.unix=function(e){return Y(1e3*e)},Y.en=m[f],Y.Ls=m,Y.p={},Y}()},205693,135140,e=>{"use strict";var t=e.i(191788),a=e.i(391398);let n={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},o=(0,t.createContext)(n);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,a.jsx)(o,{value:{...n,...e},children:t})},"DatesProviderContext",0,o],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(o),a=(0,t.useCallback)(t=>t||e.locale,[e.locale]),n=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),i=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),s=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:a,getFirstDayOfWeek:n,getWeekendDays:i,getLabelSeparator:s}}],205693)},604363,(e,t,a)=>{e.e,t.exports=function(e,t,a){var n=function(e){return e.add(4-e.isoWeekday(),"day")},o=t.prototype;o.isoWeekYear=function(){return n(this).year()},o.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,o,i,s=n(this),r=(t=this.isoWeekYear(),i=4-(o=(this.$u?a.utc:a)().year(t).startOf("year")).isoWeekday(),o.isoWeekday()>4&&(i+=7),o.add(i,"day"));return s.diff(r,"week")+1},o.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var i=o.startOf;o.startOf=function(e,t){var a=this.$utils(),n=!!a.u(t)||t;return"isoweek"===a.p(e)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):i.bind(this)(e,t)}}},4332,e=>{"use strict";var t=e.i(494834);e.s(["toDateString",0,function(e){return(0,t.default)(e).format("YYYY-MM-DD 00:00:00")}])},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:o=1}){let i=(0,a.default)().day(o),s=[];for(let a=0;a<7;a+=1)s.push((0,t.formatDate)({locale:e,date:i.add(a,"days"),format:n}));return s}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:o}){let i=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),s=i.format("YYYY-MM-DD"),r=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let o=0===t?6:t-1;for(;n.day()!==o;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(i.add(i.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),d=[],l=(0,a.default)((0,t.getStartOfWeek)({date:s,firstDayOfWeek:n}));for(;(0,a.default)(l).isBefore(r,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(l.format("YYYY-MM-DD 00:00:00")),l=l.add(1,"day");d.push(e)}if(o&&d.length<6){let e=d[d.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;d.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");d.push(e)}}return d}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(o){n.preventDefault();let i=e.current?e.current.map(e=>e?e.length:0):null;if(!i)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:o,size:i}){let s=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let o=n[t];if(!o)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===o-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:o,size:i});if(!s)return;let r=t.current?.[s.weekIndex]?.[s.dayIndex];r&&(r.disabled||r.getAttribute("data-hidden")||r.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:s.weekIndex,dayIndex:s.dayIndex,size:i}):r.focus())}({controlsRef:e,direction:o,weekIndex:t,dayIndex:a,size:i})}}])},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(621304),o=e.i(855578),i=e.i(605520),s=e.i(753381),r=e.i(4332),d=e.i(813982),l=e.i(657068),c=e.i(647170),u=e.i(298008),h=e.i(898770),f=e.i(494834),m={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},M=e.i(462138),D=e.i(232471),y=e.i(883364),Y=e.i(284629),g=e.i(481178),b=e.i(275519),w=e.i(433512),p=e.i(317477),v=e.i(323283),x=e.i(951254),j=e.i(44091),S=e.i(391466),k=e.i(579560),$=e.i(191788),V=e.i(205693),_=e.i(391398);let C={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},W=(0,g.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,w.getRadius)(t)}})),O=(0,b.factory)(e=>{let g=(0,j.useProps)("MobileMonthView",C,e),{classNames:b,className:w,style:O,styles:E,unstyled:T,vars:N,attributes:H,__staticSelector:I,date:L,onDateChange:A,selectedDate:B,defaultSelectedDate:F,onSelectedDateChange:z,withWeekNumbers:R,withWeekDays:U,locale:P,firstDayOfWeek:K,weekdayFormat:X,weekendDays:Z,getWeekNumberProps:J,getDayProps:q,onDayClick:Q,onWeekNumberClick:G,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:en,events:eo,labels:ei,mode:es,renderEvent:er,eventsHeaderFormat:ed,onYearClick:el,onEventClick:ec,renderHeader:eu,recurrenceExpansionLimit:eh,...ef}=g,em=(0,V.useDatesContext)(),eM=(0,x.useMantineTheme)(),eD=(0,f.default)(),[ey,eY]=(0,k.useUncontrolled)({value:B,defaultValue:F??(0,r.toDateString)(eD),onChange:e=>z?.(e?(0,r.toDateString)((0,f.default)(e)):null)}),eg=(0,S.useStyles)({name:I,classes:m,props:g,className:w,style:O,classNames:b,styles:E,unstyled:T,attributes:H,vars:N,varsResolver:W,rootSelector:"mobileMonthView"}),eb=(0,$.useRef)([]),ew=(0,$.useRef)(null),ep=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let o of t)if("background"!==o.display&&(0,f.default)(o.start).isSame((0,f.default)(e),"month")){if(!function(e,t){if((0,h.isMultidayEvent)(e)){let a=(0,f.default)(e.start).startOf("day"),n=(0,f.default)(e.end).startOf("day");for(let o=a;o.isBefore(n)||o.isSame(n);o=o.add(1,"day")){let a=o.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,f.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,u.validateEvent)(o),a),n.has(o.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${o.id}`);n.add(o.id)}return a}({date:L,events:(0,l.expandRecurringEvents)({events:eo,rangeStart:(0,f.default)(L).startOf("month").toDate(),rangeEnd:(0,f.default)(L).endOf("month").toDate(),expansionLimit:eh})}),ev=U?(0,n.getWeekdaysNames)({locale:em.getLocale(P),format:X,firstDayOfWeek:em.getFirstDayOfWeek(K)}).map((e,t)=>(0,$.createElement)("div",{...eg("mobileMonthViewWeekday"),key:t},e)):null,ex=(0,i.getMonthDays)({month:(0,f.default)(L).format("YYYY-MM-DD"),firstDayOfWeek:em.getFirstDayOfWeek(K),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let n=!(0,s.isSameMonth)(e,L),o=em.getWeekendDays(Z).includes((0,f.default)(e).day()),i=(0,f.default)(e).locale(P||em.locale).format("MMMM D, YYYY"),r=q?.((0,f.default)(e).format("YYYY-MM-DD"))||{},d=(0,f.default)(e).isSame(eD,"day")&&et,l=ey&&(0,f.default)(e).isSame((0,f.default)(ey),"day"),u=ep[(0,f.default)(e).format("YYYY-MM-DD")]||[],h=en||!n;h&&null===ew.current&&(ew.current={weekIndex:t,dayIndex:a});let m=ew.current?.weekIndex===t&&ew.current?.dayIndex===a,M=u.slice(0,3).map(e=>(0,$.createElement)("div",{...eg("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,p.getThemeColor)(e.color,eM)}}),key:e.id}));return(0,$.createElement)(Y.UnstyledButton,{"aria-label":i,"aria-selected":l||void 0,...r,...eg("mobileMonthViewDay",{className:r.className,style:r.style}),key:e,ref:e=>{e&&(eb.current[t]||(eb.current[t]=[]),eb.current[t][a]=e)},mod:[{outside:n,weekend:o,today:d,selected:l,static:"static"===es,hidden:!h},r.mod],tabIndex:"static"!==es&&h&&m?0:-1,onClick:"static"!==es&&h?t=>{let a=(0,f.default)(e).format("YYYY-MM-DD");eY(a),Q?.(a,t),r.onClick?.(t)}:void 0,onKeyDown:"static"!==es&&h?e=>{(0,c.handleMonthViewKeyDown)({controlsRef:eb,weekIndex:t,dayIndex:a,event:e})}:void 0},h?(0,f.default)(e).format("D"):null,h&&(0,_.jsx)("div",{...eg("mobileMonthViewDayIndicators"),children:M}))}),n=J?.((0,f.default)(e[0]).format("YYYY-MM-DD"))||{},i=(0,o.getWeekNumber)(e);return(0,$.createElement)("div",{...eg("mobileMonthViewWeek"),key:t},R&&(0,_.jsx)(Y.UnstyledButton,{"aria-label":`Week ${i}`,...n,onClick:"static"===es?void 0:t=>{G?.((0,f.default)(e[0]).format("YYYY-MM-DD"),t),n.onClick?.(t)},mod:{static:"static"===es},tabIndex:"static"===es?-1:0,...eg("mobileMonthViewWeekNumber",{className:n.className,style:n.style}),children:i},i),a)}),ej=(ey?(0,d.sortEvents)(ep[(0,f.default)(ey).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,f.default)(e.start).format("HH:mm"),a=(0,f.default)(e.end).format("HH:mm"),n=(0,_.jsxs)(D.Box,{...eg("mobileMonthViewEventBody"),children:[(0,_.jsx)("div",{...eg("mobileMonthViewEventColor",{style:{backgroundColor:(0,p.getThemeColor)(e.color,eM)}})}),(0,_.jsxs)("div",{children:[(0,_.jsx)(y.Text,{...eg("mobileMonthViewEventTitle"),children:e.title}),(0,_.jsx)(y.Text,{...eg("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),o={...eg("mobileMonthViewEvent"),onClick:"static"===es?void 0:t=>{ec?.(e,t)},tabIndex:"static"===es?-1:0,children:n};return"function"==typeof er?(0,_.jsx)($.default.Fragment,{children:er(e,o)},e.id):(0,$.createElement)(Y.UnstyledButton,{...o,key:e.id})}),eS=ey?(0,a.formatDate)({locale:em.getLocale(P),date:ey,format:ed}):"",{dir:ek}=(0,v.useDirection)(),e$=(0,a.formatDate)({locale:em.getLocale(P),date:L,format:"MMMM YYYY"}),eV=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(Y.UnstyledButton,{...eg("mobileMonthViewHeaderBackButton"),onClick:el,mod:{static:"static"===es},tabIndex:"static"===es?-1:0,children:[(0,_.jsx)(M.AccordionChevron,{style:{transform:`rotate(${"rtl"===ek?-90:90}deg)`},size:20}),(0,f.default)(L).format("YYYY")]}),(0,_.jsx)(y.Text,{...eg("mobileMonthViewHeaderLabel"),children:e$})]});return(0,_.jsxs)(D.Box,{...eg("mobileMonthView"),mod:{"with-week-numbers":R},...ef,children:[(0,_.jsx)("div",{...eg("mobileMonthViewHeader"),children:"function"==typeof eu?eu({mode:es,date:L,defaultHeader:eV}):eV}),(0,_.jsxs)(D.Box,{...eg("mobileMonthViewCalendar"),mod:{"with-weekdays":U},children:[ev&&(0,_.jsxs)("div",{...eg("mobileMonthViewWeekdays"),children:[R&&(0,_.jsx)("div",{...eg("mobileMonthViewWeekdaysCorner")}),ev]}),ex]}),(0,_.jsxs)(D.Box,{...eg("mobileMonthViewEventsList"),children:[(0,_.jsx)(y.Text,{...eg("mobileMonthViewEventsHeader"),children:eS}),ej.length>0?ej:(0,_.jsx)(y.Text,{...eg("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",ei)})]})]})});O.displayName="@mantine/schedule/MobileMonthView",O.classes=m,O.varsResolver=W,e.s(["MobileMonthView",0,O],433396)},485150,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM"),o=[{id:1,title:"Team Meeting",start:`${n}-05 09:00:00`,end:`${n}-05 10:00:00`,color:"blue"},{id:2,title:"Project Review",start:`${n}-05 14:00:00`,end:`${n}-05 15:30:00`,color:"green"},{id:3,title:"Conference",start:`${n}-10 00:00:00`,end:`${n}-12 00:00:00`,color:"violet"},{id:4,title:"Lunch with Client",start:`${n}-15 12:00:00`,end:`${n}-15 13:30:00`,color:"orange"},{id:5,title:"Sprint Planning",start:`${n}-15 15:00:00`,end:`${n}-15 17:00:00`,color:"cyan"},{id:6,title:"Code Review",start:`${n}-20 10:00:00`,end:`${n}-20 11:00:00`,color:"pink"},{id:7,title:"Workshop Day",start:`${n}-25 00:00:00`,end:`${n}-25 00:00:00`,color:"yellow"}],i=`
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
`;var s=e.i(191788),r=e.i(391398),d=e.i(433396);let l={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o})},centered:!0,maxWidth:375,code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},c={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,withWeekNumbers:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
      withWeekNumbers
    />
  );
}
`,centered:!0,maxWidth:375},u={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,withOutsideDays:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
      withOutsideDays
    />
  );
}
`,centered:!0,maxWidth:375},h={defaultExpanded:!1,type:"code",component:function(){return(0,r.jsx)(d.MobileMonthView,{date:(0,a.default)().format("YYYY-MM-DD"),selectedDate:(0,a.default)().format("YYYY-MM-DD"),events:o,mode:"static"})},code:`
import dayjs from 'dayjs';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <MobileMonthView
      date={dayjs().format('YYYY-MM-DD')}
      selectedDate={dayjs().format('YYYY-MM-DD')}
      events={regularEvents}
      mode="static"
    />
  );
}
`,centered:!0,maxWidth:375};e.i(27355);let f={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",noEvents:"Sin eventos"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      locale="es"
      labels={{
        day: 'D\xeda',
        week: 'Semana',
        month: 'Mes',
        year: 'A\xf1o',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        noEvents: 'Sin eventos',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},m={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,highlightToday:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      highlightToday={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,firstDayOfWeek:0})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      firstDayOfWeek={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var D=e.i(257177);let y={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,renderHeader:({defaultHeader:e})=>(0,r.jsxs)(r.Fragment,{children:[e,(0,r.jsx)(D.Badge,{variant:"light",size:"sm",children:"3 events today"})]})})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      renderHeader={({ defaultHeader }) => (
        <>
          {defaultHeader}
          <Badge variant="light" size="sm">3 events today</Badge>
        </>
      )}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,consistentWeeks:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      consistentWeeks={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},g={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,weekdayFormat:"ddd"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      weekdayFormat="ddd"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]},b={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD")),[n,i]=(0,s.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,r.jsx)(d.MobileMonthView,{date:e,onDateChange:t,selectedDate:n,onSelectedDateChange:i,events:o,withWeekDays:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      withWeekDays={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var w=(0,t.__exportAll)({consistentWeeks:()=>Y,firstDayOfWeek:()=>M,highlightToday:()=>m,localization:()=>f,renderHeader:()=>y,staticMode:()=>h,usage:()=>l,weekdayFormat:()=>g,withOutsideDays:()=>u,withWeekNumbers:()=>c,withoutWeekDays:()=>b});e.s(["MobileMonthViewDemos",0,w],485150)},445794,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(485150);e.i(603441);var o=e.i(62558);e.i(457450);var i=e.i(418026);let s=(0,o.Layout)(i.MDX_DATA.MobileMonthView);function r(e){let o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,a.useMDXComponents)(),...e.components},{Demo:i,KeyboardEventsTable:s}=o;return i||d("Demo",!0),s||d("KeyboardEventsTable",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o.p,{children:"MobileMonthView is a mobile-optimized calendar view that displays a month grid at the top with event indicators, and a list of events for the selected day at the bottom. This component is designed to work similarly to how calendar applications work on iOS."}),"\n",(0,t.jsx)(o.p,{children:"The component does not include drag-and-drop functionality and is optimized for touch interactions on mobile devices."}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"with-week-numbers",children:"With week numbers"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"withWeekNumbers"})," to display week numbers in the first column."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.withWeekNumbers}),"\n",(0,t.jsx)(o.h2,{id:"with-outside-days",children:"With outside days"}),"\n",(0,t.jsxs)(o.p,{children:["By default, days from the previous and next months are hidden. Set ",(0,t.jsx)(o.code,{children:"withOutsideDays"})," to display them."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.withOutsideDays}),"\n",(0,t.jsx)(o.h2,{id:"highlight-today",children:"Highlight today"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"highlightToday={false}"})," to disable highlighting the current day."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.highlightToday}),"\n",(0,t.jsx)(o.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"firstDayOfWeek"})," to control which day starts the week. 0 is Sunday, 1 is Monday (default), etc."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.firstDayOfWeek}),"\n",(0,t.jsx)(o.h2,{id:"custom-header",children:"Custom header"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"renderHeader"})," to customize the header. The callback receives the default header element,\nthe current mode, and the current date, allowing you to wrap or replace the default header."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.renderHeader}),"\n",(0,t.jsx)(o.h2,{id:"consistent-weeks",children:"Consistent weeks"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"consistentWeeks={false}"})," to only show weeks that have days in the current month."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.consistentWeeks}),"\n",(0,t.jsx)(o.h2,{id:"weekday-format",children:"Weekday format"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"weekdayFormat"})," prop to customize the weekday names display. It accepts dayjs format strings."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.weekdayFormat}),"\n",(0,t.jsx)(o.h2,{id:"without-week-days",children:"Without week days"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"withWeekDays={false}"})," to hide the weekday names row."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.withoutWeekDays}),"\n",(0,t.jsx)(o.h2,{id:"static-mode",children:"Static mode"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:'mode="static"'})," to disable all interactions. In this mode, days are not clickable and no selection changes occur."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.staticMode}),"\n",(0,t.jsx)(o.h2,{id:"localization",children:"Localization"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"locale"})," prop to set the dayjs locale for date formatting.\nCombine it with ",(0,t.jsx)(o.code,{children:"labels"})," prop to translate all UI text."]}),"\n",(0,t.jsx)(i,{data:n.MobileMonthViewDemos.localization}),"\n",(0,t.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(o.p,{children:["MobileMonthView follows the same keyboard navigation patterns as ",(0,t.jsx)(o.a,{href:"./month-view.mdx#accessibility",children:"MonthView"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"focus-management",children:"Focus management"}),"\n",(0,t.jsxs)(o.p,{children:["The first day of the month is included in the tab order (",(0,t.jsx)(o.code,{children:"tabIndex={0}"}),"), while all other days have ",(0,t.jsx)(o.code,{children:"tabIndex={-1}"}),". When a day receives focus via arrow key navigation, the component updates ",(0,t.jsx)(o.code,{children:"tabIndex"})," values so that the newly focused day becomes the tab stop."]}),"\n",(0,t.jsx)(o.h3,{id:"keyboard-interactions",children:"Keyboard interactions"}),"\n",(0,t.jsx)(s,{data:[{key:"ArrowRight",description:"Focuses next non-disabled day"},{key:"ArrowLeft",description:"Focuses previous non-disabled day"},{key:"ArrowDown",description:"Focuses same day in the next week"},{key:"ArrowUp",description:"Focuses same day in the previous week"}]}),"\n",(0,t.jsx)(o.h3,{id:"day-labels",children:"Day labels"}),"\n",(0,t.jsxs)(o.p,{children:["Each day button has an ",(0,t.jsx)(o.code,{children:"aria-label"}),' attribute with the full date in the format "Month Day, Year" (e.g., "November 15, 2025"). This provides screen reader users with complete date information.']})]})}function d(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})})}])},927368,(e,t,a)=>{let n="/schedule/mobile-month-view";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(445794)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);