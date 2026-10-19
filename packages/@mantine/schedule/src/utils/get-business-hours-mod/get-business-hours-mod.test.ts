import { getBusinessHoursMod, getBusinessHoursState } from './get-business-hours-mod';

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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
      });

      const result2 = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: ['08:30:00', '18:30:00'],
        highlightBusinessHours: true,
      });

      expect(result2).toEqual({
        'business-hours': true,
        'non-business-hours': false,
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
      });
    });
  });

  describe('boundary conditions', () => {
    it('handles time one second before start', () => {
      const result = getBusinessHoursMod({
        time: '08:59:59',
        businessHours: ['09:00:00', '17:00:00'],
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
        'partial-business-hours': false,
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
        'partial-business-hours': false,
      });

      const noon = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: ['00:00:00', '23:59:59'],
        highlightBusinessHours: true,
      });

      expect(noon).toEqual({
        'business-hours': true,
        'non-business-hours': false,
        'partial-business-hours': false,
      });

      const almostEnd = getBusinessHoursMod({
        time: '23:59:58',
        businessHours: ['00:00:00', '23:59:59'],
        highlightBusinessHours: true,
      });

      expect(almostEnd).toEqual({
        'business-hours': true,
        'non-business-hours': false,
        'partial-business-hours': false,
      });

      const end = getBusinessHoursMod({
        time: '23:59:59',
        businessHours: ['00:00:00', '23:59:59'],
        highlightBusinessHours: true,
      });

      expect(end).toEqual({
        'business-hours': false,
        'non-business-hours': true,
        'partial-business-hours': false,
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
        'partial-business-hours': false,
      });

      const during = getBusinessHoursMod({
        time: '12:30:00',
        businessHours: ['12:00:00', '13:00:00'],
        highlightBusinessHours: true,
      });

      expect(during).toEqual({
        'business-hours': true,
        'non-business-hours': false,
        'partial-business-hours': false,
      });

      const after = getBusinessHoursMod({
        time: '13:00:00',
        businessHours: ['12:00:00', '13:00:00'],
        highlightBusinessHours: true,
      });

      expect(after).toEqual({
        'business-hours': false,
        'non-business-hours': true,
        'partial-business-hours': false,
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
        'partial-business-hours': false,
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
        'partial-business-hours': false,
      });
    });
  });

  describe('per-day businessHours record', () => {
    it('returns no modifiers when dayOfWeek is not provided', () => {
      const result = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: { 1: ['09:00:00', '17:00:00'] },
        highlightBusinessHours: true,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': false,
        'partial-business-hours': false,
      });
    });

    it('applies the range configured for the given day of week', () => {
      const monday = getBusinessHoursMod({
        time: '10:00:00',
        businessHours: {
          1: ['09:00:00', '17:00:00'],
          2: ['10:00:00', '14:00:00'],
        },
        highlightBusinessHours: true,
        dayOfWeek: 1,
      });

      expect(monday).toEqual({
        'business-hours': true,
        'non-business-hours': false,
        'partial-business-hours': false,
      });

      const tuesday = getBusinessHoursMod({
        time: '15:00:00',
        businessHours: {
          1: ['09:00:00', '17:00:00'],
          2: ['10:00:00', '14:00:00'],
        },
        highlightBusinessHours: true,
        dayOfWeek: 2,
      });

      expect(tuesday).toEqual({
        'business-hours': false,
        'non-business-hours': true,
        'partial-business-hours': false,
      });
    });

    it('marks entire day as non-business when day is missing from the record', () => {
      const resultMorning = getBusinessHoursMod({
        time: '09:00:00',
        businessHours: { 1: ['09:00:00', '17:00:00'] },
        highlightBusinessHours: true,
        dayOfWeek: 0,
      });

      expect(resultMorning).toEqual({
        'business-hours': false,
        'non-business-hours': true,
        'partial-business-hours': false,
      });

      const resultEvening = getBusinessHoursMod({
        time: '20:00:00',
        businessHours: { 1: ['09:00:00', '17:00:00'] },
        highlightBusinessHours: true,
        dayOfWeek: 0,
      });

      expect(resultEvening).toEqual({
        'business-hours': false,
        'non-business-hours': true,
        'partial-business-hours': false,
      });
    });

    it('marks entire day as non-business when day is explicitly set to null', () => {
      const result = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: {
          1: ['09:00:00', '17:00:00'],
          6: null,
        },
        highlightBusinessHours: true,
        dayOfWeek: 6,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': true,
        'partial-business-hours': false,
      });
    });

    it('returns business-hours for times within the per-day range', () => {
      const result = getBusinessHoursMod({
        time: '11:30:00',
        businessHours: {
          1: ['09:00:00', '13:00:00'],
          2: ['09:00:00', '17:00:00'],
          3: ['09:00:00', '17:00:00'],
          4: ['09:00:00', '17:00:00'],
          5: ['09:00:00', '13:00:00'],
        },
        highlightBusinessHours: true,
        dayOfWeek: 5,
      });

      expect(result).toEqual({
        'business-hours': true,
        'non-business-hours': false,
        'partial-business-hours': false,
      });
    });

    it('returns no modifiers when highlightBusinessHours is false even with per-day record', () => {
      const result = getBusinessHoursMod({
        time: '12:00:00',
        businessHours: { 1: ['09:00:00', '17:00:00'] },
        highlightBusinessHours: false,
        dayOfWeek: 1,
      });

      expect(result).toEqual({
        'business-hours': false,
        'non-business-hours': false,
        'partial-business-hours': false,
      });
    });
  });
});

describe('@mantine/schedule/get-business-hours-state', () => {
  const businessHours: [string, string] = ['07:42:00', '19:01:00'];

  it('returns fully inside state for a slot inside the range', () => {
    expect(
      getBusinessHoursState({
        time: '12:00:00',
        endTime: '12:15:00',
        businessHours,
        highlightBusinessHours: true,
      })
    ).toEqual({
      mod: { 'business-hours': true, 'non-business-hours': false, 'partial-business-hours': false },
      vars: undefined,
    });
  });

  it('returns fully outside state for a slot outside the range', () => {
    expect(
      getBusinessHoursState({
        time: '20:00:00',
        endTime: '20:15:00',
        businessHours,
        highlightBusinessHours: true,
      })
    ).toEqual({
      mod: { 'business-hours': false, 'non-business-hours': true, 'partial-business-hours': false },
      vars: undefined,
    });
  });

  it('returns partial state when the range starts inside the slot', () => {
    expect(
      getBusinessHoursState({
        time: '07:30:00',
        endTime: '07:45:00',
        businessHours,
        highlightBusinessHours: true,
      })
    ).toEqual({
      mod: { 'business-hours': false, 'non-business-hours': false, 'partial-business-hours': true },
      vars: { '--business-hours-from': '80%', '--business-hours-to': '100%' },
    });
  });

  it('returns partial state when the range ends inside the slot', () => {
    expect(
      getBusinessHoursState({
        time: '19:00:00',
        endTime: '19:15:00',
        businessHours,
        highlightBusinessHours: true,
      })
    ).toEqual({
      mod: { 'business-hours': false, 'non-business-hours': false, 'partial-business-hours': true },
      vars: { '--business-hours-from': '0%', '--business-hours-to': '6.67%' },
    });
  });

  it('returns partial state with both boundaries inside the slot', () => {
    expect(
      getBusinessHoursState({
        time: '07:00:00',
        endTime: '08:00:00',
        businessHours: ['07:15:00', '07:45:00'],
        highlightBusinessHours: true,
      })
    ).toEqual({
      mod: { 'business-hours': false, 'non-business-hours': false, 'partial-business-hours': true },
      vars: { '--business-hours-from': '25%', '--business-hours-to': '75%' },
    });
  });

  it('does not return partial state when boundaries fall on slot edges', () => {
    const start = getBusinessHoursState({
      time: '08:45:00',
      endTime: '09:00:00',
      businessHours: ['09:00:00', '17:00:00'],
      highlightBusinessHours: true,
    });
    const end = getBusinessHoursState({
      time: '16:45:00',
      endTime: '17:00:00',
      businessHours: ['09:00:00', '17:00:00'],
      highlightBusinessHours: true,
    });

    expect(start.mod).toEqual({
      'business-hours': false,
      'non-business-hours': true,
      'partial-business-hours': false,
    });
    expect(end.mod).toEqual({
      'business-hours': true,
      'non-business-hours': false,
      'partial-business-hours': false,
    });
    expect(start.vars).toBeUndefined();
    expect(end.vars).toBeUndefined();
  });

  it('accepts HH:mm business hours', () => {
    expect(
      getBusinessHoursState({
        time: '07:30:00',
        endTime: '07:45:00',
        businessHours: ['07:42', '19:01'],
        highlightBusinessHours: true,
      }).vars
    ).toEqual({ '--business-hours-from': '80%', '--business-hours-to': '100%' });

    expect(
      getBusinessHoursMod({
        time: '09:00:00',
        businessHours: ['09:00', '17:00'],
        highlightBusinessHours: true,
      })['business-hours']
    ).toBe(true);
  });

  it('resolves per-day ranges for partial slots', () => {
    const monday = getBusinessHoursState({
      time: '09:00:00',
      endTime: '10:00:00',
      businessHours: { 1: ['09:30:00', '17:00:00'], 2: null },
      highlightBusinessHours: true,
      dayOfWeek: 1,
    });
    const tuesday = getBusinessHoursState({
      time: '09:00:00',
      endTime: '10:00:00',
      businessHours: { 1: ['09:30:00', '17:00:00'], 2: null },
      highlightBusinessHours: true,
      dayOfWeek: 2,
    });

    expect(monday.mod['partial-business-hours']).toBe(true);
    expect(monday.vars).toEqual({ '--business-hours-from': '50%', '--business-hours-to': '100%' });
    expect(tuesday.mod).toEqual({
      'business-hours': false,
      'non-business-hours': true,
      'partial-business-hours': false,
    });
  });

  it('falls back to start time check when endTime is not provided', () => {
    expect(
      getBusinessHoursState({ time: '07:30:00', businessHours, highlightBusinessHours: true })
    ).toEqual({
      mod: { 'business-hours': false, 'non-business-hours': true, 'partial-business-hours': false },
      vars: undefined,
    });
  });

  it('returns no modifiers when highlighting is disabled', () => {
    expect(
      getBusinessHoursState({
        time: '07:30:00',
        endTime: '07:45:00',
        businessHours,
        highlightBusinessHours: false,
      })
    ).toEqual({
      mod: {
        'business-hours': false,
        'non-business-hours': false,
        'partial-business-hours': false,
      },
      vars: undefined,
    });
  });
});
