(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,613490,e=>{"use strict";var t=e.i(86473),r=e.i(27748),a=e.i(898496),o=e.i(4332),s=e.i(688785),n=e.i(664397),i=e.i(969610),l=e.i(792930),d=e.i(505696),c=e.i(657068),u=e.i(420924),m=e.i(640542),v=e.i(176304),D=e.i(461304),p=e.i(783261),g=e.i(376879),f=e.i(201867),h=e.i(891343),w=e.i(67312),y=e.i(966696),S=e.i(672654),x=e.i(42916),T=e.i(494834),E=e.i(191788),b=e.i(367752),M=e.i(578373),Y=e.i(232471),V=e.i(284629),I=e.i(391398);function R({resource:e,resourceIndex:r,date:a,slots:o,getStyles:s,children:n,labels:i,highlightBusinessHours:l,businessHours:c,withEventsDragAndDrop:u,onRowSlotsDragOver:m,onRowSlotsDragLeave:v,onRowSlotsDrop:D,onSlotClick:p,dropTargetSlotIndex:g,mode:f,slotsRef:h,firstSlotIndex:w,onSlotKeyDown:y,withDragSlotSelect:S,onSlotPointerDown:x,isSlotDragSelected:T,rowSlotsContainerRef:E,renderResourceLabel:b,renderGroupLabel:M,scrolledX:C,groupInfo:$,allDayCount:k}){let j=String(e.id),P=o.map((o,n)=>{let m=g===n,v=w?.resourceIndex===r&&w?.slotIndex===n,D=T?.(n,j)||!1;return(0,I.jsx)(V.UnstyledButton,{ref:e=>{if(!h?.current)return;h.current[r]||(h.current[r]=[]);let t=h.current[r];if(e)t[n]=e;else for(delete t[n];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesDayViewRowSlot"),mod:{"hour-start":o.isHourStart,...(0,d.getBusinessHoursMod)({time:o.startTime,businessHours:c,highlightBusinessHours:l}),"drop-target":m,"drag-selected":D,static:"static"===f},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${a} ${o.startTime} - ${o.endTime}`,tabIndex:"static"===f?-1:v?0:-1,"data-drag-slot-index":S&&"static"!==f?n:void 0,"data-drag-slot-group":S&&"static"!==f?j:void 0,onKeyDown:e=>{y&&y(e,r,n)},onPointerDown:S&&"static"!==f?e=>x?.(e,n,j):void 0,onClick:"static"!==f&&p?t=>p(e.id,o.startTime,t):void 0,onDragOver:u&&"static"!==f?e=>e.preventDefault():void 0},o.startTime)}),O=$?.position==="first"||$?.position==="only",L=void 0!==$?null!==$?(0,I.jsx)(Y.Box,{...s("resourcesDayViewGroupColumn"),mod:{"scrolled-x":C,"group-position":$.position},children:O&&(0,I.jsx)("span",{style:$.count>1?{transform:`translateY(calc((${$.count-1} * (var(--resources-day-view-row-height) + 1px)) / 2))`}:void 0,children:M?M($.group):$.group.label})}):(0,I.jsx)(Y.Box,{...s("resourcesDayViewGroupColumnEmpty"),mod:{"scrolled-x":C}}):null;return(0,I.jsxs)(Y.Box,{...s("resourcesDayViewRow"),children:[L,(0,I.jsx)(Y.Box,{...s("resourcesDayViewResourceLabel"),mod:{"scrolled-x":C,"has-groups":void 0!==$},children:b?b(e):e.label}),(0,I.jsxs)(Y.Box,{ref:E,...s("resourcesDayViewRowSlots",{style:k?{minHeight:`max(var(--resources-day-view-row-height), calc(${k} * (var(--resources-day-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:u&&"static"!==f?t=>m?.(t,e.id,r):void 0,onDragLeave:u&&"static"!==f?v:void 0,onDrop:u&&"static"!==f?t=>D?.(t,e.id,r):void 0,children:[n,P]})]})}var C={resourcesDayView:"m_25154d8d",resourcesDayViewRoot:"m_d790b40f",resourcesDayViewScrollArea:"m_d54c5a67",resourcesDayViewInner:"m_1a0680c9",resourcesDayViewTimeLabelsRow:"m_26532081",resourcesDayViewCorner:"m_1c9c8e42",resourcesDayViewTimeLabel:"m_de91b51a",resourcesDayViewRow:"m_6a0ced0d",resourcesDayViewResourceLabel:"m_ac632f9",resourcesDayViewGroupColumn:"m_6c75eae8",resourcesDayViewGroupColumnEmpty:"m_f2903b45",resourcesDayViewRowSlots:"m_84f29928",resourcesDayViewRowSlot:"m_90acfcab",resourcesDayViewCurrentTimeIndicator:"m_3f0b79f6",resourcesDayViewCurrentTimeIndicatorLine:"m_7855b30a",resourcesDayViewCurrentTimeIndicatorThumb:"m_92d11180",resourcesDayViewCurrentTimeIndicatorTimeBubble:"m_e2aac04f",resourcesDayViewBackgroundEvent:"m_9cc838bf",resourcesDayViewAllDayEvent:"m_d6d6dd52",resourcesDayViewResizeHandle:"m_97715629",resourcesDayViewEventWrapper:"m_93bc1ec6"},$=e.i(19300),k=e.i(481178),j=e.i(275519),P=e.i(433512),O=e.i(779177),L=e.i(951254),B=e.i(44091),_=e.i(62904),z=e.i(391466),A=e.i(822933),H=e.i(417241),N=e.i(332977),W=e.i(205693);let F={__staticSelector:"ResourcesDayView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,headerFormat:"MMMM D, YYYY",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default",maxEventsPerTimeSlot:2},G=(0,k.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:a,groupLabelWidth:o})=>({resourcesDayView:{"--resources-day-view-radius":t?(0,P.getRadius)(t):void 0,"--resources-day-view-slot-width":(0,O.rem)(r),"--resources-day-view-row-height":(0,O.rem)(a),"--resources-day-view-group-label-width":(0,O.rem)(o)}})),U=(0,j.factory)(e=>{let V=(0,B.useProps)("ResourcesDayView",F,e),{classNames:k,className:j,style:P,styles:O,unstyled:U,attributes:K,vars:J,startTime:q,endTime:X,date:Q,onDateChange:Z,resources:ee,intervalMinutes:et,slotLabelFormat:er,radius:ea,startScrollTime:eo,scrollAreaProps:es,locale:en,withCurrentTimeIndicator:ei,withCurrentTimeBubble:el=!0,__staticSelector:ed,withHeader:ec,onViewChange:eu,previousControlProps:em,nextControlProps:ev,todayControlProps:eD,viewSelectProps:ep,headerFormat:eg,events:ef,slotWidth:eh,rowHeight:ew,labels:ey,highlightBusinessHours:eS,businessHours:ex,renderEventBody:eT,renderEvent:eE,renderResourceLabel:eb,groups:eM,renderGroupLabel:eY,groupLabelWidth:eV,withEventsDragAndDrop:eI,onEventDrop:eR,canDragEvent:eC,onEventDragStart:e$,onEventDragEnd:ek,onTimeSlotClick:ej,onEventClick:eP,withDragSlotSelect:eO,onSlotDragEnd:eL,mode:eB,onExternalEventDrop:e_,withEventResize:ez,onEventResize:eA,canResizeEvent:eH,recurrenceExpansionLimit:eN,maxEventsPerTimeSlot:eW,moreEventsProps:eF,...eG}=V,eU=void 0!==eW?Math.max(1,eW):void 0,eK=(0,z.useStyles)({name:ed,classes:C,props:V,className:j,style:P,classNames:k,styles:O,unstyled:U,vars:J,varsResolver:G,attributes:K,rootSelector:"resourcesDayView"}),{resolvedClassNames:eJ,resolvedStyles:eq}=(0,_.useResolvedStylesApi)({classNames:k,styles:O,props:V}),eX={classNames:eJ,styles:eq,attributes:K,__staticSelector:ed,radius:ea},eQ=(0,L.useMantineTheme)(),[eZ,e0]=(0,E.useState)(!1),[e1,e8]=(0,E.useState)(!1),e2=(0,W.useDatesContext)(),e3=(0,a.getDayTimeIntervals)({startTime:q,endTime:X,intervalMinutes:et}),{orderedResources:e4,groupRanges:e6,resourceGroupMap:e9}=(0,E.useMemo)(()=>(0,u.getOrderedResources)(ee,eM),[ee,eM]),e7=e6.length>0,e5=(0,E.useCallback)((e,t)=>{if(!e_)return;let r=(0,T.default)(Q).format("YYYY-MM-DD");e_({dataTransfer:e.dataTransfer,dropDateTime:`${r} ${e3[t.slotIndex].startTime}`,resourceId:t.resourceId})},[e_,e3,Q]),te=(0,E.useRef)(void 0),tt=(0,p.useDragDropHandlers)({enabled:eI,mode:eB,onEventDrop:(0,E.useCallback)(e=>{eR?.({...e,resourceId:te.current})},[eR]),canDragEvent:eC,onEventDragStart:e$,onEventDragEnd:ek,calculateDropTarget:(e,t)=>{te.current=e.resourceId;let r=e3[e.slotIndex].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:(0,T.default)(Q).format("YYYY-MM-DD"),targetSlotTime:r,intervalMinutes:et})},onExternalDrop:e_?e5:void 0}),tr=(0,E.useMemo)(()=>(0,v.getGroupToResourceIdMap)(ee),[ee]),ta=(0,g.useSlotDragSelect)({enabled:eO&&"static"!==eB,onDragEnd:(e,t,r)=>{if(!eL)return;let a=(0,T.default)(Q).format("YYYY-MM-DD");eL({rangeStart:`${a} ${e3[e].startTime}`,rangeEnd:`${a} ${e3[t].endTime}`,resourceId:tr.get(r)??r})}}),to=function({enabled:e=!1,mode:t="default",startTime:r,endTime:a,intervalMinutes:o,onEventResize:s,canResizeEvent:n}){let[i,l]=(0,E.useState)(null),d=(0,E.useRef)(null),c=(0,E.useRef)(!1),u=(0,E.useEffectEvent)(s||(()=>{})),m=(0,x.parseTimeString)(r),v=(0,x.parseTimeString)(a),D=60*m.hours+m.minutes,p=60*v.hours+v.minutes,g=(0,S.clampIntervalMinutes)(o),f=p-D,h=Math.ceil(f/g)*g,w=g/h*100,y=(0,E.useCallback)(e=>Math.max(0,Math.min(f,Math.round(e/g)*g)),[f,g]),b=(0,E.useCallback)((e,t)=>{let r=D+y(e/100*h),a=Math.floor(r/60);return`${t} ${String(a).padStart(2,"0")}:${String(r%60).padStart(2,"0")}:00`},[h,D,y]),M=(0,E.useCallback)(e=>y(e/100*h)/h*100,[h,y]),Y=(0,E.useCallback)(({event:r,edge:a,container:o,originalLeft:s,originalWidth:n,eventDate:i,pointerEvent:c})=>{if(!e||"static"===t)return;c.preventDefault(),c.stopPropagation();let u={eventId:r.id,event:r,edge:a,container:o,originalLeft:s,originalWidth:n,currentLeft:s,currentWidth:n,eventDate:i,originalStart:(0,T.default)(r.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,T.default)(r.end).format("YYYY-MM-DD HH:mm:ss")};d.current=u,l(u)},[e,t]),V=null!==i;(0,E.useEffect)(()=>{if(!V)return;let e=document.body.style.userSelect,t=document.body.style.cursor;document.body.style.userSelect="none",document.body.style.cursor="ew-resize";let r=e=>{let t=d.current;if(!t)return;let r=t.container.getBoundingClientRect(),a=M(Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100))),o=t.originalLeft,s=t.originalWidth;if("end"===t.edge)s=Math.max(w,a-t.originalLeft);else{let e=t.originalLeft+t.originalWidth;o=Math.min(a,e-w),s=e-o}d.current={...t,currentLeft:o,currentWidth:s},l(d.current)},a=()=>{let e=d.current;if(e&&(e.currentLeft!==e.originalLeft||e.currentWidth!==e.originalWidth)){let t,r;"start"===e.edge?(t=b(e.currentLeft,e.eventDate),r=e.originalEnd):(t=e.originalStart,r=b(e.currentLeft+e.currentWidth,e.eventDate)),u({eventId:e.eventId,newStart:t,newEnd:r,event:e.event})}d.current=null,l(null),c.current=!0,requestAnimationFrame(()=>{c.current=!1})};return document.addEventListener("pointermove",r),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.body.style.cursor=t,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",a)}},[V]);let I=(0,E.useCallback)(e=>i&&i.eventId===e?{left:i.currentLeft,width:i.currentWidth}:null,[i]),R=(0,E.useCallback)(r=>!!e&&"static"!==t&&"background"!==r.display&&(!n||n(r)),[e,t,n]),C=(0,E.useCallback)(()=>c.current,[]);return{handleResizeStart:Y,isResizing:V,resizingEventId:i?.eventId??null,resizingEdge:i?.edge??null,getResizePosition:I,isResizableEvent:R,wasResizing:C}}({enabled:ez,mode:eB,startTime:q,endTime:X,intervalMinutes:et,onEventResize:eA,canResizeEvent:eH}),ts=(eI||!!e_)&&"static"!==eB,tn=(e,t,r)=>{if(!ej)return;let a=(0,T.default)(Q).format("YYYY-MM-DD"),o=e3.findIndex(e=>e.startTime===t);if(-1===o)return;let s=e3[o];ej({slotStart:`${a} ${s.startTime}`,slotEnd:`${a} ${s.endTime}`,nativeEvent:r,resourceId:e})},ti=(0,T.default)(Q).format("YYYY-MM-DD"),tl=(0,T.default)(Q).isSame((0,T.default)(),"day"),[td,tc]=(0,E.useState)((0,s.getCurrentTimePosition)({startTime:q,endTime:X,intervalMinutes:et}));(0,A.useInterval)(()=>tc((0,s.getCurrentTimePosition)({startTime:q,endTime:X,intervalMinutes:et})),6e4,{autoInvoke:!0});let tu=(ei??tl)&&(0,n.isInTimeRange)({date:(0,T.default)().toDate(),startTime:q,endTime:X}),tm=el?(0,r.formatDate)({locale:e2.getLocale(en),date:(0,T.default)(),format:er}):"",tv=(0,E.useMemo)(()=>(0,c.expandRecurringEvents)({events:ef,rangeStart:(0,T.default)(Q).startOf("day").toDate(),rangeEnd:(0,T.default)(Q).endOf("day").toDate(),expansionLimit:eN}),[ef,Q,eN]),tD=(0,E.useMemo)(()=>(0,M.getResourcesDayViewEvents)({date:Q,events:tv,resources:ee,startTime:q,endTime:X}),[Q,tv,ee,q,X]),tp=e3.map(e=>{let t=(0,r.formatDate)({date:(0,T.default)(`${ti} ${e.startTime}`),locale:e2.getLocale(en),format:er});return(0,E.createElement)(Y.Box,{...eK("resourcesDayViewTimeLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:ex,highlightBusinessHours:eS})}},t)}),tg=(0,E.useRef)([]),tf=(0,E.useRef)([]),th=(0,E.useRef)(null),tw=(0,N.useMergedRef)(th,es?.viewportRef),ty={resourceIndex:0,slotIndex:0};(0,H.useIsomorphicEffect)(()=>{if(!eo||!th.current)return;let e=tg.current[0];if(!e||0===e.length)return;let t=e3.findIndex(e=>e.startTime>=eo);if(t<0)return;let r=e[t];if(!r)return;let a=r.getBoundingClientRect(),o=th.current.getBoundingClientRect(),s=th.current.querySelector(`.${C.resourcesDayViewCorner}`),n=s?s.getBoundingClientRect().width:0;th.current.scrollTo({left:a.left-o.left-n,top:0})},[]);let tS=(0,E.useCallback)((e,t)=>(0,D.getIndexFromDragPoint)(tg.current[t]??[],e.clientX),[]),tx=(e,t,r)=>{(0,m.handleResourcesGridKeyDown)({controlsRef:tg,resourceIndex:t,slotIndex:r,event:e})},tT=e4.map((e,t)=>{let r=[...tD.backgroundTimedEvents[e.id]||[],...tD.backgroundAllDayEvents[e.id]||[]].map(e=>{let t=eQ.variantColorResolver({color:e.color||eQ.primaryColor,theme:eQ,variant:"light",autoContrast:!0}),r="function"==typeof eT?eT(e):e.title,a={key:`bg-${e.id}`,...eK("resourcesDayViewBackgroundEvent",{style:{left:`${e.position.top}%`,width:`${e.position.height}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:r};return"function"==typeof eE?eE(e,a):(0,I.jsx)(Y.Box,{...a})}),a=(tD.regularEvents[e.id]||[]).filter(e=>!(0,i.isAllDayEvent)({event:e,date:Q})),o=(void 0!==eU?a.filter(e=>e.position.column<eU):a).map(e=>{let r=tt.isDraggableEvent(e),a=to.isResizableEvent(e),o=to.getResizePosition(e.id),s=o?o.left:e.position.top,n=o?o.width:e.position.height,i=void 0!==eU&&e.position.overlaps>eU,l=a?eQ.variantColorResolver({color:e.color||eQ.primaryColor,theme:eQ,variant:e.variant||"light",autoContrast:!0}):null,d=null!==o,c=d&&to.resizingEdge?to.resizingEdge:null;return(0,I.jsxs)(Y.Box,{...eK("resourcesDayViewEventWrapper"),__vars:l?{"--event-color":l.color}:void 0,"data-resizing":d||void 0,style:{left:`calc(${s}% + 1px)`,top:i?`calc((100% - 22px) * ${e.position.column} / ${eU})`:`${e.position.offset}%`,width:`calc(${n}% - 2px)`,height:i?`calc((100% - 22px) / ${eU})`:`${e.position.width}%`},children:[(0,I.jsx)(h.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:r,isResizing:d,renderEventBody:eT,renderEvent:eE,radius:ea,mode:eB,onClick:eP?t=>{to.wasResizing()||eP(e,t)}:void 0,style:{width:"100%",height:"100%"}}),a&&"static"!==eB&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{...eK("resourcesDayViewResizeHandle"),"data-edge":"start","data-active":"start"===c||void 0,onPointerDown:r=>{let a=tf.current[t];a&&to.handleResizeStart({event:e,edge:"start",container:a,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ti,pointerEvent:r})}}),(0,I.jsx)("div",{...eK("resourcesDayViewResizeHandle"),"data-edge":"end","data-active":"end"===c||void 0,onPointerDown:r=>{let a=tf.current[t];a&&to.handleResizeStart({event:e,edge:"end",container:a,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ti,pointerEvent:r})}})]})]},e.id)}),s=tD.allDayEvents[e.id]||[],n=s.map((e,t)=>(0,I.jsx)(Y.Box,{...eK("resourcesDayViewAllDayEvent",{style:{top:`calc(${t} * (var(--resources-day-view-all-day-height) + 2px) + 2px)`}}),children:(0,I.jsx)(h.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,renderEventBody:eT,renderEvent:eE,radius:ea,mode:eB,onClick:eP?t=>eP(e,t):void 0,style:{width:"100%",height:"100%"}})},`all-day-${e.id}`)),l=void 0!==eU?(0,b.getOverlapClusters)(a).filter(e=>e.some(e=>e.position.column>=eU)).map(e=>{let t=e.filter(e=>e.position.column>=eU).length,r=Math.min(...e.map(e=>e.position.top)),a=Math.max(...e.map(e=>e.position.top+e.position.height));return(0,I.jsx)(w.MoreEvents,{events:e,moreEventsCount:t,mode:eB,labels:ey,renderEventBody:eT,renderEvent:eE,onEventClick:eP,style:{position:"absolute",left:`calc(${r}% + 1px)`,width:`calc(${a-r}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...eX,...eF},`more-${e[0].id}`)}):[];return(0,I.jsxs)(R,{resource:e,resourceIndex:t,date:ti,slots:e3,getStyles:eK,labels:ey,highlightBusinessHours:eS,businessHours:ex,withEventsDragAndDrop:ts,mode:eB,slotsRef:tg,firstSlotIndex:ty,onSlotKeyDown:tx,onSlotClick:tn,onRowSlotsDragOver:(e,t,r)=>{let a=tS(e,r);null!==a&&tt.handleDragOver(e,{resourceId:t,slotIndex:a})},onRowSlotsDragLeave:tt.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let a=tS(e,r);null!==a&&tt.handleDrop(e,{resourceId:t,slotIndex:a})},dropTargetSlotIndex:tt.dropTarget?.resourceId===e.id?tt.dropTarget.slotIndex:void 0,withDragSlotSelect:eO,onSlotPointerDown:ta.handleSlotPointerDown,isSlotDragSelected:ta.isSlotSelected,rowSlotsContainerRef:e=>{tf.current[t]=e},renderResourceLabel:eb,renderGroupLabel:eY,scrolledX:e1,groupInfo:e7?e9[t]:void 0,allDayCount:s.length,children:[r,n,o,l]},e.id)}),tE=(0,r.formatDate)({date:(0,T.default)(Q),locale:e2.getLocale(en),format:eg}),tb=(0,I.jsxs)(Y.Box,{...eK("resourcesDayView"),mod:{static:"static"===eB,"slot-dragging":ta.isDragging,resizing:to.isResizing,"event-interaction":to.isResizing||tt.dragContextValue.isDragging},...eG,children:[ec&&(0,I.jsx)(y.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,T.default)(Q).subtract(1,"day")),next:()=>(0,o.toDateString)((0,T.default)(Q).add(1,"day")),today:()=>(0,o.toDateString)((0,T.default)())},control:{miw:140,title:tE},labels:ey,onDateChange:Z,onViewChange:eu,previousControlProps:em,nextControlProps:ev,todayControlProps:eD,viewSelectProps:{views:["day","week","month"],...ep},stylesApiProps:eX}),(0,I.jsx)(Y.Box,{...eK("resourcesDayViewRoot"),children:(0,I.jsx)($.ScrollArea,{scrollbarSize:4,...es,...eK("resourcesDayViewScrollArea",{className:es?.className,style:es?.style}),onScrollPositionChange:e=>{es?.onScrollPositionChange?.(e),e0(0!==e.y),e8(0!==e.x)},viewportRef:tw,children:(0,I.jsxs)("div",{...eK("resourcesDayViewInner"),children:[(0,I.jsxs)(Y.Box,{...eK("resourcesDayViewTimeLabelsRow"),mod:{scrolled:eZ},children:[(0,E.createElement)("div",{...eK("resourcesDayViewCorner"),key:"corner",style:e7?{flexBasis:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))",minWidth:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ey)),tp]}),tT,tu&&(0,I.jsxs)(Y.Box,{...eK("resourcesDayViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":e7?`calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width) + (100% - var(--resources-day-view-resource-label-width) - var(--resources-day-view-group-label-width)) * ${td} / 100)`:`calc(var(--resources-day-view-resource-label-width) + (100% - var(--resources-day-view-resource-label-width)) * ${td} / 100)`,"--_time-bubble-width":tm?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[el&&(0,I.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorTimeBubble"),children:tm}),!el&&(0,I.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorThumb")}),(0,I.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorLine")})]})]})})})]}),tM=(0,E.useMemo)(()=>tt.dragContextValue,[tt.dragContextValue]);return eI?(0,I.jsx)(f.DragContext.Provider,{value:tM,children:tb}):tb});U.displayName="@mantine/schedule/ResourcesDayView",U.classes=C,U.varsResolver=G,e.s(["ResourcesDayView",0,U],613490)},272013,e=>{"use strict";var t=e.i(86473),r=e.i(27748),a=e.i(4332),o=e.i(276995),s=e.i(657068),n=e.i(420924),i=e.i(176304),l=e.i(461304),d=e.i(783261),c=e.i(376879),u=e.i(201867),m=e.i(891343),v=e.i(67312),D=e.i(966696),p={resourcesMonthView:"m_652b3acd",resourcesMonthViewRoot:"m_146e014f",resourcesMonthViewScrollArea:"m_b1cab7a7",resourcesMonthViewInner:"m_78d2db89",resourcesMonthViewDayLabelsRow:"m_eae51c8c",resourcesMonthViewCorner:"m_975b8b82",resourcesMonthViewDayLabel:"m_bc016ea5",resourcesMonthViewDayLabelWeekday:"m_52a1c4c3",resourcesMonthViewDayLabelNumber:"m_88d8e64e",resourcesMonthViewRow:"m_21b0f7cd",resourcesMonthViewResourceLabel:"m_1febcdb9",resourcesMonthViewGroupColumn:"m_1fc335a8",resourcesMonthViewGroupColumnEmpty:"m_d5a3a885",resourcesMonthViewRowSlots:"m_4be74668",resourcesMonthViewCell:"m_146709cf"},g=e.i(494834),f=e.i(232471),h=e.i(19300),w=e.i(284629),y=e.i(481178),S=e.i(275519),x=e.i(433512),T=e.i(779177),E=e.i(44091),b=e.i(62904),M=e.i(391466),Y=e.i(417241),V=e.i(332977),I=e.i(191788),R=e.i(205693),C=e.i(391398);let $=(0,y.createVarsResolver)((e,{radius:t,dayWidth:r,rowHeight:a,groupLabelWidth:o})=>({resourcesMonthView:{"--resources-month-view-radius":t?(0,x.getRadius)(t):void 0,"--resources-month-view-day-width":(0,T.rem)(r),"--resources-month-view-row-height":(0,T.rem)(a),"--resources-month-view-group-label-width":(0,T.rem)(o)}})),k={__staticSelector:"ResourcesMonthView",highlightToday:!0,withHeader:!0,weekdayFormat:"ddd",withWeekendDays:!0,withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"};function j(e,t){let r=(0,g.default)(e.start),a=(0,g.default)(t.start),o=(0,g.default)(e.end).startOf("day").diff(r.startOf("day"),"day"),s=(0,g.default)(t.end).startOf("day").diff(a.startOf("day"),"day");return o!==s?s-o:r.valueOf()-a.valueOf()}function P(e){return(0,g.default)(e.end).startOf("day").isAfter((0,g.default)(e.start).startOf("day"))}let O=(0,S.factory)(e=>{let y=(0,E.useProps)("ResourcesMonthView",k,e),{classNames:S,className:x,style:T,styles:O,unstyled:L,attributes:B,vars:_,mod:z,date:A,onDateChange:H,resources:N,locale:W,weekdayFormat:F,weekendDays:G,withWeekendDays:U,startScrollDate:K,__staticSelector:J,onDayClick:q,highlightToday:X,radius:Q,withHeader:Z,monthYearSelectProps:ee,onViewChange:et,todayControlProps:er,nextControlProps:ea,previousControlProps:eo,viewSelectProps:es,events:en,dayWidth:ei,rowHeight:el,renderResourceLabel:ed,groups:ec,renderGroupLabel:eu,groupLabelWidth:em,renderEventBody:ev,renderEvent:eD,withEventsDragAndDrop:ep,onEventDrop:eg,canDragEvent:ef,onEventDragStart:eh,onEventDragEnd:ew,onEventClick:ey,withDragSlotSelect:eS,onSlotDragEnd:ex,labels:eT,mode:eE,scrollAreaProps:eb,onExternalEventDrop:eM,maxEventsPerTimeSlot:eY,moreEventsProps:eV,recurrenceExpansionLimit:eI,...eR}=y,eC=Math.min(10,Math.max(1,eY??2)),e$=(0,M.useStyles)({name:J,classes:p,props:y,className:x,style:T,classNames:S,styles:O,unstyled:L,attributes:B,vars:_,varsResolver:$,rootSelector:"resourcesMonthView"}),{resolvedClassNames:ek,resolvedStyles:ej}=(0,b.useResolvedStylesApi)({classNames:S,styles:O,props:y}),eP={classNames:ek,styles:ej,attributes:B,__staticSelector:J,radius:Q},eO=(0,R.useDatesContext)(),eL=eO.getWeekendDays(G),{orderedResources:eB,groupRanges:e_,resourceGroupMap:ez}=(0,I.useMemo)(()=>(0,n.getOrderedResources)(N,ec),[N,ec]),eA=e_.length>0,eH=(0,I.useMemo)(()=>{let e=(0,g.default)(A).startOf("month"),t=e.endOf("month").date(),r=eO.getWeekendDays(G),a=[];for(let o=1;o<=t;o++){let t=e.date(o);!U&&r.includes(t.day())||a.push(t.format("YYYY-MM-DD"))}return a},[A,U,G,eO]),eN=(0,I.useRef)(null),eW=(0,V.useMergedRef)(eN,eb?.viewportRef),eF=(0,I.useRef)([]),eG=(0,I.useRef)(null),eU=(0,I.useCallback)(e=>{if(!eN.current)return;let t=eH.indexOf(e);if(t<0)return;let r=eF.current[t];if(!r)return;let a=r.getBoundingClientRect(),o=eN.current.getBoundingClientRect(),s=eG.current?.getBoundingClientRect().width??0;eN.current.scrollTo({left:a.left-o.left-s,top:0})},[eH]);(0,Y.useIsomorphicEffect)(()=>{K&&eU(K)},[]);let eK=(0,I.useMemo)(()=>(0,s.expandRecurringEvents)({events:en,rangeStart:(0,g.default)(A).startOf("month").toDate(),rangeEnd:(0,g.default)(A).endOf("month").toDate(),expansionLimit:eI}),[en,A,eI]),{eventsByResourceAndDay:eJ,eventLayoutByResource:eq}=(0,I.useMemo)(()=>{let e={};for(let t of N)for(let r of(e[t.id]={},eH))e[t.id][r]=[];if(eK)for(let t of eK){if(void 0===t.resourceId||!(t.resourceId in e))continue;let r=(0,g.default)(t.start),a=(0,g.default)(t.end);for(let o of eH){let s=(0,g.default)(o).startOf("day"),n=(0,g.default)(o).endOf("day");r.isBefore(n)&&a.isAfter(s)&&e[t.resourceId][o].push(t)}}let t={},r=(0,g.default)(eH[0]).startOf("day"),a=(0,g.default)(eH[eH.length-1]).add(1,"day").startOf("day");for(let o of N){let s={},n=new Map,i=new Map,l=new Map;eH.forEach((t,r)=>{let a=e[o.id][t];for(let e of(a.sort(j),a)){let t=l.get(e.id);t?t.days.push(r):l.set(e.id,{event:e,days:[r]})}let d=new Set,c=[],u=0;for(let e of a){let t=n.get(e.id);if((void 0===t||t>=eC||d.has(t))&&(t=function(e,t){for(let r=0;r<t;r+=1)if(!e.has(r))return r;return null}(d,eC)),null===t){u+=1;continue}d.add(t),c.push({event:e,row:t}),i.has(e.id)||i.set(e.id,new Map),i.get(e.id).set(r,t),n.set(e.id,t)}s[t]={visible:c,hiddenCount:u}});let d=[];for(let{event:e,days:t}of l.values()){if(!P(e))continue;let o=t[0],n=t[t.length-1],l=i.get(e.id),c=(0,g.default)(e.start).isBefore(r),u=(0,g.default)(e.end).isAfter(a),m=null,v=()=>{if(!m)return;let t=m.startDayIndex>o,r=m.endDayIndex<n,a=!t&&c,i=!r&&u,l=!1;for(let e=m.startDayIndex;e<=m.endDayIndex;e+=1)if((s[eH[e]]?.hiddenCount??0)>0){l=!0;break}d.push({event:e,startDayIndex:m.startDayIndex,endDayIndex:m.endDayIndex,row:m.row,clipStart:t,clipEnd:r,hanging:a&&i?"both":a?"start":i?"end":"none",hiddenInSpan:l}),m=null};for(let e=o;e<=n;e+=1){let t=l?.get(e);if(void 0===t){v();continue}m&&m.row===t&&m.endDayIndex===e-1?m.endDayIndex=e:(v(),m={startDayIndex:e,endDayIndex:e,row:t})}v()}t[o.id]={byDay:s,segments:d}}return{eventsByResourceAndDay:e,eventLayoutByResource:t}},[N,eH,eK,eC]),eX=(0,I.useCallback)((e,t)=>{eM&&eM({dataTransfer:e.dataTransfer,dropDateTime:`${(0,g.default)(t.day).format("YYYY-MM-DD")} 00:00:00`,resourceId:t.resourceId})},[eM]),eQ=(0,d.useDragDropHandlers)({enabled:ep,mode:eE,onEventDrop:e=>{eg?.({...e,resourceId:eZ.current})},canDragEvent:ef,onEventDragStart:eh,onEventDragEnd:ew,calculateDropTarget:(e,t)=>(eZ.current=e.resourceId,(0,o.calculateMonthDropDate)({draggedEvent:t,targetDay:e.day})),onExternalDrop:eM?eX:void 0}),eZ=(0,I.useRef)(void 0),e0=(ep||!!eM)&&"static"!==eE,e1=(0,I.useMemo)(()=>(0,i.getGroupToResourceIdMap)(N),[N]),e8=(0,c.useSlotDragSelect)({enabled:eS&&"static"!==eE,onDragEnd:(e,t,r)=>{if(!ex)return;let a=eH[e],o=eH[t];a&&o&&ex({rangeStart:(0,g.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),rangeEnd:(0,g.default)(o).endOf("day").format("YYYY-MM-DD HH:mm:ss"),resourceId:e1.get(r)??r})}}),e2=eH.map((e,t)=>{let a=(0,g.default)(e),o=eL.includes(a.day()),s=a.isSame((0,g.default)(),"day")&&X;return(0,I.createElement)(f.Box,{...e$("resourcesMonthViewDayLabel"),key:e,mod:{weekend:o,today:s},ref:e=>{eF.current[t]=e}},(0,C.jsx)("span",{...e$("resourcesMonthViewDayLabelWeekday"),children:(0,r.formatDate)({date:a,locale:eO.getLocale(W),format:F})}),(0,C.jsx)("span",{...e$("resourcesMonthViewDayLabelNumber"),children:a.date()}))}),e3=(0,I.useRef)([]),e4=(0,I.useCallback)((e,t)=>(0,l.getIndexFromDragPoint)(e3.current[t]??[],e.clientX),[]),e6=100/eC,e9=eB.map((e,t)=>{e3.current[t]||(e3.current[t]=[]);let r=String(e.id),a=eQ.dropTarget,o=eH.length,s=[],n=[],i=eH.map((i,l)=>{let d=(0,g.default)(i),c=eO.getWeekendDays(G).includes(d.day()),u=null!==a&&"object"==typeof a&&"day"in a&&a.day===i&&a.resourceId===e.id,D=e8.isSlotSelected(l,r),p=eJ[e.id]?.[i]||[],f=eq[e.id]?.byDay[i],h=f?.visible??[],y=f?.hiddenCount??0,S=0===t&&0===l,x=l/o*100,T=100/o,E=y>0&&"static"!==eE;return h.forEach(({event:e,row:t})=>{if(P(e))return;let r=eQ.isDraggableEvent(e),a=E?`calc((100% - 18px) * ${t} / ${eC} + 1px)`:`calc(${t*e6}% + 1px)`,o=E?`calc((100% - 18px) / ${eC} - 2px)`:`calc(${e6}% - 2px)`;s.push((0,C.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,size:"sm",draggable:r,renderEventBody:ev,renderEvent:eD,radius:Q,mode:eE,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:a,left:`calc(${x}% + 1px)`,width:`calc(${T}% - 2px)`,height:o,zIndex:3}},`${e.id}-${i}`))}),y>0&&"static"!==eE&&n.push((0,C.jsx)(v.MoreEvents,{events:p,moreEventsCount:y,mode:eE,labels:eT,renderEventBody:ev,renderEvent:eD,onEventClick:ey,style:{position:"absolute",bottom:1,left:`calc(${x}% + 1px)`,width:`calc(${T}% - 2px)`,height:18,zIndex:4},...eP,...eV},`more-${e.id}-${i}`)),(0,C.jsx)(w.UnstyledButton,{ref:e=>{e&&(e3.current[t]||(e3.current[t]=[]),e3.current[t][l]=e)},...e$("resourcesMonthViewCell"),"aria-label":`${e.label} ${d.format("MMMM D, YYYY")}`,"data-drag-slot-index":eS&&"static"!==eE?l:void 0,"data-drag-slot-group":eS&&"static"!==eE?r:void 0,mod:{weekend:c,"drop-target":u,"drag-selected":D,static:"static"===eE},tabIndex:"static"===eE?-1:S?0:-1,onClick:"static"===eE?void 0:t=>q?.({date:i,nativeEvent:t,resourceId:e.id}),onKeyDown:"static"===eE?void 0:e=>((e,t,r)=>{let a=e.key,o=t,s=r;if("ArrowRight"===a)s=Math.min(r+1,eH.length-1);else if("ArrowLeft"===a)s=Math.max(r-1,0);else if("ArrowDown"===a)o=Math.min(t+1,N.length-1);else{if("ArrowUp"!==a)return;o=Math.max(t-1,0)}e.preventDefault(),e3.current[o]?.[s]?.focus()})(e,t,l),onPointerDown:eS&&"static"!==eE?e=>e8.handleSlotPointerDown(e,l,r):void 0,onDragOver:e0?e=>e.preventDefault():void 0},i)});(eq[e.id]?.segments??[]).forEach(e=>{let t=eQ.isDraggableEvent(e.event),r=e.startDayIndex/o*100,a=(e.endDayIndex-e.startDayIndex+1)/o*100,n=e.hiddenInSpan&&"static"!==eE,i=n?`calc((100% - 18px) * ${e.row} / ${eC} + 1px)`:`calc(${e.row*e6}% + 1px)`,l=n?`calc((100% - 18px) / ${eC} - 2px)`:`calc(${e6}% - 2px)`;s.push((0,C.jsx)(m.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,size:"sm",hanging:e.hanging,draggable:t,renderEventBody:ev,renderEvent:eD,radius:Q,mode:eE,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ey?t=>ey(e.event,t):void 0,style:{position:"absolute",top:i,left:`calc(${r}% + 1px)`,width:`calc(${a}% - 2px)`,height:l,zIndex:3}},`${e.event.id}-segment-${e.startDayIndex}`))});let l=eA?ez[t]:void 0,d=l?.position==="first"||l?.position==="only",c=void 0!==l?null!==l?(0,C.jsx)(f.Box,{...e$("resourcesMonthViewGroupColumn"),mod:{"group-position":l.position},children:d&&(0,C.jsx)("span",{style:l.count>1?{transform:`translateY(calc((${l.count-1} * (var(--resources-month-view-row-height) + 1px)) / 2))`}:void 0,children:eu?eu(l.group):l.group.label})}):(0,C.jsx)(f.Box,{...e$("resourcesMonthViewGroupColumnEmpty")}):null;return(0,I.createElement)("div",{...e$("resourcesMonthViewRow"),key:e.id},c,(0,C.jsx)("div",{...e$("resourcesMonthViewResourceLabel"),"data-has-groups":eA||void 0,children:ed?ed(e):e.label}),(0,C.jsxs)("div",{...e$("resourcesMonthViewRowSlots"),onDragOver:e0?r=>{let a=e4(r,t);null!==a&&eH[a]&&eQ.handleDragOver(r,{day:eH[a],resourceId:e.id})}:void 0,onDragLeave:e0?eQ.handleDragLeave:void 0,onDrop:e0?r=>{let a=e4(r,t);null!==a&&eH[a]&&eQ.handleDrop(r,{day:eH[a],resourceId:e.id})}:void 0,children:[s,n,i]}))}),e7=(0,C.jsxs)(f.Box,{mod:[{static:"static"===eE,"slot-dragging":e8.isDragging,"event-interaction":eQ.dragContextValue.isDragging},z],...e$("resourcesMonthView"),...eR,children:[Z&&(0,C.jsx)(D.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,a.toDateString)((0,g.default)(A).subtract(1,"month").startOf("month")),next:()=>(0,a.toDateString)((0,g.default)(A).add(1,"month").startOf("month")),today:()=>(requestAnimationFrame(()=>{eU((0,g.default)().format("YYYY-MM-DD"))}),(0,a.toDateString)((0,g.default)()))},control:{monthYearSelect:{locale:W,yearValue:(0,g.default)(A).get("year"),monthValue:(0,g.default)(A).get("month"),onYearChange:e=>H?.((0,a.toDateString)((0,g.default)(A).set("year",e).startOf("month"))),onMonthChange:e=>H?.((0,a.toDateString)((0,g.default)(A).set("month",e).startOf("month"))),...ee}},labels:eT,onDateChange:H,onViewChange:et,previousControlProps:eo,nextControlProps:ea,todayControlProps:er,viewSelectProps:{views:["day","week","month"],...es},stylesApiProps:eP}),(0,C.jsx)(f.Box,{...e$("resourcesMonthViewRoot"),children:(0,C.jsx)(h.ScrollArea,{scrollbars:"x",scrollbarSize:4,...eb,...e$("resourcesMonthViewScrollArea",{className:eb?.className,style:eb?.style}),viewportRef:eW,children:(0,C.jsxs)("div",{...e$("resourcesMonthViewInner"),children:[(0,C.jsxs)("div",{...e$("resourcesMonthViewDayLabelsRow"),children:[(0,I.createElement)("div",{...e$("resourcesMonthViewCorner"),key:"corner",ref:eG,style:eA?{flexBasis:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))",minWidth:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eT)),e2]}),e9]})})})]});return ep?(0,C.jsx)(u.DragContext.Provider,{value:eQ.dragContextValue,children:e7}):e7});O.displayName="@mantine/schedule/ResourcesMonthView",O.classes=p,O.varsResolver=$,e.s(["ResourcesMonthView",0,O],272013)},853905,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let a=(0,r.default)().format("YYYY-MM-DD"),o=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(5,"day").format("YYYY-MM-DD"),n=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],i=[{id:1,title:"Team Standup",start:`${a} 09:00:00`,end:`${a} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${a} 10:00:00`,end:`${a} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${a} 09:30:00`,end:`${a} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${o} 13:00:00`,end:`${o} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${a} 11:00:00`,end:`${a} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${a} 10:00:00`,end:`${a} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${o} 15:00:00`,end:`${o} 16:00:00`,color:"grape",resourceId:"london"}],l="\nimport dayjs from 'dayjs';\nimport { ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\nconst nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n  { id: 'london', label: 'Meeting room: London' },\n];\n\nconst events = [\n  { id: 1, title: 'Team Standup', start: `${today} 09:00:00`, end: `${today} 09:30:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 4, title: 'Design Review', start: `${tomorrow} 13:00:00`, end: `${tomorrow} 14:00:00`, color: 'orange', resourceId: 'paris' },\n  { id: 5, title: '1:1 Meeting', start: `${today} 11:00:00`, end: `${today} 11:30:00`, color: 'cyan', resourceId: 'new-york' },\n  { id: 6, title: 'Workshop', start: `${nextWeek} 14:00:00`, end: `${nextWeek} 16:00:00`, color: 'pink', resourceId: 'new-york' },\n  { id: 7, title: 'Architecture Review', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'red', resourceId: 'london' },\n  { id: 8, title: 'Retrospective', start: `${tomorrow} 15:00:00`, end: `${tomorrow} 16:00:00`, color: 'grape', resourceId: 'london' },\n];\n";var d=e.i(191788),c=e.i(391398),u=e.i(613490),m=e.i(499083),v=e.i(272013),D={root:"m_428e1853"},p=e.i(232471),g=e.i(275519),f=e.i(44091),h=e.i(391466),w=e.i(579560);let y={defaultView:"day",mode:"default"},S=(0,g.factory)(e=>{let t=(0,f.useProps)("ResourcesSchedule",y,e),{classNames:r,className:a,style:o,styles:s,unstyled:n,vars:i,resources:l,date:d,defaultDate:g,onDateChange:S,view:x,defaultView:T,onViewChange:E,events:b,locale:M,radius:Y,labels:V,renderEventBody:I,renderResourceLabel:R,withEventsDragAndDrop:C,onEventDrop:$,canDragEvent:k,onEventDragStart:j,onEventDragEnd:P,onTimeSlotClick:O,onDayClick:L,onEventClick:B,withDragSlotSelect:_,onSlotDragEnd:z,onExternalEventDrop:A,withEventResize:H,onEventResize:N,canResizeEvent:W,recurrenceExpansionLimit:F,mode:G,dayViewProps:U,weekViewProps:K,monthViewProps:J,__staticSelector:q,mod:X,...Q}=t,Z=(0,h.useStyles)({name:q||"ResourcesSchedule",classes:D,props:t,className:a,style:o,classNames:r,styles:s,unstyled:n,vars:i}),[ee,et]=(0,w.useUncontrolled)({value:x,defaultValue:T,onChange:E}),[er,ea]=(0,w.useUncontrolled)({value:d,defaultValue:g??new Date}),eo={resources:l,date:er,onDateChange:e=>{ea(e),S?.(e)},onViewChange:e=>{("day"===e||"week"===e||"month"===e)&&et(e)},events:b,locale:M,radius:Y,labels:V,renderEventBody:I,renderResourceLabel:R,withEventsDragAndDrop:"static"!==G&&C,onEventDrop:$,canDragEvent:k,onEventDragStart:j,onEventDragEnd:P,onEventClick:B,withDragSlotSelect:_,onSlotDragEnd:z,onExternalEventDrop:A,recurrenceExpansionLimit:F,mode:G},es=(()=>{switch(ee){case"day":return(0,c.jsx)(u.ResourcesDayView,{...eo,onTimeSlotClick:O,withEventResize:"static"!==G&&H,onEventResize:N,canResizeEvent:W,...U});case"week":return(0,c.jsx)(m.ResourcesWeekView,{...eo,onTimeSlotClick:O,...K});case"month":return(0,c.jsx)(v.ResourcesMonthView,{...eo,onDayClick:L,...J});default:return null}})();return(0,c.jsx)(p.Box,{...Z("root"),mod:X,...Q,children:es})});S.displayName="@mantine/schedule/ResourcesSchedule",S.classes=D;let x={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e),[o,s]=(0,d.useState)(i);return(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:o,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:a})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r,resourceId:a}:o))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e),[o,s]=(0,d.useState)("day");return(0,c.jsx)(S,{date:t,onDateChange:a,view:o,onViewChange:s,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ResourcesScheduleViewLevel } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [view, setView] = useState<ResourcesScheduleViewLevel>('day');

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      view={view}
      onViewChange={setView}
      resources={resources}
      events={events}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},b={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{maxEventsPerTimeSlot:3,startScrollDate:e}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        intervalMinutes: 30,
        startScrollTime: '08:00:00',
      }}
      weekViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        startScrollDateTime: \`\${today} 08:00:00\`,
      }}
      monthViewProps={{
        maxEventsPerTimeSlot: 3,
        startScrollDate: today,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var M=e.i(162077),Y=e.i(988798);let V={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e),[o,s]=(0,d.useState)(i),[l,u]=(0,d.useState)(!1),[m,v]=(0,d.useState)(null),[D,p]=(0,d.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:o,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{p(r?String(r):null),v({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onDayClick:({date:e,resourceId:t})=>{p(t?String(t):null),v({title:"",start:(0,r.default)(e).startOf("day").toDate(),end:(0,r.default)(e).endOf("day").toDate(),color:"blue"}),u(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{p(r?String(r):null),v({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onEventClick:e=>{p(e.resourceId?String(e.resourceId):null),v({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),u(!0)},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}}),(0,c.jsx)(M.EventForm,{opened:l,onClose:()=>u(!1),onExitTransitionEnd:()=>v(null),values:m,onSubmit:e=>{e.id?s(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:D||t.resourceId}:t)):s(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:D||void 0}])},onDelete:m?.id?()=>{m?.id&&s(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,c.jsx)(Y.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:n.map(e=>({value:String(e.id),label:String(e.label)})),value:D,onChange:p})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  const handleTimeSlotClick = ({
    slotStart,
    slotEnd,
    resourceId,
  }: {
    slotStart: string;
    slotEnd: string;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDayClick = ({
    date: clickedDate,
    resourceId,
  }: {
    date: string;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: dayjs(clickedDate).startOf('day').toDate(),
      end: dayjs(clickedDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : null);
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSlotDragEnd = ({
    rangeStart,
    rangeEnd,
    resourceId,
  }: {
    rangeStart: string;
    rangeEnd: string;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
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
                resourceId: selectedResourceId || event.resourceId,
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
          resourceId: selectedResourceId || undefined,
        },
      ]);
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <ResourcesSchedule
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
        weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
        monthViewProps={{ startScrollDate: today }}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      >
        <Select
          label="Resource"
          placeholder="Select resource"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: r.label }))}
          value={selectedResourceId}
          onChange={setSelectedResourceId}
        />
      </EventForm>
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:M._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},I={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e),[o,s]=(0,d.useState)(i);return(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:o,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:a})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r,resourceId:a}:o))},withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r}:a))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  const handleEventUpdate = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string; event: ScheduleEventData }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((prev) =>
          prev.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      withEventResize
      onEventResize={handleEventUpdate}
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},R={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:i,mode:"static",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      mode="static"
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},C={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:i,defaultView:"week",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesSchedule } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesSchedule
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      defaultView="week"
      dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
      weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
      monthViewProps={{ startScrollDate: today }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var $=e.i(20035),k=e.i(883364);let j=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],P={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,a]=(0,d.useState)(e),[o,s]=(0,d.useState)([]),i=(0,d.useRef)(1);return(0,c.jsxs)($.Grid,{children:[(0,c.jsxs)($.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(k.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),j.map(e=>(0,c.jsxs)(p.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,c.jsx)($.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(S,{date:t,onDateChange:a,resources:n,events:o,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:a})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r,resourceId:a}:o))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:a})=>{let o=e.getData("text/plain");if(!o)return;let n=JSON.parse(o),l=(0,r.default)(t),d=l.add(n.duration,"minutes");s(e=>[...e,{id:i.current++,title:n.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:n.color,resourceId:a}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { ResourcesSchedule, ScheduleEventData } from '@mantine/schedule';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const sidebarItems = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = ({
    dataTransfer,
    dropDateTime,
    resourceId,
  }: {
    dataTransfer: DataTransfer;
    dropDateTime: string;
    resourceId?: string | number;
  }) => {
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
        resourceId,
      },
    ]);
  };

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
    resourceId,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
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
        <ResourcesSchedule
          date={date}
          onDateChange={setDate}
          resources={resources}
          events={events}
          dayViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollTime: '08:00:00' }}
          weekViewProps={{ startTime: '08:00:00', endTime: '18:00:00', startScrollDateTime: \`\${today} 08:00:00\` }}
          monthViewProps={{ startScrollDate: today }}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`};var O=(0,t.__exportAll)({controlled:()=>E,dragDrop:()=>T,eventForm:()=>V,eventResize:()=>I,externalDragDrop:()=>P,staticMode:()=>R,usage:()=>x,viewProps:()=>b,weekView:()=>C});e.s(["ResourcesScheduleDemos",0,O],853905)}]);