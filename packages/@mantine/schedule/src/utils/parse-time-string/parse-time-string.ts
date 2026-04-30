export interface ParsedTime {
  hours: number;
  minutes: number;
  seconds: number;
}

export function parseTimeString(time: string): ParsedTime {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return { hours, minutes, seconds: seconds || 0 };
}
