import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { fireEvent } from '@testing-library/react';
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

function eventWrapper(node: HTMLElement): HTMLElement {
  return node.closest('.mantine-ResourcesMonthView-resourcesMonthViewEventWrapper') as HTMLElement;
}

function spanWidthPercent(node: HTMLElement): number {
  return parseFloat(eventWrapper(node).style.width.match(/([\d.]+)%/)![1]);
}

const DAY_CELL_WIDTH = 10;

/** jsdom reports empty rects, day cells are laid out as a strip of `DAY_CELL_WIDTH` px columns */
function stubDayCellRects(container: HTMLElement) {
  container
    .querySelectorAll('.mantine-ResourcesMonthView-resourcesMonthViewRowSlots')
    .forEach((row) => {
      row
        .querySelectorAll('.mantine-ResourcesMonthView-resourcesMonthViewCell')
        .forEach((cell, index) => {
          (cell as HTMLElement).getBoundingClientRect = () =>
            ({
              left: index * DAY_CELL_WIDTH,
              right: index * DAY_CELL_WIDTH + DAY_CELL_WIDTH,
              width: DAY_CELL_WIDTH,
              top: 0,
              bottom: 20,
              height: 20,
            }) as DOMRect;
        });
    });
}

/**
 * Moves the pointer to the horizontal center of the day cell at `dayIndex`.
 * jsdom does not implement `PointerEvent`, `fireEvent.pointerMove` would drop `clientX`.
 */
function movePointerToDay(dayIndex: number) {
  const clientX = dayIndex * DAY_CELL_WIDTH + DAY_CELL_WIDTH / 2;
  fireEvent(document, new MouseEvent('pointermove', { clientX, bubbles: true }));
}

function resizeHandles(container: HTMLElement, edge?: 'start' | 'end') {
  const selector = edge
    ? `.mantine-ResourcesMonthView-resourcesMonthViewResizeHandle[data-edge="${edge}"]`
    : '.mantine-ResourcesMonthView-resourcesMonthViewResizeHandle';
  return container.querySelectorAll<HTMLElement>(selector);
}

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

  it('renders a multi-day event as a single spanning bar', () => {
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
    const bars = screen.getAllByText('Multi Day');
    expect(bars).toHaveLength(1);
    expect(spanWidthPercent(bars[0])).toBeCloseTo((3 / 31) * 100, 1);
    expect(eventWrapper(bars[0]).style.height).not.toContain('18px');
  });

  it('keeps a multi-day event visible across all its days regardless of declaration order', () => {
    const events = [
      {
        id: 's1',
        title: 'Morning Sync',
        start: '2025-01-15 08:00:00',
        end: '2025-01-15 09:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 's2',
        title: 'Midday Sync',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'conf',
        title: 'Conference',
        start: '2025-01-14 10:00:00',
        end: '2025-01-16 12:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);

    const bars = screen.getAllByText('Conference');
    expect(bars).toHaveLength(1);
    expect(spanWidthPercent(bars[0])).toBeCloseTo((3 / 31) * 100, 1);
    expect(screen.getByText('+1 more')).toBeInTheDocument();
    // The span crosses a "+1 more" day, so the bar compresses to align with the shrunk rows below
    // it instead of overlapping them.
    expect(eventWrapper(bars[0]).style.height).toContain('100% - 18px');
  });

  it('keeps a short multi-day event visible across its days over longer same-day events', () => {
    const events = [
      {
        id: 'long-a',
        title: 'Long A',
        start: '2025-01-21 08:00:00',
        end: '2025-01-21 18:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'long-b',
        title: 'Long B',
        start: '2025-01-21 09:00:00',
        end: '2025-01-21 17:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'night',
        title: 'Night Shift',
        start: '2025-01-20 23:00:00',
        end: '2025-01-21 01:00:00',
        color: 'green',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);

    const bars = screen.getAllByText('Night Shift');
    expect(bars).toHaveLength(1);
    expect(spanWidthPercent(bars[0])).toBeCloseTo((2 / 31) * 100, 1);
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('keeps overlapping multi-day events on stable rows across their spans', () => {
    const events = [
      {
        id: 'b',
        title: 'Conf B',
        start: '2025-01-02 09:00:00',
        end: '2025-01-04 17:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
      {
        id: 'a',
        title: 'Conf A',
        start: '2025-01-01 09:00:00',
        end: '2025-01-03 17:00:00',
        color: 'red',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    render(<ResourcesMonthView {...defaultProps} events={events} />);

    const barA = screen.getAllByText('Conf A');
    const barB = screen.getAllByText('Conf B');

    expect(barA).toHaveLength(1);
    expect(barB).toHaveLength(1);
    expect(spanWidthPercent(barA[0])).toBeCloseTo((3 / 31) * 100, 1);
    expect(spanWidthPercent(barB[0])).toBeCloseTo((3 / 31) * 100, 1);
    expect(eventWrapper(barA[0]).style.top).toBe('calc(0% + 1px)');
    expect(eventWrapper(barB[0]).style.top).toBe('calc(50% + 1px)');
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

  it('maxEventsPerTimeSlot default shows only 2 visible events and +more trigger', () => {
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

  it('maxEventsPerTimeSlot clamps low values to 1', () => {
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

    render(<ResourcesMonthView {...defaultProps} events={events} maxEventsPerTimeSlot={-5} />);
    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.queryByText('Event 2')).not.toBeInTheDocument();
    expect(screen.getByText('+1 more')).toBeInTheDocument();
  });

  it('maxEventsPerTimeSlot clamps high values to 10', () => {
    const events = Array.from({ length: 12 }, (_, i) => ({
      id: `e${i}`,
      title: `Event ${i}`,
      start: '2025-01-10 08:00:00',
      end: '2025-01-10 09:00:00',
      color: 'blue',
      payload: {},
      resourceId: 'room-a',
    }));

    render(<ResourcesMonthView {...defaultProps} events={events} maxEventsPerTimeSlot={99} />);
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

  describe('MoreEvents prop forwarding', () => {
    const overflowEvents = [
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

    it('forwards renderEventBody to MoreEvents', async () => {
      render(
        <ResourcesMonthView
          {...defaultProps}
          events={overflowEvents}
          renderEventBody={(event) => <span>Body[{event.title}]</span>}
        />
      );

      await userEvent.click(screen.getByText('+1 more'));
      expect(screen.getByText('Body[Event 3]')).toBeInTheDocument();
    });

    it('forwards renderEvent to MoreEvents', async () => {
      render(
        <ResourcesMonthView
          {...defaultProps}
          events={overflowEvents}
          renderEvent={(event, props) => (
            <a href={`#event-${event.id}`} data-testid={`custom-event-${event.id}`}>
              {props.children}
            </a>
          )}
        />
      );

      await userEvent.click(screen.getByText('+1 more'));

      const customized = screen.getByTestId('custom-event-e3');
      expect(customized.tagName).toBe('A');
      expect(customized).toHaveAttribute('href', '#event-e3');
    });

    it('forwards onEventClick to MoreEvents', async () => {
      const spy = jest.fn();
      render(<ResourcesMonthView {...defaultProps} events={overflowEvents} onEventClick={spy} />);

      await userEvent.click(screen.getByText('+1 more'));
      await userEvent.click(screen.getByText('Event 3'));

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({ id: 'e3', title: 'Event 3' }),
        expect.any(Object)
      );
    });

    it('forwards labels to MoreEvents', () => {
      render(
        <ResourcesMonthView
          {...defaultProps}
          events={overflowEvents}
          labels={{ moreLabel: (count) => `${count} hidden` }}
        />
      );

      expect(screen.getByText('1 hidden')).toBeInTheDocument();
    });

    it('forwards styles api classNames to MoreEvents', () => {
      render(
        <ResourcesMonthView
          {...defaultProps}
          events={overflowEvents}
          classNames={{ moreEventsButton: 'test-more-button' }}
        />
      );

      expect(screen.getByText('+1 more')).toHaveClass('test-more-button');
    });
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

  it('renders group labels when groups prop is provided', () => {
    const groups = [
      { label: 'Floor 1', resourceIds: ['room-a'] },
      { label: 'Floor 2', resourceIds: ['room-b'] },
    ];

    const { container } = render(<ResourcesMonthView {...defaultProps} groups={groups} />);

    expect(screen.getByText('Floor 1')).toBeInTheDocument();
    expect(screen.getByText('Floor 2')).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-ResourcesMonthView-resourcesMonthViewGroupColumn')
    ).toBeInTheDocument();
  });

  it('does not render group column when groups prop is not provided', () => {
    const { container } = render(<ResourcesMonthView {...defaultProps} />);
    expect(
      container.querySelector('.mantine-ResourcesMonthView-resourcesMonthViewGroupColumn')
    ).not.toBeInTheDocument();
  });

  it('supports renderGroupLabel callback', () => {
    const groups = [{ label: 'Floor 1', resourceIds: ['room-a', 'room-b'] }];

    render(
      <ResourcesMonthView
        {...defaultProps}
        groups={groups}
        renderGroupLabel={(group) => <span data-testid="custom-group">{group.label} Custom</span>}
      />
    );

    expect(screen.getByText('Floor 1 Custom')).toBeInTheDocument();
  });

  it('renders ungrouped resources without group label', () => {
    const threeResources = [
      { id: 'room-a', label: 'Room A' },
      { id: 'room-b', label: 'Room B' },
      { id: 'room-c', label: 'Room C' },
    ];
    const groups = [{ label: 'Floor 1', resourceIds: ['room-a', 'room-b'] }];

    const { container } = render(
      <ResourcesMonthView {...defaultProps} resources={threeResources} groups={groups} />
    );

    expect(screen.getByText('Floor 1')).toBeInTheDocument();
    expect(screen.getByText('Room C')).toBeInTheDocument();
    const emptyGroupCells = container.querySelectorAll(
      '.mantine-ResourcesMonthView-resourcesMonthViewGroupColumnEmpty'
    );
    expect(emptyGroupCells.length).toBe(1);
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
  describe('event resize', () => {
    const resizeEvents = [
      {
        id: 'r1',
        title: 'Resizable Event',
        start: '2025-01-15 09:00:00',
        end: '2025-01-15 10:00:00',
        color: 'blue',
        payload: {},
        resourceId: 'room-a',
      },
    ];

    it('withEventResize renders start and end handles', () => {
      const { container } = render(
        <ResourcesMonthView {...defaultProps} events={resizeEvents} withEventResize />
      );

      expect(resizeHandles(container)).toHaveLength(2);
      expect(resizeHandles(container, 'start')).toHaveLength(1);
      expect(resizeHandles(container, 'end')).toHaveLength(1);
    });

    it('does not render resize handles when withEventResize is not set', () => {
      const { container } = render(<ResourcesMonthView {...defaultProps} events={resizeEvents} />);
      expect(resizeHandles(container)).toHaveLength(0);
    });

    it('mode="static" suppresses resize handles', () => {
      const { container } = render(
        <ResourcesMonthView {...defaultProps} mode="static" events={resizeEvents} withEventResize />
      );

      expect(resizeHandles(container)).toHaveLength(0);
    });

    it('canResizeEvent suppresses resize handles for blocked events', () => {
      const events = [
        { ...resizeEvents[0], id: 'no-resize', title: 'No Resize' },
        { ...resizeEvents[0], id: 'can-resize', title: 'Can Resize' },
      ];

      const { container } = render(
        <ResourcesMonthView
          {...defaultProps}
          events={events}
          withEventResize
          canResizeEvent={(event) => event.id === 'can-resize'}
        />
      );

      expect(resizeHandles(container)).toHaveLength(2);
    });

    it('renders only the end handle for an event that starts before the month', () => {
      const events = [
        {
          id: 'hanging-start',
          title: 'Hanging Start',
          start: '2024-12-28 09:00:00',
          end: '2025-01-05 17:00:00',
          color: 'blue',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      const { container } = render(
        <ResourcesMonthView {...defaultProps} events={events} withEventResize />
      );

      expect(resizeHandles(container)).toHaveLength(1);
      expect(resizeHandles(container, 'end')).toHaveLength(1);
      expect(resizeHandles(container, 'start')).toHaveLength(0);
    });

    it('calls onEventResize with the new end day, preserving the original end time', () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesMonthView
          {...defaultProps}
          events={resizeEvents}
          withEventResize
          onEventResize={spy}
        />
      );

      stubDayCellRects(container);
      fireEvent.pointerDown(resizeHandles(container, 'end')[0]);
      movePointerToDay(19);
      fireEvent.pointerUp(document);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          eventId: 'r1',
          newStart: '2025-01-15 09:00:00',
          newEnd: '2025-01-20 10:00:00',
        })
      );
    });

    it('calls onEventResize with the new start day, preserving the original start time', () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesMonthView
          {...defaultProps}
          events={resizeEvents}
          withEventResize
          onEventResize={spy}
        />
      );

      stubDayCellRects(container);
      fireEvent.pointerDown(resizeHandles(container, 'start')[0]);
      movePointerToDay(9);
      fireEvent.pointerUp(document);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          eventId: 'r1',
          newStart: '2025-01-10 09:00:00',
          newEnd: '2025-01-15 10:00:00',
        })
      );
    });

    it('keeps the end exclusive when the event ends at midnight', () => {
      const spy = jest.fn();
      const events = [
        {
          id: 'all-day',
          title: 'All Day Booking',
          start: '2025-01-10 00:00:00',
          end: '2025-01-13 00:00:00',
          color: 'blue',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      const { container } = render(
        <ResourcesMonthView {...defaultProps} events={events} withEventResize onEventResize={spy} />
      );

      stubDayCellRects(container);
      fireEvent.pointerDown(resizeHandles(container, 'end')[0]);
      movePointerToDay(14);
      fireEvent.pointerUp(document);

      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          newStart: '2025-01-10 00:00:00',
          newEnd: '2025-01-16 00:00:00',
        })
      );
    });

    it('does not call onEventResize when the range does not change', () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesMonthView
          {...defaultProps}
          events={resizeEvents}
          withEventResize
          onEventResize={spy}
        />
      );

      stubDayCellRects(container);
      fireEvent.pointerDown(resizeHandles(container, 'end')[0]);
      movePointerToDay(14);
      fireEvent.pointerUp(document);

      expect(spy).not.toHaveBeenCalled();
    });

    it('previews the resized span while dragging', () => {
      const { container } = render(
        <ResourcesMonthView {...defaultProps} events={resizeEvents} withEventResize />
      );

      stubDayCellRects(container);
      expect(spanWidthPercent(screen.getByText('Resizable Event'))).toBeCloseTo((1 / 31) * 100, 1);

      fireEvent.pointerDown(resizeHandles(container, 'end')[0]);
      movePointerToDay(18);

      expect(spanWidthPercent(screen.getByText('Resizable Event'))).toBeCloseTo((5 / 31) * 100, 1);

      fireEvent.pointerUp(document);
    });

    it('cancels the gesture without calling onEventResize on pointercancel', () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesMonthView
          {...defaultProps}
          events={resizeEvents}
          withEventResize
          onEventResize={spy}
        />
      );

      stubDayCellRects(container);
      fireEvent.pointerDown(resizeHandles(container, 'end')[0]);
      movePointerToDay(19);
      fireEvent.pointerCancel(document);

      expect(spy).not.toHaveBeenCalled();
      expect(spanWidthPercent(screen.getByText('Resizable Event'))).toBeCloseTo((1 / 31) * 100, 1);
      expect(document.body.style.cursor).toBe('');
    });

    it('clamps to the last day of the month after navigating to a shorter month', () => {
      const spy = jest.fn();
      const events = [
        {
          id: 'feb',
          title: 'February Event',
          start: '2025-02-05 09:00:00',
          end: '2025-02-05 10:00:00',
          color: 'blue',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      const { container, rerender } = render(
        <ResourcesMonthView
          {...defaultProps}
          date="2025-01-15"
          events={events}
          withEventResize
          onEventResize={spy}
        />
      );

      rerender(
        <ResourcesMonthView
          {...defaultProps}
          date="2025-02-15"
          events={events}
          withEventResize
          onEventResize={spy}
        />
      );

      stubDayCellRects(container);
      fireEvent.pointerDown(resizeHandles(container, 'end')[0]);
      movePointerToDay(40);
      fireEvent.pointerUp(document);

      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          newStart: '2025-02-05 09:00:00',
          newEnd: '2025-02-28 10:00:00',
        })
      );
    });

    it('merges Styles API styles with the wrapper positioning styles', () => {
      render(
        <ResourcesMonthView
          {...defaultProps}
          events={resizeEvents}
          withEventResize
          styles={{ resourcesMonthViewEventWrapper: { opacity: 0.5 } }}
        />
      );

      const wrapper = eventWrapper(screen.getByText('Resizable Event'));
      expect(wrapper.style.opacity).toBe('0.5');
      expect(wrapper.style.width).toContain('%');
    });

    it('keeps the wrapper positioned when unstyled is set', () => {
      render(
        <ResourcesMonthView {...defaultProps} events={resizeEvents} withEventResize unstyled />
      );

      const wrapper = eventWrapper(screen.getByText('Resizable Event'));
      expect(wrapper.className).not.toContain('resourcesMonthViewEventWrapper ');
      expect(wrapper.style.position).toBe('absolute');
      expect(wrapper.style.zIndex).toBe('3');
      expect(wrapper.style.width).toContain('%');
    });

    it('hides the handle when the event edge falls on a hidden weekend day', () => {
      // 2025-01-04 is a Saturday, 2025-01-08 is a Wednesday
      const events = [
        {
          id: 'weekend-start',
          title: 'Weekend Start',
          start: '2025-01-04 09:00:00',
          end: '2025-01-08 17:00:00',
          color: 'blue',
          payload: {},
          resourceId: 'room-a',
        },
      ];

      const { container } = render(
        <ResourcesMonthView
          {...defaultProps}
          events={events}
          withEventResize
          withWeekendDays={false}
        />
      );

      expect(resizeHandles(container, 'start')).toHaveLength(0);
      expect(resizeHandles(container, 'end')).toHaveLength(1);
    });

    it('does not fire onEventClick for the click that ends a resize gesture', () => {
      const spy = jest.fn();
      const { container } = render(
        <ResourcesMonthView
          {...defaultProps}
          events={resizeEvents}
          withEventResize
          onEventClick={spy}
        />
      );

      fireEvent.pointerDown(resizeHandles(container, 'end')[0]);
      fireEvent.pointerUp(document);
      fireEvent.click(screen.getByText('Resizable Event'));

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
