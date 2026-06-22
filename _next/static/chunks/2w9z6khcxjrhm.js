(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,189305,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let o=(0,r.default)().format("YYYY-MM-DD"),a=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],n=[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${o} 10:00:00`,end:`${o} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${o} 09:30:00`,end:`${o} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${o} 13:00:00`,end:`${o} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${o} 11:00:00`,end:`${o} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${o} 14:00:00`,end:`${o} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${o} 10:00:00`,end:`${o} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${o} 15:00:00`,end:`${o} 16:00:00`,color:"grape",resourceId:"london"}],s=`
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

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
    start: \`\${today} 09:30:00\`,
    end: \`\${today} 10:30:00\`,
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
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 16:00:00\`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:00:00\`,
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
];
`;var d=e.i(191788),i=e.i(391398),l=e.i(613490);let c={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},u=(0,r.default)().format("YYYY-MM-DD"),m=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),D=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],v=[{id:1,title:"Offsite",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"blue",resourceId:"tokyo"},{id:6,title:"On call",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"grape",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${u} 10:00:00`,end:`${u} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Maintenance",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"gray",display:"background",resourceId:"paris"},{id:4,title:"Client Call",start:`${u} 09:30:00`,end:`${u} 10:30:00`,color:"violet",resourceId:"paris"},{id:5,title:"Holiday",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"orange",resourceId:"new-york"}],p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:D,events:v,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n];\n\n// All-day events span the whole day (start at 00:00, end at the next day 00:00).\n// Foreground all-day events render as a full-width bar pinned to the top of the\n// resource row, background all-day events (display: 'background') tint the whole row.\nconst events: ScheduleEventData[] = [\n  { id: 1, title: 'Offsite', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 6, title: 'On call', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'grape', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Maintenance', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'gray', display: 'background', resourceId: 'paris' },\n  { id: 4, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 5, title: 'Holiday', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'orange', resourceId: 'new-york' },\n];\n",language:"tsx",fileName:"data.ts"}]},f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[o,s]=(0,d.useState)(n);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{s(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[o,s]=(0,d.useState)(n);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r}:o))}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
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
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var g=e.i(162077),Y=e.i(988798);let S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[o,s]=(0,d.useState)(n),[c,u]=(0,d.useState)(!1),[m,D]=(0,d.useState)(null),[v,p]=(0,d.useState)(String(a[0].id));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{p(r?String(r):String(a[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{p(r?String(r):String(a[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onEventClick:e=>{p(e.resourceId?String(e.resourceId):String(a[0].id)),D({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),u(!0)}}),(0,i.jsx)(g.EventForm,{opened:c,onClose:()=>u(!1),onExitTransitionEnd:()=>D(null),values:m,onSubmit:e=>{e.id?s(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:v||a[0].id}:t)):s(t=>[...t,{id:Date.now(),title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:v||a[0].id}])},onDelete:m?.id?()=>{m?.id&&s(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,i.jsx)(Y.Select,{label:"Conference Room",placeholder:"Select a room",radius:"md",data:a.map(e=>({value:String(e.id),label:String(e.label)})),value:v,onChange:p})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(
    String(resources[0].id)
  );

  const handleTimeSlotClick = ({
    slotStart,
    slotEnd,
    resourceId,
  }: {
    slotStart: string;
    slotEnd: string;
    nativeEvent: React.MouseEvent;
    resourceId?: string | number;
  }) => {
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

  const handleSlotDragEnd = ({
    rangeStart,
    rangeEnd,
    resourceId,
  }: {
    rangeStart: string;
    rangeEnd: string;
    resourceId?: string | number;
  }) => {
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
      <ResourcesDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        startTime="08:00:00"
        endTime="18:00:00"
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:g._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"07:00:00",endTime:"20:00:00",highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="07:00:00"
      endTime="20:00:00"
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var x=e.i(671640),E=e.i(883364);let M={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",renderResourceLabel:e=>(0,i.jsxs)(x.Stack,{gap:2,align:"flex-start",children:[(0,i.jsx)(E.Text,{size:"sm",fw:600,children:e.label}),(0,i.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Floor 2"})]})})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      renderResourceLabel={(resource) => (
        <Stack gap={2} align="flex-start">
          <Text size="sm" fw={600}>{resource.label}</Text>
          <Text size="xs" c="dimmed">Floor 2</Text>
        </Stack>
      )}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var b=e.i(19683),T=e.i(369974),I=e.i(284629);let j=(0,r.default)().format("YYYY-MM-DD"),R=[{id:1,title:"Team Standup",start:`${j} 09:00:00`,end:`${j} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${j} 10:00:00`,end:`${j} 11:30:00`,color:"green",resourceId:"tokyo",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Client Call",start:`${j} 09:30:00`,end:`${j} 10:30:00`,color:"violet",resourceId:"paris",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:4,title:"Design Review",start:`${j} 13:00:00`,end:`${j} 14:00:00`,color:"orange",resourceId:"paris",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:5,title:"Workshop",start:`${j} 14:00:00`,end:`${j} 16:00:00`,color:"pink",resourceId:"new-york",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[o,n]=(0,d.useState)(R);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},renderEvent:(e,t)=>(0,i.jsxs)(T.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,i.jsx)(T.HoverCard.Target,{children:(0,i.jsx)(I.UnstyledButton,{...t})}),(0,i.jsx)(T.HoverCard.Dropdown,{children:(0,i.jsx)(b.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
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

export const eventsData: ScheduleEventData[] = ${JSON.stringify(R,null,2)};`,language:"tsx"}]};var $=e.i(232471),C=e.i(20035);let V=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[o,n]=(0,d.useState)([]),s=(0,d.useRef)(1);return(0,i.jsxs)(C.Grid,{children:[(0,i.jsxs)(C.Grid.Col,{span:{base:12,sm:3},children:[(0,i.jsx)(E.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),V.map(e=>(0,i.jsxs)($.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,i.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,i.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,i.jsx)(C.Grid.Col,{span:{base:12,sm:9},children:(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:o,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:o})=>{let a=e.getData("text/plain");if(!a)return;let d=JSON.parse(a),i=(0,r.default)(t),l=i.add(d.duration,"minutes");n(e=>[...e,{id:s.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color,resourceId:o}])}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
  { id: 'london', label: 'London' },
];

const sidebarItems = [
  { title: 'Quick Sync', duration: 30, color: 'teal' },
  { title: 'Workshop', duration: 120, color: 'orange' },
  { title: 'One-on-One', duration: 60, color: 'violet' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const nextId = useRef(1);

  const handleExternalDrop = ({
    dataTransfer,
    dropDateTime,
    resourceId,
  }: {
    dataTransfer: DataTransfer;
    dropDateTime: string;
    resourceId?: string | number;
  }) => {
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
        resourceId,
      },
    ]);
  };

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
    resourceId,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
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
        <ResourcesDayView
          date={date}
          onDateChange={setDate}
          resources={resources}
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
`},N=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[o,n]=(0,d.useState)(N),[s,c]=(0,d.useState)([]),[u,m]=(0,d.useState)(!1),D=(0,d.useRef)(1);return(0,i.jsxs)(C.Grid,{children:[(0,i.jsx)(C.Grid.Col,{span:{base:12,sm:3},children:(0,i.jsxs)($.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",m(!0)},onDragLeave:()=>m(!1),onDrop:e=>{e.preventDefault(),m(!1);let t=e.dataTransfer.getData("application/json");if(!t)return;let{eventId:o}=JSON.parse(t),a=s.find(e=>String(e.id)===String(o));if(!a)return;let d=(0,r.default)(a.end).diff((0,r.default)(a.start),"minutes");n(e=>[...e,{title:a.title,duration:d,color:a.color||"blue"}]),c(e=>e.filter(e=>e.id!==a.id))},style:{padding:8,borderRadius:8,border:u?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,i.jsx)(E.Text,{fw:500,mb:"xs",children:"Unscheduled"}),o.map(e=>(0,i.jsxs)($.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,i.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,i.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===o.length&&(0,i.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,i.jsx)(C.Grid.Col,{span:{base:12,sm:9},children:(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:s,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:o})=>{c(a=>a.map(a=>a.id===e?{...a,start:t,end:r,resourceId:o}:a))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:o})=>{let a=e.getData("text/plain");if(!a)return;let s=JSON.parse(a),d=(0,r.default)(t),i=d.add(s.duration,"minutes");c(e=>[...e,{id:D.current++,title:s.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss"),color:s.color,resourceId:o}]),n(e=>e.filter(e=>e.title!==s.title))}})})]})},code:`
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Box, Grid, Text } from '@mantine/core';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
  { id: 'london', label: 'London' },
];

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
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);
  const [events, setEvents] = useState<ScheduleEventData[]>([]);
  const [sidebarHighlight, setSidebarHighlight] = useState(false);
  const nextId = useRef(1);

  const handleExternalDrop = ({
    dataTransfer,
    dropDateTime,
    resourceId,
  }: {
    dataTransfer: DataTransfer;
    dropDateTime: string;
    resourceId?: string | number;
  }) => {
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
        resourceId,
      },
    ]);
    setSidebarItems((prev) => prev.filter((item) => item.title !== data.title));
  };

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
    resourceId,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
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
        <ResourcesDayView
          date={date}
          onDateChange={setDate}
          resources={resources}
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
`};e.i(27355);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente",resources:"Recursos"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
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
        resources: 'Recursos',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"09:00:00",endTime:"17:00:00",intervalMinutes:30})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
      intervalMinutes={30}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",slotWidth:120,rowHeight:80})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      slotWidth={120}
      rowHeight={80}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"08:00:00",endTime:"18:00:00",radius:"md"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      radius="md"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"00:00:00",endTime:"23:59:00",startScrollTime:"12:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:00"
      startScrollTime="12:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:a,events:n,startTime:"00:00:00",endTime:"23:59:00",scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0,type:"always",scrollbars:"x"}})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="00:00:00"
      endTime="23:59:00"
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
        type: 'always',
        scrollbars: 'x',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},L={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(l.ResourcesDayView,{date:new Date,resources:a,events:n,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!1})},code:[{code:`
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},J=(0,r.default)().format("YYYY-MM-DD"),U=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],W=[{id:1,title:"Draggable & Resizable",start:`${J} 09:00:00`,end:`${J} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Locked Event",start:`${J} 11:00:00`,end:`${J} 12:00:00`,color:"gray",resourceId:"paris",payload:{locked:!0}},{id:3,title:"Another Movable",start:`${J} 14:00:00`,end:`${J} 15:00:00`,color:"green",resourceId:"new-york"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(W);return(0,i.jsx)(l.ResourcesDayView,{date:new Date,resources:U,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,withEventResize:!0,onEventDrop:({eventId:e,newStart:r,newEnd:o,resourceId:a})=>{t(t=>t.map(t=>t.id===e?{...t,start:r,end:o,resourceId:a}:t))},onEventResize:({eventId:e,newStart:r,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:r,end:o}:t))},canDragEvent:e=>!e.payload?.locked,canResizeEvent:e=>!e.payload?.locked})},code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import { ResourcesDayView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const initialEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Draggable & Resizable',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 10:00:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Locked Event',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'gray',
    resourceId: 'paris',
    payload: { locked: true },
  },
  {
    id: 3,
    title: 'Another Movable',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
    resourceId: 'new-york',
  },
];

function Demo() {
  const [events, setEvents] = useState(initialEvents);

  const handleEventDrop = ({
    eventId,
    newStart,
    newEnd,
    resourceId,
  }: {
    eventId: string | number;
    newStart: string;
    newEnd: string;
    event: ScheduleEventData;
    resourceId?: string | number;
  }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd, resourceId } : event
      )
    );
  };

  const handleEventResize = ({ eventId, newStart, newEnd }: { eventId: string | number; newStart: string; newEnd: string; event: ScheduleEventData }) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId ? { ...event, start: newStart, end: newEnd } : event
      )
    );
  };

  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      withEventsDragAndDrop
      withEventResize
      onEventDrop={handleEventDrop}
      onEventResize={handleEventResize}
      canDragEvent={(event) => !event.payload?.locked}
      canResizeEvent={(event) => !event.payload?.locked}
    />
  );
}
`},_=(0,r.default)().format("YYYY-MM-DD"),K=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],X=[{id:1,title:"Team Standup",start:`${_} 09:00:00`,end:`${_} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${_} 09:00:00`,end:`${_} 10:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Code Review",start:`${_} 09:30:00`,end:`${_} 10:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"1:1 Meeting",start:`${_} 09:15:00`,end:`${_} 10:15:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Client Call",start:`${_} 09:00:00`,end:`${_} 10:00:00`,color:"cyan",resourceId:"paris"},{id:6,title:"Design Review",start:`${_} 09:00:00`,end:`${_} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Architecture Review",start:`${_} 09:00:00`,end:`${_} 10:00:00`,color:"red",resourceId:"paris"}],Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:K,events:X,startTime:"08:00:00",endTime:"18:00:00",maxEventsPerTimeSlot:2})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

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
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
      maxEventsPerTimeSlot={2}
    />
  );
}
`},q=(0,r.default)().format("YYYY-MM-DD"),ee=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],et=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,r.default)(q).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,r.default)(q).subtract(2,"day").format("YYYY-MM-DD")} 11:00:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${q} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${q} 14:00:00`,end:`${q} 16:00:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${q} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${q} 11:00:00`,end:`${q} 13:00:00`,color:"green",resourceId:"paris"}],er={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(q);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:ee,events:et,startTime:"08:00:00",endTime:"18:00:00"})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView } from '@mantine/schedule';

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
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`},eo=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"},{id:"overflow",label:"Overflow room"}],ea=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york","london"]}],en={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:eo,events:n,groups:ea,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesDayView, ScheduleResourceGroup } from '@mantine/schedule';
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
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesDayView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var es=(0,t.__exportAll)({allDayEvents:()=>p,bidirectionalDragDrop:()=>O,businessHours:()=>w,currentTimeIndicator:()=>L,dragDrop:()=>f,eventForm:()=>S,eventResize:()=>y,externalDragDrop:()=>H,localization:()=>A,maxEventsPerTimeSlot:()=>Z,permissions:()=>Q,radius:()=>B,recurringEvents:()=>er,renderEvent:()=>k,renderResourceLabel:()=>M,resourceGroups:()=>en,scrollAreaProps:()=>G,slotWidth:()=>P,startScrollTime:()=>F,staticMode:()=>h,timeRange:()=>z,usage:()=>c});e.s(["ResourcesDayViewDemos",0,es],189305)}]);