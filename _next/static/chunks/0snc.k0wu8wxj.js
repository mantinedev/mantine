(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,168574,e=>{"use strict";var t=e.i(621304),a=e.i(855578),n=e.i(605520),o=e.i(753381),r=e.i(4332),d=e.i(494834);function i({month:e,withOutsideDays:t,consistentWeeks:a,firstDayOfWeek:o}){if(!t)return{start:(0,r.toDateString)((0,d.default)(e).startOf("month")),end:(0,r.toDateString)((0,d.default)(e).endOf("month"))};let s=(0,n.getMonthDays)({month:e,firstDayOfWeek:o,consistentWeeks:a});return{start:s[0][0],end:s[s.length-1][6]}}var s=e.i(657068),l=e.i(783261),m=e.i(376879),c=e.i(201867),u=e.i(891343),f=e.i(67312),D=e.i(966696),v=e.i(647170),h=e.i(298008),p=e.i(441058),g={monthView:"m_8eceba9d",monthViewWeekdays:"m_6634a808",monthViewWeek:"m_bdaf3831",monthViewWeekNumber:"m_873456da",monthViewWeekday:"m_c97d91cb",monthViewWeekdaysCorner:"m_25eee07d",monthViewDay:"m_ab476fbf",monthViewDayLabel:"m_fd501e75",monthViewBackgroundEvent:"m_9e8509af",monthViewEvents:"m_f0fa5e16"},y=e.i(232471),Y=e.i(19300),w=e.i(284629),M=e.i(481178),x=e.i(275519),S=e.i(433512),E=e.i(951254),b=e.i(44091),j=e.i(62904),k=e.i(391466),O=e.i(191788),V=e.i(205693),H=e.i(391398);let C=(0,M.createVarsResolver)((e,{radius:t,maxEventsPerDay:a})=>({monthView:{"--month-view-radius":void 0!==t?(0,S.getRadius)(t):void 0,"--month-view-max-events":void 0!==a?`${Math.min(10,Math.max(1,a))}`:void 0}})),$={__staticSelector:"MonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,withOutsideDays:!0,withHeader:!0,weekdayFormat:"ddd",withEventsDragAndDrop:!1,withDragSlotSelect:!1,mode:"default"},T=(0,x.factory)(e=>{let M=(0,b.useProps)("MonthView",$,e),{classNames:x,className:S,style:T,styles:N,unstyled:I,attributes:W,vars:B,mod:A,date:R,onDateChange:P,withWeekNumbers:F,withWeekDays:G,locale:_,weekdayFormat:L,firstDayOfWeek:J,weekendDays:U,__staticSelector:z,getDayProps:K,getWeekNumberProps:Q,onDayClick:q,onWeekNumberClick:Z,consistentWeeks:X,highlightToday:ee,radius:et,withOutsideDays:ea,withHeader:en,monthYearSelectProps:eo,onViewChange:er,todayControlProps:ed,nextControlProps:ei,previousControlProps:es,viewSelectProps:el,events:em,moreEventsProps:ec,renderEventBody:eu,renderEvent:ef,withEventsDragAndDrop:eD,onEventDrop:ev,canDragEvent:eh,onEventDragStart:ep,onEventDragEnd:eg,onEventClick:ey,withDragSlotSelect:eY,onSlotDragEnd:ew,labels:eM,mode:ex,scrollAreaProps:eS,onExternalEventDrop:eE,recurrenceExpansionLimit:eb,maxEventsPerDay:ej,...ek}=M,eO=Math.min(10,Math.max(1,ej??2)),eV=(0,k.useStyles)({name:z,classes:g,props:M,className:S,style:T,classNames:x,styles:N,unstyled:I,attributes:W,vars:B,varsResolver:C,rootSelector:"monthView"}),{resolvedClassNames:eH,resolvedStyles:eC}=(0,j.useResolvedStylesApi)({classNames:x,styles:N,props:M}),e$=(0,E.useMantineTheme)(),eT=(0,V.useDatesContext)(),eN=i({month:R,withOutsideDays:ea,consistentWeeks:X,firstDayOfWeek:eT.getFirstDayOfWeek(J)}),eI=function({date:e,events:t,firstDayOfWeek:a=1,withOutsideDays:n,consistentWeeks:o}){if(void 0===t)return{groupedByDay:{},groupedByWeek:{},backgroundByWeek:{}};let r=new Set,s=[],l=i({month:e,withOutsideDays:n,consistentWeeks:o,firstDayOfWeek:a});for(let e of t)if((0,d.default)(e.end).isAfter(l.start,"day")||(0,d.default)(e.start).isBefore(l.end,"day")){if(s.push((0,h.validateEvent)(e)),r.has(e.id))throw Error(`[@mantine/schedule] MonthView: Duplicated event ids found: ${e.id}`);r.add(e.id)}return function({date:e,events:t,firstDayOfWeek:a=1,range:n}){let o={},r={},i=new Set,{weeks:s,groupedByDay:l}=function({rangeStart:e,rangeEnd:t,firstDayOfWeek:a}){let n=[],o={},r=(0,d.default)((0,p.getStartOfWeek)({date:e.format("YYYY-MM-DD"),firstDayOfWeek:a}));for(;r.isBefore(t)||r.isSame(t,"day");){let e=[];for(let t=0;t<7;t++){let t=r.format("YYYY-MM-DD 00:00:00");e.push(t),o[t]||(o[t]=[]),r=r.add(1,"day")}n.push(e)}return{weeks:n,groupedByDay:o}}({rangeStart:n?(0,d.default)(n.start):(0,d.default)(e).startOf("month"),rangeEnd:n?(0,d.default)(n.end):(0,d.default)(e).startOf("month").endOf("month"),firstDayOfWeek:a});for(let e=0;e<s.length;e++)o[e.toString()]=[],r[e.toString()]=[];for(let e of t){let t=(0,d.default)(e.start).startOf("day"),a=(0,d.default)(e.end).startOf("day"),n=a.isAfter(t);for(let m=0;m<s.length;m++){let c=s[m],u=(0,d.default)(c[0]).startOf("day"),f=(0,d.default)(c[6]).endOf("day");if((t.isBefore(f)||t.isSame(f,"day"))&&(a.isAfter(u)||a.isSame(u,"day"))){let{startDayIndex:s,daysSpanned:c,startOffset:D,width:v,hanging:h}=function({eventStart:e,eventEnd:t,weekStart:a,weekEnd:n,isMultiday:o}){let r=e,d=t,i=e.isBefore(a),s=t.isAfter(n);r.isBefore(a)&&(r=a),d.isAfter(n)&&(d=n);let l=r.diff(a,"day"),m=Math.max(1,d.diff(a,"day")-l+ +!!o);return{startDayIndex:l,daysSpanned:m,startOffset:l/7*100,width:m/7*100,hanging:i&&s?"both":i?"start":s?"end":"none"}}({eventStart:t,eventEnd:a,weekStart:u,weekEnd:f,isMultiday:n});if("background"===e.display){r[m.toString()].push({...e,position:{startOffset:D,width:v,weekIndex:m,row:0,hanging:h}});continue}let p=function({existingEvents:e,startDayIndex:t,daysSpanned:a,weekStart:n}){let o=0;for(let r of e){let e=(0,d.default)(r.start).startOf("day"),i=(e.isBefore(n)||e.isSame(n,"day")?n:e).diff(n,"day");i+(r.position?.width||0)/100*7>t&&i<t+a&&(o=Math.max(o,(r.position?.row||0)+1))}return o}({existingEvents:o[m.toString()],startDayIndex:s,daysSpanned:c,weekStart:u}),g={...e,position:{startOffset:D,width:v,weekIndex:m,row:p,hanging:h}};o[m.toString()].push(g),function({positionedEvent:e,eventStart:t,eventEnd:a,groupedByDay:n,eventsAddedToDay:o,weekIdx:r}){if(0===r||!o.has(e.id.toString())){let r=t;for(;r.isBefore(a)||r.isSame(a,"day");){let t=r.format("YYYY-MM-DD 00:00:00");n[t]&&n[t].push(e),r=r.add(1,"day")}o.add(e.id.toString())}}({positionedEvent:g,eventStart:t,eventEnd:a,groupedByDay:l,eventsAddedToDay:i,weekIdx:m})}}}return{groupedByWeek:o,groupedByDay:l,backgroundByWeek:r}}({date:e,events:s,firstDayOfWeek:a,range:l})}({date:R,events:(0,s.expandRecurringEvents)({events:em,rangeStart:(0,d.default)(eN.start).startOf("day").toDate(),rangeEnd:(0,d.default)(eN.end).endOf("day").toDate(),expansionLimit:eb}),firstDayOfWeek:eT.getFirstDayOfWeek(J),withOutsideDays:ea,consistentWeeks:X}),eW=(0,O.useCallback)((e,t)=>{eE&&eE(e.dataTransfer,`${(0,d.default)(t).format("YYYY-MM-DD")} 00:00:00`)},[eE]),eB=(0,l.useDragDropHandlers)({enabled:eD,mode:ex,onEventDrop:ev,canDragEvent:eh,onEventDragStart:ep,onEventDragEnd:eg,calculateDropTarget:(e,t)=>(function({draggedEvent:e,targetDay:t}){let a=(0,d.default)(e.end).diff((0,d.default)(e.start),"millisecond"),n=(0,d.default)(e.start),o=(0,d.default)(t).startOf("day").hour(n.hour()).minute(n.minute()).second(n.second()).millisecond(n.millisecond()),r=o.add(a,"millisecond");return{start:o.toDate(),end:r.toDate()}})({draggedEvent:t,targetDay:e}),onExternalDrop:eE?eW:void 0}),eA=(eD||!!eE)&&"static"!==ex,eR=(0,O.useRef)([]),eP=(0,m.useSlotDragSelect)({enabled:eY&&"static"!==ex,onDragEnd:(e,t)=>{if(!ew)return;let a=eR.current[e],n=eR.current[t];a&&n&&ew((0,d.default)(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),(0,d.default)(n).endOf("day").format("YYYY-MM-DD HH:mm:ss"))}}),eF=(0,O.useRef)([]),eG=(0,n.getMonthDays)({month:(0,d.default)(R).format("YYYY-MM-DD 00:00:00"),firstDayOfWeek:eT.getFirstDayOfWeek(J),consistentWeeks:X&&ea}),e_=(()=>{for(let e=0;e<eG.length;e++){let t=eG[e];for(let a=0;a<t.length;a++){let n=t[a];if((0,o.isSameMonth)(R,n)||ea)return{weekIndex:e,dayIndex:a}}}return{weekIndex:0,dayIndex:0}})(),eL=G?(0,t.getWeekdaysNames)({locale:eT.getLocale(_),format:L,firstDayOfWeek:eT.getFirstDayOfWeek(J)}).map((e,t)=>(0,O.createElement)("div",{...eV("monthViewWeekday"),key:t},e)):null,eJ="month";eR.current=eG.flat();let eU=eG.map((e,t)=>{eF.current[t]||(eF.current[t]=[]);let n=e.map((e,a)=>{let n=!(0,o.isSameMonth)(R,e),r=eT.getWeekendDays(U).includes((0,d.default)(e).day()),i=(0,d.default)(e).locale(_||eT.locale).format("MMMM D, YYYY"),s=K?.((0,d.default)(e).format("YYYY-MM-DD"))||{},l=(0,d.default)(e).isSame((0,d.default)(),"day")&&ee;if(n&&!ea)return(0,H.jsx)("div",{"data-static":!0,...eV("monthViewDay",{style:s.style})},e);let m=t===e_.weekIndex&&a===e_.dayIndex,c=eB.isDropTarget(e),u=7*t+a,f=eP.isSlotSelected(u,eJ);return(0,O.createElement)(w.UnstyledButton,{"aria-label":i,...s,...eV("monthViewDay",{className:s.className,style:s.style}),key:e,ref:e=>{e&&(eF.current[t]||(eF.current[t]=[]),eF.current[t][a]=e)},"data-drag-slot-index":eY&&"static"!==ex?u:void 0,"data-drag-slot-group":eY&&"static"!==ex?eJ:void 0,onClick:"static"===ex?void 0:t=>{q?.((0,d.default)(e).format("YYYY-MM-DD"),t),s.onClick?.(t)},onPointerDown:eY&&"static"!==ex?e=>eP.handleSlotPointerDown(e,u,eJ):void 0,onKeyDown:e=>{(0,v.handleMonthViewKeyDown)({controlsRef:eF,weekIndex:t,dayIndex:a,event:e}),s.onKeyDown?.(e)},mod:[{outside:n,weekend:r,today:l,"drop-target":c,"drag-selected":f,static:"static"===ex},s.mod],"data-outside":n||void 0,tabIndex:"static"===ex?-1:m?0:-1,onDragOver:eA?t=>eB.handleDragOver(t,e):void 0,onDragLeave:eA?eB.handleDragLeave:void 0,onDrop:eA?t=>eB.handleDrop(t,e):void 0},(0,H.jsx)("span",{"data-today":l||void 0,...eV("monthViewDayLabel"),children:(0,d.default)(e).format("D")}))}),i=Q?.((0,d.default)(e[0]).format("YYYY-MM-DD"))||{},s=(0,a.getWeekNumber)(e),l=(eI.backgroundByWeek[t]||[]).map(e=>{let a=e$.variantColorResolver({color:e.color||e$.primaryColor,theme:e$,variant:"light",autoContrast:!0}),n="function"==typeof eu?eu(e):e.title,o={key:`bg-${e.id}-${t}`,...eV("monthViewBackgroundEvent",{style:{left:`calc(${e.position.startOffset}% + 2px)`,width:`calc(${e.position.width}% - 3px)`}}),__vars:{"--bg-event-bg":a.background,"--bg-event-color":a.color},children:n};if("function"==typeof ef)return ef(e,o);let{key:r,...d}=o;return(0,H.jsx)(y.Box,{...d},r)}),m=100/eO,c=(eI.groupedByWeek[t]||[]).filter(e=>e.position.row<eO).map(e=>{let t=eB.isDraggableEvent(e);return(0,H.jsx)(u.ScheduleEvent,{event:e,nowrap:!0,autoSize:!0,hanging:e.position.hanging,draggable:t,renderEventBody:eu,renderEvent:ef,radius:et,mode:ex,onClick:ey?t=>ey(e,t):void 0,style:{position:"absolute",top:`calc(${e.position.row*m}% + 1px)`,left:`calc(${e.position.startOffset}% + 1px)`,width:`calc(${e.position.width}% - 2px)`,height:`calc(${m}% - 2px)`}},e.id)}),D=e.map((e,t)=>{let a=eI.groupedByDay[e]||[],n=Math.max(0,a.length-eO);return n<=0?null:(0,H.jsx)(f.MoreEvents,{events:a,moreEventsCount:n,mode:ex,style:{position:"absolute",top:"calc(100% - 2px)",left:`calc(${t/7*100}% + 1px)`,width:`calc(${1/7*100}% - 1px)`,height:"22px",paddingInline:4},...ec},`more-${e}`)});return(0,O.createElement)("div",{...eV("monthViewWeek"),key:t},F&&(0,H.jsx)(w.UnstyledButton,{"aria-label":`Week ${s}`,...i,onClick:"static"===ex?void 0:t=>{er?.("week"),P?.((0,r.toDateString)(e[0])),Z?.((0,d.default)(e[0]).format("YYYY-MM-DD"),t),i.onClick?.(t)},mod:{static:"static"===ex},tabIndex:"static"===ex?-1:0,...eV("monthViewWeekNumber",{className:i.className,style:i.style}),children:s},s),(0,O.createElement)("div",{...eV("monthViewEvents"),key:"week-events"},l,c,D),n)}),ez=(0,H.jsxs)(y.Box,{mod:[{"with-week-numbers":F,"with-weekdays":G,static:"static"===ex,"slot-dragging":eP.isDragging},A],...eV("monthView"),...ek,children:[en&&(0,H.jsx)(D.ScheduleHeaderBase,{view:"month",navigationHandlers:{previous:()=>(0,r.toDateString)((0,d.default)(R).subtract(1,"month").startOf("month")),next:()=>(0,r.toDateString)((0,d.default)(R).add(1,"month").startOf("month")),today:()=>(0,r.toDateString)((0,d.default)())},control:{monthYearSelect:{locale:_,yearValue:(0,d.default)(R).get("year"),monthValue:(0,d.default)(R).get("month"),onYearChange:e=>P?.((0,r.toDateString)((0,d.default)(R).set("year",e).startOf("month"))),onMonthChange:e=>P?.((0,r.toDateString)((0,d.default)(R).set("month",e).startOf("month"))),...eo}},labels:eM,onDateChange:P,onViewChange:er,previousControlProps:es,nextControlProps:ei,todayControlProps:ed,viewSelectProps:el,stylesApiProps:{classNames:eH,styles:eC,attributes:W,__staticSelector:z,radius:et}}),(0,H.jsx)(Y.ScrollArea,{scrollbarSize:4,...eS,...eV("monthViewScrollArea",{className:eS?.className,style:eS?.style}),children:(0,H.jsxs)("div",{...eV("monthViewInner"),children:[eL&&(0,H.jsxs)("div",{...eV("monthViewWeekdays"),children:[F&&(0,H.jsx)("div",{...eV("monthViewWeekdaysCorner")}),eL]}),eU]})})]});return eD?(0,H.jsx)(c.DragContext.Provider,{value:eB.dragContextValue,children:ez}):ez});T.displayName="@mantine/schedule/MonthView",T.classes=g,T.varsResolver=C,e.s(["MonthView",0,T],168574)},791941,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=(0,a.default)().startOf("month").format("YYYY-MM-DD"),r=(0,a.default)().date(15).format("YYYY-MM-DD"),d=(0,a.default)().endOf("month").format("YYYY-MM-DD"),i=[{id:1,title:"Team Meeting",start:`${o} 09:00:00`,end:`${o} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:`${r} 00:00:00`,end:(0,a.default)(r).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:3,title:"Client Call",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"green"},{id:4,title:"Monthly Review",start:`${d} 00:00:00`,end:(0,a.default)(d).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Workshop",start:(0,a.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,a.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:6,title:"Conference",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"cyan"}],s=[{id:1,title:"Event 1",start:`${n} 09:00:00`,end:`${n} 10:00:00`,color:"blue"},{id:2,title:"Event 2",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Event 3",start:`${n} 11:00:00`,end:`${n} 12:00:00`,color:"orange"},{id:4,title:"Event 4",start:`${n} 13:00:00`,end:`${n} 14:00:00`,color:"violet"},{id:5,title:"Event 5",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"cyan"},{id:6,title:"Event 6",start:`${n} 15:00:00`,end:`${n} 16:00:00`,color:"pink"}],l=`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,withWeekDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,firstDayOfWeek:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,weekdayFormat:"ddd"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} weekdayFormat="ddd" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var g=e.i(191788);let y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.MonthView,{date:e,consistentWeeks:!1,onDateChange:t})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}
`},Y={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,highlightToday:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,withHeader:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withHeader={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},S=(0,a.default)().format("YYYY-MM-DD"),E=[{id:1,title:"Team Meeting",start:`${S} 09:00:00`,end:`${S} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],b={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(E);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var j=e.i(19683),k=e.i(369974),O=e.i(284629);let V=(0,a.default)().startOf("month"),H=[{id:1,title:"Team Standup",start:V.add(2,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(2,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:V.add(5,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(5,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:V.add(10,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(10,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:V.add(15,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(15,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"Code Review",start:V.add(18,"day").hour(16).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:V.add(18,"day").hour(17).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"cyan",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}},{id:6,title:"Tech Conference",start:V.add(22,"day").format("YYYY-MM-DD 00:00:00"),end:V.add(22,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],C={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(H);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(k.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(k.HoverCard.Target,{children:(0,c.jsx)(O.UnstyledButton,{...t})}),(0,c.jsx)(k.HoverCard.Dropdown,{children:(0,c.jsx)(j.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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

export const eventsData: ScheduleEventData[] = ${JSON.stringify(H,null,2)};`,language:"tsx"}]},$={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,mode:"static"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} mode="static" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var T=e.i(162077);let N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(i),[n,o]=(0,g.useState)(!1),[r,d]=(0,g.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.MonthView,{date:new Date,events:e,withDragSlotSelect:!0,onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),o(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),o(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),o(!0)}}),(0,c.jsx)(T.EventForm,{opened:n,onClose:()=>o(!1),onExitTransitionEnd:()=>d(null),values:r,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:r?.id?()=>{r?.id&&t(e=>e.filter(e=>e.id!==r.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:T._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]};var I=e.i(232471),W=e.i(20035),B=e.i(883364);let A=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)([]),n=(0,g.useRef)(1);return(0,c.jsxs)(W.Grid,{children:[(0,c.jsxs)(W.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(B.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),A.map(e=>(0,c.jsx)(I.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(B.Text,{size:"sm",fw:500,children:e.title})},e.title))]}),(0,c.jsx)(W.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),i=(0,a.default)(o),s=i.endOf("day");t(e=>[...e,{id:n.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
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
`},P=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(P),[n,o]=(0,g.useState)([]),[r,d]=(0,g.useState)(!1),i=(0,g.useRef)(1);return(0,c.jsxs)(W.Grid,{children:[(0,c.jsx)(W.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(I.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let a=e.dataTransfer.getData("application/json");if(!a)return;let{eventId:r}=JSON.parse(a),i=n.find(e=>String(e.id)===String(r));i&&(t(e=>[...e,{title:i.title,color:i.color||"blue"}]),o(e=>e.filter(e=>e.id!==i.id)))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(B.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsx)(I.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(B.Text,{size:"sm",fw:500,children:e.title})},e.title)),0===e.length&&(0,c.jsx)(B.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(W.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),s=(0,a.default)(n),l=s.endOf("day");o(e=>[...e,{id:i.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
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
`},G=[{id:"monthly-planning-series",title:"Weekly planning (series)",start:"2025-11-03 10:00:00",end:"2025-11-03 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO;COUNT=10",exdate:["2025-11-17 10:00:00"]}},{id:"monthly-planning-override",title:"Weekly planning (moved occurrence)",start:"2025-11-17 15:00:00",end:"2025-11-17 16:00:00",color:"grape",recurringEventId:"monthly-planning-series",recurrenceId:"2025-11-17 10:00:00"},{id:"month-one-off",title:"One-off product demo",start:"2025-11-20 12:00:00",end:"2025-11-20 13:00:00",color:"green"}],_={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)("2025-11-01");return(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:G,withWeekNumbers:!0})},code:`
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
`},L=(0,a.default)().format("YYYY-MM-DD"),J=[{id:"company-offsite",title:"Company offsite",start:`${(0,a.default)(L).startOf("week").add(1,"day").format("YYYY-MM-DD")} 00:00:00`,end:`${(0,a.default)(L).startOf("week").add(3,"day").format("YYYY-MM-DD")} 23:59:59`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${L} 10:00:00`,end:`${L} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${(0,a.default)(L).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,end:`${(0,a.default)(L).add(1,"day").format("YYYY-MM-DD")} 15:00:00`,color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)(J);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))}})},code:`
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
`};var z=e.i(428127);let K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,g.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(z.ScheduleHeader,{children:[(0,c.jsx)(z.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(z.ScheduleHeader.MonthYearSelect,{yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:n=>t((0,a.default)(e).year(n).startOf("month").format("YYYY-MM-DD")),onMonthChange:n=>t((0,a.default)(e).month(n).startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(z.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(z.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(z.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:i,withHeader:!1})]})},code:[{code:`
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
`};e.i(27355);let X={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",more:"Más",moreLabel:e=>`+${e} m\xe1s`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ee={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i,radius:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} radius={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var et=(0,t.__exportAll)({backgroundEvents:()=>U,bidirectionalDragDrop:()=>F,consistentWeeks:()=>y,customHeader:()=>K,dragDrop:()=>b,eventForm:()=>N,externalDragDrop:()=>R,firstDayOfWeek:()=>h,highlightToday:()=>Y,localization:()=>X,manyEvents:()=>x,maxEventsPerDay:()=>Z,radius:()=>ee,recurringEvents:()=>_,renderEvent:()=>C,staticMode:()=>$,usage:()=>f,weekdayFormat:()=>p,withWeekNumbers:()=>D,withoutHeader:()=>M,withoutOutsideDays:()=>w,withoutWeekDays:()=>v});e.s(["MonthViewDemos",0,et],791941)}]);