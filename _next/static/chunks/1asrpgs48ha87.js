(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let r=new Map(e.map(e=>[e.id,e])),o=new Set,a=[],n=[];for(let e of t){let t=a.length,s=0;for(let t of e.resourceIds){let e=r.get(t);e&&!o.has(t)&&(a.push(e),o.add(t),s++)}s>0&&n.push({group:e,startIndex:t,count:s})}for(let t of e)o.has(t.id)||a.push(t);let s=Array(a.length).fill(null);for(let e of n)for(let t=0;t<e.count;t++){let r,o=e.startIndex+t;r=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",s[o]={group:e.group,position:r,count:e.count}}return{orderedResources:a,groupRanges:n,resourceGroupMap:s}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let r of e)t.set(String(r.id),r.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let r=e.findIndex(e=>{if(!e)return!1;let r=e.getBoundingClientRect();return t>=r.left&&t<=r.right});if(r>=0)return r;let o=e[0],a=e[e.length-1];if(!o||!a)return null;let n=o.getBoundingClientRect(),s=a.getBoundingClientRect();return t<n.left?0:t>s.right?e.length-1:null}],461304)},640542,343355,367752,578373,e=>{"use strict";e.s(["handleResourcesGridKeyDown",0,function({controlsRef:e,resourceIndex:t,slotIndex:r,event:o}){let a=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(o.key);if(a){o.preventDefault();let n=e.current?e.current.map(e=>e?e.length:0):null;if(!n)return;!function e({controlsRef:t,direction:r,resourceIndex:o,slotIndex:a,size:n}){let s=function({direction:e,resourceIndex:t,slotIndex:r,size:o}){let a=o[t];if(!a)return null;switch(e){case"left":if(0===r)return null;return{resourceIndex:t,slotIndex:r-1};case"right":if(r===a-1)return null;return{resourceIndex:t,slotIndex:r+1};case"up":{if(0===t)return null;let e=o[t-1];return{resourceIndex:t-1,slotIndex:Math.min(r,e-1)}}case"down":{if(t===o.length-1)return null;let e=o[t+1];return{resourceIndex:t+1,slotIndex:Math.min(r,e-1)}}default:return null}}({direction:r,resourceIndex:o,slotIndex:a,size:n});if(!s)return;let i=t.current?.[s.resourceIndex]?.[s.slotIndex];i&&(i.disabled||i.getAttribute("data-hidden")?e({controlsRef:t,direction:r,resourceIndex:s.resourceIndex,slotIndex:s.slotIndex,size:n}):i.focus())}({controlsRef:e,direction:a,resourceIndex:t,slotIndex:r,size:n})}}],640542);var t=e.i(672654),r=e.i(42916),o=e.i(494834),a=e.i(191788);e.s(["useHorizontalEventResize",0,function({enabled:e=!1,mode:n="default",startTime:s,endTime:i,intervalMinutes:d,onEventResize:l,canResizeEvent:u}){let[c,m]=(0,a.useState)(null),D=(0,a.useRef)(null),v=(0,a.useRef)(!1),f=(0,a.useEffectEvent)(l||(()=>{})),p=(0,r.parseTimeString)(s),g=(0,r.parseTimeString)(i),y=60*p.hours+p.minutes,h=60*g.hours+g.minutes,w=(0,t.clampIntervalMinutes)(d),Y=h-y,S=Math.ceil(Y/w)*w,x=w/S*100,b=(0,a.useCallback)(e=>Math.max(0,Math.min(Y,Math.round(e/w)*w)),[Y,w]),E=(0,a.useCallback)((e,t)=>{let r=y+b(e/100*S),o=Math.floor(r/60);return`${t} ${String(o).padStart(2,"0")}:${String(r%60).padStart(2,"0")}:00`},[S,y,b]),M=(0,a.useCallback)(e=>b(e/100*S)/S*100,[S,b]),T=(0,a.useCallback)(({event:t,edge:r,container:a,originalLeft:s,originalWidth:i,eventDate:d,dayIndex:l=0,dayCount:u=1,pointerEvent:c})=>{if(!e||"static"===n)return;c.preventDefault(),c.stopPropagation();let v={eventId:t.id,event:t,edge:r,container:a,originalLeft:s,originalWidth:i,currentLeft:s,currentWidth:i,eventDate:d,originalStart:(0,o.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,o.default)(t.end).format("YYYY-MM-DD HH:mm:ss"),dayIndex:l,dayCount:u};D.current=v,m(v)},[e,n]),I=null!==c;(0,a.useEffect)(()=>{if(!I)return;let e=document.body.style.userSelect,t=document.body.style.cursor;document.body.style.userSelect="none",document.body.style.cursor="ew-resize";let r=e=>{let t=D.current;if(!t)return;let r=t.container.getBoundingClientRect(),o=M(function({clientX:e,containerLeft:t,containerWidth:r,dayIndex:o,dayCount:a}){let n=r/a;return n<=0?0:Math.max(0,Math.min(100,(e-(t+o*n))/n*100))}({clientX:e.clientX,containerLeft:r.left,containerWidth:r.width,dayIndex:t.dayIndex,dayCount:t.dayCount})),a=t.originalLeft,n=t.originalWidth;if("end"===t.edge)n=Math.max(x,o-t.originalLeft);else{let e=t.originalLeft+t.originalWidth;a=Math.min(o,e-x),n=e-a}D.current={...t,currentLeft:a,currentWidth:n},m(D.current)},o=()=>{let e=D.current;if(e&&(e.currentLeft!==e.originalLeft||e.currentWidth!==e.originalWidth)){let t,r;"start"===e.edge?(t=E(e.currentLeft,e.eventDate),r=e.originalEnd):(t=e.originalStart,r=E(e.currentLeft+e.currentWidth,e.eventDate)),f({eventId:e.eventId,newStart:t,newEnd:r,event:e.event})}D.current=null,m(null),v.current=!0,requestAnimationFrame(()=>{v.current=!1})};return document.addEventListener("pointermove",r),document.addEventListener("pointerup",o),()=>{document.body.style.userSelect=e,document.body.style.cursor=t,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o)}},[I]);let R=(0,a.useCallback)(e=>c&&c.eventId===e?{left:c.currentLeft,width:c.currentWidth}:null,[c]),j=(0,a.useCallback)(t=>!!e&&"static"!==n&&"background"!==t.display&&(!u||u(t)),[e,n,u]),C=(0,a.useCallback)(()=>v.current,[]);return{handleResizeStart:T,isResizing:I,resizingEventId:c?.eventId??null,resizingEdge:c?.edge??null,getResizePosition:R,isResizableEvent:j,wasResizing:C}}],343355);var n=e.i(751198);e.s(["getOverlapClusters",0,function(e){let t=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;let a=[e[o]];r.add(o);let s=0;for(;s<a.length;){for(let t=0;t<e.length;t++)!r.has(t)&&(0,n.isEventsOverlap)(a[s],e[t])&&(a.push(e[t]),r.add(t));s++}t.push(a)}return t}],367752);var s=e.i(969610),i=e.i(298008),d=e.i(68642),l=e.i(532965),u=e.i(922621);e.s(["getResourcesDayViewEvents",0,function({events:e,resources:t,date:r,startTime:a,endTime:n,intervalMinutes:c}){let m={regularEvents:{},allDayEvents:{},backgroundTimedEvents:{},backgroundAllDayEvents:{}};for(let e of t)m.regularEvents[e.id]=[],m.allDayEvents[e.id]=[],m.backgroundTimedEvents[e.id]=[],m.backgroundAllDayEvents[e.id]=[];if(void 0===e)return m;let D=(0,o.default)(r).startOf("day"),v=(0,o.default)(r).endOf("day"),f={},p={};for(let e of t)f[e.id]=[],p[e.id]=[];let g=new Set;for(let t of e){if(void 0===t.resourceId||!(t.resourceId in f))continue;let e=(0,o.default)(t.start),r=(0,o.default)(t.end),s=e.isSame(D,"day"),l=e.isBefore(v)&&r.isAfter(D);if(s||l){if(s&&!(0,d.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let o=(0,i.validateEvent)(t);if(g.has(t.id))throw Error(`[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${t.id}`);if(g.add(t.id),"background"===t.display)p[t.resourceId].push(o);else if(s)f[t.resourceId].push(o);else{let s=e.isBefore(D)?D:e,i=r.isAfter(v)?v:r,l={...o,start:s.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss")};(0,d.isEventInTimeRange)({event:l,startTime:a,endTime:n})&&f[t.resourceId].push(l)}}}for(let e of t){for(let t of(0,u.getDayPositionedEvents)({events:f[e.id],startTime:a,endTime:n,date:r,intervalMinutes:c}))t.position.allDay?m.allDayEvents[e.id].push(t):m.regularEvents[e.id].push(t);for(let t of p[e.id]){let i=(0,o.default)(t.start),d=(0,o.default)(t.end),u=i.isBefore(D)?D:i,f=d.isAfter(v)?v:d,p={...t,start:u.format("YYYY-MM-DD HH:mm:ss"),end:f.format("YYYY-MM-DD HH:mm:ss")};if((0,s.isAllDayEvent)({event:p,date:r}))m.backgroundAllDayEvents[e.id].push({...t,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:r,height:o}=(0,l.getDayPosition)({event:p,startTime:a,endTime:n,intervalMinutes:c});if(o<=0)continue;m.backgroundTimedEvents[e.id].push({...t,position:{top:r,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}}return m}],578373)},613490,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),n=e.i(688785),s=e.i(664397),i=e.i(969610),d=e.i(575148),l=e.i(792930),u=e.i(505696),c=e.i(657068),m=e.i(420924),D=e.i(640542),v=e.i(176304),f=e.i(461304),p=e.i(783261),g=e.i(376879),y=e.i(201867),h=e.i(891343),w=e.i(67312),Y=e.i(966696),S=e.i(343355),x=e.i(367752),b=e.i(578373),E=e.i(232471),M=e.i(284629),T=e.i(391398);function I({resource:e,resourceIndex:r,date:o,slots:a,getStyles:n,children:s,labels:i,highlightBusinessHours:d,businessHours:l,withEventsDragAndDrop:c,onRowSlotsDragOver:m,onRowSlotsDragLeave:D,onRowSlotsDrop:v,onSlotClick:f,dropTargetSlotIndex:p,mode:g,slotsRef:y,firstSlotIndex:h,onSlotKeyDown:w,withDragSlotSelect:Y,onSlotPointerDown:S,isSlotDragSelected:x,rowSlotsContainerRef:b,renderResourceLabel:R,renderGroupLabel:j,scrolledX:C,groupInfo:k,allDayCount:$}){let V=String(e.id),H=a.map((a,s)=>{let m=p===s,D=h?.resourceIndex===r&&h?.slotIndex===s,v=x?.(s,V)||!1;return(0,T.jsx)(M.UnstyledButton,{ref:e=>{if(!y?.current)return;y.current[r]||(y.current[r]=[]);let t=y.current[r];if(e)t[s]=e;else for(delete t[s];t.length>0&&null==t[t.length-1];)t.length-=1},...n("resourcesDayViewRowSlot"),mod:{"hour-start":a.isHourStart,...(0,u.getBusinessHoursMod)({time:a.startTime,businessHours:l,highlightBusinessHours:d}),"drop-target":m,"drag-selected":v,static:"static"===g},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${a.startTime} - ${a.endTime}`,tabIndex:"static"===g?-1:D?0:-1,"data-drag-slot-index":Y&&"static"!==g?s:void 0,"data-drag-slot-group":Y&&"static"!==g?V:void 0,onKeyDown:e=>{w&&w(e,r,s)},onPointerDown:Y&&"static"!==g?e=>S?.(e,s,V):void 0,onClick:"static"!==g&&f?t=>f(e.id,a.startTime,t):void 0,onDragOver:c&&"static"!==g?e=>e.preventDefault():void 0},a.startTime)}),N=k?.position==="first"||k?.position==="only",B=void 0!==k?null!==k?(0,T.jsx)(E.Box,{...n("resourcesDayViewGroupColumn"),mod:{"scrolled-x":C,"group-position":k.position},children:N&&(0,T.jsx)("span",{style:k.count>1?{transform:`translateY(calc((${k.count-1} * (var(--resources-day-view-row-height) + 1px)) / 2))`}:void 0,children:j?j(k.group):k.group.label})}):(0,T.jsx)(E.Box,{...n("resourcesDayViewGroupColumnEmpty"),mod:{"scrolled-x":C}}):null;return(0,T.jsxs)(E.Box,{...n("resourcesDayViewRow"),children:[B,(0,T.jsx)(E.Box,{...n("resourcesDayViewResourceLabel"),mod:{"scrolled-x":C,"has-groups":void 0!==k},children:R?R(e):e.label}),(0,T.jsxs)(E.Box,{ref:b,...n("resourcesDayViewRowSlots",{style:$?{minHeight:`max(var(--resources-day-view-row-height), calc(${$} * (var(--resources-day-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==g?t=>m?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==g?D:void 0,onDrop:c&&"static"!==g?t=>v?.(t,e.id,r):void 0,children:[s,H]})]})}var R={resourcesDayView:"m_25154d8d",resourcesDayViewRoot:"m_d790b40f",resourcesDayViewScrollArea:"m_d54c5a67",resourcesDayViewInner:"m_1a0680c9",resourcesDayViewTimeLabelsRow:"m_26532081",resourcesDayViewCorner:"m_1c9c8e42",resourcesDayViewTimeLabel:"m_de91b51a",resourcesDayViewRow:"m_6a0ced0d",resourcesDayViewResourceLabel:"m_ac632f9",resourcesDayViewGroupColumn:"m_6c75eae8",resourcesDayViewGroupColumnEmpty:"m_f2903b45",resourcesDayViewRowSlots:"m_84f29928",resourcesDayViewRowSlot:"m_90acfcab",resourcesDayViewCurrentTimeIndicator:"m_3f0b79f6",resourcesDayViewCurrentTimeIndicatorLine:"m_7855b30a",resourcesDayViewCurrentTimeIndicatorThumb:"m_92d11180",resourcesDayViewCurrentTimeIndicatorTimeBubble:"m_e2aac04f",resourcesDayViewBackgroundEvent:"m_9cc838bf",resourcesDayViewAllDayEvent:"m_d6d6dd52",resourcesDayViewResizeHandle:"m_97715629",resourcesDayViewEventWrapper:"m_93bc1ec6"},j=e.i(494834),C=e.i(19300),k=e.i(481178),$=e.i(275519),V=e.i(433512),H=e.i(779177),N=e.i(951254),B=e.i(44091),z=e.i(62904),A=e.i(391466),L=e.i(822933),O=e.i(417241),P=e.i(332977),_=e.i(191788),F=e.i(205693);let G={__staticSelector:"ResourcesDayView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,headerFormat:"MMMM D, YYYY",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default",maxEventsPerTimeSlot:2},W=(0,k.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesDayView:{"--resources-day-view-radius":t?(0,V.getRadius)(t):void 0,"--resources-day-view-slot-width":(0,H.rem)(r),"--resources-day-view-row-height":(0,H.rem)(o),"--resources-day-view-group-label-width":(0,H.rem)(a)}})),U=(0,$.factory)(e=>{let M=(0,B.useProps)("ResourcesDayView",G,e),{classNames:k,className:$,style:V,styles:H,unstyled:U,attributes:J,vars:Q,startTime:K,endTime:X,date:q,onDateChange:Z,resources:ee,intervalMinutes:et,slotLabelFormat:er,radius:eo,startScrollTime:ea,scrollAreaProps:en,locale:es,withCurrentTimeIndicator:ei,withCurrentTimeBubble:ed=!0,__staticSelector:el,withHeader:eu,onViewChange:ec,previousControlProps:em,nextControlProps:eD,todayControlProps:ev,viewSelectProps:ef,headerFormat:ep,events:eg,slotWidth:ey,rowHeight:eh,labels:ew,highlightBusinessHours:eY,businessHours:eS,renderEventBody:ex,renderEvent:eb,renderResourceLabel:eE,groups:eM,renderGroupLabel:eT,groupLabelWidth:eI,withEventsDragAndDrop:eR,onEventDrop:ej,canDragEvent:eC,onEventDragStart:ek,onEventDragEnd:e$,onTimeSlotClick:eV,onEventClick:eH,withDragSlotSelect:eN,onSlotDragEnd:eB,mode:ez,onExternalEventDrop:eA,withEventResize:eL,onEventResize:eO,canResizeEvent:eP,recurrenceExpansionLimit:e_,maxEventsPerTimeSlot:eF,moreEventsProps:eG,...eW}=M,eU=void 0!==eF?Math.max(1,eF):void 0,eJ=(0,A.useStyles)({name:el,classes:R,props:M,className:$,style:V,classNames:k,styles:H,unstyled:U,vars:Q,varsResolver:W,attributes:J,rootSelector:"resourcesDayView"}),{resolvedClassNames:eQ,resolvedStyles:eK}=(0,z.useResolvedStylesApi)({classNames:k,styles:H,props:M}),eX={classNames:eQ,styles:eK,attributes:J,__staticSelector:el,radius:eo},eq=(0,N.useMantineTheme)(),[eZ,e0]=(0,_.useState)(!1),[e1,e8]=(0,_.useState)(!1),e2=(0,F.useDatesContext)(),e3=(0,o.getDayTimeIntervals)({startTime:K,endTime:X,intervalMinutes:et}),{orderedResources:e9,groupRanges:e4,resourceGroupMap:e6}=(0,_.useMemo)(()=>(0,m.getOrderedResources)(ee,eM),[ee,eM]),e5=e4.length>0,e7=(0,_.useCallback)((e,t)=>{if(!eA)return;let r=(0,j.default)(q).format("YYYY-MM-DD");eA({dataTransfer:e.dataTransfer,dropDateTime:`${r} ${e3[t.slotIndex].startTime}`,resourceId:t.resourceId})},[eA,e3,q]),te=(0,_.useRef)(void 0),tt=(0,p.useDragDropHandlers)({enabled:eR,mode:ez,onEventDrop:(0,_.useCallback)(e=>{ej?.({...e,resourceId:te.current})},[ej]),canDragEvent:eC,onEventDragStart:ek,onEventDragEnd:e$,calculateDropTarget:(e,t)=>{te.current=e.resourceId;let r=e3[e.slotIndex].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:(0,j.default)(q).format("YYYY-MM-DD"),targetSlotTime:r,intervalMinutes:et})},onExternalDrop:eA?e7:void 0}),tr=(0,_.useMemo)(()=>(0,v.getGroupToResourceIdMap)(ee),[ee]),to=(0,g.useSlotDragSelect)({enabled:eN&&"static"!==ez,onDragEnd:(e,t,r)=>{if(!eB)return;let o=(0,j.default)(q).format("YYYY-MM-DD");eB({rangeStart:`${o} ${e3[e].startTime}`,rangeEnd:`${o} ${e3[t].endTime}`,resourceId:tr.get(r)??r})}}),ta=(0,S.useHorizontalEventResize)({enabled:eL,mode:ez,startTime:K,endTime:X,intervalMinutes:et,onEventResize:eO,canResizeEvent:eP}),tn=(eR||!!eA)&&"static"!==ez,ts=(e,t,r)=>{if(!eV)return;let o=(0,j.default)(q).format("YYYY-MM-DD"),a=e3.findIndex(e=>e.startTime===t);if(-1===a)return;let n=e3[a];eV({slotStart:`${o} ${n.startTime}`,slotEnd:`${o} ${n.endTime}`,nativeEvent:r,resourceId:e})},ti=(0,j.default)(q).format("YYYY-MM-DD"),td=(0,j.default)(q).isSame((0,j.default)(),"day"),[tl,tu]=(0,_.useState)((0,n.getCurrentTimePosition)({startTime:K,endTime:X,intervalMinutes:et}));(0,L.useInterval)(()=>tu((0,n.getCurrentTimePosition)({startTime:K,endTime:X,intervalMinutes:et})),6e4,{autoInvoke:!0});let tc=(ei??td)&&(0,s.isInTimeRange)({date:(0,j.default)().toDate(),startTime:K,endTime:X}),tm=ed?(0,r.formatDate)({locale:e2.getLocale(es),date:(0,j.default)(),format:er}):"",tD=(0,_.useMemo)(()=>(0,c.expandRecurringEvents)({events:eg,rangeStart:(0,j.default)(q).startOf("day").toDate(),rangeEnd:(0,j.default)(q).endOf("day").toDate(),expansionLimit:e_}),[eg,q,e_]),tv=(0,_.useMemo)(()=>(0,b.getResourcesDayViewEvents)({date:q,events:tD,resources:ee,startTime:K,endTime:X,intervalMinutes:et}),[q,tD,ee,K,X,et]),tf=e3.map(e=>{let t=(0,r.formatDate)({date:(0,j.default)(`${ti} ${e.startTime}`),locale:e2.getLocale(es),format:er});return(0,_.createElement)(E.Box,{...eJ("resourcesDayViewTimeLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,u.getBusinessHoursMod)({time:e.startTime,businessHours:eS,highlightBusinessHours:eY})}},t)}),tp=(0,_.useRef)([]),tg=(0,_.useRef)([]),ty=(0,_.useRef)(null),th=(0,P.useMergedRef)(ty,en?.viewportRef),tw={resourceIndex:0,slotIndex:0};(0,O.useIsomorphicEffect)(()=>{if(!ea||!ty.current)return;let e=tp.current[0];if(!e||0===e.length)return;let t=e3.findIndex(e=>e.startTime>=ea);if(t<0)return;let r=e[t];if(!r)return;let o=r.getBoundingClientRect(),a=ty.current.getBoundingClientRect(),n=ty.current.querySelector(`.${R.resourcesDayViewCorner}`),s=n?n.getBoundingClientRect().width:0;ty.current.scrollTo({left:o.left-a.left-s,top:0})},[]);let tY=(0,_.useCallback)((e,t)=>(0,f.getIndexFromDragPoint)(tp.current[t]??[],e.clientX),[]),tS=(e,t,r)=>{(0,D.handleResourcesGridKeyDown)({controlsRef:tp,resourceIndex:t,slotIndex:r,event:e})},tx=e9.map((e,t)=>{let r=[...tv.backgroundTimedEvents[e.id]||[],...tv.backgroundAllDayEvents[e.id]||[]].map(e=>{let t=eq.variantColorResolver({color:e.color||eq.primaryColor,theme:eq,variant:"light",autoContrast:!0}),r="function"==typeof ex?ex(e):e.title,o={key:`bg-${e.id}`,...eJ("resourcesDayViewBackgroundEvent",{style:{left:`${e.position.top}%`,width:`${e.position.height}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:r};return"function"==typeof eb?eb(e,o):(0,T.jsx)(E.Box,{...o})}),o=(tv.regularEvents[e.id]||[]).filter(e=>!(0,i.isAllDayEvent)({event:e,date:q})),a=(void 0!==eU?o.filter(e=>e.position.column<eU):o).map(e=>{let r=tt.isDraggableEvent(e),o=ta.isResizableEvent(e),a=ta.getResizePosition(e.id),n=a?a.left:e.position.top,s=a?a.width:e.position.height,i=void 0!==eU&&e.position.overlaps>eU,l=o?eq.variantColorResolver({color:e.color||eq.primaryColor,theme:eq,variant:e.variant||"light",autoContrast:!0}):null,u=null!==a,c=u&&ta.resizingEdge?ta.resizingEdge:null;return(0,T.jsxs)(E.Box,{...eJ("resourcesDayViewEventWrapper"),__vars:l?{"--event-color":l.color}:void 0,"data-resizing":u||void 0,style:{...(0,d.getTimeAxisEventStyle)({start:n,span:s}),top:i?`calc((100% - 22px) * ${e.position.column} / ${eU})`:`${e.position.offset}%`,height:i?`calc((100% - 22px) / ${eU})`:`${e.position.width}%`},children:[(0,T.jsx)(h.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:r,isResizing:u,renderEventBody:ex,renderEvent:eb,radius:eo,mode:ez,onClick:eH?t=>{ta.wasResizing()||eH(e,t)}:void 0,style:{width:"100%",height:"100%"}}),o&&"static"!==ez&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{...eJ("resourcesDayViewResizeHandle"),"data-edge":"start","data-active":"start"===c||void 0,onPointerDown:r=>{let o=tg.current[t];o&&ta.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ti,pointerEvent:r})}}),(0,T.jsx)("div",{...eJ("resourcesDayViewResizeHandle"),"data-edge":"end","data-active":"end"===c||void 0,onPointerDown:r=>{let o=tg.current[t];o&&ta.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ti,pointerEvent:r})}})]})]},e.id)}),n=tv.allDayEvents[e.id]||[],s=n.map((e,t)=>(0,T.jsx)(E.Box,{...eJ("resourcesDayViewAllDayEvent",{style:{top:`calc(${t} * (var(--resources-day-view-all-day-height) + 2px) + 2px)`}}),children:(0,T.jsx)(h.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,renderEventBody:ex,renderEvent:eb,radius:eo,mode:ez,onClick:eH?t=>eH(e,t):void 0,style:{width:"100%",height:"100%"}})},`all-day-${e.id}`)),l=void 0!==eU?(0,x.getOverlapClusters)(o).filter(e=>e.some(e=>e.position.column>=eU)).map(e=>{let t=e.filter(e=>e.position.column>=eU).length,r=Math.min(...e.map(e=>e.position.top)),o=Math.max(...e.map(e=>e.position.top+e.position.height));return(0,T.jsx)(w.MoreEvents,{events:e,moreEventsCount:t,mode:ez,labels:ew,renderEventBody:ex,renderEvent:eb,onEventClick:eH,style:{position:"absolute",left:`calc(${r}% + 1px)`,width:`calc(${o-r}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...eX,...eG},`more-${e[0].id}`)}):[];return(0,T.jsxs)(I,{resource:e,resourceIndex:t,date:ti,slots:e3,getStyles:eJ,labels:ew,highlightBusinessHours:eY,businessHours:eS,withEventsDragAndDrop:tn,mode:ez,slotsRef:tp,firstSlotIndex:tw,onSlotKeyDown:tS,onSlotClick:ts,onRowSlotsDragOver:(e,t,r)=>{let o=tY(e,r);null!==o&&tt.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:tt.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tY(e,r);null!==o&&tt.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:tt.dropTarget?.resourceId===e.id?tt.dropTarget.slotIndex:void 0,withDragSlotSelect:eN,onSlotPointerDown:to.handleSlotPointerDown,isSlotDragSelected:to.isSlotSelected,rowSlotsContainerRef:e=>{tg.current[t]=e},renderResourceLabel:eE,renderGroupLabel:eT,scrolledX:e1,groupInfo:e5?e6[t]:void 0,allDayCount:n.length,children:[r,s,a,l]},e.id)}),tb=(0,r.formatDate)({date:(0,j.default)(q),locale:e2.getLocale(es),format:ep}),tE=(0,T.jsxs)(E.Box,{...eJ("resourcesDayView"),mod:{static:"static"===ez,"slot-dragging":to.isDragging,resizing:ta.isResizing,"event-interaction":ta.isResizing||tt.dragContextValue.isDragging},...eW,children:[eu&&(0,T.jsx)(Y.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,a.toDateString)((0,j.default)(q).subtract(1,"day")),next:()=>(0,a.toDateString)((0,j.default)(q).add(1,"day")),today:()=>(0,a.toDateString)((0,j.default)())},control:{miw:140,title:tb},labels:ew,onDateChange:Z,onViewChange:ec,previousControlProps:em,nextControlProps:eD,todayControlProps:ev,viewSelectProps:{views:["day","week","month"],...ef},stylesApiProps:eX}),(0,T.jsx)(E.Box,{...eJ("resourcesDayViewRoot"),children:(0,T.jsx)(C.ScrollArea,{scrollbarSize:4,...en,...eJ("resourcesDayViewScrollArea",{className:en?.className,style:en?.style}),onScrollPositionChange:e=>{en?.onScrollPositionChange?.(e),e0(0!==e.y),e8(0!==e.x)},viewportRef:th,children:(0,T.jsxs)("div",{...eJ("resourcesDayViewInner"),children:[(0,T.jsxs)(E.Box,{...eJ("resourcesDayViewTimeLabelsRow"),mod:{scrolled:eZ},children:[(0,_.createElement)("div",{...eJ("resourcesDayViewCorner"),key:"corner",style:e5?{flexBasis:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))",minWidth:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ew)),tf]}),tx,tc&&(0,T.jsxs)(E.Box,{...eJ("resourcesDayViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":e5?`calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width) + (100% - var(--resources-day-view-resource-label-width) - var(--resources-day-view-group-label-width)) * ${tl} / 100)`:`calc(var(--resources-day-view-resource-label-width) + (100% - var(--resources-day-view-resource-label-width)) * ${tl} / 100)`,"--_time-bubble-width":tm?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ed&&(0,T.jsx)("div",{...eJ("resourcesDayViewCurrentTimeIndicatorTimeBubble"),children:tm}),!ed&&(0,T.jsx)("div",{...eJ("resourcesDayViewCurrentTimeIndicatorThumb")}),(0,T.jsx)("div",{...eJ("resourcesDayViewCurrentTimeIndicatorLine")})]})]})})})]}),tM=(0,_.useMemo)(()=>tt.dragContextValue,[tt.dragContextValue]);return eR?(0,T.jsx)(y.DragContext.Provider,{value:tM,children:tE}):tE});U.displayName="@mantine/schedule/ResourcesDayView",U.classes=R,U.varsResolver=W,e.s(["ResourcesDayView",0,U],613490)},189305,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],n=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${o} 09:30:00`,end:`${o} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${o} 13:00:00`,end:`${o} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${o} 11:00:00`,end:`${o} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${o} 14:00:00`,end:`${o} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${o} 10:00:00`,end:`${o} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${o} 15:00:00`,end:`${o} 16:00:00`,color:"grape",resourceId:"london"}],s=`
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 09:30:00\`,
    end: \`\${today} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
];
`;var i=e.i(191788),d=e.i(391398),l=e.i(613490);let u={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},c=(0,r.default)().format("YYYY-MM-DD"),m=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),D=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],v=[{id:1,title:"Offsite",start:`${c} 00:00:00`,end:`${m} 00:00:00`,color:"blue",resourceId:"tokyo"},{id:6,title:"On call",start:`${c} 00:00:00`,end:`${m} 00:00:00`,color:"grape",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${c} 10:00:00`,end:`${c} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Maintenance",start:`${c} 00:00:00`,end:`${m} 00:00:00`,color:"gray",display:"background",resourceId:"paris"},{id:4,title:"Client Call",start:`${c} 09:30:00`,end:`${c} 10:30:00`,color:"violet",resourceId:"paris"},{id:5,title:"Holiday",start:`${c} 00:00:00`,end:`${m} 00:00:00`,color:"orange",resourceId:"new-york"}],f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:D,events:v,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n];\n\n// All-day events span the whole day (start at 00:00, end at the next day 00:00).\n// Foreground all-day events render as a full-width bar pinned to the top of the\n// resource row, background all-day events (display: 'background') tint the whole row.\nconst events: ScheduleEventData[] = [\n  { id: 1, title: 'Offsite', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 6, title: 'On call', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'grape', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Maintenance', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'gray', display: 'background', resourceId: 'paris' },\n  { id: 4, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 5, title: 'Holiday', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'orange', resourceId: 'new-york' },\n];\n",language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD")),[o,s]=(0,i.useState)(n);return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
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
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},g={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD")),[o,s]=(0,i.useState)(n);return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={({ eventId, newStart, newEnd }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd }
              : event
          )
        );
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var y=e.i(162077),h=e.i(988798);let w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD")),[o,s]=(0,i.useState)(n),[u,c]=(0,i.useState)(!1),[m,D]=(0,i.useState)(null),[v,f]=(0,i.useState)(String(a[0].id));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{f(r?String(r):String(a[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{f(r?String(r):String(a[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onEventClick:e=>{f(e.resourceId?String(e.resourceId):String(a[0].id)),D({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),c(!0)}}),(0,d.jsx)(y.EventForm,{opened:u,onClose:()=>c(!1),onExitTransitionEnd:()=>D(null),values:m,onSubmit:e=>{e.id?s(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:v||a[0].id}:t)):s(t=>[...t,{id:Date.now(),title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:v||a[0].id}])},onDelete:m?.id?()=>{m?.id&&s(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,d.jsx)(h.Select,{label:"Conference Room",placeholder:"Select a room",radius:"md",data:a.map(e=>({value:String(e.id),label:String(e.label)})),value:v,onChange:f})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(
    String(resources[0].id)
  );

  const handleTimeSlotClick = ({
    slotStart,
    slotEnd,
    resourceId,
  }: {
    slotStart: string;
    slotEnd: string;
    nativeEvent: React.MouseEvent;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : String(resources[0].id));
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
                start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
                end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
                color: values.color || 'blue',
                resourceId: selectedResourceId || resources[0].id,
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: values.title,
          start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
          end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
          color: values.color || 'blue',
          resourceId: selectedResourceId || resources[0].id,
        },
      ]);
    }
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
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
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
      <ResourcesDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
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
          label="Conference Room"
          placeholder="Select a room"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: String(r.label) }))}
          value={selectedResourceId}
          onChange={setSelectedResourceId}
        />
      </EventForm>
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:y._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"07:00:00",endTime:"20:00:00",highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="07:00:00"
      endTime="20:00:00"
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var x=e.i(671640),b=e.i(883364);let E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",renderResourceLabel:e=>(0,d.jsxs)(x.Stack,{gap:2,align:"flex-start",children:[(0,d.jsx)(b.Text,{size:"sm",fw:600,children:e.label}),(0,d.jsx)(b.Text,{size:"xs",c:"dimmed",children:"Floor 2"})]})})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderResourceLabel={(resource) => (
        <Stack gap={2} align="flex-start">
          <Text size="sm" fw={600}>{resource.label}</Text>
          <Text size="xs" c="dimmed">Floor 2</Text>
        </Stack>
      )}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var M=e.i(19683),T=e.i(369974),I=e.i(284629);let R=(0,r.default)().format("YYYY-MM-DD"),j=[{id:1,title:"Team Standup",start:`${R} 09:00:00`,end:`${R} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${R} 10:00:00`,end:`${R} 11:30:00`,color:"green",resourceId:"tokyo",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Client Call",start:`${R} 09:30:00`,end:`${R} 10:30:00`,color:"violet",resourceId:"paris",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:4,title:"Design Review",start:`${R} 13:00:00`,end:`${R} 14:00:00`,color:"orange",resourceId:"paris",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:5,title:"Workshop",start:`${R} 14:00:00`,end:`${R} 16:00:00`,color:"pink",resourceId:"new-york",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],C={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD")),[o,n]=(0,i.useState)(j);return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},renderEvent:(e,t)=>(0,d.jsxs)(T.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,d.jsx)(T.HoverCard.Target,{children:(0,d.jsx)(I.UnstyledButton,{...t})}),(0,d.jsx)(T.HoverCard.Dropdown,{children:(0,d.jsx)(M.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:M._eventDetailsCode,language:"tsx"},{fileName:"data.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(j,null,2)};`,language:"tsx"}]};var k=e.i(232471),$=e.i(20035);let V=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD")),[o,n]=(0,i.useState)([]),s=(0,i.useRef)(1);return(0,d.jsxs)($.Grid,{children:[(0,d.jsxs)($.Grid.Col,{span:{base:12,sm:3},children:[(0,d.jsx)(b.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),V.map(e=>(0,d.jsxs)(k.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(b.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(b.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,d.jsx)($.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:o})=>{let a=e.getData("text/plain");if(!a)return;let i=JSON.parse(a),d=(0,r.default)(t),l=d.add(i.duration,"minutes");n(e=>[...e,{id:s.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color,resourceId:o}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
  { id: 'london', label: 'London' },
];

const sidebarItems = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
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
        <ResourcesDayView
          date={date}
          onDateChange={setDate}
          resources={resources}
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
`},N=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD")),[o,n]=(0,i.useState)(N),[s,u]=(0,i.useState)([]),[c,m]=(0,i.useState)(!1),D=(0,i.useRef)(1);return(0,d.jsxs)($.Grid,{children:[(0,d.jsx)($.Grid.Col,{span:{base:12,sm:3},children:(0,d.jsxs)(k.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",m(!0)},onDragLeave:()=>m(!1),onDrop:e=>{e.preventDefault(),m(!1);let t=e.dataTransfer.getData("application/json");if(!t)return;let{eventId:o}=JSON.parse(t),a=s.find(e=>String(e.id)===String(o));if(!a)return;let i=(0,r.default)(a.end).diff((0,r.default)(a.start),"minutes");n(e=>[...e,{title:a.title,duration:i,color:a.color||"blue"}]),u(e=>e.filter(e=>e.id!==a.id))},style:{padding:8,borderRadius:8,border:c?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,d.jsx)(b.Text,{fw:500,mb:"xs",children:"Unscheduled"}),o.map(e=>(0,d.jsxs)(k.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(b.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(b.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===o.length&&(0,d.jsx)(b.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,d.jsx)($.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:s,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{u(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:o})=>{let a=e.getData("text/plain");if(!a)return;let s=JSON.parse(a),i=(0,r.default)(t),d=i.add(s.duration,"minutes");u(e=>[...e,{id:D.current++,title:s.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:s.color,resourceId:o}]),n(e=>e.filter(e=>e.title!==s.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
  { id: 'london', label: 'London' },
];

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
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const [sidebarHighlight, setSidebarHighlight] = useState(false);
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
    setSidebarItems((prev) => prev.filter((item) => item.title !== data.title));
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
        <ResourcesDayView
          date={date}
          onDateChange={setDate}
          resources={resources}
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
`};e.i(27355);let z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente",resources:"Recursos"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
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
        resources: 'Recursos',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"09:00:00",endTime:"17:00:00",intervalMinutes:30})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
      intervalMinutes={30}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var L=e.i(892791);let O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD")),[o,s]=(0,i.useState)("120");return(0,d.jsxs)(x.Stack,{children:[(0,d.jsx)(L.SegmentedControl,{value:o,onChange:s,data:[{label:"1 hour",value:"60"},{label:"2 hours",value:"120"},{label:"4 hours",value:"240"}]}),(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,intervalMinutes:Number(o),startScrollTime:"08:00:00"})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [intervalMinutes, setIntervalMinutes] = useState('120');

  return (
    <Stack>
      <SegmentedControl
        value={intervalMinutes}
        onChange={setIntervalMinutes}
        data={[
          { label: '1 hour', value: '60' },
          { label: '2 hours', value: '120' },
          { label: '4 hours', value: '240' },
        ]}
      />
      <ResourcesDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        intervalMinutes={Number(intervalMinutes)}
        startScrollTime="08:00:00"
      />
    </Stack>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",slotWidth:120,rowHeight:80})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotWidth={120}
      rowHeight={80}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",radius:"md"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius="md"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"00:00:00",endTime:"23:59:00",startScrollTime:"12:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:00"
      startScrollTime="12:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"00:00:00",endTime:"23:59:00",scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0,type:"always",scrollbars:"x"}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:00"
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
        type: 'always',
        scrollbars: 'x',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},W={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(l.ResourcesDayView,{date:new Date,resources:a,events:n,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!1})},code:[{code:`
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},U=(0,r.default)().format("YYYY-MM-DD"),J=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],Q=[{id:1,title:"Draggable & Resizable",start:`${U} 09:00:00`,end:`${U} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Locked Event",start:`${U} 11:00:00`,end:`${U} 12:00:00`,color:"gray",resourceId:"paris",payload:{locked:!0}},{id:3,title:"Another Movable",start:`${U} 14:00:00`,end:`${U} 15:00:00`,color:"green",resourceId:"new-york"}],K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)(Q);return(0,d.jsx)(l.ResourcesDayView,{date:new Date,resources:J,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,withEventResize:!0,onEventDrop:({eventId:e,newStart:r,newEnd:o,resourceId:a})=>{t(t=>t.map(t=>t.id===e?{...t,start:r,end:o,resourceId:a}:t))},onEventResize:({eventId:e,newStart:r,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:r,end:o}:t))},canDragEvent:e=>!e.payload?.locked,canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable & Resizable',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    resourceId: 'paris',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Movable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
    resourceId: 'new-york',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

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

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string; event: ScheduleEventData }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      withEventResize
      onEventDrop={handleEventDrop}
      onEventResize={handleEventResize}
      canDragEvent={(event) => !event.payload?.locked}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`},X=(0,r.default)().format("YYYY-MM-DD"),q=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],Z=[{id:1,title:"Team Standup",start:`${X} 09:00:00`,end:`${X} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${X} 09:00:00`,end:`${X} 10:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Code Review",start:`${X} 09:30:00`,end:`${X} 10:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"1:1 Meeting",start:`${X} 09:15:00`,end:`${X} 10:15:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Client Call",start:`${X} 09:00:00`,end:`${X} 10:00:00`,color:"cyan",resourceId:"paris"},{id:6,title:"Design Review",start:`${X} 09:00:00`,end:`${X} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Architecture Review",start:`${X} 09:00:00`,end:`${X} 10:00:00`,color:"red",resourceId:"paris"}],ee={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:q,events:Z,startTime:"08:00:00",endTime:"18:00:00",maxEventsPerTimeSlot:2})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  // ... many overlapping events per resource
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      maxEventsPerTimeSlot={2}
    />
  );
}
`},et=(0,r.default)().format("YYYY-MM-DD"),er=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],eo=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,r.default)(et).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,r.default)(et).subtract(2,"day").format("YYYY-MM-DD")} 11:00:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${et} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${et} 14:00:00`,end:`${et} 16:00:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${et} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${et} 11:00:00`,end:`${et} 13:00:00`,color:"green",resourceId:"paris"}],ea={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)(et);return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:er,events:eo,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 11:00:00\`,
    color: 'blue',
    resourceId: 'tokyo',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'tokyo',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'green',
    resourceId: 'paris',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},en=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"},{id:"overflow",label:"Overflow room"}],es=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york","london"]}],ei={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,i.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,d.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:en,events:n,groups:es,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleResourceGroup } from '@mantine/schedule';
import { events } from './data';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
  { id: 'overflow', label: 'Overflow room' },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['new-york', 'london'] },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var ed=(0,t.__exportAll)({allDayEvents:()=>f,bidirectionalDragDrop:()=>B,businessHours:()=>S,currentTimeIndicator:()=>W,dragDrop:()=>p,eventForm:()=>w,eventResize:()=>g,externalDragDrop:()=>H,localization:()=>z,maxEventsPerTimeSlot:()=>ee,multiHourIntervals:()=>O,permissions:()=>K,radius:()=>_,recurringEvents:()=>ea,renderEvent:()=>C,renderResourceLabel:()=>E,resourceGroups:()=>ei,scrollAreaProps:()=>G,slotWidth:()=>P,startScrollTime:()=>F,staticMode:()=>Y,timeRange:()=>A,usage:()=>u});e.s(["ResourcesDayViewDemos",0,ed],189305)}]);