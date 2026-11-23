import { ScheduleEventData, ScheduleResourceData, ScheduleResourceGroup } from '@mantine/schedule';

export const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Tokyo' },
  { id: 'paris', label: 'Paris' },
  { id: 'london', label: 'London' },
];

export const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['london'] },
];

export const events: ScheduleEventData[] = [
  {
    id: 'workshop',
    title: 'Design workshop',
    resourceId: 'tokyo',
    start: '2026-10-27 09:00:00',
    end: '2026-10-29 17:00:00',
    color: 'blue',
  },
  {
    id: 'planning',
    title: 'Planning',
    resourceId: 'paris',
    start: '2026-10-28 09:00:00',
    end: '2026-10-28 10:00:00',
    color: 'teal',
  },
  {
    id: 'interview',
    title: 'Interview',
    resourceId: 'paris',
    start: '2026-10-28 11:00:00',
    end: '2026-10-28 11:30:00',
    color: 'grape',
  },
  {
    id: 'review',
    title: 'Review',
    resourceId: 'paris',
    start: '2026-10-28 15:00:00',
    end: '2026-10-28 16:00:00',
    color: 'orange',
  },
  {
    id: 'conference',
    title: 'Conference',
    resourceId: 'london',
    start: '2026-10-30 09:00:00',
    end: '2026-11-02 17:00:00',
    color: 'violet',
  },
];

export const dataCode = `
import { ScheduleEventData, ScheduleResourceData, ScheduleResourceGroup } from '@mantine/schedule';

export const resources: ScheduleResourceData[] = ${JSON.stringify(resources, null, 2)};

export const groups: ScheduleResourceGroup[] = ${JSON.stringify(groups, null, 2)};

export const events: ScheduleEventData[] = ${JSON.stringify(events, null, 2)};
`;
