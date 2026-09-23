import dayjs from 'dayjs';
import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { ResourcesWeekView, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { resources } from './_data';

const day1 = dayjs().format('YYYY-MM-DD');
const day2 = dayjs().add(1, 'day').format('YYYY-MM-DD');
const day3 = dayjs().add(2, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Design workshop',
    start: `${day1} 08:00:00`,
    end: `${day1} 12:00:00`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Client onboarding',
    start: `${day1} 10:00:00`,
    end: `${day1} 14:00:00`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Hackathon',
    start: `${day1} 13:00:00`,
    end: `${day1} 19:00:00`,
    color: 'pink',
    resourceId: 'london',
  },
  {
    id: 4,
    title: 'Sprint review',
    start: `${day2} 09:00:00`,
    end: `${day2} 11:00:00`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Strategy offsite',
    start: `${day2} 14:00:00`,
    end: `${day2} 18:00:00`,
    color: 'green',
    resourceId: 'tokyo',
  },
  {
    id: 6,
    title: 'Security audit',
    start: `${day2} 08:00:00`,
    end: `${day2} 13:00:00`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 7,
    title: 'Onboarding training',
    start: `${day3} 10:00:00`,
    end: `${day3} 16:00:00`,
    color: 'grape',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Interviews',
    start: `${day3} 12:00:00`,
    end: `${day3} 14:00:00`,
    color: 'teal',
    resourceId: 'new-york',
  },
];

const dataCode = `import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const day1 = dayjs().format('YYYY-MM-DD');
const day2 = dayjs().add(1, 'day').format('YYYY-MM-DD');
const day3 = dayjs().add(2, 'day').format('YYYY-MM-DD');

export const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'london', label: 'Meeting room: London' },
];

// Events last between 2 and 6 hours
export const events: ScheduleEventData[] = [
  { id: 1, title: 'Design workshop', start: \`\${day1} 08:00:00\`, end: \`\${day1} 12:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Client onboarding', start: \`\${day1} 10:00:00\`, end: \`\${day1} 14:00:00\`, color: 'violet', resourceId: 'paris' },
  { id: 3, title: 'Hackathon', start: \`\${day1} 13:00:00\`, end: \`\${day1} 19:00:00\`, color: 'pink', resourceId: 'london' },
  { id: 4, title: 'Sprint review', start: \`\${day2} 09:00:00\`, end: \`\${day2} 11:00:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 5, title: 'Strategy offsite', start: \`\${day2} 14:00:00\`, end: \`\${day2} 18:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 6, title: 'Security audit', start: \`\${day2} 08:00:00\`, end: \`\${day2} 13:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 7, title: 'Onboarding training', start: \`\${day3} 10:00:00\`, end: \`\${day3} 16:00:00\`, color: 'grape', resourceId: 'london' },
  { id: 8, title: 'Interviews', start: \`\${day3} 12:00:00\`, end: \`\${day3} 14:00:00\`, color: 'teal', resourceId: 'new-york' },
];`;

const code = `
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
`;

function Demo() {
  const [date, setDate] = useState(day1);
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
        startScrollDateTime={`${day1} 08:00:00`}
      />
    </Stack>
  );
}

export const multiHourIntervals: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
