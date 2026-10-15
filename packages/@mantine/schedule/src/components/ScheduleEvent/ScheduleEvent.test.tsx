import { fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { useDragDropHandlers } from '../../hooks/use-drag-drop-handlers';
import { DragContext } from '../DragContext/DragContext';
import { ScheduleEvent, ScheduleEventProps, ScheduleEventStylesNames } from './ScheduleEvent';

const defaultProps: ScheduleEventProps = {
  event: {
    id: '1',
    title: 'Test event',
    color: 'blue',
    start: `2024-01-01 10:00:00`,
    end: `2024-01-01 11:00:00`,
    payload: {},
  },
};

describe('@mantine/schedule/ScheduleEvent', () => {
  tests.itSupportsSystemProps<ScheduleEventProps, ScheduleEventStylesNames>({
    component: ScheduleEvent,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/schedule/ScheduleEvent',
    stylesApiSelectors: ['event', 'eventInner'],
  });

  it('renders event title', () => {
    render(<ScheduleEvent {...defaultProps} />);
    expect(screen.getByText('Test event')).toBeInTheDocument();
  });

  it('supports renderEventBody prop', () => {
    render(
      <ScheduleEvent
        {...defaultProps}
        renderEventBody={(event) => (
          <div>
            <strong>{event.title}</strong>
            <div>Custom body</div>
          </div>
        )}
      />
    );

    expect(screen.getByText('Test event')).toBeInTheDocument();
    expect(screen.getByText('Custom body')).toBeInTheDocument();
  });

  it('sets data-nowrap attribute when nowrap prop is true', () => {
    const { rerender, container } = render(<ScheduleEvent {...defaultProps} nowrap />);
    expect(container.querySelector('.mantine-ScheduleEvent-eventInner')).toHaveAttribute(
      'data-nowrap'
    );

    rerender(<ScheduleEvent {...defaultProps} />);
    expect(container.querySelector('.mantine-ScheduleEvent-eventInner')).not.toHaveAttribute(
      'data-nowrap'
    );
  });

  it('sets data-auto-size attribute when autoSize prop is true', () => {
    const { rerender, container } = render(<ScheduleEvent {...defaultProps} autoSize />);
    expect(container.querySelector('.mantine-ScheduleEvent-event')).toHaveAttribute(
      'data-auto-size'
    );

    rerender(<ScheduleEvent {...defaultProps} />);
    expect(container.querySelector('.mantine-ScheduleEvent-event')).not.toHaveAttribute(
      'data-auto-size'
    );
  });

  it('sets data-event-id attribute', () => {
    render(<ScheduleEvent {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-event-id', '1');
  });

  it('sets data-hanging attribute to hanging prop value', () => {
    const { container } = render(<ScheduleEvent {...defaultProps} hanging="start" />);
    expect(container.querySelector('.mantine-ScheduleEvent-event')).toHaveAttribute(
      'data-hanging',
      'start'
    );
  });

  it('uses event.title as the default title but lets consumer props override it', () => {
    const { rerender } = render(<ScheduleEvent {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('title', 'Test event');

    rerender(<ScheduleEvent {...defaultProps} title="Custom title" />);
    expect(screen.getByRole('button')).toHaveAttribute('title', 'Custom title');
  });

  it('forwards onClick in default mode', async () => {
    const spy = jest.fn();
    render(<ScheduleEvent {...defaultProps} onClick={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('suppresses consumer onClick in static mode', async () => {
    const spy = jest.fn();
    render(<ScheduleEvent {...defaultProps} mode="static" onClick={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).not.toHaveBeenCalled();
  });

  it('supports renderEvent prop for full customization', () => {
    render(
      <ScheduleEvent
        {...defaultProps}
        renderEvent={(event, props) => (
          <button data-testid="custom-event" type="button" {...props}>
            <span>Fully custom render</span>
            <span>Event: {event.title}</span>
            {props.children}
          </button>
        )}
      />
    );

    expect(screen.getByTestId('custom-event')).toBeInTheDocument();
    expect(screen.getByText('Fully custom render')).toBeInTheDocument();
    expect(screen.getByText('Event: Test event')).toBeInTheDocument();
    expect(screen.getByText('Test event')).toBeInTheDocument();
  });
});

function DragHarness({ onEventDragEnd }: { onEventDragEnd: () => void }) {
  const dragDrop = useDragDropHandlers<number>({
    enabled: true,
    mode: 'default',
    calculateDropTarget: () => ({
      start: new Date('2024-01-02T10:00:00'),
      end: new Date('2024-01-02T11:00:00'),
    }),
    onEventDrop: () => {},
    onEventDragEnd,
  });

  return (
    <DragContext.Provider value={dragDrop.dragContextValue}>
      <ScheduleEvent {...defaultProps} draggable />
      <div data-testid="drop-zone" onDrop={(e) => dragDrop.handleDrop(e, 0)} />
    </DragContext.Provider>
  );
}

describe('@mantine/schedule/ScheduleEvent drag lifecycle', () => {
  const dataTransfer = () => ({
    setData: jest.fn(),
    types: ['application/json'],
    effectAllowed: 'none',
    dropEffect: 'none',
  });

  it('calls onEventDragEnd once when the event is dropped', () => {
    const onEventDragEnd = jest.fn();
    render(<DragHarness onEventDragEnd={onEventDragEnd} />);
    const event = screen.getByRole('button');

    fireEvent.dragStart(event, { dataTransfer: dataTransfer() });
    fireEvent.drop(screen.getByTestId('drop-zone'), { dataTransfer: dataTransfer() });
    fireEvent.dragEnd(event, { dataTransfer: dataTransfer() });

    expect(onEventDragEnd).toHaveBeenCalledTimes(1);
  });

  it('calls onEventDragEnd once when the drag is cancelled', () => {
    const onEventDragEnd = jest.fn();
    render(<DragHarness onEventDragEnd={onEventDragEnd} />);
    const event = screen.getByRole('button');

    fireEvent.dragStart(event, { dataTransfer: dataTransfer() });
    fireEvent.dragEnd(event, { dataTransfer: dataTransfer() });

    expect(onEventDragEnd).toHaveBeenCalledTimes(1);
  });

  it('calls onEventDragEnd once when the dragged event unmounts', () => {
    const onEventDragEnd = jest.fn();
    const { unmount } = render(<DragHarness onEventDragEnd={onEventDragEnd} />);

    fireEvent.dragStart(screen.getByRole('button'), { dataTransfer: dataTransfer() });
    unmount();

    expect(onEventDragEnd).toHaveBeenCalledTimes(1);
  });
});
