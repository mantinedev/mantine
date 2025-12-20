import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { toDateString } from '../../utils';
import { ScheduleProvider } from '../Schedule/Schedule.context';
import { DayView, DayViewProps, DayViewStylesNames } from './DayView';

const defaultProps: DayViewProps = {
  date: '2025-11-03',
  events: [
    {
      id: 1,
      title: 'Morning Standup',
      start: `2025-11-03 09:00:00`,
      end: `2025-11-03 09:30:00`,
      color: 'blue',
      payload: {},
    },
  ],
};

const allDayEvents = [
  {
    id: 1,
    title: 'All-day event 1',
    color: 'blue',
    start: '2025-11-03',
    end: '2025-11-04',
    payload: {},
  },
  {
    id: 2,
    title: 'All-day event 2',
    color: 'blue',
    start: '2025-11-03',
    end: '2025-11-04',
    payload: {},
  },
  {
    id: 3,
    title: 'All-day event 3',
    color: 'red',
    start: '2025-11-03',
    end: '2025-11-04',
    payload: {},
  },
];

describe('@mantine/schedule/DayView', () => {
  tests.itSupportsSystemProps<DayViewProps, DayViewStylesNames>({
    component: DayView,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    displayName: '@mantine/schedule/DayView',
    providerStylesApi: false,
    stylesApiSelectors: [
      'dayView',
      'dayViewAllDay',
      'dayViewAllDayEvents',
      'dayViewSlot',
      'dayViewSlots',
      'dayViewTimeSlots',
      'dayViewInner',
      'header',
      'headerControl',
      'viewSelect',
      'event',
      'eventInner',
    ],
  });

  it('renders day view for the given date', () => {
    const { container } = render(<DayView {...defaultProps} />);
    expect(screen.getByText('November 3, 2025')).toBeInTheDocument();
    // 97 slots: 96 intervals + all-day slot
    expect(container.querySelectorAll('.mantine-DayView-dayViewSlot')).toHaveLength(97);
  });

  it('supports custom intervalMinutes', () => {
    const { container } = render(<DayView {...defaultProps} intervalMinutes={60} />);
    // 25 slots: 24 intervals + all-day slot
    expect(container.querySelectorAll('.mantine-DayView-dayViewSlot')).toHaveLength(25);
  });

  it('supports custom startTime and endTime', () => {
    const { container } = render(
      <DayView {...defaultProps} startTime="08:00:00" endTime="12:00:00" intervalMinutes={60} />
    );
    // 5 slots: 4 intervals + all-day slot
    expect(container.querySelectorAll('.mantine-DayView-dayViewSlot')).toHaveLength(5);
  });

  it('supports locale (prop)', () => {
    render(<DayView {...defaultProps} locale="ru" />);
    expect(screen.getByText('ноябрь 3, 2025')).toBeInTheDocument();
  });

  it('supports locale (ScheduleProvider)', () => {
    render(
      <ScheduleProvider locale="ru">
        <DayView {...defaultProps} />
      </ScheduleProvider>
    );

    expect(screen.getByText('ноябрь 3, 2025')).toBeInTheDocument();
  });

  it('renders all-day slot based on withAllDaySlot prop', () => {
    const { container, rerender } = render(<DayView {...defaultProps} withAllDaySlot />);
    expect(
      container.querySelector('.mantine-DayView-dayViewSlot[data-all-day]')
    ).toBeInTheDocument();

    rerender(<DayView {...defaultProps} withAllDaySlot={false} />);
    expect(
      container.querySelector('.mantine-DayView-dayViewSlot[data-all-day]')
    ).not.toBeInTheDocument();
  });

  it('supports custom slotLabelFormat (dayjs string)', () => {
    render(<DayView {...defaultProps} slotLabelFormat="h:mm A" />);
    expect(screen.getByText('1:00 AM')).toBeInTheDocument();
  });

  it('supports custom slotLabelFormat (function)', () => {
    render(<DayView {...defaultProps} slotLabelFormat={(date) => `Time: ${date}`} />);
    expect(screen.getByText('Time: 2025-11-03 01:00:00')).toBeInTheDocument();
  });

  it('supports custom headerFormat (dayjs string)', () => {
    render(<DayView {...defaultProps} headerFormat="DD/MM/YYYY" />);
    expect(screen.getByText('03/11/2025')).toBeInTheDocument();
  });

  it('supports custom headerFormat (function)', () => {
    render(<DayView {...defaultProps} headerFormat={(date) => `Date: ${date}`} />);
    expect(screen.getByText('Date: 2025-11-03 00:00:00')).toBeInTheDocument();
  });

  it('displays current time indicator based on withCurrentTimeIndicator prop', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-03T10:30:00Z'));

    const { container, rerender } = render(<DayView {...defaultProps} withCurrentTimeIndicator />);
    expect(container.querySelector('.mantine-DayView-currentTimeIndicator')).toBeInTheDocument();

    rerender(<DayView {...defaultProps} withCurrentTimeIndicator={false} />);
    expect(
      container.querySelector('.mantine-DayView-currentTimeIndicator')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('displays time bubble in the current time indicator based on withCurrentTimeBubble prop', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-03 10:30:00'));

    const { container, rerender } = render(
      <DayView
        {...defaultProps}
        withCurrentTimeIndicator
        withCurrentTimeBubble
        slotLabelFormat="h:mm A"
      />
    );
    expect(
      container.querySelector('.mantine-DayView-currentTimeIndicatorTimeBubble')
    ).toHaveTextContent('10:30 AM');

    rerender(
      <DayView
        {...defaultProps}
        withCurrentTimeIndicator
        withCurrentTimeBubble={false}
        slotLabelFormat="h:mm A"
      />
    );
    expect(
      container.querySelector('.mantine-DayView-currentTimeIndicatorTimeBubble')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<DayView {...defaultProps} __staticSelector="TestDayView" />);
    expect(container.querySelector('.mantine-TestDayView-dayView')).toBeInTheDocument();
  });

  it('hides header when withHeader={false}', () => {
    const { container, rerender } = render(<DayView {...defaultProps} withHeader={false} />);
    expect(container.querySelector('.mantine-DayView-header')).not.toBeInTheDocument();

    rerender(<DayView {...defaultProps} withHeader />);
    expect(container.querySelector('.mantine-DayView-header')).toBeInTheDocument();
  });

  it('calls onDateChange when navigating with header controls', async () => {
    const spy = jest.fn();
    render(<DayView {...defaultProps} onDateChange={spy} />);

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-11-02')));

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalledWith(toDateString(dayjs('2025-11-04')));

    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalledWith(expect.any(String));
  });

  it('calls onViewChange when view button is clicked', async () => {
    const spy = jest.fn();
    render(<DayView {...defaultProps} onViewChange={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Switch to week view' }));
    expect(spy).toHaveBeenCalledWith('week');
  });

  it('supports previousControlProps, nextControlProps, todayControlProps and viewSelectProps props', () => {
    const { container } = render(
      <DayView
        {...defaultProps}
        previousControlProps={{ 'data-previous-prop': 'test' }}
        nextControlProps={{ 'data-next-prop': 'test' }}
        todayControlProps={{ 'data-today-prop': 'test' }}
        viewSelectProps={{ 'data-view-select-prop': 'test' }}
      />
    );

    expect(
      container.querySelector('button.mantine-DayView-headerControl[data-previous-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-DayView-headerControl[data-next-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('button.mantine-DayView-headerControl[data-today-prop]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-DayView-viewSelect[data-view-select-prop]')
    ).toBeInTheDocument();
  });

  it('renders given events', () => {
    render(
      <DayView
        {...defaultProps}
        events={[
          {
            id: 1,
            title: 'Test event 1',
            color: 'blue',
            start: `${defaultProps.date} 10:00:00`,
            end: `${defaultProps.date} 11:00:00`,
            payload: {},
          },
          {
            id: 2,
            title: 'Test event 2',
            color: 'blue',
            start: `${defaultProps.date} 13:00:00`,
            end: `${defaultProps.date} 14:00:00`,
            payload: {},
          },
        ]}
      />
    );

    expect(screen.getByText('Test event 1')).toBeInTheDocument();
    expect(screen.getByText('Test event 2')).toBeInTheDocument();
  });

  it('renders MoreEvents component when there are more than 2 all-day events', () => {
    render(
      <DayView
        {...defaultProps}
        events={[
          {
            id: 1,
            title: 'All-day event 1',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
          {
            id: 2,
            title: 'All-day event 2',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
          {
            id: 3,
            title: 'All-day event 3',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
        ]}
      />
    );

    expect(screen.getByRole('button', { name: /more/ })).toBeInTheDocument();
  });

  it('does not render MoreEvents when all-day events count is 2 or less', () => {
    render(
      <DayView
        {...defaultProps}
        events={[
          {
            id: 1,
            title: 'All-day event 1',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
          {
            id: 2,
            title: 'All-day event 2',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
        ]}
      />
    );

    expect(screen.queryByRole('button', { name: /more/ })).not.toBeInTheDocument();
  });

  it('MoreEvents shows correct count for multiple hidden all-day events', () => {
    const { container } = render(
      <DayView
        {...defaultProps}
        events={[
          {
            id: 1,
            title: 'All-day event 1',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
          {
            id: 2,
            title: 'All-day event 2',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
          {
            id: 3,
            title: 'All-day event 3',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
          {
            id: 4,
            title: 'All-day event 4',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
          {
            id: 5,
            title: 'All-day event 5',
            color: 'blue',
            start: '2025-11-03',
            end: '2025-11-04',
            payload: {},
          },
        ]}
      />
    );

    const allDayEventsArea = container.querySelector('.mantine-DayView-dayViewAllDayEvents');
    const moreButton = allDayEventsArea?.querySelector('button');

    expect(moreButton).toBeInTheDocument();
    expect(moreButton?.textContent).toMatch(/more|3/i);
  });

  it('MoreEvents receives correct events data', async () => {
    render(<DayView {...defaultProps} events={allDayEvents} />);
    await userEvent.click(screen.getByRole('button', { name: /more/ }));
    expect(screen.getByText('All-day event 3')).toBeInTheDocument();
  });

  it('passes props down to MoreEvents component with moreEventsProps', async () => {
    render(
      <DayView
        {...defaultProps}
        events={allDayEvents}
        moreEventsProps={{ dropdownType: 'modal', modalTitle: 'All-day events test' }}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /more/ }));
    expect(screen.getByRole('heading', { name: 'All-day events test' })).toBeInTheDocument();
  });

  it('supports renderEventBody prop', () => {
    render(
      <DayView
        {...defaultProps}
        events={[
          {
            id: 1,
            title: 'Test event',
            color: 'blue',
            start: `${defaultProps.date} 10:00:00`,
            end: `${defaultProps.date} 11:00:00`,
            payload: {},
          },
        ]}
        renderEventBody={(event) => (
          <div>
            <strong>{event.title}</strong>
            <div>Custom body</div>
          </div>
        )}
      />
    );

    expect(screen.getByText('Test event')).toBeInTheDocument();
    expect(screen.queryAllByText('Custom body').length).toBeGreaterThan(0);
  });
});
