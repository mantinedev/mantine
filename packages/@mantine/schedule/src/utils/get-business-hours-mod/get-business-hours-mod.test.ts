import { getBusinessHoursMod } from './get-business-hours-mod';

describe('@mantine/schedule/get-business-hours-mod', () => {
  describe('disabled state', () => {
    it('returns no modifiers when highlightBusinessHours is false', () => {
      const result = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: false,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': false,
      });
    });

    it('returns no modifiers when businessHours is not provided', () => {
      const result = getBusinessHoursMod({
        time: '12:00:00',
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': false,
      });
    });

    it('returns no modifiers when both disabled and hours not provided', () => {
      const result = getBusinessHoursMod({
        time: '12:00:00',
        highlightBusinessHours: false,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': false,
      });
    });
  });

  describe('time within business hours', () => {
    it('returns business-hours modifier for time within range', () => {
      const result = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });

    it('includes start time (inclusive)', () => {
      const result = getBusinessHoursMod({
        time: '09:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });

    it('handles time just before end (exclusive)', () => {
      const result = getBusinessHoursMod({
        time: '16:59:59',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });

    it('works with different business hours ranges', () => {
      const result1 = getBusinessHoursMod({
        time: '09:00:00',
        businessHours: ['08:30:00', '18:30:00'],
        highlightBusinessHours: true,
      });

      expect(result1).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });

      const result2 = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: ['08:30:00', '18:30:00'],
        highlightBusinessHours: true,
      });

      expect(result2).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });
  });

  describe('time outside business hours', () => {
    it('returns non-business-hours modifier for time before range', () => {
      const result = getBusinessHoursMod({
        time: '08:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });

    it('returns non-business-hours modifier for time after range', () => {
      const result = getBusinessHoursMod({
        time: '18:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });

    it('excludes end time (exclusive)', () => {
      const result = getBusinessHoursMod({
        time: '17:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });

    it('handles early morning hours', () => {
      const result = getBusinessHoursMod({
        time: '05:30:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });

    it('handles late evening hours', () => {
      const result = getBusinessHoursMod({
        time: '22:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });
  });

  describe('boundary conditions', () => {
    it('handles time exactly at start boundary', () => {
      const result = getBusinessHoursMod({
        time: '09:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });

    it('handles time exactly at end boundary', () => {
      const result = getBusinessHoursMod({
        time: '17:00:00',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });

    it('handles time one second before end', () => {
      const result = getBusinessHoursMod({
        time: '16:59:59',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });

    it('handles time one second before start', () => {
      const result = getBusinessHoursMod({
        time: '08:59:59',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });
  });

  describe('edge cases', () => {
    it('handles full day schedule', () => {
      const morning = getBusinessHoursMod({
        time: '00:00:00',
        businessHours: ['00:00:00', '23:59:59'],
        highlightBusinessHours: true,
      });

      expect(morning).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });

      const noon = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: ['00:00:00', '23:59:59'],
        highlightBusinessHours: true,
      });

      expect(noon).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });

      const almostEnd = getBusinessHoursMod({
        time: '23:59:58',
        businessHours: ['00:00:00', '23:59:59'],
        highlightBusinessHours: true,
      });

      expect(almostEnd).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });

      const end = getBusinessHoursMod({
        time: '23:59:59',
        businessHours: ['00:00:00', '23:59:59'],
        highlightBusinessHours: true,
      });

      expect(end).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });

    it('handles short business hours window', () => {
      const before = getBusinessHoursMod({
        time: '11:59:59',
        businessHours: ['12:00:00', '13:00:00'],
        highlightBusinessHours: true,
      });

      expect(before).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });

      const during = getBusinessHoursMod({
        time: '12:30:00',
        businessHours: ['12:00:00', '13:00:00'],
        highlightBusinessHours: true,
      });

      expect(during).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });

      const after = getBusinessHoursMod({
        time: '13:00:00',
        businessHours: ['12:00:00', '13:00:00'],
        highlightBusinessHours: true,
      });

      expect(after).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });

    it('handles early morning business hours', () => {
      const result = getBusinessHoursMod({
        time: '07:00:00',
        businessHours: ['06:00:00', '14:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });

    it('handles late evening business hours', () => {
      const result = getBusinessHoursMod({
        time: '20:00:00',
        businessHours: ['14:00:00', '22:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });
    });
  });

  describe('string comparison', () => {
    it('uses lexicographic comparison correctly', () => {
      // String comparison works for HH:mm:ss format
      const result1 = getBusinessHoursMod({
        time: '08:59:59',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result1).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });

      const result2 = getBusinessHoursMod({
        time: '09:00:01',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result2).toEqual({
        'business-hours': true,
        'non-business-hours': false,
      });

      const result3 = getBusinessHoursMod({
        time: '17:00:01',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result3).toEqual({
        'business-hours': false,
        'non-business-hours': true,
      });
    });
  });
});
