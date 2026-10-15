import { buildDateString } from './build-date-string';

describe('@mantine/dates/buildDateString', () => {
  it('builds a valid date string without time', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: null,
        minutes: null,
        seconds: null,
        withTime: false,
        withSeconds: false,
      })
    ).toEqual({ valid: true, value: '2024-03-15' });
  });

  it('builds a valid datetime string with time but without seconds', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: 14,
        minutes: 30,
        seconds: null,
        withTime: true,
        withSeconds: false,
      })
    ).toEqual({ valid: true, value: '2024-03-15 14:30:00' });
  });

  it('builds a valid datetime string with seconds', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: 14,
        minutes: 30,
        seconds: 45,
        withTime: true,
        withSeconds: true,
      })
    ).toEqual({ valid: true, value: '2024-03-15 14:30:45' });
  });

  it('returns invalid when day is null', () => {
    expect(
      buildDateString({
        day: null,
        month: 3,
        year: 2024,
        hours: null,
        minutes: null,
        seconds: null,
        withTime: false,
        withSeconds: false,
      })
    ).toEqual({ valid: false, value: '' });
  });

  it('returns invalid when withTime is true but hours is null', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: null,
        minutes: 30,
        seconds: null,
        withTime: true,
        withSeconds: false,
      })
    ).toEqual({ valid: false, value: '' });
  });

  it('returns invalid when withSeconds is true but seconds is null', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: 14,
        minutes: 30,
        seconds: null,
        withTime: true,
        withSeconds: true,
      })
    ).toEqual({ valid: false, value: '' });
  });

  it('pads single-digit values correctly', () => {
    expect(
      buildDateString({
        day: 5,
        month: 3,
        year: 24,
        hours: null,
        minutes: null,
        seconds: null,
        withTime: false,
        withSeconds: false,
      })
    ).toEqual({ valid: true, value: '0024-03-05' });
  });

  it('converts 12h AM time to 24h correctly', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: 12,
        minutes: 30,
        seconds: null,
        withTime: true,
        withSeconds: false,
        format: '12h',
        amPm: 'am',
      })
    ).toEqual({ valid: true, value: '2024-03-15 00:30:00' });
  });

  it('converts 12h PM time to 24h correctly', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: 2,
        minutes: 30,
        seconds: null,
        withTime: true,
        withSeconds: false,
        format: '12h',
        amPm: 'pm',
      })
    ).toEqual({ valid: true, value: '2024-03-15 14:30:00' });
  });

  it('returns invalid when format is 12h but amPm is null', () => {
    expect(
      buildDateString({
        day: 15,
        month: 3,
        year: 2024,
        hours: 2,
        minutes: 30,
        seconds: null,
        withTime: true,
        withSeconds: false,
        format: '12h',
        amPm: null,
      })
    ).toEqual({ valid: false, value: '' });
  });
});
