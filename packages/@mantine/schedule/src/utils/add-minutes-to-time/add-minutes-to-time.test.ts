import { addMinutesToTime } from './add-minutes-to-time';

describe('@mantine/schedule/add-minutes-to-time', () => {
  it('adds minutes to a time string', () => {
    expect(addMinutesToTime('07:00:00', 60)).toBe('08:00:00');
    expect(addMinutesToTime('07:45:00', 30)).toBe('08:15:00');
    expect(addMinutesToTime('07:00', 15)).toBe('07:15:00');
  });

  it('continues past midnight so rendered intervals keep their full length', () => {
    expect(addMinutesToTime('23:00:00', 120)).toBe('25:00:00');
  });
});
