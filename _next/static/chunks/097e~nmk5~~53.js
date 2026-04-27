(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37930,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="PlusIcon",e.s(["PlusIcon",0,r],37930)},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:r=1}){let o=(0,a.default)().day(r),i=[];for(let a=0;a<7;a+=1)i.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:n}));return i}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:r}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),i=o.format("YYYY-MM-DD"),d=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let r=0===t?6:t-1;for(;n.day()!==r;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),l=[],s=(0,a.default)((0,t.getStartOfWeek)({date:i,firstDayOfWeek:n}));for(;(0,a.default)(s).isBefore(d,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(s.format("YYYY-MM-DD 00:00:00")),s=s.add(1,"day");l.push(e)}if(r&&l.length<6){let e=l[l.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;l.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");l.push(e)}}return l}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:r,size:o}){let i=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===r-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:r,size:o});if(!i)return;let d=t.current?.[i.weekIndex]?.[i.dayIndex];d&&(d.disabled||d.getAttribute("data-hidden")||d.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:o}):d.focus())}({controlsRef:e,direction:r,weekIndex:t,dayIndex:a,size:o})}}])},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},r=e.i(424302),o=e.i(392862),i=e.i(284629),d=e.i(275519),l=e.i(44091),s=e.i(391466),u=e.i(541772),c=e.i(391398);let m={dropdownType:"popover"},f=(0,d.factory)(e=>{let d=(0,l.useProps)("MoreEvents",m,e),{classNames:f,className:h,style:v,styles:y,unstyled:D,vars:p,attributes:g,radius:w,dropdownType:Y,events:x,moreEventsCount:M,popoverProps:S,modalProps:b,onDropdownClose:E,children:k,modalTitle:V,renderEventBody:C,renderEvent:j,id:O,labels:I,mode:$,onEventClick:T,...H}=d,[W,B]=(0,u.useDisclosure)(),A=(0,s.useStyles)({name:"MoreEvents",classes:n,props:d,className:h,style:v,classNames:f,styles:y,unstyled:D,attributes:g,vars:p,rootSelector:"moreEventsButton"}),R=()=>{B.close(),E?.()},_=(0,c.jsx)("div",{...A("moreEventsList"),children:x.map(e=>(0,c.jsx)(a.ScheduleEvent,{radius:w,event:e,size:"md",renderEventBody:C,renderEvent:j,mode:$,onClick:T?t=>T(e,t):void 0,children:e.title},e.id))});return(0,c.jsxs)(c.Fragment,{children:["modal"===Y&&(0,c.jsx)(r.Modal,{opened:W,onClose:R,unstyled:D,radius:w,title:V,...b,children:_}),(0,c.jsxs)(o.Popover,{position:"bottom-start",width:260,opened:W,trapFocus:!0,returnFocus:!1,unstyled:D,disabled:S?.disabled||"modal"===Y,radius:w,transitionProps:{transition:"pop",duration:120},offset:-46,id:O,...S,onChange:e=>{e||(S?.onChange?.(e),R())},children:[(0,c.jsx)(o.Popover.Target,{children:(0,c.jsx)(i.UnstyledButton,{...A("moreEventsButton"),mod:{static:"static"===$},onClick:()=>B.toggle(),...H,children:(0,t.getLabel)("moreLabel",I)(M)})}),(0,c.jsx)(o.Popover.Dropdown,{...A("moreEventsDropdown"),children:_})]})]})});f.displayName="@mantine/schedule/MoreEvents",f.classes=n,e.s(["MoreEvents",0,f],67312)},168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),n=e.i(605520),r=e.i(753381),o=e.i(4332),i=e.i(494834);function d({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:r}){if(!t)return{start:(0,o.toDateString)((0,i.default)(e).startOf("month")),end:(0,o.toDateString)((0,i.default)(e).endOf("month"))};let l=(0,n.getMonthDays)({month:e,firstDayOfWeek:r,consistentWeeks:a});return{start:l[0][0],end:l[l.length-1][6]}}var l=e.i(657068),s=e.i(783261),u=e.i(376879),c=e.i(201867),m=e.i(891343),f=e.i(67312),h=e.i(966696),v=e.i(647170),y=e.i(298008),D=e.i(441058),p={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},g=e.i(232471),w=e.i(19300),Y=e.i(284629),x=e.i(481178),M=e.i(275519),S=e.i(433512),b=e.i(951254),E=e.i(44091),k=e.i(62904),V=e.i(391466),C=e.i(191788),j=e.i(205693),O=e.i(391398);let I=(0,x.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,S.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),$={__staticSelector:"MonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},T=(0,M.factory)(e=>{let x=(0,E.useProps)("MonthView",$,e),{classNames:M,className:S,style:T,styles:H,unstyled:W,attributes:B,vars:A,mod:R,date:_,onDateChange:N,withWeekNumbers:L,withWeekDays:P,locale:z,weekdayFormat:F,firstDayOfWeek:G,weekendDays:U,__staticSelector:K,getDayProps:J,getWeekNumberProps:Z,onDayClick:Q,onWeekNumberClick:q,consistentWeeks:X,highlightToday:ee,radius:et,withOutsideDays:ea,withHeader:en,monthYearSelectProps:er,onViewChange:eo,todayControlProps:ei,nextControlProps:ed,previousControlProps:el,viewSelectProps:es,events:eu,moreEventsProps:ec,renderEventBody:em,renderEvent:ef,withEventsDragAndDrop:eh,onEventDrop:ev,canDragEvent:ey,onEventDragStart:eD,onEventDragEnd:ep,onEventClick:eg,withDragSlotSelect:ew,onSlotDragEnd:eY,labels:ex,mode:eM,scrollAreaProps:eS,onExternalEventDrop:eb,recurrenceExpansionLimit:eE,maxEventsPerDay:ek,...eV}=x,eC=Math.min(10,Math.max(1,ek??2)),ej=(0,V.useStyles)({name:K,classes:p,props:x,className:S,style:T,classNames:M,styles:H,unstyled:W,attributes:B,vars:A,varsResolver:I,rootSelector:"monthView"}),{resolvedClassNames:eO,resolvedStyles:eI}=(0,k.useResolvedStylesApi)({classNames:M,styles:H,props:x}),e$=(0,b.useMantineTheme)(),eT=(0,j.useDatesContext)(),eH=d({month:_,withOutsideDays:ea,consistentWeeks:X,firstDayOfWeek:eT.getFirstDayOfWeek(G)}),eW=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:n,consistentWeeks:r}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let o=new Set,l=[],s=d({month:e,withOutsideDays:n,consistentWeeks:r,firstDayOfWeek:a});for(let e of t)if((0,i.default)(e.end).isAfter(s.start,"day")||(0,i.default)(e.start).isBefore(s.end,"day")){if(l.push((0,y.validateEvent)(e)),o.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);o.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:n}){let r={},o={},d=new Set,{weeks:l,groupedByDay:s}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let n=[],r={},o=(0,i.default)((0,D.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;o.isBefore(t)||o.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=o.format("YYYY-MM-DD 00:00:00");e.push(t),r[t]||(r[t]=[]),o=o.add(1,"day")}n.push(e)}return{weeks:n,groupedByDay:r}}({rangeStart:n?(0,i.default)(n.start):(0,i.default)(e).startOf("month"),rangeEnd:n?(0,i.default)(n.end):(0,i.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<l.length;e++)r[e.toString()]=[],o[e.toString()]=[];for(let e of t){let t=(0,i.default)(e.start).startOf("day"),a=(0,i.default)(e.end),n=0===a.hour()&&0===a.minute()&&0===a.second()?a.startOf("day").subtract(1,"day"):a.startOf("day"),u=n.isAfter(t);for(let a=0;a<l.length;a++){let c=l[a],m=(0,i.default)(c[0]).startOf("day"),f=(0,i.default)(c[6]).endOf("day");if((t.isBefore(f)||t.isSame(f,"day"))&&(n.isAfter(m)||n.isSame(m,"day"))){let{startDayIndex:l,daysSpanned:c,startOffset:h,width:v,hanging:y}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:n,isMultiday:r}){let o=e,i=t,d=e.isBefore(a),l=t.isAfter(n);o.isBefore(a)&&(o=a),i.isAfter(n)&&(i=n);let s=o.diff(a,"day"),u=Math.max(1,i.diff(a,"day")-s+ +!!r);return{startDayIndex:s,daysSpanned:u,startOffset:s/7*100,width:u/7*100,hanging:d&&l?"both":d?"start":l?"end":"none"}}({eventStart:t,eventEnd:n,weekStart:m,weekEnd:f,isMultiday:u});if("background"===e.display){o[a.toString()].push({...e,position:{startOffset:h,width:v,weekIndex:a,row:0,hanging:y}});continue}let D=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:n}){let r=0;for(let o of e){let e=(0,i.default)(o.start).startOf("day"),d=(e.isBefore(n)||e.isSame(n,"day")?n:e).diff(n,"day");d+(o.position?.width||0)/100*7>t&&d<t+a&&(r=Math.max(r,(o.position?.row||0)+1))}return r}({existingEvents:r[a.toString()],startDayIndex:l,daysSpanned:c,weekStart:m}),p={...e,position:{startOffset:h,width:v,weekIndex:a,row:D,hanging:y}};r[a.toString()].push(p),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:n,eventsAddedToDay:r,weekIdx:o}){if(0===o||!r.has(e.id.toString())){let o=t;for(;o.isBefore(a)||o.isSame(a,"day");){let t=o.format("YYYY-MM-DD 00:00:00");n[t]&&n[t].push(e),o=o.add(1,"day")}r.add(e.id.toString())}}({positionedEvent:p,eventStart:t,eventEnd:n,groupedByDay:s,eventsAddedToDay:d,weekIdx:a})}}}return{groupedByWeek:r,groupedByDay:s,backgroundByWeek:o}}({date:e,events:l,firstDayOfWeek:a,range:s})}({date:_,events:(0,l.expandRecurringEvents)({events:eu,rangeStart:(0,i.default)(eH.start).startOf("day").toDate(),rangeEnd:(0,i.default)(eH.end).endOf("day").toDate(),expansionLimit:eE}),firstDayOfWeek:eT.getFirstDayOfWeek(G),withOutsideDays:ea,consistentWeeks:X}),eB=(0,C.useCallback)((e,t)=>{eb&&eb(e.dataTransfer,`${(0,i.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eb]),eA=(0,s.useDragDropHandlers)({enabled:eh,mode:eM,onEventDrop:ev,canDragEvent:ey,onEventDragStart:eD,onEventDragEnd:ep,calculateDropTarget:(e,t)=>(function({draggedEvent:e,targetDay:t}){let a=(0,i.default)(e.end).diff((0,i.default)(e.start),"millisecond"),n=(0,i.default)(e.start),r=(0,i.default)(t).startOf("day").hour(n.hour()).minute(n.minute()).second(n.second()).millisecond(n.millisecond()),o=r.add(a,"millisecond");return{start:r.toDate(),end:o.toDate()}})({draggedEvent:t,targetDay:e}),onExternalDrop:eb?eB:void 0}),eR=(eh||!!eb)&&"static"!==eM,e_=(0,C.useRef)([]),eN=(0,u.useSlotDragSelect)({enabled:ew&&"static"!==eM,onDragEnd:(e,t)=>{if(!eY)return;let a=e_.current[e],n=e_.current[t];a&&n&&eY((0,i.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,i.default)(n).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),eL=(0,C.useRef)([]),eP=(0,n.getMonthDays)({month:(0,i.default)(_).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:eT.getFirstDayOfWeek(G),consistentWeeks:X&&ea}),ez=(()=>{for(let e=0;e<eP.length;e++){let t=eP[e];for(let a=0;a<t.length;a++){let n=t[a];if((0,r.isSameMonth)(_,n)||ea)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),eF=P?(0,t.getWeekdaysNames)({locale:eT.getLocale(z),format:F,firstDayOfWeek:eT.getFirstDayOfWeek(G)}).map((e,t)=>(0,C.createElement)("div",{...ej("monthViewWeekday"),key:t},e)):null,eG="month";e_.current=eP.flat();let eU=eP.map((e,t)=>{eL.current[t]||(eL.current[t]=[]);let n=e.map((e,a)=>{let n=!(0,r.isSameMonth)(_,e),o=eT.getWeekendDays(U).includes((0,i.default)(e).day()),d=(0,i.default)(e).locale(z||eT.locale).format("MMMM D, YYYY"),l=J?.((0,i.default)(e).format("YYYY-MM-DD"))||{},s=(0,i.default)(e).isSame((0,i.default)(),"day")&&ee;if(n&&!ea)return(0,O.jsx)("div",{"data-static":!0,...ej("monthViewDay",{style:l.style})},e);let u=t===ez.weekIndex&&a===ez.dayIndex,c=eA.isDropTarget(e),m=7*t+a,f=eN.isSlotSelected(m,eG);return(0,C.createElement)(Y.UnstyledButton,{"aria-label":d,...l,...ej("monthViewDay",{className:l.className,style:l.style}),key:e,ref:e=>{e&&(eL.current[t]||(eL.current[t]=[]),eL.current[t][a]=e)},"data-drag-slot-index":ew&&"static"!==eM?m:void 0,"data-drag-slot-group":ew&&"static"!==eM?eG:void 0,onClick:"static"===eM?void 0:t=>{Q?.((0,i.default)(e).format("YYYY-MM-DD"),t),l.onClick?.(t)},onPointerDown:ew&&"static"!==eM?e=>eN.handleSlotPointerDown(e,m,eG):void 0,onKeyDown:e=>{(0,v.handleMonthViewKeyDown)({controlsRef:eL,weekIndex:t,dayIndex:a,event:e}),l.onKeyDown?.(e)},mod:[{outside:n,weekend:o,today:s,"drop-target":c,"drag-selected":f,static:"static"===eM},l.mod],"data-outside":n||void 0,tabIndex:"static"===eM?-1:u?0:-1,onDragOver:eR?t=>eA.handleDragOver(t,e):void 0,onDragLeave:eR?eA.handleDragLeave:void 0,onDrop:eR?t=>eA.handleDrop(t,e):void 0},(0,O.jsx)("span",{"data-today":s||void 0,...ej("monthViewDayLabel"),children:(0,i.default)(e).format("D")}))}),d=Z?.((0,i.default)(e[0]).format("YYYY-MM-DD"))||{},l=(0,a.getWeekNumber)(e),s=(eW.backgroundByWeek[t]||[]).map(e=>{let a=e$.variantColorResolver({color:e.color||e$.primaryColor,theme:e$,variant:"light",autoContrast:!0}),n="function"==typeof em?em(e):e.title,r={key:`bg-${e.id}-${t}`,...ej("monthViewBackgroundEvent",{style:{left:`calc(${e.position.startOffset}% + 2px)`,width:`calc(${e.position.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:n};if("function"==typeof ef)return ef(e,r);let{key:o,...i}=r;return(0,O.jsx)(g.Box,{...i},o)}),u=100/eC,c=(eW.groupedByWeek[t]||[]).filter(e=>e.position.row<eC).map(e=>{let t=eA.isDraggableEvent(e);return(0,O.jsx)(m.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:em,renderEvent:ef,radius:et,mode:eM,onClick:eg?t=>eg(e,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*u}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${u}% - 2px)`}},e.id)}),h=e.map((e,t)=>{let a=eW.groupedByDay[e]||[],n=Math.max(0,a.length-eC);return n<=0?null:(0,O.jsx)(f.MoreEvents,{events:a,moreEventsCount:n,mode:eM,labels:ex,renderEventBody:em,renderEvent:ef,onEventClick:eg,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${t/7*100}% + 1px)`,width:`calc(${1/7*100}% - 1px)`,height:"22px",paddingInline:4},...ec},`more-${e}`)});return(0,C.createElement)("div",{...ej("monthViewWeek"),key:t},L&&(0,O.jsx)(Y.UnstyledButton,{"aria-label":`Week ${l}`,...d,onClick:"static"===eM?void 0:t=>{eo?.("week"),N?.((0,o.toDateString)(e[0])),q?.((0,i.default)(e[0]).format("YYYY-MM-DD"),t),d.onClick?.(t)},mod:{static:"static"===eM},tabIndex:"static"===eM?-1:0,...ej("monthViewWeekNumber",{className:d.className,style:d.style}),children:l},l),(0,C.createElement)("div",{...ej("monthViewEvents"),key:"week-events"},s,c,h),n)}),eK=(0,O.jsxs)(g.Box,{mod:[{"with-week-numbers":L,"with-weekdays":P,static:"static"===eM,"slot-dragging":eN.isDragging},R],...ej("monthView"),...eV,children:[en&&(0,O.jsx)(h.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,i.default)(_).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,i.default)(_).add(1,"month").startOf("month")),today:()=>(0,o.toDateString)((0,i.default)())},control:{monthYearSelect:{locale:z,yearValue:(0,i.default)(_).get("year"),monthValue:(0,i.default)(_).get("month"),onYearChange:e=>N?.((0,o.toDateString)((0,i.default)(_).set("year",e).startOf("month"))),onMonthChange:e=>N?.((0,o.toDateString)((0,i.default)(_).set("month",e).startOf("month"))),...er}},labels:ex,onDateChange:N,onViewChange:eo,previousControlProps:el,nextControlProps:ed,todayControlProps:ei,viewSelectProps:es,stylesApiProps:{classNames:eO,styles:eI,attributes:B,__staticSelector:K,radius:et}}),(0,O.jsx)(w.ScrollArea,{scrollbarSize:4,...eS,...ej("monthViewScrollArea",{className:eS?.className,style:eS?.style}),children:(0,O.jsxs)("div",{...ej("monthViewInner"),children:[eF&&(0,O.jsxs)("div",{...ej("monthViewWeekdays"),children:[L&&(0,O.jsx)("div",{...ej("monthViewWeekdaysCorner")}),eF]}),eU]})})]});return eh?(0,O.jsx)(c.DragContext.Provider,{value:eA.dragContextValue,children:eK}):eK});T.displayName="@mantine/schedule/MonthView",T.classes=p,T.varsResolver=I,e.s(["MonthView",0,T],168574)},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),r=e.i(898496),o=e.i(4332),i=e.i(969610),d=e.i(792930),l=e.i(505696),s=e.i(657068),u=e.i(245086),c=e.i(783261),m=e.i(637079),f=e.i(376879),h=e.i(312709),v=e.i(201867),y=e.i(891343),D=e.i(67312),p=e.i(966696),g=e.i(298008),w=e.i(68642),Y=e.i(532965),x=e.i(813982),M=e.i(751198),S=e.i(494834),b={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},E=e.i(232471),k=e.i(19300),V=e.i(284629),C=e.i(481178),j=e.i(275519),O=e.i(433512),I=e.i(779177),$=e.i(951254),T=e.i(44091),H=e.i(62904),W=e.i(391466),B=e.i(417241),A=e.i(332977),R=e.i(191788),_=e.i(205693),N=e.i(391398);let L={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},P=(0,C.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,O.getRadius)(t):void 0,"--day-view-slot-height":(0,I.rem)(a),"--day-view-all-day-slot-height":(0,I.rem)(n)}})),z=(0,j.factory)(e=>{let C=(0,T.useProps)("DayView",L,e),{classNames:j,className:O,style:I,styles:z,unstyled:F,attributes:G,vars:U,__staticSelector:K,startTime:J,endTime:Z,intervalMinutes:Q,withAllDaySlot:q,date:X,locale:ee,slotLabelFormat:et,headerFormat:ea,withCurrentTimeIndicator:en=(0,S.default)(X).isSame((0,S.default)(),"day"),withCurrentTimeBubble:er,withHeader:eo,radius:ei,onDateChange:ed,onViewChange:el,previousControlProps:es,nextControlProps:eu,todayControlProps:ec,viewSelectProps:em,slotHeight:ef,allDaySlotHeight:eh,scrollAreaProps:ev,events:ey,moreEventsProps:eD,renderEventBody:ep,renderEvent:eg,labels:ew,highlightBusinessHours:eY,businessHours:ex,withEventsDragAndDrop:eM,onEventDrop:eS,canDragEvent:eb,onEventDragStart:eE,onEventDragEnd:ek,onTimeSlotClick:eV,onAllDaySlotClick:eC,onEventClick:ej,withDragSlotSelect:eO,onSlotDragEnd:eI,mode:e$,startScrollTime:eT,onExternalEventDrop:eH,withEventResize:eW,onEventResize:eB,canResizeEvent:eA,recurrenceExpansionLimit:eR,getTimeSlotProps:e_,...eN}=C,eL=(0,W.useStyles)({name:K,classes:b,props:C,className:O,style:I,classNames:j,styles:z,unstyled:F,attributes:G,vars:U,varsResolver:P,rootSelector:"dayView"}),{resolvedClassNames:eP,resolvedStyles:ez}=(0,H.useResolvedStylesApi)({classNames:j,styles:z,props:C}),eF={classNames:eP,styles:ez,attributes:G,__staticSelector:K,radius:ei},eG=(0,$.useMantineTheme)(),eU=(0,_.useDatesContext)(),eK=(0,r.getDayTimeIntervals)({startTime:J,endTime:Z,intervalMinutes:Q}),eJ=(0,R.useRef)([]),eZ=(0,R.useRef)(null),eQ=(0,R.useRef)(null),eq=(0,A.useMergedRef)(eZ,ev?.viewportRef);(0,u.useAutoScrollOnDrag)({viewportRef:eZ,enabled:(eM||!!eH)&&"static"!==e$}),(0,B.useIsomorphicEffect)(()=>{if(!eT||!eZ.current||0===eJ.current.length)return;let e=eK.findIndex(e=>e.startTime>=eT);if(e<0)return;let t=eJ.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=eZ.current.getBoundingClientRect();eZ.current.scrollTo({left:0,top:a.top-n.top})},[]);let eX=(0,R.useCallback)(e=>{let t=eJ.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=eJ.current[0],n=eJ.current[eJ.current.length-1];if(!a||!n)return null;let r=a.getBoundingClientRect(),o=n.getBoundingClientRect();return e.clientY<r.top?0:e.clientY>o.bottom?eJ.current.length-1:null},[]),e0=(0,f.useSlotDragSelect)({enabled:eO&&"static"!==e$,onDragEnd:(e,t)=>{if(!eI)return;let a=(0,S.default)(X).format("YYYY-MM-DD");eI(`${a} ${eK[e].startTime}`,`${a} ${eK[t].endTime}`)}}),e1=function({events:e,date:t,startTime:a,endTime:n}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let r=new Set,o=[],d=[],l=(0,S.default)(t).startOf("day"),s=(0,S.default)(t).endOf("day");for(let t of e){let e=(0,S.default)(t.start),i=(0,S.default)(t.end),u=e.isSame(l,"day"),c=!u&&"background"===t.display&&e.isBefore(s)&&i.isAfter(l);if(u||c){if(u&&!(0,w.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,g.validateEvent)(t);if(r.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);r.add(t.id),"background"===t.display?d.push(e):o.push(e)}}let u=function({events:e,startTime:t,endTime:a,date:n}){let r=[],o=[];for(let d of(0,x.sortEvents)(e)){let e=(0,i.isAllDayEvent)({event:d,date:n}),l=0;for(;function({columns:e,columnIndex:t,event:a,allDay:n,date:r}){return!!e[t]&&e[t].some(e=>{let t=(0,i.isAllDayEvent)({event:e,date:r}),o=(0,M.isEventsOverlap)(e,a);return!n&&!t&&o})}({columns:r,columnIndex:l,event:d,allDay:e,date:n});)l++;r[l]||(r[l]=[]),r[l].push(d);let s=e?{top:0,height:100}:(0,Y.getDayPosition)({event:d,startTime:t,endTime:a});o.push({...d,position:{...s,allDay:e,column:l,width:0,offset:0,overlaps:0}})}for(let e of o){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let n=[];for(let t of o)t!==e&&!t.position.allDay&&(0,M.isEventsOverlap)(t,e)&&n.push(t);let r=a;for(let e of n)for(let t of(r=Math.max(r,e.position.column),o))t!==e&&!t.position.allDay&&(0,M.isEventsOverlap)(t,e)&&(r=Math.max(r,t.position.column));let i=r+1,d=i;for(let e of n)e.position.column>a&&e.position.column<d&&(d=e.position.column);let l=d-a;e.position.overlaps=i,e.position.width=l/i*100,e.position.offset=100*a/i}return o}({events:o,startTime:a,endTime:n,date:t}),c=[],m=[];for(let e of u)e.position.allDay?c.push(e):m.push(e);let f=[],h=[];for(let e of d){let r=(0,S.default)(e.start),o=(0,S.default)(e.end),d=r.isBefore(l)?l:r,u=o.isAfter(s)?s:o,c={...e,start:d.format("YYYY-MM-DD HH:mm:ss"),end:u.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:c,date:t}))h.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:r}=(0,Y.getDayPosition)({event:c,startTime:a,endTime:n});if(r<=0)continue;f.push({...e,position:{top:t,height:r,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:c,regularEvents:m,backgroundTimedEvents:f,backgroundAllDayEvents:h}}({events:(0,s.expandRecurringEvents)({events:ey,rangeStart:(0,S.default)(X).startOf("day").toDate(),rangeEnd:(0,S.default)(X).endOf("day").toDate(),expansionLimit:eR}),date:X,startTime:J,endTime:Z}),e2=(0,R.useCallback)((e,t)=>{if(!eH)return;let a=(0,S.default)(X).format("YYYY-MM-DD");eH(e.dataTransfer,`${a} ${eK[t].startTime}`)},[eH,X,eK]),e8=(0,c.useDragDropHandlers)({enabled:eM,mode:e$,onEventDrop:eS,canDragEvent:eb,onEventDragStart:eE,onEventDragEnd:ek,calculateDropTarget:(e,t)=>{let a=eK[e].startTime;return(0,d.calculateDropTime)({draggedEvent:t,targetDate:X,targetSlotTime:a,intervalMinutes:Q})},onExternalDrop:eH?e2:void 0}),e3=(0,m.useEventResize)({enabled:eW,mode:e$,startTime:J,endTime:Z,intervalMinutes:Q,onEventResize:eB,canResizeEvent:eA}),e4=(eM||!!eH)&&"static"!==e$,e6=e1.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:X}),a=!t&&e8.isDraggableEvent(e),n=!t&&e3.isResizableEvent(e),r=e3.getResizePosition(e.id),o=r?r.top:e.position.top,d=r?r.height:e.position.height;return(0,N.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ep,renderEvent:eg,autoSize:!0,draggable:a,withResize:n,isResizing:null!==r,onResizeStart:n?(t,a)=>{eQ.current&&e3.handleResizeStart({event:e,edge:t,container:eQ.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,S.default)(X).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:e$,onClick:ej?t=>{e3.wasResizing()||ej(e,t)}:void 0,...eF,style:{...eF.styles?.event,top:`${o}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),e7=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e1.allDayEvents.length}),e9=e1.allDayEvents.slice(0,e7.visibleEventsCount).map(e=>(0,N.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ep,renderEvent:eg,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:e$,onClick:ej?t=>ej(e,t):void 0,...eF},e.id)),e5=(0,S.default)(X).format("YYYY-MM-DD"),te=eK.map((e,a)=>{let r=e8.isDropTarget(a),o=e0.isSlotSelected(a,e5),i=`${e5} ${e.startTime}`,d=`${e5} ${e.endTime}`,{onClick:s,...u}=e_?.({start:i,end:d})||{},c="static"===e$?void 0:e=>{eV?.({slotStart:i,slotEnd:d,nativeEvent:e}),s?.(e)};return(0,R.createElement)(V.UnstyledButton,{...eL("dayViewSlot"),key:e.startTime,ref:e=>{eJ.current[a]=e},mod:{"hour-start":e.isHourStart,...(0,l.getBusinessHoursMod)({time:e.startTime,businessHours:ex,highlightBusinessHours:eY}),"drop-target":r,"drag-selected":o,static:"static"===e$},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(Q)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===e$?-1:0===a?0:-1,"data-drag-slot-index":eO&&"static"!==e$?a:void 0,"data-drag-slot-group":eO&&"static"!==e$?e5:void 0,onKeyDown:"static"===e$?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<eK.length-1?(e.preventDefault(),eJ.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),eJ.current[a-1]?.focus())},onPointerDown:eO&&"static"!==e$?e=>e0.handleSlotPointerDown(e,a,e5):void 0,onClick:c,onDragOver:e4?e=>e.preventDefault():void 0,...u})}),tt=eK.reduce((e,t)=>{if(t.isHourStart){let n=(0,S.default)(`${(0,S.default)(X).format("YYYY-MM-DD")} ${t.startTime}`),r=(0,a.formatDate)({locale:eU.getLocale(ee),date:n,format:et});e.push((0,R.createElement)(E.Box,{...eL("dayViewSlotLabel"),key:t.startTime,mod:(0,l.getBusinessHoursMod)({time:t.startTime,businessHours:ex,highlightBusinessHours:eY})},r))}return e},[]),ta=e1.backgroundAllDayEvents.map(e=>{let t=eG.variantColorResolver({color:e.color||eG.primaryColor,theme:eG,variant:"light",autoContrast:!0}),a="function"==typeof ep?ep(e):e.title,n={key:`bg-allday-${e.id}`,...eL("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eg)return eg(e,n);let{key:r,...o}=n;return(0,N.jsx)(E.Box,{...o},r)}),tn=e1.backgroundTimedEvents.map(e=>{let t=eG.variantColorResolver({color:e.color||eG.primaryColor,theme:eG,variant:"light",autoContrast:!0}),a="function"==typeof ep?ep(e):e.title,n={key:e.id,...eL("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eg)return eg(e,n);let{key:r,...o}=n;return(0,N.jsx)(E.Box,{...o},r)}),tr=(0,N.jsxs)(E.Box,{...eL("dayView"),mod:{static:"static"===e$,"slot-dragging":e0.isDragging},...eN,children:[eo&&(0,N.jsx)(p.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,S.default)(X).subtract(1,"day")),next:()=>(0,o.toDateString)((0,S.default)(X).add(1,"day")),today:()=>(0,o.toDateString)((0,S.default)())},control:{title:(0,a.formatDate)({locale:eU.getLocale(ee),date:X,format:ea}),miw:140},labels:ew,onDateChange:ed,onViewChange:el,previousControlProps:es,nextControlProps:eu,todayControlProps:ec,viewSelectProps:em,stylesApiProps:eF}),(0,N.jsx)(k.ScrollArea.Autosize,{scrollbarSize:4,...ev,...eL("dayViewScrollArea",{className:ev?.className,style:ev?.style}),viewportRef:eq,children:(0,N.jsxs)(E.Box,{...eL("dayViewInner"),children:[(0,N.jsxs)("div",{...eL("dayViewSlotLabels"),children:[q&&(0,N.jsx)(E.Box,{...eL("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",ew)}),tt]}),(0,N.jsxs)("div",{...eL("dayViewSlots"),children:[q&&(0,N.jsxs)("div",{...eL("dayViewAllDay"),children:[ta,(0,N.jsxs)("div",{...eL("dayViewAllDayEvents"),children:[e9,e7.hiddenEventsCount>0&&(0,N.jsx)(D.MoreEvents,{events:e1.allDayEvents,moreEventsCount:e7.hiddenEventsCount,renderEventBody:ep,renderEvent:eg,mode:e$,labels:ew,onEventClick:ej,...eF,...eD})]}),(0,N.jsx)(V.UnstyledButton,{...eL("dayViewSlot"),mod:{"all-day":!0,static:"static"===e$},"aria-label":`${(0,t.getLabel)("timeSlot",ew)} ${(0,t.getLabel)("allDay",ew)}`,onClick:"static"!==e$&&eC?e=>{eC((0,S.default)(X).format("YYYY-MM-DD"),e)}:void 0})]}),(0,N.jsxs)("div",{ref:eQ,...eL("dayViewTimeSlots"),onDragOver:e4?e=>{let t=eX(e);null!==t&&e8.handleDragOver(e,t)}:void 0,onDragLeave:e4?e8.handleDragLeave:void 0,onDrop:e4?e=>{let t=eX(e);null!==t&&e8.handleDrop(e,t)}:void 0,children:[tn,e6,en&&(0,N.jsx)(h.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:et,withTimeBubble:er,withThumb:!er,locale:ee,startTime:J,endTime:Z,...eF}),te]})]})]})})]});return eM?(0,N.jsx)(v.DragContext.Provider,{value:e8.dragContextValue,children:tr}):tr});z.displayName="@mantine/schedule/DayView",z.classes=b,z.varsResolver=P,e.s(["DayView",0,z],200183)},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(621304),r=e.i(855578),o=e.i(605520),i=e.i(753381),d=e.i(4332),l=e.i(813982),s=e.i(657068),u=e.i(647170),c=e.i(298008),m=e.i(898770),f=e.i(494834),h={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},v=e.i(462138),y=e.i(232471),D=e.i(883364),p=e.i(284629),g=e.i(481178),w=e.i(275519),Y=e.i(433512),x=e.i(317477),M=e.i(323283),S=e.i(951254),b=e.i(44091),E=e.i(391466),k=e.i(579560),V=e.i(191788),C=e.i(205693),j=e.i(391398);let O={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},I=(0,g.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,Y.getRadius)(t)}})),$=(0,w.factory)(e=>{let g=(0,b.useProps)("MobileMonthView",O,e),{classNames:w,className:Y,style:$,styles:T,unstyled:H,vars:W,attributes:B,__staticSelector:A,date:R,onDateChange:_,selectedDate:N,defaultSelectedDate:L,onSelectedDateChange:P,withWeekNumbers:z,withWeekDays:F,locale:G,firstDayOfWeek:U,weekdayFormat:K,weekendDays:J,getWeekNumberProps:Z,getDayProps:Q,onDayClick:q,onWeekNumberClick:X,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:en,events:er,labels:eo,mode:ei,renderEvent:ed,eventsHeaderFormat:el,onYearClick:es,onEventClick:eu,renderHeader:ec,recurrenceExpansionLimit:em,...ef}=g,eh=(0,C.useDatesContext)(),ev=(0,S.useMantineTheme)(),ey=(0,f.default)(),[eD,ep]=(0,k.useUncontrolled)({value:N,defaultValue:L??(0,d.toDateString)(ey),onChange:e=>P?.(e?(0,d.toDateString)((0,f.default)(e)):null)}),eg=(0,E.useStyles)({name:A,classes:h,props:g,className:Y,style:$,classNames:w,styles:T,unstyled:H,attributes:B,vars:W,varsResolver:I,rootSelector:"mobileMonthView"}),ew=(0,V.useRef)([]),eY=(0,V.useRef)(null),ex=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let r of t)if("background"!==r.display&&(0,f.default)(r.start).isSame((0,f.default)(e),"month")){if(!function(e,t){if((0,m.isMultidayEvent)(e)){let a=(0,f.default)(e.start).startOf("day"),n=(0,f.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,f.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,c.validateEvent)(r),a),n.has(r.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${r.id}`);n.add(r.id)}return a}({date:R,events:(0,s.expandRecurringEvents)({events:er,rangeStart:(0,f.default)(R).startOf("month").toDate(),rangeEnd:(0,f.default)(R).endOf("month").toDate(),expansionLimit:em})}),eM=F?(0,n.getWeekdaysNames)({locale:eh.getLocale(G),format:K,firstDayOfWeek:eh.getFirstDayOfWeek(U)}).map((e,t)=>(0,V.createElement)("div",{...eg("mobileMonthViewWeekday"),key:t},e)):null,eS=(0,o.getMonthDays)({month:(0,f.default)(R).format("YYYY-MM-DD"),firstDayOfWeek:eh.getFirstDayOfWeek(U),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let n=!(0,i.isSameMonth)(e,R),r=eh.getWeekendDays(J).includes((0,f.default)(e).day()),o=(0,f.default)(e).locale(G||eh.locale).format("MMMM D, YYYY"),d=Q?.((0,f.default)(e).format("YYYY-MM-DD"))||{},l=(0,f.default)(e).isSame(ey,"day")&&et,s=eD&&(0,f.default)(e).isSame((0,f.default)(eD),"day"),c=ex[(0,f.default)(e).format("YYYY-MM-DD")]||[],m=en||!n;m&&null===eY.current&&(eY.current={weekIndex:t,dayIndex:a});let h=eY.current?.weekIndex===t&&eY.current?.dayIndex===a,v=c.slice(0,3).map(e=>(0,V.createElement)("div",{...eg("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,x.getThemeColor)(e.color,ev)}}),key:e.id}));return(0,V.createElement)(p.UnstyledButton,{"aria-label":o,"aria-selected":s||void 0,...d,...eg("mobileMonthViewDay",{className:d.className,style:d.style}),key:e,ref:e=>{e&&(ew.current[t]||(ew.current[t]=[]),ew.current[t][a]=e)},mod:[{outside:n,weekend:r,today:l,selected:s,static:"static"===ei,hidden:!m},d.mod],tabIndex:"static"!==ei&&m&&h?0:-1,onClick:"static"!==ei&&m?t=>{let a=(0,f.default)(e).format("YYYY-MM-DD");ep(a),q?.(a,t),d.onClick?.(t)}:void 0,onKeyDown:"static"!==ei&&m?e=>{(0,u.handleMonthViewKeyDown)({controlsRef:ew,weekIndex:t,dayIndex:a,event:e})}:void 0},m?(0,f.default)(e).format("D"):null,m&&(0,j.jsx)("div",{...eg("mobileMonthViewDayIndicators"),children:v}))}),n=Z?.((0,f.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,r.getWeekNumber)(e);return(0,V.createElement)("div",{...eg("mobileMonthViewWeek"),key:t},z&&(0,j.jsx)(p.UnstyledButton,{"aria-label":`Week ${o}`,...n,onClick:"static"===ei?void 0:t=>{X?.((0,f.default)(e[0]).format("YYYY-MM-DD"),t),n.onClick?.(t)},mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,...eg("mobileMonthViewWeekNumber",{className:n.className,style:n.style}),children:o},o),a)}),eb=(eD?(0,l.sortEvents)(ex[(0,f.default)(eD).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,f.default)(e.start).format("HH:mm"),a=(0,f.default)(e.end).format("HH:mm"),n=(0,j.jsxs)(y.Box,{...eg("mobileMonthViewEventBody"),children:[(0,j.jsx)("div",{...eg("mobileMonthViewEventColor",{style:{backgroundColor:(0,x.getThemeColor)(e.color,ev)}})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(D.Text,{...eg("mobileMonthViewEventTitle"),children:e.title}),(0,j.jsx)(D.Text,{...eg("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),r={...eg("mobileMonthViewEvent"),onClick:"static"===ei?void 0:t=>{eu?.(e,t)},tabIndex:"static"===ei?-1:0,children:n};return"function"==typeof ed?(0,j.jsx)(V.default.Fragment,{children:ed(e,r)},e.id):(0,V.createElement)(p.UnstyledButton,{...r,key:e.id})}),eE=eD?(0,a.formatDate)({locale:eh.getLocale(G),date:eD,format:el}):"",{dir:ek}=(0,M.useDirection)(),eV=(0,a.formatDate)({locale:eh.getLocale(G),date:R,format:"MMMM YYYY"}),eC=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(p.UnstyledButton,{...eg("mobileMonthViewHeaderBackButton"),onClick:es,mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,children:[(0,j.jsx)(v.AccordionChevron,{style:{transform:`rotate(${"rtl"===ek?-90:90}deg)`},size:20}),(0,f.default)(R).format("YYYY")]}),(0,j.jsx)(D.Text,{...eg("mobileMonthViewHeaderLabel"),children:eV})]});return(0,j.jsxs)(y.Box,{...eg("mobileMonthView"),mod:{"with-week-numbers":z},...ef,children:[(0,j.jsx)("div",{...eg("mobileMonthViewHeader"),children:"function"==typeof ec?ec({mode:ei,date:R,defaultHeader:eC}):eC}),(0,j.jsxs)(y.Box,{...eg("mobileMonthViewCalendar"),mod:{"with-weekdays":F},children:[eM&&(0,j.jsxs)("div",{...eg("mobileMonthViewWeekdays"),children:[z&&(0,j.jsx)("div",{...eg("mobileMonthViewWeekdaysCorner")}),eM]}),eS]}),(0,j.jsxs)(y.Box,{...eg("mobileMonthViewEventsList"),children:[(0,j.jsx)(D.Text,{...eg("mobileMonthViewEventsHeader"),children:eE}),eb.length>0?eb:(0,j.jsx)(D.Text,{...eg("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});$.displayName="@mantine/schedule/MobileMonthView",$.classes=h,$.varsResolver=I,e.s(["MobileMonthView",0,$],433396)},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),n=e.i(494834),r=e.i(4332),o=e.i(657068),i=e.i(966696),d=e.i(298008),l=e.i(898770),s=e.i(27748),u=e.i(621304),c=e.i(855578),m=e.i(232471),f=e.i(284629),h=e.i(317477),v=e.i(951254),y=e.i(191788),D=e.i(205693),p=e.i(391398);function g({month:e,getStyles:r,monthLabelFormat:o="MMMM",withWeekNumbers:i,withWeekDays:d,locale:l,firstDayOfWeek:w,weekdayFormat:Y,weekendDays:x,getDayProps:M,onDayClick:S,onWeekNumberClick:b,onMonthClick:E,getWeekNumberProps:k,highlightToday:V,groupedEvents:C,mode:j,withOutsideDays:O,__getDayRef:I,__onDayKeyDown:$,firstDayIndex:T}){let H=(0,D.useDatesContext)(),W=(0,v.useMantineTheme)(),B=(0,n.default)(),A=d?(0,u.getWeekdaysNames)({locale:H.getLocale(l),format:Y,firstDayOfWeek:H.getFirstDayOfWeek(w)}).map((e,t)=>(0,y.createElement)("div",{...r("yearViewWeekday"),key:t},e)):null,R=(0,t.getMonthDays)({month:(0,n.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:H.getFirstDayOfWeek(w),consistentWeeks:!0}).map((t,o)=>{let d=t.map((t,i)=>{let d=!(0,a.isSameMonth)(t,e);if(d&&!O)return(0,y.createElement)("div",{...r("yearViewDay"),"data-day-placeholder":!0,key:t});let s=H.getWeekendDays(x).includes((0,n.default)(t).day()),u=(0,n.default)(t).locale(l||H.locale).format("MMMM D, YYYY"),c=M?.((0,n.default)(t).format("YYYY-MM-DD"))||{},m=(0,n.default)(t).isSame(B,"day")&&V,v=C?.[(0,n.default)(t).format("YYYY-MM-DD")]||[],D=T&&o===T.weekIndex&&i===T.dayIndex,g="static"!==j&&!d&&D,w=v.slice(0,3).map(e=>(0,y.createElement)("div",{...r("yearViewDayIndicator",{style:{backgroundColor:(0,h.getThemeColor)(e.color,W)}}),key:e.id}));return(0,y.createElement)(f.UnstyledButton,{"aria-label":u,...c,...r("yearViewDay",{className:c.className,style:c.style}),key:t,mod:[{outside:d,weekend:s,today:m,static:"static"===j},c.mod],tabIndex:g?0:-1,ref:e=>{e&&I?.(o,i,e)},onKeyDown:e=>{c.onKeyDown?.(e),$?.(e,{weekIndex:o,dayIndex:i,date:t})},onClick:"static"===j?void 0:e=>{S?.((0,n.default)(t).format("YYYY-MM-DD"),e),c.onClick?.(e)}},(0,n.default)(t).format("D"),(0,p.jsx)("div",{...r("yearViewDayIndicators"),children:w}))}),s=k?.((0,n.default)(t[0]).format("YYYY-MM-DD"))||{},u=(0,c.getWeekNumber)(t);return(0,y.createElement)("div",{...r("yearViewWeek"),key:o},i&&(0,p.jsx)(f.UnstyledButton,{"aria-label":`Week ${u}`,title:`Week ${u}`,...s,onClick:"static"===j?void 0:e=>{b?.((0,n.default)(t[0]).format("YYYY-MM-DD"),e),s.onClick?.(e)},mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...r("yearViewWeekNumber",{className:s.className,style:s.style}),children:u},u),d)});return(0,p.jsxs)(m.Box,{mod:[{"with-week-numbers":i,"with-weekdays":d,static:"static"===j}],...r("yearViewMonth"),children:[(0,p.jsx)(f.UnstyledButton,{onClick:"static"===j?void 0:t=>E?.((0,n.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...r("yearViewMonthCaption"),children:(0,s.formatDate)({locale:H.getLocale(l),date:e,format:o})}),A&&(0,p.jsxs)("div",{...r("yearViewWeekdays"),children:[i&&(0,p.jsx)("div",{...r("yearViewWeekdaysCorner")}),A]}),R]})}var w={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},Y=e.i(481178),x=e.i(275519),M=e.i(433512),S=e.i(44091),b=e.i(62904),E=e.i(391466);let k={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},V=(0,Y.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,M.getRadius)(t):void 0}})),C=(0,x.factory)(e=>{let s=(0,S.useProps)("YearView",k,e),{date:u,onDateChange:c,events:f,monthLabelFormat:h,withWeekNumbers:v,withWeekDays:Y,locale:x,firstDayOfWeek:M,weekdayFormat:C,weekendDays:j,onMonthClick:O,onDayClick:I,onWeekNumberClick:$,getDayProps:T,getWeekNumberProps:H,highlightToday:W,labels:B,withOutsideDays:A,withHeader:R,monthYearSelectProps:_,onViewChange:N,previousControlProps:L,nextControlProps:P,todayControlProps:z,viewSelectProps:F,__staticSelector:G,classNames:U,className:K,style:J,styles:Z,unstyled:Q,vars:q,attributes:X,radius:ee,mode:et,recurrenceExpansionLimit:ea,...en}=s,er=(0,D.useDatesContext)(),eo=(0,E.useStyles)({name:G,classes:w,props:s,className:K,style:J,classNames:U,styles:Z,unstyled:Q,vars:q,varsResolver:V,attributes:X,rootSelector:"yearView"}),{resolvedClassNames:ei,resolvedStyles:ed}=(0,b.useResolvedStylesApi)({classNames:U,styles:Z,props:s}),el=function({date:e,events:t}){let a={};if(void 0===t)return a;let r=new Set;for(let o of t)if((0,n.default)(o.start).isSame((0,n.default)(e),"year")){if(!function(e,t){if((0,l.isMultidayEvent)(e)){let a=(0,n.default)(e.start).startOf("day"),r=(0,n.default)(e.end).startOf("day");for(let n=a;n.isBefore(r)||n.isSame(r);n=n.add(1,"day")){let a=n.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,n.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,d.validateEvent)(o),a),r.has(o.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${o.id}`);r.add(o.id)}return a}({date:u,events:(0,o.expandRecurringEvents)({events:f,rangeStart:(0,n.default)(u).startOf("year").toDate(),rangeEnd:(0,n.default)(u).endOf("year").toDate(),expansionLimit:ea})}),es=(0,y.useRef)([]),eu=0,ec=(function(e){let t=(0,n.default)(e).startOf("year").toDate(),a=[[],[],[],[]],r=0;for(let e=0;e<4;e+=1)for(let o=0;o<3;o+=1)a[e].push((0,n.default)(t).add(r,"months").format("YYYY-MM-DD")),r+=1;return a})((0,n.default)(u).format("YYYY-MM-DD")).flat().map(e=>{let r=eu;return eu++,(0,p.jsx)(g,{month:e,getStyles:eo,monthLabelFormat:h,withWeekNumbers:v,withWeekDays:Y,locale:x,firstDayOfWeek:M,weekdayFormat:C||(e=>(0,n.default)(e).locale(er.getLocale(x)).format("dd").slice(0,1)),weekendDays:j,getDayProps:T,getWeekNumberProps:H,onMonthClick:O,onDayClick:I,onWeekNumberClick:$,highlightToday:W,groupedEvents:el,mode:et,withOutsideDays:A,firstDayIndex:(e=>{let r=(0,t.getMonthDays)({month:(0,n.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:er.getFirstDayOfWeek(M),consistentWeeks:!0});for(let t=0;t<r.length;t++){let n=r[t];for(let r=0;r<n.length;r++){let o=n[r];if((0,a.isSameMonth)(o,e))return{weekIndex:t,dayIndex:r}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(es.current[r])||(es.current[r]=[]),Array.isArray(es.current[r][e])||(es.current[r][e]=[]),es.current[r][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:n,event:r}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(r.key);if(o){r.preventDefault();let i=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!i)return;!function e({controlsRef:t,direction:a,monthIndex:n,weekIndex:r,dayIndex:o,size:i}){let d=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:n,size:r}){let o=r[t];if(!o)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=r[t-1];if(!e||0===e.length)return null;let a=e.length-1,o=Math.min(n,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:o}}let e=Math.min(n,o[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===o.length-1){if(t===r.length-1)return null;let e=r[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(n,e[0]-1)}}let e=Math.min(n,o[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===n){if(0===a){if(0===t)return null;let e=r[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:o[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:n-1};case"right":if(n===o[a]-1){if(a===o.length-1){if(t===r.length-1)return null;let e=r[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:n+1};default:return null}}({direction:a,monthIndex:n,weekIndex:r,dayIndex:o,size:i});if(!d)return;let l=t.current?.[d.monthIndex]?.[d.weekIndex]?.[d.dayIndex];l&&(l.disabled||l.getAttribute("data-hidden")||l.getAttribute("data-outside")||l.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:d.monthIndex,weekIndex:d.weekIndex,dayIndex:d.dayIndex,size:i}):l.focus())}({controlsRef:e,direction:o,monthIndex:t,weekIndex:a,dayIndex:n,size:i})}}({controlsRef:es,monthIndex:r,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,p.jsxs)(m.Box,{...eo("yearView"),mod:{static:"static"===et},...en,children:[R&&(0,p.jsx)(i.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,r.toDateString)((0,n.default)(u).subtract(1,"year").startOf("year")),next:()=>(0,r.toDateString)((0,n.default)(u).add(1,"year").startOf("year")),today:()=>(0,r.toDateString)((0,n.default)())},control:{monthYearSelect:{locale:x,withMonths:!1,yearValue:(0,n.default)(u).get("year"),monthValue:(0,n.default)(u).get("month"),onYearChange:e=>c?.((0,r.toDateString)((0,n.default)(u).set("year",e).startOf("year"))),..._}},labels:B,onDateChange:c,onViewChange:N,previousControlProps:L,nextControlProps:P,todayControlProps:z,viewSelectProps:F,stylesApiProps:{classNames:ei,styles:ed,attributes:X,__staticSelector:G,radius:ee}}),(0,p.jsx)("div",{...eo("yearViewMonths"),children:ec})]})});C.displayName="@mantine/schedule/YearView",C.classes=w,C.varsResolver=V,e.s(["YearView",0,C],122308)},238715,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
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
`;var d=e.i(391398),l=e.i(200183),s=e.i(433396),u=e.i(168574),c=e.i(315401),m=e.i(122308),f={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},h=e.i(232471),v=e.i(275519),y=e.i(44091),D=e.i(391466),p=e.i(579560);let g={defaultView:"week",mode:"default",layout:"default"},w=(0,v.factory)(e=>{let t=(0,y.useProps)("Schedule",g,e),{classNames:a,className:n,style:r,styles:o,unstyled:i,vars:v,date:w,defaultDate:Y,onDateChange:x,view:M,defaultView:S,onViewChange:b,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:O,onEventDrop:I,canDragEvent:$,onEventDragStart:T,onEventDragEnd:H,onTimeSlotClick:W,onAllDaySlotClick:B,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:N,onExternalEventDrop:L,withEventResize:P,onEventResize:z,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U,layout:K,dayViewProps:J,weekViewProps:Z,monthViewProps:Q,yearViewProps:q,mobileMonthViewProps:X,__staticSelector:ee,mod:et,...ea}=t,en=(0,D.useStyles)({name:ee||"Schedule",classes:f,props:t,className:n,style:r,classNames:a,styles:o,unstyled:i,vars:v}),[er,eo]=(0,p.useUncontrolled)({value:M,defaultValue:S,onChange:b}),[ei,ed]=(0,p.useUncontrolled)({value:w,defaultValue:Y??new Date}),el=e=>{ed(e),x?.(e)},es=e=>{eo(e),b?.(e)},eu=e=>{el(e),es("month")},ec={date:ei,onDateChange:el,view:er,onViewChange:es,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:"static"!==U&&O,onEventDrop:I,canDragEvent:$,onEventDragStart:T,onEventDragEnd:H,onTimeSlotClick:W,onAllDaySlotClick:B,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:N,onExternalEventDrop:L,withEventResize:"static"!==U&&P,onEventResize:z,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U},em=(()=>{switch(er){case"day":return(0,d.jsx)(l.DayView,{...ec,...J});case"week":return(0,d.jsx)(c.WeekView,{...ec,...Z});case"month":return(0,d.jsx)(u.MonthView,{...ec,...Q});case"year":return(0,d.jsx)(m.YearView,{...ec,onMonthClick:eu,...q});default:return null}})(),ef=(()=>{switch(er){case"day":case"week":case"month":return(0,d.jsx)(s.MobileMonthView,{date:ei,onDateChange:el,events:E,locale:k,radius:V,labels:C,mode:U,recurrenceExpansionLimit:G,onYearClick:()=>es("year"),onEventClick:R,...X});case"year":return(0,d.jsx)(m.YearView,{...ec,onMonthClick:eu,...q});default:return null}})();return"responsive"===K?(0,d.jsxs)(h.Box,{...en("root"),mod:[{layout:K},et],...ea,children:[(0,d.jsx)(h.Box,{...en("desktopView"),children:em}),(0,d.jsx)(h.Box,{...en("mobileView"),children:ef})]}):(0,d.jsx)(h.Box,{...en("root"),mod:et,...ea,children:em})});w.displayName="@mantine/schedule/Schedule",w.classes=f;let Y={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(w,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var x=e.i(191788);let M=(0,a.default)().format("YYYY-MM-DD"),S=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),b=[{id:1,title:"Morning Standup",start:`${M} 09:00:00`,end:`${M} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${M} 10:00:00`,end:`${M} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${M} 12:00:00`,end:`${M} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${S} 14:00:00`,end:`${S} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${S} 15:30:00`,end:`${S} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${M} 00:00:00`,end:(0,a.default)(M).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(b);return(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var k=e.i(883364);let V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)("week"),[a,n]=(0,x.useState)(new Date);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(k.Text,{size:"sm",mb:"md",children:["Current view: ",(0,d.jsx)("b",{children:e})]}),(0,d.jsx)(w,{view:e,onViewChange:t,date:a,onDateChange:e=>n(new Date(e)),events:o})]})},code:`
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
`},C={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(w,{events:o,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1},monthViewProps:{withWeekNumbers:!0,firstDayOfWeek:0},yearViewProps:{withWeekNumbers:!0}})},code:`
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
`},j={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(w,{events:o,defaultView:"month"})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
`},O={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,d.jsx)(w,{events:o,layout:"responsive"})})},code:`
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
`};var I=e.i(162077),$=e.i(37930),T=e.i(658109),H=e.i(725695);let W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(o),[n,r]=(0,x.useState)(!1),[i,l]=(0,x.useState)(null),s=(0,x.useRef)((0,a.default)().format("YYYY-MM-DD")),u=()=>{let e=s.current;l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)};return(0,d.jsxs)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,d.jsx)(w,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onDayClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),r(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(s.current=e)},renderHeader:({defaultHeader:e})=>(0,d.jsxs)(H.Group,{justify:"space-between",w:"100%",children:[(0,d.jsx)(H.Group,{justify:"space-between",flex:"1",children:e}),(0,d.jsx)(T.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:u,"aria-label":"Create new event",children:(0,d.jsx)($.PlusIcon,{size:18})})]})}}),(0,d.jsx)(I.EventForm,{opened:n,onClose:()=>r(!1),onExitTransitionEnd:()=>l(null),values:i,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:i?.id?()=>{i?.id&&t(e=>e.filter(e=>e.id!==i.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:I._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:i,language:"tsx",fileName:"events.ts"}]};var B=e.i(20035);let A=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)([]),n=(0,x.useRef)(1);return(0,d.jsxs)(B.Grid,{children:[(0,d.jsxs)(B.Grid.Col,{span:{base:12,sm:3},children:[(0,d.jsx)(k.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),A.map(e=>(0,d.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,d.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(r),l=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},_=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(_),[n,r]=(0,x.useState)([]),[o,i]=(0,x.useState)(!1),l=(0,x.useRef)(1);return(0,d.jsxs)(B.Grid,{children:[(0,d.jsx)(B.Grid.Col,{span:{base:12,sm:3},children:(0,d.jsxs)(h.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:d}=JSON.parse(o),l=n.find(e=>String(e.id)===String(d));if(!l)return;let s=(0,a.default)(l.end).diff((0,a.default)(l.start),"minutes");t(e=>[...e,{title:l.title,duration:s,color:l.color||"blue"}]),r(e=>e.filter(e=>e.id!==l.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,d.jsx)(k.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,d.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,d.jsx)(k.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,d.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(w,{events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(n),s=d.add(i.duration,"minutes");r(e=>[...e,{id:l.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},L=(0,a.default)().format("YYYY-MM-DD"),P=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),z=[{id:1,title:"Morning Standup",start:`${L} 09:00:00`,end:`${L} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${L} 10:00:00`,end:`${L} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${L} 12:00:00`,end:`${L} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${P} 14:00:00`,end:`${P} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${P} 15:30:00`,end:`${P} 16:30:00`,color:"cyan"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(z),a=({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))};return(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:a,withEventResize:!0,onEventResize:a})},code:`
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
`},G=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)("2024-01-15");return(0,d.jsx)(w,{view:"week",date:e,onDateChange:t,events:G})},code:`
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
`},K=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"lunch-block",title:"Lunch break",start:`${K} 12:00:00`,end:`${K} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${K} 14:00:00`,end:`${K} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${K} 10:00:00`,end:`${K} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${K} 14:30:00`,end:`${K} 15:30:00`,color:"green"}],Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(K);return(0,d.jsx)(w,{date:e,onDateChange:t,events:J})},code:`
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
`};var Q=e.i(428127),q=e.i(441058);let X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,x.useState)("week"),i=function(e,t){let n=(0,a.default)(e);switch(t){case"day":return{previous:n.subtract(1,"day"),next:n.add(1,"day")};case"week":return{previous:n.subtract(1,"week"),next:n.add(1,"week")};case"month":return{previous:n.subtract(1,"month").startOf("month"),next:n.add(1,"month").startOf("month")};case"year":return{previous:n.subtract(1,"year").startOf("year"),next:n.add(1,"year").startOf("year")};default:return{previous:n,next:n}}}(e,n);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(Q.ScheduleHeader,{children:[(0,d.jsx)(Q.ScheduleHeader.Previous,{onClick:()=>t(i.previous.format("YYYY-MM-DD"))}),(0,d.jsx)(Q.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let n=(0,a.default)(e);switch(t){case"day":return n.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,q.getStartOfWeek)({date:e,firstDayOfWeek:1})),n=t.add(6,"day");if(t.month()===n.month())return`${t.format("MMM D")} – ${n.format("D, YYYY")}`;return`${t.format("MMM D")} – ${n.format("MMM D, YYYY")}`}case"month":return n.format("MMMM YYYY");case"year":return n.format("YYYY");default:return""}}(e,n)}),(0,d.jsx)(Q.ScheduleHeader.Next,{onClick:()=>t(i.next.format("YYYY-MM-DD"))}),(0,d.jsx)(Q.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,d.jsx)(Q.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,d.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,d.jsx)(Q.ScheduleHeader.ViewSelect,{value:n,onChange:r})})]}),(0,d.jsx)(w,{date:e,onDateChange:t,view:n,onViewChange:r,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
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
`};var ee=(0,t.__exportAll)({backgroundEvents:()=>Z,bidirectionalDragDrop:()=>N,controlled:()=>V,customHeader:()=>X,defaultView:()=>j,dragDrop:()=>E,eventForm:()=>W,eventResize:()=>F,externalDragDrop:()=>R,recurringEvents:()=>U,responsiveLayout:()=>O,usage:()=>Y,viewProps:()=>C});e.s(["ScheduleDemos",0,ee],238715)}]);