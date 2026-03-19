import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

export const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
];

export const resourceEvents: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Team Standup',
    start: `${today} 09:00:00`,
    end: `${today} 09:30:00`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: `${today} 10:00:00`,
    end: `${today} 11:30:00`,
    color: 'green',
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: `${tomorrow} 13:00:00`,
    end: `${tomorrow} 14:00:00`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: `${tomorrow} 09:30:00`,
    end: `${tomorrow} 10:30:00`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: `${nextWeek} 14:00:00`,
    end: `${nextWeek} 16:00:00`,
    color: 'pink',
    resourceId: 'paris',
  },
];

export const dataCode = `
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
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
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
`;
