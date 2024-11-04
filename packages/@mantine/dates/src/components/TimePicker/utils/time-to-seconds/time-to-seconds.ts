import { padTime } from '../pad-time/pad-time';

export function timeToSeconds(timeStr: string): number {
  const [hours = 0, minutes = 0, seconds = 0] = timeStr.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function secondsToTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return {
    timeString: `${padTime(hours)}:${padTime(minutes)}:${padTime(secs)}`,
    hours,
    minutes,
    seconds: secs,
  };
}
