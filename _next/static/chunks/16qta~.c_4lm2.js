(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:o=1}){let r=(0,a.default)().day(o),d=[];for(let a=0;a<7;a+=1)d.push((0,t.formatDate)({locale:e,date:r.add(a,"days"),format:n}));return d}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:o}){let r=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),d=r.format("YYYY-MM-DD"),s=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let o=0===t?6:t-1;for(;n.day()!==o;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(r.add(r.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),i=[],l=(0,a.default)((0,t.getStartOfWeek)({date:d,firstDayOfWeek:n}));for(;(0,a.default)(l).isBefore(s,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(l.format("YYYY-MM-DD 00:00:00")),l=l.add(1,"day");i.push(e)}if(o&&i.length<6){let e=i[i.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;i.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");i.push(e)}}return i}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(o){n.preventDefault();let r=e.current?e.current.map(e=>e?e.length:0):null;if(!r)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:o,size:r}){let d=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let o=n[t];if(!o)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===o-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:o,size:r});if(!d)return;let s=t.current?.[d.weekIndex]?.[d.dayIndex];s&&(s.disabled||s.getAttribute("data-hidden")||s.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:d.weekIndex,dayIndex:d.dayIndex,size:r}):s.focus())}({controlsRef:e,direction:o,weekIndex:t,dayIndex:a,size:r})}}])},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},o=e.i(424302),r=e.i(392862),d=e.i(284629),s=e.i(275519),i=e.i(44091),l=e.i(391466),m=e.i(541772),c=e.i(391398);let u={dropdownType:"popover"},f=(0,s.factory)(e=>{let s=(0,i.useProps)("MoreEvents",u,e),{classNames:f,className:D,style:h,styles:v,unstyled:p,vars:Y,attributes:y,radius:g,dropdownType:M,events:w,moreEventsCount:x,popoverProps:S,modalProps:E,onDropdownClose:b,children:j,modalTitle:k,renderEventBody:O,id:V,labels:C,mode:H,...$}=s,[I,T]=(0,m.useDisclosure)(),N=(0,l.useStyles)({name:"MoreEvents",classes:n,props:s,className:D,style:h,classNames:f,styles:v,unstyled:p,attributes:y,vars:Y,rootSelector:"moreEventsButton"}),B=()=>{T.close(),b?.()},W=(0,c.jsx)("div",{...N("moreEventsList"),children:w.map(e=>(0,c.jsx)(a.ScheduleEvent,{radius:g,event:e,size:"md",renderEventBody:O,mode:H,children:e.title},e.id))});return(0,c.jsxs)(c.Fragment,{children:["modal"===M&&(0,c.jsx)(o.Modal,{opened:I,onClose:B,unstyled:p,radius:g,title:k,...E,children:W}),(0,c.jsxs)(r.Popover,{position:"bottom-start",width:260,opened:I,trapFocus:!0,returnFocus:!1,unstyled:p,disabled:S?.disabled||"modal"===M,radius:g,transitionProps:{transition:"pop",duration:120},offset:-46,id:V,...S,onChange:e=>{e||(S?.onChange?.(e),B())},children:[(0,c.jsx)(r.Popover.Target,{children:(0,c.jsx)(d.UnstyledButton,{...N("moreEventsButton"),mod:{static:"static"===H},onClick:()=>T.toggle(),...$,children:(0,t.getLabel)("moreLabel",C)(x)})}),(0,c.jsx)(r.Popover.Dropdown,{...N("moreEventsDropdown"),children:W})]})]})});f.displayName="@mantine/schedule/MoreEvents",f.classes=n,e.s(["MoreEvents",0,f],67312)},168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),n=e.i(605520),o=e.i(753381),r=e.i(4332),d=e.i(494834);function s({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:o}){if(!t)return{start:(0,r.toDateString)((0,d.default)(e).startOf("month")),end:(0,r.toDateString)((0,d.default)(e).endOf("month"))};let i=(0,n.getMonthDays)({month:e,firstDayOfWeek:o,consistentWeeks:a});return{start:i[0][0],end:i[i.length-1][6]}}var i=e.i(657068),l=e.i(783261),m=e.i(376879),c=e.i(201867),u=e.i(891343),f=e.i(67312),D=e.i(966696),h=e.i(647170),v=e.i(298008),p=e.i(441058),Y={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},y=e.i(232471),g=e.i(19300),M=e.i(284629),w=e.i(481178),x=e.i(275519),S=e.i(433512),E=e.i(951254),b=e.i(44091),j=e.i(62904),k=e.i(391466),O=e.i(191788),V=e.i(205693),C=e.i(391398);let H=(0,w.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,S.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),$={__staticSelector:"MonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},I=(0,x.factory)(e=>{let w=(0,b.useProps)("MonthView",$,e),{classNames:x,className:S,style:I,styles:T,unstyled:N,attributes:B,vars:W,mod:A,date:R,onDateChange:P,withWeekNumbers:F,withWeekDays:_,locale:G,weekdayFormat:L,firstDayOfWeek:U,weekendDays:z,__staticSelector:J,getDayProps:K,getWeekNumberProps:Q,onDayClick:q,onWeekNumberClick:Z,consistentWeeks:X,highlightToday:ee,radius:et,withOutsideDays:ea,withHeader:en,monthYearSelectProps:eo,onViewChange:er,todayControlProps:ed,nextControlProps:es,previousControlProps:ei,viewSelectProps:el,events:em,moreEventsProps:ec,renderEventBody:eu,renderEvent:ef,withEventsDragAndDrop:eD,onEventDrop:eh,canDragEvent:ev,onEventDragStart:ep,onEventDragEnd:eY,onEventClick:ey,withDragSlotSelect:eg,onSlotDragEnd:eM,labels:ew,mode:ex,scrollAreaProps:eS,onExternalEventDrop:eE,recurrenceExpansionLimit:eb,maxEventsPerDay:ej,...ek}=w,eO=Math.min(10,Math.max(1,ej??2)),eV=(0,k.useStyles)({name:J,classes:Y,props:w,className:S,style:I,classNames:x,styles:T,unstyled:N,attributes:B,vars:W,varsResolver:H,rootSelector:"monthView"}),{resolvedClassNames:eC,resolvedStyles:eH}=(0,j.useResolvedStylesApi)({classNames:x,styles:T,props:w}),e$=(0,E.useMantineTheme)(),eI=(0,V.useDatesContext)(),eT=s({month:R,withOutsideDays:ea,consistentWeeks:X,firstDayOfWeek:eI.getFirstDayOfWeek(U)}),eN=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:n,consistentWeeks:o}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let r=new Set,i=[],l=s({month:e,withOutsideDays:n,consistentWeeks:o,firstDayOfWeek:a});for(let e of t)if((0,d.default)(e.end).isAfter(l.start,"day")||(0,d.default)(e.start).isBefore(l.end,"day")){if(i.push((0,v.validateEvent)(e)),r.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);r.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:n}){let o={},r={},s=new Set,{weeks:i,groupedByDay:l}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let n=[],o={},r=(0,d.default)((0,p.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;r.isBefore(t)||r.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=r.format("YYYY-MM-DD 00:00:00");e.push(t),o[t]||(o[t]=[]),r=r.add(1,"day")}n.push(e)}return{weeks:n,groupedByDay:o}}({rangeStart:n?(0,d.default)(n.start):(0,d.default)(e).startOf("month"),rangeEnd:n?(0,d.default)(n.end):(0,d.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<i.length;e++)o[e.toString()]=[],r[e.toString()]=[];for(let e of t){let t=(0,d.default)(e.start).startOf("day"),a=(0,d.default)(e.end),n=0===a.hour()&&0===a.minute()&&0===a.second()?a.startOf("day").subtract(1,"day"):a.startOf("day"),m=n.isAfter(t);for(let a=0;a<i.length;a++){let c=i[a],u=(0,d.default)(c[0]).startOf("day"),f=(0,d.default)(c[6]).endOf("day");if((t.isBefore(f)||t.isSame(f,"day"))&&(n.isAfter(u)||n.isSame(u,"day"))){let{startDayIndex:i,daysSpanned:c,startOffset:D,width:h,hanging:v}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:n,isMultiday:o}){let r=e,d=t,s=e.isBefore(a),i=t.isAfter(n);r.isBefore(a)&&(r=a),d.isAfter(n)&&(d=n);let l=r.diff(a,"day"),m=Math.max(1,d.diff(a,"day")-l+ +!!o);return{startDayIndex:l,daysSpanned:m,startOffset:l/7*100,width:m/7*100,hanging:s&&i?"both":s?"start":i?"end":"none"}}({eventStart:t,eventEnd:n,weekStart:u,weekEnd:f,isMultiday:m});if("background"===e.display){r[a.toString()].push({...e,position:{startOffset:D,width:h,weekIndex:a,row:0,hanging:v}});continue}let p=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:n}){let o=0;for(let r of e){let e=(0,d.default)(r.start).startOf("day"),s=(e.isBefore(n)||e.isSame(n,"day")?n:e).diff(n,"day");s+(r.position?.width||0)/100*7>t&&s<t+a&&(o=Math.max(o,(r.position?.row||0)+1))}return o}({existingEvents:o[a.toString()],startDayIndex:i,daysSpanned:c,weekStart:u}),Y={...e,position:{startOffset:D,width:h,weekIndex:a,row:p,hanging:v}};o[a.toString()].push(Y),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:n,eventsAddedToDay:o,weekIdx:r}){if(0===r||!o.has(e.id.toString())){let r=t;for(;r.isBefore(a)||r.isSame(a,"day");){let t=r.format("YYYY-MM-DD 00:00:00");n[t]&&n[t].push(e),r=r.add(1,"day")}o.add(e.id.toString())}}({positionedEvent:Y,eventStart:t,eventEnd:n,groupedByDay:l,eventsAddedToDay:s,weekIdx:a})}}}return{groupedByWeek:o,groupedByDay:l,backgroundByWeek:r}}({date:e,events:i,firstDayOfWeek:a,range:l})}({date:R,events:(0,i.expandRecurringEvents)({events:em,rangeStart:(0,d.default)(eT.start).startOf("day").toDate(),rangeEnd:(0,d.default)(eT.end).endOf("day").toDate(),expansionLimit:eb}),firstDayOfWeek:eI.getFirstDayOfWeek(U),withOutsideDays:ea,consistentWeeks:X}),eB=(0,O.useCallback)((e,t)=>{eE&&eE(e.dataTransfer,`${(0,d.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eE]),eW=(0,l.useDragDropHandlers)({enabled:eD,mode:ex,onEventDrop:eh,canDragEvent:ev,onEventDragStart:ep,onEventDragEnd:eY,calculateDropTarget:(e,t)=>(function({draggedEvent:e,targetDay:t}){let a=(0,d.default)(e.end).diff((0,d.default)(e.start),"millisecond"),n=(0,d.default)(e.start),o=(0,d.default)(t).startOf("day").hour(n.hour()).minute(n.minute()).second(n.second()).millisecond(n.millisecond()),r=o.add(a,"millisecond");return{start:o.toDate(),end:r.toDate()}})({draggedEvent:t,targetDay:e}),onExternalDrop:eE?eB:void 0}),eA=(eD||!!eE)&&"static"!==ex,eR=(0,O.useRef)([]),eP=(0,m.useSlotDragSelect)({enabled:eg&&"static"!==ex,onDragEnd:(e,t)=>{if(!eM)return;let a=eR.current[e],n=eR.current[t];a&&n&&eM((0,d.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,d.default)(n).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),eF=(0,O.useRef)([]),e_=(0,n.getMonthDays)({month:(0,d.default)(R).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:eI.getFirstDayOfWeek(U),consistentWeeks:X&&ea}),eG=(()=>{for(let e=0;e<e_.length;e++){let t=e_[e];for(let a=0;a<t.length;a++){let n=t[a];if((0,o.isSameMonth)(R,n)||ea)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),eL=_?(0,t.getWeekdaysNames)({locale:eI.getLocale(G),format:L,firstDayOfWeek:eI.getFirstDayOfWeek(U)}).map((e,t)=>(0,O.createElement)("div",{...eV("monthViewWeekday"),key:t},e)):null,eU="month";eR.current=e_.flat();let ez=e_.map((e,t)=>{eF.current[t]||(eF.current[t]=[]);let n=e.map((e,a)=>{let n=!(0,o.isSameMonth)(R,e),r=eI.getWeekendDays(z).includes((0,d.default)(e).day()),s=(0,d.default)(e).locale(G||eI.locale).format("MMMM D, YYYY"),i=K?.((0,d.default)(e).format("YYYY-MM-DD"))||{},l=(0,d.default)(e).isSame((0,d.default)(),"day")&&ee;if(n&&!ea)return(0,C.jsx)("div",{"data-static":!0,...eV("monthViewDay",{style:i.style})},e);let m=t===eG.weekIndex&&a===eG.dayIndex,c=eW.isDropTarget(e),u=7*t+a,f=eP.isSlotSelected(u,eU);return(0,O.createElement)(M.UnstyledButton,{"aria-label":s,...i,...eV("monthViewDay",{className:i.className,style:i.style}),key:e,ref:e=>{e&&(eF.current[t]||(eF.current[t]=[]),eF.current[t][a]=e)},"data-drag-slot-index":eg&&"static"!==ex?u:void 0,"data-drag-slot-group":eg&&"static"!==ex?eU:void 0,onClick:"static"===ex?void 0:t=>{q?.((0,d.default)(e).format("YYYY-MM-DD"),t),i.onClick?.(t)},onPointerDown:eg&&"static"!==ex?e=>eP.handleSlotPointerDown(e,u,eU):void 0,onKeyDown:e=>{(0,h.handleMonthViewKeyDown)({controlsRef:eF,weekIndex:t,dayIndex:a,event:e}),i.onKeyDown?.(e)},mod:[{outside:n,weekend:r,today:l,"drop-target":c,"drag-selected":f,static:"static"===ex},i.mod],"data-outside":n||void 0,tabIndex:"static"===ex?-1:m?0:-1,onDragOver:eA?t=>eW.handleDragOver(t,e):void 0,onDragLeave:eA?eW.handleDragLeave:void 0,onDrop:eA?t=>eW.handleDrop(t,e):void 0},(0,C.jsx)("span",{"data-today":l||void 0,...eV("monthViewDayLabel"),children:(0,d.default)(e).format("D")}))}),s=Q?.((0,d.default)(e[0]).format("YYYY-MM-DD"))||{},i=(0,a.getWeekNumber)(e),l=(eN.backgroundByWeek[t]||[]).map(e=>{let a=e$.variantColorResolver({color:e.color||e$.primaryColor,theme:e$,variant:"light",autoContrast:!0}),n="function"==typeof eu?eu(e):e.title,o={key:`bg-${e.id}-${t}`,...eV("monthViewBackgroundEvent",{style:{left:`calc(${e.position.startOffset}% + 2px)`,width:`calc(${e.position.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:n};if("function"==typeof ef)return ef(e,o);let{key:r,...d}=o;return(0,C.jsx)(y.Box,{...d},r)}),m=100/eO,c=(eN.groupedByWeek[t]||[]).filter(e=>e.position.row<eO).map(e=>{let t=eW.isDraggableEvent(e);return(0,C.jsx)(u.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:eu,renderEvent:ef,radius:et,mode:ex,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*m}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${m}% - 2px)`}},e.id)}),D=e.map((e,t)=>{let a=eN.groupedByDay[e]||[],n=Math.max(0,a.length-eO);return n<=0?null:(0,C.jsx)(f.MoreEvents,{events:a,moreEventsCount:n,mode:ex,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${t/7*100}% + 1px)`,width:`calc(${1/7*100}% - 1px)`,height:"22px",paddingInline:4},...ec},`more-${e}`)});return(0,O.createElement)("div",{...eV("monthViewWeek"),key:t},F&&(0,C.jsx)(M.UnstyledButton,{"aria-label":`Week ${i}`,...s,onClick:"static"===ex?void 0:t=>{er?.("week"),P?.((0,r.toDateString)(e[0])),Z?.((0,d.default)(e[0]).format("YYYY-MM-DD"),t),s.onClick?.(t)},mod:{static:"static"===ex},tabIndex:"static"===ex?-1:0,...eV("monthViewWeekNumber",{className:s.className,style:s.style}),children:i},i),(0,O.createElement)("div",{...eV("monthViewEvents"),key:"week-events"},l,c,D),n)}),eJ=(0,C.jsxs)(y.Box,{mod:[{"with-week-numbers":F,"with-weekdays":_,static:"static"===ex,"slot-dragging":eP.isDragging},A],...eV("monthView"),...ek,children:[en&&(0,C.jsx)(D.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,r.toDateString)((0,d.default)(R).subtract(1,"month").startOf("month")),next:()=>(0,r.toDateString)((0,d.default)(R).add(1,"month").startOf("month")),today:()=>(0,r.toDateString)((0,d.default)())},control:{monthYearSelect:{locale:G,yearValue:(0,d.default)(R).get("year"),monthValue:(0,d.default)(R).get("month"),onYearChange:e=>P?.((0,r.toDateString)((0,d.default)(R).set("year",e).startOf("month"))),onMonthChange:e=>P?.((0,r.toDateString)((0,d.default)(R).set("month",e).startOf("month"))),...eo}},labels:ew,onDateChange:P,onViewChange:er,previousControlProps:ei,nextControlProps:es,todayControlProps:ed,viewSelectProps:el,stylesApiProps:{classNames:eC,styles:eH,attributes:B,__staticSelector:J,radius:et}}),(0,C.jsx)(g.ScrollArea,{scrollbarSize:4,...eS,...eV("monthViewScrollArea",{className:eS?.className,style:eS?.style}),children:(0,C.jsxs)("div",{...eV("monthViewInner"),children:[eL&&(0,C.jsxs)("div",{...eV("monthViewWeekdays"),children:[F&&(0,C.jsx)("div",{...eV("monthViewWeekdaysCorner")}),eL]}),ez]})})]});return eD?(0,C.jsx)(c.DragContext.Provider,{value:eW.dragContextValue,children:eJ}):eJ});I.displayName="@mantine/schedule/MonthView",I.classes=Y,I.varsResolver=H,e.s(["MonthView",0,I],168574)},791941,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=(0,a.default)().startOf("month").format("YYYY-MM-DD"),r=(0,a.default)().date(15).format("YYYY-MM-DD"),d=(0,a.default)().endOf("month").format("YYYY-MM-DD"),s=[{id:1,title:"Team Meeting",start:`${o} 09:00:00`,end:`${o} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:`${r} 00:00:00`,end:(0,a.default)(r).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:3,title:"Client Call",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"green"},{id:4,title:"Monthly Review",start:`${d} 00:00:00`,end:(0,a.default)(d).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Workshop",start:(0,a.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,a.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:6,title:"Conference",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"cyan"}],i=[{id:1,title:"Event 1",start:`${n} 09:00:00`,end:`${n} 10:00:00`,color:"blue"},{id:2,title:"Event 2",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Event 3",start:`${n} 11:00:00`,end:`${n} 12:00:00`,color:"orange"},{id:4,title:"Event 4",start:`${n} 13:00:00`,end:`${n} 14:00:00`,color:"violet"},{id:5,title:"Event 5",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"cyan"},{id:6,title:"Event 6",start:`${n} 15:00:00`,end:`${n} 16:00:00`,color:"pink"}],l=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
`,m=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Event 1',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Event 2',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Event 3',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Event 4',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Event 5',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'Event 6',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'pink',
  },
];
`;var c=e.i(391398),u=e.i(168574);let f={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withWeekNumbers:!0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekNumbers />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withWeekDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,firstDayOfWeek:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,weekdayFormat:"ddd"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} weekdayFormat="ddd" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var Y=e.i(191788);let y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.MonthView,{date:e,consistentWeeks:!1,onDateChange:t})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}
`},g={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,highlightToday:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} highlightToday={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withOutsideDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withOutsideDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withHeader:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withHeader={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},S=(0,a.default)().format("YYYY-MM-DD"),E=[{id:1,title:"Team Meeting",start:`${S} 09:00:00`,end:`${S} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],b={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(E);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
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

  return <MonthView date={new Date()} events={events} withEventsDragAndDrop onEventDrop={handleEventDrop} />;
}
`};var j=e.i(19683),k=e.i(369974),O=e.i(284629);let V=(0,a.default)().startOf("month"),C=[{id:1,title:"Team Standup",start:V.add(2,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(2,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:V.add(5,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(5,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:V.add(10,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(10,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:V.add(15,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(15,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"Code Review",start:V.add(18,"day").hour(16).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(18,"day").hour(17).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"cyan",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}},{id:6,title:"Tech Conference",start:V.add(22,"day").format("YYYY-MM-DD 00:00:00"),end:V.add(22,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(C);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(k.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(k.HoverCard.Target,{children:(0,c.jsx)(O.UnstyledButton,{...t})}),(0,c.jsx)(k.HoverCard.Dropdown,{children:(0,c.jsx)(j.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <MonthView
      date={new Date()}
      events={selectedEvents}
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:j._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(C,null,2)};`,language:"tsx"}]},$={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,mode:"static"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} mode="static" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var I=e.i(162077);let T={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(s),[n,o]=(0,Y.useState)(!1),[r,d]=(0,Y.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.MonthView,{date:new Date,events:e,withDragSlotSelect:!0,onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),o(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),o(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),o(!0)}}),(0,c.jsx)(I.EventForm,{opened:n,onClose:()=>o(!1),onExitTransitionEnd:()=>d(null),values:r,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:r?.id?()=>{r?.id&&t(e=>e.filter(e=>e.id!==r.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './_EventForm';
import { events } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

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
      <MonthView
        date={new Date()}
        events={events}
        withDragSlotSelect
        onDayClick={handleDayClick}
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
      />
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:I._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]};var N=e.i(232471),B=e.i(20035),W=e.i(883364);let A=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)([]),n=(0,Y.useRef)(1);return(0,c.jsxs)(B.Grid,{children:[(0,c.jsxs)(B.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(W.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),A.map(e=>(0,c.jsx)(N.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(W.Text,{size:"sm",fw:500,children:e.title})},e.title))]}),(0,c.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),s=(0,a.default)(o),i=s.endOf("day");t(e=>[...e,{id:n.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const sidebarItems = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
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
    const end = start.endOf('day');

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
          </Box>
        ))}
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},P=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(P),[n,o]=(0,Y.useState)([]),[r,d]=(0,Y.useState)(!1),s=(0,Y.useRef)(1);return(0,c.jsxs)(B.Grid,{children:[(0,c.jsx)(B.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(N.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let a=e.dataTransfer.getData("application/json");if(!a)return;let{eventId:r}=JSON.parse(a),s=n.find(e=>String(e.id)===String(r));s&&(t(e=>[...e,{title:s.title,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id)))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(W.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsx)(N.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(W.Text,{size:"sm",fw:500,children:e.title})},e.title)),0===e.length&&(0,c.jsx)(W.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),i=(0,a.default)(n),l=i.endOf("day");o(e=>[...e,{id:s.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

interface SidebarItem {
  title: string;
  color: string;
}

const initialSidebarItems: SidebarItem[] = [
  { title: 'Team Offsite', color: 'teal' },
  { title: 'Release Day', color: 'orange' },
  { title: 'All Hands', color: 'violet' },
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
    const end = start.endOf('day');

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

    setSidebarItems((prev) => [
      ...prev,
      { title: event.title, color: event.color || 'blue' },
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
            </Box>
          ))}
          {sidebarItems.length === 0 && (
            <Text size="xs" c="dimmed">Drag events here to unschedule</Text>
          )}
        </Box>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 9 }}>
        <MonthView
          date={new Date()}
          events={events}
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},_=[{id:"monthly-planning-series",title:"Weekly planning (series)",start:"2025-11-03 10:00:00",end:"2025-11-03 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO;COUNT=10",exdate:["2025-11-17 10:00:00"]}},{id:"monthly-planning-override",title:"Weekly planning (moved occurrence)",start:"2025-11-17 15:00:00",end:"2025-11-17 16:00:00",color:"grape",recurringEventId:"monthly-planning-series",recurrenceId:"2025-11-17 10:00:00"},{id:"month-one-off",title:"One-off product demo",start:"2025-11-20 12:00:00",end:"2025-11-20 13:00:00",color:"green"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("2025-11-01");return(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:_,withWeekNumbers:!0})},code:`
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

const month = '2025-11-01';

const events = [
  {
    id: 'monthly-planning-series',
    title: 'Weekly planning (series)',
    start: '2025-11-03 10:00:00',
    end: '2025-11-03 11:00:00',
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO;COUNT=10',
      exdate: ['2025-11-17 10:00:00'],
    },
  },
  {
    id: 'monthly-planning-override',
    title: 'Weekly planning (moved occurrence)',
    start: '2025-11-17 15:00:00',
    end: '2025-11-17 16:00:00',
    color: 'grape',
    recurringEventId: 'monthly-planning-series',
    recurrenceId: '2025-11-17 10:00:00',
  },
];

function Demo() {
  const [date, setDate] = useState(month);

  return <MonthView date={date} onDateChange={setDate} events={events} withWeekNumbers />;
}
`},L=(0,a.default)().format("YYYY-MM-DD"),U=[{id:"company-offsite",title:"Company offsite",start:`${(0,a.default)(L).startOf("week").add(1,"day").format("YYYY-MM-DD")} 00:00:00`,end:`${(0,a.default)(L).startOf("week").add(3,"day").format("YYYY-MM-DD")} 23:59:59`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${L} 10:00:00`,end:`${L} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${(0,a.default)(L).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,end:`${(0,a.default)(L).add(1,"day").format("YYYY-MM-DD")} 15:00:00`,color:"green"}],z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(U);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'company-offsite',
    title: 'Company offsite',
    start: \`\${dayjs(today).startOf('week').add(1, 'day').format('YYYY-MM-DD')} 00:00:00\`,
    end: \`\${dayjs(today).startOf('week').add(3, 'day').format('YYYY-MM-DD')} 23:59:59\`,
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
    start: \`\${dayjs(today).add(1, 'day').format('YYYY-MM-DD')} 14:00:00\`,
    end: \`\${dayjs(today).add(1, 'day').format('YYYY-MM-DD')} 15:00:00\`,
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
    <MonthView
      date={new Date()}
      events={events}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`};var J=e.i(428127);let K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(J.ScheduleHeader,{children:[(0,c.jsx)(J.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(J.ScheduleHeader.MonthYearSelect,{yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:n=>t((0,a.default)(e).year(n).startOf("month").format("YYYY-MM-DD")),onMonthChange:n=>t((0,a.default)(e).month(n).startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(J.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(J.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(J.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:s,withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, MonthView, ScheduleHeader } from '@mantine/schedule';
import { events } from './data';

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
                .subtract(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
          onMonthChange={(month) =>
            setDate(
              dayjs(date)
                .month(month)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'month')
                .startOf('month')
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

      <MonthView
        date={date}
        onDateChange={setDate}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Q=(0,a.default)().format("YYYY-MM-DD"),q=[{id:1,title:"Team Meeting",start:`${Q} 09:00:00`,end:`${Q} 10:00:00`,color:"blue"},{id:2,title:"Code Review",start:`${Q} 11:00:00`,end:`${Q} 12:00:00`,color:"green"},{id:3,title:"Design Review",start:`${Q} 13:00:00`,end:`${Q} 14:00:00`,color:"violet"},{id:4,title:"Sprint Planning",start:`${Q} 15:00:00`,end:`${Q} 16:00:00`,color:"orange"},{id:5,title:"Retrospective",start:`${Q} 16:30:00`,end:`${Q} 17:30:00`,color:"cyan"}],Z={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:q,maxEventsPerDay:4})},code:`
import { MonthView, ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  // ... 5 events on the same day
];

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      maxEventsPerDay={4}
    />
  );
}
`};e.i(27355);let X={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",more:"Más",moreLabel:e=>`+${e} m\xe1s`}})},code:[{code:`
import 'dayjs/locale/es';
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      locale="es"
      labels={{
        day: 'D\xeda',
        week: 'Semana',
        month: 'Mes',
        year: 'A\xf1o',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        more: 'M\xe1s',
        moreLabel: (hiddenEventsCount) => \`+\${hiddenEventsCount} m\xe1s\`,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ee={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,radius:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} radius={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},et=(0,a.default)().startOf("month"),ea=[{id:1,title:"Company Retreat",start:et.add(2,"day").format("YYYY-MM-DD 00:00:00"),end:et.add(3,"day").format("YYYY-MM-DD 00:00:00"),color:"blue"},{id:2,title:"Team Meeting",start:et.add(2,"day").format("YYYY-MM-DD 09:00:00"),end:et.add(2,"day").format("YYYY-MM-DD 10:00:00"),color:"green"},{id:3,title:"Project Deadline",start:et.add(8,"day").format("YYYY-MM-DD 00:00:00"),end:et.add(9,"day").format("YYYY-MM-DD 00:00:00"),color:"red"},{id:4,title:"Lunch with Client",start:et.add(8,"day").format("YYYY-MM-DD 12:00:00"),end:et.add(8,"day").format("YYYY-MM-DD 13:30:00"),color:"orange"},{id:5,title:"Code Review",start:et.add(8,"day").format("YYYY-MM-DD 15:00:00"),end:et.add(8,"day").format("YYYY-MM-DD 16:00:00"),color:"violet"},{id:6,title:"Sprint Planning",start:et.add(15,"day").format("YYYY-MM-DD 10:00:00"),end:et.add(15,"day").format("YYYY-MM-DD 11:30:00"),color:"cyan"},{id:7,title:"Design Workshop",start:et.add(15,"day").format("YYYY-MM-DD 14:00:00"),end:et.add(15,"day").format("YYYY-MM-DD 16:00:00"),color:"grape"},{id:8,title:"Conference",start:et.add(20,"day").format("YYYY-MM-DD 00:00:00"),end:et.add(22,"day").format("YYYY-MM-DD 00:00:00"),color:"pink"}],en={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:ea,renderEvent:(e,t)=>{let n,o;if(n=(0,a.default)(e.start),o=(0,a.default)(e.end),n.isSame(n.startOf("day"))&&o.isSame(o.startOf("day")))return(0,c.jsx)(O.UnstyledButton,{...t});let{children:r,className:d,style:s,...i}=t;return(0,c.jsxs)(O.UnstyledButton,{...i,style:{...s,display:"flex",alignItems:"center",gap:4,fontSize:10,whiteSpace:"nowrap",overflow:"hidden",pointerEvents:"all",cursor:"pointer",paddingInline:2},children:[(0,c.jsx)(N.Box,{component:"span",style:{width:8,height:8,borderRadius:"50%",backgroundColor:"var(--event-bg)",flexShrink:0}}),(0,c.jsx)("span",{style:{width:28,flexShrink:0},children:(0,a.default)(e.start).format("h:mm")}),(0,c.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e.title})]})}})},code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { Box, UnstyledButton } from '@mantine/core';
import { MonthView, ScheduleEventData } from '@mantine/schedule';

function isAllDayEvent(event: ScheduleEventData) {
  const start = dayjs(event.start);
  const end = dayjs(event.end);
  return start.isSame(start.startOf('day')) && end.isSame(end.startOf('day'));
}

const events: ScheduleEventData[] = [/* ...events */];

function Demo() {
  return (
    <MonthView
      date={new Date()}
      events={events}
      renderEvent={(event, props) => {
        if (isAllDayEvent(event)) {
          return <UnstyledButton {...props} />;
        }

        const { children, className, style, ...others } = props;
        return (
          <UnstyledButton
            {...others}
            style={{
              ...style,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 10,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              pointerEvents: 'all',
              cursor: 'pointer',
              paddingInline: 2,
            }}
          >
            <Box
              component="span"
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: \`var(--event-bg)\`,
                flexShrink: 0,
              }}
            />
            <span style={{ width: 28, flexShrink: 0 }}>{dayjs(event.start).format('h:mm')}</span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {event.title}
            </span>
          </UnstyledButton>
        );
      }}
    />
  );
}
`,language:"tsx"},{fileName:"events.ts",code:`import dayjs from 'dayjs';
import { ScheduleEventData } from '@mantine/schedule';

const startOfMonth = dayjs().startOf('month');

export const events: ScheduleEventData[] = ${JSON.stringify(ea,null,2)};`,language:"tsx"}]};var eo=(0,t.__exportAll)({backgroundEvents:()=>z,bidirectionalDragDrop:()=>F,consistentWeeks:()=>y,customHeader:()=>K,dragDrop:()=>b,eventForm:()=>T,externalDragDrop:()=>R,firstDayOfWeek:()=>v,highlightToday:()=>g,localization:()=>X,manyEvents:()=>x,maxEventsPerDay:()=>Z,radius:()=>ee,recurringEvents:()=>G,renderEvent:()=>H,staticMode:()=>$,timedEvents:()=>en,usage:()=>f,weekdayFormat:()=>p,withWeekNumbers:()=>D,withoutHeader:()=>w,withoutOutsideDays:()=>M,withoutWeekDays:()=>h});e.s(["MonthViewDemos",0,eo],791941)}]);