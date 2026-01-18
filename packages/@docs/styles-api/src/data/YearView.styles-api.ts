import type { YearViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const YearViewStylesApi: StylesApiData<YearViewFactory> = {
  selectors: {
    yearView: 'Root element',
    yearViewMonths: 'Container for all months',
    yearViewMonth: 'Individual month container',
    yearViewWeekday: 'Weekday name cell',
    yearViewDay: 'Day cell',
    yearViewWeek: 'Week row',
    yearViewWeekNumber: 'Week number indicator',
    yearViewWeekdays: 'Weekdays row',
    yearViewWeekdaysCorner: 'Top-left corner in weekdays row',
    yearViewMonthCaption: 'Month name label',
    yearViewQuarter: 'Quarter container (groups 3 months)',
    yearViewDayIndicators: 'Container for day event indicators',
    yearViewDayIndicator: 'Individual day event indicator',
    header: 'Header container, part of ScheduleHeader',
    headerControl: 'Header control element, part of ScheduleHeader',
  },

  vars: {
    yearView: {
      '--year-view-radius': 'Controls `border-radius` of the year view',
    },
  },

  modifiers: [
    { modifier: 'data-today', selector: 'yearViewDay', condition: 'Day is today' },
    { modifier: 'data-weekend', selector: 'yearViewDay', condition: 'Day is a weekend day' },
    { modifier: 'data-outside', selector: 'yearViewDay', condition: 'Day is outside current month' },
    { modifier: 'data-static', selector: 'yearView', condition: '`mode="static"` is set' },
  ],
};
