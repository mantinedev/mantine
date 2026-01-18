import type { DayViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const DayViewStylesApi: StylesApiData<DayViewFactory> = {
  selectors: {
    dayView: 'Root element',
    dayViewInner: 'Inner container wrapping slot labels and slots',
    dayViewAllDay: 'All-day events container',
    dayViewAllDayEvents: 'All-day events wrapper',
    dayViewSlot: 'Individual time slot element',
    dayViewSlots: 'Container for all slots',
    dayViewTimeSlots: 'Container for time slots (excludes all-day)',
    dayViewSlotLabel: 'Time slot label element',
    dayViewSlotLabels: 'Container for all slot labels',
    header: 'Header container, part of ScheduleHeader',
    headerControl: 'Header control element, part of ScheduleHeader',
    event: 'Event element, part of ScheduleEvent',
    eventBody: 'Event body element, part of ScheduleEvent',
    moreEvents: 'More events element, part of MoreEvents',
    timeIndicator: 'Current time indicator line, part of CurrentTimeIndicator',
    timeBubble: 'Current time bubble, part of CurrentTimeIndicator',
  },

  vars: {
    dayView: {
      '--day-view-radius': 'Controls `border-radius` of the day view',
      '--day-view-slot-height': 'Controls `height` of 1-hour time slots',
      '--day-view-all-day-slot-height': 'Controls `height` of the all-day slot',
    },
  },

  modifiers: [
    { modifier: 'data-hour-start', selector: 'dayViewSlot', condition: 'Slot is at the start of an hour' },
    { modifier: 'data-business-hours', selector: 'dayViewSlot', condition: '`highlightBusinessHours` is true and slot is within business hours' },
    { modifier: 'data-non-business-hours', selector: 'dayViewSlot', condition: '`highlightBusinessHours` is true and slot is outside business hours' },
    { modifier: 'data-drop-target', selector: 'dayViewSlot', condition: 'Slot is the current drag drop target' },
    { modifier: 'data-static', selector: 'dayView', condition: '`mode="static"` is set' },
    { modifier: 'data-all-day', selector: 'dayViewSlotLabel', condition: 'Label is for all-day slot' },
  ],
};
