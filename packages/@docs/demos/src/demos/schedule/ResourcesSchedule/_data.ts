import dayjs from 'dayjs';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

export const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'new-york', label: 'New York' },
  { id: 'london', label: 'London' },
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
    resourceId: 'tokyo',
  },
  {
    id: 3,
    title: 'Client Call',
    start: `${today} 09:30:00`,
    end: `${today} 10:30:00`,
    color: 'violet',
    resourceId: 'paris',
  },
  {
    id: 4,
    title: 'Design Review',
    start: `${tomorrow} 13:00:00`,
    end: `${tomorrow} 14:00:00`,
    color: 'orange',
    resourceId: 'paris',
  },
  {
    id: 5,
    title: '1:1 Meeting',
    start: `${today} 11:00:00`,
    end: `${today} 11:30:00`,
    color: 'cyan',
    resourceId: 'new-york',
  },
  {
    id: 6,
    title: 'Workshop',
    start: `${nextWeek} 14:00:00`,
    end: `${nextWeek} 16:00:00`,
    color: 'pink',
    resourceId: 'new-york',
  },
  {
    id: 7,
    title: 'Architecture Review',
    start: `${today} 10:00:00`,
    end: `${today} 11:00:00`,
    color: 'red',
    resourceId: 'london',
  },
  {
    id: 8,
    title: 'Retrospective',
    start: `${tomorrow} 15:00:00`,
    end: `${tomorrow} 16:00:00`,
    color: 'grape',
    resourceId: 'london',
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
  { id: 'london', label: 'London' },
];

const events = [
  { id: 1, title: 'Team Standup', start: \`\${today} 09:00:00\`, end: \`\${today} 09:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 10:00:00\`, end: \`\${today} 11:30:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Client Call', start: \`\${today} 09:30:00\`, end: \`\${today} 10:30:00\`, color: 'violet', resourceId: 'paris' },
  { id: 4, title: 'Design Review', start: \`\${tomorrow} 13:00:00\`, end: \`\${tomorrow} 14:00:00\`, color: 'orange', resourceId: 'paris' },
  { id: 5, title: '1:1 Meeting', start: \`\${today} 11:00:00\`, end: \`\${today} 11:30:00\`, color: 'cyan', resourceId: 'new-york' },
  { id: 6, title: 'Workshop', start: \`\${nextWeek} 14:00:00\`, end: \`\${nextWeek} 16:00:00\`, color: 'pink', resourceId: 'new-york' },
  { id: 7, title: 'Architecture Review', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'red', resourceId: 'london' },
  { id: 8, title: 'Retrospective', start: \`\${tomorrow} 15:00:00\`, end: \`\${tomorrow} 16:00:00\`, color: 'grape', resourceId: 'london' },
];
`;
