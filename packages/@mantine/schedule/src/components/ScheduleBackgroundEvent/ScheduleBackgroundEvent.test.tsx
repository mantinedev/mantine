import { fireEvent } from '@testing-library/react';
import { render, screen } from '@mantine-tests/core';
import { ScheduleEventData } from '../../types';
import { ScheduleBackgroundEvent } from './ScheduleBackgroundEvent';

const event: ScheduleEventData = {
  id: 1,
  title: 'Unavailable',
  start: '2024-01-15 09:00:00',
  end: '2024-01-15 10:00:00',
  color: 'blue',
  payload: {},
};

describe('@mantine/schedule/ScheduleBackgroundEvent', () => {
  it('renders a div when not interactive', () => {
    const { container } = render(<ScheduleBackgroundEvent event={event} />);
    expect(container.querySelector('button')).toBeNull();
    expect(container.querySelector('div')).toBeInstanceOf(HTMLDivElement);
  });

  it('renders a button and calls onEventClick when interactive', () => {
    const onEventClick = jest.fn();
    render(<ScheduleBackgroundEvent event={event} interactive onEventClick={onEventClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onEventClick).toHaveBeenCalledTimes(1);
    expect(onEventClick.mock.calls[0][0]).toBe(event);
  });

  it('keeps the style given by the view', () => {
    render(
      <ScheduleBackgroundEvent event={event} interactive style={{ left: '10%', width: '20%' }} />
    );

    const element = screen.getByRole('button');
    expect(element).toHaveStyle({ left: '10%', width: '20%' });
  });

  it('stops capturing pointer events while a drag passes over it', () => {
    render(
      <ScheduleBackgroundEvent event={event} interactive style={{ left: '10%', width: '20%' }} />
    );

    const element = screen.getByRole('button');
    expect(element).not.toHaveStyle({ pointerEvents: 'none' });

    fireEvent.dragEnter(element);

    // The drop targets underneath must become reachable, without losing positioning
    expect(element).toHaveStyle({ pointerEvents: 'none', left: '10%', width: '20%' });
  });

  it('captures pointer events again once the drag ends', () => {
    render(<ScheduleBackgroundEvent event={event} interactive />);
    const element = screen.getByRole('button');

    fireEvent.dragEnter(element);
    expect(element).toHaveStyle({ pointerEvents: 'none' });

    fireEvent.dragEnd(document);
    expect(element).not.toHaveStyle({ pointerEvents: 'none' });
  });

  it('recovers when the drag ends without a drop or dragend event', () => {
    render(<ScheduleBackgroundEvent event={event} interactive />);
    const element = screen.getByRole('button');

    fireEvent.dragEnter(element);
    expect(element).toHaveStyle({ pointerEvents: 'none' });

    // Dropped on another window: neither `drop` nor `dragend` reaches this document, but
    // pointer events start flowing again as soon as the drag is over.
    fireEvent.pointerMove(document);
    expect(element).not.toHaveStyle({ pointerEvents: 'none' });
  });

  it('preserves a function style while passing the drag through', () => {
    render(
      <ScheduleBackgroundEvent
        event={event}
        interactive
        style={() => ({ left: '30%', width: '15%' })}
      />
    );

    const element = screen.getByRole('button');
    expect(element).toHaveStyle({ left: '30%', width: '15%' });

    fireEvent.dragEnter(element);
    expect(element).toHaveStyle({ pointerEvents: 'none', left: '30%', width: '15%' });
  });
});
