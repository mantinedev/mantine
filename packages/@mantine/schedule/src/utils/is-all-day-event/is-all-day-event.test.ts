import dayjs from 'dayjs';
import { testUtils } from '../../test-utils';
import { toDateString } from '../to-date-string/to-date-string';
import { isAllDayEvent } from './is-all-day-event';

describe('@mantine/schedule/is-all-day-event', () => {
  it('detects all-day events', () => {
    expect(
      isAllDayEvent({
        date: testUtils.testDate,
        event: testUtils.createEvent({
          start: `${testUtils.testDate} 00:00:00`,
          end: toDateString(dayjs(testUtils.testDate).add(1, 'day').startOf('day')),
        }),
      })
    ).toBe(true);
  });

  it('does not detect regular events as all-day', () => {
    expect(
      isAllDayEvent({
        event: testUtils.createEvent({
          start: `${testUtils.testDate} 10:00:00`,
          end: `${testUtils.testDate} 11:30:00`,
        }),
        date: testUtils.testDate,
      })
    ).toBe(false);
  });
});
