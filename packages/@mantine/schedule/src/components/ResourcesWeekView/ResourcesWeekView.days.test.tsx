import { createRef } from 'react';
import { createEvent, fireEvent } from '@testing-library/react';
import { DatesProvider } from '@mantine/dates';
import { render, screen, userEvent } from '@mantine-tests/core';
import { ScheduleEventData } from '../../types';
import { ResourcesMonthView } from '../ResourcesMonthView/ResourcesMonthView';
import { ResourcesWeekView, ResourcesWeekViewProps } from './ResourcesWeekView';

const resources = [
  { id: 'a', label: 'Room A' },
  { id: 0, label: 'Room B' },
];

const defaultProps: ResourcesWeekViewProps = {
  layout: 'days',
  date: '2026-10-28',
  resources,
};

const event = {
  id: 'booking',
  title: 'Booking',
  resourceId: 'a',
  start: '2026-10-30 09:00:00',
  end: '2026-10-30 10:00:00',
  color: 'blue',
} satisfies ScheduleEventData;

function getCells(container: HTMLElement) {
  return container.querySelectorAll<HTMLElement>(
    '.mantine-ResourcesWeekView-resourcesWeekViewCell'
  );
}

function stubCellRects(container: HTMLElement) {
  getCells(container).forEach((cell, index) => {
    const column = index % 7;
    cell.getBoundingClientRect = () =>
      ({
        left: column * 100,
        right: (column + 1) * 100,
        width: 100,
        top: 0,
        bottom: 80,
        height: 80,
      }) as DOMRect;
  });
}

function fireDrag(node: Element, type: 'dragStart' | 'drop', clientX: number) {
  const dragEvent = createEvent[type](node);
  Object.defineProperty(dragEvent, 'dataTransfer', {
    value: {
      effectAllowed: 'move',
      types: ['application/json'],
      getData: jest.fn(),
      setData: jest.fn(),
    },
  });
  Object.defineProperty(dragEvent, 'clientX', { value: clientX });
  Object.defineProperty(dragEvent, 'clientY', { value: 0 });
  fireEvent(node, dragEvent);
}

describe('@mantine/schedule/ResourcesWeekView days layout', () => {
  it('renders a cross-month week with one cell per day and no time axis', () => {
    const { container } = render(<ResourcesWeekView {...defaultProps} />);
    expect(getCells(container)).toHaveLength(14);
    expect(screen.getByText('Mon 26')).toBeInTheDocument();
    expect(screen.getByText('Sun 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Room A November 1, 2026' })).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewTimeLabelsRow')
    ).toBeNull();
  });

  it('uses provider week and weekend settings across a year boundary', () => {
    const { container } = render(
      <DatesProvider settings={{ firstDayOfWeek: 0, weekendDays: [5, 6] }}>
        <ResourcesWeekView {...defaultProps} date="2027-01-01" withWeekendDays={false} />
      </DatesProvider>
    );
    expect(getCells(container)).toHaveLength(10);
    expect(screen.getByText('Sun 27')).toBeInTheDocument();
    expect(screen.getByText('Thu 31')).toBeInTheDocument();
    expect(screen.queryByText('Fri 1')).not.toBeInTheDocument();
  });

  it('navigates by weeks and respects getCurrentTime for Today and highlighting', async () => {
    const onDateChange = jest.fn();
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        onDateChange={onDateChange}
        getCurrentTime={() => '2026-11-01 23:00:00'}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(onDateChange).toHaveBeenLastCalledWith('2026-10-19 00:00:00');
    await userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(onDateChange).toHaveBeenLastCalledWith('2026-11-02 00:00:00');
    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(onDateChange).toHaveBeenLastCalledWith('2026-11-01 00:00:00');
    expect(container.querySelector('[data-today]')).toHaveTextContent('Sun 1');
  });

  it('passes visible week boundaries to custom labels', () => {
    render(
      <ResourcesWeekView
        {...defaultProps}
        withWeekendDays={false}
        renderWeekLabel={({ weekStart, weekEnd }) => `${weekStart} / ${weekEnd}`}
      />
    );
    expect(screen.getByText('2026-10-26 / 2026-10-30')).toBeInTheDocument();
  });

  it('resolves Today at click time', async () => {
    const onDateChange = jest.fn();
    const getCurrentTime = jest.fn(() => '2026-10-31 23:59:00');
    render(
      <ResourcesWeekView
        {...defaultProps}
        onDateChange={onDateChange}
        getCurrentTime={getCurrentTime}
      />
    );
    getCurrentTime.mockReturnValue('2026-11-01 00:01:00');
    await userEvent.click(screen.getByRole('button', { name: 'Today' }));
    expect(onDateChange).toHaveBeenCalledWith('2026-11-01 00:00:00');
  });

  it('expands recurring events on both sides of a year boundary', () => {
    render(
      <ResourcesWeekView
        {...defaultProps}
        date="2026-12-30"
        events={[
          {
            ...event,
            start: '2026-12-01 09:00:00',
            end: '2026-12-01 10:00:00',
            recurrence: { rrule: 'FREQ=DAILY;COUNT=40' },
          },
        ]}
      />
    );
    expect(screen.getAllByText('Booking')).toHaveLength(7);
  });

  it('clips multi-day events and only exposes resize handles for visible ends', () => {
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        withEventResize
        events={[{ ...event, start: '2026-10-25 09:00:00', end: '2026-10-28 10:00:00' }]}
      />
    );
    const wrapper = screen
      .getByText('Booking')
      .closest('.mantine-ResourcesWeekView-resourcesWeekViewEventWrapper') as HTMLElement;
    expect(parseFloat(wrapper.style.width.match(/([\d.]+)%/)![1])).toBeCloseTo((3 / 7) * 100);
    expect(container.querySelector('[data-edge="start"]')).toBeNull();
    expect(container.querySelector('[data-edge="end"]')).toBeInTheDocument();
  });

  it('stacks short non-overlapping events and opens overflow', async () => {
    render(
      <ResourcesWeekView
        {...defaultProps}
        events={[
          event,
          {
            ...event,
            id: 'second',
            title: 'Second',
            start: '2026-10-30 15:00:00',
            end: '2026-10-30 15:05:00',
          },
        ]}
        maxEventsPerTimeSlot={1}
      />
    );
    expect(screen.queryByText('Second')).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('+1 more'));
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('forwards group renderers and day clicks with numeric resource ids', async () => {
    const onDayClick = jest.fn();
    const onTimeSlotClick = jest.fn();
    render(
      <ResourcesWeekView
        {...defaultProps}
        groups={[{ label: 'Floor', resourceIds: [0, 'a'] }]}
        renderGroupLabel={(group) => `${group.label} custom`}
        renderResourceLabel={(resource) => `Custom ${resource.label}`}
        onDayClick={onDayClick}
        onTimeSlotClick={onTimeSlotClick}
      />
    );
    expect(screen.getByText('Floor custom')).toBeInTheDocument();
    expect(screen.getByText('Custom Room B')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Room B November 1, 2026' }));
    expect(onDayClick).toHaveBeenCalledWith(
      expect.objectContaining({ date: '2026-11-01', resourceId: 0 })
    );
    expect(onTimeSlotClick).not.toHaveBeenCalled();
  });

  it('moves events across month and resource boundaries while preserving times', () => {
    const onEventDrop = jest.fn();
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        events={[event]}
        withEventsDragAndDrop
        onEventDrop={onEventDrop}
      />
    );
    stubCellRects(container);
    fireDrag(container.querySelector('[data-event-id="booking"]')!, 'dragStart', 450);
    fireDrag(
      container.querySelectorAll('.mantine-ResourcesWeekView-resourcesWeekViewRowSlots')[1],
      'drop',
      650
    );
    expect(onEventDrop).toHaveBeenCalledWith(
      expect.objectContaining({
        eventId: 'booking',
        resourceId: 0,
        newStart: '2026-11-01 09:00:00',
        newEnd: '2026-11-01 10:00:00',
      })
    );
  });

  it('resizes across the month boundary in whole days', () => {
    const onEventResize = jest.fn();
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        events={[event]}
        withEventResize
        onEventResize={onEventResize}
      />
    );
    stubCellRects(container);
    fireEvent.pointerDown(container.querySelector('[data-edge="end"]')!);
    fireEvent(document, new MouseEvent('pointermove', { clientX: 650, bubbles: true }));
    fireEvent.pointerUp(document);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({
        eventId: 'booking',
        newStart: '2026-10-30 09:00:00',
        newEnd: '2026-11-01 10:00:00',
      })
    );
  });

  it('disables cell and event interactions in static mode', async () => {
    const onDayClick = jest.fn();
    const { container } = render(
      <ResourcesWeekView
        {...defaultProps}
        events={[event]}
        mode="static"
        withEventResize
        withEventsDragAndDrop
        onDayClick={onDayClick}
      />
    );
    expect(container.querySelector('[data-edge]')).toBeNull();
    expect(container.querySelector('[draggable="true"]')).toBeNull();
    expect(getCells(container)[0]).toHaveAttribute('tabindex', '-1');
    fireEvent.click(getCells(container)[0]);
    expect(onDayClick).not.toHaveBeenCalled();
  });

  it('preserves week theme defaults, styles, attributes, refs and layout switching', () => {
    const ref = createRef<HTMLDivElement>();
    const props: ResourcesWeekViewProps = {
      ...defaultProps,
      attributes: { resourcesWeekViewCell: { 'data-cell': 'custom' } },
      styles: (theme, resolvedProps) => ({
        resourcesWeekViewCell: {
          color: resolvedProps.layout === 'days' ? theme.colors.red[6] : undefined,
        },
      }),
    };
    const { container, rerender } = render(<ResourcesWeekView {...props} ref={ref} />, {
      components: {
        ResourcesWeekView: ResourcesWeekView.extend({
          defaultProps: { dayWidth: 150 },
          classNames: { resourcesWeekViewCell: 'themed-cell' },
        }),
        ResourcesMonthView: ResourcesMonthView.extend({ defaultProps: { mode: 'static' } }),
      },
    });
    expect(ref.current).toHaveClass('mantine-ResourcesWeekView-resourcesWeekView');
    expect(ref.current).toHaveClass(ResourcesWeekView.classes.resourcesWeekView);
    expect(container.querySelector('.mantine-ResourcesWeekView-resourcesWeekViewRoot')).toHaveClass(
      ResourcesWeekView.classes.resourcesWeekViewRoot
    );
    expect(ref.current?.style.getPropertyValue('--resources-week-view-day-width')).toBe(
      'calc(9.375rem * var(--mantine-scale))'
    );
    expect(getCells(container)[0]).toHaveAttribute('data-cell', 'custom');
    expect(getCells(container)[0]).toHaveClass('themed-cell');
    expect(getCells(container)[0]).not.toHaveAttribute('data-static');
    expect(getCells(container)[0].style.color).not.toBe('');
    rerender(
      <ResourcesWeekView
        {...props}
        ref={ref}
        layout="time"
        startTime="09:00:00"
        endTime="10:00:00"
      />
    );
    expect(getCells(container)).toHaveLength(0);
    expect(ref.current).toHaveClass('mantine-ResourcesWeekView-resourcesWeekView');
    rerender(<ResourcesWeekView {...props} ref={ref} />);
    expect(getCells(container)).toHaveLength(14);
  });

  it('passes resolved layout to style callbacks in both layouts', () => {
    const styles = jest.fn(() => ({}));
    const { rerender } = render(<ResourcesWeekView {...defaultProps} styles={styles} />);
    expect(styles.mock.calls.length).toBeGreaterThan(0);
    expect(styles.mock.calls.every((call: any[]) => call[1].layout === 'days')).toBe(true);
    styles.mockClear();
    rerender(<ResourcesWeekView {...defaultProps} layout="time" styles={styles} />);
    expect(styles.mock.calls.length).toBeGreaterThan(0);
    expect(styles.mock.calls.every((call: any[]) => call[1].layout === 'time')).toBe(true);
  });
});
