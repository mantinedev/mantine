(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37930,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="PlusIcon",e.s(["PlusIcon",0,r],37930)},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},r=e.i(424302),o=e.i(392862),i=e.i(284629),l=e.i(275519),d=e.i(44091),s=e.i(391466),c=e.i(541772),u=e.i(391398);let m={dropdownType:"popover"},f=(0,l.factory)(e=>{let l=(0,d.useProps)("MoreEvents",m,e),{classNames:f,className:v,style:h,styles:y,unstyled:D,vars:p,attributes:w,radius:g,dropdownType:x,events:Y,moreEventsCount:M,popoverProps:b,modalProps:S,onDropdownClose:E,children:k,modalTitle:V,renderEventBody:C,renderEvent:j,id:T,labels:$,mode:I,onEventClick:H,...O}=l,[B,A]=(0,c.useDisclosure)(),W=(0,s.useStyles)({name:"MoreEvents",classes:n,props:l,className:v,style:h,classNames:f,styles:y,unstyled:D,attributes:w,vars:p,rootSelector:"moreEventsButton"}),R=()=>{A.close(),E?.()},_=(0,u.jsx)("div",{...W("moreEventsList"),children:Y.map(e=>(0,u.jsx)(a.ScheduleEvent,{radius:g,event:e,size:"md",renderEventBody:C,renderEvent:j,mode:I,onClick:H?t=>H(e,t):void 0,children:e.title},e.id))});return(0,u.jsxs)(u.Fragment,{children:["modal"===x&&(0,u.jsx)(r.Modal,{opened:B,onClose:R,unstyled:D,radius:g,title:V,...S,children:_}),(0,u.jsxs)(o.Popover,{position:"bottom-start",width:260,opened:B,trapFocus:!0,returnFocus:!1,unstyled:D,disabled:b?.disabled||"modal"===x,radius:g,transitionProps:{transition:"pop",duration:120},offset:-46,id:T,...b,onChange:e=>{e||(b?.onChange?.(e),R())},children:[(0,u.jsx)(o.Popover.Target,{children:(0,u.jsx)(i.UnstyledButton,{...W("moreEventsButton"),mod:{static:"static"===I},onClick:()=>A.toggle(),...O,children:(0,t.getLabel)("moreLabel",$)(M)})}),(0,u.jsx)(o.Popover.Dropdown,{...W("moreEventsDropdown"),children:_})]})]})});f.displayName="@mantine/schedule/MoreEvents",f.classes=n,e.s(["MoreEvents",0,f],67312)},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),r=e.i(898496),o=e.i(4332),i=e.i(969610),l=e.i(792930),d=e.i(505696),s=e.i(657068),c=e.i(245086),u=e.i(783261),m=e.i(637079),f=e.i(376879),v=e.i(312709),h=e.i(201867),y=e.i(891343),D=e.i(67312),p=e.i(966696),w=e.i(298008),g=e.i(68642),x=e.i(532965),Y=e.i(813982),M=e.i(751198),b=e.i(494834),S={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},E=e.i(232471),k=e.i(19300),V=e.i(284629),C=e.i(481178),j=e.i(275519),T=e.i(433512),$=e.i(779177),I=e.i(951254),H=e.i(44091),O=e.i(62904),B=e.i(391466),A=e.i(417241),W=e.i(332977),R=e.i(191788),_=e.i(205693),L=e.i(391398);let N={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},z=(0,C.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,T.getRadius)(t):void 0,"--day-view-slot-height":(0,$.rem)(a),"--day-view-all-day-slot-height":(0,$.rem)(n)}})),P=(0,j.factory)(e=>{let C=(0,H.useProps)("DayView",N,e),{classNames:j,className:T,style:$,styles:P,unstyled:F,attributes:G,vars:U,__staticSelector:J,startTime:K,endTime:Z,intervalMinutes:Q,withAllDaySlot:q,date:X,locale:ee,slotLabelFormat:et,headerFormat:ea,getCurrentTime:en,withCurrentTimeIndicator:er,withCurrentTimeBubble:eo,withHeader:ei,radius:el,onDateChange:ed,onViewChange:es,previousControlProps:ec,nextControlProps:eu,todayControlProps:em,viewSelectProps:ef,slotHeight:ev,allDaySlotHeight:eh,scrollAreaProps:ey,events:eD,moreEventsProps:ep,renderEventBody:ew,renderEvent:eg,labels:ex,highlightBusinessHours:eY,businessHours:eM,withEventsDragAndDrop:eb,onEventDrop:eS,canDragEvent:eE,onEventDragStart:ek,onEventDragEnd:eV,onTimeSlotClick:eC,onAllDaySlotClick:ej,onEventClick:eT,withDragSlotSelect:e$,onSlotDragEnd:eI,mode:eH,startScrollTime:eO,onExternalEventDrop:eB,withEventResize:eA,onEventResize:eW,canResizeEvent:eR,recurrenceExpansionLimit:e_,getTimeSlotProps:eL,...eN}=C,ez=(0,B.useStyles)({name:J,classes:S,props:C,className:T,style:$,classNames:j,styles:P,unstyled:F,attributes:G,vars:U,varsResolver:z,rootSelector:"dayView"}),{resolvedClassNames:eP,resolvedStyles:eF}=(0,O.useResolvedStylesApi)({classNames:j,styles:P,props:C}),eG={classNames:eP,styles:eF,attributes:G,__staticSelector:J,radius:el},eU=(0,I.useMantineTheme)(),eJ=(0,_.useDatesContext)(),eK=()=>en?(0,b.default)(en()):(0,b.default)(),eZ=er??(0,b.default)(X).isSame(eK(),"day"),eQ=(0,r.getDayTimeIntervals)({startTime:K,endTime:Z,intervalMinutes:Q}),eq=(0,R.useRef)([]),eX=(0,R.useRef)(null),e0=(0,R.useRef)(null),e1=(0,W.useMergedRef)(eX,ey?.viewportRef);(0,c.useAutoScrollOnDrag)({viewportRef:eX,enabled:(eb||!!eB)&&"static"!==eH}),(0,A.useIsomorphicEffect)(()=>{if(!eO||!eX.current||0===eq.current.length)return;let e=eQ.findIndex(e=>e.startTime>=eO);if(e<0)return;let t=eq.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=eX.current.getBoundingClientRect();eX.current.scrollTo({left:0,top:a.top-n.top})},[]);let e2=(0,R.useCallback)(e=>{let t=eq.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=eq.current[0],n=eq.current[eq.current.length-1];if(!a||!n)return null;let r=a.getBoundingClientRect(),o=n.getBoundingClientRect();return e.clientY<r.top?0:e.clientY>o.bottom?eq.current.length-1:null},[]),e8=(0,f.useSlotDragSelect)({enabled:e$&&"static"!==eH,onDragEnd:(e,t)=>{if(!eI)return;let a=(0,b.default)(X).format("YYYY-MM-DD");eI(`${a} ${eQ[e].startTime}`,`${a} ${eQ[t].endTime}`)}}),e3=function({events:e,date:t,startTime:a,endTime:n,intervalMinutes:r}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let o=new Set,l=[],d=[],s=(0,b.default)(t).startOf("day"),c=(0,b.default)(t).endOf("day");for(let t of e){let e=(0,b.default)(t.start),r=(0,b.default)(t.end),i=e.isSame(s,"day"),u=!i&&"background"===t.display&&e.isBefore(c)&&r.isAfter(s);if(i||u){if(i&&!(0,g.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,w.validateEvent)(t);if(o.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);o.add(t.id),"background"===t.display?d.push(e):l.push(e)}}let u=function({events:e,startTime:t,endTime:a,intervalMinutes:n,date:r}){let o=[],l=[];for(let d of(0,Y.sortEvents)(e)){let e=(0,i.isAllDayEvent)({event:d,date:r}),s=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,date:r}){return!!e[t]&&e[t].some(e=>{let t=(0,i.isAllDayEvent)({event:e,date:r}),o=(0,M.isEventsOverlap)(e,a);return!n&&!t&&o})}({columns:o,columnIndex:s,event:d,allDay:e,date:r});)s++;o[s]||(o[s]=[]),o[s].push(d);let c=e?{top:0,height:100}:(0,x.getDayPosition)({event:d,startTime:t,endTime:a,intervalMinutes:n});l.push({...d,position:{...c,allDay:e,column:s,width:0,offset:0,overlaps:0}})}for(let e of l){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let n=[];for(let t of l)t!==e&&!t.position.allDay&&(0,M.isEventsOverlap)(t,e)&&n.push(t);let r=a;for(let e of n)for(let t of(r=Math.max(r,e.position.column),l))t!==e&&!t.position.allDay&&(0,M.isEventsOverlap)(t,e)&&(r=Math.max(r,t.position.column));let o=r+1,i=o;for(let e of n)e.position.column>a&&e.position.column<i&&(i=e.position.column);let d=i-a;e.position.overlaps=o,e.position.width=d/o*100,e.position.offset=100*a/o}return l}({events:l,startTime:a,endTime:n,intervalMinutes:r,date:t}),m=[],f=[];for(let e of u)e.position.allDay?m.push(e):f.push(e);let v=[],h=[];for(let e of d){let o=(0,b.default)(e.start),l=(0,b.default)(e.end),d=o.isBefore(s)?s:o,u=l.isAfter(c)?c:l,m={...e,start:d.format("YYYY-MM-DD HH:mm:ss"),end:u.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:m,date:t}))h.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:o}=(0,x.getDayPosition)({event:m,startTime:a,endTime:n,intervalMinutes:r});if(o<=0)continue;v.push({...e,position:{top:t,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:m,regularEvents:f,backgroundTimedEvents:v,backgroundAllDayEvents:h}}({events:(0,s.expandRecurringEvents)({events:eD,rangeStart:(0,b.default)(X).startOf("day").toDate(),rangeEnd:(0,b.default)(X).endOf("day").toDate(),expansionLimit:e_}),date:X,startTime:K,endTime:Z,intervalMinutes:Q}),e4=(0,R.useCallback)((e,t)=>{if(!eB)return;let a=(0,b.default)(X).format("YYYY-MM-DD");eB(e.dataTransfer,`${a} ${eQ[t].startTime}`)},[eB,X,eQ]),e6=(0,u.useDragDropHandlers)({enabled:eb,mode:eH,onEventDrop:eS,canDragEvent:eE,onEventDragStart:ek,onEventDragEnd:eV,calculateDropTarget:(e,t)=>{let a=eQ[e].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:X,targetSlotTime:a,intervalMinutes:Q})},onExternalDrop:eB?e4:void 0}),e9=(0,m.useEventResize)({enabled:eA,mode:eH,startTime:K,endTime:Z,intervalMinutes:Q,onEventResize:eW,canResizeEvent:eR}),e7=(eb||!!eB)&&"static"!==eH,e5=e3.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:X}),a=!t&&e6.isDraggableEvent(e),n=!t&&e9.isResizableEvent(e),r=e9.getResizePosition(e.id),o=r?r.top:e.position.top,l=r?r.height:e.position.height;return(0,L.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:eg,autoSize:!0,draggable:a,withResize:n,isResizing:null!==r,onResizeStart:n?(t,a)=>{e0.current&&e9.handleResizeStart({event:e,edge:t,container:e0.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,b.default)(X).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eH,onClick:eT?t=>{e9.wasResizing()||eT(e,t)}:void 0,...eG,style:{...eG.styles?.event,top:`${o}%`,height:`${l}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),te=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e3.allDayEvents.length}),tt=e3.allDayEvents.slice(0,te.visibleEventsCount).map(e=>(0,L.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:eg,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eH,onClick:eT?t=>eT(e,t):void 0,...eG},e.id)),ta=(0,b.default)(X).format("YYYY-MM-DD"),tn=eQ.map((e,a)=>{let r=e6.isDropTarget(a),o=e8.isSlotSelected(a,ta),i=`${ta} ${e.startTime}`,l=`${ta} ${e.endTime}`,{onClick:s,...c}=eL?.({start:i,end:l})||{},u="static"===eH?void 0:e=>{eC?.({slotStart:i,slotEnd:l,nativeEvent:e}),s?.(e)};return(0,R.createElement)(V.UnstyledButton,{...ez("dayViewSlot"),key:e.startTime,ref:e=>{eq.current[a]=e},mod:{first:0===a,"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:eM,highlightBusinessHours:eY}),"drop-target":r,"drag-selected":o,static:"static"===eH},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(Q)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",ex)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eH?-1:0===a?0:-1,"data-drag-slot-index":e$&&"static"!==eH?a:void 0,"data-drag-slot-group":e$&&"static"!==eH?ta:void 0,onKeyDown:"static"===eH?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<eQ.length-1?(e.preventDefault(),eq.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),eq.current[a-1]?.focus())},onPointerDown:e$&&"static"!==eH?e=>e8.handleSlotPointerDown(e,a,ta):void 0,onClick:u,onDragOver:e7?e=>e.preventDefault():void 0,...c})}),tr=eQ.reduce((e,t)=>{if(t.isHourStart){let n=(0,b.default)(`${(0,b.default)(X).format("YYYY-MM-DD")} ${t.startTime}`),r=(0,a.formatDate)({locale:eJ.getLocale(ee),date:n,format:et});e.push((0,R.createElement)(E.Box,{...ez("dayViewSlotLabel"),key:t.startTime,mod:(0,d.getBusinessHoursMod)({time:t.startTime,businessHours:eM,highlightBusinessHours:eY})},r))}return e},[]),to=e3.backgroundAllDayEvents.map(e=>{let t=eU.variantColorResolver({color:e.color||eU.primaryColor,theme:eU,variant:"light",autoContrast:!0}),a="function"==typeof ew?ew(e):e.title,n={key:`bg-allday-${e.id}`,...ez("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eg)return eg(e,n);let{key:r,...o}=n;return(0,L.jsx)(E.Box,{...o},r)}),ti=e3.backgroundTimedEvents.map(e=>{let t=eU.variantColorResolver({color:e.color||eU.primaryColor,theme:eU,variant:"light",autoContrast:!0}),a="function"==typeof ew?ew(e):e.title,n={key:e.id,...ez("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eg)return eg(e,n);let{key:r,...o}=n;return(0,L.jsx)(E.Box,{...o},r)}),tl=(0,L.jsxs)(E.Box,{...ez("dayView"),mod:{static:"static"===eH,"slot-dragging":e8.isDragging},...eN,children:[ei&&(0,L.jsx)(p.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,b.default)(X).subtract(1,"day")),next:()=>(0,o.toDateString)((0,b.default)(X).add(1,"day")),today:()=>(0,o.toDateString)(eK())},control:{title:(0,a.formatDate)({locale:eJ.getLocale(ee),date:X,format:ea}),miw:140},labels:ex,onDateChange:ed,onViewChange:es,previousControlProps:ec,nextControlProps:eu,todayControlProps:em,viewSelectProps:ef,stylesApiProps:eG}),(0,L.jsx)(k.ScrollArea.Autosize,{scrollbarSize:4,...ey,...ez("dayViewScrollArea",{className:ey?.className,style:ey?.style}),viewportRef:e1,children:(0,L.jsxs)(E.Box,{...ez("dayViewInner"),children:[(0,L.jsxs)("div",{...ez("dayViewSlotLabels"),children:[q&&(0,L.jsx)(E.Box,{...ez("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",ex)}),tr]}),(0,L.jsxs)("div",{...ez("dayViewSlots"),children:[q&&(0,L.jsxs)("div",{...ez("dayViewAllDay"),children:[to,(0,L.jsxs)("div",{...ez("dayViewAllDayEvents"),children:[tt,te.hiddenEventsCount>0&&(0,L.jsx)(D.MoreEvents,{events:e3.allDayEvents,moreEventsCount:te.hiddenEventsCount,renderEventBody:ew,renderEvent:eg,mode:eH,labels:ex,onEventClick:eT,...eG,...ep})]}),(0,L.jsx)(V.UnstyledButton,{...ez("dayViewSlot"),mod:{"all-day":!0,static:"static"===eH},"aria-label":`${(0,t.getLabel)("timeSlot",ex)} ${(0,t.getLabel)("allDay",ex)}`,onClick:"static"!==eH&&ej?e=>{ej((0,b.default)(X).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:e0,...ez("dayViewTimeSlots"),onDragOver:e7?e=>{let t=e2(e);null!==t&&e6.handleDragOver(e,t)}:void 0,onDragLeave:e7?e6.handleDragLeave:void 0,onDrop:e7?e=>{let t=e2(e);null!==t&&e6.handleDrop(e,t)}:void 0,children:[ti,e5,eZ&&(0,L.jsx)(v.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:et,withTimeBubble:eo,withThumb:!eo,locale:ee,startTime:K,endTime:Z,intervalMinutes:Q,getCurrentTime:en,...eG}),tn]})]})]})})]});return eb?(0,L.jsx)(h.DragContext.Provider,{value:e6.dragContextValue,children:tl}):tl});P.displayName="@mantine/schedule/DayView",P.classes=S,P.varsResolver=z,e.s(["DayView",0,P],200183)},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(621304),r=e.i(855578),o=e.i(605520),i=e.i(753381),l=e.i(4332),d=e.i(813982),s=e.i(657068),c=e.i(647170),u=e.i(298008),m=e.i(898770),f=e.i(494834),v={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},h=e.i(462138),y=e.i(232471),D=e.i(883364),p=e.i(284629),w=e.i(481178),g=e.i(275519),x=e.i(433512),Y=e.i(317477),M=e.i(323283),b=e.i(951254),S=e.i(44091),E=e.i(391466),k=e.i(579560),V=e.i(191788),C=e.i(205693),j=e.i(391398);let T={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},$=(0,w.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,x.getRadius)(t)}})),I=(0,g.factory)(e=>{let w=(0,S.useProps)("MobileMonthView",T,e),{classNames:g,className:x,style:I,styles:H,unstyled:O,vars:B,attributes:A,__staticSelector:W,date:R,onDateChange:_,selectedDate:L,defaultSelectedDate:N,onSelectedDateChange:z,withWeekNumbers:P,withWeekDays:F,locale:G,firstDayOfWeek:U,weekdayFormat:J,weekendDays:K,getWeekNumberProps:Z,getDayProps:Q,onDayClick:q,onWeekNumberClick:X,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:en,events:er,labels:eo,mode:ei,renderEvent:el,eventsHeaderFormat:ed,onYearClick:es,onEventClick:ec,renderHeader:eu,recurrenceExpansionLimit:em,...ef}=w,ev=(0,C.useDatesContext)(),eh=(0,b.useMantineTheme)(),ey=(0,f.default)(),[eD,ep]=(0,k.useUncontrolled)({value:L,defaultValue:N??(0,l.toDateString)(ey),onChange:e=>z?.(e?(0,l.toDateString)((0,f.default)(e)):null)}),ew=(0,E.useStyles)({name:W,classes:v,props:w,className:x,style:I,classNames:g,styles:H,unstyled:O,attributes:A,vars:B,varsResolver:$,rootSelector:"mobileMonthView"}),eg=(0,V.useRef)([]),ex=(0,V.useRef)(null),eY=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let r of t)if("background"!==r.display&&(0,f.default)(r.start).isSame((0,f.default)(e),"month")){if(!function(e,t){if((0,m.isMultidayEvent)(e)){let a=(0,f.default)(e.start).startOf("day"),n=(0,f.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,f.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,u.validateEvent)(r),a),n.has(r.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${r.id}`);n.add(r.id)}return a}({date:R,events:(0,s.expandRecurringEvents)({events:er,rangeStart:(0,f.default)(R).startOf("month").toDate(),rangeEnd:(0,f.default)(R).endOf("month").toDate(),expansionLimit:em})}),eM=F?(0,n.getWeekdaysNames)({locale:ev.getLocale(G),format:J,firstDayOfWeek:ev.getFirstDayOfWeek(U)}).map((e,t)=>(0,V.createElement)("div",{...ew("mobileMonthViewWeekday"),key:t},e)):null,eb=(0,o.getMonthDays)({month:(0,f.default)(R).format("YYYY-MM-DD"),firstDayOfWeek:ev.getFirstDayOfWeek(U),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let n=!(0,i.isSameMonth)(e,R),r=ev.getWeekendDays(K).includes((0,f.default)(e).day()),o=(0,f.default)(e).locale(G||ev.locale).format("MMMM D, YYYY"),l=Q?.((0,f.default)(e).format("YYYY-MM-DD"))||{},d=(0,f.default)(e).isSame(ey,"day")&&et,s=eD&&(0,f.default)(e).isSame((0,f.default)(eD),"day"),u=eY[(0,f.default)(e).format("YYYY-MM-DD")]||[],m=en||!n;m&&null===ex.current&&(ex.current={weekIndex:t,dayIndex:a});let v=ex.current?.weekIndex===t&&ex.current?.dayIndex===a,h=u.slice(0,3).map(e=>(0,V.createElement)("div",{...ew("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,Y.getThemeColor)(e.color,eh)}}),key:e.id}));return(0,V.createElement)(p.UnstyledButton,{"aria-label":o,"aria-selected":s||void 0,...l,...ew("mobileMonthViewDay",{className:l.className,style:l.style}),key:e,ref:e=>{e&&(eg.current[t]||(eg.current[t]=[]),eg.current[t][a]=e)},mod:[{outside:n,weekend:r,today:d,selected:s,static:"static"===ei,hidden:!m},l.mod],tabIndex:"static"!==ei&&m&&v?0:-1,onClick:"static"!==ei&&m?t=>{let a=(0,f.default)(e).format("YYYY-MM-DD");ep(a),q?.(a,t),l.onClick?.(t)}:void 0,onKeyDown:"static"!==ei&&m?e=>{(0,c.handleMonthViewKeyDown)({controlsRef:eg,weekIndex:t,dayIndex:a,event:e})}:void 0},m?(0,f.default)(e).format("D"):null,m&&(0,j.jsx)("div",{...ew("mobileMonthViewDayIndicators"),children:h}))}),n=Z?.((0,f.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,r.getWeekNumber)(e);return(0,V.createElement)("div",{...ew("mobileMonthViewWeek"),key:t},P&&(0,j.jsx)(p.UnstyledButton,{"aria-label":`Week ${o}`,...n,onClick:"static"===ei?void 0:t=>{X?.((0,f.default)(e[0]).format("YYYY-MM-DD"),t),n.onClick?.(t)},mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,...ew("mobileMonthViewWeekNumber",{className:n.className,style:n.style}),children:o},o),a)}),eS=(eD?(0,d.sortEvents)(eY[(0,f.default)(eD).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,f.default)(e.start).format("HH:mm"),a=(0,f.default)(e.end).format("HH:mm"),n=(0,j.jsxs)(y.Box,{...ew("mobileMonthViewEventBody"),children:[(0,j.jsx)("div",{...ew("mobileMonthViewEventColor",{style:{backgroundColor:(0,Y.getThemeColor)(e.color,eh)}})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(D.Text,{...ew("mobileMonthViewEventTitle"),children:e.title}),(0,j.jsx)(D.Text,{...ew("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),r={...ew("mobileMonthViewEvent"),onClick:"static"===ei?void 0:t=>{ec?.(e,t)},tabIndex:"static"===ei?-1:0,children:n};return"function"==typeof el?(0,j.jsx)(V.default.Fragment,{children:el(e,r)},e.id):(0,V.createElement)(p.UnstyledButton,{...r,key:e.id})}),eE=eD?(0,a.formatDate)({locale:ev.getLocale(G),date:eD,format:ed}):"",{dir:ek}=(0,M.useDirection)(),eV=(0,a.formatDate)({locale:ev.getLocale(G),date:R,format:"MMMM YYYY"}),eC=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(p.UnstyledButton,{...ew("mobileMonthViewHeaderBackButton"),onClick:es,mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,children:[(0,j.jsx)(h.AccordionChevron,{style:{transform:`rotate(${"rtl"===ek?-90:90}deg)`},size:20}),(0,f.default)(R).format("YYYY")]}),(0,j.jsx)(D.Text,{...ew("mobileMonthViewHeaderLabel"),children:eV})]});return(0,j.jsxs)(y.Box,{...ew("mobileMonthView"),mod:{"with-week-numbers":P},...ef,children:[(0,j.jsx)("div",{...ew("mobileMonthViewHeader"),children:"function"==typeof eu?eu({mode:ei,date:R,defaultHeader:eC}):eC}),(0,j.jsxs)(y.Box,{...ew("mobileMonthViewCalendar"),mod:{"with-weekdays":F},children:[eM&&(0,j.jsxs)("div",{...ew("mobileMonthViewWeekdays"),children:[P&&(0,j.jsx)("div",{...ew("mobileMonthViewWeekdaysCorner")}),eM]}),eb]}),(0,j.jsxs)(y.Box,{...ew("mobileMonthViewEventsList"),children:[(0,j.jsx)(D.Text,{...ew("mobileMonthViewEventsHeader"),children:eE}),eS.length>0?eS:(0,j.jsx)(D.Text,{...ew("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});I.displayName="@mantine/schedule/MobileMonthView",I.classes=v,I.varsResolver=$,e.s(["MobileMonthView",0,I],433396)},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),n=e.i(494834),r=e.i(4332),o=e.i(657068),i=e.i(966696),l=e.i(298008),d=e.i(898770),s=e.i(27748),c=e.i(621304),u=e.i(855578),m=e.i(232471),f=e.i(284629),v=e.i(317477),h=e.i(951254),y=e.i(191788),D=e.i(205693),p=e.i(391398);function w({month:e,getStyles:r,monthLabelFormat:o="MMMM",withWeekNumbers:i,withWeekDays:l,locale:d,firstDayOfWeek:g,weekdayFormat:x,weekendDays:Y,getDayProps:M,onDayClick:b,onWeekNumberClick:S,onMonthClick:E,getWeekNumberProps:k,highlightToday:V,groupedEvents:C,mode:j,withOutsideDays:T,__getDayRef:$,__onDayKeyDown:I,firstDayIndex:H}){let O=(0,D.useDatesContext)(),B=(0,h.useMantineTheme)(),A=(0,n.default)(),W=l?(0,c.getWeekdaysNames)({locale:O.getLocale(d),format:x,firstDayOfWeek:O.getFirstDayOfWeek(g)}).map((e,t)=>(0,y.createElement)("div",{...r("yearViewWeekday"),key:t},e)):null,R=(0,t.getMonthDays)({month:(0,n.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:O.getFirstDayOfWeek(g),consistentWeeks:!0}).map((t,o)=>{let l=t.map((t,i)=>{let l=!(0,a.isSameMonth)(t,e);if(l&&!T)return(0,y.createElement)("div",{...r("yearViewDay"),"data-day-placeholder":!0,key:t});let s=O.getWeekendDays(Y).includes((0,n.default)(t).day()),c=(0,n.default)(t).locale(d||O.locale).format("MMMM D, YYYY"),u=M?.((0,n.default)(t).format("YYYY-MM-DD"))||{},m=(0,n.default)(t).isSame(A,"day")&&V,h=C?.[(0,n.default)(t).format("YYYY-MM-DD")]||[],D=H&&o===H.weekIndex&&i===H.dayIndex,w="static"!==j&&!l&&D,g=h.slice(0,3).map(e=>(0,y.createElement)("div",{...r("yearViewDayIndicator",{style:{backgroundColor:(0,v.getThemeColor)(e.color,B)}}),key:e.id}));return(0,y.createElement)(f.UnstyledButton,{"aria-label":c,...u,...r("yearViewDay",{className:u.className,style:u.style}),key:t,mod:[{outside:l,weekend:s,today:m,static:"static"===j},u.mod],tabIndex:w?0:-1,ref:e=>{e&&$?.(o,i,e)},onKeyDown:e=>{u.onKeyDown?.(e),I?.(e,{weekIndex:o,dayIndex:i,date:t})},onClick:"static"===j?void 0:e=>{b?.((0,n.default)(t).format("YYYY-MM-DD"),e),u.onClick?.(e)}},(0,n.default)(t).format("D"),(0,p.jsx)("div",{...r("yearViewDayIndicators"),children:g}))}),s=k?.((0,n.default)(t[0]).format("YYYY-MM-DD"))||{},c=(0,u.getWeekNumber)(t);return(0,y.createElement)("div",{...r("yearViewWeek"),key:o},i&&(0,p.jsx)(f.UnstyledButton,{"aria-label":`Week ${c}`,title:`Week ${c}`,...s,onClick:"static"===j?void 0:e=>{S?.((0,n.default)(t[0]).format("YYYY-MM-DD"),e),s.onClick?.(e)},mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...r("yearViewWeekNumber",{className:s.className,style:s.style}),children:c},c),l)});return(0,p.jsxs)(m.Box,{mod:[{"with-week-numbers":i,"with-weekdays":l,static:"static"===j}],...r("yearViewMonth"),children:[(0,p.jsx)(f.UnstyledButton,{onClick:"static"===j?void 0:t=>E?.((0,n.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...r("yearViewMonthCaption"),children:(0,s.formatDate)({locale:O.getLocale(d),date:e,format:o})}),W&&(0,p.jsxs)("div",{...r("yearViewWeekdays"),children:[i&&(0,p.jsx)("div",{...r("yearViewWeekdaysCorner")}),W]}),R]})}var g={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},x=e.i(481178),Y=e.i(275519),M=e.i(433512),b=e.i(44091),S=e.i(62904),E=e.i(391466);let k={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},V=(0,x.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,M.getRadius)(t):void 0}})),C=(0,Y.factory)(e=>{let s=(0,b.useProps)("YearView",k,e),{date:c,onDateChange:u,events:f,monthLabelFormat:v,withWeekNumbers:h,withWeekDays:x,locale:Y,firstDayOfWeek:M,weekdayFormat:C,weekendDays:j,onMonthClick:T,onDayClick:$,onWeekNumberClick:I,getDayProps:H,getWeekNumberProps:O,highlightToday:B,labels:A,withOutsideDays:W,withHeader:R,monthYearSelectProps:_,onViewChange:L,previousControlProps:N,nextControlProps:z,todayControlProps:P,viewSelectProps:F,__staticSelector:G,classNames:U,className:J,style:K,styles:Z,unstyled:Q,vars:q,attributes:X,radius:ee,mode:et,recurrenceExpansionLimit:ea,...en}=s,er=(0,D.useDatesContext)(),eo=(0,E.useStyles)({name:G,classes:g,props:s,className:J,style:K,classNames:U,styles:Z,unstyled:Q,vars:q,varsResolver:V,attributes:X,rootSelector:"yearView"}),{resolvedClassNames:ei,resolvedStyles:el}=(0,S.useResolvedStylesApi)({classNames:U,styles:Z,props:s}),ed=function({date:e,events:t}){let a={};if(void 0===t)return a;let r=new Set;for(let o of t)if((0,n.default)(o.start).isSame((0,n.default)(e),"year")){if(!function(e,t){if((0,d.isMultidayEvent)(e)){let a=(0,n.default)(e.start).startOf("day"),r=(0,n.default)(e.end).startOf("day");for(let n=a;n.isBefore(r)||n.isSame(r);n=n.add(1,"day")){let a=n.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,n.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,l.validateEvent)(o),a),r.has(o.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${o.id}`);r.add(o.id)}return a}({date:c,events:(0,o.expandRecurringEvents)({events:f,rangeStart:(0,n.default)(c).startOf("year").toDate(),rangeEnd:(0,n.default)(c).endOf("year").toDate(),expansionLimit:ea})}),es=(0,y.useRef)([]),ec=0,eu=(function(e){let t=(0,n.default)(e).startOf("year").toDate(),a=[[],[],[],[]],r=0;for(let e=0;e<4;e+=1)for(let o=0;o<3;o+=1)a[e].push((0,n.default)(t).add(r,"months").format("YYYY-MM-DD")),r+=1;return a})((0,n.default)(c).format("YYYY-MM-DD")).flat().map(e=>{let r=ec;return ec++,(0,p.jsx)(w,{month:e,getStyles:eo,monthLabelFormat:v,withWeekNumbers:h,withWeekDays:x,locale:Y,firstDayOfWeek:M,weekdayFormat:C||(e=>(0,n.default)(e).locale(er.getLocale(Y)).format("dd").slice(0,1)),weekendDays:j,getDayProps:H,getWeekNumberProps:O,onMonthClick:T,onDayClick:$,onWeekNumberClick:I,highlightToday:B,groupedEvents:ed,mode:et,withOutsideDays:W,firstDayIndex:(e=>{let r=(0,t.getMonthDays)({month:(0,n.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:er.getFirstDayOfWeek(M),consistentWeeks:!0});for(let t=0;t<r.length;t++){let n=r[t];for(let r=0;r<n.length;r++){let o=n[r];if((0,a.isSameMonth)(o,e))return{weekIndex:t,dayIndex:r}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(es.current[r])||(es.current[r]=[]),Array.isArray(es.current[r][e])||(es.current[r][e]=[]),es.current[r][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:n,event:r}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(r.key);if(o){r.preventDefault();let i=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!i)return;!function e({controlsRef:t,direction:a,monthIndex:n,weekIndex:r,dayIndex:o,size:i}){let l=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:n,size:r}){let o=r[t];if(!o)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=r[t-1];if(!e||0===e.length)return null;let a=e.length-1,o=Math.min(n,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:o}}let e=Math.min(n,o[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===o.length-1){if(t===r.length-1)return null;let e=r[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(n,e[0]-1)}}let e=Math.min(n,o[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===n){if(0===a){if(0===t)return null;let e=r[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:o[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:n-1};case"right":if(n===o[a]-1){if(a===o.length-1){if(t===r.length-1)return null;let e=r[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:n+1};default:return null}}({direction:a,monthIndex:n,weekIndex:r,dayIndex:o,size:i});if(!l)return;let d=t.current?.[l.monthIndex]?.[l.weekIndex]?.[l.dayIndex];d&&(d.disabled||d.getAttribute("data-hidden")||d.getAttribute("data-outside")||d.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:l.monthIndex,weekIndex:l.weekIndex,dayIndex:l.dayIndex,size:i}):d.focus())}({controlsRef:e,direction:o,monthIndex:t,weekIndex:a,dayIndex:n,size:i})}}({controlsRef:es,monthIndex:r,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,p.jsxs)(m.Box,{...eo("yearView"),mod:{static:"static"===et},...en,children:[R&&(0,p.jsx)(i.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,r.toDateString)((0,n.default)(c).subtract(1,"year").startOf("year")),next:()=>(0,r.toDateString)((0,n.default)(c).add(1,"year").startOf("year")),today:()=>(0,r.toDateString)((0,n.default)())},control:{monthYearSelect:{locale:Y,withMonths:!1,yearValue:(0,n.default)(c).get("year"),monthValue:(0,n.default)(c).get("month"),onYearChange:e=>u?.((0,r.toDateString)((0,n.default)(c).set("year",e).startOf("year"))),..._}},labels:A,onDateChange:u,onViewChange:L,previousControlProps:N,nextControlProps:z,todayControlProps:P,viewSelectProps:F,stylesApiProps:{classNames:ei,styles:el,attributes:X,__staticSelector:G,radius:ee}}),(0,p.jsx)("div",{...eo("yearViewMonths"),children:eu})]})});C.displayName="@mantine/schedule/YearView",C.classes=g,C.varsResolver=V,e.s(["YearView",0,C],122308)},238715,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

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
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`;var l=e.i(391398),d=e.i(200183),s=e.i(433396),c=e.i(168574),u=e.i(315401),m=e.i(122308),f={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},v=e.i(232471),h=e.i(275519),y=e.i(44091),D=e.i(391466),p=e.i(579560);let w={defaultView:"week",mode:"default",layout:"default"},g=(0,h.factory)(e=>{let t=(0,y.useProps)("Schedule",w,e),{classNames:a,className:n,style:r,styles:o,unstyled:i,vars:h,date:g,defaultDate:x,onDateChange:Y,view:M,defaultView:b,onViewChange:S,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:T,onEventDrop:$,canDragEvent:I,onEventDragStart:H,onEventDragEnd:O,onTimeSlotClick:B,onAllDaySlotClick:A,onDayClick:W,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:L,onExternalEventDrop:N,withEventResize:z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U,layout:J,dayViewProps:K,weekViewProps:Z,monthViewProps:Q,yearViewProps:q,mobileMonthViewProps:X,__staticSelector:ee,mod:et,...ea}=t,en=(0,D.useStyles)({name:ee||"Schedule",classes:f,props:t,className:n,style:r,classNames:a,styles:o,unstyled:i,vars:h}),[er,eo]=(0,p.useUncontrolled)({value:M,defaultValue:b,onChange:S}),[ei,el]=(0,p.useUncontrolled)({value:g,defaultValue:x??new Date}),ed=e=>{el(e),Y?.(e)},es=e=>{eo(e),S?.(e)},ec=e=>{ed(e),es("month")},eu={date:ei,onDateChange:ed,view:er,onViewChange:es,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:"static"!==U&&T,onEventDrop:$,canDragEvent:I,onEventDragStart:H,onEventDragEnd:O,onTimeSlotClick:B,onAllDaySlotClick:A,onDayClick:W,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:L,onExternalEventDrop:N,withEventResize:"static"!==U&&z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U},em=(()=>{switch(er){case"day":return(0,l.jsx)(d.DayView,{...eu,...K});case"week":return(0,l.jsx)(u.WeekView,{...eu,...Z});case"month":return(0,l.jsx)(c.MonthView,{...eu,...Q});case"year":return(0,l.jsx)(m.YearView,{...eu,onMonthClick:ec,...q});default:return null}})(),ef=(()=>{switch(er){case"day":case"week":case"month":return(0,l.jsx)(s.MobileMonthView,{date:ei,onDateChange:ed,events:E,locale:k,radius:V,labels:C,mode:U,recurrenceExpansionLimit:G,onYearClick:()=>es("year"),onEventClick:R,...X});case"year":return(0,l.jsx)(m.YearView,{...eu,onMonthClick:ec,...q});default:return null}})();return"responsive"===J?(0,l.jsxs)(v.Box,{...en("root"),mod:[{layout:J},et],...ea,children:[(0,l.jsx)(v.Box,{...en("desktopView"),children:em}),(0,l.jsx)(v.Box,{...en("mobileView"),children:ef})]}):(0,l.jsx)(v.Box,{...en("root"),mod:et,...ea,children:em})});g.displayName="@mantine/schedule/Schedule",g.classes=f;let x={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(g,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var Y=e.i(191788);let M=(0,a.default)().format("YYYY-MM-DD"),b=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),S=[{id:1,title:"Morning Standup",start:`${M} 09:00:00`,end:`${M} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${M} 10:00:00`,end:`${M} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${M} 12:00:00`,end:`${M} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${b} 14:00:00`,end:`${b} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${b} 15:30:00`,end:`${b} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${M} 00:00:00`,end:(0,a.default)(M).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(S);return(0,l.jsx)(g,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${tomorrow} 15:30:00\`,
    end: \`\${tomorrow} 16:30:00\`,
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
    <Schedule
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`};var k=e.i(883364);let V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("week"),[a,n]=(0,Y.useState)(new Date);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(k.Text,{size:"sm",mb:"md",children:["Current view: ",(0,l.jsx)("b",{children:e})]}),(0,l.jsx)(g,{view:e,onViewChange:t,date:a,onDateChange:e=>n(new Date(e)),events:o})]})},code:`
import { useState } from 'react';
import { Text } from '@mantine/core';
import { Schedule, ScheduleViewLevel } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Text size="sm" mb="md">
        Current view: <b>{view}</b>
      </Text>

      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={(newDate) => setDate(new Date(newDate))}
        events={events}
      />
    </div>
  );
}
`},C={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(g,{events:o,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1},monthViewProps:{withWeekNumbers:!0,firstDayOfWeek:0},yearViewProps:{withWeekNumbers:!0}})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Schedule
      events={events}
      dayViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        intervalMinutes: 30,
      }}
      weekViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        withWeekendDays: false,
      }}
      monthViewProps={{
        withWeekNumbers: true,
        firstDayOfWeek: 0,
      }}
      yearViewProps={{
        withWeekNumbers: true,
      }}
    />
  );
}
`},j={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(g,{events:o,defaultView:"month"})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
`},T={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,l.jsx)(g,{events:o,layout:"responsive"})})},code:`
import { Box } from '@mantine/core';
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule events={events} layout="responsive" />
    </Box>
  );
}
`};var $=e.i(162077),I=e.i(37930),H=e.i(658109),O=e.i(725695);let B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(o),[n,r]=(0,Y.useState)(!1),[i,d]=(0,Y.useState)(null),s=(0,Y.useRef)((0,a.default)().format("YYYY-MM-DD")),c=()=>{let e=s.current;d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)};return(0,l.jsxs)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,l.jsx)(g,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onAllDaySlotClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),r(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(s.current=e)},renderHeader:({defaultHeader:e})=>(0,l.jsxs)(O.Group,{justify:"space-between",w:"100%",children:[(0,l.jsx)(O.Group,{justify:"space-between",flex:"1",children:e}),(0,l.jsx)(H.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:c,"aria-label":"Create new event",children:(0,l.jsx)(I.PlusIcon,{size:18})})]})}}),(0,l.jsx)($.EventForm,{opened:n,onClose:()=>r(!1),onExitTransitionEnd:()=>d(null),values:i,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:i?.id?()=>{i?.id&&t(e=>e.filter(e=>e.id!==i.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { PlusIcon } from '@phosphor-icons/react';
import { ActionIcon, Box, Group } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events } from './events';

function Demo() {
  const [allEvents, setAllEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const mobileSelectedDate = useRef<string>(dayjs().format('YYYY-MM-DD'));

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

  const handleDayClick = (date: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(date).startOf('day').toDate(),
      end: dayjs(date).endOf('day').toDate(),
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
      setAllEvents((prev) =>
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
      setAllEvents((prev) => [
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
      setAllEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  const handleCreateEvent = () => {
    const selectedDate = mobileSelectedDate.current;
    setSelectedEventData({
      title: '',
      start: dayjs(selectedDate).startOf('day').toDate(),
      end: dayjs(selectedDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule
        events={allEvents}
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        withDragSlotSelect
        layout="responsive"
        mobileMonthViewProps={{
          onSelectedDateChange: (date) => {
            if (date) {
              mobileSelectedDate.current = date;
            }
          },
          renderHeader: ({ defaultHeader }) => (
            <Group justify="space-between" w="100%">
              <Group justify="space-between" flex="1">
                {defaultHeader}
              </Group>
              <ActionIcon
                variant="default"
                mx="sm"
                size="lg"
                onClick={handleCreateEvent}
                aria-label="Create new event"
              >
                <PlusIcon size={18} />
              </ActionIcon>
            </Group>
          ),
        }}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </Box>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:$._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:i,language:"tsx",fileName:"events.ts"}]};var A=e.i(20035);let W=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)([]),n=(0,Y.useRef)(1);return(0,l.jsxs)(A.Grid,{children:[(0,l.jsxs)(A.Grid.Col,{span:{base:12,sm:3},children:[(0,l.jsx)(k.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),W.map(e=>(0,l.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,l.jsx)(A.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(g,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(r),d=l.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
        <Schedule
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},_=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(_),[n,r]=(0,Y.useState)([]),[o,i]=(0,Y.useState)(!1),d=(0,Y.useRef)(1);return(0,l.jsxs)(A.Grid,{children:[(0,l.jsx)(A.Grid.Col,{span:{base:12,sm:3},children:(0,l.jsxs)(v.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:l}=JSON.parse(o),d=n.find(e=>String(e.id)===String(l));if(!d)return;let s=(0,a.default)(d.end).diff((0,a.default)(d.start),"minutes");t(e=>[...e,{title:d.title,duration:s,color:d.color||"blue"}]),r(e=>e.filter(e=>e.id!==d.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,l.jsx)(k.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,l.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,l.jsx)(k.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,l.jsx)(A.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(g,{events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(n),s=l.add(i.duration,"minutes");r(e=>[...e,{id:d.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
        <Schedule
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},N=(0,a.default)().format("YYYY-MM-DD"),z=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${N} 09:00:00`,end:`${N} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${N} 10:00:00`,end:`${N} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${N} 12:00:00`,end:`${N} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${z} 14:00:00`,end:`${z} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${z} 15:30:00`,end:`${z} 16:30:00`,color:"cyan"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(P),a=({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))};return(0,l.jsx)(g,{events:e,withEventsDragAndDrop:!0,onEventDrop:a,withEventResize:!0,onEventResize:a})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${tomorrow} 15:30:00\`,
    end: \`\${tomorrow} 16:30:00\`,
    color: 'cyan',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventUpdate = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Schedule
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventUpdate}
      withEventResize
      onEventResize={handleEventUpdate}
    />
  );
}
`},G=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("2024-01-15");return(0,l.jsx)(g,{view:"week",date:e,onDateChange:t,events:G})},code:`
import { useState } from 'react';
import { Schedule } from '@mantine/schedule';

const events = [
  {
    id: 'schedule-series',
    title: 'Weekly planning (series)',
    start: '2024-01-15 10:00:00',
    end: '2024-01-15 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16',
      exdate: ['2024-01-17 10:00:00'],
    },
  },
  {
    id: 'schedule-series-override',
    title: 'Weekly planning (moved one occurrence)',
    start: '2024-01-17 16:00:00',
    end: '2024-01-17 17:00:00',
    color: 'grape',
    recurringEventId: 'schedule-series',
    recurrenceId: '2024-01-17 10:00:00',
  },
  {
    id: 'schedule-one-off',
    title: 'One-off roadmap review',
    start: '2024-01-18 12:00:00',
    end: '2024-01-18 13:00:00',
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState('2024-01-15');
  return <Schedule view="week" date={date} onDateChange={setDate} events={events} />;
}
`},J=(0,a.default)().format("YYYY-MM-DD"),K=[{id:"lunch-block",title:"Lunch break",start:`${J} 12:00:00`,end:`${J} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${J} 14:00:00`,end:`${J} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${J} 10:00:00`,end:`${J} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${J} 14:30:00`,end:`${J} 15:30:00`,color:"green"}],Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(J);return(0,l.jsx)(g,{date:e,onDateChange:t,events:K})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
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
    <Schedule
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}
`};var Q=e.i(428127),q=e.i(441058);let X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,Y.useState)("week"),i=function(e,t){let n=(0,a.default)(e);switch(t){case"day":return{previous:n.subtract(1,"day"),next:n.add(1,"day")};case"week":return{previous:n.subtract(1,"week"),next:n.add(1,"week")};case"month":return{previous:n.subtract(1,"month").startOf("month"),next:n.add(1,"month").startOf("month")};case"year":return{previous:n.subtract(1,"year").startOf("year"),next:n.add(1,"year").startOf("year")};default:return{previous:n,next:n}}}(e,n);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(Q.ScheduleHeader,{children:[(0,l.jsx)(Q.ScheduleHeader.Previous,{onClick:()=>t(i.previous.format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let n=(0,a.default)(e);switch(t){case"day":return n.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,q.getStartOfWeek)({date:e,firstDayOfWeek:1})),n=t.add(6,"day");if(t.month()===n.month())return`${t.format("MMM D")} – ${n.format("D, YYYY")}`;return`${t.format("MMM D")} – ${n.format("MMM D, YYYY")}`}case"month":return n.format("MMMM YYYY");case"year":return n.format("YYYY");default:return""}}(e,n)}),(0,l.jsx)(Q.ScheduleHeader.Next,{onClick:()=>t(i.next.format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,l.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,l.jsx)(Q.ScheduleHeader.ViewSelect,{value:n,onChange:r})})]}),(0,l.jsx)(g,{date:e,onDateChange:t,view:n,onViewChange:r,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DateStringValue,
  getStartOfWeek,
  Schedule,
  ScheduleHeader,
  ScheduleViewLevel,
} from '@mantine/schedule';
import { events } from './data';

function getNavigationHandlers(
  date: DateStringValue,
  view: ScheduleViewLevel
) {
  const d = dayjs(date);
  switch (view) {
    case 'day':
      return {
        previous: d.subtract(1, 'day'),
        next: d.add(1, 'day'),
      };
    case 'week':
      return {
        previous: d.subtract(1, 'week'),
        next: d.add(1, 'week'),
      };
    case 'month':
      return {
        previous: d.subtract(1, 'month').startOf('month'),
        next: d.add(1, 'month').startOf('month'),
      };
    case 'year':
      return {
        previous: d.subtract(1, 'year').startOf('year'),
        next: d.add(1, 'year').startOf('year'),
      };
  }
}

function getHeaderLabel(date: DateStringValue, view: ScheduleViewLevel) {
  const d = dayjs(date);
  switch (view) {
    case 'day':
      return d.format('dddd, MMMM D, YYYY');
    case 'week': {
      const start = dayjs(
        getStartOfWeek({ date, firstDayOfWeek: 1 })
      );
      const end = start.add(6, 'day');
      if (start.month() === end.month()) {
        return \`\${start.format('MMM D')} – \${end.format('D, YYYY')}\`;
      }
      return \`\${start.format('MMM D')} – \${end.format('MMM D, YYYY')}\`;
    }
    case 'month':
      return d.format('MMMM YYYY');
    case 'year':
      return d.format('YYYY');
  }
}

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );
  const [view, setView] = useState<ScheduleViewLevel>('week');

  const nav = getNavigationHandlers(date, view);

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              nav.previous.format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {getHeaderLabel(date, view)}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              nav.next.format('YYYY-MM-DD') as DateStringValue
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
        <ScheduleHeader.Control onClick={() => window.print()}>
          Print
        </ScheduleHeader.Control>
        <div style={{ marginInlineStart: 'auto' }}>
          <ScheduleHeader.ViewSelect
            value={view}
            onChange={setView}
          />
        </div>
      </ScheduleHeader>

      <Schedule
        date={date}
        onDateChange={setDate}
        view={view}
        onViewChange={setView}
        events={events}
        dayViewProps={{ withHeader: false }}
        weekViewProps={{ withHeader: false }}
        monthViewProps={{ withHeader: false }}
        yearViewProps={{ withHeader: false }}
      />
    </div>
  );
}
`};var ee=(0,t.__exportAll)({backgroundEvents:()=>Z,bidirectionalDragDrop:()=>L,controlled:()=>V,customHeader:()=>X,defaultView:()=>j,dragDrop:()=>E,eventForm:()=>B,eventResize:()=>F,externalDragDrop:()=>R,recurringEvents:()=>U,responsiveLayout:()=>T,usage:()=>x,viewProps:()=>C});e.s(["ScheduleDemos",0,ee],238715)}]);