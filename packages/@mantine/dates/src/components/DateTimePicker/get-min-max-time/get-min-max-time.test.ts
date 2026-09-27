import { getMaxTime, getMinTime } from './get-min-max-time';

describe('@mantine/dates/get-min-max-time', () => {
  describe('getMinTime', () => {
    it('returns correct min time when value equals minDate', () => {
      const minDate = '2022-04-11 00:30:00';
      const value = '2022-04-11 00:30:00';

      expect(getMinTime({ minDate, value })).toBe('00:30:00');
    });

    it('returns min time when value is on the same day as minDate', () => {
      expect(getMinTime({ minDate: '2022-04-11 00:30:00', value: '2022-04-11 00:00:00' })).toBe(
        '00:30:00'
      );
      expect(getMinTime({ minDate: '2022-04-11 00:30:00', value: '2022-04-11 18:00:00' })).toBe(
        '00:30:00'
      );
    });

    it('returns min time when minDate is a Date object', () => {
      const minDate = new Date(2022, 3, 11, 10, 30);
      expect(getMinTime({ minDate, value: '2022-04-11 12:00:00' })).toBe('10:30:00');
    });

    it('returns undefined when value is not on the same day as minDate', () => {
      const minDate = '2022-04-11 00:30:00';
      expect(getMinTime({ minDate, value: '2022-04-12 00:00:00' })).toBe(undefined);
      expect(getMinTime({ minDate, value: '2022-04-10 23:59:59' })).toBe(undefined);
    });

    it('returns undefined when minDate is undefined', () => {
      const value = '2022-04-11 00:00:00';

      expect(getMinTime({ minDate: undefined, value })).toBe(undefined);
    });

    it('returns undefined when value is null', () => {
      const minDate = '2022-04-11 00:30:00';

      expect(getMinTime({ minDate, value: null })).toBe(undefined);
    });
  });

  describe('getMaxTime', () => {
    it('returns correct max time when value equals maxDate', () => {
      const maxDate = '2022-04-11 22:30:00';
      const value = '2022-04-11 22:30:00';

      expect(getMaxTime({ maxDate, value })).toBe('22:30:00');
    });

    it('returns max time when value is on the same day as maxDate', () => {
      expect(getMaxTime({ maxDate: '2022-04-11 22:30:00', value: '2022-04-11 22:00:00' })).toBe(
        '22:30:00'
      );
      expect(getMaxTime({ maxDate: '2022-04-11 22:30:00', value: '2022-04-11 23:00:00' })).toBe(
        '22:30:00'
      );
    });

    it('returns max time when maxDate is a Date object', () => {
      const maxDate = new Date(2022, 3, 11, 18, 15);
      expect(getMaxTime({ maxDate, value: '2022-04-11 12:00:00' })).toBe('18:15:00');
    });

    it('returns undefined when value is not on the same day as maxDate', () => {
      const maxDate = '2022-04-11 22:30:00';
      expect(getMaxTime({ maxDate, value: '2022-04-10 22:30:00' })).toBe(undefined);
      expect(getMaxTime({ maxDate, value: '2022-04-12 00:00:00' })).toBe(undefined);
    });

    it('returns undefined when maxDate is undefined', () => {
      const value = '2022-04-11 22:00:00';

      expect(getMaxTime({ maxDate: undefined, value })).toBe(undefined);
    });

    it('returns undefined when value is null', () => {
      const maxDate = '2022-04-11 22:30:00';

      expect(getMaxTime({ maxDate, value: null })).toBe(undefined);
    });
  });
});
