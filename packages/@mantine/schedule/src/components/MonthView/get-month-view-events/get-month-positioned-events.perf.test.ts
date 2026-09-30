import dayjs from 'dayjs';
import { testUtils } from '../../../test-utils';
import { getMonthPositionedEvents } from './get-month-positioned-events';

jest.mock('dayjs', () => {
  const actual = jest.requireActual('dayjs');
  const counted = jest.fn((...args: unknown[]) => actual(...args));
  return Object.assign(counted, actual);
});

describe('@mantine/schedule/get-month-positioned-events/performance', () => {
  it('parses a bounded number of dates per event when many events share the same day', () => {
    const events = Array.from({ length: 500 }, (_, id) =>
      testUtils.createEvent({ id, start: '2025-01-15 10:00:00', end: '2025-01-15 11:00:00' })
    );

    (dayjs as unknown as jest.Mock).mockClear();
    const result = getMonthPositionedEvents({ date: '2025-01-01', events });

    expect((dayjs as unknown as jest.Mock).mock.calls.length).toBeLessThan(events.length * 10);
    expect(result.groupedByDay['2025-01-15 00:00:00'].map((event) => event.position.row)).toEqual(
      events.map((_, index) => index)
    );
  });
});
