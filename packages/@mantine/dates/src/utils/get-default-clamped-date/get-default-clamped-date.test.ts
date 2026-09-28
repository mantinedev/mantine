import dayjs from 'dayjs';
import { getDefaultClampedDate } from './get-default-clamped-date';

describe('@mantine/dates/get-default-clamped-date', () => {
  it("returns today's date if minDate and maxDate are not set", () => {
    const today = dayjs().format('YYYY-MM-DD');
    expect(getDefaultClampedDate({ minDate: undefined, maxDate: undefined })).toBe(today);
  });

  it("returns minDate if today's date is before minDate", () => {
    const minDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
    expect(getDefaultClampedDate({ minDate, maxDate: undefined })).toBe(minDate);
  });

  it("returns maxDate if today's date is after maxDate", () => {
    const maxDate = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
    expect(getDefaultClampedDate({ minDate: undefined, maxDate })).toBe(maxDate);
  });

  it("returns today's date if today's date is within minDate and maxDate boundaries", () => {
    const minDate = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
    const maxDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
    const today = dayjs().format('YYYY-MM-DD');
    expect(getDefaultClampedDate({ minDate, maxDate })).toBe(today);
  });

  describe('same day boundaries', () => {
    beforeEach(() => {
      jest.useFakeTimers().setSystemTime(new Date(2024, 5, 15, 10));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('returns minDate as a date string if minDate is later on the same day', () => {
      expect(
        getDefaultClampedDate({ minDate: new Date(2024, 5, 15, 18), maxDate: undefined })
      ).toBe('2024-06-15');
    });

    it('returns maxDate as a date string if maxDate is earlier on the same day', () => {
      expect(getDefaultClampedDate({ minDate: undefined, maxDate: new Date(2024, 5, 15, 8) })).toBe(
        '2024-06-15'
      );
    });
  });
});
