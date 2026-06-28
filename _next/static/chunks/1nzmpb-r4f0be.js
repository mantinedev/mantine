(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,499083,e=>{"use strict";var t=e.i(86473),r=e.i(27748),o=e.i(898496),a=e.i(4332),s=e.i(918006),n=e.i(625712),i=e.i(900513),d=e.i(688785),l=e.i(664397),c=e.i(969610),u=e.i(792930),m=e.i(505696),f=e.i(420924),D=e.i(640542),v=e.i(176304),y=e.i(461304),g=e.i(783261),p=e.i(376879),Y=e.i(201867),w=e.i(891343),h=e.i(67312),k=e.i(966696),S=e.i(612148),x=e.i(343355),M=e.i(367752),T=e.i(898770),b=e.i(657068),$=e.i(922552),E=e.i(539517),R=e.i(578373),I=e.i(494834),W=e.i(232471),j=e.i(284629),C=e.i(391398);function V({resource:e,resourceIndex:r,weekdays:o,slots:a,getStyles:s,children:n,labels:i,highlightBusinessHours:d,businessHours:l,withEventsDragAndDrop:c,onRowSlotsDragOver:u,onRowSlotsDragLeave:f,onRowSlotsDrop:D,onSlotClick:v,dropTargetSlotIndex:y,mode:g,slotsRef:p,firstSlotIndex:Y,onSlotKeyDown:w,withDragSlotSelect:h,onSlotPointerDown:k,isSlotDragSelected:S,rowSlotsContainerRef:x,renderResourceLabel:M,renderGroupLabel:T,scrolledX:b,groupInfo:$,allDayCount:E}){let R=String(e.id),I=o.flatMap((o,n)=>a.map((u,f)=>{let D=n*a.length+f,x=y===D,M=Y?.resourceIndex===r&&Y?.slotIndex===D,T=S?.(D,R)||!1;return(0,C.jsx)(j.UnstyledButton,{ref:e=>{if(!p?.current)return;p.current[r]||(p.current[r]=[]);let t=p.current[r];if(e)t[D]=e;else for(delete t[D];t.length>0&&null==t[t.length-1];)t.length-=1},...s("resourcesWeekViewRowSlot"),mod:{"hour-start":u.isHourStart,...(0,m.getBusinessHoursMod)({time:u.startTime,businessHours:l,highlightBusinessHours:d}),"drop-target":x,"drag-selected":T,static:"static"===g},"aria-label":`${(0,t.getLabel)("resourceSlot",i)} ${e.label} ${o} ${u.startTime} - ${u.endTime}`,tabIndex:"static"===g?-1:M?0:-1,"data-drag-slot-index":h&&"static"!==g?D:void 0,"data-drag-slot-group":h&&"static"!==g?R:void 0,onKeyDown:e=>{w&&w(e,r,D)},onPointerDown:h&&"static"!==g?e=>k?.(e,D,R):void 0,onClick:"static"!==g&&v?t=>v(e.id,o,u.startTime,t):void 0,onDragOver:c&&"static"!==g?e=>e.preventDefault():void 0},`${o}-${u.startTime}`)})),H=$?.position==="first"||$?.position==="only",N=void 0!==$?null!==$?(0,C.jsx)(W.Box,{...s("resourcesWeekViewGroupColumn"),mod:{"scrolled-x":b,"group-position":$.position},children:H&&(0,C.jsx)("span",{style:$.count>1?{transform:`translateY(calc((${$.count-1} * (var(--resources-week-view-row-height) + 1px)) / 2))`}:void 0,children:T?T($.group):$.group.label})}):(0,C.jsx)(W.Box,{...s("resourcesWeekViewGroupColumnEmpty"),mod:{"scrolled-x":b}}):null;return(0,C.jsxs)(W.Box,{...s("resourcesWeekViewRow"),children:[N,(0,C.jsx)(W.Box,{...s("resourcesWeekViewResourceLabel"),mod:{"scrolled-x":b,"has-groups":void 0!==$},children:M?M(e):e.label}),(0,C.jsxs)(W.Box,{ref:x,...s("resourcesWeekViewRowSlots",{style:E?{minHeight:`max(var(--resources-week-view-row-height), calc(${E} * (var(--resources-week-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:c&&"static"!==g?t=>u?.(t,e.id,r):void 0,onDragLeave:c&&"static"!==g?f:void 0,onDrop:c&&"static"!==g?t=>D?.(t,e.id,r):void 0,children:[n,I]})]})}var H={resourcesWeekView:"m_ed4c47cf",resourcesWeekViewRoot:"m_5b5cbd51",resourcesWeekViewScrollArea:"m_b88ea29",resourcesWeekViewInner:"m_fbb9fc7",resourcesWeekViewHeaderRows:"m_7d7bb735",resourcesWeekViewCorner:"m_dd8b4f04",resourcesWeekViewHeaderContent:"m_85f2b19d",resourcesWeekViewDayLabelsRow:"m_cde0b68e",resourcesWeekViewDayLabel:"m_354e59a7",resourcesWeekViewTimeLabelsRow:"m_b7f0617f",resourcesWeekViewTimeLabel:"m_a6832518",resourcesWeekViewRow:"m_9fd9b38b",resourcesWeekViewResourceLabel:"m_9c6373f7",resourcesWeekViewGroupColumn:"m_fdcb5366",resourcesWeekViewGroupColumnEmpty:"m_3d5e7187",resourcesWeekViewRowSlots:"m_c534316a",resourcesWeekViewRowSlot:"m_ed965429",resourcesWeekViewBackgroundEvent:"m_3c19323d",resourcesWeekViewAllDayEvent:"m_682c45d0",resourcesWeekViewResizeHandle:"m_30c8fd6b",resourcesWeekViewEventWrapper:"m_2d13c608",resourcesWeekViewCurrentTimeIndicator:"m_6f70bf38",resourcesWeekViewCurrentTimeIndicatorLine:"m_be32874c",resourcesWeekViewCurrentTimeIndicatorThumb:"m_88ec57e",resourcesWeekViewCurrentTimeIndicatorTimeBubble:"m_9ff3db11"},N=e.i(19300),P=e.i(481178),B=e.i(275519),A=e.i(433512),L=e.i(779177),O=e.i(951254),_=e.i(44091),F=e.i(62904),z=e.i(391466),G=e.i(822933),U=e.i(417241),K=e.i(332977),Q=e.i(191788),X=e.i(205693);let q={__staticSelector:"ResourcesWeekView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,withHeader:!0,weekLabelFormat:"MMM DD",weekdayFormat:"ddd D",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withEventResize:!1,withDragSlotSelect:!1,withWeekendDays:!0,withCurrentTimeBubble:!0,highlightToday:!0,mode:"default",maxEventsPerTimeSlot:2},J=(0,P.createVarsResolver)((e,{radius:t,slotWidth:r,rowHeight:o,groupLabelWidth:a})=>({resourcesWeekView:{"--resources-week-view-radius":t?(0,A.getRadius)(t):void 0,"--resources-week-view-slot-width":(0,L.rem)(r),"--resources-week-view-row-height":(0,L.rem)(o),"--resources-week-view-group-label-width":(0,L.rem)(a)}})),Z=(0,B.factory)(e=>{let j=(0,_.useProps)("ResourcesWeekView",q,e),{classNames:P,className:B,style:A,styles:L,unstyled:Z,attributes:ee,vars:et,startTime:er,endTime:eo,date:ea,onDateChange:es,resources:en,intervalMinutes:ei,slotLabelFormat:ed,radius:el,startScrollDateTime:ec,scrollAreaProps:eu,locale:em,withCurrentTimeIndicator:ef,withCurrentTimeBubble:eD,__staticSelector:ev,withHeader:ey,onViewChange:eg,previousControlProps:ep,nextControlProps:eY,todayControlProps:ew,viewSelectProps:eh,weekLabelFormat:ek,renderWeekLabel:eS,events:ex,slotWidth:eM,rowHeight:eT,labels:eb,highlightBusinessHours:e$,businessHours:eE,renderEventBody:eR,renderEvent:eI,renderResourceLabel:eW,groups:ej,renderGroupLabel:eC,groupLabelWidth:eV,withEventsDragAndDrop:eH,onEventDrop:eN,canDragEvent:eP,onEventDragStart:eB,onEventDragEnd:eA,withEventResize:eL,onEventResize:eO,canResizeEvent:e_,onTimeSlotClick:eF,onEventClick:ez,withDragSlotSelect:eG,onSlotDragEnd:eU,mode:eK,onExternalEventDrop:eQ,recurrenceExpansionLimit:eX,maxEventsPerTimeSlot:eq,moreEventsProps:eJ,firstDayOfWeek:eZ,weekendDays:e0,withWeekendDays:e1,weekdayFormat:e8,highlightToday:e3,...e9}=j,e2=void 0!==eq?Math.max(1,eq):void 0,e4=(0,z.useStyles)({name:ev,classes:H,props:j,className:B,style:A,classNames:P,styles:L,unstyled:Z,vars:et,varsResolver:J,attributes:ee,rootSelector:"resourcesWeekView"}),{resolvedClassNames:e6,resolvedStyles:e7}=(0,F.useResolvedStylesApi)({classNames:P,styles:L,props:j}),e5={classNames:e6,styles:e7,attributes:ee,__staticSelector:ev,radius:el},te=(0,O.useMantineTheme)(),[tt,tr]=(0,Q.useState)(!1),[to,ta]=(0,Q.useState)(!1),ts=(0,X.useDatesContext)(),tn=(0,o.getDayTimeIntervals)({startTime:er,endTime:eo,intervalMinutes:ei}),{orderedResources:ti,groupRanges:td,resourceGroupMap:tl}=(0,Q.useMemo)(()=>(0,f.getOrderedResources)(en,ej),[en,ej]),tc=td.length>0,tu=(0,Q.useMemo)(()=>(0,s.getWeekDays)({week:ea,withWeekendDays:e1,weekendDays:ts.getWeekendDays(e0),firstDayOfWeek:ts.getFirstDayOfWeek(eZ)}),[ea,e1,e0,eZ,ts]),tm=tn.length,tf=tu.some(e=>(0,I.default)(e).isSame((0,I.default)(),"day")),[tD,tv]=(0,Q.useState)((0,d.getCurrentTimePosition)({startTime:er,endTime:eo,intervalMinutes:ei}));(0,G.useInterval)(()=>tv((0,d.getCurrentTimePosition)({startTime:er,endTime:eo,intervalMinutes:ei})),6e4,{autoInvoke:!0});let ty=tu.findIndex(e=>(0,I.default)(e).isSame((0,I.default)(),"day")),tg=(ef??tf)&&ty>=0&&(0,l.isInTimeRange)({date:(0,I.default)().toDate(),startTime:er,endTime:eo}),tp=eD?(0,r.formatDate)({locale:ts.getLocale(em),date:(0,I.default)(),format:ed}):"",tY=(0,Q.useCallback)((e,t)=>{if(!eQ)return;let r=Math.floor(t.slotIndex/tm),o=t.slotIndex%tm,a=tu[r];a&&eQ({dataTransfer:e.dataTransfer,dropDateTime:`${(0,I.default)(a).format("YYYY-MM-DD")} ${tn[o].startTime}`,resourceId:t.resourceId})},[eQ,tn,tu,tm]),tw=(0,Q.useRef)(void 0),th=(0,g.useDragDropHandlers)({enabled:eH,mode:eK,onEventDrop:(0,Q.useCallback)(e=>{eN?.({...e,resourceId:tw.current})},[eN]),canDragEvent:eP,onEventDragStart:eB,onEventDragEnd:eA,calculateDropTarget:(e,t)=>{tw.current=e.resourceId;let r=Math.floor(e.slotIndex/tm),o=tn[e.slotIndex%tm].startTime;return(0,u.calculateDropTime)({draggedEvent:t,targetDate:tu[r]||tu[0],targetSlotTime:o,intervalMinutes:ei})},onExternalDrop:eQ?tY:void 0}),tk=(0,Q.useMemo)(()=>(0,v.getGroupToResourceIdMap)(en),[en]),tS=(0,p.useSlotDragSelect)({enabled:eG&&"static"!==eK,onDragEnd:(e,t,r)=>{if(!eU)return;let o=Math.floor(e/tm),a=e%tm,s=Math.floor(t/tm),n=t%tm,i=tu[o],d=tu[s];i&&d&&eU({rangeStart:`${(0,I.default)(i).format("YYYY-MM-DD")} ${tn[a].startTime}`,rangeEnd:`${(0,I.default)(d).format("YYYY-MM-DD")} ${tn[n].endTime}`,resourceId:tk.get(r)??r})}}),tx=(0,x.useHorizontalEventResize)({enabled:eL,mode:eK,startTime:er,endTime:eo,intervalMinutes:ei,onEventResize:eO,canResizeEvent:e_}),tM=(eH||!!eQ)&&"static"!==eK,tT=(e,t,r,o)=>{if(!eF)return;let a=tn.findIndex(e=>e.startTime===r);if(-1===a)return;let s=tn[a],n=(0,I.default)(t).format("YYYY-MM-DD");eF({slotStart:`${n} ${s.startTime}`,slotEnd:`${n} ${s.endTime}`,nativeEvent:o,resourceId:e})},tb=(0,Q.useMemo)(()=>(function({events:e,resources:t,weekdays:r,startTime:o,endTime:a,expansionLimit:s}){let n=(0,b.expandRecurringEvents)({events:e,rangeStart:(0,I.default)(r[0]).startOf("day").toDate(),rangeEnd:(0,I.default)(r[r.length-1]).endOf("day").toDate(),expansionLimit:s});if(n){let e=new Set;for(let t of n){if(e.has(t.id))throw Error(`[@mantine/schedule] ResourcesWeekView: Duplicated event ids found: ${t.id}`);e.add(t.id)}}let i={},d=new Set,l=e=>"background"!==e.display&&(0,T.isMultidayEvent)(e);for(let e of r){let r=n?.filter(t=>{if(d.has(t.id)||l(t))return!1;let r=(0,I.default)(t.start),o=(0,I.default)(e).startOf("day");return r.isSame(o,"day")?(d.add(t.id),!0):!!("background"===t.display&&r.isBefore((0,I.default)(e).endOf("day"))&&(0,I.default)(t.end).isAfter(o))});i[e]=(0,R.getResourcesDayViewEvents)({events:r,resources:t,date:e,startTime:o,endTime:a})}let c={};for(let e of t)c[e.id]=[];if(r.forEach((e,r)=>{for(let o of t)for(let t of i[e].allDayEvents[o.id]??[])c[o.id].push({event:t,startDayIndex:r,endDayIndex:r,row:0})}),n)for(let e of n){if(!l(e)||void 0===e.resourceId||!(e.resourceId in c))continue;let t=(0,$.calculateEventDays)({event:e,weekDays:r,actualEndDate:(0,E.getEventEndDate)(e)});0!==t.length&&c[e.resourceId].push({event:e,startDayIndex:r.indexOf(t[0]),endDayIndex:r.indexOf(t[t.length-1]),row:0})}for(let e of t)!function(e){let t=e.map((e,t)=>({bar:e,index:t})).sort((e,t)=>e.bar.startDayIndex-t.bar.startDayIndex||e.bar.endDayIndex-t.bar.endDayIndex||e.index-t.index),r=[];for(let{bar:e}of t){let t=0;for(;t<r.length&&r[t]>=e.startDayIndex;)t+=1;r[t]=e.endDayIndex,e.row=t}}(c[e.id]);return{byDay:i,allDayBars:c}})({events:ex,resources:en,weekdays:tu,startTime:er,endTime:eo,expansionLimit:eX}),[ex,en,tu,er,eo,eX]),t$=tu.map(e=>{let t=(0,I.default)(e),o=t.isSame((0,I.default)(),"day")&&e3,a=ts.getWeekendDays(e0).includes(t.day());return(0,Q.createElement)(W.Box,{...e4("resourcesWeekViewDayLabel"),key:e,mod:{today:o,weekend:a},style:{width:`calc(var(--resources-week-view-slot-width) * ${tm})`}},(0,r.formatDate)({date:t,locale:ts.getLocale(em),format:e8}))}),tE=tu.flatMap(e=>tn.map(t=>{let o=(0,r.formatDate)({date:(0,I.default)(`${(0,I.default)(e).format("YYYY-MM-DD")} ${t.startTime}`),locale:ts.getLocale(em),format:ed});return(0,Q.createElement)(W.Box,{...e4("resourcesWeekViewTimeLabel"),key:`${e}-${t.startTime}`,mod:{"hour-start":t.isHourStart,...(0,m.getBusinessHoursMod)({time:t.startTime,businessHours:eE,highlightBusinessHours:e$})}},o)})),tR=(0,Q.useRef)([]),tI=(0,Q.useRef)([]),tW=(0,Q.useRef)(null),tj=(0,K.useMergedRef)(tW,eu?.viewportRef),tC={resourceIndex:0,slotIndex:0};(0,U.useIsomorphicEffect)(()=>{if(!ec||!tW.current)return;let e=(0,I.default)(ec),t=e.format("YYYY-MM-DD 00:00:00"),r=e.format("HH:mm:ss"),o=tu.indexOf(t);if(o<0)return;let a=tn.findIndex(e=>e.startTime>=r);if(a<0)return;let s=o*tm+a,n=tR.current[0];if(!n||0===n.length)return;let i=n[s];if(!i)return;let d=i.getBoundingClientRect(),l=tW.current.getBoundingClientRect(),c=tW.current.querySelector(`.${H.resourcesWeekViewCorner}`),u=c?c.getBoundingClientRect().width:0;tW.current.scrollTo({left:d.left-l.left-u,top:0})},[]);let tV=(0,Q.useCallback)((e,t)=>(0,y.getIndexFromDragPoint)(tR.current[t]??[],e.clientX),[]),tH=(e,t,r)=>{(0,D.handleResourcesGridKeyDown)({controlsRef:tR,resourceIndex:t,slotIndex:r,event:e})},tN=100/tu.length,tP=ti.map((e,t)=>{let r=[],o=tb.allDayBars[e.id]??[],a=o.reduce((e,t)=>Math.max(e,t.row+1),0);tu.forEach((o,a)=>{let s=tb.byDay[o];if(!s)return;let n=a/tu.length*100;for(let t of[...s.backgroundTimedEvents[e.id]||[],...s.backgroundAllDayEvents[e.id]||[]]){let e=te.variantColorResolver({color:t.color||te.primaryColor,theme:te,variant:"light",autoContrast:!0}),a="function"==typeof eR?eR(t):t.title,s={key:`bg-${t.id}-${o}`,...e4("resourcesWeekViewBackgroundEvent",{style:{left:`${n+t.position.top/100*tN}%`,width:`${t.position.height/100*tN}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":e.background,"--bg-event-color":e.color},children:a};"function"==typeof eI?r.push(eI(t,s)):r.push((0,C.jsx)(W.Box,{...s}))}let i=(s.regularEvents[e.id]||[]).filter(e=>!(0,c.isAllDayEvent)({event:e,date:o}));for(let e of void 0!==e2?i.filter(e=>e.position.column<e2):i){let s=th.isDraggableEvent(e),i=tx.isResizableEvent(e),d=tx.getResizePosition(e.id),l=null!==d,c=l&&tx.resizingEdge?tx.resizingEdge:null,u=d?d.left:e.position.top,m=d?d.width:e.position.height,f=n+u/100*tN,D=m/100*tN,v=i?te.variantColorResolver({color:e.color||te.primaryColor,theme:te,variant:e.variant||"light",autoContrast:!0}):null,y=void 0!==e2&&e.position.overlaps>e2,g=(0,I.default)(o).format("YYYY-MM-DD");r.push((0,C.jsxs)(W.Box,{...e4("resourcesWeekViewEventWrapper"),__vars:v?{"--event-color":v.color}:void 0,"data-resizing":l||void 0,style:{left:`calc(${f}% + 1px)`,top:y?`calc((100% - 22px) * ${e.position.column} / ${e2})`:`${e.position.offset}%`,width:`calc(${D}% - 2px)`,height:y?`calc((100% - 22px) / ${e2})`:`${e.position.width}%`},children:[(0,C.jsx)(w.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:s,isResizing:l,renderEventBody:eR,renderEvent:eI,radius:el,mode:eK,onClick:ez?t=>{tx.wasResizing()||ez(e,t)}:void 0,style:{width:"100%",height:"100%"}}),i&&"static"!==eK&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{...e4("resourcesWeekViewResizeHandle"),"data-edge":"start","data-active":"start"===c||void 0,onPointerDown:r=>{let o=tI.current[t];o&&tx.handleResizeStart({event:e,edge:"start",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:g,dayIndex:a,dayCount:tu.length,pointerEvent:r})}}),(0,C.jsx)("div",{...e4("resourcesWeekViewResizeHandle"),"data-edge":"end","data-active":"end"===c||void 0,onPointerDown:r=>{let o=tI.current[t];o&&tx.handleResizeStart({event:e,edge:"end",container:o,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:g,dayIndex:a,dayCount:tu.length,pointerEvent:r})}})]})]},`${e.id}-${o}`))}if(void 0!==e2)for(let t of(0,M.getOverlapClusters)(i)){let a=t.filter(e=>e.position.column>=e2).length;if(a>0&&"static"!==eK){let s=n+Math.min(...t.map(e=>e.position.top))/100*tN,i=n+Math.max(...t.map(e=>e.position.top+e.position.height))/100*tN;r.push((0,C.jsx)(h.MoreEvents,{events:t,moreEventsCount:a,mode:eK,labels:eb,renderEventBody:eR,renderEvent:eI,onEventClick:ez,style:{position:"absolute",left:`calc(${s}% + 1px)`,width:`calc(${i-s}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...e5,...eJ},`more-${e.id}-${o}-${t[0].id}`))}}});let s=tc?"calc(var(--resources-week-view-group-label-width) + var(--resources-week-view-resource-label-width) + 5px)":"calc(var(--resources-week-view-resource-label-width) + 5px)";return o.forEach(e=>{let t=e.startDayIndex*tN,o=(e.endDayIndex-e.startDayIndex+1)*tN;r.push((0,C.jsx)("div",{...e4("resourcesWeekViewAllDayEvent",{style:{left:`calc(${t}% + 1px)`,width:`calc(${o}% - 2px)`,top:`calc(${e.row} * (var(--resources-week-view-all-day-height) + 2px) + 2px)`}}),children:(0,C.jsx)(w.ScheduleEvent,{event:e.event,autoSize:!0,nowrap:!0,renderEventBody:e=>(0,C.jsx)("span",{style:{position:"sticky",insetInlineStart:s,display:"inline-block",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis"},children:eR?eR(e):e.title}),renderEvent:eI,radius:el,mode:eK,onClick:ez?t=>ez(e.event,t):void 0,style:{width:"100%",height:"100%",overflow:"visible"},styles:{eventInner:{display:"block",overflow:"visible",lineHeight:"var(--resources-week-view-all-day-height)"}}})},`all-day-${e.event.id}-${e.startDayIndex}`))}),(0,C.jsx)(V,{resource:e,resourceIndex:t,weekdays:tu,slots:tn,getStyles:e4,labels:eb,highlightBusinessHours:e$,businessHours:eE,withEventsDragAndDrop:tM,mode:eK,slotsRef:tR,firstSlotIndex:tC,onSlotKeyDown:tH,onSlotClick:tT,onRowSlotsDragOver:(e,t,r)=>{let o=tV(e,r);null!==o&&th.handleDragOver(e,{resourceId:t,slotIndex:o})},onRowSlotsDragLeave:th.handleDragLeave,onRowSlotsDrop:(e,t,r)=>{let o=tV(e,r);null!==o&&th.handleDrop(e,{resourceId:t,slotIndex:o})},dropTargetSlotIndex:th.dropTarget?.resourceId===e.id?th.dropTarget.slotIndex:void 0,withDragSlotSelect:eG,onSlotPointerDown:tS.handleSlotPointerDown,isSlotDragSelected:tS.isSlotSelected,rowSlotsContainerRef:e=>{tI.current[t]=e},renderResourceLabel:eW,renderGroupLabel:eC,scrolledX:to,groupInfo:tc?tl[t]:void 0,allDayCount:a,children:r},e.id)}),tB=(0,S.getWeekLabel)({weekdays:tu,locale:ts.getLocale(em),weekLabelFormat:ek,renderWeekLabel:eS}),tA=ty>=0?(ty+tD/100)/tu.length*100:0,tL=(0,C.jsxs)(W.Box,{...e4("resourcesWeekView"),mod:{static:"static"===eK,"slot-dragging":tS.isDragging,resizing:tx.isResizing,"event-interaction":tx.isResizing||th.dragContextValue.isDragging},...e9,children:[ey&&(0,C.jsx)(k.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>(0,i.previousWeek)(ea,ts.getFirstDayOfWeek(eZ)),next:()=>(0,n.nextWeek)(ea,ts.getFirstDayOfWeek(eZ)),today:()=>(0,a.toDateString)((0,I.default)())},control:{miw:180,title:tB},labels:eb,onDateChange:es,onViewChange:eg,previousControlProps:ep,nextControlProps:eY,todayControlProps:ew,viewSelectProps:{views:["day","week","month"],...eh},stylesApiProps:e5}),(0,C.jsx)(W.Box,{...e4("resourcesWeekViewRoot"),children:(0,C.jsx)(N.ScrollArea,{scrollbarSize:4,...eu,...e4("resourcesWeekViewScrollArea",{className:eu?.className,style:eu?.style}),onScrollPositionChange:e=>{eu?.onScrollPositionChange?.(e),tr(0!==e.y),ta(0!==e.x)},viewportRef:tj,children:(0,C.jsxs)("div",{...e4("resourcesWeekViewInner"),children:[(0,C.jsxs)("div",{...e4("resourcesWeekViewHeaderRows"),children:[(0,Q.createElement)("div",{...e4("resourcesWeekViewCorner"),key:"corner",style:tc?{flexBasis:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))",minWidth:"calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",eb)),(0,C.jsxs)("div",{...e4("resourcesWeekViewHeaderContent"),children:[(0,C.jsx)("div",{...e4("resourcesWeekViewDayLabelsRow"),children:t$}),(0,C.jsx)(W.Box,{...e4("resourcesWeekViewTimeLabelsRow"),mod:{scrolled:tt},children:tE})]})]}),tP,tg&&(0,C.jsxs)(W.Box,{...e4("resourcesWeekViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":tc?`calc(var(--resources-week-view-resource-label-width) + var(--resources-week-view-group-label-width) + (100% - var(--resources-week-view-resource-label-width) - var(--resources-week-view-group-label-width)) * ${tA} / 100)`:`calc(var(--resources-week-view-resource-label-width) + (100% - var(--resources-week-view-resource-label-width)) * ${tA} / 100)`,"--_time-bubble-width":tp?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[eD&&(0,C.jsx)("div",{...e4("resourcesWeekViewCurrentTimeIndicatorTimeBubble"),children:tp}),!eD&&(0,C.jsx)("div",{...e4("resourcesWeekViewCurrentTimeIndicatorThumb")}),(0,C.jsx)("div",{...e4("resourcesWeekViewCurrentTimeIndicatorLine")})]})]})})})]}),tO=(0,Q.useMemo)(()=>th.dragContextValue,[th.dragContextValue]);return eH?(0,C.jsx)(Y.DragContext.Provider,{value:tO,children:tL}):tL});Z.displayName="@mantine/schedule/ResourcesWeekView",Z.classes=H,Z.varsResolver=J,e.s(["ResourcesWeekView",0,Z],499083)},259072,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,r.default)().add(2,"day").format("YYYY-MM-DD"),n=(0,r.default)().add(3,"day").format("YYYY-MM-DD"),i=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],d=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${a} 09:30:00`,end:`${a} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${o} 13:00:00`,end:`${o} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${a} 11:00:00`,end:`${a} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${a} 10:00:00`,end:`${a} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${o} 15:00:00`,end:`${o} 16:00:00`,color:"grape",resourceId:"london"},{id:9,title:"Product Demo",start:`${s} 09:00:00`,end:`${s} 10:00:00`,color:"teal",resourceId:"tokyo"},{id:10,title:"Budget Review",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"indigo",resourceId:"paris"}],l=`
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
`;var c=e.i(191788),u=e.i(391398),m=e.i(499083);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D=(0,r.default)().startOf("week").add(1,"day"),v=e=>D.add(e,"day").format("YYYY-MM-DD"),y=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],g=[{id:1,title:"Offsite",start:`${v(1)} 00:00:00`,end:`${v(2)} 00:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Review",start:`${v(1)} 00:00:00`,end:`${v(2)} 00:00:00`,color:"grape",resourceId:"tokyo"},{id:3,title:"Sprint Planning",start:`${v(0)} 10:00:00`,end:`${v(0)} 11:30:00`,color:"green",resourceId:"tokyo"},{id:4,title:"Maintenance",start:`${v(2)} 00:00:00`,end:`${v(3)} 00:00:00`,color:"gray",display:"background",resourceId:"paris"},{id:5,title:"Client Call",start:`${v(1)} 09:30:00`,end:`${v(1)} 10:30:00`,color:"violet",resourceId:"paris"},{id:6,title:"Holiday",start:`${v(4)} 00:00:00`,end:`${v(5)} 00:00:00`,color:"orange",resourceId:"new-york"}],p={defaultExpanded:!1,type:"code",component:function(){let e=(0,r.default)().format("YYYY-MM-DD"),[t,o]=(0,c.useState)(e);return(0,u.jsx)(m.ResourcesWeekView,{date:t,onDateChange:o,resources:y,events:g,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`})},code:[{code:`
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
`,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,c.useState)(d);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,c.useState)(d);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{a(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var h=e.i(162077),k=e.i(988798);let S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,c.useState)(d),[s,n]=(0,c.useState)(!1),[l,f]=(0,c.useState)(null),[D,v]=(0,c.useState)(String(i[0].id));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{v(r?String(r):String(i[0].id)),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{v(r?String(r):String(i[0].id)),f({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onEventClick:e=>{v(e.resourceId?String(e.resourceId):String(i[0].id)),f({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),n(!0)}}),(0,u.jsx)(h.EventForm,{opened:s,onClose:()=>n(!1),onExitTransitionEnd:()=>f(null),values:l,onSubmit:e=>{e.id?a(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:D||i[0].id}:t)):a(t=>[...t,{id:Date.now(),title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:D||i[0].id}])},onDelete:l?.id?()=>{l?.id&&a(e=>e.filter(e=>e.id!==l.id))}:void 0,children:(0,u.jsx)(k.Select,{label:"Conference Room",placeholder:"Select a room",radius:"md",data:i.map(e=>({value:String(e.id),label:String(e.label)})),value:D,onChange:v})})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:h._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,mode:"static"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"07:00:00",endTime:"20:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withWeekendDays:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var b=e.i(671640),$=e.i(883364);let E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,renderResourceLabel:e=>(0,u.jsxs)(b.Stack,{gap:2,align:"flex-start",children:[(0,u.jsx)($.Text,{size:"sm",fw:600,children:e.label}),(0,u.jsx)($.Text,{size:"xs",c:"dimmed",children:"Floor 2"})]})})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var R=e.i(19683),I=e.i(369974),W=e.i(284629);let j=(0,r.default)().format("YYYY-MM-DD"),C=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),V=(0,r.default)().add(2,"day").format("YYYY-MM-DD"),H=[{id:1,title:"Team Standup",start:`${j} 09:00:00`,end:`${j} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${j} 10:00:00`,end:`${j} 11:30:00`,color:"green",resourceId:"tokyo",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Client Call",start:`${C} 09:30:00`,end:`${C} 10:30:00`,color:"violet",resourceId:"paris",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:4,title:"Design Review",start:`${j} 13:00:00`,end:`${j} 14:00:00`,color:"orange",resourceId:"paris",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:5,title:"Workshop",start:`${V} 14:00:00`,end:`${V} 16:00:00`,color:"pink",resourceId:"new-york",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD")),[o,a]=(0,c.useState)(H);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:o,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{a(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},renderEvent:(e,t)=>(0,u.jsxs)(I.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,u.jsx)(I.HoverCard.Target,{children:(0,u.jsx)(W.UnstyledButton,{...t})}),(0,u.jsx)(I.HoverCard.Dropdown,{children:(0,u.jsx)(R.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:R._eventDetailsCode,language:"tsx"},{fileName:"data.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(H,null,2)};`,language:"tsx"}]};e.i(27355);let P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente",resources:"Recursos"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,radius:"md"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 10:00:00`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`,scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"09:00:00",endTime:"17:00:00",intervalMinutes:30,startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 09:00:00`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"00:00:00",endTime:"23:59:59",withCurrentTimeIndicator:!0,withCurrentTimeBubble:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0,withWeekendDays:!0,weekdayFormat:"dddd D"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:i,events:d,startTime:"08:00:00",endTime:"18:00:00",renderWeekLabel:({weekStart:e,weekEnd:t})=>`Week of ${(0,r.default)(e).format("MMM D")} – ${(0,r.default)(t).format("MMM D, YYYY")}`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},G=(0,r.default)().format("YYYY-MM-DD"),U=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],K=[{id:1,title:"Team Standup",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${G} 09:00:00`,end:`${G} 10:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Code Review",start:`${G} 09:30:00`,end:`${G} 10:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"1:1 Meeting",start:`${G} 09:15:00`,end:`${G} 10:15:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Client Call",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"cyan",resourceId:"paris"},{id:6,title:"Design Review",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Architecture Review",start:`${G} 09:00:00`,end:`${G} 10:00:00`,color:"red",resourceId:"paris"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:U,events:K,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${G} 08:00:00`,maxEventsPerTimeSlot:2})},code:`
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
`},X=(0,r.default)().format("YYYY-MM-DD"),q=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],J=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,r.default)(X).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,r.default)(X).subtract(2,"day").format("YYYY-MM-DD")} 11:00:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${X} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${X} 14:00:00`,end:`${X} 16:00:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${X} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${X} 11:00:00`,end:`${X} 13:00:00`,color:"green",resourceId:"paris"}],Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)(X);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:q,events:J,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${X} 08:00:00`})},code:`
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
`},ee=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"},{id:"overflow",label:"Overflow room"}],et=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york","london"]}],er={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:ee,events:d,groups:et,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,r.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"}]};var eo=(0,t.__exportAll)({allDayEvents:()=>p,businessHours:()=>M,currentTimeIndicator:()=>_,dragDrop:()=>Y,eventForm:()=>S,eventResize:()=>w,firstDayOfWeek:()=>F,localization:()=>P,maxEventsPerTimeSlot:()=>Q,radius:()=>B,recurringEvents:()=>Z,renderEvent:()=>N,renderResourceLabel:()=>E,renderWeekLabel:()=>z,resourceGroups:()=>er,scrollAreaProps:()=>L,startScrollDateTime:()=>A,staticMode:()=>x,timeRange:()=>O,usage:()=>f,withoutWeekendDays:()=>T});e.s(["ResourcesWeekViewDemos",0,eo],259072)}]);