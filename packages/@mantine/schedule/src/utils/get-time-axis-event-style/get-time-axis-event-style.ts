export interface GetTimeAxisEventStyleInput {
  /** Offset of the event's leading edge along the time axis, in percent */
  start: number;

  /** Span of the event along the time axis, in percent */
  span: number;

  /** Axis along which time flows @default 'horizontal' */
  axis?: 'horizontal' | 'vertical';

  /** Minimum visible size of the event along the time axis, in px. Prevents very short events from collapsing to zero. The minimum grows toward the trailing edge so the box never starts before the event's real start. @default 1 */
  minSize?: number;
}

export interface HorizontalEventStyle {
  left: string;
  right: string;
  minWidth: string;
}

export interface VerticalEventStyle {
  top: string;
  bottom: string;
  minHeight: string;
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
  minSize = 1,
}: GetTimeAxisEventStyleInput): HorizontalEventStyle | VerticalEventStyle {
  const end = start + span;
  const leadingInset = `${start}%`;
  const trailingInset = `${100 - end}%`;
  const min = `${minSize}px`;

  return axis === 'vertical'
    ? { top: leadingInset, bottom: trailingInset, minHeight: min }
    : { left: leadingInset, right: trailingInset, minWidth: min };
}
