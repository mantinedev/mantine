import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { DatesProvider } from '@mantine/dates';
import { render, screen, userEvent } from '@mantine-tests/core';
import { ResourcesMonthView, ResourcesMonthViewProps } from './ResourcesMonthView';

const resources = [
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

const defaultProps: ResourcesMonthViewProps = {
  date: '2025-01-15',
  resources,
};

describe('@mantine/schedule/ResourcesMonthView', () => {
  it('renders resource labels', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByText('Room A')).toBeInTheDocument();
    expect(screen.getByText('Room B')).toBeInTheDocument();
  });

  it('renders day column headers', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('31')).toBeInTheDocument();
  });

  it('renders "Resources" corner label', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders events in cells', () => {
    const events = [
      {
        id: 1,
        title: 'Event A',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);
    expect(screen.getByText('Event A')).toBeInTheDocument();
  });

  it('renders with mode="static"', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} mode="static" />);
    const cells = container.querySelectorAll('.mantine-ResourcesMonthView-resourcesMonthViewCell');
    cells.forEach((cell) => {
      expect(cell).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('renders header with month navigation', () => {
    render(<ResourcesMonthView {...defaultProps} />);
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument();
  });

  it('keyboard navigation between cells (arrow keys)', async () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;

    cells[0].focus();
    expect(cells[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(cells[1]).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(cells[0]).toHaveFocus();
  });

  it('first cell has tabIndex 0', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;
    expect(cells[0]).toHaveAttribute('tabIndex', '0');
    expect(cells[1]).toHaveAttribute('tabIndex', '-1');
  });

  it('onDayClick called with date and resourceId', async () => {
    const spy = jest.fn();
    render(<ResourcesMonthView {...defaultProps} onDayClick={spy} />);
    await userEvent.click(screen.getByRole('button', { name: 'Room A January 15, 2025' }));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ date: '2025-01-15', resourceId: 'room-a' })
    );
  });

  it('onEventClick called with correct event', async () => {
    const spy = jest.fn();
    const events = [
      {
        id: 'e1',
        title: 'Click Me',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} onEventClick={spy} />);
    await userEvent.click(screen.getByText('Click Me'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'e1', title: 'Click Me' }),
      expect.any(Object)
    );
  });

  it('header nav calls onDateChange with previous and next month', async () => {
    const spy = jest.fn();
    render(<ResourcesMonthView {...defaultProps} onDateChange={spy} />);

    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(spy).toHaveBeenCalledWith('2024-12-01 00:00:00');

    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(spy).toHaveBeenCalledWith('2025-02-01 00:00:00');
  });

  it('header nav today calls onDateChange with today date', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15'));
    const spy = jest.fn();
    render(<ResourcesMonthView {...defaultProps} onDateChange={spy} />);
    await userEvent
      .setup({ advanceTimers: jest.advanceTimersByTime })
      .click(screen.getByRole('button', { name: 'Today' }));
    expect(spy).toHaveBeenCalledWith('2025-01-15 00:00:00');
    jest.useRealTimers();
  });

  it('view tabs call onViewChange', async () => {
    const spy = jest.fn();
    render(<ResourcesMonthView {...defaultProps} onViewChange={spy} />);
    await userEvent.click(screen.getByRole('tab', { name: 'Switch to day view' }));
    expect(spy).toHaveBeenCalledWith('day');
  });

  it('withHeader={false} removes header', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} withHeader={false} />);
    expect(container.querySelector('.mantine-ResourcesMonthView-header')).not.toBeInTheDocument();
  });

  it('monthYearSelectProps forwarded', () => {
    const { container } = render(
      <ResourcesMonthView
        {...defaultProps}
        monthYearSelectProps={{ className: 'custom-month-year' }}
      />
    );
    expect(container.querySelector('.custom-month-year')).toBeInTheDocument();
  });

  it('locale prop affects weekday labels and header', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} locale="ru" />);
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabelWeekday'
    );
    const texts = Array.from(dayLabels).map((el) => el.textContent);
    expect(texts.some((t) => /[а-яА-Я]/.test(t!))).toBe(true);
  });

  it('locale from DatesProvider', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <ResourcesMonthView {...defaultProps} />
      </DatesProvider>
    );
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabelWeekday'
    );
    const texts = Array.from(dayLabels).map((el) => el.textContent);
    expect(texts.some((t) => /[а-яА-Я]/.test(t!))).toBe(true);
  });

  it('weekdayFormat with format string', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} weekdayFormat="dddd" />);
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabelWeekday'
    );
    const texts = Array.from(dayLabels).map((el) => el.textContent);
    expect(texts).toContain('Wednesday');
    expect(texts).toContain('Monday');
  });

  it('weekdayFormat with callback', () => {
    const { container } = render(
      <ResourcesMonthView
        {...defaultProps}
        weekdayFormat={(date) => dayjs(date).format('dd').toUpperCase()}
      />
    );
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabelWeekday'
    );
    const texts = Array.from(dayLabels).map((el) => el.textContent);
    expect(texts[0]).toBe(dayjs('2025-01-01').format('dd').toUpperCase());
  });

  it('weekendDays marks configured days', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} weekendDays={[5, 6]} />);
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabel'
    );
    const jan3 = Array.from(dayLabels).find((el) => {
      const num = el.querySelector('.mantine-ResourcesMonthView-resourcesMonthViewDayLabelNumber');
      return num?.textContent === '3';
    });
    const jan4 = Array.from(dayLabels).find((el) => {
      const num = el.querySelector('.mantine-ResourcesMonthView-resourcesMonthViewDayLabelNumber');
      return num?.textContent === '4';
    });
    const jan6 = Array.from(dayLabels).find((el) => {
      const num = el.querySelector('.mantine-ResourcesMonthView-resourcesMonthViewDayLabelNumber');
      return num?.textContent === '6';
    });
    expect(jan3).toHaveAttribute('data-weekend');
    expect(jan4).toHaveAttribute('data-weekend');
    expect(jan6).not.toHaveAttribute('data-weekend');
  });

  it('withWeekendDays={false} hides weekend columns', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} withWeekendDays={false} />);
    const dayLabels = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabel'
    );
    expect(dayLabels.length).toBe(23);

    const dayNumbers = Array.from(dayLabels).map((el) => {
      const num = el.querySelector('.mantine-ResourcesMonthView-resourcesMonthViewDayLabelNumber');
      return num?.textContent;
    });
    expect(dayNumbers).not.toContain('4');
    expect(dayNumbers).not.toContain('5');
    expect(dayNumbers).not.toContain('11');
    expect(dayNumbers).not.toContain('12');
  });

  it('highlightToday marks current day', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-01-15'));
    const { container } = render(<ResourcesMonthView {...defaultProps} highlightToday />);
    const todayLabel = container.querySelector(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabel[data-today]'
    );
    expect(todayLabel).toBeInTheDocument();
    const num = todayLabel!.querySelector(
      '.mantine-ResourcesMonthView-resourcesMonthViewDayLabelNumber'
    );
    expect(num!.textContent).toBe('15');
    jest.useRealTimers();
  });

  it('labels overrides change corner label', () => {
    render(<ResourcesMonthView {...defaultProps} labels={{ resources: 'Rooms' }} />);
    expect(screen.getByText('Rooms')).toBeInTheDocument();
    expect(screen.queryByText('Resources')).not.toBeInTheDocument();
  });

  it('renderResourceLabel replaces labels', () => {
    render(
      <ResourcesMonthView
        {...defaultProps}
        renderResourceLabel={(resource) => <span data-testid="custom-label">{resource.id}</span>}
      />
    );
    const labels = screen.getAllByTestId('custom-label');
    expect(labels).toHaveLength(2);
    expect(labels[0].textContent).toBe('room-a');
    expect(labels[1].textContent).toBe('room-b');
  });

  it('renderEventBody replaces event body', () => {
    const events = [
      {
        id: 'e1',
        title: 'Original',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesMonthView
        {...defaultProps}
        events={events}
        renderEventBody={(event) => <span data-testid="custom-body">{event.title}-custom</span>}
      />
    );
    expect(screen.getByTestId('custom-body').textContent).toBe('Original-custom');
  });

  it('renderEvent allows full custom rendering', () => {
    const events = [
      {
        id: 'e1',
        title: 'Custom Event',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesMonthView
        {...defaultProps}
        events={events}
        renderEvent={(event, props) => (
          <div data-testid="full-custom" key={event.id} style={props.style}>
            {event.title}-full
          </div>
        )}
      />
    );
    expect(screen.getByTestId('full-custom').textContent).toBe('Custom Event-full');
  });

  it('scrollAreaProps forwarded', () => {
    render(
      <ResourcesMonthView
        {...defaultProps}
        scrollAreaProps={{
          'data-testid': 'custom-scroll',
          className: 'scroll-test',
          style: { outline: '1px solid red' },
        }}
      />
    );
    const scrollArea = screen.getByTestId('custom-scroll');
    expect(scrollArea).toBeInTheDocument();
    expect(scrollArea).toHaveClass('scroll-test');
    expect(scrollArea).toHaveStyle({ outline: '1px solid red' });
  });

  it('ArrowDown moves to next resource row', async () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;

    cells[0].focus();
    expect(cells[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(cells[31]).toHaveFocus();
  });

  it('ArrowUp moves to previous resource row', async () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;

    cells[31].focus();
    expect(cells[31]).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(cells[0]).toHaveFocus();
  });

  it('keyboard nav stays on edge at boundaries', async () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;

    cells[0].focus();
    expect(cells[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(cells[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(cells[0]).toHaveFocus();
  });

  it('mode="static" suppresses day clicks, event clicks, keyboard nav', async () => {
    const daySpy = jest.fn();
    const eventSpy = jest.fn();
    const events = [
      {
        id: 'e1',
        title: 'Static Event',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    const { container } = render(
      <ResourcesMonthView
        {...defaultProps}
        mode="static"
        events={events}
        onDayClick={daySpy}
        onEventClick={eventSpy}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Room A January 10, 2025' }));
    expect(daySpy).not.toHaveBeenCalled();

    const eventButton = screen.getByText('Static Event').closest('button')!;
    await userEvent.click(eventButton);
    expect(eventSpy).not.toHaveBeenCalled();

    const cells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewCell'
    ) as NodeListOf<HTMLButtonElement>;
    cells.forEach((cell) => {
      expect(cell).toHaveAttribute('tabIndex', '-1');
    });
  });

  it('multi-day events render in each applicable day cell', () => {
    const events = [
      {
        id: 'multi',
        title: 'Multi Day',
        start: '2025-01-14 10:00:00',
        end: '2025-01-16 12:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);
    const eventElements = screen.getAllByText('Multi Day');
    expect(eventElements.length).toBe(3);
  });

  it('recurring events render instances', () => {
    const events = [
      {
        id: 'rec-1',
        title: 'Weekly Standup',
        start: '2025-01-06 09:00:00',
        end: '2025-01-06 09:30:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
        recurrence: {
          rrule: 'FREQ=WEEKLY;BYDAY=MO;COUNT=4',
        },
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);
    const instances = screen.getAllByText('Weekly Standup');
    expect(instances.length).toBe(4);
  });

  it('maxEventsPerCell default shows only 2 visible events and +more trigger', () => {
    const events = [
      {
        id: 'e1',
        title: 'Event 1',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'e2',
        title: 'Event 2',
        start: '2025-01-10 09:00:00',
        end: '2025-01-10 10:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'e3',
        title: 'Event 3',
        start: '2025-01-10 10:00:00',
        end: '2025-01-10 11:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.queryByText('Event 3')).not.toBeInTheDocument();
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('maxEventsPerCell clamps low values to 1', () => {
    const events = [
      {
        id: 'e1',
        title: 'Event 1',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'e2',
        title: 'Event 2',
        start: '2025-01-10 09:00:00',
        end: '2025-01-10 10:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} maxEventsPerCell={-5} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.queryByText('Event 2')).not.toBeInTheDocument();
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('maxEventsPerCell clamps high values to 10', () => {
    const events = Array.from({ length: 12 }, (_, i) => ({
      id: `e${i}`,
      title: `Event ${i}`,
      start: '2025-01-10 08:00:00',
      end: '2025-01-10 09:00:00',
      color: 'blue',
      payload: {},
      resourceId: 'room-a',
    }));

    render(<ResourcesMonthView {...defaultProps} events={events} maxEventsPerCell={99} />);
    for (let i = 0; i < 10; i++) {
      expect(screen.getByText(`Event ${i}`)).toBeInTheDocument();
    }
    expect(screen.queryByText('Event 10')).not.toBeInTheDocument();
    expect(screen.getByText('+2 more')).toBeInTheDocument();
  });

  it('clicking +more reveals hidden events', async () => {
    const events = [
      {
        id: 'e1',
        title: 'Visible Event',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'e2',
        title: 'Visible Event 2',
        start: '2025-01-10 09:00:00',
        end: '2025-01-10 10:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'e3',
        title: 'Hidden Event',
        start: '2025-01-10 10:00:00',
        end: '2025-01-10 11:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);
    expect(screen.queryByText('Hidden Event')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('+1 more'));
    expect(screen.getByText('Hidden Event')).toBeInTheDocument();
  });

  it('hidden events grouping isolated per resource/day', () => {
    const events = [
      {
        id: 'a1',
        title: 'A1',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'a2',
        title: 'A2',
        start: '2025-01-10 09:00:00',
        end: '2025-01-10 10:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'a3',
        title: 'A3',
        start: '2025-01-10 10:00:00',
        end: '2025-01-10 11:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'b1',
        title: 'B1',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-b',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);
    expect(screen.getByText('A1')).toBeInTheDocument();
    expect(screen.getByText('A2')).toBeInTheDocument();
    expect(screen.queryByText('A3')).not.toBeInTheDocument();
    expect(screen.getByText('B1')).toBeInTheDocument();
    const moreButtons = screen.getAllByText('+1 more');
    expect(moreButtons).toHaveLength(1);
  });

  it('moreEventsProps forwarded', async () => {
    const events = [
      {
        id: 'e1',
        title: 'Ev1',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'e2',
        title: 'Ev2',
        start: '2025-01-10 09:00:00',
        end: '2025-01-10 10:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'e3',
        title: 'Ev3',
        start: '2025-01-10 10:00:00',
        end: '2025-01-10 11:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(
      <ResourcesMonthView
        {...defaultProps}
        events={events}
        moreEventsProps={{ dropdownType: 'modal', modalTitle: 'All Events' }}
      />
    );

    await userEvent.click(screen.getByText('+1 more'));
    expect(screen.getByRole('heading', { name: 'All Events' })).toBeInTheDocument();
  });

  it('withEventsDragAndDrop makes events draggable', () => {
    const events = [
      {
        id: 'drag1',
        title: 'Draggable Event',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    const { container } = render(
      <ResourcesMonthView {...defaultProps} events={events} withEventsDragAndDrop />
    );
    const eventButton = container.querySelector('.mantine-ScheduleEvent-event[draggable="true"]');
    expect(eventButton).toBeInTheDocument();
  });

  it('canDragEvent prevents specific events from dragging', () => {
    const events = [
      {
        id: 'ok',
        title: 'Can Drag',
        start: '2025-01-10 08:00:00',
        end: '2025-01-10 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'no',
        title: 'Cannot Drag',
        start: '2025-01-11 08:00:00',
        end: '2025-01-11 09:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    const { container } = render(
      <ResourcesMonthView
        {...defaultProps}
        events={events}
        withEventsDragAndDrop
        canDragEvent={(event) => event.id === 'ok'}
      />
    );
    const allEvents = container.querySelectorAll('.mantine-ScheduleEvent-event');
    const draggable = Array.from(allEvents).filter((el) => el.getAttribute('draggable') === 'true');
    const notDraggable = Array.from(allEvents).filter(
      (el) => el.getAttribute('draggable') !== 'true'
    );
    expect(draggable).toHaveLength(1);
    expect(notDraggable).toHaveLength(1);
    expect(draggable[0]).toHaveAttribute('title', 'Can Drag');
    expect(notDraggable[0]).toHaveAttribute('title', 'Cannot Drag');
  });
});
