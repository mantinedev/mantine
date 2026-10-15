import { render } from '@mantine-tests/core';
import { expandRecurringEvents } from '../../utils/expand-recurring-events/expand-recurring-events';
import { YearView } from './YearView';

jest.mock('../../utils/expand-recurring-events/expand-recurring-events', () => {
  const actual = jest.requireActual('../../utils/expand-recurring-events/expand-recurring-events');
  return { ...actual, expandRecurringEvents: jest.fn(actual.expandRecurringEvents) };
});

const events = [
  {
    id: 'daily',
    title: 'Daily',
    start: '2025-11-03 09:00:00',
    end: '2025-11-03 10:00:00',
    color: 'blue',
    recurrence: { rrule: 'FREQ=DAILY;COUNT=5' },
  },
];

describe('@mantine/schedule/YearView/recurrence-memo', () => {
  it('expands recurring events again only when events or the displayed range change', () => {
    const expandMock = expandRecurringEvents as jest.Mock;
    const { rerender } = render(<YearView date="2025-11-01" events={events} />);
    expect(expandMock).toHaveBeenCalledTimes(1);

    rerender(<YearView date="2025-11-01" events={events} />);
    expect(expandMock).toHaveBeenCalledTimes(1);

    rerender(<YearView date="2026-03-01" events={events} />);
    expect(expandMock).toHaveBeenCalledTimes(2);

    rerender(<YearView date="2026-03-01" events={[...events]} />);
    expect(expandMock).toHaveBeenCalledTimes(3);
  });
});
