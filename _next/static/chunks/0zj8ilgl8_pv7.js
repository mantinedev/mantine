(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,433396,e=>{"use strict";var t=e.i(86473),a=e.i(27748),n=e.i(621304),r=e.i(855578),o=e.i(605520),d=e.i(753381),i=e.i(4332),s=e.i(813982),l=e.i(657068),c=e.i(647170),u=e.i(298008),m=e.i(898770),f=e.i(494834),v={mobileMonthView:"m_70d87f99",mobileMonthViewHeader:"m_c4707786",mobileMonthViewHeaderBackButton:"m_1fb0b31f",mobileMonthViewHeaderLabel:"m_7b47db0e",mobileMonthViewCalendar:"m_a20935f7",mobileMonthViewWeekdays:"m_8797b104",mobileMonthViewWeekdaysCorner:"m_b58e3c79",mobileMonthViewWeekday:"m_e357794f",mobileMonthViewWeek:"m_4b161f2d",mobileMonthViewWeekNumber:"m_dbf910d6",mobileMonthViewDay:"m_fa29b943",mobileMonthViewDayIndicators:"m_ab2b21e7",mobileMonthViewDayIndicator:"m_b2f0e00c",mobileMonthViewEventsList:"m_66ba41d0",mobileMonthViewEventsHeader:"m_9a1cef3f",mobileMonthViewEvent:"m_16b7da81",mobileMonthViewEventBody:"m_ea745fc3",mobileMonthViewEventColor:"m_6425cd62",mobileMonthViewEventTime:"m_ea7c78ee",mobileMonthViewNoEvents:"m_bbac00f3"},h=e.i(462138),D=e.i(232471),p=e.i(883364),w=e.i(284629),y=e.i(481178),g=e.i(275519),Y=e.i(433512),S=e.i(317477),M=e.i(323283),x=e.i(951254),b=e.i(44091),E=e.i(391466),k=e.i(579560),j=e.i(191788),C=e.i(205693),$=e.i(391398);let V={__staticSelector:"MobileMonthView",withWeekDays:!0,consistentWeeks:!0,highlightToday:!0,mode:"default",eventsHeaderFormat:"dddd, MMMM D"},T=(0,y.createVarsResolver)((e,{radius:t})=>({mobileMonthView:{"--mobile-month-view-radius":(0,Y.getRadius)(t)}})),O=(0,g.factory)(e=>{let y=(0,b.useProps)("MobileMonthView",V,e),{classNames:g,className:Y,style:O,styles:H,unstyled:I,vars:W,attributes:B,__staticSelector:R,date:A,onDateChange:N,selectedDate:z,defaultSelectedDate:L,onSelectedDateChange:P,withWeekNumbers:_,withWeekDays:G,locale:F,firstDayOfWeek:U,weekdayFormat:J,weekendDays:K,getWeekNumberProps:Q,getDayProps:q,onDayClick:X,onWeekNumberClick:Z,consistentWeeks:ee,highlightToday:et,radius:ea,withOutsideDays:en,events:er,labels:eo,mode:ed,renderEvent:ei,eventsHeaderFormat:es,onYearClick:el,onEventClick:ec,renderHeader:eu,recurrenceExpansionLimit:em,...ef}=y,ev=(0,C.useDatesContext)(),eh=(0,x.useMantineTheme)(),eD=(0,f.default)(),[ep,ew]=(0,k.useUncontrolled)({value:z,defaultValue:L??(0,i.toDateString)(eD),onChange:e=>P?.(e?(0,i.toDateString)((0,f.default)(e)):null)}),ey=(0,E.useStyles)({name:R,classes:v,props:y,className:Y,style:O,classNames:g,styles:H,unstyled:I,attributes:B,vars:W,varsResolver:T,rootSelector:"mobileMonthView"}),eg=(0,j.useRef)([]),eY=(0,j.useRef)(null),eS=function({date:e,events:t}){let a={};if(void 0===t)return a;let n=new Set;for(let r of t)if("background"!==r.display&&(0,f.default)(r.start).isSame((0,f.default)(e),"month")){if(!function(e,t){if((0,m.isMultidayEvent)(e)){let a=(0,f.default)(e.start).startOf("day"),n=(0,f.default)(e.end).startOf("day");for(let r=a;r.isBefore(n)||r.isSame(n);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,f.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,u.validateEvent)(r),a),n.has(r.id))throw Error(`[@mantine/schedule] MobileMonthView: Duplicated event ids found: ${r.id}`);n.add(r.id)}return a}({date:A,events:(0,l.expandRecurringEvents)({events:er,rangeStart:(0,f.default)(A).startOf("month").toDate(),rangeEnd:(0,f.default)(A).endOf("month").toDate(),expansionLimit:em})}),eM=G?(0,n.getWeekdaysNames)({locale:ev.getLocale(F),format:J,firstDayOfWeek:ev.getFirstDayOfWeek(U)}).map((e,t)=>(0,j.createElement)("div",{...ey("mobileMonthViewWeekday"),key:t},e)):null,ex=(0,o.getMonthDays)({month:(0,f.default)(A).format("YYYY-MM-DD"),firstDayOfWeek:ev.getFirstDayOfWeek(U),consistentWeeks:ee}).map((e,t)=>{let a=e.map((e,a)=>{let n=!(0,d.isSameMonth)(e,A),r=ev.getWeekendDays(K).includes((0,f.default)(e).day()),o=(0,f.default)(e).locale(F||ev.locale).format("MMMM D, YYYY"),i=q?.((0,f.default)(e).format("YYYY-MM-DD"))||{},s=(0,f.default)(e).isSame(eD,"day")&&et,l=ep&&(0,f.default)(e).isSame((0,f.default)(ep),"day"),u=eS[(0,f.default)(e).format("YYYY-MM-DD")]||[],m=en||!n;m&&null===eY.current&&(eY.current={weekIndex:t,dayIndex:a});let v=eY.current?.weekIndex===t&&eY.current?.dayIndex===a,h=u.slice(0,3).map(e=>(0,j.createElement)("div",{...ey("mobileMonthViewDayIndicator",{style:{backgroundColor:(0,S.getThemeColor)(e.color,eh)}}),key:e.id}));return(0,j.createElement)(w.UnstyledButton,{"aria-label":o,"aria-selected":l||void 0,...i,...ey("mobileMonthViewDay",{className:i.className,style:i.style}),key:e,ref:e=>{e&&(eg.current[t]||(eg.current[t]=[]),eg.current[t][a]=e)},mod:[{outside:n,weekend:r,today:s,selected:l,static:"static"===ed,hidden:!m},i.mod],tabIndex:"static"!==ed&&m&&v?0:-1,onClick:"static"!==ed&&m?t=>{let a=(0,f.default)(e).format("YYYY-MM-DD");ew(a),X?.(a,t),i.onClick?.(t)}:void 0,onKeyDown:"static"!==ed&&m?e=>{(0,c.handleMonthViewKeyDown)({controlsRef:eg,weekIndex:t,dayIndex:a,event:e})}:void 0},m?(0,f.default)(e).format("D"):null,m&&(0,$.jsx)("div",{...ey("mobileMonthViewDayIndicators"),children:h}))}),n=Q?.((0,f.default)(e[0]).format("YYYY-MM-DD"))||{},o=(0,r.getWeekNumber)(e);return(0,j.createElement)("div",{...ey("mobileMonthViewWeek"),key:t},_&&(0,$.jsx)(w.UnstyledButton,{"aria-label":`Week ${o}`,...n,onClick:"static"===ed?void 0:t=>{Z?.((0,f.default)(e[0]).format("YYYY-MM-DD"),t),n.onClick?.(t)},mod:{static:"static"===ed},tabIndex:"static"===ed?-1:0,...ey("mobileMonthViewWeekNumber",{className:n.className,style:n.style}),children:o},o),a)}),eb=(ep?(0,s.sortEvents)(eS[(0,f.default)(ep).format("YYYY-MM-DD")]||[]):[]).map(e=>{let t=(0,f.default)(e.start).format("HH:mm"),a=(0,f.default)(e.end).format("HH:mm"),n=(0,$.jsxs)(D.Box,{...ey("mobileMonthViewEventBody"),children:[(0,$.jsx)("div",{...ey("mobileMonthViewEventColor",{style:{backgroundColor:(0,S.getThemeColor)(e.color,eh)}})}),(0,$.jsxs)("div",{children:[(0,$.jsx)(p.Text,{...ey("mobileMonthViewEventTitle"),children:e.title}),(0,$.jsx)(p.Text,{...ey("mobileMonthViewEventTime"),children:"00:00"===t&&"00:00"===a?"All day":`${t} – ${a}`})]})]}),r={...ey("mobileMonthViewEvent"),onClick:"static"===ed?void 0:t=>{ec?.(e,t)},tabIndex:"static"===ed?-1:0,children:n};return"function"==typeof ei?(0,$.jsx)(j.default.Fragment,{children:ei(e,r)},e.id):(0,j.createElement)(w.UnstyledButton,{...r,key:e.id})}),eE=ep?(0,a.formatDate)({locale:ev.getLocale(F),date:ep,format:es}):"",{dir:ek}=(0,M.useDirection)(),ej=(0,a.formatDate)({locale:ev.getLocale(F),date:A,format:"MMMM YYYY"}),eC=(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(w.UnstyledButton,{...ey("mobileMonthViewHeaderBackButton"),onClick:el,mod:{static:"static"===ed},tabIndex:"static"===ed?-1:0,children:[(0,$.jsx)(h.AccordionChevron,{style:{transform:`rotate(${"rtl"===ek?-90:90}deg)`},size:20}),(0,f.default)(A).format("YYYY")]}),(0,$.jsx)(p.Text,{...ey("mobileMonthViewHeaderLabel"),children:ej})]});return(0,$.jsxs)(D.Box,{...ey("mobileMonthView"),mod:{"with-week-numbers":_},...ef,children:[(0,$.jsx)("div",{...ey("mobileMonthViewHeader"),children:"function"==typeof eu?eu({mode:ed,date:A,defaultHeader:eC}):eC}),(0,$.jsxs)(D.Box,{...ey("mobileMonthViewCalendar"),mod:{"with-weekdays":G},children:[eM&&(0,$.jsxs)("div",{...ey("mobileMonthViewWeekdays"),children:[_&&(0,$.jsx)("div",{...ey("mobileMonthViewWeekdaysCorner")}),eM]}),ex]}),(0,$.jsxs)(D.Box,{...ey("mobileMonthViewEventsList"),children:[(0,$.jsx)(p.Text,{...ey("mobileMonthViewEventsHeader"),children:eE}),eb.length>0?eb:(0,$.jsx)(p.Text,{...ey("mobileMonthViewNoEvents"),children:(0,t.getLabel)("noEvents",eo)})]})]})});O.displayName="@mantine/schedule/MobileMonthView",O.classes=v,O.varsResolver=T,e.s(["MobileMonthView",0,O],433396)},274597,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],d=`
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
`;var i=e.i(391398),s=e.i(200183),l=e.i(433396),c=e.i(168574),u=e.i(315401),m=e.i(122308),f={root:"m_10df4638",desktopView:"m_89e7ecb",mobileView:"m_a0700b3d"},v=e.i(232471),h=e.i(275519),D=e.i(44091),p=e.i(391466),w=e.i(579560);let y={defaultView:"week",mode:"default",layout:"default"},g=(0,h.factory)(e=>{let t=(0,D.useProps)("Schedule",y,e),{classNames:a,className:n,style:r,styles:o,unstyled:d,vars:h,date:g,defaultDate:Y,onDateChange:S,view:M,defaultView:x,onViewChange:b,events:E,locale:k,radius:j,labels:C,renderEventBody:$,withEventsDragAndDrop:V,onEventDrop:T,canDragEvent:O,onEventDragStart:H,onEventDragEnd:I,onTimeSlotClick:W,onAllDaySlotClick:B,onDayClick:R,onEventClick:A,withDragSlotSelect:N,onSlotDragEnd:z,onExternalEventDrop:L,withEventResize:P,onEventResize:_,canResizeEvent:G,recurrenceExpansionLimit:F,mode:U,layout:J,dayViewProps:K,weekViewProps:Q,monthViewProps:q,yearViewProps:X,mobileMonthViewProps:Z,withAgenda:ee,__staticSelector:et,mod:ea,...en}=t,er=(0,p.useStyles)({name:et||"Schedule",classes:f,props:t,className:n,style:r,classNames:a,styles:o,unstyled:d,vars:h}),[eo,ed]=(0,w.useUncontrolled)({value:M,defaultValue:x,onChange:b}),[ei,es]=(0,w.useUncontrolled)({value:g,defaultValue:Y??new Date}),el=e=>{es(e),S?.(e)},ec=e=>{ed(e),b?.(e)},eu=e=>{el(e),ec("month")},em={date:ei,onDateChange:el,view:eo,onViewChange:ec,events:E,locale:k,radius:j,labels:C,renderEventBody:$,withEventsDragAndDrop:"static"!==U&&V,onEventDrop:T,canDragEvent:O,onEventDragStart:H,onEventDragEnd:I,onTimeSlotClick:W,onAllDaySlotClick:B,onDayClick:R,onEventClick:A,withDragSlotSelect:N,onSlotDragEnd:z,onExternalEventDrop:L,withEventResize:"static"!==U&&P,onEventResize:_,canResizeEvent:G,recurrenceExpansionLimit:F,mode:U,withAgenda:ee},ef=(()=>{switch(eo){case"day":return(0,i.jsx)(s.DayView,{...em,...K});case"week":return(0,i.jsx)(u.WeekView,{...em,...Q});case"month":return(0,i.jsx)(c.MonthView,{...em,...q});case"year":return(0,i.jsx)(m.YearView,{...em,onMonthClick:eu,...X});default:return null}})(),ev=(()=>{switch(eo){case"day":case"week":case"month":return(0,i.jsx)(l.MobileMonthView,{date:ei,onDateChange:el,events:E,locale:k,radius:j,labels:C,mode:U,recurrenceExpansionLimit:F,onYearClick:()=>ec("year"),onEventClick:A,...Z});case"year":return(0,i.jsx)(m.YearView,{...em,onMonthClick:eu,...X});default:return null}})();return"responsive"===J?(0,i.jsxs)(v.Box,{...er("root"),mod:[{layout:J},ea],...en,children:[(0,i.jsx)(v.Box,{...er("desktopView"),children:ef}),(0,i.jsx)(v.Box,{...er("mobileView"),children:ev})]}):(0,i.jsx)(v.Box,{...er("root"),mod:ea,...en,children:ef})});g.displayName="@mantine/schedule/Schedule",g.classes=f;let Y={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(g,{events:o})},code:[{code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:d,language:"tsx",fileName:"data.ts"}]};var S=e.i(191788);let M=(0,a.default)().format("YYYY-MM-DD"),x=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),b=[{id:1,title:"Morning Standup",start:`${M} 09:00:00`,end:`${M} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${M} 10:00:00`,end:`${M} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${M} 12:00:00`,end:`${M} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${x} 14:00:00`,end:`${x} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${x} 15:30:00`,end:`${x} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${M} 00:00:00`,end:(0,a.default)(M).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)(b);return(0,i.jsx)(g,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var k=e.i(883364);let j={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)("week"),[a,n]=(0,S.useState)(new Date);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(k.Text,{size:"sm",mb:"md",children:["Current view: ",(0,i.jsx)("b",{children:e})]}),(0,i.jsx)(g,{view:e,onViewChange:t,date:a,onDateChange:e=>n(new Date(e)),events:o})]})},code:`
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
`},C={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(g,{events:o,dayViewProps:{startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30},weekViewProps:{startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1},monthViewProps:{withWeekNumbers:!0,firstDayOfWeek:0},yearViewProps:{withWeekNumbers:!0}})},code:`
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
`},$={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(g,{events:o,defaultView:"month"})},code:`
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
`},V={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:(0,i.jsx)(g,{events:o,layout:"responsive"})})},code:`
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
`};var T=e.i(162077),O=e.i(37930),H=e.i(658109),I=e.i(725695);let W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)(o),[n,r]=(0,S.useState)(!1),[d,s]=(0,S.useState)(null),l=(0,S.useRef)((0,a.default)().format("YYYY-MM-DD")),c=()=>{let e=l.current;s({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)};return(0,i.jsxs)(v.Box,{style:{resize:"horizontal",overflow:"auto",minWidth:300,maxWidth:"100%"},children:[(0,i.jsx)(g,{events:e,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{s({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onAllDaySlotClick:e=>{s({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onDayClick:e=>{s({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),r(!0)},onSlotDragEnd:(e,t)=>{s({title:"",start:new Date(e),end:new Date(t),color:"blue"}),r(!0)},onEventClick:e=>{s({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),r(!0)},withDragSlotSelect:!0,layout:"responsive",mobileMonthViewProps:{onSelectedDateChange:e=>{e&&(l.current=e)},renderHeader:({defaultHeader:e})=>(0,i.jsxs)(I.Group,{justify:"space-between",w:"100%",children:[(0,i.jsx)(I.Group,{justify:"space-between",flex:"1",children:e}),(0,i.jsx)(H.ActionIcon,{variant:"default",mx:"sm",size:"lg",onClick:c,"aria-label":"Create new event",children:(0,i.jsx)(O.PlusIcon,{size:18})})]})}}),(0,i.jsx)(T.EventForm,{opened:n,onClose:()=>r(!1),onExitTransitionEnd:()=>s(null),values:d,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:d?.id?()=>{d?.id&&t(e=>e.filter(e=>e.id!==d.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:T._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:d,language:"tsx",fileName:"events.ts"}]};var B=e.i(20035);let R=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)([]),n=(0,S.useRef)(1);return(0,i.jsxs)(B.Grid,{children:[(0,i.jsxs)(B.Grid.Col,{span:{base:12,sm:3},children:[(0,i.jsx)(k.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),R.map(e=>(0,i.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,i.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,i.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,i.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,i.jsx)(g,{events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let d=JSON.parse(o),i=(0,a.default)(r),s=i.add(d.duration,"minutes");t(e=>[...e,{id:n.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
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
`},N=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)(N),[n,r]=(0,S.useState)([]),[o,d]=(0,S.useState)(!1),s=(0,S.useRef)(1);return(0,i.jsxs)(B.Grid,{children:[(0,i.jsx)(B.Grid.Col,{span:{base:12,sm:3},children:(0,i.jsxs)(v.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:i}=JSON.parse(o),s=n.find(e=>String(e.id)===String(i));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),r(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,i.jsx)(k.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,i.jsxs)(v.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,i.jsx)(k.Text,{size:"sm",fw:500,children:e.title}),(0,i.jsxs)(k.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,i.jsx)(k.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,i.jsx)(B.Grid.Col,{span:{base:12,sm:9},children:(0,i.jsx)(g,{events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let d=JSON.parse(o),i=(0,a.default)(n),l=i.add(d.duration,"minutes");r(e=>[...e,{id:s.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
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
`},L=(0,a.default)().format("YYYY-MM-DD"),P=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),_=[{id:1,title:"Morning Standup",start:`${L} 09:00:00`,end:`${L} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${L} 10:00:00`,end:`${L} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${L} 12:00:00`,end:`${L} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${P} 14:00:00`,end:`${P} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${P} 15:30:00`,end:`${P} 16:30:00`,color:"cyan"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)(_),a=({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))};return(0,i.jsx)(g,{events:e,withEventsDragAndDrop:!0,onEventDrop:a,withEventResize:!0,onEventResize:a})},code:`
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
`},F=[{id:"schedule-series",title:"Weekly planning (series)",start:"2024-01-15 10:00:00",end:"2024-01-15 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=16",exdate:["2024-01-17 10:00:00"]}},{id:"schedule-series-override",title:"Weekly planning (moved one occurrence)",start:"2024-01-17 16:00:00",end:"2024-01-17 17:00:00",color:"grape",recurringEventId:"schedule-series",recurrenceId:"2024-01-17 10:00:00"},{id:"schedule-one-off",title:"One-off roadmap review",start:"2024-01-18 12:00:00",end:"2024-01-18 13:00:00",color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)("2024-01-15");return(0,i.jsx)(g,{view:"week",date:e,onDateChange:t,events:F})},code:`
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
`},J=(0,a.default)().format("YYYY-MM-DD"),K=[{id:"lunch-block",title:"Lunch break",start:`${J} 12:00:00`,end:`${J} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${J} 14:00:00`,end:`${J} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${J} 10:00:00`,end:`${J} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${J} 14:30:00`,end:`${J} 15:30:00`,color:"green"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)(J);return(0,i.jsx)(g,{date:e,onDateChange:t,events:K})},code:`
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
`};var q=e.i(428127),X=e.i(441058);let Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,S.useState)("week"),d=function(e,t){let n=(0,a.default)(e);switch(t){case"day":return{previous:n.subtract(1,"day"),next:n.add(1,"day")};case"week":return{previous:n.subtract(1,"week"),next:n.add(1,"week")};case"month":return{previous:n.subtract(1,"month").startOf("month"),next:n.add(1,"month").startOf("month")};case"year":return{previous:n.subtract(1,"year").startOf("year"),next:n.add(1,"year").startOf("year")};default:return{previous:n,next:n}}}(e,n);return(0,i.jsxs)("div",{children:[(0,i.jsxs)(q.ScheduleHeader,{children:[(0,i.jsx)(q.ScheduleHeader.Previous,{onClick:()=>t(d.previous.format("YYYY-MM-DD"))}),(0,i.jsx)(q.ScheduleHeader.Control,{interactive:!1,miw:200,children:function(e,t){let n=(0,a.default)(e);switch(t){case"day":return n.format("dddd, MMMM D, YYYY");case"week":{let t=(0,a.default)((0,X.getStartOfWeek)({date:e,firstDayOfWeek:1})),n=t.add(6,"day");if(t.month()===n.month())return`${t.format("MMM D")} – ${n.format("D, YYYY")}`;return`${t.format("MMM D")} – ${n.format("MMM D, YYYY")}`}case"month":return n.format("MMMM YYYY");case"year":return n.format("YYYY");default:return""}}(e,n)}),(0,i.jsx)(q.ScheduleHeader.Next,{onClick:()=>t(d.next.format("YYYY-MM-DD"))}),(0,i.jsx)(q.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,i.jsx)(q.ScheduleHeader.Control,{onClick:()=>window.print(),children:"Print"}),(0,i.jsx)("div",{style:{marginInlineStart:"auto"},children:(0,i.jsx)(q.ScheduleHeader.ViewSelect,{value:n,onChange:r})})]}),(0,i.jsx)(g,{date:e,onDateChange:t,view:n,onViewChange:r,events:o,dayViewProps:{withHeader:!1},weekViewProps:{withHeader:!1},monthViewProps:{withHeader:!1},yearViewProps:{withHeader:!1}})]})},code:`
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
`},ee=(0,a.default)().format("YYYY-MM-DD"),et=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),ea=[{id:"standup",title:"Morning Standup",start:`${ee} 09:00:00`,end:`${ee} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${ee} 10:00:00`,end:`${ee} 11:30:00`,color:"green"},{id:"code-review",title:"Code Review",start:`${et} 14:00:00`,end:`${et} 15:00:00`,color:"violet"},{id:"weekly-review-series",title:"Weekly review",start:`${(0,a.default)(ee).startOf("week").format("YYYY-MM-DD")} 16:00:00`,end:`${(0,a.default)(ee).startOf("week").format("YYYY-MM-DD")} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],en={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(g,{events:ea,withAgenda:!0})},code:`
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
`};var er=(0,t.__exportAll)({backgroundEvents:()=>Q,bidirectionalDragDrop:()=>z,controlled:()=>j,customHeader:()=>Z,defaultView:()=>$,dragDrop:()=>E,eventForm:()=>W,eventResize:()=>G,externalDragDrop:()=>A,recurringEvents:()=>U,responsiveLayout:()=>V,usage:()=>Y,viewProps:()=>C,withAgenda:()=>en});e.s(["ScheduleDemos",0,er],274597)}]);