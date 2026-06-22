(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let r=new Map(e.map(e=>[e.id,e])),o=new Set,a=[],s=[];for(let e of t){let t=a.length,n=0;for(let t of e.resourceIds){let e=r.get(t);e&&!o.has(t)&&(a.push(e),o.add(t),n++)}n>0&&s.push({group:e,startIndex:t,count:n})}for(let t of e)o.has(t.id)||a.push(t);let n=Array(a.length).fill(null);for(let e of s)for(let t=0;t<e.count;t++){let r,o=e.startIndex+t;r=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",n[o]={group:e.group,position:r,count:e.count}}return{orderedResources:a,groupRanges:s,resourceGroupMap:n}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let r of e)t.set(String(r.id),r.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let r=e.findIndex(e=>{if(!e)return!1;let r=e.getBoundingClientRect();return t>=r.left&&t<=r.right});if(r>=0)return r;let o=e[0],a=e[e.length-1];if(!o||!a)return null;let s=o.getBoundingClientRect(),n=a.getBoundingClientRect();return t<s.left?0:t>n.right?e.length-1:null}],461304)},640542,367752,578373,e=>{"use strict";e.s(["handleResourcesGridKeyDown",0,function({controlsRef:e,resourceIndex:t,slotIndex:r,event:o}){let a=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(o.key);if(a){o.preventDefault();let s=e.current?e.current.map(e=>e?e.length:0):null;if(!s)return;!function e({controlsRef:t,direction:r,resourceIndex:o,slotIndex:a,size:s}){let n=function({direction:e,resourceIndex:t,slotIndex:r,size:o}){let a=o[t];if(!a)return null;switch(e){case"left":if(0===r)return null;return{resourceIndex:t,slotIndex:r-1};case"right":if(r===a-1)return null;return{resourceIndex:t,slotIndex:r+1};case"up":{if(0===t)return null;let e=o[t-1];return{resourceIndex:t-1,slotIndex:Math.min(r,e-1)}}case"down":{if(t===o.length-1)return null;let e=o[t+1];return{resourceIndex:t+1,slotIndex:Math.min(r,e-1)}}default:return null}}({direction:r,resourceIndex:o,slotIndex:a,size:s});if(!n)return;let i=t.current?.[n.resourceIndex]?.[n.slotIndex];i&&(i.disabled||i.getAttribute("data-hidden")?e({controlsRef:t,direction:r,resourceIndex:n.resourceIndex,slotIndex:n.slotIndex,size:s}):i.focus())}({controlsRef:e,direction:a,resourceIndex:t,slotIndex:r,size:s})}}],640542);var t=e.i(751198);e.s(["getOverlapClusters",0,function(e){let r=[],o=new Set;for(let a=0;a<e.length;a++){if(o.has(a))continue;let s=[e[a]];o.add(a);let n=0;for(;n<s.length;){for(let r=0;r<e.length;r++)!o.has(r)&&(0,t.isEventsOverlap)(s[n],e[r])&&(s.push(e[r]),o.add(r));n++}r.push(s)}return r}],367752);var r=e.i(969610),o=e.i(298008),a=e.i(68642),s=e.i(532965),n=e.i(922621),i=e.i(494834);e.s(["getResourcesDayViewEvents",0,function({events:e,resources:t,date:l,startTime:d,endTime:u}){let c={regularEvents:{},allDayEvents:{},backgroundTimedEvents:{},backgroundAllDayEvents:{}};for(let e of t)c.regularEvents[e.id]=[],c.allDayEvents[e.id]=[],c.backgroundTimedEvents[e.id]=[],c.backgroundAllDayEvents[e.id]=[];if(void 0===e)return c;let m=(0,i.default)(l).startOf("day"),f=(0,i.default)(l).endOf("day"),v={},g={};for(let e of t)v[e.id]=[],g[e.id]=[];let h=new Set;for(let t of e){if(void 0===t.resourceId||!(t.resourceId in v))continue;let e=(0,i.default)(t.start),r=(0,i.default)(t.end),s=e.isSame(m,"day"),n=!s&&"background"===t.display&&e.isBefore(f)&&r.isAfter(m);if(s||n){if(s&&!(0,a.isEventInTimeRange)({event:t,startTime:d,endTime:u}))continue;let e=(0,o.validateEvent)(t);if(h.has(t.id))throw Error(`[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${t.id}`);h.add(t.id),"background"===t.display?g[t.resourceId].push(e):v[t.resourceId].push(e)}}for(let e of t){for(let t of(0,n.getDayPositionedEvents)({events:v[e.id],startTime:d,endTime:u,date:l}))t.position.allDay?c.allDayEvents[e.id].push(t):c.regularEvents[e.id].push(t);for(let t of g[e.id]){let o=(0,i.default)(t.start),a=(0,i.default)(t.end),n=o.isBefore(m)?m:o,v=a.isAfter(f)?f:a,g={...t,start:n.format("YYYY-MM-DD HH:mm:ss"),end:v.format("YYYY-MM-DD HH:mm:ss")};if((0,r.isAllDayEvent)({event:g,date:l}))c.backgroundAllDayEvents[e.id].push({...t,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:r,height:o}=(0,s.getDayPosition)({event:g,startTime:d,endTime:u});if(o<=0)continue;c.backgroundTimedEvents[e.id].push({...t,position:{top:r,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}}return c}],578373)},613490,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(688785),n=e.i(664397),i=e.i(969610),l=e.i(792930),d=e.i(505696),u=e.i(657068),c=e.i(420924),m=e.i(640542),f=e.i(176304),v=e.i(461304),g=e.i(783261),h=e.i(376879),p=e.i(201867),w=e.i(891343),D=e.i(67312),y=e.i(966696),x=e.i(672654),S=e.i(42916),b=e.i(494834),T=e.i(191788),E=e.i(367752),k=e.i(578373),I=e.i(232471),M=e.i(284629),V=e.i(391398);function R({resource:e,resourceIndex:r,date:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:l,businessHours:u,withEventsDragAndDrop:c,onRowSlotsDragOver:m,onRowSlotsDragLeave:f,onRowSlotsDrop:v,onSlotClick:g,dropTargetSlotIndex:h,mode:p,slotsRef:w,firstSlotIndex:D,onSlotKeyDown:y,withDragSlotSelect:x,onSlotPointerDown:S,isSlotDragSelected:b,rowSlotsContainerRef:T,renderResourceLabel:E,renderGroupLabel:k,scrolledX:Y,groupInfo:C,allDayCount:$}){let j=String(e.id),P=a.map((a,n)=>{let m=h===n,f=D?.resourceIndex===r&&D?.slotIndex===n,v=b?.(n,j)||!1;return(0,V.jsx)(M.UnstyledButton,{ref:e=>{if(!w?.current)return;w.current[r]||(w.current[r]=[]);let t=w.current[r];if(e)t[n]=e;else for(delete t[n];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesDayViewRowSlot"),mod:{"hour-start":a.isHourStart,...(0,d.getBusinessHoursMod)({time:a.startTime,businessHours:u,highlightBusinessHours:l}),"drop-target":m,"drag-selected":v,static:"static"===p},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${a.startTime} - ${a.endTime}`,tabIndex:"static"===p?-1:f?0:-1,"data-drag-slot-index":x&&"static"!==p?n:void 0,"data-drag-slot-group":x&&"static"!==p?j:void 0,onKeyDown:e=>{y&&y(e,r,n)},onPointerDown:x&&"static"!==p?e=>S?.(e,n,j):void 0,onClick:"static"!==p&&g?t=>g(e.id,a.startTime,t):void 0,onDragOver:c&&"static"!==p?e=>e.preventDefault():void 0},a.startTime)}),W=C?.position==="first"||C?.position==="only",O=void 0!==C?null!==C?(0,V.jsx)(I.Box,{...s("resourcesDayViewGroupColumn"),mod:{"scrolled-x":Y,"group-position":C.position},children:W&&(0,V.jsx)("span",{style:C.count>1?{transform:`translateY(calc((${C.count-1} * (var(--resources-day-view-row-height) + 1px)) / 2))`}:void 0,children:k?k(C.group):C.group.label})}):(0,V.jsx)(I.Box,{...s("resourcesDayViewGroupColumnEmpty"),mod:{"scrolled-x":Y}}):null;return(0,V.jsxs)(I.Box,{...s("resourcesDayViewRow"),children:[O,(0,V.jsx)(I.Box,{...s("resourcesDayViewResourceLabel"),mod:{"scrolled-x":Y,"has-groups":void 0!==C},children:E?E(e):e.label}),(0,V.jsxs)(I.Box,{ref:T,...s("resourcesDayViewRowSlots",{style:$?{minHeight:`max(var(--resources-day-view-row-height), calc(${$} * (var(--resources-day-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==p?t=>m?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==p?f:void 0,onDrop:c&&"static"!==p?t=>v?.(t,e.id,r):void 0,children:[n,P]})]})}var Y={resourcesDayView:"m_25154d8d",resourcesDayViewRoot:"m_d790b40f",resourcesDayViewScrollArea:"m_d54c5a67",resourcesDayViewInner:"m_1a0680c9",resourcesDayViewTimeLabelsRow:"m_26532081",resourcesDayViewCorner:"m_1c9c8e42",resourcesDayViewTimeLabel:"m_de91b51a",resourcesDayViewRow:"m_6a0ced0d",resourcesDayViewResourceLabel:"m_ac632f9",resourcesDayViewGroupColumn:"m_6c75eae8",resourcesDayViewGroupColumnEmpty:"m_f2903b45",resourcesDayViewRowSlots:"m_84f29928",resourcesDayViewRowSlot:"m_90acfcab",resourcesDayViewCurrentTimeIndicator:"m_3f0b79f6",resourcesDayViewCurrentTimeIndicatorLine:"m_7855b30a",resourcesDayViewCurrentTimeIndicatorThumb:"m_92d11180",resourcesDayViewCurrentTimeIndicatorTimeBubble:"m_e2aac04f",resourcesDayViewBackgroundEvent:"m_9cc838bf",resourcesDayViewAllDayEvent:"m_d6d6dd52",resourcesDayViewResizeHandle:"m_97715629",resourcesDayViewEventWrapper:"m_93bc1ec6"},C=e.i(19300),$=e.i(481178),j=e.i(275519),P=e.i(433512),W=e.i(779177),O=e.i(951254),B=e.i(44091),L=e.i(62904),_=e.i(391466),H=e.i(822933),A=e.i(417241),z=e.i(332977),N=e.i(205693);let F={__staticSelector:"ResourcesDayView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,headerFormat:"MMMM D, YYYY",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default",maxEventsPerTimeSlot:2},G=(0,$.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesDayView:{"--resources-day-view-radius":t?(0,P.getRadius)(t):void 0,"--resources-day-view-slot-width":(0,W.rem)(r),"--resources-day-view-row-height":(0,W.rem)(o),"--resources-day-view-group-label-width":(0,W.rem)(a)}})),U=(0,j.factory)(e=>{let M=(0,B.useProps)("ResourcesDayView",F,e),{classNames:$,className:j,style:P,styles:W,unstyled:U,attributes:K,vars:q,startTime:J,endTime:X,date:Q,onDateChange:Z,resources:ee,intervalMinutes:et,slotLabelFormat:er,radius:eo,startScrollTime:ea,scrollAreaProps:es,locale:en,withCurrentTimeIndicator:ei,withCurrentTimeBubble:el=!0,__staticSelector:ed,withHeader:eu,onViewChange:ec,previousControlProps:em,nextControlProps:ef,todayControlProps:ev,viewSelectProps:eg,headerFormat:eh,events:ep,slotWidth:ew,rowHeight:eD,labels:ey,highlightBusinessHours:ex,businessHours:eS,renderEventBody:eb,renderEvent:eT,renderResourceLabel:eE,groups:ek,renderGroupLabel:eI,groupLabelWidth:eM,withEventsDragAndDrop:eV,onEventDrop:eR,canDragEvent:eY,onEventDragStart:eC,onEventDragEnd:e$,onTimeSlotClick:ej,onEventClick:eP,withDragSlotSelect:eW,onSlotDragEnd:eO,mode:eB,onExternalEventDrop:eL,withEventResize:e_,onEventResize:eH,canResizeEvent:eA,recurrenceExpansionLimit:ez,maxEventsPerTimeSlot:eN,moreEventsProps:eF,...eG}=M,eU=void 0!==eN?Math.max(1,eN):void 0,eK=(0,_.useStyles)({name:ed,classes:Y,props:M,className:j,style:P,classNames:$,styles:W,unstyled:U,vars:q,varsResolver:G,attributes:K,rootSelector:"resourcesDayView"}),{resolvedClassNames:eq,resolvedStyles:eJ}=(0,L.useResolvedStylesApi)({classNames:$,styles:W,props:M}),eX={classNames:eq,styles:eJ,attributes:K,__staticSelector:ed,radius:eo},eQ=(0,O.useMantineTheme)(),[eZ,e0]=(0,T.useState)(!1),[e1,e8]=(0,T.useState)(!1),e2=(0,N.useDatesContext)(),e3=(0,o.getDayTimeIntervals)({startTime:J,endTime:X,intervalMinutes:et}),{orderedResources:e4,groupRanges:e6,resourceGroupMap:e9}=(0,T.useMemo)(()=>(0,c.getOrderedResources)(ee,ek),[ee,ek]),e7=e6.length>0,e5=(0,T.useCallback)((e,t)=>{if(!eL)return;let r=(0,b.default)(Q).format("YYYY-MM-DD");eL({dataTransfer:e.dataTransfer,dropDateTime:`${r} ${e3[t.slotIndex].startTime}`,resourceId:t.resourceId})},[eL,e3,Q]),te=(0,T.useRef)(void 0),tt=(0,g.useDragDropHandlers)({enabled:eV,mode:eB,onEventDrop:(0,T.useCallback)(e=>{eR?.({...e,resourceId:te.current})},[eR]),canDragEvent:eY,onEventDragStart:eC,onEventDragEnd:e$,calculateDropTarget:(e,t)=>{te.current=e.resourceId;let r=e3[e.slotIndex].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:(0,b.default)(Q).format("YYYY-MM-DD"),targetSlotTime:r,intervalMinutes:et})},onExternalDrop:eL?e5:void 0}),tr=(0,T.useMemo)(()=>(0,f.getGroupToResourceIdMap)(ee),[ee]),to=(0,h.useSlotDragSelect)({enabled:eW&&"static"!==eB,onDragEnd:(e,t,r)=>{if(!eO)return;let o=(0,b.default)(Q).format("YYYY-MM-DD");eO({rangeStart:`${o} ${e3[e].startTime}`,rangeEnd:`${o} ${e3[t].endTime}`,resourceId:tr.get(r)??r})}}),ta=function({enabled:e=!1,mode:t="default",startTime:r,endTime:o,intervalMinutes:a,onEventResize:s,canResizeEvent:n}){let[i,l]=(0,T.useState)(null),d=(0,T.useRef)(null),u=(0,T.useRef)(!1),c=(0,T.useEffectEvent)(s||(()=>{})),m=(0,S.parseTimeString)(r),f=(0,S.parseTimeString)(o),v=60*m.hours+m.minutes,g=60*f.hours+f.minutes,h=(0,x.clampIntervalMinutes)(a),p=g-v,w=Math.ceil(p/h)*h,D=h/w*100,y=(0,T.useCallback)(e=>Math.max(0,Math.min(p,Math.round(e/h)*h)),[p,h]),E=(0,T.useCallback)((e,t)=>{let r=v+y(e/100*w),o=Math.floor(r/60);return`${t} ${String(o).padStart(2,"0")}:${String(r%60).padStart(2,"0")}:00`},[w,v,y]),k=(0,T.useCallback)(e=>y(e/100*w)/w*100,[w,y]),I=(0,T.useCallback)(({event:r,edge:o,container:a,originalLeft:s,originalWidth:n,eventDate:i,pointerEvent:u})=>{if(!e||"static"===t)return;u.preventDefault(),u.stopPropagation();let c={eventId:r.id,event:r,edge:o,container:a,originalLeft:s,originalWidth:n,currentLeft:s,currentWidth:n,eventDate:i,originalStart:(0,b.default)(r.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,b.default)(r.end).format("YYYY-MM-DD HH:mm:ss")};d.current=c,l(c)},[e,t]),M=null!==i;(0,T.useEffect)(()=>{if(!M)return;let e=document.body.style.userSelect,t=document.body.style.cursor;document.body.style.userSelect="none",document.body.style.cursor="ew-resize";let r=e=>{let t=d.current;if(!t)return;let r=t.container.getBoundingClientRect(),o=k(Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100))),a=t.originalLeft,s=t.originalWidth;if("end"===t.edge)s=Math.max(D,o-t.originalLeft);else{let e=t.originalLeft+t.originalWidth;a=Math.min(o,e-D),s=e-a}d.current={...t,currentLeft:a,currentWidth:s},l(d.current)},o=()=>{let e=d.current;if(e&&(e.currentLeft!==e.originalLeft||e.currentWidth!==e.originalWidth)){let t,r;"start"===e.edge?(t=E(e.currentLeft,e.eventDate),r=e.originalEnd):(t=e.originalStart,r=E(e.currentLeft+e.currentWidth,e.eventDate)),c({eventId:e.eventId,newStart:t,newEnd:r,event:e.event})}d.current=null,l(null),u.current=!0,requestAnimationFrame(()=>{u.current=!1})};return document.addEventListener("pointermove",r),document.addEventListener("pointerup",o),()=>{document.body.style.userSelect=e,document.body.style.cursor=t,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o)}},[M]);let V=(0,T.useCallback)(e=>i&&i.eventId===e?{left:i.currentLeft,width:i.currentWidth}:null,[i]),R=(0,T.useCallback)(r=>!!e&&"static"!==t&&"background"!==r.display&&(!n||n(r)),[e,t,n]),Y=(0,T.useCallback)(()=>u.current,[]);return{handleResizeStart:I,isResizing:M,resizingEventId:i?.eventId??null,resizingEdge:i?.edge??null,getResizePosition:V,isResizableEvent:R,wasResizing:Y}}({enabled:e_,mode:eB,startTime:J,endTime:X,intervalMinutes:et,onEventResize:eH,canResizeEvent:eA}),ts=(eV||!!eL)&&"static"!==eB,tn=(e,t,r)=>{if(!ej)return;let o=(0,b.default)(Q).format("YYYY-MM-DD"),a=e3.findIndex(e=>e.startTime===t);if(-1===a)return;let s=e3[a];ej({slotStart:`${o} ${s.startTime}`,slotEnd:`${o} ${s.endTime}`,nativeEvent:r,resourceId:e})},ti=(0,b.default)(Q).format("YYYY-MM-DD"),tl=(0,b.default)(Q).isSame((0,b.default)(),"day"),[td,tu]=(0,T.useState)((0,s.getCurrentTimePosition)({startTime:J,endTime:X,intervalMinutes:et}));(0,H.useInterval)(()=>tu((0,s.getCurrentTimePosition)({startTime:J,endTime:X,intervalMinutes:et})),6e4,{autoInvoke:!0});let tc=(ei??tl)&&(0,n.isInTimeRange)({date:(0,b.default)().toDate(),startTime:J,endTime:X}),tm=el?(0,r.formatDate)({locale:e2.getLocale(en),date:(0,b.default)(),format:er}):"",tf=(0,T.useMemo)(()=>(0,u.expandRecurringEvents)({events:ep,rangeStart:(0,b.default)(Q).startOf("day").toDate(),rangeEnd:(0,b.default)(Q).endOf("day").toDate(),expansionLimit:ez}),[ep,Q,ez]),tv=(0,T.useMemo)(()=>(0,k.getResourcesDayViewEvents)({date:Q,events:tf,resources:ee,startTime:J,endTime:X}),[Q,tf,ee,J,X]),tg=e3.map(e=>{let t=(0,r.formatDate)({date:(0,b.default)(`${ti} ${e.startTime}`),locale:e2.getLocale(en),format:er});return(0,T.createElement)(I.Box,{...eK("resourcesDayViewTimeLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:eS,highlightBusinessHours:ex})}},t)}),th=(0,T.useRef)([]),tp=(0,T.useRef)([]),tw=(0,T.useRef)(null),tD=(0,z.useMergedRef)(tw,es?.viewportRef),ty={resourceIndex:0,slotIndex:0};(0,A.useIsomorphicEffect)(()=>{if(!ea||!tw.current)return;let e=th.current[0];if(!e||0===e.length)return;let t=e3.findIndex(e=>e.startTime>=ea);if(t<0)return;let r=e[t];if(!r)return;let o=r.getBoundingClientRect(),a=tw.current.getBoundingClientRect(),s=tw.current.querySelector(`.${Y.resourcesDayViewCorner}`),n=s?s.getBoundingClientRect().width:0;tw.current.scrollTo({left:o.left-a.left-n,top:0})},[]);let tx=(0,T.useCallback)((e,t)=>(0,v.getIndexFromDragPoint)(th.current[t]??[],e.clientX),[]),tS=(e,t,r)=>{(0,m.handleResourcesGridKeyDown)({controlsRef:th,resourceIndex:t,slotIndex:r,event:e})},tb=e4.map((e,t)=>{let r=[...tv.backgroundTimedEvents[e.id]||[],...tv.backgroundAllDayEvents[e.id]||[]].map(e=>{let t=eQ.variantColorResolver({color:e.color||eQ.primaryColor,theme:eQ,variant:"light",autoContrast:!0}),r="function"==typeof eb?eb(e):e.title,o={key:`bg-${e.id}`,...eK("resourcesDayViewBackgroundEvent",{style:{left:`${e.position.top}%`,width:`${e.position.height}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:r};return"function"==typeof eT?eT(e,o):(0,V.jsx)(I.Box,{...o})}),o=(tv.regularEvents[e.id]||[]).filter(e=>!(0,i.isAllDayEvent)({event:e,date:Q})),a=(void 0!==eU?o.filter(e=>e.position.column<eU):o).map(e=>{let r=tt.isDraggableEvent(e),o=ta.isResizableEvent(e),a=ta.getResizePosition(e.id),s=a?a.left:e.position.top,n=a?a.width:e.position.height,i=void 0!==eU&&e.position.overlaps>eU,l=o?eQ.variantColorResolver({color:e.color||eQ.primaryColor,theme:eQ,variant:e.variant||"light",autoContrast:!0}):null,d=null!==a,u=d&&ta.resizingEdge?ta.resizingEdge:null;return(0,V.jsxs)(I.Box,{...eK("resourcesDayViewEventWrapper"),__vars:l?{"--event-color":l.color}:void 0,"data-resizing":d||void 0,style:{left:`calc(${s}% + 1px)`,top:i?`calc((100% - 22px) * ${e.position.column} / ${eU})`:`${e.position.offset}%`,width:`calc(${n}% - 2px)`,height:i?`calc((100% - 22px) / ${eU})`:`${e.position.width}%`},children:[(0,V.jsx)(w.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:r,isResizing:d,renderEventBody:eb,renderEvent:eT,radius:eo,mode:eB,onClick:eP?t=>{ta.wasResizing()||eP(e,t)}:void 0,style:{width:"100%",height:"100%"}}),o&&"static"!==eB&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("div",{...eK("resourcesDayViewResizeHandle"),"data-edge":"start","data-active":"start"===u||void 0,onPointerDown:r=>{let o=tp.current[t];o&&ta.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ti,pointerEvent:r})}}),(0,V.jsx)("div",{...eK("resourcesDayViewResizeHandle"),"data-edge":"end","data-active":"end"===u||void 0,onPointerDown:r=>{let o=tp.current[t];o&&ta.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:ti,pointerEvent:r})}})]})]},e.id)}),s=tv.allDayEvents[e.id]||[],n=s.map((e,t)=>(0,V.jsx)(I.Box,{...eK("resourcesDayViewAllDayEvent",{style:{top:`calc(${t} * (var(--resources-day-view-all-day-height) + 2px) + 2px)`}}),children:(0,V.jsx)(w.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,renderEventBody:eb,renderEvent:eT,radius:eo,mode:eB,onClick:eP?t=>eP(e,t):void 0,style:{width:"100%",height:"100%"}})},`all-day-${e.id}`)),l=void 0!==eU?(0,E.getOverlapClusters)(o).filter(e=>e.some(e=>e.position.column>=eU)).map(e=>{let t=e.filter(e=>e.position.column>=eU).length,r=Math.min(...e.map(e=>e.position.top)),o=Math.max(...e.map(e=>e.position.top+e.position.height));return(0,V.jsx)(D.MoreEvents,{events:e,moreEventsCount:t,mode:eB,labels:ey,renderEventBody:eb,renderEvent:eT,onEventClick:eP,style:{position:"absolute",left:`calc(${r}% + 1px)`,width:`calc(${o-r}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...eX,...eF},`more-${e[0].id}`)}):[];return(0,V.jsxs)(R,{resource:e,resourceIndex:t,date:ti,slots:e3,getStyles:eK,labels:ey,highlightBusinessHours:ex,businessHours:eS,withEventsDragAndDrop:ts,mode:eB,slotsRef:th,firstSlotIndex:ty,onSlotKeyDown:tS,onSlotClick:tn,onRowSlotsDragOver:(e,t,r)=>{let o=tx(e,r);null!==o&&tt.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:tt.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tx(e,r);null!==o&&tt.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:tt.dropTarget?.resourceId===e.id?tt.dropTarget.slotIndex:void 0,withDragSlotSelect:eW,onSlotPointerDown:to.handleSlotPointerDown,isSlotDragSelected:to.isSlotSelected,rowSlotsContainerRef:e=>{tp.current[t]=e},renderResourceLabel:eE,renderGroupLabel:eI,scrolledX:e1,groupInfo:e7?e9[t]:void 0,allDayCount:s.length,children:[r,n,a,l]},e.id)}),tT=(0,r.formatDate)({date:(0,b.default)(Q),locale:e2.getLocale(en),format:eh}),tE=(0,V.jsxs)(I.Box,{...eK("resourcesDayView"),mod:{static:"static"===eB,"slot-dragging":to.isDragging,resizing:ta.isResizing,"event-interaction":ta.isResizing||tt.dragContextValue.isDragging},...eG,children:[eu&&(0,V.jsx)(y.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,a.toDateString)((0,b.default)(Q).subtract(1,"day")),next:()=>(0,a.toDateString)((0,b.default)(Q).add(1,"day")),today:()=>(0,a.toDateString)((0,b.default)())},control:{miw:140,title:tT},labels:ey,onDateChange:Z,onViewChange:ec,previousControlProps:em,nextControlProps:ef,todayControlProps:ev,viewSelectProps:{views:["day","week","month"],...eg},stylesApiProps:eX}),(0,V.jsx)(I.Box,{...eK("resourcesDayViewRoot"),children:(0,V.jsx)(C.ScrollArea,{scrollbarSize:4,...es,...eK("resourcesDayViewScrollArea",{className:es?.className,style:es?.style}),onScrollPositionChange:e=>{es?.onScrollPositionChange?.(e),e0(0!==e.y),e8(0!==e.x)},viewportRef:tD,children:(0,V.jsxs)("div",{...eK("resourcesDayViewInner"),children:[(0,V.jsxs)(I.Box,{...eK("resourcesDayViewTimeLabelsRow"),mod:{scrolled:eZ},children:[(0,T.createElement)("div",{...eK("resourcesDayViewCorner"),key:"corner",style:e7?{flexBasis:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))",minWidth:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ey)),tg]}),tb,tc&&(0,V.jsxs)(I.Box,{...eK("resourcesDayViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":e7?`calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width) + (100% - var(--resources-day-view-resource-label-width) - var(--resources-day-view-group-label-width)) * ${td} / 100)`:`calc(var(--resources-day-view-resource-label-width) + (100% - var(--resources-day-view-resource-label-width)) * ${td} / 100)`,"--_time-bubble-width":tm?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[el&&(0,V.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorTimeBubble"),children:tm}),!el&&(0,V.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorThumb")}),(0,V.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorLine")})]})]})})})]}),tk=(0,T.useMemo)(()=>tt.dragContextValue,[tt.dragContextValue]);return eV?(0,V.jsx)(p.DragContext.Provider,{value:tk,children:tE}):tE});U.displayName="@mantine/schedule/ResourcesDayView",U.classes=Y,U.varsResolver=G,e.s(["ResourcesDayView",0,U],613490)},499083,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(918006),n=e.i(625712),i=e.i(900513),l=e.i(688785),d=e.i(664397),u=e.i(969610),c=e.i(792930),m=e.i(505696),f=e.i(420924),v=e.i(640542),g=e.i(176304),h=e.i(461304),p=e.i(783261),w=e.i(376879),D=e.i(201867),y=e.i(891343),x=e.i(67312),S=e.i(966696),b=e.i(612148),T=e.i(367752),E=e.i(898770),k=e.i(657068),I=e.i(922552),M=e.i(539517),V=e.i(578373),R=e.i(494834),Y=e.i(232471),C=e.i(284629),$=e.i(391398);function j({resource:e,resourceIndex:r,weekdays:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:l,businessHours:d,withEventsDragAndDrop:u,onRowSlotsDragOver:c,onRowSlotsDragLeave:f,onRowSlotsDrop:v,onSlotClick:g,dropTargetSlotIndex:h,mode:p,slotsRef:w,firstSlotIndex:D,onSlotKeyDown:y,withDragSlotSelect:x,onSlotPointerDown:S,isSlotDragSelected:b,rowSlotsContainerRef:T,renderResourceLabel:E,renderGroupLabel:k,scrolledX:I,groupInfo:M,allDayCount:V}){let R=String(e.id),P=o.flatMap((o,n)=>a.map((c,f)=>{let v=n*a.length+f,T=h===v,E=D?.resourceIndex===r&&D?.slotIndex===v,k=b?.(v,R)||!1;return(0,$.jsx)(C.UnstyledButton,{ref:e=>{if(!w?.current)return;w.current[r]||(w.current[r]=[]);let t=w.current[r];if(e)t[v]=e;else for(delete t[v];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesWeekViewRowSlot"),mod:{"hour-start":c.isHourStart,...(0,m.getBusinessHoursMod)({time:c.startTime,businessHours:d,highlightBusinessHours:l}),"drop-target":T,"drag-selected":k,static:"static"===p},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${c.startTime} - ${c.endTime}`,tabIndex:"static"===p?-1:E?0:-1,"data-drag-slot-index":x&&"static"!==p?v:void 0,"data-drag-slot-group":x&&"static"!==p?R:void 0,onKeyDown:e=>{y&&y(e,r,v)},onPointerDown:x&&"static"!==p?e=>S?.(e,v,R):void 0,onClick:"static"!==p&&g?t=>g(e.id,o,c.startTime,t):void 0,onDragOver:u&&"static"!==p?e=>e.preventDefault():void 0},`${o}-${c.startTime}`)})),W=M?.position==="first"||M?.position==="only",O=void 0!==M?null!==M?(0,$.jsx)(Y.Box,{...s("resourcesWeekViewGroupColumn"),mod:{"scrolled-x":I,"group-position":M.position},children:W&&(0,$.jsx)("span",{style:M.count>1?{transform:`translateY(calc((${M.count-1} * (var(--resources-week-view-row-height) + 1px)) / 2))`}:void 0,children:k?k(M.group):M.group.label})}):(0,$.jsx)(Y.Box,{...s("resourcesWeekViewGroupColumnEmpty"),mod:{"scrolled-x":I}}):null;return(0,$.jsxs)(Y.Box,{...s("resourcesWeekViewRow"),children:[O,(0,$.jsx)(Y.Box,{...s("resourcesWeekViewResourceLabel"),mod:{"scrolled-x":I,"has-groups":void 0!==M},children:E?E(e):e.label}),(0,$.jsxs)(Y.Box,{ref:T,...s("resourcesWeekViewRowSlots",{style:V?{minHeight:`max(var(--resources-week-view-row-height), calc(${V} * (var(--resources-week-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:u&&"static"!==p?t=>c?.(t,e.id,r):void 0,onDragLeave:u&&"static"!==p?f:void 0,onDrop:u&&"static"!==p?t=>v?.(t,e.id,r):void 0,children:[n,P]})]})}var P={resourcesWeekView:"m_ed4c47cf",resourcesWeekViewRoot:"m_5b5cbd51",resourcesWeekViewScrollArea:"m_b88ea29",resourcesWeekViewInner:"m_fbb9fc7",resourcesWeekViewHeaderRows:"m_7d7bb735",resourcesWeekViewCorner:"m_dd8b4f04",resourcesWeekViewHeaderContent:"m_85f2b19d",resourcesWeekViewDayLabelsRow:"m_cde0b68e",resourcesWeekViewDayLabel:"m_354e59a7",resourcesWeekViewTimeLabelsRow:"m_b7f0617f",resourcesWeekViewTimeLabel:"m_a6832518",resourcesWeekViewRow:"m_9fd9b38b",resourcesWeekViewResourceLabel:"m_9c6373f7",resourcesWeekViewGroupColumn:"m_fdcb5366",resourcesWeekViewGroupColumnEmpty:"m_3d5e7187",resourcesWeekViewRowSlots:"m_c534316a",resourcesWeekViewRowSlot:"m_ed965429",resourcesWeekViewBackgroundEvent:"m_3c19323d",resourcesWeekViewAllDayEvent:"m_682c45d0",resourcesWeekViewResizeHandle:"m_30c8fd6b",resourcesWeekViewEventWrapper:"m_2d13c608",resourcesWeekViewCurrentTimeIndicator:"m_6f70bf38",resourcesWeekViewCurrentTimeIndicatorLine:"m_be32874c",resourcesWeekViewCurrentTimeIndicatorThumb:"m_88ec57e",resourcesWeekViewCurrentTimeIndicatorTimeBubble:"m_9ff3db11"},W=e.i(19300),O=e.i(481178),B=e.i(275519),L=e.i(433512),_=e.i(779177),H=e.i(951254),A=e.i(44091),z=e.i(62904),N=e.i(391466),F=e.i(822933),G=e.i(417241),U=e.i(332977),K=e.i(191788),q=e.i(205693);let J={__staticSelector:"ResourcesWeekView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,weekLabelFormat:"MMM DD",weekdayFormat:"ddd D",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withWeekendDays:!0,withCurrentTimeBubble:!0,highlightToday:!0,mode:"default",maxEventsPerTimeSlot:2},X=(0,O.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesWeekView:{"--resources-week-view-radius":t?(0,L.getRadius)(t):void 0,"--resources-week-view-slot-width":(0,_.rem)(r),"--resources-week-view-row-height":(0,_.rem)(o),"--resources-week-view-group-label-width":(0,_.rem)(a)}})),Q=(0,B.factory)(e=>{let C=(0,A.useProps)("ResourcesWeekView",J,e),{classNames:O,className:B,style:L,styles:_,unstyled:Q,attributes:Z,vars:ee,startTime:et,endTime:er,date:eo,onDateChange:ea,resources:es,intervalMinutes:en,slotLabelFormat:ei,radius:el,startScrollDateTime:ed,scrollAreaProps:eu,locale:ec,withCurrentTimeIndicator:em,withCurrentTimeBubble:ef,__staticSelector:ev,withHeader:eg,onViewChange:eh,previousControlProps:ep,nextControlProps:ew,todayControlProps:eD,viewSelectProps:ey,weekLabelFormat:ex,renderWeekLabel:eS,events:eb,slotWidth:eT,rowHeight:eE,labels:ek,highlightBusinessHours:eI,businessHours:eM,renderEventBody:eV,renderEvent:eR,renderResourceLabel:eY,groups:eC,renderGroupLabel:e$,groupLabelWidth:ej,withEventsDragAndDrop:eP,onEventDrop:eW,canDragEvent:eO,onEventDragStart:eB,onEventDragEnd:eL,onTimeSlotClick:e_,onEventClick:eH,withDragSlotSelect:eA,onSlotDragEnd:ez,mode:eN,onExternalEventDrop:eF,recurrenceExpansionLimit:eG,maxEventsPerTimeSlot:eU,moreEventsProps:eK,firstDayOfWeek:eq,weekendDays:eJ,withWeekendDays:eX,weekdayFormat:eQ,highlightToday:eZ,...e0}=C,e1=void 0!==eU?Math.max(1,eU):void 0,e8=(0,N.useStyles)({name:ev,classes:P,props:C,className:B,style:L,classNames:O,styles:_,unstyled:Q,vars:ee,varsResolver:X,attributes:Z,rootSelector:"resourcesWeekView"}),{resolvedClassNames:e2,resolvedStyles:e3}=(0,z.useResolvedStylesApi)({classNames:O,styles:_,props:C}),e4={classNames:e2,styles:e3,attributes:Z,__staticSelector:ev,radius:el},e6=(0,H.useMantineTheme)(),[e9,e7]=(0,K.useState)(!1),[e5,te]=(0,K.useState)(!1),tt=(0,q.useDatesContext)(),tr=(0,o.getDayTimeIntervals)({startTime:et,endTime:er,intervalMinutes:en}),{orderedResources:to,groupRanges:ta,resourceGroupMap:ts}=(0,K.useMemo)(()=>(0,f.getOrderedResources)(es,eC),[es,eC]),tn=ta.length>0,ti=(0,K.useMemo)(()=>(0,s.getWeekDays)({week:eo,withWeekendDays:eX,weekendDays:tt.getWeekendDays(eJ),firstDayOfWeek:tt.getFirstDayOfWeek(eq)}),[eo,eX,eJ,eq,tt]),tl=tr.length,td=ti.some(e=>(0,R.default)(e).isSame((0,R.default)(),"day")),[tu,tc]=(0,K.useState)((0,l.getCurrentTimePosition)({startTime:et,endTime:er,intervalMinutes:en}));(0,F.useInterval)(()=>tc((0,l.getCurrentTimePosition)({startTime:et,endTime:er,intervalMinutes:en})),6e4,{autoInvoke:!0});let tm=ti.findIndex(e=>(0,R.default)(e).isSame((0,R.default)(),"day")),tf=(em??td)&&tm>=0&&(0,d.isInTimeRange)({date:(0,R.default)().toDate(),startTime:et,endTime:er}),tv=ef?(0,r.formatDate)({locale:tt.getLocale(ec),date:(0,R.default)(),format:ei}):"",tg=(0,K.useCallback)((e,t)=>{if(!eF)return;let r=Math.floor(t.slotIndex/tl),o=t.slotIndex%tl,a=ti[r];a&&eF({dataTransfer:e.dataTransfer,dropDateTime:`${(0,R.default)(a).format("YYYY-MM-DD")} ${tr[o].startTime}`,resourceId:t.resourceId})},[eF,tr,ti,tl]),th=(0,K.useRef)(void 0),tp=(0,p.useDragDropHandlers)({enabled:eP,mode:eN,onEventDrop:(0,K.useCallback)(e=>{eW?.({...e,resourceId:th.current})},[eW]),canDragEvent:eO,onEventDragStart:eB,onEventDragEnd:eL,calculateDropTarget:(e,t)=>{th.current=e.resourceId;let r=Math.floor(e.slotIndex/tl),o=tr[e.slotIndex%tl].startTime;return(0,c.calculateDropTime)({draggedEvent:t,targetDate:ti[r]||ti[0],targetSlotTime:o,intervalMinutes:en})},onExternalDrop:eF?tg:void 0}),tw=(0,K.useMemo)(()=>(0,g.getGroupToResourceIdMap)(es),[es]),tD=(0,w.useSlotDragSelect)({enabled:eA&&"static"!==eN,onDragEnd:(e,t,r)=>{if(!ez)return;let o=Math.floor(e/tl),a=e%tl,s=Math.floor(t/tl),n=t%tl,i=ti[o],l=ti[s];i&&l&&ez({rangeStart:`${(0,R.default)(i).format("YYYY-MM-DD")} ${tr[a].startTime}`,rangeEnd:`${(0,R.default)(l).format("YYYY-MM-DD")} ${tr[n].endTime}`,resourceId:tw.get(r)??r})}}),ty=(eP||!!eF)&&"static"!==eN,tx=(e,t,r,o)=>{if(!e_)return;let a=tr.findIndex(e=>e.startTime===r);if(-1===a)return;let s=tr[a],n=(0,R.default)(t).format("YYYY-MM-DD");e_({slotStart:`${n} ${s.startTime}`,slotEnd:`${n} ${s.endTime}`,nativeEvent:o,resourceId:e})},tS=(0,K.useMemo)(()=>(function({events:e,resources:t,weekdays:r,startTime:o,endTime:a,expansionLimit:s}){let n=(0,k.expandRecurringEvents)({events:e,rangeStart:(0,R.default)(r[0]).startOf("day").toDate(),rangeEnd:(0,R.default)(r[r.length-1]).endOf("day").toDate(),expansionLimit:s});if(n){let e=new Set;for(let t of n){if(e.has(t.id))throw Error(`[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${t.id}`);e.add(t.id)}}let i={},l=new Set,d=e=>"background"!==e.display&&(0,E.isMultidayEvent)(e);for(let e of r){let r=n?.filter(t=>{if(l.has(t.id)||d(t))return!1;let r=(0,R.default)(t.start),o=(0,R.default)(e).startOf("day");return r.isSame(o,"day")?(l.add(t.id),!0):!!("background"===t.display&&r.isBefore((0,R.default)(e).endOf("day"))&&(0,R.default)(t.end).isAfter(o))});i[e]=(0,V.getResourcesDayViewEvents)({events:r,resources:t,date:e,startTime:o,endTime:a})}let u={};for(let e of t)u[e.id]=[];if(r.forEach((e,r)=>{for(let o of t)for(let t of i[e].allDayEvents[o.id]??[])u[o.id].push({event:t,startDayIndex:r,endDayIndex:r,row:0})}),n)for(let e of n){if(!d(e)||void 0===e.resourceId||!(e.resourceId in u))continue;let t=(0,I.calculateEventDays)({event:e,weekDays:r,actualEndDate:(0,M.getEventEndDate)(e)});0!==t.length&&u[e.resourceId].push({event:e,startDayIndex:r.indexOf(t[0]),endDayIndex:r.indexOf(t[t.length-1]),row:0})}for(let e of t)!function(e){let t=e.map((e,t)=>({bar:e,index:t})).sort((e,t)=>e.bar.startDayIndex-t.bar.startDayIndex||e.bar.endDayIndex-t.bar.endDayIndex||e.index-t.index),r=[];for(let{bar:e}of t){let t=0;for(;t<r.length&&r[t]>=e.startDayIndex;)t+=1;r[t]=e.endDayIndex,e.row=t}}(u[e.id]);return{byDay:i,allDayBars:u}})({events:eb,resources:es,weekdays:ti,startTime:et,endTime:er,expansionLimit:eG}),[eb,es,ti,et,er,eG]),tb=ti.map(e=>{let t=(0,R.default)(e),o=t.isSame((0,R.default)(),"day")&&eZ,a=tt.getWeekendDays(eJ).includes(t.day());return(0,K.createElement)(Y.Box,{...e8("resourcesWeekViewDayLabel"),key:e,mod:{today:o,weekend:a},style:{width:`calc(var(--resources-week-view-slot-width) * ${tl})`}},(0,r.formatDate)({date:t,locale:tt.getLocale(ec),format:eQ}))}),tT=ti.flatMap(e=>tr.map(t=>{let o=(0,r.formatDate)({date:(0,R.default)(`${(0,R.default)(e).format("YYYY-MM-DD")} ${t.startTime}`),locale:tt.getLocale(ec),format:ei});return(0,K.createElement)(Y.Box,{...e8("resourcesWeekViewTimeLabel"),key:`${e}-${t.startTime}`,mod:{"hour-start":t.isHourStart,...(0,m.getBusinessHoursMod)({time:t.startTime,businessHours:eM,highlightBusinessHours:eI})}},o)})),tE=(0,K.useRef)([]),tk=(0,K.useRef)([]),tI=(0,K.useRef)(null),tM=(0,U.useMergedRef)(tI,eu?.viewportRef),tV={resourceIndex:0,slotIndex:0};(0,G.useIsomorphicEffect)(()=>{if(!ed||!tI.current)return;let e=(0,R.default)(ed),t=e.format("YYYY-MM-DD 00:00:00"),r=e.format("HH:mm:ss"),o=ti.indexOf(t);if(o<0)return;let a=tr.findIndex(e=>e.startTime>=r);if(a<0)return;let s=o*tl+a,n=tE.current[0];if(!n||0===n.length)return;let i=n[s];if(!i)return;let l=i.getBoundingClientRect(),d=tI.current.getBoundingClientRect(),u=tI.current.querySelector(`.${P.resourcesWeekViewCorner}`),c=u?u.getBoundingClientRect().width:0;tI.current.scrollTo({left:l.left-d.left-c,top:0})},[]);let tR=(0,K.useCallback)((e,t)=>(0,h.getIndexFromDragPoint)(tE.current[t]??[],e.clientX),[]),tY=(e,t,r)=>{(0,v.handleResourcesGridKeyDown)({controlsRef:tE,resourceIndex:t,slotIndex:r,event:e})},tC=100/ti.length,t$=to.map((e,t)=>{let r=[],o=tS.allDayBars[e.id]??[],a=o.reduce((e,t)=>Math.max(e,t.row+1),0);ti.forEach((t,o)=>{let a=tS.byDay[t];if(!a)return;let s=o/ti.length*100;for(let o of[...a.backgroundTimedEvents[e.id]||[],...a.backgroundAllDayEvents[e.id]||[]]){let e=e6.variantColorResolver({color:o.color||e6.primaryColor,theme:e6,variant:"light",autoContrast:!0}),a="function"==typeof eV?eV(o):o.title,n={key:`bg-${o.id}-${t}`,...e8("resourcesWeekViewBackgroundEvent",{style:{left:`${s+o.position.top/100*tC}%`,width:`${o.position.height/100*tC}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":e.background,"--bg-event-color":e.color},children:a};"function"==typeof eR?r.push(eR(o,n)):r.push((0,$.jsx)(Y.Box,{...n}))}let n=(a.regularEvents[e.id]||[]).filter(e=>!(0,u.isAllDayEvent)({event:e,date:t}));for(let e of void 0!==e1?n.filter(e=>e.position.column<e1):n){let o=tp.isDraggableEvent(e),a=s+e.position.top/100*tC,n=e.position.height/100*tC,i=void 0!==e1&&e.position.overlaps>e1;r.push((0,$.jsx)("div",{...e8("resourcesWeekViewEventWrapper"),style:{left:`calc(${a}% + 1px)`,top:i?`calc((100% - 22px) * ${e.position.column} / ${e1})`:`${e.position.offset}%`,width:`calc(${n}% - 2px)`,height:i?`calc((100% - 22px) / ${e1})`:`${e.position.width}%`},children:(0,$.jsx)(y.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:o,renderEventBody:eV,renderEvent:eR,radius:el,mode:eN,onClick:eH?t=>eH(e,t):void 0,style:{width:"100%",height:"100%"}})},`${e.id}-${t}`))}if(void 0!==e1)for(let o of(0,T.getOverlapClusters)(n)){let a=o.filter(e=>e.position.column>=e1).length;if(a>0&&"static"!==eN){let n=s+Math.min(...o.map(e=>e.position.top))/100*tC,i=s+Math.max(...o.map(e=>e.position.top+e.position.height))/100*tC;r.push((0,$.jsx)(x.MoreEvents,{events:o,moreEventsCount:a,mode:eN,labels:ek,renderEventBody:eV,renderEvent:eR,onEventClick:eH,style:{position:"absolute",left:`calc(${n}% + 1px)`,width:`calc(${i-n}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...e4,...eK},`more-${e.id}-${t}-${o[0].id}`))}}});let s=tn?"calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)":"calc(var(--resources-week-view-resource-label-width) + 5px)";return o.forEach(e=>{let t=e.startDayIndex*tC,o=(e.endDayIndex-e.startDayIndex+1)*tC;r.push((0,$.jsx)("div",{...e8("resourcesWeekViewAllDayEvent",{style:{left:`calc(${t}% + 1px)`,width:`calc(${o}% - 2px)`,top:`calc(${e.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`}}),children:(0,$.jsx)(y.ScheduleEvent,{event:e.event,autoSize:!0,nowrap:!0,renderEventBody:e=>(0,$.jsx)("span",{style:{position:"sticky",insetInlineStart:s,display:"inline-block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},children:eV?eV(e):e.title}),renderEvent:eR,radius:el,mode:eN,onClick:eH?t=>eH(e.event,t):void 0,style:{width:"100%",height:"100%",overflow:"visible"},styles:{eventInner:{display:"block",overflow:"visible",lineHeight:"var(--resources-week-view-all-day-height)"}}})},`all-day-${e.event.id}-${e.startDayIndex}`))}),(0,$.jsx)(j,{resource:e,resourceIndex:t,weekdays:ti,slots:tr,getStyles:e8,labels:ek,highlightBusinessHours:eI,businessHours:eM,withEventsDragAndDrop:ty,mode:eN,slotsRef:tE,firstSlotIndex:tV,onSlotKeyDown:tY,onSlotClick:tx,onRowSlotsDragOver:(e,t,r)=>{let o=tR(e,r);null!==o&&tp.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:tp.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tR(e,r);null!==o&&tp.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:tp.dropTarget?.resourceId===e.id?tp.dropTarget.slotIndex:void 0,withDragSlotSelect:eA,onSlotPointerDown:tD.handleSlotPointerDown,isSlotDragSelected:tD.isSlotSelected,rowSlotsContainerRef:e=>{tk.current[t]=e},renderResourceLabel:eY,renderGroupLabel:e$,scrolledX:e5,groupInfo:tn?ts[t]:void 0,allDayCount:a,children:r},e.id)}),tj=(0,b.getWeekLabel)({weekdays:ti,locale:tt.getLocale(ec),weekLabelFormat:ex,renderWeekLabel:eS}),tP=tm>=0?(tm+tu/100)/ti.length*100:0,tW=(0,$.jsxs)(Y.Box,{...e8("resourcesWeekView"),mod:{static:"static"===eN,"slot-dragging":tD.isDragging,"event-interaction":tp.dragContextValue.isDragging},...e0,children:[eg&&(0,$.jsx)(S.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>(0,i.previousWeek)(eo,tt.getFirstDayOfWeek(eq)),next:()=>(0,n.nextWeek)(eo,tt.getFirstDayOfWeek(eq)),today:()=>(0,a.toDateString)((0,R.default)())},control:{miw:180,title:tj},labels:ek,onDateChange:ea,onViewChange:eh,previousControlProps:ep,nextControlProps:ew,todayControlProps:eD,viewSelectProps:{views:["day","week","month"],...ey},stylesApiProps:e4}),(0,$.jsx)(Y.Box,{...e8("resourcesWeekViewRoot"),children:(0,$.jsx)(W.ScrollArea,{scrollbarSize:4,...eu,...e8("resourcesWeekViewScrollArea",{className:eu?.className,style:eu?.style}),onScrollPositionChange:e=>{eu?.onScrollPositionChange?.(e),e7(0!==e.y),te(0!==e.x)},viewportRef:tM,children:(0,$.jsxs)("div",{...e8("resourcesWeekViewInner"),children:[(0,$.jsxs)("div",{...e8("resourcesWeekViewHeaderRows"),children:[(0,K.createElement)("div",{...e8("resourcesWeekViewCorner"),key:"corner",style:tn?{flexBasis:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))",minWidth:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ek)),(0,$.jsxs)("div",{...e8("resourcesWeekViewHeaderContent"),children:[(0,$.jsx)("div",{...e8("resourcesWeekViewDayLabelsRow"),children:tb}),(0,$.jsx)(Y.Box,{...e8("resourcesWeekViewTimeLabelsRow"),mod:{scrolled:e9},children:tT})]})]}),t$,tf&&(0,$.jsxs)(Y.Box,{...e8("resourcesWeekViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":tn?`calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${tP} / 100)`:`calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${tP} / 100)`,"--_time-bubble-width":tv?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ef&&(0,$.jsx)("div",{...e8("resourcesWeekViewCurrentTimeIndicatorTimeBubble"),children:tv}),!ef&&(0,$.jsx)("div",{...e8("resourcesWeekViewCurrentTimeIndicatorThumb")}),(0,$.jsx)("div",{...e8("resourcesWeekViewCurrentTimeIndicatorLine")})]})]})})})]}),tO=(0,K.useMemo)(()=>tp.dragContextValue,[tp.dragContextValue]);return eP?(0,$.jsx)(D.DragContext.Provider,{value:tO,children:tW}):tW});Q.displayName="@mantine/schedule/ResourcesWeekView",Q.classes=P,Q.varsResolver=X,e.s(["ResourcesWeekView",0,Q],499083)},272013,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(4332),a=e.i(276995),s=e.i(657068),n=e.i(420924),i=e.i(176304),l=e.i(461304),d=e.i(783261),u=e.i(376879),c=e.i(201867),m=e.i(891343),f=e.i(67312),v=e.i(966696),g={resourcesMonthView:"m_652b3acd",resourcesMonthViewRoot:"m_146e014f",resourcesMonthViewScrollArea:"m_b1cab7a7",resourcesMonthViewInner:"m_78d2db89",resourcesMonthViewDayLabelsRow:"m_eae51c8c",resourcesMonthViewCorner:"m_975b8b82",resourcesMonthViewDayLabel:"m_bc016ea5",resourcesMonthViewDayLabelWeekday:"m_52a1c4c3",resourcesMonthViewDayLabelNumber:"m_88d8e64e",resourcesMonthViewRow:"m_21b0f7cd",resourcesMonthViewResourceLabel:"m_1febcdb9",resourcesMonthViewGroupColumn:"m_1fc335a8",resourcesMonthViewGroupColumnEmpty:"m_d5a3a885",resourcesMonthViewRowSlots:"m_4be74668",resourcesMonthViewCell:"m_146709cf"},h=e.i(494834),p=e.i(232471),w=e.i(19300),D=e.i(284629),y=e.i(481178),x=e.i(275519),S=e.i(433512),b=e.i(779177),T=e.i(44091),E=e.i(62904),k=e.i(391466),I=e.i(417241),M=e.i(332977),V=e.i(191788),R=e.i(205693),Y=e.i(391398);let C=(0,y.createVarsResolver)((e,{radius:t,dayWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesMonthView:{"--resources-month-view-radius":t?(0,S.getRadius)(t):void 0,"--resources-month-view-day-width":(0,b.rem)(r),"--resources-month-view-row-height":(0,b.rem)(o),"--resources-month-view-group-label-width":(0,b.rem)(a)}})),$={__staticSelector:"ResourcesMonthView",highlightToday:!0,withHeader:!0,weekdayFormat:"ddd",withWeekendDays:!0,withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"};function j(e,t){let r=(0,h.default)(e.start),o=(0,h.default)(t.start),a=(0,h.default)(e.end).startOf("day").diff(r.startOf("day"),"day"),s=(0,h.default)(t.end).startOf("day").diff(o.startOf("day"),"day");return a!==s?s-a:r.valueOf()-o.valueOf()}function P(e){return(0,h.default)(e.end).startOf("day").isAfter((0,h.default)(e.start).startOf("day"))}let W=(0,x.factory)(e=>{let y=(0,T.useProps)("ResourcesMonthView",$,e),{classNames:x,className:S,style:b,styles:W,unstyled:O,attributes:B,vars:L,mod:_,date:H,onDateChange:A,resources:z,locale:N,weekdayFormat:F,weekendDays:G,withWeekendDays:U,startScrollDate:K,__staticSelector:q,onDayClick:J,highlightToday:X,radius:Q,withHeader:Z,monthYearSelectProps:ee,onViewChange:et,todayControlProps:er,nextControlProps:eo,previousControlProps:ea,viewSelectProps:es,events:en,dayWidth:ei,rowHeight:el,renderResourceLabel:ed,groups:eu,renderGroupLabel:ec,groupLabelWidth:em,renderEventBody:ef,renderEvent:ev,withEventsDragAndDrop:eg,onEventDrop:eh,canDragEvent:ep,onEventDragStart:ew,onEventDragEnd:eD,onEventClick:ey,withDragSlotSelect:ex,onSlotDragEnd:eS,labels:eb,mode:eT,scrollAreaProps:eE,onExternalEventDrop:ek,maxEventsPerTimeSlot:eI,moreEventsProps:eM,recurrenceExpansionLimit:eV,...eR}=y,eY=Math.min(10,Math.max(1,eI??2)),eC=(0,k.useStyles)({name:q,classes:g,props:y,className:S,style:b,classNames:x,styles:W,unstyled:O,attributes:B,vars:L,varsResolver:C,rootSelector:"resourcesMonthView"}),{resolvedClassNames:e$,resolvedStyles:ej}=(0,E.useResolvedStylesApi)({classNames:x,styles:W,props:y}),eP={classNames:e$,styles:ej,attributes:B,__staticSelector:q,radius:Q},eW=(0,R.useDatesContext)(),eO=eW.getWeekendDays(G),{orderedResources:eB,groupRanges:eL,resourceGroupMap:e_}=(0,V.useMemo)(()=>(0,n.getOrderedResources)(z,eu),[z,eu]),eH=eL.length>0,eA=(0,V.useMemo)(()=>{let e=(0,h.default)(H).startOf("month"),t=e.endOf("month").date(),r=eW.getWeekendDays(G),o=[];for(let a=1;a<=t;a++){let t=e.date(a);!U&&r.includes(t.day())||o.push(t.format("YYYY-MM-DD"))}return o},[H,U,G,eW]),ez=(0,V.useRef)(null),eN=(0,M.useMergedRef)(ez,eE?.viewportRef),eF=(0,V.useRef)([]),eG=(0,V.useRef)(null),eU=(0,V.useCallback)(e=>{if(!ez.current)return;let t=eA.indexOf(e);if(t<0)return;let r=eF.current[t];if(!r)return;let o=r.getBoundingClientRect(),a=ez.current.getBoundingClientRect(),s=eG.current?.getBoundingClientRect().width??0;ez.current.scrollTo({left:o.left-a.left-s,top:0})},[eA]);(0,I.useIsomorphicEffect)(()=>{K&&eU(K)},[]);let eK=(0,V.useMemo)(()=>(0,s.expandRecurringEvents)({events:en,rangeStart:(0,h.default)(H).startOf("month").toDate(),rangeEnd:(0,h.default)(H).endOf("month").toDate(),expansionLimit:eV}),[en,H,eV]),{eventsByResourceAndDay:eq,eventLayoutByResource:eJ}=(0,V.useMemo)(()=>{let e={};for(let t of z)for(let r of(e[t.id]={},eA))e[t.id][r]=[];if(eK)for(let t of eK){if(void 0===t.resourceId||!(t.resourceId in e))continue;let r=(0,h.default)(t.start),o=(0,h.default)(t.end);for(let a of eA){let s=(0,h.default)(a).startOf("day"),n=(0,h.default)(a).endOf("day");r.isBefore(n)&&o.isAfter(s)&&e[t.resourceId][a].push(t)}}let t={},r=(0,h.default)(eA[0]).startOf("day"),o=(0,h.default)(eA[eA.length-1]).add(1,"day").startOf("day");for(let a of z){let s={},n=new Map,i=new Map,l=new Map;eA.forEach((t,r)=>{let o=e[a.id][t];for(let e of(o.sort(j),o)){let t=l.get(e.id);t?t.days.push(r):l.set(e.id,{event:e,days:[r]})}let d=new Set,u=[],c=0;for(let e of o){let t=n.get(e.id);if((void 0===t||t>=eY||d.has(t))&&(t=function(e,t){for(let r=0;r<t;r+=1)if(!e.has(r))return r;return null}(d,eY)),null===t){c+=1;continue}d.add(t),u.push({event:e,row:t}),i.has(e.id)||i.set(e.id,new Map),i.get(e.id).set(r,t),n.set(e.id,t)}s[t]={visible:u,hiddenCount:c}});let d=[];for(let{event:e,days:t}of l.values()){if(!P(e))continue;let a=t[0],n=t[t.length-1],l=i.get(e.id),u=(0,h.default)(e.start).isBefore(r),c=(0,h.default)(e.end).isAfter(o),m=null,f=()=>{if(!m)return;let t=m.startDayIndex>a,r=m.endDayIndex<n,o=!t&&u,i=!r&&c,l=!1;for(let e=m.startDayIndex;e<=m.endDayIndex;e+=1)if((s[eA[e]]?.hiddenCount??0)>0){l=!0;break}d.push({event:e,startDayIndex:m.startDayIndex,endDayIndex:m.endDayIndex,row:m.row,clipStart:t,clipEnd:r,hanging:o&&i?"both":o?"start":i?"end":"none",hiddenInSpan:l}),m=null};for(let e=a;e<=n;e+=1){let t=l?.get(e);if(void 0===t){f();continue}m&&m.row===t&&m.endDayIndex===e-1?m.endDayIndex=e:(f(),m={startDayIndex:e,endDayIndex:e,row:t})}f()}t[a.id]={byDay:s,segments:d}}return{eventsByResourceAndDay:e,eventLayoutByResource:t}},[z,eA,eK,eY]),eX=(0,V.useCallback)((e,t)=>{ek&&ek({dataTransfer:e.dataTransfer,dropDateTime:`${(0,h.default)(t.day).format("YYYY-MM-DD")} 00:00:00`,resourceId:t.resourceId})},[ek]),eQ=(0,d.useDragDropHandlers)({enabled:eg,mode:eT,onEventDrop:e=>{eh?.({...e,resourceId:eZ.current})},canDragEvent:ep,onEventDragStart:ew,onEventDragEnd:eD,calculateDropTarget:(e,t)=>(eZ.current=e.resourceId,(0,a.calculateMonthDropDate)({draggedEvent:t,targetDay:e.day})),onExternalDrop:ek?eX:void 0}),eZ=(0,V.useRef)(void 0),e0=(eg||!!ek)&&"static"!==eT,e1=(0,V.useMemo)(()=>(0,i.getGroupToResourceIdMap)(z),[z]),e8=(0,u.useSlotDragSelect)({enabled:ex&&"static"!==eT,onDragEnd:(e,t,r)=>{if(!eS)return;let o=eA[e],a=eA[t];o&&a&&eS({rangeStart:(0,h.default)(o).startOf("day").format("YYYY-MM-DD HH:mm:ss"),rangeEnd:(0,h.default)(a).endOf("day").format("YYYY-MM-DD HH:mm:ss"),resourceId:e1.get(r)??r})}}),e2=eA.map((e,t)=>{let o=(0,h.default)(e),a=eO.includes(o.day()),s=o.isSame((0,h.default)(),"day")&&X;return(0,V.createElement)(p.Box,{...eC("resourcesMonthViewDayLabel"),key:e,mod:{weekend:a,today:s},ref:e=>{eF.current[t]=e}},(0,Y.jsx)("span",{...eC("resourcesMonthViewDayLabelWeekday"),children:(0,r.formatDate)({date:o,locale:eW.getLocale(N),format:F})}),(0,Y.jsx)("span",{...eC("resourcesMonthViewDayLabelNumber"),children:o.date()}))}),e3=(0,V.useRef)([]),e4=(0,V.useCallback)((e,t)=>(0,l.getIndexFromDragPoint)(e3.current[t]??[],e.clientX),[]),e6=100/eY,e9=eB.map((e,t)=>{e3.current[t]||(e3.current[t]=[]);let r=String(e.id),o=eQ.dropTarget,a=eA.length,s=[],n=[],i=eA.map((i,l)=>{let d=(0,h.default)(i),u=eW.getWeekendDays(G).includes(d.day()),c=null!==o&&"object"==typeof o&&"day"in o&&o.day===i&&o.resourceId===e.id,v=e8.isSlotSelected(l,r),g=eq[e.id]?.[i]||[],p=eJ[e.id]?.byDay[i],w=p?.visible??[],y=p?.hiddenCount??0,x=0===t&&0===l,S=l/a*100,b=100/a,T=y>0&&"static"!==eT;return w.forEach(({event:e,row:t})=>{if(P(e))return;let r=eQ.isDraggableEvent(e),o=T?`calc((100% - 18px) * ${t} / ${eY} + 1px)`:`calc(${t*e6}% + 1px)`,a=T?`calc((100% - 18px) / ${eY} - 2px)`:`calc(${e6}% - 2px)`;s.push((0,Y.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,size:"sm",draggable:r,renderEventBody:ef,renderEvent:ev,radius:Q,mode:eT,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:o,left:`calc(${S}% + 1px)`,width:`calc(${b}% - 2px)`,height:a,zIndex:3}},`${e.id}-${i}`))}),y>0&&"static"!==eT&&n.push((0,Y.jsx)(f.MoreEvents,{events:g,moreEventsCount:y,mode:eT,labels:eb,renderEventBody:ef,renderEvent:ev,onEventClick:ey,style:{position:"absolute",bottom:1,left:`calc(${S}% + 1px)`,width:`calc(${b}% - 2px)`,height:18,zIndex:4},...eP,...eM},`more-${e.id}-${i}`)),(0,Y.jsx)(D.UnstyledButton,{ref:e=>{e&&(e3.current[t]||(e3.current[t]=[]),e3.current[t][l]=e)},...eC("resourcesMonthViewCell"),"aria-label":`${e.label} ${d.format("MMMM D, YYYY")}`,"data-drag-slot-index":ex&&"static"!==eT?l:void 0,"data-drag-slot-group":ex&&"static"!==eT?r:void 0,mod:{weekend:u,"drop-target":c,"drag-selected":v,static:"static"===eT},tabIndex:"static"===eT?-1:x?0:-1,onClick:"static"===eT?void 0:t=>J?.({date:i,nativeEvent:t,resourceId:e.id}),onKeyDown:"static"===eT?void 0:e=>((e,t,r)=>{let o=e.key,a=t,s=r;if("ArrowRight"===o)s=Math.min(r+1,eA.length-1);else if("ArrowLeft"===o)s=Math.max(r-1,0);else if("ArrowDown"===o)a=Math.min(t+1,z.length-1);else{if("ArrowUp"!==o)return;a=Math.max(t-1,0)}e.preventDefault(),e3.current[a]?.[s]?.focus()})(e,t,l),onPointerDown:ex&&"static"!==eT?e=>e8.handleSlotPointerDown(e,l,r):void 0,onDragOver:e0?e=>e.preventDefault():void 0},i)});(eJ[e.id]?.segments??[]).forEach(e=>{let t=eQ.isDraggableEvent(e.event),r=e.startDayIndex/a*100,o=(e.endDayIndex-e.startDayIndex+1)/a*100,n=e.hiddenInSpan&&"static"!==eT,i=n?`calc((100% - 18px) * ${e.row} / ${eY} + 1px)`:`calc(${e.row*e6}% + 1px)`,l=n?`calc((100% - 18px) / ${eY} - 2px)`:`calc(${e6}% - 2px)`;s.push((0,Y.jsx)(m.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,size:"sm",hanging:e.hanging,draggable:t,renderEventBody:ef,renderEvent:ev,radius:Q,mode:eT,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ey?t=>ey(e.event,t):void 0,style:{position:"absolute",top:i,left:`calc(${r}% + 1px)`,width:`calc(${o}% - 2px)`,height:l,zIndex:3}},`${e.event.id}-segment-${e.startDayIndex}`))});let l=eH?e_[t]:void 0,d=l?.position==="first"||l?.position==="only",u=void 0!==l?null!==l?(0,Y.jsx)(p.Box,{...eC("resourcesMonthViewGroupColumn"),mod:{"group-position":l.position},children:d&&(0,Y.jsx)("span",{style:l.count>1?{transform:`translateY(calc((${l.count-1} * (var(--resources-month-view-row-height) + 1px)) / 2))`}:void 0,children:ec?ec(l.group):l.group.label})}):(0,Y.jsx)(p.Box,{...eC("resourcesMonthViewGroupColumnEmpty")}):null;return(0,V.createElement)("div",{...eC("resourcesMonthViewRow"),key:e.id},u,(0,Y.jsx)("div",{...eC("resourcesMonthViewResourceLabel"),"data-has-groups":eH||void 0,children:ed?ed(e):e.label}),(0,Y.jsxs)("div",{...eC("resourcesMonthViewRowSlots"),onDragOver:e0?r=>{let o=e4(r,t);null!==o&&eA[o]&&eQ.handleDragOver(r,{day:eA[o],resourceId:e.id})}:void 0,onDragLeave:e0?eQ.handleDragLeave:void 0,onDrop:e0?r=>{let o=e4(r,t);null!==o&&eA[o]&&eQ.handleDrop(r,{day:eA[o],resourceId:e.id})}:void 0,children:[s,n,i]}))}),e7=(0,Y.jsxs)(p.Box,{mod:[{static:"static"===eT,"slot-dragging":e8.isDragging,"event-interaction":eQ.dragContextValue.isDragging},_],...eC("resourcesMonthView"),...eR,children:[Z&&(0,Y.jsx)(v.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,h.default)(H).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,h.default)(H).add(1,"month").startOf("month")),today:()=>(requestAnimationFrame(()=>{eU((0,h.default)().format("YYYY-MM-DD"))}),(0,o.toDateString)((0,h.default)()))},control:{monthYearSelect:{locale:N,yearValue:(0,h.default)(H).get("year"),monthValue:(0,h.default)(H).get("month"),onYearChange:e=>A?.((0,o.toDateString)((0,h.default)(H).set("year",e).startOf("month"))),onMonthChange:e=>A?.((0,o.toDateString)((0,h.default)(H).set("month",e).startOf("month"))),...ee}},labels:eb,onDateChange:A,onViewChange:et,previousControlProps:ea,nextControlProps:eo,todayControlProps:er,viewSelectProps:{views:["day","week","month"],...es},stylesApiProps:eP}),(0,Y.jsx)(p.Box,{...eC("resourcesMonthViewRoot"),children:(0,Y.jsx)(w.ScrollArea,{scrollbars:"x",scrollbarSize:4,...eE,...eC("resourcesMonthViewScrollArea",{className:eE?.className,style:eE?.style}),viewportRef:eN,children:(0,Y.jsxs)("div",{...eC("resourcesMonthViewInner"),children:[(0,Y.jsxs)("div",{...eC("resourcesMonthViewDayLabelsRow"),children:[(0,V.createElement)("div",{...eC("resourcesMonthViewCorner"),key:"corner",ref:eG,style:eH?{flexBasis:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))",minWidth:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eb)),e2]}),e9]})})})]});return eg?(0,Y.jsx)(c.DragContext.Provider,{value:eQ.dragContextValue,children:e7}):e7});W.displayName="@mantine/schedule/ResourcesMonthView",W.classes=g,W.varsResolver=C,e.s(["ResourcesMonthView",0,W],272013)},853905,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(5,"day").format("YYYY-MM-DD"),n=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],i=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${o} 09:30:00`,end:`${o} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${o} 11:00:00`,end:`${o} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${o} 10:00:00`,end:`${o} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${a} 15:00:00`,end:`${a} 16:00:00`,color:"grape",resourceId:"london"}],l="\nimport dayjs from 'dayjs';\nimport { ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\nconst nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n  { id: 'london', label: 'Meeting room: London' },\n];\n\nconst events = [\n  { id: 1, title: 'Team Standup', start: `${today} 09:00:00`, end: `${today} 09:30:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 4, title: 'Design Review', start: `${tomorrow} 13:00:00`, end: `${tomorrow} 14:00:00`, color: 'orange', resourceId: 'paris' },\n  { id: 5, title: '1:1 Meeting', start: `${today} 11:00:00`, end: `${today} 11:30:00`, color: 'cyan', resourceId: 'new-york' },\n  { id: 6, title: 'Workshop', start: `${nextWeek} 14:00:00`, end: `${nextWeek} 16:00:00`, color: 'pink', resourceId: 'new-york' },\n  { id: 7, title: 'Architecture Review', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'red', resourceId: 'london' },\n  { id: 8, title: 'Retrospective', start: `${tomorrow} 15:00:00`, end: `${tomorrow} 16:00:00`, color: 'grape', resourceId: 'london' },\n];\n";var d=e.i(191788),u=e.i(391398),c=e.i(613490),m=e.i(499083),f=e.i(272013),v={root:"m_428e1853"},g=e.i(232471),h=e.i(275519),p=e.i(44091),w=e.i(391466),D=e.i(579560);let y={defaultView:"day",mode:"default"},x=(0,h.factory)(e=>{let t=(0,p.useProps)("ResourcesSchedule",y,e),{classNames:r,className:o,style:a,styles:s,unstyled:n,vars:i,resources:l,date:d,defaultDate:h,onDateChange:x,view:S,defaultView:b,onViewChange:T,events:E,locale:k,radius:I,labels:M,renderEventBody:V,renderResourceLabel:R,withEventsDragAndDrop:Y,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:P,onTimeSlotClick:W,onDayClick:O,onEventClick:B,withDragSlotSelect:L,onSlotDragEnd:_,onExternalEventDrop:H,withEventResize:A,onEventResize:z,canResizeEvent:N,recurrenceExpansionLimit:F,mode:G,dayViewProps:U,weekViewProps:K,monthViewProps:q,__staticSelector:J,mod:X,...Q}=t,Z=(0,w.useStyles)({name:J||"ResourcesSchedule",classes:v,props:t,className:o,style:a,classNames:r,styles:s,unstyled:n,vars:i}),[ee,et]=(0,D.useUncontrolled)({value:S,defaultValue:b,onChange:T}),[er,eo]=(0,D.useUncontrolled)({value:d,defaultValue:h??new Date}),ea={resources:l,date:er,onDateChange:e=>{eo(e),x?.(e)},onViewChange:e=>{("day"===e||"week"===e||"month"===e)&&et(e)},events:E,locale:k,radius:I,labels:M,renderEventBody:V,renderResourceLabel:R,withEventsDragAndDrop:"static"!==G&&Y,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:P,onEventClick:B,withDragSlotSelect:L,onSlotDragEnd:_,onExternalEventDrop:H,recurrenceExpansionLimit:F,mode:G},es=(()=>{switch(ee){case"day":return(0,u.jsx)(c.ResourcesDayView,{...ea,onTimeSlotClick:W,withEventResize:"static"!==G&&A,onEventResize:z,canResizeEvent:N,...U});case"week":return(0,u.jsx)(m.ResourcesWeekView,{...ea,onTimeSlotClick:W,...K});case"month":return(0,u.jsx)(f.ResourcesMonthView,{...ea,onDayClick:O,...q});default:return null}})();return(0,u.jsx)(g.Box,{...Z("root"),mod:X,...Q,children:es})});x.displayName="@mantine/schedule/ResourcesSchedule",x.classes=v;let S={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)("day");return(0,u.jsx)(x,{date:t,onDateChange:o,view:a,onViewChange:s,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{maxEventsPerTimeSlot:3,startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var k=e.i(162077),I=e.i(988798);let M={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i),[l,c]=(0,d.useState)(!1),[m,f]=(0,d.useState)(null),[v,g]=(0,d.useState)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:a,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{g(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onDayClick:({date:e,resourceId:t})=>{g(t?String(t):null),f({title:"",start:(0,r.default)(e).startOf("day").toDate(),end:(0,r.default)(e).endOf("day").toDate(),color:"blue"}),c(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{g(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),c(!0)},onEventClick:e=>{g(e.resourceId?String(e.resourceId):null),f({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),c(!0)},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}}),(0,u.jsx)(k.EventForm,{opened:l,onClose:()=>c(!1),onExitTransitionEnd:()=>f(null),values:m,onSubmit:e=>{e.id?s(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||t.resourceId}:t)):s(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||void 0}])},onDelete:m?.id?()=>{m?.id&&s(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,u.jsx)(I.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:n.map(e=>({value:String(e.id),label:String(e.label)})),value:v,onChange:g})})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:k._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i);return(0,u.jsx)(x,{date:t,onDateChange:o,resources:n,events:a,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`};var W=(0,t.__exportAll)({controlled:()=>T,dragDrop:()=>b,eventForm:()=>M,eventResize:()=>V,externalDragDrop:()=>P,staticMode:()=>R,usage:()=>S,viewProps:()=>E,weekView:()=>Y});e.s(["ResourcesScheduleDemos",0,W],853905)}]);