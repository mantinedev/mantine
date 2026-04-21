(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,791941,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),o=(0,a.default)().startOf("month").format("YYYY-MM-DD"),r=(0,a.default)().date(15).format("YYYY-MM-DD"),d=(0,a.default)().endOf("month").format("YYYY-MM-DD"),s=[{id:1,title:"Team Meeting",start:`${o} 09:00:00`,end:`${o} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:`${r} 00:00:00`,end:(0,a.default)(r).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:3,title:"Client Call",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"green"},{id:4,title:"Monthly Review",start:`${d} 00:00:00`,end:(0,a.default)(d).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Workshop",start:(0,a.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,a.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:6,title:"Conference",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"cyan"}],i=[{id:1,title:"Event 1",start:`${n} 09:00:00`,end:`${n} 10:00:00`,color:"blue"},{id:2,title:"Event 2",start:`${n} 10:00:00`,end:`${n} 11:00:00`,color:"green"},{id:3,title:"Event 3",start:`${n} 11:00:00`,end:`${n} 12:00:00`,color:"orange"},{id:4,title:"Event 4",start:`${n} 13:00:00`,end:`${n} 14:00:00`,color:"violet"},{id:5,title:"Event 5",start:`${n} 14:00:00`,end:`${n} 15:00:00`,color:"cyan"},{id:6,title:"Event 6",start:`${n} 15:00:00`,end:`${n} 16:00:00`,color:"pink"}],l=`
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
`;var c=e.i(391398),u=e.i(168574);let f={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},D={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withWeekNumbers:!0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekNumbers />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withWeekDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,firstDayOfWeek:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},Y={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,weekdayFormat:"ddd"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} weekdayFormat="ddd" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var h=e.i(191788);let y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.MonthView,{date:e,consistentWeeks:!1,onDateChange:t})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthView } from '@mantine/schedule';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  return <MonthView date={date} consistentWeeks={false} onDateChange={setDate} />;
}
`},g={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,highlightToday:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} highlightToday={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},M={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withOutsideDays:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withOutsideDays={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},w={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,withHeader:!1})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withHeader={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},x={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:i})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:m,language:"tsx",fileName:"data.ts"}]},E=(0,a.default)().format("YYYY-MM-DD"),S=[{id:1,title:"Team Meeting",start:`${E} 09:00:00`,end:`${E} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:(0,a.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,a.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],j={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)(S);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))}})},code:`
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
`};var b=e.i(19683),H=e.i(369974),O=e.i(284629);let C=(0,a.default)().startOf("month"),V=[{id:1,title:"Team Standup",start:C.add(2,"day").hour(9).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(2,"day").hour(9).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"blue",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Conference Room A"}},{id:2,title:"Design Workshop",start:C.add(5,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(5,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"grape",payload:{description:"Collaborative design thinking session",attendees:["Diana","Eve","Frank"],location:"Creative Space"}},{id:3,title:"Client Presentation",start:C.add(10,"day").hour(14).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(10,"day").hour(15).minute(30).format("YYYY-MM-DD HH:mm:ss"),color:"green",payload:{description:"Q4 progress presentation to client",attendees:["Grace","Henry"],location:"Zoom"}},{id:4,title:"Sprint Planning",start:C.add(15,"day").hour(10).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(15,"day").hour(12).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"orange",payload:{description:"Plan next sprint tasks and priorities",attendees:["Alice","Charlie","Bob"],location:"Dev Lab"}},{id:5,title:"Code Review",start:C.add(18,"day").hour(16).minute(0).format("YYYY-MM-DD HH:mm:ss"),end:C.add(18,"day").hour(17).minute(0).format("YYYY-MM-DD HH:mm:ss"),color:"cyan",payload:{description:"Review pull requests from this week",attendees:["Alice","Charlie"],location:"Dev Lab"}},{id:6,title:"Tech Conference",start:C.add(22,"day").format("YYYY-MM-DD 00:00:00"),end:C.add(22,"day").format("YYYY-MM-DD 23:59:59"),color:"pink",payload:{description:"Annual tech conference",attendees:["All Team"],location:"Convention Center"}}],k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)(V);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:n,newEnd:o})=>{t(t=>t.map(t=>t.id===e?{...t,start:(0,a.default)(n).format("YYYY-MM-DD HH:mm:ss"),end:(0,a.default)(o).format("YYYY-MM-DD HH:mm:ss")}:t))},renderEvent:(e,t)=>(0,c.jsxs)(H.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(H.HoverCard.Target,{children:(0,c.jsx)(O.UnstyledButton,{...t})}),(0,c.jsx)(H.HoverCard.Dropdown,{children:(0,c.jsx)(b.EventDetails,{event:e})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"tsx"},{fileName:"EventDetails.tsx",code:b._eventDetailsCode,language:"tsx"},{fileName:"events.ts",code:`import { ScheduleEventData } from '@mantine/schedule';

export const eventsData: ScheduleEventData[] = ${JSON.stringify(V,null,2)};`,language:"tsx"}]},$={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,mode:"static"})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} mode="static" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]};var T=e.i(162077);let N={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)(s),[n,o]=(0,h.useState)(!1),[r,d]=(0,h.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.MonthView,{date:new Date,events:e,withDragSlotSelect:!0,onDayClick:e=>{d({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),o(!0)},onSlotDragEnd:(e,t)=>{d({title:"",start:new Date(e),end:new Date(t),color:"blue"}),o(!0)},onEventClick:e=>{d({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),o(!0)}}),(0,c.jsx)(T.EventForm,{opened:n,onClose:()=>o(!1),onExitTransitionEnd:()=>d(null),values:r,onSubmit:e=>{e.id?t(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}:t)):t(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue"}])},onDelete:r?.id?()=>{r?.id&&t(e=>e.filter(e=>e.id!==r.id))}:void 0})]})},code:[{code:`import dayjs from 'dayjs';
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
}`,language:"tsx",fileName:"Demo.tsx"},{code:T._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:l,language:"tsx",fileName:"events.ts"}]};var I=e.i(232471),A=e.i(20035),B=e.i(883364);let R=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)([]),n=(0,h.useRef)(1);return(0,c.jsxs)(A.Grid,{children:[(0,c.jsxs)(A.Grid.Col,{span:{base:12,sm:3},children:[(0,c.jsx)(B.Text,{fw:500,mb:"xs",children:"Drag to schedule"}),R.map(e=>(0,c.jsx)(I.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(B.Text,{size:"sm",fw:500,children:e.title})},e.title))]}),(0,c.jsx)(A.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:a,newEnd:n})=>{t(t=>t.map(t=>t.id===e?{...t,start:a,end:n}:t))},onExternalEventDrop:(e,o)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),s=(0,a.default)(o),i=s.endOf("day");t(e=>[...e,{id:n.current++,title:d.title,start:s.format("YYYY-MM-DD HH:mm:ss"),end:i.format("YYYY-MM-DD HH:mm:ss"),color:d.color}])}})})]})},code:`
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
`},G=[{title:"Team Offsite",color:"teal"},{title:"Release Day",color:"orange"},{title:"All Hands",color:"violet"}],P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)(G),[n,o]=(0,h.useState)([]),[r,d]=(0,h.useState)(!1),s=(0,h.useRef)(1);return(0,c.jsxs)(A.Grid,{children:[(0,c.jsx)(A.Grid.Col,{span:{base:12,sm:3},children:(0,c.jsxs)(I.Box,{onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",d(!0)},onDragLeave:()=>d(!1),onDrop:e=>{e.preventDefault(),d(!1);let a=e.dataTransfer.getData("application/json");if(!a)return;let{eventId:r}=JSON.parse(a),s=n.find(e=>String(e.id)===String(r));s&&(t(e=>[...e,{title:s.title,color:s.color||"blue"}]),o(e=>e.filter(e=>e.id!==s.id)))},style:{padding:8,borderRadius:8,border:r?"2px dashed var(--mantine-color-blue-5)":"2px dashed transparent",transition:"border-color 150ms"},children:[(0,c.jsx)(B.Text,{fw:500,mb:"xs",children:"Unscheduled"}),e.map(e=>(0,c.jsx)(I.Box,{draggable:!0,onDragStart:t=>{t.dataTransfer.setData("text/plain",JSON.stringify(e)),t.dataTransfer.effectAllowed="copy"},style:{padding:"8px 12px",marginBottom:8,borderRadius:4,cursor:"grab",backgroundColor:`var(--mantine-color-${e.color}-light)`,color:`var(--mantine-color-${e.color}-light-color)`},children:(0,c.jsx)(B.Text,{size:"sm",fw:500,children:e.title})},e.title)),0===e.length&&(0,c.jsx)(B.Text,{size:"xs",c:"dimmed",children:"Drag events here to unschedule"})]})}),(0,c.jsx)(A.Grid.Col,{span:{base:12,sm:9},children:(0,c.jsx)(u.MonthView,{date:new Date,events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a})=>{o(n=>n.map(n=>n.id===e?{...n,start:t,end:a}:n))},onExternalEventDrop:(e,n)=>{let r=e.getData("text/plain");if(!r)return;let d=JSON.parse(r),i=(0,a.default)(n),l=i.endOf("day");o(e=>[...e,{id:s.current++,title:d.title,start:i.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss"),color:d.color}]),t(e=>e.filter(e=>e.title!==d.title))}})})]})},code:`
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
`},F=[{id:"monthly-planning-series",title:"Weekly planning (series)",start:"2025-11-03 10:00:00",end:"2025-11-03 11:00:00",color:"blue",recurrence:{rrule:"FREQ=WEEKLY;BYDAY=MO;COUNT=10",exdate:["2025-11-17 10:00:00"]}},{id:"monthly-planning-override",title:"Weekly planning (moved occurrence)",start:"2025-11-17 15:00:00",end:"2025-11-17 16:00:00",color:"grape",recurringEventId:"monthly-planning-series",recurrenceId:"2025-11-17 10:00:00"},{id:"month-one-off",title:"One-off product demo",start:"2025-11-20 12:00:00",end:"2025-11-20 13:00:00",color:"green"}],U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)("2025-11-01");return(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:F,withWeekNumbers:!0})},code:`
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
`},J=(0,a.default)().format("YYYY-MM-DD"),z=[{id:"company-offsite",title:"Company offsite",start:`${(0,a.default)(J).startOf("week").add(1,"day").format("YYYY-MM-DD")} 00:00:00`,end:`${(0,a.default)(J).startOf("week").add(3,"day").format("YYYY-MM-DD")} 23:59:59`,color:"blue",display:"background"},{id:"team-meeting",title:"Team meeting",start:`${J} 10:00:00`,end:`${J} 11:00:00`,color:"violet"},{id:"code-review",title:"Code review",start:`${(0,a.default)(J).add(1,"day").format("YYYY-MM-DD")} 14:00:00`,end:`${(0,a.default)(J).add(1,"day").format("YYYY-MM-DD")} 15:00:00`,color:"green"}],L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)(z);return(0,c.jsx)(u.MonthView,{date:new Date,events:e,withEventsDragAndDrop:!0,onEventDrop:({eventId:a,newStart:n,newEnd:o})=>{e.some(e=>"background"===e.display&&n<e.end&&o>e.start)||t(e=>e.map(e=>e.id===a?{...e,start:n,end:o}:e))}})},code:`
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
`};var _=e.i(428127);let K={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,h.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(_.ScheduleHeader,{children:[(0,c.jsx)(_.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(_.ScheduleHeader.MonthYearSelect,{yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:n=>t((0,a.default)(e).year(n).startOf("month").format("YYYY-MM-DD")),onMonthChange:n=>t((0,a.default)(e).month(n).startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(_.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(_.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,c.jsx)(_.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,c.jsx)(u.MonthView,{date:e,onDateChange:t,events:s,withHeader:!1})]})},code:[{code:`
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
`};e.i(27355);let X={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",more:"Más",moreLabel:e=>`+${e} m\xe1s`}})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},ee={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:s,radius:0})},code:[{code:`
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} radius={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l,language:"tsx",fileName:"data.ts"}]},et=(0,a.default)().startOf("month"),ea=[{id:1,title:"Company Retreat",start:et.add(2,"day").format("YYYY-MM-DD 00:00:00"),end:et.add(3,"day").format("YYYY-MM-DD 00:00:00"),color:"blue"},{id:2,title:"Team Meeting",start:et.add(2,"day").format("YYYY-MM-DD 09:00:00"),end:et.add(2,"day").format("YYYY-MM-DD 10:00:00"),color:"green"},{id:3,title:"Project Deadline",start:et.add(8,"day").format("YYYY-MM-DD 00:00:00"),end:et.add(9,"day").format("YYYY-MM-DD 00:00:00"),color:"red"},{id:4,title:"Lunch with Client",start:et.add(8,"day").format("YYYY-MM-DD 12:00:00"),end:et.add(8,"day").format("YYYY-MM-DD 13:30:00"),color:"orange"},{id:5,title:"Code Review",start:et.add(8,"day").format("YYYY-MM-DD 15:00:00"),end:et.add(8,"day").format("YYYY-MM-DD 16:00:00"),color:"violet"},{id:6,title:"Sprint Planning",start:et.add(15,"day").format("YYYY-MM-DD 10:00:00"),end:et.add(15,"day").format("YYYY-MM-DD 11:30:00"),color:"cyan"},{id:7,title:"Design Workshop",start:et.add(15,"day").format("YYYY-MM-DD 14:00:00"),end:et.add(15,"day").format("YYYY-MM-DD 16:00:00"),color:"grape"},{id:8,title:"Conference",start:et.add(20,"day").format("YYYY-MM-DD 00:00:00"),end:et.add(22,"day").format("YYYY-MM-DD 00:00:00"),color:"pink"}],en={defaultExpanded:!1,type:"code",component:function(){return(0,c.jsx)(u.MonthView,{date:new Date,events:ea,renderEvent:(e,t)=>{let n,o;if(n=(0,a.default)(e.start),o=(0,a.default)(e.end),n.isSame(n.startOf("day"))&&o.isSame(o.startOf("day")))return(0,c.jsx)(O.UnstyledButton,{...t});let{children:r,className:d,style:s,...i}=t;return(0,c.jsxs)(O.UnstyledButton,{...i,style:{...s,display:"flex",alignItems:"center",gap:4,fontSize:10,whiteSpace:"nowrap",overflow:"hidden",pointerEvents:"all",cursor:"pointer",paddingInline:2},children:[(0,c.jsx)(I.Box,{component:"span",style:{width:8,height:8,borderRadius:"50%",backgroundColor:"var(--event-bg)",flexShrink:0}}),(0,c.jsx)("span",{style:{width:28,flexShrink:0},children:(0,a.default)(e.start).format("h:mm")}),(0,c.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e.title})]})}})},code:[{fileName:"Demo.tsx",code:`
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

export const events: ScheduleEventData[] = ${JSON.stringify(ea,null,2)};`,language:"tsx"}]};var eo=(0,t.__exportAll)({backgroundEvents:()=>L,bidirectionalDragDrop:()=>P,consistentWeeks:()=>y,customHeader:()=>K,dragDrop:()=>j,eventForm:()=>N,externalDragDrop:()=>W,firstDayOfWeek:()=>p,highlightToday:()=>g,localization:()=>X,manyEvents:()=>x,maxEventsPerDay:()=>Z,radius:()=>ee,recurringEvents:()=>U,renderEvent:()=>k,staticMode:()=>$,timedEvents:()=>en,usage:()=>f,weekdayFormat:()=>Y,withWeekNumbers:()=>D,withoutHeader:()=>w,withoutOutsideDays:()=>M,withoutWeekDays:()=>v});e.s(["MonthViewDemos",0,eo],791941)}]);