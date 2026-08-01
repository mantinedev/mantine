import { useState } from 'react';
import dayjs from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

dayjs.extend(utc);
dayjs.extend(tz);

const timezones = ['UTC', 'America/New_York', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Tokyo'];

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

function getEvents(date: string): ScheduleEventData[] {
  return [
    {
      id: 1,
      title: 'Team Standup',
      start: `${date} 09:00:00`,
      end: `${date} 09:30:00`,
      color: 'blue',
      resourceId: 'tokyo',
    },
    {
      id: 2,
      title: 'Client Call',
      start: `${date} 12:00:00`,
      end: `${date} 13:00:00`,
      color: 'teal',
      resourceId: 'paris',
    },
    {
      id: 3,
      title: 'Workshop',
      start: `${date} 15:00:00`,
      end: `${date} 17:00:00`,
      color: 'grape',
      resourceId: 'new-york',
    },
  ];
}

const code = `
import { useState } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Select, Stack } from '@mantine/core';
import { ResourcesWeekView } from '@mantine/schedule';
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

      <ResourcesWeekView
        date={currentDate}
        resources={resources}
        events={getEvents(currentDate)}
        startScrollDateTime={dayjs(getCurrentTime()).subtract(2, 'hour').format('YYYY-MM-DD HH:mm:ss')}
        getCurrentTime={getCurrentTime}
      />
    </Stack>
  );
}
`;

const dataCode = `
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
`;

function Demo() {
  const [timezone, setTimezone] = useState('UTC');

  const getCurrentTime = () => dayjs().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
  const currentDate = getCurrentTime().split(' ')[0];

  return (
    <Stack>
      <Select
        label="Display timezone"
        data={timezones}
        value={timezone}
        onChange={(value) => setTimezone(value!)}
        allowDeselect={false}
      />

      <ResourcesWeekView
        date={currentDate}
        resources={resources}
        events={getEvents(currentDate)}
        startScrollDateTime={dayjs(getCurrentTime())
          .subtract(2, 'hour')
          .format('YYYY-MM-DD HH:mm:ss')}
        getCurrentTime={getCurrentTime}
      />
    </Stack>
  );
}

export const timezone: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
