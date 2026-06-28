(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let r=new Map(e.map(e=>[e.id,e])),o=new Set,a=[],s=[];for(let e of t){let t=a.length,n=0;for(let t of e.resourceIds){let e=r.get(t);e&&!o.has(t)&&(a.push(e),o.add(t),n++)}n>0&&s.push({group:e,startIndex:t,count:n})}for(let t of e)o.has(t.id)||a.push(t);let n=Array(a.length).fill(null);for(let e of s)for(let t=0;t<e.count;t++){let r,o=e.startIndex+t;r=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",n[o]={group:e.group,position:r,count:e.count}}return{orderedResources:a,groupRanges:s,resourceGroupMap:n}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let r of e)t.set(String(r.id),r.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let r=e.findIndex(e=>{if(!e)return!1;let r=e.getBoundingClientRect();return t>=r.left&&t<=r.right});if(r>=0)return r;let o=e[0],a=e[e.length-1];if(!o||!a)return null;let s=o.getBoundingClientRect(),n=a.getBoundingClientRect();return t<s.left?0:t>n.right?e.length-1:null}],461304)},640542,343355,367752,578373,e=>{"use strict";e.s(["handleResourcesGridKeyDown",0,function({controlsRef:e,resourceIndex:t,slotIndex:r,event:o}){let a=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(o.key);if(a){o.preventDefault();let s=e.current?e.current.map(e=>e?e.length:0):null;if(!s)return;!function e({controlsRef:t,direction:r,resourceIndex:o,slotIndex:a,size:s}){let n=function({direction:e,resourceIndex:t,slotIndex:r,size:o}){let a=o[t];if(!a)return null;switch(e){case"left":if(0===r)return null;return{resourceIndex:t,slotIndex:r-1};case"right":if(r===a-1)return null;return{resourceIndex:t,slotIndex:r+1};case"up":{if(0===t)return null;let e=o[t-1];return{resourceIndex:t-1,slotIndex:Math.min(r,e-1)}}case"down":{if(t===o.length-1)return null;let e=o[t+1];return{resourceIndex:t+1,slotIndex:Math.min(r,e-1)}}default:return null}}({direction:r,resourceIndex:o,slotIndex:a,size:s});if(!n)return;let i=t.current?.[n.resourceIndex]?.[n.slotIndex];i&&(i.disabled||i.getAttribute("data-hidden")?e({controlsRef:t,direction:r,resourceIndex:n.resourceIndex,slotIndex:n.slotIndex,size:s}):i.focus())}({controlsRef:e,direction:a,resourceIndex:t,slotIndex:r,size:s})}}],640542);var t=e.i(672654),r=e.i(42916),o=e.i(494834),a=e.i(191788);e.s(["useHorizontalEventResize",0,function({enabled:e=!1,mode:s="default",startTime:n,endTime:i,intervalMinutes:d,onEventResize:l,canResizeEvent:u}){let[c,m]=(0,a.useState)(null),f=(0,a.useRef)(null),D=(0,a.useRef)(!1),v=(0,a.useEffectEvent)(l||(()=>{})),g=(0,r.parseTimeString)(n),y=(0,r.parseTimeString)(i),p=60*g.hours+g.minutes,Y=60*y.hours+y.minutes,w=(0,t.clampIntervalMinutes)(d),h=Y-p,k=Math.ceil(h/w)*w,S=w/k*100,M=(0,a.useCallback)(e=>Math.max(0,Math.min(h,Math.round(e/w)*w)),[h,w]),x=(0,a.useCallback)((e,t)=>{let r=p+M(e/100*k),o=Math.floor(r/60);return`${t} ${String(o).padStart(2,"0")}:${String(r%60).padStart(2,"0")}:00`},[k,p,M]),T=(0,a.useCallback)(e=>M(e/100*k)/k*100,[k,M]),b=(0,a.useCallback)(({event:t,edge:r,container:a,originalLeft:n,originalWidth:i,eventDate:d,dayIndex:l=0,dayCount:u=1,pointerEvent:c})=>{if(!e||"static"===s)return;c.preventDefault(),c.stopPropagation();let D={eventId:t.id,event:t,edge:r,container:a,originalLeft:n,originalWidth:i,currentLeft:n,currentWidth:i,eventDate:d,originalStart:(0,o.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,o.default)(t.end).format("YYYY-MM-DD HH:mm:ss"),dayIndex:l,dayCount:u};f.current=D,m(D)},[e,s]),E=null!==c;(0,a.useEffect)(()=>{if(!E)return;let e=document.body.style.userSelect,t=document.body.style.cursor;document.body.style.userSelect="none",document.body.style.cursor="ew-resize";let r=e=>{let t=f.current;if(!t)return;let r=t.container.getBoundingClientRect(),o=T(function({clientX:e,containerLeft:t,containerWidth:r,dayIndex:o,dayCount:a}){let s=r/a;return s<=0?0:Math.max(0,Math.min(100,(e-(t+o*s))/s*100))}({clientX:e.clientX,containerLeft:r.left,containerWidth:r.width,dayIndex:t.dayIndex,dayCount:t.dayCount})),a=t.originalLeft,s=t.originalWidth;if("end"===t.edge)s=Math.max(S,o-t.originalLeft);else{let e=t.originalLeft+t.originalWidth;a=Math.min(o,e-S),s=e-a}f.current={...t,currentLeft:a,currentWidth:s},m(f.current)},o=()=>{let e=f.current;if(e&&(e.currentLeft!==e.originalLeft||e.currentWidth!==e.originalWidth)){let t,r;"start"===e.edge?(t=x(e.currentLeft,e.eventDate),r=e.originalEnd):(t=e.originalStart,r=x(e.currentLeft+e.currentWidth,e.eventDate)),v({eventId:e.eventId,newStart:t,newEnd:r,event:e.event})}f.current=null,m(null),D.current=!0,requestAnimationFrame(()=>{D.current=!1})};return document.addEventListener("pointermove",r),document.addEventListener("pointerup",o),()=>{document.body.style.userSelect=e,document.body.style.cursor=t,document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o)}},[E]);let $=(0,a.useCallback)(e=>c&&c.eventId===e?{left:c.currentLeft,width:c.currentWidth}:null,[c]),I=(0,a.useCallback)(t=>!!e&&"static"!==s&&"background"!==t.display&&(!u||u(t)),[e,s,u]),R=(0,a.useCallback)(()=>D.current,[]);return{handleResizeStart:b,isResizing:E,resizingEventId:c?.eventId??null,resizingEdge:c?.edge??null,getResizePosition:$,isResizableEvent:I,wasResizing:R}}],343355);var s=e.i(751198);e.s(["getOverlapClusters",0,function(e){let t=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;let a=[e[o]];r.add(o);let n=0;for(;n<a.length;){for(let t=0;t<e.length;t++)!r.has(t)&&(0,s.isEventsOverlap)(a[n],e[t])&&(a.push(e[t]),r.add(t));n++}t.push(a)}return t}],367752);var n=e.i(969610),i=e.i(298008),d=e.i(68642),l=e.i(532965),u=e.i(922621);e.s(["getResourcesDayViewEvents",0,function({events:e,resources:t,date:r,startTime:a,endTime:s}){let c={regularEvents:{},allDayEvents:{},backgroundTimedEvents:{},backgroundAllDayEvents:{}};for(let e of t)c.regularEvents[e.id]=[],c.allDayEvents[e.id]=[],c.backgroundTimedEvents[e.id]=[],c.backgroundAllDayEvents[e.id]=[];if(void 0===e)return c;let m=(0,o.default)(r).startOf("day"),f=(0,o.default)(r).endOf("day"),D={},v={};for(let e of t)D[e.id]=[],v[e.id]=[];let g=new Set;for(let t of e){if(void 0===t.resourceId||!(t.resourceId in D))continue;let e=(0,o.default)(t.start),r=(0,o.default)(t.end),n=e.isSame(m,"day"),l=e.isBefore(f)&&r.isAfter(m);if(n||l){if(n&&!(0,d.isEventInTimeRange)({event:t,startTime:a,endTime:s}))continue;let o=(0,i.validateEvent)(t);if(g.has(t.id))throw Error(`[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${t.id}`);if(g.add(t.id),"background"===t.display)v[t.resourceId].push(o);else if(n)D[t.resourceId].push(o);else{let n=e.isBefore(m)?m:e,i=r.isAfter(f)?f:r,l={...o,start:n.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss")};(0,d.isEventInTimeRange)({event:l,startTime:a,endTime:s})&&D[t.resourceId].push(l)}}}for(let e of t){for(let t of(0,u.getDayPositionedEvents)({events:D[e.id],startTime:a,endTime:s,date:r}))t.position.allDay?c.allDayEvents[e.id].push(t):c.regularEvents[e.id].push(t);for(let t of v[e.id]){let i=(0,o.default)(t.start),d=(0,o.default)(t.end),u=i.isBefore(m)?m:i,D=d.isAfter(f)?f:d,v={...t,start:u.format("YYYY-MM-DD HH:mm:ss"),end:D.format("YYYY-MM-DD HH:mm:ss")};if((0,n.isAllDayEvent)({event:v,date:r}))c.backgroundAllDayEvents[e.id].push({...t,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:r,height:o}=(0,l.getDayPosition)({event:v,startTime:a,endTime:s});if(o<=0)continue;c.backgroundTimedEvents[e.id].push({...t,position:{top:r,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}}return c}],578373)},499083,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(918006),n=e.i(625712),i=e.i(900513),d=e.i(688785),l=e.i(664397),u=e.i(969610),c=e.i(792930),m=e.i(505696),f=e.i(420924),D=e.i(640542),v=e.i(176304),g=e.i(461304),y=e.i(783261),p=e.i(376879),Y=e.i(201867),w=e.i(891343),h=e.i(67312),k=e.i(966696),S=e.i(612148),M=e.i(343355),x=e.i(367752),T=e.i(898770),b=e.i(657068),E=e.i(922552),$=e.i(539517),I=e.i(578373),R=e.i(494834),W=e.i(232471),C=e.i(284629),j=e.i(391398);function V({resource:e,resourceIndex:r,weekdays:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:d,businessHours:l,withEventsDragAndDrop:u,onRowSlotsDragOver:c,onRowSlotsDragLeave:f,onRowSlotsDrop:D,onSlotClick:v,dropTargetSlotIndex:g,mode:y,slotsRef:p,firstSlotIndex:Y,onSlotKeyDown:w,withDragSlotSelect:h,onSlotPointerDown:k,isSlotDragSelected:S,rowSlotsContainerRef:M,renderResourceLabel:x,renderGroupLabel:T,scrolledX:b,groupInfo:E,allDayCount:$}){let I=String(e.id),R=o.flatMap((o,n)=>a.map((c,f)=>{let D=n*a.length+f,M=g===D,x=Y?.resourceIndex===r&&Y?.slotIndex===D,T=S?.(D,I)||!1;return(0,j.jsx)(C.UnstyledButton,{ref:e=>{if(!p?.current)return;p.current[r]||(p.current[r]=[]);let t=p.current[r];if(e)t[D]=e;else for(delete t[D];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesWeekViewRowSlot"),mod:{"hour-start":c.isHourStart,...(0,m.getBusinessHoursMod)({time:c.startTime,businessHours:l,highlightBusinessHours:d}),"drop-target":M,"drag-selected":T,static:"static"===y},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${c.startTime} - ${c.endTime}`,tabIndex:"static"===y?-1:x?0:-1,"data-drag-slot-index":h&&"static"!==y?D:void 0,"data-drag-slot-group":h&&"static"!==y?I:void 0,onKeyDown:e=>{w&&w(e,r,D)},onPointerDown:h&&"static"!==y?e=>k?.(e,D,I):void 0,onClick:"static"!==y&&v?t=>v(e.id,o,c.startTime,t):void 0,onDragOver:u&&"static"!==y?e=>e.preventDefault():void 0},`${o}-${c.startTime}`)})),H=E?.position==="first"||E?.position==="only",L=void 0!==E?null!==E?(0,j.jsx)(W.Box,{...s("resourcesWeekViewGroupColumn"),mod:{"scrolled-x":b,"group-position":E.position},children:H&&(0,j.jsx)("span",{style:E.count>1?{transform:`translateY(calc((${E.count-1} * (var(--resources-week-view-row-height) + 1px)) / 2))`}:void 0,children:T?T(E.group):E.group.label})}):(0,j.jsx)(W.Box,{...s("resourcesWeekViewGroupColumnEmpty"),mod:{"scrolled-x":b}}):null;return(0,j.jsxs)(W.Box,{...s("resourcesWeekViewRow"),children:[L,(0,j.jsx)(W.Box,{...s("resourcesWeekViewResourceLabel"),mod:{"scrolled-x":b,"has-groups":void 0!==E},children:x?x(e):e.label}),(0,j.jsxs)(W.Box,{ref:M,...s("resourcesWeekViewRowSlots",{style:$?{minHeight:`max(var(--resources-week-view-row-height), calc(${$} * (var(--resources-week-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:u&&"static"!==y?t=>c?.(t,e.id,r):void 0,onDragLeave:u&&"static"!==y?f:void 0,onDrop:u&&"static"!==y?t=>D?.(t,e.id,r):void 0,children:[n,R]})]})}var H={resourcesWeekView:"m_ed4c47cf",resourcesWeekViewRoot:"m_5b5cbd51",resourcesWeekViewScrollArea:"m_b88ea29",resourcesWeekViewInner:"m_fbb9fc7",resourcesWeekViewHeaderRows:"m_7d7bb735",resourcesWeekViewCorner:"m_dd8b4f04",resourcesWeekViewHeaderContent:"m_85f2b19d",resourcesWeekViewDayLabelsRow:"m_cde0b68e",resourcesWeekViewDayLabel:"m_354e59a7",resourcesWeekViewTimeLabelsRow:"m_b7f0617f",resourcesWeekViewTimeLabel:"m_a6832518",resourcesWeekViewRow:"m_9fd9b38b",resourcesWeekViewResourceLabel:"m_9c6373f7",resourcesWeekViewGroupColumn:"m_fdcb5366",resourcesWeekViewGroupColumnEmpty:"m_3d5e7187",resourcesWeekViewRowSlots:"m_c534316a",resourcesWeekViewRowSlot:"m_ed965429",resourcesWeekViewBackgroundEvent:"m_3c19323d",resourcesWeekViewAllDayEvent:"m_682c45d0",resourcesWeekViewResizeHandle:"m_30c8fd6b",resourcesWeekViewEventWrapper:"m_2d13c608",resourcesWeekViewCurrentTimeIndicator:"m_6f70bf38",resourcesWeekViewCurrentTimeIndicatorLine:"m_be32874c",resourcesWeekViewCurrentTimeIndicatorThumb:"m_88ec57e",resourcesWeekViewCurrentTimeIndicatorTimeBubble:"m_9ff3db11"},L=e.i(19300),A=e.i(481178),N=e.i(275519),B=e.i(433512),P=e.i(779177),O=e.i(951254),z=e.i(44091),_=e.i(62904),F=e.i(391466),G=e.i(822933),U=e.i(417241),K=e.i(332977),X=e.i(191788),Q=e.i(205693);let q={__staticSelector:"ResourcesWeekView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,weekLabelFormat:"MMM DD",weekdayFormat:"ddd D",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withEventResize:!1,withDragSlotSelect:!1,withWeekendDays:!0,withCurrentTimeBubble:!0,highlightToday:!0,mode:"default",maxEventsPerTimeSlot:2},J=(0,A.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesWeekView:{"--resources-week-view-radius":t?(0,B.getRadius)(t):void 0,"--resources-week-view-slot-width":(0,P.rem)(r),"--resources-week-view-row-height":(0,P.rem)(o),"--resources-week-view-group-label-width":(0,P.rem)(a)}})),Z=(0,N.factory)(e=>{let C=(0,z.useProps)("ResourcesWeekView",q,e),{classNames:A,className:N,style:B,styles:P,unstyled:Z,attributes:ee,vars:et,startTime:er,endTime:eo,date:ea,onDateChange:es,resources:en,intervalMinutes:ei,slotLabelFormat:ed,radius:el,startScrollDateTime:eu,scrollAreaProps:ec,locale:em,withCurrentTimeIndicator:ef,withCurrentTimeBubble:eD,__staticSelector:ev,withHeader:eg,onViewChange:ey,previousControlProps:ep,nextControlProps:eY,todayControlProps:ew,viewSelectProps:eh,weekLabelFormat:ek,renderWeekLabel:eS,events:eM,slotWidth:ex,rowHeight:eT,labels:eb,highlightBusinessHours:eE,businessHours:e$,renderEventBody:eI,renderEvent:eR,renderResourceLabel:eW,groups:eC,renderGroupLabel:ej,groupLabelWidth:eV,withEventsDragAndDrop:eH,onEventDrop:eL,canDragEvent:eA,onEventDragStart:eN,onEventDragEnd:eB,withEventResize:eP,onEventResize:eO,canResizeEvent:ez,onTimeSlotClick:e_,onEventClick:eF,withDragSlotSelect:eG,onSlotDragEnd:eU,mode:eK,onExternalEventDrop:eX,recurrenceExpansionLimit:eQ,maxEventsPerTimeSlot:eq,moreEventsProps:eJ,firstDayOfWeek:eZ,weekendDays:e0,withWeekendDays:e1,weekdayFormat:e8,highlightToday:e3,...e2}=C,e9=void 0!==eq?Math.max(1,eq):void 0,e4=(0,F.useStyles)({name:ev,classes:H,props:C,className:N,style:B,classNames:A,styles:P,unstyled:Z,vars:et,varsResolver:J,attributes:ee,rootSelector:"resourcesWeekView"}),{resolvedClassNames:e6,resolvedStyles:e7}=(0,_.useResolvedStylesApi)({classNames:A,styles:P,props:C}),e5={classNames:e6,styles:e7,attributes:ee,__staticSelector:ev,radius:el},te=(0,O.useMantineTheme)(),[tt,tr]=(0,X.useState)(!1),[to,ta]=(0,X.useState)(!1),ts=(0,Q.useDatesContext)(),tn=(0,o.getDayTimeIntervals)({startTime:er,endTime:eo,intervalMinutes:ei}),{orderedResources:ti,groupRanges:td,resourceGroupMap:tl}=(0,X.useMemo)(()=>(0,f.getOrderedResources)(en,eC),[en,eC]),tu=td.length>0,tc=(0,X.useMemo)(()=>(0,s.getWeekDays)({week:ea,withWeekendDays:e1,weekendDays:ts.getWeekendDays(e0),firstDayOfWeek:ts.getFirstDayOfWeek(eZ)}),[ea,e1,e0,eZ,ts]),tm=tn.length,tf=tc.some(e=>(0,R.default)(e).isSame((0,R.default)(),"day")),[tD,tv]=(0,X.useState)((0,d.getCurrentTimePosition)({startTime:er,endTime:eo,intervalMinutes:ei}));(0,G.useInterval)(()=>tv((0,d.getCurrentTimePosition)({startTime:er,endTime:eo,intervalMinutes:ei})),6e4,{autoInvoke:!0});let tg=tc.findIndex(e=>(0,R.default)(e).isSame((0,R.default)(),"day")),ty=(ef??tf)&&tg>=0&&(0,l.isInTimeRange)({date:(0,R.default)().toDate(),startTime:er,endTime:eo}),tp=eD?(0,r.formatDate)({locale:ts.getLocale(em),date:(0,R.default)(),format:ed}):"",tY=(0,X.useCallback)((e,t)=>{if(!eX)return;let r=Math.floor(t.slotIndex/tm),o=t.slotIndex%tm,a=tc[r];a&&eX({dataTransfer:e.dataTransfer,dropDateTime:`${(0,R.default)(a).format("YYYY-MM-DD")} ${tn[o].startTime}`,resourceId:t.resourceId})},[eX,tn,tc,tm]),tw=(0,X.useRef)(void 0),th=(0,y.useDragDropHandlers)({enabled:eH,mode:eK,onEventDrop:(0,X.useCallback)(e=>{eL?.({...e,resourceId:tw.current})},[eL]),canDragEvent:eA,onEventDragStart:eN,onEventDragEnd:eB,calculateDropTarget:(e,t)=>{tw.current=e.resourceId;let r=Math.floor(e.slotIndex/tm),o=tn[e.slotIndex%tm].startTime;return(0,c.calculateDropTime)({draggedEvent:t,targetDate:tc[r]||tc[0],targetSlotTime:o,intervalMinutes:ei})},onExternalDrop:eX?tY:void 0}),tk=(0,X.useMemo)(()=>(0,v.getGroupToResourceIdMap)(en),[en]),tS=(0,p.useSlotDragSelect)({enabled:eG&&"static"!==eK,onDragEnd:(e,t,r)=>{if(!eU)return;let o=Math.floor(e/tm),a=e%tm,s=Math.floor(t/tm),n=t%tm,i=tc[o],d=tc[s];i&&d&&eU({rangeStart:`${(0,R.default)(i).format("YYYY-MM-DD")} ${tn[a].startTime}`,rangeEnd:`${(0,R.default)(d).format("YYYY-MM-DD")} ${tn[n].endTime}`,resourceId:tk.get(r)??r})}}),tM=(0,M.useHorizontalEventResize)({enabled:eP,mode:eK,startTime:er,endTime:eo,intervalMinutes:ei,onEventResize:eO,canResizeEvent:ez}),tx=(eH||!!eX)&&"static"!==eK,tT=(e,t,r,o)=>{if(!e_)return;let a=tn.findIndex(e=>e.startTime===r);if(-1===a)return;let s=tn[a],n=(0,R.default)(t).format("YYYY-MM-DD");e_({slotStart:`${n} ${s.startTime}`,slotEnd:`${n} ${s.endTime}`,nativeEvent:o,resourceId:e})},tb=(0,X.useMemo)(()=>(function({events:e,resources:t,weekdays:r,startTime:o,endTime:a,expansionLimit:s}){let n=(0,b.expandRecurringEvents)({events:e,rangeStart:(0,R.default)(r[0]).startOf("day").toDate(),rangeEnd:(0,R.default)(r[r.length-1]).endOf("day").toDate(),expansionLimit:s});if(n){let e=new Set;for(let t of n){if(e.has(t.id))throw Error(`[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${t.id}`);e.add(t.id)}}let i={},d=new Set,l=e=>"background"!==e.display&&(0,T.isMultidayEvent)(e);for(let e of r){let r=n?.filter(t=>{if(d.has(t.id)||l(t))return!1;let r=(0,R.default)(t.start),o=(0,R.default)(e).startOf("day");return r.isSame(o,"day")?(d.add(t.id),!0):!!("background"===t.display&&r.isBefore((0,R.default)(e).endOf("day"))&&(0,R.default)(t.end).isAfter(o))});i[e]=(0,I.getResourcesDayViewEvents)({events:r,resources:t,date:e,startTime:o,endTime:a})}let u={};for(let e of t)u[e.id]=[];if(r.forEach((e,r)=>{for(let o of t)for(let t of i[e].allDayEvents[o.id]??[])u[o.id].push({event:t,startDayIndex:r,endDayIndex:r,row:0})}),n)for(let e of n){if(!l(e)||void 0===e.resourceId||!(e.resourceId in u))continue;let t=(0,E.calculateEventDays)({event:e,weekDays:r,actualEndDate:(0,$.getEventEndDate)(e)});0!==t.length&&u[e.resourceId].push({event:e,startDayIndex:r.indexOf(t[0]),endDayIndex:r.indexOf(t[t.length-1]),row:0})}for(let e of t)!function(e){let t=e.map((e,t)=>({bar:e,index:t})).sort((e,t)=>e.bar.startDayIndex-t.bar.startDayIndex||e.bar.endDayIndex-t.bar.endDayIndex||e.index-t.index),r=[];for(let{bar:e}of t){let t=0;for(;t<r.length&&r[t]>=e.startDayIndex;)t+=1;r[t]=e.endDayIndex,e.row=t}}(u[e.id]);return{byDay:i,allDayBars:u}})({events:eM,resources:en,weekdays:tc,startTime:er,endTime:eo,expansionLimit:eQ}),[eM,en,tc,er,eo,eQ]),tE=tc.map(e=>{let t=(0,R.default)(e),o=t.isSame((0,R.default)(),"day")&&e3,a=ts.getWeekendDays(e0).includes(t.day());return(0,X.createElement)(W.Box,{...e4("resourcesWeekViewDayLabel"),key:e,mod:{today:o,weekend:a},style:{width:`calc(var(--resources-week-view-slot-width) * ${tm})`}},(0,r.formatDate)({date:t,locale:ts.getLocale(em),format:e8}))}),t$=tc.flatMap(e=>tn.map(t=>{let o=(0,r.formatDate)({date:(0,R.default)(`${(0,R.default)(e).format("YYYY-MM-DD")} ${t.startTime}`),locale:ts.getLocale(em),format:ed});return(0,X.createElement)(W.Box,{...e4("resourcesWeekViewTimeLabel"),key:`${e}-${t.startTime}`,mod:{"hour-start":t.isHourStart,...(0,m.getBusinessHoursMod)({time:t.startTime,businessHours:e$,highlightBusinessHours:eE})}},o)})),tI=(0,X.useRef)([]),tR=(0,X.useRef)([]),tW=(0,X.useRef)(null),tC=(0,K.useMergedRef)(tW,ec?.viewportRef),tj={resourceIndex:0,slotIndex:0};(0,U.useIsomorphicEffect)(()=>{if(!eu||!tW.current)return;let e=(0,R.default)(eu),t=e.format("YYYY-MM-DD 00:00:00"),r=e.format("HH:mm:ss"),o=tc.indexOf(t);if(o<0)return;let a=tn.findIndex(e=>e.startTime>=r);if(a<0)return;let s=o*tm+a,n=tI.current[0];if(!n||0===n.length)return;let i=n[s];if(!i)return;let d=i.getBoundingClientRect(),l=tW.current.getBoundingClientRect(),u=tW.current.querySelector(`.${H.resourcesWeekViewCorner}`),c=u?u.getBoundingClientRect().width:0;tW.current.scrollTo({left:d.left-l.left-c,top:0})},[]);let tV=(0,X.useCallback)((e,t)=>(0,g.getIndexFromDragPoint)(tI.current[t]??[],e.clientX),[]),tH=(e,t,r)=>{(0,D.handleResourcesGridKeyDown)({controlsRef:tI,resourceIndex:t,slotIndex:r,event:e})},tL=100/tc.length,tA=ti.map((e,t)=>{let r=[],o=tb.allDayBars[e.id]??[],a=o.reduce((e,t)=>Math.max(e,t.row+1),0);tc.forEach((o,a)=>{let s=tb.byDay[o];if(!s)return;let n=a/tc.length*100;for(let t of[...s.backgroundTimedEvents[e.id]||[],...s.backgroundAllDayEvents[e.id]||[]]){let e=te.variantColorResolver({color:t.color||te.primaryColor,theme:te,variant:"light",autoContrast:!0}),a="function"==typeof eI?eI(t):t.title,s={key:`bg-${t.id}-${o}`,...e4("resourcesWeekViewBackgroundEvent",{style:{left:`${n+t.position.top/100*tL}%`,width:`${t.position.height/100*tL}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":e.background,"--bg-event-color":e.color},children:a};"function"==typeof eR?r.push(eR(t,s)):r.push((0,j.jsx)(W.Box,{...s}))}let i=(s.regularEvents[e.id]||[]).filter(e=>!(0,u.isAllDayEvent)({event:e,date:o}));for(let e of void 0!==e9?i.filter(e=>e.position.column<e9):i){let s=th.isDraggableEvent(e),i=tM.isResizableEvent(e),d=tM.getResizePosition(e.id),l=null!==d,u=l&&tM.resizingEdge?tM.resizingEdge:null,c=d?d.left:e.position.top,m=d?d.width:e.position.height,f=n+c/100*tL,D=m/100*tL,v=i?te.variantColorResolver({color:e.color||te.primaryColor,theme:te,variant:e.variant||"light",autoContrast:!0}):null,g=void 0!==e9&&e.position.overlaps>e9,y=(0,R.default)(o).format("YYYY-MM-DD");r.push((0,j.jsxs)(W.Box,{...e4("resourcesWeekViewEventWrapper"),__vars:v?{"--event-color":v.color}:void 0,"data-resizing":l||void 0,style:{left:`calc(${f}% + 1px)`,top:g?`calc((100% - 22px) * ${e.position.column} / ${e9})`:`${e.position.offset}%`,width:`calc(${D}% - 2px)`,height:g?`calc((100% - 22px) / ${e9})`:`${e.position.width}%`},children:[(0,j.jsx)(w.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:s,isResizing:l,renderEventBody:eI,renderEvent:eR,radius:el,mode:eK,onClick:eF?t=>{tM.wasResizing()||eF(e,t)}:void 0,style:{width:"100%",height:"100%"}}),i&&"static"!==eK&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{...e4("resourcesWeekViewResizeHandle"),"data-edge":"start","data-active":"start"===u||void 0,onPointerDown:r=>{let o=tR.current[t];o&&tM.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:y,dayIndex:a,dayCount:tc.length,pointerEvent:r})}}),(0,j.jsx)("div",{...e4("resourcesWeekViewResizeHandle"),"data-edge":"end","data-active":"end"===u||void 0,onPointerDown:r=>{let o=tR.current[t];o&&tM.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:y,dayIndex:a,dayCount:tc.length,pointerEvent:r})}})]})]},`${e.id}-${o}`))}if(void 0!==e9)for(let t of(0,x.getOverlapClusters)(i)){let a=t.filter(e=>e.position.column>=e9).length;if(a>0&&"static"!==eK){let s=n+Math.min(...t.map(e=>e.position.top))/100*tL,i=n+Math.max(...t.map(e=>e.position.top+e.position.height))/100*tL;r.push((0,j.jsx)(h.MoreEvents,{events:t,moreEventsCount:a,mode:eK,labels:eb,renderEventBody:eI,renderEvent:eR,onEventClick:eF,style:{position:"absolute",left:`calc(${s}% + 1px)`,width:`calc(${i-s}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...e5,...eJ},`more-${e.id}-${o}-${t[0].id}`))}}});let s=tu?"calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)":"calc(var(--resources-week-view-resource-label-width) + 5px)";return o.forEach(e=>{let t=e.startDayIndex*tL,o=(e.endDayIndex-e.startDayIndex+1)*tL;r.push((0,j.jsx)("div",{...e4("resourcesWeekViewAllDayEvent",{style:{left:`calc(${t}% + 1px)`,width:`calc(${o}% - 2px)`,top:`calc(${e.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`}}),children:(0,j.jsx)(w.ScheduleEvent,{event:e.event,autoSize:!0,nowrap:!0,renderEventBody:e=>(0,j.jsx)("span",{style:{position:"sticky",insetInlineStart:s,display:"inline-block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},children:eI?eI(e):e.title}),renderEvent:eR,radius:el,mode:eK,onClick:eF?t=>eF(e.event,t):void 0,style:{width:"100%",height:"100%",overflow:"visible"},styles:{eventInner:{display:"block",overflow:"visible",lineHeight:"var(--resources-week-view-all-day-height)"}}})},`all-day-${e.event.id}-${e.startDayIndex}`))}),(0,j.jsx)(V,{resource:e,resourceIndex:t,weekdays:tc,slots:tn,getStyles:e4,labels:eb,highlightBusinessHours:eE,businessHours:e$,withEventsDragAndDrop:tx,mode:eK,slotsRef:tI,firstSlotIndex:tj,onSlotKeyDown:tH,onSlotClick:tT,onRowSlotsDragOver:(e,t,r)=>{let o=tV(e,r);null!==o&&th.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:th.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tV(e,r);null!==o&&th.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:th.dropTarget?.resourceId===e.id?th.dropTarget.slotIndex:void 0,withDragSlotSelect:eG,onSlotPointerDown:tS.handleSlotPointerDown,isSlotDragSelected:tS.isSlotSelected,rowSlotsContainerRef:e=>{tR.current[t]=e},renderResourceLabel:eW,renderGroupLabel:ej,scrolledX:to,groupInfo:tu?tl[t]:void 0,allDayCount:a,children:r},e.id)}),tN=(0,S.getWeekLabel)({weekdays:tc,locale:ts.getLocale(em),weekLabelFormat:ek,renderWeekLabel:eS}),tB=tg>=0?(tg+tD/100)/tc.length*100:0,tP=(0,j.jsxs)(W.Box,{...e4("resourcesWeekView"),mod:{static:"static"===eK,"slot-dragging":tS.isDragging,resizing:tM.isResizing,"event-interaction":tM.isResizing||th.dragContextValue.isDragging},...e2,children:[eg&&(0,j.jsx)(k.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>(0,i.previousWeek)(ea,ts.getFirstDayOfWeek(eZ)),next:()=>(0,n.nextWeek)(ea,ts.getFirstDayOfWeek(eZ)),today:()=>(0,a.toDateString)((0,R.default)())},control:{miw:180,title:tN},labels:eb,onDateChange:es,onViewChange:ey,previousControlProps:ep,nextControlProps:eY,todayControlProps:ew,viewSelectProps:{views:["day","week","month"],...eh},stylesApiProps:e5}),(0,j.jsx)(W.Box,{...e4("resourcesWeekViewRoot"),children:(0,j.jsx)(L.ScrollArea,{scrollbarSize:4,...ec,...e4("resourcesWeekViewScrollArea",{className:ec?.className,style:ec?.style}),onScrollPositionChange:e=>{ec?.onScrollPositionChange?.(e),tr(0!==e.y),ta(0!==e.x)},viewportRef:tC,children:(0,j.jsxs)("div",{...e4("resourcesWeekViewInner"),children:[(0,j.jsxs)("div",{...e4("resourcesWeekViewHeaderRows"),children:[(0,X.createElement)("div",{...e4("resourcesWeekViewCorner"),key:"corner",style:tu?{flexBasis:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))",minWidth:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eb)),(0,j.jsxs)("div",{...e4("resourcesWeekViewHeaderContent"),children:[(0,j.jsx)("div",{...e4("resourcesWeekViewDayLabelsRow"),children:tE}),(0,j.jsx)(W.Box,{...e4("resourcesWeekViewTimeLabelsRow"),mod:{scrolled:tt},children:t$})]})]}),tA,ty&&(0,j.jsxs)(W.Box,{...e4("resourcesWeekViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":tu?`calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${tB} / 100)`:`calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${tB} / 100)`,"--_time-bubble-width":tp?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[eD&&(0,j.jsx)("div",{...e4("resourcesWeekViewCurrentTimeIndicatorTimeBubble"),children:tp}),!eD&&(0,j.jsx)("div",{...e4("resourcesWeekViewCurrentTimeIndicatorThumb")}),(0,j.jsx)("div",{...e4("resourcesWeekViewCurrentTimeIndicatorLine")})]})]})})})]}),tO=(0,X.useMemo)(()=>th.dragContextValue,[th.dragContextValue]);return eH?(0,j.jsx)(Y.DragContext.Provider,{value:tO,children:tP}):tP});Z.displayName="@mantine/schedule/ResourcesWeekView",Z.classes=H,Z.varsResolver=J,e.s(["ResourcesWeekView",0,Z],499083)},259072,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(2,"day").format("YYYY-MM-DD"),n=(0,r.default)().add(3,"day").format("YYYY-MM-DD"),i=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],d=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${a} 09:30:00`,end:`${a} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${o} 13:00:00`,end:`${o} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${a} 11:00:00`,end:`${a} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${a} 10:00:00`,end:`${a} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${o} 15:00:00`,end:`${o} 16:00:00`,color:"grape",resourceId:"london"},{id:9,title:"Product Demo",start:`${s} 09:00:00`,end:`${s} 10:00:00`,color:"teal",resourceId:"tokyo"},{id:10,title:"Budget Review",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"indigo",resourceId:"paris"}],l=`
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

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
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
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
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
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
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
`;var u=e.i(191788),c=e.i(391398),m=e.i(499083);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D=(0,r.default)().startOf("week").add(1,"day"),v=e=>D.add(e,"day").format("YYYY-MM-DD"),g=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],y=[{id:1,title:"Offsite",start:`${v(1)} 00:00:00`,end:`${v(2)} 00:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Review",start:`${v(1)} 00:00:00`,end:`${v(2)} 00:00:00`,color:"grape",resourceId:"tokyo"},{id:3,title:"Sprint Planning",start:`${v(0)} 10:00:00`,end:`${v(0)} 11:30:00`,color:"green",resourceId:"tokyo"},{id:4,title:"Maintenance",start:`${v(2)} 00:00:00`,end:`${v(3)} 00:00:00`,color:"gray",display:"background",resourceId:"paris"},{id:5,title:"Client Call",start:`${v(1)} 09:30:00`,end:`${v(1)} 10:30:00`,color:"violet",resourceId:"paris"},{id:6,title:"Holiday",start:`${v(4)} 00:00:00`,end:`${v(5)} 00:00:00`,color:"orange",resourceId:"new-york"}],p={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,u.useState)(e);return(0,c.jsx)(m.ResourcesWeekView,{date:t,onDateChange:o,resources:g,events:y,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const monday = dayjs().startOf('week').add(1, 'day');
const day = (offset: number) => monday.add(offset, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

// All-day events span a single whole day (start at 00:00, end at the next day 00:00).
// A foreground all-day event renders as a full-width bar pinned to the top of its day
// column and stacks when there are several; all-day events with display: 'background'
// tint the whole day column.
const events: ScheduleEventData[] = [
  { id: 1, title: 'Offsite', start: \`\${day(1)} 00:00:00\`, end: \`\${day(2)} 00:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Review', start: \`\${day(1)} 00:00:00\`, end: \`\${day(2)} 00:00:00\`, color: 'grape', resourceId: 'tokyo' },
  { id: 3, title: 'Sprint Planning', start: \`\${day(0)} 10:00:00\`, end: \`\${day(0)} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 4, title: 'Maintenance', start: \`\${day(2)} 00:00:00\`, end: \`\${day(3)} 00:00:00\`, color: 'gray', display: 'background', resourceId: 'paris' },
  { id: 5, title: 'Client Call', start: \`\${day(1)} 09:30:00\`, end: \`\${day(1)} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 6, title: 'Holiday', start: \`\${day(4)} 00:00:00\`, end: \`\${day(5)} 00:00:00\`, color: 'orange', resourceId: 'new-york' },
];
`,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,u.useState)(d);return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,u.useState)(d);return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{a(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var h=e.i(162077),k=e.i(988798);let S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,u.useState)(d),[s,n]=(0,u.useState)(!1),[l,f]=(0,u.useState)(null),[D,v]=(0,u.useState)(String(i[0].id));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{v(r?String(r):String(i[0].id)),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{v(r?String(r):String(i[0].id)),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onEventClick:e=>{v(e.resourceId?String(e.resourceId):String(i[0].id)),f({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),n(!0)}}),(0,c.jsx)(h.EventForm,{opened:s,onClose:()=>n(!1),onExitTransitionEnd:()=>f(null),values:l,onSubmit:e=>{e.id?a(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:D||i[0].id}:t)):a(t=>[...t,{id:Date.now(),title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:D||i[0].id}])},onDelete:l?.id?()=>{l?.id&&a(e=>e.filter(e=>e.id!==l.id))}:void 0,children:(0,c.jsx)(k.Select,{label:"Conference Room",placeholder:"Select a room",radius:"md",data:i.map(e=>({value:String(e.id),label:String(e.label)})),value:D,onChange:v})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(
    String(resources[0].id)
  );

  const handleTimeSlotClick = (
    slotStart: string,
    slotEnd: string,
    _e: React.MouseEvent,
    resourceId?: string | number
  ) => {
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

  const handleSlotDragEnd = (
    rangeStart: string,
    rangeEnd: string,
    resourceId?: string | number
  ) => {
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
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        startScrollDateTime={\`\${today} 08:00:00\`}
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:h._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,mode:"static"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"07:00:00",endTime:"20:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="07:00:00"
      endTime="20:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withWeekendDays:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withWeekendDays={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var b=e.i(671640),E=e.i(883364);let $={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,renderResourceLabel:e=>(0,c.jsxs)(b.Stack,{gap:2,align:"flex-start",children:[(0,c.jsx)(E.Text,{size:"sm",fw:600,children:e.label}),(0,c.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Floor 2"})]})})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      renderResourceLabel={(resource) => (
        <Stack gap={2} align="flex-start">
          <Text size="sm" fw={600}>{resource.label}</Text>
          <Text size="xs" c="dimmed">Floor 2</Text>
        </Stack>
      )}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var I=e.i(19683),R=e.i(369974),W=e.i(284629);let C=(0,r.default)().format("YYYY-MM-DD"),j=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),V=(0,r.default)().add(2,"day").format("YYYY-MM-DD"),H=[{id:1,title:"Team Standup",start:`${C} 09:00:00`,end:`${C} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${C} 10:00:00`,end:`${C} 11:30:00`,color:"green",resourceId:"tokyo",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Client Call",start:`${j} 09:30:00`,end:`${j} 10:30:00`,color:"violet",resourceId:"paris",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:4,title:"Design Review",start:`${C} 13:00:00`,end:`${C} 14:00:00`,color:"orange",resourceId:"paris",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:5,title:"Workshop",start:`${V} 14:00:00`,end:`${V} 16:00:00`,color:"pink",resourceId:"new-york",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,u.useState)(H);return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},renderEvent:(e,t)=>(0,c.jsxs)(R.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(R.HoverCard.Target,{children:(0,c.jsx)(W.UnstyledButton,{...t})}),(0,c.jsx)(R.HoverCard.Dropdown,{children:(0,c.jsx)(I.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:I._eventDetailsCode,language:"tsx"},{fileName:"data.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(H,null,2)};`,language:"tsx"}]};e.i(27355);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente",resources:"Recursos"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,radius:"md"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      radius="md"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 10:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDateTime={\`\${today} 10:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"09:00:00",endTime:"17:00:00",intervalMinutes:30,startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 09:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
      intervalMinutes={30}
      startScrollDateTime={\`\${today} 09:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"00:00:00",endTime:"23:59:59",withCurrentTimeIndicator:!0,withCurrentTimeBubble:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:59"
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0,withWeekendDays:!0,weekdayFormat:"dddd D"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      firstDayOfWeek={0}
      withWeekendDays
      weekdayFormat="dddd D"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",renderWeekLabel:({weekStart:e,weekEnd:t})=>`Week of ${(0,r.default)(e).format("MMM D")} – ${(0,r.default)(t).format("MMM D, YYYY")}`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderWeekLabel={({ weekStart, weekEnd }) =>
        \`Week of \${dayjs(weekStart).format('MMM D')} – \${dayjs(weekEnd).format('MMM D, YYYY')}\`
      }
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},G=(0,r.default)().format("YYYY-MM-DD"),U=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],K=[{id:1,title:"Team Standup",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${G} 09:00:00`,end:`${G} 10:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Code Review",start:`${G} 09:30:00`,end:`${G} 10:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"1:1 Meeting",start:`${G} 09:15:00`,end:`${G} 10:15:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Client Call",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"cyan",resourceId:"paris"},{id:6,title:"Design Review",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Architecture Review",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"red",resourceId:"paris"}],X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:U,events:K,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${G} 08:00:00`,maxEventsPerTimeSlot:2})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

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
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      maxEventsPerTimeSlot={2}
    />
  );
}
`},Q=(0,r.default)().format("YYYY-MM-DD"),q=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],J=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,r.default)(Q).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,r.default)(Q).subtract(2,"day").format("YYYY-MM-DD")} 11:00:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${Q} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${Q} 14:00:00`,end:`${Q} 16:00:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${Q} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${Q} 11:00:00`,end:`${Q} 13:00:00`,color:"green",resourceId:"paris"}],Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(Q);return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:q,events:J,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${Q} 08:00:00`})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';

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
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`},ee=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"},{id:"overflow",label:"Overflow room"}],et=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york","london"]}],er={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:ee,events:d,groups:et,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleResourceGroup } from '@mantine/schedule';
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
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var eo=(0,t.__exportAll)({allDayEvents:()=>p,businessHours:()=>x,currentTimeIndicator:()=>z,dragDrop:()=>Y,eventForm:()=>S,eventResize:()=>w,firstDayOfWeek:()=>_,localization:()=>A,maxEventsPerTimeSlot:()=>X,radius:()=>N,recurringEvents:()=>Z,renderEvent:()=>L,renderResourceLabel:()=>$,renderWeekLabel:()=>F,resourceGroups:()=>er,scrollAreaProps:()=>P,startScrollDateTime:()=>B,staticMode:()=>M,timeRange:()=>O,usage:()=>f,withoutWeekendDays:()=>T});e.s(["ResourcesWeekViewDemos",0,eo],259072)}]);