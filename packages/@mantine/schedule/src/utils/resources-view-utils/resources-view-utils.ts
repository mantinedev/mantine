import dayjs from 'dayjs';
import type { CSSProperties } from 'react';
import { AnyDateValue } from '../../types';
import { formatDate } from '../format-date/format-date';
import { getTimeAxisEventStyle } from '../get-time-axis-event-style/get-time-axis-event-style';

export function getInlineTimeAxisEventStyle(input: {
  start: number;
  span: number;
  minSize?: number;
}): CSSProperties {
  const style = getTimeAxisEventStyle(input);
  return { insetInlineStart: style.left, insetInlineEnd: style.right, minWidth: style.minWidth };
}

interface GetResourceSlotLabelInput {
  prefix: string | undefined;
  resourceLabel: React.ReactNode;
  date: AnyDateValue;
  startTime: string;
  endTime: string;
  locale: string;
}

export function getResourceSlotLabel({
  prefix,
  resourceLabel,
  date,
  startTime,
  endTime,
  locale,
}: GetResourceSlotLabelInput) {
  const day = dayjs(date).format('YYYY-MM-DD');
  const formattedDate = formatDate({ date: day, locale, format: 'MMMM D, YYYY' });
  const formatTime = (time: string) =>
    formatDate({ date: `${day} ${time}`, locale, format: 'HH:mm' });
  return [prefix, resourceLabel, formattedDate, `${formatTime(startTime)} - ${formatTime(endTime)}`]
    .filter((part) => part !== undefined && part !== '')
    .join(' ');
}

interface ScrollCellInput {
  viewport: HTMLElement | null;
  cell: HTMLElement | null | undefined;
  stickyInlineSize: number;
}

function getInlineScrollDelta(
  { viewport, cell, stickyInlineSize }: ScrollCellInput,
  align: 'start' | 'nearest'
) {
  if (!viewport || !cell) {
    return 0;
  }

  const viewportRect = viewport.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  const rtl = getComputedStyle(viewport).direction === 'rtl';
  const startOverflow = rtl
    ? cellRect.right - (viewportRect.right - stickyInlineSize)
    : cellRect.left - (viewportRect.left + stickyInlineSize);

  if (align === 'start') {
    return startOverflow;
  }

  if (rtl ? startOverflow > 0 : startOverflow < 0) {
    return startOverflow;
  }

  const endOverflow = rtl ? cellRect.left - viewportRect.left : cellRect.right - viewportRect.right;

  return (rtl ? endOverflow < 0 : endOverflow > 0) ? endOverflow : 0;
}

export function scrollCellToInlineStart(input: ScrollCellInput) {
  const delta = getInlineScrollDelta(input, 'start');
  if (delta !== 0) {
    input.viewport!.scrollTo({ left: input.viewport!.scrollLeft + delta });
  }
}

export function scrollCellIntoInlineView(input: ScrollCellInput) {
  const delta = getInlineScrollDelta(input, 'nearest');
  if (delta !== 0) {
    input.viewport!.scrollLeft += delta;
  }
}
