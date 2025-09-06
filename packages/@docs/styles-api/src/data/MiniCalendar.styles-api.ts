import type { MiniCalendarFactory } from '@mantine/dates';
import type { StylesApiData } from '../types';

export const MiniCalendarStylesApi: StylesApiData<MiniCalendarFactory> = {
  selectors: {
    root: 'Root element',
    control: 'Button in the dropdown which is used to select hours/minutes/seconds/am-pm',
    days: 'Days container',
    day: 'Single day element',
    dayMonth: 'Day element in month view',
    dayNumber: 'Day number element',
  },

  vars: {
    root: {
      '--mini-calendar-font-size': 'Controls size of all elements (based on em units)',
    },
  },

  modifiers: [
    {
      selector: 'control',
      modifier: 'disabled',
      condition: 'Next/previous range is after `maxDate` or before `minDate`',
    },
    {
      selector: 'control',
      modifier: 'direction',
      value: '`previous` or `next`',
    },
    {
      selector: 'day',
      modifier: 'selected',
      condition: 'The day matches the `value`',
    },
    {
      selector: 'day',
      modifier: 'disabled',
      condition: 'The day is before `minDate` or after `maxDate`',
    },
  ],
};
