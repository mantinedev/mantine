import dayjs from 'dayjs';
import { ScheduleEventData, WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const startOfWeek = dayjs().subtract(dayjs().day(), 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');
const twoDaysAfterStartOfWeek = dayjs(startOfWeek).add(2, 'day').format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${startOfWeek} 09:00:00`,
    end: `${startOfWeek} 09:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${dayAfterStartOfWeek} 10:00:00`,
    end: `${dayAfterStartOfWeek} 11:30:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Code Review',
    start: `${twoDaysAfterStartOfWeek} 14:00:00`,
    end: `${twoDaysAfterStartOfWeek} 15:00:00`,
    color: 'violet',
  },
];

const dataCode = `
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
`;

const code = `
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
`;

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

export const firstDayOfWeek: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
