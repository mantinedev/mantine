(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,315401,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(855578),r=e.i(898496),o=e.i(4332),i=e.i(441058),d=e.i(494834);function s({week:e,weekendDays:t,withWeekendDays:a=!0,firstDayOfWeek:n=1}){let r=[],l=(0,d.default)((0,i.getStartOfWeek)({date:e,firstDayOfWeek:n}));for(let e=0;e<7;e+=1){let e=l.day();(!(t&&t.includes(e))||a)&&r.push((0,o.toDateString)(l)),l=l.add(1,"day")}return r}var l=e.i(969610),u=e.i(792930),c=e.i(505696),m=e.i(657068),f=e.i(245086),v=e.i(783261),D=e.i(637079),p=e.i(376879),g=e.i(312709),w=e.i(201867),y=e.i(891343),h=e.i(966696),Y=e.i(298008),k=e.i(68642),S=e.i(813982),E=e.i(532965),x=e.i(751198);function M({event:e,weekDays:t,actualEndDate:a}){let n=(0,d.default)(e.start).startOf("day");return t.filter(e=>{let t=(0,d.default)(e).startOf("day");return(t.isAfter(n)||t.isSame(n))&&(t.isBefore(a)||t.isSame(a))})}function T(e){let t=(0,d.default)(e.end).startOf("day");return 0===(0,d.default)(e.end).hour()&&0===(0,d.default)(e.end).minute()?t.subtract(1,"day"):t}function b({eventStartDate:e,actualEndDate:t,weekDays:a}){let n=(0,d.default)(a[0]),r=(0,d.default)(a[a.length-1]),o=e.isBefore(n),i=t.isAfter(r);return o&&i?"both":o?"start":i?"end":"none"}var W=e.i(232471),j=e.i(284629),C=e.i(205693),$=e.i(391398);function O({day:e,dayIndex:a,slots:n,getStyles:r,weekendDays:o,children:i,labels:s,highlightBusinessHours:l,businessHours:u,withEventsDragAndDrop:m,onDaySlotsDragOver:f,onDaySlotsDragLeave:v,onDaySlotsDrop:D,onSlotClick:p,dropTargetSlotIndex:g,mode:w,slotsRef:y,firstSlotIndex:h,onSlotKeyDown:Y,onFirstSlotArrowUp:k,withDragSlotSelect:S,onSlotPointerDown:E,isSlotDragSelected:x,daySlotsContainerRef:M,getTimeSlotProps:T}){let b=(0,C.useDatesContext)().getWeekendDays(o).includes((0,d.default)(e).day()),H=(0,d.default)(e).isSame((0,d.default)(),"day"),V=(0,d.default)(e).format("YYYY-MM-DD"),A=n.map((n,o)=>{let i=g===o,d=h?.dayIndex===a&&h?.slotIndex===o,f=x?.(o,V)||!1,v=`${V} ${n.startTime}`,D=`${V} ${n.endTime}`,{onClick:M,...b}=T?.({start:v,end:D})||{},W="static"===w?void 0:t=>{p?.(String(e),n.startTime,t),M?.(t)};return(0,$.jsx)(j.UnstyledButton,{ref:e=>{e&&y?.current&&(y.current[a]||(y.current[a]=[]),y.current[a][o]=e)},...r("weekViewDaySlot"),mod:{"hour-start":n.isHourStart,...(0,c.getBusinessHoursMod)({time:n.startTime,businessHours:u,highlightBusinessHours:l}),"drop-target":i,"drag-selected":f,static:"static"===w},"aria-label":`${(0,t.getLabel)("timeSlot",s)} ${V} ${n.startTime} - ${n.endTime}`,tabIndex:"static"===w?-1:d?0:-1,"data-drag-slot-index":S&&"static"!==w?o:void 0,"data-drag-slot-group":S&&"static"!==w?V:void 0,onKeyDown:e=>{0===o&&"ArrowUp"===e.key&&k?(e.preventDefault(),k(a)):Y&&Y(e,a,o)},onPointerDown:S&&"static"!==w?e=>E?.(e,o,V):void 0,onClick:W,onDragOver:m&&"static"!==w?e=>e.preventDefault():void 0,...b},n.startTime)});return(0,$.jsx)(W.Box,{...r("weekViewDay"),mod:{today:H,weekend:b},children:(0,$.jsxs)(W.Box,{ref:M,mod:{today:H},...r("weekViewDaySlots"),onDragOver:m&&"static"!==w?t=>f?.(t,String(e),a):void 0,onDragLeave:m&&"static"!==w?v:void 0,onDrop:m&&"static"!==w?t=>D?.(t,String(e),a):void 0,children:[i,A]})})}var H={weekView:"m_42b9032d",weekViewRoot:"m_6b2099af",weekViewInner:"m_f8734f29",weekViewScrollArea:"m_44818807",weekViewHeader:"m_13bcfc1a",weekViewCorner:"m_bc98be2",weekViewSlotLabels:"m_149dcaaa",weekViewSlotLabel:"m_29f492e9",weekViewDay:"m_98199d2f",weekViewDayLabel:"m_ccf0d705",weekViewDayNumber:"m_d5b28558",weekViewDayWeekday:"m_a0fc06f9",weekViewBackgroundEvent:"m_41ce8f1f",weekViewDaySlots:"m_cd58ae46",weekViewDaySlot:"m_8ac0cbcd",weekViewWeekLabel:"m_838426b3",weekViewWeekNumber:"m_f1892b6a",weekViewAllDaySlots:"m_4f08474d",weekViewAllDaySlotsLabel:"m_85cdcfa7",weekViewAllDaySlotsEvents:"m_2923a6c6",weekViewAllDaySlotsList:"m_77edfd8b"},V=e.i(19300),A=e.i(481178),I=e.i(275519),R=e.i(433512),B=e.i(779177),_=e.i(951254),L=e.i(44091),z=e.i(62904),N=e.i(391466),F=e.i(417241),P=e.i(332977),G=e.i(191788);let Z={__staticSelector:"WeekView",withWeekendDays:!0,withCurrentTimeIndicator:!0,startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,weekdayFormat:"ddd",withWeekNumber:!0,withCurrentTimeBubble:!0,withAllDaySlots:!0,withHeader:!0,weekLabelFormat:"MMM DD",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},U=(0,A.createVarsResolver)((e,{radius:t,allDaySlotHeight:a,slotHeight:n})=>({weekView:{"--week-view-radius":void 0!==t?(0,R.getRadius)(t):void 0,"--week-view-all-day-slots-height":(0,B.rem)(a),"--week-view-slot-height":(0,B.rem)(n)}})),J=(0,I.factory)(e=>{var A;let I=(0,L.useProps)("WeekView",Z,e),{classNames:R,className:B,style:J,styles:K,unstyled:Q,attributes:q,vars:X,startTime:ee,endTime:et,date:ea,onDateChange:en,intervalMinutes:er,slotLabelFormat:eo,withWeekendDays:ei,weekendDays:ed,firstDayOfWeek:es,weekdayFormat:el,radius:eu,highlightToday:ec,withCurrentTimeIndicator:em,forceCurrentTimeIndicator:ef,scrollAreaProps:ev,locale:eD,withWeekNumber:ep,withCurrentTimeBubble:eg,withAllDaySlots:ew,__staticSelector:ey,withHeader:eh,onViewChange:eY,previousControlProps:ek,nextControlProps:eS,todayControlProps:eE,viewSelectProps:ex,weekLabelFormat:eM,events:eT,allDaySlotHeight:eb,slotHeight:eW,labels:ej,highlightBusinessHours:eC,businessHours:e$,renderEventBody:eO,renderEvent:eH,withEventsDragAndDrop:eV,onEventDrop:eA,canDragEvent:eI,onEventDragStart:eR,onEventDragEnd:eB,onTimeSlotClick:e_,onAllDaySlotClick:eL,onEventClick:ez,withDragSlotSelect:eN,onSlotDragEnd:eF,mode:eP,startScrollTime:eG,renderWeekLabel:eZ,onExternalEventDrop:eU,withEventResize:eJ,onEventResize:eK,canResizeEvent:eQ,recurrenceExpansionLimit:eq,getTimeSlotProps:eX,...e0}=I,e1=(0,N.useStyles)({name:ey,classes:H,props:I,className:B,style:J,classNames:R,styles:K,unstyled:Q,vars:X,varsResolver:U,attributes:q,rootSelector:"weekView"}),{resolvedClassNames:e2,resolvedStyles:e8}=(0,z.useResolvedStylesApi)({classNames:R,styles:K,props:I}),e4={classNames:e2,styles:e8,attributes:q,__staticSelector:ey,radius:eu},e3=(0,_.useMantineTheme)(),[e6,e9]=(0,G.useState)(!1),e5=(0,C.useDatesContext)(),e7=(0,r.getDayTimeIntervals)({startTime:ee,endTime:et,intervalMinutes:er}),te=(0,G.useRef)(null);(0,f.useAutoScrollOnDrag)({viewportRef:te,enabled:(eV||!!eU)&&"static"!==eP});let tt=(0,G.useCallback)((e,t)=>{if(!eU)return;let a=(0,d.default)(t.day).format("YYYY-MM-DD");eU(e.dataTransfer,`${a} ${e7[t.slotIndex].startTime}`)},[eU,e7]),ta=(0,G.useCallback)((e,t)=>{eU&&eU(e.dataTransfer,`${(0,d.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eU]),tn=(0,v.useDragDropHandlers)({enabled:eV,mode:eP,onEventDrop:eA,canDragEvent:eI,onEventDragStart:eR,onEventDragEnd:eB,calculateDropTarget:(e,t)=>{let a=e7[e.slotIndex].startTime;return(0,u.calculateDropTime)({draggedEvent:t,targetDate:e.day,targetSlotTime:a,intervalMinutes:er})},onExternalDrop:eU?tt:void 0}),tr=(0,v.useDragDropHandlers)({enabled:eV,mode:eP,onEventDrop:eA,canDragEvent:eI,onEventDragStart:eR,onEventDragEnd:eB,calculateDropTarget:(e,t)=>{let a=(0,d.default)(t.end).diff((0,d.default)(t.start),"millisecond"),n=(0,d.default)(e).startOf("day");return{start:n.toDate(),end:n.add(a,"millisecond").toDate()}},onExternalDrop:eU?ta:void 0}),to=(0,p.useSlotDragSelect)({enabled:eN&&"static"!==eP,onDragEnd:(e,t,a)=>{if(!eF)return;let n=(0,d.default)(a).format("YYYY-MM-DD");eF(`${n} ${e7[e].startTime}`,`${n} ${e7[t].endTime}`)}}),ti=(0,D.useEventResize)({enabled:eJ,mode:eP,startTime:ee,endTime:et,intervalMinutes:er,onEventResize:eK,canResizeEvent:eQ}),td=(eV||!!eU)&&"static"!==eP,ts=(e,t,a)=>{if(!e_)return;let n=(0,d.default)(e).format("YYYY-MM-DD"),r=e7.findIndex(e=>e.startTime===t);if(-1===r)return;let o=e7[r];e_({slotStart:`${n} ${o.startTime}`,slotEnd:`${n} ${o.endTime}`,nativeEvent:a})},tl=s({week:ea,withWeekendDays:ei,weekendDays:e5.getWeekendDays(ed),firstDayOfWeek:e5.getFirstDayOfWeek(es)}),tu=function({date:e,events:t,startTime:a,endTime:n,firstDayOfWeek:r=1,weekendDays:o=[0,6],withWeekendDays:i=!0}){let u=s({week:e,firstDayOfWeek:r,withWeekendDays:i,weekendDays:o}),c=u.length,m=(0,d.default)(u[0]),f=(0,d.default)(u[u.length-1]),v={allDayEvents:[],regularEvents:Object.fromEntries(u.map(e=>[e,[]])),backgroundEvents:Object.fromEntries(u.map(e=>[e,[]]))},D=new Map,p=new Map;for(let e of(0,S.sortEvents)(t)){if("background"===e.display){let t=(0,d.default)(e.start).startOf("day"),r=T(e),o=M({event:e,weekDays:u,actualEndDate:r}),i=b({eventStartDate:t,actualEndDate:r,weekDays:u});for(let t of o){let r=u.indexOf(t);if(-1===r)continue;let o=(0,d.default)(t),s=o.endOf("day"),m=(0,d.default)(e.start),f=(0,d.default)(e.end),D=m.isBefore(o)?o:m,p=f.isAfter(s)?s:f,g={...e,start:D.format("YYYY-MM-DD HH:mm:ss"),end:p.format("YYYY-MM-DD HH:mm:ss")},w=(0,l.isAllDayEvent)({event:g,date:t}),y=w?{top:0,height:100}:(0,E.getDayPosition)({event:g,startTime:a,endTime:n});if(!w&&y.height<=0)continue;let h=r/c*100;v.backgroundEvents[t].push({...e,position:{...y,allDay:w,column:0,width:100,offset:0,overlaps:1,weekOffset:h,row:0,hanging:i}})}continue}let t=(0,d.default)(e.start).startOf("day"),r=T(e),o=M({event:e,weekDays:u,actualEndDate:r});if(0===o.length)continue;let i=r.isAfter(t),s=b({eventStartDate:t,actualEndDate:r,weekDays:u}),f=o.some(t=>(0,l.isAllDayEvent)({event:e,date:t})),g=i||f,w=g?p:D,y=function(e){let t=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,allWeekDays:r}){let o=`col-${t}`;return!!e.has(o)&&e.get(o).some(e=>{let t=r.some(t=>(0,l.isAllDayEvent)({event:e,date:t})),o=(0,x.isEventsOverlap)(e,a);return n&&t?o:!n&&!t&&o})}({...e,columnIndex:t});)t++;return t}({columns:w,event:e,allDay:g,allWeekDays:u}),h=`col-${y}`;w.has(h)||w.set(h,[]),w.get(h).push(e);let Y=g?{top:0,height:100}:(0,E.getDayPosition)({event:e,startTime:a,endTime:n});if(g){let a=function({eventStartDate:e,weekStartDate:t,weekDays:a,visibleDaysCount:n,hangingStart:r}){let o=e;return r&&(o=t),a.some(e=>(0,d.default)(e).isSame(o,"day"))||(o=(0,d.default)(a[0])),(a.filter(e=>(0,d.default)(e).isBefore(o)||(0,d.default)(e).isSame(o,"day")).length-1)/n*100}({eventStartDate:t,weekStartDate:m,weekDays:u,visibleDaysCount:c,hangingStart:"start"===s||"both"===s});v.allDayEvents.push({...e,position:{...Y,allDay:g,column:y,width:0,offset:a,overlaps:0,row:0,hanging:s}})}else for(let t of o){let a=u.indexOf(t);if(-1===a)continue;let n=a/c*100;v.regularEvents[t].push({...e,position:{...Y,allDay:g,column:y,width:0,offset:0,overlaps:0,weekOffset:n,row:0,hanging:s}})}}for(let e of u){var g=v.regularEvents[e];for(let e of g){let t=e.position.column;for(let a of g)(0,x.isEventsOverlap)(e,a)&&(t=Math.max(t,a.position.column));let a=t+1;e.position.overlaps=a,e.position.width=100/a,e.position.offset=100*e.position.column/a}}if(v.allDayEvents.length>0){let e=function(e){let t=new Map;for(let a of e){let e=0;for(;;){let n=!1;for(let[r,o]of t.entries())if(o===e&&(0,x.isEventsOverlap)(a,r)){n=!0;break}if(!n)break;e++}t.set(a,e)}return t}(v.allDayEvents),t=new Set;for(let a of v.allDayEvents){let n=e.get(a);a.position.row=n,t.add(n)}let a=Math.max(...t)+1;for(let e of v.allDayEvents){let t=(0,d.default)(e.start).startOf("day"),n=T(e);e.position.width=function({eventStartDate:e,actualEndDate:t,weekStartDate:a,weekEndDate:n,weekDays:r,visibleDaysCount:o}){let i=e;e.isBefore(a)&&(i=a);let s=t;return t.isAfter(n)&&(s=n),r.filter(e=>((0,d.default)(e).isAfter(i)||(0,d.default)(e).isSame(i,"day"))&&((0,d.default)(e).isBefore(s)||(0,d.default)(e).isSame(s,"day"))).length/o*100}({eventStartDate:t,actualEndDate:n,weekStartDate:m,weekEndDate:f,weekDays:u,visibleDaysCount:c}),e.position.overlaps=a}}return v}({...A={date:ea,events:(0,m.expandRecurringEvents)({events:eT,rangeStart:(0,d.default)(tl[0]).startOf("day").toDate(),rangeEnd:(0,d.default)(tl[tl.length-1]).endOf("day").toDate(),expansionLimit:eq}),startTime:ee,endTime:et,firstDayOfWeek:e5.getFirstDayOfWeek(es),weekendDays:e5.getWeekendDays(ed),withWeekendDays:ei},events:function({date:e,events:t,startTime:a,endTime:n,firstDayOfWeek:r=1}){if(void 0===t)return[];let o=new Set,s=[];for(let l of t)if(function({event:e,targetWeek:t,firstDayOfWeek:a}){let n=(0,d.default)((0,i.getStartOfWeek)({date:t,firstDayOfWeek:a})),r=n.add(7,"day");return(0,d.default)(e.start).isBefore(r)&&(0,d.default)(e.end).isAfter(n)}({event:l,targetWeek:e,firstDayOfWeek:r})&&(0,k.isEventInTimeRange)({event:l,startTime:a,endTime:n})){if(s.push((0,Y.validateEvent)(l)),o.has(l.id))throw Error(`[@mantine/schedule] WeekView: Duplicated event ids found: ${l.id}`);o.add(l.id)}return s}(A)}),tc=e7.map(e=>{let t=(0,a.formatDate)({date:(0,d.default)(`${(0,d.default)(ea).format("YYYY-MM-DD")} ${e.startTime}`),locale:e5.getLocale(eD),format:eo});return(0,G.createElement)(W.Box,{...e1("weekViewSlotLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,c.getBusinessHoursMod)({time:e.startTime,businessHours:e$,highlightBusinessHours:eC})}},t)}),tm=(0,G.useRef)([]),tf=(0,G.useRef)([]),tv=(0,G.useRef)([]),tD=(0,G.useRef)([]),tp=(0,P.useMergedRef)(te,ev?.viewportRef),tg={dayIndex:0,slotIndex:0};(0,F.useIsomorphicEffect)(()=>{if(!eG||!te.current)return;let e=tm.current[0];if(!e||0===e.length)return;let t=e7.findIndex(e=>e.startTime>=eG);if(t<0)return;let a=e[t];if(!a)return;let n=a.getBoundingClientRect(),r=te.current.getBoundingClientRect();te.current.scrollTo({left:0,top:n.top-r.top})},[]);let tw=(0,G.useCallback)((e,t)=>{let a=tm.current[t]??[],n=a.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(n>=0)return n;let r=a[0],o=a[a.length-1];if(!r||!o)return null;let i=r.getBoundingClientRect(),d=o.getBoundingClientRect();return e.clientY<i.top?0:e.clientY>d.bottom?a.length-1:null},[]),ty=(e,t,a)=>{!function({controlsRef:e,dayIndex:t,slotIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,dayIndex:n,slotIndex:r,size:o}){let i=function({direction:e,dayIndex:t,slotIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":if(0===a)return null;return{dayIndex:t,slotIndex:a-1};case"down":if(a===r-1)return null;return{dayIndex:t,slotIndex:a+1};case"left":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{dayIndex:t-1,slotIndex:e}}case"right":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{dayIndex:t+1,slotIndex:e}}default:return null}}({direction:a,dayIndex:n,slotIndex:r,size:o});if(!i)return;let d=t.current?.[i.dayIndex]?.[i.slotIndex];d&&(d.disabled||d.getAttribute("data-hidden")?e({controlsRef:t,direction:a,dayIndex:i.dayIndex,slotIndex:i.slotIndex,size:o}):d.focus())}({controlsRef:e,direction:r,dayIndex:t,slotIndex:a,size:o})}}({controlsRef:tm,dayIndex:t,slotIndex:a,event:e})},th=em?ef?tl.findIndex(e=>(0,d.default)(e).day()===(0,d.default)().day()):tl.findIndex(e=>(0,d.default)(e).isSame((0,d.default)(),"date")):-1,tY=tl.map((e,n)=>(0,G.createElement)(j.UnstyledButton,{...e1("weekViewDayLabel"),key:e,ref:e=>{tv.current[n]=e},"aria-label":`${(0,t.getLabel)("weekday",ej)} ${(0,d.default)(e).format("YYYY-MM-DD")}`,mod:{today:(0,d.default)(e).isSame((0,d.default)(),"day")&&!!ec,weekend:e5.getWeekendDays(ed).includes((0,d.default)(e).day()),static:"static"===eP},tabIndex:"static"===eP?-1:0===n?0:-1,onKeyDown:"static"===eP?void 0:e=>{let t;"ArrowRight"===(t=e.key)&&n<tl.length-1?(e.preventDefault(),tv.current[n+1]?.focus()):"ArrowLeft"===t&&n>0&&(e.preventDefault(),tv.current[n-1]?.focus())},onClick:"static"===eP?void 0:()=>{eY?.("day"),en?.((0,o.toDateString)(e))}},(0,G.createElement)(W.Box,{...e1("weekViewDayWeekday"),key:"weekday"},(0,a.formatDate)({locale:e5.getLocale(eD),date:e,format:el})),(0,G.createElement)("div",{...e1("weekViewDayNumber"),key:"date"},(0,d.default)(e).date()))),tk=tl.map((e,t)=>{let a=(tu.backgroundEvents[e]||[]).filter(e=>!e.position.allDay).map(e=>{let t=e3.variantColorResolver({color:e.color||e3.primaryColor,theme:e3,variant:"light",autoContrast:!0}),a="function"==typeof eO?eO(e):e.title,n={key:`bg-${e.id}`,...e1("weekViewBackgroundEvent",{style:{top:`${e.position.top}%`,height:`${e.position.height}%`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eH)return eH(e,n);let{key:r,...o}=n;return(0,$.jsx)(W.Box,{...o},r)}),n=(tu.regularEvents[e]||[]).map(a=>{let n=(0,l.isAllDayEvent)({event:a,date:e}),r=!n&&tn.isDraggableEvent(a),o=!n&&ti.isResizableEvent(a),i=ti.getResizePosition(a.id),s=i?i.top:a.position.top,u=i?i.height:a.position.height;return(0,$.jsx)(y.ScheduleEvent,{event:a,autoSize:!0,hanging:a.position.hanging,draggable:r,withResize:o,isResizing:null!==i,onResizeStart:o?(n,r)=>{let o=tD.current[t];o&&ti.handleResizeStart({event:a,edge:n,container:o,originalTop:a.position.top,originalHeight:a.position.height,eventDate:(0,d.default)(e).format("YYYY-MM-DD"),pointerEvent:r})}:void 0,renderEventBody:eO,renderEvent:eH,radius:eu,mode:eP,onClick:ez?e=>{ti.wasResizing()||ez(a,e)}:void 0,style:{position:"absolute",top:`calc(${s}% + 1px)`,left:`${a.position.offset}%`,width:`${a.position.width}%`,height:`calc(${u}% - 1px)`}},a.id)});return(0,$.jsxs)(O,{day:e,dayIndex:t,slots:e7,getStyles:e1,weekendDays:ed,highlightBusinessHours:eC,businessHours:e$,labels:ej,withEventsDragAndDrop:td,mode:eP,slotsRef:tm,firstSlotIndex:tg,onSlotKeyDown:ty,onSlotClick:ts,onFirstSlotArrowUp:ew?e=>{tf.current[e]?.focus()}:void 0,onDaySlotsDragOver:(e,t,a)=>{let n=tw(e,a);null!==n&&tn.handleDragOver(e,{day:t,slotIndex:n})},onDaySlotsDragLeave:tn.handleDragLeave,onDaySlotsDrop:(e,t,a)=>{let n=tw(e,a);null!==n&&tn.handleDrop(e,{day:t,slotIndex:n})},dropTargetSlotIndex:tn.dropTarget?.day===e?tn.dropTarget.slotIndex:void 0,withDragSlotSelect:eN,onSlotPointerDown:to.handleSlotPointerDown,isSlotDragSelected:to.isSlotSelected,daySlotsContainerRef:e=>{tD.current[t]=e},getTimeSlotProps:eX,children:[a,n]},e)}),tS=tl.map((e,a)=>(0,$.jsx)(j.UnstyledButton,{"aria-label":`${(0,t.getLabel)("allDay",ej)} ${(0,d.default)(e).format("YYYY-MM-DD")}`,ref:e=>{tf.current[a]=e},tabIndex:0===a?0:-1,onKeyDown:e=>{let t;"ArrowRight"===(t=e.key)&&a<tl.length-1?(e.preventDefault(),tf.current[a+1]?.focus()):"ArrowLeft"===t&&a>0?(e.preventDefault(),tf.current[a-1]?.focus()):"ArrowDown"===t&&(e.preventDefault(),tm.current?.[a]?.[0]?.focus())},onClick:"static"!==eP&&eL?t=>eL((0,d.default)(e).format("YYYY-MM-DD"),t):void 0,onDragOver:td?t=>tr.handleDragOver(t,e):void 0,onDragLeave:td?tr.handleDragLeave:void 0,onDrop:td?t=>tr.handleDrop(t,e):void 0,...e1("weekViewDaySlot"),mod:{"drop-target":tr.isDropTarget(e)}},e)),tE=(0,G.useMemo)(()=>new Set(tu.allDayEvents.map(e=>e.id)),[tu.allDayEvents]),tx=tu.allDayEvents.map(e=>(0,$.jsx)(y.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,hanging:e.position.hanging,draggable:tr.isDraggableEvent(e),renderEvent:eH,mode:eP,onClick:ez?t=>ez(e,t):void 0,style:{position:"absolute",zIndex:2,top:`calc(${50*e.position.row}% + 1px)`,left:`calc(${e.position.offset}% + 1px)`,width:`calc(${e.position.width}% - 1px)`,height:"calc(50% - 2px)",maxHeight:"calc(50% - 2px)"}},e.id)),tM=tl.flatMap((e,t)=>{let a=(tu.backgroundEvents[e]||[]).filter(e=>e.position.allDay),n=100/tl.length,r=t*n;return a.map(t=>{let a=e3.variantColorResolver({color:t.color||e3.primaryColor,theme:e3,variant:"light",autoContrast:!0}),o="function"==typeof eO?eO(t):t.title,i={key:`bg-allday-${t.id}-${e}`,...e1("weekViewBackgroundEvent",{style:{top:0,height:"100%",left:`${r}%`,width:`${n}%`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:o};if("function"==typeof eH)return eH(t,i);let{key:d,...s}=i;return(0,$.jsx)(W.Box,{...s},d)})}),tT=Math.max(...tu.allDayEvents.map(e=>e.position.row),1)-1,tb=(0,$.jsxs)(W.Box,{...e1("weekView"),mod:{static:"static"===eP,"slot-dragging":to.isDragging},...e0,children:[eh&&(0,$.jsx)(h.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>{var e;let t;return e=e5.getFirstDayOfWeek(es),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,d.default)(t).set("date",(0,d.default)(t).date()-7))},next:()=>{var e;let t;return e=e5.getFirstDayOfWeek(es),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,d.default)(t).set("date",(0,d.default)(t).date()+7))},today:()=>(0,o.toDateString)((0,d.default)())},control:{miw:140,title:function({weekdays:e,locale:t,weekLabelFormat:n,renderWeekLabel:r}){return r?r({weekStart:(0,d.default)(e[0]).format("YYYY-MM-DD"),weekEnd:(0,d.default)(e[e.length-1]).format("YYYY-MM-DD")}):`${(0,a.formatDate)({locale:t,date:e[0],format:n})} – ${(0,a.formatDate)({locale:t,date:e[e.length-1],format:n})}, ${(0,a.formatDate)({locale:t,date:e[0],format:"YYYY"})}`}({weekdays:tl,locale:e5.getLocale(eD),weekLabelFormat:eM,renderWeekLabel:eZ})},labels:ej,onDateChange:en,onViewChange:eY,previousControlProps:ek,nextControlProps:eS,todayControlProps:eE,viewSelectProps:ex,stylesApiProps:e4}),(0,$.jsx)(W.Box,{...e1("weekViewRoot"),__vars:{"--indicator-offset-index":-1===th?void 0:`${th+1}`,"--number-of-days":ei?"7":`${7-e5.getWeekendDays(ed).length}`},mod:{"with-weekends":ei},children:(0,$.jsxs)(V.ScrollArea.Autosize,{scrollbarSize:4,...ev,...e1("weekViewScrollArea",{className:ev?.className,style:ev?.style}),onScrollPositionChange:e=>{ev?.onScrollPositionChange?.(e),e9(0!==e.y)},viewportRef:tp,children:[(0,$.jsxs)(W.Box,{...e1("weekViewHeader"),mod:{scrolled:e6},children:[(0,G.createElement)("div",{...e1("weekViewCorner"),key:"corner"},ep&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("div",{...e1("weekViewWeekLabel"),children:(0,t.getLabel)("week",ej)}),(0,$.jsx)("div",{...e1("weekViewWeekNumber"),children:(0,n.getWeekNumber)(ea)})]})),tY]}),ew&&(0,$.jsxs)("div",{...e1("weekViewAllDaySlots"),children:[(0,$.jsx)("div",{...e1("weekViewAllDaySlotsLabel"),children:(0,t.getLabel)("allDay",ej)}),(0,$.jsxs)("div",{...e1("weekViewAllDaySlotsList"),children:[tM,(0,$.jsx)(W.Box,{...e1("weekViewAllDaySlotsEvents"),__vars:{"--extra-rows":`${tT}`},children:tx}),tS]})]}),(0,$.jsxs)("div",{...e1("weekViewInner"),children:[(0,$.jsx)("div",{...e1("weekViewSlotLabels"),children:tc}),em&&-1!==th&&(0,$.jsx)(g.CurrentTimeIndicator,{startOffset:"calc(100% - (100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index) + 1) + ((var(--number-of-days) - var(--indicator-offset-index) + 1) * var(--indicator-labels-offset)))",endOffset:"calc((100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index)) - (var(--number-of-days) - var(--indicator-offset-index)) * var(--indicator-labels-offset))",timeBubbleStartOffset:"calc(var(--week-view-slots-label-width) - var(--time-bubble-width))",currentTimeFormat:eo,withTimeBubble:eg,withThumb:!eg||0!==th,locale:eD,startTime:ee,endTime:et,...e4}),tk]})]})})]}),tW=(0,G.useMemo)(()=>({isDragging:tn.dragContextValue.isDragging||tr.dragContextValue.isDragging,draggedEventId:tn.dragContextValue.draggedEventId??tr.dragContextValue.draggedEventId,draggedEvent:tn.dragContextValue.draggedEvent??tr.dragContextValue.draggedEvent,dropTarget:tn.dragContextValue.dropTarget??tr.dragContextValue.dropTarget,onDragStart:e=>{tE.has(e.id)?tr.handleDragStart(e):tn.handleDragStart(e)},onDragEnd:()=>{tn.handleDragEnd(),tr.handleDragEnd()},setDropTarget:tn.dragContextValue.setDropTarget}),[tn.dragContextValue,tr.dragContextValue,tE]);return eV?(0,$.jsx)(w.DragContext.Provider,{value:tW,children:tb}):tb});J.displayName="@mantine/schedule/WeekView",J.classes=H,J.varsResolver=U,e.s(["WeekView",0,J],315401)},593612,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="ClockIcon",e.s(["ClockIcon",0,r],593612)},822933,e=>{"use strict";var t=e.i(191788);e.s(["useInterval",0,function(e,a,{autoInvoke:n=!1}={}){let[r,o]=(0,t.useState)(!1),i=(0,t.useRef)(null),d=(0,t.useRef)(null),s=(0,t.useRef)(a);s.current=a;let l=(0,t.useCallback)(()=>{o(e=>(e||i.current||(i.current=window.setInterval(d.current,s.current)),!0))},[]),u=(0,t.useCallback)(()=>{o(!1),i.current&&window.clearInterval(i.current),i.current=null},[]),c=(0,t.useCallback)(()=>{o(e=>e?(i.current&&window.clearInterval(i.current),i.current=null,!1):(i.current||(i.current=window.setInterval(d.current,s.current)),!0))},[]);return(0,t.useEffect)(()=>(d.current=e,r&&l(),u),[e,r,a]),(0,t.useEffect)(()=>{n&&l()},[]),{start:l,stop:u,toggle:c,active:r}}])},898770,e=>{"use strict";var t=e.i(494834);e.s(["isMultidayEvent",0,function(e){let a=(0,t.default)(e.start).startOf("day"),n=(0,t.default)(e.end);return(0===n.hour()&&0===n.minute()&&0===n.second()?n.startOf("day").subtract(1,"day"):n.startOf("day")).isAfter(a)}])},813982,e=>{"use strict";var t=e.i(494834);e.s(["sortEvents",0,function(e){return e.toSorted((e,a)=>{let n=(0,t.default)(e.start).diff((0,t.default)(a.start));return 0!==n?n:(0,t.default)(a.end).diff((0,t.default)(a.start))-(0,t.default)(e.end).diff((0,t.default)(e.start))})}])},898496,672654,969610,792930,505696,245086,637079,312709,68642,532965,751198,e=>{"use strict";function t(e){let t=Math.round(Math.max(1,Math.min(60,e)));return 60%t==0?t:60}function a(e){let[t,a,n]=e.split(":").map(Number);return{hours:t,minutes:a,seconds:n||0}}function n({hours:e,minutes:t,seconds:a}){return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}:${String(a).padStart(2,"0")}`}e.s(["clampIntervalMinutes",0,t],672654),e.s(["getDayTimeIntervals",0,function({startTime:e,endTime:r,intervalMinutes:o=60}){let i=t(o),d=a(e),s=r?a(r):{hours:23,minutes:59,seconds:59},l=3600*d.hours+60*d.minutes+d.seconds,u=3600*s.hours+60*s.minutes+s.seconds,c=60*i,m=[],f=l;for(;f<u;){let e=f,t=f+c;t>u&&(t=u);let a=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60,i=Math.floor(t/3600),d=Math.floor(t%3600/60),s=t%60,l=t-e,v=0===r&&0===o;m.push({startTime:n({hours:a,minutes:r,seconds:o}),endTime:n({hours:i,minutes:d,seconds:s}),duration:l,isHourStart:v}),f=t}return m}],898496);var r=e.i(494834);e.s(["isAllDayEvent",0,function({event:e,date:t}){let a=(0,r.default)(t).startOf("day"),n=a.add(1,"day"),o=n.subtract(1,"second"),i=(0,r.default)(e.start),d=(0,r.default)(e.end);return i.isSame(a)&&(d.isSame(n)||d.isSame(o))}],969610),e.s(["calculateDropTime",0,function({draggedEvent:e,targetDate:t,targetSlotTime:n,mouseYOffset:o=0,slotHeight:i=64,intervalMinutes:d=15}){let s=(0,r.default)(e.end).diff((0,r.default)(e.start),"millisecond"),l=a(n),u=(0,r.default)(t).startOf("day").hour(l.hours).minute(l.minutes).second(0),c=u;if(o>0&&i>0){let e=Math.round(o/i*d);c=u.add(e,"minute")}return{start:c.toDate(),end:c.add(s,"millisecond").toDate()}}],792930),e.s(["getBusinessHoursMod",0,function({time:e,businessHours:t,highlightBusinessHours:a}){if(!a||!t)return{"business-hours":!1,"non-business-hours":!1};let[n,r]=t,o=e>=n&&e<r;return{"business-hours":o,"non-business-hours":!o}}],505696);var o=e.i(191788);e.s(["useAutoScrollOnDrag",0,function({viewportRef:e,enabled:t}){let a=(0,o.useRef)(null),n=(0,o.useRef)(0),r=(0,o.useEffectEvent)(()=>{null!==a.current&&(cancelAnimationFrame(a.current),a.current=null),n.current=0}),i=(0,o.useEffectEvent)(()=>{if(null!==a.current)return;let t=()=>{let r=e.current;if(!r||0===n.current){a.current=null;return}r.scrollTop+=n.current,a.current=requestAnimationFrame(t)};a.current=requestAnimationFrame(t)});(0,o.useEffect)(()=>{if(!t)return;let a=e.current;if(!a)return;let o=e=>{let t=a.getBoundingClientRect(),o=e.clientY-t.top,d=t.bottom-e.clientY;o<50?(n.current=-Math.ceil((1-o/50)*8),i()):d<50?(n.current=Math.ceil((1-d/50)*8),i()):r()},d=()=>{r()};return a.addEventListener("dragover",o),a.addEventListener("dragleave",d),a.addEventListener("dragend",d),a.addEventListener("drop",d),()=>{r(),a.removeEventListener("dragover",o),a.removeEventListener("dragleave",d),a.removeEventListener("dragend",d),a.removeEventListener("drop",d)}},[t,e])}],245086),e.s(["useEventResize",0,function({enabled:e=!1,mode:t="default",startTime:n,endTime:i,intervalMinutes:d,onEventResize:s,canResizeEvent:l}){let[u,c]=(0,o.useState)(null),m=(0,o.useRef)(null),f=(0,o.useRef)(!1),v=(0,o.useEffectEvent)(s||(()=>{})),D=a(n),p=a(i),g=60*D.hours+D.minutes,w=60*p.hours+p.minutes-g,y=d/w*100,h=(0,o.useCallback)(e=>Math.max(0,Math.min(w,Math.round(e/d)*d)),[w,d]),Y=(0,o.useCallback)((e,t)=>{let a=g+h(e/100*w),n=Math.floor(a/60);return`${t} ${String(n).padStart(2,"0")}:${String(a%60).padStart(2,"0")}:00`},[w,g,h]),k=(0,o.useCallback)(e=>h(e/100*w)/w*100,[w,h]),S=(0,o.useCallback)(({event:a,edge:n,container:o,originalTop:i,originalHeight:d,eventDate:s,pointerEvent:l})=>{if(!e||"static"===t)return;l.preventDefault(),l.stopPropagation();let u={eventId:a.id,event:a,edge:n,container:o,originalTop:i,originalHeight:d,currentTop:i,currentHeight:d,eventDate:s,originalStart:(0,r.default)(a.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,r.default)(a.end).format("YYYY-MM-DD HH:mm:ss")};m.current=u,c(u)},[e,t]),E=null!==u;(0,o.useEffect)(()=>{if(!E)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{let t=m.current;if(!t)return;let a=t.container.getBoundingClientRect(),n=k(Math.max(0,Math.min(100,(e.clientY-a.top)/a.height*100))),r=t.originalTop,o=t.originalHeight;if("bottom"===t.edge)o=Math.max(y,n-t.originalTop);else{let e=t.originalTop+t.originalHeight;r=Math.min(n,e-y),o=e-r}m.current={...t,currentTop:r,currentHeight:o},c(m.current)},a=()=>{let e=m.current;if(e&&(e.currentTop!==e.originalTop||e.currentHeight!==e.originalHeight)){let t,a;"top"===e.edge?(t=Y(e.currentTop,e.eventDate),a=e.originalEnd):(t=e.originalStart,a=Y(e.currentTop+e.currentHeight,e.eventDate)),v({eventId:e.eventId,newStart:t,newEnd:a,event:e.event})}m.current=null,c(null),f.current=!0,requestAnimationFrame(()=>{f.current=!1})};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a)}},[E]);let x=(0,o.useCallback)(e=>u&&u.eventId===e?{top:u.currentTop,height:u.currentHeight}:null,[u]),M=(0,o.useCallback)(a=>!!e&&"static"!==t&&"background"!==a.display&&(!l||l(a)),[e,t,l]),T=(0,o.useCallback)(()=>f.current,[]);return{handleResizeStart:S,isResizing:E,resizingEventId:u?.eventId??null,getResizePosition:x,isResizableEvent:M,wasResizing:T}}],637079);var i=e.i(27748);function d(e){let t=(0,r.default)();if(!e?.startTime||!e?.endTime){let e=(0,r.default)().startOf("date");return t.diff(e,"minute")/1440*100}let[a,n]=e.startTime.split(":").map(Number),[o,i]=e.endTime.split(":").map(Number),d=t.startOf("date"),s=d.hour(a).minute(n).second(0),l=d.hour(o).minute(i).second(0).diff(s,"minute");return t.diff(s,"minute")/l*100}var s={currentTimeIndicator:"m_74c54f2d",currentTimeIndicatorLine:"m_e62414c1",currentTimeIndicatorThumb:"m_decee6a9",currentTimeIndicatorTimeBubble:"m_4b00bcc6"},l=e.i(232471),u=e.i(481178),c=e.i(275519),m=e.i(317477),f=e.i(44091),v=e.i(391466),D=e.i(822933),p=e.i(205693),g=e.i(391398);let w={__staticSelector:"CurrentTimeIndicator",withTimeBubble:!0,withThumb:!0,currentTimeFormat:"HH:mm",topOffset:"0rem"},y=(0,u.createVarsResolver)((e,{color:t})=>({currentTimeIndicator:{"--indicator-color":t?(0,m.getThemeColor)(t,e):void 0}})),h=(0,c.factory)(e=>{let t=(0,f.useProps)("CurrentTimeIndicator",w,e),{classNames:n,className:u,style:c,styles:m,unstyled:h,vars:Y,attributes:k,startOffset:S,endOffset:E,color:x,withTimeBubble:M,withThumb:T,currentTimeFormat:b,locale:W,timeBubbleStartOffset:j,__staticSelector:C,topOffset:$,startTime:O,endTime:H,...V}=t,A=(0,v.useStyles)({name:C,classes:s,props:t,className:u,style:c,classNames:n,styles:m,unstyled:h,vars:Y,varsResolver:y,attributes:k,rootSelector:"currentTimeIndicator"}),I=(0,p.useDatesContext)(),[R,B]=(0,o.useState)(d({startTime:O,endTime:H}));(0,D.useInterval)(()=>B(d({startTime:O,endTime:H})),6e4,{autoInvoke:!0});let _=M?(0,i.formatDate)({locale:I.getLocale(W),date:(0,r.default)(),format:b}):"";return!function({date:e,startTime:t="00:00:00",endTime:n="23:59:59"}){let o=(0,r.default)(e),i=a(t),d=a(n),s=o.hour(i.hours).minute(i.minutes).second(i.seconds),l=o.hour(d.hours).minute(d.minutes).second(d.seconds);return o.isAfter(s)&&o.isBefore(l)}({date:(0,r.default)().toDate(),startTime:O,endTime:H})?null:(0,g.jsxs)(l.Box,{...A("currentTimeIndicator"),__vars:{"--top-offset":`calc(${R}% + ${$})`,"--start-offset":S,"--end-offset":E,"--time-bubble-start-offset":j,"--time-bubble-width":_?.toString().toLowerCase().includes("m")?"64px":"46px"},...V,children:[M&&(0,g.jsx)("div",{...A("currentTimeIndicatorTimeBubble"),children:_}),T&&(0,g.jsx)("div",{...A("currentTimeIndicatorThumb")}),(0,g.jsx)("div",{...A("currentTimeIndicatorLine")})]})});h.displayName="@mantine/schedule/CurrentTimeIndicator",h.classes=s,h.varsResolver=y,e.s(["CurrentTimeIndicator",0,h],312709);var Y=e.i(898770);e.s(["isEventInTimeRange",0,function({event:e,startTime:t,endTime:a}){if((0,Y.isMultidayEvent)(e)||function(e){let t=(0,r.default)(e.start),a=(0,r.default)(e.end);if(!t.isSame(t.startOf("day")))return!1;let n=t.startOf("day").add(1,"day");return a.isSame(n)||a.isSame(n.subtract(1,"second"))}(e)||!t||!a)return!0;let[n,o]=t.split(":").map(Number),[i,d]=a.split(":").map(Number),s=(0,r.default)(e.start),l=(0,r.default)(e.end),u=60*s.hour()+s.minute();return!(60*l.hour()+l.minute()<=60*n+o||u>=60*i+d)}],68642),e.s(["getDayPosition",0,function({event:e,startTime:t="00:00:00",endTime:n="23:59:59"}){let o=(0,r.default)(e.start),i=(0,r.default)(e.end),d=a(t),s=a(n),l=o.startOf("date"),u=l.hour(d.hours).minute(d.minutes).second(0),c=l.hour(s.hours).minute(s.minutes).second(0),m=c.diff(u,"minute"),f=(o.isBefore(u)?u:o).diff(u,"minute"),v=(i.isAfter(c)?c:i).diff(u,"minute"),D=f/m*100;return{top:D,height:v/m*100-D}}],532965),e.s(["isEventsOverlap",0,function(e,t){let a=(0,r.default)(e.start).valueOf(),n=(0,r.default)(e.end).valueOf(),o=(0,r.default)(t.start).valueOf();return a<(0,r.default)(t.end).valueOf()&&o<n}],751198)},334816,e=>{"use strict";e.s(["createEventHandler",0,function(e,t){return a=>{e?.(a),t?.(a)}}])},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[n,r]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),i=e.i(391398),d=e.i(458272);let s=(0,o.createContext)({withinGroup:!1}),l={openDelay:0,closeDelay:0};function u(e){let{openDelay:a,closeDelay:n,children:r}=(0,t.useProps)("HoverCardGroup",l,e);return(0,i.jsx)(s,{value:{withinGroup:!0},children:(0,i.jsx)(d.FloatingDelayGroup,{delay:{open:a,close:n},children:r})})}u.displayName="@mantine/core/HoverCardGroup",u.extend=e=>e;var c=e.i(334816);function m(e){let{children:n,onMouseEnter:d,onMouseLeave:l,...u}=(0,t.useProps)("HoverCardDropdown",null,e),m=r();if((0,o.use)(s).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,i.jsx)(a.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,c.createEventHandler)(d,e.onMouseEnter),onMouseLeave:(0,c.createEventHandler)(l,e.onMouseLeave),...u,children:n})}let f=(0,c.createEventHandler)(d,m.openDropdown),v=(0,c.createEventHandler)(l,m.closeDropdown);return(0,i.jsx)(a.Popover.Dropdown,{onMouseEnter:f,onMouseLeave:v,...u,children:n})}m.displayName="@mantine/core/HoverCardDropdown";var f=e.i(409703);let v={refProp:"ref"};function D(e){let{children:n,refProp:d,eventPropsWrapperName:l,...u}=(0,t.useProps)("HoverCardTarget",v,e),m=(0,f.getSingleElementChild)(n);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let D=r();if((0,o.use)(s).withinGroup&&D.getReferenceProps&&D.reference){let e=D.getReferenceProps();return(0,i.jsx)(a.Popover.Target,{refProp:d,...u,children:(0,o.cloneElement)(m,l?{[l]:{...e,ref:D.reference}}:{...e,ref:D.reference})})}let p={onMouseEnter:(0,c.createEventHandler)(m.props.onMouseEnter,D.openDropdown),onMouseLeave:(0,c.createEventHandler)(m.props.onMouseLeave,D.closeDropdown)};return(0,i.jsx)(a.Popover.Target,{refProp:d,...u,children:(0,o.cloneElement)(m,l?{[l]:p}:p)})}D.displayName="@mantine/core/HoverCardTarget";var p=e.i(107315);let g={openDelay:0,closeDelay:150,initiallyOpened:!1};function w(e){let{children:r,onOpen:l,onClose:u,openDelay:c,closeDelay:m,initiallyOpened:f,...v}=(0,t.useProps)("HoverCard",g,e),D=function(e){let[t,a]=(0,o.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,r=(0,o.use)(s).withinGroup,i=(0,p.useId)(),l=(0,o.useRef)(-1),u=(0,o.useRef)(-1),c=(0,o.useCallback)(()=>{window.clearTimeout(l.current),window.clearTimeout(u.current)},[]),m=(0,o.useCallback)(t=>{a(t),t?(g(i),e.onOpen?.()):e.onClose?.()},[i,e.onOpen,e.onClose]),{context:f,refs:v}=(0,d.useFloating)({open:n,onOpenChange:m}),{delay:D,setCurrentId:g}=(0,d.useDelayGroup)(f,{id:i}),{getReferenceProps:w,getFloatingProps:y}=(0,d.useInteractions)([(0,d.useHover)(f,{enabled:!0,delay:r?D:{open:e.openDelay,close:e.closeDelay}}),(0,d.useRole)(f,{role:"dialog"}),(0,d.useDismiss)(f,{enabled:r})]),h=(0,o.useCallback)(()=>{r||(c(),0===e.openDelay||void 0===e.openDelay?m(!0):l.current=window.setTimeout(()=>m(!0),e.openDelay))},[r,c,e.openDelay,m]),Y=(0,o.useCallback)(()=>{r||(c(),0===e.closeDelay||void 0===e.closeDelay?m(!1):u.current=window.setTimeout(()=>m(!1),e.closeDelay))},[r,c,e.closeDelay,m]);return(0,o.useEffect)(()=>()=>c(),[c]),{opened:n,reference:v.setReference,floating:v.setFloating,getReferenceProps:w,getFloatingProps:y,openDropdown:h,closeDropdown:Y}}({openDelay:c,closeDelay:m,defaultOpened:f,onOpen:l,onClose:u});return(0,i.jsx)(n,{value:{openDropdown:D.openDropdown,closeDropdown:D.closeDropdown,getReferenceProps:D.getReferenceProps,getFloatingProps:D.getFloatingProps,reference:D.reference,floating:D.floating},children:(0,i.jsx)(a.Popover,{...v,opened:D.opened,__staticSelector:"HoverCard",children:r})})}w.displayName="@mantine/core/HoverCard",w.Target=D,w.Dropdown=m,w.Group=u,w.extend=e=>e,e.s(["HoverCard",0,w],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),n=e.i(671640),r=e.i(883364),o=e.i(391398);let i=`import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      {event.payload?.description && (
        <Text size="xs" c="dimmed">
          {event.payload.description}
        </Text>
      )}

      {event.payload?.location && (
        <Group gap={4}>
          <Badge size="sm" variant="light">
            {event.payload.location}
          </Badge>
        </Group>
      )}

      {event.payload?.attendees && (
        <div>
          <Text size="xs" fw={500} mb={4}>
            Attendees:
          </Text>
          <Text size="xs" c="dimmed">
            {event.payload.attendees.join(', ')}
          </Text>
        </div>
      )}
    </Stack>
  );
}`;e.s(["EventDetails",0,function({event:e}){return(0,o.jsxs)(n.Stack,{gap:"xs",children:[(0,o.jsx)(r.Text,{fw:600,size:"sm",children:e.title}),e.payload?.description&&(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(a.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,i])},554166,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="MapPinIcon",e.s(["MapPinIcon",0,r],554166)},953813,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),r=(0,a.default)(n).add(1,"day").format("YYYY-MM-DD"),o=(0,a.default)(n).add(2,"day").format("YYYY-MM-DD"),i=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"Project Planning",start:`${o} 10:00:00`,end:`${o} 12:00:00`,color:"pink"},{id:7,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],d=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Tomorrow Event 1",start:`${r} 09:00:00`,end:`${r} 10:30:00`,color:"green"},{id:5,title:"Tomorrow Event 2",start:`${r} 09:30:00`,end:`${r} 11:00:00`,color:"orange"}],s=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${r} 17:30:00`,end:`${r} 18:00:00`,color:"orange"}],l=`
import dayjs from 'dayjs';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${startOfWeek} 10:00:00\`,
    end: \`\${startOfWeek} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(startOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`;var u=e.i(191788),c=e.i(391398),m=e.i(315401);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"09:00:00",endTime:"17:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
    />
  );
}
`},D={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},p={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      firstDayOfWeek={0}
    />
  );
}
`},g={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",weekdayFormat:"dd"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      weekdayFormat="dd"
    />
  );
}
`},w={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withWeekendDays={false}
    />
  );
}
`},y={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",highlightToday:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      highlightToday
    />
  );
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withWeekNumber:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withWeekNumber={false}
    />
  );
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}
`},k={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:"2030-06-10",events:i,withCurrentTimeIndicator:!0,forceCurrentTimeIndicator:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date="2030-06-10"
      events={events}
      withCurrentTimeIndicator
      forceCurrentTimeIndicator
    />
  );
}
`},S={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withAllDaySlots:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withAllDaySlots={false}
    />
  );
}
`},E={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withHeader={false}
    />
  );
}
`},x={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",weekLabelFormat:"MMMM D, YYYY"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      weekLabelFormat="MMMM D, YYYY"
    />
  );
}
`},M={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h A"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotLabelFormat="h A"
    />
  );
}
`},T={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotHeight={80}
      allDaySlotHeight={60}
    />
  );
}
`},b={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:s,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`},W={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`};var j=e.i(441058);let C=(0,a.default)().format("YYYY-MM-DD"),$=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),O=[{id:1,title:"Morning Standup",start:`${C} 09:00:00`,end:`${C} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${$} 11:00:00`,end:`${$} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${C} 14:00:00`,end:`${C} 15:00:00`,color:"violet"},{id:4,title:"Company Holiday",start:(0,a.default)((0,j.getStartOfWeek)({date:C,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,j.getStartOfWeek)({date:C,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:5,title:"Release Day",start:(0,a.default)((0,j.getStartOfWeek)({date:C,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,j.getStartOfWeek)({date:C,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"}],H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(O);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Company Holiday',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 5,
    title: 'Release Day',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
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
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`},V=(0,a.default)().format("YYYY-MM-DD"),A=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),I=[{id:1,title:"Morning Standup",start:`${V} 09:00:00`,end:`${V} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${A} 11:00:00`,end:`${A} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${V} 14:00:00`,end:`${V} 15:00:00`,color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(I);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`};var B=e.i(19683),_=e.i(369974),L=e.i(284629);let z=(0,a.default)().startOf("week"),N=[{id:1,title:"Team Standup",start:z.add(1,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:z.add(1,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:z.add(2,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:z.add(2,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:z.add(3,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:z.add(3,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:z.add(4,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:z.add(4,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"All Day Conference",start:z.add(5,"day").format("YYYY-MM-DD 00:00:00"),end:z.add(5,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(N);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(r).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(_.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(_.HoverCard.Target,{children:(0,c.jsx)(L.UnstyledButton,{...t})}),(0,c.jsx)(_.HoverCard.Dropdown,{children:(0,c.jsx)(B.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, Text, Stack, Badge, Group, UnstyledButton } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? {
                  ...event,
                  start: dayjs(newStart).format('YYYY-MM-DD HH:mm:ss'),
                  end: dayjs(newEnd).format('YYYY-MM-DD HH:mm:ss'),
                }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:B._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(N,null,2)};`,language:"tsx"}]},P={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`};var G=e.i(162077);let Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(i),[o,d]=(0,u.useState)(!1),[s,l]=(0,u.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),d(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),d(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),d(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,c.jsx)(G.EventForm,{opened:o,onClose:()=>d(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events } from './events';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

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
      setEvents((prev) =>
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
      setEvents((prev) => [
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
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        startTime="08:00:00"
        endTime="18:00:00"
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:G._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]},U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(i);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
import { useState } from 'react';
import { WeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents } from './data';

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
    <WeekView
      date={new Date()}
      events={events}
      startScrollTime="09:00:00"
      scrollAreaProps={{ mah: 500 }}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var J=e.i(232471),K=e.i(20035),Q=e.i(883364);let q=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)([]),n=(0,u.useRef)(1);return(0,c.jsxs)(K.Grid,{children:[(0,c.jsxs)(K.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(Q.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),q.map(e=>(0,c.jsxs)(J.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(Q.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(Q.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,c.jsx)(K.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(r),s=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
        <WeekView
          date={new Date()}
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
`},ee=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ee),[n,r]=(0,u.useState)([]),[o,i]=(0,u.useState)(!1),d=(0,u.useRef)(1);return(0,c.jsxs)(K.Grid,{children:[(0,c.jsx)(K.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(J.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:d}=JSON.parse(o),s=n.find(e=>String(e.id)===String(d));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),r(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(Q.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsxs)(J.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(Q.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(Q.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,c.jsx)(Q.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(K.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(m.WeekView,{date:new Date,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),s=(0,a.default)(n),l=s.add(i.duration,"minutes");r(e=>[...e,{id:d.current++,title:i.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
        <WeekView
          date={new Date()}
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
`},ea=(0,a.default)((0,j.getStartOfWeek)({date:new Date,firstDayOfWeek:1})).format("YYYY-MM-DD"),en=[{id:"weekly-sync-series",title:"Weekly sync (series)",start:`${ea} 10:00:00`,end:`${ea} 11:00:00`,color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12",exdate:[`${(0,a.default)(ea).add(2,"day").format("YYYY-MM-DD")} 10:00:00`]}},{id:"weekly-sync-override",title:"Weekly sync (moved this week)",start:`${(0,a.default)(ea).add(2,"day").format("YYYY-MM-DD")} 15:00:00`,end:`${(0,a.default)(ea).add(2,"day").format("YYYY-MM-DD")} 16:00:00`,color:"grape",recurringEventId:"weekly-sync-series",recurrenceId:`${(0,a.default)(ea).add(2,"day").format("YYYY-MM-DD")} 10:00:00`},{id:"one-off-week",title:"One-off interview",start:`${(0,a.default)(ea).add(1,"day").format("YYYY-MM-DD")} 13:00:00`,end:`${(0,a.default)(ea).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,color:"green"}],er={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ea);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:en,startTime:"08:00:00",endTime:"20:00:00",intervalMinutes:60})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, getStartOfWeek } from '@mantine/schedule';

const weekStart = dayjs(getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })).format('YYYY-MM-DD');

const events = [
  {
    id: 'weekly-sync-series',
    title: 'Weekly sync (series)',
    start: \`\${weekStart} 10:00:00\`,
    end: \`\${weekStart} 11:00:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12',
      exdate: [\`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`],
    },
  },
  {
    id: 'weekly-sync-override',
    title: 'Weekly sync (moved this week)',
    start: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 15:00:00\`,
    end: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 16:00:00\`,
    color: 'grape',
    recurringEventId: 'weekly-sync-series',
    recurrenceId: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`,
  },
];

function Demo() {
  const [date, setDate] = useState(weekStart);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="20:00:00"
      intervalMinutes={60}
    />
  );
}
`},eo=(0,a.default)().format("YYYY-MM-DD"),ei=[{id:"lunch-block",title:"Lunch break",start:`${eo} 12:00:00`,end:`${eo} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${eo} 14:00:00`,end:`${eo} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${eo} 10:00:00`,end:`${eo} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eo} 14:30:00`,end:`${eo} 15:30:00`,color:"green"}],ed={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eo);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:ei,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
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
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},es=(0,a.default)((0,j.getStartOfWeek)({date:new Date,firstDayOfWeek:1})),el=Array.from({length:5},(e,t)=>es.add(t,"day").format("YYYY-MM-DD")),eu=[...el.map((e,t)=>({id:`lunch-${t}`,title:"Lunch break",start:`${e} 12:00:00`,end:`${e} 13:00:00`,color:"red",display:"background"})),{id:"team-meeting",title:"Team meeting",start:`${el[0]} 10:00:00`,end:`${el[0]} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${el[2]} 15:00:00`,end:`${el[2]} 16:00:00`,color:"green"}],ec={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eu);return(0,c.jsx)(m.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:r})=>{e.some(e=>"background"===e.display&&n<e.end&&r>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:r}:e))},styles:{weekViewBackgroundEvent:{background:`repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            var(--mantine-color-red-light) 10px,
            var(--mantine-color-red-light) 12px
          )`,color:"var(--mantine-color-red-light-color)"}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { getStartOfWeek, ScheduleEventData, WeekView } from '@mantine/schedule';
import classes from './Demo.module.css';

const weekStart = dayjs(
  getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })
);

const weekdays = Array.from({ length: 5 }, (_, i) =>
  weekStart.add(i, 'day').format('YYYY-MM-DD')
);

const initialEvents: ScheduleEventData[] = [
  ...weekdays.map((day, i) => ({
    id: \`lunch-\${i}\`,
    title: 'Lunch break',
    start: \`\${day} 12:00:00\`,
    end: \`\${day} 13:00:00\`,
    color: 'red',
    display: 'background' as const,
  })),
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${weekdays[0]} 10:00:00\`,
    end: \`\${weekdays[0]} 11:00:00\`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: \`\${weekdays[2]} 15:00:00\`,
    end: \`\${weekdays[2]} 16:00:00\`,
    color: 'green',
  },
];

function overlapsBackground(
  newStart: string,
  newEnd: string,
  events: ScheduleEventData[]
) {
  return events.some(
    (e) =>
      e.display === 'background' && newStart < e.end && newEnd > e.start
  );
}

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
  }) => {
    if (overlapsBackground(newStart, newEnd, events)) {
      return;
    }

    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? { ...event, start: newStart, end: newEnd }
          : event
      )
    );
  };

  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      classNames={{ weekViewBackgroundEvent: classes.backgroundEvent }}
    />
  );
}
`},{fileName:"Demo.module.css",language:"css",code:`.backgroundEvent {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    var(--mantine-color-red-light) 10px,
    var(--mantine-color-red-light) 12px
  );
  color: var(--mantine-color-red-light-color);
}
`}]};var em=e.i(428127);let ef={defaultExpanded:!1,type:"code",component:function(){let e,t,[n,r]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(em.ScheduleHeader,{children:[(0,c.jsx)(em.ScheduleHeader.Previous,{onClick:()=>r((0,a.default)(n).subtract(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(em.ScheduleHeader.Control,{interactive:!1,miw:200,children:(t=(e=(0,a.default)((0,j.getStartOfWeek)({date:n,firstDayOfWeek:1}))).add(6,"day"),e.month()===t.month()?`${e.format("MMM D")} – ${t.format("D, YYYY")}`:`${e.format("MMM D")} – ${t.format("MMM D, YYYY")}`)}),(0,c.jsx)(em.ScheduleHeader.Next,{onClick:()=>r((0,a.default)(n).add(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(em.ScheduleHeader.Today,{onClick:()=>r((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(em.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(m.WeekView,{date:n,onDateChange:r,events:i,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DateStringValue,
  getStartOfWeek,
  ScheduleHeader,
  WeekView,
} from '@mantine/schedule';
import { events } from './data';

function getWeekRangeLabel(date: DateStringValue) {
  const start = dayjs(getStartOfWeek({ date, firstDayOfWeek: 1 }));
  const end = start.add(6, 'day');
  if (start.month() === end.month()) {
    return \`\${start.format('MMM D')} – \${end.format('D, YYYY')}\`;
  }
  return \`\${start.format('MMM D')} – \${end.format('MMM D, YYYY')}\`;
}

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'week')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {getWeekRangeLabel(date)}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'week')
                .format('YYYY-MM-DD') as DateStringValue
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
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};e.i(27355);let ev={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",weekday:"Día de la semana",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
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
        weekday: 'D\xeda de la semana',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eD={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var ep=e.i(593612),eg=e.i(554166),ew=e.i(725695);let ey=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),eh=(0,a.default)(ey).add(1,"day").format("YYYY-MM-DD"),eY=[{id:1,title:"Morning Standup",start:`${ey} 09:00:00`,end:`${ey} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${ey} 11:00:00`,end:`${ey} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${eh} 12:30:00`,end:`${eh} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],ek={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:eY,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,c.jsxs)(ew.Group,{children:[(0,c.jsx)(Q.Text,{fz:12,fw:500,children:e.title}),(0,c.jsxs)(ew.Group,{gap:4,children:[(0,c.jsx)(ep.ClockIcon,{size:12}),(0,c.jsx)(Q.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,c.jsxs)(ew.Group,{gap:4,children:[(0,c.jsx)(eg.MapPinIcon,{size:12}),(0,c.jsx)(Q.Text,{fz:10,children:e.payload.location})]})]})})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  {
    id: 2,
    title: 'Client Meeting',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'green',
    payload: { location: 'Video Call' },
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${dayAfterStartOfWeek} 12:30:00\`,
    end: \`\${dayAfterStartOfWeek} 13:30:00\`,
    color: 'orange',
    payload: { location: 'Cafeteria' },
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <Group>
          <Text fz={12} fw={500}>
            {event.title}
          </Text>
          <Group gap={4}>
            <ClockIcon size={12} />
            <Text fz={10} lh={1}>
              {dayjs(event.start).format('h:mm A')}
            </Text>
          </Group>

          {event.payload?.location && (
            <Group gap={4}>
              <MapPinIcon size={12} />
              <Text fz={10}>{event.payload.location}</Text>
            </Group>
          )}
        </Group>
      )}
    />
  );
}
`},eS=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),eE=(0,a.default)(eS).add(1,"day").format("YYYY-MM-DD"),ex=(0,a.default)(eS).add(2,"day").format("YYYY-MM-DD"),eM=[{id:1,title:"Conference Day",start:`${eS} 00:00:00`,end:(0,a.default)(eS).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${eE} 00:00:00`,end:(0,a.default)(eE).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${eS} 00:00:00`,end:(0,a.default)(ex).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Morning Standup",start:`${eS} 09:00:00`,end:`${eS} 09:30:00`,color:"blue"},{id:5,title:"Code Review",start:`${eE} 14:00:00`,end:`${eE} 15:00:00`,color:"violet"}],eT={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:eM,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');
const twoDaysAfter = dayjs(startOfWeek).add(2, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Conference Day',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(startOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 2,
    title: 'Holiday',
    start: \`\${dayAfterStartOfWeek} 00:00:00\`,
    end: dayjs(dayAfterStartOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
  },
  {
    id: 3,
    title: 'Team Building',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(twoDaysAfter).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
  {
    id: 4,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 5,
    title: 'Code Review',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},eb=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),eW=(0,a.default)(eb).add(1,"day").format("YYYY-MM-DD"),ej=[{id:1,title:"Draggable Event",start:`${eb} 09:00:00`,end:`${eb} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${eb} 11:00:00`,end:`${eb} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${eW} 14:00:00`,end:`${eW} 15:00:00`,color:"green"}],eC={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(ej);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canDragEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable Event',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Draggable',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      canDragEvent={(event) => !event.payload?.locked}
    />
  );
}
`},e$=(0,a.default)().startOf("week").add(2,"day").format("YYYY-MM-DD"),eO=(0,a.default)(e$).add(1,"day").format("YYYY-MM-DD"),eH=[{id:1,title:"Resizable Event",start:`${e$} 09:00:00`,end:`${e$} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${e$} 11:00:00`,end:`${e$} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${eO} 14:00:00`,end:`${eO} 15:00:00`,color:"green"}],eV={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(eH);return(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`};var eA=e.i(485108);let eI={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(ew.Group,{mb:"md",children:[(0,c.jsx)(eA.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Week"}),(0,c.jsxs)(Q.Text,{fw:500,children:[(0,a.default)(e).startOf("week").format("MMM D")," –"," ",(0,a.default)(e).endOf("week").format("MMM D, YYYY")]}),(0,c.jsx)(eA.Button,{onClick:()=>t((0,a.default)(e).add(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Next Week"})]}),(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Week
        </Button>
        <Text fw={500}>{dayjs(date).startOf('week').format('MMM D')} – {dayjs(date).endOf('week').format('MMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Week
        </Button>
      </Group>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eR={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)("week");return(0,c.jsxs)("div",{children:[(0,c.jsxs)(Q.Text,{mb:"md",children:["Selected view: ",n]}),(0,c.jsx)(m.WeekView,{date:e,onDateChange:t,events:i,startTime:"08:00:00",endTime:"18:00:00",onViewChange:r})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleViewLevel } from '@mantine/schedule';
import { Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [view, setView] = useState<ScheduleViewLevel>('week');

  return (
    <div>
      <Text mb="md">Selected view: {view}</Text>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        onViewChange={setView}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eB={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(m.WeekView,{date:new Date,events:i,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startScrollTime="07:00:00"
      getTimeSlotProps={({ start }) => {
        const hour = parseInt(start.split(' ')[1], 10);
        if (hour >= 7 && hour < 20) {
          return { 'data-business-hours': true };
        }
        return { 'data-non-business-hours': true };
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var e_=(0,t.__exportAll)({allDayEvents:()=>eT,backgroundEvents:()=>ed,backgroundEventsCustomStyle:()=>ec,bidirectionalDragDrop:()=>et,businessHours:()=>b,canDragEvent:()=>eC,canResizeEvent:()=>eV,controlledDate:()=>eI,currentTimeIndicator:()=>Y,customHeader:()=>ef,dragDrop:()=>H,eventForm:()=>Z,eventResize:()=>R,externalDragDrop:()=>X,firstDayOfWeek:()=>p,forceCurrentTimeIndicator:()=>k,getTimeSlotProps:()=>eB,highlightToday:()=>y,intervalMinutes:()=>D,localization:()=>ev,overlappingEvents:()=>W,radius:()=>eD,recurringEvents:()=>er,renderEvent:()=>F,renderEventBody:()=>ek,slotHeight:()=>T,slotLabelFormat:()=>M,startScrollTime:()=>U,staticMode:()=>P,timeRange:()=>v,usage:()=>f,viewChange:()=>eR,weekLabelFormat:()=>x,weekdayFormat:()=>g,withoutAllDaySlots:()=>S,withoutHeader:()=>E,withoutWeekNumber:()=>h,withoutWeekendDays:()=>w});e.s(["WeekViewDemos",0,e_],953813)}]);