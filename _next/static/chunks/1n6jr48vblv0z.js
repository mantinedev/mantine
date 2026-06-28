(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,953813,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),r=(0,a.default)(n).add(1,"day").format("YYYY-MM-DD"),o=(0,a.default)(n).add(2,"day").format("YYYY-MM-DD"),d=[{id:1,title:"Morning Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green"},{id:3,title:"Lunch Break",start:`${n} 12:00:00`,end:`${n} 13:00:00`,color:"orange"},{id:4,title:"Code Review",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:5,title:"Client Call",start:`${r} 15:30:00`,end:`${r} 16:30:00`,color:"cyan"},{id:6,title:"Project Planning",start:`${o} 10:00:00`,end:`${o} 12:00:00`,color:"pink"},{id:7,title:"All Day Conference",start:`${n} 00:00:00`,end:(0,a.default)(n).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],i=[{id:1,title:"Workshop Session 1",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"blue"},{id:2,title:"Workshop Session 2",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"violet"},{id:3,title:"Workshop Session 3",start:`${n} 11:30:00`,end:`${n} 13:00:00`,color:"cyan"},{id:4,title:"Tomorrow Event 1",start:`${r} 09:00:00`,end:`${r} 10:30:00`,color:"green"},{id:5,title:"Tomorrow Event 2",start:`${r} 09:30:00`,end:`${r} 11:00:00`,color:"orange"}],s=[{id:1,title:"Early Morning Meeting",start:`${n} 08:30:00`,end:`${n} 09:00:00`,color:"blue"},{id:2,title:"Business Hours Task 1",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Business Hours Task 2",start:`${r} 14:00:00`,end:`${r} 15:00:00`,color:"violet"},{id:4,title:"Evening Sync",start:`${r} 17:30:00`,end:`${r} 18:00:00`,color:"orange"}],l=`
import dayjs from 'dayjs';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${startOfWeek} 10:00:00\`,
    end: \`\${startOfWeek} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(startOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`;var m=e.i(191788),c=e.i(391398),u=e.i(315401);let f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:d,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"09:00:00",endTime:"17:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
    />
  );
}
`},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:30})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={30}
    />
  );
}
`},p=(0,a.default)().format("YYYY-MM-DD"),Y=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),y=[{id:1,title:"Morning Standup",start:`${p} 09:00:00`,end:`${p} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${Y} 11:15:00`,end:`${Y} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${p} 14:00:00`,end:`${p} 14:45:00`,color:"violet"}],g={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(y);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",intervalMinutes:15,withSubHourGridLines:!0,withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${tomorrow} 11:15:00\`,
    end: \`\${tomorrow} 12:00:00\`,
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
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      intervalMinutes={15}
      withSubHourGridLines
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`},w=(0,a.default)().subtract((0,a.default)().day(),"day").format("YYYY-MM-DD"),k=(0,a.default)(w).add(1,"day").format("YYYY-MM-DD"),h=(0,a.default)(w).add(2,"day").format("YYYY-MM-DD"),S=[{id:1,title:"Morning Standup",start:`${w} 09:00:00`,end:`${w} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${k} 10:00:00`,end:`${k} 11:30:00`,color:"green"},{id:3,title:"Code Review",start:`${h} 14:00:00`,end:`${h} 15:00:00`,color:"violet"}],M={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:S,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0})},code:[{code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      firstDayOfWeek={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import dayjs from 'dayjs';

const startOfWeek = dayjs().subtract(dayjs().day(), 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');
const twoDaysAfterStartOfWeek = dayjs(startOfWeek).add(2, 'day').format('YYYY-MM-DD');

const events = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: \`\${dayAfterStartOfWeek} 10:00:00\`,
    end: \`\${dayAfterStartOfWeek} 11:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${twoDaysAfterStartOfWeek} 14:00:00\`,
    end: \`\${twoDaysAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
];
`,language:"tsx",fileName:"data.ts"}]},E={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",weekdayFormat:"dd"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      weekdayFormat="dd"
    />
  );
}
`},x={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",withWeekendDays:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withWeekendDays={false}
    />
  );
}
`},T={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",highlightToday:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      highlightToday
    />
  );
}
`},W={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",withWeekNumber:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withWeekNumber={false}
    />
  );
}
`},j={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}
`},$={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:"2030-06-10",events:d,withCurrentTimeIndicator:!0,forceCurrentTimeIndicator:!0})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date="2030-06-10"
      events={events}
      withCurrentTimeIndicator
      forceCurrentTimeIndicator
    />
  );
}
`};var b=e.i(988798),C=e.i(671640),O=e.i(664894),H=e.i(53157);a.default.extend(H.default),a.default.extend(O.default);let V=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],A={type:"code",component:function(){let[e,t]=(0,m.useState)("UTC"),n=()=>(0,a.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),r=n().split(" ")[0];return(0,c.jsxs)(C.Stack,{children:[(0,c.jsx)(b.Select,{label:"Display timezone",data:V,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,c.jsx)(u.WeekView,{date:r,events:[{id:1,title:"Morning standup",start:`${r} 09:00:00`,end:`${r} 09:30:00`,color:"blue"},{id:2,title:"Team meeting",start:`${r} 12:00:00`,end:`${r} 13:00:00`,color:"teal"},{id:3,title:"Code review",start:`${r} 16:00:00`,end:`${r} 17:00:00`,color:"grape"}],getCurrentTime:n,startScrollTime:(0,a.default)(n()).subtract(2,"hour").format("HH:mm:ss"),withCurrentTimeIndicator:!0,withCurrentTimeBubble:!0})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { WeekView } from '@mantine/schedule';
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

      <WeekView
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
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData } from '@mantine/schedule';\n\nexport function getEvents(date: string): ScheduleEventData[] {\n  return [\n    { id: 1, title: 'Morning standup', start: `${date} 09:00:00`, end: `${date} 09:30:00`, color: 'blue' },\n    { id: 2, title: 'Team meeting', start: `${date} 12:00:00`, end: `${date} 13:00:00`, color: 'teal' },\n    { id: 3, title: 'Code review', start: `${date} 16:00:00`, end: `${date} 17:00:00`, color: 'grape' },\n  ];\n}\n",language:"tsx",fileName:"data.ts"}]},I={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",withAllDaySlots:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withAllDaySlots={false}
    />
  );
}
`},R={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withHeader={false}
    />
  );
}
`},z={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",weekLabelFormat:"MMMM D, YYYY"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      weekLabelFormat="MMMM D, YYYY"
    />
  );
}
`},B={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",slotLabelFormat:"h A"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotLabelFormat="h A"
    />
  );
}
`},N={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",slotHeight:80,allDaySlotHeight:60})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotHeight={80}
      allDaySlotHeight={60}
    />
  );
}
`},G={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:s,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`},F={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:s,highlightBusinessHours:!0,businessHours:{1:["09:00:00","17:00:00"],2:["09:00:00","17:00:00"],3:["09:00:00","17:00:00"],4:["09:00:00","17:00:00"],5:["09:00:00","13:00:00"]},startTime:"07:00:00",endTime:"20:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={{
        1: ['09:00:00', '17:00:00'],
        2: ['09:00:00', '17:00:00'],
        3: ['09:00:00', '17:00:00'],
        4: ['09:00:00', '17:00:00'],
        5: ['09:00:00', '13:00:00'],
      }}
      startTime="07:00:00"
      endTime="20:00:00"
    />
  );
}
`},L={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:i,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`};var P=e.i(441058);let U=(0,a.default)().format("YYYY-MM-DD"),J=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),Q=[{id:1,title:"Morning Standup",start:`${U} 09:00:00`,end:`${U} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${J} 11:00:00`,end:`${J} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${U} 14:00:00`,end:`${U} 15:00:00`,color:"violet"},{id:4,title:"Company Holiday",start:(0,a.default)((0,P.getStartOfWeek)({date:U,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,P.getStartOfWeek)({date:U,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:5,title:"Release Day",start:(0,a.default)((0,P.getStartOfWeek)({date:U,firstDayOfWeek:1})).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)((0,P.getStartOfWeek)({date:U,firstDayOfWeek:1})).add(2,"day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"}],K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(Q);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 12:00:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Company Holiday',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 5,
    title: 'Release Day',
    start: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 })).format('YYYY-MM-DD HH:mm:ss'),
    end: dayjs(getStartOfWeek({ date: today, firstDayOfWeek: 1 }))
      .add(2, 'day')
      .format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
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
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`},_=(0,a.default)().format("YYYY-MM-DD"),Z=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),q=[{id:1,title:"Morning Standup",start:`${_} 09:00:00`,end:`${_} 09:30:00`,color:"blue"},{id:2,title:"Team Meeting",start:`${Z} 11:00:00`,end:`${Z} 12:00:00`,color:"green"},{id:3,title:"Code Review",start:`${_} 14:00:00`,end:`${_} 15:00:00`,color:"violet"}],X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(q);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 12:00:00\`,
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
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
    />
  );
}
`};var ee=e.i(19683),et=e.i(369974),ea=e.i(284629);let en=(0,a.default)(),er=en.subtract((en.day()+6)%7,"day"),eo=[{id:1,title:"Team Standup",start:er.add(1,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(1,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:er.add(2,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(2,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:er.add(3,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(3,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:er.add(4,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:er.add(4,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"All Day Conference",start:er.add(5,"day").format("YYYY-MM-DD 00:00:00"),end:er.add(5,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],ed={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(eo);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:r})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(r).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(et.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(et.HoverCard.Target,{children:(0,c.jsx)(ea.UnstyledButton,{...t})}),(0,c.jsx)(et.HoverCard.Dropdown,{children:(0,c.jsx)(ee.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, Text, Stack, Badge, Group, UnstyledButton } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { eventsData } from './events';

function Demo() {
  const [events, setEvents] = useState<ScheduleEventData[]>(eventData);

  return (
    <WeekView
      date={new Date()}
      events={events}
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:ee._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(eo,null,2)};`,language:"tsx"}]},ei={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`};var es=e.i(162077);let el={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)(d),[o,i]=(0,m.useState)(!1),[s,l]=(0,m.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:n,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t})=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),i(!0)},onAllDaySlotClick:e=>{l({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),i(!0)},onSlotDragEnd:(e,t)=>{l({title:"",start:new Date(e),end:new Date(t),color:"blue"}),i(!0)},onEventClick:e=>{l({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),i(!0)},startTime:"08:00:00",endTime:"18:00:00"}),(0,c.jsx)(es.EventForm,{opened:o,onClose:()=>i(!1),onExitTransitionEnd:()=>l(null),values:s,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:s?.id?()=>{s?.id&&r(e=>e.filter(e=>e.id!==s.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
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
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <WeekView
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:es._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]},em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(d);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startScrollTime:"09:00:00",scrollAreaProps:{mah:500},withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:[{code:`
import { useState } from 'react';
import { WeekView, ScheduleEventData } from '@mantine/schedule';
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
    <WeekView
      date={new Date()}
      events={events}
      startScrollTime="09:00:00"
      scrollAreaProps={{ mah: 500 }}
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var ec=e.i(232471),eu=e.i(20035),ef=e.i(883364);let eD=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],ev={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)([]),n=(0,m.useRef)(1);return(0,c.jsxs)(eu.Grid,{children:[(0,c.jsxs)(eu.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(ef.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),eD.map(e=>(0,c.jsxs)(ec.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(ef.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(ef.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,c.jsx)(eu.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,r)=>{let o=e.getData("text/plain");if(!o)return;let d=JSON.parse(o),i=(0,a.default)(r),s=i.add(d.duration,"minutes");t(e=>[...e,{id:n.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:s.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
        <WeekView
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
`},ep=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],eY={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ep),[n,r]=(0,m.useState)([]),[o,d]=(0,m.useState)(!1),i=(0,m.useRef)(1);return(0,c.jsxs)(eu.Grid,{children:[(0,c.jsx)(eu.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(ec.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let o=e.dataTransfer.getData("application/json");if(!o)return;let{eventId:i}=JSON.parse(o),s=n.find(e=>String(e.id)===String(i));if(!s)return;let l=(0,a.default)(s.end).diff((0,a.default)(s.start),"minutes");t(e=>[...e,{title:s.title,duration:l,color:s.color||"blue"}]),r(e=>e.filter(e=>e.id!==s.id))},style:{padding:8,borderRadius:8,border:o?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(ef.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsxs)(ec.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,c.jsx)(ef.Text,{size:"sm",fw:500,children:e.title}),(0,c.jsxs)(ef.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===e.length&&(0,c.jsx)(ef.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(eu.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.WeekView,{date:new Date,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let o=e.getData("text/plain");if(!o)return;let d=JSON.parse(o),s=(0,a.default)(n),l=s.add(d.duration,"minutes");r(e=>[...e,{id:i.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

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
        <WeekView
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
`},ey=(0,a.default)((0,P.getStartOfWeek)({date:new Date,firstDayOfWeek:1})).format("YYYY-MM-DD"),eg=[{id:"weekly-sync-series",title:"Weekly sync (series)",start:`${ey} 10:00:00`,end:`${ey} 11:00:00`,color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12",exdate:[`${(0,a.default)(ey).add(2,"day").format("YYYY-MM-DD")} 10:00:00`]}},{id:"weekly-sync-override",title:"Weekly sync (moved this week)",start:`${(0,a.default)(ey).add(2,"day").format("YYYY-MM-DD")} 15:00:00`,end:`${(0,a.default)(ey).add(2,"day").format("YYYY-MM-DD")} 16:00:00`,color:"grape",recurringEventId:"weekly-sync-series",recurrenceId:`${(0,a.default)(ey).add(2,"day").format("YYYY-MM-DD")} 10:00:00`},{id:"one-off-week",title:"One-off interview",start:`${(0,a.default)(ey).add(1,"day").format("YYYY-MM-DD")} 13:00:00`,end:`${(0,a.default)(ey).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,color:"green"}],ew={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ey);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:eg,startTime:"08:00:00",endTime:"20:00:00",intervalMinutes:60})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, getStartOfWeek } from '@mantine/schedule';

const weekStart = dayjs(getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })).format('YYYY-MM-DD');

const events = [
  {
    id: 'weekly-sync-series',
    title: 'Weekly sync (series)',
    start: \`\${weekStart} 10:00:00\`,
    end: \`\${weekStart} 11:00:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=WEEKLY;BYDAY=MO,WE;COUNT=12',
      exdate: [\`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`],
    },
  },
  {
    id: 'weekly-sync-override',
    title: 'Weekly sync (moved this week)',
    start: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 15:00:00\`,
    end: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 16:00:00\`,
    color: 'grape',
    recurringEventId: 'weekly-sync-series',
    recurrenceId: \`\${dayjs(weekStart).add(2, 'day').format('YYYY-MM-DD')} 10:00:00\`,
  },
];

function Demo() {
  const [date, setDate] = useState(weekStart);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="20:00:00"
      intervalMinutes={60}
    />
  );
}
`},ek=(0,a.default)().format("YYYY-MM-DD"),eh=[{id:"lunch-block",title:"Lunch break",start:`${ek} 12:00:00`,end:`${ek} 13:00:00`,color:"gray",display:"background"},{id:"focus-time",title:"Focus time",start:`${ek} 14:00:00`,end:`${ek} 16:00:00`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${ek} 10:00:00`,end:`${ek} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${ek} 14:30:00`,end:`${ek} 15:30:00`,color:"green"}],eS={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ek);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:eh,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';

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
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},eM=(0,a.default)((0,P.getStartOfWeek)({date:new Date,firstDayOfWeek:1})),eE=Array.from({length:5},(e,t)=>eM.add(t,"day").format("YYYY-MM-DD")),ex=[...eE.map((e,t)=>({id:`lunch-${t}`,title:"Lunch break",start:`${e} 12:00:00`,end:`${e} 13:00:00`,color:"red",display:"background"})),{id:"team-meeting",title:"Team meeting",start:`${eE[0]} 10:00:00`,end:`${eE[0]} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${eE[2]} 15:00:00`,end:`${eE[2]} 16:00:00`,color:"green"}],eT={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(ex);return(0,c.jsx)(u.WeekView,{date:new Date,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:r})=>{e.some(e=>"background"===e.display&&n<e.end&&r>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:r}:e))},styles:{weekViewBackgroundEvent:{background:`repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            var(--mantine-color-red-light) 10px,
            var(--mantine-color-red-light) 12px
          )`,color:"var(--mantine-color-red-light-color)"}}})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { getStartOfWeek, ScheduleEventData, WeekView } from '@mantine/schedule';
import classes from './Demo.module.css';

const weekStart = dayjs(
  getStartOfWeek({ date: new Date(), firstDayOfWeek: 1 })
);

const weekdays = Array.from({ length: 5 }, (_, i) =>
  weekStart.add(i, 'day').format('YYYY-MM-DD')
);

const initialEvents: ScheduleEventData[] = [
  ...weekdays.map((day, i) => ({
    id: \`lunch-\${i}\`,
    title: 'Lunch break',
    start: \`\${day} 12:00:00\`,
    end: \`\${day} 13:00:00\`,
    color: 'red',
    display: 'background' as const,
  })),
  {
    id: 'team-meeting',
    title: 'Team meeting',
    start: \`\${weekdays[0]} 10:00:00\`,
    end: \`\${weekdays[0]} 11:00:00\`,
    color: 'violet',
  },
  {
    id: 'code-review',
    title: 'Code review',
    start: \`\${weekdays[2]} 15:00:00\`,
    end: \`\${weekdays[2]} 16:00:00\`,
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
    <WeekView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      classNames={{ weekViewBackgroundEvent: classes.backgroundEvent }}
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
`}]};var eW=e.i(428127);let ej={defaultExpanded:!1,type:"code",component:function(){let e,t,[n,r]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(eW.ScheduleHeader,{children:[(0,c.jsx)(eW.ScheduleHeader.Previous,{onClick:()=>r((0,a.default)(n).subtract(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(eW.ScheduleHeader.Control,{interactive:!1,miw:200,children:(t=(e=(0,a.default)((0,P.getStartOfWeek)({date:n,firstDayOfWeek:1}))).add(6,"day"),e.month()===t.month()?`${e.format("MMM D")} – ${t.format("D, YYYY")}`:`${e.format("MMM D")} – ${t.format("MMM D, YYYY")}`)}),(0,c.jsx)(eW.ScheduleHeader.Next,{onClick:()=>r((0,a.default)(n).add(1,"week").format("YYYY-MM-DD"))}),(0,c.jsx)(eW.ScheduleHeader.Today,{onClick:()=>r((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(eW.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(u.WeekView,{date:n,onDateChange:r,events:d,startTime:"08:00:00",endTime:"18:00:00",withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  DateStringValue,
  getStartOfWeek,
  ScheduleHeader,
  WeekView,
} from '@mantine/schedule';
import { events } from './data';

function getWeekRangeLabel(date: DateStringValue) {
  const start = dayjs(getStartOfWeek({ date, firstDayOfWeek: 1 }));
  const end = start.add(6, 'day');
  if (start.month() === end.month()) {
    return \`\${start.format('MMM D')} – \${end.format('D, YYYY')}\`;
  }
  return \`\${start.format('MMM D')} – \${end.format('MMM D, YYYY')}\`;
}

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
                .subtract(1, 'week')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control interactive={false} miw={200}>
          {getWeekRangeLabel(date)}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'week')
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

      <WeekView
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};e.i(27355);let e$={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:d,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",weekday:"Día de la semana",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
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
        weekday: 'D\xeda de la semana',
        timeSlot: 'Franja horaria',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},eb={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:d,startTime:"08:00:00",endTime:"18:00:00",radius:0})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var eC=e.i(593612),eO=e.i(554166),eH=e.i(725695);let eV=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eA=(0,a.default)(eV).add(1,"day").format("YYYY-MM-DD"),eI=[{id:1,title:"Morning Standup",start:`${eV} 09:00:00`,end:`${eV} 09:30:00`,color:"blue",payload:{location:"Room A"}},{id:2,title:"Client Meeting",start:`${eV} 11:00:00`,end:`${eV} 12:00:00`,color:"green",payload:{location:"Video Call"}},{id:3,title:"Lunch Break",start:`${eA} 12:30:00`,end:`${eA} 13:30:00`,color:"orange",payload:{location:"Cafeteria"}}],eR={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:eI,startTime:"08:00:00",endTime:"18:00:00",renderEventBody:e=>(0,c.jsxs)(eH.Group,{children:[(0,c.jsx)(ef.Text,{fz:12,fw:500,children:e.title}),(0,c.jsxs)(eH.Group,{gap:4,children:[(0,c.jsx)(eC.ClockIcon,{size:12}),(0,c.jsx)(ef.Text,{fz:10,lh:1,children:(0,a.default)(e.start).format("h:mm A")})]}),e.payload?.location&&(0,c.jsxs)(eH.Group,{gap:4,children:[(0,c.jsx)(eO.MapPinIcon,{size:12}),(0,c.jsx)(ef.Text,{fz:10,children:e.payload.location})]})]})})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ClockIcon, MapPinIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A' },
  },
  {
    id: 2,
    title: 'Client Meeting',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'green',
    payload: { location: 'Video Call' },
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: \`\${dayAfterStartOfWeek} 12:30:00\`,
    end: \`\${dayAfterStartOfWeek} 13:30:00\`,
    color: 'orange',
    payload: { location: 'Cafeteria' },
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
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
`},ez=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eB=(0,a.default)(ez).add(1,"day").format("YYYY-MM-DD"),eN=(0,a.default)(ez).add(2,"day").format("YYYY-MM-DD"),eG=[{id:1,title:"Conference Day",start:`${ez} 00:00:00`,end:(0,a.default)(ez).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:2,title:"Holiday",start:`${eB} 00:00:00`,end:(0,a.default)(eB).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"pink"},{id:3,title:"Team Building",start:`${ez} 00:00:00`,end:(0,a.default)(eN).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Morning Standup",start:`${ez} 09:00:00`,end:`${ez} 09:30:00`,color:"blue"},{id:5,title:"Code Review",start:`${eB} 14:00:00`,end:`${eB} 15:00:00`,color:"violet"}],eF={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:eG,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');
const twoDaysAfter = dayjs(startOfWeek).add(2, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Conference Day',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(startOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 2,
    title: 'Holiday',
    start: \`\${dayAfterStartOfWeek} 00:00:00\`,
    end: dayjs(dayAfterStartOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'pink',
  },
  {
    id: 3,
    title: 'Team Building',
    start: \`\${startOfWeek} 00:00:00\`,
    end: dayjs(twoDaysAfter).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'orange',
  },
  {
    id: 4,
    title: 'Morning Standup',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 5,
    title: 'Code Review',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'violet',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},eL=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eP=(0,a.default)(eL).add(1,"day").format("YYYY-MM-DD"),eU=[{id:1,title:"Draggable Event",start:`${eL} 09:00:00`,end:`${eL} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${eL} 11:00:00`,end:`${eL} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Draggable",start:`${eP} 14:00:00`,end:`${eP} 15:00:00`,color:"green"}],eJ={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)(eU);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canDragEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable Event',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Draggable',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      onEventDrop={handleEventDrop}
      canDragEvent={(event) => !event.payload?.locked}
    />
  );
}
`},eQ=(0,a.default)().subtract(((0,a.default)().day()+6)%7,"day").format("YYYY-MM-DD"),eK=(0,a.default)(eQ).add(1,"day").format("YYYY-MM-DD"),e_=[{id:1,title:"Resizable Event",start:`${eQ} 09:00:00`,end:`${eQ} 10:00:00`,color:"blue"},{id:2,title:"Locked Event",start:`${eQ} 11:00:00`,end:`${eQ} 12:00:00`,color:"gray",payload:{locked:!0}},{id:3,title:"Another Resizable",start:`${eK} 14:00:00`,end:`${eK} 15:00:00`,color:"green"}],eZ={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)(e_);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:a})=>{r(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().subtract((dayjs().day() + 6) % 7, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Resizable Event',
    start: \`\${startOfWeek} 09:00:00\`,
    end: \`\${startOfWeek} 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${startOfWeek} 11:00:00\`,
    end: \`\${startOfWeek} 12:00:00\`,
    color: 'gray',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Resizable',
    start: \`\${dayAfterStartOfWeek} 14:00:00\`,
    end: \`\${dayAfterStartOfWeek} 15:00:00\`,
    color: 'green',
  },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(initialEvents);

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventResize
      onEventResize={handleEventResize}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`};var eq=e.i(485108);let eX={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),n=(0,a.default)(e).subtract(((0,a.default)(e).day()+6)%7,"day");return(0,c.jsxs)("div",{children:[(0,c.jsxs)(eH.Group,{mb:"md",children:[(0,c.jsx)(eq.Button,{onClick:()=>t((0,a.default)(e).subtract(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Previous Week"}),(0,c.jsxs)(ef.Text,{fw:500,children:[n.format("MMM D")," – ",n.add(6,"day").format("MMM D, YYYY")]}),(0,c.jsx)(eq.Button,{onClick:()=>t((0,a.default)(e).add(1,"week").format("YYYY-MM-DD HH:mm:ss")),children:"Next Week"})]}),(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:d,startTime:"08:00:00",endTime:"18:00:00"})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView } from '@mantine/schedule';
import { Button, Group, Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const weekStart = dayjs(date).subtract((dayjs(date).day() + 6) % 7, 'day');

  return (
    <div>
      <Group mb="md">
        <Button onClick={() => setDate(dayjs(date).subtract(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Previous Week
        </Button>
        <Text fw={500}>{weekStart.format('MMM D')} – {weekStart.add(6, 'day').format('MMM D, YYYY')}</Text>
        <Button onClick={() => setDate(dayjs(date).add(1, 'week').format('YYYY-MM-DD HH:mm:ss'))}>
          Next Week
        </Button>
      </Group>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},e0={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,m.useState)("week");return(0,c.jsxs)("div",{children:[(0,c.jsxs)(ef.Text,{mb:"md",children:["Selected view: ",n]}),(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:d,startTime:"08:00:00",endTime:"18:00:00",onViewChange:r})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { WeekView, ScheduleViewLevel } from '@mantine/schedule';
import { Text } from '@mantine/core';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [view, setView] = useState<ScheduleViewLevel>('week');

  return (
    <div>
      <Text mb="md">Selected view: {view}</Text>

      <WeekView
        date={date}
        onDateChange={setDate}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        onViewChange={setView}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},e1={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.WeekView,{date:new Date,events:d,startScrollTime:"07:00:00",getTimeSlotProps:({start:e})=>{let t=parseInt(e.split(" ")[1],10);return t>=7&&t<20?{"data-business-hours":!0}:{"data-non-business-hours":!0}}})},code:[{code:`
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},e8=(0,a.default)().format("YYYY-MM-DD"),e2=(0,a.default)().startOf("week").add(1,"day").format("YYYY-MM-DD"),e3=[{id:"standup",title:"Morning Standup",start:`${e8} 09:00:00`,end:`${e8} 09:30:00`,color:"blue"},{id:"team-meeting",title:"Team Meeting",start:`${e8} 10:00:00`,end:`${e8} 11:30:00`,color:"green"},{id:"weekly-review-series",title:"Weekly review",start:`${e2} 16:00:00`,end:`${e2} 17:00:00`,color:"orange",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],e9={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,m.useState)(e8);return(0,c.jsx)(u.WeekView,{date:e,onDateChange:t,events:e3,withAgenda:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfWeek = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD');

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
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfWeek} 16:00:00\`,
    end: \`\${startOfWeek} 17:00:00\`,
    color: 'orange',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <WeekView
      date={date}
      onDateChange={setDate}
      events={events}
      withAgenda
    />
  );
}
`};var e5=(0,t.__exportAll)({allDayEvents:()=>eF,backgroundEvents:()=>eS,backgroundEventsCustomStyle:()=>eT,bidirectionalDragDrop:()=>eY,businessHours:()=>G,businessHoursPerDay:()=>F,canDragEvent:()=>eJ,canResizeEvent:()=>eZ,controlledDate:()=>eX,currentTimeIndicator:()=>j,customHeader:()=>ej,dragDrop:()=>K,eventForm:()=>el,eventResize:()=>X,externalDragDrop:()=>ev,firstDayOfWeek:()=>M,forceCurrentTimeIndicator:()=>$,getTimeSlotProps:()=>e1,highlightToday:()=>T,intervalMinutes:()=>v,localization:()=>e$,overlappingEvents:()=>L,radius:()=>eb,recurringEvents:()=>ew,renderEvent:()=>ed,renderEventBody:()=>eR,slotHeight:()=>N,slotLabelFormat:()=>B,startScrollTime:()=>em,staticMode:()=>ei,subHourGridLines:()=>g,timeRange:()=>D,timezone:()=>A,usage:()=>f,viewChange:()=>e0,weekLabelFormat:()=>z,weekdayFormat:()=>E,withAgenda:()=>e9,withoutAllDaySlots:()=>I,withoutHeader:()=>R,withoutWeekNumber:()=>W,withoutWeekendDays:()=>x});e.s(["WeekViewDemos",0,e5],953813)}]);