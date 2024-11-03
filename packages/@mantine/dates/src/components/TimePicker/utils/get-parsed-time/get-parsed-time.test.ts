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
});
