(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,593612,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="ClockIcon",e.s(["ClockIcon",0,r],593612)},663551,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(969610),r=e.i(813982),o=e.i(898770),i=e.i(657068),d=e.i(298008),s=e.i(494834),l={agendaView:"m_c5e63f2d",agendaViewHeader:"m_b70d381a",agendaViewHeaderLabel:"m_693056fa",agendaViewBody:"m_dd488e6f",agendaViewDateGroup:"m_e7e356c4",agendaViewDateHeader:"m_157e8ae8",agendaViewEvent:"m_cbf6b76d",agendaViewEventBody:"m_f9e2e6af",agendaViewEventColor:"m_428823f6",agendaViewEventTime:"m_f9eaffda",agendaViewNoEvents:"m_7a1aec87"},m=e.i(232471),c=e.i(883364),u=e.i(284629),f=e.i(481178),v=e.i(275519),p=e.i(433512),D=e.i(317477),g=e.i(951254),Y=e.i(44091),y=e.i(391466),h=e.i(191788),w=e.i(205693),M=e.i(391398);let k={__staticSelector:"AgendaView",mode:"default",dateHeaderFormat:"dddd, MMMM D",headerFormat:"MMMM D, YYYY"},S=(0,f.createVarsResolver)((e,{radius:t})=>({agendaView:{"--agenda-view-radius":(0,p.getRadius)(t)}})),E=(0,v.factory)(e=>{let f=(0,Y.useProps)("AgendaView",k,e),{classNames:v,className:p,style:E,styles:x,unstyled:T,vars:b,attributes:$,__staticSelector:j,rangeStart:W,rangeEnd:C,events:H,locale:O,radius:V,labels:A,mode:I,renderEvent:R,dateHeaderFormat:z,headerFormat:L,onEventClick:B,recurrenceExpansionLimit:_,...N}=f,F=(0,w.useDatesContext)(),G=(0,g.useMantineTheme)(),P=(0,y.useStyles)({name:j,classes:l,props:f,className:p,style:E,classNames:v,styles:x,unstyled:T,attributes:$,vars:b,varsResolver:S,rootSelector:"agendaView"}),Z=function({rangeStart:e,rangeEnd:t,events:a}){let n={};if(void 0===a)return n;let r=(0,s.default)(e).startOf("day"),i=(0,s.default)(t).startOf("day"),l=new Set;for(let e of a){if("background"===e.display)continue;let t=(0,s.default)(e.start).startOf("day");if(!((0,s.default)(e.end).startOf("day").isBefore(r)||t.isAfter(i))){if(l.has(e.id))throw Error(`[@mantine/schedule] AgendaView: Duplicated event ids found: ${e.id}`);l.add(e.id),!function(e,t,a,n){if((0,o.isMultidayEvent)(e)){let r,o=(0,s.default)(e.start).startOf("day"),i=(r=(0,s.default)(e.end).startOf("day"),0===(0,s.default)(e.end).hour()&&0===(0,s.default)(e.end).minute()?r.subtract(1,"day"):r);for(let r=o;r.isBefore(i)||r.isSame(i);r=r.add(1,"day")){if(r.isBefore(a)||r.isAfter(n))continue;let o=r.format("YYYY-MM-DD");t[o]||(t[o]=[]),t[o].push(e)}return}let r=(0,s.default)(e.start).format("YYYY-MM-DD");t[r]||(t[r]=[]),t[r].push(e)}((0,d.validateEvent)(e),n,r,i)}}return n}({rangeStart:W,rangeEnd:C,events:(0,i.expandRecurringEvents)({events:H,rangeStart:(0,s.default)(W).startOf("day").toDate(),rangeEnd:(0,s.default)(C).endOf("day").toDate(),expansionLimit:_})}),U=Object.keys(Z).sort(),J=`${(0,a.formatDate)({locale:F.getLocale(O),date:W,format:L})} – ${(0,a.formatDate)({locale:F.getLocale(O),date:C,format:L})}`,Q=U.map(e=>{let i=(0,r.sortEvents)(Z[e]).map(a=>{let r=(0,s.default)(a.start).format("HH:mm"),i=(0,s.default)(a.end).format("HH:mm"),d=(0,o.isMultidayEvent)(a)||(0,n.isAllDayEvent)({event:a,date:e}),l=(0,M.jsxs)(m.Box,{...P("agendaViewEventBody"),children:[(0,M.jsx)("div",{...P("agendaViewEventColor",{style:{backgroundColor:(0,D.getThemeColor)(a.color,G)}})}),(0,M.jsxs)("div",{children:[(0,M.jsx)(c.Text,{...P("agendaViewEventTitle"),children:a.title}),(0,M.jsx)(c.Text,{...P("agendaViewEventTime"),children:d?(0,t.getLabel)("allDay",A):`${r} – ${i}`})]})]}),f={...P("agendaViewEvent"),onClick:"static"===I?void 0:e=>{B?.(a,e)},tabIndex:"static"===I?-1:0,children:l};return"function"==typeof R?(0,M.jsx)(h.default.Fragment,{children:R(a,f)},a.id):(0,h.createElement)(u.UnstyledButton,{...f,key:a.id})});return(0,h.createElement)("div",{...P("agendaViewDateGroup"),key:e},(0,M.jsx)(c.Text,{...P("agendaViewDateHeader"),children:(0,a.formatDate)({locale:F.getLocale(O),date:e,format:z})}),i)});return(0,M.jsxs)(m.Box,{...P("agendaView"),...N,children:[(0,M.jsx)("div",{...P("agendaViewHeader"),children:(0,M.jsx)(c.Text,{...P("agendaViewHeaderLabel"),children:J})}),(0,M.jsx)(m.Box,{...P("agendaViewBody"),children:Q.length>0?Q:(0,M.jsx)(c.Text,{...P("agendaViewNoEvents"),children:(0,t.getLabel)("noEvents",A)})})]})});E.displayName="@mantine/schedule/AgendaView",E.classes=l,E.varsResolver=S,e.s(["AgendaView",0,E],663551)},245086,637079,312709,e=>{"use strict";var t=e.i(191788);e.s(["useAutoScrollOnDrag",0,function({viewportRef:e,enabled:a}){let n=(0,t.useRef)(null),r=(0,t.useRef)(0),o=(0,t.useEffectEvent)(()=>{null!==n.current&&(cancelAnimationFrame(n.current),n.current=null),r.current=0}),i=(0,t.useEffectEvent)(()=>{if(null!==n.current)return;let t=()=>{let a=e.current;if(!a||0===r.current){n.current=null;return}a.scrollTop+=r.current,n.current=requestAnimationFrame(t)};n.current=requestAnimationFrame(t)});(0,t.useEffect)(()=>{if(!a)return;let t=e.current;if(!t)return;let n=e=>{let a=t.getBoundingClientRect(),n=e.clientY-a.top,d=a.bottom-e.clientY;n<50?(r.current=-Math.ceil((1-n/50)*8),i()):d<50?(r.current=Math.ceil((1-d/50)*8),i()):o()},d=()=>{o()};return t.addEventListener("dragover",n),t.addEventListener("dragleave",d),t.addEventListener("dragend",d),t.addEventListener("drop",d),()=>{o(),t.removeEventListener("dragover",n),t.removeEventListener("dragleave",d),t.removeEventListener("dragend",d),t.removeEventListener("drop",d)}},[a,e])}],245086);var a=e.i(672654),n=e.i(42916),r=e.i(494834);e.s(["useEventResize",0,function({enabled:e=!1,mode:o="default",startTime:i,endTime:d,intervalMinutes:s,onEventResize:l,canResizeEvent:m}){let[c,u]=(0,t.useState)(null),f=(0,t.useRef)(null),v=(0,t.useRef)(!1),p=(0,t.useEffectEvent)(l||(()=>{})),D=(0,n.parseTimeString)(i),g=(0,n.parseTimeString)(d),Y=60*D.hours+D.minutes,y=60*g.hours+g.minutes,h=(0,a.clampIntervalMinutes)(s),w=y-Y,M=Math.ceil(w/h)*h,k=h/M*100,S=(0,t.useCallback)(e=>Math.max(0,Math.min(w,Math.round(e/h)*h)),[w,h]),E=(0,t.useCallback)((e,t)=>{let a=Y+S(e/100*M),n=Math.floor(a/60);return`${t} ${String(n).padStart(2,"0")}:${String(a%60).padStart(2,"0")}:00`},[M,Y,S]),x=(0,t.useCallback)(e=>S(e/100*M)/M*100,[M,S]),T=(0,t.useCallback)(({event:t,edge:a,container:n,originalTop:i,originalHeight:d,eventDate:s,pointerEvent:l})=>{if(!e||"static"===o)return;l.preventDefault(),l.stopPropagation();let m={eventId:t.id,event:t,edge:a,container:n,originalTop:i,originalHeight:d,currentTop:i,currentHeight:d,eventDate:s,originalStart:(0,r.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,r.default)(t.end).format("YYYY-MM-DD HH:mm:ss")};f.current=m,u(m)},[e,o]),b=null!==c;(0,t.useEffect)(()=>{if(!b)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{let t=f.current;if(!t)return;let a=t.container.getBoundingClientRect(),n=x(Math.max(0,Math.min(100,(e.clientY-a.top)/a.height*100))),r=t.originalTop,o=t.originalHeight;if("bottom"===t.edge)o=Math.max(k,n-t.originalTop);else{let e=t.originalTop+t.originalHeight;r=Math.min(n,e-k),o=e-r}f.current={...t,currentTop:r,currentHeight:o},u(f.current)},a=()=>{let e=f.current;if(e&&(e.currentTop!==e.originalTop||e.currentHeight!==e.originalHeight)){let t,a;"top"===e.edge?(t=E(e.currentTop,e.eventDate),a=e.originalEnd):(t=e.originalStart,a=E(e.currentTop+e.currentHeight,e.eventDate)),p({eventId:e.eventId,newStart:t,newEnd:a,event:e.event})}f.current=null,u(null),v.current=!0,requestAnimationFrame(()=>{v.current=!1})};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a)}},[b]);let $=(0,t.useCallback)(e=>c&&c.eventId===e?{top:c.currentTop,height:c.currentHeight}:null,[c]),j=(0,t.useCallback)(t=>!!e&&"static"!==o&&"background"!==t.display&&(!m||m(t)),[e,o,m]),W=(0,t.useCallback)(()=>v.current,[]);return{handleResizeStart:T,isResizing:b,resizingEventId:c?.eventId??null,getResizePosition:$,isResizableEvent:j,wasResizing:W}}],637079);var o=e.i(27748),i=e.i(688785),d=e.i(664397),s={currentTimeIndicator:"m_74c54f2d",currentTimeIndicatorLine:"m_e62414c1",currentTimeIndicatorThumb:"m_decee6a9",currentTimeIndicatorTimeBubble:"m_4b00bcc6"},l=e.i(232471),m=e.i(481178),c=e.i(275519),u=e.i(317477),f=e.i(44091),v=e.i(391466),p=e.i(822933),D=e.i(205693),g=e.i(391398);let Y={__staticSelector:"CurrentTimeIndicator",withTimeBubble:!0,withThumb:!0,currentTimeFormat:"HH:mm",topOffset:"0rem"},y=(0,m.createVarsResolver)((e,{color:t})=>({currentTimeIndicator:{"--indicator-color":t?(0,u.getThemeColor)(t,e):void 0}})),h=(0,c.factory)(e=>{let a=(0,f.useProps)("CurrentTimeIndicator",Y,e),{classNames:n,className:m,style:c,styles:u,unstyled:h,vars:w,attributes:M,startOffset:k,endOffset:S,color:E,withTimeBubble:x,withThumb:T,currentTimeFormat:b,locale:$,timeBubbleStartOffset:j,__staticSelector:W,topOffset:C,startTime:H,endTime:O,intervalMinutes:V,getCurrentTime:A,...I}=a,R=(0,v.useStyles)({name:W,classes:s,props:a,className:m,style:c,classNames:n,styles:u,unstyled:h,vars:w,varsResolver:y,attributes:M,rootSelector:"currentTimeIndicator"}),z=(0,D.useDatesContext)(),[,L]=(0,t.useState)(0);(0,p.useInterval)(()=>L(e=>e+1),6e4,{autoInvoke:!0});let B=A?(0,r.default)(A()):(0,r.default)(),_=(0,i.getCurrentTimePosition)({startTime:H,endTime:O,intervalMinutes:V,now:B}),N=x?(0,o.formatDate)({locale:z.getLocale($),date:B,format:b}):"";return(0,d.isInTimeRange)({date:B,startTime:H,endTime:O})?(0,g.jsxs)(l.Box,{...R("currentTimeIndicator"),__vars:{"--top-offset":`calc(${_}% + ${C})`,"--start-offset":k,"--end-offset":S,"--time-bubble-start-offset":j,"--time-bubble-width":N?.toString().toLowerCase().includes("m")?"64px":"46px"},...I,children:[x&&(0,g.jsx)("div",{...R("currentTimeIndicatorTimeBubble"),children:N}),T&&(0,g.jsx)("div",{...R("currentTimeIndicatorThumb")}),(0,g.jsx)("div",{...R("currentTimeIndicatorLine")})]}):null});h.displayName="@mantine/schedule/CurrentTimeIndicator",h.classes=s,h.varsResolver=y,e.s(["CurrentTimeIndicator",0,h],312709)},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[n,r]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),i=e.i(391398),d=e.i(458272);let s=(0,o.createContext)({withinGroup:!1}),l={openDelay:0,closeDelay:0};function m(e){let{openDelay:a,closeDelay:n,children:r}=(0,t.useProps)("HoverCardGroup",l,e);return(0,i.jsx)(s,{value:{withinGroup:!0},children:(0,i.jsx)(d.FloatingDelayGroup,{delay:{open:a,close:n},children:r})})}m.displayName="@mantine/core/HoverCardGroup",m.extend=e=>e;var c=e.i(334816);function u(e){let{children:n,onMouseEnter:d,onMouseLeave:l,...m}=(0,t.useProps)("HoverCardDropdown",null,e),u=r();if((0,o.use)(s).withinGroup&&u.getFloatingProps&&u.floating){let e=u.getFloatingProps();return(0,i.jsx)(a.Popover.Dropdown,{ref:u.floating,...e,onMouseEnter:(0,c.createEventHandler)(d,e.onMouseEnter),onMouseLeave:(0,c.createEventHandler)(l,e.onMouseLeave),...m,children:n})}let f=(0,c.createEventHandler)(d,u.openDropdown),v=(0,c.createEventHandler)(l,u.closeDropdown);return(0,i.jsx)(a.Popover.Dropdown,{onMouseEnter:f,onMouseLeave:v,...m,children:n})}u.displayName="@mantine/core/HoverCardDropdown";var f=e.i(275825),v=e.i(409703),p=e.i(332977);let D={refProp:"ref"};function g(e){let{children:n,refProp:d,eventPropsWrapperName:l,...m}=(0,t.useProps)("HoverCardTarget",D,e),u=(0,v.getSingleElementChild)(n);if(!u)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let g=r(),Y=(0,o.use)(s),y=(0,p.useMergedRef)((0,f.getRefProp)(u),g.assignTarget);if(Y.withinGroup&&g.getReferenceProps&&g.reference){let e=g.getReferenceProps();return(0,i.jsx)(a.Popover.Target,{refProp:d,...m,children:(0,o.cloneElement)(u,l?{[l]:{...e,ref:g.reference}}:{...e,ref:g.reference})})}let h={onMouseEnter:(0,c.createEventHandler)(u.props.onMouseEnter,g.openDropdown),onMouseLeave:(0,c.createEventHandler)(u.props.onMouseLeave,g.closeDropdown)},w={...l?{[l]:h}:h,ref:y};return(0,i.jsx)(a.Popover.Target,{refProp:d,...m,children:(0,o.cloneElement)(u,w)})}g.displayName="@mantine/core/HoverCardTarget";var Y=e.i(107315);let y={openDelay:0,closeDelay:150,initiallyOpened:!1};function h(e){let{children:r,onOpen:l,onClose:m,openDelay:c,closeDelay:u,initiallyOpened:f,...v}=(0,t.useProps)("HoverCard",y,e),p=function(e){let[t,a]=(0,o.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,r=(0,o.use)(s).withinGroup,i=(0,Y.useId)(),l=(0,o.useRef)(-1),m=(0,o.useRef)(-1),c=(0,o.useRef)(null),u=(0,o.useCallback)(e=>{c.current=e},[]),f=(0,o.useCallback)(()=>{window.clearTimeout(l.current),window.clearTimeout(m.current)},[]),v=(0,o.useCallback)(t=>{a(t),t?(y(i),e.onOpen?.()):e.onClose?.()},[i,e.onOpen,e.onClose]),{context:p,refs:D}=(0,d.useFloating)({open:n,onOpenChange:v}),{delay:g,setCurrentId:y}=(0,d.useDelayGroup)(p,{id:i}),{getReferenceProps:h,getFloatingProps:w}=(0,d.useInteractions)([(0,d.useHover)(p,{enabled:!0,delay:r?g:{open:e.openDelay,close:e.closeDelay}}),(0,d.useRole)(p,{role:"dialog"}),(0,d.useDismiss)(p,{enabled:r})]),M=(0,o.useCallback)(()=>{r||(f(),0===e.openDelay||void 0===e.openDelay?v(!0):l.current=window.setTimeout(()=>v(!0),e.openDelay))},[r,f,e.openDelay,v]),k=(0,o.useCallback)(()=>{r||(f(),0===e.closeDelay||void 0===e.closeDelay?v(!1):m.current=window.setTimeout(()=>v(!1),e.closeDelay))},[r,f,e.closeDelay,v]),S=(0,o.useRef)(v);return S.current=v,(0,o.useEffect)(()=>()=>f(),[f]),(0,o.useEffect)(()=>{if(!n||r||"u"<typeof IntersectionObserver)return;let e=c.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(f(),S.current(!1))});return t.observe(e),()=>t.disconnect()},[n,r,f]),{opened:n,reference:D.setReference,floating:D.setFloating,assignTarget:u,getReferenceProps:h,getFloatingProps:w,openDropdown:M,closeDropdown:k}}({openDelay:c,closeDelay:u,defaultOpened:f,onOpen:l,onClose:m});return(0,i.jsx)(n,{value:{openDropdown:p.openDropdown,closeDropdown:p.closeDropdown,assignTarget:p.assignTarget,getReferenceProps:p.getReferenceProps,getFloatingProps:p.getFloatingProps,reference:p.reference,floating:p.floating},children:(0,i.jsx)(a.Popover,{...v,opened:p.opened,__staticSelector:"HoverCard",children:r})})}h.displayName="@mantine/core/HoverCard",h.Target=g,h.Dropdown=u,h.Group=m,h.extend=e=>e,e.s(["HoverCard",0,h],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),n=e.i(671640),r=e.i(883364),o=e.i(391398),i=e.i(494834);let d=`import dayjs from 'dayjs';
import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
  resources?: ScheduleResourceData[];
}

export function EventDetails({ event, resources }: EventDetailsProps) {
  const resource = resources?.find((r) => r.id === event.resourceId);

  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      <Text size="xs" c="dimmed">
        {dayjs(event.start).format('MMM D, YYYY HH:mm')} – {dayjs(event.end).format('HH:mm')}
      </Text>

      {resource && (
        <Text size="xs" c="dimmed">
          {resource.label}
        </Text>
      )}

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
}`;e.s(["EventDetails",0,function({event:e,resources:d}){let s=d?.find(t=>t.id===e.resourceId);return(0,o.jsxs)(n.Stack,{gap:"xs",children:[(0,o.jsx)(r.Text,{fw:600,size:"sm",children:e.title}),(0,o.jsxs)(r.Text,{size:"xs",c:"dimmed",children:[(0,i.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,i.default)(e.end).format("HH:mm")]}),s&&(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:s.label}),e.payload?.description&&(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(a.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,d])},664894,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(a,n,r){var o,i=function(e,a,n){void 0===n&&(n={});var r,o,i,d,s=new Date(e);return(void 0===(r=n)&&(r={}),(d=t[i=a+"|"+(o=r.timeZoneName||"short")])||(d=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:a,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:o}),t[i]=d),d).formatToParts(s)},d=function(t,a){for(var n=i(t,a),o=[],d=0;d<n.length;d+=1){var s=n[d],l=s.type,m=s.value,c=e[l];c>=0&&(o[c]=parseInt(m,10))}var u=o[3],f=o[0]+"-"+o[1]+"-"+o[2]+" "+(24===u?0:u)+":"+o[4]+":"+o[5]+":000",v=+t;return(r.utc(f).valueOf()-(v-=v%1e3))/6e4},s=n.prototype;s.tz=function(e,t){void 0===e&&(e=o);var a,n=this.utcOffset(),i=this.toDate(),d=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(d))/1e3/60),l=-(15*Math.round(i.getTimezoneOffset()/15))-s;if(Number(l)){if(a=r(d,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(l,!0),t){var m=a.utcOffset();a=a.add(n-m,"minute")}}else a=this.utcOffset(0,t);return a.$x.$timezone=e,a},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),a=i(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return a&&a.value};var l=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var a=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(a,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var n=a&&t,i=a||t||o,s=d(+r(),i);if("string"!=typeof e)return r(e).tz(i);var l=function(e,t,a){var n=e-60*t*1e3,r=d(n,a);if(t===r)return[n,t];var o=d(n-=60*(r-t)*1e3,a);return r===o?[n,r]:[e-60*Math.min(r,o)*1e3,Math.max(r,o)]}(r.utc(e,n).valueOf(),s,i),m=l[0],c=l[1],u=r(m).utcOffset(c);return u.$x.$timezone=i,u},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){o=e}}}()},53157,(e,t,a)=>{e.e,t.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(n,r,o){var i=r.prototype;o.utc=function(e){var t={date:e,utc:!0,args:arguments};return new r(t)},i.utc=function(t){var a=o(this.toDate(),{locale:this.$L,utc:!0});return t?a.add(this.utcOffset(),e):a},i.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var d=i.parse;i.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),d.call(this,e)};var s=i.init;i.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else s.call(this)};var l=i.utcOffset;i.utcOffset=function(n,r){var o=this.$utils().u;if(o(n))return this.$u?0:o(this.$offset)?l.call(this):this.$offset;if("string"==typeof n&&null===(n=function(e){void 0===e&&(e="");var n=e.match(t);if(!n)return null;var r=(""+n[0]).match(a)||["-",0,0],o=r[0],i=60*r[1]+ +r[2];return 0===i?0:"+"===o?i:-i}(n)))return this;var i=16>=Math.abs(n)?60*n:n;if(0===i)return this.utc(r);var d=this.clone();if(r)return d.$offset=i,d.$u=!1,d;var s=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(d=this.local().add(i+s,e)).$offset=i,d.$x.$localOffset=s,d};var m=i.format;i.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return m.call(this,t)},i.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var c=i.toDate;i.toDate=function(e){return"s"===e&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var u=i.diff;i.diff=function(e,t,a){if(e&&this.$u===e.$u)return u.call(this,e,t,a);var n=this.local(),r=o(e).local();return u.call(n,r,t,a)}}}()},554166,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="MapPinIcon",e.s(["MapPinIcon",0,r],554166)},500120,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),r=(0,a.default)(n).add(1,"day").format("YYYY-MM-DD"),o=(0,a.default)(n).add(2,"day").format("YYYY-MM-DD"),i=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"Project Planning",start:`${o} 10:00:00`,end:`${o} 12:00:00`,color:"pink"},{id:7,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],d=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Tomorrow Event 1",start:`${r} 09:00:00`,end:`${r} 10:30:00`,color:"green"},{id:5,title:"Tomorrow Event 2",start:`${r} 09:30:00`,end:`${r} 11:00:00`,color:"orange"}],s=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${r} 17:30:00`,end:`${r} 18:00:00`,color:"orange"}],l=`
import dayjs from 'dayjs';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
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
`;var m=e.i(191788),c=e.i(391398),u=e.i(315401);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"09:00:00",endTime:"17:00:00"})},code:`
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
`},p={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
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
`},D=(0,a.default)().format("YYYY-MM-DD"),g=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),Y=[{id:1,title:"Morning Standup",start:`${D} 09:00:00`,end:`${D} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${g} 11:15:00`,end:`${g} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${D} 14:00:00`,end:`${D} 14:45:00`,color:"violet"}],y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(Y);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:15,withSubHourGridLines:!0,withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
    start: \`\${tomorrow} 11:15:00\`,
    end: \`\${tomorrow} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:45:00\`,
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

  // Events snap to 15 minutes increments, but only one grid line per hour is displayed
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={15}
      withSubHourGridLines
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},h=(0,a.default)().subtract((0,a.default)().day(),"day").format("YYYY-MM-DD"),w=(0,a.default)(h).add(1,"day").format("YYYY-MM-DD"),M=(0,a.default)(h).add(2,"day").format("YYYY-MM-DD"),k=[{id:1,title:"Morning Standup",start:`${h} 09:00:00`,end:`${h} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${w} 10:00:00`,end:`${w} 11:30:00`,color:"green"},{id:3,title:"Code Review",start:`${M} 14:00:00`,end:`${M} 15:00:00`,color:"violet"}],S={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:k,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import dayjs from 'dayjs';

const startOfWeek = dayjs().subtract(dayjs().day(), 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');
const twoDaysAfterStartOfWeek = dayjs(startOfWeek).add(2, 'day').format('YYYY-MM-DD');

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
    start: \`\${dayAfterStartOfWeek} 10:00:00\`,
    end: \`\${dayAfterStartOfWeek} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${twoDaysAfterStartOfWeek} 14:00:00\`,
    end: \`\${twoDaysAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
];
`,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",weekdayFormat:"dd"})},code:`
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
`},x={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1})},code:`
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
`},T={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",highlightToday:!0})},code:`
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
`},b={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withWeekNumber:!1})},code:`
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
`},$={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:`
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
`},j={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:"2030-06-10",events:i,withCurrentTimeIndicator:!0,forceCurrentTimeIndicator:!0})},code:`
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
`};var W=e.i(988798),C=e.i(671640),H=e.i(664894),O=e.i(53157);a.default.extend(O.default),a.default.extend(H.default);let V=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],A={type:"code",component:function(){let[e,t]=(0,m.useState)("UTC"),n=()=>(0,a.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),r=n().split(" ")[0];return(0,c.jsxs)(C.Stack,{children:[(0,c.jsx)(W.Select,{label:"Display timezone",data:V,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,c.jsx)(u.WeekView,{date:r,events:[{id:1,title:"Morning standup",start:`${r} 09:00:00`,end:`${r} 09:30:00`,color:"blue"},{id:2,title:"Team meeting",start:`${r} 12:00:00`,end:`${r} 13:00:00`,color:"teal"},{id:3,title:"Code review",start:`${r} 16:00:00`,end:`${r} 17:00:00`,color:"grape"}],getCurrentTime:n,startScrollTime:(0,a.default)(n()).subtract(2,"hour").format("HH:mm:ss"),withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData } from '@mantine/schedule';\n\nexport function getEvents(date: string): ScheduleEventData[] {\n  return [\n    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },\n    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },\n    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },\n  ];\n}\n",language:"tsx",fileName:"data.ts"}]},I={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withAllDaySlots:!1})},code:`
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
`},R={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:`
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
`},z={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",weekLabelFormat:"MMMM D, YYYY"})},code:`
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
`},L={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h A"})},code:`
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
`},B={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:`
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
`},_={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:s,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:`
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
`},N={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:s,highlightBusinessHours:!0,businessHours:{1:["09:00:00","17:00:00"],2:["09:00:00","17:00:00"],3:["09:00:00","17:00:00"],4:["09:00:00","17:00:00"],5:["09:00:00","13:00:00"]},startTime:"07:00:00",endTime:"20:00:00"})},code:`
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
`},F={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00"})},code:`
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
`};var G=e.i(441058);let P=(0,a.default)().format("YYYY-MM-DD"),Z=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),U=[{id:1,title:"Morning Standup",start:`${P} 09:00:00`,end:`${P} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${Z} 11:00:00`,end:`${Z} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${P} 14:00:00`,end:`${P} 15:00:00`,color:"violet"},{id:4,title:"Company Holiday",start:(0,a.default)((0,G.getStartOfWeek)({date:P,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,G.getStartOfWeek)({date:P,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:5,title:"Release Day",start:(0,a.default)((0,G.getStartOfWeek)({date:P,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,G.getStartOfWeek)({date:P,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"}],J={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(U);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},Q=(0,a.default)().format("YYYY-MM-DD"),K=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),q=[{id:1,title:"Morning Standup",start:`${Q} 09:00:00`,end:`${Q} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${K} 11:00:00`,end:`${K} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${Q} 14:00:00`,end:`${Q} 15:00:00`,color:"violet"}],X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(q);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var ee=e.i(19683),et=e.i(369974),ea=e.i(284629);let en=(0,a.default)(),er=en.subtract((en.day()+6)%7,"day"),eo=[{id:1,title:"Team Standup",start:er.add(1,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(1,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:er.add(2,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(2,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:er.add(3,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(3,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:er.add(4,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(4,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"All Day Conference",start:er.add(5,"day").format("YYYY-MM-DD 00:00:00"),end:er.add(5,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],ei={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(eo);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(r).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(et.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(et.HoverCard.Target,{children:(0,c.jsx)(ea.UnstyledButton,{...t})}),(0,c.jsx)(et.HoverCard.Dropdown,{children:(0,c.jsx)(ee.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:ee._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(eo,null,2)};`,language:"tsx"}]},ed={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:`
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
`};var es=e.i(162077);let el={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)(i),[o,d]=(0,m.useState)(!1),[s,l]=(0,m.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),d(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),d(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,c.jsx)(es.EventForm,{opened:o,onClose:()=>d(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:es._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]},em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(i);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var ec=e.i(232471),eu=e.i(20035),ef=e.i(883364);let ev=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ep={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)([]),n=(0,m.useRef)(1);return(0,c.jsxs)(eu.Grid,{children:[(0,c.jsxs)(eu.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(ef.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),ev.map(e=>(0,c.jsxs)(ec.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(ef.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(ef.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,c.jsx)(eu.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(r),s=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},eD=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eg={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(eD),[n,r]=(0,m.useState)([]),[o,i]=(0,m.useState)(!1),d=(0,m.useRef)(1);return(0,c.jsxs)(eu.Grid,{children:[(0,c.jsx)(eu.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(ec.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:d}=JSON.parse(o),s=n.find(e=>String(e.id)===String(d));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),r(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(ef.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsxs)(ec.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(ef.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(ef.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,c.jsx)(ef.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(eu.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.WeekView,{date:new Date,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),s=(0,a.default)(n),l=s.add(i.duration,"minutes");r(e=>[...e,{id:d.current++,title:i.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},eY=(0,a.default)((0,G.getStartOfWeek)({date:new Date,firstDayOfWeek:1})).format("YYYY-MM-DD"),ey=[{id:"weekly-sync-series",title:"Weekly sync (series)",start:`${eY} 10:00:00`,end:`${eY} 11:00:00`,color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12",exdate:[`${(0,a.default)(eY).add(2,"day").format("YYYY-MM-DD")} 10:00:00`]}},{id:"weekly-sync-override",title:"Weekly sync (moved this week)",start:`${(0,a.default)(eY).add(2,"day").format("YYYY-MM-DD")} 15:00:00`,end:`${(0,a.default)(eY).add(2,"day").format("YYYY-MM-DD")} 16:00:00`,color:"grape",recurringEventId:"weekly-sync-series",recurrenceId:`${(0,a.default)(eY).add(2,"day").format("YYYY-MM-DD")} 10:00:00`},{id:"one-off-week",title:"One-off interview",start:`${(0,a.default)(eY).add(1,"day").format("YYYY-MM-DD")} 13:00:00`,end:`${(0,a.default)(eY).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,color:"green"}],eh={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(eY);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:ey,startTime:"08:00:00",endTime:"20:00:00",intervalMinutes:60})},code:`
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
`},ew=(0,a.default)().format("YYYY-MM-DD"),eM=[{id:"lunch-block",title:"Lunch break",start:`${ew} 12:00:00`,end:`${ew} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${ew} 14:00:00`,end:`${ew} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${ew} 10:00:00`,end:`${ew} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ew} 14:30:00`,end:`${ew} 15:30:00`,color:"green"}],ek={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ew);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:eM,startTime:"08:00:00",endTime:"18:00:00"})},code:`
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
`},eS=(0,a.default)((0,G.getStartOfWeek)({date:new Date,firstDayOfWeek:1})),eE=Array.from({length:5},(e,t)=>eS.add(t,"day").format("YYYY-MM-DD")),ex=[...eE.map((e,t)=>({id:`lunch-${t}`,title:"Lunch break",start:`${e} 12:00:00`,end:`${e} 13:00:00`,color:"red",display:"background"})),{id:"team-meeting",title:"Team meeting",start:`${eE[0]} 10:00:00`,end:`${eE[0]} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eE[2]} 15:00:00`,end:`${eE[2]} 16:00:00`,color:"green"}],eT={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ex);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:r})=>{e.some(e=>"background"===e.display&&n<e.end&&r>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:r}:e))},styles:{weekViewBackgroundEvent:{background:`repeating-linear-gradient(
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
`}]};var eb=e.i(428127);let e$={defaultExpanded:!1,type:"code",component:function(){let e,t,[n,r]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(eb.ScheduleHeader,{children:[(0,c.jsx)(eb.ScheduleHeader.Previous,{onClick:()=>r((0,a.default)(n).subtract(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(eb.ScheduleHeader.Control,{interactive:!1,miw:200,children:(t=(e=(0,a.default)((0,G.getStartOfWeek)({date:n,firstDayOfWeek:1}))).add(6,"day"),e.month()===t.month()?`${e.format("MMM D")} – ${t.format("D, YYYY")}`:`${e.format("MMM D")} – ${t.format("MMM D, YYYY")}`)}),(0,c.jsx)(eb.ScheduleHeader.Next,{onClick:()=>r((0,a.default)(n).add(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(eb.ScheduleHeader.Today,{onClick:()=>r((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(eb.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(u.WeekView,{date:n,onDateChange:r,events:i,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};e.i(27355);let ej={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",weekday:"Día de la semana",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eW={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var eC=e.i(593612),eH=e.i(554166),eO=e.i(725695);let eV=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eA=(0,a.default)(eV).add(1,"day").format("YYYY-MM-DD"),eI=[{id:1,title:"Morning Standup",start:`${eV} 09:00:00`,end:`${eV} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${eV} 11:00:00`,end:`${eV} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${eA} 12:30:00`,end:`${eA} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],eR={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:eI,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,c.jsxs)(eO.Group,{children:[(0,c.jsx)(ef.Text,{fz:12,fw:500,children:e.title}),(0,c.jsxs)(eO.Group,{gap:4,children:[(0,c.jsx)(eC.ClockIcon,{size:12}),(0,c.jsx)(ef.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,c.jsxs)(eO.Group,{gap:4,children:[(0,c.jsx)(eH.MapPinIcon,{size:12}),(0,c.jsx)(ef.Text,{fz:10,children:e.payload.location})]})]})})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
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
`},ez=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eL=(0,a.default)(ez).add(1,"day").format("YYYY-MM-DD"),eB=(0,a.default)(ez).add(2,"day").format("YYYY-MM-DD"),e_=[{id:1,title:"Conference Day",start:`${ez} 00:00:00`,end:(0,a.default)(ez).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${eL} 00:00:00`,end:(0,a.default)(eL).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${ez} 00:00:00`,end:(0,a.default)(eB).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Morning Standup",start:`${ez} 09:00:00`,end:`${ez} 09:30:00`,color:"blue"},{id:5,title:"Code Review",start:`${eL} 14:00:00`,end:`${eL} 15:00:00`,color:"violet"}],eN={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:e_,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
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
`},eF=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eG=(0,a.default)(eF).add(1,"day").format("YYYY-MM-DD"),eP=[{id:1,title:"Draggable Event",start:`${eF} 09:00:00`,end:`${eF} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${eF} 11:00:00`,end:`${eF} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${eG} 14:00:00`,end:`${eG} 15:00:00`,color:"green"}],eZ={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)(eP);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canDragEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
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
`},eU=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eJ=(0,a.default)(eU).add(1,"day").format("YYYY-MM-DD"),eQ=[{id:1,title:"Resizable Event",start:`${eU} 09:00:00`,end:`${eU} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${eU} 11:00:00`,end:`${eU} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${eJ} 14:00:00`,end:`${eJ} 15:00:00`,color:"green"}],eK={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)(eQ);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
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
`};var eq=e.i(485108);let eX={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),n=(0,a.default)(e).subtract(((0,a.default)(e).day()+6)%7,"day");return(0,c.jsxs)("div",{children:[(0,c.jsxs)(eO.Group,{mb:"md",children:[(0,c.jsx)(eq.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Week"}),(0,c.jsxs)(ef.Text,{fw:500,children:[n.format("MMM D")," – ",n.add(6,"day").format("MMM D, YYYY")]}),(0,c.jsx)(eq.Button,{onClick:()=>t((0,a.default)(e).add(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Next Week"})]}),(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const weekStart = dayjs(date).subtract((dayjs(date).day() + 6) % 7, 'day');

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Week
        </Button>
        <Text fw={500}>{weekStart.format('MMM D')} – {weekStart.add(6, 'day').format('MMM D, YYYY')}</Text>
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},e0={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)("week");return(0,c.jsxs)("div",{children:[(0,c.jsxs)(ef.Text,{mb:"md",children:["Selected view: ",n]}),(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",onViewChange:r})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},e1={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},e2=(0,a.default)().format("YYYY-MM-DD"),e8=(0,a.default)().startOf("week").add(1,"day").format("YYYY-MM-DD"),e4=[{id:"standup",title:"Morning Standup",start:`${e2} 09:00:00`,end:`${e2} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${e2} 10:00:00`,end:`${e2} 11:30:00`,color:"green"},{id:"weekly-review-series",title:"Weekly review",start:`${e8} 16:00:00`,end:`${e8} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],e3={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(e2);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:e4,withAgenda:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfWeek = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfWeek} 16:00:00\`,
    end: \`\${startOfWeek} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
`};var e6=(0,t.__exportAll)({allDayEvents:()=>eN,backgroundEvents:()=>ek,backgroundEventsCustomStyle:()=>eT,bidirectionalDragDrop:()=>eg,businessHours:()=>_,businessHoursPerDay:()=>N,canDragEvent:()=>eZ,canResizeEvent:()=>eK,controlledDate:()=>eX,currentTimeIndicator:()=>$,customHeader:()=>e$,dragDrop:()=>J,eventForm:()=>el,eventResize:()=>X,externalDragDrop:()=>ep,firstDayOfWeek:()=>S,forceCurrentTimeIndicator:()=>j,getTimeSlotProps:()=>e1,highlightToday:()=>T,intervalMinutes:()=>p,localization:()=>ej,overlappingEvents:()=>F,radius:()=>eW,recurringEvents:()=>eh,renderEvent:()=>ei,renderEventBody:()=>eR,slotHeight:()=>B,slotLabelFormat:()=>L,startScrollTime:()=>em,staticMode:()=>ed,subHourGridLines:()=>y,timeRange:()=>v,timezone:()=>A,usage:()=>f,viewChange:()=>e0,weekLabelFormat:()=>z,weekdayFormat:()=>E,withAgenda:()=>e3,withoutAllDaySlots:()=>I,withoutHeader:()=>R,withoutWeekNumber:()=>b,withoutWeekendDays:()=>x});e.s(["WeekViewDemos",0,e6],500120)}]);