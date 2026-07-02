export interface GetTimeAxisEventStyleInput {
  /** Offset of the event's leading edge along the time axis, in percent */
  start: number;

  /** Span of the event along the time axis, in percent */
  span: number;

  /** Axis along which time flows @default 'horizontal' */
  axis?: 'horizontal' | 'vertical';

  /** Total gap subtracted from the visible size, in px @default 2 */
  gap?: number;

  /** Portion of the gap placed after the trailing edge, in px @default 1 */
  trailingGap?: number;
}

export interface HorizontalEventStyle {
  right: string;
  width: string;
}

export interface VerticalEventStyle {
  bottom: string;
  height: string;
}

export function getTimeAxisEventStyle(
  input: GetTimeAxisEventStyleInput & { axis?: 'horizontal' }
): HorizontalEventStyle;
export function getTimeAxisEventStyle(
  input: GetTimeAxisEventStyleInput & { axis: 'vertical' }
): VerticalEventStyle;
export function getTimeAxisEventStyle({
  start,
  span,
  axis = 'horizontal',
  gap = 2,
  trailingGap = 1,
}: GetTimeAxisEventStyleInput): HorizontalEventStyle | VerticalEventStyle {
  const end = start + span;

  const inset = trailingGap ? `calc(${100 - end}% + ${trailingGap}px)` : `${100 - end}%`;
  const size = `max(1px, calc(${span}% - ${gap}px))`;

  return axis === 'vertical' ? { bottom: inset, height: size } : { right: inset, width: size };
}
