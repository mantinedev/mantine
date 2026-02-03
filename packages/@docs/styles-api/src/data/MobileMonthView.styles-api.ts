import type { MobileMonthViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const MobileMonthViewStylesApi: StylesApiData<MobileMonthViewFactory> = {
  selectors: {
    mobileMonthView: 'Root element',
    mobileMonthViewCalendar: 'Calendar grid container',
    mobileMonthViewWeekdays: 'Weekdays row',
    mobileMonthViewWeekday: 'Individual weekday name',
    mobileMonthViewWeekdaysCorner: 'Weekdays corner (for week numbers)',
    mobileMonthViewWeek: 'Week row',
    mobileMonthViewWeekNumber: 'Week number button',
    mobileMonthViewDay: 'Day cell button',
    mobileMonthViewDayIndicators: 'Day indicators container',
    mobileMonthViewDayIndicator: 'Individual day indicator dot',
    mobileMonthViewEventsList: 'Events list container',
    mobileMonthViewEventsHeader: 'Events list header (selected date)',
    mobileMonthViewEventsScrollArea: 'Events scroll area',
    mobileMonthViewEvent: 'Event item container',
    mobileMonthViewEventTime: 'Event time label',
    mobileMonthViewEventColor: 'Event color indicator',
    mobileMonthViewNoEvents: 'No events message',
  },

  vars: {
    mobileMonthView: {
      '--mobile-month-view-radius': 'Controls border radius',
    },
  },

  modifiers: [],
};
