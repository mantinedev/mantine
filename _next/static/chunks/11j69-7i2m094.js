(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,315401,e=>{"use strict";var t=e.i(86473),a=e.i(27748),r=e.i(855578),n=e.i(898496),o=e.i(4332),i=e.i(441058),l=e.i(494834);function d({week:e,weekendDays:t,withWeekendDays:a=!0,firstDayOfWeek:r=1}){let n=[],s=(0,l.default)((0,i.getStartOfWeek)({date:e,firstDayOfWeek:r}));for(let e=0;e<7;e+=1){let e=s.day();(!(t&&t.includes(e))||a)&&n.push((0,o.toDateString)(s)),s=s.add(1,"day")}return n}var s=e.i(969610),u=e.i(792930),c=e.i(505696),f=e.i(657068),m=e.i(245086),h=e.i(783261),v=e.i(637079),y=e.i(376879),g=e.i(312709),D=e.i(201867),p=e.i(891343),w=e.i(966696),x=e.i(298008),Y=e.i(68642),b=e.i(813982),S=e.i(532965),M=e.i(751198);function k({event:e,weekDays:t,actualEndDate:a}){let r=(0,l.default)(e.start).startOf("day");return t.filter(e=>{let t=(0,l.default)(e).startOf("day");return(t.isAfter(r)||t.isSame(r))&&(t.isBefore(a)||t.isSame(a))})}function E(e){let t=(0,l.default)(e.end).startOf("day");return 0===(0,l.default)(e.end).hour()&&0===(0,l.default)(e.end).minute()?t.subtract(1,"day"):t}function V({eventStartDate:e,actualEndDate:t,weekDays:a}){let r=(0,l.default)(a[0]),n=(0,l.default)(a[a.length-1]),o=e.isBefore(r),i=t.isAfter(n);return o&&i?"both":o?"start":i?"end":"none"}var C=e.i(232471),T=e.i(284629),I=e.i(205693),j=e.i(391398);function O({day:e,dayIndex:a,slots:r,getStyles:n,weekendDays:o,children:i,labels:d,highlightBusinessHours:s,businessHours:u,withEventsDragAndDrop:f,onDaySlotsDragOver:m,onDaySlotsDragLeave:h,onDaySlotsDrop:v,onSlotClick:y,dropTargetSlotIndex:g,mode:D,slotsRef:p,firstSlotIndex:w,onSlotKeyDown:x,onFirstSlotArrowUp:Y,withDragSlotSelect:b,onSlotPointerDown:S,isSlotDragSelected:M,daySlotsContainerRef:k,getTimeSlotProps:E}){let V=(0,I.useDatesContext)().getWeekendDays(o).includes((0,l.default)(e).day()),$=(0,l.default)(e).isSame((0,l.default)(),"day"),B=(0,l.default)(e).format("YYYY-MM-DD"),W=r.map((r,o)=>{let i=g===o,l=w?.dayIndex===a&&w?.slotIndex===o,m=M?.(o,B)||!1,h=`${B} ${r.startTime}`,v=`${B} ${r.endTime}`,{onClick:k,...V}=E?.({start:h,end:v})||{},C="static"===D?void 0:t=>{y?.(String(e),r.startTime,t),k?.(t)};return(0,j.jsx)(T.UnstyledButton,{ref:e=>{e&&p?.current&&(p.current[a]||(p.current[a]=[]),p.current[a][o]=e)},...n("weekViewDaySlot"),mod:{"hour-start":r.isHourStart,...(0,c.getBusinessHoursMod)({time:r.startTime,businessHours:u,highlightBusinessHours:s}),"drop-target":i,"drag-selected":m,static:"static"===D},"aria-label":`${(0,t.getLabel)("timeSlot",d)} ${B} ${r.startTime} - ${r.endTime}`,tabIndex:"static"===D?-1:l?0:-1,"data-drag-slot-index":b&&"static"!==D?o:void 0,"data-drag-slot-group":b&&"static"!==D?B:void 0,onKeyDown:e=>{0===o&&"ArrowUp"===e.key&&Y?(e.preventDefault(),Y(a)):x&&x(e,a,o)},onPointerDown:b&&"static"!==D?e=>S?.(e,o,B):void 0,onClick:C,onDragOver:f&&"static"!==D?e=>e.preventDefault():void 0,...V},r.startTime)});return(0,j.jsx)(C.Box,{...n("weekViewDay"),mod:{today:$,weekend:V},children:(0,j.jsxs)(C.Box,{ref:k,mod:{today:$},...n("weekViewDaySlots"),onDragOver:f&&"static"!==D?t=>m?.(t,String(e),a):void 0,onDragLeave:f&&"static"!==D?h:void 0,onDrop:f&&"static"!==D?t=>v?.(t,String(e),a):void 0,children:[i,W]})})}var $={weekView:"m_42b9032d",weekViewRoot:"m_6b2099af",weekViewInner:"m_f8734f29",weekViewScrollArea:"m_44818807",weekViewHeader:"m_13bcfc1a",weekViewCorner:"m_bc98be2",weekViewSlotLabels:"m_149dcaaa",weekViewSlotLabel:"m_29f492e9",weekViewDay:"m_98199d2f",weekViewDayLabel:"m_ccf0d705",weekViewDayNumber:"m_d5b28558",weekViewDayWeekday:"m_a0fc06f9",weekViewBackgroundEvent:"m_41ce8f1f",weekViewDaySlots:"m_cd58ae46",weekViewDaySlot:"m_8ac0cbcd",weekViewWeekLabel:"m_838426b3",weekViewWeekNumber:"m_f1892b6a",weekViewAllDaySlots:"m_4f08474d",weekViewAllDaySlotsLabel:"m_85cdcfa7",weekViewAllDaySlotsEvents:"m_2923a6c6",weekViewAllDaySlotsList:"m_77edfd8b"},B=e.i(19300),W=e.i(481178),H=e.i(275519),A=e.i(433512),R=e.i(779177),_=e.i(951254),L=e.i(44091),N=e.i(62904),z=e.i(391466),P=e.i(417241),F=e.i(332977),U=e.i(191788);let G={__staticSelector:"WeekView",withWeekendDays:!0,withCurrentTimeIndicator:!0,startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,weekdayFormat:"ddd",withWeekNumber:!0,withCurrentTimeBubble:!0,withAllDaySlots:!0,withHeader:!0,weekLabelFormat:"MMM DD",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},K=(0,W.createVarsResolver)((e,{radius:t,allDaySlotHeight:a,slotHeight:r})=>({weekView:{"--week-view-radius":void 0!==t?(0,A.getRadius)(t):void 0,"--week-view-all-day-slots-height":(0,R.rem)(a),"--week-view-slot-height":(0,R.rem)(r)}})),J=(0,H.factory)(e=>{var W;let H=(0,L.useProps)("WeekView",G,e),{classNames:A,className:R,style:J,styles:Q,unstyled:q,attributes:X,vars:Z,startTime:ee,endTime:et,date:ea,onDateChange:er,intervalMinutes:en,slotLabelFormat:eo,withWeekendDays:ei,weekendDays:el,firstDayOfWeek:ed,weekdayFormat:es,radius:eu,highlightToday:ec,withCurrentTimeIndicator:ef,scrollAreaProps:em,locale:eh,withWeekNumber:ev,withCurrentTimeBubble:ey,withAllDaySlots:eg,__staticSelector:eD,withHeader:ep,onViewChange:ew,previousControlProps:ex,nextControlProps:eY,todayControlProps:eb,viewSelectProps:eS,weekLabelFormat:eM,events:ek,allDaySlotHeight:eE,slotHeight:eV,labels:eC,highlightBusinessHours:eT,businessHours:eI,renderEventBody:ej,renderEvent:eO,withEventsDragAndDrop:e$,onEventDrop:eB,canDragEvent:eW,onEventDragStart:eH,onEventDragEnd:eA,onTimeSlotClick:eR,onAllDaySlotClick:e_,onEventClick:eL,withDragSlotSelect:eN,onSlotDragEnd:ez,mode:eP,startScrollTime:eF,renderWeekLabel:eU,onExternalEventDrop:eG,withEventResize:eK,onEventResize:eJ,canResizeEvent:eQ,recurrenceExpansionLimit:eq,getTimeSlotProps:eX,...eZ}=H,e0=(0,z.useStyles)({name:eD,classes:$,props:H,className:R,style:J,classNames:A,styles:Q,unstyled:q,vars:Z,varsResolver:K,attributes:X,rootSelector:"weekView"}),{resolvedClassNames:e1,resolvedStyles:e3}=(0,N.useResolvedStylesApi)({classNames:A,styles:Q,props:H}),e2={classNames:e1,styles:e3,attributes:X,__staticSelector:eD,radius:eu},e4=(0,_.useMantineTheme)(),[e9,e8]=(0,U.useState)(!1),e6=(0,I.useDatesContext)(),e7=(0,n.getDayTimeIntervals)({startTime:ee,endTime:et,intervalMinutes:en}),e5=(0,U.useRef)(null);(0,m.useAutoScrollOnDrag)({viewportRef:e5,enabled:(e$||!!eG)&&"static"!==eP});let te=(0,U.useCallback)((e,t)=>{if(!eG)return;let a=(0,l.default)(t.day).format("YYYY-MM-DD");eG(e.dataTransfer,`${a} ${e7[t.slotIndex].startTime}`)},[eG,e7]),tt=(0,U.useCallback)((e,t)=>{eG&&eG(e.dataTransfer,`${(0,l.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eG]),ta=(0,h.useDragDropHandlers)({enabled:e$,mode:eP,onEventDrop:eB,canDragEvent:eW,onEventDragStart:eH,onEventDragEnd:eA,calculateDropTarget:(e,t)=>{let a=e7[e.slotIndex].startTime;return(0,u.calculateDropTime)({draggedEvent:t,targetDate:e.day,targetSlotTime:a,intervalMinutes:en})},onExternalDrop:eG?te:void 0}),tr=(0,h.useDragDropHandlers)({enabled:e$,mode:eP,onEventDrop:eB,canDragEvent:eW,onEventDragStart:eH,onEventDragEnd:eA,calculateDropTarget:(e,t)=>{let a=(0,l.default)(t.end).diff((0,l.default)(t.start),"millisecond"),r=(0,l.default)(e).startOf("day");return{start:r.toDate(),end:r.add(a,"millisecond").toDate()}},onExternalDrop:eG?tt:void 0}),tn=(0,y.useSlotDragSelect)({enabled:eN&&"static"!==eP,onDragEnd:(e,t,a)=>{if(!ez)return;let r=(0,l.default)(a).format("YYYY-MM-DD");ez(`${r} ${e7[e].startTime}`,`${r} ${e7[t].endTime}`)}}),to=(0,v.useEventResize)({enabled:eK,mode:eP,startTime:ee,endTime:et,intervalMinutes:en,onEventResize:eJ,canResizeEvent:eQ}),ti=(e$||!!eG)&&"static"!==eP,tl=(e,t,a)=>{if(!eR)return;let r=(0,l.default)(e).format("YYYY-MM-DD"),n=e7.findIndex(e=>e.startTime===t);if(-1===n)return;let o=e7[n];eR({slotStart:`${r} ${o.startTime}`,slotEnd:`${r} ${o.endTime}`,nativeEvent:a})},td=d({week:ea,withWeekendDays:ei,weekendDays:e6.getWeekendDays(el),firstDayOfWeek:e6.getFirstDayOfWeek(ed)}),ts=function({date:e,events:t,startTime:a,endTime:r,firstDayOfWeek:n=1,weekendDays:o=[0,6],withWeekendDays:i=!0}){let u=d({week:e,firstDayOfWeek:n,withWeekendDays:i,weekendDays:o}),c=u.length,f=(0,l.default)(u[0]),m=(0,l.default)(u[u.length-1]),h={allDayEvents:[],regularEvents:Object.fromEntries(u.map(e=>[e,[]])),backgroundEvents:Object.fromEntries(u.map(e=>[e,[]]))},v=new Map,y=new Map;for(let e of(0,b.sortEvents)(t)){if("background"===e.display){let t=(0,l.default)(e.start).startOf("day"),n=E(e),o=k({event:e,weekDays:u,actualEndDate:n}),i=V({eventStartDate:t,actualEndDate:n,weekDays:u});for(let t of o){let n=u.indexOf(t);if(-1===n)continue;let o=(0,l.default)(t),d=o.endOf("day"),f=(0,l.default)(e.start),m=(0,l.default)(e.end),v=f.isBefore(o)?o:f,y=m.isAfter(d)?d:m,g={...e,start:v.format("YYYY-MM-DD HH:mm:ss"),end:y.format("YYYY-MM-DD HH:mm:ss")},D=(0,s.isAllDayEvent)({event:g,date:t}),p=D?{top:0,height:100}:(0,S.getDayPosition)({event:g,startTime:a,endTime:r});if(!D&&p.height<=0)continue;let w=n/c*100;h.backgroundEvents[t].push({...e,position:{...p,allDay:D,column:0,width:100,offset:0,overlaps:1,weekOffset:w,row:0,hanging:i}})}continue}let t=(0,l.default)(e.start).startOf("day"),n=E(e),o=k({event:e,weekDays:u,actualEndDate:n});if(0===o.length)continue;let i=n.isAfter(t),d=V({eventStartDate:t,actualEndDate:n,weekDays:u}),m=o.some(t=>(0,s.isAllDayEvent)({event:e,date:t})),g=i||m,D=g?y:v,p=function(e){let t=0;for(;function({columns:e,columnIndex:t,event:a,allDay:r,allWeekDays:n}){let o=`col-${t}`;return!!e.has(o)&&e.get(o).some(e=>{let t=n.some(t=>(0,s.isAllDayEvent)({event:e,date:t})),o=(0,M.isEventsOverlap)(e,a);return r&&t?o:!r&&!t&&o})}({...e,columnIndex:t});)t++;return t}({columns:D,event:e,allDay:g,allWeekDays:u}),w=`col-${p}`;D.has(w)||D.set(w,[]),D.get(w).push(e);let x=g?{top:0,height:100}:(0,S.getDayPosition)({event:e,startTime:a,endTime:r});if(g){let a=function({eventStartDate:e,weekStartDate:t,weekDays:a,visibleDaysCount:r,hangingStart:n}){let o=e;return n&&(o=t),a.some(e=>(0,l.default)(e).isSame(o,"day"))||(o=(0,l.default)(a[0])),(a.filter(e=>(0,l.default)(e).isBefore(o)||(0,l.default)(e).isSame(o,"day")).length-1)/r*100}({eventStartDate:t,weekStartDate:f,weekDays:u,visibleDaysCount:c,hangingStart:"start"===d||"both"===d});h.allDayEvents.push({...e,position:{...x,allDay:g,column:p,width:0,offset:a,overlaps:0,row:0,hanging:d}})}else for(let t of o){let a=u.indexOf(t);if(-1===a)continue;let r=a/c*100;h.regularEvents[t].push({...e,position:{...x,allDay:g,column:p,width:0,offset:0,overlaps:0,weekOffset:r,row:0,hanging:d}})}}for(let e of u){var g=h.regularEvents[e];for(let e of g){let t=e.position.column;for(let a of g)(0,M.isEventsOverlap)(e,a)&&(t=Math.max(t,a.position.column));let a=t+1;e.position.overlaps=a,e.position.width=100/a,e.position.offset=100*e.position.column/a}}if(h.allDayEvents.length>0){let e=function(e){let t=new Map;for(let a of e){let e=0;for(;;){let r=!1;for(let[n,o]of t.entries())if(o===e&&(0,M.isEventsOverlap)(a,n)){r=!0;break}if(!r)break;e++}t.set(a,e)}return t}(h.allDayEvents),t=new Set;for(let a of h.allDayEvents){let r=e.get(a);a.position.row=r,t.add(r)}let a=Math.max(...t)+1;for(let e of h.allDayEvents){let t=(0,l.default)(e.start).startOf("day"),r=E(e);e.position.width=function({eventStartDate:e,actualEndDate:t,weekStartDate:a,weekEndDate:r,weekDays:n,visibleDaysCount:o}){let i=e;e.isBefore(a)&&(i=a);let d=t;return t.isAfter(r)&&(d=r),n.filter(e=>((0,l.default)(e).isAfter(i)||(0,l.default)(e).isSame(i,"day"))&&((0,l.default)(e).isBefore(d)||(0,l.default)(e).isSame(d,"day"))).length/o*100}({eventStartDate:t,actualEndDate:r,weekStartDate:f,weekEndDate:m,weekDays:u,visibleDaysCount:c}),e.position.overlaps=a}}return h}({...W={date:ea,events:(0,f.expandRecurringEvents)({events:ek,rangeStart:(0,l.default)(td[0]).startOf("day").toDate(),rangeEnd:(0,l.default)(td[td.length-1]).endOf("day").toDate(),expansionLimit:eq}),startTime:ee,endTime:et,firstDayOfWeek:e6.getFirstDayOfWeek(ed),weekendDays:e6.getWeekendDays(el),withWeekendDays:ei},events:function({date:e,events:t,startTime:a,endTime:r,firstDayOfWeek:n=1}){if(void 0===t)return[];let o=new Set,d=[];for(let s of t)if(function({event:e,targetWeek:t,firstDayOfWeek:a}){let r=(0,l.default)((0,i.getStartOfWeek)({date:t,firstDayOfWeek:a})),n=r.add(7,"day");return(0,l.default)(e.start).isBefore(n)&&(0,l.default)(e.end).isAfter(r)}({event:s,targetWeek:e,firstDayOfWeek:n})&&(0,Y.isEventInTimeRange)({event:s,startTime:a,endTime:r})){if(d.push((0,x.validateEvent)(s)),o.has(s.id))throw Error(`[@mantine/schedule] WeekView: Duplicated event ids found: ${s.id}`);o.add(s.id)}return d}(W)}),tu=e7.map(e=>{let t=(0,a.formatDate)({date:(0,l.default)(`${(0,l.default)(ea).format("YYYY-MM-DD")} ${e.startTime}`),locale:e6.getLocale(eh),format:eo});return(0,U.createElement)(C.Box,{...e0("weekViewSlotLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,c.getBusinessHoursMod)({time:e.startTime,businessHours:eI,highlightBusinessHours:eT})}},t)}),tc=(0,U.useRef)([]),tf=(0,U.useRef)([]),tm=(0,U.useRef)([]),th=(0,U.useRef)([]),tv=(0,F.useMergedRef)(e5,em?.viewportRef),ty={dayIndex:0,slotIndex:0};(0,P.useIsomorphicEffect)(()=>{if(!eF||!e5.current)return;let e=tc.current[0];if(!e||0===e.length)return;let t=e7.findIndex(e=>e.startTime>=eF);if(t<0)return;let a=e[t];if(!a)return;let r=a.getBoundingClientRect(),n=e5.current.getBoundingClientRect();e5.current.scrollTo({left:0,top:r.top-n.top})},[]);let tg=(0,U.useCallback)((e,t)=>{let a=tc.current[t]??[],r=a.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(r>=0)return r;let n=a[0],o=a[a.length-1];if(!n||!o)return null;let i=n.getBoundingClientRect(),l=o.getBoundingClientRect();return e.clientY<i.top?0:e.clientY>l.bottom?a.length-1:null},[]),tD=(e,t,a)=>{!function({controlsRef:e,dayIndex:t,slotIndex:a,event:r}){let n=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(r.key);if(n){r.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,dayIndex:r,slotIndex:n,size:o}){let i=function({direction:e,dayIndex:t,slotIndex:a,size:r}){let n=r[t];if(!n)return null;switch(e){case"up":if(0===a)return null;return{dayIndex:t,slotIndex:a-1};case"down":if(a===n-1)return null;return{dayIndex:t,slotIndex:a+1};case"left":{if(0===t)return null;let e=Math.min(a,r[t-1]-1);return{dayIndex:t-1,slotIndex:e}}case"right":{if(t===r.length-1)return null;let e=Math.min(a,r[t+1]-1);return{dayIndex:t+1,slotIndex:e}}default:return null}}({direction:a,dayIndex:r,slotIndex:n,size:o});if(!i)return;let l=t.current?.[i.dayIndex]?.[i.slotIndex];l&&(l.disabled||l.getAttribute("data-hidden")?e({controlsRef:t,direction:a,dayIndex:i.dayIndex,slotIndex:i.slotIndex,size:o}):l.focus())}({controlsRef:e,direction:n,dayIndex:t,slotIndex:a,size:o})}}({controlsRef:tc,dayIndex:t,slotIndex:a,event:e})},tp=ef?td.findIndex(e=>(0,l.default)(e).isSame((0,l.default)(),"date")):-1,tw=td.map((e,r)=>(0,U.createElement)(T.UnstyledButton,{...e0("weekViewDayLabel"),key:e,ref:e=>{tm.current[r]=e},"aria-label":`${(0,t.getLabel)("weekday",eC)} ${(0,l.default)(e).format("YYYY-MM-DD")}`,mod:{today:(0,l.default)(e).isSame((0,l.default)(),"day")&&!!ec,weekend:e6.getWeekendDays(el).includes((0,l.default)(e).day()),static:"static"===eP},tabIndex:"static"===eP?-1:0===r?0:-1,onKeyDown:"static"===eP?void 0:e=>{let t;"ArrowRight"===(t=e.key)&&r<td.length-1?(e.preventDefault(),tm.current[r+1]?.focus()):"ArrowLeft"===t&&r>0&&(e.preventDefault(),tm.current[r-1]?.focus())},onClick:"static"===eP?void 0:()=>{ew?.("day"),er?.((0,o.toDateString)(e))}},(0,U.createElement)(C.Box,{...e0("weekViewDayWeekday"),key:"weekday"},(0,a.formatDate)({locale:e6.getLocale(eh),date:e,format:es})),(0,U.createElement)("div",{...e0("weekViewDayNumber"),key:"date"},(0,l.default)(e).date()))),tx=td.map((e,t)=>{let a=(ts.backgroundEvents[e]||[]).filter(e=>!e.position.allDay).map(e=>{let t=e4.variantColorResolver({color:e.color||e4.primaryColor,theme:e4,variant:"light",autoContrast:!0}),a="function"==typeof ej?ej(e):e.title,r={key:`bg-${e.id}`,...e0("weekViewBackgroundEvent",{style:{top:`${e.position.top}%`,height:`${e.position.height}%`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eO)return eO(e,r);let{key:n,...o}=r;return(0,j.jsx)(C.Box,{...o},n)}),r=(ts.regularEvents[e]||[]).map(a=>{let r=(0,s.isAllDayEvent)({event:a,date:e}),n=!r&&ta.isDraggableEvent(a),o=!r&&to.isResizableEvent(a),i=to.getResizePosition(a.id),d=i?i.top:a.position.top,u=i?i.height:a.position.height;return(0,j.jsx)(p.ScheduleEvent,{event:a,autoSize:!0,hanging:a.position.hanging,draggable:n,withResize:o,isResizing:null!==i,onResizeStart:o?(r,n)=>{let o=th.current[t];o&&to.handleResizeStart({event:a,edge:r,container:o,originalTop:a.position.top,originalHeight:a.position.height,eventDate:(0,l.default)(e).format("YYYY-MM-DD"),pointerEvent:n})}:void 0,renderEventBody:ej,renderEvent:eO,radius:eu,mode:eP,onClick:eL?e=>{to.wasResizing()||eL(a,e)}:void 0,style:{position:"absolute",top:`calc(${d}% + 1px)`,left:`${a.position.offset}%`,width:`${a.position.width}%`,height:`calc(${u}% - 1px)`}},a.id)});return(0,j.jsxs)(O,{day:e,dayIndex:t,slots:e7,getStyles:e0,weekendDays:el,highlightBusinessHours:eT,businessHours:eI,labels:eC,withEventsDragAndDrop:ti,mode:eP,slotsRef:tc,firstSlotIndex:ty,onSlotKeyDown:tD,onSlotClick:tl,onFirstSlotArrowUp:eg?e=>{tf.current[e]?.focus()}:void 0,onDaySlotsDragOver:(e,t,a)=>{let r=tg(e,a);null!==r&&ta.handleDragOver(e,{day:t,slotIndex:r})},onDaySlotsDragLeave:ta.handleDragLeave,onDaySlotsDrop:(e,t,a)=>{let r=tg(e,a);null!==r&&ta.handleDrop(e,{day:t,slotIndex:r})},dropTargetSlotIndex:ta.dropTarget?.day===e?ta.dropTarget.slotIndex:void 0,withDragSlotSelect:eN,onSlotPointerDown:tn.handleSlotPointerDown,isSlotDragSelected:tn.isSlotSelected,daySlotsContainerRef:e=>{th.current[t]=e},getTimeSlotProps:eX,children:[a,r]},e)}),tY=td.map((e,a)=>(0,j.jsx)(T.UnstyledButton,{"aria-label":`${(0,t.getLabel)("allDay",eC)} ${(0,l.default)(e).format("YYYY-MM-DD")}`,ref:e=>{tf.current[a]=e},tabIndex:0===a?0:-1,onKeyDown:e=>{let t;"ArrowRight"===(t=e.key)&&a<td.length-1?(e.preventDefault(),tf.current[a+1]?.focus()):"ArrowLeft"===t&&a>0?(e.preventDefault(),tf.current[a-1]?.focus()):"ArrowDown"===t&&(e.preventDefault(),tc.current?.[a]?.[0]?.focus())},onClick:"static"!==eP&&e_?t=>e_((0,l.default)(e).format("YYYY-MM-DD"),t):void 0,onDragOver:ti?t=>tr.handleDragOver(t,e):void 0,onDragLeave:ti?tr.handleDragLeave:void 0,onDrop:ti?t=>tr.handleDrop(t,e):void 0,...e0("weekViewDaySlot"),mod:{"drop-target":tr.isDropTarget(e)}},e)),tb=(0,U.useMemo)(()=>new Set(ts.allDayEvents.map(e=>e.id)),[ts.allDayEvents]),tS=ts.allDayEvents.map(e=>(0,j.jsx)(p.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,hanging:e.position.hanging,draggable:tr.isDraggableEvent(e),renderEvent:eO,mode:eP,onClick:eL?t=>eL(e,t):void 0,style:{position:"absolute",zIndex:2,top:`calc(${50*e.position.row}% + 1px)`,left:`calc(${e.position.offset}% + 1px)`,width:`calc(${e.position.width}% - 1px)`,height:"calc(50% - 2px)",maxHeight:"calc(50% - 2px)"}},e.id)),tM=td.flatMap((e,t)=>{let a=(ts.backgroundEvents[e]||[]).filter(e=>e.position.allDay),r=100/td.length,n=t*r;return a.map(t=>{let a=e4.variantColorResolver({color:t.color||e4.primaryColor,theme:e4,variant:"light",autoContrast:!0}),o="function"==typeof ej?ej(t):t.title,i={key:`bg-allday-${t.id}-${e}`,...e0("weekViewBackgroundEvent",{style:{top:0,height:"100%",left:`${n}%`,width:`${r}%`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:o};if("function"==typeof eO)return eO(t,i);let{key:l,...d}=i;return(0,j.jsx)(C.Box,{...d},l)})}),tk=Math.max(...ts.allDayEvents.map(e=>e.position.row),1)-1,tE=(0,j.jsxs)(C.Box,{...e0("weekView"),mod:{static:"static"===eP,"slot-dragging":tn.isDragging},...eZ,children:[ep&&(0,j.jsx)(w.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>{var e;let t;return e=e6.getFirstDayOfWeek(ed),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,l.default)(t).set("date",(0,l.default)(t).date()-7))},next:()=>{var e;let t;return e=e6.getFirstDayOfWeek(ed),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,l.default)(t).set("date",(0,l.default)(t).date()+7))},today:()=>(0,o.toDateString)((0,l.default)())},control:{miw:140,title:function({weekdays:e,locale:t,weekLabelFormat:r,renderWeekLabel:n}){return n?n({weekStart:(0,l.default)(e[0]).format("YYYY-MM-DD"),weekEnd:(0,l.default)(e[e.length-1]).format("YYYY-MM-DD")}):`${(0,a.formatDate)({locale:t,date:e[0],format:r})} – ${(0,a.formatDate)({locale:t,date:e[e.length-1],format:r})}, ${(0,a.formatDate)({locale:t,date:e[0],format:"YYYY"})}`}({weekdays:td,locale:e6.getLocale(eh),weekLabelFormat:eM,renderWeekLabel:eU})},labels:eC,onDateChange:er,onViewChange:ew,previousControlProps:ex,nextControlProps:eY,todayControlProps:eb,viewSelectProps:eS,stylesApiProps:e2}),(0,j.jsx)(C.Box,{...e0("weekViewRoot"),__vars:{"--indicator-offset-index":-1===tp?void 0:`${tp+1}`,"--number-of-days":ei?"7":`${7-e6.getWeekendDays(el).length}`},mod:{"with-weekends":ei},children:(0,j.jsxs)(B.ScrollArea.Autosize,{scrollbarSize:4,...em,...e0("weekViewScrollArea",{className:em?.className,style:em?.style}),onScrollPositionChange:e=>{em?.onScrollPositionChange?.(e),e8(0!==e.y)},viewportRef:tv,children:[(0,j.jsxs)(C.Box,{...e0("weekViewHeader"),mod:{scrolled:e9},children:[(0,U.createElement)("div",{...e0("weekViewCorner"),key:"corner"},ev&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{...e0("weekViewWeekLabel"),children:(0,t.getLabel)("week",eC)}),(0,j.jsx)("div",{...e0("weekViewWeekNumber"),children:(0,r.getWeekNumber)(ea)})]})),tw]}),eg&&(0,j.jsxs)("div",{...e0("weekViewAllDaySlots"),children:[(0,j.jsx)("div",{...e0("weekViewAllDaySlotsLabel"),children:(0,t.getLabel)("allDay",eC)}),(0,j.jsxs)("div",{...e0("weekViewAllDaySlotsList"),children:[tM,(0,j.jsx)(C.Box,{...e0("weekViewAllDaySlotsEvents"),__vars:{"--extra-rows":`${tk}`},children:tS}),tY]})]}),(0,j.jsxs)("div",{...e0("weekViewInner"),children:[(0,j.jsx)("div",{...e0("weekViewSlotLabels"),children:tu}),ef&&-1!==tp&&(0,j.jsx)(g.CurrentTimeIndicator,{startOffset:"calc(100% - (100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index) + 1) + ((var(--number-of-days) - var(--indicator-offset-index) + 1) * var(--indicator-labels-offset)))",endOffset:"calc((100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index)) - (var(--number-of-days) - var(--indicator-offset-index)) * var(--indicator-labels-offset))",timeBubbleStartOffset:"calc(var(--week-view-slots-label-width) - var(--time-bubble-width))",currentTimeFormat:eo,withTimeBubble:ey,withThumb:!ey||0!==tp,locale:eh,startTime:ee,endTime:et,...e2}),tx]})]})})]}),tV=(0,U.useMemo)(()=>({isDragging:ta.dragContextValue.isDragging||tr.dragContextValue.isDragging,draggedEventId:ta.dragContextValue.draggedEventId??tr.dragContextValue.draggedEventId,draggedEvent:ta.dragContextValue.draggedEvent??tr.dragContextValue.draggedEvent,dropTarget:ta.dragContextValue.dropTarget??tr.dragContextValue.dropTarget,onDragStart:e=>{tb.has(e.id)?tr.handleDragStart(e):ta.handleDragStart(e)},onDragEnd:()=>{ta.handleDragEnd(),tr.handleDragEnd()},setDropTarget:ta.dragContextValue.setDropTarget}),[ta.dragContextValue,tr.dragContextValue,tb]);return e$?(0,j.jsx)(D.DragContext.Provider,{value:tV,children:tE}):tE});J.displayName="@mantine/schedule/WeekView",J.classes=$,J.varsResolver=K,e.s(["WeekView",0,J],315401)},898770,e=>{"use strict";var t=e.i(494834);e.s(["isMultidayEvent",0,function(e){let a=(0,t.default)(e.start).startOf("day");return(0,t.default)(e.end).startOf("day").isAfter(a)}])},813982,e=>{"use strict";var t=e.i(494834);e.s(["sortEvents",0,function(e){return e.toSorted((e,a)=>{let r=(0,t.default)(e.start).diff((0,t.default)(a.start));return 0!==r?r:(0,t.default)(a.end).diff((0,t.default)(a.start))-(0,t.default)(e.end).diff((0,t.default)(e.start))})}])},822933,e=>{"use strict";var t=e.i(191788);e.s(["useInterval",0,function(e,a,{autoInvoke:r=!1}={}){let[n,o]=(0,t.useState)(!1),i=(0,t.useRef)(null),l=(0,t.useRef)(null),d=(0,t.useCallback)(()=>{o(e=>(e||i.current&&-1!==i.current||(i.current=window.setInterval(l.current,a)),!0))},[]),s=(0,t.useCallback)(()=>{o(!1),window.clearInterval(i.current||-1),i.current=-1},[]),u=(0,t.useCallback)(()=>{n?s():d()},[n]);return(0,t.useEffect)(()=>(l.current=e,n&&d(),s),[e,n,a]),(0,t.useEffect)(()=>{r&&d()},[]),{start:d,stop:s,toggle:u,active:n}}])},898496,672654,969610,792930,505696,245086,637079,312709,68642,532965,751198,e=>{"use strict";function t(e){let t=Math.round(Math.max(1,Math.min(60,e)));return 60%t==0?t:60}function a(e){let[t,a,r]=e.split(":").map(Number);return{hours:t,minutes:a,seconds:r||0}}function r({hours:e,minutes:t,seconds:a}){return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}:${String(a).padStart(2,"0")}`}e.s(["clampIntervalMinutes",0,t],672654),e.s(["getDayTimeIntervals",0,function({startTime:e,endTime:n,intervalMinutes:o=60}){let i=t(o),l=a(e),d=n?a(n):{hours:23,minutes:59,seconds:59},s=3600*l.hours+60*l.minutes+l.seconds,u=3600*d.hours+60*d.minutes+d.seconds,c=60*i,f=[],m=s;for(;m<u;){let e=m,t=m+c;t>u&&(t=u);let a=Math.floor(e/3600),n=Math.floor(e%3600/60),o=e%60,i=Math.floor(t/3600),l=Math.floor(t%3600/60),d=t%60,s=t-e,h=0===n&&0===o;f.push({startTime:r({hours:a,minutes:n,seconds:o}),endTime:r({hours:i,minutes:l,seconds:d}),duration:s,isHourStart:h}),m=t}return f}],898496);var n=e.i(494834);e.s(["isAllDayEvent",0,function({event:e,date:t}){let a=(0,n.default)(t).startOf("day"),r=a.add(1,"day"),o=(0,n.default)(e.start),i=(0,n.default)(e.end);return o.isSame(a)&&i.isSame(r)}],969610),e.s(["calculateDropTime",0,function({draggedEvent:e,targetDate:t,targetSlotTime:r,mouseYOffset:o=0,slotHeight:i=64,intervalMinutes:l=15}){let d=(0,n.default)(e.end).diff((0,n.default)(e.start),"millisecond"),s=a(r),u=(0,n.default)(t).startOf("day").hour(s.hours).minute(s.minutes).second(0),c=u;if(o>0&&i>0){let e=Math.round(o/i*l);c=u.add(e,"minute")}return{start:c.toDate(),end:c.add(d,"millisecond").toDate()}}],792930),e.s(["getBusinessHoursMod",0,function({time:e,businessHours:t,highlightBusinessHours:a}){if(!a||!t)return{"business-hours":!1,"non-business-hours":!1};let[r,n]=t,o=e>=r&&e<n;return{"business-hours":o,"non-business-hours":!o}}],505696);var o=e.i(191788);e.s(["useAutoScrollOnDrag",0,function({viewportRef:e,enabled:t}){let a=(0,o.useRef)(null),r=(0,o.useRef)(0),n=(0,o.useEffectEvent)(()=>{null!==a.current&&(cancelAnimationFrame(a.current),a.current=null),r.current=0}),i=(0,o.useEffectEvent)(()=>{if(null!==a.current)return;let t=()=>{let n=e.current;if(!n||0===r.current){a.current=null;return}n.scrollTop+=r.current,a.current=requestAnimationFrame(t)};a.current=requestAnimationFrame(t)});(0,o.useEffect)(()=>{if(!t)return;let a=e.current;if(!a)return;let o=e=>{let t=a.getBoundingClientRect(),o=e.clientY-t.top,l=t.bottom-e.clientY;o<50?(r.current=-Math.ceil((1-o/50)*8),i()):l<50?(r.current=Math.ceil((1-l/50)*8),i()):n()},l=()=>{n()};return a.addEventListener("dragover",o),a.addEventListener("dragleave",l),a.addEventListener("dragend",l),a.addEventListener("drop",l),()=>{n(),a.removeEventListener("dragover",o),a.removeEventListener("dragleave",l),a.removeEventListener("dragend",l),a.removeEventListener("drop",l)}},[t,e])}],245086),e.s(["useEventResize",0,function({enabled:e=!1,mode:t="default",startTime:r,endTime:i,intervalMinutes:l,onEventResize:d,canResizeEvent:s}){let[u,c]=(0,o.useState)(null),f=(0,o.useRef)(null),m=(0,o.useRef)(!1),h=(0,o.useEffectEvent)(d||(()=>{})),v=a(r),y=a(i),g=60*v.hours+v.minutes,D=60*y.hours+y.minutes-g,p=l/D*100,w=(0,o.useCallback)(e=>Math.max(0,Math.min(D,Math.round(e/l)*l)),[D,l]),x=(0,o.useCallback)((e,t)=>{let a=g+w(e/100*D),r=Math.floor(a/60);return`${t} ${String(r).padStart(2,"0")}:${String(a%60).padStart(2,"0")}:00`},[D,g,w]),Y=(0,o.useCallback)(e=>w(e/100*D)/D*100,[D,w]),b=(0,o.useCallback)(({event:a,edge:r,container:o,originalTop:i,originalHeight:l,eventDate:d,pointerEvent:s})=>{if(!e||"static"===t)return;s.preventDefault(),s.stopPropagation();let u={eventId:a.id,event:a,edge:r,container:o,originalTop:i,originalHeight:l,currentTop:i,currentHeight:l,eventDate:d,originalStart:(0,n.default)(a.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,n.default)(a.end).format("YYYY-MM-DD HH:mm:ss")};f.current=u,c(u)},[e,t]),S=null!==u;(0,o.useEffect)(()=>{if(!S)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{let t=f.current;if(!t)return;let a=t.container.getBoundingClientRect(),r=Y(Math.max(0,Math.min(100,(e.clientY-a.top)/a.height*100))),n=t.originalTop,o=t.originalHeight;if("bottom"===t.edge)o=Math.max(p,r-t.originalTop);else{let e=t.originalTop+t.originalHeight;n=Math.min(r,e-p),o=e-n}f.current={...t,currentTop:n,currentHeight:o},c(f.current)},a=()=>{let e=f.current;if(e&&(e.currentTop!==e.originalTop||e.currentHeight!==e.originalHeight)){let t,a;"top"===e.edge?(t=x(e.currentTop,e.eventDate),a=e.originalEnd):(t=e.originalStart,a=x(e.currentTop+e.currentHeight,e.eventDate)),h({eventId:e.eventId,newStart:t,newEnd:a,event:e.event})}f.current=null,c(null),m.current=!0,requestAnimationFrame(()=>{m.current=!1})};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a)}},[S]);let M=(0,o.useCallback)(e=>u&&u.eventId===e?{top:u.currentTop,height:u.currentHeight}:null,[u]),k=(0,o.useCallback)(a=>!!e&&"static"!==t&&"background"!==a.display&&(!s||s(a)),[e,t,s]),E=(0,o.useCallback)(()=>m.current,[]);return{handleResizeStart:b,isResizing:S,resizingEventId:u?.eventId??null,getResizePosition:M,isResizableEvent:k,wasResizing:E}}],637079);var i=e.i(27748);function l(e){let t=(0,n.default)();if(!e?.startTime||!e?.endTime){let e=(0,n.default)().startOf("date");return t.diff(e,"minute")/1440*100}let[a,r]=e.startTime.split(":").map(Number),[o,i]=e.endTime.split(":").map(Number),l=t.startOf("date"),d=l.hour(a).minute(r).second(0),s=l.hour(o).minute(i).second(0).diff(d,"minute");return t.diff(d,"minute")/s*100}var d={currentTimeIndicator:"m_74c54f2d",currentTimeIndicatorLine:"m_e62414c1",currentTimeIndicatorThumb:"m_decee6a9",currentTimeIndicatorTimeBubble:"m_4b00bcc6"},s=e.i(232471),u=e.i(481178),c=e.i(275519),f=e.i(317477),m=e.i(44091),h=e.i(391466),v=e.i(822933),y=e.i(205693),g=e.i(391398);let D={__staticSelector:"CurrentTimeIndicator",withTimeBubble:!0,withThumb:!0,currentTimeFormat:"HH:mm",topOffset:"0rem"},p=(0,u.createVarsResolver)((e,{color:t})=>({currentTimeIndicator:{"--indicator-color":t?(0,f.getThemeColor)(t,e):void 0}})),w=(0,c.factory)(e=>{let t=(0,m.useProps)("CurrentTimeIndicator",D,e),{classNames:r,className:u,style:c,styles:f,unstyled:w,vars:x,attributes:Y,startOffset:b,endOffset:S,color:M,withTimeBubble:k,withThumb:E,currentTimeFormat:V,locale:C,timeBubbleStartOffset:T,__staticSelector:I,topOffset:j,startTime:O,endTime:$,...B}=t,W=(0,h.useStyles)({name:I,classes:d,props:t,className:u,style:c,classNames:r,styles:f,unstyled:w,vars:x,varsResolver:p,attributes:Y,rootSelector:"currentTimeIndicator"}),H=(0,y.useDatesContext)(),[A,R]=(0,o.useState)(l({startTime:O,endTime:$}));(0,v.useInterval)(()=>R(l({startTime:O,endTime:$})),6e4,{autoInvoke:!0});let _=k?(0,i.formatDate)({locale:H.getLocale(C),date:(0,n.default)(),format:V}):"";return!function({date:e,startTime:t="00:00:00",endTime:r="23:59:59"}){let o=(0,n.default)(e),i=a(t),l=a(r),d=o.hour(i.hours).minute(i.minutes).second(i.seconds),s=o.hour(l.hours).minute(l.minutes).second(l.seconds);return o.isAfter(d)&&o.isBefore(s)}({date:(0,n.default)().toDate(),startTime:O,endTime:$})?null:(0,g.jsxs)(s.Box,{...W("currentTimeIndicator"),__vars:{"--top-offset":`calc(${A}% + ${j})`,"--start-offset":b,"--end-offset":S,"--time-bubble-start-offset":T,"--time-bubble-width":_?.toString().toLowerCase().includes("m")?"64px":"46px"},...B,children:[k&&(0,g.jsx)("div",{...W("currentTimeIndicatorTimeBubble"),children:_}),E&&(0,g.jsx)("div",{...W("currentTimeIndicatorThumb")}),(0,g.jsx)("div",{...W("currentTimeIndicatorLine")})]})});w.displayName="@mantine/schedule/CurrentTimeIndicator",w.classes=d,w.varsResolver=p,e.s(["CurrentTimeIndicator",0,w],312709);var x=e.i(898770);e.s(["isEventInTimeRange",0,function({event:e,startTime:t,endTime:a}){if((0,x.isMultidayEvent)(e)||!t||!a)return!0;let[r,o]=t.split(":").map(Number),[i,l]=a.split(":").map(Number),d=(0,n.default)(e.start),s=(0,n.default)(e.end),u=60*d.hour()+d.minute();return!(60*s.hour()+s.minute()<=60*r+o||u>=60*i+l)}],68642),e.s(["getDayPosition",0,function({event:e,startTime:t="00:00:00",endTime:r="23:59:59"}){let o=(0,n.default)(e.start),i=(0,n.default)(e.end),l=a(t),d=a(r),s=o.startOf("date"),u=s.hour(l.hours).minute(l.minutes).second(0),c=s.hour(d.hours).minute(d.minutes).second(0),f=c.diff(u,"minute"),m=(o.isBefore(u)?u:o).diff(u,"minute"),h=(i.isAfter(c)?c:i).diff(u,"minute"),v=m/f*100;return{top:v,height:h/f*100-v}}],532965),e.s(["isEventsOverlap",0,function(e,t){let a=(0,n.default)(e.start).valueOf(),r=(0,n.default)(e.end).valueOf(),o=(0,n.default)(t.start).valueOf();return a<(0,n.default)(t.end).valueOf()&&o<r}],751198)},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),r={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},n=e.i(424302),o=e.i(392862),i=e.i(284629),l=e.i(275519),d=e.i(44091),s=e.i(391466),u=e.i(541772),c=e.i(391398);let f={dropdownType:"popover"},m=(0,l.factory)(e=>{let l=(0,d.useProps)("MoreEvents",f,e),{classNames:m,className:h,style:v,styles:y,unstyled:g,vars:D,attributes:p,radius:w,dropdownType:x,events:Y,moreEventsCount:b,popoverProps:S,modalProps:M,onDropdownClose:k,children:E,modalTitle:V,renderEventBody:C,id:T,labels:I,mode:j,...O}=l,[$,B]=(0,u.useDisclosure)(),W=(0,s.useStyles)({name:"MoreEvents",classes:r,props:l,className:h,style:v,classNames:m,styles:y,unstyled:g,attributes:p,vars:D,rootSelector:"moreEventsButton"}),H=()=>{B.close(),k?.()},A=(0,c.jsx)("div",{...W("moreEventsList"),children:Y.map(e=>(0,c.jsx)(a.ScheduleEvent,{radius:w,event:e,size:"md",renderEventBody:C,mode:j,children:e.title},e.id))});return(0,c.jsxs)(c.Fragment,{children:["modal"===x&&(0,c.jsx)(n.Modal,{opened:$,onClose:H,unstyled:g,radius:w,title:V,...M,children:A}),(0,c.jsxs)(o.Popover,{position:"bottom-start",width:260,opened:$,trapFocus:!0,returnFocus:!1,unstyled:g,disabled:S?.disabled||"modal"===x,radius:w,transitionProps:{transition:"pop",duration:120},offset:-46,id:T,...S,onChange:e=>{e||(S?.onChange?.(e),H())},children:[(0,c.jsx)(o.Popover.Target,{children:(0,c.jsx)(i.UnstyledButton,{...W("moreEventsButton"),mod:{static:"static"===j},onClick:()=>B.toggle(),...O,children:(0,t.getLabel)("moreLabel",I)(b)})}),(0,c.jsx)(o.Popover.Dropdown,{...W("moreEventsDropdown"),children:A})]})]})});m.displayName="@mantine/schedule/MoreEvents",m.classes=r,e.s(["MoreEvents",0,m],67312)},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),r=e.i(672654),n=e.i(898496),o=e.i(4332),i=e.i(969610),l=e.i(792930),d=e.i(505696),s=e.i(657068),u=e.i(245086),c=e.i(783261),f=e.i(637079),m=e.i(376879),h=e.i(312709),v=e.i(201867),y=e.i(891343),g=e.i(67312),D=e.i(966696),p=e.i(298008),w=e.i(68642),x=e.i(532965),Y=e.i(813982),b=e.i(751198),S=e.i(494834),M={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},k=e.i(232471),E=e.i(19300),V=e.i(284629),C=e.i(481178),T=e.i(275519),I=e.i(433512),j=e.i(779177),O=e.i(951254),$=e.i(44091),B=e.i(62904),W=e.i(391466),H=e.i(417241),A=e.i(332977),R=e.i(191788),_=e.i(205693),L=e.i(391398);let N={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},z=(0,C.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:r})=>({dayView:{"--day-view-radius":void 0!==t?(0,I.getRadius)(t):void 0,"--day-view-slot-height":(0,j.rem)(a),"--day-view-all-day-slot-height":(0,j.rem)(r)}})),P=(0,T.factory)(e=>{let C=(0,$.useProps)("DayView",N,e),{classNames:T,className:I,style:j,styles:P,unstyled:F,attributes:U,vars:G,__staticSelector:K,startTime:J,endTime:Q,intervalMinutes:q,withAllDaySlot:X,date:Z,locale:ee,slotLabelFormat:et,headerFormat:ea,withCurrentTimeIndicator:er=(0,S.default)(Z).isSame((0,S.default)(),"day"),withCurrentTimeBubble:en,withHeader:eo,radius:ei,onDateChange:el,onViewChange:ed,previousControlProps:es,nextControlProps:eu,todayControlProps:ec,viewSelectProps:ef,slotHeight:em,allDaySlotHeight:eh,scrollAreaProps:ev,events:ey,moreEventsProps:eg,renderEventBody:eD,renderEvent:ep,labels:ew,highlightBusinessHours:ex,businessHours:eY,withEventsDragAndDrop:eb,onEventDrop:eS,canDragEvent:eM,onEventDragStart:ek,onEventDragEnd:eE,onTimeSlotClick:eV,onAllDaySlotClick:eC,onEventClick:eT,withDragSlotSelect:eI,onSlotDragEnd:ej,mode:eO,startScrollTime:e$,onExternalEventDrop:eB,withEventResize:eW,onEventResize:eH,canResizeEvent:eA,recurrenceExpansionLimit:eR,getTimeSlotProps:e_,...eL}=C,eN=(0,W.useStyles)({name:K,classes:M,props:C,className:I,style:j,classNames:T,styles:P,unstyled:F,attributes:U,vars:G,varsResolver:z,rootSelector:"dayView"}),{resolvedClassNames:ez,resolvedStyles:eP}=(0,B.useResolvedStylesApi)({classNames:T,styles:P,props:C}),eF={classNames:ez,styles:eP,attributes:U,__staticSelector:K,radius:ei},eU=(0,O.useMantineTheme)(),eG=(0,_.useDatesContext)(),eK=(0,n.getDayTimeIntervals)({startTime:J,endTime:Q,intervalMinutes:q}),eJ=(0,R.useRef)([]),eQ=(0,R.useRef)(null),eq=(0,R.useRef)(null),eX=(0,A.useMergedRef)(eQ,ev?.viewportRef);(0,u.useAutoScrollOnDrag)({viewportRef:eQ,enabled:(eb||!!eB)&&"static"!==eO}),(0,H.useIsomorphicEffect)(()=>{if(!e$||!eQ.current||0===eJ.current.length)return;let e=eK.findIndex(e=>e.startTime>=e$);if(e<0)return;let t=eJ.current[e];if(!t)return;let a=t.getBoundingClientRect(),r=eQ.current.getBoundingClientRect();eQ.current.scrollTo({left:0,top:a.top-r.top})},[]);let eZ=(0,R.useCallback)(e=>{let t=eJ.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=eJ.current[0],r=eJ.current[eJ.current.length-1];if(!a||!r)return null;let n=a.getBoundingClientRect(),o=r.getBoundingClientRect();return e.clientY<n.top?0:e.clientY>o.bottom?eJ.current.length-1:null},[]),e0=(0,m.useSlotDragSelect)({enabled:eI&&"static"!==eO,onDragEnd:(e,t)=>{if(!ej)return;let a=(0,S.default)(Z).format("YYYY-MM-DD");ej(`${a} ${eK[e].startTime}`,`${a} ${eK[t].endTime}`)}}),e1=function({events:e,date:t,startTime:a,endTime:r}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let n=new Set,o=[],l=[],d=(0,S.default)(t).startOf("day"),s=(0,S.default)(t).endOf("day");for(let t of e){let e=(0,S.default)(t.start),i=(0,S.default)(t.end),u=e.isSame(d,"day"),c=!u&&"background"===t.display&&e.isBefore(s)&&i.isAfter(d);if(u||c){if(u&&!(0,w.isEventInTimeRange)({event:t,startTime:a,endTime:r}))continue;let e=(0,p.validateEvent)(t);if(n.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);n.add(t.id),"background"===t.display?l.push(e):o.push(e)}}let u=function({events:e,startTime:t,endTime:a,date:r}){let n=[],o=[];for(let l of(0,Y.sortEvents)(e)){let e=(0,i.isAllDayEvent)({event:l,date:r}),d=0;for(;function({columns:e,columnIndex:t,event:a,allDay:r,date:n}){return!!e[t]&&e[t].some(e=>{let t=(0,i.isAllDayEvent)({event:e,date:n}),o=(0,b.isEventsOverlap)(e,a);return!r&&!t&&o})}({columns:n,columnIndex:d,event:l,allDay:e,date:r});)d++;n[d]||(n[d]=[]),n[d].push(l);let s=e?{top:0,height:100}:(0,x.getDayPosition)({event:l,startTime:t,endTime:a});o.push({...l,position:{...s,allDay:e,column:d,width:0,offset:0,overlaps:0}})}for(let e of o){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let r=[];for(let t of o)t!==e&&!t.position.allDay&&(0,b.isEventsOverlap)(t,e)&&r.push(t);let n=a;for(let e of r)for(let t of(n=Math.max(n,e.position.column),o))t!==e&&!t.position.allDay&&(0,b.isEventsOverlap)(t,e)&&(n=Math.max(n,t.position.column));let i=n+1,l=i;for(let e of r)e.position.column>a&&e.position.column<l&&(l=e.position.column);let d=l-a;e.position.overlaps=i,e.position.width=d/i*100,e.position.offset=100*a/i}return o}({events:o,startTime:a,endTime:r,date:t}),c=[],f=[];for(let e of u)e.position.allDay?c.push(e):f.push(e);let m=[],h=[];for(let e of l){let n=(0,S.default)(e.start),o=(0,S.default)(e.end),l=n.isBefore(d)?d:n,u=o.isAfter(s)?s:o,c={...e,start:l.format("YYYY-MM-DD HH:mm:ss"),end:u.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:c,date:t}))h.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:n}=(0,x.getDayPosition)({event:c,startTime:a,endTime:r});if(n<=0)continue;m.push({...e,position:{top:t,height:n,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:c,regularEvents:f,backgroundTimedEvents:m,backgroundAllDayEvents:h}}({events:(0,s.expandRecurringEvents)({events:ey,rangeStart:(0,S.default)(Z).startOf("day").toDate(),rangeEnd:(0,S.default)(Z).endOf("day").toDate(),expansionLimit:eR}),date:Z,startTime:J,endTime:Q}),e3=(0,R.useCallback)((e,t)=>{if(!eB)return;let a=(0,S.default)(Z).format("YYYY-MM-DD");eB(e.dataTransfer,`${a} ${eK[t].startTime}`)},[eB,Z,eK]),e2=(0,c.useDragDropHandlers)({enabled:eb,mode:eO,onEventDrop:eS,canDragEvent:eM,onEventDragStart:ek,onEventDragEnd:eE,calculateDropTarget:(e,t)=>{let a=eK[e].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:Z,targetSlotTime:a,intervalMinutes:q})},onExternalDrop:eB?e3:void 0}),e4=(0,f.useEventResize)({enabled:eW,mode:eO,startTime:J,endTime:Q,intervalMinutes:q,onEventResize:eH,canResizeEvent:eA}),e9=(eb||!!eB)&&"static"!==eO,e8=e1.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:Z}),a=!t&&e2.isDraggableEvent(e),r=!t&&e4.isResizableEvent(e),n=e4.getResizePosition(e.id),o=n?n.top:e.position.top,l=n?n.height:e.position.height;return(0,L.jsx)(y.ScheduleEvent,{event:e,renderEventBody:eD,renderEvent:ep,autoSize:!0,draggable:a,withResize:r,isResizing:null!==n,onResizeStart:r?(t,a)=>{eq.current&&e4.handleResizeStart({event:e,edge:t,container:eq.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,S.default)(Z).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eO,onClick:eT?t=>{e4.wasResizing()||eT(e,t)}:void 0,...eF,style:{...eF.styles?.event,top:`${o}%`,height:`${l}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),e6=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e1.allDayEvents.length}),e7=e1.allDayEvents.slice(0,e6.visibleEventsCount).map(e=>(0,L.jsx)(y.ScheduleEvent,{event:e,renderEventBody:eD,renderEvent:ep,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eO,onClick:eT?t=>eT(e,t):void 0,...eF},e.id)),e5=(0,S.default)(Z).format("YYYY-MM-DD"),te=eK.map((e,a)=>{let n=e2.isDropTarget(a),o=e0.isSlotSelected(a,e5),i=`${e5} ${e.startTime}`,l=`${e5} ${e.endTime}`,{onClick:s,...u}=e_?.({start:i,end:l})||{},c="static"===eO?void 0:e=>{eV?.({slotStart:i,slotEnd:l,nativeEvent:e}),s?.(e)};return(0,R.createElement)(V.UnstyledButton,{...eN("dayViewSlot"),key:e.startTime,ref:e=>{eJ.current[a]=e},mod:{"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:eY,highlightBusinessHours:ex}),"drop-target":n,"drag-selected":o,static:"static"===eO},__vars:{"--slot-size":`${(0,r.clampIntervalMinutes)(q)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eO?-1:0===a?0:-1,"data-drag-slot-index":eI&&"static"!==eO?a:void 0,"data-drag-slot-group":eI&&"static"!==eO?e5:void 0,onKeyDown:"static"===eO?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<eK.length-1?(e.preventDefault(),eJ.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),eJ.current[a-1]?.focus())},onPointerDown:eI&&"static"!==eO?e=>e0.handleSlotPointerDown(e,a,e5):void 0,onClick:c,onDragOver:e9?e=>e.preventDefault():void 0,...u})}),tt=eK.reduce((e,t)=>{if(t.isHourStart){let r=(0,S.default)(`${(0,S.default)(Z).format("YYYY-MM-DD")} ${t.startTime}`),n=(0,a.formatDate)({locale:eG.getLocale(ee),date:r,format:et});e.push((0,R.createElement)(k.Box,{...eN("dayViewSlotLabel"),key:t.startTime,mod:(0,d.getBusinessHoursMod)({time:t.startTime,businessHours:eY,highlightBusinessHours:ex})},n))}return e},[]),ta=e1.backgroundAllDayEvents.map(e=>{let t=eU.variantColorResolver({color:e.color||eU.primaryColor,theme:eU,variant:"light",autoContrast:!0}),a="function"==typeof eD?eD(e):e.title,r={key:`bg-allday-${e.id}`,...eN("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ep)return ep(e,r);let{key:n,...o}=r;return(0,L.jsx)(k.Box,{...o},n)}),tr=e1.backgroundTimedEvents.map(e=>{let t=eU.variantColorResolver({color:e.color||eU.primaryColor,theme:eU,variant:"light",autoContrast:!0}),a="function"==typeof eD?eD(e):e.title,r={key:e.id,...eN("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ep)return ep(e,r);let{key:n,...o}=r;return(0,L.jsx)(k.Box,{...o},n)}),tn=(0,L.jsxs)(k.Box,{...eN("dayView"),mod:{static:"static"===eO,"slot-dragging":e0.isDragging},...eL,children:[eo&&(0,L.jsx)(D.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,S.default)(Z).subtract(1,"day")),next:()=>(0,o.toDateString)((0,S.default)(Z).add(1,"day")),today:()=>(0,o.toDateString)((0,S.default)())},control:{title:(0,a.formatDate)({locale:eG.getLocale(ee),date:Z,format:ea}),miw:140},labels:ew,onDateChange:el,onViewChange:ed,previousControlProps:es,nextControlProps:eu,todayControlProps:ec,viewSelectProps:ef,stylesApiProps:eF}),(0,L.jsx)(E.ScrollArea.Autosize,{scrollbarSize:4,...ev,...eN("dayViewScrollArea",{className:ev?.className,style:ev?.style}),viewportRef:eX,children:(0,L.jsxs)(k.Box,{...eN("dayViewInner"),children:[(0,L.jsxs)("div",{...eN("dayViewSlotLabels"),children:[X&&(0,L.jsx)(k.Box,{...eN("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",ew)}),tt]}),(0,L.jsxs)("div",{...eN("dayViewSlots"),children:[X&&(0,L.jsxs)("div",{...eN("dayViewAllDay"),children:[ta,(0,L.jsxs)("div",{...eN("dayViewAllDayEvents"),children:[e7,e6.hiddenEventsCount>0&&(0,L.jsx)(g.MoreEvents,{events:e1.allDayEvents,moreEventsCount:e6.hiddenEventsCount,renderEventBody:eD,mode:eO,...eF,...eg})]}),(0,L.jsx)(V.UnstyledButton,{...eN("dayViewSlot"),mod:{"all-day":!0,static:"static"===eO},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${(0,t.getLabel)("allDay",ew)}`,onClick:"static"!==eO&&eC?e=>{eC((0,S.default)(Z).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:eq,...eN("dayViewTimeSlots"),onDragOver:e9?e=>{let t=eZ(e);null!==t&&e2.handleDragOver(e,t)}:void 0,onDragLeave:e9?e2.handleDragLeave:void 0,onDrop:e9?e=>{let t=eZ(e);null!==t&&e2.handleDrop(e,t)}:void 0,children:[tr,e8,er&&(0,L.jsx)(h.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:et,withTimeBubble:en,withThumb:!en,locale:ee,startTime:J,endTime:Q,...eF}),te]})]})]})})]});return eb?(0,L.jsx)(v.DragContext.Provider,{value:e2.dragContextValue,children:tn}):tn});P.displayName="@mantine/schedule/DayView",P.classes=M,P.varsResolver=z,e.s(["DayView",0,P],200183)},168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),r=e.i(605520),n=e.i(753381),o=e.i(4332),i=e.i(494834);function l({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:n}){if(!t)return{start:(0,o.toDateString)((0,i.default)(e).startOf("month")),end:(0,o.toDateString)((0,i.default)(e).endOf("month"))};let d=(0,r.getMonthDays)({month:e,firstDayOfWeek:n,consistentWeeks:a});return{start:d[0][0],end:d[d.length-1][6]}}var d=e.i(657068),s=e.i(783261),u=e.i(376879),c=e.i(201867),f=e.i(891343),m=e.i(67312),h=e.i(966696),v=e.i(647170),y=e.i(298008),g=e.i(441058),D={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},p=e.i(232471),w=e.i(19300),x=e.i(284629),Y=e.i(481178),b=e.i(275519),S=e.i(433512),M=e.i(951254),k=e.i(44091),E=e.i(62904),V=e.i(391466),C=e.i(191788),T=e.i(205693),I=e.i(391398);let j=(0,Y.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,S.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),O={__staticSelector:"MonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},$=(0,b.factory)(e=>{let Y=(0,k.useProps)("MonthView",O,e),{classNames:b,className:S,style:$,styles:B,unstyled:W,attributes:H,vars:A,mod:R,date:_,onDateChange:L,withWeekNumbers:N,withWeekDays:z,locale:P,weekdayFormat:F,firstDayOfWeek:U,weekendDays:G,__staticSelector:K,getDayProps:J,getWeekNumberProps:Q,onDayClick:q,onWeekNumberClick:X,consistentWeeks:Z,highlightToday:ee,radius:et,withOutsideDays:ea,withHeader:er,monthYearSelectProps:en,onViewChange:eo,todayControlProps:ei,nextControlProps:el,previousControlProps:ed,viewSelectProps:es,events:eu,moreEventsProps:ec,renderEventBody:ef,renderEvent:em,withEventsDragAndDrop:eh,onEventDrop:ev,canDragEvent:ey,onEventDragStart:eg,onEventDragEnd:eD,onEventClick:ep,withDragSlotSelect:ew,onSlotDragEnd:ex,labels:eY,mode:eb,scrollAreaProps:eS,onExternalEventDrop:eM,recurrenceExpansionLimit:ek,maxEventsPerDay:eE,...eV}=Y,eC=Math.min(10,Math.max(1,eE??2)),eT=(0,V.useStyles)({name:K,classes:D,props:Y,className:S,style:$,classNames:b,styles:B,unstyled:W,attributes:H,vars:A,varsResolver:j,rootSelector:"monthView"}),{resolvedClassNames:eI,resolvedStyles:ej}=(0,E.useResolvedStylesApi)({classNames:b,styles:B,props:Y}),eO=(0,M.useMantineTheme)(),e$=(0,T.useDatesContext)(),eB=l({month:_,withOutsideDays:ea,consistentWeeks:Z,firstDayOfWeek:e$.getFirstDayOfWeek(U)}),eW=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:r,consistentWeeks:n}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let o=new Set,d=[],s=l({month:e,withOutsideDays:r,consistentWeeks:n,firstDayOfWeek:a});for(let e of t)if((0,i.default)(e.end).isAfter(s.start,"day")||(0,i.default)(e.start).isBefore(s.end,"day")){if(d.push((0,y.validateEvent)(e)),o.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);o.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:r}){let n={},o={},l=new Set,{weeks:d,groupedByDay:s}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let r=[],n={},o=(0,i.default)((0,g.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;o.isBefore(t)||o.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=o.format("YYYY-MM-DD 00:00:00");e.push(t),n[t]||(n[t]=[]),o=o.add(1,"day")}r.push(e)}return{weeks:r,groupedByDay:n}}({rangeStart:r?(0,i.default)(r.start):(0,i.default)(e).startOf("month"),rangeEnd:r?(0,i.default)(r.end):(0,i.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<d.length;e++)n[e.toString()]=[],o[e.toString()]=[];for(let e of t){let t=(0,i.default)(e.start).startOf("day"),a=(0,i.default)(e.end).startOf("day"),r=a.isAfter(t);for(let u=0;u<d.length;u++){let c=d[u],f=(0,i.default)(c[0]).startOf("day"),m=(0,i.default)(c[6]).endOf("day");if((t.isBefore(m)||t.isSame(m,"day"))&&(a.isAfter(f)||a.isSame(f,"day"))){let{startDayIndex:d,daysSpanned:c,startOffset:h,width:v,hanging:y}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:r,isMultiday:n}){let o=e,i=t,l=e.isBefore(a),d=t.isAfter(r);o.isBefore(a)&&(o=a),i.isAfter(r)&&(i=r);let s=o.diff(a,"day"),u=Math.max(1,i.diff(a,"day")-s+ +!!n);return{startDayIndex:s,daysSpanned:u,startOffset:s/7*100,width:u/7*100,hanging:l&&d?"both":l?"start":d?"end":"none"}}({eventStart:t,eventEnd:a,weekStart:f,weekEnd:m,isMultiday:r});if("background"===e.display){o[u.toString()].push({...e,position:{startOffset:h,width:v,weekIndex:u,row:0,hanging:y}});continue}let g=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:r}){let n=0;for(let o of e){let e=(0,i.default)(o.start).startOf("day"),l=(e.isBefore(r)||e.isSame(r,"day")?r:e).diff(r,"day");l+(o.position?.width||0)/100*7>t&&l<t+a&&(n=Math.max(n,(o.position?.row||0)+1))}return n}({existingEvents:n[u.toString()],startDayIndex:d,daysSpanned:c,weekStart:f}),D={...e,position:{startOffset:h,width:v,weekIndex:u,row:g,hanging:y}};n[u.toString()].push(D),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:r,eventsAddedToDay:n,weekIdx:o}){if(0===o||!n.has(e.id.toString())){let o=t;for(;o.isBefore(a)||o.isSame(a,"day");){let t=o.format("YYYY-MM-DD 00:00:00");r[t]&&r[t].push(e),o=o.add(1,"day")}n.add(e.id.toString())}}({positionedEvent:D,eventStart:t,eventEnd:a,groupedByDay:s,eventsAddedToDay:l,weekIdx:u})}}}return{groupedByWeek:n,groupedByDay:s,backgroundByWeek:o}}({date:e,events:d,firstDayOfWeek:a,range:s})}({date:_,events:(0,d.expandRecurringEvents)({events:eu,rangeStart:(0,i.default)(eB.start).startOf("day").toDate(),rangeEnd:(0,i.default)(eB.end).endOf("day").toDate(),expansionLimit:ek}),firstDayOfWeek:e$.getFirstDayOfWeek(U),withOutsideDays:ea,consistentWeeks:Z}),eH=(0,C.useCallback)((e,t)=>{eM&&eM(e.dataTransfer,`${(0,i.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eM]),eA=(0,s.useDragDropHandlers)({enabled:eh,mode:eb,onEventDrop:ev,canDragEvent:ey,onEventDragStart:eg,onEventDragEnd:eD,calculateDropTarget:(e,t)=>(function({draggedEvent:e,targetDay:t}){let a=(0,i.default)(e.end).diff((0,i.default)(e.start),"millisecond"),r=(0,i.default)(e.start),n=(0,i.default)(t).startOf("day").hour(r.hour()).minute(r.minute()).second(r.second()).millisecond(r.millisecond()),o=n.add(a,"millisecond");return{start:n.toDate(),end:o.toDate()}})({draggedEvent:t,targetDay:e}),onExternalDrop:eM?eH:void 0}),eR=(eh||!!eM)&&"static"!==eb,e_=(0,C.useRef)([]),eL=(0,u.useSlotDragSelect)({enabled:ew&&"static"!==eb,onDragEnd:(e,t)=>{if(!ex)return;let a=e_.current[e],r=e_.current[t];a&&r&&ex((0,i.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,i.default)(r).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),eN=(0,C.useRef)([]),ez=(0,r.getMonthDays)({month:(0,i.default)(_).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:e$.getFirstDayOfWeek(U),consistentWeeks:Z&&ea}),eP=(()=>{for(let e=0;e<ez.length;e++){let t=ez[e];for(let a=0;a<t.length;a++){let r=t[a];if((0,n.isSameMonth)(_,r)||ea)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),eF=z?(0,t.getWeekdaysNames)({locale:e$.getLocale(P),format:F,firstDayOfWeek:e$.getFirstDayOfWeek(U)}).map((e,t)=>(0,C.createElement)("div",{...eT("monthViewWeekday"),key:t},e)):null,eU="month";e_.current=ez.flat();let eG=ez.map((e,t)=>{eN.current[t]||(eN.current[t]=[]);let r=e.map((e,a)=>{let r=!(0,n.isSameMonth)(_,e),o=e$.getWeekendDays(G).includes((0,i.default)(e).day()),l=(0,i.default)(e).locale(P||e$.locale).format("MMMM D, YYYY"),d=J?.((0,i.default)(e).format("YYYY-MM-DD"))||{},s=(0,i.default)(e).isSame((0,i.default)(),"day")&&ee;if(r&&!ea)return(0,I.jsx)("div",{"data-static":!0,...eT("monthViewDay",{style:d.style})},e);let u=t===eP.weekIndex&&a===eP.dayIndex,c=eA.isDropTarget(e),f=7*t+a,m=eL.isSlotSelected(f,eU);return(0,C.createElement)(x.UnstyledButton,{"aria-label":l,...d,...eT("monthViewDay",{className:d.className,style:d.style}),key:e,ref:e=>{e&&(eN.current[t]||(eN.current[t]=[]),eN.current[t][a]=e)},"data-drag-slot-index":ew&&"static"!==eb?f:void 0,"data-drag-slot-group":ew&&"static"!==eb?eU:void 0,onClick:"static"===eb?void 0:t=>{q?.((0,i.default)(e).format("YYYY-MM-DD"),t),d.onClick?.(t)},onPointerDown:ew&&"static"!==eb?e=>eL.handleSlotPointerDown(e,f,eU):void 0,onKeyDown:e=>{(0,v.handleMonthViewKeyDown)({controlsRef:eN,weekIndex:t,dayIndex:a,event:e}),d.onKeyDown?.(e)},mod:[{outside:r,weekend:o,today:s,"drop-target":c,"drag-selected":m,static:"static"===eb},d.mod],"data-outside":r||void 0,tabIndex:"static"===eb?-1:u?0:-1,onDragOver:eR?t=>eA.handleDragOver(t,e):void 0,onDragLeave:eR?eA.handleDragLeave:void 0,onDrop:eR?t=>eA.handleDrop(t,e):void 0},(0,I.jsx)("span",{"data-today":s||void 0,...eT("monthViewDayLabel"),children:(0,i.default)(e).format("D")}))}),l=Q?.((0,i.default)(e[0]).format("YYYY-MM-DD"))||{},d=(0,a.getWeekNumber)(e),s=(eW.backgroundByWeek[t]||[]).map(e=>{let a=eO.variantColorResolver({color:e.color||eO.primaryColor,theme:eO,variant:"light",autoContrast:!0}),r="function"==typeof ef?ef(e):e.title,n={key:`bg-${e.id}-${t}`,...eT("monthViewBackgroundEvent",{style:{left:`calc(${e.position.startOffset}% + 2px)`,width:`calc(${e.position.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:r};if("function"==typeof em)return em(e,n);let{key:o,...i}=n;return(0,I.jsx)(p.Box,{...i},o)}),u=100/eC,c=(eW.groupedByWeek[t]||[]).filter(e=>e.position.row<eC).map(e=>{let t=eA.isDraggableEvent(e);return(0,I.jsx)(f.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:ef,renderEvent:em,radius:et,mode:eb,onClick:ep?t=>ep(e,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*u}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${u}% - 2px)`}},e.id)}),h=e.map((e,t)=>{let a=eW.groupedByDay[e]||[],r=Math.max(0,a.length-eC);return r<=0?null:(0,I.jsx)(m.MoreEvents,{events:a,moreEventsCount:r,mode:eb,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${t/7*100}% + 1px)`,width:`calc(${1/7*100}% - 1px)`,height:"22px",paddingInline:4},...ec},`more-${e}`)});return(0,C.createElement)("div",{...eT("monthViewWeek"),key:t},N&&(0,I.jsx)(x.UnstyledButton,{"aria-label":`Week ${d}`,...l,onClick:"static"===eb?void 0:t=>{eo?.("week"),L?.((0,o.toDateString)(e[0])),X?.((0,i.default)(e[0]).format("YYYY-MM-DD"),t),l.onClick?.(t)},mod:{static:"static"===eb},tabIndex:"static"===eb?-1:0,...eT("monthViewWeekNumber",{className:l.className,style:l.style}),children:d},d),(0,C.createElement)("div",{...eT("monthViewEvents"),key:"week-events"},s,c,h),r)}),eK=(0,I.jsxs)(p.Box,{mod:[{"with-week-numbers":N,"with-weekdays":z,static:"static"===eb,"slot-dragging":eL.isDragging},R],...eT("monthView"),...eV,children:[er&&(0,I.jsx)(h.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,i.default)(_).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,i.default)(_).add(1,"month").startOf("month")),today:()=>(0,o.toDateString)((0,i.default)())},control:{monthYearSelect:{locale:P,yearValue:(0,i.default)(_).get("year"),monthValue:(0,i.default)(_).get("month"),onYearChange:e=>L?.((0,o.toDateString)((0,i.default)(_).set("year",e).startOf("month"))),onMonthChange:e=>L?.((0,o.toDateString)((0,i.default)(_).set("month",e).startOf("month"))),...en}},labels:eY,onDateChange:L,onViewChange:eo,previousControlProps:ed,nextControlProps:el,todayControlProps:ei,viewSelectProps:es,stylesApiProps:{classNames:eI,styles:ej,attributes:H,__staticSelector:K,radius:et}}),(0,I.jsx)(w.ScrollArea,{scrollbarSize:4,...eS,...eT("monthViewScrollArea",{className:eS?.className,style:eS?.style}),children:(0,I.jsxs)("div",{...eT("monthViewInner"),children:[eF&&(0,I.jsxs)("div",{...eT("monthViewWeekdays"),children:[N&&(0,I.jsx)("div",{...eT("monthViewWeekdaysCorner")}),eF]}),eG]})})]});return eh?(0,I.jsx)(c.DragContext.Provider,{value:eA.dragContextValue,children:eK}):eK});$.displayName="@mantine/schedule/MonthView",$.classes=D,$.varsResolver=j,e.s(["MonthView",0,$],168574)},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let r=(0,t.default)(e);for(;r.day()!==a;)r=r.subtract(1,"day");return r.format("YYYY-MM-DD")}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:r="dd",firstDayOfWeek:n=1}){let o=(0,a.default)().day(n),i=[];for(let a=0;a<7;a+=1)i.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:r}));return i}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:r=1,consistentWeeks:n}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),i=o.format("YYYY-MM-DD"),l=function(e,t=1){let r=(0,a.default)(e);if(!r.isValid())return r;let n=0===t?6:t-1;for(;r.day()!==n;)r=r.add(1,"day");return r.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),r),d=[],s=(0,a.default)((0,t.getStartOfWeek)({date:i,firstDayOfWeek:r}));for(;(0,a.default)(s).isBefore(l,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(s.format("YYYY-MM-DD 00:00:00")),s=s.add(1,"day");d.push(e)}if(n&&d.length<6){let e=d[d.length-1],t=e[e.length-1],r=(0,a.default)(t).add(1,"day");for(;d.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(r.format("YYYY-MM-DD 00:00:00")),r=r.add(1,"day");d.push(e)}}return d}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:r}){let n=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(r.key);if(n){r.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,weekIndex:r,dayIndex:n,size:o}){let i=function({direction:e,weekIndex:t,dayIndex:a,size:r}){let n=r[t];if(!n)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,r[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===r.length-1)return null;let e=Math.min(a,r[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:r[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===n-1){if(t===r.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:r,dayIndex:n,size:o});if(!i)return;let l=t.current?.[i.weekIndex]?.[i.dayIndex];l&&(l.disabled||l.getAttribute("data-hidden")||l.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:o}):l.focus())}({controlsRef:e,direction:n,weekIndex:t,dayIndex:a,size:o})}}])},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),r=e.i(621304),n=e.i(855578),o=e.i(605520),i=e.i(753381),l=e.i(4332),d=e.i(813982),s=e.i(657068),u=e.i(647170),c=e.i(298008),f=e.i(898770),m=e.i(494834),h={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},v=e.i(462138),y=e.i(232471),g=e.i(883364),D=e.i(284629),p=e.i(481178),w=e.i(275519),x=e.i(433512),Y=e.i(317477),b=e.i(323283),S=e.i(951254),M=e.i(44091),k=e.i(391466),E=e.i(579560),V=e.i(191788),C=e.i(205693),T=e.i(391398);let I={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},j=(0,p.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,x.getRadius)(t)}})),O=(0,w.factory)(e=>{let p=(0,M.useProps)("MobileMonthView",I,e),{classNames:w,className:x,style:O,styles:$,unstyled:B,vars:W,attributes:H,__staticSelector:A,date:R,onDateChange:_,selectedDate:L,defaultSelectedDate:N,onSelectedDateChange:z,withWeekNumbers:P,withWeekDays:F,locale:U,firstDayOfWeek:G,weekdayFormat:K,weekendDays:J,getWeekNumberProps:Q,getDayProps:q,onDayClick:X,onWeekNumberClick:Z,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:er,events:en,labels:eo,mode:ei,renderEvent:el,eventsHeaderFormat:ed,onYearClick:es,onEventClick:eu,renderHeader:ec,recurrenceExpansionLimit:ef,...em}=p,eh=(0,C.useDatesContext)(),ev=(0,S.useMantineTheme)(),ey=(0,m.default)(),[eg,eD]=(0,E.useUncontrolled)({value:L,defaultValue:N??(0,l.toDateString)(ey),onChange:e=>z?.(e?(0,l.toDateString)((0,m.default)(e)):null)}),ep=(0,k.useStyles)({name:A,classes:h,props:p,className:x,style:O,classNames:w,styles:$,unstyled:B,attributes:H,vars:W,varsResolver:j,rootSelector:"mobileMonthView"}),ew=(0,V.useRef)([]),ex=(0,V.useRef)(null),eY=function({date:e,events:t}){let a={};if(void 0===t)return a;let r=new Set;for(let n of t)if("background"!==n.display&&(0,m.default)(n.start).isSame((0,m.default)(e),"month")){if(!function(e,t){if((0,f.isMultidayEvent)(e)){let a=(0,m.default)(e.start).startOf("day"),r=(0,m.default)(e.end).startOf("day");for(let n=a;n.isBefore(r)||n.isSame(r);n=n.add(1,"day")){let a=n.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,m.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,c.validateEvent)(n),a),r.has(n.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${n.id}`);r.add(n.id)}return a}({date:R,events:(0,s.expandRecurringEvents)({events:en,rangeStart:(0,m.default)(R).startOf("month").toDate(),rangeEnd:(0,m.default)(R).endOf("month").toDate(),expansionLimit:ef})}),eb=F?(0,r.getWeekdaysNames)({locale:eh.getLocale(U),format:K,firstDayOfWeek:eh.getFirstDayOfWeek(G)}).map((e,t)=>(0,V.createElement)("div",{...ep("mobileMonthViewWeekday"),key:t},e)):null,eS=(0,o.getMonthDays)({month:(0,m.default)(R).format("YYYY-MM-DD"),firstDayOfWeek:eh.getFirstDayOfWeek(G),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let r=!(0,i.isSameMonth)(e,R),n=eh.getWeekendDays(J).includes((0,m.default)(e).day()),o=(0,m.default)(e).locale(U||eh.locale).format("MMMM D, YYYY"),l=q?.((0,m.default)(e).format("YYYY-MM-DD"))||{},d=(0,m.default)(e).isSame(ey,"day")&&et,s=eg&&(0,m.default)(e).isSame((0,m.default)(eg),"day"),c=eY[(0,m.default)(e).format("YYYY-MM-DD")]||[],f=er||!r;f&&null===ex.current&&(ex.current={weekIndex:t,dayIndex:a});let h=ex.current?.weekIndex===t&&ex.current?.dayIndex===a,v=c.slice(0,3).map(e=>(0,V.createElement)("div",{...ep("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,Y.getThemeColor)(e.color,ev)}}),key:e.id}));return(0,V.createElement)(D.UnstyledButton,{"aria-label":o,"aria-selected":s||void 0,...l,...ep("mobileMonthViewDay",{className:l.className,style:l.style}),key:e,ref:e=>{e&&(ew.current[t]||(ew.current[t]=[]),ew.current[t][a]=e)},mod:[{outside:r,weekend:n,today:d,selected:s,static:"static"===ei,hidden:!f},l.mod],tabIndex:"static"!==ei&&f&&h?0:-1,onClick:"static"!==ei&&f?t=>{let a=(0,m.default)(e).format("YYYY-MM-DD");eD(a),X?.(a,t),l.onClick?.(t)}:void 0,onKeyDown:"static"!==ei&&f?e=>{(0,u.handleMonthViewKeyDown)({controlsRef:ew,weekIndex:t,dayIndex:a,event:e})}:void 0},f?(0,m.default)(e).format("D"):null,f&&(0,T.jsx)("div",{...ep("mobileMonthViewDayIndicators"),children:v}))}),r=Q?.((0,m.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,n.getWeekNumber)(e);return(0,V.createElement)("div",{...ep("mobileMonthViewWeek"),key:t},P&&(0,T.jsx)(D.UnstyledButton,{"aria-label":`Week ${o}`,...r,onClick:"static"===ei?void 0:t=>{Z?.((0,m.default)(e[0]).format("YYYY-MM-DD"),t),r.onClick?.(t)},mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,...ep("mobileMonthViewWeekNumber",{className:r.className,style:r.style}),children:o},o),a)}),eM=(eg?(0,d.sortEvents)(eY[(0,m.default)(eg).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,m.default)(e.start).format("HH:mm"),a=(0,m.default)(e.end).format("HH:mm"),r=(0,T.jsxs)(y.Box,{...ep("mobileMonthViewEventBody"),children:[(0,T.jsx)("div",{...ep("mobileMonthViewEventColor",{style:{backgroundColor:(0,Y.getThemeColor)(e.color,ev)}})}),(0,T.jsxs)("div",{children:[(0,T.jsx)(g.Text,{...ep("mobileMonthViewEventTitle"),children:e.title}),(0,T.jsx)(g.Text,{...ep("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),n={...ep("mobileMonthViewEvent"),onClick:"static"===ei?void 0:t=>{eu?.(e,t)},tabIndex:"static"===ei?-1:0,children:r};return"function"==typeof el?(0,T.jsx)(V.default.Fragment,{children:el(e,n)},e.id):(0,V.createElement)(D.UnstyledButton,{...n,key:e.id})}),ek=eg?(0,a.formatDate)({locale:eh.getLocale(U),date:eg,format:ed}):"",{dir:eE}=(0,b.useDirection)(),eV=(0,a.formatDate)({locale:eh.getLocale(U),date:R,format:"MMMM YYYY"}),eC=(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(D.UnstyledButton,{...ep("mobileMonthViewHeaderBackButton"),onClick:es,mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,children:[(0,T.jsx)(v.AccordionChevron,{style:{transform:`rotate(${"rtl"===eE?-90:90}deg)`},size:20}),(0,m.default)(R).format("YYYY")]}),(0,T.jsx)(g.Text,{...ep("mobileMonthViewHeaderLabel"),children:eV})]});return(0,T.jsxs)(y.Box,{...ep("mobileMonthView"),mod:{"with-week-numbers":P},...em,children:[(0,T.jsx)("div",{...ep("mobileMonthViewHeader"),children:"function"==typeof ec?ec({mode:ei,date:R,defaultHeader:eC}):eC}),(0,T.jsxs)(y.Box,{...ep("mobileMonthViewCalendar"),mod:{"with-weekdays":F},children:[eb&&(0,T.jsxs)("div",{...ep("mobileMonthViewWeekdays"),children:[P&&(0,T.jsx)("div",{...ep("mobileMonthViewWeekdaysCorner")}),eb]}),eS]}),(0,T.jsxs)(y.Box,{...ep("mobileMonthViewEventsList"),children:[(0,T.jsx)(g.Text,{...ep("mobileMonthViewEventsHeader"),children:ek}),eM.length>0?eM:(0,T.jsx)(g.Text,{...ep("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});O.displayName="@mantine/schedule/MobileMonthView",O.classes=h,O.varsResolver=j,e.s(["MobileMonthView",0,O],433396)},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),r=e.i(494834),n=e.i(4332),o=e.i(657068),i=e.i(966696),l=e.i(298008),d=e.i(898770),s=e.i(27748),u=e.i(621304),c=e.i(855578),f=e.i(232471),m=e.i(284629),h=e.i(317477),v=e.i(951254),y=e.i(191788),g=e.i(205693),D=e.i(391398);function p({month:e,getStyles:n,monthLabelFormat:o="MMMM",withWeekNumbers:i,withWeekDays:l,locale:d,firstDayOfWeek:w,weekdayFormat:x,weekendDays:Y,getDayProps:b,onDayClick:S,onWeekNumberClick:M,onMonthClick:k,getWeekNumberProps:E,highlightToday:V,groupedEvents:C,mode:T,withOutsideDays:I,__getDayRef:j,__onDayKeyDown:O,firstDayIndex:$}){let B=(0,g.useDatesContext)(),W=(0,v.useMantineTheme)(),H=(0,r.default)(),A=l?(0,u.getWeekdaysNames)({locale:B.getLocale(d),format:x,firstDayOfWeek:B.getFirstDayOfWeek(w)}).map((e,t)=>(0,y.createElement)("div",{...n("yearViewWeekday"),key:t},e)):null,R=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:B.getFirstDayOfWeek(w),consistentWeeks:!0}).map((t,o)=>{let l=t.map((t,i)=>{let l=!(0,a.isSameMonth)(t,e);if(l&&!I)return(0,y.createElement)("div",{...n("yearViewDay"),"data-day-placeholder":!0,key:t});let s=B.getWeekendDays(Y).includes((0,r.default)(t).day()),u=(0,r.default)(t).locale(d||B.locale).format("MMMM D, YYYY"),c=b?.((0,r.default)(t).format("YYYY-MM-DD"))||{},f=(0,r.default)(t).isSame(H,"day")&&V,v=C?.[(0,r.default)(t).format("YYYY-MM-DD")]||[],g=$&&o===$.weekIndex&&i===$.dayIndex,p="static"!==T&&!l&&g,w=v.slice(0,3).map(e=>(0,y.createElement)("div",{...n("yearViewDayIndicator",{style:{backgroundColor:(0,h.getThemeColor)(e.color,W)}}),key:e.id}));return(0,y.createElement)(m.UnstyledButton,{"aria-label":u,...c,...n("yearViewDay",{className:c.className,style:c.style}),key:t,mod:[{outside:l,weekend:s,today:f,static:"static"===T},c.mod],tabIndex:p?0:-1,ref:e=>{e&&j?.(o,i,e)},onKeyDown:e=>{c.onKeyDown?.(e),O?.(e,{weekIndex:o,dayIndex:i,date:t})},onClick:"static"===T?void 0:e=>{S?.((0,r.default)(t).format("YYYY-MM-DD"),e),c.onClick?.(e)}},(0,r.default)(t).format("D"),(0,D.jsx)("div",{...n("yearViewDayIndicators"),children:w}))}),s=E?.((0,r.default)(t[0]).format("YYYY-MM-DD"))||{},u=(0,c.getWeekNumber)(t);return(0,y.createElement)("div",{...n("yearViewWeek"),key:o},i&&(0,D.jsx)(m.UnstyledButton,{"aria-label":`Week ${u}`,title:`Week ${u}`,...s,onClick:"static"===T?void 0:e=>{M?.((0,r.default)(t[0]).format("YYYY-MM-DD"),e),s.onClick?.(e)},mod:{static:"static"===T},tabIndex:"static"===T?-1:0,...n("yearViewWeekNumber",{className:s.className,style:s.style}),children:u},u),l)});return(0,D.jsxs)(f.Box,{mod:[{"with-week-numbers":i,"with-weekdays":l,static:"static"===T}],...n("yearViewMonth"),children:[(0,D.jsx)(m.UnstyledButton,{onClick:"static"===T?void 0:t=>k?.((0,r.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===T},tabIndex:"static"===T?-1:0,...n("yearViewMonthCaption"),children:(0,s.formatDate)({locale:B.getLocale(d),date:e,format:o})}),A&&(0,D.jsxs)("div",{...n("yearViewWeekdays"),children:[i&&(0,D.jsx)("div",{...n("yearViewWeekdaysCorner")}),A]}),R]})}var w={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},x=e.i(481178),Y=e.i(275519),b=e.i(433512),S=e.i(44091),M=e.i(62904),k=e.i(391466);let E={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},V=(0,x.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,b.getRadius)(t):void 0}})),C=(0,Y.factory)(e=>{let s=(0,S.useProps)("YearView",E,e),{date:u,onDateChange:c,events:m,monthLabelFormat:h,withWeekNumbers:v,withWeekDays:x,locale:Y,firstDayOfWeek:b,weekdayFormat:C,weekendDays:T,onMonthClick:I,onDayClick:j,onWeekNumberClick:O,getDayProps:$,getWeekNumberProps:B,highlightToday:W,labels:H,withOutsideDays:A,withHeader:R,monthYearSelectProps:_,onViewChange:L,previousControlProps:N,nextControlProps:z,todayControlProps:P,viewSelectProps:F,__staticSelector:U,classNames:G,className:K,style:J,styles:Q,unstyled:q,vars:X,attributes:Z,radius:ee,mode:et,recurrenceExpansionLimit:ea,...er}=s,en=(0,g.useDatesContext)(),eo=(0,k.useStyles)({name:U,classes:w,props:s,className:K,style:J,classNames:G,styles:Q,unstyled:q,vars:X,varsResolver:V,attributes:Z,rootSelector:"yearView"}),{resolvedClassNames:ei,resolvedStyles:el}=(0,M.useResolvedStylesApi)({classNames:G,styles:Q,props:s}),ed=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let o of t)if((0,r.default)(o.start).isSame((0,r.default)(e),"year")){if(!function(e,t){if((0,d.isMultidayEvent)(e)){let a=(0,r.default)(e.start).startOf("day"),n=(0,r.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,r.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,l.validateEvent)(o),a),n.has(o.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${o.id}`);n.add(o.id)}return a}({date:u,events:(0,o.expandRecurringEvents)({events:m,rangeStart:(0,r.default)(u).startOf("year").toDate(),rangeEnd:(0,r.default)(u).endOf("year").toDate(),expansionLimit:ea})}),es=(0,y.useRef)([]),eu=0,ec=(function(e){let t=(0,r.default)(e).startOf("year").toDate(),a=[[],[],[],[]],n=0;for(let e=0;e<4;e+=1)for(let o=0;o<3;o+=1)a[e].push((0,r.default)(t).add(n,"months").format("YYYY-MM-DD")),n+=1;return a})((0,r.default)(u).format("YYYY-MM-DD")).flat().map(e=>{let n=eu;return eu++,(0,D.jsx)(p,{month:e,getStyles:eo,monthLabelFormat:h,withWeekNumbers:v,withWeekDays:x,locale:Y,firstDayOfWeek:b,weekdayFormat:C||(e=>(0,r.default)(e).locale(en.getLocale(Y)).format("dd").slice(0,1)),weekendDays:T,getDayProps:$,getWeekNumberProps:B,onMonthClick:I,onDayClick:j,onWeekNumberClick:O,highlightToday:W,groupedEvents:ed,mode:et,withOutsideDays:A,firstDayIndex:(e=>{let n=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:en.getFirstDayOfWeek(b),consistentWeeks:!0});for(let t=0;t<n.length;t++){let r=n[t];for(let n=0;n<r.length;n++){let o=r[n];if((0,a.isSameMonth)(o,e))return{weekIndex:t,dayIndex:n}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(es.current[n])||(es.current[n]=[]),Array.isArray(es.current[n][e])||(es.current[n][e]=[]),es.current[n][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:r,event:n}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(o){n.preventDefault();let i=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!i)return;!function e({controlsRef:t,direction:a,monthIndex:r,weekIndex:n,dayIndex:o,size:i}){let l=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:r,size:n}){let o=n[t];if(!o)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1,o=Math.min(r,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:o}}let e=Math.min(r,o[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===o.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(r,e[0]-1)}}let e=Math.min(r,o[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===r){if(0===a){if(0===t)return null;let e=n[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:o[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:r-1};case"right":if(r===o[a]-1){if(a===o.length-1){if(t===n.length-1)return null;let e=n[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:r+1};default:return null}}({direction:a,monthIndex:r,weekIndex:n,dayIndex:o,size:i});if(!l)return;let d=t.current?.[l.monthIndex]?.[l.weekIndex]?.[l.dayIndex];d&&(d.disabled||d.getAttribute("data-hidden")||d.getAttribute("data-outside")||d.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:l.monthIndex,weekIndex:l.weekIndex,dayIndex:l.dayIndex,size:i}):d.focus())}({controlsRef:e,direction:o,monthIndex:t,weekIndex:a,dayIndex:r,size:i})}}({controlsRef:es,monthIndex:n,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,D.jsxs)(f.Box,{...eo("yearView"),mod:{static:"static"===et},...er,children:[R&&(0,D.jsx)(i.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,n.toDateString)((0,r.default)(u).subtract(1,"year").startOf("year")),next:()=>(0,n.toDateString)((0,r.default)(u).add(1,"year").startOf("year")),today:()=>(0,n.toDateString)((0,r.default)())},control:{monthYearSelect:{locale:Y,withMonths:!1,yearValue:(0,r.default)(u).get("year"),monthValue:(0,r.default)(u).get("month"),onYearChange:e=>c?.((0,n.toDateString)((0,r.default)(u).set("year",e).startOf("year"))),..._}},labels:H,onDateChange:c,onViewChange:L,previousControlProps:N,nextControlProps:z,todayControlProps:P,viewSelectProps:F,stylesApiProps:{classNames:ei,styles:el,attributes:Z,__staticSelector:U,radius:ee}}),(0,D.jsx)("div",{...eo("yearViewMonths"),children:ec})]})});C.displayName="@mantine/schedule/YearView",C.classes=w,C.varsResolver=V,e.s(["YearView",0,C],122308)},238715,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let r=(0,a.default)().format("YYYY-MM-DD"),n=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${r} 09:00:00`,end:`${r} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${r} 10:00:00`,end:`${r} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${r} 12:00:00`,end:`${r} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${r} 00:00:00`,end:(0,a.default)(r).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const events = [
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
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`;var l=e.i(391398),d=e.i(200183),s=e.i(433396),u=e.i(168574),c=e.i(315401),f=e.i(122308),m={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},h=e.i(232471),v=e.i(275519),y=e.i(44091),g=e.i(391466),D=e.i(579560);let p={defaultView:"week",mode:"default",layout:"default"},w=(0,v.factory)(e=>{let t=(0,y.useProps)("Schedule",p,e),{classNames:a,className:r,style:n,styles:o,unstyled:i,vars:v,date:w,defaultDate:x,onDateChange:Y,view:b,defaultView:S,onViewChange:M,events:k,locale:E,radius:V,labels:C,renderEventBody:T,withEventsDragAndDrop:I,onEventDrop:j,canDragEvent:O,onEventDragStart:$,onEventDragEnd:B,onTimeSlotClick:W,onAllDaySlotClick:H,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:L,onExternalEventDrop:N,withEventResize:z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:U,mode:G,layout:K,dayViewProps:J,weekViewProps:Q,monthViewProps:q,yearViewProps:X,mobileMonthViewProps:Z,__staticSelector:ee,mod:et,...ea}=t,er=(0,g.useStyles)({name:ee||"Schedule",classes:m,props:t,className:r,style:n,classNames:a,styles:o,unstyled:i,vars:v}),[en,eo]=(0,D.useUncontrolled)({value:b,defaultValue:S,onChange:M}),[ei,el]=(0,D.useUncontrolled)({value:w,defaultValue:x??new Date}),ed=e=>{el(e),Y?.(e)},es=e=>{eo(e),M?.(e)},eu=e=>{ed(e),es("month")},ec={date:ei,onDateChange:ed,view:en,onViewChange:es,events:k,locale:E,radius:V,labels:C,renderEventBody:T,withEventsDragAndDrop:"static"!==G&&I,onEventDrop:j,canDragEvent:O,onEventDragStart:$,onEventDragEnd:B,onTimeSlotClick:W,onAllDaySlotClick:H,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:L,onExternalEventDrop:N,withEventResize:"static"!==G&&z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:U,mode:G},ef=(()=>{switch(en){case"day":return(0,l.jsx)(d.DayView,{...ec,...J});case"week":return(0,l.jsx)(c.WeekView,{...ec,...Q});case"month":return(0,l.jsx)(u.MonthView,{...ec,...q});case"year":return(0,l.jsx)(f.YearView,{...ec,onMonthClick:eu,...X});default:return null}})(),em=(()=>{switch(en){case"day":case"week":case"month":return(0,l.jsx)(s.MobileMonthView,{date:ei,onDateChange:ed,events:k,locale:E,radius:V,labels:C,mode:G,recurrenceExpansionLimit:U,onYearClick:()=>es("year"),onEventClick:R,...Z});case"year":return(0,l.jsx)(f.YearView,{...ec,onMonthClick:eu,...X});default:return null}})();return"responsive"===K?(0,l.jsxs)(h.Box,{...er("root"),mod:[{layout:K},et],...ea,children:[(0,l.jsx)(h.Box,{...er("desktopView"),children:ef}),(0,l.jsx)(h.Box,{...er("mobileView"),children:em})]}):(0,l.jsx)(h.Box,{...er("root"),mod:et,...ea,children:ef})});w.displayName="@mantine/schedule/Schedule",w.classes=m;let x={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(w,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var Y=e.i(191788);let b=(0,a.default)().format("YYYY-MM-DD"),S=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),M=[{id:1,title:"Morning Standup",start:`${b} 09:00:00`,end:`${b} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${b} 10:00:00`,end:`${b} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${b} 12:00:00`,end:`${b} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${S} 14:00:00`,end:`${S} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${S} 15:30:00`,end:`${S} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${b} 00:00:00`,end:(0,a.default)(b).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(M);return(0,l.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:r}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${tomorrow} 15:30:00\`,
    end: \`\${tomorrow} 16:30:00\`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
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
    <Schedule
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`};var E=e.i(883364);let V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("week"),[a,r]=(0,Y.useState)(new Date);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(E.Text,{size:"sm",mb:"md",children:["Current view: ",(0,l.jsx)("b",{children:e})]}),(0,l.jsx)(w,{view:e,onViewChange:t,date:a,onDateChange:e=>r(new Date(e)),events:o})]})},code:`
import { useState } from 'react';
import { Text } from '@mantine/core';
import { Schedule, ScheduleViewLevel } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('week');
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Text size="sm" mb="md">
        Current view: <b>{view}</b>
      </Text>

      <Schedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={(newDate) => setDate(new Date(newDate))}
        events={events}
      />
    </div>
  );
}
`},C={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(w,{events:o,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1},monthViewProps:{withWeekNumbers:!0,firstDayOfWeek:0},yearViewProps:{withWeekNumbers:!0}})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Schedule
      events={events}
      dayViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        intervalMinutes: 30,
      }}
      weekViewProps={{
        startTime: '08:00:00',
        endTime: '18:00:00',
        withWeekendDays: false,
      }}
      monthViewProps={{
        withWeekNumbers: true,
        firstDayOfWeek: 0,
      }}
      yearViewProps={{
        withWeekNumbers: true,
      }}
    />
  );
}
`},T={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(w,{events:o,defaultView:"month"})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
`},I={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,l.jsx)(w,{events:o,layout:"responsive"})})},code:`
import { Box } from '@mantine/core';
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule events={events} layout="responsive" />
    </Box>
  );
}
`};var j=e.i(162077),O=e.i(37930),$=e.i(658109),B=e.i(725695);let W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(o),[r,n]=(0,Y.useState)(!1),[i,d]=(0,Y.useState)(null),s=(0,Y.useRef)((0,a.default)().format("YYYY-MM-DD")),u=()=>{let e=s.current;d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),n(!0)};return(0,l.jsxs)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,l.jsx)(w,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onAllDaySlotClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),n(!0)},onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),n(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),n(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(s.current=e)},renderHeader:({defaultHeader:e})=>(0,l.jsxs)(B.Group,{justify:"space-between",w:"100%",children:[(0,l.jsx)(B.Group,{justify:"space-between",flex:"1",children:e}),(0,l.jsx)($.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:u,"aria-label":"Create new event",children:(0,l.jsx)(O.PlusIcon,{size:18})})]})}}),(0,l.jsx)(j.EventForm,{opened:r,onClose:()=>n(!1),onExitTransitionEnd:()=>d(null),values:i,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:i?.id?()=>{i?.id&&t(e=>e.filter(e=>e.id!==i.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { PlusIcon } from '@phosphor-icons/react';
import { ActionIcon, Box, Group } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events } from './events';

function Demo() {
  const [allEvents, setAllEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const mobileSelectedDate = useRef<string>(dayjs().format('YYYY-MM-DD'));

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

  const handleDayClick = (date: string) => {
    setSelectedEventData({
      title: '',
      start: dayjs(date).startOf('day').toDate(),
      end: dayjs(date).endOf('day').toDate(),
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
      setAllEvents((prev) =>
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
      setAllEvents((prev) => [
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
      setAllEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  const handleCreateEvent = () => {
    const selectedDate = mobileSelectedDate.current;
    setSelectedEventData({
      title: '',
      start: dayjs(selectedDate).startOf('day').toDate(),
      end: dayjs(selectedDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule
        events={allEvents}
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        withDragSlotSelect
        layout="responsive"
        mobileMonthViewProps={{
          onSelectedDateChange: (date) => {
            if (date) {
              mobileSelectedDate.current = date;
            }
          },
          renderHeader: ({ defaultHeader }) => (
            <Group justify="space-between" w="100%">
              <Group justify="space-between" flex="1">
                {defaultHeader}
              </Group>
              <ActionIcon
                variant="default"
                mx="sm"
                size="lg"
                onClick={handleCreateEvent}
                aria-label="Create new event"
              >
                <PlusIcon size={18} />
              </ActionIcon>
            </Group>
          ),
        }}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </Box>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:j._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:i,language:"tsx",fileName:"events.ts"}]};var H=e.i(20035);let A=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)([]),r=(0,Y.useRef)(1);return(0,l.jsxs)(H.Grid,{children:[(0,l.jsxs)(H.Grid.Col,{span:{base:12,sm:3},children:[(0,l.jsx)(E.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),A.map(e=>(0,l.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,l.jsx)(H.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:r}:t))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(n),d=l.add(i.duration,"minutes");t(e=>[...e,{id:r.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
        <Schedule
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},_=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(_),[r,n]=(0,Y.useState)([]),[o,i]=(0,Y.useState)(!1),d=(0,Y.useRef)(1);return(0,l.jsxs)(H.Grid,{children:[(0,l.jsx)(H.Grid.Col,{span:{base:12,sm:3},children:(0,l.jsxs)(h.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:l}=JSON.parse(o),d=r.find(e=>String(e.id)===String(l));if(!d)return;let s=(0,a.default)(d.end).diff((0,a.default)(d.start),"minutes");t(e=>[...e,{title:d.title,duration:s,color:d.color||"blue"}]),n(e=>e.filter(e=>e.id!==d.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,l.jsx)(E.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,l.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,l.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,l.jsx)(H.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(w,{events:r,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{n(r=>r.map(r=>r.id===e?{...r,start:t,end:a}:r))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(r),s=l.add(i.duration,"minutes");n(e=>[...e,{id:d.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
        <Schedule
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},N=(0,a.default)().format("YYYY-MM-DD"),z=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${N} 09:00:00`,end:`${N} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${N} 10:00:00`,end:`${N} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${N} 12:00:00`,end:`${N} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${z} 14:00:00`,end:`${z} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${z} 15:30:00`,end:`${z} 16:30:00`,color:"cyan"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(P),a=({eventId:e,newStart:a,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:r}:t))};return(0,l.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:a,withEventResize:!0,onEventResize:a})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${tomorrow} 15:30:00\`,
    end: \`\${tomorrow} 16:30:00\`,
    color: 'cyan',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventUpdate = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <Schedule
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventUpdate}
      withEventResize
      onEventResize={handleEventUpdate}
    />
  );
}
`},U=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("2024-01-15");return(0,l.jsx)(w,{view:"week",date:e,onDateChange:t,events:U})},code:`
import { useState } from 'react';
import { Schedule } from '@mantine/schedule';

const events = [
  {
    id: 'schedule-series',
    title: 'Weekly planning (series)',
    start: '2024-01-15 10:00:00',
    end: '2024-01-15 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16',
      exdate: ['2024-01-17 10:00:00'],
    },
  },
  {
    id: 'schedule-series-override',
    title: 'Weekly planning (moved one occurrence)',
    start: '2024-01-17 16:00:00',
    end: '2024-01-17 17:00:00',
    color: 'grape',
    recurringEventId: 'schedule-series',
    recurrenceId: '2024-01-17 10:00:00',
  },
  {
    id: 'schedule-one-off',
    title: 'One-off roadmap review',
    start: '2024-01-18 12:00:00',
    end: '2024-01-18 13:00:00',
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState('2024-01-15');
  return <Schedule view="week" date={date} onDateChange={setDate} events={events} />;
}
`},K=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"lunch-block",title:"Lunch break",start:`${K} 12:00:00`,end:`${K} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${K} 14:00:00`,end:`${K} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${K} 10:00:00`,end:`${K} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${K} 14:30:00`,end:`${K} 15:30:00`,color:"green"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(K);return(0,l.jsx)(w,{date:e,onDateChange:t,events:J})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Schedule, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
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
    <Schedule
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}
`};var q=e.i(428127),X=e.i(441058);let Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,Y.useState)("week"),i=function(e,t){let r=(0,a.default)(e);switch(t){case"day":return{previous:r.subtract(1,"day"),next:r.add(1,"day")};case"week":return{previous:r.subtract(1,"week"),next:r.add(1,"week")};case"month":return{previous:r.subtract(1,"month").startOf("month"),next:r.add(1,"month").startOf("month")};case"year":return{previous:r.subtract(1,"year").startOf("year"),next:r.add(1,"year").startOf("year")};default:return{previous:r,next:r}}}(e,r);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(q.ScheduleHeader,{children:[(0,l.jsx)(q.ScheduleHeader.Previous,{onClick:()=>t(i.previous.format("YYYY-MM-DD"))}),(0,l.jsx)(q.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let r=(0,a.default)(e);switch(t){case"day":return r.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,X.getStartOfWeek)({date:e,firstDayOfWeek:1})),r=t.add(6,"day");if(t.month()===r.month())return`${t.format("MMM D")} – ${r.format("D, YYYY")}`;return`${t.format("MMM D")} – ${r.format("MMM D, YYYY")}`}case"month":return r.format("MMMM YYYY");case"year":return r.format("YYYY");default:return""}}(e,r)}),(0,l.jsx)(q.ScheduleHeader.Next,{onClick:()=>t(i.next.format("YYYY-MM-DD"))}),(0,l.jsx)(q.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,l.jsx)(q.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,l.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,l.jsx)(q.ScheduleHeader.ViewSelect,{value:r,onChange:n})})]}),(0,l.jsx)(w,{date:e,onDateChange:t,view:r,onViewChange:n,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DateStringValue,
  getStartOfWeek,
  Schedule,
  ScheduleHeader,
  ScheduleViewLevel,
} from '@mantine/schedule';
import { events } from './data';

function getNavigationHandlers(
  date: DateStringValue,
  view: ScheduleViewLevel
) {
  const d = dayjs(date);
  switch (view) {
    case 'day':
      return {
        previous: d.subtract(1, 'day'),
        next: d.add(1, 'day'),
      };
    case 'week':
      return {
        previous: d.subtract(1, 'week'),
        next: d.add(1, 'week'),
      };
    case 'month':
      return {
        previous: d.subtract(1, 'month').startOf('month'),
        next: d.add(1, 'month').startOf('month'),
      };
    case 'year':
      return {
        previous: d.subtract(1, 'year').startOf('year'),
        next: d.add(1, 'year').startOf('year'),
      };
  }
}

function getHeaderLabel(date: DateStringValue, view: ScheduleViewLevel) {
  const d = dayjs(date);
  switch (view) {
    case 'day':
      return d.format('dddd, MMMM D, YYYY');
    case 'week': {
      const start = dayjs(
        getStartOfWeek({ date, firstDayOfWeek: 1 })
      );
      const end = start.add(6, 'day');
      if (start.month() === end.month()) {
        return \`\${start.format('MMM D')} – \${end.format('D, YYYY')}\`;
      }
      return \`\${start.format('MMM D')} – \${end.format('MMM D, YYYY')}\`;
    }
    case 'month':
      return d.format('MMMM YYYY');
    case 'year':
      return d.format('YYYY');
  }
}

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );
  const [view, setView] = useState<ScheduleViewLevel>('week');

  const nav = getNavigationHandlers(date, view);

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              nav.previous.format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {getHeaderLabel(date, view)}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              nav.next.format('YYYY-MM-DD') as DateStringValue
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
        <ScheduleHeader.Control onClick={() => window.print()}>
          Print
        </ScheduleHeader.Control>
        <div style={{ marginInlineStart: 'auto' }}>
          <ScheduleHeader.ViewSelect
            value={view}
            onChange={setView}
          />
        </div>
      </ScheduleHeader>

      <Schedule
        date={date}
        onDateChange={setDate}
        view={view}
        onViewChange={setView}
        events={events}
        dayViewProps={{ withHeader: false }}
        weekViewProps={{ withHeader: false }}
        monthViewProps={{ withHeader: false }}
        yearViewProps={{ withHeader: false }}
      />
    </div>
  );
}
`};var ee=(0,t.__exportAll)({backgroundEvents:()=>Q,bidirectionalDragDrop:()=>L,controlled:()=>V,customHeader:()=>Z,defaultView:()=>T,dragDrop:()=>k,eventForm:()=>W,eventResize:()=>F,externalDragDrop:()=>R,recurringEvents:()=>G,responsiveLayout:()=>I,usage:()=>x,viewProps:()=>C});e.s(["ScheduleDemos",0,ee],238715)}]);