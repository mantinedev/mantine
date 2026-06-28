(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var d in e)t(n,d,{get:e[d],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(317477),d=e.i(44091),r=e.i(391466),o=e.i(956449),s=e.i(232471),i={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},l=e.i(391398);let c=(0,a.createVarsResolver)((e,{radius:a,color:d,gradient:r,variant:o,size:s,autoContrast:i,circle:l})=>{let c=e.variantColorResolver({color:d||e.primaryColor,theme:e,gradient:r,variant:o||"filled",autoContrast:i});return{root:{"--badge-height":(0,t.getSize)(s,"badge-height"),"--badge-padding-x":(0,t.getSize)(s,"badge-padding-x"),"--badge-fz":(0,t.getSize)(s,"badge-fz"),"--badge-radius":l||void 0===a?void 0:(0,t.getRadius)(a),"--badge-bg":d||o?c.background:void 0,"--badge-color":d||o?c.color:void 0,"--badge-bd":d||o?c.border:void 0,"--badge-dot-color":"dot"===o?(0,n.getThemeColor)(d,e):void 0}}}),u=(0,o.polymorphicFactory)(e=>{let t=(0,d.useProps)("Badge",null,e),{classNames:a,className:n,style:o,styles:u,unstyled:f,vars:m,radius:Y,color:y,gradient:M,leftSection:h,rightSection:D,children:p,variant:g,fullWidth:v,autoContrast:x,circle:j,mod:w,attributes:$,...b}=t,S=(0,r.useStyles)({name:"Badge",props:t,classes:i,className:n,style:o,classNames:a,styles:u,unstyled:f,attributes:$,vars:m,varsResolver:c});return(0,l.jsxs)(s.Box,{variant:g,mod:[{block:v,circle:j,"with-right-section":!!D,"with-left-section":!!h},w],...S("root",{variant:g}),...b,children:[h&&(0,l.jsx)("span",{...S("section"),"data-position":"left",children:h}),(0,l.jsx)("span",{...S("label"),children:p}),D&&(0,l.jsx)("span",{...S("section"),"data-position":"right",children:D})]})});u.classes=i,u.varsResolver=c,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},494834,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",a="minute",n="hour",d="week",r="month",o="quarter",s="year",i="date",l="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},m="en",Y={};Y[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}};var y="$isDayjsObject",M=function(e){return e instanceof g||!(!e||!e[y])},h=function e(t,a,n){var d;if(!t)return m;if("string"==typeof t){var r=t.toLowerCase();Y[r]&&(d=r),a&&(Y[r]=a,d=r);var o=t.split("-");if(!d&&o.length>1)return e(o[0])}else{var s=t.name;Y[s]=t,d=s}return!n&&d&&(m=d),d||!n&&m},D=function(e,t){if(M(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new g(a)},p={s:f,z:function(e){var t=-e.utcOffset(),a=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(a/60),2,"0")+":"+f(a%60,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),d=t.clone().add(n,r),o=a-d<0,s=t.clone().add(n+(o?-1:1),r);return+(-(n+(a-d)/(o?d-s:s-d))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:r,y:s,w:d,d:"day",D:i,h:n,m:a,s:t,ms:e,Q:o})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};p.l=h,p.i=M,p.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var g=function(){function f(e){this.$L=h(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[y]=!0}var m=f.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(p.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(c);if(n){var d=n[2]-1||0,r=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],d,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],d,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return p},m.isValid=function(){return this.$d.toString()!==l},m.isSame=function(e,t){var a=D(e);return this.startOf(t)<=a&&a<=this.endOf(t)},m.isAfter=function(e,t){return D(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<D(e)},m.$g=function(e,t,a){return p.u(e)?this[t]:this.set(a,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,o){var l=this,c=!!p.u(o)||o,u=p.p(e),f=function(e,t){var a=p.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?a:a.endOf("day")},m=function(e,t){return p.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},Y=this.$W,y=this.$M,M=this.$D,h="set"+(this.$u?"UTC":"");switch(u){case s:return c?f(1,0):f(31,11);case r:return c?f(1,y):f(0,y+1);case d:var D=this.$locale().weekStart||0,g=(Y<D?Y+7:Y)-D;return f(c?M-g:M+(6-g),y);case"day":case i:return m(h+"Hours",0);case n:return m(h+"Minutes",1);case a:return m(h+"Seconds",2);case t:return m(h+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(d,o){var l,c=p.p(d),u="set"+(this.$u?"UTC":""),f=((l={}).day=u+"Date",l[i]=u+"Date",l[r]=u+"Month",l[s]=u+"FullYear",l[n]=u+"Hours",l[a]=u+"Minutes",l[t]=u+"Seconds",l[e]=u+"Milliseconds",l)[c],m="day"===c?this.$D+(o-this.$W):o;if(c===r||c===s){var Y=this.clone().set(i,1);Y.$d[f](m),Y.init(),this.$d=Y.set(i,Math.min(this.$D,Y.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[p.p(e)]()},m.add=function(e,o){var i,l=this;e=Number(e);var c=p.p(o),u=function(t){var a=D(l);return p.w(a.date(a.date()+Math.round(t*e)),l)};if(c===r)return this.set(r,this.$M+e);if(c===s)return this.set(s,this.$y+e);if("day"===c)return u(1);if(c===d)return u(7);var f=((i={})[a]=6e4,i[n]=36e5,i[t]=1e3,i)[c]||1,m=this.$d.getTime()+e*f;return p.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||l;var n=e||"YYYY-MM-DDTHH:mm:ssZ",d=p.z(this),r=this.$H,o=this.$m,s=this.$M,i=a.weekdays,c=a.months,f=a.meridiem,m=function(e,a,d,r){return e&&(e[a]||e(t,n))||d[a].slice(0,r)},Y=function(e){return p.s(r%12||12,e,"0")},y=f||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n};return n.replace(u,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return p.s(t.$y,4,"0");case"M":return s+1;case"MM":return p.s(s+1,2,"0");case"MMM":return m(a.monthsShort,s,c,3);case"MMMM":return m(c,s);case"D":return t.$D;case"DD":return p.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(a.weekdaysMin,t.$W,i,2);case"ddd":return m(a.weekdaysShort,t.$W,i,3);case"dddd":return i[t.$W];case"H":return String(r);case"HH":return p.s(r,2,"0");case"h":return Y(1);case"hh":return Y(2);case"a":return y(r,o,!0);case"A":return y(r,o,!1);case"m":return String(o);case"mm":return p.s(o,2,"0");case"s":return String(t.$s);case"ss":return p.s(t.$s,2,"0");case"SSS":return p.s(t.$ms,3,"0");case"Z":return d}return null}(e)||d.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,i,l){var c,u=this,f=p.p(i),m=D(e),Y=(m.utcOffset()-this.utcOffset())*6e4,y=this-m,M=function(){return p.m(u,m)};switch(f){case s:c=M()/12;break;case r:c=M();break;case o:c=M()/3;break;case d:c=(y-Y)/6048e5;break;case"day":c=(y-Y)/864e5;break;case n:c=y/36e5;break;case a:c=y/6e4;break;case t:c=y/1e3;break;default:c=y}return l?c:p.a(c)},m.daysInMonth=function(){return this.endOf(r).$D},m.$locale=function(){return Y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=h(e,t,!0);return n&&(a.$L=n),a},m.clone=function(){return p.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},f}(),v=g.prototype;return D.prototype=v,[["$ms",e],["$s",t],["$m",a],["$H",n],["$W","day"],["$M",r],["$y",s],["$D",i]].forEach(function(e){v[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),D.extend=function(e,t){return e.$i||(e(t,g,D),e.$i=!0),D},D.locale=h,D.isDayjs=M,D.unix=function(e){return D(1e3*e)},D.en=Y[m],D.Ls=Y,D.p={},D}()},205693,135140,e=>{"use strict";var t=e.i(191788),a=e.i(391398);let n={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},d=(0,t.createContext)(n);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,a.jsx)(d,{value:{...n,...e},children:t})},"DatesProviderContext",0,d],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(d),a=(0,t.useCallback)(t=>t||e.locale,[e.locale]),n=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),r=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),o=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:a,getFirstDayOfWeek:n,getWeekendDays:r,getLabelSeparator:o}}],205693)},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[a,n]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var d=e.i(191788),r=e.i(56206),o=e.i(391398);function s({className:e,...a}){let i,l=(i=n(),(0,d.useEffect)(()=>(i.setBodyMounted(!0),()=>i.setBodyMounted(!1)),[]),i.getBodyId()),c=n();return(0,o.jsx)(t.Box,{id:l,className:(0,r.default)({m_5df29311:!c.unstyled},e),...a})}s.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,s],477777);var i=e.i(802046);function l({className:e,onClick:t,...a}){let d=n();return(0,o.jsx)(i.CloseButton,{...a,onClick:e=>{d.onClose(),t?.(e)},className:(0,r.default)({m_606cb269:!d.unstyled},e),unstyled:d.unstyled})}l.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,l],430731);var c=e.i(470743),u=e.i(34515),f=e.i(22630);function m({transitionProps:e,className:t,innerProps:a,onKeyDown:d,style:s,ref:i,...l}){let Y=n();return(0,o.jsx)(u.Transition,{mounted:Y.opened,transition:"pop",...Y.transitionProps,onExited:()=>{Y.onExitTransitionEnd?.(),Y.transitionProps?.onExited?.()},onEntered:()=>{Y.onEnterTransitionEnd?.(),Y.transitionProps?.onEntered?.()},...e,children:e=>(0,o.jsx)("div",{...a,className:(0,r.default)({m_60c222c7:!Y.unstyled},a.className),children:(0,o.jsx)(f.FocusTrap,{active:Y.opened&&Y.trapFocus,innerRef:i,children:(0,o.jsx)(c.Paper,{...l,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":Y.bodyMounted?Y.getBodyId():void 0,"aria-labelledby":Y.titleMounted?Y.getTitleId():void 0,style:[s,e],className:(0,r.default)({m_fd1ab0aa:!Y.unstyled},t),unstyled:Y.unstyled,children:l.children})})})})}function Y({className:e,...a}){let d=n();return(0,o.jsx)(t.Box,{component:"header",className:(0,r.default)({m_b5489c3c:!d.unstyled},e),...a})}m.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,m],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,o.jsx)(o.Fragment,{children:e})}],225147),Y.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,Y],811590);var y=e.i(476273);let M={duration:200,timingFunction:"ease",transition:"fade"};function h({onClick:e,transitionProps:t,style:a,visible:d,...r}){let s,i=n(),l=(s=n(),{...M,...s.transitionProps,...t});return(0,o.jsx)(u.Transition,{mounted:void 0!==d?d:i.opened,...l,transition:"fade",children:t=>(0,o.jsx)(y.Overlay,{fixed:!0,style:[a,t],zIndex:i.zIndex,unstyled:i.unstyled,onClick:t=>{e?.(t),i.closeOnClickOutside&&i.onClose()},...r})})}h.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,h],426611);var D=e.i(749218),p=e.i(433512),g=e.i(164483),v=e.i(779861),x=e.i(484108),j=e.i(107315),w=e.i(133613),$=e.i(865823);function b({keepMounted:e,opened:n,onClose:r,id:s,transitionProps:i,onExitTransitionEnd:l,onEnterTransitionEnd:c,trapFocus:u,closeOnEscape:f,returnFocus:m,closeOnClickOutside:Y,withinPortal:y,portalProps:M,lockScroll:h,children:S,zIndex:_,shadow:O,padding:C,__vars:T,unstyled:k,removeScrollProps:E,...H}){let{_id:B,titleMounted:A,bodyMounted:V,shouldLockScroll:N,setTitleMounted:R,setBodyMounted:z}=function({id:e,transitionProps:t,opened:a,trapFocus:n,closeOnEscape:r,onClose:o,returnFocus:s}){let i=(0,j.useId)(e),[l,c]=(0,d.useState)(!1),[u,f]=(0,d.useState)(!1),m=function({opened:e,transitionDuration:t}){let[a,n]=(0,d.useState)(e),r=(0,d.useRef)(-1),o=(0,v.useReducedMotion)()?0:t;return(0,d.useEffect)(()=>(e?(n(!0),window.clearTimeout(r.current)):0===o?n(!1):r.current=window.setTimeout(()=>n(!1),o),()=>window.clearTimeout(r.current)),[e,o]),a}({opened:a,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,w.useWindowEvent)("keydown",e=>{"Escape"===e.key&&r&&!e.isComposing&&a&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&o()},{capture:!0}),(0,x.useFocusReturn)({opened:a,shouldReturnFocus:n&&s}),{_id:i,titleMounted:l,bodyMounted:u,shouldLockScroll:m,setTitleMounted:c,setBodyMounted:f}}({id:s,transitionProps:i,opened:n,trapFocus:u,closeOnEscape:f,onClose:r,returnFocus:m}),{key:P,...I}=E||{};return(0,o.jsx)(g.OptionalPortal,{...M,withinPortal:y,children:(0,o.jsx)(a,{value:{opened:n,onClose:r,closeOnClickOutside:Y,onExitTransitionEnd:l,onEnterTransitionEnd:c,transitionProps:{...i,keepMounted:e},getTitleId:()=>`${B}-title`,getBodyId:()=>`${B}-body`,titleMounted:A,bodyMounted:V,setTitleMounted:R,setBodyMounted:z,trapFocus:u,closeOnEscape:f,zIndex:_,unstyled:k},children:(0,o.jsx)($.RemoveScroll,{enabled:N&&h,...I,children:(0,o.jsx)(t.Box,{...H,id:B,__vars:{...T,"--mb-z-index":(_||(0,D.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,p.getShadow)(O),"--mb-padding":(0,p.getSpacing)(C)},children:S})},P)})})}function S({className:e,...a}){let s,i=(s=n(),(0,d.useEffect)(()=>(s.setTitleMounted(!0),()=>s.setTitleMounted(!1)),[]),s.getTitleId()),l=n();return(0,o.jsx)(t.Box,{component:"h2",className:(0,r.default)({m_615af6c9:!l.unstyled},e),id:i,...a})}b.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,b],32044),S.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,S],446817)},424302,e=>{"use strict";var t=e.i(749218),a=e.i(44091),n=e.i(275519),d={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},r=e.i(477777);let[o,s]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var i=e.i(391398);let l=(0,n.factory)(e=>{let{classNames:t,className:n,style:d,styles:o,vars:l,...c}=(0,a.useProps)("ModalBody",null,e);return(0,i.jsx)(r.ModalBaseBody,{...s().getStyles("body",{classNames:t,style:d,styles:o,className:n}),...c})});l.classes=d,l.displayName="@mantine/core/ModalBody";var c=e.i(430731);let u=(0,n.factory)(e=>{let{classNames:t,className:n,style:d,styles:r,vars:o,...l}=(0,a.useProps)("ModalCloseButton",null,e);return(0,i.jsx)(c.ModalBaseCloseButton,{...s().getStyles("close",{classNames:t,style:d,styles:r,className:n}),...l})});u.classes=d,u.displayName="@mantine/core/ModalCloseButton";var f=e.i(779177),m=e.i(637245),Y=e.i(225147);let y=(0,n.factory)(e=>{let{classNames:t,className:n,style:d,styles:r,vars:o,children:l,__hidden:c,...u}=(0,a.useProps)("ModalContent",null,e),y=s(),M=y.scrollAreaComponent||Y.NativeScrollArea;return(0,i.jsx)(m.ModalBaseContent,{...y.getStyles("content",{className:n,style:d,styles:r,classNames:t}),innerProps:y.getStyles("inner",{className:n,style:d,styles:r,classNames:t}),"data-full-screen":y.fullScreen||void 0,"data-modal-content":!0,"data-hidden":c||void 0,...u,children:(0,i.jsx)(M,{style:{maxHeight:y.fullScreen?"100dvh":`calc(100dvh - (${(0,f.rem)(y.yOffset)} * 2))`},children:l})})});y.classes=d,y.displayName="@mantine/core/ModalContent";var M=e.i(811590);let h=(0,n.factory)(e=>{let{classNames:t,className:n,style:d,styles:r,vars:o,...l}=(0,a.useProps)("ModalHeader",null,e);return(0,i.jsx)(M.ModalBaseHeader,{...s().getStyles("header",{classNames:t,style:d,styles:r,className:n}),...l})});h.classes=d,h.displayName="@mantine/core/ModalHeader";var D=e.i(426611);let p=(0,n.factory)(e=>{let{classNames:t,className:n,style:d,styles:r,vars:o,...l}=(0,a.useProps)("ModalOverlay",null,e);return(0,i.jsx)(D.ModalBaseOverlay,{...s().getStyles("overlay",{classNames:t,style:d,styles:r,className:n}),...l})});p.classes=d,p.displayName="@mantine/core/ModalOverlay";var g=e.i(433512),v=e.i(481178),x=e.i(391466),j=e.i(19300),w=e.i(32044);let $={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},b=(0,v.createVarsResolver)((e,{radius:t,size:a,yOffset:n,xOffset:d})=>({root:{"--modal-radius":void 0===t?void 0:(0,g.getRadius)(t),"--modal-size":(0,g.getSize)(a,"modal-size"),"--modal-y-offset":(0,f.rem)(n),"--modal-x-offset":(0,f.rem)(d)}})),S=(0,n.factory)(e=>{let t=(0,a.useProps)("ModalRoot",$,e),{classNames:n,className:r,style:s,styles:l,unstyled:c,vars:u,yOffset:f,scrollAreaComponent:m,radius:Y,fullScreen:y,centered:M,xOffset:h,__staticSelector:D,attributes:p,...g}=t,v=(0,x.useStyles)({name:D,classes:d,props:t,className:r,style:s,classNames:n,styles:l,unstyled:c,attributes:p,vars:u,varsResolver:b});return(0,i.jsx)(o,{value:{yOffset:f,scrollAreaComponent:m,getStyles:v,fullScreen:y},children:(0,i.jsx)(w.ModalBase,{...v("root"),"data-full-screen":y||void 0,"data-centered":M||void 0,"data-offset-scrollbars":m===j.ScrollArea.Autosize||void 0,unstyled:c,...g})})});S.classes=d,S.varsResolver=b,S.displayName="@mantine/core/ModalRoot";var _=e.i(191788);let O=(0,_.createContext)(null);function C({children:e}){let[a,n]=(0,_.useState)([]),[d,r]=(0,_.useState)((0,t.getDefaultZIndex)("modal"));return(0,i.jsx)(O,{value:{stack:a,addModal:(e,t)=>{n(t=>[...new Set([...t,e])]),r(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>n(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${d} + ${a.indexOf(e)} + 1)`,currentId:a[a.length-1],maxZIndex:d},children:e})}C.displayName="@mantine/core/ModalStack";var T=e.i(446817);let k=(0,n.factory)(e=>{let{classNames:t,className:n,style:d,styles:r,vars:o,...l}=(0,a.useProps)("ModalTitle",null,e);return(0,i.jsx)(T.ModalBaseTitle,{...s().getStyles("title",{classNames:t,style:d,styles:r,className:n}),...l})});k.classes=d,k.displayName="@mantine/core/ModalTitle";let E={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},H=(0,n.factory)(e=>{let{title:n,withOverlay:d,overlayProps:r,withCloseButton:o,closeButtonProps:s,children:c,radius:f,opened:m,stackId:Y,zIndex:M,...D}=(0,a.useProps)("Modal",E,e),g=(0,_.use)(O),v=!!n||o,x=g&&Y?{closeOnEscape:g.currentId===Y,trapFocus:g.currentId===Y,zIndex:g.getZIndex(Y)}:{},j=!1!==d&&(Y&&g?g.currentId===Y:m);return(0,_.useEffect)(()=>{g&&Y&&(m?g.addModal(Y,M||(0,t.getDefaultZIndex)("modal")):g.removeModal(Y))},[m,Y,M]),(0,i.jsxs)(S,{radius:f,opened:m,zIndex:g&&Y?g.getZIndex(Y):M,...D,...x,children:[d&&(0,i.jsx)(p,{visible:j,transitionProps:g&&Y?{duration:0}:void 0,...r}),(0,i.jsxs)(y,{radius:f,__hidden:!!g&&!!Y&&!!m&&Y!==g.currentId,children:[v&&(0,i.jsxs)(h,{children:[n&&(0,i.jsx)(k,{children:n}),o&&(0,i.jsx)(u,{...s})]}),(0,i.jsx)(l,{children:c})]})]})});H.classes=d,H.displayName="@mantine/core/Modal",H.Root=S,H.Overlay=p,H.Content=y,H.Body=l,H.Header=h,H.Title=k,H.CloseButton=u,H.Stack=C,e.s(["Modal",0,H],424302)},898770,e=>{"use strict";var t=e.i(494834);e.s(["isMultidayEvent",0,function(e){let a=(0,t.default)(e.start).startOf("day"),n=(0,t.default)(e.end);return(0===n.hour()&&0===n.minute()&&0===n.second()?n.startOf("day").subtract(1,"day"):n.startOf("day")).isAfter(a)}])},813982,e=>{"use strict";var t=e.i(494834);e.s(["sortEvents",0,function(e){return e.toSorted((e,a)=>{let n=(0,t.default)(e.start).diff((0,t.default)(a.start));return 0!==n?n:(0,t.default)(a.end).diff((0,t.default)(a.start))-(0,t.default)(e.end).diff((0,t.default)(e.start))})}])},969610,e=>{"use strict";var t=e.i(494834);e.s(["isAllDayEvent",0,function({event:e,date:a}){let n=(0,t.default)(a).startOf("day"),d=n.add(1,"day"),r=d.subtract(1,"second"),o=(0,t.default)(e.start),s=(0,t.default)(e.end);return o.isSame(n)&&(s.isSame(d)||s.isSame(r))}])},663551,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(969610),d=e.i(813982),r=e.i(898770),o=e.i(657068),s=e.i(298008),i=e.i(494834),l={agendaView:"m_c5e63f2d",agendaViewHeader:"m_b70d381a",agendaViewHeaderLabel:"m_693056fa",agendaViewBody:"m_dd488e6f",agendaViewDateGroup:"m_e7e356c4",agendaViewDateHeader:"m_157e8ae8",agendaViewEvent:"m_cbf6b76d",agendaViewEventBody:"m_f9e2e6af",agendaViewEventColor:"m_428823f6",agendaViewEventTime:"m_f9eaffda",agendaViewNoEvents:"m_7a1aec87"},c=e.i(232471),u=e.i(883364),f=e.i(284629),m=e.i(481178),Y=e.i(275519),y=e.i(433512),M=e.i(317477),h=e.i(951254),D=e.i(44091),p=e.i(391466),g=e.i(191788),v=e.i(205693),x=e.i(391398);let j={__staticSelector:"AgendaView",mode:"default",dateHeaderFormat:"dddd, MMMM D",headerFormat:"MMMM D, YYYY"},w=(0,m.createVarsResolver)((e,{radius:t})=>({agendaView:{"--agenda-view-radius":(0,y.getRadius)(t)}})),$=(0,Y.factory)(e=>{let m=(0,D.useProps)("AgendaView",j,e),{classNames:Y,className:y,style:$,styles:b,unstyled:S,vars:_,attributes:O,__staticSelector:C,rangeStart:T,rangeEnd:k,events:E,locale:H,radius:B,labels:A,mode:V,renderEvent:N,dateHeaderFormat:R,headerFormat:z,onEventClick:P,recurrenceExpansionLimit:I,...L}=m,W=(0,v.useDatesContext)(),F=(0,h.useMantineTheme)(),U=(0,p.useStyles)({name:C,classes:l,props:m,className:y,style:$,classNames:Y,styles:b,unstyled:S,attributes:O,vars:_,varsResolver:w,rootSelector:"agendaView"}),Z=function({rangeStart:e,rangeEnd:t,events:a}){let n={};if(void 0===a)return n;let d=(0,i.default)(e).startOf("day"),o=(0,i.default)(t).startOf("day"),l=new Set;for(let e of a){if("background"===e.display)continue;let t=(0,i.default)(e.start).startOf("day");if(!((0,i.default)(e.end).startOf("day").isBefore(d)||t.isAfter(o))){if(l.has(e.id))throw Error(`[@mantine/schedule] AgendaView: Duplicated event ids found: ${e.id}`);l.add(e.id),!function(e,t,a,n){if((0,r.isMultidayEvent)(e)){let d,r=(0,i.default)(e.start).startOf("day"),o=(d=(0,i.default)(e.end).startOf("day"),0===(0,i.default)(e.end).hour()&&0===(0,i.default)(e.end).minute()?d.subtract(1,"day"):d);for(let d=r;d.isBefore(o)||d.isSame(o);d=d.add(1,"day")){if(d.isBefore(a)||d.isAfter(n))continue;let r=d.format("YYYY-MM-DD");t[r]||(t[r]=[]),t[r].push(e)}return}let d=(0,i.default)(e.start).format("YYYY-MM-DD");t[d]||(t[d]=[]),t[d].push(e)}((0,s.validateEvent)(e),n,d,o)}}return n}({rangeStart:T,rangeEnd:k,events:(0,o.expandRecurringEvents)({events:E,rangeStart:(0,i.default)(T).startOf("day").toDate(),rangeEnd:(0,i.default)(k).endOf("day").toDate(),expansionLimit:I})}),G=Object.keys(Z).sort(),X=`${(0,a.formatDate)({locale:W.getLocale(H),date:T,format:z})} – ${(0,a.formatDate)({locale:W.getLocale(H),date:k,format:z})}`,J=G.map(e=>{let o=(0,d.sortEvents)(Z[e]).map(a=>{let d=(0,i.default)(a.start).format("HH:mm"),o=(0,i.default)(a.end).format("HH:mm"),s=(0,r.isMultidayEvent)(a)||(0,n.isAllDayEvent)({event:a,date:e}),l=(0,x.jsxs)(c.Box,{...U("agendaViewEventBody"),children:[(0,x.jsx)("div",{...U("agendaViewEventColor",{style:{backgroundColor:(0,M.getThemeColor)(a.color,F)}})}),(0,x.jsxs)("div",{children:[(0,x.jsx)(u.Text,{...U("agendaViewEventTitle"),children:a.title}),(0,x.jsx)(u.Text,{...U("agendaViewEventTime"),children:s?(0,t.getLabel)("allDay",A):`${d} – ${o}`})]})]}),m={...U("agendaViewEvent"),onClick:"static"===V?void 0:e=>{P?.(a,e)},tabIndex:"static"===V?-1:0,children:l};return"function"==typeof N?(0,x.jsx)(g.default.Fragment,{children:N(a,m)},a.id):(0,g.createElement)(f.UnstyledButton,{...m,key:a.id})});return(0,g.createElement)("div",{...U("agendaViewDateGroup"),key:e},(0,x.jsx)(u.Text,{...U("agendaViewDateHeader"),children:(0,a.formatDate)({locale:W.getLocale(H),date:e,format:R})}),o)});return(0,x.jsxs)(c.Box,{...U("agendaView"),...L,children:[(0,x.jsx)("div",{...U("agendaViewHeader"),children:(0,x.jsx)(u.Text,{...U("agendaViewHeaderLabel"),children:X})}),(0,x.jsx)(c.Box,{...U("agendaViewBody"),children:J.length>0?J:(0,x.jsx)(u.Text,{...U("agendaViewNoEvents"),children:(0,t.getLabel)("noEvents",A)})})]})});$.displayName="@mantine/schedule/AgendaView",$.classes=l,$.varsResolver=w,e.s(["AgendaView",0,$],663551)},374137,e=>{"use strict";var t=e.i(648863),a=e.i(391398),n=e.i(494834),d=e.i(663551);let r=(0,n.default)().format("YYYY-MM-DD"),o=(0,n.default)().startOf("month").format("YYYY-MM-DD"),s=[{id:"team-meeting",title:"Team Meeting",start:`${o} 09:00:00`,end:`${o} 10:30:00`,color:"blue"},{id:"client-call",title:"Client Call",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"green"},{id:"workshop",title:"Workshop",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:"weekly-review-series",title:"Weekly review",start:`${o} 16:00:00`,end:`${o} 17:00:00`,color:"cyan",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],i={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(d.AgendaView,{rangeStart:(0,n.default)().startOf("month").format("YYYY-MM-DD"),rangeEnd:(0,n.default)().endOf("month").format("YYYY-MM-DD"),events:s})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');

const events = [
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 'client-call',
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfMonth} 16:00:00\`,
    end: \`\${startOfMonth} 17:00:00\`,
    color: 'cyan',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
`},l=(0,n.default)().format("YYYY-MM-DD"),c=[{id:"timed",title:"Team Meeting",start:`${l} 10:00:00`,end:`${l} 11:30:00`,color:"blue"},{id:"allday",title:"Company Holiday",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(2,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:"multiday",title:"Sales Conference",start:(0,n.default)().add(2,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(5,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"grape"},{id:"timed-2",title:"Client Call",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(3,"day").format("YYYY-MM-DD 15:00:00"),color:"green"},{id:"evening",title:"Dinner Event",start:(0,n.default)().add(4,"day").format("YYYY-MM-DD 19:00:00"),end:(0,n.default)().add(4,"day").format("YYYY-MM-DD 21:00:00"),color:"orange"}],u={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(d.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:c})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'timed',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'blue',
  },
  {
    id: 'allday',
    title: 'Company Holiday',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(2, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 'multiday',
    title: 'Sales Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(5, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'grape',
  },
  {
    id: 'timed-2',
    title: 'Client Call',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
  },
  {
    id: 'evening',
    title: 'Dinner Event',
    start: dayjs().add(4, 'day').format('YYYY-MM-DD 19:00:00'),
    end: dayjs().add(4, 'day').format('YYYY-MM-DD 21:00:00'),
    color: 'orange',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
`},f=(0,n.default)().format("YYYY-MM-DD"),m=[{id:"standup",title:"Morning Standup",start:`${f} 09:00:00`,end:`${f} 09:30:00`,color:"blue"},{id:"meeting",title:"Team Meeting",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 11:30:00"),color:"green"},{id:"review",title:"Code Review",start:(0,n.default)().add(2,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(2,"day").format("YYYY-MM-DD 15:00:00"),color:"violet"}],Y={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(d.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:m,headerFormat:"MMM D",dateHeaderFormat:"ddd, D MMM"})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'meeting',
    title: 'Team Meeting',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 11:30:00'),
    color: 'green',
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(2, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'violet',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      headerFormat="MMM D"
      dateHeaderFormat="ddd, D MMM"
    />
  );
}
`};var y=e.i(257177),M=e.i(232471),h=e.i(725695),D=e.i(883364),p=e.i(284629);let g=(0,n.default)().format("YYYY-MM-DD"),v=[{id:"standup",title:"Team Standup",start:`${g} 09:00:00`,end:`${g} 09:30:00`,color:"blue",payload:{location:"Room A",category:"meeting"}},{id:"workshop",title:"Design Workshop",start:`${g} 10:00:00`,end:`${g} 12:00:00`,color:"grape",payload:{location:"Creative Space",category:"workshop"}},{id:"review",title:"Code Review",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 15:00:00"),color:"green",payload:{location:"Zoom",category:"dev"}},{id:"conference",title:"Tech Conference",start:(0,n.default)().add(2,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(3,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red",payload:{location:"Convention Center",category:"event"}}],x={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(d.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:v,renderEvent:(e,t)=>(0,a.jsx)(p.UnstyledButton,{...t,children:(0,a.jsxs)(M.Box,{style:{display:"flex",gap:"var(--mantine-spacing-sm)",padding:"var(--mantine-spacing-xs) var(--mantine-spacing-sm)"},children:[(0,a.jsx)(M.Box,{style:{width:4,borderRadius:2,flexShrink:0,backgroundColor:`var(--mantine-color-${e.color}-filled)`}}),(0,a.jsxs)("div",{style:{flex:1},children:[(0,a.jsxs)(h.Group,{justify:"space-between",wrap:"nowrap",children:[(0,a.jsx)(D.Text,{size:"sm",fw:500,children:e.title}),(0,a.jsx)(y.Badge,{size:"xs",variant:"light",color:e.color,children:e.payload?.category})]}),(0,a.jsxs)(D.Text,{size:"xs",c:"dimmed",children:[(0,n.default)(e.start).format("HH:mm")," – ",(0,n.default)(e.end).format("HH:mm")]}),e.payload?.location&&(0,a.jsxs)(D.Text,{size:"xs",c:"dimmed",mt:2,children:["📍"," ",e.payload.location]})]})]})})})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { Badge, Box, Group, Text, UnstyledButton } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A', category: 'meeting' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'grape',
    payload: { location: 'Creative Space', category: 'workshop' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { location: 'Zoom', category: 'dev' },
  },
  {
    id: 'conference',
    title: 'Tech Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(3, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: { location: 'Convention Center', category: 'event' },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      renderEvent={(event, props) => (
        <UnstyledButton {...props}>
          <Box
            style={{
              display: 'flex',
              gap: 'var(--mantine-spacing-sm)',
              padding: 'var(--mantine-spacing-xs) var(--mantine-spacing-sm)',
            }}
          >
            <Box
              style={{
                width: 4,
                borderRadius: 2,
                flexShrink: 0,
                backgroundColor: \`var(--mantine-color-\${event.color}-filled)\`,
              }}
            />
            <div style={{ flex: 1 }}>
              <Group justify="space-between" wrap="nowrap">
                <Text size="sm" fw={500}>
                  {event.title}
                </Text>
                <Badge size="xs" variant="light" color={event.color}>
                  {event.payload?.category}
                </Badge>
              </Group>
              <Text size="xs" c="dimmed">
                {dayjs(event.start).format('HH:mm')} – {dayjs(event.end).format('HH:mm')}
              </Text>
              {event.payload?.location && (
                <Text size="xs" c="dimmed" mt={2}>
                  📍 {event.payload.location}
                </Text>
              )}
            </div>
          </Box>
        </UnstyledButton>
      )}
    />
  );
}
`};var j=e.i(191788),w=e.i(424302),$=e.i(671640);let b=(0,n.default)().format("YYYY-MM-DD"),S=[{id:"standup",title:"Team Standup",start:`${b} 09:00:00`,end:`${b} 09:30:00`,color:"blue",payload:{description:"Daily team sync",location:"Room A"}},{id:"workshop",title:"Design Workshop",start:`${b} 10:00:00`,end:`${b} 12:00:00`,color:"grape",payload:{description:"Collaborative design session",location:"Creative Space"}},{id:"review",title:"Code Review",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 15:00:00"),color:"green",payload:{description:"Review pull requests",location:"Zoom"}}],_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,j.useState)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:S,onEventClick:e=>t(e)}),(0,a.jsx)(w.Modal,{opened:null!==e,onClose:()=>t(null),title:e?.title,children:e&&(0,a.jsxs)($.Stack,{gap:"xs",children:[(0,a.jsxs)(D.Text,{size:"sm",c:"dimmed",children:[(0,n.default)(e.start).format("MMM D, YYYY HH:mm")," –"," ",(0,n.default)(e.end).format("HH:mm")]}),e.payload?.description&&(0,a.jsx)(D.Text,{size:"sm",children:e.payload.description}),e.payload?.location&&(0,a.jsxs)(D.Text,{size:"sm",c:"dimmed",children:["Location: ",e.payload.location]})]})})]})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Modal, Stack, Text } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { description: 'Daily team sync', location: 'Room A' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'grape',
    payload: { description: 'Collaborative design session', location: 'Creative Space' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { description: 'Review pull requests', location: 'Zoom' },
  },
];

function Demo() {
  const [selected, setSelected] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <AgendaView
        rangeStart={dayjs().format('YYYY-MM-DD')}
        rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
        events={events}
        onEventClick={(event) => setSelected(event)}
      />

      <Modal
        opened={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              {dayjs(selected.start).format('MMM D, YYYY HH:mm')} –{' '}
              {dayjs(selected.end).format('HH:mm')}
            </Text>
            {selected.payload?.description && (
              <Text size="sm">{selected.payload.description}</Text>
            )}
            {selected.payload?.location && (
              <Text size="sm" c="dimmed">
                Location: {selected.payload.location}
              </Text>
            )}
          </Stack>
        )}
      </Modal>
    </>
  );
}
`};e.i(27355);let O=(0,n.default)().format("YYYY-MM-DD"),C=[{id:"standup",title:"Reunión diaria",start:`${O} 09:00:00`,end:`${O} 09:30:00`,color:"blue"},{id:"workshop",title:"Taller de diseño",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 12:00:00"),color:"grape"},{id:"conference",title:"Conferencia",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(4,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],T={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(d.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:C,locale:"es",labels:{allDay:"Todo el día",noEvents:"Sin eventos"}})},centered:!0,maxWidth:500,code:`
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Reuni\xf3n diaria',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'workshop',
    title: 'Taller de dise\xf1o',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'grape',
  },
  {
    id: 'conference',
    title: 'Conferencia',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(4, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      locale="es"
      labels={{
        allDay: 'Todo el d\xeda',
        noEvents: 'Sin eventos',
      }}
    />
  );
}
`},k=(0,n.default)().startOf("month").format("YYYY-MM-DD"),E=(0,n.default)().date(15).format("YYYY-MM-DD"),H=(0,n.default)().format("YYYY-MM-DD"),B=(0,n.default)().endOf("month").format("YYYY-MM-DD"),A=[{id:1,title:"Team Meeting",start:`${k} 09:00:00`,end:`${k} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:`${E} 00:00:00`,end:(0,n.default)(E).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:3,title:"Client Call",start:`${H} 14:00:00`,end:`${H} 15:00:00`,color:"green"},{id:4,title:"Monthly Review",start:`${B} 00:00:00`,end:(0,n.default)(B).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Workshop",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:6,title:"Conference",start:(0,n.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"cyan"}],V={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(d.AgendaView,{rangeStart:(0,n.default)().startOf("month").format("YYYY-MM-DD"),rangeEnd:(0,n.default)().endOf("month").format("YYYY-MM-DD"),events:A,mode:"static"})},centered:!0,maxWidth:500,code:[{code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={events}
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import dayjs from 'dayjs';

const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const today = dayjs().format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
`,language:"tsx",fileName:"data.ts"}]};var N=(0,t.__exportAll)({allDayAndMultiday:()=>u,dateFormats:()=>Y,eventClick:()=>_,localization:()=>T,renderEvent:()=>x,staticMode:()=>V,usage:()=>i});e.s(["AgendaViewDemos",0,N],374137)},421268,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(374137);e.i(603441);var d=e.i(62558);e.i(457450);var r=e.i(418026);let o=(0,d.Layout)(r.MDX_DATA.AgendaView);function s(e){let d={a:"a",code:"code",h2:"h2",p:"p",...(0,a.useMDXComponents)(),...e.components},{Demo:r}=d;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(d.p,{children:[(0,t.jsx)(d.code,{children:"AgendaView"})," renders a vertical list of events for a specified time period. Events are grouped by\ndate in chronological order with date headers for each group."]}),"\n",(0,t.jsx)(r,{data:n.AgendaViewDemos.usage}),"\n",(0,t.jsx)(d.h2,{id:"all-day-and-multi-day-events",children:"All-day and multi-day events"}),"\n",(0,t.jsx)(d.p,{children:'Timed events show their time range, all-day events display an "All day" label, and multi-day\nevents appear on each date they span.'}),"\n",(0,t.jsx)(r,{data:n.AgendaViewDemos.allDayAndMultiday}),"\n",(0,t.jsx)(d.h2,{id:"date-formats",children:"Date formats"}),"\n",(0,t.jsxs)(d.p,{children:["Use ",(0,t.jsx)(d.code,{children:"headerFormat"})," to control the range label in the header and ",(0,t.jsx)(d.code,{children:"dateHeaderFormat"})," to control\nindividual date group headers. Both accept a ",(0,t.jsx)(d.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format string"}),"\nor a callback function."]}),"\n",(0,t.jsx)(r,{data:n.AgendaViewDemos.dateFormats}),"\n",(0,t.jsx)(d.h2,{id:"custom-event-rendering",children:"Custom event rendering"}),"\n",(0,t.jsxs)(d.p,{children:["Use ",(0,t.jsx)(d.code,{children:"renderEvent"})," to fully customize how each event row is rendered. The callback receives the\nevent data and default root props that you should spread onto your wrapper element."]}),"\n",(0,t.jsx)(r,{data:n.AgendaViewDemos.renderEvent}),"\n",(0,t.jsx)(d.h2,{id:"event-click",children:"Event click"}),"\n",(0,t.jsxs)(d.p,{children:["Use ",(0,t.jsx)(d.code,{children:"onEventClick"})," to handle event interactions. The example below opens a modal with event\ndetails when an event is clicked."]}),"\n",(0,t.jsx)(r,{data:n.AgendaViewDemos.eventClick}),"\n",(0,t.jsx)(d.h2,{id:"localization",children:"Localization"}),"\n",(0,t.jsxs)(d.p,{children:["Set ",(0,t.jsx)(d.code,{children:"locale"})," to translate date headers and pass ",(0,t.jsx)(d.code,{children:"labels"}),' to override built-in strings like\n"All day" and "No events".']}),"\n",(0,t.jsx)(r,{data:n.AgendaViewDemos.localization}),"\n",(0,t.jsx)(d.h2,{id:"static-mode",children:"Static mode"}),"\n",(0,t.jsxs)(d.p,{children:["Set ",(0,t.jsx)(d.code,{children:'mode="static"'})," to disable all event interactions. In static mode, events are not clickable."]}),"\n",(0,t.jsx)(r,{data:n.AgendaViewDemos.staticMode})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(s,{...e})})}])},629304,(e,t,a)=>{let n="/schedule/agenda-view";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(421268)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);