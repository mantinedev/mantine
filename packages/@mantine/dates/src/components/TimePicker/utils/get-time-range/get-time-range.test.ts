import { getTimeRange } from './get-time-range';

describe('@mantine/dates/get-time-range', () => {
  it('generates correct time range for hours interval', () => {
    expect(
      getTimeRange({ startTime: '00:00:00', endTime: '02:00:00', interval: '01:00:00' })
    ).toEqual(['00:00:00', '01:00:00', '02:00:00']);
  });

  it('generates correct time range for minutes interval', () => {
    expect(
      getTimeRange({ startTime: '00:00:00', endTime: '00:10:00', interval: '00:05:00' })
    ).toEqual(['00:00:00', '00:05:00', '00:10:00']);
  });

  it('generates correct time range for seconds interval', () => {
    expect(
      getTimeRange({ startTime: '00:00:00', endTime: '00:00:10', interval: '00:00:05' })
    ).toEqual(['00:00:00', '00:00:05', '00:00:10']);
  });

  it('generates correct time range for mixed interval', () => {
    expect(
      getTimeRange({ startTime: '00:00:00', endTime: '02:00:00', interval: '00:30:00' })
    ).toEqual(['00:00:00', '00:30:00', '01:00:00', '01:30:00', '02:00:00']);
  });
});
