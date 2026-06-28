(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let r=new Map(e.map(e=>[e.id,e])),o=new Set,a=[],n=[];for(let e of t){let t=a.length,s=0;for(let t of e.resourceIds){let e=r.get(t);e&&!o.has(t)&&(a.push(e),o.add(t),s++)}s>0&&n.push({group:e,startIndex:t,count:s})}for(let t of e)o.has(t.id)||a.push(t);let s=Array(a.length).fill(null);for(let e of n)for(let t=0;t<e.count;t++){let r,o=e.startIndex+t;r=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",s[o]={group:e.group,position:r,count:e.count}}return{orderedResources:a,groupRanges:n,resourceGroupMap:s}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let r of e)t.set(String(r.id),r.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let r=e.findIndex(e=>{if(!e)return!1;let r=e.getBoundingClientRect();return t>=r.left&&t<=r.right});if(r>=0)return r;let o=e[0],a=e[e.length-1];if(!o||!a)return null;let n=o.getBoundingClientRect(),s=a.getBoundingClientRect();return t<n.left?0:t>s.right?e.length-1:null}],461304)},640542,343355,367752,578373,e=>{"use strict";e.s(["handleResourcesGridKeyDown",0,function({controlsRef:e,resourceIndex:t,slotIndex:r,event:o}){let a=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(o.key);if(a){o.preventDefault();let n=e.current?e.current.map(e=>e?e.length:0):null;if(!n)return;!function e({controlsRef:t,direction:r,resourceIndex:o,slotIndex:a,size:n}){let s=function({direction:e,resourceIndex:t,slotIndex:r,size:o}){let a=o[t];if(!a)return null;switch(e){case"left":if(0===r)return null;return{resourceIndex:t,slotIndex:r-1};case"right":if(r===a-1)return null;return{resourceIndex:t,slotIndex:r+1};case"up":{if(0===t)return null;let e=o[t-1];return{resourceIndex:t-1,slotIndex:Math.min(r,e-1)}}case"down":{if(t===o.length-1)return null;let e=o[t+1];return{resourceIndex:t+1,slotIndex:Math.min(r,e-1)}}default:return null}}({direction:r,resourceIndex:o,slotIndex:a,size:n});if(!s)return;let i=t.current?.[s.resourceIndex]?.[s.slotIndex];i&&(i.disabled||i.getAttribute("data-hidden")?e({controlsRef:t,direction:r,resourceIndex:s.resourceIndex,slotIndex:s.slotIndex,size:n}):i.focus())}({controlsRef:e,direction:a,resourceIndex:t,slotIndex:r,size:n})}}],640542);var t=e.i(672654),r=e.i(42916),o=e.i(494834),a=e.i(191788);e.s(["useHorizontalEventResize",0,function({enabled:e=!1,mode:n="default",startTime:s,endTime:i,intervalMinutes:l,onEventResize:d,canResizeEvent:u}){let[c,m]=(0,a.useState)(null),f=(0,a.useRef)(null),v=(0,a.useRef)(!1),g=(0,a.useEffectEvent)(d||(()=>{})),p=(0,r.parseTimeString)(s),D=(0,r.parseTimeString)(i),h=60*p.hours+p.minutes,w=60*D.hours+D.minutes,y=(0,t.clampIntervalMinutes)(l),S=w-h,x=Math.ceil(S/y)*y,E=y/x*100,T=(0,a.useCallback)(e=>Math.max(0,Math.min(S,Math.round(e/y)*y)),[S,y]),M=(0,a.useCallback)((e,t)=>{let r=h+T(e/100*x),o=Math.floor(r/60);return`${t} ${String(o).padStart(2,"0")}:${String(r%60).padStart(2,"0")}:00`},[x,h,T]),b=(0,a.useCallback)(e=>T(e/100*x)/x*100,[x,T]),Y=(0,a.useCallback)(({event:t,edge:r,container:a,originalLeft:s,originalWidth:i,eventDate:l,dayIndex:d=0,dayCount:u=1,pointerEvent:c})=>{if(!e||"static"===n)return;c.preventDefault(),c.stopPropagation();let v={eventId:t.id,event:t,edge:r,container:a,originalLeft:s,originalWidth:i,currentLeft:s,currentWidth:i,eventDate:l,originalStart:(0,o.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,o.default)(t.end).format("YYYY-MM-DD HH:mm:ss"),dayIndex:d,dayCount:u};f.current=v,m(v)},[e,n]),I=null!==c;(0,a.useEffect)(()=>{if(!I)return;let e=document.body.style.userSelect,t=document.body.style.cursor;document.body.style.userSelect="none",document.body.style.cursor="ew-resize";let r=e=>{let t=f.current;if(!t)return;let r=t.container.getBoundingClientRect(),o=b(function({clientX:e,containerLeft:t,containerWidth:r,dayIndex:o,dayCount:a}){let n=r/a;return n<=0?0:Math.max(0,Math.min(100,(e-(t+o*n))/n*100))}({clientX:e.clientX,containerLeft:r.left,containerWidth:r.width,dayIndex:t.dayIndex,dayCount:t.dayCount})),a=t.originalLeft,n=t.originalWidth;if("end"===t.edge)n=Math.max(E,o-t.originalLeft);else{let e=t.originalLeft+t.originalWidth;a=Math.min(o,e-E),n=e-a}f.current={...t,currentLeft:a,currentWidth:n},m(f.current)},o=()=>{let e=f.current;if(e&&(e.currentLeft!==e.originalLeft||e.currentWidth!==e.originalWidth)){let t,r;"start"===e.edge?(t=M(e.currentLeft,e.eventDate),r=e.originalEnd):(t=e.originalStart,r=M(e.currentLeft+e.currentWidth,e.eventDate)),g({eventId:e.eventId,newStart:t,newEnd:r,event:e.event})}f.current=null,m(null),v.current=!0,requestAnimationFrame(()=>{v.current=!1})};return document.addEventListener("pointermove",r),document.addEventListener("pointerup",o),()=>{document.body.style.userSelect=e,document.body.style.cursor=t,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o)}},[I]);let R=(0,a.useCallback)(e=>c&&c.eventId===e?{left:c.currentLeft,width:c.currentWidth}:null,[c]),V=(0,a.useCallback)(t=>!!e&&"static"!==n&&"background"!==t.display&&(!u||u(t)),[e,n,u]),C=(0,a.useCallback)(()=>v.current,[]);return{handleResizeStart:Y,isResizing:I,resizingEventId:c?.eventId??null,resizingEdge:c?.edge??null,getResizePosition:R,isResizableEvent:V,wasResizing:C}}],343355);var n=e.i(751198);e.s(["getOverlapClusters",0,function(e){let t=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;let a=[e[o]];r.add(o);let s=0;for(;s<a.length;){for(let t=0;t<e.length;t++)!r.has(t)&&(0,n.isEventsOverlap)(a[s],e[t])&&(a.push(e[t]),r.add(t));s++}t.push(a)}return t}],367752);var s=e.i(969610),i=e.i(298008),l=e.i(68642),d=e.i(532965),u=e.i(922621);e.s(["getResourcesDayViewEvents",0,function({events:e,resources:t,date:r,startTime:a,endTime:n}){let c={regularEvents:{},allDayEvents:{},backgroundTimedEvents:{},backgroundAllDayEvents:{}};for(let e of t)c.regularEvents[e.id]=[],c.allDayEvents[e.id]=[],c.backgroundTimedEvents[e.id]=[],c.backgroundAllDayEvents[e.id]=[];if(void 0===e)return c;let m=(0,o.default)(r).startOf("day"),f=(0,o.default)(r).endOf("day"),v={},g={};for(let e of t)v[e.id]=[],g[e.id]=[];let p=new Set;for(let t of e){if(void 0===t.resourceId||!(t.resourceId in v))continue;let e=(0,o.default)(t.start),r=(0,o.default)(t.end),s=e.isSame(m,"day"),d=e.isBefore(f)&&r.isAfter(m);if(s||d){if(s&&!(0,l.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let o=(0,i.validateEvent)(t);if(p.has(t.id))throw Error(`[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${t.id}`);if(p.add(t.id),"background"===t.display)g[t.resourceId].push(o);else if(s)v[t.resourceId].push(o);else{let s=e.isBefore(m)?m:e,i=r.isAfter(f)?f:r,d={...o,start:s.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss")};(0,l.isEventInTimeRange)({event:d,startTime:a,endTime:n})&&v[t.resourceId].push(d)}}}for(let e of t){for(let t of(0,u.getDayPositionedEvents)({events:v[e.id],startTime:a,endTime:n,date:r}))t.position.allDay?c.allDayEvents[e.id].push(t):c.regularEvents[e.id].push(t);for(let t of g[e.id]){let i=(0,o.default)(t.start),l=(0,o.default)(t.end),u=i.isBefore(m)?m:i,v=l.isAfter(f)?f:l,g={...t,start:u.format("YYYY-MM-DD HH:mm:ss"),end:v.format("YYYY-MM-DD HH:mm:ss")};if((0,s.isAllDayEvent)({event:g,date:r}))c.backgroundAllDayEvents[e.id].push({...t,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:r,height:o}=(0,d.getDayPosition)({event:g,startTime:a,endTime:n});if(o<=0)continue;c.backgroundTimedEvents[e.id].push({...t,position:{top:r,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}}return c}],578373)},613490,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),n=e.i(688785),s=e.i(664397),i=e.i(969610),l=e.i(792930),d=e.i(505696),u=e.i(657068),c=e.i(420924),m=e.i(640542),f=e.i(176304),v=e.i(461304),g=e.i(783261),p=e.i(376879),D=e.i(201867),h=e.i(891343),w=e.i(67312),y=e.i(966696),S=e.i(343355),x=e.i(367752),E=e.i(578373),T=e.i(232471),M=e.i(284629),b=e.i(391398);function Y({resource:e,resourceIndex:r,date:o,slots:a,getStyles:n,children:s,labels:i,highlightBusinessHours:l,businessHours:u,withEventsDragAndDrop:c,onRowSlotsDragOver:m,onRowSlotsDragLeave:f,onRowSlotsDrop:v,onSlotClick:g,dropTargetSlotIndex:p,mode:D,slotsRef:h,firstSlotIndex:w,onSlotKeyDown:y,withDragSlotSelect:S,onSlotPointerDown:x,isSlotDragSelected:E,rowSlotsContainerRef:I,renderResourceLabel:R,renderGroupLabel:V,scrolledX:C,groupInfo:k,allDayCount:$}){let j=String(e.id),P=a.map((a,s)=>{let m=p===s,f=w?.resourceIndex===r&&w?.slotIndex===s,v=E?.(s,j)||!1;return(0,b.jsx)(M.UnstyledButton,{ref:e=>{if(!h?.current)return;h.current[r]||(h.current[r]=[]);let t=h.current[r];if(e)t[s]=e;else for(delete t[s];t.length>0&&null==t[t.length-1];)t.length-=1},...n("resourcesDayViewRowSlot"),mod:{"hour-start":a.isHourStart,...(0,d.getBusinessHoursMod)({time:a.startTime,businessHours:u,highlightBusinessHours:l}),"drop-target":m,"drag-selected":v,static:"static"===D},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${a.startTime} - ${a.endTime}`,tabIndex:"static"===D?-1:f?0:-1,"data-drag-slot-index":S&&"static"!==D?s:void 0,"data-drag-slot-group":S&&"static"!==D?j:void 0,onKeyDown:e=>{y&&y(e,r,s)},onPointerDown:S&&"static"!==D?e=>x?.(e,s,j):void 0,onClick:"static"!==D&&g?t=>g(e.id,a.startTime,t):void 0,onDragOver:c&&"static"!==D?e=>e.preventDefault():void 0},a.startTime)}),O=k?.position==="first"||k?.position==="only",L=void 0!==k?null!==k?(0,b.jsx)(T.Box,{...n("resourcesDayViewGroupColumn"),mod:{"scrolled-x":C,"group-position":k.position},children:O&&(0,b.jsx)("span",{style:k.count>1?{transform:`translateY(calc((${k.count-1} * (var(--resources-day-view-row-height) + 1px)) / 2))`}:void 0,children:V?V(k.group):k.group.label})}):(0,b.jsx)(T.Box,{...n("resourcesDayViewGroupColumnEmpty"),mod:{"scrolled-x":C}}):null;return(0,b.jsxs)(T.Box,{...n("resourcesDayViewRow"),children:[L,(0,b.jsx)(T.Box,{...n("resourcesDayViewResourceLabel"),mod:{"scrolled-x":C,"has-groups":void 0!==k},children:R?R(e):e.label}),(0,b.jsxs)(T.Box,{ref:I,...n("resourcesDayViewRowSlots",{style:$?{minHeight:`max(var(--resources-day-view-row-height), calc(${$} * (var(--resources-day-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==D?t=>m?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==D?f:void 0,onDrop:c&&"static"!==D?t=>v?.(t,e.id,r):void 0,children:[s,P]})]})}var I={resourcesDayView:"m_25154d8d",resourcesDayViewRoot:"m_d790b40f",resourcesDayViewScrollArea:"m_d54c5a67",resourcesDayViewInner:"m_1a0680c9",resourcesDayViewTimeLabelsRow:"m_26532081",resourcesDayViewCorner:"m_1c9c8e42",resourcesDayViewTimeLabel:"m_de91b51a",resourcesDayViewRow:"m_6a0ced0d",resourcesDayViewResourceLabel:"m_ac632f9",resourcesDayViewGroupColumn:"m_6c75eae8",resourcesDayViewGroupColumnEmpty:"m_f2903b45",resourcesDayViewRowSlots:"m_84f29928",resourcesDayViewRowSlot:"m_90acfcab",resourcesDayViewCurrentTimeIndicator:"m_3f0b79f6",resourcesDayViewCurrentTimeIndicatorLine:"m_7855b30a",resourcesDayViewCurrentTimeIndicatorThumb:"m_92d11180",resourcesDayViewCurrentTimeIndicatorTimeBubble:"m_e2aac04f",resourcesDayViewBackgroundEvent:"m_9cc838bf",resourcesDayViewAllDayEvent:"m_d6d6dd52",resourcesDayViewResizeHandle:"m_97715629",resourcesDayViewEventWrapper:"m_93bc1ec6"},R=e.i(494834),V=e.i(19300),C=e.i(481178),k=e.i(275519),$=e.i(433512),j=e.i(779177),P=e.i(951254),O=e.i(44091),L=e.i(62904),B=e.i(391466),A=e.i(822933),_=e.i(417241),H=e.i(332977),z=e.i(191788),N=e.i(205693);let W={__staticSelector:"ResourcesDayView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,headerFormat:"MMMM D, YYYY",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default",maxEventsPerTimeSlot:2},F=(0,C.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesDayView:{"--resources-day-view-radius":t?(0,$.getRadius)(t):void 0,"--resources-day-view-slot-width":(0,j.rem)(r),"--resources-day-view-row-height":(0,j.rem)(o),"--resources-day-view-group-label-width":(0,j.rem)(a)}})),G=(0,k.factory)(e=>{let M=(0,O.useProps)("ResourcesDayView",W,e),{classNames:C,className:k,style:$,styles:j,unstyled:G,attributes:U,vars:K,startTime:J,endTime:X,date:q,onDateChange:Q,resources:Z,intervalMinutes:ee,slotLabelFormat:et,radius:er,startScrollTime:eo,scrollAreaProps:ea,locale:en,withCurrentTimeIndicator:es,withCurrentTimeBubble:ei=!0,__staticSelector:el,withHeader:ed,onViewChange:eu,previousControlProps:ec,nextControlProps:em,todayControlProps:ef,viewSelectProps:ev,headerFormat:eg,events:ep,slotWidth:eD,rowHeight:eh,labels:ew,highlightBusinessHours:ey,businessHours:eS,renderEventBody:ex,renderEvent:eE,renderResourceLabel:eT,groups:eM,renderGroupLabel:eb,groupLabelWidth:eY,withEventsDragAndDrop:eI,onEventDrop:eR,canDragEvent:eV,onEventDragStart:eC,onEventDragEnd:ek,onTimeSlotClick:e$,onEventClick:ej,withDragSlotSelect:eP,onSlotDragEnd:eO,mode:eL,onExternalEventDrop:eB,withEventResize:eA,onEventResize:e_,canResizeEvent:eH,recurrenceExpansionLimit:ez,maxEventsPerTimeSlot:eN,moreEventsProps:eW,...eF}=M,eG=void 0!==eN?Math.max(1,eN):void 0,eU=(0,B.useStyles)({name:el,classes:I,props:M,className:k,style:$,classNames:C,styles:j,unstyled:G,vars:K,varsResolver:F,attributes:U,rootSelector:"resourcesDayView"}),{resolvedClassNames:eK,resolvedStyles:eJ}=(0,L.useResolvedStylesApi)({classNames:C,styles:j,props:M}),eX={classNames:eK,styles:eJ,attributes:U,__staticSelector:el,radius:er},eq=(0,P.useMantineTheme)(),[eQ,eZ]=(0,z.useState)(!1),[e0,e1]=(0,z.useState)(!1),e8=(0,N.useDatesContext)(),e3=(0,o.getDayTimeIntervals)({startTime:J,endTime:X,intervalMinutes:ee}),{orderedResources:e2,groupRanges:e4,resourceGroupMap:e6}=(0,z.useMemo)(()=>(0,c.getOrderedResources)(Z,eM),[Z,eM]),e9=e4.length>0,e7=(0,z.useCallback)((e,t)=>{if(!eB)return;let r=(0,R.default)(q).format("YYYY-MM-DD");eB({dataTransfer:e.dataTransfer,dropDateTime:`${r} ${e3[t.slotIndex].startTime}`,resourceId:t.resourceId})},[eB,e3,q]),e5=(0,z.useRef)(void 0),te=(0,g.useDragDropHandlers)({enabled:eI,mode:eL,onEventDrop:(0,z.useCallback)(e=>{eR?.({...e,resourceId:e5.current})},[eR]),canDragEvent:eV,onEventDragStart:eC,onEventDragEnd:ek,calculateDropTarget:(e,t)=>{e5.current=e.resourceId;let r=e3[e.slotIndex].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:(0,R.default)(q).format("YYYY-MM-DD"),targetSlotTime:r,intervalMinutes:ee})},onExternalDrop:eB?e7:void 0}),tt=(0,z.useMemo)(()=>(0,f.getGroupToResourceIdMap)(Z),[Z]),tr=(0,p.useSlotDragSelect)({enabled:eP&&"static"!==eL,onDragEnd:(e,t,r)=>{if(!eO)return;let o=(0,R.default)(q).format("YYYY-MM-DD");eO({rangeStart:`${o} ${e3[e].startTime}`,rangeEnd:`${o} ${e3[t].endTime}`,resourceId:tt.get(r)??r})}}),to=(0,S.useHorizontalEventResize)({enabled:eA,mode:eL,startTime:J,endTime:X,intervalMinutes:ee,onEventResize:e_,canResizeEvent:eH}),ta=(eI||!!eB)&&"static"!==eL,tn=(e,t,r)=>{if(!e$)return;let o=(0,R.default)(q).format("YYYY-MM-DD"),a=e3.findIndex(e=>e.startTime===t);if(-1===a)return;let n=e3[a];e$({slotStart:`${o} ${n.startTime}`,slotEnd:`${o} ${n.endTime}`,nativeEvent:r,resourceId:e})},ts=(0,R.default)(q).format("YYYY-MM-DD"),ti=(0,R.default)(q).isSame((0,R.default)(),"day"),[tl,td]=(0,z.useState)((0,n.getCurrentTimePosition)({startTime:J,endTime:X,intervalMinutes:ee}));(0,A.useInterval)(()=>td((0,n.getCurrentTimePosition)({startTime:J,endTime:X,intervalMinutes:ee})),6e4,{autoInvoke:!0});let tu=(es??ti)&&(0,s.isInTimeRange)({date:(0,R.default)().toDate(),startTime:J,endTime:X}),tc=ei?(0,r.formatDate)({locale:e8.getLocale(en),date:(0,R.default)(),format:et}):"",tm=(0,z.useMemo)(()=>(0,u.expandRecurringEvents)({events:ep,rangeStart:(0,R.default)(q).startOf("day").toDate(),rangeEnd:(0,R.default)(q).endOf("day").toDate(),expansionLimit:ez}),[ep,q,ez]),tf=(0,z.useMemo)(()=>(0,E.getResourcesDayViewEvents)({date:q,events:tm,resources:Z,startTime:J,endTime:X}),[q,tm,Z,J,X]),tv=e3.map(e=>{let t=(0,r.formatDate)({date:(0,R.default)(`${ts} ${e.startTime}`),locale:e8.getLocale(en),format:et});return(0,z.createElement)(T.Box,{...eU("resourcesDayViewTimeLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:eS,highlightBusinessHours:ey})}},t)}),tg=(0,z.useRef)([]),tp=(0,z.useRef)([]),tD=(0,z.useRef)(null),th=(0,H.useMergedRef)(tD,ea?.viewportRef),tw={resourceIndex:0,slotIndex:0};(0,_.useIsomorphicEffect)(()=>{if(!eo||!tD.current)return;let e=tg.current[0];if(!e||0===e.length)return;let t=e3.findIndex(e=>e.startTime>=eo);if(t<0)return;let r=e[t];if(!r)return;let o=r.getBoundingClientRect(),a=tD.current.getBoundingClientRect(),n=tD.current.querySelector(`.${I.resourcesDayViewCorner}`),s=n?n.getBoundingClientRect().width:0;tD.current.scrollTo({left:o.left-a.left-s,top:0})},[]);let ty=(0,z.useCallback)((e,t)=>(0,v.getIndexFromDragPoint)(tg.current[t]??[],e.clientX),[]),tS=(e,t,r)=>{(0,m.handleResourcesGridKeyDown)({controlsRef:tg,resourceIndex:t,slotIndex:r,event:e})},tx=e2.map((e,t)=>{let r=[...tf.backgroundTimedEvents[e.id]||[],...tf.backgroundAllDayEvents[e.id]||[]].map(e=>{let t=eq.variantColorResolver({color:e.color||eq.primaryColor,theme:eq,variant:"light",autoContrast:!0}),r="function"==typeof ex?ex(e):e.title,o={key:`bg-${e.id}`,...eU("resourcesDayViewBackgroundEvent",{style:{left:`${e.position.top}%`,width:`${e.position.height}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:r};return"function"==typeof eE?eE(e,o):(0,b.jsx)(T.Box,{...o})}),o=(tf.regularEvents[e.id]||[]).filter(e=>!(0,i.isAllDayEvent)({event:e,date:q})),a=(void 0!==eG?o.filter(e=>e.position.column<eG):o).map(e=>{let r=te.isDraggableEvent(e),o=to.isResizableEvent(e),a=to.getResizePosition(e.id),n=a?a.left:e.position.top,s=a?a.width:e.position.height,i=void 0!==eG&&e.position.overlaps>eG,l=o?eq.variantColorResolver({color:e.color||eq.primaryColor,theme:eq,variant:e.variant||"light",autoContrast:!0}):null,d=null!==a,u=d&&to.resizingEdge?to.resizingEdge:null;return(0,b.jsxs)(T.Box,{...eU("resourcesDayViewEventWrapper"),__vars:l?{"--event-color":l.color}:void 0,"data-resizing":d||void 0,style:{left:`calc(${n}% + 1px)`,top:i?`calc((100% - 22px) * ${e.position.column} / ${eG})`:`${e.position.offset}%`,width:`calc(${s}% - 2px)`,height:i?`calc((100% - 22px) / ${eG})`:`${e.position.width}%`},children:[(0,b.jsx)(h.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:r,isResizing:d,renderEventBody:ex,renderEvent:eE,radius:er,mode:eL,onClick:ej?t=>{to.wasResizing()||ej(e,t)}:void 0,style:{width:"100%",height:"100%"}}),o&&"static"!==eL&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{...eU("resourcesDayViewResizeHandle"),"data-edge":"start","data-active":"start"===u||void 0,onPointerDown:r=>{let o=tp.current[t];o&&to.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ts,pointerEvent:r})}}),(0,b.jsx)("div",{...eU("resourcesDayViewResizeHandle"),"data-edge":"end","data-active":"end"===u||void 0,onPointerDown:r=>{let o=tp.current[t];o&&to.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ts,pointerEvent:r})}})]})]},e.id)}),n=tf.allDayEvents[e.id]||[],s=n.map((e,t)=>(0,b.jsx)(T.Box,{...eU("resourcesDayViewAllDayEvent",{style:{top:`calc(${t} * (var(--resources-day-view-all-day-height) + 2px) + 2px)`}}),children:(0,b.jsx)(h.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,renderEventBody:ex,renderEvent:eE,radius:er,mode:eL,onClick:ej?t=>ej(e,t):void 0,style:{width:"100%",height:"100%"}})},`all-day-${e.id}`)),l=void 0!==eG?(0,x.getOverlapClusters)(o).filter(e=>e.some(e=>e.position.column>=eG)).map(e=>{let t=e.filter(e=>e.position.column>=eG).length,r=Math.min(...e.map(e=>e.position.top)),o=Math.max(...e.map(e=>e.position.top+e.position.height));return(0,b.jsx)(w.MoreEvents,{events:e,moreEventsCount:t,mode:eL,labels:ew,renderEventBody:ex,renderEvent:eE,onEventClick:ej,style:{position:"absolute",left:`calc(${r}% + 1px)`,width:`calc(${o-r}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...eX,...eW},`more-${e[0].id}`)}):[];return(0,b.jsxs)(Y,{resource:e,resourceIndex:t,date:ts,slots:e3,getStyles:eU,labels:ew,highlightBusinessHours:ey,businessHours:eS,withEventsDragAndDrop:ta,mode:eL,slotsRef:tg,firstSlotIndex:tw,onSlotKeyDown:tS,onSlotClick:tn,onRowSlotsDragOver:(e,t,r)=>{let o=ty(e,r);null!==o&&te.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:te.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=ty(e,r);null!==o&&te.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:te.dropTarget?.resourceId===e.id?te.dropTarget.slotIndex:void 0,withDragSlotSelect:eP,onSlotPointerDown:tr.handleSlotPointerDown,isSlotDragSelected:tr.isSlotSelected,rowSlotsContainerRef:e=>{tp.current[t]=e},renderResourceLabel:eT,renderGroupLabel:eb,scrolledX:e0,groupInfo:e9?e6[t]:void 0,allDayCount:n.length,children:[r,s,a,l]},e.id)}),tE=(0,r.formatDate)({date:(0,R.default)(q),locale:e8.getLocale(en),format:eg}),tT=(0,b.jsxs)(T.Box,{...eU("resourcesDayView"),mod:{static:"static"===eL,"slot-dragging":tr.isDragging,resizing:to.isResizing,"event-interaction":to.isResizing||te.dragContextValue.isDragging},...eF,children:[ed&&(0,b.jsx)(y.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,a.toDateString)((0,R.default)(q).subtract(1,"day")),next:()=>(0,a.toDateString)((0,R.default)(q).add(1,"day")),today:()=>(0,a.toDateString)((0,R.default)())},control:{miw:140,title:tE},labels:ew,onDateChange:Q,onViewChange:eu,previousControlProps:ec,nextControlProps:em,todayControlProps:ef,viewSelectProps:{views:["day","week","month"],...ev},stylesApiProps:eX}),(0,b.jsx)(T.Box,{...eU("resourcesDayViewRoot"),children:(0,b.jsx)(V.ScrollArea,{scrollbarSize:4,...ea,...eU("resourcesDayViewScrollArea",{className:ea?.className,style:ea?.style}),onScrollPositionChange:e=>{ea?.onScrollPositionChange?.(e),eZ(0!==e.y),e1(0!==e.x)},viewportRef:th,children:(0,b.jsxs)("div",{...eU("resourcesDayViewInner"),children:[(0,b.jsxs)(T.Box,{...eU("resourcesDayViewTimeLabelsRow"),mod:{scrolled:eQ},children:[(0,z.createElement)("div",{...eU("resourcesDayViewCorner"),key:"corner",style:e9?{flexBasis:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))",minWidth:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ew)),tv]}),tx,tu&&(0,b.jsxs)(T.Box,{...eU("resourcesDayViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":e9?`calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width) + (100% - var(--resources-day-view-resource-label-width) - var(--resources-day-view-group-label-width)) * ${tl} / 100)`:`calc(var(--resources-day-view-resource-label-width) + (100% - var(--resources-day-view-resource-label-width)) * ${tl} / 100)`,"--_time-bubble-width":tc?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ei&&(0,b.jsx)("div",{...eU("resourcesDayViewCurrentTimeIndicatorTimeBubble"),children:tc}),!ei&&(0,b.jsx)("div",{...eU("resourcesDayViewCurrentTimeIndicatorThumb")}),(0,b.jsx)("div",{...eU("resourcesDayViewCurrentTimeIndicatorLine")})]})]})})})]}),tM=(0,z.useMemo)(()=>te.dragContextValue,[te.dragContextValue]);return eI?(0,b.jsx)(D.DragContext.Provider,{value:tM,children:tT}):tT});G.displayName="@mantine/schedule/ResourcesDayView",G.classes=I,G.varsResolver=F,e.s(["ResourcesDayView",0,G],613490)},272013,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(4332),a=e.i(276995),n=e.i(657068),s=e.i(420924),i=e.i(176304),l=e.i(461304),d=e.i(783261),u=e.i(376879),c=e.i(201867),m=e.i(891343),f=e.i(67312),v=e.i(966696),g={resourcesMonthView:"m_652b3acd",resourcesMonthViewRoot:"m_146e014f",resourcesMonthViewScrollArea:"m_b1cab7a7",resourcesMonthViewInner:"m_78d2db89",resourcesMonthViewDayLabelsRow:"m_eae51c8c",resourcesMonthViewCorner:"m_975b8b82",resourcesMonthViewDayLabel:"m_bc016ea5",resourcesMonthViewDayLabelWeekday:"m_52a1c4c3",resourcesMonthViewDayLabelNumber:"m_88d8e64e",resourcesMonthViewRow:"m_21b0f7cd",resourcesMonthViewResourceLabel:"m_1febcdb9",resourcesMonthViewGroupColumn:"m_1fc335a8",resourcesMonthViewGroupColumnEmpty:"m_d5a3a885",resourcesMonthViewRowSlots:"m_4be74668",resourcesMonthViewCell:"m_146709cf"},p=e.i(494834),D=e.i(232471),h=e.i(19300),w=e.i(284629),y=e.i(481178),S=e.i(275519),x=e.i(433512),E=e.i(779177),T=e.i(44091),M=e.i(62904),b=e.i(391466),Y=e.i(417241),I=e.i(332977),R=e.i(191788),V=e.i(205693),C=e.i(391398);let k=(0,y.createVarsResolver)((e,{radius:t,dayWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesMonthView:{"--resources-month-view-radius":t?(0,x.getRadius)(t):void 0,"--resources-month-view-day-width":(0,E.rem)(r),"--resources-month-view-row-height":(0,E.rem)(o),"--resources-month-view-group-label-width":(0,E.rem)(a)}})),$={__staticSelector:"ResourcesMonthView",highlightToday:!0,withHeader:!0,weekdayFormat:"ddd",withWeekendDays:!0,withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"};function j(e,t){let r=(0,p.default)(e.start),o=(0,p.default)(t.start),a=(0,p.default)(e.end).startOf("day").diff(r.startOf("day"),"day"),n=(0,p.default)(t.end).startOf("day").diff(o.startOf("day"),"day");return a!==n?n-a:r.valueOf()-o.valueOf()}function P(e){return(0,p.default)(e.end).startOf("day").isAfter((0,p.default)(e.start).startOf("day"))}let O=(0,S.factory)(e=>{let y=(0,T.useProps)("ResourcesMonthView",$,e),{classNames:S,className:x,style:E,styles:O,unstyled:L,attributes:B,vars:A,mod:_,date:H,onDateChange:z,resources:N,locale:W,weekdayFormat:F,weekendDays:G,withWeekendDays:U,startScrollDate:K,__staticSelector:J,onDayClick:X,highlightToday:q,radius:Q,withHeader:Z,monthYearSelectProps:ee,onViewChange:et,todayControlProps:er,nextControlProps:eo,previousControlProps:ea,viewSelectProps:en,events:es,dayWidth:ei,rowHeight:el,renderResourceLabel:ed,groups:eu,renderGroupLabel:ec,groupLabelWidth:em,renderEventBody:ef,renderEvent:ev,withEventsDragAndDrop:eg,onEventDrop:ep,canDragEvent:eD,onEventDragStart:eh,onEventDragEnd:ew,onEventClick:ey,withDragSlotSelect:eS,onSlotDragEnd:ex,labels:eE,mode:eT,scrollAreaProps:eM,onExternalEventDrop:eb,maxEventsPerTimeSlot:eY,moreEventsProps:eI,recurrenceExpansionLimit:eR,...eV}=y,eC=Math.min(10,Math.max(1,eY??2)),ek=(0,b.useStyles)({name:J,classes:g,props:y,className:x,style:E,classNames:S,styles:O,unstyled:L,attributes:B,vars:A,varsResolver:k,rootSelector:"resourcesMonthView"}),{resolvedClassNames:e$,resolvedStyles:ej}=(0,M.useResolvedStylesApi)({classNames:S,styles:O,props:y}),eP={classNames:e$,styles:ej,attributes:B,__staticSelector:J,radius:Q},eO=(0,V.useDatesContext)(),eL=eO.getWeekendDays(G),{orderedResources:eB,groupRanges:eA,resourceGroupMap:e_}=(0,R.useMemo)(()=>(0,s.getOrderedResources)(N,eu),[N,eu]),eH=eA.length>0,ez=(0,R.useMemo)(()=>{let e=(0,p.default)(H).startOf("month"),t=e.endOf("month").date(),r=eO.getWeekendDays(G),o=[];for(let a=1;a<=t;a++){let t=e.date(a);!U&&r.includes(t.day())||o.push(t.format("YYYY-MM-DD"))}return o},[H,U,G,eO]),eN=(0,R.useRef)(null),eW=(0,I.useMergedRef)(eN,eM?.viewportRef),eF=(0,R.useRef)([]),eG=(0,R.useRef)(null),eU=(0,R.useCallback)(e=>{if(!eN.current)return;let t=ez.indexOf(e);if(t<0)return;let r=eF.current[t];if(!r)return;let o=r.getBoundingClientRect(),a=eN.current.getBoundingClientRect(),n=eG.current?.getBoundingClientRect().width??0;eN.current.scrollTo({left:o.left-a.left-n,top:0})},[ez]);(0,Y.useIsomorphicEffect)(()=>{K&&eU(K)},[]);let eK=(0,R.useMemo)(()=>(0,n.expandRecurringEvents)({events:es,rangeStart:(0,p.default)(H).startOf("month").toDate(),rangeEnd:(0,p.default)(H).endOf("month").toDate(),expansionLimit:eR}),[es,H,eR]),{eventsByResourceAndDay:eJ,eventLayoutByResource:eX}=(0,R.useMemo)(()=>{let e={};for(let t of N)for(let r of(e[t.id]={},ez))e[t.id][r]=[];if(eK)for(let t of eK){if(void 0===t.resourceId||!(t.resourceId in e))continue;let r=(0,p.default)(t.start),o=(0,p.default)(t.end);for(let a of ez){let n=(0,p.default)(a).startOf("day"),s=(0,p.default)(a).endOf("day");r.isBefore(s)&&o.isAfter(n)&&e[t.resourceId][a].push(t)}}let t={},r=(0,p.default)(ez[0]).startOf("day"),o=(0,p.default)(ez[ez.length-1]).add(1,"day").startOf("day");for(let a of N){let n={},s=new Map,i=new Map,l=new Map;ez.forEach((t,r)=>{let o=e[a.id][t];for(let e of(o.sort(j),o)){let t=l.get(e.id);t?t.days.push(r):l.set(e.id,{event:e,days:[r]})}let d=new Set,u=[],c=0;for(let e of o){let t=s.get(e.id);if((void 0===t||t>=eC||d.has(t))&&(t=function(e,t){for(let r=0;r<t;r+=1)if(!e.has(r))return r;return null}(d,eC)),null===t){c+=1;continue}d.add(t),u.push({event:e,row:t}),i.has(e.id)||i.set(e.id,new Map),i.get(e.id).set(r,t),s.set(e.id,t)}n[t]={visible:u,hiddenCount:c}});let d=[];for(let{event:e,days:t}of l.values()){if(!P(e))continue;let a=t[0],s=t[t.length-1],l=i.get(e.id),u=(0,p.default)(e.start).isBefore(r),c=(0,p.default)(e.end).isAfter(o),m=null,f=()=>{if(!m)return;let t=m.startDayIndex>a,r=m.endDayIndex<s,o=!t&&u,i=!r&&c,l=!1;for(let e=m.startDayIndex;e<=m.endDayIndex;e+=1)if((n[ez[e]]?.hiddenCount??0)>0){l=!0;break}d.push({event:e,startDayIndex:m.startDayIndex,endDayIndex:m.endDayIndex,row:m.row,clipStart:t,clipEnd:r,hanging:o&&i?"both":o?"start":i?"end":"none",hiddenInSpan:l}),m=null};for(let e=a;e<=s;e+=1){let t=l?.get(e);if(void 0===t){f();continue}m&&m.row===t&&m.endDayIndex===e-1?m.endDayIndex=e:(f(),m={startDayIndex:e,endDayIndex:e,row:t})}f()}t[a.id]={byDay:n,segments:d}}return{eventsByResourceAndDay:e,eventLayoutByResource:t}},[N,ez,eK,eC]),eq=(0,R.useCallback)((e,t)=>{eb&&eb({dataTransfer:e.dataTransfer,dropDateTime:`${(0,p.default)(t.day).format("YYYY-MM-DD")} 00:00:00`,resourceId:t.resourceId})},[eb]),eQ=(0,d.useDragDropHandlers)({enabled:eg,mode:eT,onEventDrop:e=>{ep?.({...e,resourceId:eZ.current})},canDragEvent:eD,onEventDragStart:eh,onEventDragEnd:ew,calculateDropTarget:(e,t)=>(eZ.current=e.resourceId,(0,a.calculateMonthDropDate)({draggedEvent:t,targetDay:e.day})),onExternalDrop:eb?eq:void 0}),eZ=(0,R.useRef)(void 0),e0=(eg||!!eb)&&"static"!==eT,e1=(0,R.useMemo)(()=>(0,i.getGroupToResourceIdMap)(N),[N]),e8=(0,u.useSlotDragSelect)({enabled:eS&&"static"!==eT,onDragEnd:(e,t,r)=>{if(!ex)return;let o=ez[e],a=ez[t];o&&a&&ex({rangeStart:(0,p.default)(o).startOf("day").format("YYYY-MM-DD HH:mm:ss"),rangeEnd:(0,p.default)(a).endOf("day").format("YYYY-MM-DD HH:mm:ss"),resourceId:e1.get(r)??r})}}),e3=ez.map((e,t)=>{let o=(0,p.default)(e),a=eL.includes(o.day()),n=o.isSame((0,p.default)(),"day")&&q;return(0,R.createElement)(D.Box,{...ek("resourcesMonthViewDayLabel"),key:e,mod:{weekend:a,today:n},ref:e=>{eF.current[t]=e}},(0,C.jsx)("span",{...ek("resourcesMonthViewDayLabelWeekday"),children:(0,r.formatDate)({date:o,locale:eO.getLocale(W),format:F})}),(0,C.jsx)("span",{...ek("resourcesMonthViewDayLabelNumber"),children:o.date()}))}),e2=(0,R.useRef)([]),e4=(0,R.useCallback)((e,t)=>(0,l.getIndexFromDragPoint)(e2.current[t]??[],e.clientX),[]),e6=100/eC,e9=eB.map((e,t)=>{e2.current[t]||(e2.current[t]=[]);let r=String(e.id),o=eQ.dropTarget,a=ez.length,n=[],s=[],i=ez.map((i,l)=>{let d=(0,p.default)(i),u=eO.getWeekendDays(G).includes(d.day()),c=null!==o&&"object"==typeof o&&"day"in o&&o.day===i&&o.resourceId===e.id,v=e8.isSlotSelected(l,r),g=eJ[e.id]?.[i]||[],D=eX[e.id]?.byDay[i],h=D?.visible??[],y=D?.hiddenCount??0,S=0===t&&0===l,x=l/a*100,E=100/a,T=y>0&&"static"!==eT;return h.forEach(({event:e,row:t})=>{if(P(e))return;let r=eQ.isDraggableEvent(e),o=T?`calc((100% - 18px) * ${t} / ${eC} + 1px)`:`calc(${t*e6}% + 1px)`,a=T?`calc((100% - 18px) / ${eC} - 2px)`:`calc(${e6}% - 2px)`;n.push((0,C.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,size:"sm",draggable:r,renderEventBody:ef,renderEvent:ev,radius:Q,mode:eT,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:o,left:`calc(${x}% + 1px)`,width:`calc(${E}% - 2px)`,height:a,zIndex:3}},`${e.id}-${i}`))}),y>0&&"static"!==eT&&s.push((0,C.jsx)(f.MoreEvents,{events:g,moreEventsCount:y,mode:eT,labels:eE,renderEventBody:ef,renderEvent:ev,onEventClick:ey,style:{position:"absolute",bottom:1,left:`calc(${x}% + 1px)`,width:`calc(${E}% - 2px)`,height:18,zIndex:4},...eP,...eI},`more-${e.id}-${i}`)),(0,C.jsx)(w.UnstyledButton,{ref:e=>{e&&(e2.current[t]||(e2.current[t]=[]),e2.current[t][l]=e)},...ek("resourcesMonthViewCell"),"aria-label":`${e.label} ${d.format("MMMM D, YYYY")}`,"data-drag-slot-index":eS&&"static"!==eT?l:void 0,"data-drag-slot-group":eS&&"static"!==eT?r:void 0,mod:{weekend:u,"drop-target":c,"drag-selected":v,static:"static"===eT},tabIndex:"static"===eT?-1:S?0:-1,onClick:"static"===eT?void 0:t=>X?.({date:i,nativeEvent:t,resourceId:e.id}),onKeyDown:"static"===eT?void 0:e=>((e,t,r)=>{let o=e.key,a=t,n=r;if("ArrowRight"===o)n=Math.min(r+1,ez.length-1);else if("ArrowLeft"===o)n=Math.max(r-1,0);else if("ArrowDown"===o)a=Math.min(t+1,N.length-1);else{if("ArrowUp"!==o)return;a=Math.max(t-1,0)}e.preventDefault(),e2.current[a]?.[n]?.focus()})(e,t,l),onPointerDown:eS&&"static"!==eT?e=>e8.handleSlotPointerDown(e,l,r):void 0,onDragOver:e0?e=>e.preventDefault():void 0},i)});(eX[e.id]?.segments??[]).forEach(e=>{let t=eQ.isDraggableEvent(e.event),r=e.startDayIndex/a*100,o=(e.endDayIndex-e.startDayIndex+1)/a*100,s=e.hiddenInSpan&&"static"!==eT,i=s?`calc((100% - 18px) * ${e.row} / ${eC} + 1px)`:`calc(${e.row*e6}% + 1px)`,l=s?`calc((100% - 18px) / ${eC} - 2px)`:`calc(${e6}% - 2px)`;n.push((0,C.jsx)(m.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,size:"sm",hanging:e.hanging,draggable:t,renderEventBody:ef,renderEvent:ev,radius:Q,mode:eT,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ey?t=>ey(e.event,t):void 0,style:{position:"absolute",top:i,left:`calc(${r}% + 1px)`,width:`calc(${o}% - 2px)`,height:l,zIndex:3}},`${e.event.id}-segment-${e.startDayIndex}`))});let l=eH?e_[t]:void 0,d=l?.position==="first"||l?.position==="only",u=void 0!==l?null!==l?(0,C.jsx)(D.Box,{...ek("resourcesMonthViewGroupColumn"),mod:{"group-position":l.position},children:d&&(0,C.jsx)("span",{style:l.count>1?{transform:`translateY(calc((${l.count-1} * (var(--resources-month-view-row-height) + 1px)) / 2))`}:void 0,children:ec?ec(l.group):l.group.label})}):(0,C.jsx)(D.Box,{...ek("resourcesMonthViewGroupColumnEmpty")}):null;return(0,R.createElement)("div",{...ek("resourcesMonthViewRow"),key:e.id},u,(0,C.jsx)("div",{...ek("resourcesMonthViewResourceLabel"),"data-has-groups":eH||void 0,children:ed?ed(e):e.label}),(0,C.jsxs)("div",{...ek("resourcesMonthViewRowSlots"),onDragOver:e0?r=>{let o=e4(r,t);null!==o&&ez[o]&&eQ.handleDragOver(r,{day:ez[o],resourceId:e.id})}:void 0,onDragLeave:e0?eQ.handleDragLeave:void 0,onDrop:e0?r=>{let o=e4(r,t);null!==o&&ez[o]&&eQ.handleDrop(r,{day:ez[o],resourceId:e.id})}:void 0,children:[n,s,i]}))}),e7=(0,C.jsxs)(D.Box,{mod:[{static:"static"===eT,"slot-dragging":e8.isDragging,"event-interaction":eQ.dragContextValue.isDragging},_],...ek("resourcesMonthView"),...eV,children:[Z&&(0,C.jsx)(v.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,p.default)(H).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,p.default)(H).add(1,"month").startOf("month")),today:()=>(requestAnimationFrame(()=>{eU((0,p.default)().format("YYYY-MM-DD"))}),(0,o.toDateString)((0,p.default)()))},control:{monthYearSelect:{locale:W,yearValue:(0,p.default)(H).get("year"),monthValue:(0,p.default)(H).get("month"),onYearChange:e=>z?.((0,o.toDateString)((0,p.default)(H).set("year",e).startOf("month"))),onMonthChange:e=>z?.((0,o.toDateString)((0,p.default)(H).set("month",e).startOf("month"))),...ee}},labels:eE,onDateChange:z,onViewChange:et,previousControlProps:ea,nextControlProps:eo,todayControlProps:er,viewSelectProps:{views:["day","week","month"],...en},stylesApiProps:eP}),(0,C.jsx)(D.Box,{...ek("resourcesMonthViewRoot"),children:(0,C.jsx)(h.ScrollArea,{scrollbars:"x",scrollbarSize:4,...eM,...ek("resourcesMonthViewScrollArea",{className:eM?.className,style:eM?.style}),viewportRef:eW,children:(0,C.jsxs)("div",{...ek("resourcesMonthViewInner"),children:[(0,C.jsxs)("div",{...ek("resourcesMonthViewDayLabelsRow"),children:[(0,R.createElement)("div",{...ek("resourcesMonthViewCorner"),key:"corner",ref:eG,style:eH?{flexBasis:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))",minWidth:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eE)),e3]}),e9]})})})]});return eg?(0,C.jsx)(c.DragContext.Provider,{value:eQ.dragContextValue,children:e7}):e7});O.displayName="@mantine/schedule/ResourcesMonthView",O.classes=g,O.varsResolver=k,e.s(["ResourcesMonthView",0,O],272013)},853905,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),n=(0,r.default)().add(5,"day").format("YYYY-MM-DD"),s=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],i=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${o} 09:30:00`,end:`${o} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${o} 11:00:00`,end:`${o} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${n} 14:00:00`,end:`${n} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${o} 10:00:00`,end:`${o} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${a} 15:00:00`,end:`${a} 16:00:00`,color:"grape",resourceId:"london"}],l="\nimport dayjs from 'dayjs';\nimport { ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\nconst nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n  { id: 'london', label: 'Meeting room: London' },\n];\n\nconst events = [\n  { id: 1, title: 'Team Standup', start: `${today} 09:00:00`, end: `${today} 09:30:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 4, title: 'Design Review', start: `${tomorrow} 13:00:00`, end: `${tomorrow} 14:00:00`, color: 'orange', resourceId: 'paris' },\n  { id: 5, title: '1:1 Meeting', start: `${today} 11:00:00`, end: `${today} 11:30:00`, color: 'cyan', resourceId: 'new-york' },\n  { id: 6, title: 'Workshop', start: `${nextWeek} 14:00:00`, end: `${nextWeek} 16:00:00`, color: 'pink', resourceId: 'new-york' },\n  { id: 7, title: 'Architecture Review', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'red', resourceId: 'london' },\n  { id: 8, title: 'Retrospective', start: `${tomorrow} 15:00:00`, end: `${tomorrow} 16:00:00`, color: 'grape', resourceId: 'london' },\n];\n";var d=e.i(191788),u=e.i(391398),c=e.i(613490),m=e.i(499083),f=e.i(272013),v={root:"m_428e1853"},g=e.i(232471),p=e.i(275519),D=e.i(44091),h=e.i(391466),w=e.i(579560);let y={defaultView:"day",mode:"default"},S=(0,p.factory)(e=>{let t=(0,D.useProps)("ResourcesSchedule",y,e),{classNames:r,className:o,style:a,styles:n,unstyled:s,vars:i,resources:l,date:d,defaultDate:p,onDateChange:S,view:x,defaultView:E,onViewChange:T,events:M,locale:b,radius:Y,labels:I,renderEventBody:R,renderResourceLabel:V,withEventsDragAndDrop:C,onEventDrop:k,canDragEvent:$,onEventDragStart:j,onEventDragEnd:P,onTimeSlotClick:O,onDayClick:L,onEventClick:B,withDragSlotSelect:A,onSlotDragEnd:_,onExternalEventDrop:H,withEventResize:z,onEventResize:N,canResizeEvent:W,recurrenceExpansionLimit:F,mode:G,dayViewProps:U,weekViewProps:K,monthViewProps:J,__staticSelector:X,mod:q,...Q}=t,Z=(0,h.useStyles)({name:X||"ResourcesSchedule",classes:v,props:t,className:o,style:a,classNames:r,styles:n,unstyled:s,vars:i}),[ee,et]=(0,w.useUncontrolled)({value:x,defaultValue:E,onChange:T}),[er,eo]=(0,w.useUncontrolled)({value:d,defaultValue:p??new Date}),ea={resources:l,date:er,onDateChange:e=>{eo(e),S?.(e)},onViewChange:e=>{("day"===e||"week"===e||"month"===e)&&et(e)},events:M,locale:b,radius:Y,labels:I,renderEventBody:R,renderResourceLabel:V,withEventsDragAndDrop:"static"!==G&&C,onEventDrop:k,canDragEvent:$,onEventDragStart:j,onEventDragEnd:P,onEventClick:B,withDragSlotSelect:A,onSlotDragEnd:_,onExternalEventDrop:H,recurrenceExpansionLimit:F,mode:G},en=(()=>{switch(ee){case"day":return(0,u.jsx)(c.ResourcesDayView,{...ea,onTimeSlotClick:O,withEventResize:"static"!==G&&z,onEventResize:N,canResizeEvent:W,...U});case"week":return(0,u.jsx)(m.ResourcesWeekView,{...ea,onTimeSlotClick:O,withEventResize:"static"!==G&&z,onEventResize:N,canResizeEvent:W,...K});case"month":return(0,u.jsx)(f.ResourcesMonthView,{...ea,onDayClick:L,...J});default:return null}})();return(0,u.jsx)(g.Box,{...Z("root"),mod:q,...Q,children:en})});S.displayName="@mantine/schedule/ResourcesSchedule",S.classes=v;let x={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,n]=(0,d.useState)(i);return(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:a,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,n]=(0,d.useState)("day");return(0,u.jsx)(S,{date:t,onDateChange:o,view:a,onViewChange:n,resources:s,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{maxEventsPerTimeSlot:3,startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var b=e.i(162077),Y=e.i(988798);let I={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,n]=(0,d.useState)(i),[l,c]=(0,d.useState)(!1),[m,f]=(0,d.useState)(null),[v,g]=(0,d.useState)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:a,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{g(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onDayClick:({date:e,resourceId:t})=>{g(t?String(t):null),f({title:"",start:(0,r.default)(e).startOf("day").toDate(),end:(0,r.default)(e).endOf("day").toDate(),color:"blue"}),c(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{g(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onEventClick:e=>{g(e.resourceId?String(e.resourceId):null),f({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),c(!0)},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}}),(0,u.jsx)(b.EventForm,{opened:l,onClose:()=>c(!1),onExitTransitionEnd:()=>f(null),values:m,onSubmit:e=>{e.id?n(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||t.resourceId}:t)):n(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||void 0}])},onDelete:m?.id?()=>{m?.id&&n(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,u.jsx)(Y.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:s.map(e=>({value:String(e.id),label:String(e.label)})),value:v,onChange:g})})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:b._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},R={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,n]=(0,d.useState)(i);return(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:a,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{n(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:i,mode:"static",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},C={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:i,defaultView:"week",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var k=e.i(20035),$=e.i(883364);let j=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],P={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,n]=(0,d.useState)([]),i=(0,d.useRef)(1);return(0,u.jsxs)(k.Grid,{children:[(0,u.jsxs)(k.Grid.Col,{span:{base:12,sm:3},children:[(0,u.jsx)($.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),j.map(e=>(0,u.jsxs)(g.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,u.jsx)($.Text,{size:"sm",fw:500,children:e.title}),(0,u.jsxs)($.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,u.jsx)(k.Grid.Col,{span:{base:12,sm:9},children:(0,u.jsx)(S,{date:t,onDateChange:o,resources:s,events:a,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:o})=>{let a=e.getData("text/plain");if(!a)return;let s=JSON.parse(a),l=(0,r.default)(t),d=l.add(s.duration,"minutes");n(e=>[...e,{id:i.current++,title:s.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:s.color,resourceId:o}])}})})]})},code:`
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
`};var O=(0,t.__exportAll)({controlled:()=>T,dragDrop:()=>E,eventForm:()=>I,eventResize:()=>R,externalDragDrop:()=>P,staticMode:()=>V,usage:()=>x,viewProps:()=>M,weekView:()=>C});e.s(["ResourcesScheduleDemos",0,O],853905)}]);