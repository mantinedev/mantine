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
  },
};
