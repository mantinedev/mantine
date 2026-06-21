import type { AgendaViewFactory } from '@mantine/schedule';
import type { StylesApiData } from '../types';

export const AgendaViewStylesApi: StylesApiData<AgendaViewFactory> = {
  selectors: {
    agendaView: 'Root element',
    agendaViewHeader: 'Header container with date range and close button',
    agendaViewHeaderLabel: 'Date range label in the header',
    agendaViewBody: 'Body container for date groups',
    agendaViewDateGroup: 'Date group container',
    agendaViewDateHeader: 'Date header text within a group',
    agendaViewEvent: 'Event item button',
    agendaViewEventBody: 'Event body layout container',
    agendaViewEventColor: 'Event color indicator',
    agendaViewEventTitle: 'Event title text',
    agendaViewEventTime: 'Event time label',
    agendaViewNoEvents: 'No events message',
  },

  vars: {
    agendaView: {
      '--agenda-view-radius': 'Controls border radius',
    },
  },

  modifiers: [],
};
