import dayjs from 'dayjs';

export function getDate(
  hours: string,
  minutes: string,
  seconds: string,
  format: '12' | '24',
  pmLabel: string,
  amPm?: string
) {
  const date = dayjs();
  let _hours = parseInt(hours, 10);
  const _minutes = parseInt(minutes, 10);
  const _seconds = parseInt(seconds, 10);

  if (Number.isNaN(_hours)) {
    _hours = 0;
  }

  if (format === '12') {
    _hours %= 12;
    if (amPm === pmLabel) {
      _hours += 12;
    }
  }

  return date
    .hour(_hours)
    .minute(Number.isNaN(_minutes) ? 0 : _minutes)
    .second(Number.isNaN(_seconds) ? 0 : _seconds)
    .millisecond(0)
    .toDate();
}
