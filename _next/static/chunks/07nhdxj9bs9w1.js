(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,499083,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(918006),n=e.i(625712),i=e.i(900513),l=e.i(688785),d=e.i(664397),c=e.i(969610),u=e.i(575148),m=e.i(792930),v=e.i(505696),f=e.i(420924),h=e.i(640542),p=e.i(176304),w=e.i(461304),g=e.i(783261),D=e.i(376879),y=e.i(201867),S=e.i(891343),x=e.i(67312),k=e.i(966696),b=e.i(612148),T=e.i(343355),E=e.i(367752),M=e.i(898770),I=e.i(657068),V=e.i(922552),Y=e.i(539517),R=e.i(578373),C=e.i(494834),$=e.i(232471),j=e.i(284629),W=e.i(391398);function P({resource:e,resourceIndex:r,weekdays:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:l,businessHours:d,withEventsDragAndDrop:c,onRowSlotsDragOver:u,onRowSlotsDragLeave:m,onRowSlotsDrop:f,onSlotClick:h,dropTargetSlotIndex:p,mode:w,slotsRef:g,firstSlotIndex:D,onSlotKeyDown:y,withDragSlotSelect:S,onSlotPointerDown:x,isSlotDragSelected:k,rowSlotsContainerRef:b,renderResourceLabel:T,renderGroupLabel:E,scrolledX:M,groupInfo:I,allDayCount:V}){let Y=String(e.id),R=o.flatMap((o,n)=>a.map((u,m)=>{let f=n*a.length+m,b=p===f,T=D?.resourceIndex===r&&D?.slotIndex===f,E=k?.(f,Y)||!1;return(0,W.jsx)(j.UnstyledButton,{ref:e=>{if(!g?.current)return;g.current[r]||(g.current[r]=[]);let t=g.current[r];if(e)t[f]=e;else for(delete t[f];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesWeekViewRowSlot"),mod:{"hour-start":u.isHourStart,...(0,v.getBusinessHoursMod)({time:u.startTime,businessHours:d,highlightBusinessHours:l}),"drop-target":b,"drag-selected":E,static:"static"===w},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${u.startTime} - ${u.endTime}`,tabIndex:"static"===w?-1:T?0:-1,"data-drag-slot-index":S&&"static"!==w?f:void 0,"data-drag-slot-group":S&&"static"!==w?Y:void 0,onKeyDown:e=>{y&&y(e,r,f)},onPointerDown:S&&"static"!==w?e=>x?.(e,f,Y):void 0,onClick:"static"!==w&&h?t=>h(e.id,o,u.startTime,t):void 0,onDragOver:c&&"static"!==w?e=>e.preventDefault():void 0},`${o}-${u.startTime}`)})),C=I?.position==="first"||I?.position==="only",O=void 0!==I?null!==I?(0,W.jsx)($.Box,{...s("resourcesWeekViewGroupColumn"),mod:{"scrolled-x":M,"group-position":I.position},children:C&&(0,W.jsx)("span",{style:I.count>1?{transform:`translateY(calc((${I.count-1} * (var(--resources-week-view-row-height) + 1px)) / 2))`}:void 0,children:E?E(I.group):I.group.label})}):(0,W.jsx)($.Box,{...s("resourcesWeekViewGroupColumnEmpty"),mod:{"scrolled-x":M}}):null;return(0,W.jsxs)($.Box,{...s("resourcesWeekViewRow"),children:[O,(0,W.jsx)($.Box,{...s("resourcesWeekViewResourceLabel"),mod:{"scrolled-x":M,"has-groups":void 0!==I},children:T?T(e):e.label}),(0,W.jsxs)($.Box,{ref:b,...s("resourcesWeekViewRowSlots",{style:V?{minHeight:`max(var(--resources-week-view-row-height), calc(${V} * (var(--resources-week-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==w?t=>u?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==w?m:void 0,onDrop:c&&"static"!==w?t=>f?.(t,e.id,r):void 0,children:[n,R]})]})}var O={resourcesWeekView:"m_ed4c47cf",resourcesWeekViewRoot:"m_5b5cbd51",resourcesWeekViewScrollArea:"m_b88ea29",resourcesWeekViewInner:"m_fbb9fc7",resourcesWeekViewHeaderRows:"m_7d7bb735",resourcesWeekViewCorner:"m_dd8b4f04",resourcesWeekViewHeaderContent:"m_85f2b19d",resourcesWeekViewDayLabelsRow:"m_cde0b68e",resourcesWeekViewDayLabel:"m_354e59a7",resourcesWeekViewTimeLabelsRow:"m_b7f0617f",resourcesWeekViewTimeLabel:"m_a6832518",resourcesWeekViewRow:"m_9fd9b38b",resourcesWeekViewResourceLabel:"m_9c6373f7",resourcesWeekViewGroupColumn:"m_fdcb5366",resourcesWeekViewGroupColumnEmpty:"m_3d5e7187",resourcesWeekViewRowSlots:"m_c534316a",resourcesWeekViewRowSlot:"m_ed965429",resourcesWeekViewBackgroundEvent:"m_3c19323d",resourcesWeekViewAllDayEvent:"m_682c45d0",resourcesWeekViewResizeHandle:"m_30c8fd6b",resourcesWeekViewEventWrapper:"m_2d13c608",resourcesWeekViewCurrentTimeIndicator:"m_6f70bf38",resourcesWeekViewCurrentTimeIndicatorLine:"m_be32874c",resourcesWeekViewCurrentTimeIndicatorThumb:"m_88ec57e",resourcesWeekViewCurrentTimeIndicatorTimeBubble:"m_9ff3db11"},_=e.i(19300),B=e.i(481178),L=e.i(275519),z=e.i(433512),H=e.i(779177),A=e.i(951254),N=e.i(44091),F=e.i(62904),G=e.i(391466),U=e.i(822933),K=e.i(417241),J=e.i(332977),q=e.i(191788),Q=e.i(205693);let X={__staticSelector:"ResourcesWeekView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,minEventSize:1,withHeader:!0,weekLabelFormat:"MMM DD",weekdayFormat:"ddd D",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withEventResize:!1,withDragSlotSelect:!1,withWeekendDays:!0,withCurrentTimeBubble:!0,highlightToday:!0,mode:"default",maxEventsPerTimeSlot:2},Z=(0,B.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesWeekView:{"--resources-week-view-radius":t?(0,z.getRadius)(t):void 0,"--resources-week-view-slot-width":(0,H.rem)(r),"--resources-week-view-row-height":(0,H.rem)(o),"--resources-week-view-group-label-width":(0,H.rem)(a)}})),ee=(0,L.factory)(e=>{let j=(0,N.useProps)("ResourcesWeekView",X,e),{classNames:B,className:L,style:z,styles:H,unstyled:ee,attributes:et,vars:er,startTime:eo,endTime:ea,date:es,onDateChange:en,resources:ei,intervalMinutes:el,minEventSize:ed,slotLabelFormat:ec,radius:eu,startScrollDateTime:em,scrollAreaProps:ev,locale:ef,withCurrentTimeIndicator:eh,withCurrentTimeBubble:ep,getCurrentTime:ew,__staticSelector:eg,withHeader:eD,onViewChange:ey,previousControlProps:eS,nextControlProps:ex,todayControlProps:ek,viewSelectProps:eb,weekLabelFormat:eT,renderWeekLabel:eE,events:eM,slotWidth:eI,rowHeight:eV,labels:eY,highlightBusinessHours:eR,businessHours:eC,renderEventBody:e$,renderEvent:ej,renderResourceLabel:eW,groups:eP,renderGroupLabel:eO,groupLabelWidth:e_,withEventsDragAndDrop:eB,onEventDrop:eL,canDragEvent:ez,onEventDragStart:eH,onEventDragEnd:eA,withEventResize:eN,onEventResize:eF,canResizeEvent:eG,onTimeSlotClick:eU,onEventClick:eK,withDragSlotSelect:eJ,onSlotDragEnd:eq,mode:eQ,onExternalEventDrop:eX,recurrenceExpansionLimit:eZ,maxEventsPerTimeSlot:e0,moreEventsProps:e1,firstDayOfWeek:e8,weekendDays:e3,withWeekendDays:e2,weekdayFormat:e4,highlightToday:e9,...e7}=j,e6=void 0!==e0?Math.max(1,e0):void 0,e5=(0,G.useStyles)({name:eg,classes:O,props:j,className:L,style:z,classNames:B,styles:H,unstyled:ee,vars:er,varsResolver:Z,attributes:et,rootSelector:"resourcesWeekView"}),{resolvedClassNames:te,resolvedStyles:tt}=(0,F.useResolvedStylesApi)({classNames:B,styles:H,props:j}),tr={classNames:te,styles:tt,attributes:et,__staticSelector:eg,radius:eu},to=(0,A.useMantineTheme)(),[ta,ts]=(0,q.useState)(!1),[tn,ti]=(0,q.useState)(!1),tl=(0,Q.useDatesContext)(),td=(0,o.getDayTimeIntervals)({startTime:eo,endTime:ea,intervalMinutes:el}),{orderedResources:tc,groupRanges:tu,resourceGroupMap:tm}=(0,q.useMemo)(()=>(0,f.getOrderedResources)(ei,eP),[ei,eP]),tv=tu.length>0,tf=(0,q.useMemo)(()=>(0,s.getWeekDays)({week:es,withWeekendDays:e2,weekendDays:tl.getWeekendDays(e3),firstDayOfWeek:tl.getFirstDayOfWeek(e8)}),[es,e2,e3,e8,tl]),th=td.length,tp=()=>ew?(0,C.default)(ew()):(0,C.default)(),tw=tp(),tg=tf.some(e=>(0,C.default)(e).isSame(tw,"day")),[,tD]=(0,q.useState)(0);(0,U.useInterval)(()=>tD(e=>e+1),6e4,{autoInvoke:!0});let ty=(0,l.getCurrentTimePosition)({startTime:eo,endTime:ea,intervalMinutes:el,now:tw}),tS=tf.findIndex(e=>(0,C.default)(e).isSame(tw,"day")),tx=(eh??tg)&&tS>=0&&(0,d.isInTimeRange)({date:tw.toDate(),startTime:eo,endTime:ea}),tk=ep?(0,r.formatDate)({locale:tl.getLocale(ef),date:tw,format:ec}):"",tb=(0,q.useCallback)((e,t)=>{if(!eX)return;let r=Math.floor(t.slotIndex/th),o=t.slotIndex%th,a=tf[r];a&&eX({dataTransfer:e.dataTransfer,dropDateTime:`${(0,C.default)(a).format("YYYY-MM-DD")} ${td[o].startTime}`,resourceId:t.resourceId})},[eX,td,tf,th]),tT=(0,q.useRef)(void 0),tE=(0,g.useDragDropHandlers)({enabled:eB,mode:eQ,onEventDrop:(0,q.useCallback)(e=>{eL?.({...e,resourceId:tT.current})},[eL]),canDragEvent:ez,onEventDragStart:eH,onEventDragEnd:eA,calculateDropTarget:(e,t)=>{tT.current=e.resourceId;let r=Math.floor(e.slotIndex/th),o=td[e.slotIndex%th].startTime;return(0,m.calculateDropTime)({draggedEvent:t,targetDate:tf[r]||tf[0],targetSlotTime:o,intervalMinutes:el})},onExternalDrop:eX?tb:void 0}),tM=(0,q.useMemo)(()=>(0,p.getGroupToResourceIdMap)(ei),[ei]),tI=(0,D.useSlotDragSelect)({enabled:eJ&&"static"!==eQ,onDragEnd:(e,t,r)=>{if(!eq)return;let o=Math.floor(e/th),a=e%th,s=Math.floor(t/th),n=t%th,i=tf[o],l=tf[s];i&&l&&eq({rangeStart:`${(0,C.default)(i).format("YYYY-MM-DD")} ${td[a].startTime}`,rangeEnd:`${(0,C.default)(l).format("YYYY-MM-DD")} ${td[n].endTime}`,resourceId:tM.get(r)??r})}}),tV=(0,T.useHorizontalEventResize)({enabled:eN,mode:eQ,startTime:eo,endTime:ea,intervalMinutes:el,onEventResize:eF,canResizeEvent:eG}),tY=(eB||!!eX)&&"static"!==eQ,tR=(e,t,r,o)=>{if(!eU)return;let a=td.findIndex(e=>e.startTime===r);if(-1===a)return;let s=td[a],n=(0,C.default)(t).format("YYYY-MM-DD");eU({slotStart:`${n} ${s.startTime}`,slotEnd:`${n} ${s.endTime}`,nativeEvent:o,resourceId:e})},tC=(0,q.useMemo)(()=>(function({events:e,resources:t,weekdays:r,startTime:o,endTime:a,intervalMinutes:s,expansionLimit:n}){let i=(0,I.expandRecurringEvents)({events:e,rangeStart:(0,C.default)(r[0]).startOf("day").toDate(),rangeEnd:(0,C.default)(r[r.length-1]).endOf("day").toDate(),expansionLimit:n});if(i){let e=new Set;for(let t of i){if(e.has(t.id))throw Error(`[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${t.id}`);e.add(t.id)}}let l={},d=new Set,c=e=>"background"!==e.display&&(0,M.isMultidayEvent)(e);for(let e of r){let r=i?.filter(t=>{if(d.has(t.id)||c(t))return!1;let r=(0,C.default)(t.start),o=(0,C.default)(e).startOf("day");return r.isSame(o,"day")?(d.add(t.id),!0):!!("background"===t.display&&r.isBefore((0,C.default)(e).endOf("day"))&&(0,C.default)(t.end).isAfter(o))});l[e]=(0,R.getResourcesDayViewEvents)({events:r,resources:t,date:e,startTime:o,endTime:a,intervalMinutes:s})}let u={};for(let e of t)u[e.id]=[];if(r.forEach((e,r)=>{for(let o of t)for(let t of l[e].allDayEvents[o.id]??[])u[o.id].push({event:t,startDayIndex:r,endDayIndex:r,row:0})}),i)for(let e of i){if(!c(e)||void 0===e.resourceId||!(e.resourceId in u))continue;let t=(0,V.calculateEventDays)({event:e,weekDays:r,actualEndDate:(0,Y.getEventEndDate)(e)});0!==t.length&&u[e.resourceId].push({event:e,startDayIndex:r.indexOf(t[0]),endDayIndex:r.indexOf(t[t.length-1]),row:0})}for(let e of t)!function(e){let t=e.map((e,t)=>({bar:e,index:t})).sort((e,t)=>e.bar.startDayIndex-t.bar.startDayIndex||e.bar.endDayIndex-t.bar.endDayIndex||e.index-t.index),r=[];for(let{bar:e}of t){let t=0;for(;t<r.length&&r[t]>=e.startDayIndex;)t+=1;r[t]=e.endDayIndex,e.row=t}}(u[e.id]);return{byDay:l,allDayBars:u}})({events:eM,resources:ei,weekdays:tf,startTime:eo,endTime:ea,intervalMinutes:el,expansionLimit:eZ}),[eM,ei,tf,eo,ea,el,eZ]),t$=tf.map(e=>{let t=(0,C.default)(e),o=t.isSame(tw,"day")&&e9,a=tl.getWeekendDays(e3).includes(t.day());return(0,q.createElement)($.Box,{...e5("resourcesWeekViewDayLabel"),key:e,mod:{today:o,weekend:a},style:{width:`calc(var(--resources-week-view-slot-width) * ${th})`}},(0,r.formatDate)({date:t,locale:tl.getLocale(ef),format:e4}))}),tj=tf.flatMap(e=>td.map(t=>{let o=(0,r.formatDate)({date:(0,C.default)(`${(0,C.default)(e).format("YYYY-MM-DD")} ${t.startTime}`),locale:tl.getLocale(ef),format:ec});return(0,q.createElement)($.Box,{...e5("resourcesWeekViewTimeLabel"),key:`${e}-${t.startTime}`,mod:{"hour-start":t.isHourStart,...(0,v.getBusinessHoursMod)({time:t.startTime,businessHours:eC,highlightBusinessHours:eR})}},o)})),tW=(0,q.useRef)([]),tP=(0,q.useRef)([]),tO=(0,q.useRef)(null),t_=(0,J.useMergedRef)(tO,ev?.viewportRef),tB={resourceIndex:0,slotIndex:0};(0,K.useIsomorphicEffect)(()=>{if(!em||!tO.current)return;let e=(0,C.default)(em),t=e.format("YYYY-MM-DD 00:00:00"),r=e.format("HH:mm:ss"),o=tf.indexOf(t);if(o<0)return;let a=td.findIndex(e=>e.startTime>=r);if(a<0)return;let s=o*th+a,n=tW.current[0];if(!n||0===n.length)return;let i=n[s];if(!i)return;let l=i.getBoundingClientRect(),d=tO.current.getBoundingClientRect(),c=tO.current.querySelector(`.${O.resourcesWeekViewCorner}`),u=c?c.getBoundingClientRect().width:0;tO.current.scrollTo({left:l.left-d.left-u,top:0})},[]);let tL=(0,q.useCallback)((e,t)=>(0,w.getIndexFromDragPoint)(tW.current[t]??[],e.clientX),[]),tz=(e,t,r)=>{(0,h.handleResourcesGridKeyDown)({controlsRef:tW,resourceIndex:t,slotIndex:r,event:e})},tH=100/tf.length,tA=tc.map((e,t)=>{let r=[],o=tC.allDayBars[e.id]??[],a=o.reduce((e,t)=>Math.max(e,t.row+1),0);tf.forEach((o,a)=>{let s=tC.byDay[o];if(!s)return;let n=a/tf.length*100;for(let t of[...s.backgroundTimedEvents[e.id]||[],...s.backgroundAllDayEvents[e.id]||[]]){let e=to.variantColorResolver({color:t.color||to.primaryColor,theme:to,variant:"light",autoContrast:!0}),a="function"==typeof e$?e$(t):t.title,s={key:`bg-${t.id}-${o}`,...e5("resourcesWeekViewBackgroundEvent",{style:{left:`${n+t.position.top/100*tH}%`,width:`${t.position.height/100*tH}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":e.background,"--bg-event-color":e.color},children:a};"function"==typeof ej?r.push(ej(t,s)):r.push((0,W.jsx)($.Box,{...s}))}let i=(s.regularEvents[e.id]||[]).filter(e=>!(0,c.isAllDayEvent)({event:e,date:o}));for(let e of void 0!==e6?i.filter(e=>e.position.column<e6):i){let s=tE.isDraggableEvent(e),i=tV.isResizableEvent(e),l=tV.getResizePosition(e.id),d=null!==l,c=d&&tV.resizingEdge?tV.resizingEdge:null,m=l?l.left:e.position.top,v=l?l.width:e.position.height,f=n+m/100*tH,h=v/100*tH,p=i?to.variantColorResolver({color:e.color||to.primaryColor,theme:to,variant:e.variant||"light",autoContrast:!0}):null,w=void 0!==e6&&e.position.overlaps>e6,g=(0,C.default)(o).format("YYYY-MM-DD");r.push((0,W.jsxs)($.Box,{...e5("resourcesWeekViewEventWrapper"),__vars:p?{"--event-color":p.color}:void 0,"data-resizing":d||void 0,style:{...(0,u.getTimeAxisEventStyle)({start:f,span:h,minSize:ed}),top:w?`calc((100% - 22px) * ${e.position.column} / ${e6})`:`${e.position.offset}%`,height:w?`calc((100% - 22px) / ${e6})`:`${e.position.width}%`},children:[(0,W.jsx)(S.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:s,isResizing:d,renderEventBody:e$,renderEvent:ej,radius:eu,mode:eQ,onClick:eK?t=>{tV.wasResizing()||eK(e,t)}:void 0,style:{width:"100%",height:"100%",padding:0}}),i&&"static"!==eQ&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("div",{...e5("resourcesWeekViewResizeHandle"),"data-edge":"start","data-active":"start"===c||void 0,onPointerDown:r=>{let o=tP.current[t];o&&tV.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:g,dayIndex:a,dayCount:tf.length,pointerEvent:r})}}),(0,W.jsx)("div",{...e5("resourcesWeekViewResizeHandle"),"data-edge":"end","data-active":"end"===c||void 0,onPointerDown:r=>{let o=tP.current[t];o&&tV.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:g,dayIndex:a,dayCount:tf.length,pointerEvent:r})}})]})]},`${e.id}-${o}`))}if(void 0!==e6)for(let t of(0,E.getOverlapClusters)(i)){let a=t.filter(e=>e.position.column>=e6).length;if(a>0&&"static"!==eQ){let s=n+Math.min(...t.map(e=>e.position.top))/100*tH,i=n+Math.max(...t.map(e=>e.position.top+e.position.height))/100*tH;r.push((0,W.jsx)(x.MoreEvents,{events:t,moreEventsCount:a,mode:eQ,labels:eY,renderEventBody:e$,renderEvent:ej,onEventClick:eK,style:{position:"absolute",left:`calc(${s}% + 1px)`,width:`calc(${i-s}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...tr,...e1},`more-${e.id}-${o}-${t[0].id}`))}}});let s=tv?"calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)":"calc(var(--resources-week-view-resource-label-width) + 5px)";return o.forEach(e=>{let t=e.startDayIndex*tH,o=(e.endDayIndex-e.startDayIndex+1)*tH;r.push((0,W.jsx)("div",{...e5("resourcesWeekViewAllDayEvent",{style:{left:`calc(${t}% + 1px)`,width:`calc(${o}% - 2px)`,top:`calc(${e.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`}}),children:(0,W.jsx)(S.ScheduleEvent,{event:e.event,autoSize:!0,nowrap:!0,renderEventBody:e=>(0,W.jsx)("span",{style:{position:"sticky",insetInlineStart:s,display:"inline-block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},children:e$?e$(e):e.title}),renderEvent:ej,radius:eu,mode:eQ,onClick:eK?t=>eK(e.event,t):void 0,style:{width:"100%",height:"100%",overflow:"visible"},styles:{eventInner:{display:"block",overflow:"visible",lineHeight:"var(--resources-week-view-all-day-height)"}}})},`all-day-${e.event.id}-${e.startDayIndex}`))}),(0,W.jsx)(P,{resource:e,resourceIndex:t,weekdays:tf,slots:td,getStyles:e5,labels:eY,highlightBusinessHours:eR,businessHours:eC,withEventsDragAndDrop:tY,mode:eQ,slotsRef:tW,firstSlotIndex:tB,onSlotKeyDown:tz,onSlotClick:tR,onRowSlotsDragOver:(e,t,r)=>{let o=tL(e,r);null!==o&&tE.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:tE.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tL(e,r);null!==o&&tE.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:tE.dropTarget?.resourceId===e.id?tE.dropTarget.slotIndex:void 0,withDragSlotSelect:eJ,onSlotPointerDown:tI.handleSlotPointerDown,isSlotDragSelected:tI.isSlotSelected,rowSlotsContainerRef:e=>{tP.current[t]=e},renderResourceLabel:eW,renderGroupLabel:eO,scrolledX:tn,groupInfo:tv?tm[t]:void 0,allDayCount:a,children:r},e.id)}),tN=(0,b.getWeekLabel)({weekdays:tf,locale:tl.getLocale(ef),weekLabelFormat:eT,renderWeekLabel:eE}),tF=tS>=0?(tS+ty/100)/tf.length*100:0,tG=(0,W.jsxs)($.Box,{...e5("resourcesWeekView"),mod:{static:"static"===eQ,"slot-dragging":tI.isDragging,resizing:tV.isResizing,"event-interaction":tV.isResizing||tE.dragContextValue.isDragging},...e7,children:[eD&&(0,W.jsx)(k.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>(0,i.previousWeek)(es,tl.getFirstDayOfWeek(e8)),next:()=>(0,n.nextWeek)(es,tl.getFirstDayOfWeek(e8)),today:()=>(0,a.toDateString)(tp())},control:{miw:180,title:tN},labels:eY,onDateChange:en,onViewChange:ey,previousControlProps:eS,nextControlProps:ex,todayControlProps:ek,viewSelectProps:{views:["day","week","month"],...eb},stylesApiProps:tr}),(0,W.jsx)($.Box,{...e5("resourcesWeekViewRoot"),children:(0,W.jsx)(_.ScrollArea,{scrollbarSize:4,...ev,...e5("resourcesWeekViewScrollArea",{className:ev?.className,style:ev?.style}),onScrollPositionChange:e=>{ev?.onScrollPositionChange?.(e),ts(0!==e.y),ti(0!==e.x)},viewportRef:t_,children:(0,W.jsxs)("div",{...e5("resourcesWeekViewInner"),children:[(0,W.jsxs)("div",{...e5("resourcesWeekViewHeaderRows"),children:[(0,q.createElement)("div",{...e5("resourcesWeekViewCorner"),key:"corner",style:tv?{flexBasis:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))",minWidth:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eY)),(0,W.jsxs)("div",{...e5("resourcesWeekViewHeaderContent"),children:[(0,W.jsx)("div",{...e5("resourcesWeekViewDayLabelsRow"),children:t$}),(0,W.jsx)($.Box,{...e5("resourcesWeekViewTimeLabelsRow"),mod:{scrolled:ta},children:tj})]})]}),tA,tx&&(0,W.jsxs)($.Box,{...e5("resourcesWeekViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":tv?`calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${tF} / 100)`:`calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${tF} / 100)`,"--_time-bubble-width":tk?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ep&&(0,W.jsx)("div",{...e5("resourcesWeekViewCurrentTimeIndicatorTimeBubble"),children:tk}),!ep&&(0,W.jsx)("div",{...e5("resourcesWeekViewCurrentTimeIndicatorThumb")}),(0,W.jsx)("div",{...e5("resourcesWeekViewCurrentTimeIndicatorLine")})]})]})})})]}),tU=(0,q.useMemo)(()=>tE.dragContextValue,[tE.dragContextValue]);return eB?(0,W.jsx)(y.DragContext.Provider,{value:tU,children:tG}):tG});ee.displayName="@mantine/schedule/ResourcesWeekView",ee.classes=O,ee.varsResolver=Z,e.s(["ResourcesWeekView",0,ee],499083)},272013,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(4332),a=e.i(276995),s=e.i(657068),n=e.i(420924),i=e.i(176304),l=e.i(461304),d=e.i(783261),c=e.i(376879),u=e.i(201867),m=e.i(891343),v=e.i(67312),f=e.i(966696),h={resourcesMonthView:"m_652b3acd",resourcesMonthViewRoot:"m_146e014f",resourcesMonthViewScrollArea:"m_b1cab7a7",resourcesMonthViewInner:"m_78d2db89",resourcesMonthViewDayLabelsRow:"m_eae51c8c",resourcesMonthViewCorner:"m_975b8b82",resourcesMonthViewDayLabel:"m_bc016ea5",resourcesMonthViewDayLabelWeekday:"m_52a1c4c3",resourcesMonthViewDayLabelNumber:"m_88d8e64e",resourcesMonthViewRow:"m_21b0f7cd",resourcesMonthViewResourceLabel:"m_1febcdb9",resourcesMonthViewGroupColumn:"m_1fc335a8",resourcesMonthViewGroupColumnEmpty:"m_d5a3a885",resourcesMonthViewRowSlots:"m_4be74668",resourcesMonthViewCell:"m_146709cf"},p=e.i(494834),w=e.i(232471),g=e.i(19300),D=e.i(284629),y=e.i(481178),S=e.i(275519),x=e.i(433512),k=e.i(779177),b=e.i(44091),T=e.i(62904),E=e.i(391466),M=e.i(417241),I=e.i(332977),V=e.i(191788),Y=e.i(205693),R=e.i(391398);let C=(0,y.createVarsResolver)((e,{radius:t,dayWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesMonthView:{"--resources-month-view-radius":t?(0,x.getRadius)(t):void 0,"--resources-month-view-day-width":(0,k.rem)(r),"--resources-month-view-row-height":(0,k.rem)(o),"--resources-month-view-group-label-width":(0,k.rem)(a)}})),$={__staticSelector:"ResourcesMonthView",highlightToday:!0,withHeader:!0,weekdayFormat:"ddd",withWeekendDays:!0,withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"};function j(e,t){let r=(0,p.default)(e.start),o=(0,p.default)(t.start),a=(0,p.default)(e.end).startOf("day").diff(r.startOf("day"),"day"),s=(0,p.default)(t.end).startOf("day").diff(o.startOf("day"),"day");return a!==s?s-a:r.valueOf()-o.valueOf()}function W(e){return(0,p.default)(e.end).startOf("day").isAfter((0,p.default)(e.start).startOf("day"))}let P=(0,S.factory)(e=>{let y=(0,b.useProps)("ResourcesMonthView",$,e),{classNames:S,className:x,style:k,styles:P,unstyled:O,attributes:_,vars:B,mod:L,date:z,onDateChange:H,resources:A,locale:N,weekdayFormat:F,weekendDays:G,withWeekendDays:U,startScrollDate:K,__staticSelector:J,onDayClick:q,highlightToday:Q,radius:X,withHeader:Z,monthYearSelectProps:ee,onViewChange:et,todayControlProps:er,nextControlProps:eo,previousControlProps:ea,viewSelectProps:es,events:en,dayWidth:ei,rowHeight:el,renderResourceLabel:ed,groups:ec,renderGroupLabel:eu,groupLabelWidth:em,renderEventBody:ev,renderEvent:ef,withEventsDragAndDrop:eh,onEventDrop:ep,canDragEvent:ew,onEventDragStart:eg,onEventDragEnd:eD,onEventClick:ey,withDragSlotSelect:eS,onSlotDragEnd:ex,labels:ek,mode:eb,scrollAreaProps:eT,onExternalEventDrop:eE,maxEventsPerTimeSlot:eM,moreEventsProps:eI,recurrenceExpansionLimit:eV,...eY}=y,eR=Math.min(10,Math.max(1,eM??2)),eC=(0,E.useStyles)({name:J,classes:h,props:y,className:x,style:k,classNames:S,styles:P,unstyled:O,attributes:_,vars:B,varsResolver:C,rootSelector:"resourcesMonthView"}),{resolvedClassNames:e$,resolvedStyles:ej}=(0,T.useResolvedStylesApi)({classNames:S,styles:P,props:y}),eW={classNames:e$,styles:ej,attributes:_,__staticSelector:J,radius:X},eP=(0,Y.useDatesContext)(),eO=eP.getWeekendDays(G),{orderedResources:e_,groupRanges:eB,resourceGroupMap:eL}=(0,V.useMemo)(()=>(0,n.getOrderedResources)(A,ec),[A,ec]),ez=eB.length>0,eH=(0,V.useMemo)(()=>{let e=(0,p.default)(z).startOf("month"),t=e.endOf("month").date(),r=eP.getWeekendDays(G),o=[];for(let a=1;a<=t;a++){let t=e.date(a);!U&&r.includes(t.day())||o.push(t.format("YYYY-MM-DD"))}return o},[z,U,G,eP]),eA=(0,V.useRef)(null),eN=(0,I.useMergedRef)(eA,eT?.viewportRef),eF=(0,V.useRef)([]),eG=(0,V.useRef)(null),eU=(0,V.useCallback)(e=>{if(!eA.current)return;let t=eH.indexOf(e);if(t<0)return;let r=eF.current[t];if(!r)return;let o=r.getBoundingClientRect(),a=eA.current.getBoundingClientRect(),s=eG.current?.getBoundingClientRect().width??0;eA.current.scrollTo({left:o.left-a.left-s,top:0})},[eH]);(0,M.useIsomorphicEffect)(()=>{K&&eU(K)},[]);let eK=(0,V.useMemo)(()=>(0,s.expandRecurringEvents)({events:en,rangeStart:(0,p.default)(z).startOf("month").toDate(),rangeEnd:(0,p.default)(z).endOf("month").toDate(),expansionLimit:eV}),[en,z,eV]),{eventsByResourceAndDay:eJ,eventLayoutByResource:eq}=(0,V.useMemo)(()=>{let e={};for(let t of A)for(let r of(e[t.id]={},eH))e[t.id][r]=[];if(eK)for(let t of eK){if(void 0===t.resourceId||!(t.resourceId in e))continue;let r=(0,p.default)(t.start),o=(0,p.default)(t.end);for(let a of eH){let s=(0,p.default)(a).startOf("day"),n=(0,p.default)(a).endOf("day");r.isBefore(n)&&o.isAfter(s)&&e[t.resourceId][a].push(t)}}let t={},r=(0,p.default)(eH[0]).startOf("day"),o=(0,p.default)(eH[eH.length-1]).add(1,"day").startOf("day");for(let a of A){let s={},n=new Map,i=new Map,l=new Map;eH.forEach((t,r)=>{let o=e[a.id][t];for(let e of(o.sort(j),o)){let t=l.get(e.id);t?t.days.push(r):l.set(e.id,{event:e,days:[r]})}let d=new Set,c=[],u=0;for(let e of o){let t=n.get(e.id);if((void 0===t||t>=eR||d.has(t))&&(t=function(e,t){for(let r=0;r<t;r+=1)if(!e.has(r))return r;return null}(d,eR)),null===t){u+=1;continue}d.add(t),c.push({event:e,row:t}),i.has(e.id)||i.set(e.id,new Map),i.get(e.id).set(r,t),n.set(e.id,t)}s[t]={visible:c,hiddenCount:u}});let d=[];for(let{event:e,days:t}of l.values()){if(!W(e))continue;let a=t[0],n=t[t.length-1],l=i.get(e.id),c=(0,p.default)(e.start).isBefore(r),u=(0,p.default)(e.end).isAfter(o),m=null,v=()=>{if(!m)return;let t=m.startDayIndex>a,r=m.endDayIndex<n,o=!t&&c,i=!r&&u,l=!1;for(let e=m.startDayIndex;e<=m.endDayIndex;e+=1)if((s[eH[e]]?.hiddenCount??0)>0){l=!0;break}d.push({event:e,startDayIndex:m.startDayIndex,endDayIndex:m.endDayIndex,row:m.row,clipStart:t,clipEnd:r,hanging:o&&i?"both":o?"start":i?"end":"none",hiddenInSpan:l}),m=null};for(let e=a;e<=n;e+=1){let t=l?.get(e);if(void 0===t){v();continue}m&&m.row===t&&m.endDayIndex===e-1?m.endDayIndex=e:(v(),m={startDayIndex:e,endDayIndex:e,row:t})}v()}t[a.id]={byDay:s,segments:d}}return{eventsByResourceAndDay:e,eventLayoutByResource:t}},[A,eH,eK,eR]),eQ=(0,V.useCallback)((e,t)=>{eE&&eE({dataTransfer:e.dataTransfer,dropDateTime:`${(0,p.default)(t.day).format("YYYY-MM-DD")} 00:00:00`,resourceId:t.resourceId})},[eE]),eX=(0,d.useDragDropHandlers)({enabled:eh,mode:eb,onEventDrop:e=>{ep?.({...e,resourceId:eZ.current})},canDragEvent:ew,onEventDragStart:eg,onEventDragEnd:eD,calculateDropTarget:(e,t)=>(eZ.current=e.resourceId,(0,a.calculateMonthDropDate)({draggedEvent:t,targetDay:e.day})),onExternalDrop:eE?eQ:void 0}),eZ=(0,V.useRef)(void 0),e0=(eh||!!eE)&&"static"!==eb,e1=(0,V.useMemo)(()=>(0,i.getGroupToResourceIdMap)(A),[A]),e8=(0,c.useSlotDragSelect)({enabled:eS&&"static"!==eb,onDragEnd:(e,t,r)=>{if(!ex)return;let o=eH[e],a=eH[t];o&&a&&ex({rangeStart:(0,p.default)(o).startOf("day").format("YYYY-MM-DD HH:mm:ss"),rangeEnd:(0,p.default)(a).endOf("day").format("YYYY-MM-DD HH:mm:ss"),resourceId:e1.get(r)??r})}}),e3=eH.map((e,t)=>{let o=(0,p.default)(e),a=eO.includes(o.day()),s=o.isSame((0,p.default)(),"day")&&Q;return(0,V.createElement)(w.Box,{...eC("resourcesMonthViewDayLabel"),key:e,mod:{weekend:a,today:s},ref:e=>{eF.current[t]=e}},(0,R.jsx)("span",{...eC("resourcesMonthViewDayLabelWeekday"),children:(0,r.formatDate)({date:o,locale:eP.getLocale(N),format:F})}),(0,R.jsx)("span",{...eC("resourcesMonthViewDayLabelNumber"),children:o.date()}))}),e2=(0,V.useRef)([]),e4=(0,V.useCallback)((e,t)=>(0,l.getIndexFromDragPoint)(e2.current[t]??[],e.clientX),[]),e9=100/eR,e7=e_.map((e,t)=>{e2.current[t]||(e2.current[t]=[]);let r=String(e.id),o=eX.dropTarget,a=eH.length,s=[],n=[],i=eH.map((i,l)=>{let d=(0,p.default)(i),c=eP.getWeekendDays(G).includes(d.day()),u=null!==o&&"object"==typeof o&&"day"in o&&o.day===i&&o.resourceId===e.id,f=e8.isSlotSelected(l,r),h=eJ[e.id]?.[i]||[],w=eq[e.id]?.byDay[i],g=w?.visible??[],y=w?.hiddenCount??0,S=0===t&&0===l,x=l/a*100,k=100/a,b=y>0&&"static"!==eb;return g.forEach(({event:e,row:t})=>{if(W(e))return;let r=eX.isDraggableEvent(e),o=b?`calc((100% - 18px) * ${t} / ${eR} + 1px)`:`calc(${t*e9}% + 1px)`,a=b?`calc((100% - 18px) / ${eR} - 2px)`:`calc(${e9}% - 2px)`;s.push((0,R.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,size:"sm",draggable:r,renderEventBody:ev,renderEvent:ef,radius:X,mode:eb,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:o,left:`calc(${x}% + 1px)`,width:`calc(${k}% - 2px)`,height:a,zIndex:3}},`${e.id}-${i}`))}),y>0&&"static"!==eb&&n.push((0,R.jsx)(v.MoreEvents,{events:h,moreEventsCount:y,mode:eb,labels:ek,renderEventBody:ev,renderEvent:ef,onEventClick:ey,style:{position:"absolute",bottom:1,left:`calc(${x}% + 1px)`,width:`calc(${k}% - 2px)`,height:18,zIndex:4},...eW,...eI},`more-${e.id}-${i}`)),(0,R.jsx)(D.UnstyledButton,{ref:e=>{e&&(e2.current[t]||(e2.current[t]=[]),e2.current[t][l]=e)},...eC("resourcesMonthViewCell"),"aria-label":`${e.label} ${d.format("MMMM D, YYYY")}`,"data-drag-slot-index":eS&&"static"!==eb?l:void 0,"data-drag-slot-group":eS&&"static"!==eb?r:void 0,mod:{weekend:c,"drop-target":u,"drag-selected":f,static:"static"===eb},tabIndex:"static"===eb?-1:S?0:-1,onClick:"static"===eb?void 0:t=>q?.({date:i,nativeEvent:t,resourceId:e.id}),onKeyDown:"static"===eb?void 0:e=>((e,t,r)=>{let o=e.key,a=t,s=r;if("ArrowRight"===o)s=Math.min(r+1,eH.length-1);else if("ArrowLeft"===o)s=Math.max(r-1,0);else if("ArrowDown"===o)a=Math.min(t+1,A.length-1);else{if("ArrowUp"!==o)return;a=Math.max(t-1,0)}e.preventDefault(),e2.current[a]?.[s]?.focus()})(e,t,l),onPointerDown:eS&&"static"!==eb?e=>e8.handleSlotPointerDown(e,l,r):void 0,onDragOver:e0?e=>e.preventDefault():void 0},i)});(eq[e.id]?.segments??[]).forEach(e=>{let t=eX.isDraggableEvent(e.event),r=e.startDayIndex/a*100,o=(e.endDayIndex-e.startDayIndex+1)/a*100,n=e.hiddenInSpan&&"static"!==eb,i=n?`calc((100% - 18px) * ${e.row} / ${eR} + 1px)`:`calc(${e.row*e9}% + 1px)`,l=n?`calc((100% - 18px) / ${eR} - 2px)`:`calc(${e9}% - 2px)`;s.push((0,R.jsx)(m.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,size:"sm",hanging:e.hanging,draggable:t,renderEventBody:ev,renderEvent:ef,radius:X,mode:eb,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ey?t=>ey(e.event,t):void 0,style:{position:"absolute",top:i,left:`calc(${r}% + 1px)`,width:`calc(${o}% - 2px)`,height:l,zIndex:3}},`${e.event.id}-segment-${e.startDayIndex}`))});let l=ez?eL[t]:void 0,d=l?.position==="first"||l?.position==="only",c=void 0!==l?null!==l?(0,R.jsx)(w.Box,{...eC("resourcesMonthViewGroupColumn"),mod:{"group-position":l.position},children:d&&(0,R.jsx)("span",{style:l.count>1?{transform:`translateY(calc((${l.count-1} * (var(--resources-month-view-row-height) + 1px)) / 2))`}:void 0,children:eu?eu(l.group):l.group.label})}):(0,R.jsx)(w.Box,{...eC("resourcesMonthViewGroupColumnEmpty")}):null;return(0,V.createElement)("div",{...eC("resourcesMonthViewRow"),key:e.id},c,(0,R.jsx)("div",{...eC("resourcesMonthViewResourceLabel"),"data-has-groups":ez||void 0,children:ed?ed(e):e.label}),(0,R.jsxs)("div",{...eC("resourcesMonthViewRowSlots"),onDragOver:e0?r=>{let o=e4(r,t);null!==o&&eH[o]&&eX.handleDragOver(r,{day:eH[o],resourceId:e.id})}:void 0,onDragLeave:e0?eX.handleDragLeave:void 0,onDrop:e0?r=>{let o=e4(r,t);null!==o&&eH[o]&&eX.handleDrop(r,{day:eH[o],resourceId:e.id})}:void 0,children:[s,n,i]}))}),e6=(0,R.jsxs)(w.Box,{mod:[{static:"static"===eb,"slot-dragging":e8.isDragging,"event-interaction":eX.dragContextValue.isDragging},L],...eC("resourcesMonthView"),...eY,children:[Z&&(0,R.jsx)(f.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,p.default)(z).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,p.default)(z).add(1,"month").startOf("month")),today:()=>(requestAnimationFrame(()=>{eU((0,p.default)().format("YYYY-MM-DD"))}),(0,o.toDateString)((0,p.default)()))},control:{monthYearSelect:{locale:N,yearValue:(0,p.default)(z).get("year"),monthValue:(0,p.default)(z).get("month"),onYearChange:e=>H?.((0,o.toDateString)((0,p.default)(z).set("year",e).startOf("month"))),onMonthChange:e=>H?.((0,o.toDateString)((0,p.default)(z).set("month",e).startOf("month"))),...ee}},labels:ek,onDateChange:H,onViewChange:et,previousControlProps:ea,nextControlProps:eo,todayControlProps:er,viewSelectProps:{views:["day","week","month"],...es},stylesApiProps:eW}),(0,R.jsx)(w.Box,{...eC("resourcesMonthViewRoot"),children:(0,R.jsx)(g.ScrollArea,{scrollbars:"x",scrollbarSize:4,...eT,...eC("resourcesMonthViewScrollArea",{className:eT?.className,style:eT?.style}),viewportRef:eN,children:(0,R.jsxs)("div",{...eC("resourcesMonthViewInner"),children:[(0,R.jsxs)("div",{...eC("resourcesMonthViewDayLabelsRow"),children:[(0,V.createElement)("div",{...eC("resourcesMonthViewCorner"),key:"corner",ref:eG,style:ez?{flexBasis:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))",minWidth:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ek)),e3]}),e7]})})})]});return eh?(0,R.jsx)(u.DragContext.Provider,{value:eX.dragContextValue,children:e6}):e6});P.displayName="@mantine/schedule/ResourcesMonthView",P.classes=h,P.varsResolver=C,e.s(["ResourcesMonthView",0,P],272013)},592781,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(5,"day").format("YYYY-MM-DD"),n=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],i=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${o} 09:30:00`,end:`${o} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${o} 11:00:00`,end:`${o} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${o} 10:00:00`,end:`${o} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${a} 15:00:00`,end:`${a} 16:00:00`,color:"grape",resourceId:"london"}],l="\nimport dayjs from 'dayjs';\nimport { ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\nconst nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n  { id: 'london', label: 'Meeting room: London' },\n];\n\nconst events = [\n  { id: 1, title: 'Team Standup', start: `${today} 09:00:00`, end: `${today} 09:30:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 4, title: 'Design Review', start: `${tomorrow} 13:00:00`, end: `${tomorrow} 14:00:00`, color: 'orange', resourceId: 'paris' },\n  { id: 5, title: '1:1 Meeting', start: `${today} 11:00:00`, end: `${today} 11:30:00`, color: 'cyan', resourceId: 'new-york' },\n  { id: 6, title: 'Workshop', start: `${nextWeek} 14:00:00`, end: `${nextWeek} 16:00:00`, color: 'pink', resourceId: 'new-york' },\n  { id: 7, title: 'Architecture Review', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'red', resourceId: 'london' },\n  { id: 8, title: 'Retrospective', start: `${tomorrow} 15:00:00`, end: `${tomorrow} 16:00:00`, color: 'grape', resourceId: 'london' },\n];\n";var d=e.i(191788),c=e.i(391398),u=e.i(613490),m=e.i(499083),v=e.i(272013),f={root:"m_428e1853"},h=e.i(232471),p=e.i(275519),w=e.i(44091),g=e.i(391466),D=e.i(579560);let y={defaultView:"day",mode:"default"},S=(0,p.factory)(e=>{let t=(0,w.useProps)("ResourcesSchedule",y,e),{classNames:r,className:o,style:a,styles:s,unstyled:n,vars:i,resources:l,date:d,defaultDate:p,onDateChange:S,view:x,defaultView:k,onViewChange:b,events:T,locale:E,radius:M,labels:I,renderEventBody:V,renderResourceLabel:Y,withEventsDragAndDrop:R,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:W,onTimeSlotClick:P,onDayClick:O,onEventClick:_,withDragSlotSelect:B,onSlotDragEnd:L,onExternalEventDrop:z,withEventResize:H,onEventResize:A,canResizeEvent:N,recurrenceExpansionLimit:F,mode:G,dayViewProps:U,weekViewProps:K,monthViewProps:J,__staticSelector:q,mod:Q,...X}=t,Z=(0,g.useStyles)({name:q||"ResourcesSchedule",classes:f,props:t,className:o,style:a,classNames:r,styles:s,unstyled:n,vars:i}),[ee,et]=(0,D.useUncontrolled)({value:x,defaultValue:k,onChange:b}),[er,eo]=(0,D.useUncontrolled)({value:d,defaultValue:p??new Date}),ea={resources:l,date:er,onDateChange:e=>{eo(e),S?.(e)},onViewChange:e=>{("day"===e||"week"===e||"month"===e)&&et(e)},events:T,locale:E,radius:M,labels:I,renderEventBody:V,renderResourceLabel:Y,withEventsDragAndDrop:"static"!==G&&R,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:W,onEventClick:_,withDragSlotSelect:B,onSlotDragEnd:L,onExternalEventDrop:z,recurrenceExpansionLimit:F,mode:G},es=(()=>{switch(ee){case"day":return(0,c.jsx)(u.ResourcesDayView,{...ea,onTimeSlotClick:P,withEventResize:"static"!==G&&H,onEventResize:A,canResizeEvent:N,...U});case"week":return(0,c.jsx)(m.ResourcesWeekView,{...ea,onTimeSlotClick:P,withEventResize:"static"!==G&&H,onEventResize:A,canResizeEvent:N,...K});case"month":return(0,c.jsx)(v.ResourcesMonthView,{...ea,onDayClick:O,...J});default:return null}})();return(0,c.jsx)(h.Box,{...Z("root"),mod:Q,...X,children:es})});S.displayName="@mantine/schedule/ResourcesSchedule",S.classes=f;let x={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},k={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:a,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},b={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)("day");return(0,c.jsx)(S,{date:t,onDateChange:o,view:a,onViewChange:s,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{maxEventsPerTimeSlot:3,startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var E=e.i(162077),M=e.i(988798);let I={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i),[l,u]=(0,d.useState)(!1),[m,v]=(0,d.useState)(null),[f,h]=(0,d.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:a,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{h(r?String(r):null),v({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onDayClick:({date:e,resourceId:t})=>{h(t?String(t):null),v({title:"",start:(0,r.default)(e).startOf("day").toDate(),end:(0,r.default)(e).endOf("day").toDate(),color:"blue"}),u(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{h(r?String(r):null),v({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onEventClick:e=>{h(e.resourceId?String(e.resourceId):null),v({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),u(!0)},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}}),(0,c.jsx)(E.EventForm,{opened:l,onClose:()=>u(!1),onExitTransitionEnd:()=>v(null),values:m,onSubmit:e=>{e.id?s(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:f||t.resourceId}:t)):s(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:f||void 0}])},onDelete:m?.id?()=>{m?.id&&s(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,c.jsx)(M.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:n.map(e=>({value:String(e.id),label:String(e.label)})),value:f,onChange:h})})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:E._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:a,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:i,mode:"static",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},R={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:i,defaultView:"week",dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var C=e.i(20035),$=e.i(883364);let j=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],W={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)([]),i=(0,d.useRef)(1);return(0,c.jsxs)(C.Grid,{children:[(0,c.jsxs)(C.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)($.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),j.map(e=>(0,c.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)($.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)($.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,c.jsx)(C.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:a,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:o})=>{let a=e.getData("text/plain");if(!a)return;let n=JSON.parse(a),l=(0,r.default)(t),d=l.add(n.duration,"minutes");s(e=>[...e,{id:i.current++,title:n.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:n.color,resourceId:o}])}})})]})},code:`
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
`};var P=(0,t.__exportAll)({controlled:()=>b,dragDrop:()=>k,eventForm:()=>I,eventResize:()=>V,externalDragDrop:()=>W,staticMode:()=>Y,usage:()=>x,viewProps:()=>T,weekView:()=>R});e.s(["ResourcesScheduleDemos",0,P],592781)}]);