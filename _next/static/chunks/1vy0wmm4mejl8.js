(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,259072,e=>{"use strict";var t=e.i(648863),o=e.i(494834);let a=(0,o.default)().format("YYYY-MM-DD"),r=(0,o.default)().add(1,"day").format("YYYY-MM-DD"),s=(0,o.default)().add(2,"day").format("YYYY-MM-DD"),n=(0,o.default)().add(3,"day").format("YYYY-MM-DD"),d=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],i=[{id:1,title:"Team Standup",start:`${a} 09:00:00`,end:`${a} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${a} 10:00:00`,end:`${a} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${r} 09:30:00`,end:`${r} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${r} 11:00:00`,end:`${r} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${s} 14:00:00`,end:`${s} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${r} 10:00:00`,end:`${r} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${a} 15:00:00`,end:`${a} 16:00:00`,color:"grape",resourceId:"london"},{id:9,title:"Product Demo",start:`${s} 09:00:00`,end:`${s} 10:00:00`,color:"teal",resourceId:"tokyo"},{id:10,title:"Budget Review",start:`${n} 11:00:00`,end:`${n} 12:30:00`,color:"indigo",resourceId:"paris"}],l=`
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfter = dayjs().add(2, 'day').format('YYYY-MM-DD');
const dayAfter2 = dayjs().add(3, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: \`\${today} 13:00:00\`,
    end: \`\${today} 14:00:00\`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: \`\${tomorrow} 11:00:00\`,
    end: \`\${tomorrow} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${dayAfter} 14:00:00\`,
    end: \`\${dayAfter} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${tomorrow} 10:00:00\`,
    end: \`\${tomorrow} 11:00:00\`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: \`\${today} 15:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 9,
    title: 'Product Demo',
    start: \`\${dayAfter} 09:00:00\`,
    end: \`\${dayAfter} 10:00:00\`,
    color: 'teal',
    resourceId: 'tokyo',
  },
  {
    id: 10,
    title: 'Budget Review',
    start: \`\${dayAfter2} 11:00:00\`,
    end: \`\${dayAfter2} 12:30:00\`,
    color: 'indigo',
    resourceId: 'paris',
  },
];
`;var c=e.i(191788),u=e.i(391398),m=e.i(499083);let D={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},f=(0,o.default)().startOf("week").add(1,"day"),y=e=>f.add(e,"day").format("YYYY-MM-DD"),Y=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],v=[{id:1,title:"Offsite",start:`${y(1)} 00:00:00`,end:`${y(2)} 00:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Review",start:`${y(1)} 00:00:00`,end:`${y(2)} 00:00:00`,color:"grape",resourceId:"tokyo"},{id:3,title:"Sprint Planning",start:`${y(0)} 10:00:00`,end:`${y(0)} 11:30:00`,color:"green",resourceId:"tokyo"},{id:4,title:"Maintenance",start:`${y(2)} 00:00:00`,end:`${y(3)} 00:00:00`,color:"gray",display:"background",resourceId:"paris"},{id:5,title:"Client Call",start:`${y(1)} 09:30:00`,end:`${y(1)} 10:30:00`,color:"violet",resourceId:"paris"},{id:6,title:"Holiday",start:`${y(4)} 00:00:00`,end:`${y(5)} 00:00:00`,color:"orange",resourceId:"new-york"}],p={defaultExpanded:!1,type:"code",component:function(){let e=(0,o.default)().format("YYYY-MM-DD"),[t,a]=(0,c.useState)(e);return(0,u.jsx)(m.ResourcesWeekView,{date:t,onDateChange:a,resources:Y,events:v,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${e} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const monday = dayjs().startOf('week').add(1, 'day');
const day = (offset: number) => monday.add(offset, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

// All-day events span a single whole day (start at 00:00, end at the next day 00:00).
// A foreground all-day event renders as a full-width bar pinned to the top of its day
// column and stacks when there are several; all-day events with display: 'background'
// tint the whole day column.
const events: ScheduleEventData[] = [
  { id: 1, title: 'Offsite', start: \`\${day(1)} 00:00:00\`, end: \`\${day(2)} 00:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Review', start: \`\${day(1)} 00:00:00\`, end: \`\${day(2)} 00:00:00\`, color: 'grape', resourceId: 'tokyo' },
  { id: 3, title: 'Sprint Planning', start: \`\${day(0)} 10:00:00\`, end: \`\${day(0)} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 4, title: 'Maintenance', start: \`\${day(2)} 00:00:00\`, end: \`\${day(3)} 00:00:00\`, color: 'gray', display: 'background', resourceId: 'paris' },
  { id: 5, title: 'Client Call', start: \`\${day(1)} 09:30:00\`, end: \`\${day(1)} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 6, title: 'Holiday', start: \`\${day(4)} 00:00:00\`, end: \`\${day(5)} 00:00:00\`, color: 'orange', resourceId: 'new-york' },
];
`,language:"tsx",fileName:"data.ts"}]},g={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD")),[a,r]=(0,c.useState)(i);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:a,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:o,resourceId:a})=>{r(r=>r.map(r=>r.id===e?{...r,start:t,end:o,resourceId:a}:r))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD")),[a,r]=(0,c.useState)(i);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:a,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:o})=>{r(a=>a.map(a=>a.id===e?{...a,start:t,end:o}:a))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withEventResize
      onEventResize={({ eventId, newStart, newEnd }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd }
              : event
          )
        );
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var M=e.i(162077),k=e.i(988798);let w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD")),[a,r]=(0,c.useState)(i),[s,n]=(0,c.useState)(!1),[l,D]=(0,c.useState)(null),[f,y]=(0,c.useState)(String(d[0].id));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:a,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:o})=>{y(o?String(o):String(d[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:o})=>{y(o?String(o):String(d[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),n(!0)},onEventClick:e=>{y(e.resourceId?String(e.resourceId):String(d[0].id)),D({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),n(!0)}}),(0,u.jsx)(M.EventForm,{opened:s,onClose:()=>n(!1),onExitTransitionEnd:()=>D(null),values:l,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,o.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,o.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:f||d[0].id}:t)):r(t=>[...t,{id:Date.now(),title:e.title,start:(0,o.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,o.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:f||d[0].id}])},onDelete:l?.id?()=>{l?.id&&r(e=>e.filter(e=>e.id!==l.id))}:void 0,children:(0,u.jsx)(k.Select,{label:"Conference Room",placeholder:"Select a room",radius:"md",data:d.map(e=>({value:String(e.id),label:String(e.label)})),value:f,onChange:y})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(
    String(resources[0].id)
  );

  const handleTimeSlotClick = (
    slotStart: string,
    slotEnd: string,
    _e: React.MouseEvent,
    resourceId?: string | number
  ) => {
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
    setSelectedEventData({
      title: '',
      start: new Date(slotStart),
      end: new Date(slotEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : String(resources[0].id));
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
                start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
                end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
                color: values.color || 'blue',
                resourceId: selectedResourceId || resources[0].id,
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: values.title,
          start: dayjs(values.start).format('YYYY-MM-DD HH:mm:ss'),
          end: dayjs(values.end).format('YYYY-MM-DD HH:mm:ss'),
          color: values.color || 'blue',
          resourceId: selectedResourceId || resources[0].id,
        },
      ]);
    }
  };

  const handleSlotDragEnd = (
    rangeStart: string,
    rangeEnd: string,
    resourceId?: string | number
  ) => {
    setSelectedResourceId(resourceId ? String(resourceId) : String(resources[0].id));
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
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
        startScrollDateTime={\`\${today} 08:00:00\`}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
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
      >
        <Select
          label="Conference Room"
          placeholder="Select a room"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: String(r.label) }))}
          value={selectedResourceId}
          onChange={setSelectedResourceId}
        />
      </EventForm>
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:M._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,mode:"static"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},$={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"07:00:00",endTime:"20:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="07:00:00"
      endTime="20:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},T={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,withWeekendDays:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withWeekendDays={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var x=e.i(671640),E=e.i(883364);let j={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,renderResourceLabel:e=>(0,u.jsxs)(x.Stack,{gap:2,align:"flex-start",children:[(0,u.jsx)(E.Text,{size:"sm",fw:600,children:e.label}),(0,u.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Floor 2"})]})})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      renderResourceLabel={(resource) => (
        <Stack gap={2} align="flex-start">
          <Text size="sm" fw={600}>{resource.label}</Text>
          <Text size="xs" c="dimmed">Floor 2</Text>
        </Stack>
      )}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var b=e.i(19683),I=e.i(369974),R=e.i(284629);let C=(0,o.default)().format("YYYY-MM-DD"),W=(0,o.default)().add(1,"day").format("YYYY-MM-DD"),V=(0,o.default)().add(2,"day").format("YYYY-MM-DD"),N=[{id:1,title:"Team Standup",start:`${C} 09:00:00`,end:`${C} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${C} 10:00:00`,end:`${C} 11:30:00`,color:"green",resourceId:"tokyo",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Client Call",start:`${W} 09:30:00`,end:`${W} 10:30:00`,color:"violet",resourceId:"paris",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:4,title:"Design Review",start:`${C} 13:00:00`,end:`${C} 14:00:00`,color:"orange",resourceId:"paris",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:5,title:"Workshop",start:`${V} 14:00:00`,end:`${V} 16:00:00`,color:"pink",resourceId:"new-york",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD")),[a,r]=(0,c.useState)(N);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:a,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:o,resourceId:a})=>{r(r=>r.map(r=>r.id===e?{...r,start:t,end:o,resourceId:a}:r))},renderEvent:(e,t)=>(0,u.jsxs)(I.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,u.jsx)(I.HoverCard.Target,{children:(0,u.jsx)(R.UnstyledButton,{...t})}),(0,u.jsx)(I.HoverCard.Dropdown,{children:(0,u.jsx)(b.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:b._eventDetailsCode,language:"tsx"},{fileName:"data.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(N,null,2)};`,language:"tsx"}]};e.i(27355);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente",resources:"Recursos"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
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
        resources: 'Recursos',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,radius:"md"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      radius="md"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 10:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDateTime={\`\${today} 10:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`,scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"09:00:00",endTime:"17:00:00",intervalMinutes:30,startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 09:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
      intervalMinutes={30}
      startScrollDateTime={\`\${today} 09:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var L=e.i(892791);let z=(0,o.default)().format("YYYY-MM-DD"),U=(0,o.default)().add(1,"day").format("YYYY-MM-DD"),_=(0,o.default)().add(2,"day").format("YYYY-MM-DD"),G=[{id:1,title:"Design workshop",start:`${z} 08:00:00`,end:`${z} 12:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Client onboarding",start:`${z} 10:00:00`,end:`${z} 14:00:00`,color:"violet",resourceId:"paris"},{id:3,title:"Hackathon",start:`${z} 13:00:00`,end:`${z} 19:00:00`,color:"pink",resourceId:"london"},{id:4,title:"Sprint review",start:`${U} 09:00:00`,end:`${U} 11:00:00`,color:"cyan",resourceId:"new-york"},{id:5,title:"Strategy offsite",start:`${U} 14:00:00`,end:`${U} 18:00:00`,color:"green",resourceId:"tokyo"},{id:6,title:"Security audit",start:`${U} 08:00:00`,end:`${U} 13:00:00`,color:"orange",resourceId:"paris"},{id:7,title:"Onboarding training",start:`${_} 10:00:00`,end:`${_} 16:00:00`,color:"grape",resourceId:"london"},{id:8,title:"Interviews",start:`${_} 12:00:00`,end:`${_} 14:00:00`,color:"teal",resourceId:"new-york"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)(z),[o,a]=(0,c.useState)("240");return(0,u.jsxs)(x.Stack,{children:[(0,u.jsx)(L.SegmentedControl,{value:o,onChange:a,data:[{label:"1 hour",value:"60"},{label:"2 hours",value:"120"},{label:"4 hours",value:"240"}]}),(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:G,startTime:"08:00:00",endTime:"20:00:00",intervalMinutes:Number(o),startScrollDateTime:`${z} 08:00:00`})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [intervalMinutes, setIntervalMinutes] = useState('240');

  return (
    <Stack>
      <SegmentedControl
        value={intervalMinutes}
        onChange={setIntervalMinutes}
        data={[
          { label: '1 hour', value: '60' },
          { label: '2 hours', value: '120' },
          { label: '4 hours', value: '240' },
        ]}
      />
      <ResourcesWeekView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="20:00:00"
        intervalMinutes={Number(intervalMinutes)}
        startScrollDateTime={\`\${today} 08:00:00\`}
      />
    </Stack>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:"import dayjs from 'dayjs';\nimport { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';\n\nconst day1 = dayjs().format('YYYY-MM-DD');\nconst day2 = dayjs().add(1, 'day').format('YYYY-MM-DD');\nconst day3 = dayjs().add(2, 'day').format('YYYY-MM-DD');\n\nexport const resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n  { id: 'london', label: 'Meeting room: London' },\n];\n\n// Events last between 2 and 6 hours\nexport const events: ScheduleEventData[] = [\n  { id: 1, title: 'Design workshop', start: `${day1} 08:00:00`, end: `${day1} 12:00:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 2, title: 'Client onboarding', start: `${day1} 10:00:00`, end: `${day1} 14:00:00`, color: 'violet', resourceId: 'paris' },\n  { id: 3, title: 'Hackathon', start: `${day1} 13:00:00`, end: `${day1} 19:00:00`, color: 'pink', resourceId: 'london' },\n  { id: 4, title: 'Sprint review', start: `${day2} 09:00:00`, end: `${day2} 11:00:00`, color: 'cyan', resourceId: 'new-york' },\n  { id: 5, title: 'Strategy offsite', start: `${day2} 14:00:00`, end: `${day2} 18:00:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 6, title: 'Security audit', start: `${day2} 08:00:00`, end: `${day2} 13:00:00`, color: 'orange', resourceId: 'paris' },\n  { id: 7, title: 'Onboarding training', start: `${day3} 10:00:00`, end: `${day3} 16:00:00`, color: 'grape', resourceId: 'london' },\n  { id: 8, title: 'Interviews', start: `${day3} 12:00:00`, end: `${day3} 14:00:00`, color: 'teal', resourceId: 'new-york' },\n];",language:"tsx",fileName:"data.ts"}]},K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"00:00:00",endTime:"23:59:59",withCurrentTimeIndicator:!0,withCurrentTimeBubble:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:59"
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},J={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",firstDayOfWeek:0,withWeekendDays:!0,weekdayFormat:"dddd D"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      firstDayOfWeek={0}
      withWeekendDays
      weekdayFormat="dddd D"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},X={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:d,events:i,startTime:"08:00:00",endTime:"18:00:00",renderWeekLabel:({weekStart:e,weekEnd:t})=>`Week of ${(0,o.default)(e).format("MMM D")} – ${(0,o.default)(t).format("MMM D, YYYY")}`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderWeekLabel={({ weekStart, weekEnd }) =>
        \`Week of \${dayjs(weekStart).format('MMM D')} – \${dayjs(weekEnd).format('MMM D, YYYY')}\`
      }
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Z=(0,o.default)().format("YYYY-MM-DD"),q=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],ee=[{id:1,title:"Team Standup",start:`${Z} 09:00:00`,end:`${Z} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${Z} 09:00:00`,end:`${Z} 10:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Code Review",start:`${Z} 09:30:00`,end:`${Z} 10:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"1:1 Meeting",start:`${Z} 09:15:00`,end:`${Z} 10:15:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Client Call",start:`${Z} 09:00:00`,end:`${Z} 10:00:00`,color:"cyan",resourceId:"paris"},{id:6,title:"Design Review",start:`${Z} 09:00:00`,end:`${Z} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Architecture Review",start:`${Z} 09:00:00`,end:`${Z} 10:00:00`,color:"red",resourceId:"paris"}],et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:q,events:ee,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${Z} 08:00:00`,maxEventsPerTimeSlot:2})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  // ... many overlapping events per resource
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
      maxEventsPerTimeSlot={2}
    />
  );
}
`},eo=(0,o.default)().format("YYYY-MM-DD"),ea=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],er=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,o.default)(eo).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,o.default)(eo).subtract(2,"day").format("YYYY-MM-DD")} 11:00:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${eo} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${eo} 14:00:00`,end:`${eo} 16:00:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${eo} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${eo} 11:00:00`,end:`${eo} 13:00:00`,color:"green",resourceId:"paris"}],es={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)(eo);return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:ea,events:er,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${eo} 08:00:00`})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 11:00:00\`,
    color: 'blue',
    resourceId: 'tokyo',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'grape',
    resourceId: 'tokyo',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 13:00:00\`,
    color: 'green',
    resourceId: 'paris',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`},en=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"},{id:"overflow",label:"Overflow room"}],ed=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york","london"]}],ei={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,c.useState)((0,o.default)().format("YYYY-MM-DD"));return(0,u.jsx)(m.ResourcesWeekView,{date:e,onDateChange:t,resources:en,events:i,groups:ed,startTime:"08:00:00",endTime:"18:00:00",startScrollDateTime:`${(0,o.default)().format("YYYY-MM-DD")} 08:00:00`})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesWeekView, ScheduleResourceGroup } from '@mantine/schedule';
import { events } from './data';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
  { id: 'overflow', label: 'Overflow room' },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['new-york', 'london'] },
];

function Demo() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);

  return (
    <ResourcesWeekView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startTime="08:00:00"
      endTime="18:00:00"
      startScrollDateTime={\`\${today} 08:00:00\`}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var el=(0,t.__exportAll)({allDayEvents:()=>p,businessHours:()=>$,currentTimeIndicator:()=>K,dragDrop:()=>g,eventForm:()=>w,eventResize:()=>S,firstDayOfWeek:()=>J,localization:()=>A,maxEventsPerTimeSlot:()=>et,multiHourIntervals:()=>Q,radius:()=>P,recurringEvents:()=>es,renderEvent:()=>H,renderResourceLabel:()=>j,renderWeekLabel:()=>X,resourceGroups:()=>ei,scrollAreaProps:()=>O,startScrollDateTime:()=>F,staticMode:()=>h,timeRange:()=>B,usage:()=>D,withoutWeekendDays:()=>T});e.s(["ResourcesWeekViewDemos",0,el],259072)}]);