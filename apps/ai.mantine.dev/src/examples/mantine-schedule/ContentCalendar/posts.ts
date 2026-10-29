import dayjs from 'dayjs';
import {
  expandRecurringEvents,
  getEndOfWeek,
  getMonthRange,
  getStartOfWeek,
} from '@mantine/schedule';
import { CHANNEL_COLORS } from './channels';
import type { CalendarView, Channel, PostEvent, PostStatus, UnscheduledPost } from './types';

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATE_FORMAT = 'YYYY-MM-DD';
export const POST_MINUTES = 30;
export const DEFAULT_POST_TIME = { hour: 9, minute: 0 };
export const NEWSLETTER_SERIES_ID = 'newsletter';

export interface PostChange {
  title: string;
  channel: Channel;
  status: PostStatus;
  start: string;
}

interface NewPost extends PostChange {
  id: string;
  author: string;
}

const shift = (value: string | Date, minutes: number) =>
  dayjs(value).add(minutes, 'minute').format(DATE_TIME_FORMAT);

export const getPostEnd = (start: string) => shift(start, POST_MINUTES);

/** Day clicks and all-day drops give midnight; posts without a time go out at 09:00 */
export function withDefaultTime(dateTime: string) {
  const value = dayjs(dateTime);
  return value.hour() === 0 && value.minute() === 0
    ? value.hour(DEFAULT_POST_TIME.hour).minute(DEFAULT_POST_TIME.minute).format(DATE_TIME_FORMAT)
    : value.format(DATE_TIME_FORMAT);
}

export function createPostEvent({ id, title, channel, author, status, start }: NewPost): PostEvent {
  return {
    id,
    title,
    start,
    end: getPostEnd(start),
    color: CHANNEL_COLORS[channel],
    payload: { channel, author, status },
  };
}

export function createPostId() {
  return `post-${Math.random().toString(36).slice(2, 10)}`;
}

export function getSeriesId(event: PostEvent) {
  return event.recurringInstance?.recurringEventId ?? event.recurringEventId;
}

export function isSeriesIssue(event: PostEvent) {
  return getSeriesId(event) !== undefined;
}

export const isPublished = (event: PostEvent) => event.payload?.status === 'published';

export const canUnschedule = (event: PostEvent) =>
  event.payload?.status === 'draft' && !isSeriesIssue(event);

export function updatePost(events: PostEvent[], eventId: string | number, change: PostChange) {
  return events.map((event) =>
    event.id === eventId
      ? ({
          ...event,
          title: change.title,
          start: change.start,
          end: getPostEnd(change.start),
          color: CHANNEL_COLORS[change.channel],
          payload: { ...event.payload!, channel: change.channel, status: change.status },
        } as PostEvent)
      : event
  );
}

function getRecurrenceId(issue: PostEvent) {
  return (
    issue.recurringInstance?.recurrenceId ??
    issue.recurrenceId ??
    dayjs(issue.start).format(DATE_TIME_FORMAT)
  );
}

/** Changes one newsletter issue: updates its override or creates one for a generated issue */
export function updateIssue(events: PostEvent[], issue: PostEvent, change: PostChange) {
  const override: PostEvent = {
    id: issue.id,
    title: change.title,
    start: change.start,
    end: getPostEnd(change.start),
    color: CHANNEL_COLORS[change.channel],
    payload: { ...issue.payload!, channel: change.channel, status: change.status },
    recurringEventId: getSeriesId(issue)!,
    recurrenceId: getRecurrenceId(issue),
  };

  return events.some((event) => event.id === issue.id)
    ? events.map((event) => (event.id === issue.id ? override : event))
    : [...events, override];
}

/**
 * Applies a change made on one issue to the whole series. The time shift moves the series and
 * keeps its overrides and exceptions attached to the shifted issues; published issues stay where
 * they went out.
 */
export function updateSeries(events: PostEvent[], issue: PostEvent, change: PostChange) {
  const seriesId = getSeriesId(issue);
  const minutes = dayjs(change.start).diff(getRecurrenceId(issue), 'minute');

  return events.map((event): PostEvent => {
    if (event.id === seriesId && event.recurrence) {
      return {
        ...event,
        title: change.title,
        start: shift(event.start, minutes),
        end: shift(event.end, minutes),
        color: CHANNEL_COLORS[change.channel],
        payload: { ...event.payload!, channel: change.channel, status: change.status },
        recurrence: {
          ...event.recurrence,
          exdate: event.recurrence.exdate?.map((date) => shift(date, minutes)),
        },
      };
    }

    if (event.recurringEventId === seriesId && event.recurrenceId) {
      const isEditedIssue = event.id === issue.id;
      const keepsDate = event.payload?.status === 'published' && !isEditedIssue;
      const start = isEditedIssue
        ? change.start
        : keepsDate
          ? event.start
          : shift(event.start, minutes);

      return {
        ...event,
        title: isEditedIssue ? change.title : event.title,
        start,
        end: keepsDate ? event.end : getPostEnd(dayjs(start).format(DATE_TIME_FORMAT)),
        color: CHANNEL_COLORS[change.channel],
        payload: {
          ...event.payload!,
          channel: change.channel,
          status: isEditedIssue ? change.status : event.payload!.status,
        },
        recurrenceId: shift(event.recurrenceId, minutes),
      };
    }

    return event;
  });
}

export function toUnscheduled(
  event: PostEvent,
  change?: Omit<PostChange, 'start' | 'status'>
): UnscheduledPost {
  return {
    id: String(event.id),
    title: change?.title ?? event.title,
    channel: change?.channel ?? event.payload!.channel,
    author: event.payload!.author,
  };
}

export function getVisibleRange(view: CalendarView, date: string) {
  if (view === 'week') {
    return {
      from: dayjs(getStartOfWeek({ date, firstDayOfWeek: 1 })).startOf('day'),
      to: dayjs(getEndOfWeek(date, 1)).endOf('day'),
    };
  }

  if (view === 'month') {
    const range = getMonthRange({
      month: date,
      withOutsideDays: true,
      consistentWeeks: true,
      firstDayOfWeek: 1,
    });
    return { from: dayjs(range.start).startOf('day'), to: dayjs(range.end).endOf('day') };
  }

  return { from: dayjs(date).startOf('month'), to: dayjs(date).endOf('month') };
}

export function getRangeLabel(view: CalendarView, date: string) {
  if (view !== 'week') {
    return dayjs(date).format('MMMM YYYY');
  }

  const { from, to } = getVisibleRange(view, date);
  return from.year() === to.year()
    ? `${from.format('MMM D')} – ${to.format('MMM D, YYYY')}`
    : `${from.format('MMM D, YYYY')} – ${to.format('MMM D, YYYY')}`;
}

export function getPostsInRange(
  events: PostEvent[],
  range: { from: dayjs.Dayjs; to: dayjs.Dayjs }
) {
  return expandRecurringEvents({
    events,
    rangeStart: range.from.toDate(),
    rangeEnd: range.to.toDate(),
  })
    .filter((event) => !event.recurrence)
    .filter(
      (event) => !dayjs(event.start).isBefore(range.from) && !dayjs(event.start).isAfter(range.to)
    )
    .sort((a, b) => dayjs(a.start).valueOf() - dayjs(b.start).valueOf()) as PostEvent[];
}

export function toPostJson(event: PostEvent) {
  const seriesId = getSeriesId(event);
  return {
    id: event.id,
    title: event.title,
    channel: event.payload!.channel,
    author: event.payload!.author,
    status: event.payload!.status,
    start: dayjs(event.start).format(DATE_TIME_FORMAT),
    ...(seriesId !== undefined ? { seriesId } : {}),
  };
}
