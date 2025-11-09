import { Frontmatter } from '@/types';

export const MDX_DATES_DATA: Record<string, Frontmatter> = {
  GettingStartedDates: {
    title: 'Getting started',
    description: 'Get started with @mantine/dates package',
    package: '@mantine/dates',
    license: 'MIT',
    slug: '/dates/getting-started',
    docs: 'dates/getting-started.mdx',
    hideInSearch: true,
  },

  Calendar: {
    title: 'Calendar',
    package: '@mantine/dates',
    slug: '/dates/calendar',
    description: 'Base component for custom date pickers',
    props: ['Calendar'],
    styles: ['Calendar'],
    source: '@mantine/dates/src/components/Calendar/Calendar.tsx',
    docs: 'dates/calendar.mdx',
  },

  DateInput: {
    title: 'DateInput',
    package: '@mantine/dates',
    slug: '/dates/date-input',
    description: 'Free form date input',
    props: ['DateInput'],
    styles: ['DateInput'],
    source: '@mantine/dates/src/components/DateInput/DateInput.tsx',
    docs: 'dates/date-input.mdx',
  },

  DatePicker: {
    title: 'DatePicker',
    package: '@mantine/dates',
    slug: '/dates/date-picker',
    description: 'Inline date, multiple dates and dates range picker',
    props: ['DatePicker'],
    styles: ['DatePicker'],
    source: '@mantine/dates/src/components/DatePicker/DatePicker.tsx',
    docs: 'dates/date-picker.mdx',
  },

  DatePickerInput: {
    title: 'DatePickerInput',
    package: '@mantine/dates',
    slug: '/dates/date-picker-input',
    description: 'Date, multiple dates and dates range picker input',
    props: ['DatePickerInput'],
    styles: ['DatePickerInput'],
    source: '@mantine/dates/src/components/DatePickerInput/DatePickerInput.tsx',
    docs: 'dates/date-picker-input.mdx',
  },

  DateTimePicker: {
    title: 'DateTimePicker',
    package: '@mantine/dates',
    slug: '/dates/date-time-picker',
    props: ['DateTimePicker'],
    styles: ['DateTimePicker'],
    description: 'Capture datetime from the user',
    source: '@mantine/dates/src/components/DateTimePicker/DateTimePicker.tsx',
    docs: 'dates/date-time-picker.mdx',
  },

  MonthPicker: {
    title: 'MonthPicker',
    package: '@mantine/dates',
    slug: '/dates/month-picker',
    props: ['MonthPicker'],
    styles: ['MonthPicker'],
    description: 'Inline month, multiple months and months range picker',
    source: '@mantine/dates/src/components/MonthPicker/MonthPicker.tsx',
    docs: 'dates/month-picker.mdx',
  },

  MonthPickerInput: {
    title: 'MonthPickerInput',
    package: '@mantine/dates',
    slug: '/dates/month-picker-input',
    props: ['MonthPickerInput'],
    styles: ['MonthPickerInput'],
    description: 'Month, multiple months and months range picker input',
    source: '@mantine/dates/src/components/MonthPickerInput/MonthPickerInput.tsx',
    docs: 'dates/month-picker-input.mdx',
  },

  TimeInput: {
    title: 'TimeInput',
    package: '@mantine/dates',
    slug: '/dates/time-input',
    props: ['TimeInput'],
    styles: ['TimeInput'],
    description: 'Capture time from the user',
    source: '@mantine/dates/src/components/TimeInput/TimeInput.tsx',
    docs: 'dates/time-input.mdx',
  },

  YearPicker: {
    title: 'YearPicker',
    package: '@mantine/dates',
    slug: '/dates/year-picker',
    props: ['YearPicker'],
    styles: ['YearPicker'],
    description: 'Inline year, multiple years and years range picker',
    source: '@mantine/dates/src/components/YearPicker/YearPicker.tsx',
    docs: 'dates/year-picker.mdx',
  },

  YearPickerInput: {
    title: 'YearPickerInput',
    package: '@mantine/dates',
    slug: '/dates/year-picker-input',
    props: ['YearPickerInput'],
    styles: ['YearPickerInput'],
    description: 'Inline year, multiple years and years range picker',
    source: '@mantine/dates/src/components/YearPickerInput/YearPickerInput.tsx',
    docs: 'dates/year-picker-input.mdx',
  },

  TimePicker: {
    title: 'TimePicker',
    package: '@mantine/dates',
    slug: '/dates/time-picker',
    props: ['TimePicker'],
    styles: ['TimePicker'],
    description: 'Captures time value from the user',
    source: '@mantine/dates/src/components/TimePicker/TimePicker.tsx',
    docs: 'dates/time-picker.mdx',
  },

  TimeGrid: {
    title: 'TimeGrid',
    package: '@mantine/dates',
    slug: '/dates/time-grid',
    props: ['TimeGrid'],
    styles: ['TimeGrid'],
    description: 'Captures time value from the user with a predefined set of options',
    source: '@mantine/dates/src/components/TimeGrid/TimeGrid.tsx',
    docs: 'dates/time-grid.mdx',
  },

  TimeValue: {
    title: 'TimeValue',
    package: '@mantine/dates',
    slug: '/dates/time-value',
    props: ['TimeValue'],
    description: 'Display a formatted time value',
    source: '@mantine/dates/src/components/TimeValue/TimeValue.tsx',
    docs: 'dates/time-value.mdx',
  },

  MiniCalendar: {
    title: 'MiniCalendar',
    package: '@mantine/dates',
    slug: '/dates/mini-calendar',
    props: ['MiniCalendar'],
    styles: ['MiniCalendar'],
    description: 'Compact calendar to display a small number of days in a row',
    source: '@mantine/dates/src/components/MiniCalendar/MiniCalendar.tsx',
    docs: 'dates/mini-calendar.mdx',
  },
};
