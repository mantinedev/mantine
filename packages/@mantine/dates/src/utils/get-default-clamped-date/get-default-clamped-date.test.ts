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

  it("returns minDate if today's date is exactly minDate", () => {
    const minDate = dayjs().format('YYYY-MM-DD');
    expect(getDefaultClampedDate({ minDate, maxDate: undefined })).toBe(minDate);
  });

  it("returns maxDate if today's date is exactly maxDate", () => {
    const maxDate = dayjs().format('YYYY-MM-DD');
    expect(getDefaultClampedDate({ minDate: undefined, maxDate })).toBe(maxDate);
  });
});
