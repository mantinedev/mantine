(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7834,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${n} 15:30:00`,end:`${n} 16:30:00`,color:"cyan"},{id:6,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],r=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Full Day Session",start:`${n} 10:00:00`,end:`${n} 16:00:00`,color:"green"}],d=[{id:1,title:"Conference Day",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Product Launch",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:5,title:"Year Kickoff",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"}],i=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${n} 17:30:00`,end:`${n} 18:00:00`,color:"orange"}],s=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

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
    title: 'Lunch Break',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: \`\${today} 15:30:00\`,
    end: \`\${today} 16:30:00\`,
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
`,l=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Workshop Session 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:30:00\`,
    color: 'violet',
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: \`\${today} 11:30:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Full Day Session',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'green',
  },
];
`,m=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Conference Day',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 2,
    title: 'Holiday',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
  },
  {
    id: 3,
    title: 'Team Building',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
  {
    id: 4,
    title: 'Product Launch',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
  {
    id: 5,
    title: 'Year Kickoff',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
];
`,c=`
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Early Morning Meeting',
    start: \`\${today} 08:30:00\`,
    end: \`\${today} 09:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Business Hours Task 1',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Business Hours Task 2',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Evening Sync',
    start: \`\${today} 17:30:00\`,
    end: \`\${today} 18:00:00\`,
    color: 'orange',
  },
];
`;var u=e.i(191788),D=e.i(391398),v=e.i(200183);let p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},f={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"09:00:00",endTime:"17:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},g={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:i,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotHeight={80}
      allDaySlotHeight={60}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withHeader={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},S={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",headerFormat:"dddd, MMMM D"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      headerFormat="dddd, MMMM D"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h:mm A"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotLabelFormat="h:mm A"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},$=(0,a.default)().format("YYYY-MM-DD"),b=[{id:1,title:"Morning Standup",start:`${$} 09:00:00`,end:`${$} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${$} 11:00:00`,end:`${$} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${$} 14:00:00`,end:`${$} 15:00:00`,color:"violet"}],j={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(b);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`},H=(0,a.default)().format("YYYY-MM-DD"),C=[{id:1,title:"Draggable Event",start:`${H} 09:00:00`,end:`${H} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${H} 11:00:00`,end:`${H} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${H} 14:00:00`,end:`${H} 15:00:00`,color:"green"}],V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(C);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canDragEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable Event',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Draggable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      canDragEvent={(event) => !event.payload?.locked}
    />
  );
}
`},k=(0,a.default)().format("YYYY-MM-DD"),I=[{id:1,title:"Morning Standup",start:`${k} 09:00:00`,end:`${k} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${k} 11:00:00`,end:`${k} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${k} 14:00:00`,end:`${k} 15:00:00`,color:"violet"}],N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(I);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},O=(0,a.default)().format("YYYY-MM-DD"),R=[{id:1,title:"Resizable Event",start:`${O} 09:00:00`,end:`${O} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${O} 11:00:00`,end:`${O} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${O} 14:00:00`,end:`${O} 15:00:00`,color:"green"}],A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(R);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`};var B=e.i(593612),z=e.i(554166),G=e.i(725695),F=e.i(883364);let L=(0,a.default)().format("YYYY-MM-DD"),P=[{id:1,title:"Morning Standup",start:`${L} 09:00:00`,end:`${L} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${L} 11:00:00`,end:`${L} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${L} 12:30:00`,end:`${L} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],J={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:P,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,D.jsxs)(G.Group,{children:[(0,D.jsx)(F.Text,{fz:12,fw:500,children:e.title}),(0,D.jsxs)(G.Group,{gap:4,children:[(0,D.jsx)(B.ClockIcon,{size:12}),(0,D.jsx)(F.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,D.jsxs)(G.Group,{gap:4,children:[(0,D.jsx)(z.MapPinIcon,{size:12}),(0,D.jsx)(F.Text,{fz:10,children:e.payload.location})]})]})})},code:`
import dayjs from 'dayjs';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  // ... more events
];

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderEventBody={(event) => (
        <Group>
          <Text fz={12} fw={500}>
            {event.title}
          </Text>
          <Group gap={4}>
            <ClockIcon size={12} />
            <Text fz={10} lh={1}>
              {dayjs(event.start).format('h:mm A')}
            </Text>
          </Group>

          {event.payload?.location && (
            <Group gap={4}>
              <MapPinIcon size={12} />
              <Text fz={10}>{event.payload.location}</Text>
            </Group>
          )}
        </Group>
      )}
    />
  );
}
`};var U=e.i(19683),W=e.i(369974),Q=e.i(284629);let K=(0,a.default)().format("YYYY-MM-DD"),_=[{id:1,title:"Team Standup",start:`${K} 09:00:00`,end:`${K} 09:30:00`,color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Review",start:`${K} 10:00:00`,end:`${K} 11:30:00`,color:"grape",payload:{description:"Review UI/UX designs for new feature",attendees:["Diana","Eve"],location:"Virtual Meeting"}},{id:3,title:"Client Presentation",start:`${K} 14:00:00`,end:`${K} 15:30:00`,color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Frank","Grace","Henry"],location:"Zoom"}},{id:4,title:"Code Review",start:`${K} 16:00:00`,end:`${K} 17:00:00`,color:"orange",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}}],q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(_);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,D.jsxs)(W.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,D.jsx)(W.HoverCard.Target,{children:(0,D.jsx)(Q.UnstyledButton,{...t})}),(0,D.jsx)(W.HoverCard.Dropdown,{children:(0,D.jsx)(U.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <DayView
      date={new Date()}
      events={selectedEvents}
      startTime="08:00:00"
      endTime="18:00:00"
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
        <HoverCard width={280} position="bottom" closeDelay={0} transitionProps={{ duration: 0 }}>
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:U._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(_,null,2)};`,language:"tsx"}]},X={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},Z={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",labels:{allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      labels={{
        allDay: 'Todo el d\xeda',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ee=e.i(485108);let et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,D.jsxs)("div",{children:[(0,D.jsxs)(G.Group,{mb:"md",children:[(0,D.jsx)(ee.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Day"}),(0,D.jsx)(F.Text,{fw:500,children:(0,a.default)(e).format("MMMM D, YYYY")}),(0,D.jsx)(ee.Button,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Next Day"})]}),(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { DayView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Day
        </Button>
        <Text fw={500}>{dayjs(date).format('MMMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'day').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Day
        </Button>
      </Group>

      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},ea={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)("day");return(0,D.jsxs)("div",{children:[(0,D.jsxs)(F.Text,{mb:"md",children:["Selected view: ",e]}),(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",onViewChange:t})]})},code:[{code:`
import { useState } from 'react';
import { DayView, ScheduleViewLevel } from '@mantine/schedule';
import { Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [view, setView] = useState<ScheduleViewLevel>('day');

  return (
    <div>
      <Text mb="md">Selected view: {view}</Text>

      <DayView
        date={new Date()}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        onViewChange={setView}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var en=e.i(162077);let eo={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(o),[d,i]=(0,u.useState)(!1),[s,l]=(0,u.useState)(null);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),i(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),i(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),i(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),i(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,D.jsx)(en.EventForm,{opened:d,onClose:()=>i(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events } from './events';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

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
      setEvents((prev) => prev.filter((event) => event.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        startTime="08:00:00"
        endTime="18:00:00"
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:en._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"events.ts"}]},er={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(o);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents } from './data';

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
    <DayView
      date={new Date()}
      events={events}
      startScrollTime="09:00:00"
      scrollAreaProps={{ mah: 500 }}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ed=e.i(232471),ei=e.i(20035);let es=(0,a.default)().format("YYYY-MM-DD"),el=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)([]),n=(0,u.useRef)(1);return(0,D.jsxs)(ei.Grid,{children:[(0,D.jsxs)(ei.Grid.Col,{span:{base:12,sm:3},children:[(0,D.jsx)(F.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),el.map(e=>(0,D.jsxs)(ed.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,D.jsx)(F.Text,{size:"sm",fw:500,children:e.title}),(0,D.jsxs)(F.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,D.jsx)(ei.Grid.Col,{span:{base:12,sm:9},children:(0,D.jsx)(v.DayView,{date:es,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),i=(0,a.default)(o),s=i.add(d.duration,"minutes");t(e=>[...e,{id:n.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
        <DayView
          date={new Date()}
          events={events}
          startTime="08:00:00"
          endTime="18:00:00"
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},ec=(0,a.default)().format("YYYY-MM-DD"),eu=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eD={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eu),[n,o]=(0,u.useState)([]),[r,d]=(0,u.useState)(!1),i=(0,u.useRef)(1);return(0,D.jsxs)(ei.Grid,{children:[(0,D.jsx)(ei.Grid.Col,{span:{base:12,sm:3},children:(0,D.jsxs)(ed.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let r=e.dataTransfer.getData("application/json");if(!r)return;let{eventId:i}=JSON.parse(r),s=n.find(e=>String(e.id)===String(i));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,D.jsx)(F.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,D.jsxs)(ed.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,D.jsx)(F.Text,{size:"sm",fw:500,children:e.title}),(0,D.jsxs)(F.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,D.jsx)(F.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,D.jsx)(ei.Grid.Col,{span:{base:12,sm:9},children:(0,D.jsx)(v.DayView,{date:ec,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),s=(0,a.default)(n),l=s.add(d.duration,"minutes");o(e=>[...e,{id:i.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { DayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
        <DayView
          date={new Date()}
          events={events}
          startTime="08:00:00"
          endTime="18:00:00"
          withEventsDragAndDrop
          onEventDrop={handleEventDrop}
          onExternalEventDrop={handleExternalDrop}
        />
      </Grid.Col>
    </Grid>
  );
}
`},ev=(0,a.default)().format("YYYY-MM-DD"),ep=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,a.default)(ev).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,a.default)(ev).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${ev} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${ev} 14:00:00`,end:`${ev} 14:30:00`,color:"grape",recurringEventId:"daily-sync-series",recurrenceId:`${ev} 09:00:00`},{id:"one-off-day",title:"One-off planning",start:`${ev} 11:00:00`,end:`${ev} 12:00:00`,color:"green"}],ef={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ev);return(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:ep,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:30:00\`,
    color: 'grape',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off-day',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},ey=(0,a.default)().format("YYYY-MM-DD"),eg=[{id:"lunch-block",title:"Lunch break",start:`${ey} 12:00:00`,end:`${ey} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${ey} 14:00:00`,end:`${ey} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${ey} 10:00:00`,end:`${ey} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ey} 14:30:00`,end:`${ey} 15:30:00`,color:"green"}],ew={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(ey);return(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:eg,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
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
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},eY=(0,a.default)().format("YYYY-MM-DD"),eh=[{id:"blocked-time",title:"Blocked",start:`${eY} 12:00:00`,end:`${eY} 14:00:00`,color:"red",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${eY} 10:00:00`,end:`${eY} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eY} 15:00:00`,end:`${eY} 16:00:00`,color:"green"}],ex={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eh);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))},styles:{dayViewBackgroundEvent:{background:`repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            var(--mantine-color-red-light) 10px,
            var(--mantine-color-red-light) 12px
          )`,color:"var(--mantine-color-red-light-color)"}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView, ScheduleEventData } from '@mantine/schedule';
import classes from './Demo.module.css';

const today = dayjs().format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 'blocked-time',
    title: 'Blocked',
    start: \`\${today} 12:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'red',
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
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
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
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      classNames={{ dayViewBackgroundEvent: classes.backgroundEvent }}
    />
  );
}
`},{fileName:"Demo.module.css",language:"css",code:`.backgroundEvent {
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 10px,
    var(--mantine-color-red-light) 10px,
    var(--mantine-color-red-light) 12px
  );
  color: var(--mantine-color-red-light-color);
}
`}]};var eE=e.i(428127);let eS={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,D.jsxs)("div",{children:[(0,D.jsxs)(eE.ScheduleHeader,{children:[(0,D.jsx)(eE.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD"))}),(0,D.jsx)(eE.ScheduleHeader.Control,{interactive:!1,miw:200,children:(0,a.default)(e).format("dddd, MMMM D, YYYY")}),(0,D.jsx)(eE.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD"))}),(0,D.jsx)(eE.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,D.jsx)(eE.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, DayView, ScheduleHeader } from '@mantine/schedule';
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
                .subtract(1, 'day')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {dayjs(date).format('dddd, MMMM D, YYYY')}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'day')
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

      <DayView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let eT={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      locale="es"
      labels={{
        day: 'D\xeda',
        week: 'Semana',
        month: 'Mes',
        year: 'A\xf1o',
        allDay: 'Todo el d\xeda',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eM={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startScrollTime="07:00:00"
      getTimeSlotProps={({ start }) => {
        const hour = parseInt(start.split(' ')[1], 10);
        if (hour >= 7 && hour < 20) {
          return { 'data-business-hours': true };
        }
        return { 'data-non-business-hours': true };
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var e$=(0,t.__exportAll)({allDayEvents:()=>g,backgroundEvents:()=>ew,backgroundEventsCustomStyle:()=>ex,bidirectionalDragDrop:()=>eD,businessHours:()=>h,canDragEvent:()=>V,canResizeEvent:()=>A,controlledDate:()=>et,currentTimeIndicator:()=>Y,customHeader:()=>eS,dragDrop:()=>j,eventForm:()=>eo,eventResize:()=>N,externalDragDrop:()=>em,getTimeSlotProps:()=>eM,headerFormat:()=>S,intervalMinutes:()=>y,labels:()=>Z,localization:()=>eT,overlappingEvents:()=>w,radius:()=>M,recurringEvents:()=>ef,renderEvent:()=>q,renderEventBody:()=>J,slotHeight:()=>x,slotLabelFormat:()=>T,startScrollTime:()=>er,staticMode:()=>X,timeRange:()=>f,usage:()=>p,viewChange:()=>ea,withoutHeader:()=>E});e.s(["DayViewDemos",0,e$],7834)}]);