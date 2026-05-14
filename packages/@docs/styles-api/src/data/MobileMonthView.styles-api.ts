import type { MobileMonthViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const MobileMonthViewStylesApi: StylesApiData<MobileMonthViewFactory> = {
  selectors: {
    mobileMonthView: 'Root element',
    mobileMonthViewHeader: 'Header container with back button and month label',
    mobileMonthViewHeaderBackButton: 'Back button with year text',
    mobileMonthViewHeaderLabel: 'Month and year label in the header',
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
    mobileMonthViewEvent: 'Event item button',
    mobileMonthViewEventColor: 'Event color indicator',
    mobileMonthViewEventBody: 'Event body layout container',
    mobileMonthViewEventTitle: 'Event title text',
    mobileMonthViewEventTime: 'Event time label',
    mobileMonthViewNoEvents: 'No events message',
  },

  vars: {
    mobileMonthView: {
      '--mobile-month-view-radius': 'Controls border radius',
    },
  },

  modifiers: [],
};
