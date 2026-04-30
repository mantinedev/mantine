import dayjs from 'dayjs';
import { ScheduleEventData } from '@mantine/schedule';

const thisMonth = dayjs().format('YYYY-MM');

export const regularEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Meeting',
    start: `${thisMonth}-05 09:00:00`,
    end: `${thisMonth}-05 10:00:00`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: `${thisMonth}-05 14:00:00`,
    end: `${thisMonth}-05 15:30:00`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: `${thisMonth}-10 00:00:00`,
    end: `${thisMonth}-12 00:00:00`,
    color: 'violet',
  },
  {
    id: 4,
    title: 'Lunch with Client',
    start: `${thisMonth}-15 12:00:00`,
    end: `${thisMonth}-15 13:30:00`,
    color: 'orange',
  },
  {
    id: 5,
    title: 'Sprint Planning',
    start: `${thisMonth}-15 15:00:00`,
    end: `${thisMonth}-15 17:00:00`,
    color: 'cyan',
  },
  {
    id: 6,
    title: 'Code Review',
    start: `${thisMonth}-20 10:00:00`,
    end: `${thisMonth}-20 11:00:00`,
    color: 'pink',
  },
  {
    id: 7,
    title: 'Workshop Day',
    start: `${thisMonth}-25 00:00:00`,
    end: `${thisMonth}-25 00:00:00`,
    color: 'yellow',
  },
];

export const dataCode = `
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
`;
