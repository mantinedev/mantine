import dayjs from 'dayjs';
import { CHANNEL_COLORS } from './channels';
import { createPostEvent, DATE_TIME_FORMAT, getPostEnd, NEWSLETTER_SERIES_ID } from './posts';
import type { Channel, PostEvent, PostStatus, UnscheduledPost } from './types';

interface PostTemplate {
  title: string;
  channel: Exclude<Channel, 'newsletter'>;
  author: string;
  /** 0 – current month, 1 – next month */
  month: 0 | 1;
  day: number;
  time: string;
  /** Status once the date is in the future, posts in the past are published */
  status: Exclude<PostStatus, 'published'>;
}

const POSTS: PostTemplate[] = [
  {
    title: 'Q4 product roadmap',
    channel: 'blog',
    author: 'Maya Chen',
    month: 0,
    day: 2,
    time: '09:00',
    status: 'scheduled',
  },
  {
    title: 'Roadmap teaser',
    channel: 'linkedin',
    author: 'Leo Park',
    month: 0,
    day: 3,
    time: '12:00',
    status: 'scheduled',
  },
  {
    title: 'Behind the scenes: design sprint',
    channel: 'instagram',
    author: 'Ana Silva',
    month: 0,
    day: 6,
    time: '17:00',
    status: 'scheduled',
  },
  {
    title: 'How we cut onboarding time in half',
    channel: 'blog',
    author: 'Maya Chen',
    month: 0,
    day: 9,
    time: '09:00',
    status: 'scheduled',
  },
  {
    title: 'Customer story: Northwind',
    channel: 'linkedin',
    author: 'Leo Park',
    month: 0,
    day: 12,
    time: '11:00',
    status: 'scheduled',
  },
  {
    title: 'Team offsite photos',
    channel: 'instagram',
    author: 'Ana Silva',
    month: 0,
    day: 15,
    time: '18:00',
    status: 'scheduled',
  },
  {
    title: 'Pricing page update',
    channel: 'blog',
    author: 'Sam Ortiz',
    month: 0,
    day: 19,
    time: '10:00',
    status: 'scheduled',
  },
  {
    title: 'Hiring: senior designer',
    channel: 'linkedin',
    author: 'Leo Park',
    month: 0,
    day: 22,
    time: '12:00',
    status: 'scheduled',
  },
  {
    title: 'Product tips carousel',
    channel: 'instagram',
    author: 'Ana Silva',
    month: 0,
    day: 24,
    time: '16:00',
    status: 'draft',
  },
  {
    title: 'Integrations guide',
    channel: 'blog',
    author: 'Sam Ortiz',
    month: 0,
    day: 26,
    time: '09:00',
    status: 'draft',
  },
  {
    title: 'Conference recap',
    channel: 'linkedin',
    author: 'Maya Chen',
    month: 0,
    day: 28,
    time: '14:00',
    status: 'scheduled',
  },
  {
    title: 'Release notes 4.2',
    channel: 'blog',
    author: 'Sam Ortiz',
    month: 1,
    day: 2,
    time: '09:00',
    status: 'scheduled',
  },
  {
    title: 'Release 4.2 highlights',
    channel: 'linkedin',
    author: 'Leo Park',
    month: 1,
    day: 3,
    time: '11:00',
    status: 'scheduled',
  },
  {
    title: 'Office dog of the month',
    channel: 'instagram',
    author: 'Ana Silva',
    month: 1,
    day: 5,
    time: '17:00',
    status: 'draft',
  },
  {
    title: 'Security practices we follow',
    channel: 'blog',
    author: 'Maya Chen',
    month: 1,
    day: 9,
    time: '09:00',
    status: 'draft',
  },
  {
    title: 'Webinar invitation',
    channel: 'linkedin',
    author: 'Leo Park',
    month: 1,
    day: 11,
    time: '12:00',
    status: 'scheduled',
  },
  {
    title: 'Customer story: Contoso',
    channel: 'blog',
    author: 'Sam Ortiz',
    month: 1,
    day: 16,
    time: '10:00',
    status: 'scheduled',
  },
  {
    title: 'Year in review teaser',
    channel: 'instagram',
    author: 'Ana Silva',
    month: 1,
    day: 19,
    time: '18:00',
    status: 'draft',
  },
  {
    title: 'Holiday support hours',
    channel: 'linkedin',
    author: 'Maya Chen',
    month: 1,
    day: 23,
    time: '15:00',
    status: 'scheduled',
  },
  {
    title: 'Year in review',
    channel: 'blog',
    author: 'Maya Chen',
    month: 1,
    day: 26,
    time: '09:00',
    status: 'draft',
  },
];

const PAST_ISSUE_TITLES = [
  'Issue: Autumn launch recap',
  'Issue: Five workflow templates',
  'Issue: What customers asked us',
  'Issue: Behind the roadmap',
  'Issue: Our favourite integrations',
];

const UPCOMING_ISSUE_TITLES: Record<number, string> = {
  1: 'Issue: Release 4.2 is here',
  3: 'Issue: Planning for next year',
};

const UNSCHEDULED: Omit<UnscheduledPost, 'id'>[] = [
  { title: 'Interview with our CTO', channel: 'blog', author: 'Maya Chen' },
  { title: 'Feature comparison guide', channel: 'blog', author: 'Sam Ortiz' },
  { title: 'Poll: favourite feature', channel: 'linkedin', author: 'Leo Park' },
  { title: 'Customer quote cards', channel: 'instagram', author: 'Ana Silva' },
  { title: 'Reel: 30-second product tour', channel: 'instagram', author: 'Ana Silva' },
  { title: 'Thought leadership: remote teams', channel: 'linkedin', author: 'Maya Chen' },
];

function firstWeekday(month: dayjs.Dayjs, weekday: number) {
  const start = month.startOf('month');
  return start.add((weekday - start.day() + 7) % 7, 'day');
}

function createNewsletter(now: dayjs.Dayjs): PostEvent[] {
  const firstIssue = firstWeekday(now, 2).hour(10).minute(0).second(0);
  const series: PostEvent = {
    id: NEWSLETTER_SERIES_ID,
    title: 'Weekly newsletter',
    start: firstIssue.format(DATE_TIME_FORMAT),
    end: getPostEnd(firstIssue.format(DATE_TIME_FORMAT)),
    color: CHANNEL_COLORS.newsletter,
    payload: { channel: 'newsletter', author: 'Maya Chen', status: 'scheduled' },
    recurrence: { rrule: 'FREQ=WEEKLY' },
  };

  const overrides: PostEvent[] = [];
  let upcoming = 0;

  for (
    let issue = firstIssue;
    issue.isBefore(now.add(1, 'month').endOf('month'));
    issue = issue.add(1, 'week')
  ) {
    const recurrenceId = issue.format(DATE_TIME_FORMAT);
    const isPast = issue.isBefore(now);
    const title = isPast
      ? PAST_ISSUE_TITLES[overrides.length % PAST_ISSUE_TITLES.length]
      : UPCOMING_ISSUE_TITLES[upcoming];

    if (!isPast) {
      upcoming += 1;
    }

    if (title) {
      overrides.push({
        id: `${NEWSLETTER_SERIES_ID}::${recurrenceId}`,
        title,
        start: recurrenceId,
        end: getPostEnd(recurrenceId),
        color: CHANNEL_COLORS.newsletter,
        payload: {
          channel: 'newsletter',
          author: 'Maya Chen',
          status: isPast ? 'published' : 'scheduled',
        },
        recurringEventId: NEWSLETTER_SERIES_ID,
        recurrenceId,
      });
    }
  }

  return [series, ...overrides];
}

export function createInitialData(now = dayjs()) {
  const posts = POSTS.map((post, index) => {
    const [hour, minute] = post.time.split(':').map(Number);
    const start = now
      .startOf('month')
      .add(post.month, 'month')
      .date(post.day)
      .hour(hour)
      .minute(minute);

    return createPostEvent({
      id: `post-${index + 1}`,
      title: post.title,
      channel: post.channel,
      author: post.author,
      status: start.isBefore(now) ? 'published' : post.status,
      start: start.format(DATE_TIME_FORMAT),
    });
  });

  return {
    events: [...createNewsletter(now), ...posts],
    unscheduled: UNSCHEDULED.map((post, index) => ({ ...post, id: `draft-${index + 1}` })),
  };
}
