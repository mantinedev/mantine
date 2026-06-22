(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},494834,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",n="hour",r="week",o="month",s="quarter",i="year",l="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},m="en",p={};p[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var f="$isDayjsObject",g=function(e){return e instanceof w||!(!e||!e[f])},x=function e(t,a,n){var r;if(!t)return m;if("string"==typeof t){var o=t.toLowerCase();p[o]&&(r=o),a&&(p[o]=a,r=o);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var i=t.name;p[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},y=function(e,t){if(g(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new w(a)},D={s:h,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(a/60),2,"0")+":"+h(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),r=t.clone().add(n,o),s=a-r<0,i=t.clone().add(n+(s?-1:1),o);return+(-(n+(a-r)/(s?r-i:i-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(d){return({M:o,y:i,w:r,d:"day",D:l,h:n,m:a,s:t,ms:e,Q:s})[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};D.l=x,D.i=g,D.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function h(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[f]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(c);if(n){var r=n[2]-1||0,o=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return D},m.isValid=function(){return this.$d.toString()!==d},m.isSame=function(e,t){var a=y(e);return this.startOf(t)<=a&&a<=this.endOf(t)},m.isAfter=function(e,t){return y(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<y(e)},m.$g=function(e,t,a){return D.u(e)?this[t]:this.set(a,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,s){var d=this,c=!!D.u(s)||s,u=D.p(e),h=function(e,t){var a=D.w(d.$u?Date.UTC(d.$y,t,e):new Date(d.$y,t,e),d);return c?a:a.endOf("day")},m=function(e,t){return D.w(d.toDate()[e].apply(d.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),d)},p=this.$W,f=this.$M,g=this.$D,x="set"+(this.$u?"UTC":"");switch(u){case i:return c?h(1,0):h(31,11);case o:return c?h(1,f):h(0,f+1);case r:var y=this.$locale().weekStart||0,w=(p<y?p+7:p)-y;return h(c?g-w:g+(6-w),f);case"day":case l:return m(x+"Hours",0);case n:return m(x+"Minutes",1);case a:return m(x+"Seconds",2);case t:return m(x+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(r,s){var d,c=D.p(r),u="set"+(this.$u?"UTC":""),h=((d={}).day=u+"Date",d[l]=u+"Date",d[o]=u+"Month",d[i]=u+"FullYear",d[n]=u+"Hours",d[a]=u+"Minutes",d[t]=u+"Seconds",d[e]=u+"Milliseconds",d)[c],m="day"===c?this.$D+(s-this.$W):s;if(c===o||c===i){var p=this.clone().set(l,1);p.$d[h](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[D.p(e)]()},m.add=function(e,s){var l,d=this;e=Number(e);var c=D.p(s),u=function(t){var a=y(d);return D.w(a.date(a.date()+Math.round(t*e)),d)};if(c===o)return this.set(o,this.$M+e);if(c===i)return this.set(i,this.$y+e);if("day"===c)return u(1);if(c===r)return u(7);var h=((l={})[a]=6e4,l[n]=36e5,l[t]=1e3,l)[c]||1,m=this.$d.getTime()+e*h;return D.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),o=this.$H,s=this.$m,i=this.$M,l=a.weekdays,c=a.months,h=a.meridiem,m=function(e,a,r,o){return e&&(e[a]||e(t,n))||r[a].slice(0,o)},p=function(e){return D.s(o%12||12,e,"0")},f=h||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n};return n.replace(u,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return i+1;case"MM":return D.s(i+1,2,"0");case"MMM":return m(a.monthsShort,i,c,3);case"MMMM":return m(c,i);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(a.weekdaysMin,t.$W,l,2);case"ddd":return m(a.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return f(o,s,!0);case"A":return f(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,l,d){var c,u=this,h=D.p(l),m=y(e),p=(m.utcOffset()-this.utcOffset())*6e4,f=this-m,g=function(){return D.m(u,m)};switch(h){case i:c=g()/12;break;case o:c=g();break;case s:c=g()/3;break;case r:c=(f-p)/6048e5;break;case"day":c=(f-p)/864e5;break;case n:c=f/36e5;break;case a:c=f/6e4;break;case t:c=f/1e3;break;default:c=f}return d?c:D.a(c)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return p[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=x(e,t,!0);return n&&(a.$L=n),a},m.clone=function(){return D.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),b=w.prototype;return y.prototype=b,[["$ms",e],["$s",t],["$m",a],["$H",n],["$W","day"],["$M",o],["$y",i],["$D",l]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,w,y),e.$i=!0),y},y.locale=x,y.isDayjs=g,y.unix=function(e){return y(1e3*e)},y.en=p[m],y.Ls=p,y.p={},y}()},3214,e=>{"use strict";var t=e.i(648863);let a={"2025-02-14":2,"2025-02-11":3,"2025-02-06":4,"2025-02-05":1,"2025-02-03":2,"2025-02-01":2,"2025-01-31":4,"2025-01-30":2,"2025-01-29":3,"2025-01-26":2,"2025-01-25":2,"2025-01-24":2,"2025-01-23":2,"2025-01-20":3,"2025-01-19":2,"2025-01-17":3,"2025-01-16":2,"2025-01-14":3,"2025-01-08":2,"2025-01-07":1,"2025-01-05":3,"2025-01-04":1,"2025-01-03":1,"2025-01-01":2,"2024-12-30":4,"2024-12-27":3,"2024-12-26":1,"2024-12-22":3,"2024-12-20":2,"2024-12-19":3,"2024-12-16":4,"2024-12-15":1,"2024-12-14":4,"2024-12-11":2,"2024-12-09":4,"2024-12-05":4,"2024-12-04":3,"2024-12-03":2,"2024-12-01":1,"2024-11-30":3,"2024-11-29":1,"2024-11-28":1,"2024-11-26":4,"2024-11-25":3,"2024-11-24":3,"2024-11-22":4,"2024-11-20":2,"2024-11-19":3,"2024-11-16":3,"2024-11-15":1,"2024-11-14":4,"2024-11-12":1,"2024-11-11":2,"2024-11-10":1,"2024-11-09":3,"2024-11-07":1,"2024-11-06":4,"2024-11-04":1,"2024-11-03":4,"2024-11-02":4,"2024-10-31":1,"2024-10-30":1,"2024-10-28":4,"2024-10-27":2,"2024-10-26":3,"2024-10-25":4,"2024-10-23":1,"2024-10-22":1,"2024-10-21":4,"2024-10-20":3,"2024-10-15":3,"2024-10-13":4,"2024-10-10":1,"2024-10-08":1,"2024-10-07":4,"2024-10-05":1,"2024-10-04":4,"2024-10-02":2,"2024-10-01":3,"2024-09-29":4,"2024-09-27":3,"2024-09-26":4,"2024-09-25":3,"2024-09-20":4,"2024-09-18":3,"2024-09-17":1,"2024-09-14":2,"2024-09-12":3,"2024-09-10":1,"2024-09-08":1,"2024-09-06":2,"2024-09-04":4,"2024-08-31":4,"2024-08-29":3,"2024-08-26":4,"2024-08-25":1,"2024-08-23":2,"2024-08-21":4,"2024-08-19":1,"2024-08-14":4,"2024-08-13":2,"2024-08-11":4,"2024-08-09":4,"2024-08-06":4,"2024-08-05":4,"2024-08-04":1,"2024-08-02":4,"2024-08-01":4,"2024-07-31":3,"2024-07-30":2,"2024-07-29":2,"2024-07-28":1,"2024-07-27":4,"2024-07-25":2,"2024-07-22":4,"2024-07-21":1,"2024-07-19":2,"2024-07-17":2,"2024-07-16":1,"2024-07-15":4,"2024-07-14":4,"2024-07-13":2,"2024-07-12":1,"2024-07-11":3,"2024-07-10":3,"2024-07-09":4,"2024-07-08":2,"2024-07-07":2,"2024-07-06":4,"2024-07-05":3,"2024-07-03":4,"2024-06-30":4,"2024-06-26":2,"2024-06-25":1,"2024-06-24":2,"2024-06-22":3,"2024-06-19":4,"2024-06-18":2,"2024-06-17":1,"2024-06-14":4,"2024-06-13":4,"2024-06-12":1,"2024-06-11":2,"2024-06-10":1,"2024-06-08":4,"2024-06-06":2,"2024-06-04":2,"2024-06-03":1,"2024-06-01":2,"2024-05-31":1,"2024-05-30":3,"2024-05-26":4,"2024-05-23":3,"2024-05-22":1,"2024-05-21":4,"2024-05-18":4,"2024-05-16":4,"2024-05-14":2,"2024-05-10":1,"2024-05-08":3,"2024-05-07":2,"2024-05-03":2,"2024-05-02":4,"2024-04-30":3,"2024-04-29":1,"2024-04-28":4,"2024-04-26":1,"2024-04-22":1,"2024-04-21":4,"2024-04-20":2,"2024-04-19":2,"2024-04-17":1,"2024-04-16":3,"2024-04-15":4,"2024-04-14":3,"2024-04-13":4,"2024-04-12":3,"2024-04-11":2,"2024-04-10":3,"2024-04-08":4,"2024-04-05":1,"2024-04-03":4,"2024-03-31":1,"2024-03-30":2,"2024-03-29":1,"2024-03-28":1,"2024-03-27":3,"2024-03-26":1,"2024-03-24":4,"2024-03-20":1,"2024-03-19":1,"2024-03-17":1,"2024-03-14":2,"2024-03-13":3,"2024-03-12":2,"2024-03-11":1,"2024-03-09":3,"2024-03-06":1,"2024-03-03":1,"2024-03-02":2,"2024-03-01":1,"2024-02-29":2,"2024-02-28":2,"2024-02-23":3,"2024-02-22":4,"2024-02-20":4,"2024-02-19":4,"2024-02-17":3,"2024-02-16":3},n=`export const data = ${JSON.stringify(a,null,2)};`;var r=e.i(391398);function o(e,t){if(!t)return e.map((e,t)=>({type:"column",month:new Date(e.find(e=>null!==e)).getUTCMonth(),weekIndex:t}));let a=[];e.forEach((e,t)=>{let n=e.map(e=>e?new Date(e).getUTCMonth():null),r=null,o=null;for(let e=0;e<n.length;e+=1)if(null!==n[e]){if(null===r)r=n[e];else if(n[e]!==r){o=e;break}}if(null!==r)if(null===o)a.push({type:"column",month:r,weekIndex:t});else{let e=null;for(let t=o;t<n.length;t+=1)if(null!==n[t]){e=n[t];break}null===e?a.push({type:"column",month:r,weekIndex:t}):(a.push({type:"column",month:r,weekIndex:t}),a.push({type:"column",month:e,weekIndex:t}))}});let n=[];for(let e=0;e<a.length;e+=1)e>0&&a[e].month!==a[e-1].month&&n.push({type:"spacer"}),n.push(a[e]);return n}function s(e,t){return new Date(e.getTime()+864e5*t)}function i(e){if("string"==typeof e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t)return new Date(Date.UTC(Number(t[1]),Number(t[2])-1,Number(t[3])));let a=new Date(e);return new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))}return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}function l({value:e,min:t,max:a,colors:n}){return n[Math.round((n.length-1)*(a===t?1:(e-t)/(a-t)))]}function d({data:e,datesRange:t,rectSize:a,gap:n,rectRadius:s,min:i,max:c,colors:u,withTooltip:h,setHoveredRect:m,getRectProps:p,getStyles:f}){let g=a+n;return(0,r.jsx)(r.Fragment,{children:o(t,!0).map((o,d)=>{if("spacer"===o.type)return(0,r.jsx)("g",{transform:`translate(${d*g}, 0)`},`spacer-${d}`);let x=t[o.weekIndex].map((t,d)=>{if(!t||new Date(t).getUTCMonth()!==o.month)return null;let x=t in e&&null!==e[t],y=x?e[t]:null;return(0,r.jsx)("rect",{width:a,height:a,x:n,y:d*g+n,rx:s,"data-empty":!x||void 0,fill:x?l({value:e[t],min:i,max:c,colors:u}):void 0,onPointerEnter:h?()=>m({date:t,value:y}):void 0,...p?.({date:t,value:y}),...f("rect")},`${t}-${o.month}`)});return(0,r.jsx)("g",{transform:`translate(${d*g}, 0)`,"data-id":"week",children:x},`col-${o.weekIndex}-${o.month}-${d}`)})})}function c({data:e,datesRange:t,rectSize:a,gap:n,rectRadius:o,min:s,max:i,colors:d,withTooltip:u,setHoveredRect:h,getRectProps:m,getStyles:p}){let f=a+n;return(0,r.jsx)(r.Fragment,{children:t.map((t,c)=>{let g=t.map((t,c)=>{if(!t)return null;let g=t in e&&null!==e[t],x=g?e[t]:null;return(0,r.jsx)("rect",{width:a,height:a,x:n,y:c*f+n,rx:o,"data-empty":!g||void 0,fill:g?l({value:e[t],min:s,max:i,colors:d}):void 0,onPointerEnter:u?()=>h({date:t,value:x}):void 0,...m?.({date:t,value:x}),...p("rect")},t)});return(0,r.jsx)("g",{transform:`translate(${c*f}, 0)`,"data-id":"week",children:g},c)})})}var u={root:"m_2ef228c3",rect:"m_2ef201c5",monthLabel:"m_7e977775",weekdayLabel:"m_c4b68f8d",legendLabel:"m_75b4f3e6",legendRect:"m_da847eb2"},h=e.i(232471),m=e.i(431868),p=e.i(275519),f=e.i(44091),g=e.i(391466),x=e.i(191788);let y={monthLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdayLabels:["Sun","Mon","","Wed","","Fri",""],withOutsideDates:!0,firstDayOfWeek:1,rectSize:10,weekdaysLabelsWidth:30,monthsLabelsHeight:14,gap:1,rectRadius:2,fontSize:12,colors:["var(--heatmap-level-1)","var(--heatmap-level-2)","var(--heatmap-level-3)","var(--heatmap-level-4)"],legendLabels:["Less","More"]},D=(0,p.factory)(e=>{let t,a,n,l,p,D,w,b,v,j,$=(0,f.useProps)("Heatmap",y,e),{classNames:M,className:L,style:k,styles:H,unstyled:T,vars:S,data:N,startDate:_,endDate:O,withMonthLabels:C,withWeekdayLabels:W,weekdayLabels:Y,withOutsideDates:U,monthLabels:F,firstDayOfWeek:A,rectSize:P=10,gap:z=1,rectRadius:I,domain:R,colors:E,weekdaysLabelsWidth:V,monthsLabelsHeight:B,fontSize:J,getTooltipLabel:X,withTooltip:Z,tooltipProps:q,getRectProps:K,splitMonths:Q,withLegend:G,legendLabels:ee,attributes:et,...ea}=$,en=(0,g.useStyles)({name:"Heatmap",classes:u,props:$,className:L,style:k,classNames:M,styles:H,unstyled:T,attributes:et,vars:S}),[er,eo]=(0,x.useState)(null),es=P+z,ei=W?V:0,el=C?B:0,[ed,ec]=function({data:e,domain:t}){if(Array.isArray(t))return t;let a=Object.values(e);return[Math.min(...a),Math.max(...a)]}({data:N,domain:R}),eu=(0,x.useMemo)(()=>(function(e,t){let a=[...e];for(let e=0;e<t;e+=1)a.push(a.shift());return a})(Y,A),[Y,A]),eh=function({startDate:e,endDate:t,withOutsideDates:a=!0,firstDayOfWeek:n=1}={}){let r,o=new Date,l=new Date(o.getFullYear()-1,o.getMonth(),o.getDate()),d=e?i(e):i(l),c=t?i(t):i(o),u=function(e,t){let a=new Date(e);for(;a.getUTCDay()!==t;)a=s(a,-1);return a}(d,n),h=(r=c.getUTCDay(),s(c,6-(7*(r<n)+r-n))),m=[],p=u;for(;p<=h;){let e=Array.from({length:7},(e,t)=>{let n=s(p,t);return a||n>=d&&n<=c?`${n.getUTCFullYear()}-${String(n.getUTCMonth()+1).padStart(2,"0")}-${String(n.getUTCDate()).padStart(2,"0")}`:null});m.push(e),p=s(p,7)}return m}({startDate:_,endDate:O,withOutsideDates:U,firstDayOfWeek:A}),em=C||Q?(t=0,a=null,n=[],eh.forEach(e=>{let r=new Date(null===e[0]?e[e.length-1]:e[0]).getUTCMonth();a!==r&&(a=r,n.push({month:a,position:t,size:0})),n[n.length-1].size+=1,t+=1}),n):[],ep={data:N,datesRange:eh,rectSize:P,gap:z,rectRadius:I,min:ed,max:ec,colors:E,withTooltip:Z,setHoveredRect:eo,getRectProps:K,getStyles:en},ef=Q?(0,r.jsx)(d,{...ep}):(0,r.jsx)(c,{...ep}),eg=Q?o(eh,Q).length:eh.length,ex=C&&F?em.map((e,t)=>{let a=Q?2:3;if(e.size<a)return null;let n=F[e.month];return(0,r.jsx)("text",{x:((e,t)=>{if(!Q)return e*es+z+ei;let a=em[t],n=function(e,t){for(let a=0;a<e.length;a+=1){let n=e[a];if("column"===n.type&&n.month===t)return a}return -1}(o(eh,Q),a.month);return((n>=0?n:e)+1)*es+z+ei})(e.position,t),y:B-4,width:e.size*es,fontSize:J,...en("monthLabel"),children:n},t)}):null,ey=W&&Y?eu.map((e,t)=>(0,r.jsx)("text",{x:0,y:(t+1)*es-z+el,width:V,fontSize:J,...en("weekdayLabel"),children:e},t)):null,eD=X&&er&&Z?X(er):null,ew=G?10+P:0,eb=es*eg+z+ei,ev=G?(l=ee[0],p=ee[1],D=.6*J,w=l.length*D,v=(b=[void 0,...E||[]]).length*P+(b.length-1)*z,j=p.length*D,(0,r.jsxs)("g",{transform:`translate(${eb-(w+6+v+6+j)}, ${7*es+z+el+10})`,"data-id":"legend",...en("legend"),children:[(0,r.jsx)("text",{x:0,y:P/2,fontSize:J,dominantBaseline:"central",...en("legendLabel"),children:l}),b.map((e,t)=>(0,r.jsx)("rect",{x:w+6+t*(P+z),y:0,width:P,height:P,rx:I,fill:e,"data-empty":void 0===e||void 0,...en("legendRect")},t)),(0,r.jsx)("text",{x:w+6+v+6,y:P/2,fontSize:J,dominantBaseline:"central",...en("legendLabel"),children:p})]})):null;return(0,r.jsxs)(h.Box,{component:"svg",width:eb,height:7*es+z+el+ew,...en("root"),...ea,children:[(0,r.jsx)(m.Tooltip.Floating,{label:eD,disabled:!Z||!eD,position:"top",...q,children:(0,r.jsxs)("g",{transform:`translate(${ei}, ${el})`,"data-id":"all-weeks",children:[Z&&(0,r.jsx)("rect",{fill:"transparent",width:es*eg+z,height:7*es+z}),ef]})}),ey,ex,ev]})});D.displayName="@mantine/charts/Heatmap",D.classes=u;let w={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},b={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},v={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,weekdayLabels:["Вс","Пн","","Ср","","Пт",""],monthLabels:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['Вс', 'Пн', '', 'Ср', '', 'Пт', '']}
      monthLabels={[
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},j={type:"configurator",component:function(e){return(0,r.jsx)(D,{data:a,withMonthLabels:!0,withWeekdayLabels:!0,startDate:"2024-02-16",endDate:"2024-04-16",...e})},code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {{props}}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"rectSize",min:6,max:20,initialValue:10,libraryValue:"__"},{type:"number",prop:"rectRadius",min:0,max:20,initialValue:2,libraryValue:"__"},{type:"number",prop:"gap",min:0,max:5,initialValue:1,libraryValue:"__"}]};var $=e.i(494834);let M={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16",withTooltip:!0,withWeekdayLabels:!0,withMonthLabels:!0,getTooltipLabel:({date:e,value:t})=>`${(0,$.default)(e).format("DD MMM, YYYY")} – ${null===t||0===t?"No contributions":`${t} contribution${t>1?"s":""}`}`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        \`\${dayjs(date).format('DD MMM, YYYY')} – \${value === null || value === 0 ? 'No contributions' : \`\${value} contribution\${value > 1 ? 's' : ''}\`}\`
      }
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},L={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2024-04-16",withOutsideDates:!1,withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},k={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2024-04-26",withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,firstDayOfWeek:0,weekdayLabels:["","Mon","","Wed","","Fri",""],getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},H={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16",getRectProps:({date:e,value:t})=>({onClick:()=>console.log({date:e,value:t})})})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},T={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16",colors:["var(--mantine-color-orange-4)","var(--mantine-color-orange-6)","var(--mantine-color-orange-7)","var(--mantine-color-orange-9)"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]};var S={root:"m_2b796525"};let N={type:"code",component:function(){return(0,r.jsx)(D,{classNames:S,data:a,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}`,language:"scss"},{fileName:"data.ts",code:n,language:"tsx"}]},_={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,splitMonths:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      splitMonths
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},O={type:"code",component:function(){return(0,r.jsx)(D,{data:a,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,withLegend:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      withLegend
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]};var C=(0,t.__exportAll)({colors:()=>T,cssColors:()=>N,firstDayOfWeek:()=>k,getRectProps:()=>H,labels:()=>b,labelsText:()=>v,legend:()=>O,rectSize:()=>j,splitMonths:()=>_,tooltip:()=>M,usage:()=>w,withOutsideDates:()=>L});e.s(["HeatmapDemos",0,C],3214)},818784,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(3214);e.i(603441);var r=e.i(62558);e.i(457450);var o=e.i(418026);let s=(0,r.Layout)(o.MDX_DATA.Heatmap);function i(e){let r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.useMDXComponents)(),...e.components},{Demo:o}=r;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Heatmap"})," is used to display data in a table where each column represents a week.\nThe only required prop is ",(0,t.jsx)(r.code,{children:"data"})," – an object where keys are dates in ",(0,t.jsx)(r.code,{children:"YYYY-MM-DD"})," format and values are numbers."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"startDate"})," and ",(0,t.jsx)(r.code,{children:"endDate"})," props are optional; they are used to define the heatmap range.\nIf not set, the heatmap will display data for the last year."]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.usage}),"\n",(0,t.jsx)(r.h2,{id:"data-format",children:"Data format"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Heatmap"})," expects data in the following format:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"export const data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n  '2025-02-03': 2,\n  '2025-02-01': 2,\n  '2025-01-31': 4,\n  '2025-01-30': 2,\n  // ...\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"withTooltip"})," and ",(0,t.jsx)(r.code,{children:"getTooltipLabel"})," props to display a tooltip when\n",(0,t.jsx)(r.code,{children:"Heatmap"})," cells are hovered. ",(0,t.jsx)(r.code,{children:"getTooltipLabel"})," is called with date and value\nand must return a string to display in the tooltip."]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.tooltip}),"\n",(0,t.jsx)(r.h2,{id:"change-colors",children:"Change colors"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Heatmap"})," colors can be changed with the ",(0,t.jsx)(r.code,{children:"colors"})," prop. It should be an array of any\nvalid CSS color values (hex, rgba, CSS variables, etc.). By default, ",(0,t.jsx)(r.code,{children:"Heatmap"}),"\nuses 4 colors to indicate heat level, but you can pass any number of colors."]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.colors}),"\n",(0,t.jsx)(r.h2,{id:"colors-depending-on-color-scheme",children:"Colors depending on color scheme"}),"\n",(0,t.jsxs)(r.p,{children:["If you want to change colors depending on the color scheme,\nyou should define those colors in ",(0,t.jsx)(r.code,{children:".css"})," file:"]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.cssColors}),"\n",(0,t.jsxs)(r.p,{children:["Note that in this case, you can only use 4 colors without passing the ",(0,t.jsx)(r.code,{children:"colors"})," prop.\nIf you need more colors, you should pass them manually to the component:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Heatmap } from '@mantine/charts';\nimport { data } from './data';\nimport classes from './Demo.module.css';\n\nfunction Demo() {\n  return (\n    <Heatmap\n      data={data}\n      startDate=\"2024-02-16\"\n      endDate=\"2025-02-16\"\n      classNames={classes}\n      colors={[\n        'var(--heatmap-level-1)',\n        'var(--heatmap-level-2)',\n        'var(--heatmap-level-3)',\n        'var(--heatmap-level-4)',\n        'var(--heatmap-level-5)',\n        'var(--heatmap-level-6)',\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"values-domain",children:"Values domain"}),"\n",(0,t.jsxs)(r.p,{children:["By default, ",(0,t.jsx)(r.code,{children:"Heatmap"})," calculates domain based on data values, for example, for\nthe following data, the domain will be ",(0,t.jsx)(r.code,{children:"[1, 4]"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"const data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Based on the domain, ",(0,t.jsx)(r.code,{children:"Heatmap"})," calculates colors for each rect: 1 – min heat level,\n4 – max heat level. To specify the domain manually, use the ",(0,t.jsx)(r.code,{children:"domain"})," prop. It is useful\nwhen your data does not cover the whole range of possible values. For example,\nthe subset of data passed to the heatmap has values from 1 to 4, but the actual\nrange is from 1 to 10. In this case, you can pass ",(0,t.jsx)(r.code,{children:"[1, 10]"})," to the ",(0,t.jsx)(r.code,{children:"domain"})," prop:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Heatmap } from '@mantine/charts';\n\nconst data = {\n  '2025-02-14': 2,\n  '2025-02-11': 3,\n  '2025-02-06': 4,\n  '2025-02-05': 1,\n};\n\nfunction Demo() {\n  return <Heatmap data={data} domain={[1, 10]} />;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"weekdays-and-months-labels",children:"Weekdays and months labels"}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"withMonthLabels"})," and ",(0,t.jsx)(r.code,{children:"withWeekdayLabels"})," props to display chart labels:"]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.labels}),"\n",(0,t.jsx)(r.h2,{id:"change-labels-text",children:"Change labels text"}),"\n",(0,t.jsxs)(r.p,{children:["To change labels, use the ",(0,t.jsx)(r.code,{children:"weekdayLabels"})," and ",(0,t.jsx)(r.code,{children:"monthLabels"})," props.\nThe ",(0,t.jsx)(r.code,{children:"weekdayLabels"})," prop must be an array of 7 strings with weekday names starting from Sunday.\nThe ",(0,t.jsx)(r.code,{children:"monthLabels"})," prop must be an array of 12 strings with month names starting from January."]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.labelsText}),"\n",(0,t.jsx)(r.h2,{id:"rect-size-gap-and-radius",children:"Rect size, gap and radius"}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.rectSize}),"\n",(0,t.jsx)(r.h2,{id:"pass-props-to-rect",children:"Pass props to rect"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"getRectProps"})," to pass props to each rect. For example,\nit can be used to add an onClick handler to each rect:"]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.getRectProps}),"\n",(0,t.jsx)(r.h2,{id:"hide-outside-dates",children:"Hide outside dates"}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.withOutsideDates}),"\n",(0,t.jsx)(r.h2,{id:"first-day-of-week",children:"First day of week"}),"\n",(0,t.jsxs)(r.p,{children:["The default first day of the week is Monday; you can change it with the ",(0,t.jsx)(r.code,{children:"firstDayOfWeek"})," prop:"]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.firstDayOfWeek}),"\n",(0,t.jsx)(r.h2,{id:"legend",children:"Legend"}),"\n",(0,t.jsxs)(r.p,{children:["Set ",(0,t.jsx)(r.code,{children:"withLegend"})," to display a color legend below the heatmap. Use ",(0,t.jsx)(r.code,{children:"legendLabels"}),"\nprop to customize the labels (default: ",(0,t.jsx)(r.code,{children:"['Less', 'More']"}),"):"]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.legend}),"\n",(0,t.jsx)(r.h2,{id:"split-months",children:"Split months"}),"\n",(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.code,{children:"splitMonths"})," to separate months visually with a spacer column and show only days that belong to the current month in each column. Month labels will be shifted by one column when ",(0,t.jsx)(r.code,{children:"splitMonths"})," is enabled and months with fewer than 2 weeks are not labeled."]}),"\n",(0,t.jsx)(o,{data:n.HeatmapDemos.splitMonths})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})})}])},506897,(e,t,a)=>{let n="/charts/heatmap";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(818784)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);