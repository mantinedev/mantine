(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,276995,e=>{"use strict";var t=e.i(494834);e.s(["calculateMonthDropDate",0,function({draggedEvent:e,targetDay:a}){let n=(0,t.default)(e.end).diff((0,t.default)(e.start),"millisecond"),r=(0,t.default)(e.start),o=(0,t.default)(a).startOf("day").hour(r.hour()).minute(r.minute()).second(r.second()).millisecond(r.millisecond()),d=o.add(n,"millisecond");return{start:o.toDate(),end:d.toDate()}}])},441058,e=>{"use strict";var t=e.i(494834);e.s(["getStartOfWeek",0,function({date:e,firstDayOfWeek:a=1}){let n=(0,t.default)(e);for(;n.day()!==a;)n=n.subtract(1,"day");return n.format("YYYY-MM-DD")}])},855578,e=>{"use strict";var t=e.i(494834),a=e.i(604363);t.default.extend(a.default),e.s(["getWeekNumber",0,function(e){return Array.isArray(e)?(0,t.default)(e.find(e=>1===(0,t.default)(e).day())).isoWeek():(0,t.default)(e).isoWeek()}])},621304,e=>{"use strict";var t=e.i(27748),a=e.i(494834);e.s(["getWeekdaysNames",0,function({locale:e,format:n="dd",firstDayOfWeek:r=1}){let o=(0,a.default)().day(r),d=[];for(let a=0;a<7;a+=1)d.push((0,t.formatDate)({locale:e,date:o.add(a,"days"),format:n}));return d}])},605520,753381,e=>{"use strict";var t=e.i(441058),a=e.i(494834);e.s(["getMonthDays",0,function({month:e,firstDayOfWeek:n=1,consistentWeeks:r}){let o=(0,a.default)((0,a.default)(e).subtract((0,a.default)(e).date()-1,"day").format("YYYY-MM-DD")),d=o.format("YYYY-MM-DD"),i=function(e,t=1){let n=(0,a.default)(e);if(!n.isValid())return n;let r=0===t?6:t-1;for(;n.day()!==r;)n=n.add(1,"day");return n.format("YYYY-MM-DD")}(o.add(o.daysInMonth()-1,"day").format("YYYY-MM-DD"),n),s=[],l=(0,a.default)((0,t.getStartOfWeek)({date:d,firstDayOfWeek:n}));for(;(0,a.default)(l).isBefore(i,"day");){let e=[];for(let t=0;t<7;t+=1)e.push(l.format("YYYY-MM-DD 00:00:00")),l=l.add(1,"day");s.push(e)}if(r&&s.length<6){let e=s[s.length-1],t=e[e.length-1],n=(0,a.default)(t).add(1,"day");for(;s.length<6;){let e=[];for(let t=0;t<7;t+=1)e.push(n.format("YYYY-MM-DD 00:00:00")),n=n.add(1,"day");s.push(e)}}return s}],605520),e.s(["isSameMonth",0,function(e,t){return(0,a.default)(e).format("YYYY-MM")===(0,a.default)(t).format("YYYY-MM")}],753381)},647170,e=>{"use strict";e.s(["handleMonthViewKeyDown",0,function({controlsRef:e,weekIndex:t,dayIndex:a,event:n}){let r=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(n.key);if(r){n.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:a,weekIndex:n,dayIndex:r,size:o}){let d=function({direction:e,weekIndex:t,dayIndex:a,size:n}){let r=n[t];if(!r)return null;switch(e){case"up":{if(0===t)return null;let e=Math.min(a,n[t-1]-1);return{weekIndex:t-1,dayIndex:e}}case"down":{if(t===n.length-1)return null;let e=Math.min(a,n[t+1]-1);return{weekIndex:t+1,dayIndex:e}}case"left":if(0===a){if(0===t)return null;return{weekIndex:t-1,dayIndex:n[t-1]-1}}return{weekIndex:t,dayIndex:a-1};case"right":if(a===r-1){if(t===n.length-1)return null;return{weekIndex:t+1,dayIndex:0}}return{weekIndex:t,dayIndex:a+1};default:return null}}({direction:a,weekIndex:n,dayIndex:r,size:o});if(!d)return;let i=t.current?.[d.weekIndex]?.[d.dayIndex];i&&(i.disabled||i.getAttribute("data-hidden")||i.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,weekIndex:d.weekIndex,dayIndex:d.dayIndex,size:o}):i.focus())}({controlsRef:e,direction:r,weekIndex:t,dayIndex:a,size:o})}}])},168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),n=e.i(605520),r=e.i(753381),o=e.i(4332),d=e.i(494834);function i({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:r}){if(!t)return{start:(0,o.toDateString)((0,d.default)(e).startOf("month")),end:(0,o.toDateString)((0,d.default)(e).endOf("month"))};let s=(0,n.getMonthDays)({month:e,firstDayOfWeek:r,consistentWeeks:a});return{start:s[0][0],end:s[s.length-1][6]}}var s=e.i(276995),l=e.i(657068),m=e.i(783261),c=e.i(376879),u=e.i(663551),f=e.i(201867),D=e.i(891343),h=e.i(67312),v=e.i(966696),p=e.i(647170);function y(e){let t=new Set(e),a=[],n=0;for(let e=0;e<7;e+=1)t.has(e)?a.push(-1):(a.push(n),n+=1);return a}var Y=e.i(298008),g=e.i(441058),M={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},w=e.i(232471),x=e.i(19300),S=e.i(284629),E=e.i(481178),b=e.i(275519),k=e.i(433512),O=e.i(951254),j=e.i(44091),V=e.i(62904),C=e.i(391466),H=e.i(191788),$=e.i(205693),I=e.i(391398);let T=(0,E.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,k.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),N={__staticSelector:"MonthView",withWeekDays:!0,withWeekendDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},W=(0,b.factory)(e=>{let E=(0,j.useProps)("MonthView",N,e),{classNames:b,className:k,style:W,styles:A,unstyled:B,attributes:R,vars:F,mod:P,date:U,onDateChange:G,withWeekNumbers:_,withWeekDays:L,withWeekendDays:J,locale:z,weekdayFormat:K,firstDayOfWeek:Q,weekendDays:q,__staticSelector:Z,getDayProps:X,getWeekNumberProps:ee,onDayClick:et,onWeekNumberClick:ea,consistentWeeks:en,highlightToday:er,radius:eo,withOutsideDays:ed,withHeader:ei,monthYearSelectProps:es,onViewChange:el,todayControlProps:em,nextControlProps:ec,previousControlProps:eu,viewSelectProps:ef,events:eD,moreEventsProps:eh,renderEventBody:ev,renderEvent:ep,withEventsDragAndDrop:ey,onEventDrop:eY,canDragEvent:eg,onEventDragStart:eM,onEventDragEnd:ew,onEventClick:ex,withDragSlotSelect:eS,onSlotDragEnd:eE,labels:eb,mode:ek,scrollAreaProps:eO,onExternalEventDrop:ej,recurrenceExpansionLimit:eV,maxEventsPerDay:eC,withAgenda:eH,...e$}=E,[eI,eT]=(0,H.useState)(!1),eN=Math.min(10,Math.max(1,eC??2)),eW=(0,C.useStyles)({name:Z,classes:M,props:E,className:k,style:W,classNames:b,styles:A,unstyled:B,attributes:R,vars:F,varsResolver:T,rootSelector:"monthView"}),{resolvedClassNames:eA,resolvedStyles:eB}=(0,V.useResolvedStylesApi)({classNames:b,styles:A,props:E}),eR={classNames:eA,styles:eB,attributes:R,__staticSelector:Z,radius:eo},eF=(0,O.useMantineTheme)(),eP=(0,$.useDatesContext)(),eU=eP.getFirstDayOfWeek(Q),eG=eP.getWeekendDays(q),e_=J?[]:Array.from({length:7},(e,t)=>t).filter(e=>eG.includes((eU+e)%7)),eL=new Set(e_),eJ=7-e_.length,ez=y(e_),eK=i({month:U,withOutsideDays:ed,consistentWeeks:en,firstDayOfWeek:eP.getFirstDayOfWeek(Q)}),eQ=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:n,consistentWeeks:r}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let o=new Set,s=[],l=i({month:e,withOutsideDays:n,consistentWeeks:r,firstDayOfWeek:a});for(let e of t)if((0,d.default)(e.end).isAfter(l.start,"day")||(0,d.default)(e.start).isBefore(l.end,"day")){if(s.push((0,Y.validateEvent)(e)),o.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);o.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:n}){let r={},o={},i=new Set,{weeks:s,groupedByDay:l}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let n=[],r={},o=(0,d.default)((0,g.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;o.isBefore(t)||o.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=o.format("YYYY-MM-DD 00:00:00");e.push(t),r[t]||(r[t]=[]),o=o.add(1,"day")}n.push(e)}return{weeks:n,groupedByDay:r}}({rangeStart:n?(0,d.default)(n.start):(0,d.default)(e).startOf("month"),rangeEnd:n?(0,d.default)(n.end):(0,d.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<s.length;e++)r[e.toString()]=[],o[e.toString()]=[];for(let e of t){let t=(0,d.default)(e.start).startOf("day"),a=(0,d.default)(e.end),n=0===a.hour()&&0===a.minute()&&0===a.second()?a.startOf("day").subtract(1,"day"):a.startOf("day"),m=n.isAfter(t);for(let a=0;a<s.length;a++){let c=s[a],u=(0,d.default)(c[0]).startOf("day"),f=(0,d.default)(c[6]).endOf("day");if((t.isBefore(f)||t.isSame(f,"day"))&&(n.isAfter(u)||n.isSame(u,"day"))){let{startDayIndex:s,daysSpanned:c,startOffset:D,width:h,hanging:v}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:n,isMultiday:r}){let o=e,d=t,i=e.isBefore(a),s=t.isAfter(n);o.isBefore(a)&&(o=a),d.isAfter(n)&&(d=n);let l=o.diff(a,"day"),m=Math.max(1,d.diff(a,"day")-l+ +!!r);return{startDayIndex:l,daysSpanned:m,startOffset:l/7*100,width:m/7*100,hanging:i&&s?"both":i?"start":s?"end":"none"}}({eventStart:t,eventEnd:n,weekStart:u,weekEnd:f,isMultiday:m});if("background"===e.display){o[a.toString()].push({...e,position:{startOffset:D,width:h,weekIndex:a,row:0,hanging:v}});continue}let p=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:n}){let r=0;for(let o of e){let e=(0,d.default)(o.start).startOf("day"),i=(e.isBefore(n)||e.isSame(n,"day")?n:e).diff(n,"day");i+(o.position?.width||0)/100*7>t&&i<t+a&&(r=Math.max(r,(o.position?.row||0)+1))}return r}({existingEvents:r[a.toString()],startDayIndex:s,daysSpanned:c,weekStart:u}),y={...e,position:{startOffset:D,width:h,weekIndex:a,row:p,hanging:v}};r[a.toString()].push(y),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:n,eventsAddedToDay:r,weekIdx:o}){if(0===o||!r.has(e.id.toString())){let o=t;for(;o.isBefore(a)||o.isSame(a,"day");){let t=o.format("YYYY-MM-DD 00:00:00");n[t]&&n[t].push(e),o=o.add(1,"day")}r.add(e.id.toString())}}({positionedEvent:y,eventStart:t,eventEnd:n,groupedByDay:l,eventsAddedToDay:i,weekIdx:a})}}}return{groupedByWeek:r,groupedByDay:l,backgroundByWeek:o}}({date:e,events:s,firstDayOfWeek:a,range:l})}({date:U,events:(0,l.expandRecurringEvents)({events:eD,rangeStart:(0,d.default)(eK.start).startOf("day").toDate(),rangeEnd:(0,d.default)(eK.end).endOf("day").toDate(),expansionLimit:eV}),firstDayOfWeek:eP.getFirstDayOfWeek(Q),withOutsideDays:ed,consistentWeeks:en}),eq=(0,H.useCallback)((e,t)=>{ej&&ej(e.dataTransfer,`${(0,d.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[ej]),eZ=(0,m.useDragDropHandlers)({enabled:ey,mode:ek,onEventDrop:eY,canDragEvent:eg,onEventDragStart:eM,onEventDragEnd:ew,calculateDropTarget:(e,t)=>(0,s.calculateMonthDropDate)({draggedEvent:t,targetDay:e}),onExternalDrop:ej?eq:void 0}),eX=(ey||!!ej)&&"static"!==ek,e0=(0,H.useRef)([]),e1=(0,c.useSlotDragSelect)({enabled:eS&&"static"!==ek,onDragEnd:(e,t)=>{if(!eE)return;let a=e0.current[e],n=e0.current[t];a&&n&&eE((0,d.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,d.default)(n).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),e2=(0,H.useRef)([]),e5=(0,n.getMonthDays)({month:(0,d.default)(U).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:eP.getFirstDayOfWeek(Q),consistentWeeks:en&&ed}),e3=(()=>{for(let e=0;e<e5.length;e++){let t=e5[e],a=-1;for(let n=0;n<t.length;n++){if(eL.has(n))continue;a+=1;let o=t[n];if((0,r.isSameMonth)(U,o)||ed)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),e4=L?(0,t.getWeekdaysNames)({locale:eP.getLocale(z),format:K,firstDayOfWeek:eU}).map((e,t)=>({day:e,index:t})).filter(({index:e})=>!eL.has(e)).map(({day:e,index:t})=>(0,H.createElement)("div",{...eW("monthViewWeekday"),key:t},e)):null,e8="month";e0.current=e5.map(e=>e.filter((e,t)=>!eL.has(t))).flat();let e6=e5.map((e,t)=>{e2.current[t]=[];let n=e.map((e,t)=>({day:e,columnIndex:t})).filter(({columnIndex:e})=>!eL.has(e)).map(({day:e},a)=>{let n=!(0,r.isSameMonth)(U,e),o=eG.includes((0,d.default)(e).day()),i=(0,d.default)(e).locale(z||eP.locale).format("MMMM D, YYYY"),s=X?.((0,d.default)(e).format("YYYY-MM-DD"))||{},l=(0,d.default)(e).isSame((0,d.default)(),"day")&&er;if(n&&!ed)return(0,I.jsx)("div",{"data-static":!0,...eW("monthViewDay",{style:s.style})},e);let m=t===e3.weekIndex&&a===e3.dayIndex,c=eZ.isDropTarget(e),u=t*eJ+a,f=e1.isSlotSelected(u,e8);return(0,H.createElement)(S.UnstyledButton,{"aria-label":i,...s,...eW("monthViewDay",{className:s.className,style:s.style}),key:e,ref:e=>{e&&(e2.current[t]||(e2.current[t]=[]),e2.current[t][a]=e)},"data-drag-slot-index":eS&&"static"!==ek?u:void 0,"data-drag-slot-group":eS&&"static"!==ek?e8:void 0,onClick:"static"===ek?void 0:t=>{et?.((0,d.default)(e).format("YYYY-MM-DD"),t),s.onClick?.(t)},onPointerDown:eS&&"static"!==ek?e=>e1.handleSlotPointerDown(e,u,e8):void 0,onKeyDown:e=>{(0,p.handleMonthViewKeyDown)({controlsRef:e2,weekIndex:t,dayIndex:a,event:e}),s.onKeyDown?.(e)},mod:[{outside:n,weekend:o,today:l,"drop-target":c,"drag-selected":f,static:"static"===ek},s.mod],"data-outside":n||void 0,tabIndex:"static"===ek?-1:m?0:-1,onDragOver:eX?t=>eZ.handleDragOver(t,e):void 0,onDragLeave:eX?eZ.handleDragLeave:void 0,onDrop:eX?t=>eZ.handleDrop(t,e):void 0},(0,I.jsx)("span",{"data-today":l||void 0,...eW("monthViewDayLabel"),children:(0,d.default)(e).format("D")}))}),i=ee?.((0,d.default)(e[0]).format("YYYY-MM-DD"))||{},s=(0,a.getWeekNumber)(e),l=(eQ.backgroundByWeek[t]||[]).flatMap(e=>{let a=eF.variantColorResolver({color:e.color||eF.primaryColor,theme:eF,variant:"light",autoContrast:!0}),n="function"==typeof ev?ev(e):e.title,r=Math.round(e.position.startOffset/(100/7)),o=Math.max(1,Math.round(e.position.width/(100/7)));return(0===e_.length?[{startOffset:e.position.startOffset,width:e.position.width}]:function(e,t,a,n){if(n<=0)return[];let r=[],o=null,d=null,i=()=>{null!==o&&null!==d&&(r.push({startOffset:o/n*100,width:(d-o+1)/n*100}),o=null,d=null)};for(let n=e;n<=t;n+=1){let e=a[n];if(void 0===e||-1===e){i();continue}null===o&&(o=e),d=e}return i(),r}(r,r+o-1,ez,eJ)).map((r,o)=>{let d={key:`bg-${e.id}-${t}-${o}`,...eW("monthViewBackgroundEvent",{style:{left:`calc(${r.startOffset}% + 2px)`,width:`calc(${r.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:n};if("function"==typeof ep)return ep(e,d);let{key:i,...s}=d;return(0,I.jsx)(w.Box,{...s},i)})}),m=100/eN,c=(function({events:e,groupedByDay:t,maxEventsPerDay:a,week:n,hiddenColumns:r=[],columnsCount:o=7}){let d=new Set(r),i=y(r),s=new Map,l=new Map,m=new Map;e.forEach((e,t)=>{let a;s.set(e,t),l.set(e,{startDayIndex:a=Math.max(0,Math.round(e.position.startOffset/14.285714285714286)),endDayIndex:Math.min(6,a+Math.max(1,Math.round(e.position.width/14.285714285714286))-1)})});let c=(e,t,a)=>{m.has(e)||m.set(e,new Map),m.get(e).set(t,a)},u=new Map;for(let r=0;r<n.length;r+=1){if(d.has(r))continue;let o=t[n[r]]||[],i=new Set(o.map(e=>e.id)),m=e.filter(e=>{let t=l.get(e);return i.has(e.id)&&r>=t.startDayIndex&&r<=t.endDayIndex}),f=o.length>a?m.filter(e=>e.position.row<a):m,D=new Set;[...f].sort((e,t)=>{let a=e.position.row-t.position.row;return 0!==a?a:s.get(e)-s.get(t)}).forEach(e=>{let t=u.get(e)??e.position.row;if(t>=a||D.has(t)){let e=function(e,t){for(let a=0;a<t;a+=1)if(!e.has(a))return a;return null}(D,a);if(null===e)return;t=e}D.add(t),c(e,r,t),u.set(e,t)})}return e.flatMap(e=>{let t=l.get(e),a=m.get(e),n=[],r=null,d=a=>{var r;let d,s,l,m,c,u,f=(d=a.startDayIndex===t.startDayIndex,s=a.endDayIndex===t.endDayIndex,l=i[a.startDayIndex],m=i[a.endDayIndex],{...e.position,startOffset:l/o*100,width:(m-l+1)/o*100,row:a.row,hanging:(r=e.position.hanging,c=d&&("start"===r||"both"===r),u=s&&("end"===r||"both"===r),c&&u?"both":c?"start":u?"end":"none")});n.push({event:e,position:f,clipStart:a.startDayIndex>t.startDayIndex,clipEnd:a.endDayIndex<t.endDayIndex,key:`${e.id}-${e.position.weekIndex}-${a.startDayIndex}-${a.endDayIndex}-${a.row}`})};for(let e=t.startDayIndex;e<=t.endDayIndex;e+=1){let t=a?.get(e);if(void 0===t){r&&(d(r),r=null);continue}r&&r.row===t?r.endDayIndex=e:(r&&d(r),r={startDayIndex:e,endDayIndex:e,row:t})}return r&&d(r),n})})({events:eQ.groupedByWeek[t]||[],groupedByDay:eQ.groupedByDay,maxEventsPerDay:eN,week:e,hiddenColumns:e_,columnsCount:eJ}).map(e=>{let t=eZ.isDraggableEvent(e.event);return(0,I.jsx)(D.ScheduleEvent,{event:e.event,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:ev,renderEvent:ep,radius:eo,mode:ek,mod:{"clip-start":e.clipStart,"clip-end":e.clipEnd},onClick:ex?t=>ex(e.event,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*m}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${m}% - 2px)`}},e.key)}),u=e.map((e,t)=>{if(eL.has(t))return null;let a=eQ.groupedByDay[e]||[],n=Math.max(0,a.length-eN);if(n<=0)return null;let r=ez[t]/eJ*100,o=1/eJ*100;return(0,I.jsx)(h.MoreEvents,{events:a,moreEventsCount:n,mode:ek,labels:eb,renderEventBody:ev,renderEvent:ep,onEventClick:ex,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${r}% + 1px)`,width:`calc(${o}% - 1px)`,height:"22px",paddingInline:4},...eh},`more-${e}`)});return(0,H.createElement)("div",{...eW("monthViewWeek"),key:t},_&&(0,I.jsx)(S.UnstyledButton,{"aria-label":`Week ${s}`,...i,onClick:"static"===ek?void 0:t=>{el?.("week"),G?.((0,o.toDateString)(e[0])),ea?.((0,d.default)(e[0]).format("YYYY-MM-DD"),t),i.onClick?.(t)},mod:{static:"static"===ek},tabIndex:"static"===ek?-1:0,...eW("monthViewWeekNumber",{className:i.className,style:i.style}),children:s},s),(0,H.createElement)("div",{...eW("monthViewEvents"),key:"week-events"},l,c,u),n)}),e7=(0,I.jsxs)(w.Box,{mod:[{"with-week-numbers":_,"with-weekdays":L,"without-weekend-days":e_.length>0,static:"static"===ek,"slot-dragging":e1.isDragging,"event-interaction":eZ.dragContextValue.isDragging},P],__vars:e_.length>0?{"--month-view-columns":`${eJ}`}:void 0,...eW("monthView"),...e$,children:[ei&&(0,I.jsx)(v.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,o.toDateString)((0,d.default)(U).subtract(1,"month").startOf("month")),next:()=>(0,o.toDateString)((0,d.default)(U).add(1,"month").startOf("month")),today:()=>(0,o.toDateString)((0,d.default)())},control:{monthYearSelect:{locale:z,yearValue:(0,d.default)(U).get("year"),monthValue:(0,d.default)(U).get("month"),onYearChange:e=>G?.((0,o.toDateString)((0,d.default)(U).set("year",e).startOf("month"))),onMonthChange:e=>G?.((0,o.toDateString)((0,d.default)(U).set("month",e).startOf("month"))),...es}},labels:eb,onDateChange:G,onViewChange:el,previousControlProps:eu,nextControlProps:ec,todayControlProps:em,viewSelectProps:ef,stylesApiProps:eR,onAgendaClick:eH?()=>eT(e=>!e):void 0,agendaActive:eI}),eI&&(0,I.jsx)(u.AgendaView,{rangeStart:(0,d.default)(U).startOf("month").format("YYYY-MM-DD"),rangeEnd:(0,d.default)(U).endOf("month").format("YYYY-MM-DD"),events:eD,locale:z,labels:eb,mode:ek,onEventClick:ex,recurrenceExpansionLimit:eV,...eR}),!eI&&(0,I.jsx)(x.ScrollArea,{scrollbarSize:4,...eO,...eW("monthViewScrollArea",{className:eO?.className,style:eO?.style}),children:(0,I.jsxs)("div",{...eW("monthViewInner"),children:[e4&&(0,I.jsxs)("div",{...eW("monthViewWeekdays"),children:[_&&(0,I.jsx)("div",{...eW("monthViewWeekdaysCorner")}),e4]}),e6]})})]});return ey?(0,I.jsx)(f.DragContext.Provider,{value:eZ.dragContextValue,children:e7}):e7});W.displayName="@mantine/schedule/MonthView",W.classes=M,W.varsResolver=T,e.s(["MonthView",0,W],168574)},791941,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().startOf("month").format("YYYY-MM-DD"),o=(0,a.default)().date(15).format("YYYY-MM-DD"),d=(0,a.default)().endOf("month").format("YYYY-MM-DD"),i=[{id:1,title:"Team Meeting",start:`${r} 09:00:00`,end:`${r} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:`${o} 00:00:00`,end:(0,a.default)(o).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:3,title:"Client Call",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"green"},{id:4,title:"Monthly Review",start:`${d} 00:00:00`,end:(0,a.default)(d).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Workshop",start:(0,a.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,a.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:6,title:"Conference",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"cyan"}],s=[{id:1,title:"Event 1",start:`${n} 09:00:00`,end:`${n} 10:00:00`,color:"blue"},{id:2,title:"Event 2",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Event 3",start:`${n} 11:00:00`,end:`${n} 12:00:00`,color:"orange"},{id:4,title:"Event 4",start:`${n} 13:00:00`,end:`${n} 14:00:00`,color:"violet"},{id:5,title:"Event 5",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"cyan"},{id:6,title:"Event 6",start:`${n} 15:00:00`,end:`${n} 16:00:00`,color:"pink"}],l=`
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
`;var c=e.i(391398),u=e.i(168574);let f={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,withWeekNumbers:!0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekNumbers />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,withWeekDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,withWeekendDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekendDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,firstDayOfWeek:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,weekdayFormat:"ddd"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} weekdayFormat="ddd" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var Y=e.i(191788);let g={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.MonthView,{date:e,consistentWeeks:!1,onDateChange:t})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}
`},M={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,highlightToday:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} highlightToday={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,withOutsideDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withOutsideDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,withHeader:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withHeader={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},S={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},E=(0,a.default)().format("YYYY-MM-DD"),b=[{id:1,title:"Team Meeting",start:`${E} 09:00:00`,end:`${E} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(b);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var O=e.i(19683),j=e.i(369974),V=e.i(284629);let C=(0,a.default)().startOf("month"),H=[{id:1,title:"Team Standup",start:C.add(2,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(2,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:C.add(5,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(5,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:C.add(10,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(10,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:C.add(15,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(15,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"Code Review",start:C.add(18,"day").hour(16).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(18,"day").hour(17).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"cyan",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}},{id:6,title:"Tech Conference",start:C.add(22,"day").format("YYYY-MM-DD 00:00:00"),end:C.add(22,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],$={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(H);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(r).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(j.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(j.HoverCard.Target,{children:(0,c.jsx)(V.UnstyledButton,{...t})}),(0,c.jsx)(j.HoverCard.Dropdown,{children:(0,c.jsx)(O.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:O._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(H,null,2)};`,language:"tsx"}]},I={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,mode:"static"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} mode="static" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var T=e.i(162077);let N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(i),[n,r]=(0,Y.useState)(!1),[o,d]=(0,Y.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.MonthView,{date:new Date,events:e,withDragSlotSelect:!0,onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),r(!0)}}),(0,c.jsx)(T.EventForm,{opened:n,onClose:()=>r(!1),onExitTransitionEnd:()=>d(null),values:o,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:o?.id?()=>{o?.id&&t(e=>e.filter(e=>e.id!==o.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:T._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]};var W=e.i(232471),A=e.i(20035),B=e.i(883364);let R=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)([]),n=(0,Y.useRef)(1);return(0,c.jsxs)(A.Grid,{children:[(0,c.jsxs)(A.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(B.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),R.map(e=>(0,c.jsx)(W.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(B.Text,{size:"sm",fw:500,children:e.title})},e.title))]}),(0,c.jsx)(A.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let d=JSON.parse(o),i=(0,a.default)(r),s=i.endOf("day");t(e=>[...e,{id:n.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
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
`},P=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(P),[n,r]=(0,Y.useState)([]),[o,d]=(0,Y.useState)(!1),i=(0,Y.useRef)(1);return(0,c.jsxs)(A.Grid,{children:[(0,c.jsx)(A.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(W.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let a=e.dataTransfer.getData("application/json");if(!a)return;let{eventId:o}=JSON.parse(a),i=n.find(e=>String(e.id)===String(o));i&&(t(e=>[...e,{title:i.title,color:i.color||"blue"}]),r(e=>e.filter(e=>e.id!==i.id)))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(B.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsx)(W.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(B.Text,{size:"sm",fw:500,children:e.title})},e.title)),0===e.length&&(0,c.jsx)(B.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(A.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let d=JSON.parse(o),s=(0,a.default)(n),l=s.endOf("day");r(e=>[...e,{id:i.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
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
`},G=[{id:"monthly-planning-series",title:"Weekly planning (series)",start:"2025-11-03 10:00:00",end:"2025-11-03 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO;COUNT=10",exdate:["2025-11-17 10:00:00"]}},{id:"monthly-planning-override",title:"Weekly planning (moved occurrence)",start:"2025-11-17 15:00:00",end:"2025-11-17 16:00:00",color:"grape",recurringEventId:"monthly-planning-series",recurrenceId:"2025-11-17 10:00:00"},{id:"month-one-off",title:"One-off product demo",start:"2025-11-20 12:00:00",end:"2025-11-20 13:00:00",color:"green"}],_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)("2025-11-01");return(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:G,withWeekNumbers:!0})},code:`
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
`},L=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"company-offsite",title:"Company offsite",start:`${(0,a.default)(L).startOf("week").add(1,"day").format("YYYY-MM-DD")} 00:00:00`,end:`${(0,a.default)(L).startOf("week").add(3,"day").format("YYYY-MM-DD")} 23:59:59`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${L} 10:00:00`,end:`${L} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${(0,a.default)(L).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,end:`${(0,a.default)(L).add(1,"day").format("YYYY-MM-DD")} 15:00:00`,color:"green"}],z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(J);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:r})=>{e.some(e=>"background"===e.display&&n<e.end&&r>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:r}:e))}})},code:`
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
`};var K=e.i(428127);let Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(K.ScheduleHeader,{children:[(0,c.jsx)(K.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(K.ScheduleHeader.MonthYearSelect,{yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:n=>t((0,a.default)(e).year(n).startOf("month").format("YYYY-MM-DD")),onMonthChange:n=>t((0,a.default)(e).month(n).startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(K.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(K.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(K.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:i,withHeader:!1})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},q=(0,a.default)().format("YYYY-MM-DD"),Z=[{id:1,title:"Team Meeting",start:`${q} 09:00:00`,end:`${q} 10:00:00`,color:"blue"},{id:2,title:"Code Review",start:`${q} 11:00:00`,end:`${q} 12:00:00`,color:"green"},{id:3,title:"Design Review",start:`${q} 13:00:00`,end:`${q} 14:00:00`,color:"violet"},{id:4,title:"Sprint Planning",start:`${q} 15:00:00`,end:`${q} 16:00:00`,color:"orange"},{id:5,title:"Retrospective",start:`${q} 16:30:00`,end:`${q} 17:30:00`,color:"cyan"}],X={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:Z,maxEventsPerDay:4})},code:`
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
`};e.i(27355);let ee={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",more:"Más",moreLabel:e=>`+${e} m\xe1s`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},et={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,radius:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} radius={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ea=(0,a.default)().format("YYYY-MM-DD"),en=(0,a.default)().startOf("month").format("YYYY-MM-DD"),er=[{id:"team-meeting",title:"Team Meeting",start:`${en} 09:00:00`,end:`${en} 10:30:00`,color:"blue"},{id:"client-call",title:"Client Call",start:`${ea} 14:00:00`,end:`${ea} 15:00:00`,color:"green"},{id:"daily-sync-series",title:"Daily sync",start:`${en} 09:30:00`,end:`${en} 10:00:00`,color:"grape",recurrence:{rrule:"FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30"}},{id:"weekly-review-series",title:"Weekly review",start:`${en} 16:00:00`,end:`${en} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],eo={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,Y.useState)(ea);return(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:er,withAgenda:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');

const events = [
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 'client-call',
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: \`\${startOfMonth} 09:30:00\`,
    end: \`\${startOfMonth} 10:00:00\`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfMonth} 16:00:00\`,
    end: \`\${startOfMonth} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <MonthView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
`},ed=(0,a.default)().startOf("month"),ei=[{id:1,title:"Company Retreat",start:ed.add(2,"day").format("YYYY-MM-DD 00:00:00"),end:ed.add(3,"day").format("YYYY-MM-DD 00:00:00"),color:"blue"},{id:2,title:"Team Meeting",start:ed.add(2,"day").format("YYYY-MM-DD 09:00:00"),end:ed.add(2,"day").format("YYYY-MM-DD 10:00:00"),color:"green"},{id:3,title:"Project Deadline",start:ed.add(8,"day").format("YYYY-MM-DD 00:00:00"),end:ed.add(9,"day").format("YYYY-MM-DD 00:00:00"),color:"red"},{id:4,title:"Lunch with Client",start:ed.add(8,"day").format("YYYY-MM-DD 12:00:00"),end:ed.add(8,"day").format("YYYY-MM-DD 13:30:00"),color:"orange"},{id:5,title:"Code Review",start:ed.add(8,"day").format("YYYY-MM-DD 15:00:00"),end:ed.add(8,"day").format("YYYY-MM-DD 16:00:00"),color:"violet"},{id:6,title:"Sprint Planning",start:ed.add(15,"day").format("YYYY-MM-DD 10:00:00"),end:ed.add(15,"day").format("YYYY-MM-DD 11:30:00"),color:"cyan"},{id:7,title:"Design Workshop",start:ed.add(15,"day").format("YYYY-MM-DD 14:00:00"),end:ed.add(15,"day").format("YYYY-MM-DD 16:00:00"),color:"grape"},{id:8,title:"Conference",start:ed.add(20,"day").format("YYYY-MM-DD 00:00:00"),end:ed.add(22,"day").format("YYYY-MM-DD 00:00:00"),color:"pink"}],es={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:ei,renderEvent:(e,t)=>{let n,r;if(n=(0,a.default)(e.start),r=(0,a.default)(e.end),n.isSame(n.startOf("day"))&&r.isSame(r.startOf("day")))return(0,c.jsx)(V.UnstyledButton,{...t});let{children:o,className:d,style:i,...s}=t;return(0,c.jsxs)(V.UnstyledButton,{...s,style:{...i,display:"flex",alignItems:"center",gap:4,fontSize:10,whiteSpace:"nowrap",overflow:"hidden",pointerEvents:"all",cursor:"pointer",paddingInline:2},children:[(0,c.jsx)(W.Box,{component:"span",style:{width:8,height:8,borderRadius:"50%",backgroundColor:"var(--event-bg)",flexShrink:0}}),(0,c.jsx)("span",{style:{width:28,flexShrink:0},children:(0,a.default)(e.start).format("h:mm")}),(0,c.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e.title})]})}})},code:[{fileName:"Demo.tsx",code:`
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

export const events: ScheduleEventData[] = ${JSON.stringify(ei,null,2)};`,language:"tsx"}]};var el=(0,t.__exportAll)({backgroundEvents:()=>z,bidirectionalDragDrop:()=>U,consistentWeeks:()=>g,customHeader:()=>Q,dragDrop:()=>k,eventForm:()=>N,externalDragDrop:()=>F,firstDayOfWeek:()=>p,highlightToday:()=>M,localization:()=>ee,manyEvents:()=>S,maxEventsPerDay:()=>X,radius:()=>et,recurringEvents:()=>_,renderEvent:()=>$,staticMode:()=>I,timedEvents:()=>es,usage:()=>f,weekdayFormat:()=>y,withAgenda:()=>eo,withWeekNumbers:()=>D,withoutHeader:()=>x,withoutOutsideDays:()=>w,withoutWeekDays:()=>h,withoutWeekendDays:()=>v});e.s(["MonthViewDemos",0,el],791941)}]);