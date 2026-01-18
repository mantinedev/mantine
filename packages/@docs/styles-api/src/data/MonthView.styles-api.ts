import type { MonthViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const MonthViewStylesApi: StylesApiData<MonthViewFactory> = {
  selectors: {
    monthView: 'Root element',
    monthViewInner: 'Inner container',
    monthViewWeek: 'Week row',
    monthViewDay: 'Day cell',
    monthViewDayLabel: 'Day number label',
    monthViewWeekNumber: 'Week number indicator',
    monthViewWeekday: 'Weekday name cell',
    monthViewWeekdays: 'Weekdays row',
    monthViewWeekdaysCorner: 'Top-left corner in weekdays row',
    monthViewEvents: 'Events container in day cell',
    header: 'Header container, part of ScheduleHeader',
    headerControl: 'Header control element, part of ScheduleHeader',
  },

  vars: {
    monthView: {
      '--month-view-radius': 'Controls `border-radius` of the month view',
    },
  },

  modifiers: [
    { modifier: 'data-today', selector: 'monthViewDay', condition: 'Day is today' },
    { modifier: 'data-weekend', selector: 'monthViewDay', condition: 'Day is a weekend day' },
    { modifier: 'data-outside', selector: 'monthViewDay', condition: 'Day is outside current month' },
    { modifier: 'data-static', selector: 'monthView', condition: '`mode="static"` is set' },
  ],
};
