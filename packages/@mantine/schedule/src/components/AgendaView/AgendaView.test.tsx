import dayjs from 'dayjs';
import React from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { ScheduleEventData } from '../../types';
import { AgendaView, AgendaViewProps, AgendaViewStylesNames } from './AgendaView';

const testEvents: ScheduleEventData[] = [
  {
    id: '1',
    title: 'Event 1',
    start: '2025-11-05 10:00:00',
    end: '2025-11-05 11:00:00',
    color: 'red',
    payload: {},
  },
  {
    id: '2',
    title: 'Event 2',
    start: '2025-11-05 14:00:00',
    end: '2025-11-05 15:00:00',
    color: 'blue',
    payload: {},
  },
  {
    id: '3',
    title: 'Event 3',
    start: '2025-11-10 09:00:00',
    end: '2025-11-10 10:00:00',
    color: 'green',
    payload: {},
  },
  {
    id: '4',
    title: 'All Day Event',
    start: '2025-11-15 00:00:00',
    end: '2025-11-15 00:00:00',
    color: 'orange',
    payload: {},
  },
];

const defaultProps: AgendaViewProps = {
  rangeStart: '2025-11-01',
  rangeEnd: '2025-11-30',
  events: testEvents,
};

describe('@mantine/schedule/AgendaView', () => {
  tests.itSupportsSystemProps<AgendaViewProps, AgendaViewStylesNames>({
    component: AgendaView,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/schedule/AgendaView',
    stylesApiSelectors: [
      'agendaView',
      'agendaViewHeader',
      'agendaViewHeaderLabel',
      'agendaViewBody',
      'agendaViewDateGroup',
      'agendaViewDateHeader',
      'agendaViewEvent',
      'agendaViewEventBody',
      'agendaViewEventColor',
      'agendaViewEventTitle',
      'agendaViewEventTime',
    ],
  });

  it('renders events grouped by date', () => {
    render(<AgendaView {...defaultProps} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.getByText('Event 3')).toBeInTheDocument();
    expect(screen.getByText('All Day Event')).toBeInTheDocument();
  });

  it('renders date group headers', () => {
    const { container } = render(<AgendaView {...defaultProps} />);
    const dateHeaders = container.querySelectorAll('.mantine-AgendaView-agendaViewDateHeader');
    expect(dateHeaders.length).toBe(3);
  });

  it('renders time range for timed events', () => {
    render(<AgendaView {...defaultProps} />);
    expect(screen.getByText('10:00 – 11:00')).toBeInTheDocument();
    expect(screen.getByText('14:00 – 15:00')).toBeInTheDocument();
  });

  it('renders "All day" for all-day events', () => {
    render(<AgendaView {...defaultProps} />);
    expect(screen.getByText('All day')).toBeInTheDocument();
  });

  it('renders "All day" for standard all-day events with end at next midnight', () => {
    const allDayEvents: ScheduleEventData[] = [
      {
        id: 'allday-std',
        title: 'Standard All Day',
        start: '2025-11-10 00:00:00',
        end: '2025-11-11 00:00:00',
        color: 'red',
        payload: {},
      },
    ];
    render(
      <AgendaView rangeStart="2025-11-10" rangeEnd="2025-11-10" events={allDayEvents} />
    );
    expect(screen.getByText('All day')).toBeInTheDocument();
    expect(screen.queryByText('00:00 – 00:00')).not.toBeInTheDocument();
  });

  it('does not duplicate a one-day all-day event onto the next date', () => {
    const allDayEvents: ScheduleEventData[] = [
      {
        id: 'allday-1',
        title: 'All Day Meeting',
        start: '2025-11-10 00:00:00',
        end: '2025-11-11 00:00:00',
        color: 'red',
        payload: {},
      },
    ];
    const { container } = render(
      <AgendaView rangeStart="2025-11-10" rangeEnd="2025-11-11" events={allDayEvents} />
    );
    const dateHeaders = container.querySelectorAll('.mantine-AgendaView-agendaViewDateHeader');
    expect(dateHeaders).toHaveLength(1);
  });

  it('renders no events message when there are no events in range', () => {
    render(<AgendaView rangeStart="2025-12-01" rangeEnd="2025-12-31" events={testEvents} />);
    expect(screen.getByText('No events')).toBeInTheDocument();
  });

  it('supports custom noEvents label', () => {
    render(
      <AgendaView
        rangeStart="2025-12-01"
        rangeEnd="2025-12-31"
        events={testEvents}
        labels={{ noEvents: 'Nothing scheduled' }}
      />
    );
    expect(screen.getByText('Nothing scheduled')).toBeInTheDocument();
  });

  it('renders header with date range', () => {
    render(<AgendaView {...defaultProps} />);
    expect(screen.getByText(/November 1, 2025/)).toBeInTheDocument();
    expect(screen.getByText(/November 30, 2025/)).toBeInTheDocument();
  });

  it('calls onEventClick when event is clicked', async () => {
    const onEventClick = jest.fn();
    render(<AgendaView {...defaultProps} onEventClick={onEventClick} />);
    await userEvent.click(screen.getByText('Event 1'));
    expect(onEventClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: '1', title: 'Event 1' }),
      expect.anything()
    );
  });

  it('does not call onEventClick in static mode', async () => {
    const onEventClick = jest.fn();
    render(<AgendaView {...defaultProps} onEventClick={onEventClick} mode="static" />);
    await userEvent.click(screen.getByText('Event 1'));
    expect(onEventClick).not.toHaveBeenCalled();
  });

  it('filters events outside the range', () => {
    render(<AgendaView rangeStart="2025-11-05" rangeEnd="2025-11-05" events={testEvents} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
    expect(screen.queryByText('All Day Event')).not.toBeInTheDocument();
  });

  it('filters background events', () => {
    const eventsWithBg: ScheduleEventData[] = [
      ...testEvents,
      {
        id: '5',
        title: 'Background Event',
        start: '2025-11-05 09:00:00',
        end: '2025-11-05 17:00:00',
        color: 'gray',
        display: 'background',
        payload: {},
      },
    ];
    render(<AgendaView {...defaultProps} events={eventsWithBg} />);
    expect(screen.queryByText('Background Event')).not.toBeInTheDocument();
  });

  it('supports renderEvent callback', () => {
    const renderEvent = jest.fn((event, props) => (
      <button key={event.id} data-testid="custom-event">
        {event.title}
      </button>
    ));
    render(<AgendaView {...defaultProps} renderEvent={renderEvent} />);
    expect(screen.getAllByTestId('custom-event').length).toBeGreaterThan(0);
    expect(renderEvent).toHaveBeenCalled();
  });

  it('supports custom dateHeaderFormat', () => {
    render(<AgendaView {...defaultProps} dateHeaderFormat="D/MM/YYYY" />);
    expect(screen.getByText('5/11/2025')).toBeInTheDocument();
  });
});
