(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},o=e.i(424302),r=e.i(392862),i=e.i(284629),d=e.i(275519),s=e.i(44091),l=e.i(391466),c=e.i(541772),m=e.i(391398);let u={dropdownType:"popover"},v=(0,d.factory)(e=>{let d=(0,s.useProps)("MoreEvents",u,e),{classNames:v,className:D,style:f,styles:p,unstyled:y,vars:g,attributes:h,radius:w,dropdownType:x,events:Y,moreEventsCount:E,popoverProps:S,modalProps:T,onDropdownClose:b,children:M,modalTitle:$,renderEventBody:j,renderEvent:C,id:V,labels:H,mode:k,onEventClick:I,...B}=d,[R,A]=(0,c.useDisclosure)(),N=(0,l.useStyles)({name:"MoreEvents",classes:n,props:d,className:D,style:f,classNames:v,styles:p,unstyled:y,attributes:h,vars:g,rootSelector:"moreEventsButton"}),O=()=>{A.close(),b?.()},z=(0,m.jsx)("div",{...N("moreEventsList"),children:Y.map(e=>(0,m.jsx)(a.ScheduleEvent,{radius:w,event:e,size:"md",renderEventBody:j,renderEvent:C,mode:k,onClick:I?t=>I(e,t):void 0,children:e.title},e.id))});return(0,m.jsxs)(m.Fragment,{children:["modal"===x&&(0,m.jsx)(o.Modal,{opened:R,onClose:O,unstyled:y,radius:w,title:$,...T,children:z}),(0,m.jsxs)(r.Popover,{position:"bottom-start",width:260,opened:R,trapFocus:!0,returnFocus:!1,unstyled:y,disabled:S?.disabled||"modal"===x,radius:w,transitionProps:{transition:"pop",duration:120},offset:-46,id:V,...S,onChange:e=>{e||(S?.onChange?.(e),O())},children:[(0,m.jsx)(r.Popover.Target,{children:(0,m.jsx)(i.UnstyledButton,{...N("moreEventsButton"),mod:{static:"static"===k},onClick:()=>A.toggle(),...B,children:(0,t.getLabel)("moreLabel",H)(E)})}),(0,m.jsx)(r.Popover.Dropdown,{...N("moreEventsDropdown"),children:z})]})]})});v.displayName="@mantine/schedule/MoreEvents",v.classes=n,e.s(["MoreEvents",0,v],67312)},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),o=e.i(898496),r=e.i(4332),i=e.i(969610),d=e.i(792930),s=e.i(505696),l=e.i(657068),c=e.i(245086),m=e.i(783261),u=e.i(637079),v=e.i(376879),D=e.i(312709),f=e.i(201867),p=e.i(891343),y=e.i(67312),g=e.i(966696),h=e.i(298008),w=e.i(68642),x=e.i(532965),Y=e.i(813982),E=e.i(751198),S=e.i(494834),T={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},b=e.i(232471),M=e.i(19300),$=e.i(284629),j=e.i(481178),C=e.i(275519),V=e.i(433512),H=e.i(779177),k=e.i(951254),I=e.i(44091),B=e.i(62904),R=e.i(391466),A=e.i(417241),N=e.i(332977),O=e.i(191788),z=e.i(205693),L=e.i(391398);let F={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},G=(0,j.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,V.getRadius)(t):void 0,"--day-view-slot-height":(0,H.rem)(a),"--day-view-all-day-slot-height":(0,H.rem)(n)}})),P=(0,C.factory)(e=>{let j=(0,I.useProps)("DayView",F,e),{classNames:C,className:V,style:H,styles:P,unstyled:_,attributes:U,vars:J,__staticSelector:W,startTime:K,endTime:Q,intervalMinutes:q,withAllDaySlot:X,date:Z,locale:ee,slotLabelFormat:et,headerFormat:ea,getCurrentTime:en,withCurrentTimeIndicator:eo,withCurrentTimeBubble:er,withHeader:ei,radius:ed,onDateChange:es,onViewChange:el,previousControlProps:ec,nextControlProps:em,todayControlProps:eu,viewSelectProps:ev,slotHeight:eD,allDaySlotHeight:ef,scrollAreaProps:ep,events:ey,moreEventsProps:eg,renderEventBody:eh,renderEvent:ew,labels:ex,highlightBusinessHours:eY,businessHours:eE,withEventsDragAndDrop:eS,onEventDrop:eT,canDragEvent:eb,onEventDragStart:eM,onEventDragEnd:e$,onTimeSlotClick:ej,onAllDaySlotClick:eC,onEventClick:eV,withDragSlotSelect:eH,onSlotDragEnd:ek,mode:eI,startScrollTime:eB,onExternalEventDrop:eR,withEventResize:eA,onEventResize:eN,canResizeEvent:eO,recurrenceExpansionLimit:ez,getTimeSlotProps:eL,...eF}=j,eG=(0,R.useStyles)({name:W,classes:T,props:j,className:V,style:H,classNames:C,styles:P,unstyled:_,attributes:U,vars:J,varsResolver:G,rootSelector:"dayView"}),{resolvedClassNames:eP,resolvedStyles:e_}=(0,B.useResolvedStylesApi)({classNames:C,styles:P,props:j}),eU={classNames:eP,styles:e_,attributes:U,__staticSelector:W,radius:ed},eJ=(0,k.useMantineTheme)(),eW=(0,z.useDatesContext)(),eK=()=>en?(0,S.default)(en()):(0,S.default)(),eQ=eo??(0,S.default)(Z).isSame(eK(),"day"),eq=(0,o.getDayTimeIntervals)({startTime:K,endTime:Q,intervalMinutes:q}),eX=(0,O.useRef)([]),eZ=(0,O.useRef)(null),e0=(0,O.useRef)(null),e1=(0,N.useMergedRef)(eZ,ep?.viewportRef);(0,c.useAutoScrollOnDrag)({viewportRef:eZ,enabled:(eS||!!eR)&&"static"!==eI}),(0,A.useIsomorphicEffect)(()=>{if(!eB||!eZ.current||0===eX.current.length)return;let e=eq.findIndex(e=>e.startTime>=eB);if(e<0)return;let t=eX.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=eZ.current.getBoundingClientRect();eZ.current.scrollTo({left:0,top:a.top-n.top})},[]);let e8=(0,O.useCallback)(e=>{let t=eX.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=eX.current[0],n=eX.current[eX.current.length-1];if(!a||!n)return null;let o=a.getBoundingClientRect(),r=n.getBoundingClientRect();return e.clientY<o.top?0:e.clientY>r.bottom?eX.current.length-1:null},[]),e2=(0,v.useSlotDragSelect)({enabled:eH&&"static"!==eI,onDragEnd:(e,t)=>{if(!ek)return;let a=(0,S.default)(Z).format("YYYY-MM-DD");ek(`${a} ${eq[e].startTime}`,`${a} ${eq[t].endTime}`)}}),e3=function({events:e,date:t,startTime:a,endTime:n,intervalMinutes:o}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let r=new Set,d=[],s=[],l=(0,S.default)(t).startOf("day"),c=(0,S.default)(t).endOf("day");for(let t of e){let e=(0,S.default)(t.start),o=(0,S.default)(t.end),i=e.isSame(l,"day"),m=!i&&"background"===t.display&&e.isBefore(c)&&o.isAfter(l);if(i||m){if(i&&!(0,w.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,h.validateEvent)(t);if(r.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);r.add(t.id),"background"===t.display?s.push(e):d.push(e)}}let m=function({events:e,startTime:t,endTime:a,intervalMinutes:n,date:o}){let r=[],d=[];for(let s of(0,Y.sortEvents)(e)){let e=(0,i.isAllDayEvent)({event:s,date:o}),l=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,date:o}){return!!e[t]&&e[t].some(e=>{let t=(0,i.isAllDayEvent)({event:e,date:o}),r=(0,E.isEventsOverlap)(e,a);return!n&&!t&&r})}({columns:r,columnIndex:l,event:s,allDay:e,date:o});)l++;r[l]||(r[l]=[]),r[l].push(s);let c=e?{top:0,height:100}:(0,x.getDayPosition)({event:s,startTime:t,endTime:a,intervalMinutes:n});d.push({...s,position:{...c,allDay:e,column:l,width:0,offset:0,overlaps:0}})}for(let e of d){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let n=[];for(let t of d)t!==e&&!t.position.allDay&&(0,E.isEventsOverlap)(t,e)&&n.push(t);let o=a;for(let e of n)for(let t of(o=Math.max(o,e.position.column),d))t!==e&&!t.position.allDay&&(0,E.isEventsOverlap)(t,e)&&(o=Math.max(o,t.position.column));let r=o+1,i=r;for(let e of n)e.position.column>a&&e.position.column<i&&(i=e.position.column);let s=i-a;e.position.overlaps=r,e.position.width=s/r*100,e.position.offset=100*a/r}return d}({events:d,startTime:a,endTime:n,intervalMinutes:o,date:t}),u=[],v=[];for(let e of m)e.position.allDay?u.push(e):v.push(e);let D=[],f=[];for(let e of s){let r=(0,S.default)(e.start),d=(0,S.default)(e.end),s=r.isBefore(l)?l:r,m=d.isAfter(c)?c:d,u={...e,start:s.format("YYYY-MM-DD HH:mm:ss"),end:m.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:u,date:t}))f.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:r}=(0,x.getDayPosition)({event:u,startTime:a,endTime:n,intervalMinutes:o});if(r<=0)continue;D.push({...e,position:{top:t,height:r,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:u,regularEvents:v,backgroundTimedEvents:D,backgroundAllDayEvents:f}}({events:(0,l.expandRecurringEvents)({events:ey,rangeStart:(0,S.default)(Z).startOf("day").toDate(),rangeEnd:(0,S.default)(Z).endOf("day").toDate(),expansionLimit:ez}),date:Z,startTime:K,endTime:Q,intervalMinutes:q}),e9=(0,O.useCallback)((e,t)=>{if(!eR)return;let a=(0,S.default)(Z).format("YYYY-MM-DD");eR(e.dataTransfer,`${a} ${eq[t].startTime}`)},[eR,Z,eq]),e4=(0,m.useDragDropHandlers)({enabled:eS,mode:eI,onEventDrop:eT,canDragEvent:eb,onEventDragStart:eM,onEventDragEnd:e$,calculateDropTarget:(e,t)=>{let a=eq[e].startTime;return(0,d.calculateDropTime)({draggedEvent:t,targetDate:Z,targetSlotTime:a,intervalMinutes:q})},onExternalDrop:eR?e9:void 0}),e5=(0,u.useEventResize)({enabled:eA,mode:eI,startTime:K,endTime:Q,intervalMinutes:q,onEventResize:eN,canResizeEvent:eO}),e6=(eS||!!eR)&&"static"!==eI,e7=e3.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:Z}),a=!t&&e4.isDraggableEvent(e),n=!t&&e5.isResizableEvent(e),o=e5.getResizePosition(e.id),r=o?o.top:e.position.top,d=o?o.height:e.position.height;return(0,L.jsx)(p.ScheduleEvent,{event:e,renderEventBody:eh,renderEvent:ew,autoSize:!0,draggable:a,withResize:n,isResizing:null!==o,onResizeStart:n?(t,a)=>{e0.current&&e5.handleResizeStart({event:e,edge:t,container:e0.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,S.default)(Z).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eI,onClick:eV?t=>{e5.wasResizing()||eV(e,t)}:void 0,...eU,style:{...eU.styles?.event,top:`${r}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),te=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e3.allDayEvents.length}),tt=e3.allDayEvents.slice(0,te.visibleEventsCount).map(e=>(0,L.jsx)(p.ScheduleEvent,{event:e,renderEventBody:eh,renderEvent:ew,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eI,onClick:eV?t=>eV(e,t):void 0,...eU},e.id)),ta=(0,S.default)(Z).format("YYYY-MM-DD"),tn=eq.map((e,a)=>{let o=e4.isDropTarget(a),r=e2.isSlotSelected(a,ta),i=`${ta} ${e.startTime}`,d=`${ta} ${e.endTime}`,{onClick:l,...c}=eL?.({start:i,end:d})||{},m="static"===eI?void 0:e=>{ej?.({slotStart:i,slotEnd:d,nativeEvent:e}),l?.(e)};return(0,O.createElement)($.UnstyledButton,{...eG("dayViewSlot"),key:e.startTime,ref:e=>{eX.current[a]=e},mod:{"hour-start":e.isHourStart,...(0,s.getBusinessHoursMod)({time:e.startTime,businessHours:eE,highlightBusinessHours:eY}),"drop-target":o,"drag-selected":r,static:"static"===eI},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(q)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",ex)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eI?-1:0===a?0:-1,"data-drag-slot-index":eH&&"static"!==eI?a:void 0,"data-drag-slot-group":eH&&"static"!==eI?ta:void 0,onKeyDown:"static"===eI?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<eq.length-1?(e.preventDefault(),eX.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),eX.current[a-1]?.focus())},onPointerDown:eH&&"static"!==eI?e=>e2.handleSlotPointerDown(e,a,ta):void 0,onClick:m,onDragOver:e6?e=>e.preventDefault():void 0,...c})}),to=eq.reduce((e,t)=>{if(t.isHourStart){let n=(0,S.default)(`${(0,S.default)(Z).format("YYYY-MM-DD")} ${t.startTime}`),o=(0,a.formatDate)({locale:eW.getLocale(ee),date:n,format:et});e.push((0,O.createElement)(b.Box,{...eG("dayViewSlotLabel"),key:t.startTime,mod:(0,s.getBusinessHoursMod)({time:t.startTime,businessHours:eE,highlightBusinessHours:eY})},o))}return e},[]),tr=e3.backgroundAllDayEvents.map(e=>{let t=eJ.variantColorResolver({color:e.color||eJ.primaryColor,theme:eJ,variant:"light",autoContrast:!0}),a="function"==typeof eh?eh(e):e.title,n={key:`bg-allday-${e.id}`,...eG("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ew)return ew(e,n);let{key:o,...r}=n;return(0,L.jsx)(b.Box,{...r},o)}),ti=e3.backgroundTimedEvents.map(e=>{let t=eJ.variantColorResolver({color:e.color||eJ.primaryColor,theme:eJ,variant:"light",autoContrast:!0}),a="function"==typeof eh?eh(e):e.title,n={key:e.id,...eG("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ew)return ew(e,n);let{key:o,...r}=n;return(0,L.jsx)(b.Box,{...r},o)}),td=(0,L.jsxs)(b.Box,{...eG("dayView"),mod:{static:"static"===eI,"slot-dragging":e2.isDragging},...eF,children:[ei&&(0,L.jsx)(g.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,r.toDateString)((0,S.default)(Z).subtract(1,"day")),next:()=>(0,r.toDateString)((0,S.default)(Z).add(1,"day")),today:()=>(0,r.toDateString)(eK())},control:{title:(0,a.formatDate)({locale:eW.getLocale(ee),date:Z,format:ea}),miw:140},labels:ex,onDateChange:es,onViewChange:el,previousControlProps:ec,nextControlProps:em,todayControlProps:eu,viewSelectProps:ev,stylesApiProps:eU}),(0,L.jsx)(M.ScrollArea.Autosize,{scrollbarSize:4,...ep,...eG("dayViewScrollArea",{className:ep?.className,style:ep?.style}),viewportRef:e1,children:(0,L.jsxs)(b.Box,{...eG("dayViewInner"),children:[(0,L.jsxs)("div",{...eG("dayViewSlotLabels"),children:[X&&(0,L.jsx)(b.Box,{...eG("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",ex)}),to]}),(0,L.jsxs)("div",{...eG("dayViewSlots"),children:[X&&(0,L.jsxs)("div",{...eG("dayViewAllDay"),children:[tr,(0,L.jsxs)("div",{...eG("dayViewAllDayEvents"),children:[tt,te.hiddenEventsCount>0&&(0,L.jsx)(y.MoreEvents,{events:e3.allDayEvents,moreEventsCount:te.hiddenEventsCount,renderEventBody:eh,renderEvent:ew,mode:eI,labels:ex,onEventClick:eV,...eU,...eg})]}),(0,L.jsx)($.UnstyledButton,{...eG("dayViewSlot"),mod:{"all-day":!0,static:"static"===eI},"aria-label":`${(0,t.getLabel)("timeSlot",ex)} ${(0,t.getLabel)("allDay",ex)}`,onClick:"static"!==eI&&eC?e=>{eC((0,S.default)(Z).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:e0,...eG("dayViewTimeSlots"),onDragOver:e6?e=>{let t=e8(e);null!==t&&e4.handleDragOver(e,t)}:void 0,onDragLeave:e6?e4.handleDragLeave:void 0,onDrop:e6?e=>{let t=e8(e);null!==t&&e4.handleDrop(e,t)}:void 0,children:[ti,e7,eQ&&(0,L.jsx)(D.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:et,withTimeBubble:er,withThumb:!er,locale:ee,startTime:K,endTime:Q,getCurrentTime:en,...eU}),tn]})]})]})})]});return eS?(0,L.jsx)(f.DragContext.Provider,{value:e4.dragContextValue,children:td}):td});P.displayName="@mantine/schedule/DayView",P.classes=T,P.varsResolver=G,e.s(["DayView",0,P],200183)},7834,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],r=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Full Day Session",start:`${n} 10:00:00`,end:`${n} 16:00:00`,color:"green"}],i=[{id:1,title:"Conference Day",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Product Launch",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:5,title:"Year Kickoff",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"}],d=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${n} 17:30:00`,end:`${n} 18:00:00`,color:"orange"}],s=`
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
`;var u=e.i(191788),v=e.i(391398),D=e.i(200183);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"09:00:00",endTime:"17:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},g={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var x=e.i(988798),Y=e.i(671640),E=e.i(664894),S=e.i(53157);a.default.extend(S.default),a.default.extend(E.default);let T=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],b={type:"code",component:function(){let[e,t]=(0,u.useState)("UTC"),n=()=>(0,a.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),o=n().split(" ")[0];return(0,v.jsxs)(Y.Stack,{children:[(0,v.jsx)(x.Select,{label:"Display timezone",data:T,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,v.jsx)(D.DayView,{date:o,events:[{id:1,title:"Morning standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue"},{id:2,title:"Team meeting",start:`${o} 12:00:00`,end:`${o} 13:00:00`,color:"teal"},{id:3,title:"Code review",start:`${o} 16:00:00`,end:`${o} 17:00:00`,color:"grape"}],getCurrentTime:n,startScrollTime:(0,a.default)(n()).subtract(2,"hour").format("HH:mm:ss"),withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData } from '@mantine/schedule';\n\nexport function getEvents(date: string): ScheduleEventData[] {\n  return [\n    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },\n    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },\n    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },\n  ];\n}\n",language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:d,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},$={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},j={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},C={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",headerFormat:"dddd, MMMM D"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h:mm A"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},H={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},k=(0,a.default)().format("YYYY-MM-DD"),I=[{id:1,title:"Morning Standup",start:`${k} 09:00:00`,end:`${k} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${k} 11:00:00`,end:`${k} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${k} 14:00:00`,end:`${k} 15:00:00`,color:"violet"}],B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(I);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},R=(0,a.default)().format("YYYY-MM-DD"),A=[{id:1,title:"Draggable Event",start:`${R} 09:00:00`,end:`${R} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${R} 11:00:00`,end:`${R} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${R} 14:00:00`,end:`${R} 15:00:00`,color:"green"}],N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(A);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canDragEvent:e=>!e.payload?.locked})},code:`
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
`},O=(0,a.default)().format("YYYY-MM-DD"),z=[{id:1,title:"Morning Standup",start:`${O} 09:00:00`,end:`${O} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${O} 11:00:00`,end:`${O} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${O} 14:00:00`,end:`${O} 15:00:00`,color:"violet"}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(z);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},F=(0,a.default)().format("YYYY-MM-DD"),G=[{id:1,title:"Resizable Event",start:`${F} 09:00:00`,end:`${F} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${F} 11:00:00`,end:`${F} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${F} 14:00:00`,end:`${F} 15:00:00`,color:"green"}],P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(G);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canResizeEvent:e=>!e.payload?.locked})},code:`
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
`};var _=e.i(593612),U=e.i(554166),J=e.i(725695),W=e.i(883364);let K=(0,a.default)().format("YYYY-MM-DD"),Q=[{id:1,title:"Morning Standup",start:`${K} 09:00:00`,end:`${K} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${K} 11:00:00`,end:`${K} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${K} 12:30:00`,end:`${K} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],q={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:Q,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,v.jsxs)(J.Group,{children:[(0,v.jsx)(W.Text,{fz:12,fw:500,children:e.title}),(0,v.jsxs)(J.Group,{gap:4,children:[(0,v.jsx)(_.ClockIcon,{size:12}),(0,v.jsx)(W.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,v.jsxs)(J.Group,{gap:4,children:[(0,v.jsx)(U.MapPinIcon,{size:12}),(0,v.jsx)(W.Text,{fz:10,children:e.payload.location})]})]})})},code:`
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
`};var X=e.i(19683),Z=e.i(369974),ee=e.i(284629);let et=(0,a.default)().format("YYYY-MM-DD"),ea=[{id:1,title:"Team Standup",start:`${et} 09:00:00`,end:`${et} 09:30:00`,color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Review",start:`${et} 10:00:00`,end:`${et} 11:30:00`,color:"grape",payload:{description:"Review UI/UX designs for new feature",attendees:["Diana","Eve"],location:"Virtual Meeting"}},{id:3,title:"Client Presentation",start:`${et} 14:00:00`,end:`${et} 15:30:00`,color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Frank","Grace","Henry"],location:"Zoom"}},{id:4,title:"Code Review",start:`${et} 16:00:00`,end:`${et} 17:00:00`,color:"orange",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}}],en={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ea);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,v.jsxs)(Z.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,v.jsx)(Z.HoverCard.Target,{children:(0,v.jsx)(ee.UnstyledButton,{...t})}),(0,v.jsx)(Z.HoverCard.Dropdown,{children:(0,v.jsx)(X.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:X._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(ea,null,2)};`,language:"tsx"}]},eo={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},er={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",labels:{allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ei=e.i(485108);let ed={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(J.Group,{mb:"md",children:[(0,v.jsx)(ei.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Day"}),(0,v.jsx)(W.Text,{fw:500,children:(0,a.default)(e).format("MMMM D, YYYY")}),(0,v.jsx)(ei.Button,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Next Day"})]}),(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},es={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)("day");return(0,v.jsxs)("div",{children:[(0,v.jsxs)(W.Text,{mb:"md",children:["Selected view: ",e]}),(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",onViewChange:t})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var el=e.i(162077);let ec={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(o),[i,d]=(0,u.useState)(!1),[s,l]=(0,u.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),d(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),d(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,v.jsx)(el.EventForm,{opened:i,onClose:()=>d(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:el._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"events.ts"}]},em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(o);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var eu=e.i(232471),ev=e.i(20035);let eD=(0,a.default)().format("YYYY-MM-DD"),ef=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ep={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)([]),n=(0,u.useRef)(1);return(0,v.jsxs)(ev.Grid,{children:[(0,v.jsxs)(ev.Grid.Col,{span:{base:12,sm:3},children:[(0,v.jsx)(W.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),ef.map(e=>(0,v.jsxs)(eu.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(W.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(W.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,v.jsx)(ev.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(D.DayView,{date:eD,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let i=JSON.parse(r),d=(0,a.default)(o),s=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},ey=(0,a.default)().format("YYYY-MM-DD"),eg=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eh={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eg),[n,o]=(0,u.useState)([]),[r,i]=(0,u.useState)(!1),d=(0,u.useRef)(1);return(0,v.jsxs)(ev.Grid,{children:[(0,v.jsx)(ev.Grid.Col,{span:{base:12,sm:3},children:(0,v.jsxs)(eu.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let r=e.dataTransfer.getData("application/json");if(!r)return;let{eventId:d}=JSON.parse(r),s=n.find(e=>String(e.id)===String(d));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,v.jsx)(W.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,v.jsxs)(eu.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,v.jsx)(W.Text,{size:"sm",fw:500,children:e.title}),(0,v.jsxs)(W.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,v.jsx)(W.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,v.jsx)(ev.Grid.Col,{span:{base:12,sm:9},children:(0,v.jsx)(D.DayView,{date:ey,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let i=JSON.parse(r),s=(0,a.default)(n),l=s.add(i.duration,"minutes");o(e=>[...e,{id:d.current++,title:i.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},ew=(0,a.default)().format("YYYY-MM-DD"),ex=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,a.default)(ew).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,a.default)(ew).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${ew} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${ew} 14:00:00`,end:`${ew} 14:30:00`,color:"grape",recurringEventId:"daily-sync-series",recurrenceId:`${ew} 09:00:00`},{id:"one-off-day",title:"One-off planning",start:`${ew} 11:00:00`,end:`${ew} 12:00:00`,color:"green"}],eY={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ew);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:ex,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
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
`},eE=(0,a.default)().format("YYYY-MM-DD"),eS=[{id:"lunch-block",title:"Lunch break",start:`${eE} 12:00:00`,end:`${eE} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${eE} 14:00:00`,end:`${eE} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${eE} 10:00:00`,end:`${eE} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eE} 14:30:00`,end:`${eE} 15:30:00`,color:"green"}],eT={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eE);return(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:eS,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
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
`},eb=(0,a.default)().format("YYYY-MM-DD"),eM=[{id:"blocked-time",title:"Blocked",start:`${eb} 12:00:00`,end:`${eb} 14:00:00`,color:"red",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${eb} 10:00:00`,end:`${eb} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eb} 15:00:00`,end:`${eb} 16:00:00`,color:"green"}],e$={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eM);return(0,v.jsx)(D.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))},styles:{dayViewBackgroundEvent:{background:`repeating-linear-gradient(
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
`}]};var ej=e.i(428127);let eC={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,v.jsxs)("div",{children:[(0,v.jsxs)(ej.ScheduleHeader,{children:[(0,v.jsx)(ej.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(ej.ScheduleHeader.Control,{interactive:!1,miw:200,children:(0,a.default)(e).format("dddd, MMMM D, YYYY")}),(0,v.jsx)(ej.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD"))}),(0,v.jsx)(ej.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,v.jsx)(ej.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,v.jsx)(D.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let eV={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eH={defaultExpanded:!1,type:"code",component:function(){return(0,v.jsx)(D.DayView,{date:new Date,events:o,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ek=(0,t.__exportAll)({allDayEvents:()=>g,backgroundEvents:()=>eT,backgroundEventsCustomStyle:()=>e$,bidirectionalDragDrop:()=>eh,businessHours:()=>M,canDragEvent:()=>N,canResizeEvent:()=>P,controlledDate:()=>ed,currentTimeIndicator:()=>w,customHeader:()=>eC,dragDrop:()=>B,eventForm:()=>ec,eventResize:()=>L,externalDragDrop:()=>ep,getTimeSlotProps:()=>eH,headerFormat:()=>C,intervalMinutes:()=>y,labels:()=>er,localization:()=>eV,overlappingEvents:()=>h,radius:()=>H,recurringEvents:()=>eY,renderEvent:()=>en,renderEventBody:()=>q,slotHeight:()=>$,slotLabelFormat:()=>V,startScrollTime:()=>em,staticMode:()=>eo,timeRange:()=>p,timezone:()=>b,usage:()=>f,viewChange:()=>es,withoutHeader:()=>j});e.s(["DayViewDemos",0,ek],7834)}]);