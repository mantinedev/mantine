(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,189305,e=>{"use strict";var t=e.i(648863),r=e.i(494834);let a=(0,r.default)().format("YYYY-MM-DD"),o=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"}],s=[{id:1,title:"Team Standup",start:`${a} 09:00:00`,end:`${a} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${a} 10:00:00`,end:`${a} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Client Call",start:`${a} 09:30:00`,end:`${a} 10:30:00`,color:"violet",resourceId:"paris"},{id:4,title:"Design Review",start:`${a} 13:00:00`,end:`${a} 14:00:00`,color:"orange",resourceId:"paris"},{id:5,title:"1:1 Meeting",start:`${a} 11:00:00`,end:`${a} 11:30:00`,color:"cyan",resourceId:"new-york"},{id:6,title:"Workshop",start:`${a} 14:00:00`,end:`${a} 16:00:00`,color:"pink",resourceId:"new-york"},{id:7,title:"Architecture Review",start:`${a} 10:00:00`,end:`${a} 11:00:00`,color:"red",resourceId:"london"},{id:8,title:"Retrospective",start:`${a} 15:00:00`,end:`${a} 16:00:00`,color:"grape",resourceId:"london"}],n=`
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
`;var d=e.i(191788),i=e.i(391398),l=e.i(613490);let c={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},u=(0,r.default)().format("YYYY-MM-DD"),m=(0,r.default)().add(1,"day").format("YYYY-MM-DD"),D=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],p=[{id:1,title:"Offsite",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"blue",resourceId:"tokyo"},{id:6,title:"On call",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"grape",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${u} 10:00:00`,end:`${u} 11:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Maintenance",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"gray",display:"background",resourceId:"paris"},{id:4,title:"Client Call",start:`${u} 09:30:00`,end:`${u} 10:30:00`,color:"violet",resourceId:"paris"},{id:5,title:"Holiday",start:`${u} 00:00:00`,end:`${m} 00:00:00`,color:"orange",resourceId:"new-york"}],v={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:D,events:p,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:"\nimport dayjs from 'dayjs';\nimport { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';\n\nconst today = dayjs().format('YYYY-MM-DD');\nconst tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');\n\nconst resources: ScheduleResourceData[] = [\n  { id: 'tokyo', label: 'Meeting room: Tokyo' },\n  { id: 'paris', label: 'Meeting room: Paris' },\n  { id: 'new-york', label: 'Meeting room: New York' },\n];\n\n// All-day events span the whole day (start at 00:00, end at the next day 00:00).\n// Foreground all-day events render as a full-width bar pinned to the top of the\n// resource row, background all-day events (display: 'background') tint the whole row.\nconst events: ScheduleEventData[] = [\n  { id: 1, title: 'Offsite', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'blue', resourceId: 'tokyo' },\n  { id: 6, title: 'On call', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'grape', resourceId: 'tokyo' },\n  { id: 2, title: 'Sprint Planning', start: `${today} 10:00:00`, end: `${today} 11:30:00`, color: 'green', resourceId: 'tokyo' },\n  { id: 3, title: 'Maintenance', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'gray', display: 'background', resourceId: 'paris' },\n  { id: 4, title: 'Client Call', start: `${today} 09:30:00`, end: `${today} 10:30:00`, color: 'violet', resourceId: 'paris' },\n  { id: 5, title: 'Holiday', start: `${today} 00:00:00`, end: `${tomorrow} 00:00:00`, color: 'orange', resourceId: 'new-york' },\n];\n",language:"tsx",fileName:"data.ts"}]},f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[a,n]=(0,d.useState)(s);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:a,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:a})=>{n(o=>o.map(o=>o.id===e?{...o,start:t,end:r,resourceId:a}:o))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[a,n]=(0,d.useState)(s);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:a,startTime:"08:00:00",endTime:"18:00:00",withEventResize:!0,onEventResize:({eventId:e,newStart:t,newEnd:r})=>{n(a=>a.map(a=>a.id===e?{...a,start:t,end:r}:a))}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var g=e.i(162077),Y=e.i(988798);let S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[a,n]=(0,d.useState)(s),[c,u]=(0,d.useState)(!1),[m,D]=(0,d.useState)(null),[p,v]=(0,d.useState)(String(o[0].id));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:a,startTime:"08:00:00",endTime:"18:00:00",withDragSlotSelect:!0,onTimeSlotClick:({slotStart:e,slotEnd:t,resourceId:r})=>{v(r?String(r):String(o[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:r})=>{v(r?String(r):String(o[0].id)),D({title:"",start:new Date(e),end:new Date(t),color:"blue"}),u(!0)},onEventClick:e=>{v(e.resourceId?String(e.resourceId):String(o[0].id)),D({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),u(!0)}}),(0,i.jsx)(g.EventForm,{opened:c,onClose:()=>u(!1),onExitTransitionEnd:()=>D(null),values:m,onSubmit:e=>{e.id?n(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:p||o[0].id}:t)):n(t=>[...t,{id:Date.now(),title:e.title,start:(0,r.default)(e.start).format("YYYY-MM-DD HH:mm:ss"),end:(0,r.default)(e.end).format("YYYY-MM-DD HH:mm:ss"),color:e.color||"blue",resourceId:p||o[0].id}])},onDelete:m?.id?()=>{m?.id&&n(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,i.jsx)(Y.Select,{label:"Conference Room",placeholder:"Select a room",radius:"md",data:o.map(e=>({value:String(e.id),label:String(e.label)})),value:p,onChange:v})})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:g._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"08:00:00",endTime:"18:00:00",mode:"static"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"07:00:00",endTime:"20:00:00",highlightBusinessHours:!0,businessHours:["09:00:00","17:00:00"]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var w=e.i(671640),E=e.i(883364);let M={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"08:00:00",endTime:"18:00:00",renderResourceLabel:e=>(0,i.jsxs)(w.Stack,{gap:2,align:"flex-start",children:[(0,i.jsx)(E.Text,{size:"sm",fw:600,children:e.label}),(0,i.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Floor 2"})]})})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var b=e.i(19683),T=e.i(369974),k=e.i(284629);let I=(0,r.default)().format("YYYY-MM-DD"),j=[{id:1,title:"Team Standup",start:`${I} 09:00:00`,end:`${I} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${I} 10:00:00`,end:`${I} 11:30:00`,color:"green",resourceId:"tokyo",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Client Call",start:`${I} 09:30:00`,end:`${I} 10:30:00`,color:"violet",resourceId:"paris",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:4,title:"Design Review",start:`${I} 13:00:00`,end:`${I} 14:00:00`,color:"orange",resourceId:"paris",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:5,title:"Workshop",start:`${I} 14:00:00`,end:`${I} 16:00:00`,color:"pink",resourceId:"new-york",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[a,s]=(0,d.useState)(j);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:a,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:a})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r,resourceId:a}:o))},renderEvent:(e,t)=>(0,i.jsxs)(T.HoverCard,{width:280,position:"bottom",closeDelay:0,transitionProps:{duration:0},children:[(0,i.jsx)(T.HoverCard.Target,{children:(0,i.jsx)(k.UnstyledButton,{...t})}),(0,i.jsx)(T.HoverCard.Dropdown,{children:(0,i.jsx)(b.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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

export const eventsData: ScheduleEventData[] = ${JSON.stringify(j,null,2)};`,language:"tsx"}]};var $=e.i(232471),C=e.i(20035);let V=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],H={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[a,s]=(0,d.useState)([]),n=(0,d.useRef)(1);return(0,i.jsxs)(C.Grid,{children:[(0,i.jsxs)(C.Grid.Col,{span:{base:12,sm:3},children:[(0,i.jsx)(E.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),V.map(e=>(0,i.jsxs)($.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,i.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,i.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title))]}),(0,i.jsx)(C.Grid.Col,{span:{base:12,sm:9},children:(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:a,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:a})=>{s(o=>o.map(o=>o.id===e?{...o,start:t,end:r,resourceId:a}:o))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:a})=>{let o=e.getData("text/plain");if(!o)return;let d=JSON.parse(o),i=(0,r.default)(t),l=i.add(d.duration,"minutes");s(e=>[...e,{id:n.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color,resourceId:a}])}})})]})},code:`
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
`},N=[{title:"Quick Sync",duration:30,color:"teal"},{title:"Workshop",duration:120,color:"orange"},{title:"One-on-One",duration:60,color:"violet"}],z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[a,s]=(0,d.useState)(N),[n,c]=(0,d.useState)([]),[u,m]=(0,d.useState)(!1),D=(0,d.useRef)(1);return(0,i.jsxs)(C.Grid,{children:[(0,i.jsx)(C.Grid.Col,{span:{base:12,sm:3},children:(0,i.jsxs)($.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",m(!0)},onDragLeave:()=>m(!1),onDrop:e=>{e.preventDefault(),m(!1);let t=e.dataTransfer.getData("application/json");if(!t)return;let{eventId:a}=JSON.parse(t),o=n.find(e=>String(e.id)===String(a));if(!o)return;let d=(0,r.default)(o.end).diff((0,r.default)(o.start),"minutes");s(e=>[...e,{title:o.title,duration:d,color:o.color||"blue"}]),c(e=>e.filter(e=>e.id!==o.id))},style:{padding:8,borderRadius:8,border:u?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,i.jsx)(E.Text,{fw:500,mb:"xs",children:"Unscheduled"}),a.map(e=>(0,i.jsxs)($.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:[(0,i.jsx)(E.Text,{size:"sm",fw:500,children:e.title}),(0,i.jsxs)(E.Text,{size:"xs",children:[e.duration," min"]})]},e.title)),0===a.length&&(0,i.jsx)(E.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,i.jsx)(C.Grid.Col,{span:{base:12,sm:9},children:(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:n,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:r,resourceId:a})=>{c(o=>o.map(o=>o.id===e?{...o,start:t,end:r,resourceId:a}:o))},onExternalEventDrop:({dataTransfer:e,dropDateTime:t,resourceId:a})=>{let o=e.getData("text/plain");if(!o)return;let n=JSON.parse(o),d=(0,r.default)(t),i=d.add(n.duration,"minutes");c(e=>[...e,{id:D.current++,title:n.title,start:d.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss"),color:n.color,resourceId:a}]),s(e=>e.filter(e=>e.title!==n.title))}})})]})},code:`
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
`};e.i(27355);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"08:00:00",endTime:"18:00:00",locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",allDay:"Todo el día",timeSlot:"Franja horaria",today:"Hoy",previous:"Anterior",next:"Siguiente",resources:"Recursos"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},O={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"09:00:00",endTime:"17:00:00",intervalMinutes:30})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var P=e.i(892791);let B={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD")),[a,n]=(0,d.useState)("120");return(0,i.jsxs)(w.Stack,{children:[(0,i.jsx)(P.SegmentedControl,{value:a,onChange:n,data:[{label:"1 hour",value:"60"},{label:"2 hours",value:"120"},{label:"4 hours",value:"240"}]}),(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,intervalMinutes:Number(a),startScrollTime:"08:00:00"})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [intervalMinutes, setIntervalMinutes] = useState('120');

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
      <ResourcesDayView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        intervalMinutes={Number(intervalMinutes)}
        startScrollTime="08:00:00"
      />
    </Stack>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"08:00:00",endTime:"18:00:00",slotWidth:120,rowHeight:80})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},G={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"08:00:00",endTime:"18:00:00",radius:"md"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"00:00:00",endTime:"23:59:00",startScrollTime:"12:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:o,events:s,startTime:"00:00:00",endTime:"23:59:00",scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0,type:"always",scrollbars:"x"}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},W={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(l.ResourcesDayView,{date:new Date,resources:o,events:s,withCurrentTimeIndicator:!0,withCurrentTimeBubble:!1})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var J=e.i(664894),Q=e.i(53157);r.default.extend(Q.default),r.default.extend(J.default);let _=["UTC","America/New_York","Europe/Berlin","Asia/Kolkata","Asia/Tokyo"],K=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],X={type:"code",component:function(){let[e,t]=(0,d.useState)("UTC"),a=()=>(0,r.default)().tz(e).format("YYYY-MM-DD HH:mm:ss"),o=a().split(" ")[0];return(0,i.jsxs)(w.Stack,{children:[(0,i.jsx)(Y.Select,{label:"Display timezone",data:_,value:e,onChange:e=>t(e),allowDeselect:!1}),(0,i.jsx)(l.ResourcesDayView,{date:o,resources:K,events:[{id:1,title:"Team Standup",start:`${o} 09:00:00`,end:`${o} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Client Call",start:`${o} 12:00:00`,end:`${o} 13:00:00`,color:"teal",resourceId:"paris"},{id:3,title:"Workshop",start:`${o} 15:00:00`,end:`${o} 17:00:00`,color:"grape",resourceId:"new-york"}],startScrollTime:(0,r.default)(a()).subtract(2,"hour").format("HH:mm:ss"),getCurrentTime:a})]})},code:[{code:`
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { ResourcesDayView } from '@mantine/schedule';
import { getEvents, resources } from './data';

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

      <ResourcesDayView
        date={currentDate}
        resources={resources}
        events={getEvents(currentDate)}
        startScrollTime={dayjs(getCurrentTime()).subtract(2, 'hour').format('HH:mm:ss')}
        getCurrentTime={getCurrentTime}
      />
    </Stack>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

export const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

export function getEvents(date: string): ScheduleEventData[] {
  return [
    { id: 1, title: 'Team Standup', start: \`\${date} 09:00:00\`, end: \`\${date} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
    { id: 2, title: 'Client Call', start: \`\${date} 12:00:00\`, end: \`\${date} 13:00:00\`, color: 'teal', resourceId: 'paris' },
    { id: 3, title: 'Workshop', start: \`\${date} 15:00:00\`, end: \`\${date} 17:00:00\`, color: 'grape', resourceId: 'new-york' },
  ];
}
`,language:"tsx",fileName:"data.ts"}]},Z=(0,r.default)().format("YYYY-MM-DD"),q=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],ee=[{id:1,title:"Draggable & Resizable",start:`${Z} 09:00:00`,end:`${Z} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Locked Event",start:`${Z} 11:00:00`,end:`${Z} 12:00:00`,color:"gray",resourceId:"paris",payload:{locked:!0}},{id:3,title:"Another Movable",start:`${Z} 14:00:00`,end:`${Z} 15:00:00`,color:"green",resourceId:"new-york"}],et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(ee);return(0,i.jsx)(l.ResourcesDayView,{date:new Date,resources:q,events:e,startTime:"08:00:00",endTime:"18:00:00",withEventsDragAndDrop:!0,withEventResize:!0,onEventDrop:({eventId:e,newStart:r,newEnd:a,resourceId:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:r,end:a,resourceId:o}:t))},onEventResize:({eventId:e,newStart:r,newEnd:a})=>{t(t=>t.map(t=>t.id===e?{...t,start:r,end:a}:t))},canDragEvent:e=>!e.payload?.locked,canResizeEvent:e=>!e.payload?.locked})},code:`
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
`},er=(0,r.default)().format("YYYY-MM-DD"),ea=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],eo=[{id:1,title:"Team Standup",start:`${er} 09:00:00`,end:`${er} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${er} 09:00:00`,end:`${er} 10:30:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Code Review",start:`${er} 09:30:00`,end:`${er} 10:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"1:1 Meeting",start:`${er} 09:15:00`,end:`${er} 10:15:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Client Call",start:`${er} 09:00:00`,end:`${er} 10:00:00`,color:"cyan",resourceId:"paris"},{id:6,title:"Design Review",start:`${er} 09:00:00`,end:`${er} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Architecture Review",start:`${er} 09:00:00`,end:`${er} 10:00:00`,color:"red",resourceId:"paris"}],es={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:ea,events:eo,startTime:"08:00:00",endTime:"18:00:00",maxEventsPerTimeSlot:2})},code:`
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
`},en=(0,r.default)().format("YYYY-MM-DD"),ed=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],ei=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,r.default)(en).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,r.default)(en).subtract(2,"day").format("YYYY-MM-DD")} 11:00:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${en} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${en} 14:00:00`,end:`${en} 16:00:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${en} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${en} 11:00:00`,end:`${en} 13:00:00`,color:"green",resourceId:"paris"}],el={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(en);return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:ed,events:ei,startTime:"08:00:00",endTime:"18:00:00"})},code:`
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
`},ec=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"london",label:"Meeting room: London"},{id:"overflow",label:"Overflow room"}],eu=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york","london"]}],em={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(l.ResourcesDayView,{date:e,onDateChange:t,resources:ec,events:s,groups:eu,startTime:"08:00:00",endTime:"18:00:00"})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"}]};var eD=(0,t.__exportAll)({allDayEvents:()=>v,bidirectionalDragDrop:()=>z,businessHours:()=>x,currentTimeIndicator:()=>W,dragDrop:()=>f,eventForm:()=>S,eventResize:()=>y,externalDragDrop:()=>H,localization:()=>A,maxEventsPerTimeSlot:()=>es,multiHourIntervals:()=>B,permissions:()=>et,radius:()=>G,recurringEvents:()=>el,renderEvent:()=>R,renderResourceLabel:()=>M,resourceGroups:()=>em,scrollAreaProps:()=>U,slotWidth:()=>F,startScrollTime:()=>L,staticMode:()=>h,timeRange:()=>O,timezone:()=>X,usage:()=>c});e.s(["ResourcesDayViewDemos",0,eD],189305)}]);