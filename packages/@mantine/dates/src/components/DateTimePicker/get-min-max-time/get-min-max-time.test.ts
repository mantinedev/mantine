import { getMaxTime, getMinTime } from './get-min-max-time';

describe('@mantine/dates/get-min-max-time', () => {
  describe('getMinTime', () => {
    it('returns correct min time when value equals minDate', () => {
      const minDate = '2022-04-11 00:30:00';
      const value = '2022-04-11 00:30:00';

      expect(getMinTime({ minDate, value })).toBe('00:30:00');
    });

    it('returns undefined when value does not equal minDate', () => {
      const minDate = '2022-04-11 00:30:00';
      const value = '2022-04-11 00:00:00';

      expect(getMinTime({ minDate, value })).toBe(undefined);
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

    it('returns undefined when value does not equal maxDate', () => {
      const maxDate = '2022-04-11 22:30:00';
      const value = '2022-04-11 22:00:00';

      expect(getMaxTime({ maxDate, value })).toBe(undefined);
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
