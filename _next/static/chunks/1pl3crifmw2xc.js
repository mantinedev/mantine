(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,499083,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(918006),n=e.i(625712),i=e.i(900513),l=e.i(688785),d=e.i(664397),c=e.i(969610),u=e.i(575148),m=e.i(792930),f=e.i(505696),v=e.i(420924),h=e.i(640542),p=e.i(176304),w=e.i(461304),g=e.i(783261),D=e.i(376879),y=e.i(201867),S=e.i(891343),x=e.i(67312),k=e.i(966696),T=e.i(612148),b=e.i(343355),E=e.i(367752),M=e.i(898770),I=e.i(657068),V=e.i(922552),Y=e.i(539517),R=e.i(578373),C=e.i(494834),$=e.i(232471),j=e.i(284629),W=e.i(391398);function P({resource:e,resourceIndex:r,weekdays:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:l,businessHours:d,withEventsDragAndDrop:c,onRowSlotsDragOver:u,onRowSlotsDragLeave:m,onRowSlotsDrop:v,onSlotClick:h,dropTargetSlotIndex:p,mode:w,slotsRef:g,firstSlotIndex:D,onSlotKeyDown:y,withDragSlotSelect:S,onSlotPointerDown:x,isSlotDragSelected:k,rowSlotsContainerRef:T,renderResourceLabel:b,renderGroupLabel:E,scrolledX:M,groupInfo:I,allDayCount:V}){let Y=String(e.id),R=o.flatMap((o,n)=>a.map((u,m)=>{let v=n*a.length+m,T=p===v,b=D?.resourceIndex===r&&D?.slotIndex===v,E=k?.(v,Y)||!1;return(0,W.jsx)(j.UnstyledButton,{ref:e=>{if(!g?.current)return;g.current[r]||(g.current[r]=[]);let t=g.current[r];if(e)t[v]=e;else for(delete t[v];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesWeekViewRowSlot"),mod:{"hour-start":u.isHourStart,...(0,f.getBusinessHoursMod)({time:u.startTime,businessHours:d,highlightBusinessHours:l}),"drop-target":T,"drag-selected":E,static:"static"===w},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${u.startTime} - ${u.endTime}`,tabIndex:"static"===w?-1:b?0:-1,"data-drag-slot-index":S&&"static"!==w?v:void 0,"data-drag-slot-group":S&&"static"!==w?Y:void 0,onKeyDown:e=>{y&&y(e,r,v)},onPointerDown:S&&"static"!==w?e=>x?.(e,v,Y):void 0,onClick:"static"!==w&&h?t=>h(e.id,o,u.startTime,t):void 0,onDragOver:c&&"static"!==w?e=>e.preventDefault():void 0},`${o}-${u.startTime}`)})),C=I?.position==="first"||I?.position==="only",O=void 0!==I?null!==I?(0,W.jsx)($.Box,{...s("resourcesWeekViewGroupColumn"),mod:{"scrolled-x":M,"group-position":I.position},children:C&&(0,W.jsx)("span",{style:I.count>1?{transform:`translateY(calc((${I.count-1} * (var(--resources-week-view-row-height) + 1px)) / 2))`}:void 0,children:E?E(I.group):I.group.label})}):(0,W.jsx)($.Box,{...s("resourcesWeekViewGroupColumnEmpty"),mod:{"scrolled-x":M}}):null;return(0,W.jsxs)($.Box,{...s("resourcesWeekViewRow"),children:[O,(0,W.jsx)($.Box,{...s("resourcesWeekViewResourceLabel"),mod:{"scrolled-x":M,"has-groups":void 0!==I},children:b?b(e):e.label}),(0,W.jsxs)($.Box,{ref:T,...s("resourcesWeekViewRowSlots",{style:V?{minHeight:`max(var(--resources-week-view-row-height), calc(${V} * (var(--resources-week-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==w?t=>u?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==w?m:void 0,onDrop:c&&"static"!==w?t=>v?.(t,e.id,r):void 0,children:[n,R]})]})}var O={resourcesWeekView:"m_ed4c47cf",resourcesWeekViewRoot:"m_5b5cbd51",resourcesWeekViewScrollArea:"m_b88ea29",resourcesWeekViewInner:"m_fbb9fc7",resourcesWeekViewHeaderRows:"m_7d7bb735",resourcesWeekViewCorner:"m_dd8b4f04",resourcesWeekViewHeaderContent:"m_85f2b19d",resourcesWeekViewDayLabelsRow:"m_cde0b68e",resourcesWeekViewDayLabel:"m_354e59a7",resourcesWeekViewTimeLabelsRow:"m_b7f0617f",resourcesWeekViewTimeLabel:"m_a6832518",resourcesWeekViewRow:"m_9fd9b38b",resourcesWeekViewResourceLabel:"m_9c6373f7",resourcesWeekViewGroupColumn:"m_fdcb5366",resourcesWeekViewGroupColumnEmpty:"m_3d5e7187",resourcesWeekViewRowSlots:"m_c534316a",resourcesWeekViewRowSlot:"m_ed965429",resourcesWeekViewBackgroundEvent:"m_3c19323d",resourcesWeekViewAllDayEvent:"m_682c45d0",resourcesWeekViewResizeHandle:"m_30c8fd6b",resourcesWeekViewEventWrapper:"m_2d13c608",resourcesWeekViewCurrentTimeIndicator:"m_6f70bf38",resourcesWeekViewCurrentTimeIndicatorLine:"m_be32874c",resourcesWeekViewCurrentTimeIndicatorThumb:"m_88ec57e",resourcesWeekViewCurrentTimeIndicatorTimeBubble:"m_9ff3db11"},_=e.i(19300),B=e.i(481178),L=e.i(275519),H=e.i(433512),z=e.i(779177),A=e.i(951254),N=e.i(44091),F=e.i(62904),G=e.i(391466),U=e.i(822933),K=e.i(417241),J=e.i(332977),q=e.i(191788),Q=e.i(205693);let X={__staticSelector:"ResourcesWeekView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,weekLabelFormat:"MMM DD",weekdayFormat:"ddd D",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withEventResize:!1,withDragSlotSelect:!1,withWeekendDays:!0,withCurrentTimeBubble:!0,highlightToday:!0,mode:"default",maxEventsPerTimeSlot:2},Z=(0,B.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesWeekView:{"--resources-week-view-radius":t?(0,H.getRadius)(t):void 0,"--resources-week-view-slot-width":(0,z.rem)(r),"--resources-week-view-row-height":(0,z.rem)(o),"--resources-week-view-group-label-width":(0,z.rem)(a)}})),ee=(0,L.factory)(e=>{let j=(0,N.useProps)("ResourcesWeekView",X,e),{classNames:B,className:L,style:H,styles:z,unstyled:ee,attributes:et,vars:er,startTime:eo,endTime:ea,date:es,onDateChange:en,resources:ei,intervalMinutes:el,slotLabelFormat:ed,radius:ec,startScrollDateTime:eu,scrollAreaProps:em,locale:ef,withCurrentTimeIndicator:ev,withCurrentTimeBubble:eh,__staticSelector:ep,withHeader:ew,onViewChange:eg,previousControlProps:eD,nextControlProps:ey,todayControlProps:eS,viewSelectProps:ex,weekLabelFormat:ek,renderWeekLabel:eT,events:eb,slotWidth:eE,rowHeight:eM,labels:eI,highlightBusinessHours:eV,businessHours:eY,renderEventBody:eR,renderEvent:eC,renderResourceLabel:e$,groups:ej,renderGroupLabel:eW,groupLabelWidth:eP,withEventsDragAndDrop:eO,onEventDrop:e_,canDragEvent:eB,onEventDragStart:eL,onEventDragEnd:eH,withEventResize:ez,onEventResize:eA,canResizeEvent:eN,onTimeSlotClick:eF,onEventClick:eG,withDragSlotSelect:eU,onSlotDragEnd:eK,mode:eJ,onExternalEventDrop:eq,recurrenceExpansionLimit:eQ,maxEventsPerTimeSlot:eX,moreEventsProps:eZ,firstDayOfWeek:e0,weekendDays:e1,withWeekendDays:e8,weekdayFormat:e3,highlightToday:e2,...e4}=j,e9=void 0!==eX?Math.max(1,eX):void 0,e6=(0,G.useStyles)({name:ep,classes:O,props:j,className:L,style:H,classNames:B,styles:z,unstyled:ee,vars:er,varsResolver:Z,attributes:et,rootSelector:"resourcesWeekView"}),{resolvedClassNames:e7,resolvedStyles:e5}=(0,F.useResolvedStylesApi)({classNames:B,styles:z,props:j}),te={classNames:e7,styles:e5,attributes:et,__staticSelector:ep,radius:ec},tt=(0,A.useMantineTheme)(),[tr,to]=(0,q.useState)(!1),[ta,ts]=(0,q.useState)(!1),tn=(0,Q.useDatesContext)(),ti=(0,o.getDayTimeIntervals)({startTime:eo,endTime:ea,intervalMinutes:el}),{orderedResources:tl,groupRanges:td,resourceGroupMap:tc}=(0,q.useMemo)(()=>(0,v.getOrderedResources)(ei,ej),[ei,ej]),tu=td.length>0,tm=(0,q.useMemo)(()=>(0,s.getWeekDays)({week:es,withWeekendDays:e8,weekendDays:tn.getWeekendDays(e1),firstDayOfWeek:tn.getFirstDayOfWeek(e0)}),[es,e8,e1,e0,tn]),tf=ti.length,tv=tm.some(e=>(0,C.default)(e).isSame((0,C.default)(),"day")),[th,tp]=(0,q.useState)((0,l.getCurrentTimePosition)({startTime:eo,endTime:ea,intervalMinutes:el}));(0,U.useInterval)(()=>tp((0,l.getCurrentTimePosition)({startTime:eo,endTime:ea,intervalMinutes:el})),6e4,{autoInvoke:!0});let tw=tm.findIndex(e=>(0,C.default)(e).isSame((0,C.default)(),"day")),tg=(ev??tv)&&tw>=0&&(0,d.isInTimeRange)({date:(0,C.default)().toDate(),startTime:eo,endTime:ea}),tD=eh?(0,r.formatDate)({locale:tn.getLocale(ef),date:(0,C.default)(),format:ed}):"",ty=(0,q.useCallback)((e,t)=>{if(!eq)return;let r=Math.floor(t.slotIndex/tf),o=t.slotIndex%tf,a=tm[r];a&&eq({dataTransfer:e.dataTransfer,dropDateTime:`${(0,C.default)(a).format("YYYY-MM-DD")} ${ti[o].startTime}`,resourceId:t.resourceId})},[eq,ti,tm,tf]),tS=(0,q.useRef)(void 0),tx=(0,g.useDragDropHandlers)({enabled:eO,mode:eJ,onEventDrop:(0,q.useCallback)(e=>{e_?.({...e,resourceId:tS.current})},[e_]),canDragEvent:eB,onEventDragStart:eL,onEventDragEnd:eH,calculateDropTarget:(e,t)=>{tS.current=e.resourceId;let r=Math.floor(e.slotIndex/tf),o=ti[e.slotIndex%tf].startTime;return(0,m.calculateDropTime)({draggedEvent:t,targetDate:tm[r]||tm[0],targetSlotTime:o,intervalMinutes:el})},onExternalDrop:eq?ty:void 0}),tk=(0,q.useMemo)(()=>(0,p.getGroupToResourceIdMap)(ei),[ei]),tT=(0,D.useSlotDragSelect)({enabled:eU&&"static"!==eJ,onDragEnd:(e,t,r)=>{if(!eK)return;let o=Math.floor(e/tf),a=e%tf,s=Math.floor(t/tf),n=t%tf,i=tm[o],l=tm[s];i&&l&&eK({rangeStart:`${(0,C.default)(i).format("YYYY-MM-DD")} ${ti[a].startTime}`,rangeEnd:`${(0,C.default)(l).format("YYYY-MM-DD")} ${ti[n].endTime}`,resourceId:tk.get(r)??r})}}),tb=(0,b.useHorizontalEventResize)({enabled:ez,mode:eJ,startTime:eo,endTime:ea,intervalMinutes:el,onEventResize:eA,canResizeEvent:eN}),tE=(eO||!!eq)&&"static"!==eJ,tM=(e,t,r,o)=>{if(!eF)return;let a=ti.findIndex(e=>e.startTime===r);if(-1===a)return;let s=ti[a],n=(0,C.default)(t).format("YYYY-MM-DD");eF({slotStart:`${n} ${s.startTime}`,slotEnd:`${n} ${s.endTime}`,nativeEvent:o,resourceId:e})},tI=(0,q.useMemo)(()=>(function({events:e,resources:t,weekdays:r,startTime:o,endTime:a,intervalMinutes:s,expansionLimit:n}){let i=(0,I.expandRecurringEvents)({events:e,rangeStart:(0,C.default)(r[0]).startOf("day").toDate(),rangeEnd:(0,C.default)(r[r.length-1]).endOf("day").toDate(),expansionLimit:n});if(i){let e=new Set;for(let t of i){if(e.has(t.id))throw Error(`[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${t.id}`);e.add(t.id)}}let l={},d=new Set,c=e=>"background"!==e.display&&(0,M.isMultidayEvent)(e);for(let e of r){let r=i?.filter(t=>{if(d.has(t.id)||c(t))return!1;let r=(0,C.default)(t.start),o=(0,C.default)(e).startOf("day");return r.isSame(o,"day")?(d.add(t.id),!0):!!("background"===t.display&&r.isBefore((0,C.default)(e).endOf("day"))&&(0,C.default)(t.end).isAfter(o))});l[e]=(0,R.getResourcesDayViewEvents)({events:r,resources:t,date:e,startTime:o,endTime:a,intervalMinutes:s})}let u={};for(let e of t)u[e.id]=[];if(r.forEach((e,r)=>{for(let o of t)for(let t of l[e].allDayEvents[o.id]??[])u[o.id].push({event:t,startDayIndex:r,endDayIndex:r,row:0})}),i)for(let e of i){if(!c(e)||void 0===e.resourceId||!(e.resourceId in u))continue;let t=(0,V.calculateEventDays)({event:e,weekDays:r,actualEndDate:(0,Y.getEventEndDate)(e)});0!==t.length&&u[e.resourceId].push({event:e,startDayIndex:r.indexOf(t[0]),endDayIndex:r.indexOf(t[t.length-1]),row:0})}for(let e of t)!function(e){let t=e.map((e,t)=>({bar:e,index:t})).sort((e,t)=>e.bar.startDayIndex-t.bar.startDayIndex||e.bar.endDayIndex-t.bar.endDayIndex||e.index-t.index),r=[];for(let{bar:e}of t){let t=0;for(;t<r.length&&r[t]>=e.startDayIndex;)t+=1;r[t]=e.endDayIndex,e.row=t}}(u[e.id]);return{byDay:l,allDayBars:u}})({events:eb,resources:ei,weekdays:tm,startTime:eo,endTime:ea,intervalMinutes:el,expansionLimit:eQ}),[eb,ei,tm,eo,ea,el,eQ]),tV=tm.map(e=>{let t=(0,C.default)(e),o=t.isSame((0,C.default)(),"day")&&e2,a=tn.getWeekendDays(e1).includes(t.day());return(0,q.createElement)($.Box,{...e6("resourcesWeekViewDayLabel"),key:e,mod:{today:o,weekend:a},style:{width:`calc(var(--resources-week-view-slot-width) * ${tf})`}},(0,r.formatDate)({date:t,locale:tn.getLocale(ef),format:e3}))}),tY=tm.flatMap(e=>ti.map(t=>{let o=(0,r.formatDate)({date:(0,C.default)(`${(0,C.default)(e).format("YYYY-MM-DD")} ${t.startTime}`),locale:tn.getLocale(ef),format:ed});return(0,q.createElement)($.Box,{...e6("resourcesWeekViewTimeLabel"),key:`${e}-${t.startTime}`,mod:{"hour-start":t.isHourStart,...(0,f.getBusinessHoursMod)({time:t.startTime,businessHours:eY,highlightBusinessHours:eV})}},o)})),tR=(0,q.useRef)([]),tC=(0,q.useRef)([]),t$=(0,q.useRef)(null),tj=(0,J.useMergedRef)(t$,em?.viewportRef),tW={resourceIndex:0,slotIndex:0};(0,K.useIsomorphicEffect)(()=>{if(!eu||!t$.current)return;let e=(0,C.default)(eu),t=e.format("YYYY-MM-DD 00:00:00"),r=e.format("HH:mm:ss"),o=tm.indexOf(t);if(o<0)return;let a=ti.findIndex(e=>e.startTime>=r);if(a<0)return;let s=o*tf+a,n=tR.current[0];if(!n||0===n.length)return;let i=n[s];if(!i)return;let l=i.getBoundingClientRect(),d=t$.current.getBoundingClientRect(),c=t$.current.querySelector(`.${O.resourcesWeekViewCorner}`),u=c?c.getBoundingClientRect().width:0;t$.current.scrollTo({left:l.left-d.left-u,top:0})},[]);let tP=(0,q.useCallback)((e,t)=>(0,w.getIndexFromDragPoint)(tR.current[t]??[],e.clientX),[]),tO=(e,t,r)=>{(0,h.handleResourcesGridKeyDown)({controlsRef:tR,resourceIndex:t,slotIndex:r,event:e})},t_=100/tm.length,tB=tl.map((e,t)=>{let r=[],o=tI.allDayBars[e.id]??[],a=o.reduce((e,t)=>Math.max(e,t.row+1),0);tm.forEach((o,a)=>{let s=tI.byDay[o];if(!s)return;let n=a/tm.length*100;for(let t of[...s.backgroundTimedEvents[e.id]||[],...s.backgroundAllDayEvents[e.id]||[]]){let e=tt.variantColorResolver({color:t.color||tt.primaryColor,theme:tt,variant:"light",autoContrast:!0}),a="function"==typeof eR?eR(t):t.title,s={key:`bg-${t.id}-${o}`,...e6("resourcesWeekViewBackgroundEvent",{style:{left:`${n+t.position.top/100*t_}%`,width:`${t.position.height/100*t_}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":e.background,"--bg-event-color":e.color},children:a};"function"==typeof eC?r.push(eC(t,s)):r.push((0,W.jsx)($.Box,{...s}))}let i=(s.regularEvents[e.id]||[]).filter(e=>!(0,c.isAllDayEvent)({event:e,date:o}));for(let e of void 0!==e9?i.filter(e=>e.position.column<e9):i){let s=tx.isDraggableEvent(e),i=tb.isResizableEvent(e),l=tb.getResizePosition(e.id),d=null!==l,c=d&&tb.resizingEdge?tb.resizingEdge:null,m=l?l.left:e.position.top,f=l?l.width:e.position.height,v=n+m/100*t_,h=f/100*t_,p=i?tt.variantColorResolver({color:e.color||tt.primaryColor,theme:tt,variant:e.variant||"light",autoContrast:!0}):null,w=void 0!==e9&&e.position.overlaps>e9,g=(0,C.default)(o).format("YYYY-MM-DD");r.push((0,W.jsxs)($.Box,{...e6("resourcesWeekViewEventWrapper"),__vars:p?{"--event-color":p.color}:void 0,"data-resizing":d||void 0,style:{...(0,u.getTimeAxisEventStyle)({start:v,span:h}),top:w?`calc((100% - 22px) * ${e.position.column} / ${e9})`:`${e.position.offset}%`,height:w?`calc((100% - 22px) / ${e9})`:`${e.position.width}%`},children:[(0,W.jsx)(S.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:s,isResizing:d,renderEventBody:eR,renderEvent:eC,radius:ec,mode:eJ,onClick:eG?t=>{tb.wasResizing()||eG(e,t)}:void 0,style:{width:"100%",height:"100%"}}),i&&"static"!==eJ&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("div",{...e6("resourcesWeekViewResizeHandle"),"data-edge":"start","data-active":"start"===c||void 0,onPointerDown:r=>{let o=tC.current[t];o&&tb.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:g,dayIndex:a,dayCount:tm.length,pointerEvent:r})}}),(0,W.jsx)("div",{...e6("resourcesWeekViewResizeHandle"),"data-edge":"end","data-active":"end"===c||void 0,onPointerDown:r=>{let o=tC.current[t];o&&tb.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:g,dayIndex:a,dayCount:tm.length,pointerEvent:r})}})]})]},`${e.id}-${o}`))}if(void 0!==e9)for(let t of(0,E.getOverlapClusters)(i)){let a=t.filter(e=>e.position.column>=e9).length;if(a>0&&"static"!==eJ){let s=n+Math.min(...t.map(e=>e.position.top))/100*t_,i=n+Math.max(...t.map(e=>e.position.top+e.position.height))/100*t_;r.push((0,W.jsx)(x.MoreEvents,{events:t,moreEventsCount:a,mode:eJ,labels:eI,renderEventBody:eR,renderEvent:eC,onEventClick:eG,style:{position:"absolute",left:`calc(${s}% + 1px)`,width:`calc(${i-s}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...te,...eZ},`more-${e.id}-${o}-${t[0].id}`))}}});let s=tu?"calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)":"calc(var(--resources-week-view-resource-label-width) + 5px)";return o.forEach(e=>{let t=e.startDayIndex*t_,o=(e.endDayIndex-e.startDayIndex+1)*t_;r.push((0,W.jsx)("div",{...e6("resourcesWeekViewAllDayEvent",{style:{left:`calc(${t}% + 1px)`,width:`calc(${o}% - 2px)`,top:`calc(${e.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`}}),children:(0,W.jsx)(S.ScheduleEvent,{event:e.event,autoSize:!0,nowrap:!0,renderEventBody:e=>(0,W.jsx)("span",{style:{position:"sticky",insetInlineStart:s,display:"inline-block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},children:eR?eR(e):e.title}),renderEvent:eC,radius:ec,mode:eJ,onClick:eG?t=>eG(e.event,t):void 0,style:{width:"100%",height:"100%",overflow:"visible"},styles:{eventInner:{display:"block",overflow:"visible",lineHeight:"var(--resources-week-view-all-day-height)"}}})},`all-day-${e.event.id}-${e.startDayIndex}`))}),(0,W.jsx)(P,{resource:e,resourceIndex:t,weekdays:tm,slots:ti,getStyles:e6,labels:eI,highlightBusinessHours:eV,businessHours:eY,withEventsDragAndDrop:tE,mode:eJ,slotsRef:tR,firstSlotIndex:tW,onSlotKeyDown:tO,onSlotClick:tM,onRowSlotsDragOver:(e,t,r)=>{let o=tP(e,r);null!==o&&tx.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:tx.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tP(e,r);null!==o&&tx.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:tx.dropTarget?.resourceId===e.id?tx.dropTarget.slotIndex:void 0,withDragSlotSelect:eU,onSlotPointerDown:tT.handleSlotPointerDown,isSlotDragSelected:tT.isSlotSelected,rowSlotsContainerRef:e=>{tC.current[t]=e},renderResourceLabel:e$,renderGroupLabel:eW,scrolledX:ta,groupInfo:tu?tc[t]:void 0,allDayCount:a,children:r},e.id)}),tL=(0,T.getWeekLabel)({weekdays:tm,locale:tn.getLocale(ef),weekLabelFormat:ek,renderWeekLabel:eT}),tH=tw>=0?(tw+th/100)/tm.length*100:0,tz=(0,W.jsxs)($.Box,{...e6("resourcesWeekView"),mod:{static:"static"===eJ,"slot-dragging":tT.isDragging,resizing:tb.isResizing,"event-interaction":tb.isResizing||tx.dragContextValue.isDragging},...e4,children:[ew&&(0,W.jsx)(k.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>(0,i.previousWeek)(es,tn.getFirstDayOfWeek(e0)),next:()=>(0,n.nextWeek)(es,tn.getFirstDayOfWeek(e0)),today:()=>(0,a.toDateString)((0,C.default)())},control:{miw:180,title:tL},labels:eI,onDateChange:en,onViewChange:eg,previousControlProps:eD,nextControlProps:ey,todayControlProps:eS,viewSelectProps:{views:["day","week","month"],...ex},stylesApiProps:te}),(0,W.jsx)($.Box,{...e6("resourcesWeekViewRoot"),children:(0,W.jsx)(_.ScrollArea,{scrollbarSize:4,...em,...e6("resourcesWeekViewScrollArea",{className:em?.className,style:em?.style}),onScrollPositionChange:e=>{em?.onScrollPositionChange?.(e),to(0!==e.y),ts(0!==e.x)},viewportRef:tj,children:(0,W.jsxs)("div",{...e6("resourcesWeekViewInner"),children:[(0,W.jsxs)("div",{...e6("resourcesWeekViewHeaderRows"),children:[(0,q.createElement)("div",{...e6("resourcesWeekViewCorner"),key:"corner",style:tu?{flexBasis:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))",minWidth:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eI)),(0,W.jsxs)("div",{...e6("resourcesWeekViewHeaderContent"),children:[(0,W.jsx)("div",{...e6("resourcesWeekViewDayLabelsRow"),children:tV}),(0,W.jsx)($.Box,{...e6("resourcesWeekViewTimeLabelsRow"),mod:{scrolled:tr},children:tY})]})]}),tB,tg&&(0,W.jsxs)($.Box,{...e6("resourcesWeekViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":tu?`calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${tH} / 100)`:`calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${tH} / 100)`,"--_time-bubble-width":tD?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[eh&&(0,W.jsx)("div",{...e6("resourcesWeekViewCurrentTimeIndicatorTimeBubble"),children:tD}),!eh&&(0,W.jsx)("div",{...e6("resourcesWeekViewCurrentTimeIndicatorThumb")}),(0,W.jsx)("div",{...e6("resourcesWeekViewCurrentTimeIndicatorLine")})]})]})})})]}),tA=(0,q.useMemo)(()=>tx.dragContextValue,[tx.dragContextValue]);return eO?(0,W.jsx)(y.DragContext.Provider,{value:tA,children:tz}):tz});ee.displayName="@mantine/schedule/ResourcesWeekView",ee.classes=O,ee.varsResolver=Z,e.s(["ResourcesWeekView",0,ee],499083)},272013,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(4332),a=e.i(276995),s=e.i(657068),n=e.i(420924),i=e.i(176304),l=e.i(461304),d=e.i(783261),c=e.i(376879),u=e.i(201867),m=e.i(891343),f=e.i(67312),v=e.i(966696),h={resourcesMonthView:"m_652b3acd",resourcesMonthViewRoot:"m_146e014f",resourcesMonthViewScrollArea:"m_b1cab7a7",resourcesMonthViewInner:"m_78d2db89",resourcesMonthViewDayLabelsRow:"m_eae51c8c",resourcesMonthViewCorner:"m_975b8b82",resourcesMonthViewDayLabel:"m_bc016ea5",resourcesMonthViewDayLabelWeekday:"m_52a1c4c3",resourcesMonthViewDayLabelNumber:"m_88d8e64e",resourcesMonthViewRow:"m_21b0f7cd",resourcesMonthViewResourceLabel:"m_1febcdb9",resourcesMonthViewGroupColumn:"m_1fc335a8",resourcesMonthViewGroupColumnEmpty:"m_d5a3a885",resourcesMonthViewRowSlots:"m_4be74668",resourcesMonthViewCell:"m_146709cf"},p=e.i(494834),w=e.i(232471),g=e.i(19300),D=e.i(284629),y=e.i(481178),S=e.i(275519),x=e.i(433512),k=e.i(779177),T=e.i(44091),b=e.i(62904),E=e.i(391466),M=e.i(417241),I=e.i(332977),V=e.i(191788),Y=e.i(205693),R=e.i(391398);let C=(0,y.createVarsResolver)((e,{radius:t,dayWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesMonthView:{"--resources-month-view-radius":t?(0,x.getRadius)(t):void 0,"--resources-month-view-day-width":(0,k.rem)(r),"--resources-month-view-row-height":(0,k.rem)(o),"--resources-month-view-group-label-width":(0,k.rem)(a)}})),$={__staticSelector:"ResourcesMonthView",highlightToday:!0,withHeader:!0,weekdayFormat:"ddd",withWeekendDays:!0,withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"};function j(e,t){let r=(0,p.default)(e.start),o=(0,p.default)(t.start),a=(0,p.default)(e.end).startOf("day").diff(r.startOf("day"),"day"),s=(0,p.default)(t.end).startOf("day").diff(o.startOf("day"),"day");return a!==s?s-a:r.valueOf()-o.valueOf()}function W(e){return(0,p.default)(e.end).startOf("day").isAfter((0,p.default)(e.start).startOf("day"))}let P=(0,S.factory)(e=>{let y=(0,T.useProps)("ResourcesMonthView",$,e),{classNames:S,className:x,style:k,styles:P,unstyled:O,attributes:_,vars:B,mod:L,date:H,onDateChange:z,resources:A,locale:N,weekdayFormat:F,weekendDays:G,withWeekendDays:U,startScrollDate:K,__staticSelector:J,onDayClick:q,highlightToday:Q,radius:X,withHeader:Z,monthYearSelectProps:ee,onViewChange:et,todayControlProps:er,nextControlProps:eo,previousControlProps:ea,viewSelectProps:es,events:en,dayWidth:ei,rowHeight:el,renderResourceLabel:ed,groups:ec,renderGroupLabel:eu,groupLabelWidth:em,renderEventBody:ef,renderEvent:ev,withEventsDragAndDrop:eh,onEventDrop:ep,canDragEvent:ew,onEventDragStart:eg,onEventDragEnd:eD,onEventClick:ey,withDragSlotSelect:eS,onSlotDragEnd:ex,labels:ek,mode:eT,scrollAreaProps:eb,onExternalEventDrop:eE,maxEventsPerTimeSlot:eM,moreEventsProps:eI,recurrenceExpansionLimit:eV,...eY}=y,eR=Math.min(10,Math.max(1,eM??2)),eC=(0,E.useStyles)({name:J,classes:h,props:y,className:x,style:k,classNames:S,styles:P,unstyled:O,attributes:_,vars:B,varsResolver:C,rootSelector:"resourcesMonthView"}),{resolvedClassNames:e$,resolvedStyles:ej}=(0,b.useResolvedStylesApi)({classNames:S,styles:P,props:y}),eW={classNames:e$,styles:ej,attributes:_,__staticSelector:J,radius:X},eP=(0,Y.useDatesContext)(),eO=eP.getWeekendDays(G),{orderedResources:e_,groupRanges:eB,resourceGroupMap:eL}=(0,V.useMemo)(()=>(0,n.getOrderedResources)(A,ec),[A,ec]),eH=eB.length>0,ez=(0,V.useMemo)(()=>{let e=(0,p.default)(H).startOf("month"),t=e.endOf("month").date(),r=eP.getWeekendDays(G),o=[];for(let a=1;a<=t;a++){let t=e.date(a);!U&&r.includes(t.day())||o.push(t.format("YYYY-MM-DD"))}return o},[H,U,G,eP]),eA=(0,V.useRef)(null),eN=(0,I.useMergedRef)(eA,eb?.viewportRef),eF=(0,V.useRef)([]),eG=(0,V.useRef)(null),eU=(0,V.useCallback)(e=>{if(!eA.current)return;let t=ez.indexOf(e);if(t<0)return;let r=eF.current[t];if(!r)return;let o=r.getBoundingClientRect(),a=eA.current.getBoundingClientRect(),s=eG.current?.getBoundingClientRect().width??0;eA.current.scrollTo({left:o.left-a.left-s,top:0})},[ez]);(0,M.useIsomorphicEffect)(()=>{K&&eU(K)},[]);let eK=(0,V.useMemo)(()=>(0,s.expandRecurringEvents)({events:en,rangeStart:(0,p.default)(H).startOf("month").toDate(),rangeEnd:(0,p.default)(H).endOf("month").toDate(),expansionLimit:eV}),[en,H,eV]),{eventsByResourceAndDay:eJ,eventLayoutByResource:eq}=(0,V.useMemo)(()=>{let e={};for(let t of A)for(let r of(e[t.id]={},ez))e[t.id][r]=[];if(eK)for(let t of eK){if(void 0===t.resourceId||!(t.resourceId in e))continue;let r=(0,p.default)(t.start),o=(0,p.default)(t.end);for(let a of ez){let s=(0,p.default)(a).startOf("day"),n=(0,p.default)(a).endOf("day");r.isBefore(n)&&o.isAfter(s)&&e[t.resourceId][a].push(t)}}let t={},r=(0,p.default)(ez[0]).startOf("day"),o=(0,p.default)(ez[ez.length-1]).add(1,"day").startOf("day");for(let a of A){let s={},n=new Map,i=new Map,l=new Map;ez.forEach((t,r)=>{let o=e[a.id][t];for(let e of(o.sort(j),o)){let t=l.get(e.id);t?t.days.push(r):l.set(e.id,{event:e,days:[r]})}let d=new Set,c=[],u=0;for(let e of o){let t=n.get(e.id);if((void 0===t||t>=eR||d.has(t))&&(t=function(e,t){for(let r=0;r<t;r+=1)if(!e.has(r))return r;return null}(d,eR)),null===t){u+=1;continue}d.add(t),c.push({event:e,row:t}),i.has(e.id)||i.set(e.id,new Map),i.get(e.id).set(r,t),n.set(e.id,t)}s[t]={visible:c,hiddenCount:u}});let d=[];for(let{event:e,days:t}of l.values()){if(!W(e))continue;let a=t[0],n=t[t.length-1],l=i.get(e.id),c=(0,p.default)(e.start).isBefore(r),u=(0,p.default)(e.end).isAfter(o),m=null,f=()=>{if(!m)return;let t=m.startDayIndex>a,r=m.endDayIndex<n,o=!t&&c,i=!r&&u,l=!1;for(let e=m.startDayIndex;e<=m.endDayIndex;e+=1)if((s[ez[e]]?.hiddenCount??0)>0){l=!0;break}d.push({event:e,startDayIndex:m.startDayIndex,endDayIndex:m.endDayIndex,row:m.row,clipStart:t,clipEnd:r,hanging:o&&i?"both":o?"start":i?"end":"none",hiddenInSpan:l}),m=null};for(let e=a;e<=n;e+=1){let t=l?.get(e);if(void 0===t){f();continue}m&&m.row===t&&m.endDayIndex===e-1?m.endDayIndex=e:(f(),m={startDayIndex:e,endDayIndex:e,row:t})}f()}t[a.id]={byDay:s,segments:d}}return{eventsByResourceAndDay:e,eventLayoutByResource:t}},[A,ez,eK,eR]),eQ=(0,V.useCallback)((e,t)=>{eE&&eE({dataTransfer:e.dataTransfer,dropDateTime:`${(0,p.default)(t.day).format("YYYY-MM-DD")} 00:00:00`,resourceId:t.resourceId})},[eE]),eX=(0,d.useDragDropHandlers)({enabled:eh,mode:eT,onEventDrop:e=>{ep?.({...e,resourceId:eZ.current})},canDragEvent:ew,onEventDragStart:eg,onEventDragEnd:eD,calculateDropTarget:(e,t)=>(eZ.current=e.resourceId,(0,a.calculateMonthDropDate)({draggedEvent:t,targetDay:e.day})),onExternalDrop:eE?eQ:void 0}),eZ=(0,V.useRef)(void 0),e0=(eh||!!eE)&&"static"!==eT,e1=(0,V.useMemo)(()=>(0,i.getGroupToResourceIdMap)(A),[A]),e8=(0,c.useSlotDragSelect)({enabled:eS&&"static"!==eT,onDragEnd:(e,t,r)=>{if(!ex)return;let o=ez[e],a=ez[t];o&&a&&ex({rangeStart:(0,p.default)(o).startOf("day").format("YYYY-MM-DD HH:mm:ss"),rangeEnd:(0,p.default)(a).endOf("day").format("YYYY-MM-DD HH:mm:ss"),resourceId:e1.get(r)??r})}}),e3=ez.map((e,t)=>{let o=(0,p.default)(e),a=eO.includes(o.day()),s=o.isSame((0,p.default)(),"day")&&Q;return(0,V.createElement)(w.Box,{...eC("resourcesMonthViewDayLabel"),key:e,mod:{weekend:a,today:s},ref:e=>{eF.current[t]=e}},(0,R.jsx)("span",{...eC("resourcesMonthViewDayLabelWeekday"),children:(0,r.formatDate)({date:o,locale:eP.getLocale(N),format:F})}),(0,R.jsx)("span",{...eC("resourcesMonthViewDayLabelNumber"),children:o.date()}))}),e2=(0,V.useRef)([]),e4=(0,V.useCallback)((e,t)=>(0,l.getIndexFromDragPoint)(e2.current[t]??[],e.clientX),[]),e9=100/eR,e6=e_.map((e,t)=>{e2.current[t]||(e2.current[t]=[]);let r=String(e.id),o=eX.dropTarget,a=ez.length,s=[],n=[],i=ez.map((i,l)=>{let d=(0,p.default)(i),c=eP.getWeekendDays(G).includes(d.day()),u=null!==o&&"object"==typeof o&&"day"in o&&o.day===i&&o.resourceId===e.id,v=e8.isSlotSelected(l,r),h=eJ[e.id]?.[i]||[],w=eq[e.id]?.byDay[i],g=w?.visible??[],y=w?.hiddenCount??0,S=0===t&&0===l,x=l/a*100,k=100/a,T=y>0&&"static"!==eT;return g.forEach(({event:e,row:t})=>{if(W(e))return;let r=eX.isDraggableEvent(e),o=T?`calc((100% - 18px) * ${t} / ${eR} + 1px)`:`calc(${t*e9}% + 1px)`,a=T?`calc((100% - 18px) / ${eR} - 2px)`:`calc(${e9}% - 2px)`;s.push((0,R.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,size:"sm",draggable:r,renderEventBody:ef,renderEvent:ev,radius:X,mode:eT,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:o,left:`calc(${x}% + 1px)`,width:`calc(${k}% - 2px)`,height:a,zIndex:3}},`${e.id}-${i}`))}),y>0&&"static"!==eT&&n.push((0,R.jsx)(f.MoreEvents,{events:h,moreEventsCount:y,mode:eT,labels:ek,renderEventBody:ef,renderEvent:ev,onEventClick:ey,style:{position:"absolute",bottom:1,left:`calc(${x}% + 1px)`,width:`calc(${k}% - 2px)`,height:18,zIndex:4},...eW,...eI},`more-${e.id}-${i}`)),(0,R.jsx)(D.UnstyledButton,{ref:e=>{e&&(e2.current[t]||(e2.current[t]=[]),e2.current[t][l]=e)},...eC("resourcesMonthViewCell"),"aria-label":`${e.label} ${d.format("MMMM D, YYYY")}`,"data-drag-slot-index":eS&&"static"!==eT?l:void 0,"data-drag-slot-group":eS&&"static"!==eT?r:void 0,mod:{weekend:c,"drop-target":u,"drag-selected":v,static:"static"===eT},tabIndex:"static"===eT?-1:S?0:-1,onClick:"static"===eT?void 0:t=>q?.({date:i,nativeEvent:t,resourceId:e.id}),onKeyDown:"static"===eT?void 0:e=>((e,t,r)=>{let o=e.key,a=t,s=r;if("ArrowRight"===o)s=Math.min(r+1,ez.length-1);else if("ArrowLeft"===o)s=Math.max(r-1,0);else if("ArrowDown"===o)a=Math.min(t+1,A.length-1);else{if("ArrowUp"!==o)return;a=Math.max(t-1,0)}e.preventDefault(),e2.current[a]?.[s]?.focus()})(e,t,l),onPointerDown:eS&&"static"!==eT?e=>e8.handleSlotPointerDown(e,l,r):void 0,onDragOver:e0?e=>e.preventDefault():void 0},i)});(eq[e.id]?.segments??[]).forEach(e=>{let t=eX.isDraggableEvent(e.event),r=e.startDayIndex/a*100,o=(e.endDayIndex-e.startDayIndex+1)/a*100,n=e.hiddenInSpan&&"static"!==eT,i=n?`calc((100% - 18px) * ${e.row} / ${eR} + 1px)`:`calc(${e.row*e9}% + 1px)`,l=n?`calc((100% - 18px) / ${eR} - 2px)`:`calc(${e9}% - 2px)`;s.push((0,R.jsx)(m.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,size:"sm",hanging:e.hanging,draggable:t,renderEventBody:ef,renderEvent:ev,radius:X,mode:eT,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ey?t=>ey(e.event,t):void 0,style:{position:"absolute",top:i,left:`calc(${r}% + 1px)`,width:`calc(${o}% - 2px)`,height:l,zIndex:3}},`${e.event.id}-segment-${e.startDayIndex}`))});let l=eH?eL[t]:void 0,d=l?.position==="first"||l?.position==="only",c=void 0!==l?null!==l?(0,R.jsx)(w.Box,{...eC("resourcesMonthViewGroupColumn"),mod:{"group-position":l.position},children:d&&(0,R.jsx)("span",{style:l.count>1?{transform:`translateY(calc((${l.count-1} * (var(--resources-month-view-row-height) + 1px)) / 2))`}:void 0,children:eu?eu(l.group):l.group.label})}):(0,R.jsx)(w.Box,{...eC("resourcesMonthViewGroupColumnEmpty")}):null;return(0,V.createElement)("div",{...eC("resourcesMonthViewRow"),key:e.id},c,(0,R.jsx)("div",{...eC("resourcesMonthViewResourceLabel"),"data-has-groups":eH||void 0,children:ed?ed(e):e.label}),(0,R.jsxs)("div",{...eC("resourcesMonthViewRowSlots"),onDragOver:e0?r=>{let o=e4(r,t);null!==o&&ez[o]&&eX.handleDragOver(r,{day:ez[o],resourceId:e.id})}:void 0,onDragLeave:e0?eX.handleDragLeave:void 0,onDrop:e0?r=>{let o=e4(r,t);null!==o&&ez[o]&&eX.handleDrop(r,{day:ez[o],resourceId:e.id})}:void 0,children:[s,n,i]}))}),e7=(0,R.jsxs)(w.Box,{mod:[{static:"static"===eT,"slot-dragging":e8.isDragging,"event-interaction":eX.dragContextValue.isDragging},L],...eC("resourcesMonthView"),...eY,children:[Z&&(0,R.jsx)(v.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,p.default)(H).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,p.default)(H).add(1,"month").startOf("month")),today:()=>(requestAnimationFrame(()=>{eU((0,p.default)().format("YYYY-MM-DD"))}),(0,o.toDateString)((0,p.default)()))},control:{monthYearSelect:{locale:N,yearValue:(0,p.default)(H).get("year"),monthValue:(0,p.default)(H).get("month"),onYearChange:e=>z?.((0,o.toDateString)((0,p.default)(H).set("year",e).startOf("month"))),onMonthChange:e=>z?.((0,o.toDateString)((0,p.default)(H).set("month",e).startOf("month"))),...ee}},labels:ek,onDateChange:z,onViewChange:et,previousControlProps:ea,nextControlProps:eo,todayControlProps:er,viewSelectProps:{views:["day","week","month"],...es},stylesApiProps:eW}),(0,R.jsx)(w.Box,{...eC("resourcesMonthViewRoot"),children:(0,R.jsx)(g.ScrollArea,{scrollbars:"x",scrollbarSize:4,...eb,...eC("resourcesMonthViewScrollArea",{className:eb?.className,style:eb?.style}),viewportRef:eN,children:(0,R.jsxs)("div",{...eC("resourcesMonthViewInner"),children:[(0,R.jsxs)("div",{...eC("resourcesMonthViewDayLabelsRow"),children:[(0,V.createElement)("div",{...eC("resourcesMonthViewCorner"),key:"corner",ref:eG,style:eH?{flexBasis:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))",minWidth:"calc(var(--resources-month-view-resource-label-width) + var(--resources-month-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ek)),e3]}),e6]})})})]});return eh?(0,R.jsx)(u.DragContext.Provider,{value:eX.dragContextValue,children:e7}):e7});P.displayName="@mantine/schedule/ResourcesMonthView",P.classes=h,P.varsResolver=C,e.s(["ResourcesMonthView",0,P],272013)},853905,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(5,"day").format("YYYY-MM-DD"),n=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],i=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${o} 09:30:00`,end:`${o} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${o} 11:00:00`,end:`${o} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${o} 10:00:00`,end:`${o} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${a} 15:00:00`,end:`${a} 16:00:00`,color:"grape",resourceId:"london"}],l="\nimport dayjs from 'dayjs';\nimport { ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\nconst nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n  { id: 'london', label: 'Meeting room: London' },\n];\n\nconst events = [\n  { id: 1, title: 'Team Standup', start: `${today} 09:00:00`, end: `${today} 09:30:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 4, title: 'Design Review', start: `${tomorrow} 13:00:00`, end: `${tomorrow} 14:00:00`, color: 'orange', resourceId: 'paris' },\n  { id: 5, title: '1:1 Meeting', start: `${today} 11:00:00`, end: `${today} 11:30:00`, color: 'cyan', resourceId: 'new-york' },\n  { id: 6, title: 'Workshop', start: `${nextWeek} 14:00:00`, end: `${nextWeek} 16:00:00`, color: 'pink', resourceId: 'new-york' },\n  { id: 7, title: 'Architecture Review', start: `${today} 10:00:00`, end: `${today} 11:00:00`, color: 'red', resourceId: 'london' },\n  { id: 8, title: 'Retrospective', start: `${tomorrow} 15:00:00`, end: `${tomorrow} 16:00:00`, color: 'grape', resourceId: 'london' },\n];\n";var d=e.i(191788),c=e.i(391398),u=e.i(613490),m=e.i(499083),f=e.i(272013),v={root:"m_428e1853"},h=e.i(232471),p=e.i(275519),w=e.i(44091),g=e.i(391466),D=e.i(579560);let y={defaultView:"day",mode:"default"},S=(0,p.factory)(e=>{let t=(0,w.useProps)("ResourcesSchedule",y,e),{classNames:r,className:o,style:a,styles:s,unstyled:n,vars:i,resources:l,date:d,defaultDate:p,onDateChange:S,view:x,defaultView:k,onViewChange:T,events:b,locale:E,radius:M,labels:I,renderEventBody:V,renderResourceLabel:Y,withEventsDragAndDrop:R,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:W,onTimeSlotClick:P,onDayClick:O,onEventClick:_,withDragSlotSelect:B,onSlotDragEnd:L,onExternalEventDrop:H,withEventResize:z,onEventResize:A,canResizeEvent:N,recurrenceExpansionLimit:F,mode:G,dayViewProps:U,weekViewProps:K,monthViewProps:J,__staticSelector:q,mod:Q,...X}=t,Z=(0,g.useStyles)({name:q||"ResourcesSchedule",classes:v,props:t,className:o,style:a,classNames:r,styles:s,unstyled:n,vars:i}),[ee,et]=(0,D.useUncontrolled)({value:x,defaultValue:k,onChange:T}),[er,eo]=(0,D.useUncontrolled)({value:d,defaultValue:p??new Date}),ea={resources:l,date:er,onDateChange:e=>{eo(e),S?.(e)},onViewChange:e=>{("day"===e||"week"===e||"month"===e)&&et(e)},events:b,locale:E,radius:M,labels:I,renderEventBody:V,renderResourceLabel:Y,withEventsDragAndDrop:"static"!==G&&R,onEventDrop:C,canDragEvent:$,onEventDragStart:j,onEventDragEnd:W,onEventClick:_,withDragSlotSelect:B,onSlotDragEnd:L,onExternalEventDrop:H,recurrenceExpansionLimit:F,mode:G},es=(()=>{switch(ee){case"day":return(0,c.jsx)(u.ResourcesDayView,{...ea,onTimeSlotClick:P,withEventResize:"static"!==G&&z,onEventResize:A,canResizeEvent:N,...U});case"week":return(0,c.jsx)(m.ResourcesWeekView,{...ea,onTimeSlotClick:P,withEventResize:"static"!==G&&z,onEventResize:A,canResizeEvent:N,...K});case"month":return(0,c.jsx)(f.ResourcesMonthView,{...ea,onDayClick:O,...J});default:return null}})();return(0,c.jsx)(h.Box,{...Z("root"),mod:Q,...X,children:es})});S.displayName="@mantine/schedule/ResourcesSchedule",S.classes=v;let x={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)("day");return(0,c.jsx)(S,{date:t,onDateChange:o,view:a,onViewChange:s,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},b={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e);return(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:i,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{maxEventsPerTimeSlot:3,startScrollDate:e}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var E=e.i(162077),M=e.i(988798);let I={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,d.useState)(e),[a,s]=(0,d.useState)(i),[l,u]=(0,d.useState)(!1),[m,f]=(0,d.useState)(null),[v,h]=(0,d.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{date:t,onDateChange:o,resources:n,events:a,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{h(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onDayClick:({date:e,resourceId:t})=>{h(t?String(t):null),f({title:"",start:(0,r.default)(e).startOf("day").toDate(),end:(0,r.default)(e).endOf("day").toDate(),color:"blue"}),u(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{h(r?String(r):null),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onEventClick:e=>{h(e.resourceId?String(e.resourceId):null),f({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),u(!0)},dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollTime:"08:00:00"},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`},monthViewProps:{startScrollDate:e}}),(0,c.jsx)(E.EventForm,{opened:l,onClose:()=>u(!1),onExitTransitionEnd:()=>f(null),values:m,onSubmit:e=>{e.id?s(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||t.resourceId}:t)):s(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,r.default)(e.start).toISOString(),end:(0,r.default)(e.end).toISOString(),color:e.color||"blue",resourceId:v||void 0}])},onDelete:m?.id?()=>{m?.id&&s(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,c.jsx)(M.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:n.map(e=>({value:String(e.id),label:String(e.label)})),value:v,onChange:h})})]})},code:[{code:`import dayjs from 'dayjs';
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
`};var P=(0,t.__exportAll)({controlled:()=>T,dragDrop:()=>k,eventForm:()=>I,eventResize:()=>V,externalDragDrop:()=>W,staticMode:()=>Y,usage:()=>x,viewProps:()=>b,weekView:()=>R});e.s(["ResourcesScheduleDemos",0,P],853905)}]);