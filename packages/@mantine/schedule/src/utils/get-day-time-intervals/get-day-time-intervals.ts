export interface DayTimeInterval {
  /** Start time of the interval in HH:mm:ss format */
  startTime: string;

  /** End time of the interval in HH:mm:ss format */
  endTime: string;

  /** Duration of the interval in seconds */
  duration: number;

  /** Indicates if the interval starts at the beginning of an hour */
  isHourStart: boolean;
}

export interface GetDayTimeIntervalsInput {
  /** Start time in HH:mm:ss format */
  startTime: string;

  /** End time in HH:mm:ss format, end of the day by default */
  endTime?: string;

  /** Interval in minutes, 30 by default */
  intervalMinutes?: number;
}

export function getDayTimeIntervals({
  startTime,
  endTime,
  intervalMinutes = 30,
}: GetDayTimeIntervalsInput): DayTimeInterval[] {
  // Parse time strings in HH:mm:ss format
  const parseTimeString = (
    timeStr: string
  ): { hours: number; minutes: number; seconds: number } => {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    return { hours, minutes, seconds };
  };

  const formatTimeString = (hours: number, minutes: number, seconds: number): string => {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const start = parseTimeString(startTime);
  const end = endTime ? parseTimeString(endTime) : { hours: 23, minutes: 59, seconds: 59 };

  // Convert to total seconds for easier calculation
  const startSeconds = start.hours * 3600 + start.minutes * 60 + start.seconds;
  const endSeconds = end.hours * 3600 + end.minutes * 60 + end.seconds;
  const intervalSeconds = intervalMinutes * 60;

  const intervals: DayTimeInterval[] = [];
  let currentSeconds = startSeconds;

  while (currentSeconds < endSeconds) {
    const intervalStartSeconds = currentSeconds;
    let intervalEndSeconds = currentSeconds + intervalSeconds;

    // If the interval extends beyond the end time, cut it to the end time
    if (intervalEndSeconds > endSeconds) {
      intervalEndSeconds = endSeconds;
    }

    // Convert back to hours, minutes, seconds
    const startHours = Math.floor(intervalStartSeconds / 3600);
    const startMinutes = Math.floor((intervalStartSeconds % 3600) / 60);
    const startSecs = intervalStartSeconds % 60;

    const endHours = Math.floor(intervalEndSeconds / 3600);
    const endMinutes = Math.floor((intervalEndSeconds % 3600) / 60);
    const endSecs = intervalEndSeconds % 60;

    const durationSeconds = intervalEndSeconds - intervalStartSeconds;
    const isHourStart = startMinutes === 0 && startSecs === 0;

    intervals.push({
      startTime: formatTimeString(startHours, startMinutes, startSecs),
      endTime: formatTimeString(endHours, endMinutes, endSecs),
      duration: durationSeconds,
      isHourStart,
    });

    currentSeconds = intervalEndSeconds;
  }

  return intervals;
}
