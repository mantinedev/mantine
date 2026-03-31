(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37930,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="PlusIcon",e.s(["PlusIcon",0,n],37930)},315401,e=>{"use strict";var t=e.i(86473),a=e.i(27748),r=e.i(855578),n=e.i(898496),o=e.i(4332),i=e.i(441058),l=e.i(494834);function d({week:e,weekendDays:t,withWeekendDays:a=!0,firstDayOfWeek:r=1}){let n=[],s=(0,l.default)((0,i.getStartOfWeek)({date:e,firstDayOfWeek:r}));for(let e=0;e<7;e+=1){let e=s.day();(!(t&&t.includes(e))||a)&&n.push((0,o.toDateString)(s)),s=s.add(1,"day")}return n}var s=e.i(969610),u=e.i(792930),c=e.i(505696),f=e.i(657068),m=e.i(245086),v=e.i(783261),h=e.i(637079),D=e.i(376879),g=e.i(312709),w=e.i(201867),p=e.i(891343),y=e.i(966696),x=e.i(298008),Y=e.i(68642),S=e.i(813982),b=e.i(532965),M=e.i(751198);function k({event:e,weekDays:t,actualEndDate:a}){let r=(0,l.default)(e.start).startOf("day");return t.filter(e=>{let t=(0,l.default)(e).startOf("day");return(t.isAfter(r)||t.isSame(r))&&(t.isBefore(a)||t.isSame(a))})}function E(e){let t=(0,l.default)(e.end).startOf("day");return 0===(0,l.default)(e.end).hour()&&0===(0,l.default)(e.end).minute()?t.subtract(1,"day"):t}function V({eventStartDate:e,actualEndDate:t,weekDays:a}){let r=(0,l.default)(a[0]),n=(0,l.default)(a[a.length-1]),o=e.isBefore(r),i=t.isAfter(n);return o&&i?"both":o?"start":i?"end":"none"}var C=e.i(232471),j=e.i(284629),$=e.i(205693),T=e.i(391398);function O({day:e,dayIndex:a,slots:r,getStyles:n,weekendDays:o,children:i,labels:d,highlightBusinessHours:s,businessHours:u,withEventsDragAndDrop:f,onDaySlotsDragOver:m,onDaySlotsDragLeave:v,onDaySlotsDrop:h,onSlotClick:D,dropTargetSlotIndex:g,mode:w,slotsRef:p,firstSlotIndex:y,onSlotKeyDown:x,onFirstSlotArrowUp:Y,withDragSlotSelect:S,onSlotPointerDown:b,isSlotDragSelected:M,daySlotsContainerRef:k,getTimeSlotProps:E}){let V=(0,$.useDatesContext)().getWeekendDays(o).includes((0,l.default)(e).day()),I=(0,l.default)(e).isSame((0,l.default)(),"day"),H=(0,l.default)(e).format("YYYY-MM-DD"),A=r.map((r,o)=>{let i=g===o,l=y?.dayIndex===a&&y?.slotIndex===o,m=M?.(o,H)||!1,v=`${H} ${r.startTime}`,h=`${H} ${r.endTime}`,{onClick:k,...V}=E?.({start:v,end:h})||{},C="static"===w?void 0:t=>{D?.(String(e),r.startTime,t),k?.(t)};return(0,T.jsx)(j.UnstyledButton,{ref:e=>{e&&p?.current&&(p.current[a]||(p.current[a]=[]),p.current[a][o]=e)},...n("weekViewDaySlot"),mod:{"hour-start":r.isHourStart,...(0,c.getBusinessHoursMod)({time:r.startTime,businessHours:u,highlightBusinessHours:s}),"drop-target":i,"drag-selected":m,static:"static"===w},"aria-label":`${(0,t.getLabel)("timeSlot",d)} ${H} ${r.startTime} - ${r.endTime}`,tabIndex:"static"===w?-1:l?0:-1,"data-drag-slot-index":S&&"static"!==w?o:void 0,"data-drag-slot-group":S&&"static"!==w?H:void 0,onKeyDown:e=>{0===o&&"ArrowUp"===e.key&&Y?(e.preventDefault(),Y(a)):x&&x(e,a,o)},onPointerDown:S&&"static"!==w?e=>b?.(e,o,H):void 0,onClick:C,onDragOver:f&&"static"!==w?e=>e.preventDefault():void 0,...V},r.startTime)});return(0,T.jsx)(C.Box,{...n("weekViewDay"),mod:{today:I,weekend:V},children:(0,T.jsxs)(C.Box,{ref:k,mod:{today:I},...n("weekViewDaySlots"),onDragOver:f&&"static"!==w?t=>m?.(t,String(e),a):void 0,onDragLeave:f&&"static"!==w?v:void 0,onDrop:f&&"static"!==w?t=>h?.(t,String(e),a):void 0,children:[i,A]})})}var I={weekView:"m_42b9032d",weekViewRoot:"m_6b2099af",weekViewInner:"m_f8734f29",weekViewScrollArea:"m_44818807",weekViewHeader:"m_13bcfc1a",weekViewCorner:"m_bc98be2",weekViewSlotLabels:"m_149dcaaa",weekViewSlotLabel:"m_29f492e9",weekViewDay:"m_98199d2f",weekViewDayLabel:"m_ccf0d705",weekViewDayNumber:"m_d5b28558",weekViewDayWeekday:"m_a0fc06f9",weekViewBackgroundEvent:"m_41ce8f1f",weekViewDaySlots:"m_cd58ae46",weekViewDaySlot:"m_8ac0cbcd",weekViewWeekLabel:"m_838426b3",weekViewWeekNumber:"m_f1892b6a",weekViewAllDaySlots:"m_4f08474d",weekViewAllDaySlotsLabel:"m_85cdcfa7",weekViewAllDaySlotsEvents:"m_2923a6c6",weekViewAllDaySlotsList:"m_77edfd8b"},H=e.i(19300),A=e.i(481178),W=e.i(275519),B=e.i(433512),R=e.i(779177),L=e.i(951254),_=e.i(44091),N=e.i(62904),z=e.i(391466),P=e.i(417241),F=e.i(332977),G=e.i(191788);let U={__staticSelector:"WeekView",withWeekendDays:!0,withCurrentTimeIndicator:!0,startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,weekdayFormat:"ddd",withWeekNumber:!0,withCurrentTimeBubble:!0,withAllDaySlots:!0,withHeader:!0,weekLabelFormat:"MMM DD",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},K=(0,A.createVarsResolver)((e,{radius:t,allDaySlotHeight:a,slotHeight:r})=>({weekView:{"--week-view-radius":void 0!==t?(0,B.getRadius)(t):void 0,"--week-view-all-day-slots-height":(0,R.rem)(a),"--week-view-slot-height":(0,R.rem)(r)}})),J=(0,W.factory)(e=>{var A;let W=(0,_.useProps)("WeekView",U,e),{classNames:B,className:R,style:J,styles:Z,unstyled:Q,attributes:q,vars:X,startTime:ee,endTime:et,date:ea,onDateChange:er,intervalMinutes:en,slotLabelFormat:eo,withWeekendDays:ei,weekendDays:el,firstDayOfWeek:ed,weekdayFormat:es,radius:eu,highlightToday:ec,withCurrentTimeIndicator:ef,scrollAreaProps:em,locale:ev,withWeekNumber:eh,withCurrentTimeBubble:eD,withAllDaySlots:eg,__staticSelector:ew,withHeader:ep,onViewChange:ey,previousControlProps:ex,nextControlProps:eY,todayControlProps:eS,viewSelectProps:eb,weekLabelFormat:eM,events:ek,allDaySlotHeight:eE,slotHeight:eV,labels:eC,highlightBusinessHours:ej,businessHours:e$,renderEventBody:eT,renderEvent:eO,withEventsDragAndDrop:eI,onEventDrop:eH,canDragEvent:eA,onEventDragStart:eW,onEventDragEnd:eB,onTimeSlotClick:eR,onAllDaySlotClick:eL,onEventClick:e_,withDragSlotSelect:eN,onSlotDragEnd:ez,mode:eP,startScrollTime:eF,renderWeekLabel:eG,onExternalEventDrop:eU,withEventResize:eK,onEventResize:eJ,canResizeEvent:eZ,recurrenceExpansionLimit:eQ,getTimeSlotProps:eq,...eX}=W,e0=(0,z.useStyles)({name:ew,classes:I,props:W,className:R,style:J,classNames:B,styles:Z,unstyled:Q,vars:X,varsResolver:K,attributes:q,rootSelector:"weekView"}),{resolvedClassNames:e1,resolvedStyles:e2}=(0,N.useResolvedStylesApi)({classNames:B,styles:Z,props:W}),e8={classNames:e1,styles:e2,attributes:q,__staticSelector:ew,radius:eu},e4=(0,L.useMantineTheme)(),[e3,e6]=(0,G.useState)(!1),e7=(0,$.useDatesContext)(),e5=(0,n.getDayTimeIntervals)({startTime:ee,endTime:et,intervalMinutes:en}),e9=(0,G.useRef)(null);(0,m.useAutoScrollOnDrag)({viewportRef:e9,enabled:(eI||!!eU)&&"static"!==eP});let te=(0,G.useCallback)((e,t)=>{if(!eU)return;let a=(0,l.default)(t.day).format("YYYY-MM-DD");eU(e.dataTransfer,`${a} ${e5[t.slotIndex].startTime}`)},[eU,e5]),tt=(0,G.useCallback)((e,t)=>{eU&&eU(e.dataTransfer,`${(0,l.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eU]),ta=(0,v.useDragDropHandlers)({enabled:eI,mode:eP,onEventDrop:eH,canDragEvent:eA,onEventDragStart:eW,onEventDragEnd:eB,calculateDropTarget:(e,t)=>{let a=e5[e.slotIndex].startTime;return(0,u.calculateDropTime)({draggedEvent:t,targetDate:e.day,targetSlotTime:a,intervalMinutes:en})},onExternalDrop:eU?te:void 0}),tr=(0,v.useDragDropHandlers)({enabled:eI,mode:eP,onEventDrop:eH,canDragEvent:eA,onEventDragStart:eW,onEventDragEnd:eB,calculateDropTarget:(e,t)=>{let a=(0,l.default)(t.end).diff((0,l.default)(t.start),"millisecond"),r=(0,l.default)(e).startOf("day");return{start:r.toDate(),end:r.add(a,"millisecond").toDate()}},onExternalDrop:eU?tt:void 0}),tn=(0,D.useSlotDragSelect)({enabled:eN&&"static"!==eP,onDragEnd:(e,t,a)=>{if(!ez)return;let r=(0,l.default)(a).format("YYYY-MM-DD");ez(`${r} ${e5[e].startTime}`,`${r} ${e5[t].endTime}`)}}),to=(0,h.useEventResize)({enabled:eK,mode:eP,startTime:ee,endTime:et,intervalMinutes:en,onEventResize:eJ,canResizeEvent:eZ}),ti=(eI||!!eU)&&"static"!==eP,tl=(e,t,a)=>{if(!eR)return;let r=(0,l.default)(e).format("YYYY-MM-DD"),n=e5.findIndex(e=>e.startTime===t);if(-1===n)return;let o=e5[n];eR({slotStart:`${r} ${o.startTime}`,slotEnd:`${r} ${o.endTime}`,nativeEvent:a})},td=d({week:ea,withWeekendDays:ei,weekendDays:e7.getWeekendDays(el),firstDayOfWeek:e7.getFirstDayOfWeek(ed)}),ts=function({date:e,events:t,startTime:a,endTime:r,firstDayOfWeek:n=1,weekendDays:o=[0,6],withWeekendDays:i=!0}){let u=d({week:e,firstDayOfWeek:n,withWeekendDays:i,weekendDays:o}),c=u.length,f=(0,l.default)(u[0]),m=(0,l.default)(u[u.length-1]),v={allDayEvents:[],regularEvents:Object.fromEntries(u.map(e=>[e,[]])),backgroundEvents:Object.fromEntries(u.map(e=>[e,[]]))},h=new Map,D=new Map;for(let e of(0,S.sortEvents)(t)){if("background"===e.display){let t=(0,l.default)(e.start).startOf("day"),n=E(e),o=k({event:e,weekDays:u,actualEndDate:n}),i=V({eventStartDate:t,actualEndDate:n,weekDays:u});for(let t of o){let n=u.indexOf(t);if(-1===n)continue;let o=(0,l.default)(t),d=o.endOf("day"),f=(0,l.default)(e.start),m=(0,l.default)(e.end),h=f.isBefore(o)?o:f,D=m.isAfter(d)?d:m,g={...e,start:h.format("YYYY-MM-DD HH:mm:ss"),end:D.format("YYYY-MM-DD HH:mm:ss")},w=(0,s.isAllDayEvent)({event:g,date:t}),p=w?{top:0,height:100}:(0,b.getDayPosition)({event:g,startTime:a,endTime:r});if(!w&&p.height<=0)continue;let y=n/c*100;v.backgroundEvents[t].push({...e,position:{...p,allDay:w,column:0,width:100,offset:0,overlaps:1,weekOffset:y,row:0,hanging:i}})}continue}let t=(0,l.default)(e.start).startOf("day"),n=E(e),o=k({event:e,weekDays:u,actualEndDate:n});if(0===o.length)continue;let i=n.isAfter(t),d=V({eventStartDate:t,actualEndDate:n,weekDays:u}),m=o.some(t=>(0,s.isAllDayEvent)({event:e,date:t})),g=i||m,w=g?D:h,p=function(e){let t=0;for(;function({columns:e,columnIndex:t,event:a,allDay:r,allWeekDays:n}){let o=`col-${t}`;return!!e.has(o)&&e.get(o).some(e=>{let t=n.some(t=>(0,s.isAllDayEvent)({event:e,date:t})),o=(0,M.isEventsOverlap)(e,a);return r&&t?o:!r&&!t&&o})}({...e,columnIndex:t});)t++;return t}({columns:w,event:e,allDay:g,allWeekDays:u}),y=`col-${p}`;w.has(y)||w.set(y,[]),w.get(y).push(e);let x=g?{top:0,height:100}:(0,b.getDayPosition)({event:e,startTime:a,endTime:r});if(g){let a=function({eventStartDate:e,weekStartDate:t,weekDays:a,visibleDaysCount:r,hangingStart:n}){let o=e;return n&&(o=t),a.some(e=>(0,l.default)(e).isSame(o,"day"))||(o=(0,l.default)(a[0])),(a.filter(e=>(0,l.default)(e).isBefore(o)||(0,l.default)(e).isSame(o,"day")).length-1)/r*100}({eventStartDate:t,weekStartDate:f,weekDays:u,visibleDaysCount:c,hangingStart:"start"===d||"both"===d});v.allDayEvents.push({...e,position:{...x,allDay:g,column:p,width:0,offset:a,overlaps:0,row:0,hanging:d}})}else for(let t of o){let a=u.indexOf(t);if(-1===a)continue;let r=a/c*100;v.regularEvents[t].push({...e,position:{...x,allDay:g,column:p,width:0,offset:0,overlaps:0,weekOffset:r,row:0,hanging:d}})}}for(let e of u){var g=v.regularEvents[e];for(let e of g){let t=e.position.column;for(let a of g)(0,M.isEventsOverlap)(e,a)&&(t=Math.max(t,a.position.column));let a=t+1;e.position.overlaps=a,e.position.width=100/a,e.position.offset=100*e.position.column/a}}if(v.allDayEvents.length>0){let e=function(e){let t=new Map;for(let a of e){let e=0;for(;;){let r=!1;for(let[n,o]of t.entries())if(o===e&&(0,M.isEventsOverlap)(a,n)){r=!0;break}if(!r)break;e++}t.set(a,e)}return t}(v.allDayEvents),t=new Set;for(let a of v.allDayEvents){let r=e.get(a);a.position.row=r,t.add(r)}let a=Math.max(...t)+1;for(let e of v.allDayEvents){let t=(0,l.default)(e.start).startOf("day"),r=E(e);e.position.width=function({eventStartDate:e,actualEndDate:t,weekStartDate:a,weekEndDate:r,weekDays:n,visibleDaysCount:o}){let i=e;e.isBefore(a)&&(i=a);let d=t;return t.isAfter(r)&&(d=r),n.filter(e=>((0,l.default)(e).isAfter(i)||(0,l.default)(e).isSame(i,"day"))&&((0,l.default)(e).isBefore(d)||(0,l.default)(e).isSame(d,"day"))).length/o*100}({eventStartDate:t,actualEndDate:r,weekStartDate:f,weekEndDate:m,weekDays:u,visibleDaysCount:c}),e.position.overlaps=a}}return v}({...A={date:ea,events:(0,f.expandRecurringEvents)({events:ek,rangeStart:(0,l.default)(td[0]).startOf("day").toDate(),rangeEnd:(0,l.default)(td[td.length-1]).endOf("day").toDate(),expansionLimit:eQ}),startTime:ee,endTime:et,firstDayOfWeek:e7.getFirstDayOfWeek(ed),weekendDays:e7.getWeekendDays(el),withWeekendDays:ei},events:function({date:e,events:t,startTime:a,endTime:r,firstDayOfWeek:n=1}){if(void 0===t)return[];let o=new Set,d=[];for(let s of t)if(function({event:e,targetWeek:t,firstDayOfWeek:a}){let r=(0,l.default)((0,i.getStartOfWeek)({date:t,firstDayOfWeek:a})),n=r.add(7,"day");return(0,l.default)(e.start).isBefore(n)&&(0,l.default)(e.end).isAfter(r)}({event:s,targetWeek:e,firstDayOfWeek:n})&&(0,Y.isEventInTimeRange)({event:s,startTime:a,endTime:r})){if(d.push((0,x.validateEvent)(s)),o.has(s.id))throw Error(`[@mantine/schedule] WeekView: Duplicated event ids found: ${s.id}`);o.add(s.id)}return d}(A)}),tu=e5.map(e=>{let t=(0,a.formatDate)({date:(0,l.default)(`${(0,l.default)(ea).format("YYYY-MM-DD")} ${e.startTime}`),locale:e7.getLocale(ev),format:eo});return(0,G.createElement)(C.Box,{...e0("weekViewSlotLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,c.getBusinessHoursMod)({time:e.startTime,businessHours:e$,highlightBusinessHours:ej})}},t)}),tc=(0,G.useRef)([]),tf=(0,G.useRef)([]),tm=(0,G.useRef)([]),tv=(0,G.useRef)([]),th=(0,F.useMergedRef)(e9,em?.viewportRef),tD={dayIndex:0,slotIndex:0};(0,P.useIsomorphicEffect)(()=>{if(!eF||!e9.current)return;let e=tc.current[0];if(!e||0===e.length)return;let t=e5.findIndex(e=>e.startTime>=eF);if(t<0)return;let a=e[t];if(!a)return;let r=a.getBoundingClientRect(),n=e9.current.getBoundingClientRect();e9.current.scrollTo({left:0,top:r.top-n.top})},[]);let tg=(0,G.useCallback)((e,t)=>{let a=tc.current[t]??[],r=a.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(r>=0)return r;let n=a[0],o=a[a.length-1];if(!n||!o)return null;let i=n.getBoundingClientRect(),l=o.getBoundingClientRect();return e.clientY<i.top?0:e.clientY>l.bottom?a.length-1:null},[]),tw=(e,t,a)=>{!function({controlsRef:e,dayIndex:t,slotIndex:a,event:r}){let n=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(r.key);if(n){r.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,dayIndex:r,slotIndex:n,size:o}){let i=function({direction:e,dayIndex:t,slotIndex:a,size:r}){let n=r[t];if(!n)return null;switch(e){case"up":if(0===a)return null;return{dayIndex:t,slotIndex:a-1};case"down":if(a===n-1)return null;return{dayIndex:t,slotIndex:a+1};case"left":{if(0===t)return null;let e=Math.min(a,r[t-1]-1);return{dayIndex:t-1,slotIndex:e}}case"right":{if(t===r.length-1)return null;let e=Math.min(a,r[t+1]-1);return{dayIndex:t+1,slotIndex:e}}default:return null}}({direction:a,dayIndex:r,slotIndex:n,size:o});if(!i)return;let l=t.current?.[i.dayIndex]?.[i.slotIndex];l&&(l.disabled||l.getAttribute("data-hidden")?e({controlsRef:t,direction:a,dayIndex:i.dayIndex,slotIndex:i.slotIndex,size:o}):l.focus())}({controlsRef:e,direction:n,dayIndex:t,slotIndex:a,size:o})}}({controlsRef:tc,dayIndex:t,slotIndex:a,event:e})},tp=ef?td.findIndex(e=>(0,l.default)(e).isSame((0,l.default)(),"date")):-1,ty=td.map((e,r)=>(0,G.createElement)(j.UnstyledButton,{...e0("weekViewDayLabel"),key:e,ref:e=>{tm.current[r]=e},"aria-label":`${(0,t.getLabel)("weekday",eC)} ${(0,l.default)(e).format("YYYY-MM-DD")}`,mod:{today:(0,l.default)(e).isSame((0,l.default)(),"day")&&!!ec,weekend:e7.getWeekendDays(el).includes((0,l.default)(e).day()),static:"static"===eP},tabIndex:"static"===eP?-1:0===r?0:-1,onKeyDown:"static"===eP?void 0:e=>{let t;"ArrowRight"===(t=e.key)&&r<td.length-1?(e.preventDefault(),tm.current[r+1]?.focus()):"ArrowLeft"===t&&r>0&&(e.preventDefault(),tm.current[r-1]?.focus())},onClick:"static"===eP?void 0:()=>{ey?.("day"),er?.((0,o.toDateString)(e))}},(0,G.createElement)(C.Box,{...e0("weekViewDayWeekday"),key:"weekday"},(0,a.formatDate)({locale:e7.getLocale(ev),date:e,format:es})),(0,G.createElement)("div",{...e0("weekViewDayNumber"),key:"date"},(0,l.default)(e).date()))),tx=td.map((e,t)=>{let a=(ts.backgroundEvents[e]||[]).filter(e=>!e.position.allDay).map(e=>{let t=e4.variantColorResolver({color:e.color||e4.primaryColor,theme:e4,variant:"light",autoContrast:!0}),a="function"==typeof eT?eT(e):e.title,r={key:`bg-${e.id}`,...e0("weekViewBackgroundEvent",{style:{top:`${e.position.top}%`,height:`${e.position.height}%`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};return"function"==typeof eO?eO(e,r):(0,T.jsx)(C.Box,{...r})}),r=(ts.regularEvents[e]||[]).map(a=>{let r=(0,s.isAllDayEvent)({event:a,date:e}),n=!r&&ta.isDraggableEvent(a),o=!r&&to.isResizableEvent(a),i=to.getResizePosition(a.id),d=i?i.top:a.position.top,u=i?i.height:a.position.height;return(0,T.jsx)(p.ScheduleEvent,{event:a,autoSize:!0,hanging:a.position.hanging,draggable:n,withResize:o,isResizing:null!==i,onResizeStart:o?(r,n)=>{let o=tv.current[t];o&&to.handleResizeStart({event:a,edge:r,container:o,originalTop:a.position.top,originalHeight:a.position.height,eventDate:(0,l.default)(e).format("YYYY-MM-DD"),pointerEvent:n})}:void 0,renderEventBody:eT,renderEvent:eO,radius:eu,mode:eP,onClick:e_?e=>e_(a,e):void 0,style:{position:"absolute",top:`calc(${d}% + 1px)`,left:`${a.position.offset}%`,width:`${a.position.width}%`,height:`calc(${u}% - 1px)`}},a.id)});return(0,T.jsxs)(O,{day:e,dayIndex:t,slots:e5,getStyles:e0,weekendDays:el,highlightBusinessHours:ej,businessHours:e$,labels:eC,withEventsDragAndDrop:ti,mode:eP,slotsRef:tc,firstSlotIndex:tD,onSlotKeyDown:tw,onSlotClick:tl,onFirstSlotArrowUp:eg?e=>{tf.current[e]?.focus()}:void 0,onDaySlotsDragOver:(e,t,a)=>{let r=tg(e,a);null!==r&&ta.handleDragOver(e,{day:t,slotIndex:r})},onDaySlotsDragLeave:ta.handleDragLeave,onDaySlotsDrop:(e,t,a)=>{let r=tg(e,a);null!==r&&ta.handleDrop(e,{day:t,slotIndex:r})},dropTargetSlotIndex:ta.dropTarget?.day===e?ta.dropTarget.slotIndex:void 0,withDragSlotSelect:eN,onSlotPointerDown:tn.handleSlotPointerDown,isSlotDragSelected:tn.isSlotSelected,daySlotsContainerRef:e=>{tv.current[t]=e},getTimeSlotProps:eq,children:[a,r]},e)}),tY=td.map((e,a)=>(0,T.jsx)(j.UnstyledButton,{"aria-label":`${(0,t.getLabel)("allDay",eC)} ${(0,l.default)(e).format("YYYY-MM-DD")}`,ref:e=>{tf.current[a]=e},tabIndex:0===a?0:-1,onKeyDown:e=>{let t;"ArrowRight"===(t=e.key)&&a<td.length-1?(e.preventDefault(),tf.current[a+1]?.focus()):"ArrowLeft"===t&&a>0?(e.preventDefault(),tf.current[a-1]?.focus()):"ArrowDown"===t&&(e.preventDefault(),tc.current?.[a]?.[0]?.focus())},onClick:"static"!==eP&&eL?t=>eL((0,l.default)(e).format("YYYY-MM-DD"),t):void 0,onDragOver:ti?t=>tr.handleDragOver(t,e):void 0,onDragLeave:ti?tr.handleDragLeave:void 0,onDrop:ti?t=>tr.handleDrop(t,e):void 0,...e0("weekViewDaySlot"),mod:{"drop-target":tr.isDropTarget(e)}},e)),tS=(0,G.useMemo)(()=>new Set(ts.allDayEvents.map(e=>e.id)),[ts.allDayEvents]),tb=ts.allDayEvents.map(e=>(0,T.jsx)(p.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,hanging:e.position.hanging,draggable:tr.isDraggableEvent(e),renderEvent:eO,mode:eP,onClick:e_?t=>e_(e,t):void 0,style:{position:"absolute",zIndex:2,top:`calc(${50*e.position.row}% + 1px)`,left:`calc(${e.position.offset}% + 1px)`,width:`calc(${e.position.width}% - 1px)`,height:"calc(50% - 2px)",maxHeight:"calc(50% - 2px)"}},e.id)),tM=td.flatMap((e,t)=>{let a=(ts.backgroundEvents[e]||[]).filter(e=>e.position.allDay),r=100/td.length,n=t*r;return a.map(t=>{let a=e4.variantColorResolver({color:t.color||e4.primaryColor,theme:e4,variant:"light",autoContrast:!0}),o="function"==typeof eT?eT(t):t.title,i={key:`bg-allday-${t.id}-${e}`,...e0("weekViewBackgroundEvent",{style:{top:0,height:"100%",left:`${n}%`,width:`${r}%`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:o};return"function"==typeof eO?eO(t,i):(0,T.jsx)(C.Box,{...i})})}),tk=Math.max(...ts.allDayEvents.map(e=>e.position.row),1)-1,tE=(0,T.jsxs)(C.Box,{...e0("weekView"),mod:{static:"static"===eP,"slot-dragging":tn.isDragging},...eX,children:[ep&&(0,T.jsx)(y.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>{var e;let t;return e=e7.getFirstDayOfWeek(ed),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,l.default)(t).set("date",(0,l.default)(t).date()-7))},next:()=>{var e;let t;return e=e7.getFirstDayOfWeek(ed),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,l.default)(t).set("date",(0,l.default)(t).date()+7))},today:()=>(0,o.toDateString)((0,l.default)())},control:{miw:140,title:function({weekdays:e,locale:t,weekLabelFormat:r,renderWeekLabel:n}){return n?n({weekStart:(0,l.default)(e[0]).format("YYYY-MM-DD"),weekEnd:(0,l.default)(e[e.length-1]).format("YYYY-MM-DD")}):`${(0,a.formatDate)({locale:t,date:e[0],format:r})} – ${(0,a.formatDate)({locale:t,date:e[e.length-1],format:r})}, ${(0,a.formatDate)({locale:t,date:e[0],format:"YYYY"})}`}({weekdays:td,locale:e7.getLocale(ev),weekLabelFormat:eM,renderWeekLabel:eG})},labels:eC,onDateChange:er,onViewChange:ey,previousControlProps:ex,nextControlProps:eY,todayControlProps:eS,viewSelectProps:eb,stylesApiProps:e8}),(0,T.jsx)(C.Box,{...e0("weekViewRoot"),__vars:{"--indicator-offset-index":-1===tp?void 0:`${tp+1}`,"--number-of-days":ei?"7":`${7-e7.getWeekendDays(el).length}`},mod:{"with-weekends":ei},children:(0,T.jsxs)(H.ScrollArea.Autosize,{scrollbarSize:4,...em,...e0("weekViewScrollArea",{className:em?.className,style:em?.style}),onScrollPositionChange:e=>{em?.onScrollPositionChange?.(e),e6(0!==e.y)},viewportRef:th,children:[(0,T.jsxs)(C.Box,{...e0("weekViewHeader"),mod:{scrolled:e3},children:[(0,G.createElement)("div",{...e0("weekViewCorner"),key:"corner"},eh&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{...e0("weekViewWeekLabel"),children:(0,t.getLabel)("week",eC)}),(0,T.jsx)("div",{...e0("weekViewWeekNumber"),children:(0,r.getWeekNumber)(ea)})]})),ty]}),eg&&(0,T.jsxs)("div",{...e0("weekViewAllDaySlots"),children:[(0,T.jsx)("div",{...e0("weekViewAllDaySlotsLabel"),children:(0,t.getLabel)("allDay",eC)}),(0,T.jsxs)("div",{...e0("weekViewAllDaySlotsList"),children:[tM,(0,T.jsx)(C.Box,{...e0("weekViewAllDaySlotsEvents"),__vars:{"--extra-rows":`${tk}`},children:tb}),tY]})]}),(0,T.jsxs)("div",{...e0("weekViewInner"),children:[(0,T.jsx)("div",{...e0("weekViewSlotLabels"),children:tu}),ef&&-1!==tp&&(0,T.jsx)(g.CurrentTimeIndicator,{startOffset:"calc(100% - (100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index) + 1) + ((var(--number-of-days) - var(--indicator-offset-index) + 1) * var(--indicator-labels-offset)))",endOffset:"calc((100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index)) - (var(--number-of-days) - var(--indicator-offset-index)) * var(--indicator-labels-offset))",timeBubbleStartOffset:"calc(var(--week-view-slots-label-width) - var(--time-bubble-width))",currentTimeFormat:eo,withTimeBubble:eD,withThumb:!eD||0!==tp,locale:ev,startTime:ee,endTime:et,...e8}),tx]})]})})]}),tV=(0,G.useMemo)(()=>({isDragging:ta.dragContextValue.isDragging||tr.dragContextValue.isDragging,draggedEventId:ta.dragContextValue.draggedEventId??tr.dragContextValue.draggedEventId,draggedEvent:ta.dragContextValue.draggedEvent??tr.dragContextValue.draggedEvent,dropTarget:ta.dragContextValue.dropTarget??tr.dragContextValue.dropTarget,onDragStart:e=>{tS.has(e.id)?tr.handleDragStart(e):ta.handleDragStart(e)},onDragEnd:()=>{ta.handleDragEnd(),tr.handleDragEnd()},setDropTarget:ta.dragContextValue.setDropTarget}),[ta.dragContextValue,tr.dragContextValue,tS]);return eI?(0,T.jsx)(w.DragContext.Provider,{value:tV,children:tE}):tE});J.displayName="@mantine/schedule/WeekView",J.classes=I,J.varsResolver=K,e.s(["WeekView",0,J],315401)},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let r=(0,t.default)(e);for(;r.day()!==a;)r=r.subtract(1,"day");return r.format("YYYY-MM-DD")}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:r="dd",firstDayOfWeek:n=1}){let o=(0,a.default)().day(n),i=[];for(let a=0;a<7;a+=1)i.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:r}));return i}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:r=1,consistentWeeks:n}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),i=o.format("YYYY-MM-DD"),l=function(e,t=1){let r=(0,a.default)(e);if(!r.isValid())return r;let n=0===t?6:t-1;for(;r.day()!==n;)r=r.add(1,"day");return r.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),r),d=[],s=(0,a.default)((0,t.getStartOfWeek)({date:i,firstDayOfWeek:r}));for(;(0,a.default)(s).isBefore(l,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(s.format("YYYY-MM-DD 00:00:00")),s=s.add(1,"day");d.push(e)}if(n&&d.length<6){let e=d[d.length-1],t=e[e.length-1],r=(0,a.default)(t).add(1,"day");for(;d.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(r.format("YYYY-MM-DD 00:00:00")),r=r.add(1,"day");d.push(e)}}return d}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:r}){let n=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(r.key);if(n){r.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,weekIndex:r,dayIndex:n,size:o}){let i=function({direction:e,weekIndex:t,dayIndex:a,size:r}){let n=r[t];if(!n)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,r[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===r.length-1)return null;let e=Math.min(a,r[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:r[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===n-1){if(t===r.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:r,dayIndex:n,size:o});if(!i)return;let l=t.current?.[i.weekIndex]?.[i.dayIndex];l&&(l.disabled||l.getAttribute("data-hidden")||l.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:o}):l.focus())}({controlsRef:e,direction:n,weekIndex:t,dayIndex:a,size:o})}}])},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),r=e.i(621304),n=e.i(855578),o=e.i(605520),i=e.i(753381),l=e.i(4332),d=e.i(813982),s=e.i(657068),u=e.i(647170),c=e.i(298008),f=e.i(898770),m=e.i(494834),v={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},h=e.i(462138),D=e.i(232471),g=e.i(883364),w=e.i(284629),p=e.i(481178),y=e.i(275519),x=e.i(433512),Y=e.i(317477),S=e.i(323283),b=e.i(951254),M=e.i(44091),k=e.i(391466),E=e.i(579560),V=e.i(191788),C=e.i(205693),j=e.i(391398);let $={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},T=(0,p.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,x.getRadius)(t)}})),O=(0,y.factory)(e=>{let p=(0,M.useProps)("MobileMonthView",$,e),{classNames:y,className:x,style:O,styles:I,unstyled:H,vars:A,attributes:W,__staticSelector:B,date:R,onDateChange:L,selectedDate:_,defaultSelectedDate:N,onSelectedDateChange:z,withWeekNumbers:P,withWeekDays:F,locale:G,firstDayOfWeek:U,weekdayFormat:K,weekendDays:J,getWeekNumberProps:Z,getDayProps:Q,onDayClick:q,onWeekNumberClick:X,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:er,events:en,labels:eo,mode:ei,renderEvent:el,eventsHeaderFormat:ed,onYearClick:es,onEventClick:eu,renderHeader:ec,recurrenceExpansionLimit:ef,...em}=p,ev=(0,C.useDatesContext)(),eh=(0,b.useMantineTheme)(),eD=(0,m.default)(),[eg,ew]=(0,E.useUncontrolled)({value:_,defaultValue:N??(0,l.toDateString)(eD),onChange:e=>z?.(e?(0,l.toDateString)((0,m.default)(e)):null)}),ep=(0,k.useStyles)({name:B,classes:v,props:p,className:x,style:O,classNames:y,styles:I,unstyled:H,attributes:W,vars:A,varsResolver:T,rootSelector:"mobileMonthView"}),ey=(0,V.useRef)([]),ex=(0,V.useRef)(null),eY=function({date:e,events:t}){let a={};if(void 0===t)return a;let r=new Set;for(let n of t)if("background"!==n.display&&(0,m.default)(n.start).isSame((0,m.default)(e),"month")){if(!function(e,t){if((0,f.isMultidayEvent)(e)){let a=(0,m.default)(e.start).startOf("day"),r=(0,m.default)(e.end).startOf("day");for(let n=a;n.isBefore(r)||n.isSame(r);n=n.add(1,"day")){let a=n.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,m.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,c.validateEvent)(n),a),r.has(n.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${n.id}`);r.add(n.id)}return a}({date:R,events:(0,s.expandRecurringEvents)({events:en,rangeStart:(0,m.default)(R).startOf("month").toDate(),rangeEnd:(0,m.default)(R).endOf("month").toDate(),expansionLimit:ef})}),eS=F?(0,r.getWeekdaysNames)({locale:ev.getLocale(G),format:K,firstDayOfWeek:ev.getFirstDayOfWeek(U)}).map((e,t)=>(0,V.createElement)("div",{...ep("mobileMonthViewWeekday"),key:t},e)):null,eb=(0,o.getMonthDays)({month:(0,m.default)(R).format("YYYY-MM-DD"),firstDayOfWeek:ev.getFirstDayOfWeek(U),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let r=!(0,i.isSameMonth)(e,R),n=ev.getWeekendDays(J).includes((0,m.default)(e).day()),o=(0,m.default)(e).locale(G||ev.locale).format("MMMM D, YYYY"),l=Q?.((0,m.default)(e).format("YYYY-MM-DD"))||{},d=(0,m.default)(e).isSame(eD,"day")&&et,s=eg&&(0,m.default)(e).isSame((0,m.default)(eg),"day"),c=eY[(0,m.default)(e).format("YYYY-MM-DD")]||[],f=er||!r;f&&null===ex.current&&(ex.current={weekIndex:t,dayIndex:a});let v=ex.current?.weekIndex===t&&ex.current?.dayIndex===a,h=c.slice(0,3).map(e=>(0,V.createElement)("div",{...ep("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,Y.getThemeColor)(e.color,eh)}}),key:e.id}));return(0,V.createElement)(w.UnstyledButton,{"aria-label":o,"aria-selected":s||void 0,...l,...ep("mobileMonthViewDay",{className:l.className,style:l.style}),key:e,ref:e=>{e&&(ey.current[t]||(ey.current[t]=[]),ey.current[t][a]=e)},mod:[{outside:r,weekend:n,today:d,selected:s,static:"static"===ei,hidden:!f},l.mod],tabIndex:"static"!==ei&&f&&v?0:-1,onClick:"static"!==ei&&f?t=>{let a=(0,m.default)(e).format("YYYY-MM-DD");ew(a),q?.(a,t),l.onClick?.(t)}:void 0,onKeyDown:"static"!==ei&&f?e=>{(0,u.handleMonthViewKeyDown)({controlsRef:ey,weekIndex:t,dayIndex:a,event:e})}:void 0},f?(0,m.default)(e).format("D"):null,f&&(0,j.jsx)("div",{...ep("mobileMonthViewDayIndicators"),children:h}))}),r=Z?.((0,m.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,n.getWeekNumber)(e);return(0,V.createElement)("div",{...ep("mobileMonthViewWeek"),key:t},P&&(0,j.jsx)(w.UnstyledButton,{"aria-label":`Week ${o}`,...r,onClick:"static"===ei?void 0:t=>{X?.((0,m.default)(e[0]).format("YYYY-MM-DD"),t),r.onClick?.(t)},mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,...ep("mobileMonthViewWeekNumber",{className:r.className,style:r.style}),children:o},o),a)}),eM=(eg?(0,d.sortEvents)(eY[(0,m.default)(eg).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,m.default)(e.start).format("HH:mm"),a=(0,m.default)(e.end).format("HH:mm"),r=(0,j.jsxs)(D.Box,{...ep("mobileMonthViewEventBody"),children:[(0,j.jsx)("div",{...ep("mobileMonthViewEventColor",{style:{backgroundColor:(0,Y.getThemeColor)(e.color,eh)}})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(g.Text,{...ep("mobileMonthViewEventTitle"),children:e.title}),(0,j.jsx)(g.Text,{...ep("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),n={...ep("mobileMonthViewEvent"),onClick:"static"===ei?void 0:t=>{eu?.(e,t)},tabIndex:"static"===ei?-1:0,children:r};return"function"==typeof el?(0,j.jsx)(V.default.Fragment,{children:el(e,n)},e.id):(0,V.createElement)(w.UnstyledButton,{...n,key:e.id})}),ek=eg?(0,a.formatDate)({locale:ev.getLocale(G),date:eg,format:ed}):"",{dir:eE}=(0,S.useDirection)(),eV=(0,a.formatDate)({locale:ev.getLocale(G),date:R,format:"MMMM YYYY"}),eC=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(w.UnstyledButton,{...ep("mobileMonthViewHeaderBackButton"),onClick:es,mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,children:[(0,j.jsx)(h.AccordionChevron,{style:{transform:`rotate(${"rtl"===eE?-90:90}deg)`},size:20}),(0,m.default)(R).format("YYYY")]}),(0,j.jsx)(g.Text,{...ep("mobileMonthViewHeaderLabel"),children:eV})]});return(0,j.jsxs)(D.Box,{...ep("mobileMonthView"),mod:{"with-week-numbers":P},...em,children:[(0,j.jsx)("div",{...ep("mobileMonthViewHeader"),children:"function"==typeof ec?ec({mode:ei,date:R,defaultHeader:eC}):eC}),(0,j.jsxs)(D.Box,{...ep("mobileMonthViewCalendar"),mod:{"with-weekdays":F},children:[eS&&(0,j.jsxs)("div",{...ep("mobileMonthViewWeekdays"),children:[P&&(0,j.jsx)("div",{...ep("mobileMonthViewWeekdaysCorner")}),eS]}),eb]}),(0,j.jsxs)(D.Box,{...ep("mobileMonthViewEventsList"),children:[(0,j.jsx)(g.Text,{...ep("mobileMonthViewEventsHeader"),children:ek}),eM.length>0?eM:(0,j.jsx)(g.Text,{...ep("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});O.displayName="@mantine/schedule/MobileMonthView",O.classes=v,O.varsResolver=T,e.s(["MobileMonthView",0,O],433396)},238715,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let r=(0,a.default)().format("YYYY-MM-DD"),n=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${r} 09:00:00`,end:`${r} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${r} 10:00:00`,end:`${r} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${r} 12:00:00`,end:`${r} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${r} 00:00:00`,end:(0,a.default)(r).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
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
`;var l=e.i(391398),d=e.i(200183),s=e.i(433396),u=e.i(168574),c=e.i(315401),f=e.i(122308),m={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},v=e.i(232471),h=e.i(275519),D=e.i(44091),g=e.i(391466),w=e.i(579560);let p={defaultView:"week",mode:"default",layout:"default"},y=(0,h.factory)(e=>{let t=(0,D.useProps)("Schedule",p,e),{classNames:a,className:r,style:n,styles:o,unstyled:i,vars:h,date:y,defaultDate:x,onDateChange:Y,view:S,defaultView:b,onViewChange:M,events:k,locale:E,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:$,onEventDrop:T,canDragEvent:O,onEventDragStart:I,onEventDragEnd:H,onTimeSlotClick:A,onAllDaySlotClick:W,onDayClick:B,onEventClick:R,withDragSlotSelect:L,onSlotDragEnd:_,onExternalEventDrop:N,withEventResize:z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U,layout:K,dayViewProps:J,weekViewProps:Z,monthViewProps:Q,yearViewProps:q,mobileMonthViewProps:X,__staticSelector:ee,mod:et,...ea}=t,er=(0,g.useStyles)({name:ee||"Schedule",classes:m,props:t,className:r,style:n,classNames:a,styles:o,unstyled:i,vars:h}),[en,eo]=(0,w.useUncontrolled)({value:S,defaultValue:b,onChange:M}),[ei,el]=(0,w.useUncontrolled)({value:y,defaultValue:x??new Date}),ed=e=>{el(e),Y?.(e)},es=e=>{eo(e),M?.(e)},eu=e=>{ed(e),es("month")},ec={date:ei,onDateChange:ed,view:en,onViewChange:es,events:k,locale:E,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:"static"!==U&&$,onEventDrop:T,canDragEvent:O,onEventDragStart:I,onEventDragEnd:H,onTimeSlotClick:A,onAllDaySlotClick:W,onDayClick:B,onEventClick:R,withDragSlotSelect:L,onSlotDragEnd:_,onExternalEventDrop:N,withEventResize:"static"!==U&&z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U},ef=(()=>{switch(en){case"day":return(0,l.jsx)(d.DayView,{...ec,...J});case"week":return(0,l.jsx)(c.WeekView,{...ec,...Z});case"month":return(0,l.jsx)(u.MonthView,{...ec,...Q});case"year":return(0,l.jsx)(f.YearView,{...ec,onMonthClick:eu,...q});default:return null}})(),em=(()=>{switch(en){case"day":case"week":case"month":return(0,l.jsx)(s.MobileMonthView,{date:ei,onDateChange:ed,events:k,locale:E,radius:V,labels:C,mode:U,recurrenceExpansionLimit:G,onYearClick:()=>es("year"),onEventClick:R,...X});case"year":return(0,l.jsx)(f.YearView,{...ec,onMonthClick:eu,...q});default:return null}})();return"responsive"===K?(0,l.jsxs)(v.Box,{...er("root"),mod:[{layout:K},et],...ea,children:[(0,l.jsx)(v.Box,{...er("desktopView"),children:ef}),(0,l.jsx)(v.Box,{...er("mobileView"),children:em})]}):(0,l.jsx)(v.Box,{...er("root"),mod:et,...ea,children:ef})});y.displayName="@mantine/schedule/Schedule",y.classes=m;let x={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(y,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var Y=e.i(191788);let S=(0,a.default)().format("YYYY-MM-DD"),b=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),M=[{id:1,title:"Morning Standup",start:`${S} 09:00:00`,end:`${S} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${S} 10:00:00`,end:`${S} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${S} 12:00:00`,end:`${S} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${b} 14:00:00`,end:`${b} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${b} 15:30:00`,end:`${b} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${S} 00:00:00`,end:(0,a.default)(S).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(M);return(0,l.jsx)(y,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:r}:t))}})},code:`
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
`};var E=e.i(883364);let V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("week"),[a,r]=(0,Y.useState)(new Date);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(E.Text,{size:"sm",mb:"md",children:["Current view: ",(0,l.jsx)("b",{children:e})]}),(0,l.jsx)(y,{view:e,onViewChange:t,date:a,onDateChange:e=>r(new Date(e)),events:o})]})},code:`
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
`},C={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(y,{events:o,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1},monthViewProps:{withWeekNumbers:!0,firstDayOfWeek:0},yearViewProps:{withWeekNumbers:!0}})},code:`
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
`},j={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(y,{events:o,defaultView:"month"})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
`},$={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,l.jsx)(y,{events:o,layout:"responsive"})})},code:`
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
`};var T=e.i(162077),O=e.i(37930),I=e.i(658109),H=e.i(725695);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(o),[r,n]=(0,Y.useState)(!1),[i,d]=(0,Y.useState)(null),s=(0,Y.useRef)((0,a.default)().format("YYYY-MM-DD")),u=()=>{let e=s.current;d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),n(!0)};return(0,l.jsxs)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,l.jsx)(y,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onAllDaySlotClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),n(!0)},onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),n(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),n(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(s.current=e)},renderHeader:({defaultHeader:e})=>(0,l.jsxs)(H.Group,{justify:"space-between",w:"100%",children:[(0,l.jsx)(H.Group,{justify:"space-between",flex:"1",children:e}),(0,l.jsx)(I.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:u,"aria-label":"Create new event",children:(0,l.jsx)(O.PlusIcon,{size:18})})]})}}),(0,l.jsx)(T.EventForm,{opened:r,onClose:()=>n(!1),onExitTransitionEnd:()=>d(null),values:i,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:i?.id?()=>{i?.id&&t(e=>e.filter(e=>e.id!==i.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:T._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:i,language:"tsx",fileName:"events.ts"}]};var W=e.i(20035);let B=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)([]),r=(0,Y.useRef)(1);return(0,l.jsxs)(W.Grid,{children:[(0,l.jsxs)(W.Grid.Col,{span:{base:12,sm:3},children:[(0,l.jsx)(E.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),B.map(e=>(0,l.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,l.jsx)(W.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(y,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:r}:t))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(n),d=l.add(i.duration,"minutes");t(e=>[...e,{id:r.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},L=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(L),[r,n]=(0,Y.useState)([]),[o,i]=(0,Y.useState)(!1),d=(0,Y.useRef)(1);return(0,l.jsxs)(W.Grid,{children:[(0,l.jsx)(W.Grid.Col,{span:{base:12,sm:3},children:(0,l.jsxs)(v.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:l}=JSON.parse(o),d=r.find(e=>String(e.id)===String(l));if(!d)return;let s=(0,a.default)(d.end).diff((0,a.default)(d.start),"minutes");t(e=>[...e,{title:d.title,duration:s,color:d.color||"blue"}]),n(e=>e.filter(e=>e.id!==d.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,l.jsx)(E.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,l.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,l.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,l.jsx)(W.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(y,{events:r,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{n(r=>r.map(r=>r.id===e?{...r,start:t,end:a}:r))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(r),s=l.add(i.duration,"minutes");n(e=>[...e,{id:d.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},N=(0,a.default)().format("YYYY-MM-DD"),z=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${N} 09:00:00`,end:`${N} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${N} 10:00:00`,end:`${N} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${N} 12:00:00`,end:`${N} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${z} 14:00:00`,end:`${z} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${z} 15:30:00`,end:`${z} 16:30:00`,color:"cyan"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(P),a=({eventId:e,newStart:a,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:r}:t))};return(0,l.jsx)(y,{events:e,withEventsDragAndDrop:!0,onEventDrop:a,withEventResize:!0,onEventResize:a})},code:`
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
`},G=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("2024-01-15");return(0,l.jsx)(y,{view:"week",date:e,onDateChange:t,events:G})},code:`
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
`},K=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"lunch-block",title:"Lunch break",start:`${K} 12:00:00`,end:`${K} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${K} 14:00:00`,end:`${K} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${K} 10:00:00`,end:`${K} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${K} 14:30:00`,end:`${K} 15:30:00`,color:"green"}],Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(K);return(0,l.jsx)(y,{date:e,onDateChange:t,events:J})},code:`
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
`};var Q=e.i(428127),q=e.i(441058);let X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,Y.useState)("week"),i=function(e,t){let r=(0,a.default)(e);switch(t){case"day":return{previous:r.subtract(1,"day"),next:r.add(1,"day")};case"week":return{previous:r.subtract(1,"week"),next:r.add(1,"week")};case"month":return{previous:r.subtract(1,"month").startOf("month"),next:r.add(1,"month").startOf("month")};case"year":return{previous:r.subtract(1,"year").startOf("year"),next:r.add(1,"year").startOf("year")};default:return{previous:r,next:r}}}(e,r);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(Q.ScheduleHeader,{children:[(0,l.jsx)(Q.ScheduleHeader.Previous,{onClick:()=>t(i.previous.format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let r=(0,a.default)(e);switch(t){case"day":return r.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,q.getStartOfWeek)({date:e,firstDayOfWeek:1})),r=t.add(6,"day");if(t.month()===r.month())return`${t.format("MMM D")} – ${r.format("D, YYYY")}`;return`${t.format("MMM D")} – ${r.format("MMM D, YYYY")}`}case"month":return r.format("MMMM YYYY");case"year":return r.format("YYYY");default:return""}}(e,r)}),(0,l.jsx)(Q.ScheduleHeader.Next,{onClick:()=>t(i.next.format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,l.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,l.jsx)(Q.ScheduleHeader.ViewSelect,{value:r,onChange:n})})]}),(0,l.jsx)(y,{date:e,onDateChange:t,view:r,onViewChange:n,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
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
`};var ee=(0,t.__exportAll)({backgroundEvents:()=>Z,bidirectionalDragDrop:()=>_,controlled:()=>V,customHeader:()=>X,defaultView:()=>j,dragDrop:()=>k,eventForm:()=>A,eventResize:()=>F,externalDragDrop:()=>R,recurringEvents:()=>U,responsiveLayout:()=>$,usage:()=>x,viewProps:()=>C});e.s(["ScheduleDemos",0,ee],238715)}]);