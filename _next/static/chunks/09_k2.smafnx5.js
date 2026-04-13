(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37930,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="PlusIcon",e.s(["PlusIcon",0,r],37930)},315401,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(855578),r=e.i(898496),o=e.i(4332),i=e.i(441058),l=e.i(494834);function d({week:e,weekendDays:t,withWeekendDays:a=!0,firstDayOfWeek:n=1}){let r=[],s=(0,l.default)((0,i.getStartOfWeek)({date:e,firstDayOfWeek:n}));for(let e=0;e<7;e+=1){let e=s.day();(!(t&&t.includes(e))||a)&&r.push((0,o.toDateString)(s)),s=s.add(1,"day")}return r}var s=e.i(969610),u=e.i(792930),c=e.i(505696),f=e.i(657068),m=e.i(245086),v=e.i(783261),h=e.i(637079),D=e.i(376879),g=e.i(312709),p=e.i(201867),y=e.i(891343),w=e.i(966696),x=e.i(298008),b=e.i(68642),S=e.i(813982),Y=e.i(532965),M=e.i(751198);function E({event:e,weekDays:t,actualEndDate:a}){let n=(0,l.default)(e.start).startOf("day");return t.filter(e=>{let t=(0,l.default)(e).startOf("day");return(t.isAfter(n)||t.isSame(n))&&(t.isBefore(a)||t.isSame(a))})}function k(e){let t=(0,l.default)(e.end).startOf("day");return 0===(0,l.default)(e.end).hour()&&0===(0,l.default)(e.end).minute()?t.subtract(1,"day"):t}function V({eventStartDate:e,actualEndDate:t,weekDays:a}){let n=(0,l.default)(a[0]),r=(0,l.default)(a[a.length-1]),o=e.isBefore(n),i=t.isAfter(r);return o&&i?"both":o?"start":i?"end":"none"}var C=e.i(232471),j=e.i(284629),T=e.i(205693),$=e.i(391398);function O({day:e,dayIndex:a,slots:n,getStyles:r,weekendDays:o,children:i,labels:d,highlightBusinessHours:s,businessHours:u,withEventsDragAndDrop:f,onDaySlotsDragOver:m,onDaySlotsDragLeave:v,onDaySlotsDrop:h,onSlotClick:D,dropTargetSlotIndex:g,mode:p,slotsRef:y,firstSlotIndex:w,onSlotKeyDown:x,onFirstSlotArrowUp:b,withDragSlotSelect:S,onSlotPointerDown:Y,isSlotDragSelected:M,daySlotsContainerRef:E,getTimeSlotProps:k}){let V=(0,T.useDatesContext)().getWeekendDays(o).includes((0,l.default)(e).day()),H=(0,l.default)(e).isSame((0,l.default)(),"day"),I=(0,l.default)(e).format("YYYY-MM-DD"),A=n.map((n,o)=>{let i=g===o,l=w?.dayIndex===a&&w?.slotIndex===o,m=M?.(o,I)||!1,v=`${I} ${n.startTime}`,h=`${I} ${n.endTime}`,{onClick:E,...V}=k?.({start:v,end:h})||{},C="static"===p?void 0:t=>{D?.(String(e),n.startTime,t),E?.(t)};return(0,$.jsx)(j.UnstyledButton,{ref:e=>{e&&y?.current&&(y.current[a]||(y.current[a]=[]),y.current[a][o]=e)},...r("weekViewDaySlot"),mod:{"hour-start":n.isHourStart,...(0,c.getBusinessHoursMod)({time:n.startTime,businessHours:u,highlightBusinessHours:s}),"drop-target":i,"drag-selected":m,static:"static"===p},"aria-label":`${(0,t.getLabel)("timeSlot",d)} ${I} ${n.startTime} - ${n.endTime}`,tabIndex:"static"===p?-1:l?0:-1,"data-drag-slot-index":S&&"static"!==p?o:void 0,"data-drag-slot-group":S&&"static"!==p?I:void 0,onKeyDown:e=>{0===o&&"ArrowUp"===e.key&&b?(e.preventDefault(),b(a)):x&&x(e,a,o)},onPointerDown:S&&"static"!==p?e=>Y?.(e,o,I):void 0,onClick:C,onDragOver:f&&"static"!==p?e=>e.preventDefault():void 0,...V},n.startTime)});return(0,$.jsx)(C.Box,{...r("weekViewDay"),mod:{today:H,weekend:V},children:(0,$.jsxs)(C.Box,{ref:E,mod:{today:H},...r("weekViewDaySlots"),onDragOver:f&&"static"!==p?t=>m?.(t,String(e),a):void 0,onDragLeave:f&&"static"!==p?v:void 0,onDrop:f&&"static"!==p?t=>h?.(t,String(e),a):void 0,children:[i,A]})})}var H={weekView:"m_42b9032d",weekViewRoot:"m_6b2099af",weekViewInner:"m_f8734f29",weekViewScrollArea:"m_44818807",weekViewHeader:"m_13bcfc1a",weekViewCorner:"m_bc98be2",weekViewSlotLabels:"m_149dcaaa",weekViewSlotLabel:"m_29f492e9",weekViewDay:"m_98199d2f",weekViewDayLabel:"m_ccf0d705",weekViewDayNumber:"m_d5b28558",weekViewDayWeekday:"m_a0fc06f9",weekViewBackgroundEvent:"m_41ce8f1f",weekViewDaySlots:"m_cd58ae46",weekViewDaySlot:"m_8ac0cbcd",weekViewWeekLabel:"m_838426b3",weekViewWeekNumber:"m_f1892b6a",weekViewAllDaySlots:"m_4f08474d",weekViewAllDaySlotsLabel:"m_85cdcfa7",weekViewAllDaySlotsEvents:"m_2923a6c6",weekViewAllDaySlotsList:"m_77edfd8b"},I=e.i(19300),A=e.i(481178),B=e.i(275519),R=e.i(433512),W=e.i(779177),_=e.i(951254),L=e.i(44091),z=e.i(62904),N=e.i(391466),P=e.i(417241),F=e.i(332977),G=e.i(191788);let U={__staticSelector:"WeekView",withWeekendDays:!0,withCurrentTimeIndicator:!0,startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,weekdayFormat:"ddd",withWeekNumber:!0,withCurrentTimeBubble:!0,withAllDaySlots:!0,withHeader:!0,weekLabelFormat:"MMM DD",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},K=(0,A.createVarsResolver)((e,{radius:t,allDaySlotHeight:a,slotHeight:n})=>({weekView:{"--week-view-radius":void 0!==t?(0,R.getRadius)(t):void 0,"--week-view-all-day-slots-height":(0,W.rem)(a),"--week-view-slot-height":(0,W.rem)(n)}})),J=(0,B.factory)(e=>{var A;let B=(0,L.useProps)("WeekView",U,e),{classNames:R,className:W,style:J,styles:Z,unstyled:Q,attributes:q,vars:X,startTime:ee,endTime:et,date:ea,onDateChange:en,intervalMinutes:er,slotLabelFormat:eo,withWeekendDays:ei,weekendDays:el,firstDayOfWeek:ed,weekdayFormat:es,radius:eu,highlightToday:ec,withCurrentTimeIndicator:ef,scrollAreaProps:em,locale:ev,withWeekNumber:eh,withCurrentTimeBubble:eD,withAllDaySlots:eg,__staticSelector:ep,withHeader:ey,onViewChange:ew,previousControlProps:ex,nextControlProps:eb,todayControlProps:eS,viewSelectProps:eY,weekLabelFormat:eM,events:eE,allDaySlotHeight:ek,slotHeight:eV,labels:eC,highlightBusinessHours:ej,businessHours:eT,renderEventBody:e$,renderEvent:eO,withEventsDragAndDrop:eH,onEventDrop:eI,canDragEvent:eA,onEventDragStart:eB,onEventDragEnd:eR,onTimeSlotClick:eW,onAllDaySlotClick:e_,onEventClick:eL,withDragSlotSelect:ez,onSlotDragEnd:eN,mode:eP,startScrollTime:eF,renderWeekLabel:eG,onExternalEventDrop:eU,withEventResize:eK,onEventResize:eJ,canResizeEvent:eZ,recurrenceExpansionLimit:eQ,getTimeSlotProps:eq,...eX}=B,e0=(0,N.useStyles)({name:ep,classes:H,props:B,className:W,style:J,classNames:R,styles:Z,unstyled:Q,vars:X,varsResolver:K,attributes:q,rootSelector:"weekView"}),{resolvedClassNames:e1,resolvedStyles:e2}=(0,z.useResolvedStylesApi)({classNames:R,styles:Z,props:B}),e8={classNames:e1,styles:e2,attributes:q,__staticSelector:ep,radius:eu},e4=(0,_.useMantineTheme)(),[e3,e6]=(0,G.useState)(!1),e9=(0,T.useDatesContext)(),e7=(0,r.getDayTimeIntervals)({startTime:ee,endTime:et,intervalMinutes:er}),e5=(0,G.useRef)(null);(0,m.useAutoScrollOnDrag)({viewportRef:e5,enabled:(eH||!!eU)&&"static"!==eP});let te=(0,G.useCallback)((e,t)=>{if(!eU)return;let a=(0,l.default)(t.day).format("YYYY-MM-DD");eU(e.dataTransfer,`${a} ${e7[t.slotIndex].startTime}`)},[eU,e7]),tt=(0,G.useCallback)((e,t)=>{eU&&eU(e.dataTransfer,`${(0,l.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eU]),ta=(0,v.useDragDropHandlers)({enabled:eH,mode:eP,onEventDrop:eI,canDragEvent:eA,onEventDragStart:eB,onEventDragEnd:eR,calculateDropTarget:(e,t)=>{let a=e7[e.slotIndex].startTime;return(0,u.calculateDropTime)({draggedEvent:t,targetDate:e.day,targetSlotTime:a,intervalMinutes:er})},onExternalDrop:eU?te:void 0}),tn=(0,v.useDragDropHandlers)({enabled:eH,mode:eP,onEventDrop:eI,canDragEvent:eA,onEventDragStart:eB,onEventDragEnd:eR,calculateDropTarget:(e,t)=>{let a=(0,l.default)(t.end).diff((0,l.default)(t.start),"millisecond"),n=(0,l.default)(e).startOf("day");return{start:n.toDate(),end:n.add(a,"millisecond").toDate()}},onExternalDrop:eU?tt:void 0}),tr=(0,D.useSlotDragSelect)({enabled:ez&&"static"!==eP,onDragEnd:(e,t,a)=>{if(!eN)return;let n=(0,l.default)(a).format("YYYY-MM-DD");eN(`${n} ${e7[e].startTime}`,`${n} ${e7[t].endTime}`)}}),to=(0,h.useEventResize)({enabled:eK,mode:eP,startTime:ee,endTime:et,intervalMinutes:er,onEventResize:eJ,canResizeEvent:eZ}),ti=(eH||!!eU)&&"static"!==eP,tl=(e,t,a)=>{if(!eW)return;let n=(0,l.default)(e).format("YYYY-MM-DD"),r=e7.findIndex(e=>e.startTime===t);if(-1===r)return;let o=e7[r];eW({slotStart:`${n} ${o.startTime}`,slotEnd:`${n} ${o.endTime}`,nativeEvent:a})},td=d({week:ea,withWeekendDays:ei,weekendDays:e9.getWeekendDays(el),firstDayOfWeek:e9.getFirstDayOfWeek(ed)}),ts=function({date:e,events:t,startTime:a,endTime:n,firstDayOfWeek:r=1,weekendDays:o=[0,6],withWeekendDays:i=!0}){let u=d({week:e,firstDayOfWeek:r,withWeekendDays:i,weekendDays:o}),c=u.length,f=(0,l.default)(u[0]),m=(0,l.default)(u[u.length-1]),v={allDayEvents:[],regularEvents:Object.fromEntries(u.map(e=>[e,[]])),backgroundEvents:Object.fromEntries(u.map(e=>[e,[]]))},h=new Map,D=new Map;for(let e of(0,S.sortEvents)(t)){if("background"===e.display){let t=(0,l.default)(e.start).startOf("day"),r=k(e),o=E({event:e,weekDays:u,actualEndDate:r}),i=V({eventStartDate:t,actualEndDate:r,weekDays:u});for(let t of o){let r=u.indexOf(t);if(-1===r)continue;let o=(0,l.default)(t),d=o.endOf("day"),f=(0,l.default)(e.start),m=(0,l.default)(e.end),h=f.isBefore(o)?o:f,D=m.isAfter(d)?d:m,g={...e,start:h.format("YYYY-MM-DD HH:mm:ss"),end:D.format("YYYY-MM-DD HH:mm:ss")},p=(0,s.isAllDayEvent)({event:g,date:t}),y=p?{top:0,height:100}:(0,Y.getDayPosition)({event:g,startTime:a,endTime:n});if(!p&&y.height<=0)continue;let w=r/c*100;v.backgroundEvents[t].push({...e,position:{...y,allDay:p,column:0,width:100,offset:0,overlaps:1,weekOffset:w,row:0,hanging:i}})}continue}let t=(0,l.default)(e.start).startOf("day"),r=k(e),o=E({event:e,weekDays:u,actualEndDate:r});if(0===o.length)continue;let i=r.isAfter(t),d=V({eventStartDate:t,actualEndDate:r,weekDays:u}),m=o.some(t=>(0,s.isAllDayEvent)({event:e,date:t})),g=i||m,p=g?D:h,y=function(e){let t=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,allWeekDays:r}){let o=`col-${t}`;return!!e.has(o)&&e.get(o).some(e=>{let t=r.some(t=>(0,s.isAllDayEvent)({event:e,date:t})),o=(0,M.isEventsOverlap)(e,a);return n&&t?o:!n&&!t&&o})}({...e,columnIndex:t});)t++;return t}({columns:p,event:e,allDay:g,allWeekDays:u}),w=`col-${y}`;p.has(w)||p.set(w,[]),p.get(w).push(e);let x=g?{top:0,height:100}:(0,Y.getDayPosition)({event:e,startTime:a,endTime:n});if(g){let a=function({eventStartDate:e,weekStartDate:t,weekDays:a,visibleDaysCount:n,hangingStart:r}){let o=e;return r&&(o=t),a.some(e=>(0,l.default)(e).isSame(o,"day"))||(o=(0,l.default)(a[0])),(a.filter(e=>(0,l.default)(e).isBefore(o)||(0,l.default)(e).isSame(o,"day")).length-1)/n*100}({eventStartDate:t,weekStartDate:f,weekDays:u,visibleDaysCount:c,hangingStart:"start"===d||"both"===d});v.allDayEvents.push({...e,position:{...x,allDay:g,column:y,width:0,offset:a,overlaps:0,row:0,hanging:d}})}else for(let t of o){let a=u.indexOf(t);if(-1===a)continue;let n=a/c*100;v.regularEvents[t].push({...e,position:{...x,allDay:g,column:y,width:0,offset:0,overlaps:0,weekOffset:n,row:0,hanging:d}})}}for(let e of u){var g=v.regularEvents[e];for(let e of g){let t=e.position.column;for(let a of g)(0,M.isEventsOverlap)(e,a)&&(t=Math.max(t,a.position.column));let a=t+1;e.position.overlaps=a,e.position.width=100/a,e.position.offset=100*e.position.column/a}}if(v.allDayEvents.length>0){let e=function(e){let t=new Map;for(let a of e){let e=0;for(;;){let n=!1;for(let[r,o]of t.entries())if(o===e&&(0,M.isEventsOverlap)(a,r)){n=!0;break}if(!n)break;e++}t.set(a,e)}return t}(v.allDayEvents),t=new Set;for(let a of v.allDayEvents){let n=e.get(a);a.position.row=n,t.add(n)}let a=Math.max(...t)+1;for(let e of v.allDayEvents){let t=(0,l.default)(e.start).startOf("day"),n=k(e);e.position.width=function({eventStartDate:e,actualEndDate:t,weekStartDate:a,weekEndDate:n,weekDays:r,visibleDaysCount:o}){let i=e;e.isBefore(a)&&(i=a);let d=t;return t.isAfter(n)&&(d=n),r.filter(e=>((0,l.default)(e).isAfter(i)||(0,l.default)(e).isSame(i,"day"))&&((0,l.default)(e).isBefore(d)||(0,l.default)(e).isSame(d,"day"))).length/o*100}({eventStartDate:t,actualEndDate:n,weekStartDate:f,weekEndDate:m,weekDays:u,visibleDaysCount:c}),e.position.overlaps=a}}return v}({...A={date:ea,events:(0,f.expandRecurringEvents)({events:eE,rangeStart:(0,l.default)(td[0]).startOf("day").toDate(),rangeEnd:(0,l.default)(td[td.length-1]).endOf("day").toDate(),expansionLimit:eQ}),startTime:ee,endTime:et,firstDayOfWeek:e9.getFirstDayOfWeek(ed),weekendDays:e9.getWeekendDays(el),withWeekendDays:ei},events:function({date:e,events:t,startTime:a,endTime:n,firstDayOfWeek:r=1}){if(void 0===t)return[];let o=new Set,d=[];for(let s of t)if(function({event:e,targetWeek:t,firstDayOfWeek:a}){let n=(0,l.default)((0,i.getStartOfWeek)({date:t,firstDayOfWeek:a})),r=n.add(7,"day");return(0,l.default)(e.start).isBefore(r)&&(0,l.default)(e.end).isAfter(n)}({event:s,targetWeek:e,firstDayOfWeek:r})&&(0,b.isEventInTimeRange)({event:s,startTime:a,endTime:n})){if(d.push((0,x.validateEvent)(s)),o.has(s.id))throw Error(`[@mantine/schedule] WeekView: Duplicated event ids found: ${s.id}`);o.add(s.id)}return d}(A)}),tu=e7.map(e=>{let t=(0,a.formatDate)({date:(0,l.default)(`${(0,l.default)(ea).format("YYYY-MM-DD")} ${e.startTime}`),locale:e9.getLocale(ev),format:eo});return(0,G.createElement)(C.Box,{...e0("weekViewSlotLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,c.getBusinessHoursMod)({time:e.startTime,businessHours:eT,highlightBusinessHours:ej})}},t)}),tc=(0,G.useRef)([]),tf=(0,G.useRef)([]),tm=(0,G.useRef)([]),tv=(0,G.useRef)([]),th=(0,F.useMergedRef)(e5,em?.viewportRef),tD={dayIndex:0,slotIndex:0};(0,P.useIsomorphicEffect)(()=>{if(!eF||!e5.current)return;let e=tc.current[0];if(!e||0===e.length)return;let t=e7.findIndex(e=>e.startTime>=eF);if(t<0)return;let a=e[t];if(!a)return;let n=a.getBoundingClientRect(),r=e5.current.getBoundingClientRect();e5.current.scrollTo({left:0,top:n.top-r.top})},[]);let tg=(0,G.useCallback)((e,t)=>{let a=tc.current[t]??[],n=a.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(n>=0)return n;let r=a[0],o=a[a.length-1];if(!r||!o)return null;let i=r.getBoundingClientRect(),l=o.getBoundingClientRect();return e.clientY<i.top?0:e.clientY>l.bottom?a.length-1:null},[]),tp=(e,t,a)=>{!function({controlsRef:e,dayIndex:t,slotIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,dayIndex:n,slotIndex:r,size:o}){let i=function({direction:e,dayIndex:t,slotIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":if(0===a)return null;return{dayIndex:t,slotIndex:a-1};case"down":if(a===r-1)return null;return{dayIndex:t,slotIndex:a+1};case"left":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{dayIndex:t-1,slotIndex:e}}case"right":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{dayIndex:t+1,slotIndex:e}}default:return null}}({direction:a,dayIndex:n,slotIndex:r,size:o});if(!i)return;let l=t.current?.[i.dayIndex]?.[i.slotIndex];l&&(l.disabled||l.getAttribute("data-hidden")?e({controlsRef:t,direction:a,dayIndex:i.dayIndex,slotIndex:i.slotIndex,size:o}):l.focus())}({controlsRef:e,direction:r,dayIndex:t,slotIndex:a,size:o})}}({controlsRef:tc,dayIndex:t,slotIndex:a,event:e})},ty=ef?td.findIndex(e=>(0,l.default)(e).isSame((0,l.default)(),"date")):-1,tw=td.map((e,n)=>(0,G.createElement)(j.UnstyledButton,{...e0("weekViewDayLabel"),key:e,ref:e=>{tm.current[n]=e},"aria-label":`${(0,t.getLabel)("weekday",eC)} ${(0,l.default)(e).format("YYYY-MM-DD")}`,mod:{today:(0,l.default)(e).isSame((0,l.default)(),"day")&&!!ec,weekend:e9.getWeekendDays(el).includes((0,l.default)(e).day()),static:"static"===eP},tabIndex:"static"===eP?-1:0===n?0:-1,onKeyDown:"static"===eP?void 0:e=>{let t;"ArrowRight"===(t=e.key)&&n<td.length-1?(e.preventDefault(),tm.current[n+1]?.focus()):"ArrowLeft"===t&&n>0&&(e.preventDefault(),tm.current[n-1]?.focus())},onClick:"static"===eP?void 0:()=>{ew?.("day"),en?.((0,o.toDateString)(e))}},(0,G.createElement)(C.Box,{...e0("weekViewDayWeekday"),key:"weekday"},(0,a.formatDate)({locale:e9.getLocale(ev),date:e,format:es})),(0,G.createElement)("div",{...e0("weekViewDayNumber"),key:"date"},(0,l.default)(e).date()))),tx=td.map((e,t)=>{let a=(ts.backgroundEvents[e]||[]).filter(e=>!e.position.allDay).map(e=>{let t=e4.variantColorResolver({color:e.color||e4.primaryColor,theme:e4,variant:"light",autoContrast:!0}),a="function"==typeof e$?e$(e):e.title,n={key:`bg-${e.id}`,...e0("weekViewBackgroundEvent",{style:{top:`${e.position.top}%`,height:`${e.position.height}%`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eO)return eO(e,n);let{key:r,...o}=n;return(0,$.jsx)(C.Box,{...o},r)}),n=(ts.regularEvents[e]||[]).map(a=>{let n=(0,s.isAllDayEvent)({event:a,date:e}),r=!n&&ta.isDraggableEvent(a),o=!n&&to.isResizableEvent(a),i=to.getResizePosition(a.id),d=i?i.top:a.position.top,u=i?i.height:a.position.height;return(0,$.jsx)(y.ScheduleEvent,{event:a,autoSize:!0,hanging:a.position.hanging,draggable:r,withResize:o,isResizing:null!==i,onResizeStart:o?(n,r)=>{let o=tv.current[t];o&&to.handleResizeStart({event:a,edge:n,container:o,originalTop:a.position.top,originalHeight:a.position.height,eventDate:(0,l.default)(e).format("YYYY-MM-DD"),pointerEvent:r})}:void 0,renderEventBody:e$,renderEvent:eO,radius:eu,mode:eP,onClick:eL?e=>{to.wasResizing()||eL(a,e)}:void 0,style:{position:"absolute",top:`calc(${d}% + 1px)`,left:`${a.position.offset}%`,width:`${a.position.width}%`,height:`calc(${u}% - 1px)`}},a.id)});return(0,$.jsxs)(O,{day:e,dayIndex:t,slots:e7,getStyles:e0,weekendDays:el,highlightBusinessHours:ej,businessHours:eT,labels:eC,withEventsDragAndDrop:ti,mode:eP,slotsRef:tc,firstSlotIndex:tD,onSlotKeyDown:tp,onSlotClick:tl,onFirstSlotArrowUp:eg?e=>{tf.current[e]?.focus()}:void 0,onDaySlotsDragOver:(e,t,a)=>{let n=tg(e,a);null!==n&&ta.handleDragOver(e,{day:t,slotIndex:n})},onDaySlotsDragLeave:ta.handleDragLeave,onDaySlotsDrop:(e,t,a)=>{let n=tg(e,a);null!==n&&ta.handleDrop(e,{day:t,slotIndex:n})},dropTargetSlotIndex:ta.dropTarget?.day===e?ta.dropTarget.slotIndex:void 0,withDragSlotSelect:ez,onSlotPointerDown:tr.handleSlotPointerDown,isSlotDragSelected:tr.isSlotSelected,daySlotsContainerRef:e=>{tv.current[t]=e},getTimeSlotProps:eq,children:[a,n]},e)}),tb=td.map((e,a)=>(0,$.jsx)(j.UnstyledButton,{"aria-label":`${(0,t.getLabel)("allDay",eC)} ${(0,l.default)(e).format("YYYY-MM-DD")}`,ref:e=>{tf.current[a]=e},tabIndex:0===a?0:-1,onKeyDown:e=>{let t;"ArrowRight"===(t=e.key)&&a<td.length-1?(e.preventDefault(),tf.current[a+1]?.focus()):"ArrowLeft"===t&&a>0?(e.preventDefault(),tf.current[a-1]?.focus()):"ArrowDown"===t&&(e.preventDefault(),tc.current?.[a]?.[0]?.focus())},onClick:"static"!==eP&&e_?t=>e_((0,l.default)(e).format("YYYY-MM-DD"),t):void 0,onDragOver:ti?t=>tn.handleDragOver(t,e):void 0,onDragLeave:ti?tn.handleDragLeave:void 0,onDrop:ti?t=>tn.handleDrop(t,e):void 0,...e0("weekViewDaySlot"),mod:{"drop-target":tn.isDropTarget(e)}},e)),tS=(0,G.useMemo)(()=>new Set(ts.allDayEvents.map(e=>e.id)),[ts.allDayEvents]),tY=ts.allDayEvents.map(e=>(0,$.jsx)(y.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,hanging:e.position.hanging,draggable:tn.isDraggableEvent(e),renderEvent:eO,mode:eP,onClick:eL?t=>eL(e,t):void 0,style:{position:"absolute",zIndex:2,top:`calc(${50*e.position.row}% + 1px)`,left:`calc(${e.position.offset}% + 1px)`,width:`calc(${e.position.width}% - 1px)`,height:"calc(50% - 2px)",maxHeight:"calc(50% - 2px)"}},e.id)),tM=td.flatMap((e,t)=>{let a=(ts.backgroundEvents[e]||[]).filter(e=>e.position.allDay),n=100/td.length,r=t*n;return a.map(t=>{let a=e4.variantColorResolver({color:t.color||e4.primaryColor,theme:e4,variant:"light",autoContrast:!0}),o="function"==typeof e$?e$(t):t.title,i={key:`bg-allday-${t.id}-${e}`,...e0("weekViewBackgroundEvent",{style:{top:0,height:"100%",left:`${r}%`,width:`${n}%`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:o};if("function"==typeof eO)return eO(t,i);let{key:l,...d}=i;return(0,$.jsx)(C.Box,{...d},l)})}),tE=Math.max(...ts.allDayEvents.map(e=>e.position.row),1)-1,tk=(0,$.jsxs)(C.Box,{...e0("weekView"),mod:{static:"static"===eP,"slot-dragging":tr.isDragging},...eX,children:[ey&&(0,$.jsx)(w.ScheduleHeaderBase,{view:"week",navigationHandlers:{previous:()=>{var e;let t;return e=e9.getFirstDayOfWeek(ed),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,l.default)(t).set("date",(0,l.default)(t).date()-7))},next:()=>{var e;let t;return e=e9.getFirstDayOfWeek(ed),t=(0,i.getStartOfWeek)({date:ea,firstDayOfWeek:e}),(0,o.toDateString)((0,l.default)(t).set("date",(0,l.default)(t).date()+7))},today:()=>(0,o.toDateString)((0,l.default)())},control:{miw:140,title:function({weekdays:e,locale:t,weekLabelFormat:n,renderWeekLabel:r}){return r?r({weekStart:(0,l.default)(e[0]).format("YYYY-MM-DD"),weekEnd:(0,l.default)(e[e.length-1]).format("YYYY-MM-DD")}):`${(0,a.formatDate)({locale:t,date:e[0],format:n})} – ${(0,a.formatDate)({locale:t,date:e[e.length-1],format:n})}, ${(0,a.formatDate)({locale:t,date:e[0],format:"YYYY"})}`}({weekdays:td,locale:e9.getLocale(ev),weekLabelFormat:eM,renderWeekLabel:eG})},labels:eC,onDateChange:en,onViewChange:ew,previousControlProps:ex,nextControlProps:eb,todayControlProps:eS,viewSelectProps:eY,stylesApiProps:e8}),(0,$.jsx)(C.Box,{...e0("weekViewRoot"),__vars:{"--indicator-offset-index":-1===ty?void 0:`${ty+1}`,"--number-of-days":ei?"7":`${7-e9.getWeekendDays(el).length}`},mod:{"with-weekends":ei},children:(0,$.jsxs)(I.ScrollArea.Autosize,{scrollbarSize:4,...em,...e0("weekViewScrollArea",{className:em?.className,style:em?.style}),onScrollPositionChange:e=>{em?.onScrollPositionChange?.(e),e6(0!==e.y)},viewportRef:th,children:[(0,$.jsxs)(C.Box,{...e0("weekViewHeader"),mod:{scrolled:e3},children:[(0,G.createElement)("div",{...e0("weekViewCorner"),key:"corner"},eh&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)("div",{...e0("weekViewWeekLabel"),children:(0,t.getLabel)("week",eC)}),(0,$.jsx)("div",{...e0("weekViewWeekNumber"),children:(0,n.getWeekNumber)(ea)})]})),tw]}),eg&&(0,$.jsxs)("div",{...e0("weekViewAllDaySlots"),children:[(0,$.jsx)("div",{...e0("weekViewAllDaySlotsLabel"),children:(0,t.getLabel)("allDay",eC)}),(0,$.jsxs)("div",{...e0("weekViewAllDaySlotsList"),children:[tM,(0,$.jsx)(C.Box,{...e0("weekViewAllDaySlotsEvents"),__vars:{"--extra-rows":`${tE}`},children:tY}),tb]})]}),(0,$.jsxs)("div",{...e0("weekViewInner"),children:[(0,$.jsx)("div",{...e0("weekViewSlotLabels"),children:tu}),ef&&-1!==ty&&(0,$.jsx)(g.CurrentTimeIndicator,{startOffset:"calc(100% - (100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index) + 1) + ((var(--number-of-days) - var(--indicator-offset-index) + 1) * var(--indicator-labels-offset)))",endOffset:"calc((100% / var(--number-of-days)) * (var(--number-of-days) - var(--indicator-offset-index)) - (var(--number-of-days) - var(--indicator-offset-index)) * var(--indicator-labels-offset))",timeBubbleStartOffset:"calc(var(--week-view-slots-label-width) - var(--time-bubble-width))",currentTimeFormat:eo,withTimeBubble:eD,withThumb:!eD||0!==ty,locale:ev,startTime:ee,endTime:et,...e8}),tx]})]})})]}),tV=(0,G.useMemo)(()=>({isDragging:ta.dragContextValue.isDragging||tn.dragContextValue.isDragging,draggedEventId:ta.dragContextValue.draggedEventId??tn.dragContextValue.draggedEventId,draggedEvent:ta.dragContextValue.draggedEvent??tn.dragContextValue.draggedEvent,dropTarget:ta.dragContextValue.dropTarget??tn.dragContextValue.dropTarget,onDragStart:e=>{tS.has(e.id)?tn.handleDragStart(e):ta.handleDragStart(e)},onDragEnd:()=>{ta.handleDragEnd(),tn.handleDragEnd()},setDropTarget:ta.dragContextValue.setDropTarget}),[ta.dragContextValue,tn.dragContextValue,tS]);return eH?(0,$.jsx)(p.DragContext.Provider,{value:tV,children:tk}):tk});J.displayName="@mantine/schedule/WeekView",J.classes=H,J.varsResolver=K,e.s(["WeekView",0,J],315401)},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),r=e.i(898496),o=e.i(4332),i=e.i(969610),l=e.i(792930),d=e.i(505696),s=e.i(657068),u=e.i(245086),c=e.i(783261),f=e.i(637079),m=e.i(376879),v=e.i(312709),h=e.i(201867),D=e.i(891343),g=e.i(67312),p=e.i(966696),y=e.i(298008),w=e.i(68642),x=e.i(532965),b=e.i(813982),S=e.i(751198),Y=e.i(494834),M={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},E=e.i(232471),k=e.i(19300),V=e.i(284629),C=e.i(481178),j=e.i(275519),T=e.i(433512),$=e.i(779177),O=e.i(951254),H=e.i(44091),I=e.i(62904),A=e.i(391466),B=e.i(417241),R=e.i(332977),W=e.i(191788),_=e.i(205693),L=e.i(391398);let z={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},N=(0,C.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,T.getRadius)(t):void 0,"--day-view-slot-height":(0,$.rem)(a),"--day-view-all-day-slot-height":(0,$.rem)(n)}})),P=(0,j.factory)(e=>{let C=(0,H.useProps)("DayView",z,e),{classNames:j,className:T,style:$,styles:P,unstyled:F,attributes:G,vars:U,__staticSelector:K,startTime:J,endTime:Z,intervalMinutes:Q,withAllDaySlot:q,date:X,locale:ee,slotLabelFormat:et,headerFormat:ea,withCurrentTimeIndicator:en=(0,Y.default)(X).isSame((0,Y.default)(),"day"),withCurrentTimeBubble:er,withHeader:eo,radius:ei,onDateChange:el,onViewChange:ed,previousControlProps:es,nextControlProps:eu,todayControlProps:ec,viewSelectProps:ef,slotHeight:em,allDaySlotHeight:ev,scrollAreaProps:eh,events:eD,moreEventsProps:eg,renderEventBody:ep,renderEvent:ey,labels:ew,highlightBusinessHours:ex,businessHours:eb,withEventsDragAndDrop:eS,onEventDrop:eY,canDragEvent:eM,onEventDragStart:eE,onEventDragEnd:ek,onTimeSlotClick:eV,onAllDaySlotClick:eC,onEventClick:ej,withDragSlotSelect:eT,onSlotDragEnd:e$,mode:eO,startScrollTime:eH,onExternalEventDrop:eI,withEventResize:eA,onEventResize:eB,canResizeEvent:eR,recurrenceExpansionLimit:eW,getTimeSlotProps:e_,...eL}=C,ez=(0,A.useStyles)({name:K,classes:M,props:C,className:T,style:$,classNames:j,styles:P,unstyled:F,attributes:G,vars:U,varsResolver:N,rootSelector:"dayView"}),{resolvedClassNames:eN,resolvedStyles:eP}=(0,I.useResolvedStylesApi)({classNames:j,styles:P,props:C}),eF={classNames:eN,styles:eP,attributes:G,__staticSelector:K,radius:ei},eG=(0,O.useMantineTheme)(),eU=(0,_.useDatesContext)(),eK=(0,r.getDayTimeIntervals)({startTime:J,endTime:Z,intervalMinutes:Q}),eJ=(0,W.useRef)([]),eZ=(0,W.useRef)(null),eQ=(0,W.useRef)(null),eq=(0,R.useMergedRef)(eZ,eh?.viewportRef);(0,u.useAutoScrollOnDrag)({viewportRef:eZ,enabled:(eS||!!eI)&&"static"!==eO}),(0,B.useIsomorphicEffect)(()=>{if(!eH||!eZ.current||0===eJ.current.length)return;let e=eK.findIndex(e=>e.startTime>=eH);if(e<0)return;let t=eJ.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=eZ.current.getBoundingClientRect();eZ.current.scrollTo({left:0,top:a.top-n.top})},[]);let eX=(0,W.useCallback)(e=>{let t=eJ.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=eJ.current[0],n=eJ.current[eJ.current.length-1];if(!a||!n)return null;let r=a.getBoundingClientRect(),o=n.getBoundingClientRect();return e.clientY<r.top?0:e.clientY>o.bottom?eJ.current.length-1:null},[]),e0=(0,m.useSlotDragSelect)({enabled:eT&&"static"!==eO,onDragEnd:(e,t)=>{if(!e$)return;let a=(0,Y.default)(X).format("YYYY-MM-DD");e$(`${a} ${eK[e].startTime}`,`${a} ${eK[t].endTime}`)}}),e1=function({events:e,date:t,startTime:a,endTime:n}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let r=new Set,o=[],l=[],d=(0,Y.default)(t).startOf("day"),s=(0,Y.default)(t).endOf("day");for(let t of e){let e=(0,Y.default)(t.start),i=(0,Y.default)(t.end),u=e.isSame(d,"day"),c=!u&&"background"===t.display&&e.isBefore(s)&&i.isAfter(d);if(u||c){if(u&&!(0,w.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,y.validateEvent)(t);if(r.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);r.add(t.id),"background"===t.display?l.push(e):o.push(e)}}let u=function({events:e,startTime:t,endTime:a,date:n}){let r=[],o=[];for(let l of(0,b.sortEvents)(e)){let e=(0,i.isAllDayEvent)({event:l,date:n}),d=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,date:r}){return!!e[t]&&e[t].some(e=>{let t=(0,i.isAllDayEvent)({event:e,date:r}),o=(0,S.isEventsOverlap)(e,a);return!n&&!t&&o})}({columns:r,columnIndex:d,event:l,allDay:e,date:n});)d++;r[d]||(r[d]=[]),r[d].push(l);let s=e?{top:0,height:100}:(0,x.getDayPosition)({event:l,startTime:t,endTime:a});o.push({...l,position:{...s,allDay:e,column:d,width:0,offset:0,overlaps:0}})}for(let e of o){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let n=[];for(let t of o)t!==e&&!t.position.allDay&&(0,S.isEventsOverlap)(t,e)&&n.push(t);let r=a;for(let e of n)for(let t of(r=Math.max(r,e.position.column),o))t!==e&&!t.position.allDay&&(0,S.isEventsOverlap)(t,e)&&(r=Math.max(r,t.position.column));let i=r+1,l=i;for(let e of n)e.position.column>a&&e.position.column<l&&(l=e.position.column);let d=l-a;e.position.overlaps=i,e.position.width=d/i*100,e.position.offset=100*a/i}return o}({events:o,startTime:a,endTime:n,date:t}),c=[],f=[];for(let e of u)e.position.allDay?c.push(e):f.push(e);let m=[],v=[];for(let e of l){let r=(0,Y.default)(e.start),o=(0,Y.default)(e.end),l=r.isBefore(d)?d:r,u=o.isAfter(s)?s:o,c={...e,start:l.format("YYYY-MM-DD HH:mm:ss"),end:u.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:c,date:t}))v.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:r}=(0,x.getDayPosition)({event:c,startTime:a,endTime:n});if(r<=0)continue;m.push({...e,position:{top:t,height:r,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:c,regularEvents:f,backgroundTimedEvents:m,backgroundAllDayEvents:v}}({events:(0,s.expandRecurringEvents)({events:eD,rangeStart:(0,Y.default)(X).startOf("day").toDate(),rangeEnd:(0,Y.default)(X).endOf("day").toDate(),expansionLimit:eW}),date:X,startTime:J,endTime:Z}),e2=(0,W.useCallback)((e,t)=>{if(!eI)return;let a=(0,Y.default)(X).format("YYYY-MM-DD");eI(e.dataTransfer,`${a} ${eK[t].startTime}`)},[eI,X,eK]),e8=(0,c.useDragDropHandlers)({enabled:eS,mode:eO,onEventDrop:eY,canDragEvent:eM,onEventDragStart:eE,onEventDragEnd:ek,calculateDropTarget:(e,t)=>{let a=eK[e].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:X,targetSlotTime:a,intervalMinutes:Q})},onExternalDrop:eI?e2:void 0}),e4=(0,f.useEventResize)({enabled:eA,mode:eO,startTime:J,endTime:Z,intervalMinutes:Q,onEventResize:eB,canResizeEvent:eR}),e3=(eS||!!eI)&&"static"!==eO,e6=e1.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:X}),a=!t&&e8.isDraggableEvent(e),n=!t&&e4.isResizableEvent(e),r=e4.getResizePosition(e.id),o=r?r.top:e.position.top,l=r?r.height:e.position.height;return(0,L.jsx)(D.ScheduleEvent,{event:e,renderEventBody:ep,renderEvent:ey,autoSize:!0,draggable:a,withResize:n,isResizing:null!==r,onResizeStart:n?(t,a)=>{eQ.current&&e4.handleResizeStart({event:e,edge:t,container:eQ.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,Y.default)(X).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eO,onClick:ej?t=>{e4.wasResizing()||ej(e,t)}:void 0,...eF,style:{...eF.styles?.event,top:`${o}%`,height:`${l}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),e9=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e1.allDayEvents.length}),e7=e1.allDayEvents.slice(0,e9.visibleEventsCount).map(e=>(0,L.jsx)(D.ScheduleEvent,{event:e,renderEventBody:ep,renderEvent:ey,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eO,onClick:ej?t=>ej(e,t):void 0,...eF},e.id)),e5=(0,Y.default)(X).format("YYYY-MM-DD"),te=eK.map((e,a)=>{let r=e8.isDropTarget(a),o=e0.isSlotSelected(a,e5),i=`${e5} ${e.startTime}`,l=`${e5} ${e.endTime}`,{onClick:s,...u}=e_?.({start:i,end:l})||{},c="static"===eO?void 0:e=>{eV?.({slotStart:i,slotEnd:l,nativeEvent:e}),s?.(e)};return(0,W.createElement)(V.UnstyledButton,{...ez("dayViewSlot"),key:e.startTime,ref:e=>{eJ.current[a]=e},mod:{"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:eb,highlightBusinessHours:ex}),"drop-target":r,"drag-selected":o,static:"static"===eO},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(Q)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eO?-1:0===a?0:-1,"data-drag-slot-index":eT&&"static"!==eO?a:void 0,"data-drag-slot-group":eT&&"static"!==eO?e5:void 0,onKeyDown:"static"===eO?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<eK.length-1?(e.preventDefault(),eJ.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),eJ.current[a-1]?.focus())},onPointerDown:eT&&"static"!==eO?e=>e0.handleSlotPointerDown(e,a,e5):void 0,onClick:c,onDragOver:e3?e=>e.preventDefault():void 0,...u})}),tt=eK.reduce((e,t)=>{if(t.isHourStart){let n=(0,Y.default)(`${(0,Y.default)(X).format("YYYY-MM-DD")} ${t.startTime}`),r=(0,a.formatDate)({locale:eU.getLocale(ee),date:n,format:et});e.push((0,W.createElement)(E.Box,{...ez("dayViewSlotLabel"),key:t.startTime,mod:(0,d.getBusinessHoursMod)({time:t.startTime,businessHours:eb,highlightBusinessHours:ex})},r))}return e},[]),ta=e1.backgroundAllDayEvents.map(e=>{let t=eG.variantColorResolver({color:e.color||eG.primaryColor,theme:eG,variant:"light",autoContrast:!0}),a="function"==typeof ep?ep(e):e.title,n={key:`bg-allday-${e.id}`,...ez("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ey)return ey(e,n);let{key:r,...o}=n;return(0,L.jsx)(E.Box,{...o},r)}),tn=e1.backgroundTimedEvents.map(e=>{let t=eG.variantColorResolver({color:e.color||eG.primaryColor,theme:eG,variant:"light",autoContrast:!0}),a="function"==typeof ep?ep(e):e.title,n={key:e.id,...ez("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ey)return ey(e,n);let{key:r,...o}=n;return(0,L.jsx)(E.Box,{...o},r)}),tr=(0,L.jsxs)(E.Box,{...ez("dayView"),mod:{static:"static"===eO,"slot-dragging":e0.isDragging},...eL,children:[eo&&(0,L.jsx)(p.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,Y.default)(X).subtract(1,"day")),next:()=>(0,o.toDateString)((0,Y.default)(X).add(1,"day")),today:()=>(0,o.toDateString)((0,Y.default)())},control:{title:(0,a.formatDate)({locale:eU.getLocale(ee),date:X,format:ea}),miw:140},labels:ew,onDateChange:el,onViewChange:ed,previousControlProps:es,nextControlProps:eu,todayControlProps:ec,viewSelectProps:ef,stylesApiProps:eF}),(0,L.jsx)(k.ScrollArea.Autosize,{scrollbarSize:4,...eh,...ez("dayViewScrollArea",{className:eh?.className,style:eh?.style}),viewportRef:eq,children:(0,L.jsxs)(E.Box,{...ez("dayViewInner"),children:[(0,L.jsxs)("div",{...ez("dayViewSlotLabels"),children:[q&&(0,L.jsx)(E.Box,{...ez("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",ew)}),tt]}),(0,L.jsxs)("div",{...ez("dayViewSlots"),children:[q&&(0,L.jsxs)("div",{...ez("dayViewAllDay"),children:[ta,(0,L.jsxs)("div",{...ez("dayViewAllDayEvents"),children:[e7,e9.hiddenEventsCount>0&&(0,L.jsx)(g.MoreEvents,{events:e1.allDayEvents,moreEventsCount:e9.hiddenEventsCount,renderEventBody:ep,mode:eO,...eF,...eg})]}),(0,L.jsx)(V.UnstyledButton,{...ez("dayViewSlot"),mod:{"all-day":!0,static:"static"===eO},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${(0,t.getLabel)("allDay",ew)}`,onClick:"static"!==eO&&eC?e=>{eC((0,Y.default)(X).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:eQ,...ez("dayViewTimeSlots"),onDragOver:e3?e=>{let t=eX(e);null!==t&&e8.handleDragOver(e,t)}:void 0,onDragLeave:e3?e8.handleDragLeave:void 0,onDrop:e3?e=>{let t=eX(e);null!==t&&e8.handleDrop(e,t)}:void 0,children:[tn,e6,en&&(0,L.jsx)(v.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:et,withTimeBubble:er,withThumb:!er,locale:ee,startTime:J,endTime:Z,...eF}),te]})]})]})})]});return eS?(0,L.jsx)(h.DragContext.Provider,{value:e8.dragContextValue,children:tr}):tr});P.displayName="@mantine/schedule/DayView",P.classes=M,P.varsResolver=N,e.s(["DayView",0,P],200183)},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:r=1}){let o=(0,a.default)().day(r),i=[];for(let a=0;a<7;a+=1)i.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:n}));return i}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:r}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),i=o.format("YYYY-MM-DD"),l=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let r=0===t?6:t-1;for(;n.day()!==r;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),d=[],s=(0,a.default)((0,t.getStartOfWeek)({date:i,firstDayOfWeek:n}));for(;(0,a.default)(s).isBefore(l,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(s.format("YYYY-MM-DD 00:00:00")),s=s.add(1,"day");d.push(e)}if(r&&d.length<6){let e=d[d.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;d.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");d.push(e)}}return d}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:r,size:o}){let i=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===r-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:r,size:o});if(!i)return;let l=t.current?.[i.weekIndex]?.[i.dayIndex];l&&(l.disabled||l.getAttribute("data-hidden")||l.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:o}):l.focus())}({controlsRef:e,direction:r,weekIndex:t,dayIndex:a,size:o})}}])},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(621304),r=e.i(855578),o=e.i(605520),i=e.i(753381),l=e.i(4332),d=e.i(813982),s=e.i(657068),u=e.i(647170),c=e.i(298008),f=e.i(898770),m=e.i(494834),v={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},h=e.i(462138),D=e.i(232471),g=e.i(883364),p=e.i(284629),y=e.i(481178),w=e.i(275519),x=e.i(433512),b=e.i(317477),S=e.i(323283),Y=e.i(951254),M=e.i(44091),E=e.i(391466),k=e.i(579560),V=e.i(191788),C=e.i(205693),j=e.i(391398);let T={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},$=(0,y.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,x.getRadius)(t)}})),O=(0,w.factory)(e=>{let y=(0,M.useProps)("MobileMonthView",T,e),{classNames:w,className:x,style:O,styles:H,unstyled:I,vars:A,attributes:B,__staticSelector:R,date:W,onDateChange:_,selectedDate:L,defaultSelectedDate:z,onSelectedDateChange:N,withWeekNumbers:P,withWeekDays:F,locale:G,firstDayOfWeek:U,weekdayFormat:K,weekendDays:J,getWeekNumberProps:Z,getDayProps:Q,onDayClick:q,onWeekNumberClick:X,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:en,events:er,labels:eo,mode:ei,renderEvent:el,eventsHeaderFormat:ed,onYearClick:es,onEventClick:eu,renderHeader:ec,recurrenceExpansionLimit:ef,...em}=y,ev=(0,C.useDatesContext)(),eh=(0,Y.useMantineTheme)(),eD=(0,m.default)(),[eg,ep]=(0,k.useUncontrolled)({value:L,defaultValue:z??(0,l.toDateString)(eD),onChange:e=>N?.(e?(0,l.toDateString)((0,m.default)(e)):null)}),ey=(0,E.useStyles)({name:R,classes:v,props:y,className:x,style:O,classNames:w,styles:H,unstyled:I,attributes:B,vars:A,varsResolver:$,rootSelector:"mobileMonthView"}),ew=(0,V.useRef)([]),ex=(0,V.useRef)(null),eb=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let r of t)if("background"!==r.display&&(0,m.default)(r.start).isSame((0,m.default)(e),"month")){if(!function(e,t){if((0,f.isMultidayEvent)(e)){let a=(0,m.default)(e.start).startOf("day"),n=(0,m.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,m.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,c.validateEvent)(r),a),n.has(r.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${r.id}`);n.add(r.id)}return a}({date:W,events:(0,s.expandRecurringEvents)({events:er,rangeStart:(0,m.default)(W).startOf("month").toDate(),rangeEnd:(0,m.default)(W).endOf("month").toDate(),expansionLimit:ef})}),eS=F?(0,n.getWeekdaysNames)({locale:ev.getLocale(G),format:K,firstDayOfWeek:ev.getFirstDayOfWeek(U)}).map((e,t)=>(0,V.createElement)("div",{...ey("mobileMonthViewWeekday"),key:t},e)):null,eY=(0,o.getMonthDays)({month:(0,m.default)(W).format("YYYY-MM-DD"),firstDayOfWeek:ev.getFirstDayOfWeek(U),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let n=!(0,i.isSameMonth)(e,W),r=ev.getWeekendDays(J).includes((0,m.default)(e).day()),o=(0,m.default)(e).locale(G||ev.locale).format("MMMM D, YYYY"),l=Q?.((0,m.default)(e).format("YYYY-MM-DD"))||{},d=(0,m.default)(e).isSame(eD,"day")&&et,s=eg&&(0,m.default)(e).isSame((0,m.default)(eg),"day"),c=eb[(0,m.default)(e).format("YYYY-MM-DD")]||[],f=en||!n;f&&null===ex.current&&(ex.current={weekIndex:t,dayIndex:a});let v=ex.current?.weekIndex===t&&ex.current?.dayIndex===a,h=c.slice(0,3).map(e=>(0,V.createElement)("div",{...ey("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,b.getThemeColor)(e.color,eh)}}),key:e.id}));return(0,V.createElement)(p.UnstyledButton,{"aria-label":o,"aria-selected":s||void 0,...l,...ey("mobileMonthViewDay",{className:l.className,style:l.style}),key:e,ref:e=>{e&&(ew.current[t]||(ew.current[t]=[]),ew.current[t][a]=e)},mod:[{outside:n,weekend:r,today:d,selected:s,static:"static"===ei,hidden:!f},l.mod],tabIndex:"static"!==ei&&f&&v?0:-1,onClick:"static"!==ei&&f?t=>{let a=(0,m.default)(e).format("YYYY-MM-DD");ep(a),q?.(a,t),l.onClick?.(t)}:void 0,onKeyDown:"static"!==ei&&f?e=>{(0,u.handleMonthViewKeyDown)({controlsRef:ew,weekIndex:t,dayIndex:a,event:e})}:void 0},f?(0,m.default)(e).format("D"):null,f&&(0,j.jsx)("div",{...ey("mobileMonthViewDayIndicators"),children:h}))}),n=Z?.((0,m.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,r.getWeekNumber)(e);return(0,V.createElement)("div",{...ey("mobileMonthViewWeek"),key:t},P&&(0,j.jsx)(p.UnstyledButton,{"aria-label":`Week ${o}`,...n,onClick:"static"===ei?void 0:t=>{X?.((0,m.default)(e[0]).format("YYYY-MM-DD"),t),n.onClick?.(t)},mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,...ey("mobileMonthViewWeekNumber",{className:n.className,style:n.style}),children:o},o),a)}),eM=(eg?(0,d.sortEvents)(eb[(0,m.default)(eg).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,m.default)(e.start).format("HH:mm"),a=(0,m.default)(e.end).format("HH:mm"),n=(0,j.jsxs)(D.Box,{...ey("mobileMonthViewEventBody"),children:[(0,j.jsx)("div",{...ey("mobileMonthViewEventColor",{style:{backgroundColor:(0,b.getThemeColor)(e.color,eh)}})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(g.Text,{...ey("mobileMonthViewEventTitle"),children:e.title}),(0,j.jsx)(g.Text,{...ey("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),r={...ey("mobileMonthViewEvent"),onClick:"static"===ei?void 0:t=>{eu?.(e,t)},tabIndex:"static"===ei?-1:0,children:n};return"function"==typeof el?(0,j.jsx)(V.default.Fragment,{children:el(e,r)},e.id):(0,V.createElement)(p.UnstyledButton,{...r,key:e.id})}),eE=eg?(0,a.formatDate)({locale:ev.getLocale(G),date:eg,format:ed}):"",{dir:ek}=(0,S.useDirection)(),eV=(0,a.formatDate)({locale:ev.getLocale(G),date:W,format:"MMMM YYYY"}),eC=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(p.UnstyledButton,{...ey("mobileMonthViewHeaderBackButton"),onClick:es,mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,children:[(0,j.jsx)(h.AccordionChevron,{style:{transform:`rotate(${"rtl"===ek?-90:90}deg)`},size:20}),(0,m.default)(W).format("YYYY")]}),(0,j.jsx)(g.Text,{...ey("mobileMonthViewHeaderLabel"),children:eV})]});return(0,j.jsxs)(D.Box,{...ey("mobileMonthView"),mod:{"with-week-numbers":P},...em,children:[(0,j.jsx)("div",{...ey("mobileMonthViewHeader"),children:"function"==typeof ec?ec({mode:ei,date:W,defaultHeader:eC}):eC}),(0,j.jsxs)(D.Box,{...ey("mobileMonthViewCalendar"),mod:{"with-weekdays":F},children:[eS&&(0,j.jsxs)("div",{...ey("mobileMonthViewWeekdays"),children:[P&&(0,j.jsx)("div",{...ey("mobileMonthViewWeekdaysCorner")}),eS]}),eY]}),(0,j.jsxs)(D.Box,{...ey("mobileMonthViewEventsList"),children:[(0,j.jsx)(g.Text,{...ey("mobileMonthViewEventsHeader"),children:eE}),eM.length>0?eM:(0,j.jsx)(g.Text,{...ey("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});O.displayName="@mantine/schedule/MobileMonthView",O.classes=v,O.varsResolver=$,e.s(["MobileMonthView",0,O],433396)},238715,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
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
`;var l=e.i(391398),d=e.i(200183),s=e.i(433396),u=e.i(168574),c=e.i(315401),f=e.i(122308),m={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},v=e.i(232471),h=e.i(275519),D=e.i(44091),g=e.i(391466),p=e.i(579560);let y={defaultView:"week",mode:"default",layout:"default"},w=(0,h.factory)(e=>{let t=(0,D.useProps)("Schedule",y,e),{classNames:a,className:n,style:r,styles:o,unstyled:i,vars:h,date:w,defaultDate:x,onDateChange:b,view:S,defaultView:Y,onViewChange:M,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:T,onEventDrop:$,canDragEvent:O,onEventDragStart:H,onEventDragEnd:I,onTimeSlotClick:A,onAllDaySlotClick:B,onDayClick:R,onEventClick:W,withDragSlotSelect:_,onSlotDragEnd:L,onExternalEventDrop:z,withEventResize:N,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U,layout:K,dayViewProps:J,weekViewProps:Z,monthViewProps:Q,yearViewProps:q,mobileMonthViewProps:X,__staticSelector:ee,mod:et,...ea}=t,en=(0,g.useStyles)({name:ee||"Schedule",classes:m,props:t,className:n,style:r,classNames:a,styles:o,unstyled:i,vars:h}),[er,eo]=(0,p.useUncontrolled)({value:S,defaultValue:Y,onChange:M}),[ei,el]=(0,p.useUncontrolled)({value:w,defaultValue:x??new Date}),ed=e=>{el(e),b?.(e)},es=e=>{eo(e),M?.(e)},eu=e=>{ed(e),es("month")},ec={date:ei,onDateChange:ed,view:er,onViewChange:es,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:"static"!==U&&T,onEventDrop:$,canDragEvent:O,onEventDragStart:H,onEventDragEnd:I,onTimeSlotClick:A,onAllDaySlotClick:B,onDayClick:R,onEventClick:W,withDragSlotSelect:_,onSlotDragEnd:L,onExternalEventDrop:z,withEventResize:"static"!==U&&N,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U},ef=(()=>{switch(er){case"day":return(0,l.jsx)(d.DayView,{...ec,...J});case"week":return(0,l.jsx)(c.WeekView,{...ec,...Z});case"month":return(0,l.jsx)(u.MonthView,{...ec,...Q});case"year":return(0,l.jsx)(f.YearView,{...ec,onMonthClick:eu,...q});default:return null}})(),em=(()=>{switch(er){case"day":case"week":case"month":return(0,l.jsx)(s.MobileMonthView,{date:ei,onDateChange:ed,events:E,locale:k,radius:V,labels:C,mode:U,recurrenceExpansionLimit:G,onYearClick:()=>es("year"),onEventClick:W,...X});case"year":return(0,l.jsx)(f.YearView,{...ec,onMonthClick:eu,...q});default:return null}})();return"responsive"===K?(0,l.jsxs)(v.Box,{...en("root"),mod:[{layout:K},et],...ea,children:[(0,l.jsx)(v.Box,{...en("desktopView"),children:ef}),(0,l.jsx)(v.Box,{...en("mobileView"),children:em})]}):(0,l.jsx)(v.Box,{...en("root"),mod:et,...ea,children:ef})});w.displayName="@mantine/schedule/Schedule",w.classes=m;let x={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(w,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var b=e.i(191788);let S=(0,a.default)().format("YYYY-MM-DD"),Y=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),M=[{id:1,title:"Morning Standup",start:`${S} 09:00:00`,end:`${S} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${S} 10:00:00`,end:`${S} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${S} 12:00:00`,end:`${S} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${Y} 14:00:00`,end:`${Y} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${Y} 15:30:00`,end:`${Y} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${S} 00:00:00`,end:(0,a.default)(S).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)(M);return(0,l.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var k=e.i(883364);let V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)("week"),[a,n]=(0,b.useState)(new Date);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(k.Text,{size:"sm",mb:"md",children:["Current view: ",(0,l.jsx)("b",{children:e})]}),(0,l.jsx)(w,{view:e,onViewChange:t,date:a,onDateChange:e=>n(new Date(e)),events:o})]})},code:`
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
`},j={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(w,{events:o,defaultView:"month"})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
`},T={defaultExpanded:!1,type:"code",component:function(){return(0,l.jsx)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,l.jsx)(w,{events:o,layout:"responsive"})})},code:`
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
`};var $=e.i(162077),O=e.i(37930),H=e.i(658109),I=e.i(725695);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)(o),[n,r]=(0,b.useState)(!1),[i,d]=(0,b.useState)(null),s=(0,b.useRef)((0,a.default)().format("YYYY-MM-DD")),u=()=>{let e=s.current;d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)};return(0,l.jsxs)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,l.jsx)(w,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onAllDaySlotClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),r(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(s.current=e)},renderHeader:({defaultHeader:e})=>(0,l.jsxs)(I.Group,{justify:"space-between",w:"100%",children:[(0,l.jsx)(I.Group,{justify:"space-between",flex:"1",children:e}),(0,l.jsx)(H.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:u,"aria-label":"Create new event",children:(0,l.jsx)(O.PlusIcon,{size:18})})]})}}),(0,l.jsx)($.EventForm,{opened:n,onClose:()=>r(!1),onExitTransitionEnd:()=>d(null),values:i,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:i?.id?()=>{i?.id&&t(e=>e.filter(e=>e.id!==i.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:$._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:i,language:"tsx",fileName:"events.ts"}]};var B=e.i(20035);let R=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)([]),n=(0,b.useRef)(1);return(0,l.jsxs)(B.Grid,{children:[(0,l.jsxs)(B.Grid.Col,{span:{base:12,sm:3},children:[(0,l.jsx)(k.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),R.map(e=>(0,l.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,l.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(r),d=l.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:d.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},_=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)(_),[n,r]=(0,b.useState)([]),[o,i]=(0,b.useState)(!1),d=(0,b.useRef)(1);return(0,l.jsxs)(B.Grid,{children:[(0,l.jsx)(B.Grid.Col,{span:{base:12,sm:3},children:(0,l.jsxs)(v.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:l}=JSON.parse(o),d=n.find(e=>String(e.id)===String(l));if(!d)return;let s=(0,a.default)(d.end).diff((0,a.default)(d.start),"minutes");t(e=>[...e,{title:d.title,duration:s,color:d.color||"blue"}]),r(e=>e.filter(e=>e.id!==d.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,l.jsx)(k.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,l.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,l.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,l.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,l.jsx)(k.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,l.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,l.jsx)(w,{events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),l=(0,a.default)(n),s=l.add(i.duration,"minutes");r(e=>[...e,{id:d.current++,title:i.title,start:l.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},z=(0,a.default)().format("YYYY-MM-DD"),N=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${z} 09:00:00`,end:`${z} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${z} 10:00:00`,end:`${z} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${z} 12:00:00`,end:`${z} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${N} 14:00:00`,end:`${N} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${N} 15:30:00`,end:`${N} 16:30:00`,color:"cyan"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)(P),a=({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))};return(0,l.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:a,withEventResize:!0,onEventResize:a})},code:`
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
`},G=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)("2024-01-15");return(0,l.jsx)(w,{view:"week",date:e,onDateChange:t,events:G})},code:`
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
`},K=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"lunch-block",title:"Lunch break",start:`${K} 12:00:00`,end:`${K} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${K} 14:00:00`,end:`${K} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${K} 10:00:00`,end:`${K} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${K} 14:30:00`,end:`${K} 15:30:00`,color:"green"}],Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)(K);return(0,l.jsx)(w,{date:e,onDateChange:t,events:J})},code:`
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
`};var Q=e.i(428127),q=e.i(441058);let X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,b.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,b.useState)("week"),i=function(e,t){let n=(0,a.default)(e);switch(t){case"day":return{previous:n.subtract(1,"day"),next:n.add(1,"day")};case"week":return{previous:n.subtract(1,"week"),next:n.add(1,"week")};case"month":return{previous:n.subtract(1,"month").startOf("month"),next:n.add(1,"month").startOf("month")};case"year":return{previous:n.subtract(1,"year").startOf("year"),next:n.add(1,"year").startOf("year")};default:return{previous:n,next:n}}}(e,n);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(Q.ScheduleHeader,{children:[(0,l.jsx)(Q.ScheduleHeader.Previous,{onClick:()=>t(i.previous.format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let n=(0,a.default)(e);switch(t){case"day":return n.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,q.getStartOfWeek)({date:e,firstDayOfWeek:1})),n=t.add(6,"day");if(t.month()===n.month())return`${t.format("MMM D")} – ${n.format("D, YYYY")}`;return`${t.format("MMM D")} – ${n.format("MMM D, YYYY")}`}case"month":return n.format("MMMM YYYY");case"year":return n.format("YYYY");default:return""}}(e,n)}),(0,l.jsx)(Q.ScheduleHeader.Next,{onClick:()=>t(i.next.format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,l.jsx)(Q.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,l.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,l.jsx)(Q.ScheduleHeader.ViewSelect,{value:n,onChange:r})})]}),(0,l.jsx)(w,{date:e,onDateChange:t,view:n,onViewChange:r,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
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
`};var ee=(0,t.__exportAll)({backgroundEvents:()=>Z,bidirectionalDragDrop:()=>L,controlled:()=>V,customHeader:()=>X,defaultView:()=>j,dragDrop:()=>E,eventForm:()=>A,eventResize:()=>F,externalDragDrop:()=>W,recurringEvents:()=>U,responsiveLayout:()=>T,usage:()=>x,viewProps:()=>C});e.s(["ScheduleDemos",0,ee],238715)}]);