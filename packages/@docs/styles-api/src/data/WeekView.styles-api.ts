import type { WeekViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const WeekViewStylesApi: StylesApiData<WeekViewFactory> = {
  selectors: {
    weekView: 'Root element',
    weekViewRoot: 'Week view root container',
    weekViewHeader: 'Header row with day labels',
    weekViewInner: 'Inner container',
    weekViewAllDaySlotsEvents: 'All-day events container',
    weekViewAllDaySlots: 'All-day slots container',
    weekViewAllDaySlotsList: 'List of all-day slots',
    weekViewAllDaySlot: 'Individual all-day slot',
    weekViewAllDaySlotsLabel: 'All-day slots label',
    weekViewScrollArea: 'Scroll area for time slots',
    weekViewCorner: 'Top-left corner element',
    weekViewSlotLabels: 'Container for slot labels',
    weekViewSlotLabel: 'Individual slot label',
    weekViewDayLabel: 'Day label element',
    weekViewDayWeekday: 'Weekday label',
    weekViewDay: 'Day column',
    weekViewDayNumber: 'Day number in header',
    weekViewDaySlot: 'Individual day time slot',
    weekViewDaySlots: 'Container for day slots',
    weekViewWeekLabel: 'Week label',
    weekViewWeekNumber: 'Week number indicator',
    header: 'Header container, part of ScheduleHeader',
    headerControl: 'Header control element, part of ScheduleHeader',
    viewSelect: 'View select element, part of ScheduleHeader',
    monthYearSelectTarget: 'Month/year select target button, part of MonthYearSelect',
    monthYearSelectDropdown: 'Month/year select dropdown, part of MonthYearSelect',
    monthYearSelectControl: 'Month/year select control, part of MonthYearSelect',
    monthYearSelectList: 'Month/year select list, part of MonthYearSelect',
    monthYearSelectLabel: 'Month/year select label, part of MonthYearSelect',
    currentTimeIndicator: 'Current time indicator container, part of CurrentTimeIndicator',
    currentTimeIndicatorLine: 'Current time indicator line, part of CurrentTimeIndicator',
    currentTimeIndicatorThumb: 'Current time indicator thumb, part of CurrentTimeIndicator',
    currentTimeIndicatorTimeBubble:
      'Current time indicator time bubble, part of CurrentTimeIndicator',
  },

  vars: {
    weekView: {
      '--week-view-radius': 'Controls `border-radius` of the week view',
      '--week-view-slot-height': 'Controls `height` of 1-hour time slots',
      '--week-view-all-day-slots-height': 'Controls `height` of all-day slots section',
    },
  },

  modifiers: [
    { modifier: 'data-today', selector: 'weekViewDayLabel', condition: 'Day is today' },
    { modifier: 'data-weekend', selector: 'weekViewDay', condition: 'Day is a weekend day' },
    {
      modifier: 'data-highlight-today',
      selector: 'weekViewDay',
      condition: '`highlightToday="column"` and day is today',
    },
    {
      modifier: 'data-hour-start',
      selector: 'weekViewDaySlot',
      condition: 'Slot is at the start of an hour',
    },
    {
      modifier: 'data-business-hours',
      selector: 'weekViewDaySlot',
      condition: '`highlightBusinessHours` is true and slot is within business hours',
    },
    {
      modifier: 'data-non-business-hours',
      selector: 'weekViewDaySlot',
      condition: '`highlightBusinessHours` is true and slot is outside business hours',
    },
    { modifier: 'data-static', selector: 'weekView', condition: '`mode="static"` is set' },
  ],
};
