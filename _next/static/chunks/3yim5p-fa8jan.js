(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},o=e.i(424302),r=e.i(392862),i=e.i(284629),d=e.i(275519),s=e.i(44091),l=e.i(391466),c=e.i(541772),m=e.i(391398);let u={dropdownType:"popover"},v=(0,d.factory)(e=>{let d=(0,s.useProps)("MoreEvents",u,e),{classNames:v,className:D,style:p,styles:f,unstyled:y,vars:g,attributes:h,radius:w,dropdownType:x,events:Y,moreEventsCount:E,popoverProps:S,modalProps:T,onDropdownClose:M,children:b,modalTitle:j,renderEventBody:$,renderEvent:C,id:H,labels:k,mode:V,onEventClick:R,...I}=d,[z,O]=(0,c.useDisclosure)(),B=(0,l.useStyles)({name:"MoreEvents",classes:n,props:d,className:D,style:p,classNames:v,styles:f,unstyled:y,attributes:h,vars:g,rootSelector:"moreEventsButton"}),A=()=>{O.close(),M?.()},N=(0,m.jsx)("div",{...B("moreEventsList"),children:Y.map(e=>(0,m.jsx)(a.ScheduleEvent,{radius:w,event:e,size:"md",renderEventBody:$,renderEvent:C,mode:V,onClick:R?t=>R(e,t):void 0,children:e.title},e.id))});return(0,m.jsxs)(m.Fragment,{children:["modal"===x&&(0,m.jsx)(o.Modal,{opened:z,onClose:A,unstyled:y,radius:w,title:j,...T,children:N}),(0,m.jsxs)(r.Popover,{position:"bottom-start",width:260,opened:z,trapFocus:!0,returnFocus:!1,unstyled:y,disabled:S?.disabled||"modal"===x,radius:w,transitionProps:{transition:"pop",duration:120},offset:-46,id:H,...S,onChange:e=>{e||(S?.onChange?.(e),A())},children:[(0,m.jsx)(r.Popover.Target,{children:(0,m.jsx)(i.UnstyledButton,{...B("moreEventsButton"),mod:{static:"static"===V},onClick:()=>O.toggle(),...I,children:(0,t.getLabel)("moreLabel",k)(E)})}),(0,m.jsx)(r.Popover.Dropdown,{...B("moreEventsDropdown"),children:N})]})]})});v.displayName="@mantine/schedule/MoreEvents",v.classes=n,e.s(["MoreEvents",0,v],67312)},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[n,o]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var r=e.i(191788),i=e.i(391398),d=e.i(458272);let s=(0,r.createContext)({withinGroup:!1}),l={openDelay:0,closeDelay:0};function c(e){let{openDelay:a,closeDelay:n,children:o}=(0,t.useProps)("HoverCardGroup",l,e);return(0,i.jsx)(s,{value:{withinGroup:!0},children:(0,i.jsx)(d.FloatingDelayGroup,{delay:{open:a,close:n},children:o})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var m=e.i(334816);function u(e){let{children:n,onMouseEnter:d,onMouseLeave:l,...c}=(0,t.useProps)("HoverCardDropdown",null,e),u=o();if((0,r.use)(s).withinGroup&&u.getFloatingProps&&u.floating){let e=u.getFloatingProps();return(0,i.jsx)(a.Popover.Dropdown,{ref:u.floating,...e,onMouseEnter:(0,m.createEventHandler)(d,e.onMouseEnter),onMouseLeave:(0,m.createEventHandler)(l,e.onMouseLeave),...c,children:n})}let v=(0,m.createEventHandler)(d,u.openDropdown),D=(0,m.createEventHandler)(l,u.closeDropdown);return(0,i.jsx)(a.Popover.Dropdown,{onMouseEnter:v,onMouseLeave:D,...c,children:n})}u.displayName="@mantine/core/HoverCardDropdown";var v=e.i(275825),D=e.i(409703),p=e.i(332977);let f={refProp:"ref"};function y(e){let{children:n,refProp:d,eventPropsWrapperName:l,...c}=(0,t.useProps)("HoverCardTarget",f,e),u=(0,D.getSingleElementChild)(n);if(!u)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let y=o(),g=(0,r.use)(s),h=(0,p.useMergedRef)((0,v.getRefProp)(u),y.assignTarget);if(g.withinGroup&&y.getReferenceProps&&y.reference){let e=y.getReferenceProps();return(0,i.jsx)(a.Popover.Target,{refProp:d,...c,children:(0,r.cloneElement)(u,l?{[l]:{...e,ref:y.reference}}:{...e,ref:y.reference})})}let w={onMouseEnter:(0,m.createEventHandler)(u.props.onMouseEnter,y.openDropdown),onMouseLeave:(0,m.createEventHandler)(u.props.onMouseLeave,y.closeDropdown)},x={...l?{[l]:w}:w,ref:h};return(0,i.jsx)(a.Popover.Target,{refProp:d,...c,children:(0,r.cloneElement)(u,x)})}y.displayName="@mantine/core/HoverCardTarget";var g=e.i(107315);let h={openDelay:0,closeDelay:150,initiallyOpened:!1};function w(e){let{children:o,onOpen:l,onClose:c,openDelay:m,closeDelay:u,initiallyOpened:v,...D}=(0,t.useProps)("HoverCard",h,e),p=function(e){let[t,a]=(0,r.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,o=(0,r.use)(s).withinGroup,i=(0,g.useId)(),l=(0,r.useRef)(-1),c=(0,r.useRef)(-1),m=(0,r.useRef)(null),u=(0,r.useCallback)(e=>{m.current=e},[]),v=(0,r.useCallback)(()=>{window.clearTimeout(l.current),window.clearTimeout(c.current)},[]),D=(0,r.useCallback)(t=>{a(t),t?(h(i),e.onOpen?.()):e.onClose?.()},[i,e.onOpen,e.onClose]),{context:p,refs:f}=(0,d.useFloating)({open:n,onOpenChange:D}),{delay:y,setCurrentId:h}=(0,d.useDelayGroup)(p,{id:i}),{getReferenceProps:w,getFloatingProps:x}=(0,d.useInteractions)([(0,d.useHover)(p,{enabled:!0,delay:o?y:{open:e.openDelay,close:e.closeDelay}}),(0,d.useRole)(p,{role:"dialog"}),(0,d.useDismiss)(p,{enabled:o})]),Y=(0,r.useCallback)(()=>{o||(v(),0===e.openDelay||void 0===e.openDelay?D(!0):l.current=window.setTimeout(()=>D(!0),e.openDelay))},[o,v,e.openDelay,D]),E=(0,r.useCallback)(()=>{o||(v(),0===e.closeDelay||void 0===e.closeDelay?D(!1):c.current=window.setTimeout(()=>D(!1),e.closeDelay))},[o,v,e.closeDelay,D]),S=(0,r.useRef)(D);return S.current=D,(0,r.useEffect)(()=>()=>v(),[v]),(0,r.useEffect)(()=>{if(!n||o||"u"<typeof IntersectionObserver)return;let e=m.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(v(),S.current(!1))});return t.observe(e),()=>t.disconnect()},[n,o,v]),{opened:n,reference:f.setReference,floating:f.setFloating,assignTarget:u,getReferenceProps:w,getFloatingProps:x,openDropdown:Y,closeDropdown:E}}({openDelay:m,closeDelay:u,defaultOpened:v,onOpen:l,onClose:c});return(0,i.jsx)(n,{value:{openDropdown:p.openDropdown,closeDropdown:p.closeDropdown,assignTarget:p.assignTarget,getReferenceProps:p.getReferenceProps,getFloatingProps:p.getFloatingProps,reference:p.reference,floating:p.floating},children:(0,i.jsx)(a.Popover,{...D,opened:p.opened,__staticSelector:"HoverCard",children:o})})}w.displayName="@mantine/core/HoverCard",w.Target=y,w.Dropdown=u,w.Group=c,w.extend=e=>e,e.s(["HoverCard",0,w],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),n=e.i(671640),o=e.i(883364),r=e.i(391398),i=e.i(494834);let d=`import dayjs from 'dayjs';
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
}`;e.s(["EventDetails",0,function({event:e,resources:d}){let s=d?.find(t=>t.id===e.resourceId);return(0,r.jsxs)(n.Stack,{gap:"xs",children:[(0,r.jsx)(o.Text,{fw:600,size:"sm",children:e.title}),(0,r.jsxs)(o.Text,{size:"xs",c:"dimmed",children:[(0,i.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,i.default)(e.end).format("HH:mm")]}),s&&(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:s.label}),e.payload?.description&&(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,r.jsx)(a.Group,{gap:4,children:(0,r.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,r.jsx)(o.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,d])},922621,e=>{"use strict";var t=e.i(969610),a=e.i(813982),n=e.i(751198),o=e.i(532965);e.s(["getDayPositionedEvents",0,function({events:e,startTime:r,endTime:i,intervalMinutes:d,date:s}){let l=[],c=[];for(let m of(0,a.sortEvents)(e)){let e=(0,t.isAllDayEvent)({event:m,date:s}),a=0;for(;function({columns:e,columnIndex:a,event:o,allDay:r,date:i}){return!!e[a]&&e[a].some(e=>{let a=(0,t.isAllDayEvent)({event:e,date:i}),d=(0,n.isEventsOverlap)(e,o);return!r&&!a&&d})}({columns:l,columnIndex:a,event:m,allDay:e,date:s});)a++;l[a]||(l[a]=[]),l[a].push(m);let u=e?{top:0,height:100}:(0,o.getDayPosition)({event:m,startTime:r,endTime:i,intervalMinutes:d});c.push({...m,position:{...u,allDay:e,column:a,width:0,offset:0,overlaps:0}})}for(let e of c){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let o=[];for(let t of c)t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&o.push(t);let r=a;for(let e of o)for(let t of(r=Math.max(r,e.position.column),c))t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&(r=Math.max(r,t.position.column));let i=r+1,d=i;for(let e of o)e.position.column>a&&e.position.column<d&&(d=e.position.column);let s=d-a;e.position.overlaps=i,e.position.width=s/i*100,e.position.offset=100*a/i}return c}])},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),o=e.i(898496),r=e.i(4332),i=e.i(969610),d=e.i(792930),s=e.i(505696),l=e.i(657068),c=e.i(245086),m=e.i(783261),u=e.i(637079),v=e.i(376879),D=e.i(663551),p=e.i(312709),f=e.i(201867),y=e.i(891343),g=e.i(67312),h=e.i(966696),w=e.i(298008),x=e.i(68642),Y=e.i(532965),E=e.i(922621),S=e.i(494834),T={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},M=e.i(232471),b=e.i(19300),j=e.i(284629),$=e.i(481178),C=e.i(275519),H=e.i(433512),k=e.i(779177),V=e.i(951254),R=e.i(44091),I=e.i(62904),z=e.i(391466),O=e.i(417241),B=e.i(332977),A=e.i(191788),N=e.i(205693),_=e.i(391398);let L={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withSubHourGridLines:!0,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},P=(0,$.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,H.getRadius)(t):void 0,"--day-view-slot-height":(0,k.rem)(a),"--day-view-all-day-slot-height":(0,k.rem)(n)}})),G=(0,C.factory)(e=>{let $=(0,R.useProps)("DayView",L,e),{classNames:C,className:H,style:k,styles:G,unstyled:F,attributes:U,vars:W,__staticSelector:J,startTime:K,endTime:Q,intervalMinutes:q,withSubHourGridLines:X,withAllDaySlot:Z,date:ee,locale:et,slotLabelFormat:ea,headerFormat:en,getCurrentTime:eo,withCurrentTimeIndicator:er,withCurrentTimeBubble:ei,withHeader:ed,radius:es,onDateChange:el,onViewChange:ec,previousControlProps:em,nextControlProps:eu,todayControlProps:ev,viewSelectProps:eD,slotHeight:ep,allDaySlotHeight:ef,scrollAreaProps:ey,events:eg,moreEventsProps:eh,renderEventBody:ew,renderEvent:ex,labels:eY,highlightBusinessHours:eE,businessHours:eS,withEventsDragAndDrop:eT,onEventDrop:eM,canDragEvent:eb,onEventDragStart:ej,onEventDragEnd:e$,onTimeSlotClick:eC,onAllDaySlotClick:eH,onEventClick:ek,withDragSlotSelect:eV,onSlotDragEnd:eR,mode:eI,startScrollTime:ez,onExternalEventDrop:eO,withEventResize:eB,onEventResize:eA,canResizeEvent:eN,recurrenceExpansionLimit:e_,getTimeSlotProps:eL,withAgenda:eP,...eG}=$,[eF,eU]=(0,A.useState)(!1),eW=(0,z.useStyles)({name:J,classes:T,props:$,className:H,style:k,classNames:C,styles:G,unstyled:F,attributes:U,vars:W,varsResolver:P,rootSelector:"dayView"}),{resolvedClassNames:eJ,resolvedStyles:eK}=(0,I.useResolvedStylesApi)({classNames:C,styles:G,props:$}),eQ={classNames:eJ,styles:eK,attributes:U,__staticSelector:J,radius:es},eq=(0,V.useMantineTheme)(),eX=(0,N.useDatesContext)(),eZ=()=>eo?(0,S.default)(eo()):(0,S.default)(),e0=er??(0,S.default)(ee).isSame(eZ(),"day"),e1=(0,o.getDayTimeIntervals)({startTime:K,endTime:Q,intervalMinutes:q}),e8=(0,A.useRef)([]),e3=(0,A.useRef)(null),e2=(0,A.useRef)(null),e9=(0,B.useMergedRef)(e3,ey?.viewportRef);(0,c.useAutoScrollOnDrag)({viewportRef:e3,enabled:(eT||!!eO)&&"static"!==eI}),(0,O.useIsomorphicEffect)(()=>{if(!ez||!e3.current||0===e8.current.length)return;let e=e1.findIndex(e=>e.startTime>=ez);if(e<0)return;let t=e8.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=e3.current.getBoundingClientRect();e3.current.scrollTo({left:0,top:a.top-n.top})},[]);let e4=(0,A.useCallback)(e=>{let t=e8.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=e8.current[0],n=e8.current[e8.current.length-1];if(!a||!n)return null;let o=a.getBoundingClientRect(),r=n.getBoundingClientRect();return e.clientY<o.top?0:e.clientY>r.bottom?e8.current.length-1:null},[]),e5=(0,v.useSlotDragSelect)({enabled:eV&&"static"!==eI,onDragEnd:(e,t)=>{if(!eR)return;let a=(0,S.default)(ee).format("YYYY-MM-DD");eR(`${a} ${e1[e].startTime}`,`${a} ${e1[t].endTime}`)}}),e6=function({events:e,date:t,startTime:a,endTime:n,intervalMinutes:o}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let r=new Set,d=[],s=[],l=(0,S.default)(t).startOf("day"),c=(0,S.default)(t).endOf("day");for(let t of e){let e=(0,S.default)(t.start),o=(0,S.default)(t.end),i=e.isSame(l,"day"),m=!i&&"background"===t.display&&e.isBefore(c)&&o.isAfter(l);if(i||m){if(i&&!(0,x.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,w.validateEvent)(t);if(r.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);r.add(t.id),"background"===t.display?s.push(e):d.push(e)}}let m=(0,E.getDayPositionedEvents)({events:d,startTime:a,endTime:n,intervalMinutes:o,date:t}),u=[],v=[];for(let e of m)e.position.allDay?u.push(e):v.push(e);let D=[],p=[];for(let e of s){let r=(0,S.default)(e.start),d=(0,S.default)(e.end),s=r.isBefore(l)?l:r,m=d.isAfter(c)?c:d,u={...e,start:s.format("YYYY-MM-DD HH:mm:ss"),end:m.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:u,date:t}))p.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:r}=(0,Y.getDayPosition)({event:u,startTime:a,endTime:n,intervalMinutes:o});if(r<=0)continue;D.push({...e,position:{top:t,height:r,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:u,regularEvents:v,backgroundTimedEvents:D,backgroundAllDayEvents:p}}({events:(0,l.expandRecurringEvents)({events:eg,rangeStart:(0,S.default)(ee).startOf("day").toDate(),rangeEnd:(0,S.default)(ee).endOf("day").toDate(),expansionLimit:e_}),date:ee,startTime:K,endTime:Q,intervalMinutes:q}),e7=(0,A.useCallback)((e,t)=>{if(!eO)return;let a=(0,S.default)(ee).format("YYYY-MM-DD");eO(e.dataTransfer,`${a} ${e1[t].startTime}`)},[eO,ee,e1]),te=(0,m.useDragDropHandlers)({enabled:eT,mode:eI,onEventDrop:eM,canDragEvent:eb,onEventDragStart:ej,onEventDragEnd:e$,calculateDropTarget:(e,t)=>{let a=e1[e].startTime;return(0,d.calculateDropTime)({draggedEvent:t,targetDate:ee,targetSlotTime:a,intervalMinutes:q})},onExternalDrop:eO?e7:void 0}),tt=(0,u.useEventResize)({enabled:eB,mode:eI,startTime:K,endTime:Q,intervalMinutes:q,onEventResize:eA,canResizeEvent:eN}),ta=(eT||!!eO)&&"static"!==eI,tn=e6.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:ee}),a=!t&&te.isDraggableEvent(e),n=!t&&tt.isResizableEvent(e),o=tt.getResizePosition(e.id),r=o?o.top:e.position.top,d=o?o.height:e.position.height;return(0,_.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:ex,autoSize:!0,draggable:a,withResize:n,isResizing:null!==o,onResizeStart:n?(t,a)=>{e2.current&&tt.handleResizeStart({event:e,edge:t,container:e2.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,S.default)(ee).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eI,onClick:ek?t=>{tt.wasResizing()||ek(e,t)}:void 0,...eQ,style:{...eQ.styles?.event,top:`${r}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),to=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e6.allDayEvents.length}),tr=e6.allDayEvents.slice(0,to.visibleEventsCount).map(e=>(0,_.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:ex,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eI,onClick:ek?t=>ek(e,t):void 0,...eQ},e.id)),ti=(0,S.default)(ee).format("YYYY-MM-DD"),td=e1.map((e,a)=>{let o=te.isDropTarget(a),r=e5.isSlotSelected(a,ti),i=`${ti} ${e.startTime}`,d=`${ti} ${e.endTime}`,{onClick:l,...c}=eL?.({start:i,end:d})||{},m="static"===eI?void 0:e=>{eC?.({slotStart:i,slotEnd:d,nativeEvent:e}),l?.(e)};return(0,A.createElement)(j.UnstyledButton,{...eW("dayViewSlot"),key:e.startTime,ref:e=>{e8.current[a]=e},mod:{first:0===a,"hour-start":e.isHourStart,...(0,s.getBusinessHoursMod)({time:e.startTime,businessHours:eS,highlightBusinessHours:eE}),"drop-target":o,"drag-selected":r,static:"static"===eI},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(q)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",eY)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eI?-1:0===a?0:-1,"data-drag-slot-index":eV&&"static"!==eI?a:void 0,"data-drag-slot-group":eV&&"static"!==eI?ti:void 0,onKeyDown:"static"===eI?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<e1.length-1?(e.preventDefault(),e8.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),e8.current[a-1]?.focus())},onPointerDown:eV&&"static"!==eI?e=>e5.handleSlotPointerDown(e,a,ti):void 0,onClick:m,onDragOver:ta?e=>e.preventDefault():void 0,...c})}),ts=e1.reduce((e,t)=>{if(t.isHourStart){let n=(0,S.default)(`${(0,S.default)(ee).format("YYYY-MM-DD")} ${t.startTime}`),o=(0,a.formatDate)({locale:eX.getLocale(et),date:n,format:ea});e.push((0,A.createElement)(M.Box,{...eW("dayViewSlotLabel"),key:t.startTime,mod:(0,s.getBusinessHoursMod)({time:t.startTime,businessHours:eS,highlightBusinessHours:eE})},o))}return e},[]),tl=e6.backgroundAllDayEvents.map(e=>{let t=eq.variantColorResolver({color:e.color||eq.primaryColor,theme:eq,variant:"light",autoContrast:!0}),a="function"==typeof ew?ew(e):e.title,n={key:`bg-allday-${e.id}`,...eW("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ex)return ex(e,n);let{key:o,...r}=n;return(0,_.jsx)(M.Box,{...r},o)}),tc=e6.backgroundTimedEvents.map(e=>{let t=eq.variantColorResolver({color:e.color||eq.primaryColor,theme:eq,variant:"light",autoContrast:!0}),a="function"==typeof ew?ew(e):e.title,n={key:e.id,...eW("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ex)return ex(e,n);let{key:o,...r}=n;return(0,_.jsx)(M.Box,{...r},o)}),tm=(0,_.jsxs)(M.Box,{...eW("dayView"),mod:{static:"static"===eI,"slot-dragging":e5.isDragging,"hide-sub-hour-grid-lines":!X,"event-interaction":tt.isResizing||te.dragContextValue.isDragging},...eG,children:[ed&&(0,_.jsx)(h.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,r.toDateString)((0,S.default)(ee).subtract(1,"day")),next:()=>(0,r.toDateString)((0,S.default)(ee).add(1,"day")),today:()=>(0,r.toDateString)(eZ())},control:{title:(0,a.formatDate)({locale:eX.getLocale(et),date:ee,format:en}),miw:140},labels:eY,onDateChange:el,onViewChange:ec,previousControlProps:em,nextControlProps:eu,todayControlProps:ev,viewSelectProps:eD,stylesApiProps:eQ,onAgendaClick:eP?()=>eU(e=>!e):void 0,agendaActive:eF}),eF&&(0,_.jsx)(D.AgendaView,{rangeStart:(0,S.default)(ee).startOf("day").format("YYYY-MM-DD"),rangeEnd:(0,S.default)(ee).endOf("day").format("YYYY-MM-DD"),events:eg,locale:et,labels:eY,mode:eI,onEventClick:ek,recurrenceExpansionLimit:e_,...eQ}),!eF&&(0,_.jsx)(b.ScrollArea.Autosize,{scrollbarSize:4,...ey,...eW("dayViewScrollArea",{className:ey?.className,style:ey?.style}),viewportRef:e9,children:(0,_.jsxs)(M.Box,{...eW("dayViewInner"),children:[(0,_.jsxs)("div",{...eW("dayViewSlotLabels"),children:[Z&&(0,_.jsx)(M.Box,{...eW("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",eY)}),ts]}),(0,_.jsxs)("div",{...eW("dayViewSlots"),children:[Z&&(0,_.jsxs)("div",{...eW("dayViewAllDay"),children:[tl,(0,_.jsxs)("div",{...eW("dayViewAllDayEvents"),children:[tr,to.hiddenEventsCount>0&&(0,_.jsx)(g.MoreEvents,{events:e6.allDayEvents,moreEventsCount:to.hiddenEventsCount,renderEventBody:ew,renderEvent:ex,mode:eI,labels:eY,onEventClick:ek,...eQ,...eh})]}),(0,_.jsx)(j.UnstyledButton,{...eW("dayViewSlot"),mod:{"all-day":!0,static:"static"===eI},"aria-label":`${(0,t.getLabel)("timeSlot",eY)} ${(0,t.getLabel)("allDay",eY)}`,onClick:"static"!==eI&&eH?e=>{eH((0,S.default)(ee).format("YYYY-MM-DD"),e)}:void 0})]}),(0,_.jsxs)("div",{ref:e2,...eW("dayViewTimeSlots"),onDragOver:ta?e=>{let t=e4(e);null!==t&&te.handleDragOver(e,t)}:void 0,onDragLeave:ta?te.handleDragLeave:void 0,onDrop:ta?e=>{let t=e4(e);null!==t&&te.handleDrop(e,t)}:void 0,children:[tc,tn,e0&&(0,_.jsx)(p.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:ea,withTimeBubble:ei,withThumb:!ei,locale:et,startTime:K,endTime:Q,intervalMinutes:q,getCurrentTime:eo,...eQ}),td]})]})]})})]});return eT?(0,_.jsx)(f.DragContext.Provider,{value:te.dragContextValue,children:tm}):tm});G.displayName="@mantine/schedule/DayView",G.classes=T,G.varsResolver=P,e.s(["DayView",0,G],200183)},7834,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],r=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Full Day Session",start:`${n} 10:00:00`,end:`${n} 16:00:00`,color:"green"}],i=[{id:1,title:"Conference Day",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Product Launch",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:5,title:"Year Kickoff",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"}],d=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${n} 17:30:00`,end:`${n} 18:00:00`,color:"orange"}],s=`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},z=(0,a.default)().format("YYYY-MM-DD"),O=[{id:1,title:"Morning Standup",start:`${z} 09:00:00`,end:`${z} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${z} 11:00:00`,end:`${z} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${z} 14:00:00`,end:`${z} 15:00:00`,color:"violet"}],B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(O);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},A=(0,a.default)().format("YYYY-MM-DD"),N=[{id:1,title:"Draggable Event",start:`${A} 09:00:00`,end:`${A} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${A} 11:00:00`,end:`${A} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${A} 14:00:00`,end:`${A} 15:00:00`,color:"green"}],_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(N);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canDragEvent:e=>!e.payload?.locked})},code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},ez=(0,a.default)().format("YYYY-MM-DD"),eO=[{id:"standup",title:"Morning Standup",start:`${ez} 09:00:00`,end:`${ez} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${ez} 10:00:00`,end:`${ez} 11:30:00`,color:"green"},{id:"weekly-review-series",title:"Weekly review",start:`${(0,a.default)(ez).startOf("week").format("YYYY-MM-DD")} 16:00:00`,end:`${(0,a.default)(ez).startOf("week").format("YYYY-MM-DD")} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],eB={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ez);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eO,withAgenda:!0})},code:`
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
`};var eA=(0,t.__exportAll)({allDayEvents:()=>x,backgroundEvents:()=>ej,backgroundEventsCustomStyle:()=>eH,bidirectionalDragDrop:()=>eY,businessHours:()=>C,canDragEvent:()=>_,canResizeEvent:()=>W,controlledDate:()=>ec,currentTimeIndicator:()=>E,customHeader:()=>eV,dragDrop:()=>B,eventForm:()=>ev,eventResize:()=>G,externalDragDrop:()=>eh,getTimeSlotProps:()=>eI,headerFormat:()=>V,intervalMinutes:()=>y,labels:()=>es,localization:()=>eR,overlappingEvents:()=>Y,radius:()=>I,recurringEvents:()=>eT,renderEvent:()=>ei,renderEventBody:()=>ee,slotHeight:()=>H,slotLabelFormat:()=>R,startScrollTime:()=>eD,staticMode:()=>ed,subHourGridLines:()=>w,timeRange:()=>f,timezone:()=>$,usage:()=>p,viewChange:()=>em,withAgenda:()=>eB,withoutHeader:()=>k});e.s(["DayViewDemos",0,eA],7834)}]);