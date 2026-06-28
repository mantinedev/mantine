(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let r=new Map(e.map(e=>[e.id,e])),o=new Set,a=[],s=[];for(let e of t){let t=a.length,n=0;for(let t of e.resourceIds){let e=r.get(t);e&&!o.has(t)&&(a.push(e),o.add(t),n++)}n>0&&s.push({group:e,startIndex:t,count:n})}for(let t of e)o.has(t.id)||a.push(t);let n=Array(a.length).fill(null);for(let e of s)for(let t=0;t<e.count;t++){let r,o=e.startIndex+t;r=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",n[o]={group:e.group,position:r,count:e.count}}return{orderedResources:a,groupRanges:s,resourceGroupMap:n}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let r of e)t.set(String(r.id),r.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let r=e.findIndex(e=>{if(!e)return!1;let r=e.getBoundingClientRect();return t>=r.left&&t<=r.right});if(r>=0)return r;let o=e[0],a=e[e.length-1];if(!o||!a)return null;let s=o.getBoundingClientRect(),n=a.getBoundingClientRect();return t<s.left?0:t>n.right?e.length-1:null}],461304)},640542,343355,367752,578373,e=>{"use strict";e.s(["handleResourcesGridKeyDown",0,function({controlsRef:e,resourceIndex:t,slotIndex:r,event:o}){let a=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(o.key);if(a){o.preventDefault();let s=e.current?e.current.map(e=>e?e.length:0):null;if(!s)return;!function e({controlsRef:t,direction:r,resourceIndex:o,slotIndex:a,size:s}){let n=function({direction:e,resourceIndex:t,slotIndex:r,size:o}){let a=o[t];if(!a)return null;switch(e){case"left":if(0===r)return null;return{resourceIndex:t,slotIndex:r-1};case"right":if(r===a-1)return null;return{resourceIndex:t,slotIndex:r+1};case"up":{if(0===t)return null;let e=o[t-1];return{resourceIndex:t-1,slotIndex:Math.min(r,e-1)}}case"down":{if(t===o.length-1)return null;let e=o[t+1];return{resourceIndex:t+1,slotIndex:Math.min(r,e-1)}}default:return null}}({direction:r,resourceIndex:o,slotIndex:a,size:s});if(!n)return;let i=t.current?.[n.resourceIndex]?.[n.slotIndex];i&&(i.disabled||i.getAttribute("data-hidden")?e({controlsRef:t,direction:r,resourceIndex:n.resourceIndex,slotIndex:n.slotIndex,size:s}):i.focus())}({controlsRef:e,direction:a,resourceIndex:t,slotIndex:r,size:s})}}],640542);var t=e.i(672654),r=e.i(42916),o=e.i(494834),a=e.i(191788);e.s(["useHorizontalEventResize",0,function({enabled:e=!1,mode:s="default",startTime:n,endTime:i,intervalMinutes:l,onEventResize:d,canResizeEvent:u}){let[c,m]=(0,a.useState)(null),f=(0,a.useRef)(null),v=(0,a.useRef)(!1),g=(0,a.useEffectEvent)(d||(()=>{})),h=(0,r.parseTimeString)(n),p=(0,r.parseTimeString)(i),w=60*h.hours+h.minutes,D=60*p.hours+p.minutes,y=(0,t.clampIntervalMinutes)(l),x=D-w,S=Math.ceil(x/y)*y,b=y/S*100,E=(0,a.useCallback)(e=>Math.max(0,Math.min(x,Math.round(e/y)*y)),[x,y]),T=(0,a.useCallback)((e,t)=>{let r=w+E(e/100*S),o=Math.floor(r/60);return`${t} ${String(o).padStart(2,"0")}:${String(r%60).padStart(2,"0")}:00`},[S,w,E]),I=(0,a.useCallback)(e=>E(e/100*S)/S*100,[S,E]),k=(0,a.useCallback)(({event:t,edge:r,container:a,originalLeft:n,originalWidth:i,eventDate:l,dayIndex:d=0,dayCount:u=1,pointerEvent:c})=>{if(!e||"static"===s)return;c.preventDefault(),c.stopPropagation();let v={eventId:t.id,event:t,edge:r,container:a,originalLeft:n,originalWidth:i,currentLeft:n,currentWidth:i,eventDate:l,originalStart:(0,o.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,o.default)(t.end).format("YYYY-MM-DD HH:mm:ss"),dayIndex:d,dayCount:u};f.current=v,m(v)},[e,s]),M=null!==c;(0,a.useEffect)(()=>{if(!M)return;let e=document.body.style.userSelect,t=document.body.style.cursor;document.body.style.userSelect="none",document.body.style.cursor="ew-resize";let r=e=>{let t=f.current;if(!t)return;let r=t.container.getBoundingClientRect(),o=I(function({clientX:e,containerLeft:t,containerWidth:r,dayIndex:o,dayCount:a}){let s=r/a;return s<=0?0:Math.max(0,Math.min(100,(e-(t+o*s))/s*100))}({clientX:e.clientX,containerLeft:r.left,containerWidth:r.width,dayIndex:t.dayIndex,dayCount:t.dayCount})),a=t.originalLeft,s=t.originalWidth;if("end"===t.edge)s=Math.max(b,o-t.originalLeft);else{let e=t.originalLeft+t.originalWidth;a=Math.min(o,e-b),s=e-a}f.current={...t,currentLeft:a,currentWidth:s},m(f.current)},o=()=>{let e=f.current;if(e&&(e.currentLeft!==e.originalLeft||e.currentWidth!==e.originalWidth)){let t,r;"start"===e.edge?(t=T(e.currentLeft,e.eventDate),r=e.originalEnd):(t=e.originalStart,r=T(e.currentLeft+e.currentWidth,e.eventDate)),g({eventId:e.eventId,newStart:t,newEnd:r,event:e.event})}f.current=null,m(null),v.current=!0,requestAnimationFrame(()=>{v.current=!1})};return document.addEventListener("pointermove",r),document.addEventListener("pointerup",o),()=>{document.body.style.userSelect=e,document.body.style.cursor=t,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o)}},[M]);let V=(0,a.useCallback)(e=>c&&c.eventId===e?{left:c.currentLeft,width:c.currentWidth}:null,[c]),R=(0,a.useCallback)(t=>!!e&&"static"!==s&&"background"!==t.display&&(!u||u(t)),[e,s,u]),Y=(0,a.useCallback)(()=>v.current,[]);return{handleResizeStart:k,isResizing:M,resizingEventId:c?.eventId??null,resizingEdge:c?.edge??null,getResizePosition:V,isResizableEvent:R,wasResizing:Y}}],343355);var s=e.i(751198);e.s(["getOverlapClusters",0,function(e){let t=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;let a=[e[o]];r.add(o);let n=0;for(;n<a.length;){for(let t=0;t<e.length;t++)!r.has(t)&&(0,s.isEventsOverlap)(a[n],e[t])&&(a.push(e[t]),r.add(t));n++}t.push(a)}return t}],367752);var n=e.i(969610),i=e.i(298008),l=e.i(68642),d=e.i(532965),u=e.i(922621);e.s(["getResourcesDayViewEvents",0,function({events:e,resources:t,date:r,startTime:a,endTime:s}){let c={regularEvents:{},allDayEvents:{},backgroundTimedEvents:{},backgroundAllDayEvents:{}};for(let e of t)c.regularEvents[e.id]=[],c.allDayEvents[e.id]=[],c.backgroundTimedEvents[e.id]=[],c.backgroundAllDayEvents[e.id]=[];if(void 0===e)return c;let m=(0,o.default)(r).startOf("day"),f=(0,o.default)(r).endOf("day"),v={},g={};for(let e of t)v[e.id]=[],g[e.id]=[];let h=new Set;for(let t of e){if(void 0===t.resourceId||!(t.resourceId in v))continue;let e=(0,o.default)(t.start),r=(0,o.default)(t.end),n=e.isSame(m,"day"),d=e.isBefore(f)&&r.isAfter(m);if(n||d){if(n&&!(0,l.isEventInTimeRange)({event:t,startTime:a,endTime:s}))continue;let o=(0,i.validateEvent)(t);if(h.has(t.id))throw Error(`[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${t.id}`);if(h.add(t.id),"background"===t.display)g[t.resourceId].push(o);else if(n)v[t.resourceId].push(o);else{let n=e.isBefore(m)?m:e,i=r.isAfter(f)?f:r,d={...o,start:n.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss")};(0,l.isEventInTimeRange)({event:d,startTime:a,endTime:s})&&v[t.resourceId].push(d)}}}for(let e of t){for(let t of(0,u.getDayPositionedEvents)({events:v[e.id],startTime:a,endTime:s,date:r}))t.position.allDay?c.allDayEvents[e.id].push(t):c.regularEvents[e.id].push(t);for(let t of g[e.id]){let i=(0,o.default)(t.start),l=(0,o.default)(t.end),u=i.isBefore(m)?m:i,v=l.isAfter(f)?f:l,g={...t,start:u.format("YYYY-MM-DD HH:mm:ss"),end:v.format("YYYY-MM-DD HH:mm:ss")};if((0,n.isAllDayEvent)({event:g,date:r}))c.backgroundAllDayEvents[e.id].push({...t,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:r,height:o}=(0,d.getDayPosition)({event:g,startTime:a,endTime:s});if(o<=0)continue;c.backgroundTimedEvents[e.id].push({...t,position:{top:r,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}}return c}],578373)},613490,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(688785),n=e.i(664397),i=e.i(969610),l=e.i(792930),d=e.i(505696),u=e.i(657068),c=e.i(420924),m=e.i(640542),f=e.i(176304),v=e.i(461304),g=e.i(783261),h=e.i(376879),p=e.i(201867),w=e.i(891343),D=e.i(67312),y=e.i(966696),x=e.i(343355),S=e.i(367752),b=e.i(578373),E=e.i(232471),T=e.i(284629),I=e.i(391398);function k({resource:e,resourceIndex:r,date:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:l,businessHours:u,withEventsDragAndDrop:c,onRowSlotsDragOver:m,onRowSlotsDragLeave:f,onRowSlotsDrop:v,onSlotClick:g,dropTargetSlotIndex:h,mode:p,slotsRef:w,firstSlotIndex:D,onSlotKeyDown:y,withDragSlotSelect:x,onSlotPointerDown:S,isSlotDragSelected:b,rowSlotsContainerRef:M,renderResourceLabel:V,renderGroupLabel:R,scrolledX:Y,groupInfo:C,allDayCount:$}){let j=String(e.id),P=a.map((a,n)=>{let m=h===n,f=D?.resourceIndex===r&&D?.slotIndex===n,v=b?.(n,j)||!1;return(0,I.jsx)(T.UnstyledButton,{ref:e=>{if(!w?.current)return;w.current[r]||(w.current[r]=[]);let t=w.current[r];if(e)t[n]=e;else for(delete t[n];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesDayViewRowSlot"),mod:{"hour-start":a.isHourStart,...(0,d.getBusinessHoursMod)({time:a.startTime,businessHours:u,highlightBusinessHours:l}),"drop-target":m,"drag-selected":v,static:"static"===p},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${a.startTime} - ${a.endTime}`,tabIndex:"static"===p?-1:f?0:-1,"data-drag-slot-index":x&&"static"!==p?n:void 0,"data-drag-slot-group":x&&"static"!==p?j:void 0,onKeyDown:e=>{y&&y(e,r,n)},onPointerDown:x&&"static"!==p?e=>S?.(e,n,j):void 0,onClick:"static"!==p&&g?t=>g(e.id,a.startTime,t):void 0,onDragOver:c&&"static"!==p?e=>e.preventDefault():void 0},a.startTime)}),W=C?.position==="first"||C?.position==="only",L=void 0!==C?null!==C?(0,I.jsx)(E.Box,{...s("resourcesDayViewGroupColumn"),mod:{"scrolled-x":Y,"group-position":C.position},children:W&&(0,I.jsx)("span",{style:C.count>1?{transform:`translateY(calc((${C.count-1} * (var(--resources-day-view-row-height) + 1px)) / 2))`}:void 0,children:R?R(C.group):C.group.label})}):(0,I.jsx)(E.Box,{...s("resourcesDayViewGroupColumnEmpty"),mod:{"scrolled-x":Y}}):null;return(0,I.jsxs)(E.Box,{...s("resourcesDayViewRow"),children:[L,(0,I.jsx)(E.Box,{...s("resourcesDayViewResourceLabel"),mod:{"scrolled-x":Y,"has-groups":void 0!==C},children:V?V(e):e.label}),(0,I.jsxs)(E.Box,{ref:M,...s("resourcesDayViewRowSlots",{style:$?{minHeight:`max(var(--resources-day-view-row-height), calc(${$} * (var(--resources-day-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==p?t=>m?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==p?f:void 0,onDrop:c&&"static"!==p?t=>v?.(t,e.id,r):void 0,children:[n,P]})]})}var M={resourcesDayView:"m_25154d8d",resourcesDayViewRoot:"m_d790b40f",resourcesDayViewScrollArea:"m_d54c5a67",resourcesDayViewInner:"m_1a0680c9",resourcesDayViewTimeLabelsRow:"m_26532081",resourcesDayViewCorner:"m_1c9c8e42",resourcesDayViewTimeLabel:"m_de91b51a",resourcesDayViewRow:"m_6a0ced0d",resourcesDayViewResourceLabel:"m_ac632f9",resourcesDayViewGroupColumn:"m_6c75eae8",resourcesDayViewGroupColumnEmpty:"m_f2903b45",resourcesDayViewRowSlots:"m_84f29928",resourcesDayViewRowSlot:"m_90acfcab",resourcesDayViewCurrentTimeIndicator:"m_3f0b79f6",resourcesDayViewCurrentTimeIndicatorLine:"m_7855b30a",resourcesDayViewCurrentTimeIndicatorThumb:"m_92d11180",resourcesDayViewCurrentTimeIndicatorTimeBubble:"m_e2aac04f",resourcesDayViewBackgroundEvent:"m_9cc838bf",resourcesDayViewAllDayEvent:"m_d6d6dd52",resourcesDayViewResizeHandle:"m_97715629",resourcesDayViewEventWrapper:"m_93bc1ec6"},V=e.i(494834),R=e.i(19300),Y=e.i(481178),C=e.i(275519),$=e.i(433512),j=e.i(779177),P=e.i(951254),W=e.i(44091),L=e.i(62904),O=e.i(391466),B=e.i(822933),_=e.i(417241),H=e.i(332977),z=e.i(191788),A=e.i(205693);let N={__staticSelector:"ResourcesDayView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,headerFormat:"MMMM D, YYYY",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default",maxEventsPerTimeSlot:2},F=(0,Y.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesDayView:{"--resources-day-view-radius":t?(0,$.getRadius)(t):void 0,"--resources-day-view-slot-width":(0,j.rem)(r),"--resources-day-view-row-height":(0,j.rem)(o),"--resources-day-view-group-label-width":(0,j.rem)(a)}})),G=(0,C.factory)(e=>{let T=(0,W.useProps)("ResourcesDayView",N,e),{classNames:Y,className:C,style:$,styles:j,unstyled:G,attributes:U,vars:K,startTime:X,endTime:q,date:J,onDateChange:Q,resources:Z,intervalMinutes:ee,slotLabelFormat:et,radius:er,startScrollTime:eo,scrollAreaProps:ea,locale:es,withCurrentTimeIndicator:en,withCurrentTimeBubble:ei=!0,__staticSelector:el,withHeader:ed,onViewChange:eu,previousControlProps:ec,nextControlProps:em,todayControlProps:ef,viewSelectProps:ev,headerFormat:eg,events:eh,slotWidth:ep,rowHeight:ew,labels:eD,highlightBusinessHours:ey,businessHours:ex,renderEventBody:eS,renderEvent:eb,renderResourceLabel:eE,groups:eT,renderGroupLabel:eI,groupLabelWidth:ek,withEventsDragAndDrop:eM,onEventDrop:eV,canDragEvent:eR,onEventDragStart:eY,onEventDragEnd:eC,onTimeSlotClick:e$,onEventClick:ej,withDragSlotSelect:eP,onSlotDragEnd:eW,mode:eL,onExternalEventDrop:eO,withEventResize:eB,onEventResize:e_,canResizeEvent:eH,recurrenceExpansionLimit:ez,maxEventsPerTimeSlot:eA,moreEventsProps:eN,...eF}=T,eG=void 0!==eA?Math.max(1,eA):void 0,eU=(0,O.useStyles)({name:el,classes:M,props:T,className:C,style:$,classNames:Y,styles:j,unstyled:G,vars:K,varsResolver:F,attributes:U,rootSelector:"resourcesDayView"}),{resolvedClassNames:eK,resolvedStyles:eX}=(0,L.useResolvedStylesApi)({classNames:Y,styles:j,props:T}),eq={classNames:eK,styles:eX,attributes:U,__staticSelector:el,radius:er},eJ=(0,P.useMantineTheme)(),[eQ,eZ]=(0,z.useState)(!1),[e0,e1]=(0,z.useState)(!1),e8=(0,A.useDatesContext)(),e3=(0,o.getDayTimeIntervals)({startTime:X,endTime:q,intervalMinutes:ee}),{orderedResources:e2,groupRanges:e4,resourceGroupMap:e6}=(0,z.useMemo)(()=>(0,c.getOrderedResources)(Z,eT),[Z,eT]),e9=e4.length>0,e7=(0,z.useCallback)((e,t)=>{if(!eO)return;let r=(0,V.default)(J).format("YYYY-MM-DD");eO({dataTransfer:e.dataTransfer,dropDateTime:`${r} ${e3[t.slotIndex].startTime}`,resourceId:t.resourceId})},[eO,e3,J]),e5=(0,z.useRef)(void 0),te=(0,g.useDragDropHandlers)({enabled:eM,mode:eL,onEventDrop:(0,z.useCallback)(e=>{eV?.({...e,resourceId:e5.current})},[eV]),canDragEvent:eR,onEventDragStart:eY,onEventDragEnd:eC,calculateDropTarget:(e,t)=>{e5.current=e.resourceId;let r=e3[e.slotIndex].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:(0,V.default)(J).format("YYYY-MM-DD"),targetSlotTime:r,intervalMinutes:ee})},onExternalDrop:eO?e7:void 0}),tt=(0,z.useMemo)(()=>(0,f.getGroupToResourceIdMap)(Z),[Z]),tr=(0,h.useSlotDragSelect)({enabled:eP&&"static"!==eL,onDragEnd:(e,t,r)=>{if(!eW)return;let o=(0,V.default)(J).format("YYYY-MM-DD");eW({rangeStart:`${o} ${e3[e].startTime}`,rangeEnd:`${o} ${e3[t].endTime}`,resourceId:tt.get(r)??r})}}),to=(0,x.useHorizontalEventResize)({enabled:eB,mode:eL,startTime:X,endTime:q,intervalMinutes:ee,onEventResize:e_,canResizeEvent:eH}),ta=(eM||!!eO)&&"static"!==eL,ts=(e,t,r)=>{if(!e$)return;let o=(0,V.default)(J).format("YYYY-MM-DD"),a=e3.findIndex(e=>e.startTime===t);if(-1===a)return;let s=e3[a];e$({slotStart:`${o} ${s.startTime}`,slotEnd:`${o} ${s.endTime}`,nativeEvent:r,resourceId:e})},tn=(0,V.default)(J).format("YYYY-MM-DD"),ti=(0,V.default)(J).isSame((0,V.default)(),"day"),[tl,td]=(0,z.useState)((0,s.getCurrentTimePosition)({startTime:X,endTime:q,intervalMinutes:ee}));(0,B.useInterval)(()=>td((0,s.getCurrentTimePosition)({startTime:X,endTime:q,intervalMinutes:ee})),6e4,{autoInvoke:!0});let tu=(en??ti)&&(0,n.isInTimeRange)({date:(0,V.default)().toDate(),startTime:X,endTime:q}),tc=ei?(0,r.formatDate)({locale:e8.getLocale(es),date:(0,V.default)(),format:et}):"",tm=(0,z.useMemo)(()=>(0,u.expandRecurringEvents)({events:eh,rangeStart:(0,V.default)(J).startOf("day").toDate(),rangeEnd:(0,V.default)(J).endOf("day").toDate(),expansionLimit:ez}),[eh,J,ez]),tf=(0,z.useMemo)(()=>(0,b.getResourcesDayViewEvents)({date:J,events:tm,resources:Z,startTime:X,endTime:q}),[J,tm,Z,X,q]),tv=e3.map(e=>{let t=(0,r.formatDate)({date:(0,V.default)(`${tn} ${e.startTime}`),locale:e8.getLocale(es),format:et});return(0,z.createElement)(E.Box,{...eU("resourcesDayViewTimeLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:ex,highlightBusinessHours:ey})}},t)}),tg=(0,z.useRef)([]),th=(0,z.useRef)([]),tp=(0,z.useRef)(null),tw=(0,H.useMergedRef)(tp,ea?.viewportRef),tD={resourceIndex:0,slotIndex:0};(0,_.useIsomorphicEffect)(()=>{if(!eo||!tp.current)return;let e=tg.current[0];if(!e||0===e.length)return;let t=e3.findIndex(e=>e.startTime>=eo);if(t<0)return;let r=e[t];if(!r)return;let o=r.getBoundingClientRect(),a=tp.current.getBoundingClientRect(),s=tp.current.querySelector(`.${M.resourcesDayViewCorner}`),n=s?s.getBoundingClientRect().width:0;tp.current.scrollTo({left:o.left-a.left-n,top:0})},[]);let ty=(0,z.useCallback)((e,t)=>(0,v.getIndexFromDragPoint)(tg.current[t]??[],e.clientX),[]),tx=(e,t,r)=>{(0,m.handleResourcesGridKeyDown)({controlsRef:tg,resourceIndex:t,slotIndex:r,event:e})},tS=e2.map((e,t)=>{let r=[...tf.backgroundTimedEvents[e.id]||[],...tf.backgroundAllDayEvents[e.id]||[]].map(e=>{let t=eJ.variantColorResolver({color:e.color||eJ.primaryColor,theme:eJ,variant:"light",autoContrast:!0}),r="function"==typeof eS?eS(e):e.title,o={key:`bg-${e.id}`,...eU("resourcesDayViewBackgroundEvent",{style:{left:`${e.position.top}%`,width:`${e.position.height}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:r};return"function"==typeof eb?eb(e,o):(0,I.jsx)(E.Box,{...o})}),o=(tf.regularEvents[e.id]||[]).filter(e=>!(0,i.isAllDayEvent)({event:e,date:J})),a=(void 0!==eG?o.filter(e=>e.position.column<eG):o).map(e=>{let r=te.isDraggableEvent(e),o=to.isResizableEvent(e),a=to.getResizePosition(e.id),s=a?a.left:e.position.top,n=a?a.width:e.position.height,i=void 0!==eG&&e.position.overlaps>eG,l=o?eJ.variantColorResolver({color:e.color||eJ.primaryColor,theme:eJ,variant:e.variant||"light",autoContrast:!0}):null,d=null!==a,u=d&&to.resizingEdge?to.resizingEdge:null;return(0,I.jsxs)(E.Box,{...eU("resourcesDayViewEventWrapper"),__vars:l?{"--event-color":l.color}:void 0,"data-resizing":d||void 0,style:{left:`calc(${s}% + 1px)`,top:i?`calc((100% - 22px) * ${e.position.column} / ${eG})`:`${e.position.offset}%`,width:`calc(${n}% - 2px)`,height:i?`calc((100% - 22px) / ${eG})`:`${e.position.width}%`},children:[(0,I.jsx)(w.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:r,isResizing:d,renderEventBody:eS,renderEvent:eb,radius:er,mode:eL,onClick:ej?t=>{to.wasResizing()||ej(e,t)}:void 0,style:{width:"100%",height:"100%"}}),o&&"static"!==eL&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{...eU("resourcesDayViewResizeHandle"),"data-edge":"start","data-active":"start"===u||void 0,onPointerDown:r=>{let o=th.current[t];o&&to.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:tn,pointerEvent:r})}}),(0,I.jsx)("div",{...eU("resourcesDayViewResizeHandle"),"data-edge":"end","data-active":"end"===u||void 0,onPointerDown:r=>{let o=th.current[t];o&&to.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:tn,pointerEvent:r})}})]})]},e.id)}),s=tf.allDayEvents[e.id]||[],n=s.map((e,t)=>(0,I.jsx)(E.Box,{...eU("resourcesDayViewAllDayEvent",{style:{top:`calc(${t} * (var(--resources-day-view-all-day-height) + 2px) + 2px)`}}),children:(0,I.jsx)(w.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,renderEventBody:eS,renderEvent:eb,radius:er,mode:eL,onClick:ej?t=>ej(e,t):void 0,style:{width:"100%",height:"100%"}})},`all-day-${e.id}`)),l=void 0!==eG?(0,S.getOverlapClusters)(o).filter(e=>e.some(e=>e.position.column>=eG)).map(e=>{let t=e.filter(e=>e.position.column>=eG).length,r=Math.min(...e.map(e=>e.position.top)),o=Math.max(...e.map(e=>e.position.top+e.position.height));return(0,I.jsx)(D.MoreEvents,{events:e,moreEventsCount:t,mode:eL,labels:eD,renderEventBody:eS,renderEvent:eb,onEventClick:ej,style:{position:"absolute",left:`calc(${r}% + 1px)`,width:`calc(${o-r}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...eq,...eN},`more-${e[0].id}`)}):[];return(0,I.jsxs)(k,{resource:e,resourceIndex:t,date:tn,slots:e3,getStyles:eU,labels:eD,highlightBusinessHours:ey,businessHours:ex,withEventsDragAndDrop:ta,mode:eL,slotsRef:tg,firstSlotIndex:tD,onSlotKeyDown:tx,onSlotClick:ts,onRowSlotsDragOver:(e,t,r)=>{let o=ty(e,r);null!==o&&te.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:te.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=ty(e,r);null!==o&&te.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:te.dropTarget?.resourceId===e.id?te.dropTarget.slotIndex:void 0,withDragSlotSelect:eP,onSlotPointerDown:tr.handleSlotPointerDown,isSlotDragSelected:tr.isSlotSelected,rowSlotsContainerRef:e=>{th.current[t]=e},renderResourceLabel:eE,renderGroupLabel:eI,scrolledX:e0,groupInfo:e9?e6[t]:void 0,allDayCount:s.length,children:[r,n,a,l]},e.id)}),tb=(0,r.formatDate)({date:(0,V.default)(J),locale:e8.getLocale(es),format:eg}),tE=(0,I.jsxs)(E.Box,{...eU("resourcesDayView"),mod:{static:"static"===eL,"slot-dragging":tr.isDragging,resizing:to.isResizing,"event-interaction":to.isResizing||te.dragContextValue.isDragging},...eF,children:[ed&&(0,I.jsx)(y.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,a.toDateString)((0,V.default)(J).subtract(1,"day")),next:()=>(0,a.toDateString)((0,V.default)(J).add(1,"day")),today:()=>(0,a.toDateString)((0,V.default)())},control:{miw:140,title:tb},labels:eD,onDateChange:Q,onViewChange:eu,previousControlProps:ec,nextControlProps:em,todayControlProps:ef,viewSelectProps:{views:["day","week","month"],...ev},stylesApiProps:eq}),(0,I.jsx)(E.Box,{...eU("resourcesDayViewRoot"),children:(0,I.jsx)(R.ScrollArea,{scrollbarSize:4,...ea,...eU("resourcesDayViewScrollArea",{className:ea?.className,style:ea?.style}),onScrollPositionChange:e=>{ea?.onScrollPositionChange?.(e),eZ(0!==e.y),e1(0!==e.x)},viewportRef:tw,children:(0,I.jsxs)("div",{...eU("resourcesDayViewInner"),children:[(0,I.jsxs)(E.Box,{...eU("resourcesDayViewTimeLabelsRow"),mod:{scrolled:eQ},children:[(0,z.createElement)("div",{...eU("resourcesDayViewCorner"),key:"corner",style:e9?{flexBasis:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))",minWidth:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eD)),tv]}),tS,tu&&(0,I.jsxs)(E.Box,{...eU("resourcesDayViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":e9?`calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width) + (100% - var(--resources-day-view-resource-label-width) - var(--resources-day-view-group-label-width)) * ${tl} / 100)`:`calc(var(--resources-day-view-resource-label-width) + (100% - var(--resources-day-view-resource-label-width)) * ${tl} / 100)`,"--_time-bubble-width":tc?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ei&&(0,I.jsx)("div",{...eU("resourcesDayViewCurrentTimeIndicatorTimeBubble"),children:tc}),!ei&&(0,I.jsx)("div",{...eU("resourcesDayViewCurrentTimeIndicatorThumb")}),(0,I.jsx)("div",{...eU("resourcesDayViewCurrentTimeIndicatorLine")})]})]})})})]}),tT=(0,z.useMemo)(()=>te.dragContextValue,[te.dragContextValue]);return eM?(0,I.jsx)(p.DragContext.Provider,{value:tT,children:tE}):tE});G.displayName="@mantine/schedule/ResourcesDayView",G.classes=M,G.varsResolver=F,e.s(["ResourcesDayView",0,G],613490)},499083,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(918006),n=e.i(625712),i=e.i(900513),l=e.i(688785),d=e.i(664397),u=e.i(969610),c=e.i(792930),m=e.i(505696),f=e.i(420924),v=e.i(640542),g=e.i(176304),h=e.i(461304),p=e.i(783261),w=e.i(376879),D=e.i(201867),y=e.i(891343),x=e.i(67312),S=e.i(966696),b=e.i(612148),E=e.i(343355),T=e.i(367752),I=e.i(898770),k=e.i(657068),M=e.i(922552),V=e.i(539517),R=e.i(578373),Y=e.i(494834),C=e.i(232471),$=e.i(284629),j=e.i(391398);function P({resource:e,resourceIndex:r,weekdays:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:l,businessHours:d,withEventsDragAndDrop:u,onRowSlotsDragOver:c,onRowSlotsDragLeave:f,onRowSlotsDrop:v,onSlotClick:g,dropTargetSlotIndex:h,mode:p,slotsRef:w,firstSlotIndex:D,onSlotKeyDown:y,withDragSlotSelect:x,onSlotPointerDown:S,isSlotDragSelected:b,rowSlotsContainerRef:E,renderResourceLabel:T,renderGroupLabel:I,scrolledX:k,groupInfo:M,allDayCount:V}){let R=String(e.id),Y=o.flatMap((o,n)=>a.map((c,f)=>{let v=n*a.length+f,E=h===v,T=D?.resourceIndex===r&&D?.slotIndex===v,I=b?.(v,R)||!1;return(0,j.jsx)($.UnstyledButton,{ref:e=>{if(!w?.current)return;w.current[r]||(w.current[r]=[]);let t=w.current[r];if(e)t[v]=e;else for(delete t[v];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesWeekViewRowSlot"),mod:{"hour-start":c.isHourStart,...(0,m.getBusinessHoursMod)({time:c.startTime,businessHours:d,highlightBusinessHours:l}),"drop-target":E,"drag-selected":I,static:"static"===p},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${c.startTime} - ${c.endTime}`,tabIndex:"static"===p?-1:T?0:-1,"data-drag-slot-index":x&&"static"!==p?v:void 0,"data-drag-slot-group":x&&"static"!==p?R:void 0,onKeyDown:e=>{y&&y(e,r,v)},onPointerDown:x&&"static"!==p?e=>S?.(e,v,R):void 0,onClick:"static"!==p&&g?t=>g(e.id,o,c.startTime,t):void 0,onDragOver:u&&"static"!==p?e=>e.preventDefault():void 0},`${o}-${c.startTime}`)})),W=M?.position==="first"||M?.position==="only",L=void 0!==M?null!==M?(0,j.jsx)(C.Box,{...s("resourcesWeekViewGroupColumn"),mod:{"scrolled-x":k,"group-position":M.position},children:W&&(0,j.jsx)("span",{style:M.count>1?{transform:`translateY(calc((${M.count-1} * (var(--resources-week-view-row-height) + 1px)) / 2))`}:void 0,children:I?I(M.group):M.group.label})}):(0,j.jsx)(C.Box,{...s("resourcesWeekViewGroupColumnEmpty"),mod:{"scrolled-x":k}}):null;return(0,j.jsxs)(C.Box,{...s("resourcesWeekViewRow"),children:[L,(0,j.jsx)(C.Box,{...s("resourcesWeekViewResourceLabel"),mod:{"scrolled-x":k,"has-groups":void 0!==M},children:T?T(e):e.label}),(0,j.jsxs)(C.Box,{ref:E,...s("resourcesWeekViewRowSlots",{style:V?{minHeight:`max(var(--resources-week-view-row-height), calc(${V} * (var(--resources-week-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:u&&"static"!==p?t=>c?.(t,e.id,r):void 0,onDragLeave:u&&"static"!==p?f:void 0,onDrop:u&&"static"!==p?t=>v?.(t,e.id,r):void 0,children:[n,Y]})]})}var W={resourcesWeekView:"m_ed4c47cf",resourcesWeekViewRoot:"m_5b5cbd51",resourcesWeekViewScrollArea:"m_b88ea29",resourcesWeekViewInner:"m_fbb9fc7",resourcesWeekViewHeaderRows:"m_7d7bb735",resourcesWeekViewCorner:"m_dd8b4f04",resourcesWeekViewHeaderContent:"m_85f2b19d",resourcesWeekViewDayLabelsRow:"m_cde0b68e",resourcesWeekViewDayLabel:"m_354e59a7",resourcesWeekViewTimeLabelsRow:"m_b7f0617f",resourcesWeekViewTimeLabel:"m_a6832518",resourcesWeekViewRow:"m_9fd9b38b",resourcesWeekViewResourceLabel:"m_9c6373f7",resourcesWeekViewGroupColumn:"m_fdcb5366",resourcesWeekViewGroupColumnEmpty:"m_3d5e7187",resourcesWeekViewRowSlots:"m_c534316a",resourcesWeekViewRowSlot:"m_ed965429",resourcesWeekViewBackgroundEvent:"m_3c19323d",resourcesWeekViewAllDayEvent:"m_682c45d0",resourcesWeekViewResizeHandle:"m_30c8fd6b",resourcesWeekViewEventWrapper:"m_2d13c608",resourcesWeekViewCurrentTimeIndicator:"m_6f70bf38",resourcesWeekViewCurrentTimeIndicatorLine:"m_be32874c",resourcesWeekViewCurrentTimeIndicatorThumb:"m_88ec57e",resourcesWeekViewCurrentTimeIndicatorTimeBubble:"m_9ff3db11"},L=e.i(19300),O=e.i(481178),B=e.i(275519),_=e.i(433512),H=e.i(779177),z=e.i(951254),A=e.i(44091),N=e.i(62904),F=e.i(391466),G=e.i(822933),U=e.i(417241),K=e.i(332977),X=e.i(191788),q=e.i(205693);let J={__staticSelector:"ResourcesWeekView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,weekLabelFormat:"MMM DD",weekdayFormat:"ddd D",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withEventResize:!1,withDragSlotSelect:!1,withWeekendDays:!0,withCurrentTimeBubble:!0,highlightToday:!0,mode:"default",maxEventsPerTimeSlot:2},Q=(0,O.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesWeekView:{"--resources-week-view-radius":t?(0,_.getRadius)(t):void 0,"--resources-week-view-slot-width":(0,H.rem)(r),"--resources-week-view-row-height":(0,H.rem)(o),"--resources-week-view-group-label-width":(0,H.rem)(a)}})),Z=(0,B.factory)(e=>{let $=(0,A.useProps)("ResourcesWeekView",J,e),{classNames:O,className:B,style:_,styles:H,unstyled:Z,attributes:ee,vars:et,startTime:er,endTime:eo,date:ea,onDateChange:es,resources:en,intervalMinutes:ei,slotLabelFormat:el,radius:ed,startScrollDateTime:eu,scrollAreaProps:ec,locale:em,withCurrentTimeIndicator:ef,withCurrentTimeBubble:ev,__staticSelector:eg,withHeader:eh,onViewChange:ep,previousControlProps:ew,nextControlProps:eD,todayControlProps:ey,viewSelectProps:ex,weekLabelFormat:eS,renderWeekLabel:eb,events:eE,slotWidth:eT,rowHeight:eI,labels:ek,highlightBusinessHours:eM,businessHours:eV,renderEventBody:eR,renderEvent:eY,renderResourceLabel:eC,groups:e$,renderGroupLabel:ej,groupLabelWidth:eP,withEventsDragAndDrop:eW,onEventDrop:eL,canDragEvent:eO,onEventDragStart:eB,onEventDragEnd:e_,withEventResize:eH,onEventResize:ez,canResizeEvent:eA,onTimeSlotClick:eN,onEventClick:eF,withDragSlotSelect:eG,onSlotDragEnd:eU,mode:eK,onExternalEventDrop:eX,recurrenceExpansionLimit:eq,maxEventsPerTimeSlot:eJ,moreEventsProps:eQ,firstDayOfWeek:eZ,weekendDays:e0,withWeekendDays:e1,weekdayFormat:e8,highlightToday:e3,...e2}=$,e4=void 0!==eJ?Math.max(1,eJ):void 0,e6=(0,F.useStyles)({name:eg,classes:W,props:$,className:B,style:_,classNames:O,styles:H,unstyled:Z,vars:et,varsResolver:Q,attributes:ee,rootSelector:"resourcesWeekView"}),{resolvedClassNames:e9,resolvedStyles:e7}=(0,N.useResolvedStylesApi)({classNames:O,styles:H,props:$}),e5={classNames:e9,styles:e7,attributes:ee,__staticSelector:eg,radius:ed},te=(0,z.useMantineTheme)(),[tt,tr]=(0,X.useState)(!1),[to,ta]=(0,X.useState)(!1),ts=(0,q.useDatesContext)(),tn=(0,o.getDayTimeIntervals)({startTime:er,endTime:eo,intervalMinutes:ei}),{orderedResources:ti,groupRanges:tl,resourceGroupMap:td}=(0,X.useMemo)(()=>(0,f.getOrderedResources)(en,e$),[en,e$]),tu=tl.length>0,tc=(0,X.useMemo)(()=>(0,s.getWeekDays)({week:ea,withWeekendDays:e1,weekendDays:ts.getWeekendDays(e0),firstDayOfWeek:ts.getFirstDayOfWeek(eZ)}),[ea,e1,e0,eZ,ts]),tm=tn.length,tf=tc.some(e=>(0,Y.default)(e).isSame((0,Y.default)(),"day")),[tv,tg]=(0,X.useState)((0,l.getCurrentTimePosition)({startTime:er,endTime:eo,intervalMinutes:ei}));(0,G.useInterval)(()=>tg((0,l.getCurrentTimePosition)({startTime:er,endTime:eo,intervalMinutes:ei})),6e4,{autoInvoke:!0});let th=tc.findIndex(e=>(0,Y.default)(e).isSame((0,Y.default)(),"day")),tp=(ef??tf)&&th>=0&&(0,d.isInTimeRange)({date:(0,Y.default)().toDate(),startTime:er,endTime:eo}),tw=ev?(0,r.formatDate)({locale:ts.getLocale(em),date:(0,Y.default)(),format:el}):"",tD=(0,X.useCallback)((e,t)=>{if(!eX)return;let r=Math.floor(t.slotIndex/tm),o=t.slotIndex%tm,a=tc[r];a&&eX({dataTransfer:e.dataTransfer,dropDateTime:`${(0,Y.default)(a).format("YYYY-MM-DD")} ${tn[o].startTime}`,resourceId:t.resourceId})},[eX,tn,tc,tm]),ty=(0,X.useRef)(void 0),tx=(0,p.useDragDropHandlers)({enabled:eW,mode:eK,onEventDrop:(0,X.useCallback)(e=>{eL?.({...e,resourceId:ty.current})},[eL]),canDragEvent:eO,onEventDragStart:eB,onEventDragEnd:e_,calculateDropTarget:(e,t)=>{ty.current=e.resourceId;let r=Math.floor(e.slotIndex/tm),o=tn[e.slotIndex%tm].startTime;return(0,c.calculateDropTime)({draggedEvent:t,targetDate:tc[r]||tc[0],targetSlotTime:o,intervalMinutes:ei})},onExternalDrop:eX?tD:void 0}),tS=(0,X.useMemo)(()=>(0,g.getGroupToResourceIdMap)(en),[en]),tb=(0,w.useSlotDragSelect)({enabled:eG&&"static"!==eK,onDragEnd:(e,t,r)=>{if(!eU)return;let o=Math.floor(e/tm),a=e%tm,s=Math.floor(t/tm),n=t%tm,i=tc[o],l=tc[s];i&&l&&eU({rangeStart:`${(0,Y.default)(i).format("YYYY-MM-DD")} ${tn[a].startTime}`,rangeEnd:`${(0,Y.default)(l).format("YYYY-MM-DD")} ${tn[n].endTime}`,resourceId:tS.get(r)??r})}}),tE=(0,E.useHorizontalEventResize)({enabled:eH,mode:eK,startTime:er,endTime:eo,intervalMinutes:ei,onEventResize:ez,canResizeEvent:eA}),tT=(eW||!!eX)&&"static"!==eK,tI=(e,t,r,o)=>{if(!eN)return;let a=tn.findIndex(e=>e.startTime===r);if(-1===a)return;let s=tn[a],n=(0,Y.default)(t).format("YYYY-MM-DD");eN({slotStart:`${n} ${s.startTime}`,slotEnd:`${n} ${s.endTime}`,nativeEvent:o,resourceId:e})},tk=(0,X.useMemo)(()=>(function({events:e,resources:t,weekdays:r,startTime:o,endTime:a,expansionLimit:s}){let n=(0,k.expandRecurringEvents)({events:e,rangeStart:(0,Y.default)(r[0]).startOf("day").toDate(),rangeEnd:(0,Y.default)(r[r.length-1]).endOf("day").toDate(),expansionLimit:s});if(n){let e=new Set;for(let t of n){if(e.has(t.id))throw Error(`[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${t.id}`);e.add(t.id)}}let i={},l=new Set,d=e=>"background"!==e.display&&(0,I.isMultidayEvent)(e);for(let e of r){let r=n?.filter(t=>{if(l.has(t.id)||d(t))return!1;let r=(0,Y.default)(t.start),o=(0,Y.default)(e).startOf("day");return r.isSame(o,"day")?(l.add(t.id),!0):!!("background"===t.display&&r.isBefore((0,Y.default)(e).endOf("day"))&&(0,Y.default)(t.end).isAfter(o))});i[e]=(0,R.getResourcesDayViewEvents)({events:r,resources:t,date:e,startTime:o,endTime:a})}let u={};for(let e of t)u[e.id]=[];if(r.forEach((e,r)=>{for(let o of t)for(let t of i[e].allDayEvents[o.id]??[])u[o.id].push({event:t,startDayIndex:r,endDayIndex:r,row:0})}),n)for(let e of n){if(!d(e)||void 0===e.resourceId||!(e.resourceId in u))continue;let t=(0,M.calculateEventDays)({event:e,weekDays:r,actualEndDate:(0,V.getEventEndDate)(e)});0!==t.length&&u[e.resourceId].push({event:e,startDayIndex:r.indexOf(t[0]),endDayIndex:r.indexOf(t[t.length-1]),row:0})}for(let e of t)!function(e){let t=e.map((e,t)=>({bar:e,index:t})).sort((e,t)=>e.bar.startDayIndex-t.bar.startDayIndex||e.bar.endDayIndex-t.bar.endDayIndex||e.index-t.index),r=[];for(let{bar:e}of t){let t=0;for(;t<r.length&&r[t]>=e.startDayIndex;)t+=1;r[t]=e.endDayIndex,e.row=t}}(u[e.id]);return{byDay:i,allDayBars:u}})({events:eE,resources:en,weekdays:tc,startTime:er,endTime:eo,expansionLimit:eq}),[eE,en,tc,er,eo,eq]),tM=tc.map(e=>{let t=(0,Y.default)(e),o=t.isSame((0,Y.default)(),"day")&&e3,a=ts.getWeekendDays(e0).includes(t.day());return(0,X.createElement)(C.Box,{...e6("resourcesWeekViewDayLabel"),key:e,mod:{today:o,weekend:a},style:{width:`calc(var(--resources-week-view-slot-width) * ${tm})`}},(0,r.formatDate)({date:t,locale:ts.getLocale(em),format:e8}))}),tV=tc.flatMap(e=>tn.map(t=>{let o=(0,r.formatDate)({date:(0,Y.default)(`${(0,Y.default)(e).format("YYYY-MM-DD")} ${t.startTime}`),locale:ts.getLocale(em),format:el});return(0,X.createElement)(C.Box,{...e6("resourcesWeekViewTimeLabel"),key:`${e}-${t.startTime}`,mod:{"hour-start":t.isHourStart,...(0,m.getBusinessHoursMod)({time:t.startTime,businessHours:eV,highlightBusinessHours:eM})}},o)})),tR=(0,X.useRef)([]),tY=(0,X.useRef)([]),tC=(0,X.useRef)(null),t$=(0,K.useMergedRef)(tC,ec?.viewportRef),tj={resourceIndex:0,slotIndex:0};(0,U.useIsomorphicEffect)(()=>{if(!eu||!tC.current)return;let e=(0,Y.default)(eu),t=e.format("YYYY-MM-DD 00:00:00"),r=e.format("HH:mm:ss"),o=tc.indexOf(t);if(o<0)return;let a=tn.findIndex(e=>e.startTime>=r);if(a<0)return;let s=o*tm+a,n=tR.current[0];if(!n||0===n.length)return;let i=n[s];if(!i)return;let l=i.getBoundingClientRect(),d=tC.current.getBoundingClientRect(),u=tC.current.querySelector(`.${W.resourcesWeekViewCorner}`),c=u?u.getBoundingClientRect().width:0;tC.current.scrollTo({left:l.left-d.left-c,top:0})},[]);let tP=(0,X.useCallback)((e,t)=>(0,h.getIndexFromDragPoint)(tR.current[t]??[],e.clientX),[]),tW=(e,t,r)=>{(0,v.handleResourcesGridKeyDown)({controlsRef:tR,resourceIndex:t,slotIndex:r,event:e})},tL=100/tc.length,tO=ti.map((e,t)=>{let r=[],o=tk.allDayBars[e.id]??[],a=o.reduce((e,t)=>Math.max(e,t.row+1),0);tc.forEach((o,a)=>{let s=tk.byDay[o];if(!s)return;let n=a/tc.length*100;for(let t of[...s.backgroundTimedEvents[e.id]||[],...s.backgroundAllDayEvents[e.id]||[]]){let e=te.variantColorResolver({color:t.color||te.primaryColor,theme:te,variant:"light",autoContrast:!0}),a="function"==typeof eR?eR(t):t.title,s={key:`bg-${t.id}-${o}`,...e6("resourcesWeekViewBackgroundEvent",{style:{left:`${n+t.position.top/100*tL}%`,width:`${t.position.height/100*tL}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":e.background,"--bg-event-color":e.color},children:a};"function"==typeof eY?r.push(eY(t,s)):r.push((0,j.jsx)(C.Box,{...s}))}let i=(s.regularEvents[e.id]||[]).filter(e=>!(0,u.isAllDayEvent)({event:e,date:o}));for(let e of void 0!==e4?i.filter(e=>e.position.column<e4):i){let s=tx.isDraggableEvent(e),i=tE.isResizableEvent(e),l=tE.getResizePosition(e.id),d=null!==l,u=d&&tE.resizingEdge?tE.resizingEdge:null,c=l?l.left:e.position.top,m=l?l.width:e.position.height,f=n+c/100*tL,v=m/100*tL,g=i?te.variantColorResolver({color:e.color||te.primaryColor,theme:te,variant:e.variant||"light",autoContrast:!0}):null,h=void 0!==e4&&e.position.overlaps>e4,p=(0,Y.default)(o).format("YYYY-MM-DD");r.push((0,j.jsxs)(C.Box,{...e6("resourcesWeekViewEventWrapper"),__vars:g?{"--event-color":g.color}:void 0,"data-resizing":d||void 0,style:{left:`calc(${f}% + 1px)`,top:h?`calc((100% - 22px) * ${e.position.column} / ${e4})`:`${e.position.offset}%`,width:`calc(${v}% - 2px)`,height:h?`calc((100% - 22px) / ${e4})`:`${e.position.width}%`},children:[(0,j.jsx)(y.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:s,isResizing:d,renderEventBody:eR,renderEvent:eY,radius:ed,mode:eK,onClick:eF?t=>{tE.wasResizing()||eF(e,t)}:void 0,style:{width:"100%",height:"100%"}}),i&&"static"!==eK&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{...e6("resourcesWeekViewResizeHandle"),"data-edge":"start","data-active":"start"===u||void 0,onPointerDown:r=>{let o=tY.current[t];o&&tE.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:p,dayIndex:a,dayCount:tc.length,pointerEvent:r})}}),(0,j.jsx)("div",{...e6("resourcesWeekViewResizeHandle"),"data-edge":"end","data-active":"end"===u||void 0,onPointerDown:r=>{let o=tY.current[t];o&&tE.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:p,dayIndex:a,dayCount:tc.length,pointerEvent:r})}})]})]},`${e.id}-${o}`))}if(void 0!==e4)for(let t of(0,T.getOverlapClusters)(i)){let a=t.filter(e=>e.position.column>=e4).length;if(a>0&&"static"!==eK){let s=n+Math.min(...t.map(e=>e.position.top))/100*tL,i=n+Math.max(...t.map(e=>e.position.top+e.position.height))/100*tL;r.push((0,j.jsx)(x.MoreEvents,{events:t,moreEventsCount:a,mode:eK,labels:ek,renderEventBody:eR,renderEvent:eY,onEventClick:eF,style:{position:"absolute",left:`calc(${s}% + 1px)`,width:`calc(${i-s}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...e5,...eQ},`more-${e.id}-${o}-${t[0].id}`))}}});let s=tu?"calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)":"calc(var(--resources-week-view-resource-label-width) + 5px)";return o.forEach(e=>{let t=e.startDayIndex*tL,o=(e.endDayIndex-e.startDayIndex+1)*tL;r.push((0,j.jsx)("div",{...e6("resourcesWeekViewAllDayEvent",{style:{left:`calc(${t}% + 1px)`,width:`calc(${o}% - 2px)`,top:`calc(${e.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`}}),children:(0,j.jsx)(y.ScheduleEvent,{event:e.event,autoSize:!0,nowrap:!0,renderEventBody:e=>(0,j.jsx)("span",{style:{position:"sticky",insetInlineStart:s,display:"inline-block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},children:eR?eR(e):e.title}),renderEvent:eY,radius:ed,mode:eK,onClick:eF?t=>eF(e.event,t):void 0,style:{width:"100%",height:"100%",overflow:"visible"},styles:{eventInner:{display:"block",overflow:"visible",lineHeight:"var(--resources-week-view-all-day-height)"}}})},`all-day-${e.event.id}-${e.startDayIndex}`))}),(0,j.jsx)(P,{resource:e,resourceIndex:t,weekdays:tc,slots:tn,getStyles:e6,labels:ek,highlightBusinessHours:eM,businessHours:eV,withEventsDragAndDrop:tT,mode:eK,slotsRef:tR,firstSlotIndex:tj,onSlotKeyDown:tW,onSlotClick:tI,onRowSlotsDragOver:(e,t,r)=>{let o=tP(e,r);null!==o&&tx.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:tx.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tP(e,r);null!==o&&tx.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:tx.dropTarget?.resourceId===e.id?tx.dropTarget.slotIndex:void 0,withDragSlotSelect:eG,onSlotPointerDown:tb.handleSlotPointerDown,isSlotDragSelected:tb.isSlotSelected,rowSlotsContainerRef:e=>{tY.current[t]=e},renderResourceLabel:eC,renderGroupLabel:ej,scrolledX:to,groupInfo:tu?td[t]:void 0,allDayCount:a,children:r},e.id)}),tB=(0,b.getWeekLabel)({weekdays:tc,locale:ts.getLocale(em),weekLabelFormat:eS,renderWeekLabel:eb}),t_=th>=0?(th+tv/100)/tc.length*100:0,tH=(0,j.jsxs)(C.Box,{...e6("resourcesWeekView"),mod:{static:"static"===eK,"slot-dragging":tb.isDragging,resizing:tE.isResizing,"event-interaction":tE.isResizing||tx.dragContextValue.isDragging},...e2,children:[eh&&(0,j.jsx)(S.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>(0,i.previousWeek)(ea,ts.getFirstDayOfWeek(eZ)),next:()=>(0,n.nextWeek)(ea,ts.getFirstDayOfWeek(eZ)),today:()=>(0,a.toDateString)((0,Y.default)())},control:{miw:180,title:tB},labels:ek,onDateChange:es,onViewChange:ep,previousControlProps:ew,nextControlProps:eD,todayControlProps:ey,viewSelectProps:{views:["day","week","month"],...ex},stylesApiProps:e5}),(0,j.jsx)(C.Box,{...e6("resourcesWeekViewRoot"),children:(0,j.jsx)(L.ScrollArea,{scrollbarSize:4,...ec,...e6("resourcesWeekViewScrollArea",{className:ec?.className,style:ec?.style}),onScrollPositionChange:e=>{ec?.onScrollPositionChange?.(e),tr(0!==e.y),ta(0!==e.x)},viewportRef:t$,children:(0,j.jsxs)("div",{...e6("resourcesWeekViewInner"),children:[(0,j.jsxs)("div",{...e6("resourcesWeekViewHeaderRows"),children:[(0,X.createElement)("div",{...e6("resourcesWeekViewCorner"),key:"corner",style:tu?{flexBasis:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))",minWidth:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ek)),(0,j.jsxs)("div",{...e6("resourcesWeekViewHeaderContent"),children:[(0,j.jsx)("div",{...e6("resourcesWeekViewDayLabelsRow"),children:tM}),(0,j.jsx)(C.Box,{...e6("resourcesWeekViewTimeLabelsRow"),mod:{scrolled:tt},children:tV})]})]}),tO,tp&&(0,j.jsxs)(C.Box,{...e6("resourcesWeekViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":tu?`calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${t_} / 100)`:`calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${t_} / 100)`,"--_time-bubble-width":tw?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ev&&(0,j.jsx)("div",{...e6("resourcesWeekViewCurrentTimeIndicatorTimeBubble"),children:tw}),!ev&&(0,j.jsx)("div",{...e6("resourcesWeekViewCurrentTimeIndicatorThumb")}),(0,j.jsx)("div",{...e6("resourcesWeekViewCurrentTimeIndicatorLine")})]})]})})})]}),tz=(0,X.useMemo)(()=>tx.dragContextValue,[tx.dragContextValue]);return eW?(0,j.jsx)(D.DragContext.Provider,{value:tz,children:tH}):tH});Z.displayName="@mantine/schedule/ResourcesWeekView",Z.classes=W,Z.varsResolver=Q,e.s(["ResourcesWeekView",0,Z],499083)},272013,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(4332),a=e.i(276995),s=e.i(657068),n=e.i(420924),i=e.i(176304),l=e.i(461304),d=e.i(783261),u=e.i(376879),c=e.i(201867),m=e.i(891343),f=e.i(67312),v=e.i(966696),g={resourcesMonthView:"m_652b3acd",resourcesMonthViewRoot:"m_146e014f",resourcesMonthViewScrollArea:"m_b1cab7a7",resourcesMonthViewInner:"m_78d2db89",resourcesMonthViewDayLabelsRow:"m_eae51c8c",resourcesMonthViewCorner:"m_975b8b82",resourcesMonthViewDayLabel:"m_bc016ea5",resourcesMonthViewDayLabelWeekday:"m_52a1c4c3",resourcesMonthViewDayLabelNumber:"m_88d8e64e",resourcesMonthViewRow:"m_21b0f7cd",resourcesMonthViewResourceLabel:"m_1febcdb9",resourcesMonthViewGroupColumn:"m_1fc335a8",resourcesMonthViewGroupColumnEmpty:"m_d5a3a885",resourcesMonthViewRowSlots:"m_4be74668",resourcesMonthViewCell:"m_146709cf"},h=e.i(494834),p=e.i(232471),w=e.i(19300),D=e.i(284629),y=e.i(481178),x=e.i(275519),S=e.i(433512),b=e.i(779177),E=e.i(44091),T=e.i(62904),I=e.i(391466),k=e.i(417241),M=e.i(332977),V=e.i(191788),R=e.i(205693),Y=e.i(391398);let C=(0,y.createVarsResolver)((e,{radius:t,dayWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesMonthView:{"--resources-month-view-radius":t?(0,S.getRadius)(t):void 0,"--resources-month-view-day-width":(0,b.rem)(r),"--resources-month-view-row-height":(0,b.rem)(o),"--resources-month-view-group-label-width":(0,b.rem)(a)}})),$={__staticSelector:"ResourcesMonthView",highlightToday:!0,withHeader:!0,weekdayFormat:"ddd",withWeekendDays:!0,withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"};function j(e,t){let r=(0,h.default)(e.start),o=(0,h.default)(t.start),a=(0,h.default)(e.end).startOf("day").diff(r.startOf("day"),"day"),s=(0,h.default)(t.end).startOf("day").diff(o.startOf("day"),"day");return a!==s?s-a:r.valueOf()-o.valueOf()}function P(e){return(0,h.default)(e.end).startOf("day").isAfter((0,h.default)(e.start).startOf("day"))}let W=(0,x.factory)(e=>{let y=(0,E.useProps)("ResourcesMonthView",$,e),{classNames:x,className:S,style:b,styles:W,unstyled:L,attributes:O,vars:B,mod:_,date:H,onDateChange:z,resources:A,locale:N,weekdayFormat:F,weekendDays:G,withWeekendDays:U,startScrollDate:K,__staticSelector:X,onDayClick:q,highlightToday:J,radius:Q,withHeader:Z,monthYearSelectProps:ee,onViewChange:et,todayControlProps:er,nextControlProps:eo,previousControlProps:ea,viewSelectProps:es,events:en,dayWidth:ei,rowHeight:el,renderResourceLabel:ed,groups:eu,renderGroupLabel:ec,groupLabelWidth:em,renderEventBody:ef,renderEvent:ev,withEventsDragAndDrop:eg,onEventDrop:eh,canDragEvent:ep,onEventDragStart:ew,onEventDragEnd:eD,onEventClick:ey,withDragSlotSelect:ex,onSlotDragEnd:eS,labels:eb,mode:eE,scrollAreaProps:eT,onExternalEventDrop:eI,maxEventsPerTimeSlot:ek,moreEventsProps:eM,recurrenceExpansionLimit:eV,...eR}=y,eY=Math.min(10,Math.max(1,ek??2)),eC=(0,I.useStyles)({name:X,classes:g,props:y,className:S,style:b,classNames:x,styles:W,unstyled:L,attributes:O,vars:B,varsResolver:C,rootSelector:"resourcesMonthView"}),{resolvedClassNames:e$,resolvedStyles:ej}=(0,T.useResolvedStylesApi)({classNames:x,styles:W,props:y}),eP={classNames:e$,styles:ej,attributes:O,__staticSelector:X,radius:Q},eW=(0,R.useDatesContext)(),eL=eW.getWeekendDays(G),{orderedResources:eO,groupRanges:eB,resourceGroupMap:e_}=(0,V.useMemo)(()=>(0,n.getOrderedResources)(A,eu),[A,eu]),eH=eB.length>0,ez=(0,V.useMemo)(()=>{let e=(0,h.default)(H).startOf("month"),t=e.endOf("month").date(),r=eW.getWeekendDays(G),o=[];for(let a=1;a<=t;a++){let t=e.date(a);!U&&r.includes(t.day())||o.push(t.format("YYYY-MM-DD"))}return o},[H,U,G,eW]),eA=(0,V.useRef)(null),eN=(0,M.useMergedRef)(eA,eT?.viewportRef),eF=(0,V.useRef)([]),eG=(0,V.useRef)(null),eU=(0,V.useCallback)(e=>{if(!eA.current)return;let t=ez.indexOf(e);if(t<0)return;let r=eF.current[t];if(!r)return;let o=r.getBoundingClientRect(),a=eA.current.getBoundingClientRect(),s=eG.current?.getBoundingClientRect().width??0;eA.current.scrollTo({left:o.left-a.left-s,top:0})},[ez]);(0,k.useIsomorphicEffect)(()=>{K&&eU(K)},[]);let eK=(0,V.useMemo)(()=>(0,s.expandRecurringEvents)({events:en,rangeStart:(0,h.default)(H).startOf("month").toDate(),rangeEnd:(0,h.default)(H).endOf("month").toDate(),expansionLimit:eV}),[en,H,eV]),{eventsByResourceAndDay:eX,eventLayoutByResource:eq}=(0,V.useMemo)(()=>{let e={};for(let t of A)for(let r of(e[t.id]={},ez))e[t.id][r]=[];if(eK)for(let t of eK){if(void 0===t.resourceId||!(t.resourceId in e))continue;let r=(0,h.default)(t.start),o=(0,h.default)(t.end);for(let a of ez){let s=(0,h.default)(a).startOf("day"),n=(0,h.default)(a).endOf("day");r.isBefore(n)&&o.isAfter(s)&&e[t.resourceId][a].push(t)}}let t={},r=(0,h.default)(ez[0]).startOf("day"),o=(0,h.default)(ez[ez.length-1]).add(1,"day").startOf("day");for(let a of A){let s={},n=new Map,i=new Map,l=new Map;ez.forEach((t,r)=>{let o=e[a.id][t];for(let e of(o.sort(j),o)){let t=l.get(e.id);t?t.days.push(r):l.set(e.id,{event:e,days:[r]})}let d=new Set,u=[],c=0;for(let e of o){let t=n.get(e.id);if((void 0===t||t>=eY||d.has(t))&&(t=function(e,t){for(let r=0;r<t;r+=1)if(!e.has(r))return r;return null}(d,eY)),null===t){c+=1;continue}d.add(t),u.push({event:e,row:t}),i.has(e.id)||i.set(e.id,new Map),i.get(e.id).set(r,t),n.set(e.id,t)}s[t]={visible:u,hiddenCount:c}});let d=[];for(let{event:e,days:t}of l.values()){if(!P(e))continue;let a=t[0],n=t[t.length-1],l=i.get(e.id),u=(0,h.default)(e.start).isBefore(r),c=(0,h.default)(e.end).isAfter(o),m=null,f=()=>{if(!m)return;let t=m.startDayIndex>a,r=m.endDayIndex<n,o=!t&&u,i=!r&&c,l=!1;for(let e=m.startDayIndex;e<=m.endDayIndex;e+=1)if((s[ez[e]]?.hiddenCount??0)>0){l=!0;break}d.push({event:e,startDayIndex:m.startDayIndex,endDayIndex:m.endDayIndex,row:m.row,clipStart:t,clipEnd:r,hanging:o&&i?"both":o?"start":i?"end":"none",hiddenInSpan:l}),m=null};for(let e=a;e<=n;e+=1){let t=l?.get(e);if(void 0===t){f();continue}m&&m.row===t&&m.endDayIndex===e-1?m.endDayIndex=e:(f(),m={startDayIndex:e,endDayIndex:e,row:t})}f()}t[a.id]={byDay:s,segments:d}}return{eventsByResourceAndDay:e,eventLayoutByResource:t}},[A,ez,eK,eY]),eJ=(0,V.useCallback)((e,t)=>{eI&&eI({dataTransfer:e.dataTransfer,dropDateTime:`${(0,h.default)(t.day).format("YYYY-MM-DD")} 00:00:00`,resourceId:t.resourceId})},[eI]),eQ=(0,d.useDragDropHandlers)({enabled:eg,mode:eE,onEventDrop:e=>{eh?.({...e,resourceId:eZ.current})},canDragEvent:ep,onEventDragStart:ew,onEventDragEnd:eD,calculateDropTarget:(e,t)=>(eZ.current=e.resourceId,(0,a.calculateMonthDropDate)({draggedEvent:t,targetDay:e.day})),onExternalDrop:eI?eJ:void 0}),eZ=(0,V.useRef)(void 0),e0=(eg||!!eI)&&"static"!==eE,e1=(0,V.useMemo)(()=>(0,i.getGroupToResourceIdMap)(A),[A]),e8=(0,u.useSlotDragSelect)({enabled:ex&&"static"!==eE,onDragEnd:(e,t,r)=>{if(!eS)return;let o=ez[e],a=ez[t];o&&a&&eS({rangeStart:(0,h.default)(o).startOf("day").format("YYYY-MM-DD HH:mm:ss"),rangeEnd:(0,h.default)(a).endOf("day").format("YYYY-MM-DD HH:mm:ss"),resourceId:e1.get(r)??r})}}),e3=ez.map((e,t)=>{let o=(0,h.default)(e),a=eL.includes(o.day()),s=o.isSame((0,h.default)(),"day")&&J;return(0,V.createElement)(p.Box,{...eC("resourcesMonthViewDayLabel"),key:e,mod:{weekend:a,today:s},ref:e=>{eF.current[t]=e}},(0,Y.jsx)("span",{...eC("resourcesMonthViewDayLabelWeekday"),children:(0,r.formatDate)({date:o,locale:eW.getLocale(N),format:F})}),(0,Y.jsx)("span",{...eC("resourcesMonthViewDayLabelNumber"),children:o.date()}))}),e2=(0,V.useRef)([]),e4=(0,V.useCallback)((e,t)=>(0,l.getIndexFromDragPoint)(e2.current[t]??[],e.clientX),[]),e6=100/eY,e9=eO.map((e,t)=>{e2.current[t]||(e2.current[t]=[]);let r=String(e.id),o=eQ.dropTarget,a=ez.length,s=[],n=[],i=ez.map((i,l)=>{let d=(0,h.default)(i),u=eW.getWeekendDays(G).includes(d.day()),c=null!==o&&"object"==typeof o&&"day"in o&&o.day===i&&o.resourceId===e.id,v=e8.isSlotSelected(l,r),g=eX[e.id]?.[i]||[],p=eq[e.id]?.byDay[i],w=p?.visible??[],y=p?.hiddenCount??0,x=0===t&&0===l,S=l/a*100,b=100/a,E=y>0&&"static"!==eE;return w.forEach(({event:e,row:t})=>{if(P(e))return;let r=eQ.isDraggableEvent(e),o=E?`calc((100% - 18px) * ${t} / ${eY} + 1px)`:`calc(${t*e6}% + 1px)`,a=E?`calc((100% - 18px) / ${eY} - 2px)`:`calc(${e6}% - 2px)`;s.push((0,Y.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,size:"sm",draggable:r,renderEventBody:ef,renderEvent:ev,radius:Q,mode:eE,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:o,left:`calc(${S}% + 1px)`,width:`calc(${b}% - 2px)`,height:a,zIndex:3}},`${e.id}-${i}`))}),y>0&&"static"!==eE&&n.push((0,Y.jsx)(f.MoreEvents,{events:g,moreEventsCount:y,mode:eE,labels:eb,renderEventBody:ef,renderEvent:ev,onEventClick:ey,style:{position:"absolute",bottom:1,left:`calc(${S}% + 1px)`,width:`calc(${b}% - 2px)`,height:18,zIndex:4},...eP,...eM},`more-${e.id}-${i}`)),(0,Y.jsx)(D.UnstyledButton,{ref:e=>{e&&(e2.current[t]||(e2.current[t]=[]),e2.current[t][l]=e)},...eC("resourcesMonthViewCell"),"aria-label":`${e.label} ${d.format("MMMM D, YYYY")}`,"data-drag-slot-index":ex&&"static"!==eE?l:void 0,"data-drag-slot-group":ex&&"static"!==eE?r:void 0,mod:{weekend:u,"drop-target":c,"drag-selected":v,static:"static"===eE},tabIndex:"static"===eE?-1:x?0:-1,onClick:"static"===eE?void 0:t=>q?.({date:i,nativeEvent:t,resourceId:e.id}),onKeyDown:"static"===eE?void 0:e=>((e,t,r)=>{let o=e.key,a=t,s=r;if("ArrowRight"===o)s=Math.min(r+1,ez.length-1);else if("ArrowLeft"===o)s=Math.max(r-1,0);else if("ArrowDown"===o)a=Math.min(t+1,A.length-1);else{if("ArrowUp"!==o)return;a=Math.max(t-1,0)}e.preventDefault(),e2.current[a]?.[s]?.focus()})(e,t,l),onPointerDown:ex&&"static"!==eE?e=>e8.handleSlotPointerDown(e,l,r):void 0,onDragOver:e0?e=>e.preventDefault():void 0},i)});(eq[e.id]?.segments??[]).forEach(e=>{let t=eQ.isDraggableEvent(e.event),r=e.startDayIndex/a*100,o=(e.endDayIndex-e.startDayIndex+1)/a*100,n=e.hiddenInSpan&&"static"!==eE,i=n?`calc((100% - 18px) * ${e.row} / ${eY} + 1px)`:`calc(${e.row*e6}% + 1px)`,l=n?`calc((100% - 18px) / ${eY} - 2px)`:`calc(${e6}% - 2px)`;s.push((0,Y.jsx)(m.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,size:"sm",hanging:e.hanging,draggable:t,renderEventBody:ef,renderEvent:ev,radius:Q,mode:eE,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ey?t=>ey(e.event,t):void 0,style:{position:"absolute",top:i,left:`calc(${r}% + 1px)`,width:`calc(${o}% - 2px)`,height:l,zIndex:3}},`${e.event.id}-segment-${e.startDayIndex}`))});let l=eH?e_[t]:void 0,d=l?.position==="first"||l?.position==="only",u=void 0!==l?null!==l?(0,Y.jsx)(p.Box,{...eC("resourcesMonthViewGroupColumn"),mod:{"group-position":l.position},children:d&&(0,Y.jsx)("span",{style:l.count>1?{transform:`translateY(calc((${l.count-1} * (var(--resources-month-view-row-height) + 1px)) / 2))`}:void 0,children:ec?ec(l.group):l.group.label})}):(0,Y.jsx)(p.Box,{...eC("resourcesMonthViewGroupColumnEmpty")}):null;return(0,V.createElement)("div",{...eC("resourcesMonthViewRow"),key:e.id},u,(0,Y.jsx)("div",{...eC("resourcesMonthViewResourceLabel"),"data-has-groups":eH||void 0,children:ed?ed(e):e.label}),(0,Y.jsxs)("div",{...eC("resourcesMonthViewRowSlots"),onDragOver:e0?r=>{let o=e4(r,t);null!==o&&ez[o]&&eQ.handleDragOver(r,{day:ez[o],resourceId:e.id})}:void 0,onDragLeave:e0?eQ.handleDragLeave:void 0,onDrop:e0?r=>{let o=e4(r,t);null!==o&&ez[o]&&eQ.handleDrop(r,{day:ez[o],resourceId:e.id})}:void 0,children:[s,n,i]}))}),e7=(0,Y.jsxs)(p.Box,{mod:[{static:"static"===eE,"slot-dragging":e8.isDragging,"event-interaction":eQ.dragContextValue.isDragging},_],...eC("resourcesMonthView"),...eR,children:[Z&&(0,Y.jsx)(v.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,h.default)(H).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,h.default)(H).add(1,"month").startOf("month")),today:()=>(requestAnimationFrame(()=>{eU((0,h.default)().format("YYYY-MM-DD"))}),(0,o.toDateString)((0,h.default)()))},control:{monthYearSelect:{locale:N,yearValue:(0,h.default)(H).get("year"),monthValue:(0,h.default)(H).get("month"),onYearChange:e=>z?.((0,o.toDateString)((0,h.default)(H).set("year",e).startOf("month"))),onMonthChange:e=>z?.((0,o.toDateString)((0,h.default)(H).set("month",e).startOf("month"))),...ee}},labels:eb,onDateChange:z,onViewChange:et,previousControlProps:ea,nextControlProps:eo,todayControlProps:er,viewSelectProps:{views:["day","week","month"],...es},stylesApiProps:eP}),(0,Y.jsx)(p.Box,{...eC("resourcesMonthViewRoot"),children:(0,Y.jsx)(w.ScrollArea,{scrollbars:"x",scrollbarSize:4,...eT,...eC("resourcesMonthViewScrollArea",{className:eT?.className,style:eT?.style}),viewportRef:eN,children:(0,Y.jsxs)("div",{...eC("resourcesMonthViewInner"),children:[(0,Y.jsxs)("div",{...eC("resourcesMonthViewDayLabelsRow"),children:[(0,V.createElement)("div",{...eC("resourcesMonthViewCorner"),key:"corner",ref:eG,style:eH?{flexBasis:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))",minWidth:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eb)),e3]}),e9]})})})]});return eg?(0,Y.jsx)(c.DragContext.Provider,{value:eQ.dragContextValue,children:e7}):e7});W.displayName="@mantine/schedule/ResourcesMonthView",W.classes=g,W.varsResolver=C,e.s(["ResourcesMonthView",0,W],272013)},853905,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(5,"day").format("YYYY-MM-DD"),n=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],i=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${o} 09:30:00`,end:`${o} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${o} 11:00:00`,end:`${o} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${o} 10:00:00`,end:`${o} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${a} 15:00:00`,end:`${a} 16:00:00`,color:"grape",resourceId:"london"}],l="\nimport dayjs from 'dayjs';\nimport { ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\nconst nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n  { id: 'london', label: 'Meeting room: London' },\n];\n\nconst events = [\n  { id: 1, title: 'Team Standup', start: `${today} 09:00:00`, end: `${today} 09:30:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 4, title: 'Design Review', start: `${tomorrow} 13:00:00`, end: `${tomorrow} 14:00:00`, color: 'orange', resourceId: 'paris' },\n  { id: 5, title: '1:1 Meeting', start: `${today} 11:00:00`, end: `${today} 11:30:00`, color: 'cyan', resourceId: 'new-york' },\n  { id: 6, title: 'Workshop', start: `${nextWeek} 14:00:00`, end: `${nextWeek} 16:00:00`, color: 'pink', resourceId: 'new-york' },\n  { id: 7, title: 'Architecture Review', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'red', resourceId: 'london' },\n  { id: 8, title: 'Retrospective', start: `${tomorrow} 15:00:00`, end: `${tomorrow} 16:00:00`, color: 'grape', resourceId: 'london' },\n];\n";var d=e.i(191788),u=e.i(391398),c=e.i(613490),m=e.i(499083),f=e.i(272013),v={root:"m_428e1853"},g=e.i(232471),h=e.i(275519),p=e.i(44091),w=e.i(391466),D=e.i(579560);let y={defaultView:"day",mode:"default"},x=(0,h.factory)(e=>{let t=(0,p.useProps)("ResourcesSchedule",y,e),{classNames:r,className:o,style:a,styles:s,unstyled:n,vars:i,resources:l,date:d,defaultDate:h,onDateChange:x,view:S,defaultView:b,onViewChange:E,events:T,locale:I,radius:k,labels:M,renderEventBody:V,renderResourceLabel:R,withEventsDragAndDrop:Y,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:P,onTimeSlotClick:W,onDayClick:L,onEventClick:O,withDragSlotSelect:B,onSlotDragEnd:_,onExternalEventDrop:H,withEventResize:z,onEventResize:A,canResizeEvent:N,recurrenceExpansionLimit:F,mode:G,dayViewProps:U,weekViewProps:K,monthViewProps:X,__staticSelector:q,mod:J,...Q}=t,Z=(0,w.useStyles)({name:q||"ResourcesSchedule",classes:v,props:t,className:o,style:a,classNames:r,styles:s,unstyled:n,vars:i}),[ee,et]=(0,D.useUncontrolled)({value:S,defaultValue:b,onChange:E}),[er,eo]=(0,D.useUncontrolled)({value:d,defaultValue:h??new Date}),ea={resources:l,date:er,onDateChange:e=>{eo(e),x?.(e)},onViewChange:e=>{("day"===e||"week"===e||"month"===e)&&et(e)},events:T,locale:I,radius:k,labels:M,renderEventBody:V,renderResourceLabel:R,withEventsDragAndDrop:"static"!==G&&Y,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:P,onEventClick:O,withDragSlotSelect:B,onSlotDragEnd:_,onExternalEventDrop:H,recurrenceExpansionLimit:F,mode:G},es=(()=>{switch(ee){case"day":return(0,u.jsx)(c.ResourcesDayView,{...ea,onTimeSlotClick:W,withEventResize:"static"!==G&&z,onEventResize:A,canResizeEvent:N,...U});case"week":return(0,u.jsx)(m.ResourcesWeekView,{...ea,onTimeSlotClick:W,withEventResize:"static"!==G&&z,onEventResize:A,canResizeEvent:N,...K});case"month":return(0,u.jsx)(f.ResourcesMonthView,{...ea,onDayClick:L,...X});default:return null}})();return(0,u.jsx)(g.Box,{...Z("root"),mod:J,...Q,children:es})});x.displayName="@mantine/schedule/ResourcesSchedule",x.classes=v;let S={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},b={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:a,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)("day");return(0,u.jsx)(x,{date:t,onDateChange:o,view:a,onViewChange:s,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{maxEventsPerTimeSlot:3,startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var I=e.i(162077),k=e.i(988798);let M={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i),[l,c]=(0,d.useState)(!1),[m,f]=(0,d.useState)(null),[v,g]=(0,d.useState)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:a,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{g(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onDayClick:({date:e,resourceId:t})=>{g(t?String(t):null),f({title:"",start:(0,r.default)(e).startOf("day").toDate(),end:(0,r.default)(e).endOf("day").toDate(),color:"blue"}),c(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{g(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onEventClick:e=>{g(e.resourceId?String(e.resourceId):null),f({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),c(!0)},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}}),(0,u.jsx)(I.EventForm,{opened:l,onClose:()=>c(!1),onExitTransitionEnd:()=>f(null),values:m,onSubmit:e=>{e.id?s(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||t.resourceId}:t)):s(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||void 0}])},onDelete:m?.id?()=>{m?.id&&s(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,u.jsx)(k.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:n.map(e=>({value:String(e.id),label:String(e.label)})),value:v,onChange:g})})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:I._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:a,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},R={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:i,mode:"static",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:i,defaultView:"week",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var C=e.i(20035),$=e.i(883364);let j=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],P={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)([]),i=(0,d.useRef)(1);return(0,u.jsxs)(C.Grid,{children:[(0,u.jsxs)(C.Grid.Col,{span:{base:12,sm:3},children:[(0,u.jsx)($.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),j.map(e=>(0,u.jsxs)(g.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,u.jsx)($.Text,{size:"sm",fw:500,children:e.title}),(0,u.jsxs)($.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,u.jsx)(C.Grid.Col,{span:{base:12,sm:9},children:(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:a,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:o})=>{let a=e.getData("text/plain");if(!a)return;let n=JSON.parse(a),l=(0,r.default)(t),d=l.add(n.duration,"minutes");s(e=>[...e,{id:i.current++,title:n.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:n.color,resourceId:o}])}})})]})},code:`
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
`};var W=(0,t.__exportAll)({controlled:()=>E,dragDrop:()=>b,eventForm:()=>M,eventResize:()=>V,externalDragDrop:()=>P,staticMode:()=>R,usage:()=>S,viewProps:()=>T,weekView:()=>Y});e.s(["ResourcesScheduleDemos",0,W],853905)}]);