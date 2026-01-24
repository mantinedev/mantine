import dayjs from 'dayjs';
import { ScheduleEventData } from '@mantine/schedule';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
const dayAfterStartOfWeek = dayjs(startOfWeek).add(1, 'day').format('YYYY-MM-DD');
const dayAfterDayAfterStartOfWeek = dayjs(startOfWeek).add(2, 'day').format('YYYY-MM-DD');

export const regularEvents: ScheduleEventData[] = [
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
    start: `${startOfWeek} 10:00:00`,
    end: `${startOfWeek} 11:30:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${startOfWeek} 12:00:00`,
    end: `${startOfWeek} 13:00:00`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: `${dayAfterStartOfWeek} 14:00:00`,
    end: `${dayAfterStartOfWeek} 15:00:00`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: `${dayAfterStartOfWeek} 15:30:00`,
    end: `${dayAfterStartOfWeek} 16:30:00`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'Project Planning',
    start: `${dayAfterDayAfterStartOfWeek} 10:00:00`,
    end: `${dayAfterDayAfterStartOfWeek} 12:00:00`,
    color: 'pink',
  },
  {
    id: 7,
    title: 'All Day Conference',
    start: `${startOfWeek} 00:00:00`,
    end: dayjs(startOfWeek).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

export const overlappingEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Workshop Session 1',
    start: `${startOfWeek} 10:00:00`,
    end: `${startOfWeek} 11:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: `${startOfWeek} 11:00:00`,
    end: `${startOfWeek} 12:30:00`,
    color: 'violet',
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: `${startOfWeek} 11:30:00`,
    end: `${startOfWeek} 13:00:00`,
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Tomorrow Event 1',
    start: `${dayAfterStartOfWeek} 09:00:00`,
    end: `${dayAfterStartOfWeek} 10:30:00`,
    color: 'green',
  },
  {
    id: 5,
    title: 'Tomorrow Event 2',
    start: `${dayAfterStartOfWeek} 09:30:00`,
    end: `${dayAfterStartOfWeek} 11:00:00`,
    color: 'orange',
  },
];

export const businessEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Early Morning Meeting',
    start: `${startOfWeek} 08:30:00`,
    end: `${startOfWeek} 09:00:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Business Hours Task 1',
    start: `${startOfWeek} 10:00:00`,
    end: `${startOfWeek} 11:00:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Business Hours Task 2',
    start: `${dayAfterStartOfWeek} 14:00:00`,
    end: `${dayAfterStartOfWeek} 15:00:00`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Evening Sync',
    start: `${dayAfterStartOfWeek} 17:30:00`,
    end: `${dayAfterStartOfWeek} 18:00:00`,
    color: 'orange',
  },
];

export const dataCode = `
import dayjs from 'dayjs';

const startOfWeek = dayjs().startOf('week').add(2, 'day').format('YYYY-MM-DD');
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
`;
