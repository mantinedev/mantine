import type { ScheduleEventData } from '@mantine/schedule';

export type Channel = 'blog' | 'newsletter' | 'linkedin' | 'instagram';

export type PostStatus = 'draft' | 'scheduled' | 'published';

export type CalendarView = 'month' | 'week' | 'agenda';

export interface PostPayload {
  channel: Channel;
  author: string;
  status: PostStatus;
}

/** A post placed on the calendar: a one-off post, the newsletter series or one of its issues */
export type PostEvent = ScheduleEventData<PostPayload>;

export interface UnscheduledPost {
  id: string;
  title: string;
  channel: Channel;
  author: string;
}

export interface PostFormValues {
  title: string;
  channel: Channel | null;
  date: string | null;
  status: PostStatus;
}

/** What the post form edits: a calendar post, an unscheduled draft or a new post */
export type PostTarget =
  | { kind: 'event'; event: PostEvent }
  | { kind: 'unscheduled'; post: UnscheduledPost }
  | { kind: 'new'; date: string | null };

export type SeriesScope = 'issue' | 'series';
