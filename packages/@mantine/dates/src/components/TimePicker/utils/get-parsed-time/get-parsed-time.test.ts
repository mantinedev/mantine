import { getParsedTime } from './get-parsed-time';

describe('@mantine/dates/get-parsed-time', () => {
  it('parses time string', () => {
    expect(
      getParsedTime({ time: '12:30:45', format: '24h', amPmLabels: { am: 'am', pm: 'pm' } })
    ).toEqual({ hours: 12, minutes: 30, seconds: 45, amPm: null });
    expect(
      getParsedTime({ time: '12:30:45', format: '12h', amPmLabels: { am: 'am', pm: 'pm' } })
    ).toEqual({ hours: 12, minutes: 30, seconds: 45, amPm: 'pm' });
    expect(
      getParsedTime({ time: '12:30', format: '24h', amPmLabels: { am: 'am', pm: 'pm' } })
    ).toEqual({ hours: 12, minutes: 30, seconds: null, amPm: null });
    expect(
      getParsedTime({ time: '12:30', format: '12h', amPmLabels: { am: 'am', pm: 'pm' } })
    ).toEqual({ hours: 12, minutes: 30, seconds: null, amPm: 'pm' });
  });

  it('parses a trailing am/pm label', () => {
    const amPmLabels = { am: 'AM', pm: 'PM' };
    expect(getParsedTime({ time: '1:05 PM', format: '12h', amPmLabels })).toEqual({
      hours: 1,
      minutes: 5,
      seconds: null,
      amPm: 'PM',
    });
    expect(getParsedTime({ time: '12:30am', format: '24h', amPmLabels })).toEqual({
      hours: 0,
      minutes: 30,
      seconds: null,
      amPm: null,
    });
  });

  it('returns empty fields for invalid time strings', () => {
    const amPmLabels = { am: 'AM', pm: 'PM' };
    const empty = { hours: null, minutes: null, seconds: null, amPm: null };
    for (const time of [
      '',
      'ab:cd',
      '12:3o',
      '12:30:x',
      '12',
      '10:75',
      '10:00:60',
      '13:00 PM',
      '0:30 AM',
    ]) {
      expect(getParsedTime({ time, format: '12h', amPmLabels })).toEqual(empty);
    }
  });

  it('clamps hours greater than 23 to 23:59:59 in 12h format', () => {
    const amPmLabels = { am: 'AM', pm: 'PM' };
    for (const time of ['24:00', '25:00', '100:00']) {
      expect(getParsedTime({ time, format: '12h', amPmLabels })).toEqual({
        hours: 11,
        minutes: 59,
        seconds: 59,
        amPm: 'PM',
      });
    }
    expect(getParsedTime({ time: '23:00', format: '12h', amPmLabels })).toEqual({
      hours: 11,
      minutes: 0,
      seconds: null,
      amPm: 'PM',
    });
    expect(getParsedTime({ time: '25:00', format: '24h', amPmLabels })).toEqual({
      hours: 25,
      minutes: 0,
      seconds: null,
      amPm: null,
    });
  });
});
