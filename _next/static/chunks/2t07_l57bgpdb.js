(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,276995,e=>{"use strict";var t=e.i(494834);e.s(["calculateMonthDropDate",0,function({draggedEvent:e,targetDay:a}){let n=(0,t.default)(e.end).diff((0,t.default)(e.start),"millisecond"),r=(0,t.default)(e.start),o=(0,t.default)(a).startOf("day").hour(r.hour()).minute(r.minute()).second(r.second()).millisecond(r.millisecond()),i=o.add(n,"millisecond");return{start:o.toDate(),end:i.toDate()}}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:r=1}){let o=(0,a.default)().day(r),i=[];for(let a=0;a<7;a+=1)i.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:n}));return i}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:r}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),i=o.format("YYYY-MM-DD"),d=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let r=0===t?6:t-1;for(;n.day()!==r;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),l=[],s=(0,a.default)((0,t.getStartOfWeek)({date:i,firstDayOfWeek:n}));for(;(0,a.default)(s).isBefore(d,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(s.format("YYYY-MM-DD 00:00:00")),s=s.add(1,"day");l.push(e)}if(r&&l.length<6){let e=l[l.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;l.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");l.push(e)}}return l}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:r,size:o}){let i=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===r-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:r,size:o});if(!i)return;let d=t.current?.[i.weekIndex]?.[i.dayIndex];d&&(d.disabled||d.getAttribute("data-hidden")||d.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:o}):d.focus())}({controlsRef:e,direction:r,weekIndex:t,dayIndex:a,size:o})}}])},168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),n=e.i(605520),r=e.i(753381),o=e.i(4332),i=e.i(494834);function d({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:r}){if(!t)return{start:(0,o.toDateString)((0,i.default)(e).startOf("month")),end:(0,o.toDateString)((0,i.default)(e).endOf("month"))};let l=(0,n.getMonthDays)({month:e,firstDayOfWeek:r,consistentWeeks:a});return{start:l[0][0],end:l[l.length-1][6]}}var l=e.i(276995),s=e.i(657068),u=e.i(783261),c=e.i(376879),m=e.i(663551),f=e.i(201867),h=e.i(891343),v=e.i(67312),D=e.i(966696),y=e.i(647170);function g(e){let t=new Set(e),a=[],n=0;for(let e=0;e<7;e+=1)t.has(e)?a.push(-1):(a.push(n),n+=1);return a}var p=e.i(298008),w=e.i(441058),Y={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},M=e.i(232471),x=e.i(19300),S=e.i(284629),b=e.i(481178),E=e.i(275519),k=e.i(433512),V=e.i(951254),C=e.i(44091),j=e.i(62904),$=e.i(391466),O=e.i(191788),T=e.i(205693),I=e.i(391398);let H=(0,b.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,k.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),B={__staticSelector:"MonthView",withWeekDays:!0,withWeekendDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},W=(0,E.factory)(e=>{let b=(0,C.useProps)("MonthView",B,e),{classNames:E,className:k,style:W,styles:A,unstyled:R,attributes:_,vars:N,mod:L,date:z,onDateChange:P,withWeekNumbers:F,withWeekDays:G,withWeekendDays:U,locale:K,weekdayFormat:J,firstDayOfWeek:Q,weekendDays:Z,__staticSelector:q,getDayProps:X,getWeekNumberProps:ee,onDayClick:et,onWeekNumberClick:ea,consistentWeeks:en,highlightToday:er,radius:eo,withOutsideDays:ei,withHeader:ed,monthYearSelectProps:el,onViewChange:es,todayControlProps:eu,nextControlProps:ec,previousControlProps:em,viewSelectProps:ef,events:eh,moreEventsProps:ev,renderEventBody:eD,renderEvent:ey,withEventsDragAndDrop:eg,onEventDrop:ep,canDragEvent:ew,onEventDragStart:eY,onEventDragEnd:eM,onEventClick:ex,withDragSlotSelect:eS,onSlotDragEnd:eb,labels:eE,mode:ek,scrollAreaProps:eV,onExternalEventDrop:eC,recurrenceExpansionLimit:ej,maxEventsPerDay:e$,withAgenda:eO,...eT}=b,[eI,eH]=(0,O.useState)(!1),eB=Math.min(10,Math.max(1,e$??2)),eW=(0,$.useStyles)({name:q,classes:Y,props:b,className:k,style:W,classNames:E,styles:A,unstyled:R,attributes:_,vars:N,varsResolver:H,rootSelector:"monthView"}),{resolvedClassNames:eA,resolvedStyles:eR}=(0,j.useResolvedStylesApi)({classNames:E,styles:A,props:b}),e_={classNames:eA,styles:eR,attributes:_,__staticSelector:q,radius:eo},eN=(0,V.useMantineTheme)(),eL=(0,T.useDatesContext)(),ez=eL.getFirstDayOfWeek(Q),eP=eL.getWeekendDays(Z),eF=U?[]:Array.from({length:7},(e,t)=>t).filter(e=>eP.includes((ez+e)%7)),eG=new Set(eF),eU=7-eF.length,eK=g(eF),eJ=d({month:z,withOutsideDays:ei,consistentWeeks:en,firstDayOfWeek:eL.getFirstDayOfWeek(Q)}),eQ=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:n,consistentWeeks:r}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let o=new Set,l=[],s=d({month:e,withOutsideDays:n,consistentWeeks:r,firstDayOfWeek:a});for(let e of t)if((0,i.default)(e.end).isAfter(s.start,"day")||(0,i.default)(e.start).isBefore(s.end,"day")){if(l.push((0,p.validateEvent)(e)),o.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);o.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:n}){let r={},o={},d=new Set,{weeks:l,groupedByDay:s}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let n=[],r={},o=(0,i.default)((0,w.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;o.isBefore(t)||o.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=o.format("YYYY-MM-DD 00:00:00");e.push(t),r[t]||(r[t]=[]),o=o.add(1,"day")}n.push(e)}return{weeks:n,groupedByDay:r}}({rangeStart:n?(0,i.default)(n.start):(0,i.default)(e).startOf("month"),rangeEnd:n?(0,i.default)(n.end):(0,i.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<l.length;e++)r[e.toString()]=[],o[e.toString()]=[];for(let e of t){let t=(0,i.default)(e.start).startOf("day"),a=(0,i.default)(e.end),n=0===a.hour()&&0===a.minute()&&0===a.second()?a.startOf("day").subtract(1,"day"):a.startOf("day"),u=n.isAfter(t);for(let a=0;a<l.length;a++){let c=l[a],m=(0,i.default)(c[0]).startOf("day"),f=(0,i.default)(c[6]).endOf("day");if((t.isBefore(f)||t.isSame(f,"day"))&&(n.isAfter(m)||n.isSame(m,"day"))){let{startDayIndex:l,daysSpanned:c,startOffset:h,width:v,hanging:D}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:n,isMultiday:r}){let o=e,i=t,d=e.isBefore(a),l=t.isAfter(n);o.isBefore(a)&&(o=a),i.isAfter(n)&&(i=n);let s=o.diff(a,"day"),u=Math.max(1,i.diff(a,"day")-s+ +!!r);return{startDayIndex:s,daysSpanned:u,startOffset:s/7*100,width:u/7*100,hanging:d&&l?"both":d?"start":l?"end":"none"}}({eventStart:t,eventEnd:n,weekStart:m,weekEnd:f,isMultiday:u});if("background"===e.display){o[a.toString()].push({...e,position:{startOffset:h,width:v,weekIndex:a,row:0,hanging:D}});continue}let y=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:n}){let r=0;for(let o of e){let e=(0,i.default)(o.start).startOf("day"),d=(e.isBefore(n)||e.isSame(n,"day")?n:e).diff(n,"day");d+(o.position?.width||0)/100*7>t&&d<t+a&&(r=Math.max(r,(o.position?.row||0)+1))}return r}({existingEvents:r[a.toString()],startDayIndex:l,daysSpanned:c,weekStart:m}),g={...e,position:{startOffset:h,width:v,weekIndex:a,row:y,hanging:D}};r[a.toString()].push(g),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:n,eventsAddedToDay:r,weekIdx:o}){if(0===o||!r.has(e.id.toString())){let o=t;for(;o.isBefore(a)||o.isSame(a,"day");){let t=o.format("YYYY-MM-DD 00:00:00");n[t]&&n[t].push(e),o=o.add(1,"day")}r.add(e.id.toString())}}({positionedEvent:g,eventStart:t,eventEnd:n,groupedByDay:s,eventsAddedToDay:d,weekIdx:a})}}}return{groupedByWeek:r,groupedByDay:s,backgroundByWeek:o}}({date:e,events:l,firstDayOfWeek:a,range:s})}({date:z,events:(0,s.expandRecurringEvents)({events:eh,rangeStart:(0,i.default)(eJ.start).startOf("day").toDate(),rangeEnd:(0,i.default)(eJ.end).endOf("day").toDate(),expansionLimit:ej}),firstDayOfWeek:eL.getFirstDayOfWeek(Q),withOutsideDays:ei,consistentWeeks:en}),eZ=(0,O.useCallback)((e,t)=>{eC&&eC(e.dataTransfer,`${(0,i.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eC]),eq=(0,u.useDragDropHandlers)({enabled:eg,mode:ek,onEventDrop:ep,canDragEvent:ew,onEventDragStart:eY,onEventDragEnd:eM,calculateDropTarget:(e,t)=>(0,l.calculateMonthDropDate)({draggedEvent:t,targetDay:e}),onExternalDrop:eC?eZ:void 0}),eX=(eg||!!eC)&&"static"!==ek,e0=(0,O.useRef)([]),e1=(0,c.useSlotDragSelect)({enabled:eS&&"static"!==ek,onDragEnd:(e,t)=>{if(!eb)return;let a=e0.current[e],n=e0.current[t];a&&n&&eb((0,i.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,i.default)(n).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),e2=(0,O.useRef)([]),e8=(0,n.getMonthDays)({month:(0,i.default)(z).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:eL.getFirstDayOfWeek(Q),consistentWeeks:en&&ei}),e4=(()=>{for(let e=0;e<e8.length;e++){let t=e8[e],a=-1;for(let n=0;n<t.length;n++){if(eG.has(n))continue;a+=1;let o=t[n];if((0,r.isSameMonth)(z,o)||ei)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),e3=G?(0,t.getWeekdaysNames)({locale:eL.getLocale(K),format:J,firstDayOfWeek:ez}).map((e,t)=>({day:e,index:t})).filter(({index:e})=>!eG.has(e)).map(({day:e,index:t})=>(0,O.createElement)("div",{...eW("monthViewWeekday"),key:t},e)):null,e6="month";e0.current=e8.map(e=>e.filter((e,t)=>!eG.has(t))).flat();let e7=e8.map((e,t)=>{e2.current[t]=[];let n=e.map((e,t)=>({day:e,columnIndex:t})).filter(({columnIndex:e})=>!eG.has(e)).map(({day:e},a)=>{let n=!(0,r.isSameMonth)(z,e),o=eP.includes((0,i.default)(e).day()),d=(0,i.default)(e).locale(K||eL.locale).format("MMMM D, YYYY"),l=X?.((0,i.default)(e).format("YYYY-MM-DD"))||{},s=(0,i.default)(e).isSame((0,i.default)(),"day")&&er;if(n&&!ei)return(0,I.jsx)("div",{"data-static":!0,...eW("monthViewDay",{style:l.style})},e);let u=t===e4.weekIndex&&a===e4.dayIndex,c=eq.isDropTarget(e),m=t*eU+a,f=e1.isSlotSelected(m,e6);return(0,O.createElement)(S.UnstyledButton,{"aria-label":d,...l,...eW("monthViewDay",{className:l.className,style:l.style}),key:e,ref:e=>{e&&(e2.current[t]||(e2.current[t]=[]),e2.current[t][a]=e)},"data-drag-slot-index":eS&&"static"!==ek?m:void 0,"data-drag-slot-group":eS&&"static"!==ek?e6:void 0,onClick:"static"===ek?void 0:t=>{et?.((0,i.default)(e).format("YYYY-MM-DD"),t),l.onClick?.(t)},onPointerDown:eS&&"static"!==ek?e=>e1.handleSlotPointerDown(e,m,e6):void 0,onKeyDown:e=>{(0,y.handleMonthViewKeyDown)({controlsRef:e2,weekIndex:t,dayIndex:a,event:e}),l.onKeyDown?.(e)},mod:[{outside:n,weekend:o,today:s,"drop-target":c,"drag-selected":f,static:"static"===ek},l.mod],"data-outside":n||void 0,tabIndex:"static"===ek?-1:u?0:-1,onDragOver:eX?t=>eq.handleDragOver(t,e):void 0,onDragLeave:eX?eq.handleDragLeave:void 0,onDrop:eX?t=>eq.handleDrop(t,e):void 0},(0,I.jsx)("span",{"data-today":s||void 0,...eW("monthViewDayLabel"),children:(0,i.default)(e).format("D")}))}),d=ee?.((0,i.default)(e[0]).format("YYYY-MM-DD"))||{},l=(0,a.getWeekNumber)(e),s=(eQ.backgroundByWeek[t]||[]).flatMap(e=>{let a=eN.variantColorResolver({color:e.color||eN.primaryColor,theme:eN,variant:"light",autoContrast:!0}),n="function"==typeof eD?eD(e):e.title,r=Math.round(e.position.startOffset/(100/7)),o=Math.max(1,Math.round(e.position.width/(100/7)));return(0===eF.length?[{startOffset:e.position.startOffset,width:e.position.width}]:function(e,t,a,n){if(n<=0)return[];let r=[],o=null,i=null,d=()=>{null!==o&&null!==i&&(r.push({startOffset:o/n*100,width:(i-o+1)/n*100}),o=null,i=null)};for(let n=e;n<=t;n+=1){let e=a[n];if(void 0===e||-1===e){d();continue}null===o&&(o=e),i=e}return d(),r}(r,r+o-1,eK,eU)).map((r,o)=>{let i={key:`bg-${e.id}-${t}-${o}`,...eW("monthViewBackgroundEvent",{style:{left:`calc(${r.startOffset}% + 2px)`,width:`calc(${r.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:n};if("function"==typeof ey)return ey(e,i);let{key:d,...l}=i;return(0,I.jsx)(M.Box,{...l},d)})}),u=100/eB,c=(function({events:e,groupedByDay:t,maxEventsPerDay:a,week:n,hiddenColumns:r=[],columnsCount:o=7}){let i=new Set(r),d=g(r),l=new Map,s=new Map,u=new Map;e.forEach((e,t)=>{let a;l.set(e,t),s.set(e,{startDayIndex:a=Math.max(0,Math.round(e.position.startOffset/14.285714285714286)),endDayIndex:Math.min(6,a+Math.max(1,Math.round(e.position.width/14.285714285714286))-1)})});let c=(e,t,a)=>{u.has(e)||u.set(e,new Map),u.get(e).set(t,a)},m=new Map;for(let r=0;r<n.length;r+=1){if(i.has(r))continue;let o=t[n[r]]||[],d=new Set(o.map(e=>e.id)),u=e.filter(e=>{let t=s.get(e);return d.has(e.id)&&r>=t.startDayIndex&&r<=t.endDayIndex}),f=o.length>a?u.filter(e=>e.position.row<a):u,h=new Set;[...f].sort((e,t)=>{let a=e.position.row-t.position.row;return 0!==a?a:l.get(e)-l.get(t)}).forEach(e=>{let t=m.get(e)??e.position.row;if(t>=a||h.has(t)){let e=function(e,t){for(let a=0;a<t;a+=1)if(!e.has(a))return a;return null}(h,a);if(null===e)return;t=e}h.add(t),c(e,r,t),m.set(e,t)})}return e.flatMap(e=>{let t=s.get(e),a=u.get(e),n=[],r=null,i=a=>{var r;let i,l,s,u,c,m,f=(i=a.startDayIndex===t.startDayIndex,l=a.endDayIndex===t.endDayIndex,s=d[a.startDayIndex],u=d[a.endDayIndex],{...e.position,startOffset:s/o*100,width:(u-s+1)/o*100,row:a.row,hanging:(r=e.position.hanging,c=i&&("start"===r||"both"===r),m=l&&("end"===r||"both"===r),c&&m?"both":c?"start":m?"end":"none")});n.push({event:e,position:f,clipStart:a.startDayIndex>t.startDayIndex,clipEnd:a.endDayIndex<t.endDayIndex,key:`${e.id}-${e.position.weekIndex}-${a.startDayIndex}-${a.endDayIndex}-${a.row}`})};for(let e=t.startDayIndex;e<=t.endDayIndex;e+=1){let t=a?.get(e);if(void 0===t){r&&(i(r),r=null);continue}r&&r.row===t?r.endDayIndex=e:(r&&i(r),r={startDayIndex:e,endDayIndex:e,row:t})}return r&&i(r),n})})({events:eQ.groupedByWeek[t]||[],groupedByDay:eQ.groupedByDay,maxEventsPerDay:eB,week:e,hiddenColumns:eF,columnsCount:eU}).map(e=>{let t=eq.isDraggableEvent(e.event);return(0,I.jsx)(h.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:eD,renderEvent:ey,radius:eo,mode:ek,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ex?t=>ex(e.event,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*u}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${u}% - 2px)`}},e.key)}),m=e.map((e,t)=>{if(eG.has(t))return null;let a=eQ.groupedByDay[e]||[],n=Math.max(0,a.length-eB);if(n<=0)return null;let r=eK[t]/eU*100,o=1/eU*100;return(0,I.jsx)(v.MoreEvents,{events:a,moreEventsCount:n,mode:ek,labels:eE,renderEventBody:eD,renderEvent:ey,onEventClick:ex,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${r}% + 1px)`,width:`calc(${o}% - 1px)`,height:"22px",paddingInline:4},...ev},`more-${e}`)});return(0,O.createElement)("div",{...eW("monthViewWeek"),key:t},F&&(0,I.jsx)(S.UnstyledButton,{"aria-label":`Week ${l}`,...d,onClick:"static"===ek?void 0:t=>{es?.("week"),P?.((0,o.toDateString)(e[0])),ea?.((0,i.default)(e[0]).format("YYYY-MM-DD"),t),d.onClick?.(t)},mod:{static:"static"===ek},tabIndex:"static"===ek?-1:0,...eW("monthViewWeekNumber",{className:d.className,style:d.style}),children:l},l),(0,O.createElement)("div",{...eW("monthViewEvents"),key:"week-events"},s,c,m),n)}),e5=(0,I.jsxs)(M.Box,{mod:[{"with-week-numbers":F,"with-weekdays":G,"without-weekend-days":eF.length>0,static:"static"===ek,"slot-dragging":e1.isDragging,"event-interaction":eq.dragContextValue.isDragging},L],__vars:eF.length>0?{"--month-view-columns":`${eU}`}:void 0,...eW("monthView"),...eT,children:[ed&&(0,I.jsx)(D.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,i.default)(z).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,i.default)(z).add(1,"month").startOf("month")),today:()=>(0,o.toDateString)((0,i.default)())},control:{monthYearSelect:{locale:K,yearValue:(0,i.default)(z).get("year"),monthValue:(0,i.default)(z).get("month"),onYearChange:e=>P?.((0,o.toDateString)((0,i.default)(z).set("year",e).startOf("month"))),onMonthChange:e=>P?.((0,o.toDateString)((0,i.default)(z).set("month",e).startOf("month"))),...el}},labels:eE,onDateChange:P,onViewChange:es,previousControlProps:em,nextControlProps:ec,todayControlProps:eu,viewSelectProps:ef,stylesApiProps:e_,onAgendaClick:eO?()=>eH(e=>!e):void 0,agendaActive:eI}),eI&&(0,I.jsx)(m.AgendaView,{rangeStart:(0,i.default)(z).startOf("month").format("YYYY-MM-DD"),rangeEnd:(0,i.default)(z).endOf("month").format("YYYY-MM-DD"),events:eh,locale:K,labels:eE,mode:ek,onEventClick:ex,recurrenceExpansionLimit:ej,...e_}),!eI&&(0,I.jsx)(x.ScrollArea,{scrollbarSize:4,...eV,...eW("monthViewScrollArea",{className:eV?.className,style:eV?.style}),children:(0,I.jsxs)("div",{...eW("monthViewInner"),children:[e3&&(0,I.jsxs)("div",{...eW("monthViewWeekdays"),children:[F&&(0,I.jsx)("div",{...eW("monthViewWeekdaysCorner")}),e3]}),e7]})})]});return eg?(0,I.jsx)(f.DragContext.Provider,{value:eq.dragContextValue,children:e5}):e5});W.displayName="@mantine/schedule/MonthView",W.classes=Y,W.varsResolver=H,e.s(["MonthView",0,W],168574)},37930,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="PlusIcon",e.s(["PlusIcon",0,r],37930)},200183,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(672654),r=e.i(898496),o=e.i(4332),i=e.i(969610),d=e.i(792930),l=e.i(505696),s=e.i(657068),u=e.i(245086),c=e.i(783261),m=e.i(637079),f=e.i(376879),h=e.i(663551),v=e.i(312709),D=e.i(201867),y=e.i(891343),g=e.i(67312),p=e.i(966696),w=e.i(298008),Y=e.i(68642),M=e.i(532965),x=e.i(922621),S=e.i(494834),b={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},E=e.i(232471),k=e.i(19300),V=e.i(284629),C=e.i(481178),j=e.i(275519),$=e.i(433512),O=e.i(779177),T=e.i(951254),I=e.i(44091),H=e.i(62904),B=e.i(391466),W=e.i(417241),A=e.i(332977),R=e.i(191788),_=e.i(205693),N=e.i(391398);let L={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withSubHourGridLines:!0,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},z=(0,C.createVarsResolver)((e,{radius:t,slotHeight:a,allDaySlotHeight:n})=>({dayView:{"--day-view-radius":void 0!==t?(0,$.getRadius)(t):void 0,"--day-view-slot-height":(0,O.rem)(a),"--day-view-all-day-slot-height":(0,O.rem)(n)}})),P=(0,j.factory)(e=>{let C=(0,I.useProps)("DayView",L,e),{classNames:j,className:$,style:O,styles:P,unstyled:F,attributes:G,vars:U,__staticSelector:K,startTime:J,endTime:Q,intervalMinutes:Z,withSubHourGridLines:q,withAllDaySlot:X,date:ee,locale:et,slotLabelFormat:ea,headerFormat:en,getCurrentTime:er,withCurrentTimeIndicator:eo,withCurrentTimeBubble:ei,withHeader:ed,radius:el,onDateChange:es,onViewChange:eu,previousControlProps:ec,nextControlProps:em,todayControlProps:ef,viewSelectProps:eh,slotHeight:ev,allDaySlotHeight:eD,scrollAreaProps:ey,events:eg,moreEventsProps:ep,renderEventBody:ew,renderEvent:eY,labels:eM,highlightBusinessHours:ex,businessHours:eS,withEventsDragAndDrop:eb,onEventDrop:eE,canDragEvent:ek,onEventDragStart:eV,onEventDragEnd:eC,onTimeSlotClick:ej,onAllDaySlotClick:e$,onEventClick:eO,withDragSlotSelect:eT,onSlotDragEnd:eI,mode:eH,startScrollTime:eB,onExternalEventDrop:eW,withEventResize:eA,onEventResize:eR,canResizeEvent:e_,recurrenceExpansionLimit:eN,getTimeSlotProps:eL,withAgenda:ez,...eP}=C,[eF,eG]=(0,R.useState)(!1),eU=(0,B.useStyles)({name:K,classes:b,props:C,className:$,style:O,classNames:j,styles:P,unstyled:F,attributes:G,vars:U,varsResolver:z,rootSelector:"dayView"}),{resolvedClassNames:eK,resolvedStyles:eJ}=(0,H.useResolvedStylesApi)({classNames:j,styles:P,props:C}),eQ={classNames:eK,styles:eJ,attributes:G,__staticSelector:K,radius:el},eZ=(0,T.useMantineTheme)(),eq=(0,_.useDatesContext)(),eX=()=>er?(0,S.default)(er()):(0,S.default)(),e0=eo??(0,S.default)(ee).isSame(eX(),"day"),e1=(0,r.getDayTimeIntervals)({startTime:J,endTime:Q,intervalMinutes:Z}),e2=(0,R.useRef)([]),e8=(0,R.useRef)(null),e4=(0,R.useRef)(null),e3=(0,A.useMergedRef)(e8,ey?.viewportRef);(0,u.useAutoScrollOnDrag)({viewportRef:e8,enabled:(eb||!!eW)&&"static"!==eH}),(0,W.useIsomorphicEffect)(()=>{if(!eB||!e8.current||0===e2.current.length)return;let e=e1.findIndex(e=>e.startTime>=eB);if(e<0)return;let t=e2.current[e];if(!t)return;let a=t.getBoundingClientRect(),n=e8.current.getBoundingClientRect();e8.current.scrollTo({left:0,top:a.top-n.top})},[]);let e6=(0,R.useCallback)(e=>{let t=e2.current.findIndex(t=>{if(!t)return!1;let a=t.getBoundingClientRect();return e.clientY>=a.top&&e.clientY<=a.bottom});if(t>=0)return t;let a=e2.current[0],n=e2.current[e2.current.length-1];if(!a||!n)return null;let r=a.getBoundingClientRect(),o=n.getBoundingClientRect();return e.clientY<r.top?0:e.clientY>o.bottom?e2.current.length-1:null},[]),e7=(0,f.useSlotDragSelect)({enabled:eT&&"static"!==eH,onDragEnd:(e,t)=>{if(!eI)return;let a=(0,S.default)(ee).format("YYYY-MM-DD");eI(`${a} ${e1[e].startTime}`,`${a} ${e1[t].endTime}`)}}),e5=function({events:e,date:t,startTime:a,endTime:n,intervalMinutes:r}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let o=new Set,d=[],l=[],s=(0,S.default)(t).startOf("day"),u=(0,S.default)(t).endOf("day");for(let t of e){let e=(0,S.default)(t.start),r=(0,S.default)(t.end),i=e.isSame(s,"day"),c=!i&&"background"===t.display&&e.isBefore(u)&&r.isAfter(s);if(i||c){if(i&&!(0,Y.isEventInTimeRange)({event:t,startTime:a,endTime:n}))continue;let e=(0,w.validateEvent)(t);if(o.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);o.add(t.id),"background"===t.display?l.push(e):d.push(e)}}let c=(0,x.getDayPositionedEvents)({events:d,startTime:a,endTime:n,intervalMinutes:r,date:t}),m=[],f=[];for(let e of c)e.position.allDay?m.push(e):f.push(e);let h=[],v=[];for(let e of l){let o=(0,S.default)(e.start),d=(0,S.default)(e.end),l=o.isBefore(s)?s:o,c=d.isAfter(u)?u:d,m={...e,start:l.format("YYYY-MM-DD HH:mm:ss"),end:c.format("YYYY-MM-DD HH:mm:ss")};if((0,i.isAllDayEvent)({event:m,date:t}))v.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:o}=(0,M.getDayPosition)({event:m,startTime:a,endTime:n,intervalMinutes:r});if(o<=0)continue;h.push({...e,position:{top:t,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:m,regularEvents:f,backgroundTimedEvents:h,backgroundAllDayEvents:v}}({events:(0,s.expandRecurringEvents)({events:eg,rangeStart:(0,S.default)(ee).startOf("day").toDate(),rangeEnd:(0,S.default)(ee).endOf("day").toDate(),expansionLimit:eN}),date:ee,startTime:J,endTime:Q,intervalMinutes:Z}),e9=(0,R.useCallback)((e,t)=>{if(!eW)return;let a=(0,S.default)(ee).format("YYYY-MM-DD");eW(e.dataTransfer,`${a} ${e1[t].startTime}`)},[eW,ee,e1]),te=(0,c.useDragDropHandlers)({enabled:eb,mode:eH,onEventDrop:eE,canDragEvent:ek,onEventDragStart:eV,onEventDragEnd:eC,calculateDropTarget:(e,t)=>{let a=e1[e].startTime;return(0,d.calculateDropTime)({draggedEvent:t,targetDate:ee,targetSlotTime:a,intervalMinutes:Z})},onExternalDrop:eW?e9:void 0}),tt=(0,m.useEventResize)({enabled:eA,mode:eH,startTime:J,endTime:Q,intervalMinutes:Z,onEventResize:eR,canResizeEvent:e_}),ta=(eb||!!eW)&&"static"!==eH,tn=e5.regularEvents.map(e=>{let t=(0,i.isAllDayEvent)({event:e,date:ee}),a=!t&&te.isDraggableEvent(e),n=!t&&tt.isResizableEvent(e),r=tt.getResizePosition(e.id),o=r?r.top:e.position.top,d=r?r.height:e.position.height;return(0,N.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:eY,autoSize:!0,draggable:a,withResize:n,isResizing:null!==r,onResizeStart:n?(t,a)=>{e4.current&&tt.handleResizeStart({event:e,edge:t,container:e4.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,S.default)(ee).format("YYYY-MM-DD"),pointerEvent:a})}:void 0,mode:eH,onClick:eO?t=>{tt.wasResizing()||eO(e,t)}:void 0,...eQ,style:{...eQ.styles?.event,top:`${o}%`,height:`${d}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),tr=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e5.allDayEvents.length}),to=e5.allDayEvents.slice(0,tr.visibleEventsCount).map(e=>(0,N.jsx)(y.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:eY,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eH,onClick:eO?t=>eO(e,t):void 0,...eQ},e.id)),ti=(0,S.default)(ee).format("YYYY-MM-DD"),td=e1.map((e,a)=>{let r=te.isDropTarget(a),o=e7.isSlotSelected(a,ti),i=`${ti} ${e.startTime}`,d=`${ti} ${e.endTime}`,{onClick:s,...u}=eL?.({start:i,end:d})||{},c="static"===eH?void 0:e=>{ej?.({slotStart:i,slotEnd:d,nativeEvent:e}),s?.(e)};return(0,R.createElement)(V.UnstyledButton,{...eU("dayViewSlot"),key:e.startTime,ref:e=>{e2.current[a]=e},mod:{first:0===a,"hour-start":e.isHourStart,...(0,l.getBusinessHoursMod)({time:e.startTime,businessHours:eS,highlightBusinessHours:ex}),"drop-target":r,"drag-selected":o,static:"static"===eH},__vars:{"--slot-size":`${(0,n.clampIntervalMinutes)(Z)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",eM)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eH?-1:0===a?0:-1,"data-drag-slot-index":eT&&"static"!==eH?a:void 0,"data-drag-slot-group":eT&&"static"!==eH?ti:void 0,onKeyDown:"static"===eH?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&a<e1.length-1?(e.preventDefault(),e2.current[a+1]?.focus()):"ArrowUp"===t&&a>0&&(e.preventDefault(),e2.current[a-1]?.focus())},onPointerDown:eT&&"static"!==eH?e=>e7.handleSlotPointerDown(e,a,ti):void 0,onClick:c,onDragOver:ta?e=>e.preventDefault():void 0,...u})}),tl=e1.reduce((e,t)=>{if(t.isHourStart){let n=(0,S.default)(`${(0,S.default)(ee).format("YYYY-MM-DD")} ${t.startTime}`),r=(0,a.formatDate)({locale:eq.getLocale(et),date:n,format:ea});e.push((0,R.createElement)(E.Box,{...eU("dayViewSlotLabel"),key:t.startTime,mod:(0,l.getBusinessHoursMod)({time:t.startTime,businessHours:eS,highlightBusinessHours:ex})},r))}return e},[]),ts=e5.backgroundAllDayEvents.map(e=>{let t=eZ.variantColorResolver({color:e.color||eZ.primaryColor,theme:eZ,variant:"light",autoContrast:!0}),a="function"==typeof ew?ew(e):e.title,n={key:`bg-allday-${e.id}`,...eU("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eY)return eY(e,n);let{key:r,...o}=n;return(0,N.jsx)(E.Box,{...o},r)}),tu=e5.backgroundTimedEvents.map(e=>{let t=eZ.variantColorResolver({color:e.color||eZ.primaryColor,theme:eZ,variant:"light",autoContrast:!0}),a="function"==typeof ew?ew(e):e.title,n={key:e.id,...eU("dayViewBackgroundEvent",{style:{top:`calc(${e.position.top}% + 1px)`,height:`calc(${e.position.height}% - 2px)`,width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:a};if("function"==typeof eY)return eY(e,n);let{key:r,...o}=n;return(0,N.jsx)(E.Box,{...o},r)}),tc=(0,N.jsxs)(E.Box,{...eU("dayView"),mod:{static:"static"===eH,"slot-dragging":e7.isDragging,"hide-sub-hour-grid-lines":!q,"event-interaction":tt.isResizing||te.dragContextValue.isDragging},...eP,children:[ed&&(0,N.jsx)(p.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,S.default)(ee).subtract(1,"day")),next:()=>(0,o.toDateString)((0,S.default)(ee).add(1,"day")),today:()=>(0,o.toDateString)(eX())},control:{title:(0,a.formatDate)({locale:eq.getLocale(et),date:ee,format:en}),miw:140},labels:eM,onDateChange:es,onViewChange:eu,previousControlProps:ec,nextControlProps:em,todayControlProps:ef,viewSelectProps:eh,stylesApiProps:eQ,onAgendaClick:ez?()=>eG(e=>!e):void 0,agendaActive:eF}),eF&&(0,N.jsx)(h.AgendaView,{rangeStart:(0,S.default)(ee).startOf("day").format("YYYY-MM-DD"),rangeEnd:(0,S.default)(ee).endOf("day").format("YYYY-MM-DD"),events:eg,locale:et,labels:eM,mode:eH,onEventClick:eO,recurrenceExpansionLimit:eN,...eQ}),!eF&&(0,N.jsx)(k.ScrollArea.Autosize,{scrollbarSize:4,...ey,...eU("dayViewScrollArea",{className:ey?.className,style:ey?.style}),viewportRef:e3,children:(0,N.jsxs)(E.Box,{...eU("dayViewInner"),children:[(0,N.jsxs)("div",{...eU("dayViewSlotLabels"),children:[X&&(0,N.jsx)(E.Box,{...eU("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",eM)}),tl]}),(0,N.jsxs)("div",{...eU("dayViewSlots"),children:[X&&(0,N.jsxs)("div",{...eU("dayViewAllDay"),children:[ts,(0,N.jsxs)("div",{...eU("dayViewAllDayEvents"),children:[to,tr.hiddenEventsCount>0&&(0,N.jsx)(g.MoreEvents,{events:e5.allDayEvents,moreEventsCount:tr.hiddenEventsCount,renderEventBody:ew,renderEvent:eY,mode:eH,labels:eM,onEventClick:eO,...eQ,...ep})]}),(0,N.jsx)(V.UnstyledButton,{...eU("dayViewSlot"),mod:{"all-day":!0,static:"static"===eH},"aria-label":`${(0,t.getLabel)("timeSlot",eM)} ${(0,t.getLabel)("allDay",eM)}`,onClick:"static"!==eH&&e$?e=>{e$((0,S.default)(ee).format("YYYY-MM-DD"),e)}:void 0})]}),(0,N.jsxs)("div",{ref:e4,...eU("dayViewTimeSlots"),onDragOver:ta?e=>{let t=e6(e);null!==t&&te.handleDragOver(e,t)}:void 0,onDragLeave:ta?te.handleDragLeave:void 0,onDrop:ta?e=>{let t=e6(e);null!==t&&te.handleDrop(e,t)}:void 0,children:[tu,tn,e0&&(0,N.jsx)(v.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:ea,withTimeBubble:ei,withThumb:!ei,locale:et,startTime:J,endTime:Q,intervalMinutes:Z,getCurrentTime:er,...eQ}),td]})]})]})})]});return eb?(0,N.jsx)(D.DragContext.Provider,{value:te.dragContextValue,children:tc}):tc});P.displayName="@mantine/schedule/DayView",P.classes=b,P.varsResolver=z,e.s(["DayView",0,P],200183)},433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(621304),r=e.i(855578),o=e.i(605520),i=e.i(753381),d=e.i(4332),l=e.i(813982),s=e.i(657068),u=e.i(647170),c=e.i(298008),m=e.i(898770),f=e.i(494834),h={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},v=e.i(462138),D=e.i(232471),y=e.i(883364),g=e.i(284629),p=e.i(481178),w=e.i(275519),Y=e.i(433512),M=e.i(317477),x=e.i(323283),S=e.i(951254),b=e.i(44091),E=e.i(391466),k=e.i(579560),V=e.i(191788),C=e.i(205693),j=e.i(391398);let $={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},O=(0,p.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,Y.getRadius)(t)}})),T=(0,w.factory)(e=>{let p=(0,b.useProps)("MobileMonthView",$,e),{classNames:w,className:Y,style:T,styles:I,unstyled:H,vars:B,attributes:W,__staticSelector:A,date:R,onDateChange:_,selectedDate:N,defaultSelectedDate:L,onSelectedDateChange:z,withWeekNumbers:P,withWeekDays:F,locale:G,firstDayOfWeek:U,weekdayFormat:K,weekendDays:J,getWeekNumberProps:Q,getDayProps:Z,onDayClick:q,onWeekNumberClick:X,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:en,events:er,labels:eo,mode:ei,renderEvent:ed,eventsHeaderFormat:el,onYearClick:es,onEventClick:eu,renderHeader:ec,recurrenceExpansionLimit:em,...ef}=p,eh=(0,C.useDatesContext)(),ev=(0,S.useMantineTheme)(),eD=(0,f.default)(),[ey,eg]=(0,k.useUncontrolled)({value:N,defaultValue:L??(0,d.toDateString)(eD),onChange:e=>z?.(e?(0,d.toDateString)((0,f.default)(e)):null)}),ep=(0,E.useStyles)({name:A,classes:h,props:p,className:Y,style:T,classNames:w,styles:I,unstyled:H,attributes:W,vars:B,varsResolver:O,rootSelector:"mobileMonthView"}),ew=(0,V.useRef)([]),eY=(0,V.useRef)(null),eM=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let r of t)if("background"!==r.display&&(0,f.default)(r.start).isSame((0,f.default)(e),"month")){if(!function(e,t){if((0,m.isMultidayEvent)(e)){let a=(0,f.default)(e.start).startOf("day"),n=(0,f.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,f.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,c.validateEvent)(r),a),n.has(r.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${r.id}`);n.add(r.id)}return a}({date:R,events:(0,s.expandRecurringEvents)({events:er,rangeStart:(0,f.default)(R).startOf("month").toDate(),rangeEnd:(0,f.default)(R).endOf("month").toDate(),expansionLimit:em})}),ex=F?(0,n.getWeekdaysNames)({locale:eh.getLocale(G),format:K,firstDayOfWeek:eh.getFirstDayOfWeek(U)}).map((e,t)=>(0,V.createElement)("div",{...ep("mobileMonthViewWeekday"),key:t},e)):null,eS=(0,o.getMonthDays)({month:(0,f.default)(R).format("YYYY-MM-DD"),firstDayOfWeek:eh.getFirstDayOfWeek(U),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let n=!(0,i.isSameMonth)(e,R),r=eh.getWeekendDays(J).includes((0,f.default)(e).day()),o=(0,f.default)(e).locale(G||eh.locale).format("MMMM D, YYYY"),d=Z?.((0,f.default)(e).format("YYYY-MM-DD"))||{},l=(0,f.default)(e).isSame(eD,"day")&&et,s=ey&&(0,f.default)(e).isSame((0,f.default)(ey),"day"),c=eM[(0,f.default)(e).format("YYYY-MM-DD")]||[],m=en||!n;m&&null===eY.current&&(eY.current={weekIndex:t,dayIndex:a});let h=eY.current?.weekIndex===t&&eY.current?.dayIndex===a,v=c.slice(0,3).map(e=>(0,V.createElement)("div",{...ep("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,M.getThemeColor)(e.color,ev)}}),key:e.id}));return(0,V.createElement)(g.UnstyledButton,{"aria-label":o,"aria-selected":s||void 0,...d,...ep("mobileMonthViewDay",{className:d.className,style:d.style}),key:e,ref:e=>{e&&(ew.current[t]||(ew.current[t]=[]),ew.current[t][a]=e)},mod:[{outside:n,weekend:r,today:l,selected:s,static:"static"===ei,hidden:!m},d.mod],tabIndex:"static"!==ei&&m&&h?0:-1,onClick:"static"!==ei&&m?t=>{let a=(0,f.default)(e).format("YYYY-MM-DD");eg(a),q?.(a,t),d.onClick?.(t)}:void 0,onKeyDown:"static"!==ei&&m?e=>{(0,u.handleMonthViewKeyDown)({controlsRef:ew,weekIndex:t,dayIndex:a,event:e})}:void 0},m?(0,f.default)(e).format("D"):null,m&&(0,j.jsx)("div",{...ep("mobileMonthViewDayIndicators"),children:v}))}),n=Q?.((0,f.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,r.getWeekNumber)(e);return(0,V.createElement)("div",{...ep("mobileMonthViewWeek"),key:t},P&&(0,j.jsx)(g.UnstyledButton,{"aria-label":`Week ${o}`,...n,onClick:"static"===ei?void 0:t=>{X?.((0,f.default)(e[0]).format("YYYY-MM-DD"),t),n.onClick?.(t)},mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,...ep("mobileMonthViewWeekNumber",{className:n.className,style:n.style}),children:o},o),a)}),eb=(ey?(0,l.sortEvents)(eM[(0,f.default)(ey).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,f.default)(e.start).format("HH:mm"),a=(0,f.default)(e.end).format("HH:mm"),n=(0,j.jsxs)(D.Box,{...ep("mobileMonthViewEventBody"),children:[(0,j.jsx)("div",{...ep("mobileMonthViewEventColor",{style:{backgroundColor:(0,M.getThemeColor)(e.color,ev)}})}),(0,j.jsxs)("div",{children:[(0,j.jsx)(y.Text,{...ep("mobileMonthViewEventTitle"),children:e.title}),(0,j.jsx)(y.Text,{...ep("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),r={...ep("mobileMonthViewEvent"),onClick:"static"===ei?void 0:t=>{eu?.(e,t)},tabIndex:"static"===ei?-1:0,children:n};return"function"==typeof ed?(0,j.jsx)(V.default.Fragment,{children:ed(e,r)},e.id):(0,V.createElement)(g.UnstyledButton,{...r,key:e.id})}),eE=ey?(0,a.formatDate)({locale:eh.getLocale(G),date:ey,format:el}):"",{dir:ek}=(0,x.useDirection)(),eV=(0,a.formatDate)({locale:eh.getLocale(G),date:R,format:"MMMM YYYY"}),eC=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(g.UnstyledButton,{...ep("mobileMonthViewHeaderBackButton"),onClick:es,mod:{static:"static"===ei},tabIndex:"static"===ei?-1:0,children:[(0,j.jsx)(v.AccordionChevron,{style:{transform:`rotate(${"rtl"===ek?-90:90}deg)`},size:20}),(0,f.default)(R).format("YYYY")]}),(0,j.jsx)(y.Text,{...ep("mobileMonthViewHeaderLabel"),children:eV})]});return(0,j.jsxs)(D.Box,{...ep("mobileMonthView"),mod:{"with-week-numbers":P},...ef,children:[(0,j.jsx)("div",{...ep("mobileMonthViewHeader"),children:"function"==typeof ec?ec({mode:ei,date:R,defaultHeader:eC}):eC}),(0,j.jsxs)(D.Box,{...ep("mobileMonthViewCalendar"),mod:{"with-weekdays":F},children:[ex&&(0,j.jsxs)("div",{...ep("mobileMonthViewWeekdays"),children:[P&&(0,j.jsx)("div",{...ep("mobileMonthViewWeekdaysCorner")}),ex]}),eS]}),(0,j.jsxs)(D.Box,{...ep("mobileMonthViewEventsList"),children:[(0,j.jsx)(y.Text,{...ep("mobileMonthViewEventsHeader"),children:eE}),eb.length>0?eb:(0,j.jsx)(y.Text,{...ep("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});T.displayName="@mantine/schedule/MobileMonthView",T.classes=h,T.varsResolver=O,e.s(["MobileMonthView",0,T],433396)},238715,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=`
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
`;var d=e.i(391398),l=e.i(200183),s=e.i(433396),u=e.i(168574),c=e.i(315401),m=e.i(122308),f={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},h=e.i(232471),v=e.i(275519),D=e.i(44091),y=e.i(391466),g=e.i(579560);let p={defaultView:"week",mode:"default",layout:"default"},w=(0,v.factory)(e=>{let t=(0,D.useProps)("Schedule",p,e),{classNames:a,className:n,style:r,styles:o,unstyled:i,vars:v,date:w,defaultDate:Y,onDateChange:M,view:x,defaultView:S,onViewChange:b,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:$,onEventDrop:O,canDragEvent:T,onEventDragStart:I,onEventDragEnd:H,onTimeSlotClick:B,onAllDaySlotClick:W,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:N,onExternalEventDrop:L,withEventResize:z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U,layout:K,dayViewProps:J,weekViewProps:Q,monthViewProps:Z,yearViewProps:q,mobileMonthViewProps:X,withAgenda:ee,__staticSelector:et,mod:ea,...en}=t,er=(0,y.useStyles)({name:et||"Schedule",classes:f,props:t,className:n,style:r,classNames:a,styles:o,unstyled:i,vars:v}),[eo,ei]=(0,g.useUncontrolled)({value:x,defaultValue:S,onChange:b}),[ed,el]=(0,g.useUncontrolled)({value:w,defaultValue:Y??new Date}),es=e=>{el(e),M?.(e)},eu=e=>{ei(e),b?.(e)},ec=e=>{es(e),eu("month")},em={date:ed,onDateChange:es,view:eo,onViewChange:eu,events:E,locale:k,radius:V,labels:C,renderEventBody:j,withEventsDragAndDrop:"static"!==U&&$,onEventDrop:O,canDragEvent:T,onEventDragStart:I,onEventDragEnd:H,onTimeSlotClick:B,onAllDaySlotClick:W,onDayClick:A,onEventClick:R,withDragSlotSelect:_,onSlotDragEnd:N,onExternalEventDrop:L,withEventResize:"static"!==U&&z,onEventResize:P,canResizeEvent:F,recurrenceExpansionLimit:G,mode:U,withAgenda:ee},ef=(()=>{switch(eo){case"day":return(0,d.jsx)(l.DayView,{...em,...J});case"week":return(0,d.jsx)(c.WeekView,{...em,...Q});case"month":return(0,d.jsx)(u.MonthView,{...em,...Z});case"year":return(0,d.jsx)(m.YearView,{...em,onMonthClick:ec,...q});default:return null}})(),eh=(()=>{switch(eo){case"day":case"week":case"month":return(0,d.jsx)(s.MobileMonthView,{date:ed,onDateChange:es,events:E,locale:k,radius:V,labels:C,mode:U,recurrenceExpansionLimit:G,onYearClick:()=>eu("year"),onEventClick:R,...X});case"year":return(0,d.jsx)(m.YearView,{...em,onMonthClick:ec,...q});default:return null}})();return"responsive"===K?(0,d.jsxs)(h.Box,{...er("root"),mod:[{layout:K},ea],...en,children:[(0,d.jsx)(h.Box,{...er("desktopView"),children:ef}),(0,d.jsx)(h.Box,{...er("mobileView"),children:eh})]}):(0,d.jsx)(h.Box,{...er("root"),mod:ea,...en,children:ef})});w.displayName="@mantine/schedule/Schedule",w.classes=f;let Y={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(w,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:i,language:"tsx",fileName:"data.ts"}]};var M=e.i(191788);let x=(0,a.default)().format("YYYY-MM-DD"),S=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),b=[{id:1,title:"Morning Standup",start:`${x} 09:00:00`,end:`${x} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${x} 10:00:00`,end:`${x} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${x} 12:00:00`,end:`${x} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${S} 14:00:00`,end:`${S} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${S} 15:30:00`,end:`${S} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${x} 00:00:00`,end:(0,a.default)(x).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)(b);return(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var k=e.i(883364);let V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)("week"),[a,n]=(0,M.useState)(new Date);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(k.Text,{size:"sm",mb:"md",children:["Current view: ",(0,d.jsx)("b",{children:e})]}),(0,d.jsx)(w,{view:e,onViewChange:t,date:a,onDateChange:e=>n(new Date(e)),events:o})]})},code:`
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
`},$={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,d.jsx)(w,{events:o,layout:"responsive"})})},code:`
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
`};var O=e.i(162077),T=e.i(37930),I=e.i(658109),H=e.i(725695);let B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)(o),[n,r]=(0,M.useState)(!1),[i,l]=(0,M.useState)(null),s=(0,M.useRef)((0,a.default)().format("YYYY-MM-DD")),u=()=>{let e=s.current;l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)};return(0,d.jsxs)(h.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,d.jsx)(w,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onDayClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),r(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(s.current=e)},renderHeader:({defaultHeader:e})=>(0,d.jsxs)(H.Group,{justify:"space-between",w:"100%",children:[(0,d.jsx)(H.Group,{justify:"space-between",flex:"1",children:e}),(0,d.jsx)(I.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:u,"aria-label":"Create new event",children:(0,d.jsx)(T.PlusIcon,{size:18})})]})}}),(0,d.jsx)(O.EventForm,{opened:n,onClose:()=>r(!1),onExitTransitionEnd:()=>l(null),values:i,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:i?.id?()=>{i?.id&&t(e=>e.filter(e=>e.id!==i.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:O._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:i,language:"tsx",fileName:"events.ts"}]};var W=e.i(20035);let A=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)([]),n=(0,M.useRef)(1);return(0,d.jsxs)(W.Grid,{children:[(0,d.jsxs)(W.Grid.Col,{span:{base:12,sm:3},children:[(0,d.jsx)(k.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),A.map(e=>(0,d.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,d.jsx)(W.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(r),l=d.add(i.duration,"minutes");t(e=>[...e,{id:n.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:i.color}])}})})]})},code:`
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
`},_=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)(_),[n,r]=(0,M.useState)([]),[o,i]=(0,M.useState)(!1),l=(0,M.useRef)(1);return(0,d.jsxs)(W.Grid,{children:[(0,d.jsx)(W.Grid.Col,{span:{base:12,sm:3},children:(0,d.jsxs)(h.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",i(!0)},onDragLeave:()=>i(!1),onDrop:e=>{e.preventDefault(),i(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:d}=JSON.parse(o),l=n.find(e=>String(e.id)===String(d));if(!l)return;let s=(0,a.default)(l.end).diff((0,a.default)(l.start),"minutes");t(e=>[...e,{title:l.title,duration:s,color:l.color||"blue"}]),r(e=>e.filter(e=>e.id!==l.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,d.jsx)(k.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,d.jsxs)(h.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,d.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,d.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,d.jsx)(k.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,d.jsx)(W.Grid.Col,{span:{base:12,sm:9},children:(0,d.jsx)(w,{events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let i=JSON.parse(o),d=(0,a.default)(n),s=d.add(i.duration,"minutes");r(e=>[...e,{id:l.current++,title:i.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:i.color}]),t(e=>e.filter(e=>e.title!==i.title))}})})]})},code:`
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
`},L=(0,a.default)().format("YYYY-MM-DD"),z=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${L} 09:00:00`,end:`${L} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${L} 10:00:00`,end:`${L} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${L} 12:00:00`,end:`${L} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${z} 14:00:00`,end:`${z} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${z} 15:30:00`,end:`${z} 16:30:00`,color:"cyan"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)(P),a=({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))};return(0,d.jsx)(w,{events:e,withEventsDragAndDrop:!0,onEventDrop:a,withEventResize:!0,onEventResize:a})},code:`
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
`},G=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)("2024-01-15");return(0,d.jsx)(w,{view:"week",date:e,onDateChange:t,events:G})},code:`
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
`},K=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"lunch-block",title:"Lunch break",start:`${K} 12:00:00`,end:`${K} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${K} 14:00:00`,end:`${K} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${K} 10:00:00`,end:`${K} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${K} 14:30:00`,end:`${K} 15:30:00`,color:"green"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)(K);return(0,d.jsx)(w,{date:e,onDateChange:t,events:J})},code:`
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
`};var Z=e.i(428127),q=e.i(441058);let X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,M.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,M.useState)("week"),i=function(e,t){let n=(0,a.default)(e);switch(t){case"day":return{previous:n.subtract(1,"day"),next:n.add(1,"day")};case"week":return{previous:n.subtract(1,"week"),next:n.add(1,"week")};case"month":return{previous:n.subtract(1,"month").startOf("month"),next:n.add(1,"month").startOf("month")};case"year":return{previous:n.subtract(1,"year").startOf("year"),next:n.add(1,"year").startOf("year")};default:return{previous:n,next:n}}}(e,n);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(Z.ScheduleHeader,{children:[(0,d.jsx)(Z.ScheduleHeader.Previous,{onClick:()=>t(i.previous.format("YYYY-MM-DD"))}),(0,d.jsx)(Z.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let n=(0,a.default)(e);switch(t){case"day":return n.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,q.getStartOfWeek)({date:e,firstDayOfWeek:1})),n=t.add(6,"day");if(t.month()===n.month())return`${t.format("MMM D")} – ${n.format("D, YYYY")}`;return`${t.format("MMM D")} – ${n.format("MMM D, YYYY")}`}case"month":return n.format("MMMM YYYY");case"year":return n.format("YYYY");default:return""}}(e,n)}),(0,d.jsx)(Z.ScheduleHeader.Next,{onClick:()=>t(i.next.format("YYYY-MM-DD"))}),(0,d.jsx)(Z.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,d.jsx)(Z.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,d.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,d.jsx)(Z.ScheduleHeader.ViewSelect,{value:n,onChange:r})})]}),(0,d.jsx)(w,{date:e,onDateChange:t,view:n,onViewChange:r,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
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
`},ee=(0,a.default)().format("YYYY-MM-DD"),et=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),ea=[{id:"standup",title:"Morning Standup",start:`${ee} 09:00:00`,end:`${ee} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${ee} 10:00:00`,end:`${ee} 11:30:00`,color:"green"},{id:"code-review",title:"Code Review",start:`${et} 14:00:00`,end:`${et} 15:00:00`,color:"violet"},{id:"daily-sync-series",title:"Daily sync",start:`${(0,a.default)(ee).subtract(3,"day").format("YYYY-MM-DD")} 14:00:00`,end:`${(0,a.default)(ee).subtract(3,"day").format("YYYY-MM-DD")} 14:30:00`,color:"grape",recurrence:{rrule:"FREQ=DAILY;COUNT=14"}},{id:"weekly-review-series",title:"Weekly review",start:`${(0,a.default)(ee).startOf("week").format("YYYY-MM-DD")} 16:00:00`,end:`${(0,a.default)(ee).startOf("week").format("YYYY-MM-DD")} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],en={defaultExpanded:!1,type:"code",component:function(){return(0,d.jsx)(w,{events:ea,withAgenda:!0})},code:`
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
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: \`\${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:00:00\`,
    end: \`\${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:30:00\`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=14',
    },
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
`};var er=(0,t.__exportAll)({backgroundEvents:()=>Q,bidirectionalDragDrop:()=>N,controlled:()=>V,customHeader:()=>X,defaultView:()=>j,dragDrop:()=>E,eventForm:()=>B,eventResize:()=>F,externalDragDrop:()=>R,recurringEvents:()=>U,responsiveLayout:()=>$,usage:()=>Y,viewProps:()=>C,withAgenda:()=>en});e.s(["ScheduleDemos",0,er],238715)}]);