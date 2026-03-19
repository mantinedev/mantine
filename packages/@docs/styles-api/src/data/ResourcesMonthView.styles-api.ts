import type { ResourcesMonthViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const ResourcesMonthViewStylesApi: StylesApiData<ResourcesMonthViewFactory> = {
  selectors: {
    resourcesMonthView: 'Root element',
    resourcesMonthViewRoot: 'Root container wrapping scroll area',
    resourcesMonthViewScrollArea: 'Scroll area component',
    resourcesMonthViewDayLabelsRow: 'Row containing day labels',
    resourcesMonthViewCorner: 'Top-left corner element',
    resourcesMonthViewDayLabel: 'Individual day label element',
    resourcesMonthViewDayLabelWeekday: 'Weekday text inside day label',
    resourcesMonthViewDayLabelNumber: 'Day number inside day label',
    resourcesMonthViewRow: 'Resource row element',
    resourcesMonthViewResourceLabel: 'Resource label element',
    resourcesMonthViewRowSlots: 'Container for all day cells in a row',
    resourcesMonthViewCell: 'Individual day cell element',
    resourcesMonthViewInner: 'Inner container wrapping day labels and rows',
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
    resourcesMonthView: {
      '--resources-month-view-radius': 'Controls `border-radius` of the view',
      '--resources-month-view-day-width': 'Controls `width` of each day column',
      '--resources-month-view-row-height': 'Controls `height` of each resource row',
    },
  },

  modifiers: [
    {
      modifier: 'data-weekend',
      selector: 'resourcesMonthViewDayLabel',
      condition: 'Day label represents a weekend day',
    },
    {
      modifier: 'data-today',
      selector: 'resourcesMonthViewDayLabel',
      condition: 'Day label represents today and `highlightToday` is true',
    },
    {
      modifier: 'data-weekend',
      selector: 'resourcesMonthViewCell',
      condition: 'Cell represents a weekend day',
    },
    {
      modifier: 'data-drop-target',
      selector: 'resourcesMonthViewCell',
      condition: 'Cell is the current drag drop target',
    },
    {
      modifier: 'data-drag-selected',
      selector: 'resourcesMonthViewCell',
      condition: 'Cell is selected during drag-to-select',
    },
    {
      modifier: 'data-static',
      selector: 'resourcesMonthViewCell',
      condition: '`mode="static"` is set',
    },
    {
      modifier: 'data-static',
      selector: 'resourcesMonthView',
      condition: '`mode="static"` is set',
    },
  ],
};
