import type { ResourcesDayViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const ResourcesDayViewStylesApi: StylesApiData<ResourcesDayViewFactory> = {
  selectors: {
    resourcesDayView: 'Root element',
    resourcesDayViewRoot: 'Root container wrapping scroll area',
    resourcesDayViewInner: 'Inner container wrapping time labels and rows',
    resourcesDayViewTimeLabelsRow: 'Row containing time labels',
    resourcesDayViewScrollArea: 'Scroll area component',
    resourcesDayViewCorner: 'Top-left corner element',
    resourcesDayViewTimeLabel: 'Individual time label element',
    resourcesDayViewResourceLabel: 'Resource label element',
    resourcesDayViewRow: 'Resource row element',
    resourcesDayViewRowSlot: 'Individual time slot element',
    resourcesDayViewRowSlots: 'Container for all slots in a row',
    resourcesDayViewBackgroundEvent: 'Background event element',
    resourcesDayViewAllDayEvent: 'All-day event element',
    resourcesDayViewCurrentTimeIndicator: 'Current time indicator container',
    resourcesDayViewCurrentTimeIndicatorLine: 'Current time indicator line',
    resourcesDayViewCurrentTimeIndicatorThumb: 'Current time indicator thumb',
    resourcesDayViewCurrentTimeIndicatorTimeBubble: 'Current time indicator time bubble',
    resourcesDayViewEventWrapper: 'Event wrapper element',
    resourcesDayViewResizeHandle: 'Event resize handle element',
    resourcesDayViewGroupColumn: 'Group label column element',
    resourcesDayViewGroupColumnEmpty: 'Empty group column cell for ungrouped resources',
    moreEventsButton: 'More events button, part of MoreEvents',
    moreEventsList: 'More events list, part of MoreEvents',
    moreEventsDropdown: 'More events dropdown, part of MoreEvents',
    header: 'Header container, part of ScheduleHeader',
    headerControl: 'Header control element, part of ScheduleHeader',
    viewSelect: 'View select element, part of ScheduleHeader',
    monthYearSelectTarget: 'MonthYearSelect target button, part of ScheduleHeader',
    monthYearSelectDropdown: 'MonthYearSelect dropdown, part of ScheduleHeader',
    monthYearSelectControl: 'MonthYearSelect control, part of ScheduleHeader',
    monthYearSelectList: 'MonthYearSelect list, part of ScheduleHeader',
    monthYearSelectLabel: 'MonthYearSelect label, part of ScheduleHeader',
  },

  vars: {
    resourcesDayView: {
      '--resources-day-view-radius': 'Controls `border-radius` of the view',
      '--resources-day-view-slot-width': 'Controls `width` of each time slot column',
      '--resources-day-view-row-height': 'Controls `height` of each resource row',
      '--resources-day-view-group-label-width': 'Controls `width` of the group label column',
    },
  },

  modifiers: [
    {
      modifier: 'data-hour-start',
      selector: 'resourcesDayViewRowSlot',
      condition: 'Slot is at the start of an hour',
    },
    {
      modifier: 'data-business-hours',
      selector: 'resourcesDayViewRowSlot',
      condition: '`highlightBusinessHours` is true and slot is within business hours',
    },
    {
      modifier: 'data-non-business-hours',
      selector: 'resourcesDayViewRowSlot',
      condition: '`highlightBusinessHours` is true and slot is outside business hours',
    },
    {
      modifier: 'data-drop-target',
      selector: 'resourcesDayViewRowSlot',
      condition: 'Slot is the current drag drop target',
    },
    {
      modifier: 'data-drag-selected',
      selector: 'resourcesDayViewRowSlot',
      condition: 'Slot is selected during drag-to-select',
    },
    {
      modifier: 'data-static',
      selector: 'resourcesDayView',
      condition: '`mode="static"` is set',
    },
    {
      modifier: 'data-scrolled',
      selector: 'resourcesDayViewTimeLabelsRow',
      condition: 'Scroll area is scrolled vertically',
    },
    {
      modifier: 'data-scrolled-x',
      selector: 'resourcesDayViewResourceLabel',
      condition: 'Scroll area is scrolled horizontally',
    },
    {
      modifier: 'data-resizing',
      selector: 'resourcesDayView',
      condition: 'An event is being resized',
    },
    {
      modifier: 'data-resizing',
      selector: 'resourcesDayViewEventWrapper',
      condition: 'This event is being resized',
    },
    {
      modifier: 'data-edge',
      selector: 'resourcesDayViewResizeHandle',
      condition: "Set to 'start' or 'end' based on resize handle position",
    },
    {
      modifier: 'data-active',
      selector: 'resourcesDayViewResizeHandle',
      condition: 'Resize handle is actively being dragged',
    },
  ],
};
