import type { ResourcesWeekViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const ResourcesWeekViewStylesApi: StylesApiData<ResourcesWeekViewFactory> = {
  selectors: {
    resourcesWeekView: 'Root element',
    resourcesWeekViewRoot: 'Root container wrapping scroll area',
    resourcesWeekViewInner: 'Inner container wrapping header rows and resource rows',
    resourcesWeekViewHeaderRows: 'Container for header rows (corner, day labels, time labels)',
    resourcesWeekViewHeaderContent: 'Container for day labels and time labels rows',
    resourcesWeekViewDayLabelsRow: 'Row containing day labels',
    resourcesWeekViewDayLabel: 'Individual day label element',
    resourcesWeekViewTimeLabelsRow: 'Row containing time labels',
    resourcesWeekViewScrollArea: 'Scroll area component',
    resourcesWeekViewCorner: 'Top-left corner element',
    resourcesWeekViewTimeLabel: 'Individual time label element',
    resourcesWeekViewResourceLabel: 'Resource label element',
    resourcesWeekViewRow: 'Resource row element',
    resourcesWeekViewRowSlot: 'Individual time slot element',
    resourcesWeekViewRowSlots: 'Container for all slots in a row',
    resourcesWeekViewBackgroundEvent: 'Background event element',
    resourcesWeekViewAllDayEvent: 'All-day event element',
    resourcesWeekViewCurrentTimeIndicator: 'Current time indicator container',
    resourcesWeekViewCurrentTimeIndicatorLine: 'Current time indicator line',
    resourcesWeekViewCurrentTimeIndicatorThumb: 'Current time indicator thumb',
    resourcesWeekViewCurrentTimeIndicatorTimeBubble: 'Current time indicator time bubble',
    resourcesWeekViewEventWrapper: 'Event wrapper element',
    resourcesWeekViewResizeHandle: 'Event resize handle element',
    resourcesWeekViewGroupColumn: 'Group label column element',
    resourcesWeekViewGroupColumnEmpty: 'Empty group column cell for ungrouped resources',
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
    resourcesWeekView: {
      '--resources-week-view-radius': 'Controls `border-radius` of the view',
      '--resources-week-view-slot-width': 'Controls `width` of each time slot column',
      '--resources-week-view-row-height': 'Controls `height` of each resource row',
      '--resources-week-view-group-label-width': 'Controls `width` of the group label column',
    },
  },

  modifiers: [
    {
      modifier: 'data-hour-start',
      selector: 'resourcesWeekViewRowSlot',
      condition: 'Slot is at the start of an hour',
    },
    {
      modifier: 'data-business-hours',
      selector: 'resourcesWeekViewRowSlot',
      condition: '`highlightBusinessHours` is true and slot is within business hours',
    },
    {
      modifier: 'data-non-business-hours',
      selector: 'resourcesWeekViewRowSlot',
      condition: '`highlightBusinessHours` is true and slot is outside business hours',
    },
    {
      modifier: 'data-drop-target',
      selector: 'resourcesWeekViewRowSlot',
      condition: 'Slot is the current drag drop target',
    },
    {
      modifier: 'data-drag-selected',
      selector: 'resourcesWeekViewRowSlot',
      condition: 'Slot is selected during drag-to-select',
    },
    {
      modifier: 'data-static',
      selector: 'resourcesWeekView',
      condition: '`mode="static"` is set',
    },
    {
      modifier: 'data-scrolled',
      selector: 'resourcesWeekViewTimeLabelsRow',
      condition: 'Scroll area is scrolled vertically',
    },
    {
      modifier: 'data-scrolled-x',
      selector: 'resourcesWeekViewResourceLabel',
      condition: 'Scroll area is scrolled horizontally',
    },
    {
      modifier: 'data-today',
      selector: 'resourcesWeekViewDayLabel',
      condition: 'Day label represents today and `highlightToday` is true',
    },
    {
      modifier: 'data-weekend',
      selector: 'resourcesWeekViewDayLabel',
      condition: 'Day label represents a weekend day',
    },
  ],
};
