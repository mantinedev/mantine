import { Frontmatter } from '@/types';

export const MDX_SCHEDULE_DATA: Record<string, Frontmatter> = {
  GettingStartedSchedule: {
    title: 'Getting started',
    description: 'Get started with @mantine/schedule package',
    package: '@mantine/schedule',
    license: 'MIT',
    slug: '/schedule/getting-started',
    docs: 'schedule/getting-started.mdx',
    hideInSearch: true,
  },

  DayView: {
    title: 'DayView',
    package: '@mantine/schedule',
    slug: '/schedule/day-view',
    description: 'Standalone schedule day view component',
    props: ['DayView'],
    styles: ['DayView'],
    source: '@mantine/schedule/src/components/DayView/DayView.tsx',
    docs: 'schedule/day-view.mdx',
    searchTags: 'calendar, agenda, appointments, events, planner, timetable',
  },

  MonthView: {
    title: 'MonthView',
    package: '@mantine/schedule',
    slug: '/schedule/month-view',
    description: 'Standalone schedule month view component',
    props: ['MonthView'],
    styles: ['MonthView'],
    source: '@mantine/schedule/src/components/MonthView/MonthView.tsx',
    docs: 'schedule/month-view.mdx',
    searchTags: 'calendar, agenda, appointments, events, planner, timetable',
  },

  WeekView: {
    title: 'WeekView',
    package: '@mantine/schedule',
    slug: '/schedule/week-view',
    description: 'Standalone schedule week view component',
    props: ['WeekView'],
    styles: ['WeekView'],
    source: '@mantine/schedule/src/components/WeekView/WeekView.tsx',
    docs: 'schedule/week-view.mdx',
    searchTags: 'calendar, agenda, appointments, events, planner, timetable',
  },

  YearView: {
    title: 'YearView',
    package: '@mantine/schedule',
    slug: '/schedule/year-view',
    description: 'Standalone schedule year view component',
    props: ['YearView'],
    styles: ['YearView'],
    source: '@mantine/schedule/src/components/YearView/YearView.tsx',
    docs: 'schedule/year-view.mdx',
    searchTags: 'calendar, agenda, appointments, events, planner, timetable',
  },

  MobileMonthView: {
    title: 'MobileMonthView',
    package: '@mantine/schedule',
    slug: '/schedule/mobile-month-view',
    description: 'Mobile-optimized schedule month view component',
    props: ['MobileMonthView'],
    styles: ['MobileMonthView'],
    source: '@mantine/schedule/src/components/MobileMonthView/MobileMonthView.tsx',
    docs: 'schedule/mobile-month-view.mdx',
    searchTags: 'calendar, agenda, appointments, events, planner, timetable',
  },

  Schedule: {
    title: 'Schedule',
    package: '@mantine/schedule',
    slug: '/schedule/schedule',
    description: 'Schedule component with day, week, month and year views',
    props: ['Schedule'],
    styles: ['Schedule'],
    source: '@mantine/schedule/src/components/Schedule/Schedule.tsx',
    docs: 'schedule/schedule.mdx',
    searchTags:
      'calendar, agenda, appointments, events, planner, timetable, booking, meetings, big calendar, scheduler',
  },
  ResourcesDayView: {
    title: 'ResourcesDayView',
    package: '@mantine/schedule',
    slug: '/schedule/resources-day-view',
    description: 'Day view with resource columns for scheduling across resources',
    props: ['ResourcesDayView'],
    styles: ['ResourcesDayView'],
    source: '@mantine/schedule/src/components/ResourcesDayView/ResourcesDayView.tsx',
    docs: 'schedule/resources-day-view.mdx',
  },

  ResourcesWeekView: {
    title: 'ResourcesWeekView',
    package: '@mantine/schedule',
    slug: '/schedule/resources-week-view',
    description: 'Week view with resource rows for scheduling across resources',
    props: ['ResourcesWeekView'],
    styles: ['ResourcesWeekView'],
    source: '@mantine/schedule/src/components/ResourcesWeekView/ResourcesWeekView.tsx',
    docs: 'schedule/resources-week-view.mdx',
  },

  ResourcesMonthView: {
    title: 'ResourcesMonthView',
    package: '@mantine/schedule',
    slug: '/schedule/resources-month-view',
    description: 'Month view with resource lanes for scheduling across resources',
    props: ['ResourcesMonthView'],
    styles: ['ResourcesMonthView'],
    source: '@mantine/schedule/src/components/ResourcesMonthView/ResourcesMonthView.tsx',
    docs: 'schedule/resources-month-view.mdx',
  },

  ResourcesSchedule: {
    title: 'ResourcesSchedule',
    package: '@mantine/schedule',
    slug: '/schedule/resources-schedule',
    description: 'Schedule wrapper component that combines resource day, week and month views',
    props: ['ResourcesSchedule'],
    styles: ['ResourcesSchedule'],
    source: '@mantine/schedule/src/components/ResourcesSchedule/ResourcesSchedule.tsx',
    docs: 'schedule/resources-schedule.mdx',
  },

  AgendaView: {
    title: 'AgendaView',
    package: '@mantine/schedule',
    slug: '/schedule/agenda-view',
    description: 'Vertical list view of events grouped by date',
    props: ['AgendaView'],
    styles: ['AgendaView'],
    source: '@mantine/schedule/src/components/AgendaView/AgendaView.tsx',
    docs: 'schedule/agenda-view.mdx',
  },

  RecurringEventsSchedule: {
    title: 'Recurring events',
    package: '@mantine/schedule',
    slug: '/schedule/recurring-events',
    description: 'Recurring events guide for @mantine/schedule',
    docs: 'schedule/recurring-events.mdx',
    searchTags: 'calendar, recurring, rrule, repeat, recurrence, repeating events',
  },

  ScheduleEventsData: {
    title: 'Events data',
    package: '@mantine/schedule',
    slug: '/schedule/events-data',
    description: 'Event data shapes and callback payloads for @mantine/schedule',
    docs: 'schedule/events-data.mdx',
    searchTags:
      'event, ScheduleEventData, ScheduleEventBase, ScheduleSingleEventData, ScheduleRecurringSeriesEventData, ScheduleRecurringOverrideEventData, EventPayload, payload, recurringInstance, onEventDrop, onEventClick, onEventResize, onTimeSlotClick, onSlotDragEnd, callbacks, types',
  },
};
