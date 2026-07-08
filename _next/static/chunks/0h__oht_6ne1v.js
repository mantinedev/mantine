(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},o=e.i(424302),r=e.i(392862),i=e.i(284629),d=e.i(275519),s=e.i(44091),l=e.i(391466),c=e.i(541772),m=e.i(391398);let u={dropdownType:"popover"},v=(0,d.factory)(e=>{let d=(0,s.useProps)("MoreEvents",u,e),{classNames:v,className:D,style:p,styles:f,unstyled:y,vars:g,attributes:h,radius:w,dropdownType:x,events:Y,moreEventsCount:E,popoverProps:S,modalProps:T,onDropdownClose:M,children:b,modalTitle:j,renderEventBody:$,renderEvent:C,id:H,labels:k,mode:V,onEventClick:R,...I}=d,[z,O]=(0,c.useDisclosure)(),A=(0,l.useStyles)({name:"MoreEvents",classes:n,props:d,className:D,style:p,classNames:v,styles:f,unstyled:y,attributes:h,vars:g,rootSelector:"moreEventsButton"}),B=()=>{O.close(),M?.()},N=(0,m.jsx)("div",{...A("moreEventsList"),children:Y.map(e=>(0,m.jsx)(a.ScheduleEvent,{radius:w,event:e,size:"md",renderEventBody:$,renderEvent:C,mode:V,onClick:R?t=>R(e,t):void 0,children:e.title},e.id))});return(0,m.jsxs)(m.Fragment,{children:["modal"===x&&(0,m.jsx)(o.Modal,{opened:z,onClose:B,unstyled:y,radius:w,title:j,...T,children:N}),(0,m.jsxs)(r.Popover,{position:"bottom-start",width:260,opened:z,trapFocus:!0,returnFocus:!1,unstyled:y,disabled:S?.disabled||"modal"===x,radius:w,transitionProps:{transition:"pop",duration:120},offset:-46,id:H,...S,onChange:e=>{e||(S?.onChange?.(e),B())},children:[(0,m.jsx)(r.Popover.Target,{children:(0,m.jsx)(i.UnstyledButton,{...A("moreEventsButton"),mod:{static:"static"===V},onClick:()=>O.toggle(),...I,children:(0,t.getLabel)("moreLabel",k)(E)})}),(0,m.jsx)(r.Popover.Dropdown,{...A("moreEventsDropdown"),children:N})]})]})});v.displayName="@mantine/schedule/MoreEvents",v.classes=n,e.s(["MoreEvents",0,v],67312)},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[n,o]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var r=e.i(191788),i=e.i(391398),d=e.i(458272);let s=(0,r.createContext)({withinGroup:!1}),l={openDelay:0,closeDelay:0};function c(e){let{openDelay:a,closeDelay:n,children:o}=(0,t.useProps)("HoverCardGroup",l,e);return(0,i.jsx)(s,{value:{withinGroup:!0},children:(0,i.jsx)(d.FloatingDelayGroup,{delay:{open:a,close:n},children:o})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var m=e.i(334816);function u(e){let{children:n,onMouseEnter:d,onMouseLeave:l,...c}=(0,t.useProps)("HoverCardDropdown",null,e),u=o();if((0,r.use)(s).withinGroup&&u.getFloatingProps&&u.floating){let e=u.getFloatingProps();return(0,i.jsx)(a.Popover.Dropdown,{ref:u.floating,...e,onMouseEnter:(0,m.createEventHandler)(d,e.onMouseEnter),onMouseLeave:(0,m.createEventHandler)(l,e.onMouseLeave),...c,children:n})}let v=(0,m.createEventHandler)(d,u.openDropdown),D=(0,m.createEventHandler)(l,u.closeDropdown);return(0,i.jsx)(a.Popover.Dropdown,{onMouseEnter:v,onMouseLeave:D,...c,children:n})}u.displayName="@mantine/core/HoverCardDropdown";var v=e.i(275825),D=e.i(409703),p=e.i(332977);let f={refProp:"ref"};function y(e){let{children:n,refProp:d,eventPropsWrapperName:l,...c}=(0,t.useProps)("HoverCardTarget",f,e),u=(0,D.getSingleElementChild)(n);if(!u)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let y=o(),g=(0,r.use)(s),h=(0,p.useMergedRef)((0,v.getRefProp)(u),y.assignTarget);if(g.withinGroup&&y.getReferenceProps&&y.reference){let e=y.getReferenceProps();return(0,i.jsx)(a.Popover.Target,{refProp:d,...c,children:(0,r.cloneElement)(u,l?{[l]:{...e,ref:y.reference}}:{...e,ref:y.reference})})}let w={onMouseEnter:(0,m.createEventHandler)(u.props.onMouseEnter,y.openDropdown),onMouseLeave:(0,m.createEventHandler)(u.props.onMouseLeave,y.closeDropdown)},x={...l?{[l]:w}:w,ref:h};return(0,i.jsx)(a.Popover.Target,{refProp:d,...c,children:(0,r.cloneElement)(u,x)})}y.displayName="@mantine/core/HoverCardTarget";var g=e.i(107315);let h={openDelay:0,closeDelay:150,initiallyOpened:!1};function w(e){let{children:o,onOpen:l,onClose:c,openDelay:m,closeDelay:u,initiallyOpened:v,...D}=(0,t.useProps)("HoverCard",h,e),p=function(e){let[t,a]=(0,r.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,o=(0,r.use)(s).withinGroup,i=(0,g.useId)(),l=(0,r.useRef)(-1),c=(0,r.useRef)(-1),m=(0,r.useRef)(null),u=(0,r.useCallback)(e=>{m.current=e},[]),v=(0,r.useCallback)(()=>{window.clearTimeout(l.current),window.clearTimeout(c.current)},[]),D=(0,r.useCallback)(t=>{a(t),t?(h(i),e.onOpen?.()):e.onClose?.()},[i,e.onOpen,e.onClose]),{context:p,refs:f}=(0,d.useFloating)({open:n,onOpenChange:D}),{delay:y,setCurrentId:h}=(0,d.useDelayGroup)(p,{id:i}),{getReferenceProps:w,getFloatingProps:x}=(0,d.useInteractions)([(0,d.useHover)(p,{enabled:!0,delay:o?y:{open:e.openDelay,close:e.closeDelay}}),(0,d.useRole)(p,{role:"dialog"}),(0,d.useDismiss)(p,{enabled:o})]),Y=(0,r.useCallback)(()=>{o||(v(),0===e.openDelay||void 0===e.openDelay?D(!0):l.current=window.setTimeout(()=>D(!0),e.openDelay))},[o,v,e.openDelay,D]),E=(0,r.useCallback)(()=>{o||(v(),0===e.closeDelay||void 0===e.closeDelay?D(!1):c.current=window.setTimeout(()=>D(!1),e.closeDelay))},[o,v,e.closeDelay,D]),S=(0,r.useRef)(D);return S.current=D,(0,r.useEffect)(()=>()=>v(),[v]),(0,r.useEffect)(()=>{if(!n||o||"u"<typeof IntersectionObserver)return;let e=m.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(v(),S.current(!1))});return t.observe(e),()=>t.disconnect()},[n,o,v]),{opened:n,reference:f.setReference,floating:f.setFloating,assignTarget:u,getReferenceProps:w,getFloatingProps:x,openDropdown:Y,closeDropdown:E}}({openDelay:m,closeDelay:u,defaultOpened:v,onOpen:l,onClose:c});return(0,i.jsx)(n,{value:{openDropdown:p.openDropdown,closeDropdown:p.closeDropdown,assignTarget:p.assignTarget,getReferenceProps:p.getReferenceProps,getFloatingProps:p.getFloatingProps,reference:p.reference,floating:p.floating},children:(0,i.jsx)(a.Popover,{...D,opened:p.opened,__staticSelector:"HoverCard",children:o})})}w.displayName="@mantine/core/HoverCard",w.Target=y,w.Dropdown=u,w.Group=c,w.extend=e=>e,e.s(["HoverCard",0,w],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),n=e.i(671640),o=e.i(883364),r=e.i(391398),i=e.i(494834);let d=`import dayjs from 'dayjs';
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
}`;e.s(["EventDetails",0,function({event:e,resources:d}){let s=d?.find(t=>t.id===e.resourceId);return(0,r.jsxs)(n.Stack,{gap:"xs",children:[(0,r.jsx)(o.Text,{fw:600,size:"sm",children:e.title}),(0,r.jsxs)(o.Text,{size:"xs",c:"dimmed",children:[(0,i.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,i.default)(e.end).format("HH:mm")]}),s&&(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:s.label}),e.payload?.description&&(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,r.jsx)(a.Group,{gap:4,children:(0,r.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,d])},922621,e=>{"use strict";var t=e.i(969610),a=e.i(813982),n=e.i(751198),o=e.i(532965);e.s(["getDayPositionedEvents",0,function({events:e,startTime:r,endTime:i,intervalMinutes:d,date:s}){let l=[],c=[];for(let m of(0,a.sortEvents)(e)){let e=(0,t.isAllDayEvent)({event:m,date:s}),a=0;for(;function({columns:e,columnIndex:a,event:o,allDay:r,date:i}){return!!e[a]&&e[a].some(e=>{let a=(0,t.isAllDayEvent)({event:e,date:i}),d=(0,n.isEventsOverlap)(e,o);return!r&&!a&&d})}({columns:l,columnIndex:a,event:m,allDay:e,date:s});)a++;l[a]||(l[a]=[]),l[a].push(m);let u=e?{top:0,height:100}:(0,o.getDayPosition)({event:m,startTime:r,endTime:i,intervalMinutes:d});c.push({...m,position:{...u,allDay:e,column:a,width:0,offset:0,overlaps:0}})}for(let e of c){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let o=[];for(let t of c)t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&o.push(t);let r=a;for(let e of o)for(let t of(r=Math.max(r,e.position.column),c))t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&(r=Math.max(r,t.position.column));let i=r+1,d=i;for(let e of o)e.position.column>a&&e.position.column<d&&(d=e.position.column);let s=d-a;e.position.overlaps=i,e.position.width=s/i*100,e.position.offset=100*a/i}return c}])},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),o=e.i(898496),r=e.i(4332),i=e.i(969610),d=e.i(575148),s=e.i(792930),l=e.i(505696),c=e.i(657068),m=e.i(245086),u=e.i(783261),v=e.i(637079),D=e.i(376879),p=e.i(663551),f=e.i(312709),y=e.i(201867),g=e.i(891343),h=e.i(67312),w=e.i(966696),x=e.i(298008),Y=e.i(68642),E=e.i(532965),S=e.i(922621),T=e.i(494834),M={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},b=e.i(232471),j=e.i(19300),$=e.i(284629),C=e.i(481178),H=e.i(275519),k=e.i(433512),V=e.i(779177),R=e.i(951254),I=e.i(44091),z=e.i(62904),O=e.i(391466),A=e.i(417241),B=e.i(332977),N=e.i(191788),_=e.i(205693),L=e.i(391398);let P={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withSubHourGridLines:!0,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},G=(0,C.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,k.getRadius)(t):void 0,"--day-view-slot-height":(0,V.rem)(a),"--day-view-all-day-slot-height":(0,V.rem)(n)}})),F=(0,H.factory)(e=>{let C=(0,I.useProps)("DayView",P,e),{classNames:H,className:k,style:V,styles:F,unstyled:U,attributes:W,vars:J,__staticSelector:K,startTime:Q,endTime:q,intervalMinutes:X,withSubHourGridLines:Z,withAllDaySlot:ee,date:et,locale:ea,slotLabelFormat:en,headerFormat:eo,getCurrentTime:er,withCurrentTimeIndicator:ei,withCurrentTimeBubble:ed,withHeader:es,radius:el,onDateChange:ec,onViewChange:em,previousControlProps:eu,nextControlProps:ev,todayControlProps:eD,viewSelectProps:ep,slotHeight:ef,allDaySlotHeight:ey,scrollAreaProps:eg,events:eh,moreEventsProps:ew,renderEventBody:ex,renderEvent:eY,labels:eE,highlightBusinessHours:eS,businessHours:eT,withEventsDragAndDrop:eM,onEventDrop:eb,canDragEvent:ej,onEventDragStart:e$,onEventDragEnd:eC,onTimeSlotClick:eH,onAllDaySlotClick:ek,onEventClick:eV,withDragSlotSelect:eR,onSlotDragEnd:eI,mode:ez,startScrollTime:eO,onExternalEventDrop:eA,withEventResize:eB,onEventResize:eN,canResizeEvent:e_,recurrenceExpansionLimit:eL,getTimeSlotProps:eP,withAgenda:eG,...eF}=C,[eU,eW]=(0,N.useState)(!1),eJ=(0,O.useStyles)({name:K,classes:M,props:C,className:k,style:V,classNames:H,styles:F,unstyled:U,attributes:W,vars:J,varsResolver:G,rootSelector:"dayView"}),{resolvedClassNames:eK,resolvedStyles:eQ}=(0,z.useResolvedStylesApi)({classNames:H,styles:F,props:C}),eq={classNames:eK,styles:eQ,attributes:W,__staticSelector:K,radius:el},eX=(0,R.useMantineTheme)(),eZ=(0,_.useDatesContext)(),e0=()=>er?(0,T.default)(er()):(0,T.default)(),e1=ei??(0,T.default)(et).isSame(e0(),"day"),e8=(0,o.getDayTimeIntervals)({startTime:Q,endTime:q,intervalMinutes:X}),e3=(0,N.useRef)([]),e2=(0,N.useRef)(null),e9=(0,N.useRef)(null),e4=(0,B.useMergedRef)(e2,eg?.viewportRef);(0,m.useAutoScrollOnDrag)({viewportRef:e2,enabled:(eM||!!eA)&&"static"!==ez}),(0,A.useIsomorphicEffect)(()=>{if(!eO||!e2.current||0===e3.current.length)return;let e=e8.findIndex(e=>e.startTime>=eO);if(e<0)return;let t=e3.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=e2.current.getBoundingClientRect();e2.current.scrollTo({left:0,top:a.top-n.top})},[]);let e5=(0,N.useCallback)(e=>{let t=e3.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=e3.current[0],n=e3.current[e3.current.length-1];if(!a||!n)return null;let o=a.getBoundingClientRect(),r=n.getBoundingClientRect();return e.clientY<o.top?0:e.clientY>r.bottom?e3.current.length-1:null},[]),e6=(0,D.useSlotDragSelect)({enabled:eR&&"static"!==ez,onDragEnd:(e,t)=>{if(!eI)return;let a=(0,T.default)(et).format("YYYY-MM-DD");eI(`${a} ${e8[e].startTime}`,`${a} ${e8[t].endTime}`)}}),e7=function({events:e,date:t,startTime:a,endTime:n,intervalMinutes:o}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let r=new Set,d=[],s=[],l=(0,T.default)(t).startOf("day"),c=(0,T.default)(t).endOf("day");for(let t of e){let e=(0,T.default)(t.start),o=(0,T.default)(t.end),i=e.isSame(l,"day"),m=!i&&"background"===t.display&&e.isBefore(c)&&o.isAfter(l);if(i||m){if(i&&!(0,Y.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,x.validateEvent)(t);if(r.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);r.add(t.id),"background"===t.display?s.push(e):d.push(e)}}let m=(0,S.getDayPositionedEvents)({events:d,startTime:a,endTime:n,intervalMinutes:o,date:t}),u=[],v=[];for(let e of m)e.position.allDay?u.push(e):v.push(e);let D=[],p=[];for(let e of s){let r=(0,T.default)(e.start),d=(0,T.default)(e.end),s=r.isBefore(l)?l:r,m=d.isAfter(c)?c:d,u={...e,start:s.format("YYYY-MM-DD HH:mm:ss"),end:m.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:u,date:t}))p.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:r}=(0,E.getDayPosition)({event:u,startTime:a,endTime:n,intervalMinutes:o});if(r<=0)continue;D.push({...e,position:{top:t,height:r,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:u,regularEvents:v,backgroundTimedEvents:D,backgroundAllDayEvents:p}}({events:(0,c.expandRecurringEvents)({events:eh,rangeStart:(0,T.default)(et).startOf("day").toDate(),rangeEnd:(0,T.default)(et).endOf("day").toDate(),expansionLimit:eL}),date:et,startTime:Q,endTime:q,intervalMinutes:X}),te=(0,N.useCallback)((e,t)=>{if(!eA)return;let a=(0,T.default)(et).format("YYYY-MM-DD");eA(e.dataTransfer,`${a} ${e8[t].startTime}`)},[eA,et,e8]),tt=(0,u.useDragDropHandlers)({enabled:eM,mode:ez,onEventDrop:eb,canDragEvent:ej,onEventDragStart:e$,onEventDragEnd:eC,calculateDropTarget:(e,t)=>{let a=e8[e].startTime;return(0,s.calculateDropTime)({draggedEvent:t,targetDate:et,targetSlotTime:a,intervalMinutes:X})},onExternalDrop:eA?te:void 0}),ta=(0,v.useEventResize)({enabled:eB,mode:ez,startTime:Q,endTime:q,intervalMinutes:X,onEventResize:eN,canResizeEvent:e_}),tn=(eM||!!eA)&&"static"!==ez,to=e7.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:et}),a=!t&&tt.isDraggableEvent(e),n=!t&&ta.isResizableEvent(e),o=ta.getResizePosition(e.id),r=o?o.top:e.position.top,d=o?o.height:e.position.height;return(0,L.jsx)(g.ScheduleEvent,{event:e,renderEventBody:ex,renderEvent:eY,autoSize:!0,draggable:a,withResize:n,isResizing:null!==o,onResizeStart:n?(t,a)=>{e9.current&&ta.handleResizeStart({event:e,edge:t,container:e9.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,T.default)(et).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:ez,onClick:eV?t=>{ta.wasResizing()||eV(e,t)}:void 0,...eq,style:{...eq.styles?.event,top:`${r}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),tr=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e7.allDayEvents.length}),ti=e7.allDayEvents.slice(0,tr.visibleEventsCount).map(e=>(0,L.jsx)(g.ScheduleEvent,{event:e,renderEventBody:ex,renderEvent:eY,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:ez,onClick:eV?t=>eV(e,t):void 0,...eq},e.id)),td=(0,T.default)(et).format("YYYY-MM-DD"),ts=e8.map((e,a)=>{let o=tt.isDropTarget(a),r=e6.isSlotSelected(a,td),i=`${td} ${e.startTime}`,d=`${td} ${e.endTime}`,{onClick:s,...c}=eP?.({start:i,end:d})||{},m="static"===ez?void 0:e=>{eH?.({slotStart:i,slotEnd:d,nativeEvent:e}),s?.(e)};return(0,N.createElement)($.UnstyledButton,{...eJ("dayViewSlot"),key:e.startTime,ref:e=>{e3.current[a]=e},mod:{first:0===a,"hour-start":e.isHourStart,...(0,l.getBusinessHoursMod)({time:e.startTime,businessHours:eT,highlightBusinessHours:eS}),"drop-target":o,"drag-selected":r,static:"static"===ez},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(X)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",eE)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===ez?-1:0===a?0:-1,"data-drag-slot-index":eR&&"static"!==ez?a:void 0,"data-drag-slot-group":eR&&"static"!==ez?td:void 0,onKeyDown:"static"===ez?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<e8.length-1?(e.preventDefault(),e3.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),e3.current[a-1]?.focus())},onPointerDown:eR&&"static"!==ez?e=>e6.handleSlotPointerDown(e,a,td):void 0,onClick:m,onDragOver:tn?e=>e.preventDefault():void 0,...c})}),tl=e8.reduce((e,t)=>{if(t.isHourStart){let n=(0,T.default)(`${(0,T.default)(et).format("YYYY-MM-DD")} ${t.startTime}`),o=(0,a.formatDate)({locale:eZ.getLocale(ea),date:n,format:en});e.push((0,N.createElement)(b.Box,{...eJ("dayViewSlotLabel"),key:t.startTime,mod:(0,l.getBusinessHoursMod)({time:t.startTime,businessHours:eT,highlightBusinessHours:eS})},o))}return e},[]),tc=e7.backgroundAllDayEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),a="function"==typeof ex?ex(e):e.title,n={key:`bg-allday-${e.id}`,...eJ("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eY)return eY(e,n);let{key:o,...r}=n;return(0,L.jsx)(b.Box,{...r},o)}),tm=e7.backgroundTimedEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),a="function"==typeof ex?ex(e):e.title,n={key:e.id,...eJ("dayViewBackgroundEvent",{style:{...(0,d.getTimeAxisEventStyle)({start:e.position.top,span:e.position.height,axis:"vertical"}),width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eY)return eY(e,n);let{key:o,...r}=n;return(0,L.jsx)(b.Box,{...r},o)}),tu=(0,L.jsxs)(b.Box,{...eJ("dayView"),mod:{static:"static"===ez,"slot-dragging":e6.isDragging,"hide-sub-hour-grid-lines":!Z,"event-interaction":ta.isResizing||tt.dragContextValue.isDragging},...eF,children:[es&&(0,L.jsx)(w.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,r.toDateString)((0,T.default)(et).subtract(1,"day")),next:()=>(0,r.toDateString)((0,T.default)(et).add(1,"day")),today:()=>(0,r.toDateString)(e0())},control:{title:(0,a.formatDate)({locale:eZ.getLocale(ea),date:et,format:eo}),miw:140},labels:eE,onDateChange:ec,onViewChange:em,previousControlProps:eu,nextControlProps:ev,todayControlProps:eD,viewSelectProps:ep,stylesApiProps:eq,onAgendaClick:eG?()=>eW(e=>!e):void 0,agendaActive:eU}),eU&&(0,L.jsx)(p.AgendaView,{rangeStart:(0,T.default)(et).startOf("day").format("YYYY-MM-DD"),rangeEnd:(0,T.default)(et).endOf("day").format("YYYY-MM-DD"),events:eh,locale:ea,labels:eE,mode:ez,onEventClick:eV,recurrenceExpansionLimit:eL,...eq}),!eU&&(0,L.jsx)(j.ScrollArea.Autosize,{scrollbarSize:4,...eg,...eJ("dayViewScrollArea",{className:eg?.className,style:eg?.style}),viewportRef:e4,children:(0,L.jsxs)(b.Box,{...eJ("dayViewInner"),children:[(0,L.jsxs)("div",{...eJ("dayViewSlotLabels"),children:[ee&&(0,L.jsx)(b.Box,{...eJ("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",eE)}),tl]}),(0,L.jsxs)("div",{...eJ("dayViewSlots"),children:[ee&&(0,L.jsxs)("div",{...eJ("dayViewAllDay"),children:[tc,(0,L.jsxs)("div",{...eJ("dayViewAllDayEvents"),children:[ti,tr.hiddenEventsCount>0&&(0,L.jsx)(h.MoreEvents,{events:e7.allDayEvents,moreEventsCount:tr.hiddenEventsCount,renderEventBody:ex,renderEvent:eY,mode:ez,labels:eE,onEventClick:eV,...eq,...ew})]}),(0,L.jsx)($.UnstyledButton,{...eJ("dayViewSlot"),mod:{"all-day":!0,static:"static"===ez},"aria-label":`${(0,t.getLabel)("timeSlot",eE)} ${(0,t.getLabel)("allDay",eE)}`,onClick:"static"!==ez&&ek?e=>{ek((0,T.default)(et).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:e9,...eJ("dayViewTimeSlots"),onDragOver:tn?e=>{let t=e5(e);null!==t&&tt.handleDragOver(e,t)}:void 0,onDragLeave:tn?tt.handleDragLeave:void 0,onDrop:tn?e=>{let t=e5(e);null!==t&&tt.handleDrop(e,t)}:void 0,children:[tm,to,e1&&(0,L.jsx)(f.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:en,withTimeBubble:ed,withThumb:!ed,locale:ea,startTime:Q,endTime:q,intervalMinutes:X,getCurrentTime:er,...eq}),ts]})]})]})})]});return eM?(0,L.jsx)(y.DragContext.Provider,{value:tt.dragContextValue,children:tu}):tu});F.displayName="@mantine/schedule/DayView",F.classes=M,F.varsResolver=G,e.s(["DayView",0,F],200183)},7834,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],r=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Full Day Session",start:`${n} 10:00:00`,end:`${n} 16:00:00`,color:"green"}],i=[{id:1,title:"Conference Day",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Product Launch",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:5,title:"Year Kickoff",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"}],d=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${n} 17:30:00`,end:`${n} 18:00:00`,color:"orange"}],s=`
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
`,m=`
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
`;var u=e.i(191788),v=e.i(391398),D=e.i(200183);let p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},f={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"09:00:00",endTime:"17:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},g=(0,a.default)().format("YYYY-MM-DD"),h=[{id:1,title:"Morning Standup",start:`${g} 09:00:00`,end:`${g} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${g} 11:15:00`,end:`${g} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${g} 14:00:00`,end:`${g} 14:45:00`,color:"violet"}],w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(h);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:15,withSubHourGridLines:!1,withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
    start: \`\${today} 11:15:00\`,
    end: \`\${today} 12:00:00\`,
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={15}
      withSubHourGridLines={false}
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},x={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var S=e.i(988798),T=e.i(671640),M=e.i(664894),b=e.i(53157);a.default.extend(b.default),a.default.extend(M.default);let j=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],$={type:"code",component:function(){let[e,t]=(0,u.useState)("UTC"),n=()=>(0,a.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),o=n().split(" ")[0];return(0,v.jsxs)(T.Stack,{children:[(0,v.jsx)(S.Select,{label:"Display timezone",data:j,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,v.jsx)(D.DayView,{date:o,events:[{id:1,title:"Morning standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue"},{id:2,title:"Team meeting",start:`${o} 12:00:00`,end:`${o} 13:00:00`,color:"teal"},{id:3,title:"Code review",start:`${o} 16:00:00`,end:`${o} 17:00:00`,color:"grape"}],getCurrentTime:n,startScrollTime:(0,a.default)(n()).subtract(2,"hour").format("HH:mm:ss"),withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { DayView } from '@mantine/schedule';
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

      <DayView
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
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData } from '@mantine/schedule';\n\nexport function getEvents(date: string): ScheduleEventData[] {\n  return [\n    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },\n    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },\n    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },\n  ];\n}\n",language:"tsx",fileName:"data.ts"}]},C={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:d,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},H={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},k={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",headerFormat:"dddd, MMMM D"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},R={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h:mm A"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},I={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},z=(0,a.default)().format("YYYY-MM-DD"),O=[{id:1,title:"Morning Standup",start:`${z} 09:00:00`,end:`${z} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${z} 11:00:00`,end:`${z} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${z} 14:00:00`,end:`${z} 15:00:00`,color:"violet"}],A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(O);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},B=(0,a.default)().format("YYYY-MM-DD"),N=[{id:1,title:"Draggable Event",start:`${B} 09:00:00`,end:`${B} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${B} 11:00:00`,end:`${B} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${B} 14:00:00`,end:`${B} 15:00:00`,color:"green"}],_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(N);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canDragEvent:e=>!e.payload?.locked})},code:`
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
`},L=(0,a.default)().format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${L} 09:00:00`,end:`${L} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${L} 11:00:00`,end:`${L} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${L} 14:00:00`,end:`${L} 15:00:00`,color:"violet"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(P);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},F=(0,a.default)().format("YYYY-MM-DD"),U=[{id:1,title:"Resizable Event",start:`${F} 09:00:00`,end:`${F} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${F} 11:00:00`,end:`${F} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${F} 14:00:00`,end:`${F} 15:00:00`,color:"green"}],W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(U);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canResizeEvent:e=>!e.payload?.locked})},code:`
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
`};var J=e.i(593612),K=e.i(554166),Q=e.i(725695),q=e.i(883364);let X=(0,a.default)().format("YYYY-MM-DD"),Z=[{id:1,title:"Morning Standup",start:`${X} 09:00:00`,end:`${X} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${X} 11:00:00`,end:`${X} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${X} 12:30:00`,end:`${X} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],ee={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:Z,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,v.jsxs)(Q.Group,{children:[(0,v.jsx)(q.Text,{fz:12,fw:500,children:e.title}),(0,v.jsxs)(Q.Group,{gap:4,children:[(0,v.jsx)(J.ClockIcon,{size:12}),(0,v.jsx)(q.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,v.jsxs)(Q.Group,{gap:4,children:[(0,v.jsx)(K.MapPinIcon,{size:12}),(0,v.jsx)(q.Text,{fz:10,children:e.payload.location})]})]})})},code:`
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
`};var et=e.i(19683),ea=e.i(369974),en=e.i(284629);let eo=(0,a.default)().format("YYYY-MM-DD"),er=[{id:1,title:"Team Standup",start:`${eo} 09:00:00`,end:`${eo} 09:30:00`,color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Review",start:`${eo} 10:00:00`,end:`${eo} 11:30:00`,color:"grape",payload:{description:"Review UI/UX designs for new feature",attendees:["Diana","Eve"],location:"Virtual Meeting"}},{id:3,title:"Client Presentation",start:`${eo} 14:00:00`,end:`${eo} 15:30:00`,color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Frank","Grace","Henry"],location:"Zoom"}},{id:4,title:"Code Review",start:`${eo} 16:00:00`,end:`${eo} 17:00:00`,color:"orange",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}}],ei={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(er);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,v.jsxs)(ea.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,v.jsx)(ea.HoverCard.Target,{children:(0,v.jsx)(en.UnstyledButton,{...t})}),(0,v.jsx)(ea.HoverCard.Dropdown,{children:(0,v.jsx)(et.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:et._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(er,null,2)};`,language:"tsx"}]},ed={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},es={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",labels:{allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var el=e.i(485108);let ec={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(Q.Group,{mb:"md",children:[(0,v.jsx)(el.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Day"}),(0,v.jsx)(q.Text,{fw:500,children:(0,a.default)(e).format("MMMM D, YYYY")}),(0,v.jsx)(el.Button,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Next Day"})]}),(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)("day");return(0,v.jsxs)("div",{children:[(0,v.jsxs)(q.Text,{mb:"md",children:["Selected view: ",e]}),(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",onViewChange:t})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var eu=e.i(162077);let ev={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(o),[i,d]=(0,u.useState)(!1),[s,l]=(0,u.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),d(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),d(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,v.jsx)(eu.EventForm,{opened:i,onClose:()=>d(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:eu._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"events.ts"}]},eD={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(o);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ep=e.i(232471),ef=e.i(20035);let ey=(0,a.default)().format("YYYY-MM-DD"),eg=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eh={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)([]),n=(0,u.useRef)(1);return(0,v.jsxs)(ef.Grid,{children:[(0,v.jsxs)(ef.Grid.Col,{span:{base:12,sm:3},children:[(0,v.jsx)(q.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),eg.map(e=>(0,v.jsxs)(ep.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(q.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(q.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,v.jsx)(ef.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(D.DayView,{date:ey,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let i=JSON.parse(r),d=(0,a.default)(o),s=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},ew=(0,a.default)().format("YYYY-MM-DD"),ex=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eY={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ex),[n,o]=(0,u.useState)([]),[r,i]=(0,u.useState)(!1),d=(0,u.useRef)(1);return(0,v.jsxs)(ef.Grid,{children:[(0,v.jsx)(ef.Grid.Col,{span:{base:12,sm:3},children:(0,v.jsxs)(ep.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let r=e.dataTransfer.getData("application/json");if(!r)return;let{eventId:d}=JSON.parse(r),s=n.find(e=>String(e.id)===String(d));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,v.jsx)(q.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,v.jsxs)(ep.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(q.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(q.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,v.jsx)(q.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,v.jsx)(ef.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(D.DayView,{date:ew,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let i=JSON.parse(r),s=(0,a.default)(n),l=s.add(i.duration,"minutes");o(e=>[...e,{id:d.current++,title:i.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},eE=(0,a.default)().format("YYYY-MM-DD"),eS=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,a.default)(eE).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,a.default)(eE).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${eE} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${eE} 14:00:00`,end:`${eE} 14:30:00`,color:"grape",recurringEventId:"daily-sync-series",recurrenceId:`${eE} 09:00:00`},{id:"one-off-day",title:"One-off planning",start:`${eE} 11:00:00`,end:`${eE} 12:00:00`,color:"green"}],eT={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eE);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eS,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
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
`},eM=(0,a.default)().format("YYYY-MM-DD"),eb=[{id:"lunch-block",title:"Lunch break",start:`${eM} 12:00:00`,end:`${eM} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${eM} 14:00:00`,end:`${eM} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${eM} 10:00:00`,end:`${eM} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eM} 14:30:00`,end:`${eM} 15:30:00`,color:"green"}],ej={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eM);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eb,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
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
`},e$=(0,a.default)().format("YYYY-MM-DD"),eC=[{id:"blocked-time",title:"Blocked",start:`${e$} 12:00:00`,end:`${e$} 14:00:00`,color:"red",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${e$} 10:00:00`,end:`${e$} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${e$} 15:00:00`,end:`${e$} 16:00:00`,color:"green"}],eH={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eC);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))},styles:{dayViewBackgroundEvent:{background:`repeating-linear-gradient(
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
`}]};var ek=e.i(428127);let eV={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(ek.ScheduleHeader,{children:[(0,v.jsx)(ek.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(ek.ScheduleHeader.Control,{interactive:!1,miw:200,children:(0,a.default)(e).format("dddd, MMMM D, YYYY")}),(0,v.jsx)(ek.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(ek.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,v.jsx)(ek.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let eR={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eI={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},ez=(0,a.default)().format("YYYY-MM-DD"),eO=[{id:"standup",title:"Morning Standup",start:`${ez} 09:00:00`,end:`${ez} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${ez} 10:00:00`,end:`${ez} 11:30:00`,color:"green"},{id:"weekly-review-series",title:"Weekly review",start:`${(0,a.default)(ez).startOf("week").format("YYYY-MM-DD")} 16:00:00`,end:`${(0,a.default)(ez).startOf("week").format("YYYY-MM-DD")} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],eA={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ez);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eO,withAgenda:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

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
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 16:00:00\`,
    end: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
`};var eB=(0,t.__exportAll)({allDayEvents:()=>x,backgroundEvents:()=>ej,backgroundEventsCustomStyle:()=>eH,bidirectionalDragDrop:()=>eY,businessHours:()=>C,canDragEvent:()=>_,canResizeEvent:()=>W,controlledDate:()=>ec,currentTimeIndicator:()=>E,customHeader:()=>eV,dragDrop:()=>A,eventForm:()=>ev,eventResize:()=>G,externalDragDrop:()=>eh,getTimeSlotProps:()=>eI,headerFormat:()=>V,intervalMinutes:()=>y,labels:()=>es,localization:()=>eR,overlappingEvents:()=>Y,radius:()=>I,recurringEvents:()=>eT,renderEvent:()=>ei,renderEventBody:()=>ee,slotHeight:()=>H,slotLabelFormat:()=>R,startScrollTime:()=>eD,staticMode:()=>ed,subHourGridLines:()=>w,timeRange:()=>f,timezone:()=>$,usage:()=>p,viewChange:()=>em,withAgenda:()=>eA,withoutHeader:()=>k});e.s(["DayViewDemos",0,eB],7834)}]);