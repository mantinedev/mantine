(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,276995,e=>{"use strict";var t=e.i(494834);e.s(["calculateMonthDropDate",0,function({draggedEvent:e,targetDay:a}){let n=(0,t.default)(e.end).diff((0,t.default)(e.start),"millisecond"),r=(0,t.default)(e.start),o=(0,t.default)(a).startOf("day").hour(r.hour()).minute(r.minute()).second(r.second()).millisecond(r.millisecond()),i=o.add(n,"millisecond");return{start:o.toDate(),end:i.toDate()}}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:r=1}){let o=(0,a.default)().day(r),i=[];for(let a=0;a<7;a+=1)i.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:n}));return i}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:r}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),i=o.format("YYYY-MM-DD"),d=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let r=0===t?6:t-1;for(;n.day()!==r;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),l=[],s=(0,a.default)((0,t.getStartOfWeek)({date:i,firstDayOfWeek:n}));for(;(0,a.default)(s).isBefore(d,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(s.format("YYYY-MM-DD 00:00:00")),s=s.add(1,"day");l.push(e)}if(r&&l.length<6){let e=l[l.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;l.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");l.push(e)}}return l}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:r,size:o}){let i=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===r-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:r,size:o});if(!i)return;let d=t.current?.[i.weekIndex]?.[i.dayIndex];d&&(d.disabled||d.getAttribute("data-hidden")||d.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:o}):d.focus())}({controlsRef:e,direction:r,weekIndex:t,dayIndex:a,size:o})}}])},168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),n=e.i(605520),r=e.i(753381),o=e.i(4332),i=e.i(494834);function d({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:r}){if(!t)return{start:(0,o.toDateString)((0,i.default)(e).startOf("month")),end:(0,o.toDateString)((0,i.default)(e).endOf("month"))};let l=(0,n.getMonthDays)({month:e,firstDayOfWeek:r,consistentWeeks:a});return{start:l[0][0],end:l[l.length-1][6]}}var l=e.i(276995),s=e.i(657068),u=e.i(783261),c=e.i(376879),m=e.i(663551),f=e.i(201867),h=e.i(891343),v=e.i(67312),y=e.i(966696),D=e.i(647170);function g(e){let t=new Set(e),a=[],n=0;for(let e=0;e<7;e+=1)t.has(e)?a.push(-1):(a.push(n),n+=1);return a}var p=e.i(298008),w=e.i(441058),Y={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},x=e.i(232471),M=e.i(19300),S=e.i(284629),b=e.i(481178),k=e.i(275519),E=e.i(433512),V=e.i(951254),C=e.i(44091),j=e.i(62904),I=e.i(391466),O=e.i(191788),$=e.i(205693),T=e.i(391398);let W=(0,b.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,E.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),B={__staticSelector:"MonthView",withWeekDays:!0,withWeekendDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},H=(0,k.factory)(e=>{let b=(0,C.useProps)("MonthView",B,e),{classNames:k,className:E,style:H,styles:A,unstyled:R,attributes:_,vars:N,mod:L,date:P,onDateChange:z,withWeekNumbers:F,withWeekDays:U,withWeekendDays:G,locale:K,weekdayFormat:J,firstDayOfWeek:Q,weekendDays:q,__staticSelector:X,getDayProps:Z,getWeekNumberProps:ee,onDayClick:et,onWeekNumberClick:ea,consistentWeeks:en,highlightToday:er,radius:eo,withOutsideDays:ei,withHeader:ed,monthYearSelectProps:el,onViewChange:es,todayControlProps:eu,nextControlProps:ec,previousControlProps:em,viewSelectProps:ef,events:eh,moreEventsProps:ev,renderEventBody:ey,renderEvent:eD,withEventsDragAndDrop:eg,onEventDrop:ep,canDragEvent:ew,onEventDragStart:eY,onEventDragEnd:ex,onEventClick:eM,withDragSlotSelect:eS,onSlotDragEnd:eb,labels:ek,mode:eE,scrollAreaProps:eV,onExternalEventDrop:eC,recurrenceExpansionLimit:ej,maxEventsPerDay:eI,withAgenda:eO,...e$}=b,[eT,eW]=(0,O.useState)(!1),eB=Math.min(10,Math.max(1,eI??2)),eH=(0,I.useStyles)({name:X,classes:Y,props:b,className:E,style:H,classNames:k,styles:A,unstyled:R,attributes:_,vars:N,varsResolver:W,rootSelector:"monthView"}),{resolvedClassNames:eA,resolvedStyles:eR}=(0,j.useResolvedStylesApi)({classNames:k,styles:A,props:b}),e_={classNames:eA,styles:eR,attributes:_,__staticSelector:X,radius:eo},eN=(0,V.useMantineTheme)(),eL=(0,$.useDatesContext)(),eP=eL.getFirstDayOfWeek(Q),ez=eL.getWeekendDays(q),eF=G?[]:Array.from({length:7},(e,t)=>t).filter(e=>ez.includes((eP+e)%7)),eU=new Set(eF),eG=7-eF.length,eK=g(eF),eJ=d({month:P,withOutsideDays:ei,consistentWeeks:en,firstDayOfWeek:eL.getFirstDayOfWeek(Q)}),eQ=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:n,consistentWeeks:r}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let o=new Set,l=[],s=d({month:e,withOutsideDays:n,consistentWeeks:r,firstDayOfWeek:a});for(let e of t)if((0,i.default)(e.end).isAfter(s.start,"day")||(0,i.default)(e.start).isBefore(s.end,"day")){if(l.push((0,p.validateEvent)(e)),o.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);o.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:n}){let r={},o={},d=new Set,{weeks:l,groupedByDay:s}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let n=[],r={},o=(0,i.default)((0,w.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;o.isBefore(t)||o.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=o.format("YYYY-MM-DD 00:00:00");e.push(t),r[t]||(r[t]=[]),o=o.add(1,"day")}n.push(e)}return{weeks:n,groupedByDay:r}}({rangeStart:n?(0,i.default)(n.start):(0,i.default)(e).startOf("month"),rangeEnd:n?(0,i.default)(n.end):(0,i.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<l.length;e++)r[e.toString()]=[],o[e.toString()]=[];for(let e of t){let t=(0,i.default)(e.start).startOf("day"),a=(0,i.default)(e.end),n=0===a.hour()&&0===a.minute()&&0===a.second()?a.startOf("day").subtract(1,"day"):a.startOf("day"),u=n.isAfter(t);for(let a=0;a<l.length;a++){let c=l[a],m=(0,i.default)(c[0]).startOf("day"),f=(0,i.default)(c[6]).endOf("day");if((t.isBefore(f)||t.isSame(f,"day"))&&(n.isAfter(m)||n.isSame(m,"day"))){let{startDayIndex:l,daysSpanned:c,startOffset:h,width:v,hanging:y}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:n,isMultiday:r}){let o=e,i=t,d=e.isBefore(a),l=t.isAfter(n);o.isBefore(a)&&(o=a),i.isAfter(n)&&(i=n);let s=o.diff(a,"day"),u=Math.max(1,i.diff(a,"day")-s+ +!!r);return{startDayIndex:s,daysSpanned:u,startOffset:s/7*100,width:u/7*100,hanging:d&&l?"both":d?"start":l?"end":"none"}}({eventStart:t,eventEnd:n,weekStart:m,weekEnd:f,isMultiday:u});if("background"===e.display){o[a.toString()].push({...e,position:{startOffset:h,width:v,weekIndex:a,row:0,hanging:y}});continue}let D=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:n}){let r=0;for(let o of e){let e=(0,i.default)(o.start).startOf("day"),d=(e.isBefore(n)||e.isSame(n,"day")?n:e).diff(n,"day");d+(o.position?.width||0)/100*7>t&&d<t+a&&(r=Math.max(r,(o.position?.row||0)+1))}return r}({existingEvents:r[a.toString()],startDayIndex:l,daysSpanned:c,weekStart:m}),g={...e,position:{startOffset:h,width:v,weekIndex:a,row:D,hanging:y}};r[a.toString()].push(g),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:n,eventsAddedToDay:r,weekIdx:o}){if(0===o||!r.has(e.id.toString())){let o=t;for(;o.isBefore(a)||o.isSame(a,"day");){let t=o.format("YYYY-MM-DD 00:00:00");n[t]&&n[t].push(e),o=o.add(1,"day")}r.add(e.id.toString())}}({positionedEvent:g,eventStart:t,eventEnd:n,groupedByDay:s,eventsAddedToDay:d,weekIdx:a})}}}return{groupedByWeek:r,groupedByDay:s,backgroundByWeek:o}}({date:e,events:l,firstDayOfWeek:a,range:s})}({date:P,events:(0,s.expandRecurringEvents)({events:eh,rangeStart:(0,i.default)(eJ.start).startOf("day").toDate(),rangeEnd:(0,i.default)(eJ.end).endOf("day").toDate(),expansionLimit:ej}),firstDayOfWeek:eL.getFirstDayOfWeek(Q),withOutsideDays:ei,consistentWeeks:en}),eq=(0,O.useCallback)((e,t)=>{eC&&eC(e.dataTransfer,`${(0,i.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eC]),eX=(0,u.useDragDropHandlers)({enabled:eg,mode:eE,onEventDrop:ep,canDragEvent:ew,onEventDragStart:eY,onEventDragEnd:ex,calculateDropTarget:(e,t)=>(0,l.calculateMonthDropDate)({draggedEvent:t,targetDay:e}),onExternalDrop:eC?eq:void 0}),eZ=(eg||!!eC)&&"static"!==eE,e0=(0,O.useRef)([]),e1=(0,c.useSlotDragSelect)({enabled:eS&&"static"!==eE,onDragEnd:(e,t)=>{if(!eb)return;let a=e0.current[e],n=e0.current[t];a&&n&&eb((0,i.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,i.default)(n).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),e3=(0,O.useRef)([]),e2=(0,n.getMonthDays)({month:(0,i.default)(P).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:eL.getFirstDayOfWeek(Q),consistentWeeks:en&&ei}),e4=(()=>{for(let e=0;e<e2.length;e++){let t=e2[e],a=-1;for(let n=0;n<t.length;n++){if(eU.has(n))continue;a+=1;let o=t[n];if((0,r.isSameMonth)(P,o)||ei)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),e8=U?(0,t.getWeekdaysNames)({locale:eL.getLocale(K),format:J,firstDayOfWeek:eP}).map((e,t)=>({day:e,index:t})).filter(({index:e})=>!eU.has(e)).map(({day:e,index:t})=>(0,O.createElement)("div",{...eH("monthViewWeekday"),key:t},e)):null,e9="month";e0.current=e2.map(e=>e.filter((e,t)=>!eU.has(t))).flat();let e7=e2.map((e,t)=>{e3.current[t]=[];let n=e.map((e,t)=>({day:e,columnIndex:t})).filter(({columnIndex:e})=>!eU.has(e)).map(({day:e},a)=>{let n=!(0,r.isSameMonth)(P,e),o=ez.includes((0,i.default)(e).day()),d=(0,i.default)(e).locale(K||eL.locale).format("MMMM D, YYYY"),l=Z?.((0,i.default)(e).format("YYYY-MM-DD"))||{},s=(0,i.default)(e).isSame((0,i.default)(),"day")&&er;if(n&&!ei)return(0,T.jsx)("div",{"data-static":!0,...eH("monthViewDay",{style:l.style})},e);let u=t===e4.weekIndex&&a===e4.dayIndex,c=eX.isDropTarget(e),m=t*eG+a,f=e1.isSlotSelected(m,e9);return(0,O.createElement)(S.UnstyledButton,{"aria-label":d,...l,...eH("monthViewDay",{className:l.className,style:l.style}),key:e,ref:e=>{e&&(e3.current[t]||(e3.current[t]=[]),e3.current[t][a]=e)},"data-drag-slot-index":eS&&"static"!==eE?m:void 0,"data-drag-slot-group":eS&&"static"!==eE?e9:void 0,onClick:"static"===eE?void 0:t=>{et?.((0,i.default)(e).format("YYYY-MM-DD"),t),l.onClick?.(t)},onPointerDown:eS&&"static"!==eE?e=>e1.handleSlotPointerDown(e,m,e9):void 0,onKeyDown:e=>{(0,D.handleMonthViewKeyDown)({controlsRef:e3,weekIndex:t,dayIndex:a,event:e}),l.onKeyDown?.(e)},mod:[{outside:n,weekend:o,today:s,"drop-target":c,"drag-selected":f,static:"static"===eE},l.mod],"data-outside":n||void 0,tabIndex:"static"===eE?-1:u?0:-1,onDragOver:eZ?t=>eX.handleDragOver(t,e):void 0,onDragLeave:eZ?eX.handleDragLeave:void 0,onDrop:eZ?t=>eX.handleDrop(t,e):void 0},(0,T.jsx)("span",{"data-today":s||void 0,...eH("monthViewDayLabel"),children:(0,i.default)(e).format("D")}))}),d=ee?.((0,i.default)(e[0]).format("YYYY-MM-DD"))||{},l=(0,a.getWeekNumber)(e),s=(eQ.backgroundByWeek[t]||[]).flatMap(e=>{let a=eN.variantColorResolver({color:e.color||eN.primaryColor,theme:eN,variant:"light",autoContrast:!0}),n="function"==typeof ey?ey(e):e.title,r=Math.round(e.position.startOffset/(100/7)),o=Math.max(1,Math.round(e.position.width/(100/7)));return(0===eF.length?[{startOffset:e.position.startOffset,width:e.position.width}]:function(e,t,a,n){if(n<=0)return[];let r=[],o=null,i=null,d=()=>{null!==o&&null!==i&&(r.push({startOffset:o/n*100,width:(i-o+1)/n*100}),o=null,i=null)};for(let n=e;n<=t;n+=1){let e=a[n];if(void 0===e||-1===e){d();continue}null===o&&(o=e),i=e}return d(),r}(r,r+o-1,eK,eG)).map((r,o)=>{let i={key:`bg-${e.id}-${t}-${o}`,...eH("monthViewBackgroundEvent",{style:{left:`calc(${r.startOffset}% + 2px)`,width:`calc(${r.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:n};if("function"==typeof eD)return eD(e,i);let{key:d,...l}=i;return(0,T.jsx)(x.Box,{...l},d)})}),u=100/eB,c=(function({events:e,groupedByDay:t,maxEventsPerDay:a,week:n,hiddenColumns:r=[],columnsCount:o=7}){let i=new Set(r),d=g(r),l=new Map,s=new Map,u=new Map;e.forEach((e,t)=>{let a;l.set(e,t),s.set(e,{startDayIndex:a=Math.max(0,Math.round(e.position.startOffset/14.285714285714286)),endDayIndex:Math.min(6,a+Math.max(1,Math.round(e.position.width/14.285714285714286))-1)})});let c=(e,t,a)=>{u.has(e)||u.set(e,new Map),u.get(e).set(t,a)},m=new Map;for(let r=0;r<n.length;r+=1){if(i.has(r))continue;let o=t[n[r]]||[],d=new Set(o.map(e=>e.id)),u=e.filter(e=>{let t=s.get(e);return d.has(e.id)&&r>=t.startDayIndex&&r<=t.endDayIndex}),f=o.length>a?u.filter(e=>e.position.row<a):u,h=new Set;[...f].sort((e,t)=>{let a=e.position.row-t.position.row;return 0!==a?a:l.get(e)-l.get(t)}).forEach(e=>{let t=m.get(e)??e.position.row;if(t>=a||h.has(t)){let e=function(e,t){for(let a=0;a<t;a+=1)if(!e.has(a))return a;return null}(h,a);if(null===e)return;t=e}h.add(t),c(e,r,t),m.set(e,t)})}return e.flatMap(e=>{let t=s.get(e),a=u.get(e),n=[],r=null,i=a=>{var r;let i,l,s,u,c,m,f=(i=a.startDayIndex===t.startDayIndex,l=a.endDayIndex===t.endDayIndex,s=d[a.startDayIndex],u=d[a.endDayIndex],{...e.position,startOffset:s/o*100,width:(u-s+1)/o*100,row:a.row,hanging:(r=e.position.hanging,c=i&&("start"===r||"both"===r),m=l&&("end"===r||"both"===r),c&&m?"both":c?"start":m?"end":"none")});n.push({event:e,position:f,clipStart:a.startDayIndex>t.startDayIndex,clipEnd:a.endDayIndex<t.endDayIndex,key:`${e.id}-${e.position.weekIndex}-${a.startDayIndex}-${a.endDayIndex}-${a.row}`})};for(let e=t.startDayIndex;e<=t.endDayIndex;e+=1){let t=a?.get(e);if(void 0===t){r&&(i(r),r=null);continue}r&&r.row===t?r.endDayIndex=e:(r&&i(r),r={startDayIndex:e,endDayIndex:e,row:t})}return r&&i(r),n})})({events:eQ.groupedByWeek[t]||[],groupedByDay:eQ.groupedByDay,maxEventsPerDay:eB,week:e,hiddenColumns:eF,columnsCount:eG}).map(e=>{let t=eX.isDraggableEvent(e.event);return(0,T.jsx)(h.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:ey,renderEvent:eD,radius:eo,mode:eE,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:eM?t=>eM(e.event,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*u}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${u}% - 2px)`}},e.key)}),m=e.map((e,t)=>{if(eU.has(t))return null;let a=eQ.groupedByDay[e]||[],n=Math.max(0,a.length-eB);if(n<=0)return null;let r=eK[t]/eG*100,o=1/eG*100;return(0,T.jsx)(v.MoreEvents,{events:a,moreEventsCount:n,mode:eE,labels:ek,renderEventBody:ey,renderEvent:eD,onEventClick:eM,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${r}% + 1px)`,width:`calc(${o}% - 1px)`,height:"22px",paddingInline:4},...ev},`more-${e}`)});return(0,O.createElement)("div",{...eH("monthViewWeek"),key:t},F&&(0,T.jsx)(S.UnstyledButton,{"aria-label":`Week ${l}`,...d,onClick:"static"===eE?void 0:t=>{es?.("week"),z?.((0,o.toDateString)(e[0])),ea?.((0,i.default)(e[0]).format("YYYY-MM-DD"),t),d.onClick?.(t)},mod:{static:"static"===eE},tabIndex:"static"===eE?-1:0,...eH("monthViewWeekNumber",{className:d.className,style:d.style}),children:l},l),(0,O.createElement)("div",{...eH("monthViewEvents"),key:"week-events"},s,c,m),n)}),e5=(0,T.jsxs)(x.Box,{mod:[{"with-week-numbers":F,"with-weekdays":U,"without-weekend-days":eF.length>0,static:"static"===eE,"slot-dragging":e1.isDragging,"event-interaction":eX.dragContextValue.isDragging},L],__vars:eF.length>0?{"--month-view-columns":`${eG}`}:void 0,...eH("monthView"),...e$,children:[ed&&(0,T.jsx)(y.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,i.default)(P).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,i.default)(P).add(1,"month").startOf("month")),today:()=>(0,o.toDateString)((0,i.default)())},control:{monthYearSelect:{locale:K,yearValue:(0,i.default)(P).get("year"),monthValue:(0,i.default)(P).get("month"),onYearChange:e=>z?.((0,o.toDateString)((0,i.default)(P).set("year",e).startOf("month"))),onMonthChange:e=>z?.((0,o.toDateString)((0,i.default)(P).set("month",e).startOf("month"))),...el}},labels:ek,onDateChange:z,onViewChange:es,previousControlProps:em,nextControlProps:ec,todayControlProps:eu,viewSelectProps:ef,stylesApiProps:e_,onAgendaClick:eO?()=>eW(e=>!e):void 0,agendaActive:eT}),eT&&(0,T.jsx)(m.AgendaView,{rangeStart:(0,i.default)(P).startOf("month").format("YYYY-MM-DD"),rangeEnd:(0,i.default)(P).endOf("month").format("YYYY-MM-DD"),events:eh,locale:K,labels:ek,mode:eE,onEventClick:eM,recurrenceExpansionLimit:ej,...e_}),!eT&&(0,T.jsx)(M.ScrollArea,{scrollbarSize:4,...eV,...eH("monthViewScrollArea",{className:eV?.className,style:eV?.style}),children:(0,T.jsxs)("div",{...eH("monthViewInner"),children:[e8&&(0,T.jsxs)("div",{...eH("monthViewWeekdays"),children:[F&&(0,T.jsx)("div",{...eH("monthViewWeekdaysCorner")}),e8]}),e7]})})]});return eg?(0,T.jsx)(f.DragContext.Provider,{value:eX.dragContextValue,children:e5}):e5});H.displayName="@mantine/schedule/MonthView",H.classes=Y,H.varsResolver=W,e.s(["MonthView",0,H],168574)},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},r=e.i(424302),o=e.i(392862),i=e.i(284629),d=e.i(275519),l=e.i(44091),s=e.i(391466),u=e.i(541772),c=e.i(391398);let m={dropdownType:"popover"},f=(0,d.factory)(e=>{let d=(0,l.useProps)("MoreEvents",m,e),{classNames:f,className:h,style:v,styles:y,unstyled:D,vars:g,attributes:p,radius:w,dropdownType:Y,events:x,moreEventsCount:M,popoverProps:S,modalProps:b,onDropdownClose:k,children:E,modalTitle:V,renderEventBody:C,renderEvent:j,id:I,labels:O,mode:$,onEventClick:T,...W}=d,[B,H]=(0,u.useDisclosure)(),A=(0,s.useStyles)({name:"MoreEvents",classes:n,props:d,className:h,style:v,classNames:f,styles:y,unstyled:D,attributes:p,vars:g,rootSelector:"moreEventsButton"}),R=()=>{H.close(),k?.()},_=(0,c.jsx)("div",{...A("moreEventsList"),children:x.map(e=>(0,c.jsx)(a.ScheduleEvent,{radius:w,event:e,size:"md",renderEventBody:C,renderEvent:j,mode:$,onClick:T?t=>T(e,t):void 0,children:e.title},e.id))});return(0,c.jsxs)(c.Fragment,{children:["modal"===Y&&(0,c.jsx)(r.Modal,{opened:B,onClose:R,unstyled:D,radius:w,title:V,...b,children:_}),(0,c.jsxs)(o.Popover,{position:"bottom-start",width:260,opened:B,trapFocus:!0,returnFocus:!1,unstyled:D,disabled:S?.disabled||"modal"===Y,radius:w,transitionProps:{transition:"pop",duration:120},offset:-46,id:I,...S,onChange:e=>{e||(S?.onChange?.(e),R())},children:[(0,c.jsx)(o.Popover.Target,{children:(0,c.jsx)(i.UnstyledButton,{...A("moreEventsButton"),mod:{static:"static"===$},onClick:()=>H.toggle(),...W,children:(0,t.getLabel)("moreLabel",O)(M)})}),(0,c.jsx)(o.Popover.Dropdown,{...A("moreEventsDropdown"),children:_})]})]})});f.displayName="@mantine/schedule/MoreEvents",f.classes=n,e.s(["MoreEvents",0,f],67312)},922621,e=>{"use strict";var t=e.i(969610),a=e.i(813982),n=e.i(751198),r=e.i(532965);e.s(["getDayPositionedEvents",0,function({events:e,startTime:o,endTime:i,intervalMinutes:d,date:l}){let s=[],u=[];for(let c of(0,a.sortEvents)(e)){let e=(0,t.isAllDayEvent)({event:c,date:l}),a=0;for(;function({columns:e,columnIndex:a,event:r,allDay:o,date:i}){return!!e[a]&&e[a].some(e=>{let a=(0,t.isAllDayEvent)({event:e,date:i}),d=(0,n.isEventsOverlap)(e,r);return!o&&!a&&d})}({columns:s,columnIndex:a,event:c,allDay:e,date:l});)a++;s[a]||(s[a]=[]),s[a].push(c);let m=e?{top:0,height:100}:(0,r.getDayPosition)({event:c,startTime:o,endTime:i,intervalMinutes:d});u.push({...c,position:{...m,allDay:e,column:a,width:0,offset:0,overlaps:0}})}for(let e of u){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let r=[];for(let t of u)t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&r.push(t);let o=a;for(let e of r)for(let t of(o=Math.max(o,e.position.column),u))t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&(o=Math.max(o,t.position.column));let i=o+1,d=i;for(let e of r)e.position.column>a&&e.position.column<d&&(d=e.position.column);let l=d-a;e.position.overlaps=i,e.position.width=l/i*100,e.position.offset=100*a/i}return u}])},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),r=e.i(898496),o=e.i(4332),i=e.i(969610),d=e.i(575148),l=e.i(792930),s=e.i(505696),u=e.i(657068),c=e.i(245086),m=e.i(783261),f=e.i(637079),h=e.i(376879),v=e.i(663551),y=e.i(312709),D=e.i(201867),g=e.i(891343),p=e.i(67312),w=e.i(966696),Y=e.i(298008),x=e.i(68642),M=e.i(532965),S=e.i(922621),b=e.i(494834),k={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},E=e.i(232471),V=e.i(19300),C=e.i(284629),j=e.i(481178),I=e.i(275519),O=e.i(433512),$=e.i(779177),T=e.i(951254),W=e.i(44091),B=e.i(62904),H=e.i(391466),A=e.i(417241),R=e.i(332977),_=e.i(191788),N=e.i(205693),L=e.i(391398);let P={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withSubHourGridLines:!0,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},z=(0,j.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,O.getRadius)(t):void 0,"--day-view-slot-height":(0,$.rem)(a),"--day-view-all-day-slot-height":(0,$.rem)(n)}})),F=(0,I.factory)(e=>{let j=(0,W.useProps)("DayView",P,e),{classNames:I,className:O,style:$,styles:F,unstyled:U,attributes:G,vars:K,__staticSelector:J,startTime:Q,endTime:q,intervalMinutes:X,withSubHourGridLines:Z,withAllDaySlot:ee,date:et,locale:ea,slotLabelFormat:en,headerFormat:er,getCurrentTime:eo,withCurrentTimeIndicator:ei,withCurrentTimeBubble:ed,withHeader:el,radius:es,onDateChange:eu,onViewChange:ec,previousControlProps:em,nextControlProps:ef,todayControlProps:eh,viewSelectProps:ev,slotHeight:ey,allDaySlotHeight:eD,scrollAreaProps:eg,events:ep,moreEventsProps:ew,renderEventBody:eY,renderEvent:ex,labels:eM,highlightBusinessHours:eS,businessHours:eb,withEventsDragAndDrop:ek,onEventDrop:eE,canDragEvent:eV,onEventDragStart:eC,onEventDragEnd:ej,onTimeSlotClick:eI,onAllDaySlotClick:eO,onEventClick:e$,withDragSlotSelect:eT,onSlotDragEnd:eW,mode:eB,startScrollTime:eH,onExternalEventDrop:eA,withEventResize:eR,onEventResize:e_,canResizeEvent:eN,recurrenceExpansionLimit:eL,getTimeSlotProps:eP,withAgenda:ez,...eF}=j,[eU,eG]=(0,_.useState)(!1),eK=(0,H.useStyles)({name:J,classes:k,props:j,className:O,style:$,classNames:I,styles:F,unstyled:U,attributes:G,vars:K,varsResolver:z,rootSelector:"dayView"}),{resolvedClassNames:eJ,resolvedStyles:eQ}=(0,B.useResolvedStylesApi)({classNames:I,styles:F,props:j}),eq={classNames:eJ,styles:eQ,attributes:G,__staticSelector:J,radius:es},eX=(0,T.useMantineTheme)(),eZ=(0,N.useDatesContext)(),e0=()=>eo?(0,b.default)(eo()):(0,b.default)(),e1=ei??(0,b.default)(et).isSame(e0(),"day"),e3=(0,r.getDayTimeIntervals)({startTime:Q,endTime:q,intervalMinutes:X}),e2=(0,_.useRef)([]),e4=(0,_.useRef)(null),e8=(0,_.useRef)(null),e9=(0,R.useMergedRef)(e4,eg?.viewportRef);(0,c.useAutoScrollOnDrag)({viewportRef:e4,enabled:(ek||!!eA)&&"static"!==eB}),(0,A.useIsomorphicEffect)(()=>{if(!eH||!e4.current||0===e2.current.length)return;let e=e3.findIndex(e=>e.startTime>=eH);if(e<0)return;let t=e2.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=e4.current.getBoundingClientRect();e4.current.scrollTo({left:0,top:a.top-n.top})},[]);let e7=(0,_.useCallback)(e=>{let t=e2.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=e2.current[0],n=e2.current[e2.current.length-1];if(!a||!n)return null;let r=a.getBoundingClientRect(),o=n.getBoundingClientRect();return e.clientY<r.top?0:e.clientY>o.bottom?e2.current.length-1:null},[]),e5=(0,h.useSlotDragSelect)({enabled:eT&&"static"!==eB,onDragEnd:(e,t)=>{if(!eW)return;let a=(0,b.default)(et).format("YYYY-MM-DD");eW(`${a} ${e3[e].startTime}`,`${a} ${e3[t].endTime}`)}}),e6=function({events:e,date:t,startTime:a,endTime:n,intervalMinutes:r}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let o=new Set,d=[],l=[],s=(0,b.default)(t).startOf("day"),u=(0,b.default)(t).endOf("day");for(let t of e){let e=(0,b.default)(t.start),r=(0,b.default)(t.end),i=e.isSame(s,"day"),c=!i&&"background"===t.display&&e.isBefore(u)&&r.isAfter(s);if(i||c){if(i&&!(0,x.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,Y.validateEvent)(t);if(o.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);o.add(t.id),"background"===t.display?l.push(e):d.push(e)}}let c=(0,S.getDayPositionedEvents)({events:d,startTime:a,endTime:n,intervalMinutes:r,date:t}),m=[],f=[];for(let e of c)e.position.allDay?m.push(e):f.push(e);let h=[],v=[];for(let e of l){let o=(0,b.default)(e.start),d=(0,b.default)(e.end),l=o.isBefore(s)?s:o,c=d.isAfter(u)?u:d,m={...e,start:l.format("YYYY-MM-DD HH:mm:ss"),end:c.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:m,date:t}))v.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:o}=(0,M.getDayPosition)({event:m,startTime:a,endTime:n,intervalMinutes:r});if(o<=0)continue;h.push({...e,position:{top:t,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:m,regularEvents:f,backgroundTimedEvents:h,backgroundAllDayEvents:v}}({events:(0,u.expandRecurringEvents)({events:ep,rangeStart:(0,b.default)(et).startOf("day").toDate(),rangeEnd:(0,b.default)(et).endOf("day").toDate(),expansionLimit:eL}),date:et,startTime:Q,endTime:q,intervalMinutes:X}),te=(0,_.useCallback)((e,t)=>{if(!eA)return;let a=(0,b.default)(et).format("YYYY-MM-DD");eA(e.dataTransfer,`${a} ${e3[t].startTime}`)},[eA,et,e3]),tt=(0,m.useDragDropHandlers)({enabled:ek,mode:eB,onEventDrop:eE,canDragEvent:eV,onEventDragStart:eC,onEventDragEnd:ej,calculateDropTarget:(e,t)=>{let a=e3[e].startTime;return(0,l.calculateDropTime)({draggedEvent:t,targetDate:et,targetSlotTime:a,intervalMinutes:X})},onExternalDrop:eA?te:void 0}),ta=(0,f.useEventResize)({enabled:eR,mode:eB,startTime:Q,endTime:q,intervalMinutes:X,onEventResize:e_,canResizeEvent:eN}),tn=(ek||!!eA)&&"static"!==eB,tr=e6.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:et}),a=!t&&tt.isDraggableEvent(e),n=!t&&ta.isResizableEvent(e),r=ta.getResizePosition(e.id),o=r?r.top:e.position.top,d=r?r.height:e.position.height;return(0,L.jsx)(g.ScheduleEvent,{event:e,renderEventBody:eY,renderEvent:ex,autoSize:!0,draggable:a,withResize:n,isResizing:null!==r,onResizeStart:n?(t,a)=>{e8.current&&ta.handleResizeStart({event:e,edge:t,container:e8.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,b.default)(et).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eB,onClick:e$?t=>{ta.wasResizing()||e$(e,t)}:void 0,...eq,style:{...eq.styles?.event,top:`${o}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),to=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e6.allDayEvents.length}),ti=e6.allDayEvents.slice(0,to.visibleEventsCount).map(e=>(0,L.jsx)(g.ScheduleEvent,{event:e,renderEventBody:eY,renderEvent:ex,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eB,onClick:e$?t=>e$(e,t):void 0,...eq},e.id)),td=(0,b.default)(et).format("YYYY-MM-DD"),tl=e3.map((e,a)=>{let r=tt.isDropTarget(a),o=e5.isSlotSelected(a,td),i=`${td} ${e.startTime}`,d=`${td} ${e.endTime}`,{onClick:l,...u}=eP?.({start:i,end:d})||{},c="static"===eB?void 0:e=>{eI?.({slotStart:i,slotEnd:d,nativeEvent:e}),l?.(e)};return(0,_.createElement)(C.UnstyledButton,{...eK("dayViewSlot"),key:e.startTime,ref:e=>{e2.current[a]=e},mod:{first:0===a,"hour-start":e.isHourStart,...(0,s.getBusinessHoursMod)({time:e.startTime,businessHours:eb,highlightBusinessHours:eS}),"drop-target":r,"drag-selected":o,static:"static"===eB},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(X)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",eM)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eB?-1:0===a?0:-1,"data-drag-slot-index":eT&&"static"!==eB?a:void 0,"data-drag-slot-group":eT&&"static"!==eB?td:void 0,onKeyDown:"static"===eB?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<e3.length-1?(e.preventDefault(),e2.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),e2.current[a-1]?.focus())},onPointerDown:eT&&"static"!==eB?e=>e5.handleSlotPointerDown(e,a,td):void 0,onClick:c,onDragOver:tn?e=>e.preventDefault():void 0,...u})}),ts=e3.reduce((e,t)=>{if(t.isHourStart){let n=(0,b.default)(`${(0,b.default)(et).format("YYYY-MM-DD")} ${t.startTime}`),r=(0,a.formatDate)({locale:eZ.getLocale(ea),date:n,format:en});e.push((0,_.createElement)(E.Box,{...eK("dayViewSlotLabel"),key:t.startTime,mod:(0,s.getBusinessHoursMod)({time:t.startTime,businessHours:eb,highlightBusinessHours:eS})},r))}return e},[]),tu=e6.backgroundAllDayEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),a="function"==typeof eY?eY(e):e.title,n={key:`bg-allday-${e.id}`,...eK("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ex)return ex(e,n);let{key:r,...o}=n;return(0,L.jsx)(E.Box,{...o},r)}),tc=e6.backgroundTimedEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),a="function"==typeof eY?eY(e):e.title,n={key:e.id,...eK("dayViewBackgroundEvent",{style:{...(0,d.getTimeAxisEventStyle)({start:e.position.top,span:e.position.height,axis:"vertical"}),width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof ex)return ex(e,n);let{key:r,...o}=n;return(0,L.jsx)(E.Box,{...o},r)}),tm=(0,L.jsxs)(E.Box,{...eK("dayView"),mod:{static:"static"===eB,"slot-dragging":e5.isDragging,"hide-sub-hour-grid-lines":!Z,"event-interaction":ta.isResizing||tt.dragContextValue.isDragging},...eF,children:[el&&(0,L.jsx)(w.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,b.default)(et).subtract(1,"day")),next:()=>(0,o.toDateString)((0,b.default)(et).add(1,"day")),today:()=>(0,o.toDateString)(e0())},control:{title:(0,a.formatDate)({locale:eZ.getLocale(ea),date:et,format:er}),miw:140},labels:eM,onDateChange:eu,onViewChange:ec,previousControlProps:em,nextControlProps:ef,todayControlProps:eh,viewSelectProps:ev,stylesApiProps:eq,onAgendaClick:ez?()=>eG(e=>!e):void 0,agendaActive:eU}),eU&&(0,L.jsx)(v.AgendaView,{rangeStart:(0,b.default)(et).startOf("day").format("YYYY-MM-DD"),rangeEnd:(0,b.default)(et).endOf("day").format("YYYY-MM-DD"),events:ep,locale:ea,labels:eM,mode:eB,onEventClick:e$,recurrenceExpansionLimit:eL,...eq}),!eU&&(0,L.jsx)(V.ScrollArea.Autosize,{scrollbarSize:4,...eg,...eK("dayViewScrollArea",{className:eg?.className,style:eg?.style}),viewportRef:e9,children:(0,L.jsxs)(E.Box,{...eK("dayViewInner"),children:[(0,L.jsxs)("div",{...eK("dayViewSlotLabels"),children:[ee&&(0,L.jsx)(E.Box,{...eK("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",eM)}),ts]}),(0,L.jsxs)("div",{...eK("dayViewSlots"),children:[ee&&(0,L.jsxs)("div",{...eK("dayViewAllDay"),children:[tu,(0,L.jsxs)("div",{...eK("dayViewAllDayEvents"),children:[ti,to.hiddenEventsCount>0&&(0,L.jsx)(p.MoreEvents,{events:e6.allDayEvents,moreEventsCount:to.hiddenEventsCount,renderEventBody:eY,renderEvent:ex,mode:eB,labels:eM,onEventClick:e$,...eq,...ew})]}),(0,L.jsx)(C.UnstyledButton,{...eK("dayViewSlot"),mod:{"all-day":!0,static:"static"===eB},"aria-label":`${(0,t.getLabel)("timeSlot",eM)} ${(0,t.getLabel)("allDay",eM)}`,onClick:"static"!==eB&&eO?e=>{eO((0,b.default)(et).format("YYYY-MM-DD"),e)}:void 0})]}),(0,L.jsxs)("div",{ref:e8,...eK("dayViewTimeSlots"),onDragOver:tn?e=>{let t=e7(e);null!==t&&tt.handleDragOver(e,t)}:void 0,onDragLeave:tn?tt.handleDragLeave:void 0,onDrop:tn?e=>{let t=e7(e);null!==t&&tt.handleDrop(e,t)}:void 0,children:[tc,tr,e1&&(0,L.jsx)(y.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:en,withTimeBubble:ed,withThumb:!ed,locale:ea,startTime:Q,endTime:q,intervalMinutes:X,getCurrentTime:eo,...eq}),tl]})]})]})})]});return ek?(0,L.jsx)(D.DragContext.Provider,{value:tt.dragContextValue,children:tm}):tm});F.displayName="@mantine/schedule/DayView",F.classes=k,F.varsResolver=z,e.s(["DayView",0,F],200183)},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),n=e.i(494834),r=e.i(4332),o=e.i(657068),i=e.i(966696),d=e.i(298008),l=e.i(898770),s=e.i(27748),u=e.i(621304),c=e.i(855578),m=e.i(232471),f=e.i(284629),h=e.i(317477),v=e.i(951254),y=e.i(191788),D=e.i(205693),g=e.i(391398);function p({month:e,getStyles:r,monthLabelFormat:o="MMMM",withWeekNumbers:i,withWeekDays:d,locale:l,firstDayOfWeek:w,weekdayFormat:Y,weekendDays:x,getDayProps:M,onDayClick:S,onWeekNumberClick:b,onMonthClick:k,getWeekNumberProps:E,highlightToday:V,groupedEvents:C,mode:j,withOutsideDays:I,__getDayRef:O,__onDayKeyDown:$,firstDayIndex:T}){let W=(0,D.useDatesContext)(),B=(0,v.useMantineTheme)(),H=(0,n.default)(),A=d?(0,u.getWeekdaysNames)({locale:W.getLocale(l),format:Y,firstDayOfWeek:W.getFirstDayOfWeek(w)}).map((e,t)=>(0,y.createElement)("div",{...r("yearViewWeekday"),key:t},e)):null,R=(0,t.getMonthDays)({month:(0,n.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:W.getFirstDayOfWeek(w),consistentWeeks:!0}).map((t,o)=>{let d=t.map((t,i)=>{let d=!(0,a.isSameMonth)(t,e);if(d&&!I)return(0,y.createElement)("div",{...r("yearViewDay"),"data-day-placeholder":!0,key:t});let s=W.getWeekendDays(x).includes((0,n.default)(t).day()),u=(0,n.default)(t).locale(l||W.locale).format("MMMM D, YYYY"),c=M?.((0,n.default)(t).format("YYYY-MM-DD"))||{},m=(0,n.default)(t).isSame(H,"day")&&V,v=C?.[(0,n.default)(t).format("YYYY-MM-DD")]||[],D=T&&o===T.weekIndex&&i===T.dayIndex,p="static"!==j&&!d&&D,w=v.slice(0,3).map(e=>(0,y.createElement)("div",{...r("yearViewDayIndicator",{style:{backgroundColor:(0,h.getThemeColor)(e.color,B)}}),key:e.id}));return(0,y.createElement)(f.UnstyledButton,{"aria-label":u,...c,...r("yearViewDay",{className:c.className,style:c.style}),key:t,mod:[{outside:d,weekend:s,today:m,static:"static"===j},c.mod],tabIndex:p?0:-1,ref:e=>{e&&O?.(o,i,e)},onKeyDown:e=>{c.onKeyDown?.(e),$?.(e,{weekIndex:o,dayIndex:i,date:t})},onClick:"static"===j?void 0:e=>{S?.((0,n.default)(t).format("YYYY-MM-DD"),e),c.onClick?.(e)}},(0,n.default)(t).format("D"),(0,g.jsx)("div",{...r("yearViewDayIndicators"),children:w}))}),s=E?.((0,n.default)(t[0]).format("YYYY-MM-DD"))||{},u=(0,c.getWeekNumber)(t);return(0,y.createElement)("div",{...r("yearViewWeek"),key:o},i&&(0,g.jsx)(f.UnstyledButton,{"aria-label":`Week ${u}`,title:`Week ${u}`,...s,onClick:"static"===j?void 0:e=>{b?.((0,n.default)(t[0]).format("YYYY-MM-DD"),e),s.onClick?.(e)},mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...r("yearViewWeekNumber",{className:s.className,style:s.style}),children:u},u),d)});return(0,g.jsxs)(m.Box,{mod:[{"with-week-numbers":i,"with-weekdays":d,static:"static"===j}],...r("yearViewMonth"),children:[(0,g.jsx)(f.UnstyledButton,{onClick:"static"===j?void 0:t=>k?.((0,n.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===j},tabIndex:"static"===j?-1:0,...r("yearViewMonthCaption"),children:(0,s.formatDate)({locale:W.getLocale(l),date:e,format:o})}),A&&(0,g.jsxs)("div",{...r("yearViewWeekdays"),children:[i&&(0,g.jsx)("div",{...r("yearViewWeekdaysCorner")}),A]}),R]})}var w={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},Y=e.i(481178),x=e.i(275519),M=e.i(433512),S=e.i(44091),b=e.i(62904),k=e.i(391466);let E={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},V=(0,Y.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,M.getRadius)(t):void 0}})),C=(0,x.factory)(e=>{let s=(0,S.useProps)("YearView",E,e),{date:u,onDateChange:c,events:f,monthLabelFormat:h,withWeekNumbers:v,withWeekDays:Y,locale:x,firstDayOfWeek:M,weekdayFormat:C,weekendDays:j,onMonthClick:I,onDayClick:O,onWeekNumberClick:$,getDayProps:T,getWeekNumberProps:W,highlightToday:B,labels:H,withOutsideDays:A,withHeader:R,monthYearSelectProps:_,onViewChange:N,previousControlProps:L,nextControlProps:P,todayControlProps:z,viewSelectProps:F,__staticSelector:U,classNames:G,className:K,style:J,styles:Q,unstyled:q,vars:X,attributes:Z,radius:ee,mode:et,recurrenceExpansionLimit:ea,...en}=s,er=(0,D.useDatesContext)(),eo=(0,k.useStyles)({name:U,classes:w,props:s,className:K,style:J,classNames:G,styles:Q,unstyled:q,vars:X,varsResolver:V,attributes:Z,rootSelector:"yearView"}),{resolvedClassNames:ei,resolvedStyles:ed}=(0,b.useResolvedStylesApi)({classNames:G,styles:Q,props:s}),el=function({date:e,events:t}){let a={};if(void 0===t)return a;let r=new Set;for(let o of t)if((0,n.default)(o.start).isSame((0,n.default)(e),"year")){if(!function(e,t){if((0,l.isMultidayEvent)(e)){let a=(0,n.default)(e.start).startOf("day"),r=(0,n.default)(e.end).startOf("day");for(let n=a;n.isBefore(r)||n.isSame(r);n=n.add(1,"day")){let a=n.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,n.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,d.validateEvent)(o),a),r.has(o.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${o.id}`);r.add(o.id)}return a}({date:u,events:(0,o.expandRecurringEvents)({events:f,rangeStart:(0,n.default)(u).startOf("year").toDate(),rangeEnd:(0,n.default)(u).endOf("year").toDate(),expansionLimit:ea})}),es=(0,y.useRef)([]),eu=0,ec=(function(e){let t=(0,n.default)(e).startOf("year").toDate(),a=[[],[],[],[]],r=0;for(let e=0;e<4;e+=1)for(let o=0;o<3;o+=1)a[e].push((0,n.default)(t).add(r,"months").format("YYYY-MM-DD")),r+=1;return a})((0,n.default)(u).format("YYYY-MM-DD")).flat().map(e=>{let r=eu;return eu++,(0,g.jsx)(p,{month:e,getStyles:eo,monthLabelFormat:h,withWeekNumbers:v,withWeekDays:Y,locale:x,firstDayOfWeek:M,weekdayFormat:C||(e=>(0,n.default)(e).locale(er.getLocale(x)).format("dd").slice(0,1)),weekendDays:j,getDayProps:T,getWeekNumberProps:W,onMonthClick:I,onDayClick:O,onWeekNumberClick:$,highlightToday:B,groupedEvents:el,mode:et,withOutsideDays:A,firstDayIndex:(e=>{let r=(0,t.getMonthDays)({month:(0,n.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:er.getFirstDayOfWeek(M),consistentWeeks:!0});for(let t=0;t<r.length;t++){let n=r[t];for(let r=0;r<n.length;r++){let o=n[r];if((0,a.isSameMonth)(o,e))return{weekIndex:t,dayIndex:r}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(es.current[r])||(es.current[r]=[]),Array.isArray(es.current[r][e])||(es.current[r][e]=[]),es.current[r][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:n,event:r}){let o=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(r.key);if(o){r.preventDefault();let i=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!i)return;!function e({controlsRef:t,direction:a,monthIndex:n,weekIndex:r,dayIndex:o,size:i}){let d=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:n,size:r}){let o=r[t];if(!o)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=r[t-1];if(!e||0===e.length)return null;let a=e.length-1,o=Math.min(n,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:o}}let e=Math.min(n,o[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===o.length-1){if(t===r.length-1)return null;let e=r[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(n,e[0]-1)}}let e=Math.min(n,o[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===n){if(0===a){if(0===t)return null;let e=r[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:o[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:n-1};case"right":if(n===o[a]-1){if(a===o.length-1){if(t===r.length-1)return null;let e=r[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:n+1};default:return null}}({direction:a,monthIndex:n,weekIndex:r,dayIndex:o,size:i});if(!d)return;let l=t.current?.[d.monthIndex]?.[d.weekIndex]?.[d.dayIndex];l&&(l.disabled||l.getAttribute("data-hidden")||l.getAttribute("data-outside")||l.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:d.monthIndex,weekIndex:d.weekIndex,dayIndex:d.dayIndex,size:i}):l.focus())}({controlsRef:e,direction:o,monthIndex:t,weekIndex:a,dayIndex:n,size:i})}}({controlsRef:es,monthIndex:r,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,g.jsxs)(m.Box,{...eo("yearView"),mod:{static:"static"===et},...en,children:[R&&(0,g.jsx)(i.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,r.toDateString)((0,n.default)(u).subtract(1,"year").startOf("year")),next:()=>(0,r.toDateString)((0,n.default)(u).add(1,"year").startOf("year")),today:()=>(0,r.toDateString)((0,n.default)())},control:{monthYearSelect:{locale:x,withMonths:!1,yearValue:(0,n.default)(u).get("year"),monthValue:(0,n.default)(u).get("month"),onYearChange:e=>c?.((0,r.toDateString)((0,n.default)(u).set("year",e).startOf("year"))),..._}},labels:H,onDateChange:c,onViewChange:N,previousControlProps:L,nextControlProps:P,todayControlProps:z,viewSelectProps:F,stylesApiProps:{classNames:ei,styles:ed,attributes:Z,__staticSelector:U,radius:ee}}),(0,g.jsx)("div",{...eo("yearViewMonths"),children:ec})]})});C.displayName="@mantine/schedule/YearView",C.classes=w,C.varsResolver=V,e.s(["YearView",0,C],122308)},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(621304),r=e.i(855578),o=e.i(605520),i=e.i(753381),d=e.i(4332),l=e.i(813982),s=e.i(657068),u=e.i(647170),c=e.i(298008),m=e.i(898770),f=e.i(494834),h={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},v=e.i(462138),y=e.i(232471),D=e.i(883364),g=e.i(284629),p=e.i(481178),w=e.i(275519),Y=e.i(433512),x=e.i(317477),M=e.i(323283),S=e.i(951254),b=e.i(44091),k=e.i(391466),E=e.i(579560),V=e.i(191788),C=e.i(205693),j=e.i(391398);let I={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},O=(0,p.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,Y.getRadius)(t)}})),$=(0,w.factory)(e=>{let p=(0,b.useProps)("MobileMonthView",I,e),{classNames:w,className:Y,style:$,styles:T,unstyled:W,vars:B,attributes:H,__staticSelector:A,date:R,onDateChange:_,selectedDate:N,defaultSelectedDate:L,onSelectedDateChange:P,withWeekNumbers:z,withWeekDays:F,locale:U,firstDayOfWeek:G,weekdayFormat:K,weekendDays:J,getWeekNumberProps:Q,getDayProps:q,onDayClick:X,onWeekNumberClick:Z,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:en,events:er,labels:eo,mode:ei,renderEvent:ed,eventsHeaderFormat:el,onYearClick:es,onEventClick:eu,renderHeader:ec,recurrenceExpansionLimit:em,...ef}=p,eh=(0,C.useDatesContext)(),ev=(0,S.useMantineTheme)(),ey=(0,f.default)(),[eD,eg]=(0,E.useUncontrolled)({value:N,defaultValue:L??(0,d.toDateString)(ey),onChange:e=>P?.(e?(0,d.toDateString)((0,f.default)(e)):null)}),ep=(0,k.useStyles)({name:A,classes:h,props:p,className:Y,style:$,classNames:w,styles:T,unstyled:W,attributes:H,vars:B,varsResolver:O,rootSelector:"mobileMonthView"}),ew=(0,V.useRef)([]),eY=(0,V.useRef)(null),ex=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let r of t)if("background"!==r.display&&(0,f.default)(r.start).isSame((0,f.default)(e),"month")){if(!function(e,t){if((0,m.isMultidayEvent)(e)){let a=(0,f.default)(e.start).startOf("day"),n=(0,f.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,f.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,c.validateEvent)(r),a),n.has(r.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${r.id}`);n.add(r.id)}return a}({date:R,events:(0,s.expandRecurringEvents)({events:er,rangeStart:(0,f.default)(R).startOf("month").toDate(),rangeEnd:(0,f.default)(R).endOf("month").toDate(),expansionLimit:em})}),eM=F?(0,n.getWeekdaysNames)({locale:eh.getLocale(U),format:K,firstDayOfWeek:eh.getFirstDayOfWeek(G)}).map((e,t)=>(0,V.createElement)("div",{...ep("mobileMonthViewWeekday"),key:t},e)):null,eS=(0,o.getMonthDays)({month:(0,f.default)(R).format("YYYY-MM-DD"),firstDayOfWeek:eh.getFirstDayOfWeek(G),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let n=!(0,i.isSameMonth)(e,R),r=eh.getWeekendDays(J).includes((0,f.default)(e).day()),o=(0,f.default)(e).locale(U||eh.locale).format("MMMM D, YYYY"),d=q?.((0,f.default)(e).format("YYYY-MM-DD"))||{},l=(0,f.default)(e).isSame(ey,"day")&&et,s=eD&&(0,f.default)(e).isSame((0,f.default)(eD),"day"),c=ex[(0,f.default)(e).format("YYYY-MM-DD")]||[],m=en||!n;m&&null===eY.current&&(eY.current={weekIndex:t,dayIndex:a});let h=eY.current?.weekIndex===t&&eY.current?.dayIndex===a,v=c.slice(0,3).map(e=>(0,V.createElement)("div",{...ep("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,x.getThemeColor)(e.color,ev)}}),key:e.id}));return(0,V.createElement)(g.UnstyledButton,{"aria-label":o,"aria-selected":s||void 0,...d,...ep("mobileMonthViewDay",{className:d.className,style:d.style}),key:e,ref:e=>{e&&(ew.current[t]||(ew.current[t]=[]),ew.current[t][a]=e)},mod:[{outside:n,weekend:r,today:l,selected:s,static:"static"===ei,hidden:!m},d.mod],tabIndex:"static"!==ei&&m&&h?0:-1,onClick:"static"!==ei&&m?t=>{let a=(0,f.default)(e).format("YYYY-MM-DD");eg(a),X?.(a,t),d.onClick?.(t)}:void 0,onKeyDown:"static"!==ei&&m?e=>{(0,u.handleMonthViewKeyDown)({controlsRef:ew,weekIndex:t,dayIndex:a,event:e})}:void 0},m?(0,f.default)(e).format("D"):null,m&&(0,j.jsx)("div",{...ep("mobileMonthViewDayIndicators"),children:v}))}),n=Q?.((0,f.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,r.getWeekNumber)(e);return(0,V.createElement)("div",{...ep("mobileMonthViewWeek"),key:t},z&&(0,j.jsx)(g.UnstyledButton,{"aria-label":`Week ${o}`,...n,onClick:"static"===ei?void 0:t=>{Z?.((0,f.default)(e[0]).format("YYYY-MM-DD"),t),n.onClick?.(t)},mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,...ep("mobileMonthViewWeekNumber",{className:n.className,style:n.style}),children:o},o),a)}),eb=(eD?(0,l.sortEvents)(ex[(0,f.default)(eD).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,f.default)(e.start).format("HH:mm"),a=(0,f.default)(e.end).format("HH:mm"),n=(0,j.jsxs)(y.Box,{...ep("mobileMonthViewEventBody"),children:[(0,j.jsx)("div",{...ep("mobileMonthViewEventColor",{style:{backgroundColor:(0,x.getThemeColor)(e.color,ev)}})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(D.Text,{...ep("mobileMonthViewEventTitle"),children:e.title}),(0,j.jsx)(D.Text,{...ep("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),r={...ep("mobileMonthViewEvent"),onClick:"static"===ei?void 0:t=>{eu?.(e,t)},tabIndex:"static"===ei?-1:0,children:n};return"function"==typeof ed?(0,j.jsx)(V.default.Fragment,{children:ed(e,r)},e.id):(0,V.createElement)(g.UnstyledButton,{...r,key:e.id})}),ek=eD?(0,a.formatDate)({locale:eh.getLocale(U),date:eD,format:el}):"",{dir:eE}=(0,M.useDirection)(),eV=(0,a.formatDate)({locale:eh.getLocale(U),date:R,format:"MMMM YYYY"}),eC=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(g.UnstyledButton,{...ep("mobileMonthViewHeaderBackButton"),onClick:es,mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,children:[(0,j.jsx)(v.AccordionChevron,{style:{transform:`rotate(${"rtl"===eE?-90:90}deg)`},size:20}),(0,f.default)(R).format("YYYY")]}),(0,j.jsx)(D.Text,{...ep("mobileMonthViewHeaderLabel"),children:eV})]});return(0,j.jsxs)(y.Box,{...ep("mobileMonthView"),mod:{"with-week-numbers":z},...ef,children:[(0,j.jsx)("div",{...ep("mobileMonthViewHeader"),children:"function"==typeof ec?ec({mode:ei,date:R,defaultHeader:eC}):eC}),(0,j.jsxs)(y.Box,{...ep("mobileMonthViewCalendar"),mod:{"with-weekdays":F},children:[eM&&(0,j.jsxs)("div",{...ep("mobileMonthViewWeekdays"),children:[z&&(0,j.jsx)("div",{...ep("mobileMonthViewWeekdaysCorner")}),eM]}),eS]}),(0,j.jsxs)(y.Box,{...ep("mobileMonthViewEventsList"),children:[(0,j.jsx)(D.Text,{...ep("mobileMonthViewEventsHeader"),children:ek}),eb.length>0?eb:(0,j.jsx)(D.Text,{...ep("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});$.displayName="@mantine/schedule/MobileMonthView",$.classes=h,$.varsResolver=O,e.s(["MobileMonthView",0,$],433396)},274597,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
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
`;var d=e.i(391398),l=e.i(200183),s=e.i(433396),u=e.i(168574),c=e.i(315401),m=e.i(122308),f={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},h=e.i(232471),v=e.i(275519),y=e.i(44091),D=e.i(391466),g=e.i(579560);let p={defaultView:"week",mode:"default",layout:"default"},w=(0,v.factory)(e=>{let t=(0,y.useProps)("Schedule",p,e),{classNames:a,className:n,style:r,styles:o,unstyled:i,vars:v,date:w,defaultDate:Y,onDateChange:x,view:M,defaultView:S,onViewChange:b,events:k,locale:E,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:I,onEventDrop:O,canDragEvent:$,onEventDragStart:T,onEventDragEnd:W,onTimeSlotClick:B,onAllDaySlotClick:H,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:N,onExternalEventDrop:L,withEventResize:P,onEventResize:z,canResizeEvent:F,recurrenceExpansionLimit:U,mode:G,layout:K,dayViewProps:J,weekViewProps:Q,monthViewProps:q,yearViewProps:X,mobileMonthViewProps:Z,withAgenda:ee,__staticSelector:et,mod:ea,...en}=t,er=(0,D.useStyles)({name:et||"Schedule",classes:f,props:t,className:n,style:r,classNames:a,styles:o,unstyled:i,vars:v}),[eo,ei]=(0,g.useUncontrolled)({value:M,defaultValue:S,onChange:b}),[ed,el]=(0,g.useUncontrolled)({value:w,defaultValue:Y??new Date}),es=e=>{el(e),x?.(e)},eu=e=>{ei(e),b?.(e)},ec=e=>{es(e),eu("month")},em={date:ed,onDateChange:es,view:eo,onViewChange:eu,events:k,locale:E,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:"static"!==G&&I,onEventDrop:O,canDragEvent:$,onEventDragStart:T,onEventDragEnd:W,onTimeSlotClick:B,onAllDaySlotClick:H,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:N,onExternalEventDrop:L,withEventResize:"static"!==G&&P,onEventResize:z,canResizeEvent:F,recurrenceExpansionLimit:U,mode:G,withAgenda:ee},ef=(()=>{switch(eo){case"day":return(0,d.jsx)(l.DayView,{...em,...J});case"week":return(0,d.jsx)(c.WeekView,{...em,...Q});case"month":return(0,d.jsx)(u.MonthView,{...em,...q});case"year":return(0,d.jsx)(m.YearView,{...em,onMonthClick:ec,...X});default:return null}})(),eh=(()=>{switch(eo){case"day":case"week":case"month":return(0,d.jsx)(s.MobileMonthView,{date:ed,onDateChange:es,events:k,locale:E,radius:V,labels:C,mode:G,recurrenceExpansionLimit:U,onYearClick:()=>eu("year"),onEventClick:R,...Z});case"year":return(0,d.jsx)(m.YearView,{...em,onMonthClick:ec,...X});default:return null}})();return"responsive"===K?(0,d.jsxs)(h.Box,{...er("root"),mod:[{layout:K},ea],...en,children:[(0,d.jsx)(h.Box,{...er("desktopView"),children:ef}),(0,d.jsx)(h.Box,{...er("mobileView"),children:eh})]}):(0,d.jsx)(h.Box,{...er("root"),mod:ea,...en,children:ef})});w.displayName="@mantine/schedule/Schedule",w.classes=f;let Y={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(w,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var x=e.i(191788);let M=(0,a.default)().format("YYYY-MM-DD"),S=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),b=[{id:1,title:"Morning Standup",start:`${M} 09:00:00`,end:`${M} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${M} 10:00:00`,end:`${M} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${M} 12:00:00`,end:`${M} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${S} 14:00:00`,end:`${S} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${S} 15:30:00`,end:`${S} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${M} 00:00:00`,end:(0,a.default)(M).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(b);return(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var E=e.i(883364);let V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)("week"),[a,n]=(0,x.useState)(new Date);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(E.Text,{size:"sm",mb:"md",children:["Current view: ",(0,d.jsx)("b",{children:e})]}),(0,d.jsx)(w,{view:e,onViewChange:t,date:a,onDateChange:e=>n(new Date(e)),events:o})]})},code:`
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
`},I={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,d.jsx)(w,{events:o,layout:"responsive"})})},code:`
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
`};var O=e.i(162077),$=e.i(37930),T=e.i(658109),W=e.i(725695);let B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(o),[n,r]=(0,x.useState)(!1),[i,l]=(0,x.useState)(null),s=(0,x.useRef)((0,a.default)().format("YYYY-MM-DD")),u=()=>{let e=s.current;l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)};return(0,d.jsxs)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,d.jsx)(w,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onDayClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),r(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(s.current=e)},renderHeader:({defaultHeader:e})=>(0,d.jsxs)(W.Group,{justify:"space-between",w:"100%",children:[(0,d.jsx)(W.Group,{justify:"space-between",flex:"1",children:e}),(0,d.jsx)(T.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:u,"aria-label":"Create new event",children:(0,d.jsx)($.PlusIcon,{size:18})})]})}}),(0,d.jsx)(O.EventForm,{opened:n,onClose:()=>r(!1),onExitTransitionEnd:()=>l(null),values:i,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:i?.id?()=>{i?.id&&t(e=>e.filter(e=>e.id!==i.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:O._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:i,language:"tsx",fileName:"events.ts"}]};var H=e.i(20035);let A=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)([]),n=(0,x.useRef)(1);return(0,d.jsxs)(H.Grid,{children:[(0,d.jsxs)(H.Grid.Col,{span:{base:12,sm:3},children:[(0,d.jsx)(E.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),A.map(e=>(0,d.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,d.jsx)(H.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(r),l=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},_=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(_),[n,r]=(0,x.useState)([]),[o,i]=(0,x.useState)(!1),l=(0,x.useRef)(1);return(0,d.jsxs)(H.Grid,{children:[(0,d.jsx)(H.Grid.Col,{span:{base:12,sm:3},children:(0,d.jsxs)(h.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:d}=JSON.parse(o),l=n.find(e=>String(e.id)===String(d));if(!l)return;let s=(0,a.default)(l.end).diff((0,a.default)(l.start),"minutes");t(e=>[...e,{title:l.title,duration:s,color:l.color||"blue"}]),r(e=>e.filter(e=>e.id!==l.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,d.jsx)(E.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,d.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,d.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,d.jsx)(H.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(w,{events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(n),s=d.add(i.duration,"minutes");r(e=>[...e,{id:l.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},U=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)("2024-01-15");return(0,d.jsx)(w,{view:"week",date:e,onDateChange:t,events:U})},code:`
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
`},K=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"lunch-block",title:"Lunch break",start:`${K} 12:00:00`,end:`${K} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${K} 14:00:00`,end:`${K} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${K} 10:00:00`,end:`${K} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${K} 14:30:00`,end:`${K} 15:30:00`,color:"green"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)(K);return(0,d.jsx)(w,{date:e,onDateChange:t,events:J})},code:`
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
`};var q=e.i(428127),X=e.i(441058);let Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,x.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,x.useState)("week"),i=function(e,t){let n=(0,a.default)(e);switch(t){case"day":return{previous:n.subtract(1,"day"),next:n.add(1,"day")};case"week":return{previous:n.subtract(1,"week"),next:n.add(1,"week")};case"month":return{previous:n.subtract(1,"month").startOf("month"),next:n.add(1,"month").startOf("month")};case"year":return{previous:n.subtract(1,"year").startOf("year"),next:n.add(1,"year").startOf("year")};default:return{previous:n,next:n}}}(e,n);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(q.ScheduleHeader,{children:[(0,d.jsx)(q.ScheduleHeader.Previous,{onClick:()=>t(i.previous.format("YYYY-MM-DD"))}),(0,d.jsx)(q.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let n=(0,a.default)(e);switch(t){case"day":return n.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,X.getStartOfWeek)({date:e,firstDayOfWeek:1})),n=t.add(6,"day");if(t.month()===n.month())return`${t.format("MMM D")} – ${n.format("D, YYYY")}`;return`${t.format("MMM D")} – ${n.format("MMM D, YYYY")}`}case"month":return n.format("MMMM YYYY");case"year":return n.format("YYYY");default:return""}}(e,n)}),(0,d.jsx)(q.ScheduleHeader.Next,{onClick:()=>t(i.next.format("YYYY-MM-DD"))}),(0,d.jsx)(q.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,d.jsx)(q.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,d.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,d.jsx)(q.ScheduleHeader.ViewSelect,{value:n,onChange:r})})]}),(0,d.jsx)(w,{date:e,onDateChange:t,view:n,onViewChange:r,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
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
`},ee=(0,a.default)().format("YYYY-MM-DD"),et=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),ea=[{id:"standup",title:"Morning Standup",start:`${ee} 09:00:00`,end:`${ee} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${ee} 10:00:00`,end:`${ee} 11:30:00`,color:"green"},{id:"code-review",title:"Code Review",start:`${et} 14:00:00`,end:`${et} 15:00:00`,color:"violet"},{id:"weekly-review-series",title:"Weekly review",start:`${(0,a.default)(ee).startOf("week").format("YYYY-MM-DD")} 16:00:00`,end:`${(0,a.default)(ee).startOf("week").format("YYYY-MM-DD")} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],en={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(w,{events:ea,withAgenda:!0})},code:`
import dayjs from 'dayjs';
import { Schedule } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
  },
  {
    id: 'code-review',
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 16:00:00\`,
    end: \`\${dayjs(today).startOf('week').format('YYYY-MM-DD')} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  return (
    <Schedule
      events={events}
      withAgenda
    />
  );
}
`};var er=(0,t.__exportAll)({backgroundEvents:()=>Q,bidirectionalDragDrop:()=>N,controlled:()=>V,customHeader:()=>Z,defaultView:()=>j,dragDrop:()=>k,eventForm:()=>B,eventResize:()=>F,externalDragDrop:()=>R,recurringEvents:()=>G,responsiveLayout:()=>I,usage:()=>Y,viewProps:()=>C,withAgenda:()=>en});e.s(["ScheduleDemos",0,er],274597)}]);