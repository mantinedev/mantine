(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,a={}){let[r,n]=(0,t.useState)(e),s=(0,t.useCallback)(()=>{n(e=>e||(a.onOpen?.(),!0))},[a.onOpen]),i=(0,t.useCallback)(()=>{n(e=>e?(a.onClose?.(),!1):e)},[a.onClose]);return[r,{open:s,close:i,toggle:(0,t.useCallback)(()=>{r?i():s()},[i,s,r]),set:n}]}])},462138,e=>{"use strict";var t=e.i(779177),a=e.i(391398);function r({style:e,size:n=16,...s}){return(0,a.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(n),height:(0,t.rem)(n),display:"block"},...s,children:(0,a.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}r.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,r])},494834,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",r="hour",n="week",s="month",i="quarter",o="year",d="date",l="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,a){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(a)+e},h="en",m={};m[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var y="$isDayjsObject",Y=function(e){return e instanceof p||!(!e||!e[y])},D=function e(t,a,r){var n;if(!t)return h;if("string"==typeof t){var s=t.toLowerCase();m[s]&&(n=s),a&&(m[s]=a,n=s);var i=t.split("-");if(!n&&i.length>1)return e(i[0])}else{var o=t.name;m[o]=t,n=o}return!r&&n&&(h=n),n||!r&&h},v=function(e,t){if(Y(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new p(a)},w={s:f,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(a/60),2,"0")+":"+f(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var r=12*(a.year()-t.year())+(a.month()-t.month()),n=t.clone().add(r,s),i=a-n<0,o=t.clone().add(r+(i?-1:1),s);return+(-(r+(a-n)/(i?n-o:o-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:s,y:o,w:n,d:"day",D:d,h:r,m:a,s:t,ms:e,Q:i})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};w.l=D,w.i=Y,w.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var p=function(){function f(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(u);if(r){var n=r[2]-1||0,s=(r[7]||"0").substring(0,3);return a?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return w},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(e,t){var a=v(e);return this.startOf(t)<=a&&a<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,a){return w.u(e)?this[t]:this.set(a,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,i){var l=this,u=!!w.u(i)||i,c=w.p(e),f=function(e,t){var a=w.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return u?a:a.endOf("day")},h=function(e,t){return w.w(l.toDate()[e].apply(l.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,y=this.$M,Y=this.$D,D="set"+(this.$u?"UTC":"");switch(c){case o:return u?f(1,0):f(31,11);case s:return u?f(1,y):f(0,y+1);case n:var v=this.$locale().weekStart||0,p=(m<v?m+7:m)-v;return f(u?Y-p:Y+(6-p),y);case"day":case d:return h(D+"Hours",0);case r:return h(D+"Minutes",1);case a:return h(D+"Seconds",2);case t:return h(D+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(n,i){var l,u=w.p(n),c="set"+(this.$u?"UTC":""),f=((l={}).day=c+"Date",l[d]=c+"Date",l[s]=c+"Month",l[o]=c+"FullYear",l[r]=c+"Hours",l[a]=c+"Minutes",l[t]=c+"Seconds",l[e]=c+"Milliseconds",l)[u],h="day"===u?this.$D+(i-this.$W):i;if(u===s||u===o){var m=this.clone().set(d,1);m.$d[f](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[w.p(e)]()},h.add=function(e,i){var d,l=this;e=Number(e);var u=w.p(i),c=function(t){var a=v(l);return w.w(a.date(a.date()+Math.round(t*e)),l)};if(u===s)return this.set(s,this.$M+e);if(u===o)return this.set(o,this.$y+e);if("day"===u)return c(1);if(u===n)return c(7);var f=((d={})[a]=6e4,d[r]=36e5,d[t]=1e3,d)[u]||1,h=this.$d.getTime()+e*f;return w.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||l;var r=e||"YYYY-MM-DDTHH:mm:ssZ",n=w.z(this),s=this.$H,i=this.$m,o=this.$M,d=a.weekdays,u=a.months,f=a.meridiem,h=function(e,a,n,s){return e&&(e[a]||e(t,r))||n[a].slice(0,s)},m=function(e){return w.s(s%12||12,e,"0")},y=f||function(e,t,a){var r=e<12?"AM":"PM";return a?r.toLowerCase():r};return r.replace(c,function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return h(a.monthsShort,o,u,3);case"MMMM":return h(u,o);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(a.weekdaysMin,t.$W,d,2);case"ddd":return h(a.weekdaysShort,t.$W,d,3);case"dddd":return d[t.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return y(s,i,!0);case"A":return y(s,i,!1);case"m":return String(i);case"mm":return w.s(i,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,d,l){var u,c=this,f=w.p(d),h=v(e),m=(h.utcOffset()-this.utcOffset())*6e4,y=this-h,Y=function(){return w.m(c,h)};switch(f){case o:u=Y()/12;break;case s:u=Y();break;case i:u=Y()/3;break;case n:u=(y-m)/6048e5;break;case"day":u=(y-m)/864e5;break;case r:u=y/36e5;break;case a:u=y/6e4;break;case t:u=y/1e3;break;default:u=y}return l?u:w.a(u)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return m[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),r=D(e,t,!0);return r&&(a.$L=r),a},h.clone=function(){return w.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),g=p.prototype;return v.prototype=g,[["$ms",e],["$s",t],["$m",a],["$H",r],["$W","day"],["$M",s],["$y",o],["$D",d]].forEach(function(e){g[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,p,v),e.$i=!0),v},v.locale=D,v.isDayjs=Y,v.unix=function(e){return v(1e3*e)},v.en=m[h],v.Ls=m,v.p={},v}()},205693,135140,e=>{"use strict";var t=e.i(191788),a=e.i(391398);let r={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},n=(0,t.createContext)(r);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,a.jsx)(n,{value:{...r,...e},children:t})},"DatesProviderContext",0,n],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(n),a=(0,t.useCallback)(t=>t||e.locale,[e.locale]),r=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),s=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),i=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:a,getFirstDayOfWeek:r,getWeekendDays:s,getLabelSeparator:i}}],205693)},604363,(e,t,a)=>{e.e,t.exports=function(e,t,a){var r=function(e){return e.add(4-e.isoWeekday(),"day")},n=t.prototype;n.isoWeekYear=function(){return r(this).year()},n.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,n,s,i=r(this),o=(t=this.isoWeekYear(),s=4-(n=(this.$u?a.utc:a)().year(t).startOf("year")).isoWeekday(),n.isoWeekday()>4&&(s+=7),n.add(s,"day"));return i.diff(o,"week")+1},n.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var s=n.startOf;n.startOf=function(e,t){var a=this.$utils(),r=!!a.u(t)||t;return"isoweek"===a.p(e)?r?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(e,t)}}},966696,428127,e=>{"use strict";var t=e.i(86473),a={header:"m_9d44fc56",navigationGroup:"m_21150122",todayControl:"m_7a42c1e5",viewSelect:"m_5998194a",compactViewSelect:"m_feecf21b"},r=e.i(191788);let n=(0,r.createContext)(void 0);function s(e){let t=(0,r.useContext)(n);return e?t?{...t,...e}:e:t}n.displayName="@mantine/schedule/ScheduleHeaderLabelsContext";var i={headerControl:"m_b366a0f3"},o=e.i(462138),d=e.i(284629),l=e.i(481178),u=e.i(275519),c=e.i(433512),f=e.i(323283),h=e.i(44091),m=e.i(391466),y=e.i(391398);let Y={__staticSelector:"HeaderControl",interactive:!0},D=(0,l.createVarsResolver)((e,{radius:t})=>({headerControl:{"--control-radius":void 0===t?void 0:(0,c.getRadius)(t)}})),v=(0,u.factory)(e=>{let t=(0,h.useProps)("HeaderControl",Y,e),{classNames:a,className:r,style:n,styles:s,unstyled:o,vars:l,__staticSelector:u,mod:c,attributes:f,active:v,square:w,radius:p,interactive:g,labels:M,...x}=t;return(0,y.jsx)(d.UnstyledButton,{...(0,m.useStyles)({name:u,classes:i,props:t,className:r,style:n,classNames:a,styles:s,unstyled:o,attributes:f,vars:l,varsResolver:D,rootSelector:"headerControl"})("headerControl",{active:g}),mod:[{active:v,square:w,interactive:g},c],tabIndex:g?void 0:-1,...x})});function w(e){let{dir:a}=(0,f.useDirection)();return(0,y.jsx)(v,{"data-type":"next","aria-label":(0,t.getLabel)("next",s(e.labels)),square:!0,...e,children:(0,y.jsx)(o.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?90:-90}deg)`}})})}function p(e){let{dir:a}=(0,f.useDirection)();return(0,y.jsx)(v,{"data-type":"previous","aria-label":(0,t.getLabel)("previous",s(e.labels)),square:!0,...e,children:(0,y.jsx)(o.AccordionChevron,{style:{transform:`rotate(${"rtl"===a?-90:90}deg)`}})})}function g(e){let a=s(e.labels);return(0,y.jsx)(v,{"data-type":"today","aria-label":(0,t.getLabel)("today",a),...e,children:(0,t.getLabel)("today",a)})}v.displayName="@mantine/schedule/HeaderControl",v.classes=i,v.varsResolver=D,w.displayName="@mantine/schedule/ScheduleHeaderNext",p.displayName="@mantine/schedule/ScheduleHeaderPrevious",g.displayName="@mantine/schedule/ScheduleHeaderToday";var M=e.i(27748),x=e.i(494834),S={monthYearSelectTarget:"m_9d235876",monthYearSelectList:"m_673e0cc3",monthYearSelectDropdown:"m_e24605b6",monthYearSelectLabel:"m_807fa76f",monthYearSelectControl:"m_9baf5b18"},k=e.i(392862),$=e.i(654486),b=e.i(541772),V=e.i(205693);let C={__staticSelector:"MonthYearSelect",withMonths:!0},j=(0,l.createVarsResolver)((e,{radius:t})=>({monthYearSelectDropdown:{"--control-radius":void 0===t?void 0:(0,c.getRadius)(t)}})),O=(0,u.factory)(e=>{let a=(0,h.useProps)("MonthYearSelect",C,e),{__staticSelector:r,classNames:n,className:i,style:o,styles:l,unstyled:u,vars:c,attributes:f,popoverProps:Y,startYear:D,endYear:w,onYearChange:p,onMonthChange:g,locale:O,monthsListFormat:H,monthValue:W,yearValue:I,labelFormat:N,radius:_,getMonthControlProps:L,getYearControlProps:A,withMonths:T,id:E,labels:R,...P}=a,F=(0,m.useStyles)({name:r,classes:S,props:a,className:i,style:o,classNames:n,styles:l,unstyled:u,attributes:f,vars:c,varsResolver:j,rootSelector:"monthYearSelectTarget"}),[B,U]=(0,b.useDisclosure)(!1),K=s(R),z=new Date,Z=(0,V.useDatesContext)(),J=D??z.getFullYear()-5,q=w??z.getFullYear()+5,Q=void 0!==I&&I>=J&&I<=q,G=(function({startYear:e,endYear:t}){let a=[];for(let r=e;r<=t;r++)a.push(r);return a})({startYear:J,endYear:q}).map((e,a)=>{let r=A?.(e);return(0,y.jsx)(d.UnstyledButton,{onClick:()=>{p?.(e),T||U.close()},mod:{type:"year",active:e===I},"aria-label":`${(0,t.getLabel)("selectYear",K)} ${e}`,tabIndex:Q?e===I?0:-1:0===a?0:-1,...r,onKeyDown:(0,$.createScopedKeydownHandler)({siblingSelector:'[data-type="year"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:r?.onKeyDown}),...F("monthYearSelectControl",{className:r?.className,style:r?.style}),children:e},e)}),X=T?(function({locale:e,format:t}){let a=[],r=(0,x.default)().locale(e).startOf("year");for(let n=0;n<12;n++)a.push({month:n,name:(0,M.formatDate)({date:r.add(n,"month"),format:t,locale:e})});return a})({locale:Z.getLocale(O),format:H||"MMMM"}).map(e=>{let a=L?.(e.month);return(0,y.jsx)(d.UnstyledButton,{onClick:()=>g?.(e.month),mod:{type:"month",active:e.month===W},tabIndex:e.month===W?0:-1,onKeyDown:(0,$.createScopedKeydownHandler)({siblingSelector:'[data-type="month"]:not(:disabled)',parentSelector:"[data-list]",activateOnFocus:!1,loop:!0,orientation:"vertical",onKeyDown:a?.onKeyDown}),...a,...F("monthYearSelectControl",{className:a?.className,style:a?.style}),"aria-label":`${(0,t.getLabel)("selectMonth",K)} ${e.name}`,children:e.name},e.name)}):null;return(0,y.jsxs)(k.Popover,{position:"bottom-start",__staticSelector:r,trapFocus:!0,transitionProps:{transition:"pop",duration:120},radius:_||"var(--schedule-radius, var(--mantine-radius-default))",shadow:"md",offset:3,width:T?void 0:"target",opened:B,onChange:U.set,id:E,...Y,children:[(0,y.jsx)(k.Popover.Target,{children:(0,y.jsx)(v,{...F("monthYearSelectTarget"),__staticSelector:r,radius:_,"data-with-months":T||void 0,onClick:U.toggle,...P,children:(0,M.formatDate)({locale:Z.getLocale(O),date:new Date(I??z.getFullYear(),W??z.getMonth()),format:N||(T?"MMMM YYYY":"YYYY")})})}),(0,y.jsxs)(k.Popover.Dropdown,{"data-with-months":T||void 0,...F("monthYearSelectDropdown"),children:[T&&(0,y.jsxs)("div",{"data-list":!0,...F("monthYearSelectList"),children:[(0,y.jsx)("div",{...F("monthYearSelectLabel"),children:(0,t.getLabel)("month",K)}),X]}),(0,y.jsxs)("div",{"data-list":!0,...F("monthYearSelectList"),children:[T&&(0,y.jsx)("div",{...F("monthYearSelectLabel"),children:(0,t.getLabel)("year",K)}),G]})]})]})});O.displayName="@mantine/schedule/MonthYearSelect",O.classes=S,O.varsResolver=j;var H={viewSelect:"m_e106e12d"},W=e.i(232471),I=e.i(62904);let N={__staticSelector:"ViewSelect",views:["day","week","month","year"]},_=(0,u.factory)(e=>{let a=(0,h.useProps)("ViewSelect",N,e),{classNames:n,className:i,style:o,styles:d,unstyled:l,vars:u,attributes:c,value:Y,onChange:D,views:w,__staticSelector:p,radius:g,labels:M,...x}=a,S=(0,m.useStyles)({name:p,classes:H,props:a,className:i,style:o,classNames:n,styles:d,unstyled:l,attributes:c,vars:u,rootSelector:"viewSelect"}),k=s(M),{resolvedClassNames:$,resolvedStyles:b}=(0,I.useResolvedStylesApi)({classNames:n,styles:d,props:a}),{dir:V}=(0,f.useDirection)(),C=(0,r.useRef)([]),j=(0,r.useRef)(!1);(0,r.useEffect)(()=>{if(j.current&&document.activeElement===document.body){let e=w.findIndex(e=>e===Y);-1!==e&&C.current[e]?.focus()}j.current=!1},[]);let O={day:"switchToDayView",week:"switchToWeekView",month:"switchToMonthView",year:"switchToYearView"},_=w.map((e,a)=>{let r=Y===e;return(0,y.jsx)(v,{ref:e=>{C.current[a]=e},"data-type":e,active:r,onClick:()=>D?.(e),onKeyDown:e=>((e,t)=>{let a="rtl"===V;if(e.key===(a?"ArrowLeft":"ArrowRight")){e.preventDefault();let a=t<w.length-1?t+1:0;C.current[a]?.focus()}else if(e.key===(a?"ArrowRight":"ArrowLeft")){e.preventDefault();let a=t>0?t-1:w.length-1;C.current[a]?.focus()}else"Home"===e.key?(e.preventDefault(),C.current[0]?.focus()):"End"===e.key?(e.preventDefault(),C.current[w.length-1]?.focus()):("Enter"===e.key||" "===e.key)&&(j.current=!0)})(e,a),classNames:$,styles:b,__staticSelector:p,radius:g,role:"tab","aria-label":(0,t.getLabel)(O[e],k),"aria-selected":r,tabIndex:r?0:-1,children:(0,t.getLabel)(e,k)},e)});return(0,y.jsx)(W.Box,{...S("viewSelect"),role:"tablist","aria-label":(0,t.getLabel)("viewSelectLabel",k),...x,children:_})});_.displayName="@mantine/schedule/ViewSelect",_.classes=H;let L={__staticSelector:"ScheduleHeader"},A=(0,l.createVarsResolver)(()=>({scheduleHeader:{"--test":"test"}})),T=(0,u.factory)(e=>{let t=(0,h.useProps)("ScheduleHeader",L,e),{classNames:r,className:s,style:i,styles:o,unstyled:d,vars:l,attributes:u,__staticSelector:c,labels:f,...Y}=t,D=(0,m.useStyles)({name:c,classes:a,props:t,className:s,style:i,classNames:r,styles:o,unstyled:d,vars:l,varsResolver:A,attributes:u,rootSelector:"header"});return(0,y.jsx)(n.Provider,{value:f,children:(0,y.jsx)(W.Box,{...D("header"),...Y})})});T.displayName="@mantine/schedule/ScheduleHeader",T.classes=a,T.varsResolver=A,T.Control=v,T.Next=w,T.Previous=p,T.Today=g,T.ViewSelect=_,T.MonthYearSelect=O,e.s(["ScheduleHeader",0,T],428127);var E=e.i(856171);let R=["day","week","month","year"];e.s(["ScheduleHeaderBase",0,function({view:e,navigationHandlers:r,control:n,labels:s,onDateChange:i,onViewChange:o,previousControlProps:d,nextControlProps:l,todayControlProps:u,viewSelectProps:c,stylesApiProps:f}){let h=n.monthYearSelect?(0,y.jsx)(T.MonthYearSelect,{...f,labels:s,...n.monthYearSelect}):(0,y.jsx)(T.Control,{...f,interactive:!1,miw:n.miw,children:n.title}),m=(c?.views||R).map(e=>({value:e,label:(0,t.getLabel)(e,s)}));return(0,y.jsxs)(T,{...f,labels:s,children:[(0,y.jsxs)("div",{className:a.navigationGroup,children:[(0,y.jsx)(T.Previous,{...f,onClick:()=>i?.(r.previous()),labels:s,...d}),h,(0,y.jsx)(T.Next,{...f,onClick:()=>i?.(r.next()),labels:s,...l})]}),(0,y.jsx)("div",{className:a.todayControl,children:(0,y.jsx)(T.Today,{...f,onClick:()=>i?.(r.today()),labels:s,...u})}),(0,y.jsx)(E.NativeSelect,{className:a.compactViewSelect,data:m,value:e,onChange:e=>o?.(e.currentTarget.value),"aria-label":(0,t.getLabel)("viewSelectLabel",s),size:"sm"}),(0,y.jsx)("div",{className:a.viewSelect,style:{marginInlineStart:"auto"},children:(0,y.jsx)(T.ViewSelect,{value:e,onChange:o,labels:s,...f,...c})})]})}],966696)},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let r=(0,t.default)(e);for(;r.day()!==a;)r=r.subtract(1,"day");return r.format("YYYY-MM-DD")}])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:r=1,consistentWeeks:n}){let s=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),i=s.format("YYYY-MM-DD"),o=function(e,t=1){let r=(0,a.default)(e);if(!r.isValid())return r;let n=0===t?6:t-1;for(;r.day()!==n;)r=r.add(1,"day");return r.format("YYYY-MM-DD")}(s.add(s.daysInMonth()-1,"day").format("YYYY-MM-DD"),r),d=[],l=(0,a.default)((0,t.getStartOfWeek)({date:i,firstDayOfWeek:r}));for(;(0,a.default)(l).isBefore(o,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(l.format("YYYY-MM-DD 00:00:00")),l=l.add(1,"day");d.push(e)}if(n&&d.length<6){let e=d[d.length-1],t=e[e.length-1],r=(0,a.default)(t).add(1,"day");for(;d.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(r.format("YYYY-MM-DD 00:00:00")),r=r.add(1,"day");d.push(e)}}return d}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:r="dd",firstDayOfWeek:n=1}){let s=(0,a.default)().day(n),i=[];for(let a=0;a<7;a+=1)i.push((0,t.formatDate)({locale:e,date:s.add(a,"days"),format:r}));return i}])},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),r=e.i(494834),n=e.i(4332),s=e.i(657068),i=e.i(966696),o=e.i(298008),d=e.i(898770),l=e.i(27748),u=e.i(621304),c=e.i(855578),f=e.i(232471),h=e.i(284629),m=e.i(317477),y=e.i(951254),Y=e.i(191788),D=e.i(205693),v=e.i(391398);function w({month:e,getStyles:n,monthLabelFormat:s="MMMM",withWeekNumbers:i,withWeekDays:o,locale:d,firstDayOfWeek:p,weekdayFormat:g,weekendDays:M,getDayProps:x,onDayClick:S,onWeekNumberClick:k,onMonthClick:$,getWeekNumberProps:b,highlightToday:V,groupedEvents:C,mode:j,withOutsideDays:O,__getDayRef:H,__onDayKeyDown:W,firstDayIndex:I}){let N=(0,D.useDatesContext)(),_=(0,y.useMantineTheme)(),L=(0,r.default)(),A=o?(0,u.getWeekdaysNames)({locale:N.getLocale(d),format:g,firstDayOfWeek:N.getFirstDayOfWeek(p)}).map((e,t)=>(0,Y.createElement)("div",{...n("yearViewWeekday"),key:t},e)):null,T=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:N.getFirstDayOfWeek(p),consistentWeeks:!0}).map((t,s)=>{let o=t.map((t,i)=>{let o=!(0,a.isSameMonth)(t,e);if(o&&!O)return(0,Y.createElement)("div",{...n("yearViewDay"),"data-day-placeholder":!0,key:t});let l=N.getWeekendDays(M).includes((0,r.default)(t).day()),u=(0,r.default)(t).locale(d||N.locale).format("MMMM D, YYYY"),c=x?.((0,r.default)(t).format("YYYY-MM-DD"))||{},f=(0,r.default)(t).isSame(L,"day")&&V,y=C?.[(0,r.default)(t).format("YYYY-MM-DD")]||[],D=I&&s===I.weekIndex&&i===I.dayIndex,w="static"!==j&&!o&&D,p=y.slice(0,3).map(e=>(0,Y.createElement)("div",{...n("yearViewDayIndicator",{style:{backgroundColor:(0,m.getThemeColor)(e.color,_)}}),key:e.id}));return(0,Y.createElement)(h.UnstyledButton,{"aria-label":u,...c,...n("yearViewDay",{className:c.className,style:c.style}),key:t,mod:[{outside:o,weekend:l,today:f,static:"static"===j},c.mod],tabIndex:w?0:-1,ref:e=>{e&&H?.(s,i,e)},onKeyDown:e=>{c.onKeyDown?.(e),W?.(e,{weekIndex:s,dayIndex:i,date:t})},onClick:"static"===j?void 0:e=>{S?.((0,r.default)(t).format("YYYY-MM-DD"),e),c.onClick?.(e)}},(0,r.default)(t).format("D"),(0,v.jsx)("div",{...n("yearViewDayIndicators"),children:p}))}),l=b?.((0,r.default)(t[0]).format("YYYY-MM-DD"))||{},u=(0,c.getWeekNumber)(t);return(0,Y.createElement)("div",{...n("yearViewWeek"),key:s},i&&(0,v.jsx)(h.UnstyledButton,{"aria-label":`Week ${u}`,title:`Week ${u}`,...l,onClick:"static"===j?void 0:e=>{k?.((0,r.default)(t[0]).format("YYYY-MM-DD"),e),l.onClick?.(e)},mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...n("yearViewWeekNumber",{className:l.className,style:l.style}),children:u},u),o)});return(0,v.jsxs)(f.Box,{mod:[{"with-week-numbers":i,"with-weekdays":o,static:"static"===j}],...n("yearViewMonth"),children:[(0,v.jsx)(h.UnstyledButton,{onClick:"static"===j?void 0:t=>$?.((0,r.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...n("yearViewMonthCaption"),children:(0,l.formatDate)({locale:N.getLocale(d),date:e,format:s})}),A&&(0,v.jsxs)("div",{...n("yearViewWeekdays"),children:[i&&(0,v.jsx)("div",{...n("yearViewWeekdaysCorner")}),A]}),T]})}var p={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},g=e.i(481178),M=e.i(275519),x=e.i(433512),S=e.i(44091),k=e.i(62904),$=e.i(391466);let b={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},V=(0,g.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,x.getRadius)(t):void 0}})),C=(0,M.factory)(e=>{let l=(0,S.useProps)("YearView",b,e),{date:u,onDateChange:c,events:h,monthLabelFormat:m,withWeekNumbers:y,withWeekDays:g,locale:M,firstDayOfWeek:x,weekdayFormat:C,weekendDays:j,onMonthClick:O,onDayClick:H,onWeekNumberClick:W,getDayProps:I,getWeekNumberProps:N,highlightToday:_,labels:L,withOutsideDays:A,withHeader:T,monthYearSelectProps:E,onViewChange:R,previousControlProps:P,nextControlProps:F,todayControlProps:B,viewSelectProps:U,__staticSelector:K,classNames:z,className:Z,style:J,styles:q,unstyled:Q,vars:G,attributes:X,radius:ee,mode:et,recurrenceExpansionLimit:ea,...er}=l,en=(0,D.useDatesContext)(),es=(0,$.useStyles)({name:K,classes:p,props:l,className:Z,style:J,classNames:z,styles:q,unstyled:Q,vars:G,varsResolver:V,attributes:X,rootSelector:"yearView"}),{resolvedClassNames:ei,resolvedStyles:eo}=(0,k.useResolvedStylesApi)({classNames:z,styles:q,props:l}),ed=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let s of t)if((0,r.default)(s.start).isSame((0,r.default)(e),"year")){if(!function(e,t){if((0,d.isMultidayEvent)(e)){let a=(0,r.default)(e.start).startOf("day"),n=(0,r.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,r.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,o.validateEvent)(s),a),n.has(s.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${s.id}`);n.add(s.id)}return a}({date:u,events:(0,s.expandRecurringEvents)({events:h,rangeStart:(0,r.default)(u).startOf("year").toDate(),rangeEnd:(0,r.default)(u).endOf("year").toDate(),expansionLimit:ea})}),el=(0,Y.useRef)([]),eu=0,ec=(function(e){let t=(0,r.default)(e).startOf("year").toDate(),a=[[],[],[],[]],n=0;for(let e=0;e<4;e+=1)for(let s=0;s<3;s+=1)a[e].push((0,r.default)(t).add(n,"months").format("YYYY-MM-DD")),n+=1;return a})((0,r.default)(u).format("YYYY-MM-DD")).flat().map(e=>{let n=eu;return eu++,(0,v.jsx)(w,{month:e,getStyles:es,monthLabelFormat:m,withWeekNumbers:y,withWeekDays:g,locale:M,firstDayOfWeek:x,weekdayFormat:C||(e=>(0,r.default)(e).locale(en.getLocale(M)).format("dd").slice(0,1)),weekendDays:j,getDayProps:I,getWeekNumberProps:N,onMonthClick:O,onDayClick:H,onWeekNumberClick:W,highlightToday:_,groupedEvents:ed,mode:et,withOutsideDays:A,firstDayIndex:(e=>{let n=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:en.getFirstDayOfWeek(x),consistentWeeks:!0});for(let t=0;t<n.length;t++){let r=n[t];for(let n=0;n<r.length;n++){let s=r[n];if((0,a.isSameMonth)(s,e))return{weekIndex:t,dayIndex:n}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(el.current[n])||(el.current[n]=[]),Array.isArray(el.current[n][e])||(el.current[n][e]=[]),el.current[n][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:r,event:n}){let s=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(s){n.preventDefault();let i=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!i)return;!function e({controlsRef:t,direction:a,monthIndex:r,weekIndex:n,dayIndex:s,size:i}){let o=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:r,size:n}){let s=n[t];if(!s)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1,s=Math.min(r,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:s}}let e=Math.min(r,s[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===s.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(r,e[0]-1)}}let e=Math.min(r,s[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===r){if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:s[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:r-1};case"right":if(r===s[a]-1){if(a===s.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:r+1};default:return null}}({direction:a,monthIndex:r,weekIndex:n,dayIndex:s,size:i});if(!o)return;let d=t.current?.[o.monthIndex]?.[o.weekIndex]?.[o.dayIndex];d&&(d.disabled||d.getAttribute("data-hidden")||d.getAttribute("data-outside")||d.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:o.monthIndex,weekIndex:o.weekIndex,dayIndex:o.dayIndex,size:i}):d.focus())}({controlsRef:e,direction:s,monthIndex:t,weekIndex:a,dayIndex:r,size:i})}}({controlsRef:el,monthIndex:n,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,v.jsxs)(f.Box,{...es("yearView"),mod:{static:"static"===et},...er,children:[T&&(0,v.jsx)(i.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,n.toDateString)((0,r.default)(u).subtract(1,"year").startOf("year")),next:()=>(0,n.toDateString)((0,r.default)(u).add(1,"year").startOf("year")),today:()=>(0,n.toDateString)((0,r.default)())},control:{monthYearSelect:{locale:M,withMonths:!1,yearValue:(0,r.default)(u).get("year"),monthValue:(0,r.default)(u).get("month"),onYearChange:e=>c?.((0,n.toDateString)((0,r.default)(u).set("year",e).startOf("year"))),...E}},labels:L,onDateChange:c,onViewChange:R,previousControlProps:P,nextControlProps:F,todayControlProps:B,viewSelectProps:U,stylesApiProps:{classNames:ei,styles:eo,attributes:X,__staticSelector:K,radius:ee}}),(0,v.jsx)("div",{...es("yearViewMonths"),children:ec})]})});C.displayName="@mantine/schedule/YearView",C.classes=p,C.varsResolver=V,e.s(["YearView",0,C],122308)},408169,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let r=(0,a.default)().format("YYYY"),n=[{id:1,title:"New Year",start:`${r}-01-01 00:00:00`,end:(0,a.default)(`${r}-01-01`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"},{id:2,title:"Spring Event",start:`${r}-03-15 00:00:00`,end:(0,a.default)(`${r}-03-15`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:3,title:"Summer Conference",start:`${r}-07-20 00:00:00`,end:(0,a.default)(`${r}-07-20`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Fall Workshop",start:`${r}-10-10 00:00:00`,end:(0,a.default)(`${r}-10-10`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Year End Party",start:`${r}-12-25 00:00:00`,end:(0,a.default)(`${r}-12-25`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],s=`
import dayjs from 'dayjs';

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
];
`;var i=e.i(191788),o=e.i(391398),d=e.i(122308);let l={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,o.jsx)(d.YearView,{date:e,onDateChange:t,events:n})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},u={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,withWeekNumbers:!0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekNumbers />;
}
`},c={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,withWeekDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekDays={false} />;
}
`},f={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,withOutsideDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withOutsideDays={false} />;
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,firstDayOfWeek:0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`},m={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,weekdayFormat:"dd"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} weekdayFormat="dd" />;
}
`},y={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,highlightToday:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} highlightToday={false} />;
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,withHeader:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withHeader={false} />;
}
`},D={defaultExpanded:!1,type:"code",component:function(){return(0,o.jsx)(d.YearView,{date:new Date,events:n,mode:"static"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} mode="static" />;
}
`},v=(0,a.default)().year(),w=[{id:"yearly-series",title:"Monthly architecture review (series)",start:`${v}-01-10 09:00:00`,end:`${v}-01-10 10:00:00`,color:"blue",recurrence:{rrule:"FREQ=MONTHLY;COUNT=12",exdate:[`${v}-11-10 09:00:00`]}},{id:"yearly-series-override",title:"Monthly architecture review (moved in Nov)",start:`${v}-11-10 13:00:00`,end:`${v}-11-10 14:00:00`,color:"grape",recurringEventId:"yearly-series",recurrenceId:`${v}-11-10 09:00:00`},{id:"year-one-off",title:"One-off summit",start:`${v}-12-01 00:00:00`,end:`${v}-12-02 00:00:00`,color:"green"}],p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)(`${v}-01-01`);return(0,o.jsx)(d.YearView,{date:e,onDateChange:t,events:w,withWeekNumbers:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';

const year = dayjs().year();

const events = [
  {
    id: 'yearly-series',
    title: 'Monthly architecture review (series)',
    start: \`\${year}-01-10 09:00:00\`,
    end: \`\${year}-01-10 10:00:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=MONTHLY;COUNT=12',
      exdate: [\`\${year}-11-10 09:00:00\`],
    },
  },
  {
    id: 'yearly-series-override',
    title: 'Monthly architecture review (moved in Nov)',
    start: \`\${year}-11-10 13:00:00\`,
    end: \`\${year}-11-10 14:00:00\`,
    color: 'grape',
    recurringEventId: 'yearly-series',
    recurrenceId: \`\${year}-11-10 09:00:00\`,
  },
];

function Demo() {
  const [date, setDate] = useState(\`\${year}-01-01\`);
  return <YearView date={date} onDateChange={setDate} events={events} withWeekNumbers />;
}
`};var g=e.i(428127);let M={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,o.jsxs)("div",{children:[(0,o.jsxs)(g.ScheduleHeader,{children:[(0,o.jsx)(g.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,o.jsx)(g.ScheduleHeader.MonthYearSelect,{withMonths:!1,yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:r=>t((0,a.default)(e).year(r).startOf("year").format("YYYY-MM-DD"))}),(0,o.jsx)(g.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,o.jsx)(g.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,o.jsx)(g.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,o.jsx)(d.YearView,{date:e,onDateChange:t,events:n,withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ScheduleHeader, YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          withMonths={false}
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Today
          onClick={() =>
            setDate(
              dayjs().format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <YearView
        date={date}
        onDateChange={setDate}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let x={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,o.jsx)(d.YearView,{date:e,onDateChange:t,events:n,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
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
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var S=(0,t.__exportAll)({customHeader:()=>M,firstDayOfWeek:()=>h,highlightToday:()=>y,localization:()=>x,recurringEvents:()=>p,staticMode:()=>D,usage:()=>l,weekdayFormat:()=>m,withOutsideDays:()=>f,withWeekNumbers:()=>u,withoutHeader:()=>Y,withoutWeekDays:()=>c});e.s(["YearViewDemos",0,S],408169)}]);