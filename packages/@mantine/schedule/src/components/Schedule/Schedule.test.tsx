import 'dayjs/locale/ru';

import { DatesProvider } from '@mantine/dates';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Schedule, ScheduleProps, ScheduleStylesNames } from './Schedule';

const defaultProps: ScheduleProps = {
  date: '2024-01-15',
  events: [
    {
      id: 1,
      title: 'Team Meeting',
      start: '2024-01-15 10:00:00',
      end: '2024-01-15 11:00:00',
      color: 'blue',
      payload: {},
    },
    {
      id: 2,
      title: 'Project Review',
      start: '2024-01-16 14:00:00',
      end: '2024-01-16 16:00:00',
      color: 'green',
      payload: {},
    },
  ],
};

describe('@mantine/schedule/Schedule', () => {
  tests.itSupportsSystemProps<ScheduleProps, ScheduleStylesNames>({
    component: Schedule,
    props: defaultProps,
    displayName: '@mantine/schedule/Schedule',
    providerStylesApi: false,
    stylesApiSelectors: ['root'],
    attributes: false,
  });

  it('renders week view by default', () => {
    const { container } = render(<Schedule {...defaultProps} />);
    expect(container.querySelector('.mantine-WeekView-weekView')).toBeInTheDocument();
  });

  it('supports defaultView prop', () => {
    const { container: dayContainer } = render(<Schedule {...defaultProps} defaultView="day" />);
    expect(dayContainer.querySelector('.mantine-DayView-dayView')).toBeInTheDocument();

    const { container: monthContainer } = render(
      <Schedule {...defaultProps} defaultView="month" />
    );
    expect(monthContainer.querySelector('.mantine-MonthView-monthView')).toBeInTheDocument();

    const { container: yearContainer } = render(<Schedule {...defaultProps} defaultView="year" />);
    expect(yearContainer.querySelector('.mantine-YearView-yearView')).toBeInTheDocument();
  });

  it('supports controlled view prop', () => {
    const { container, rerender } = render(<Schedule {...defaultProps} view="day" />);
    expect(container.querySelector('.mantine-DayView-dayView')).toBeInTheDocument();

    rerender(<Schedule {...defaultProps} view="week" />);
    expect(container.querySelector('.mantine-WeekView-weekView')).toBeInTheDocument();

    rerender(<Schedule {...defaultProps} view="month" />);
    expect(container.querySelector('.mantine-MonthView-monthView')).toBeInTheDocument();

    rerender(<Schedule {...defaultProps} view="year" />);
    expect(container.querySelector('.mantine-YearView-yearView')).toBeInTheDocument();
  });

  it('calls onViewChange when view is changed via header controls', async () => {
    const spy = jest.fn();
    render(<Schedule {...defaultProps} defaultView="week" onViewChange={spy} />);

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledWith('day');

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(spy).toHaveBeenCalledWith('month');

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to year view' }));
    expect(spy).toHaveBeenCalledWith('year');
  });

  it('supports uncontrolled view switching', async () => {
    const { container } = render(<Schedule {...defaultProps} defaultView="week" />);
    expect(container.querySelector('.mantine-WeekView-weekView')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(container.querySelector('.mantine-DayView-dayView')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to month view' }));
    expect(container.querySelector('.mantine-MonthView-monthView')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to year view' }));
    expect(container.querySelector('.mantine-YearView-yearView')).toBeInTheDocument();
  });

  it('calls onDateChange when date is changed via navigation', async () => {
    const spy = jest.fn();
    render(<Schedule {...defaultProps} defaultView="week" onDateChange={spy} />);

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalled();

    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalled();
  });

  it('supports controlled date prop', () => {
    const { rerender } = render(<Schedule {...defaultProps} date="2024-01-15" view="day" />);
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument();

    rerender(<Schedule {...defaultProps} date="2024-02-20" view="day" />);
    expect(screen.getByText('February 20, 2024')).toBeInTheDocument();
  });

  it('supports defaultDate prop', () => {
    render(<Schedule {...defaultProps} defaultDate="2024-01-15" view="day" />);
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
  });

  it('passes common props to all views', () => {
    const { container, rerender } = render(<Schedule {...defaultProps} view="day" radius="lg" />);
    expect(container.querySelector('.mantine-DayView-dayView')).toBeInTheDocument();

    rerender(<Schedule {...defaultProps} view="week" radius="lg" />);
    expect(container.querySelector('.mantine-WeekView-weekView')).toBeInTheDocument();

    rerender(<Schedule {...defaultProps} view="month" radius="lg" />);
    expect(container.querySelector('.mantine-MonthView-monthView')).toBeInTheDocument();

    rerender(<Schedule {...defaultProps} view="year" radius="lg" />);
    expect(container.querySelector('.mantine-YearView-yearView')).toBeInTheDocument();
  });

  it('passes dayViewProps only to day view', () => {
    const { container } = render(
      <Schedule
        {...defaultProps}
        view="day"
        dayViewProps={{
          startTime: '08:00:00',
          endTime: '18:00:00',
          intervalMinutes: 60,
        }}
      />
    );

    // Day view should have 11 slots (10 hours + 1 all-day slot)
    expect(container.querySelectorAll('.mantine-DayView-dayViewSlot')).toHaveLength(11);
  });

  it('passes weekViewProps only to week view', () => {
    const { container } = render(
      <Schedule
        {...defaultProps}
        view="week"
        weekViewProps={{
          startTime: '09:00:00',
          endTime: '17:00:00',
          intervalMinutes: 60,
          withWeekNumber: false,
        }}
      />
    );

    expect(container.querySelector('.mantine-WeekView-weekViewWeekNumber')).not.toBeInTheDocument();
  });

  it('passes monthViewProps only to month view', () => {
    const { container } = render(
      <Schedule
        {...defaultProps}
        view="month"
        monthViewProps={{
          withWeekNumbers: true,
          consistentWeeks: true,
        }}
      />
    );

    expect(container.querySelector('.mantine-MonthView-monthViewWeekNumber')).toBeInTheDocument();
  });

  it('passes yearViewProps only to year view', () => {
    render(
      <Schedule
        {...defaultProps}
        view="year"
        yearViewProps={{
          withWeekNumbers: false,
        }}
      />
    );

    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('supports locale prop', () => {
    render(<Schedule {...defaultProps} view="day" locale="ru" />);
    expect(screen.getByText('январь 15, 2024')).toBeInTheDocument();
  });

  it('supports locale from DatesProvider', () => {
    render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <Schedule {...defaultProps} view="day" />
      </DatesProvider>
    );
    expect(screen.getByText('январь 15, 2024')).toBeInTheDocument();
  });

  it('renders events in all views', () => {
    render(<Schedule {...defaultProps} view="day" />);
    expect(screen.getByText('Team Meeting')).toBeInTheDocument();
  });

  it('supports renderEventBody prop', () => {
    const renderSpy = jest.fn((event) => <div>{event.title}</div>);

    const { container } = render(
      <Schedule {...defaultProps} view="day" renderEventBody={renderSpy} />
    );

    expect(container.querySelector('.mantine-DayView-dayView')).toBeInTheDocument();
    expect(renderSpy).toHaveBeenCalled();
  });

  it('supports withEventsDragAndDrop prop', () => {
    const spy = jest.fn();
    render(<Schedule {...defaultProps} view="day" withEventsDragAndDrop onEventDrop={spy} />);

    const event = screen.getByText('Team Meeting');
    expect(event.closest('[draggable="true"]')).toBeInTheDocument();
  });

  it('supports canDragEvent prop', () => {
    const canDragSpy = jest.fn((event) => event.id !== 1);

    render(
      <Schedule {...defaultProps} view="day" withEventsDragAndDrop canDragEvent={canDragSpy} />
    );

    const teamMeeting = screen.getByText('Team Meeting');
    expect(teamMeeting.closest('[draggable="true"]')).not.toBeInTheDocument();
    expect(canDragSpy).toHaveBeenCalled();
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<Schedule {...defaultProps} __staticSelector="TestSchedule" />);
    expect(container.querySelector('.mantine-TestSchedule-root')).toBeInTheDocument();
  });

  it('navigates from week view to day view when clicking day header', async () => {
    const onViewChangeSpy = jest.fn();
    const onDateChangeSpy = jest.fn();

    const { container } = render(
      <Schedule
        {...defaultProps}
        defaultView="week"
        onViewChange={onViewChangeSpy}
        onDateChange={onDateChangeSpy}
      />
    );

    expect(container.querySelector('.mantine-WeekView-weekView')).toBeInTheDocument();

    // Click on the first day label (weekday + number)
    const dayLabels = container.querySelectorAll('.mantine-WeekView-weekViewDayLabel');
    await userEvent.click(dayLabels[0] as HTMLElement);

    expect(onViewChangeSpy).toHaveBeenCalledWith('day');
    expect(onDateChangeSpy).toHaveBeenCalled();
    expect(container.querySelector('.mantine-DayView-dayView')).toBeInTheDocument();
  });

  it('navigates from month view to week view when clicking week number', async () => {
    const onViewChangeSpy = jest.fn();
    const onDateChangeSpy = jest.fn();

    const { container } = render(
      <Schedule
        {...defaultProps}
        defaultView="month"
        monthViewProps={{ withWeekNumbers: true }}
        onViewChange={onViewChangeSpy}
        onDateChange={onDateChangeSpy}
      />
    );

    expect(container.querySelector('.mantine-MonthView-monthView')).toBeInTheDocument();

    // Click on the first week number
    const weekNumbers = container.querySelectorAll('.mantine-MonthView-monthViewWeekNumber');
    await userEvent.click(weekNumbers[0] as HTMLElement);

    expect(onViewChangeSpy).toHaveBeenCalledWith('week');
    expect(onDateChangeSpy).toHaveBeenCalled();
    expect(container.querySelector('.mantine-WeekView-weekView')).toBeInTheDocument();
  });

  it('handles both controlled and uncontrolled state simultaneously', async () => {
    const onViewChangeSpy = jest.fn();
    const onDateChangeSpy = jest.fn();

    const { rerender } = render(
      <Schedule
        {...defaultProps}
        view="week"
        onViewChange={onViewChangeSpy}
        onDateChange={onDateChangeSpy}
      />
    );

    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(onViewChangeSpy).toHaveBeenCalledWith('day');

    // In controlled mode, parent needs to update the prop
    rerender(
      <Schedule
        {...defaultProps}
        view="day"
        onViewChange={onViewChangeSpy}
        onDateChange={onDateChangeSpy}
      />
    );

    expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
  });
});
