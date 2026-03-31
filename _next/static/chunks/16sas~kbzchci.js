(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,593612,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="ClockIcon",e.s(["ClockIcon",0,r],593612)},898770,e=>{"use strict";var t=e.i(494834);e.s(["isMultidayEvent",0,function(e){let a=(0,t.default)(e.start).startOf("day");return(0,t.default)(e.end).startOf("day").isAfter(a)}])},813982,e=>{"use strict";var t=e.i(494834);e.s(["sortEvents",0,function(e){return e.toSorted((e,a)=>{let n=(0,t.default)(e.start).diff((0,t.default)(a.start));return 0!==n?n:(0,t.default)(a.end).diff((0,t.default)(a.start))-(0,t.default)(e.end).diff((0,t.default)(e.start))})}])},822933,e=>{"use strict";var t=e.i(191788);e.s(["useInterval",0,function(e,a,{autoInvoke:n=!1}={}){let[r,o]=(0,t.useState)(!1),i=(0,t.useRef)(null),d=(0,t.useRef)(null),s=(0,t.useCallback)(()=>{o(e=>(e||i.current&&-1!==i.current||(i.current=window.setInterval(d.current,a)),!0))},[]),l=(0,t.useCallback)(()=>{o(!1),window.clearInterval(i.current||-1),i.current=-1},[]),c=(0,t.useCallback)(()=>{r?l():s()},[r]);return(0,t.useEffect)(()=>(d.current=e,r&&s(),l),[e,r,a]),(0,t.useEffect)(()=>{n&&s()},[]),{start:s,stop:l,toggle:c,active:r}}])},898496,672654,969610,792930,505696,245086,637079,312709,68642,532965,751198,e=>{"use strict";function t(e){let t=Math.round(Math.max(1,Math.min(60,e)));return 60%t==0?t:60}function a(e){let[t,a,n]=e.split(":").map(Number);return{hours:t,minutes:a,seconds:n||0}}function n({hours:e,minutes:t,seconds:a}){return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}:${String(a).padStart(2,"0")}`}e.s(["clampIntervalMinutes",0,t],672654),e.s(["getDayTimeIntervals",0,function({startTime:e,endTime:r,intervalMinutes:o=60}){let i=t(o),d=a(e),s=r?a(r):{hours:23,minutes:59,seconds:59},l=3600*d.hours+60*d.minutes+d.seconds,c=3600*s.hours+60*s.minutes+s.seconds,u=60*i,m=[],v=l;for(;v<c;){let e=v,t=v+u;t>c&&(t=c);let a=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60,i=Math.floor(t/3600),d=Math.floor(t%3600/60),s=t%60,l=t-e,f=0===r&&0===o;m.push({startTime:n({hours:a,minutes:r,seconds:o}),endTime:n({hours:i,minutes:d,seconds:s}),duration:l,isHourStart:f}),v=t}return m}],898496);var r=e.i(494834);e.s(["isAllDayEvent",0,function({event:e,date:t}){let a=(0,r.default)(t).startOf("day"),n=a.add(1,"day"),o=(0,r.default)(e.start),i=(0,r.default)(e.end);return o.isSame(a)&&i.isSame(n)}],969610),e.s(["calculateDropTime",0,function({draggedEvent:e,targetDate:t,targetSlotTime:n,mouseYOffset:o=0,slotHeight:i=64,intervalMinutes:d=15}){let s=(0,r.default)(e.end).diff((0,r.default)(e.start),"millisecond"),l=a(n),c=(0,r.default)(t).startOf("day").hour(l.hours).minute(l.minutes).second(0),u=c;if(o>0&&i>0){let e=Math.round(o/i*d);u=c.add(e,"minute")}return{start:u.toDate(),end:u.add(s,"millisecond").toDate()}}],792930),e.s(["getBusinessHoursMod",0,function({time:e,businessHours:t,highlightBusinessHours:a}){if(!a||!t)return{"business-hours":!1,"non-business-hours":!1};let[n,r]=t,o=e>=n&&e<r;return{"business-hours":o,"non-business-hours":!o}}],505696);var o=e.i(191788);e.s(["useAutoScrollOnDrag",0,function({viewportRef:e,enabled:t}){let a=(0,o.useRef)(null),n=(0,o.useRef)(0),r=(0,o.useCallback)(()=>{null!==a.current&&(cancelAnimationFrame(a.current),a.current=null),n.current=0},[]),i=(0,o.useCallback)(()=>{if(null!==a.current)return;let t=()=>{let r=e.current;if(!r||0===n.current){a.current=null;return}r.scrollTop+=n.current,a.current=requestAnimationFrame(t)};a.current=requestAnimationFrame(t)},[e]);(0,o.useEffect)(()=>{if(!t)return;let a=e.current;if(!a)return;let o=e=>{let t=a.getBoundingClientRect(),o=e.clientY-t.top,d=t.bottom-e.clientY;o<50?(n.current=-Math.ceil((1-o/50)*8),i()):d<50?(n.current=Math.ceil((1-d/50)*8),i()):r()},d=()=>{r()};return a.addEventListener("dragover",o),a.addEventListener("dragleave",d),a.addEventListener("dragend",d),a.addEventListener("drop",d),()=>{r(),a.removeEventListener("dragover",o),a.removeEventListener("dragleave",d),a.removeEventListener("dragend",d),a.removeEventListener("drop",d)}},[t,e,i,r])}],245086),e.s(["useEventResize",0,function({enabled:e=!1,mode:t="default",startTime:n,endTime:i,intervalMinutes:d,onEventResize:s,canResizeEvent:l}){let[c,u]=(0,o.useState)(null),m=(0,o.useRef)(null),v=(0,o.useRef)(s);v.current=s;let f=a(n),p=a(i),D=60*f.hours+f.minutes,y=60*p.hours+p.minutes-D,g=d/y*100,h=(0,o.useCallback)(e=>Math.max(0,Math.min(y,Math.round(e/d)*d)),[y,d]),w=(0,o.useCallback)((e,t)=>{let a=D+h(e/100*y),n=Math.floor(a/60);return`${t} ${String(n).padStart(2,"0")}:${String(a%60).padStart(2,"0")}:00`},[y,D,h]),E=(0,o.useCallback)(e=>h(e/100*y)/y*100,[y,h]),x=(0,o.useCallback)(({event:a,edge:n,container:o,originalTop:i,originalHeight:d,eventDate:s,pointerEvent:l})=>{if(!e||"static"===t)return;l.preventDefault(),l.stopPropagation();let c={eventId:a.id,event:a,edge:n,container:o,originalTop:i,originalHeight:d,currentTop:i,currentHeight:d,eventDate:s,originalStart:(0,r.default)(a.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,r.default)(a.end).format("YYYY-MM-DD HH:mm:ss")};m.current=c,u(c)},[e,t]),Y=null!==c;(0,o.useEffect)(()=>{if(!Y)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{let t=m.current;if(!t)return;let a=t.container.getBoundingClientRect(),n=E(Math.max(0,Math.min(100,(e.clientY-a.top)/a.height*100))),r=t.originalTop,o=t.originalHeight;if("bottom"===t.edge)o=Math.max(g,n-t.originalTop);else{let e=t.originalTop+t.originalHeight;r=Math.min(n,e-g),o=e-r}m.current={...t,currentTop:r,currentHeight:o},u(m.current)},a=()=>{let e=m.current;if(e&&v.current&&(e.currentTop!==e.originalTop||e.currentHeight!==e.originalHeight)){let t,a;"top"===e.edge?(t=w(e.currentTop,e.eventDate),a=e.originalEnd):(t=e.originalStart,a=w(e.currentTop+e.currentHeight,e.eventDate)),v.current({eventId:e.eventId,newStart:t,newEnd:a,event:e.event})}m.current=null,u(null)};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a)}},[Y]);let S=(0,o.useCallback)(e=>c&&c.eventId===e?{top:c.currentTop,height:c.currentHeight}:null,[c]),T=(0,o.useCallback)(a=>!!e&&"static"!==t&&"background"!==a.display&&(!l||l(a)),[e,t,l]);return{handleResizeStart:x,isResizing:Y,resizingEventId:c?.eventId??null,getResizePosition:S,isResizableEvent:T}}],637079);var i=e.i(27748);function d(e){let t=(0,r.default)();if(!e?.startTime||!e?.endTime){let e=(0,r.default)().startOf("date");return t.diff(e,"minute")/1440*100}let[a,n]=e.startTime.split(":").map(Number),[o,i]=e.endTime.split(":").map(Number),d=t.startOf("date"),s=d.hour(a).minute(n).second(0),l=d.hour(o).minute(i).second(0).diff(s,"minute");return t.diff(s,"minute")/l*100}var s={currentTimeIndicator:"m_74c54f2d",currentTimeIndicatorLine:"m_e62414c1",currentTimeIndicatorThumb:"m_decee6a9",currentTimeIndicatorTimeBubble:"m_4b00bcc6"},l=e.i(232471),c=e.i(481178),u=e.i(275519),m=e.i(317477),v=e.i(44091),f=e.i(391466),p=e.i(822933),D=e.i(205693),y=e.i(391398);let g={__staticSelector:"CurrentTimeIndicator",withTimeBubble:!0,withThumb:!0,currentTimeFormat:"HH:mm",topOffset:"0rem"},h=(0,c.createVarsResolver)((e,{color:t})=>({currentTimeIndicator:{"--indicator-color":t?(0,m.getThemeColor)(t,e):void 0}})),w=(0,u.factory)(e=>{let t=(0,v.useProps)("CurrentTimeIndicator",g,e),{classNames:n,className:c,style:u,styles:m,unstyled:w,vars:E,attributes:x,startOffset:Y,endOffset:S,color:T,withTimeBubble:M,withThumb:b,currentTimeFormat:j,locale:$,timeBubbleStartOffset:C,__staticSelector:H,topOffset:V,startTime:k,endTime:A,...I}=t,R=(0,f.useStyles)({name:H,classes:s,props:t,className:c,style:u,classNames:n,styles:m,unstyled:w,vars:E,varsResolver:h,attributes:x,rootSelector:"currentTimeIndicator"}),O=(0,D.useDatesContext)(),[B,N]=(0,o.useState)(d({startTime:k,endTime:A}));(0,p.useInterval)(()=>N(d({startTime:k,endTime:A})),6e4,{autoInvoke:!0});let _=M?(0,i.formatDate)({locale:O.getLocale($),date:(0,r.default)(),format:j}):"";return!function({date:e,startTime:t="00:00:00",endTime:n="23:59:59"}){let o=(0,r.default)(e),i=a(t),d=a(n),s=o.hour(i.hours).minute(i.minutes).second(i.seconds),l=o.hour(d.hours).minute(d.minutes).second(d.seconds);return o.isAfter(s)&&o.isBefore(l)}({date:(0,r.default)().toDate(),startTime:k,endTime:A})?null:(0,y.jsxs)(l.Box,{...R("currentTimeIndicator"),__vars:{"--top-offset":`calc(${B}% + ${V})`,"--start-offset":Y,"--end-offset":S,"--time-bubble-start-offset":C,"--time-bubble-width":_?.toString().toLowerCase().includes("m")?"64px":"46px"},...I,children:[M&&(0,y.jsx)("div",{...R("currentTimeIndicatorTimeBubble"),children:_}),b&&(0,y.jsx)("div",{...R("currentTimeIndicatorThumb")}),(0,y.jsx)("div",{...R("currentTimeIndicatorLine")})]})});w.displayName="@mantine/schedule/CurrentTimeIndicator",w.classes=s,w.varsResolver=h,e.s(["CurrentTimeIndicator",0,w],312709);var E=e.i(898770);e.s(["isEventInTimeRange",0,function({event:e,startTime:t,endTime:a}){if((0,E.isMultidayEvent)(e)||!t||!a)return!0;let[n,o]=t.split(":").map(Number),[i,d]=a.split(":").map(Number),s=(0,r.default)(e.start),l=(0,r.default)(e.end),c=60*s.hour()+s.minute();return!(60*l.hour()+l.minute()<=60*n+o||c>=60*i+d)}],68642),e.s(["getDayPosition",0,function({event:e,startTime:t="00:00:00",endTime:n="23:59:59"}){let o=(0,r.default)(e.start),i=(0,r.default)(e.end),d=a(t),s=a(n),l=o.startOf("date"),c=l.hour(d.hours).minute(d.minutes).second(0),u=l.hour(s.hours).minute(s.minutes).second(0),m=u.diff(c,"minute"),v=(o.isBefore(c)?c:o).diff(c,"minute"),f=(i.isAfter(u)?u:i).diff(c,"minute"),p=v/m*100;return{top:p,height:f/m*100-p}}],532965),e.s(["isEventsOverlap",0,function(e,t){let a=(0,r.default)(e.start).valueOf(),n=(0,r.default)(e.end).valueOf(),o=(0,r.default)(t.start).valueOf();return a<(0,r.default)(t.end).valueOf()&&o<n}],751198)},334816,e=>{"use strict";e.s(["createEventHandler",0,function(e,t){return a=>{e?.(a),t?.(a)}}])},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[n,r]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),i=e.i(391398),d=e.i(458272);let s=(0,o.createContext)({withinGroup:!1}),l={openDelay:0,closeDelay:0};function c(e){let{openDelay:a,closeDelay:n,children:r}=(0,t.useProps)("HoverCardGroup",l,e);return(0,i.jsx)(s,{value:{withinGroup:!0},children:(0,i.jsx)(d.FloatingDelayGroup,{delay:{open:a,close:n},children:r})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var u=e.i(334816);function m(e){let{children:n,onMouseEnter:d,onMouseLeave:l,...c}=(0,t.useProps)("HoverCardDropdown",null,e),m=r();if((0,o.use)(s).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,i.jsx)(a.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,u.createEventHandler)(d,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(l,e.onMouseLeave),...c,children:n})}let v=(0,u.createEventHandler)(d,m.openDropdown),f=(0,u.createEventHandler)(l,m.closeDropdown);return(0,i.jsx)(a.Popover.Dropdown,{onMouseEnter:v,onMouseLeave:f,...c,children:n})}m.displayName="@mantine/core/HoverCardDropdown";var v=e.i(409703);let f={refProp:"ref"};function p(e){let{children:n,refProp:d,eventPropsWrapperName:l,...c}=(0,t.useProps)("HoverCardTarget",f,e),m=(0,v.getSingleElementChild)(n);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=r();if((0,o.use)(s).withinGroup&&p.getReferenceProps&&p.reference){let e=p.getReferenceProps();return(0,i.jsx)(a.Popover.Target,{refProp:d,...c,children:(0,o.cloneElement)(m,l?{[l]:{...e,ref:p.reference}}:{...e,ref:p.reference})})}let D={onMouseEnter:(0,u.createEventHandler)(m.props.onMouseEnter,p.openDropdown),onMouseLeave:(0,u.createEventHandler)(m.props.onMouseLeave,p.closeDropdown)};return(0,i.jsx)(a.Popover.Target,{refProp:d,...c,children:(0,o.cloneElement)(m,l?{[l]:D}:D)})}p.displayName="@mantine/core/HoverCardTarget";var D=e.i(107315);let y={openDelay:0,closeDelay:150,initiallyOpened:!1};function g(e){let{children:r,onOpen:l,onClose:c,openDelay:u,closeDelay:m,initiallyOpened:v,...f}=(0,t.useProps)("HoverCard",y,e),p=function(e){let[t,a]=(0,o.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,r=(0,o.use)(s).withinGroup,i=(0,D.useId)(),l=(0,o.useRef)(-1),c=(0,o.useRef)(-1),u=(0,o.useCallback)(()=>{window.clearTimeout(l.current),window.clearTimeout(c.current)},[]),m=(0,o.useCallback)(t=>{a(t),t?(y(i),e.onOpen?.()):e.onClose?.()},[i,e.onOpen,e.onClose]),{context:v,refs:f}=(0,d.useFloating)({open:n,onOpenChange:m}),{delay:p,setCurrentId:y}=(0,d.useDelayGroup)(v,{id:i}),{getReferenceProps:g,getFloatingProps:h}=(0,d.useInteractions)([(0,d.useHover)(v,{enabled:!0,delay:r?p:{open:e.openDelay,close:e.closeDelay}}),(0,d.useRole)(v,{role:"dialog"}),(0,d.useDismiss)(v,{enabled:r})]),w=(0,o.useCallback)(()=>{r||(u(),0===e.openDelay||void 0===e.openDelay?m(!0):l.current=window.setTimeout(()=>m(!0),e.openDelay))},[r,u,e.openDelay,m]),E=(0,o.useCallback)(()=>{r||(u(),0===e.closeDelay||void 0===e.closeDelay?m(!1):c.current=window.setTimeout(()=>m(!1),e.closeDelay))},[r,u,e.closeDelay,m]);return(0,o.useEffect)(()=>()=>u(),[u]),{opened:n,reference:f.setReference,floating:f.setFloating,getReferenceProps:g,getFloatingProps:h,openDropdown:w,closeDropdown:E}}({openDelay:u,closeDelay:m,defaultOpened:v,onOpen:l,onClose:c});return(0,i.jsx)(n,{value:{openDropdown:p.openDropdown,closeDropdown:p.closeDropdown,getReferenceProps:p.getReferenceProps,getFloatingProps:p.getFloatingProps,reference:p.reference,floating:p.floating},children:(0,i.jsx)(a.Popover,{...f,opened:p.opened,__staticSelector:"HoverCard",children:r})})}g.displayName="@mantine/core/HoverCard",g.Target=p,g.Dropdown=m,g.Group=c,g.extend=e=>e,e.s(["HoverCard",0,g],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),n=e.i(671640),r=e.i(883364),o=e.i(391398);let i=`import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      {event.payload?.description && (
        <Text size="xs" c="dimmed">
          {event.payload.description}
        </Text>
      )}

      {event.payload?.location && (
        <Group gap={4}>
          <Badge size="sm" variant="light">
            {event.payload.location}
          </Badge>
        </Group>
      )}

      {event.payload?.attendees && (
        <div>
          <Text size="xs" fw={500} mb={4}>
            Attendees:
          </Text>
          <Text size="xs" c="dimmed">
            {event.payload.attendees.join(', ')}
          </Text>
        </div>
      )}
    </Stack>
  );
}`;e.s(["EventDetails",0,function({event:e}){return(0,o.jsxs)(n.Stack,{gap:"xs",children:[(0,o.jsx)(r.Text,{fw:600,size:"sm",children:e.title}),e.payload?.description&&(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(a.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,i])},554166,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="MapPinIcon",e.s(["MapPinIcon",0,r],554166)},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),r=e.i(898496),o=e.i(4332),i=e.i(969610),d=e.i(792930),s=e.i(505696),l=e.i(657068),c=e.i(245086),u=e.i(783261),m=e.i(637079),v=e.i(376879),f=e.i(312709),p=e.i(201867),D=e.i(891343),y=e.i(67312),g=e.i(966696),h=e.i(298008),w=e.i(68642),E=e.i(532965),x=e.i(813982),Y=e.i(751198),S=e.i(494834),T={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},M=e.i(232471),b=e.i(19300),j=e.i(284629),$=e.i(481178),C=e.i(275519),H=e.i(433512),V=e.i(779177),k=e.i(951254),A=e.i(44091),I=e.i(62904),R=e.i(391466),O=e.i(417241),B=e.i(332977),N=e.i(191788),_=e.i(205693),L=e.i(391398);let z={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},F=(0,$.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,H.getRadius)(t):void 0,"--day-view-slot-height":(0,V.rem)(a),"--day-view-all-day-slot-height":(0,V.rem)(n)}})),P=(0,C.factory)(e=>{let $=(0,A.useProps)("DayView",z,e),{classNames:C,className:H,style:V,styles:P,unstyled:G,attributes:Z,vars:U,__staticSelector:J,startTime:W,endTime:Q,intervalMinutes:K,withAllDaySlot:q,date:X,locale:ee,slotLabelFormat:et,headerFormat:ea,withCurrentTimeIndicator:en=(0,S.default)(X).isSame((0,S.default)(),"day"),withCurrentTimeBubble:er,withHeader:eo,radius:ei,onDateChange:ed,onViewChange:es,previousControlProps:el,nextControlProps:ec,todayControlProps:eu,viewSelectProps:em,slotHeight:ev,allDaySlotHeight:ef,scrollAreaProps:ep,events:eD,moreEventsProps:ey,renderEventBody:eg,renderEvent:eh,labels:ew,highlightBusinessHours:eE,businessHours:ex,withEventsDragAndDrop:eY,onEventDrop:eS,canDragEvent:eT,onEventDragStart:eM,onEventDragEnd:eb,onTimeSlotClick:ej,onAllDaySlotClick:e$,onEventClick:eC,withDragSlotSelect:eH,onSlotDragEnd:eV,mode:ek,startScrollTime:eA,onExternalEventDrop:eI,withEventResize:eR,onEventResize:eO,canResizeEvent:eB,recurrenceExpansionLimit:eN,getTimeSlotProps:e_,...eL}=$,ez=(0,R.useStyles)({name:J,classes:T,props:$,className:H,style:V,classNames:C,styles:P,unstyled:G,attributes:Z,vars:U,varsResolver:F,rootSelector:"dayView"}),{resolvedClassNames:eF,resolvedStyles:eP}=(0,I.useResolvedStylesApi)({classNames:C,styles:P,props:$}),eG={classNames:eF,styles:eP,attributes:Z,__staticSelector:J,radius:ei},eZ=(0,k.useMantineTheme)(),eU=(0,_.useDatesContext)(),eJ=(0,r.getDayTimeIntervals)({startTime:W,endTime:Q,intervalMinutes:K}),eW=(0,N.useRef)([]),eQ=(0,N.useRef)(null),eK=(0,N.useRef)(null),eq=(0,B.useMergedRef)(eQ,ep?.viewportRef);(0,c.useAutoScrollOnDrag)({viewportRef:eQ,enabled:(eY||!!eI)&&"static"!==ek}),(0,O.useIsomorphicEffect)(()=>{if(!eA||!eQ.current||0===eW.current.length)return;let e=eJ.findIndex(e=>e.startTime>=eA);if(e<0)return;let t=eW.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=eQ.current.getBoundingClientRect();eQ.current.scrollTo({left:0,top:a.top-n.top})},[]);let eX=(0,N.useCallback)(e=>{let t=eW.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=eW.current[0],n=eW.current[eW.current.length-1];if(!a||!n)return null;let r=a.getBoundingClientRect(),o=n.getBoundingClientRect();return e.clientY<r.top?0:e.clientY>o.bottom?eW.current.length-1:null},[]),e0=(0,v.useSlotDragSelect)({enabled:eH&&"static"!==ek,onDragEnd:(e,t)=>{if(!eV)return;let a=(0,S.default)(X).format("YYYY-MM-DD");eV(`${a} ${eJ[e].startTime}`,`${a} ${eJ[t].endTime}`)}}),e1=function({events:e,date:t,startTime:a,endTime:n}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let r=new Set,o=[],d=[],s=(0,S.default)(t).startOf("day"),l=(0,S.default)(t).endOf("day");for(let t of e){let e=(0,S.default)(t.start),i=(0,S.default)(t.end),c=e.isSame(s,"day"),u=!c&&"background"===t.display&&e.isBefore(l)&&i.isAfter(s);if(c||u){if(c&&!(0,w.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,h.validateEvent)(t);if(r.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);r.add(t.id),"background"===t.display?d.push(e):o.push(e)}}let c=function({events:e,startTime:t,endTime:a,date:n}){let r=[],o=[];for(let d of(0,x.sortEvents)(e)){let e=(0,i.isAllDayEvent)({event:d,date:n}),s=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,date:r}){return!!e[t]&&e[t].some(e=>{let t=(0,i.isAllDayEvent)({event:e,date:r}),o=(0,Y.isEventsOverlap)(e,a);return!n&&!t&&o})}({columns:r,columnIndex:s,event:d,allDay:e,date:n});)s++;r[s]||(r[s]=[]),r[s].push(d);let l=e?{top:0,height:100}:(0,E.getDayPosition)({event:d,startTime:t,endTime:a});o.push({...d,position:{...l,allDay:e,column:s,width:0,offset:0,overlaps:0}})}for(let e of o){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let n=[];for(let t of o)t!==e&&!t.position.allDay&&(0,Y.isEventsOverlap)(t,e)&&n.push(t);let r=a;for(let e of n)for(let t of(r=Math.max(r,e.position.column),o))t!==e&&!t.position.allDay&&(0,Y.isEventsOverlap)(t,e)&&(r=Math.max(r,t.position.column));let i=r+1,d=i;for(let e of n)e.position.column>a&&e.position.column<d&&(d=e.position.column);let s=d-a;e.position.overlaps=i,e.position.width=s/i*100,e.position.offset=100*a/i}return o}({events:o,startTime:a,endTime:n,date:t}),u=[],m=[];for(let e of c)e.position.allDay?u.push(e):m.push(e);let v=[],f=[];for(let e of d){let r=(0,S.default)(e.start),o=(0,S.default)(e.end),d=r.isBefore(s)?s:r,c=o.isAfter(l)?l:o,u={...e,start:d.format("YYYY-MM-DD HH:mm:ss"),end:c.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:u,date:t}))f.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:r}=(0,E.getDayPosition)({event:u,startTime:a,endTime:n});if(r<=0)continue;v.push({...e,position:{top:t,height:r,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:u,regularEvents:m,backgroundTimedEvents:v,backgroundAllDayEvents:f}}({events:(0,l.expandRecurringEvents)({events:eD,rangeStart:(0,S.default)(X).startOf("day").toDate(),rangeEnd:(0,S.default)(X).endOf("day").toDate(),expansionLimit:eN}),date:X,startTime:W,endTime:Q}),e2=(0,N.useCallback)((e,t)=>{if(!eI)return;let a=(0,S.default)(X).format("YYYY-MM-DD");eI(e.dataTransfer,`${a} ${eJ[t].startTime}`)},[eI,X,eJ]),e8=(0,u.useDragDropHandlers)({enabled:eY,mode:ek,onEventDrop:eS,canDragEvent:eT,onEventDragStart:eM,onEventDragEnd:eb,calculateDropTarget:(e,t)=>{let a=eJ[e].startTime;return(0,d.calculateDropTime)({draggedEvent:t,targetDate:X,targetSlotTime:a,intervalMinutes:K})},onExternalDrop:eI?e2:void 0}),e4=(0,m.useEventResize)({enabled:eR,mode:ek,startTime:W,endTime:Q,intervalMinutes:K,onEventResize:eO,canResizeEvent:eB}),e3=(eY||!!eI)&&"static"!==ek,e6=e1.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:X}),a=!t&&e8.isDraggableEvent(e),n=!t&&e4.isResizableEvent(e),r=e4.getResizePosition(e.id),o=r?r.top:e.position.top,d=r?r.height:e.position.height;return(0,L.jsx)(D.ScheduleEvent,{event:e,renderEventBody:eg,renderEvent:eh,autoSize:!0,draggable:a,withResize:n,isResizing:null!==r,onResizeStart:n?(t,a)=>{eK.current&&e4.handleResizeStart({event:e,edge:t,container:eK.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,S.default)(X).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:ek,onClick:eC?t=>eC(e,t):void 0,...eG,style:{...eG.styles?.event,top:`${o}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),e9=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e1.allDayEvents.length}),e5=e1.allDayEvents.slice(0,e9.visibleEventsCount).map(e=>(0,L.jsx)(D.ScheduleEvent,{event:e,renderEventBody:eg,renderEvent:eh,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:ek,onClick:eC?t=>eC(e,t):void 0,...eG},e.id)),e7=(0,S.default)(X).format("YYYY-MM-DD"),te=eJ.map((e,a)=>{let r=e8.isDropTarget(a),o=e0.isSlotSelected(a,e7),i=`${e7} ${e.startTime}`,d=`${e7} ${e.endTime}`,{onClick:l,...c}=e_?.({start:i,end:d})||{},u="static"===ek?void 0:e=>{ej?.({slotStart:i,slotEnd:d,nativeEvent:e}),l?.(e)};return(0,N.createElement)(j.UnstyledButton,{...ez("dayViewSlot"),key:e.startTime,ref:e=>{eW.current[a]=e},mod:{"hour-start":e.isHourStart,...(0,s.getBusinessHoursMod)({time:e.startTime,businessHours:ex,highlightBusinessHours:eE}),"drop-target":r,"drag-selected":o,static:"static"===ek},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(K)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===ek?-1:0===a?0:-1,"data-drag-slot-index":eH&&"static"!==ek?a:void 0,"data-drag-slot-group":eH&&"static"!==ek?e7:void 0,onKeyDown:"static"===ek?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<eJ.length-1?(e.preventDefault(),eW.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),eW.current[a-1]?.focus())},onPointerDown:eH&&"static"!==ek?e=>e0.handleSlotPointerDown(e,a,e7):void 0,onClick:u,onDragOver:e3?e=>e.preventDefault():void 0,...c})}),tt=eJ.reduce((e,t)=>{if(t.isHourStart){let n=(0,S.default)(`${(0,S.default)(X).format("YYYY-MM-DD")} ${t.startTime}`),r=(0,a.formatDate)({locale:eU.getLocale(ee),date:n,format:et});e.push((0,N.createElement)(M.Box,{...ez("dayViewSlotLabel"),key:t.startTime,mod:(0,s.getBusinessHoursMod)({time:t.startTime,businessHours:ex,highlightBusinessHours:eE})},r))}return e},[]),ta=e1.backgroundAllDayEvents.map(e=>{let t=eZ.variantColorResolver({color:e.color||eZ.primaryColor,theme:eZ,variant:"light",autoContrast:!0}),a="function"==typeof eg?eg(e):e.title,n={key:`bg-allday-${e.id}`,...ez("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};return"function"==typeof eh?eh(e,n):(0,L.jsx)(M.Box,{...n})}),tn=e1.backgroundTimedEvents.map(e=>{let t=eZ.variantColorResolver({color:e.color||eZ.primaryColor,theme:eZ,variant:"light",autoContrast:!0}),a="function"==typeof eg?eg(e):e.title,n={key:e.id,...ez("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};return"function"==typeof eh?eh(e,n):(0,L.jsx)(M.Box,{...n})}),tr=(0,L.jsxs)(M.Box,{...ez("dayView"),mod:{static:"static"===ek,"slot-dragging":e0.isDragging},...eL,children:[eo&&(0,L.jsx)(g.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,S.default)(X).subtract(1,"day")),next:()=>(0,o.toDateString)((0,S.default)(X).add(1,"day")),today:()=>(0,o.toDateString)((0,S.default)())},control:{title:(0,a.formatDate)({locale:eU.getLocale(ee),date:X,format:ea}),miw:140},labels:ew,onDateChange:ed,onViewChange:es,previousControlProps:el,nextControlProps:ec,todayControlProps:eu,viewSelectProps:em,stylesApiProps:eG}),(0,L.jsx)(b.ScrollArea.Autosize,{scrollbarSize:4,...ep,...ez("dayViewScrollArea",{className:ep?.className,style:ep?.style}),viewportRef:eq,children:(0,L.jsxs)(M.Box,{...ez("dayViewInner"),children:[(0,L.jsxs)("div",{...ez("dayViewSlotLabels"),children:[q&&(0,L.jsx)(M.Box,{...ez("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",ew)}),tt]}),(0,L.jsxs)("div",{...ez("dayViewSlots"),children:[q&&(0,L.jsxs)("div",{...ez("dayViewAllDay"),children:[ta,(0,L.jsxs)("div",{...ez("dayViewAllDayEvents"),children:[e5,e9.hiddenEventsCount>0&&(0,L.jsx)(y.MoreEvents,{events:e1.allDayEvents,moreEventsCount:e9.hiddenEventsCount,renderEventBody:eg,mode:ek,...eG,...ey})]}),(0,L.jsx)(j.UnstyledButton,{...ez("dayViewSlot"),mod:{"all-day":!0,static:"static"===ek},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${(0,t.getLabel)("allDay",ew)}`,onClick:"static"!==ek&&e$?e=>{e$((0,S.default)(X).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:eK,...ez("dayViewTimeSlots"),onDragOver:e3?e=>{let t=eX(e);null!==t&&e8.handleDragOver(e,t)}:void 0,onDragLeave:e3?e8.handleDragLeave:void 0,onDrop:e3?e=>{let t=eX(e);null!==t&&e8.handleDrop(e,t)}:void 0,children:[tn,e6,en&&(0,L.jsx)(f.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:et,withTimeBubble:er,withThumb:!er,locale:ee,startTime:W,endTime:Q,...eG}),te]})]})]})})]});return eY?(0,L.jsx)(p.DragContext.Provider,{value:e8.dragContextValue,children:tr}):tr});P.displayName="@mantine/schedule/DayView",P.classes=T,P.varsResolver=F,e.s(["DayView",0,P],200183)},7834,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],o=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Full Day Session",start:`${n} 10:00:00`,end:`${n} 16:00:00`,color:"green"}],i=[{id:1,title:"Conference Day",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Product Launch",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:5,title:"Year Kickoff",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"}],d=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${n} 17:30:00`,end:`${n} 18:00:00`,color:"orange"}],s=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
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
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${today} 15:30:00\`,
    end: \`\${today} 16:30:00\`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`,l=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Workshop Session 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:30:00\`,
    color: 'violet',
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: \`\${today} 11:30:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Full Day Session',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'green',
  },
];
`,c=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Conference Day',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 2,
    title: 'Holiday',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
  },
  {
    id: 3,
    title: 'Team Building',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
  {
    id: 4,
    title: 'Product Launch',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
  {
    id: 5,
    title: 'Year Kickoff',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
];
`,u=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Early Morning Meeting',
    start: \`\${today} 08:30:00\`,
    end: \`\${today} 09:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Business Hours Task 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Business Hours Task 2',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Evening Sync',
    start: \`\${today} 17:30:00\`,
    end: \`\${today} 18:00:00\`,
    color: 'orange',
  },
];
`;var m=e.i(191788),v=e.i(391398),f=e.i(200183);let p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsx)(f.DayView,{date:e,onDateChange:t,events:r,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},D={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"09:00:00",endTime:"17:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},g={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:d,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:u,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotHeight={80}
      allDaySlotHeight={60}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withHeader={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},S={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",headerFormat:"dddd, MMMM D"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      headerFormat="dddd, MMMM D"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h:mm A"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotLabelFormat="h:mm A"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},b=(0,a.default)().format("YYYY-MM-DD"),j=[{id:1,title:"Morning Standup",start:`${b} 09:00:00`,end:`${b} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${b} 11:00:00`,end:`${b} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${b} 14:00:00`,end:`${b} 15:00:00`,color:"violet"}],$={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(j);return(0,v.jsx)(f.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
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

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`},C=(0,a.default)().format("YYYY-MM-DD"),H=[{id:1,title:"Draggable Event",start:`${C} 09:00:00`,end:`${C} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${C} 11:00:00`,end:`${C} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${C} 14:00:00`,end:`${C} 15:00:00`,color:"green"}],V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(H);return(0,v.jsx)(f.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canDragEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable Event',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Draggable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      canDragEvent={(event) => !event.payload?.locked}
    />
  );
}
`},k=(0,a.default)().format("YYYY-MM-DD"),A=[{id:1,title:"Morning Standup",start:`${k} 09:00:00`,end:`${k} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${k} 11:00:00`,end:`${k} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${k} 14:00:00`,end:`${k} 15:00:00`,color:"violet"}],I={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(A);return(0,v.jsx)(f.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},R=(0,a.default)().format("YYYY-MM-DD"),O=[{id:1,title:"Resizable Event",start:`${R} 09:00:00`,end:`${R} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${R} 11:00:00`,end:`${R} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${R} 14:00:00`,end:`${R} 15:00:00`,color:"green"}],B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(O);return(0,v.jsx)(f.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`};var N=e.i(593612),_=e.i(554166),L=e.i(725695),z=e.i(883364);let F=(0,a.default)().format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${F} 09:00:00`,end:`${F} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${F} 11:00:00`,end:`${F} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${F} 12:30:00`,end:`${F} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],G={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:P,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,v.jsxs)(L.Group,{children:[(0,v.jsx)(z.Text,{fz:12,fw:500,children:e.title}),(0,v.jsxs)(L.Group,{gap:4,children:[(0,v.jsx)(N.ClockIcon,{size:12}),(0,v.jsx)(z.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,v.jsxs)(L.Group,{gap:4,children:[(0,v.jsx)(_.MapPinIcon,{size:12}),(0,v.jsx)(z.Text,{fz:10,children:e.payload.location})]})]})})},code:`
import dayjs from 'dayjs';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  // ... more events
];

function Demo() {
  return (
    <DayView
      date={new Date()}
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
`};var Z=e.i(19683),U=e.i(369974),J=e.i(284629);let W=(0,a.default)().format("YYYY-MM-DD"),Q=[{id:1,title:"Team Standup",start:`${W} 09:00:00`,end:`${W} 09:30:00`,color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Review",start:`${W} 10:00:00`,end:`${W} 11:30:00`,color:"grape",payload:{description:"Review UI/UX designs for new feature",attendees:["Diana","Eve"],location:"Virtual Meeting"}},{id:3,title:"Client Presentation",start:`${W} 14:00:00`,end:`${W} 15:30:00`,color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Frank","Grace","Henry"],location:"Zoom"}},{id:4,title:"Code Review",start:`${W} 16:00:00`,end:`${W} 17:00:00`,color:"orange",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}}],K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(Q);return(0,v.jsx)(f.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(r).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,v.jsxs)(U.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,v.jsx)(U.HoverCard.Target,{children:(0,v.jsx)(J.UnstyledButton,{...t})}),(0,v.jsx)(U.HoverCard.Dropdown,{children:(0,v.jsx)(Z.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <DayView
      date={new Date()}
      events={selectedEvents}
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
        <HoverCard width={280} position="bottom" closeDelay={0} transitionProps={{ duration: 0 }}>
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:Z._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(Q,null,2)};`,language:"tsx"}]},q={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},X={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",labels:{allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      labels={{
        allDay: 'Todo el d\xeda',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ee=e.i(485108);let et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(L.Group,{mb:"md",children:[(0,v.jsx)(ee.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Day"}),(0,v.jsx)(z.Text,{fw:500,children:(0,a.default)(e).format("MMMM D, YYYY")}),(0,v.jsx)(ee.Button,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Next Day"})]}),(0,v.jsx)(f.DayView,{date:e,onDateChange:t,events:r,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Day
        </Button>
        <Text fw={500}>{dayjs(date).format('MMMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'day').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Day
        </Button>
      </Group>

      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},ea={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)("day");return(0,v.jsxs)("div",{children:[(0,v.jsxs)(z.Text,{mb:"md",children:["Selected view: ",e]}),(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",onViewChange:t})]})},code:[{code:`
import { useState } from 'react';
import { DayView, ScheduleViewLevel } from '@mantine/schedule';
import { Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('day');

  return (
    <div>
      <Text mb="md">Selected view: {view}</Text>

      <DayView
        date={new Date()}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        onViewChange={setView}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var en=e.i(162077);let er={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,o]=(0,m.useState)(r),[i,d]=(0,m.useState)(!1),[s,l]=(0,m.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.DayView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),d(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),d(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,v.jsx)(en.EventForm,{opened:i,onClose:()=>d(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?o(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):o(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&o(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
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
      setEvents((prev) => prev.filter((event) => event.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <DayView
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:en._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"events.ts"}]},eo={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(r);return(0,v.jsx)(f.DayView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
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
    <DayView
      date={new Date()}
      events={events}
      startScrollTime="09:00:00"
      scrollAreaProps={{ mah: 500 }}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ei=e.i(232471),ed=e.i(20035);let es=(0,a.default)().format("YYYY-MM-DD"),el=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ec={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)([]),n=(0,m.useRef)(1);return(0,v.jsxs)(ed.Grid,{children:[(0,v.jsxs)(ed.Grid.Col,{span:{base:12,sm:3},children:[(0,v.jsx)(z.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),el.map(e=>(0,v.jsxs)(ei.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(z.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(z.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,v.jsx)(ed.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(f.DayView,{date:es,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(r),s=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
        <DayView
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
`},eu=(0,a.default)().format("YYYY-MM-DD"),em=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ev={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(em),[n,r]=(0,m.useState)([]),[o,i]=(0,m.useState)(!1),d=(0,m.useRef)(1);return(0,v.jsxs)(ed.Grid,{children:[(0,v.jsx)(ed.Grid.Col,{span:{base:12,sm:3},children:(0,v.jsxs)(ei.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:d}=JSON.parse(o),s=n.find(e=>String(e.id)===String(d));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),r(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,v.jsx)(z.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,v.jsxs)(ei.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(z.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(z.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,v.jsx)(z.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,v.jsx)(ed.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(f.DayView,{date:eu,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),s=(0,a.default)(n),l=s.add(i.duration,"minutes");r(e=>[...e,{id:d.current++,title:i.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
        <DayView
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
`},ef=(0,a.default)().format("YYYY-MM-DD"),ep=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,a.default)(ef).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,a.default)(ef).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${ef} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${ef} 14:00:00`,end:`${ef} 14:30:00`,color:"grape",recurringEventId:"daily-sync-series",recurrenceId:`${ef} 09:00:00`},{id:"one-off-day",title:"One-off planning",start:`${ef} 11:00:00`,end:`${ef} 12:00:00`,color:"green"}],eD={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ef);return(0,v.jsx)(f.DayView,{date:e,onDateChange:t,events:ep,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:30:00\`,
    color: 'grape',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off-day',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},ey=(0,a.default)().format("YYYY-MM-DD"),eg=[{id:"lunch-block",title:"Lunch break",start:`${ey} 12:00:00`,end:`${ey} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${ey} 14:00:00`,end:`${ey} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${ey} 10:00:00`,end:`${ey} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ey} 14:30:00`,end:`${ey} 15:30:00`,color:"green"}],eh={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ey);return(0,v.jsx)(f.DayView,{date:e,onDateChange:t,events:eg,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

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
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},ew=(0,a.default)().format("YYYY-MM-DD"),eE=[{id:"blocked-time",title:"Blocked",start:`${ew} 12:00:00`,end:`${ew} 14:00:00`,color:"red",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${ew} 10:00:00`,end:`${ew} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ew} 15:00:00`,end:`${ew} 16:00:00`,color:"green"}],ex={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(eE);return(0,v.jsx)(f.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:r})=>{e.some(e=>"background"===e.display&&n<e.end&&r>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:r}:e))},styles:{dayViewBackgroundEvent:{background:`repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            var(--mantine-color-red-light) 10px,
            var(--mantine-color-red-light) 12px
          )`,color:"var(--mantine-color-red-light-color)"}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import classes from './Demo.module.css';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'blocked-time',
    title: 'Blocked',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'red',
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
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      classNames={{ dayViewBackgroundEvent: classes.backgroundEvent }}
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
`}]};var eY=e.i(428127);let eS={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(eY.ScheduleHeader,{children:[(0,v.jsx)(eY.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(eY.ScheduleHeader.Control,{interactive:!1,miw:200,children:(0,a.default)(e).format("dddd, MMMM D, YYYY")}),(0,v.jsx)(eY.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(eY.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,v.jsx)(eY.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,v.jsx)(f.DayView,{date:e,onDateChange:t,events:r,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, DayView, ScheduleHeader } from '@mantine/schedule';
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
                .subtract(1, 'day')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {dayjs(date).format('dddd, MMMM D, YYYY')}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'day')
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

      <DayView
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let eT={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
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
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eM={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(f.DayView,{date:new Date,events:r,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var eb=(0,t.__exportAll)({allDayEvents:()=>g,backgroundEvents:()=>eh,backgroundEventsCustomStyle:()=>ex,bidirectionalDragDrop:()=>ev,businessHours:()=>E,canDragEvent:()=>V,canResizeEvent:()=>B,controlledDate:()=>et,currentTimeIndicator:()=>w,customHeader:()=>eS,dragDrop:()=>$,eventForm:()=>er,eventResize:()=>I,externalDragDrop:()=>ec,getTimeSlotProps:()=>eM,headerFormat:()=>S,intervalMinutes:()=>y,labels:()=>X,localization:()=>eT,overlappingEvents:()=>h,radius:()=>M,recurringEvents:()=>eD,renderEvent:()=>K,renderEventBody:()=>G,slotHeight:()=>x,slotLabelFormat:()=>T,startScrollTime:()=>eo,staticMode:()=>q,timeRange:()=>D,usage:()=>p,viewChange:()=>ea,withoutHeader:()=>Y});e.s(["DayViewDemos",0,eb],7834)}]);