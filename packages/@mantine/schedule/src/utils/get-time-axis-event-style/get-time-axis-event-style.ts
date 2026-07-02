export interface GetTimeAxisEventStyleInput {
  /** Offset of the event start along the time axis, in percent */
  start: number;

  /** Span of the event along the time axis, in percent */
  span: number;
}

export interface TimeAxisEventStyle {
  right: string;
  width: string;
}

export function getTimeAxisEventStyle({
  start,
  span,
}: GetTimeAxisEventStyleInput): TimeAxisEventStyle {
  const end = start + span;

  return {
    right: `calc(${100 - end}% + 1px)`,
    width: `max(1px, calc(${span}% - 2px))`,
  };
}
