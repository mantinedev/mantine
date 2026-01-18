import dayjs from 'dayjs';
import { ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const dayAfterTomorrow = dayjs().add(2, 'day').format('YYYY-MM-DD');

export const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Morning Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Lunch Break',
    start: `${today} 12:00:00`,
    end: `${today} 13:00:00`,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Code Review',
    start: `${tomorrow} 14:00:00`,
    end: `${tomorrow} 15:00:00`,
    color: 'violet',
  },
  {
    id: 5,
    title: 'Client Call',
    start: `${tomorrow} 15:30:00`,
    end: `${tomorrow} 16:30:00`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'Project Planning',
    start: `${dayAfterTomorrow} 10:00:00`,
    end: `${dayAfterTomorrow} 12:00:00`,
    color: 'pink',
  },
  {
    id: 7,
    title: 'All Day Conference',
    start: `${today} 00:00:00`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

export const overlappingEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Workshop Session 1',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Workshop Session 2',
    start: `${today} 11:00:00`,
    end: `${today} 12:30:00`,
    color: 'violet',
  },
  {
    id: 3,
    title: 'Workshop Session 3',
    start: `${today} 11:30:00`,
    end: `${today} 13:00:00`,
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Tomorrow Event 1',
    start: `${tomorrow} 09:00:00`,
    end: `${tomorrow} 10:30:00`,
    color: 'green',
  },
  {
    id: 5,
    title: 'Tomorrow Event 2',
    start: `${tomorrow} 09:30:00`,
    end: `${tomorrow} 11:00:00`,
    color: 'orange',
  },
];

export const businessEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Early Morning Meeting',
    start: `${today} 08:30:00`,
    end: `${today} 09:00:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Business Hours Task 1',
    start: `${today} 10:00:00`,
    end: `${today} 11:00:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Business Hours Task 2',
    start: `${tomorrow} 14:00:00`,
    end: `${tomorrow} 15:00:00`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Evening Sync',
    start: `${tomorrow} 17:30:00`,
    end: `${tomorrow} 18:00:00`,
    color: 'orange',
  },
];

export const dataCode = `
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

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
    title: 'Code Review',
    start: \`\${tomorrow} 14:00:00\`,
    end: \`\${tomorrow} 15:00:00\`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'All Day Conference',
    start: \`\${today} 00:00:00\`,
    end: dayjs(today).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];
`;
