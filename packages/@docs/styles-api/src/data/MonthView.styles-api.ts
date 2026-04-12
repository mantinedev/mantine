import type { MonthViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const MonthViewStylesApi: StylesApiData<MonthViewFactory> = {
  selectors: {
    monthView: 'Root element',
    monthViewScrollArea: 'Scroll area wrapper',
    monthViewInner: 'Inner container',
    monthViewWeek: 'Week row',
    monthViewDay: 'Day cell',
    monthViewDayLabel: 'Day number label',
    monthViewWeekNumber: 'Week number indicator',
    monthViewWeekday: 'Weekday name cell',
    monthViewWeekdays: 'Weekdays row',
    monthViewWeekdaysCorner: 'Top-left corner in weekdays row',
    monthViewEvents: 'Events container in day cell',
    monthViewBackgroundEvent: 'Background event element',
    header: 'Header container, part of ScheduleHeader',
    headerControl: 'Header control element, part of ScheduleHeader',
    viewSelect: 'View select element, part of ScheduleHeader',
    monthYearSelectTarget: 'Month/year select target button, part of MonthYearSelect',
    monthYearSelectDropdown: 'Month/year select dropdown, part of MonthYearSelect',
    monthYearSelectControl: 'Month/year select control, part of MonthYearSelect',
    monthYearSelectList: 'Month/year select list, part of MonthYearSelect',
    monthYearSelectLabel: 'Month/year select label, part of MonthYearSelect',
    agendaView: 'AgendaView root element, shown when agenda is open',
    agendaViewHeader: 'AgendaView header container',
    agendaViewHeaderLabel: 'AgendaView date range label',
    agendaViewBody: 'AgendaView body container',
    agendaViewDateGroup: 'AgendaView date group container',
    agendaViewDateHeader: 'AgendaView date header text',
    agendaViewEvent: 'AgendaView event item button',
    agendaViewEventBody: 'AgendaView event body container',
    agendaViewEventColor: 'AgendaView event color indicator',
    agendaViewEventTitle: 'AgendaView event title text',
    agendaViewEventTime: 'AgendaView event time label',
    agendaViewNoEvents: 'AgendaView no events message',
  },

  vars: {
    monthView: {
      '--month-view-radius': 'Controls `border-radius` of the month view',
      '--month-view-max-events':
        'Maximum number of visible events per day before "+more" indicator',
    },
  },

  modifiers: [
    { modifier: 'data-today', selector: 'monthViewDay', condition: 'Day is today' },
    { modifier: 'data-weekend', selector: 'monthViewDay', condition: 'Day is a weekend day' },
    {
      modifier: 'data-outside',
      selector: 'monthViewDay',
      condition: 'Day is outside current month',
    },
    { modifier: 'data-static', selector: 'monthView', condition: '`mode="static"` is set' },
  ],
};
