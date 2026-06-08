(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,593612,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="ClockIcon",e.s(["ClockIcon",0,r],593612)},822933,e=>{"use strict";var t=e.i(191788);e.s(["useInterval",0,function(e,a,{autoInvoke:n=!1}={}){let[r,o]=(0,t.useState)(!1),i=(0,t.useRef)(null),d=(0,t.useRef)(null),s=(0,t.useRef)(a);s.current=a;let l=(0,t.useCallback)(()=>{o(e=>(e||i.current||(i.current=window.setInterval(d.current,s.current)),!0))},[]),u=(0,t.useCallback)(()=>{o(!1),i.current&&window.clearInterval(i.current),i.current=null},[]),c=(0,t.useCallback)(()=>{o(e=>e?(i.current&&window.clearInterval(i.current),i.current=null,!1):(i.current||(i.current=window.setInterval(d.current,s.current)),!0))},[]);return(0,t.useEffect)(()=>(d.current=e,r&&l(),u),[e,r,a]),(0,t.useEffect)(()=>{n&&l()},[]),{start:l,stop:u,toggle:c,active:r}}])},898770,e=>{"use strict";var t=e.i(494834);e.s(["isMultidayEvent",0,function(e){let a=(0,t.default)(e.start).startOf("day"),n=(0,t.default)(e.end);return(0===n.hour()&&0===n.minute()&&0===n.second()?n.startOf("day").subtract(1,"day"):n.startOf("day")).isAfter(a)}])},813982,e=>{"use strict";var t=e.i(494834);e.s(["sortEvents",0,function(e){return e.toSorted((e,a)=>{let n=(0,t.default)(e.start).diff((0,t.default)(a.start));return 0!==n?n:(0,t.default)(a.end).diff((0,t.default)(a.start))-(0,t.default)(e.end).diff((0,t.default)(e.start))})}])},898496,672654,969610,792930,505696,245086,637079,312709,68642,532965,751198,e=>{"use strict";function t(e){let t=Math.round(Math.max(1,Math.min(60,e)));return 60%t==0?t:60}function a(e){let[t,a,n]=e.split(":").map(Number);return{hours:t,minutes:a,seconds:n||0}}function n({hours:e,minutes:t,seconds:a}){return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}:${String(a).padStart(2,"0")}`}e.s(["clampIntervalMinutes",0,t],672654),e.s(["getDayTimeIntervals",0,function({startTime:e,endTime:r,intervalMinutes:o=60}){let i=t(o),d=a(e),s=r?a(r):{hours:23,minutes:59,seconds:59},l=3600*d.hours+60*d.minutes+d.seconds,u=3600*s.hours+60*s.minutes+s.seconds,c=60*i,m=[],f=l;for(;f<u;){let e=f,t=f+c;t>u&&(t=u);let a=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60,i=Math.floor(t/3600),d=Math.floor(t%3600/60),s=t%60,l=t-e,v=0===r&&0===o;m.push({startTime:n({hours:a,minutes:r,seconds:o}),endTime:n({hours:i,minutes:d,seconds:s}),duration:l,isHourStart:v}),f=t}return m}],898496);var r=e.i(494834);e.s(["isAllDayEvent",0,function({event:e,date:t}){let a=(0,r.default)(t).startOf("day"),n=a.add(1,"day"),o=n.subtract(1,"second"),i=(0,r.default)(e.start),d=(0,r.default)(e.end);return i.isSame(a)&&(d.isSame(n)||d.isSame(o))}],969610),e.s(["calculateDropTime",0,function({draggedEvent:e,targetDate:t,targetSlotTime:n,mouseYOffset:o=0,slotHeight:i=64,intervalMinutes:d=15}){let s=(0,r.default)(e.end).diff((0,r.default)(e.start),"millisecond"),l=a(n),u=(0,r.default)(t).startOf("day").hour(l.hours).minute(l.minutes).second(0),c=u;if(o>0&&i>0){let e=Math.round(o/i*d);c=u.add(e,"minute")}return{start:c.toDate(),end:c.add(s,"millisecond").toDate()}}],792930),e.s(["getBusinessHoursMod",0,function({time:e,businessHours:t,highlightBusinessHours:a,dayOfWeek:n}){let r;if(!a||!t)return{"business-hours":!1,"non-business-hours":!1};if(Array.isArray(t)&&2===t.length&&"string"==typeof t[0]&&"string"==typeof t[1])r=t;else{if(void 0===n)return{"business-hours":!1,"non-business-hours":!1};r=t[n]??null}if(!r)return{"business-hours":!1,"non-business-hours":!0};let[o,i]=r,d=e>=o&&e<i;return{"business-hours":d,"non-business-hours":!d}}],505696);var o=e.i(191788);e.s(["useAutoScrollOnDrag",0,function({viewportRef:e,enabled:t}){let a=(0,o.useRef)(null),n=(0,o.useRef)(0),r=(0,o.useEffectEvent)(()=>{null!==a.current&&(cancelAnimationFrame(a.current),a.current=null),n.current=0}),i=(0,o.useEffectEvent)(()=>{if(null!==a.current)return;let t=()=>{let r=e.current;if(!r||0===n.current){a.current=null;return}r.scrollTop+=n.current,a.current=requestAnimationFrame(t)};a.current=requestAnimationFrame(t)});(0,o.useEffect)(()=>{if(!t)return;let a=e.current;if(!a)return;let o=e=>{let t=a.getBoundingClientRect(),o=e.clientY-t.top,d=t.bottom-e.clientY;o<50?(n.current=-Math.ceil((1-o/50)*8),i()):d<50?(n.current=Math.ceil((1-d/50)*8),i()):r()},d=()=>{r()};return a.addEventListener("dragover",o),a.addEventListener("dragleave",d),a.addEventListener("dragend",d),a.addEventListener("drop",d),()=>{r(),a.removeEventListener("dragover",o),a.removeEventListener("dragleave",d),a.removeEventListener("dragend",d),a.removeEventListener("drop",d)}},[t,e])}],245086),e.s(["useEventResize",0,function({enabled:e=!1,mode:n="default",startTime:i,endTime:d,intervalMinutes:s,onEventResize:l,canResizeEvent:u}){let[c,m]=(0,o.useState)(null),f=(0,o.useRef)(null),v=(0,o.useRef)(!1),D=(0,o.useEffectEvent)(l||(()=>{})),p=a(i),g=a(d),h=60*p.hours+p.minutes,w=60*g.hours+g.minutes,y=t(s),Y=w-h,k=Math.ceil(Y/y)*y,S=y/k*100,M=(0,o.useCallback)(e=>Math.max(0,Math.min(Y,Math.round(e/y)*y)),[Y,y]),E=(0,o.useCallback)((e,t)=>{let a=h+M(e/100*k),n=Math.floor(a/60);return`${t} ${String(n).padStart(2,"0")}:${String(a%60).padStart(2,"0")}:00`},[k,h,M]),x=(0,o.useCallback)(e=>M(e/100*k)/k*100,[k,M]),T=(0,o.useCallback)(({event:t,edge:a,container:o,originalTop:i,originalHeight:d,eventDate:s,pointerEvent:l})=>{if(!e||"static"===n)return;l.preventDefault(),l.stopPropagation();let u={eventId:t.id,event:t,edge:a,container:o,originalTop:i,originalHeight:d,currentTop:i,currentHeight:d,eventDate:s,originalStart:(0,r.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,r.default)(t.end).format("YYYY-MM-DD HH:mm:ss")};f.current=u,m(u)},[e,n]),b=null!==c;(0,o.useEffect)(()=>{if(!b)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{let t=f.current;if(!t)return;let a=t.container.getBoundingClientRect(),n=x(Math.max(0,Math.min(100,(e.clientY-a.top)/a.height*100))),r=t.originalTop,o=t.originalHeight;if("bottom"===t.edge)o=Math.max(S,n-t.originalTop);else{let e=t.originalTop+t.originalHeight;r=Math.min(n,e-S),o=e-r}f.current={...t,currentTop:r,currentHeight:o},m(f.current)},a=()=>{let e=f.current;if(e&&(e.currentTop!==e.originalTop||e.currentHeight!==e.originalHeight)){let t,a;"top"===e.edge?(t=E(e.currentTop,e.eventDate),a=e.originalEnd):(t=e.originalStart,a=E(e.currentTop+e.currentHeight,e.eventDate)),D({eventId:e.eventId,newStart:t,newEnd:a,event:e.event})}f.current=null,m(null),v.current=!0,requestAnimationFrame(()=>{v.current=!1})};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a)}},[b]);let $=(0,o.useCallback)(e=>c&&c.eventId===e?{top:c.currentTop,height:c.currentHeight}:null,[c]),W=(0,o.useCallback)(t=>!!e&&"static"!==n&&"background"!==t.display&&(!u||u(t)),[e,n,u]),C=(0,o.useCallback)(()=>v.current,[]);return{handleResizeStart:T,isResizing:b,resizingEventId:c?.eventId??null,getResizePosition:$,isResizableEvent:W,wasResizing:C}}],637079);var i=e.i(27748),d={currentTimeIndicator:"m_74c54f2d",currentTimeIndicatorLine:"m_e62414c1",currentTimeIndicatorThumb:"m_decee6a9",currentTimeIndicatorTimeBubble:"m_4b00bcc6"},s=e.i(232471),l=e.i(481178),u=e.i(275519),c=e.i(317477),m=e.i(44091),f=e.i(391466),v=e.i(822933),D=e.i(205693),p=e.i(391398);let g={__staticSelector:"CurrentTimeIndicator",withTimeBubble:!0,withThumb:!0,currentTimeFormat:"HH:mm",topOffset:"0rem"},h=(0,l.createVarsResolver)((e,{color:t})=>({currentTimeIndicator:{"--indicator-color":t?(0,c.getThemeColor)(t,e):void 0}})),w=(0,u.factory)(e=>{let n=(0,m.useProps)("CurrentTimeIndicator",g,e),{classNames:l,className:u,style:c,styles:w,unstyled:y,vars:Y,attributes:k,startOffset:S,endOffset:M,color:E,withTimeBubble:x,withThumb:T,currentTimeFormat:b,locale:$,timeBubbleStartOffset:W,__staticSelector:C,topOffset:j,startTime:O,endTime:V,intervalMinutes:H,getCurrentTime:A,...I}=n,R=(0,f.useStyles)({name:C,classes:d,props:n,className:u,style:c,classNames:l,styles:w,unstyled:y,vars:Y,varsResolver:h,attributes:k,rootSelector:"currentTimeIndicator"}),B=(0,D.useDatesContext)(),[,z]=(0,o.useState)(0);(0,v.useInterval)(()=>z(e=>e+1),6e4,{autoInvoke:!0});let L=A?(0,r.default)(A()):(0,r.default)(),N=function(e){let a=(0,r.default)(e?.now);if(!e?.startTime||!e?.endTime){let e=a.startOf("date");return a.diff(e,"minute")/1440*100}let[n,o,i=0]=e.startTime.split(":").map(Number),[d,s,l=0]=e.endTime.split(":").map(Number),u=a.startOf("date"),c=u.hour(n).minute(o).second(i),m=u.hour(d).minute(s).second(l).diff(c,"second"),f=void 0!==e.intervalMinutes?60*t(e.intervalMinutes):void 0,v=f?Math.ceil(m/f)*f:m;return a.diff(c,"second")/v*100}({startTime:O,endTime:V,intervalMinutes:H,now:L}),F=x?(0,i.formatDate)({locale:B.getLocale($),date:L,format:b}):"";return!function({date:e,startTime:t="00:00:00",endTime:n="23:59:59"}){let o=(0,r.default)(e),i=a(t),d=a(n),s=o.hour(i.hours).minute(i.minutes).second(i.seconds),l=o.hour(d.hours).minute(d.minutes).second(d.seconds);return o.isAfter(s)&&o.isBefore(l)}({date:L,startTime:O,endTime:V})?null:(0,p.jsxs)(s.Box,{...R("currentTimeIndicator"),__vars:{"--top-offset":`calc(${N}% + ${j})`,"--start-offset":S,"--end-offset":M,"--time-bubble-start-offset":W,"--time-bubble-width":F?.toString().toLowerCase().includes("m")?"64px":"46px"},...I,children:[x&&(0,p.jsx)("div",{...R("currentTimeIndicatorTimeBubble"),children:F}),T&&(0,p.jsx)("div",{...R("currentTimeIndicatorThumb")}),(0,p.jsx)("div",{...R("currentTimeIndicatorLine")})]})});w.displayName="@mantine/schedule/CurrentTimeIndicator",w.classes=d,w.varsResolver=h,e.s(["CurrentTimeIndicator",0,w],312709);var y=e.i(898770);e.s(["isEventInTimeRange",0,function({event:e,startTime:t,endTime:a}){if((0,y.isMultidayEvent)(e)||function(e){let t=(0,r.default)(e.start),a=(0,r.default)(e.end);if(!t.isSame(t.startOf("day")))return!1;let n=t.startOf("day").add(1,"day");return a.isSame(n)||a.isSame(n.subtract(1,"second"))}(e)||!t||!a)return!0;let[n,o]=t.split(":").map(Number),[i,d]=a.split(":").map(Number),s=(0,r.default)(e.start),l=(0,r.default)(e.end),u=60*s.hour()+s.minute();return!(60*l.hour()+l.minute()<=60*n+o||u>=60*i+d)}],68642),e.s(["getDayPosition",0,function({event:e,startTime:n="00:00:00",endTime:o="23:59:59",intervalMinutes:i=60}){let d=(0,r.default)(e.start),s=(0,r.default)(e.end),l=a(n),u=a(o),c=d.startOf("date"),m=c.hour(l.hours).minute(l.minutes).second(l.seconds),f=c.hour(u.hours).minute(u.minutes).second(u.seconds),v=60*t(i),D=Math.ceil(f.diff(m,"second")/v)*v,p=(d.isBefore(m)?m:d).diff(m,"second"),g=(s.isAfter(f)?f:s).diff(m,"second"),h=p/D*100;return{top:h,height:g/D*100-h}}],532965),e.s(["isEventsOverlap",0,function(e,t){let a=(0,r.default)(e.start).valueOf(),n=(0,r.default)(e.end).valueOf(),o=(0,r.default)(t.start).valueOf();return a<(0,r.default)(t.end).valueOf()&&o<n}],751198)},664894,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(a,n,r){var o,i=function(e,a,n){void 0===n&&(n={});var r,o,i,d,s=new Date(e);return(void 0===(r=n)&&(r={}),(d=t[i=a+"|"+(o=r.timeZoneName||"short")])||(d=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:a,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:o}),t[i]=d),d).formatToParts(s)},d=function(t,a){for(var n=i(t,a),o=[],d=0;d<n.length;d+=1){var s=n[d],l=s.type,u=s.value,c=e[l];c>=0&&(o[c]=parseInt(u,10))}var m=o[3],f=o[0]+"-"+o[1]+"-"+o[2]+" "+(24===m?0:m)+":"+o[4]+":"+o[5]+":000",v=+t;return(r.utc(f).valueOf()-(v-=v%1e3))/6e4},s=n.prototype;s.tz=function(e,t){void 0===e&&(e=o);var a,n=this.utcOffset(),i=this.toDate(),d=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(d))/1e3/60),l=-(15*Math.round(i.getTimezoneOffset()/15))-s;if(Number(l)){if(a=r(d,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(l,!0),t){var u=a.utcOffset();a=a.add(n-u,"minute")}}else a=this.utcOffset(0,t);return a.$x.$timezone=e,a},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),a=i(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return a&&a.value};var l=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var a=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(a,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var n=a&&t,i=a||t||o,s=d(+r(),i);if("string"!=typeof e)return r(e).tz(i);var l=function(e,t,a){var n=e-60*t*1e3,r=d(n,a);if(t===r)return[n,t];var o=d(n-=60*(r-t)*1e3,a);return r===o?[n,r]:[e-60*Math.min(r,o)*1e3,Math.max(r,o)]}(r.utc(e,n).valueOf(),s,i),u=l[0],c=l[1],m=r(u).utcOffset(c);return m.$x.$timezone=i,m},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){o=e}}}()},53157,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(n,r,o){var i=r.prototype;o.utc=function(e){var t={date:e,utc:!0,args:arguments};return new r(t)},i.utc=function(t){var a=o(this.toDate(),{locale:this.$L,utc:!0});return t?a.add(this.utcOffset(),e):a},i.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var d=i.parse;i.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),d.call(this,e)};var s=i.init;i.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else s.call(this)};var l=i.utcOffset;i.utcOffset=function(n,r){var o=this.$utils().u;if(o(n))return this.$u?0:o(this.$offset)?l.call(this):this.$offset;if("string"==typeof n&&null===(n=function(e){void 0===e&&(e="");var n=e.match(t);if(!n)return null;var r=(""+n[0]).match(a)||["-",0,0],o=r[0],i=60*r[1]+ +r[2];return 0===i?0:"+"===o?i:-i}(n)))return this;var i=16>=Math.abs(n)?60*n:n;if(0===i)return this.utc(r);var d=this.clone();if(r)return d.$offset=i,d.$u=!1,d;var s=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(d=this.local().add(i+s,e)).$offset=i,d.$x.$localOffset=s,d};var u=i.format;i.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,t)},i.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var c=i.toDate;i.toDate=function(e){return"s"===e&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var m=i.diff;i.diff=function(e,t,a){if(e&&this.$u===e.$u)return m.call(this,e,t,a);var n=this.local(),r=o(e).local();return m.call(n,r,t,a)}}}()},554166,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="MapPinIcon",e.s(["MapPinIcon",0,r],554166)},315401,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(855578),r=e.i(898496),o=e.i(4332),i=e.i(441058),d=e.i(494834);function s({week:e,weekendDays:t,withWeekendDays:a=!0,firstDayOfWeek:n=1}){let r=[],l=(0,d.default)((0,i.getStartOfWeek)({date:e,firstDayOfWeek:n}));for(let e=0;e<7;e+=1){let e=l.day();(!(t&&t.includes(e))||a)&&r.push((0,o.toDateString)(l)),l=l.add(1,"day")}return r}var l=e.i(969610),u=e.i(792930),c=e.i(505696),m=e.i(657068),f=e.i(245086),v=e.i(783261),D=e.i(637079),p=e.i(376879),g=e.i(312709),h=e.i(201867),w=e.i(891343),y=e.i(966696),Y=e.i(298008),k=e.i(68642),S=e.i(813982),M=e.i(532965),E=e.i(751198);function x({event:e,weekDays:t,actualEndDate:a}){let n=(0,d.default)(e.start).startOf("day");return t.filter(e=>{let t=(0,d.default)(e).startOf("day");return(t.isAfter(n)||t.isSame(n))&&(t.isBefore(a)||t.isSame(a))})}function T(e){let t=(0,d.default)(e.end).startOf("day");return 0===(0,d.default)(e.end).hour()&&0===(0,d.default)(e.end).minute()?t.subtract(1,"day"):t}function b({eventStartDate:e,actualEndDate:t,weekDays:a}){let n=(0,d.default)(a[0]),r=(0,d.default)(a[a.length-1]),o=e.isBefore(n),i=t.isAfter(r);return o&&i?"both":o?"start":i?"end":"none"}var $=e.i(232471),W=e.i(284629),C=e.i(205693),j=e.i(391398);function O({day:e,dayIndex:a,slots:n,getStyles:r,weekendDays:o,children:i,labels:s,highlightBusinessHours:l,businessHours:u,withEventsDragAndDrop:m,onDaySlotsDragOver:f,onDaySlotsDragLeave:v,onDaySlotsDrop:D,onSlotClick:p,dropTargetSlotIndex:g,mode:h,slotsRef:w,firstSlotIndex:y,onSlotKeyDown:Y,onFirstSlotArrowUp:k,withDragSlotSelect:S,onSlotPointerDown:M,isSlotDragSelected:E,daySlotsContainerRef:x,getTimeSlotProps:T}){let b=(0,C.useDatesContext)(),V=(0,d.default)(e).day(),H=b.getWeekendDays(o).includes(V),A=(0,d.default)(e).isSame((0,d.default)(),"day"),I=(0,d.default)(e).format("YYYY-MM-DD"),R=n.map((n,o)=>{let i=g===o,d=y?.dayIndex===a&&y?.slotIndex===o,f=E?.(o,I)||!1,v=`${I} ${n.startTime}`,D=`${I} ${n.endTime}`,{onClick:x,...b}=T?.({start:v,end:D})||{},$="static"===h?void 0:t=>{p?.(String(e),n.startTime,t),x?.(t)};return(0,j.jsx)(W.UnstyledButton,{ref:e=>{e&&w?.current&&(w.current[a]||(w.current[a]=[]),w.current[a][o]=e)},...r("weekViewDaySlot"),mod:{"hour-start":n.isHourStart,...(0,c.getBusinessHoursMod)({time:n.startTime,businessHours:u,highlightBusinessHours:l,dayOfWeek:V}),"drop-target":i,"drag-selected":f,static:"static"===h},"aria-label":`${(0,t.getLabel)("timeSlot",s)} ${I} ${n.startTime} - ${n.endTime}`,tabIndex:"static"===h?-1:d?0:-1,"data-drag-slot-index":S&&"static"!==h?o:void 0,"data-drag-slot-group":S&&"static"!==h?I:void 0,onKeyDown:e=>{0===o&&"ArrowUp"===e.key&&k?(e.preventDefault(),k(a)):Y&&Y(e,a,o)},onPointerDown:S&&"static"!==h?e=>M?.(e,o,I):void 0,onClick:$,onDragOver:m&&"static"!==h?e=>e.preventDefault():void 0,...b},n.startTime)});return(0,j.jsx)($.Box,{...r("weekViewDay"),mod:{today:A,weekend:H},children:(0,j.jsxs)($.Box,{ref:x,mod:{today:A},...r("weekViewDaySlots"),onDragOver:m&&"static"!==h?t=>f?.(t,String(e),a):void 0,onDragLeave:m&&"static"!==h?v:void 0,onDrop:m&&"static"!==h?t=>D?.(t,String(e),a):void 0,children:[i,R]})})}var V={weekView:"m_42b9032d",weekViewRoot:"m_6b2099af",weekViewInner:"m_f8734f29",weekViewScrollArea:"m_44818807",weekViewHeader:"m_13bcfc1a",weekViewCorner:"m_bc98be2",weekViewSlotLabels:"m_149dcaaa",weekViewSlotLabel:"m_29f492e9",weekViewDay:"m_98199d2f",weekViewDayLabel:"m_ccf0d705",weekViewDayNumber:"m_d5b28558",weekViewDayWeekday:"m_a0fc06f9",weekViewBackgroundEvent:"m_41ce8f1f",weekViewDaySlots:"m_cd58ae46",weekViewDaySlot:"m_8ac0cbcd",weekViewWeekLabel:"m_838426b3",weekViewWeekNumber:"m_f1892b6a",weekViewAllDaySlots:"m_4f08474d",weekViewAllDaySlotsLabel:"m_85cdcfa7",weekViewAllDaySlotsEvents:"m_2923a6c6",weekViewAllDaySlotsList:"m_77edfd8b"},H=e.i(19300),A=e.i(481178),I=e.i(275519),R=e.i(433512),B=e.i(779177),z=e.i(951254),L=e.i(44091),N=e.i(62904),F=e.i(391466),Z=e.i(417241),_=e.i(332977),P=e.i(191788);let G={__staticSelector:"WeekView",withWeekendDays:!0,withCurrentTimeIndicator:!0,startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,weekdayFormat:"ddd",withWeekNumber:!0,withCurrentTimeBubble:!0,withAllDaySlots:!0,withHeader:!0,weekLabelFormat:"MMM DD",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},U=(0,A.createVarsResolver)((e,{radius:t,allDaySlotHeight:a,slotHeight:n})=>({weekView:{"--week-view-radius":void 0!==t?(0,R.getRadius)(t):void 0,"--week-view-all-day-slots-height":(0,B.rem)(a),"--week-view-slot-height":(0,B.rem)(n)}})),J=(0,I.factory)(e=>{var A;let I=(0,L.useProps)("WeekView",G,e),{classNames:R,className:B,style:J,styles:K,unstyled:Q,attributes:q,vars:X,startTime:ee,endTime:et,date:ea,onDateChange:en,intervalMinutes:er,slotLabelFormat:eo,withWeekendDays:ei,weekendDays:ed,firstDayOfWeek:es,weekdayFormat:el,radius:eu,highlightToday:ec,withCurrentTimeIndicator:em,forceCurrentTimeIndicator:ef,getCurrentTime:ev,scrollAreaProps:eD,locale:ep,withWeekNumber:eg,withCurrentTimeBubble:eh,withAllDaySlots:ew,__staticSelector:ey,withHeader:eY,onViewChange:ek,previousControlProps:eS,nextControlProps:eM,todayControlProps:eE,viewSelectProps:ex,weekLabelFormat:eT,events:eb,allDaySlotHeight:e$,slotHeight:eW,labels:eC,highlightBusinessHours:ej,businessHours:eO,renderEventBody:eV,renderEvent:eH,withEventsDragAndDrop:eA,onEventDrop:eI,canDragEvent:eR,onEventDragStart:eB,onEventDragEnd:ez,onTimeSlotClick:eL,onAllDaySlotClick:eN,onEventClick:eF,withDragSlotSelect:eZ,onSlotDragEnd:e_,mode:eP,startScrollTime:eG,renderWeekLabel:eU,onExternalEventDrop:eJ,withEventResize:eK,onEventResize:eQ,canResizeEvent:eq,recurrenceExpansionLimit:eX,getTimeSlotProps:e0,...e1}=I,e2=(0,F.useStyles)({name:ey,classes:V,props:I,className:B,style:J,classNames:R,styles:K,unstyled:Q,vars:X,varsResolver:U,attributes:q,rootSelector:"weekView"}),{resolvedClassNames:e8,resolvedStyles:e4}=(0,N.useResolvedStylesApi)({classNames:R,styles:K,props:I}),e6={classNames:e8,styles:e4,attributes:q,__staticSelector:ey,radius:eu},e3=(0,z.useMantineTheme)(),[e9,e5]=(0,P.useState)(!1),e7=(0,C.useDatesContext)(),te=(0,r.getDayTimeIntervals)({startTime:ee,endTime:et,intervalMinutes:er}),tt=(0,P.useRef)(null);(0,f.useAutoScrollOnDrag)({viewportRef:tt,enabled:(eA||!!eJ)&&"static"!==eP});let ta=(0,P.useCallback)((e,t)=>{if(!eJ)return;let a=(0,d.default)(t.day).format("YYYY-MM-DD");eJ(e.dataTransfer,`${a} ${te[t.slotIndex].startTime}`)},[eJ,te]),tn=(0,P.useCallback)((e,t)=>{eJ&&eJ(e.dataTransfer,`${(0,d.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eJ]),tr=(0,v.useDragDropHandlers)({enabled:eA,mode:eP,onEventDrop:eI,canDragEvent:eR,onEventDragStart:eB,onEventDragEnd:ez,calculateDropTarget:(e,t)=>{let a=te[e.slotIndex].startTime;return(0,u.calculateDropTime)({draggedEvent:t,targetDate:e.day,targetSlotTime:a,intervalMinutes:er})},onExternalDrop:eJ?ta:void 0}),to=(0,v.useDragDropHandlers)({enabled:eA,mode:eP,onEventDrop:eI,canDragEvent:eR,onEventDragStart:eB,onEventDragEnd:ez,calculateDropTarget:(e,t)=>{let a=(0,d.default)(t.end).diff((0,d.default)(t.start),"millisecond"),n=(0,d.default)(e).startOf("day");return{start:n.toDate(),end:n.add(a,"millisecond").toDate()}},onExternalDrop:eJ?tn:void 0}),ti=(0,p.useSlotDragSelect)({enabled:eZ&&"static"!==eP,onDragEnd:(e,t,a)=>{if(!e_)return;let n=(0,d.default)(a).format("YYYY-MM-DD");e_(`${n} ${te[e].startTime}`,`${n} ${te[t].endTime}`)}}),td=(0,D.useEventResize)({enabled:eK,mode:eP,startTime:ee,endTime:et,intervalMinutes:er,onEventResize:eQ,canResizeEvent:eq}),ts=(eA||!!eJ)&&"static"!==eP,tl=(e,t,a)=>{if(!eL)return;let n=(0,d.default)(e).format("YYYY-MM-DD"),r=te.findIndex(e=>e.startTime===t);if(-1===r)return;let o=te[r];eL({slotStart:`${n} ${o.startTime}`,slotEnd:`${n} ${o.endTime}`,nativeEvent:a})},tu=s({week:ea,withWeekendDays:ei,weekendDays:e7.getWeekendDays(ed),firstDayOfWeek:e7.getFirstDayOfWeek(es)}),tc=function({date:e,events:t,startTime:a,endTime:n,intervalMinutes:r,firstDayOfWeek:o=1,weekendDays:i=[0,6],withWeekendDays:u=!0}){let c=s({week:e,firstDayOfWeek:o,withWeekendDays:u,weekendDays:i}),m=c.length,f=(0,d.default)(c[0]),v=(0,d.default)(c[c.length-1]),D={allDayEvents:[],regularEvents:Object.fromEntries(c.map(e=>[e,[]])),backgroundEvents:Object.fromEntries(c.map(e=>[e,[]]))},p=new Map,g=new Map;for(let e of(0,S.sortEvents)(t)){if("background"===e.display){let t=(0,d.default)(e.start).startOf("day"),o=T(e),i=x({event:e,weekDays:c,actualEndDate:o}),s=b({eventStartDate:t,actualEndDate:o,weekDays:c});for(let t of i){let o=c.indexOf(t);if(-1===o)continue;let i=(0,d.default)(t),u=i.endOf("day"),f=(0,d.default)(e.start),v=(0,d.default)(e.end),p=f.isBefore(i)?i:f,g=v.isAfter(u)?u:v,h={...e,start:p.format("YYYY-MM-DD HH:mm:ss"),end:g.format("YYYY-MM-DD HH:mm:ss")},w=(0,l.isAllDayEvent)({event:h,date:t}),y=w?{top:0,height:100}:(0,M.getDayPosition)({event:h,startTime:a,endTime:n,intervalMinutes:r});if(!w&&y.height<=0)continue;let Y=o/m*100;D.backgroundEvents[t].push({...e,position:{...y,allDay:w,column:0,width:100,offset:0,overlaps:1,weekOffset:Y,row:0,hanging:s}})}continue}let t=(0,d.default)(e.start).startOf("day"),o=T(e),i=x({event:e,weekDays:c,actualEndDate:o});if(0===i.length)continue;let s=o.isAfter(t),u=b({eventStartDate:t,actualEndDate:o,weekDays:c}),v=i.some(t=>(0,l.isAllDayEvent)({event:e,date:t})),h=s||v,w=h?g:p,y=function(e){let t=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,allWeekDays:r}){let o=`col-${t}`;return!!e.has(o)&&e.get(o).some(e=>{let t=r.some(t=>(0,l.isAllDayEvent)({event:e,date:t})),o=(0,E.isEventsOverlap)(e,a);return n&&t?o:!n&&!t&&o})}({...e,columnIndex:t});)t++;return t}({columns:w,event:e,allDay:h,allWeekDays:c}),Y=`col-${y}`;w.has(Y)||w.set(Y,[]),w.get(Y).push(e);let k=h?{top:0,height:100}:(0,M.getDayPosition)({event:e,startTime:a,endTime:n,intervalMinutes:r});if(h){let a=function({eventStartDate:e,weekStartDate:t,weekDays:a,visibleDaysCount:n,hangingStart:r}){let o=e;return r&&(o=t),a.some(e=>(0,d.default)(e).isSame(o,"day"))||(o=(0,d.default)(a[0])),(a.filter(e=>(0,d.default)(e).isBefore(o)||(0,d.default)(e).isSame(o,"day")).length-1)/n*100}({eventStartDate:t,weekStartDate:f,weekDays:c,visibleDaysCount:m,hangingStart:"start"===u||"both"===u});D.allDayEvents.push({...e,position:{...k,allDay:h,column:y,width:0,offset:a,overlaps:0,row:0,hanging:u}})}else for(let t of i){let a=c.indexOf(t);if(-1===a)continue;let n=a/m*100;D.regularEvents[t].push({...e,position:{...k,allDay:h,column:y,width:0,offset:0,overlaps:0,weekOffset:n,row:0,hanging:u}})}}for(let e of c){var h=D.regularEvents[e];for(let e of h){let t=e.position.column;for(let a of h)(0,E.isEventsOverlap)(e,a)&&(t=Math.max(t,a.position.column));let a=t+1;e.position.overlaps=a,e.position.width=100/a,e.position.offset=100*e.position.column/a}}if(D.allDayEvents.length>0){let e=function(e){let t=new Map;for(let a of e){let e=0;for(;;){let n=!1;for(let[r,o]of t.entries())if(o===e&&(0,E.isEventsOverlap)(a,r)){n=!0;break}if(!n)break;e++}t.set(a,e)}return t}(D.allDayEvents),t=new Set;for(let a of D.allDayEvents){let n=e.get(a);a.position.row=n,t.add(n)}let a=Math.max(...t)+1;for(let e of D.allDayEvents){let t=(0,d.default)(e.start).startOf("day"),n=T(e);e.position.width=function({eventStartDate:e,actualEndDate:t,weekStartDate:a,weekEndDate:n,weekDays:r,visibleDaysCount:o}){let i=e;e.isBefore(a)&&(i=a);let s=t;return t.isAfter(n)&&(s=n),r.filter(e=>((0,d.default)(e).isAfter(i)||(0,d.default)(e).isSame(i,"day"))&&((0,d.default)(e).isBefore(s)||(0,d.default)(e).isSame(s,"day"))).length/o*100}({eventStartDate:t,actualEndDate:n,weekStartDate:f,weekEndDate:v,weekDays:c,visibleDaysCount:m}),e.position.overlaps=a}}return D}({...A={date:ea,events:(0,m.expandRecurringEvents)({events:eb,rangeStart:(0,d.default)(tu[0]).startOf("day").toDate(),rangeEnd:(0,d.default)(tu[tu.length-1]).endOf("day").toDate(),expansionLimit:eX}),startTime:ee,endTime:et,intervalMinutes:er,firstDayOfWeek:e7.getFirstDayOfWeek(es),weekendDays:e7.getWeekendDays(ed),withWeekendDays:ei},events:function({date:e,events:t,startTime:a,endTime:n,firstDayOfWeek:r=1}){if(void 0===t)return[];let o=new Set,s=[];for(let l of t)if(function({event:e,targetWeek:t,firstDayOfWeek:a}){let n=(0,d.default)((0,i.getStartOfWeek)({date:t,firstDayOfWeek:a})),r=n.add(7,"day");return(0,d.default)(e.start).isBefore(r)&&(0,d.default)(e.end).isAfter(n)}({event:l,targetWeek:e,firstDayOfWeek:r})&&(0,k.isEventInTimeRange)({event:l,startTime:a,endTime:n})){if(s.push((0,Y.validateEvent)(l)),o.has(l.id))throw Error(`[@mantine/schedule] WeekView: Duplicated event ids found: ${l.id}`);o.add(l.id)}return s}(A)}),tm=te.map(e=>{let t=(0,a.formatDate)({date:(0,d.default)(`${(0,d.default)(ea).format("YYYY-MM-DD")} ${e.startTime}`),locale:e7.getLocale(ep),format:eo});return(0,P.createElement)($.Box,{...e2("weekViewSlotLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,c.getBusinessHoursMod)({time:e.startTime,businessHours:eO,highlightBusinessHours:ej})}},t)}),tf=(0,P.useRef)([]),tv=(0,P.useRef)([]),tD=(0,P.useRef)([]),tp=(0,P.useRef)([]),tg=(0,_.useMergedRef)(tt,eD?.viewportRef),th={dayIndex:0,slotIndex:0};(0,Z.useIsomorphicEffect)(()=>{if(!eG||!tt.current)return;let e=tf.current[0];if(!e||0===e.length)return;let t=te.findIndex(e=>e.startTime>=eG);if(t<0)return;let a=e[t];if(!a)return;let n=a.getBoundingClientRect(),r=tt.current.getBoundingClientRect();tt.current.scrollTo({left:0,top:n.top-r.top})},[]);let tw=(0,P.useCallback)((e,t)=>{let a=tf.current[t]??[],n=a.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(n>=0)return n;let r=a[0],o=a[a.length-1];if(!r||!o)return null;let i=r.getBoundingClientRect(),d=o.getBoundingClientRect();return e.clientY<i.top?0:e.clientY>d.bottom?a.length-1:null},[]),ty=(e,t,a)=>{!function({controlsRef:e,dayIndex:t,slotIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,dayIndex:n,slotIndex:r,size:o}){let i=function({direction:e,dayIndex:t,slotIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":if(0===a)return null;return{dayIndex:t,slotIndex:a-1};case"down":if(a===r-1)return null;return{dayIndex:t,slotIndex:a+1};case"left":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{dayIndex:t-1,slotIndex:e}}case"right":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{dayIndex:t+1,slotIndex:e}}default:return null}}({direction:a,dayIndex:n,slotIndex:r,size:o});if(!i)return;let d=t.current?.[i.dayIndex]?.[i.slotIndex];d&&(d.disabled||d.getAttribute("data-hidden")?e({controlsRef:t,direction:a,dayIndex:i.dayIndex,slotIndex:i.slotIndex,size:o}):d.focus())}({controlsRef:e,direction:r,dayIndex:t,slotIndex:a,size:o})}}({controlsRef:tf,dayIndex:t,slotIndex:a,event:e})},tY=()=>ev?(0,d.default)(ev()):(0,d.default)(),tk=tY(),tS=em?ef?tu.findIndex(e=>(0,d.default)(e).day()===tk.day()):tu.findIndex(e=>(0,d.default)(e).isSame(tk,"date")):-1,tM=tu.map((e,n)=>(0,P.createElement)(W.UnstyledButton,{...e2("weekViewDayLabel"),key:e,ref:e=>{tD.current[n]=e},"aria-label":`${(0,t.getLabel)("weekday",eC)} ${(0,d.default)(e).format("YYYY-MM-DD")}`,mod:{today:(0,d.default)(e).isSame(tk,"day")&&!!ec,weekend:e7.getWeekendDays(ed).includes((0,d.default)(e).day()),static:"static"===eP},tabIndex:"static"===eP?-1:0===n?0:-1,onKeyDown:"static"===eP?void 0:e=>{let t;"ArrowRight"===(t=e.key)&&n<tu.length-1?(e.preventDefault(),tD.current[n+1]?.focus()):"ArrowLeft"===t&&n>0&&(e.preventDefault(),tD.current[n-1]?.focus())},onClick:"static"===eP?void 0:()=>{ek?.("day"),en?.((0,o.toDateString)(e))}},(0,P.createElement)($.Box,{...e2("weekViewDayWeekday"),key:"weekday"},(0,a.formatDate)({locale:e7.getLocale(ep),date:e,format:el})),(0,P.createElement)("div",{...e2("weekViewDayNumber"),key:"date"},(0,d.default)(e).date()))),tE=tu.map((e,t)=>{let a=(tc.backgroundEvents[e]||[]).filter(e=>!e.position.allDay).map(e=>{let t=e3.variantColorResolver({color:e.color||e3.primaryColor,theme:e3,variant:"light",autoContrast:!0}),a="function"==typeof eV?eV(e):e.title,n={key:`bg-${e.id}`,...e2("weekViewBackgroundEvent",{style:{top:`${e.position.top}%`,height:`${e.position.height}%`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eH)return eH(e,n);let{key:r,...o}=n;return(0,j.jsx)($.Box,{...o},r)}),n=(tc.regularEvents[e]||[]).map(a=>{let n=(0,l.isAllDayEvent)({event:a,date:e}),r=!n&&tr.isDraggableEvent(a),o=!n&&td.isResizableEvent(a),i=td.getResizePosition(a.id),s=i?i.top:a.position.top,u=i?i.height:a.position.height;return(0,j.jsx)(w.ScheduleEvent,{event:a,autoSize:!0,hanging:a.position.hanging,draggable:r,withResize:o,isResizing:null!==i,onResizeStart:o?(n,r)=>{let o=tp.current[t];o&&td.handleResizeStart({event:a,edge:n,container:o,originalTop:a.position.top,originalHeight:a.position.height,eventDate:(0,d.default)(e).format("YYYY-MM-DD"),pointerEvent:r})}:void 0,renderEventBody:eV,renderEvent:eH,radius:eu,mode:eP,onClick:eF?e=>{td.wasResizing()||eF(a,e)}:void 0,style:{position:"absolute",top:`calc(${s}% + 1px)`,left:`${a.position.offset}%`,width:`${a.position.width}%`,height:`calc(${u}% - 1px)`}},a.id)});return(0,j.jsxs)(O,{day:e,dayIndex:t,slots:te,getStyles:e2,weekendDays:ed,highlightBusinessHours:ej,businessHours:eO,labels:eC,withEventsDragAndDrop:ts,mode:eP,slotsRef:tf,firstSlotIndex:th,onSlotKeyDown:ty,onSlotClick:tl,onFirstSlotArrowUp:ew?e=>{tv.current[e]?.focus()}:void 0,onDaySlotsDragOver:(e,t,a)=>{let n=tw(e,a);null!==n&&tr.handleDragOver(e,{day:t,slotIndex:n})},onDaySlotsDragLeave:tr.handleDragLeave,onDaySlotsDrop:(e,t,a)=>{let n=tw(e,a);null!==n&&tr.handleDrop(e,{day:t,slotIndex:n})},dropTargetSlotIndex:tr.dropTarget?.day===e?tr.dropTarget.slotIndex:void 0,withDragSlotSelect:eZ,onSlotPointerDown:ti.handleSlotPointerDown,isSlotDragSelected:ti.isSlotSelected,daySlotsContainerRef:e=>{tp.current[t]=e},getTimeSlotProps:e0,children:[a,n]},e)}),tx=tu.map((e,a)=>(0,j.jsx)(W.UnstyledButton,{"aria-label":`${(0,t.getLabel)("allDay",eC)} ${(0,d.default)(e).format("YYYY-MM-DD")}`,ref:e=>{tv.current[a]=e},tabIndex:0===a?0:-1,onKeyDown:e=>{let t;"ArrowRight"===(t=e.key)&&a<tu.length-1?(e.preventDefault(),tv.current[a+1]?.focus()):"ArrowLeft"===t&&a>0?(e.preventDefault(),tv.current[a-1]?.focus()):"ArrowDown"===t&&(e.preventDefault(),tf.current?.[a]?.[0]?.focus())},onClick:"static"!==eP&&eN?t=>eN((0,d.default)(e).format("YYYY-MM-DD"),t):void 0,onDragOver:ts?t=>to.handleDragOver(t,e):void 0,onDragLeave:ts?to.handleDragLeave:void 0,onDrop:ts?t=>to.handleDrop(t,e):void 0,...e2("weekViewDaySlot"),mod:{"drop-target":to.isDropTarget(e)}},e)),tT=(0,P.useMemo)(()=>new Set(tc.allDayEvents.map(e=>e.id)),[tc.allDayEvents]),tb=tc.allDayEvents.map(e=>(0,j.jsx)(w.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,hanging:e.position.hanging,draggable:to.isDraggableEvent(e),renderEvent:eH,mode:eP,onClick:eF?t=>eF(e,t):void 0,style:{position:"absolute",zIndex:2,top:`calc(${50*e.position.row}% + 1px)`,left:`calc(${e.position.offset}% + 1px)`,width:`calc(${e.position.width}% - 1px)`,height:"calc(50% - 2px)",maxHeight:"calc(50% - 2px)"}},e.id)),t$=tu.flatMap((e,t)=>{let a=(tc.backgroundEvents[e]||[]).filter(e=>e.position.allDay),n=100/tu.length,r=t*n;return a.map(t=>{let a=e3.variantColorResolver({color:t.color||e3.primaryColor,theme:e3,variant:"light",autoContrast:!0}),o="function"==typeof eV?eV(t):t.title,i={key:`bg-allday-${t.id}-${e}`,...e2("weekViewBackgroundEvent",{style:{top:0,height:"100%",left:`${r}%`,width:`${n}%`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:o};if("function"==typeof eH)return eH(t,i);let{key:d,...s}=i;return(0,j.jsx)($.Box,{...s},d)})}),tW=Math.max(...tc.allDayEvents.map(e=>e.position.row),1)-1,tC=(0,j.jsxs)($.Box,{...e2("weekView"),mod:{static:"static"===eP,"slot-dragging":ti.isDragging},...e1,children:[eY&&(0,j.jsx)(y.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>{var e;let t;return e=e7.getFirstDayOfWeek(es),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,d.default)(t).set("date",(0,d.default)(t).date()-7))},next:()=>{var e;let t;return e=e7.getFirstDayOfWeek(es),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,d.default)(t).set("date",(0,d.default)(t).date()+7))},today:()=>(0,o.toDateString)(tY())},control:{miw:140,title:function({weekdays:e,locale:t,weekLabelFormat:n,renderWeekLabel:r}){return r?r({weekStart:(0,d.default)(e[0]).format("YYYY-MM-DD"),weekEnd:(0,d.default)(e[e.length-1]).format("YYYY-MM-DD")}):`${(0,a.formatDate)({locale:t,date:e[0],format:n})} – ${(0,a.formatDate)({locale:t,date:e[e.length-1],format:n})}, ${(0,a.formatDate)({locale:t,date:e[0],format:"YYYY"})}`}({weekdays:tu,locale:e7.getLocale(ep),weekLabelFormat:eT,renderWeekLabel:eU})},labels:eC,onDateChange:en,onViewChange:ek,previousControlProps:eS,nextControlProps:eM,todayControlProps:eE,viewSelectProps:ex,stylesApiProps:e6}),(0,j.jsx)($.Box,{...e2("weekViewRoot"),__vars:{"--indicator-offset-index":-1===tS?void 0:`${tS+1}`,"--number-of-days":ei?"7":`${7-e7.getWeekendDays(ed).length}`},mod:{"with-weekends":ei},children:(0,j.jsxs)(H.ScrollArea.Autosize,{scrollbarSize:4,...eD,...e2("weekViewScrollArea",{className:eD?.className,style:eD?.style}),onScrollPositionChange:e=>{eD?.onScrollPositionChange?.(e),e5(0!==e.y)},viewportRef:tg,children:[(0,j.jsxs)($.Box,{...e2("weekViewHeader"),mod:{scrolled:e9},children:[(0,P.createElement)("div",{...e2("weekViewCorner"),key:"corner"},eg&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{...e2("weekViewWeekLabel"),children:(0,t.getLabel)("week",eC)}),(0,j.jsx)("div",{...e2("weekViewWeekNumber"),children:(0,n.getWeekNumber)(ea)})]})),tM]}),ew&&(0,j.jsxs)("div",{...e2("weekViewAllDaySlots"),children:[(0,j.jsx)("div",{...e2("weekViewAllDaySlotsLabel"),children:(0,t.getLabel)("allDay",eC)}),(0,j.jsxs)("div",{...e2("weekViewAllDaySlotsList"),children:[t$,(0,j.jsx)($.Box,{...e2("weekViewAllDaySlotsEvents"),__vars:{"--extra-rows":`${tW}`},children:tb}),tx]})]}),(0,j.jsxs)("div",{...e2("weekViewInner"),children:[(0,j.jsx)("div",{...e2("weekViewSlotLabels"),children:tm}),em&&-1!==tS&&(0,j.jsx)(g.CurrentTimeIndicator,{startOffset:"calc(100% - (100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index) + 1) + ((var(--number-of-days) - var(--indicator-offset-index) + 1) * var(--indicator-labels-offset)))",endOffset:"calc((100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index)) - (var(--number-of-days) - var(--indicator-offset-index)) * var(--indicator-labels-offset))",timeBubbleStartOffset:"calc(var(--week-view-slots-label-width) - var(--time-bubble-width))",currentTimeFormat:eo,withTimeBubble:eh,withThumb:!eh||0!==tS,locale:ep,startTime:ee,endTime:et,intervalMinutes:er,getCurrentTime:ev,...e6}),tE]})]})})]}),tj=(0,P.useMemo)(()=>({isDragging:tr.dragContextValue.isDragging||to.dragContextValue.isDragging,draggedEventId:tr.dragContextValue.draggedEventId??to.dragContextValue.draggedEventId,draggedEvent:tr.dragContextValue.draggedEvent??to.dragContextValue.draggedEvent,dropTarget:tr.dragContextValue.dropTarget??to.dragContextValue.dropTarget,onDragStart:e=>{tT.has(e.id)?to.handleDragStart(e):tr.handleDragStart(e)},onDragEnd:()=>{tr.handleDragEnd(),to.handleDragEnd()},setDropTarget:tr.dragContextValue.setDropTarget}),[tr.dragContextValue,to.dragContextValue,tT]);return eA?(0,j.jsx)(h.DragContext.Provider,{value:tj,children:tC}):tC});J.displayName="@mantine/schedule/WeekView",J.classes=V,J.varsResolver=U,e.s(["WeekView",0,J],315401)},953813,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),r=(0,a.default)(n).add(1,"day").format("YYYY-MM-DD"),o=(0,a.default)(n).add(2,"day").format("YYYY-MM-DD"),i=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"Project Planning",start:`${o} 10:00:00`,end:`${o} 12:00:00`,color:"pink"},{id:7,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],d=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Tomorrow Event 1",start:`${r} 09:00:00`,end:`${r} 10:30:00`,color:"green"},{id:5,title:"Tomorrow Event 2",start:`${r} 09:30:00`,end:`${r} 11:00:00`,color:"orange"}],s=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${r} 17:30:00`,end:`${r} 18:00:00`,color:"orange"}],l=`
import dayjs from 'dayjs';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${startOfWeek} 10:00:00\`,
    end: \`\${startOfWeek} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(startOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`;var u=e.i(191788),c=e.i(391398),m=e.i(315401);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"09:00:00",endTime:"17:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
    />
  );
}
`},D={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},p={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      firstDayOfWeek={0}
    />
  );
}
`},g={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",weekdayFormat:"dd"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      weekdayFormat="dd"
    />
  );
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withWeekendDays={false}
    />
  );
}
`},w={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",highlightToday:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      highlightToday
    />
  );
}
`},y={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withWeekNumber:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withWeekNumber={false}
    />
  );
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}
`},k={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:"2030-06-10",events:i,withCurrentTimeIndicator:!0,forceCurrentTimeIndicator:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date="2030-06-10"
      events={events}
      withCurrentTimeIndicator
      forceCurrentTimeIndicator
    />
  );
}
`};var S=e.i(988798),M=e.i(671640),E=e.i(664894),x=e.i(53157);a.default.extend(x.default),a.default.extend(E.default);let T=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],b={type:"code",component:function(){let[e,t]=(0,u.useState)("UTC"),n=()=>(0,a.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),r=n().split(" ")[0];return(0,c.jsxs)(M.Stack,{children:[(0,c.jsx)(S.Select,{label:"Display timezone",data:T,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,c.jsx)(m.WeekView,{date:r,events:[{id:1,title:"Morning standup",start:`${r} 09:00:00`,end:`${r} 09:30:00`,color:"blue"},{id:2,title:"Team meeting",start:`${r} 12:00:00`,end:`${r} 13:00:00`,color:"teal"},{id:3,title:"Code review",start:`${r} 16:00:00`,end:`${r} 17:00:00`,color:"grape"}],getCurrentTime:n,startScrollTime:(0,a.default)(n()).subtract(2,"hour").format("HH:mm:ss"),withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { WeekView } from '@mantine/schedule';
import { getEvents } from './data';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezones = ['UTC', 'America/New_York', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Tokyo'];

function Demo() {
  const [tz, setTz] = useState('UTC');

  // getCurrentTime is called on every tick, so the indicator keeps updating
  const getCurrentTime = () => dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss');
  const currentDate = getCurrentTime().split(' ')[0];

  return (
    <Stack>
      <Select
        label="Display timezone"
        data={timezones}
        value={tz}
        onChange={(value) => setTz(value!)}
        allowDeselect={false}
      />

      <WeekView
        date={currentDate}
        events={getEvents(currentDate)}
        getCurrentTime={getCurrentTime}
        startScrollTime={dayjs(getCurrentTime()).subtract(2, 'hour').format('HH:mm:ss')}
        withCurrentTimeIndicator
        withCurrentTimeBubble
      />
    </Stack>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData } from '@mantine/schedule';\n\nexport function getEvents(date: string): ScheduleEventData[] {\n  return [\n    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },\n    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },\n    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },\n  ];\n}\n",language:"tsx",fileName:"data.ts"}]},$={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withAllDaySlots:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withAllDaySlots={false}
    />
  );
}
`},W={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withHeader={false}
    />
  );
}
`},C={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",weekLabelFormat:"MMMM D, YYYY"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      weekLabelFormat="MMMM D, YYYY"
    />
  );
}
`},j={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h A"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotLabelFormat="h A"
    />
  );
}
`},O={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotHeight={80}
      allDaySlotHeight={60}
    />
  );
}
`},V={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:s,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`},H={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:s,highlightBusinessHours:!0,businessHours:{1:["09:00:00","17:00:00"],2:["09:00:00","17:00:00"],3:["09:00:00","17:00:00"],4:["09:00:00","17:00:00"],5:["09:00:00","13:00:00"]},startTime:"07:00:00",endTime:"20:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={{
        1: ['09:00:00', '17:00:00'],
        2: ['09:00:00', '17:00:00'],
        3: ['09:00:00', '17:00:00'],
        4: ['09:00:00', '17:00:00'],
        5: ['09:00:00', '13:00:00'],
      }}
      startTime="07:00:00"
      endTime="20:00:00"
    />
  );
}
`},A={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`};var I=e.i(441058);let R=(0,a.default)().format("YYYY-MM-DD"),B=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),z=[{id:1,title:"Morning Standup",start:`${R} 09:00:00`,end:`${R} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${B} 11:00:00`,end:`${B} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${R} 14:00:00`,end:`${R} 15:00:00`,color:"violet"},{id:4,title:"Company Holiday",start:(0,a.default)((0,I.getStartOfWeek)({date:R,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,I.getStartOfWeek)({date:R,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:5,title:"Release Day",start:(0,a.default)((0,I.getStartOfWeek)({date:R,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,I.getStartOfWeek)({date:R,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(z);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Company Holiday',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 5,
    title: 'Release Day',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`},N=(0,a.default)().format("YYYY-MM-DD"),F=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),Z=[{id:1,title:"Morning Standup",start:`${N} 09:00:00`,end:`${N} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${F} 11:00:00`,end:`${F} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${N} 14:00:00`,end:`${N} 15:00:00`,color:"violet"}],_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(Z);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`};var P=e.i(19683),G=e.i(369974),U=e.i(284629);let J=(0,a.default)().startOf("week"),K=[{id:1,title:"Team Standup",start:J.add(1,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:J.add(1,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:J.add(2,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:J.add(2,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:J.add(3,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:J.add(3,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:J.add(4,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:J.add(4,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"All Day Conference",start:J.add(5,"day").format("YYYY-MM-DD 00:00:00"),end:J.add(5,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(K);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(r).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(G.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(G.HoverCard.Target,{children:(0,c.jsx)(U.UnstyledButton,{...t})}),(0,c.jsx)(G.HoverCard.Dropdown,{children:(0,c.jsx)(P.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, Text, Stack, Badge, Group, UnstyledButton } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  start: dayjs(newStart).format('YYYY-MM-DD HH:mm:ss'),
                  end: dayjs(newEnd).format('YYYY-MM-DD HH:mm:ss'),
                }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    />
  );
}
`,language:"tsx"},{fileName:"EventDetails.tsx",code:P._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(K,null,2)};`,language:"tsx"}]},q={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`};var X=e.i(162077);let ee={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(i),[o,d]=(0,u.useState)(!1),[s,l]=(0,u.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),d(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),d(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,c.jsx)(X.EventForm,{opened:o,onClose:()=>d(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events } from './events';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

  const handleTimeSlotClick = ({ slotStart, slotEnd }: { slotStart: string; slotEnd: string }) => {
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleAllDaySlotClick = (slotDate: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(slotDate).startOf('day').toDate(),
      end: dayjs(slotDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSubmit = (values: EventData) => {
    if (values.id) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === values.id
            ? {
                ...event,
                title: values.title,
                start: dayjs(values.start).toISOString(),
                end: dayjs(values.end).toISOString(),
                color: values.color || 'blue',
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: values.title,
          start: dayjs(values.start).toISOString(),
          end: dayjs(values.end).toISOString(),
          color: values.color || 'blue',
        },
      ]);
    }
  };

  const handleSlotDragEnd = (rangeStart: string, rangeEnd: string) => {
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        startTime="08:00:00"
        endTime="18:00:00"
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:X._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]},et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(i);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
import { useState } from 'react';
import { WeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents } from './data';

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startScrollTime="09:00:00"
      scrollAreaProps={{ mah: 500 }}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var ea=e.i(232471),en=e.i(20035),er=e.i(883364);let eo=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ei={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)([]),n=(0,u.useRef)(1);return(0,c.jsxs)(en.Grid,{children:[(0,c.jsxs)(en.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(er.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),eo.map(e=>(0,c.jsxs)(ea.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(er.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(er.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,c.jsx)(en.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(r),s=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const sidebarItems = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.add(data.duration, 'minutes');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Text fw={500} mb="xs">Drag to schedule</Text>
        {sidebarItems.map((item) => (
          <Box
            key={item.title}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(item));
              e.dataTransfer.effectAllowed = 'copy';
            }}
            style={{
              padding: '8px 12px',
              marginBottom: 8,
              borderRadius: 4,
              cursor: 'grab',
              backgroundColor: \`var(--mantine-color-\${item.color}-light)\`,
              color: \`var(--mantine-color-\${item.color}-light-color)\`,
            }}
          >
            <Text size="sm" fw={500}>{item.title}</Text>
            <Text size="xs">{item.duration} min</Text>
          </Box>
        ))}
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <WeekView
          date={new Date()}
          events={events}
          startTime="08:00:00"
          endTime="18:00:00"
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},ed=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],es={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ed),[n,r]=(0,u.useState)([]),[o,i]=(0,u.useState)(!1),d=(0,u.useRef)(1);return(0,c.jsxs)(en.Grid,{children:[(0,c.jsx)(en.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(ea.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:d}=JSON.parse(o),s=n.find(e=>String(e.id)===String(d));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),r(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(er.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsxs)(ea.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(er.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(er.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,c.jsx)(er.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(en.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(m.WeekView,{date:new Date,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),s=(0,a.default)(n),l=s.add(i.duration,"minutes");r(e=>[...e,{id:d.current++,title:i.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

interface SidebarItem {
  title: string;
  duration: number;
  color: string;
}

const initialSidebarItems: SidebarItem[] = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const [sidebarHighlight, setSidebarHighlight] = useState(false);
  const nextId = useRef(1);

  const handleExternalDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const raw = dataTransfer.getData('text/plain');
    if (!raw) {
      return;
    }

    const data = JSON.parse(raw);
    const start = dayjs(dropDateTime);
    const end = start.add(data.duration, 'minutes');

    setEvents((prev) => [
      ...prev,
      {
        id: nextId.current++,
        title: data.title,
        start: start.format('YYYY-MM-DD HH:mm:ss'),
        end: end.format('YYYY-MM-DD HH:mm:ss'),
        color: data.color,
      },
    ]);
    setSidebarItems((prev) => prev.filter((item) => item.title !== data.title));
  };

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  const handleSidebarDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setSidebarHighlight(false);
    const raw = e.dataTransfer.getData('application/json');
    if (!raw) {
      return;
    }

    const { eventId } = JSON.parse(raw);
    const event = events.find((ev) => String(ev.id) === String(eventId));
    if (!event) {
      return;
    }

    const duration = dayjs(event.end).diff(dayjs(event.start), 'minutes');
    setSidebarItems((prev) => [
      ...prev,
      { title: event.title, duration, color: event.color || 'blue' },
    ]);
    setEvents((prev) => prev.filter((ev) => ev.id !== event.id));
  };

  return (
    <Grid>
      <Grid.Col span={{ base: 12, sm: 3 }}>
        <Box
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            setSidebarHighlight(true);
          }}
          onDragLeave={() => setSidebarHighlight(false)}
          onDrop={handleSidebarDrop}
          style={{
            padding: 8,
            borderRadius: 8,
            border: sidebarHighlight
              ? '2px dashed var(--mantine-color-blue-5)'
              : '2px dashed transparent',
            transition: 'border-color 150ms',
          }}
        >
          <Text fw={500} mb="xs">Unscheduled</Text>
          {sidebarItems.map((item) => (
            <Box
              key={item.title}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify(item));
                e.dataTransfer.effectAllowed = 'copy';
              }}
              style={{
                padding: '8px 12px',
                marginBottom: 8,
                borderRadius: 4,
                cursor: 'grab',
                backgroundColor: \`var(--mantine-color-\${item.color}-light)\`,
                color: \`var(--mantine-color-\${item.color}-light-color)\`,
              }}
            >
              <Text size="sm" fw={500}>{item.title}</Text>
              <Text size="xs">{item.duration} min</Text>
            </Box>
          ))}
          {sidebarItems.length === 0 && (
            <Text size="xs" c="dimmed">Drag events here to unschedule</Text>
          )}
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <WeekView
          date={new Date()}
          events={events}
          startTime="08:00:00"
          endTime="18:00:00"
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},el=(0,a.default)((0,I.getStartOfWeek)({date:new Date,firstDayOfWeek:1})).format("YYYY-MM-DD"),eu=[{id:"weekly-sync-series",title:"Weekly sync (series)",start:`${el} 10:00:00`,end:`${el} 11:00:00`,color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12",exdate:[`${(0,a.default)(el).add(2,"day").format("YYYY-MM-DD")} 10:00:00`]}},{id:"weekly-sync-override",title:"Weekly sync (moved this week)",start:`${(0,a.default)(el).add(2,"day").format("YYYY-MM-DD")} 15:00:00`,end:`${(0,a.default)(el).add(2,"day").format("YYYY-MM-DD")} 16:00:00`,color:"grape",recurringEventId:"weekly-sync-series",recurrenceId:`${(0,a.default)(el).add(2,"day").format("YYYY-MM-DD")} 10:00:00`},{id:"one-off-week",title:"One-off interview",start:`${(0,a.default)(el).add(1,"day").format("YYYY-MM-DD")} 13:00:00`,end:`${(0,a.default)(el).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,color:"green"}],ec={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(el);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:eu,startTime:"08:00:00",endTime:"20:00:00",intervalMinutes:60})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, getStartOfWeek } from '@mantine/schedule';

const weekStart = dayjs(getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })).format('YYYY-MM-DD');

const events = [
  {
    id: 'weekly-sync-series',
    title: 'Weekly sync (series)',
    start: \`\${weekStart} 10:00:00\`,
    end: \`\${weekStart} 11:00:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12',
      exdate: [\`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`],
    },
  },
  {
    id: 'weekly-sync-override',
    title: 'Weekly sync (moved this week)',
    start: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 15:00:00\`,
    end: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 16:00:00\`,
    color: 'grape',
    recurringEventId: 'weekly-sync-series',
    recurrenceId: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`,
  },
];

function Demo() {
  const [date, setDate] = useState(weekStart);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="20:00:00"
      intervalMinutes={60}
    />
  );
}
`},em=(0,a.default)().format("YYYY-MM-DD"),ef=[{id:"lunch-block",title:"Lunch break",start:`${em} 12:00:00`,end:`${em} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${em} 14:00:00`,end:`${em} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${em} 10:00:00`,end:`${em} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${em} 14:30:00`,end:`${em} 15:30:00`,color:"green"}],ev={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(em);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:ef,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'lunch-block',
    title: 'Lunch break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'gray',
    display: 'background',
  },
  {
    id: 'focus-time',
    title: 'Focus time',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'blue',
    display: 'background',
  },
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: \`\${today} 14:30:00\`,
    end: \`\${today} 15:30:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},eD=(0,a.default)((0,I.getStartOfWeek)({date:new Date,firstDayOfWeek:1})),ep=Array.from({length:5},(e,t)=>eD.add(t,"day").format("YYYY-MM-DD")),eg=[...ep.map((e,t)=>({id:`lunch-${t}`,title:"Lunch break",start:`${e} 12:00:00`,end:`${e} 13:00:00`,color:"red",display:"background"})),{id:"team-meeting",title:"Team meeting",start:`${ep[0]} 10:00:00`,end:`${ep[0]} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ep[2]} 15:00:00`,end:`${ep[2]} 16:00:00`,color:"green"}],eh={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eg);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:r})=>{e.some(e=>"background"===e.display&&n<e.end&&r>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:r}:e))},styles:{weekViewBackgroundEvent:{background:`repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            var(--mantine-color-red-light) 10px,
            var(--mantine-color-red-light) 12px
          )`,color:"var(--mantine-color-red-light-color)"}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { getStartOfWeek, ScheduleEventData, WeekView } from '@mantine/schedule';
import classes from './Demo.module.css';

const weekStart = dayjs(
  getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })
);

const weekdays = Array.from({ length: 5 }, (_, i) =>
  weekStart.add(i, 'day').format('YYYY-MM-DD')
);

const initialEvents: ScheduleEventData[] = [
  ...weekdays.map((day, i) => ({
    id: \`lunch-\${i}\`,
    title: 'Lunch break',
    start: \`\${day} 12:00:00\`,
    end: \`\${day} 13:00:00\`,
    color: 'red',
    display: 'background' as const,
  })),
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${weekdays[0]} 10:00:00\`,
    end: \`\${weekdays[0]} 11:00:00\`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: \`\${weekdays[2]} 15:00:00\`,
    end: \`\${weekdays[2]} 16:00:00\`,
    color: 'green',
  },
];

function overlapsBackground(
  newStart: string,
  newEnd: string,
  events: ScheduleEventData[]
) {
  return events.some(
    (e) =>
      e.display === 'background' && newStart < e.end && newEnd > e.start
  );
}

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
  }) => {
    if (overlapsBackground(newStart, newEnd, events)) {
      return;
    }

    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? { ...event, start: newStart, end: newEnd }
          : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      classNames={{ weekViewBackgroundEvent: classes.backgroundEvent }}
    />
  );
}
`},{fileName:"Demo.module.css",language:"css",code:`.backgroundEvent {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    var(--mantine-color-red-light) 10px,
    var(--mantine-color-red-light) 12px
  );
  color: var(--mantine-color-red-light-color);
}
`}]};var ew=e.i(428127);let ey={defaultExpanded:!1,type:"code",component:function(){let e,t,[n,r]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(ew.ScheduleHeader,{children:[(0,c.jsx)(ew.ScheduleHeader.Previous,{onClick:()=>r((0,a.default)(n).subtract(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(ew.ScheduleHeader.Control,{interactive:!1,miw:200,children:(t=(e=(0,a.default)((0,I.getStartOfWeek)({date:n,firstDayOfWeek:1}))).add(6,"day"),e.month()===t.month()?`${e.format("MMM D")} – ${t.format("D, YYYY")}`:`${e.format("MMM D")} – ${t.format("MMM D, YYYY")}`)}),(0,c.jsx)(ew.ScheduleHeader.Next,{onClick:()=>r((0,a.default)(n).add(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(ew.ScheduleHeader.Today,{onClick:()=>r((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(ew.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(m.WeekView,{date:n,onDateChange:r,events:i,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DateStringValue,
  getStartOfWeek,
  ScheduleHeader,
  WeekView,
} from '@mantine/schedule';
import { events } from './data';

function getWeekRangeLabel(date: DateStringValue) {
  const start = dayjs(getStartOfWeek({ date, firstDayOfWeek: 1 }));
  const end = start.add(6, 'day');
  if (start.month() === end.month()) {
    return \`\${start.format('MMM D')} – \${end.format('D, YYYY')}\`;
  }
  return \`\${start.format('MMM D')} – \${end.format('MMM D, YYYY')}\`;
}

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
                .subtract(1, 'week')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {getWeekRangeLabel(date)}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'week')
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

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};e.i(27355);let eY={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",weekday:"Día de la semana",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      locale="es"
      labels={{
        day: 'D\xeda',
        week: 'Semana',
        month: 'Mes',
        year: 'A\xf1o',
        allDay: 'Todo el d\xeda',
        weekday: 'D\xeda de la semana',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ek={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var eS=e.i(593612),eM=e.i(554166),eE=e.i(725695);let ex=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),eT=(0,a.default)(ex).add(1,"day").format("YYYY-MM-DD"),eb=[{id:1,title:"Morning Standup",start:`${ex} 09:00:00`,end:`${ex} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${ex} 11:00:00`,end:`${ex} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${eT} 12:30:00`,end:`${eT} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],e$={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:eb,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,c.jsxs)(eE.Group,{children:[(0,c.jsx)(er.Text,{fz:12,fw:500,children:e.title}),(0,c.jsxs)(eE.Group,{gap:4,children:[(0,c.jsx)(eS.ClockIcon,{size:12}),(0,c.jsx)(er.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,c.jsxs)(eE.Group,{gap:4,children:[(0,c.jsx)(eM.MapPinIcon,{size:12}),(0,c.jsx)(er.Text,{fz:10,children:e.payload.location})]})]})})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  {
    id: 2,
    title: 'Client Meeting',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'green',
    payload: { location: 'Video Call' },
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${dayAfterStartOfWeek} 12:30:00\`,
    end: \`\${dayAfterStartOfWeek} 13:30:00\`,
    color: 'orange',
    payload: { location: 'Cafeteria' },
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <Group>
          <Text fz={12} fw={500}>
            {event.title}
          </Text>
          <Group gap={4}>
            <ClockIcon size={12} />
            <Text fz={10} lh={1}>
              {dayjs(event.start).format('h:mm A')}
            </Text>
          </Group>

          {event.payload?.location && (
            <Group gap={4}>
              <MapPinIcon size={12} />
              <Text fz={10}>{event.payload.location}</Text>
            </Group>
          )}
        </Group>
      )}
    />
  );
}
`},eW=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),eC=(0,a.default)(eW).add(1,"day").format("YYYY-MM-DD"),ej=(0,a.default)(eW).add(2,"day").format("YYYY-MM-DD"),eO=[{id:1,title:"Conference Day",start:`${eW} 00:00:00`,end:(0,a.default)(eW).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${eC} 00:00:00`,end:(0,a.default)(eC).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${eW} 00:00:00`,end:(0,a.default)(ej).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Morning Standup",start:`${eW} 09:00:00`,end:`${eW} 09:30:00`,color:"blue"},{id:5,title:"Code Review",start:`${eC} 14:00:00`,end:`${eC} 15:00:00`,color:"violet"}],eV={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:eO,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');
const twoDaysAfter = dayjs(startOfWeek).add(2, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Conference Day',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(startOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 2,
    title: 'Holiday',
    start: \`\${dayAfterStartOfWeek} 00:00:00\`,
    end: dayjs(dayAfterStartOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
  },
  {
    id: 3,
    title: 'Team Building',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(twoDaysAfter).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
  {
    id: 4,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 5,
    title: 'Code Review',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},eH=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),eA=(0,a.default)(eH).add(1,"day").format("YYYY-MM-DD"),eI=[{id:1,title:"Draggable Event",start:`${eH} 09:00:00`,end:`${eH} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${eH} 11:00:00`,end:`${eH} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${eA} 14:00:00`,end:`${eA} 15:00:00`,color:"green"}],eR={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(eI);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canDragEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable Event',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Draggable',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      canDragEvent={(event) => !event.payload?.locked}
    />
  );
}
`},eB=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),ez=(0,a.default)(eB).add(1,"day").format("YYYY-MM-DD"),eL=[{id:1,title:"Resizable Event",start:`${eB} 09:00:00`,end:`${eB} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${eB} 11:00:00`,end:`${eB} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${ez} 14:00:00`,end:`${ez} 15:00:00`,color:"green"}],eN={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(eL);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`};var eF=e.i(485108);let eZ={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(eE.Group,{mb:"md",children:[(0,c.jsx)(eF.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Week"}),(0,c.jsxs)(er.Text,{fw:500,children:[(0,a.default)(e).startOf("week").format("MMM D")," –"," ",(0,a.default)(e).endOf("week").format("MMM D, YYYY")]}),(0,c.jsx)(eF.Button,{onClick:()=>t((0,a.default)(e).add(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Next Week"})]}),(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Week
        </Button>
        <Text fw={500}>{dayjs(date).startOf('week').format('MMM D')} – {dayjs(date).endOf('week').format('MMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Week
        </Button>
      </Group>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},e_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)("week");return(0,c.jsxs)("div",{children:[(0,c.jsxs)(er.Text,{mb:"md",children:["Selected view: ",n]}),(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",onViewChange:r})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleViewLevel } from '@mantine/schedule';
import { Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [view, setView] = useState<ScheduleViewLevel>('week');

  return (
    <div>
      <Text mb="md">Selected view: {view}</Text>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        onViewChange={setView}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eP={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startScrollTime="07:00:00"
      getTimeSlotProps={({ start }) => {
        const hour = parseInt(start.split(' ')[1], 10);
        if (hour >= 7 && hour < 20) {
          return { 'data-business-hours': true };
        }
        return { 'data-non-business-hours': true };
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var eG=(0,t.__exportAll)({allDayEvents:()=>eV,backgroundEvents:()=>ev,backgroundEventsCustomStyle:()=>eh,bidirectionalDragDrop:()=>es,businessHours:()=>V,businessHoursPerDay:()=>H,canDragEvent:()=>eR,canResizeEvent:()=>eN,controlledDate:()=>eZ,currentTimeIndicator:()=>Y,customHeader:()=>ey,dragDrop:()=>L,eventForm:()=>ee,eventResize:()=>_,externalDragDrop:()=>ei,firstDayOfWeek:()=>p,forceCurrentTimeIndicator:()=>k,getTimeSlotProps:()=>eP,highlightToday:()=>w,intervalMinutes:()=>D,localization:()=>eY,overlappingEvents:()=>A,radius:()=>ek,recurringEvents:()=>ec,renderEvent:()=>Q,renderEventBody:()=>e$,slotHeight:()=>O,slotLabelFormat:()=>j,startScrollTime:()=>et,staticMode:()=>q,timeRange:()=>v,timezone:()=>b,usage:()=>f,viewChange:()=>e_,weekLabelFormat:()=>C,weekdayFormat:()=>g,withoutAllDaySlots:()=>$,withoutHeader:()=>W,withoutWeekNumber:()=>y,withoutWeekendDays:()=>h});e.s(["WeekViewDemos",0,eG],953813)}]);