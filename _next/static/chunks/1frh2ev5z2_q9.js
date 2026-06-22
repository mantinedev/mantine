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
`;var u=e.i(191788),D=e.i(391398),v=e.i(200183);let y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},g=(0,a.default)().format("YYYY-MM-DD"),Y=[{id:1,title:"Morning Standup",start:`${g} 09:00:00`,end:`${g} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${g} 11:15:00`,end:`${g} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${g} 14:00:00`,end:`${g} 14:45:00`,color:"violet"}],w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(Y);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:15,withSubHourGridLines:!1,withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
    start: \`\${today} 11:15:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:45:00\`,
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

  // Events snap to 15 minutes increments, but only one grid line per hour is displayed
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={15}
      withSubHourGridLines={false}
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:r,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var S=e.i(988798),T=e.i(671640),M=e.i(664894),$=e.i(53157);a.default.extend($.default),a.default.extend(M.default);let b=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],j={type:"code",component:function(){let[e,t]=(0,u.useState)("UTC"),n=()=>(0,a.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),o=n().split(" ")[0];return(0,D.jsxs)(T.Stack,{children:[(0,D.jsx)(S.Select,{label:"Display timezone",data:b,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,D.jsx)(v.DayView,{date:o,events:[{id:1,title:"Morning standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue"},{id:2,title:"Team meeting",start:`${o} 12:00:00`,end:`${o} 13:00:00`,color:"teal"},{id:3,title:"Code review",start:`${o} 16:00:00`,end:`${o} 17:00:00`,color:"grape"}],getCurrentTime:n,startScrollTime:(0,a.default)(n()).subtract(2,"hour").format("HH:mm:ss"),withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { DayView } from '@mantine/schedule';
import { getEvents } from './data';

dayjs.extend(utc);
dayjs.extend(timezone);

const timezones = ['UTC', 'America/New_York', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Tokyo'];

function Demo() {
  const [tz, setTz] = useState('UTC');

  // getCurrentTime is called on every tick, so the indicator keeps updating
  const getCurrentTime = () => dayjs().tz(tz).format('YYYY-MM-DD HH:mm:ss');
  const currentDate = getCurrentTime().split(' ')[0];

  return (
    <Stack>
      <Select
        label="Display timezone"
        data={timezones}
        value={tz}
        onChange={(value) => setTz(value!)}
        allowDeselect={false}
      />

      <DayView
        date={currentDate}
        events={getEvents(currentDate)}
        getCurrentTime={getCurrentTime}
        startScrollTime={dayjs(getCurrentTime()).subtract(2, 'hour').format('HH:mm:ss')}
        withCurrentTimeIndicator
        withCurrentTimeBubble
      />
    </Stack>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData } from '@mantine/schedule';\n\nexport function getEvents(date: string): ScheduleEventData[] {\n  return [\n    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },\n    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },\n    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },\n  ];\n}\n",language:"tsx",fileName:"data.ts"}]},C={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:i,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:c,language:"tsx",fileName:"data.ts"}]},H={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},V={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},k={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",headerFormat:"dddd, MMMM D"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},I={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h:mm A"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},N={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},O=(0,a.default)().format("YYYY-MM-DD"),R=[{id:1,title:"Morning Standup",start:`${O} 09:00:00`,end:`${O} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${O} 11:00:00`,end:`${O} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${O} 14:00:00`,end:`${O} 15:00:00`,color:"violet"}],z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(R);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},A=(0,a.default)().format("YYYY-MM-DD"),B=[{id:1,title:"Draggable Event",start:`${A} 09:00:00`,end:`${A} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${A} 11:00:00`,end:`${A} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${A} 14:00:00`,end:`${A} 15:00:00`,color:"green"}],G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(B);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canDragEvent:e=>!e.payload?.locked})},code:`
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
`},F=(0,a.default)().format("YYYY-MM-DD"),L=[{id:1,title:"Morning Standup",start:`${F} 09:00:00`,end:`${F} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${F} 11:00:00`,end:`${F} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${F} 14:00:00`,end:`${F} 15:00:00`,color:"violet"}],P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(L);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`},U=(0,a.default)().format("YYYY-MM-DD"),W=[{id:1,title:"Resizable Event",start:`${U} 09:00:00`,end:`${U} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${U} 11:00:00`,end:`${U} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${U} 14:00:00`,end:`${U} 15:00:00`,color:"green"}],J={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(W);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},canResizeEvent:e=>!e.payload?.locked})},code:`
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
`};var Q=e.i(593612),K=e.i(554166),_=e.i(725695),q=e.i(883364);let X=(0,a.default)().format("YYYY-MM-DD"),Z=[{id:1,title:"Morning Standup",start:`${X} 09:00:00`,end:`${X} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${X} 11:00:00`,end:`${X} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${X} 12:30:00`,end:`${X} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],ee={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:Z,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,D.jsxs)(_.Group,{children:[(0,D.jsx)(q.Text,{fz:12,fw:500,children:e.title}),(0,D.jsxs)(_.Group,{gap:4,children:[(0,D.jsx)(Q.ClockIcon,{size:12}),(0,D.jsx)(q.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,D.jsxs)(_.Group,{gap:4,children:[(0,D.jsx)(K.MapPinIcon,{size:12}),(0,D.jsx)(q.Text,{fz:10,children:e.payload.location})]})]})})},code:`
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
`};var et=e.i(19683),ea=e.i(369974),en=e.i(284629);let eo=(0,a.default)().format("YYYY-MM-DD"),er=[{id:1,title:"Team Standup",start:`${eo} 09:00:00`,end:`${eo} 09:30:00`,color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Review",start:`${eo} 10:00:00`,end:`${eo} 11:30:00`,color:"grape",payload:{description:"Review UI/UX designs for new feature",attendees:["Diana","Eve"],location:"Virtual Meeting"}},{id:3,title:"Client Presentation",start:`${eo} 14:00:00`,end:`${eo} 15:30:00`,color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Frank","Grace","Henry"],location:"Zoom"}},{id:4,title:"Code Review",start:`${eo} 16:00:00`,end:`${eo} 17:00:00`,color:"orange",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}}],ed={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(er);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,D.jsxs)(ea.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,D.jsx)(ea.HoverCard.Target,{children:(0,D.jsx)(en.UnstyledButton,{...t})}),(0,D.jsx)(ea.HoverCard.Dropdown,{children:(0,D.jsx)(et.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:et._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(er,null,2)};`,language:"tsx"}]},ei={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},es={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",labels:{allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var el=e.i(485108);let em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,D.jsxs)("div",{children:[(0,D.jsxs)(_.Group,{mb:"md",children:[(0,D.jsx)(el.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Day"}),(0,D.jsx)(q.Text,{fw:500,children:(0,a.default)(e).format("MMMM D, YYYY")}),(0,D.jsx)(el.Button,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD HH:mm:ss")),children:"Next Day"})]}),(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},ec={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)("day");return(0,D.jsxs)("div",{children:[(0,D.jsxs)(q.Text,{mb:"md",children:["Selected view: ",e]}),(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",onViewChange:t})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var eu=e.i(162077);let eD={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,u.useState)(o),[d,i]=(0,u.useState)(!1),[s,l]=(0,u.useState)(null);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),i(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),i(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),i(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),i(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,D.jsx)(eu.EventForm,{opened:d,onClose:()=>i(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:eu._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"events.ts"}]},ev={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(o);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var ey=e.i(232471),ef=e.i(20035);let ep=(0,a.default)().format("YYYY-MM-DD"),eg=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eY={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)([]),n=(0,u.useRef)(1);return(0,D.jsxs)(ef.Grid,{children:[(0,D.jsxs)(ef.Grid.Col,{span:{base:12,sm:3},children:[(0,D.jsx)(q.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),eg.map(e=>(0,D.jsxs)(ey.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,D.jsx)(q.Text,{size:"sm",fw:500,children:e.title}),(0,D.jsxs)(q.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,D.jsx)(ef.Grid.Col,{span:{base:12,sm:9},children:(0,D.jsx)(v.DayView,{date:ep,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),i=(0,a.default)(o),s=i.add(d.duration,"minutes");t(e=>[...e,{id:n.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
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
`},ew=(0,a.default)().format("YYYY-MM-DD"),eh=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ex={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eh),[n,o]=(0,u.useState)([]),[r,d]=(0,u.useState)(!1),i=(0,u.useRef)(1);return(0,D.jsxs)(ef.Grid,{children:[(0,D.jsx)(ef.Grid.Col,{span:{base:12,sm:3},children:(0,D.jsxs)(ey.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let r=e.dataTransfer.getData("application/json");if(!r)return;let{eventId:i}=JSON.parse(r),s=n.find(e=>String(e.id)===String(i));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,D.jsx)(q.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,D.jsxs)(ey.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,D.jsx)(q.Text,{size:"sm",fw:500,children:e.title}),(0,D.jsxs)(q.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,D.jsx)(q.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,D.jsx)(ef.Grid.Col,{span:{base:12,sm:9},children:(0,D.jsx)(v.DayView,{date:ew,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),s=(0,a.default)(n),l=s.add(d.duration,"minutes");o(e=>[...e,{id:i.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
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
`},eE=(0,a.default)().format("YYYY-MM-DD"),eS=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,a.default)(eE).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,a.default)(eE).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${eE} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${eE} 14:00:00`,end:`${eE} 14:30:00`,color:"grape",recurringEventId:"daily-sync-series",recurrenceId:`${eE} 09:00:00`},{id:"one-off-day",title:"One-off planning",start:`${eE} 11:00:00`,end:`${eE} 12:00:00`,color:"green"}],eT={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eE);return(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:eS,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
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
`},eM=(0,a.default)().format("YYYY-MM-DD"),e$=[{id:"lunch-block",title:"Lunch break",start:`${eM} 12:00:00`,end:`${eM} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${eM} 14:00:00`,end:`${eM} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${eM} 10:00:00`,end:`${eM} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eM} 14:30:00`,end:`${eM} 15:30:00`,color:"green"}],eb={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eM);return(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:e$,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
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
`},ej=(0,a.default)().format("YYYY-MM-DD"),eC=[{id:"blocked-time",title:"Blocked",start:`${ej} 12:00:00`,end:`${ej} 14:00:00`,color:"red",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${ej} 10:00:00`,end:`${ej} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ej} 15:00:00`,end:`${ej} 16:00:00`,color:"green"}],eH={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eC);return(0,D.jsx)(v.DayView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))},styles:{dayViewBackgroundEvent:{background:`repeating-linear-gradient(
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
`}]};var eV=e.i(428127);let ek={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,D.jsxs)("div",{children:[(0,D.jsxs)(eV.ScheduleHeader,{children:[(0,D.jsx)(eV.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"day").format("YYYY-MM-DD"))}),(0,D.jsx)(eV.ScheduleHeader.Control,{interactive:!1,miw:200,children:(0,a.default)(e).format("dddd, MMMM D, YYYY")}),(0,D.jsx)(eV.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"day").format("YYYY-MM-DD"))}),(0,D.jsx)(eV.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,D.jsx)(eV.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:o,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let eI={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eN={defaultExpanded:!1,type:"code",component:function(){return(0,D.jsx)(v.DayView,{date:new Date,events:o,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},eO=(0,a.default)().format("YYYY-MM-DD"),eR=[{id:"standup",title:"Morning Standup",start:`${eO} 09:00:00`,end:`${eO} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${eO} 10:00:00`,end:`${eO} 11:30:00`,color:"green"},{id:"daily-sync-series",title:"Daily sync",start:`${(0,a.default)(eO).subtract(3,"day").format("YYYY-MM-DD")} 14:00:00`,end:`${(0,a.default)(eO).subtract(3,"day").format("YYYY-MM-DD")} 14:30:00`,color:"grape",recurrence:{rrule:"FREQ=DAILY;COUNT=10"}},{id:"weekly-review-series",title:"Weekly review",start:`${(0,a.default)(eO).startOf("week").format("YYYY-MM-DD")} 16:00:00`,end:`${(0,a.default)(eO).startOf("week").format("YYYY-MM-DD")} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],ez={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,u.useState)(eO);return(0,D.jsx)(v.DayView,{date:e,onDateChange:t,events:eR,withAgenda:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DayView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: \`\${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:00:00\`,
    end: \`\${dayjs(today).subtract(3, 'day').format('YYYY-MM-DD')} 14:30:00\`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
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
  const [date, setDate] = useState(today);

  return (
    <DayView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
`};var eA=(0,t.__exportAll)({allDayEvents:()=>h,backgroundEvents:()=>eb,backgroundEventsCustomStyle:()=>eH,bidirectionalDragDrop:()=>ex,businessHours:()=>C,canDragEvent:()=>G,canResizeEvent:()=>J,controlledDate:()=>em,currentTimeIndicator:()=>E,customHeader:()=>ek,dragDrop:()=>z,eventForm:()=>eD,eventResize:()=>P,externalDragDrop:()=>eY,getTimeSlotProps:()=>eN,headerFormat:()=>k,intervalMinutes:()=>p,labels:()=>es,localization:()=>eI,overlappingEvents:()=>x,radius:()=>N,recurringEvents:()=>eT,renderEvent:()=>ed,renderEventBody:()=>ee,slotHeight:()=>H,slotLabelFormat:()=>I,startScrollTime:()=>ev,staticMode:()=>ei,subHourGridLines:()=>w,timeRange:()=>f,timezone:()=>j,usage:()=>y,viewChange:()=>ec,withAgenda:()=>ez,withoutHeader:()=>V});e.s(["DayViewDemos",0,eA],7834)}]);