import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/schedule/styles.css';

import dayjs from 'dayjs';
import { useId, useMemo, useState } from 'react';
import { Box, Code, Group, ScrollArea, Text, useModal } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { AgendaView, MonthView, WeekView, type ScheduleEventData } from '@mantine/schedule';
import { CalendarHeader } from './CalendarHeader';
import { CHANNELS } from './channels';
import { createInitialData } from './data';
import { PostEventBody, renderAgendaPost, renderPostEvent } from './PostEvent/PostEvent';
import { PostForm } from './PostForm';
import {
  canUnschedule,
  createPostEvent,
  createPostId,
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  getPostsInRange,
  getRangeLabel,
  getVisibleRange,
  isPublished,
  isSeriesIssue,
  toPostJson,
  toUnscheduled,
  updateIssue,
  updatePost,
  updateSeries,
  withDefaultTime,
  type PostChange,
} from './posts';
import { SeriesScopeForm } from './SeriesScopeForm';
import { DRAFT_DRAG_TYPE, Sidebar } from './Sidebar/Sidebar';
import type {
  CalendarView,
  Channel,
  PostEvent,
  PostFormValues,
  PostTarget,
  SeriesScope,
  UnscheduledPost,
} from './types';
import classes from './ContentCalendar.module.css';

const NEW_POST_AUTHOR = 'You';

const formatWhen = (start: string) => dayjs(start).format('ddd, MMM D, HH:mm');

const notify = (title: string, message: string) => notifications.show({ title, message });

function getFormValues(target: PostTarget): PostFormValues {
  if (target.kind === 'event') {
    return {
      title: target.event.title,
      channel: target.event.payload!.channel,
      date: dayjs(target.event.start).format(DATE_TIME_FORMAT),
      status: target.event.payload!.status,
    };
  }

  if (target.kind === 'unscheduled') {
    return { title: target.post.title, channel: target.post.channel, date: null, status: 'draft' };
  }

  return { title: '', channel: null, date: target.date, status: 'draft' };
}

function getFormTitle(target: PostTarget) {
  if (target.kind === 'new') {
    return 'New post';
  }
  return target.kind === 'event' && isSeriesIssue(target.event)
    ? 'Edit newsletter issue'
    : 'Edit post';
}

export function ContentCalendar() {
  const [initialData] = useState(() => createInitialData());
  const [events, setEvents] = useState<PostEvent[]>(initialData.events);
  const [unscheduled, setUnscheduled] = useState<UnscheduledPost[]>(initialData.unscheduled);
  const [channels, setChannels] = useState<Channel[]>(CHANNELS.map((channel) => channel.value));
  const [view, setView] = useState<CalendarView>('month');
  const [date, setDate] = useState(() => dayjs().format(DATE_FORMAT));
  const [draggedEvent, setDraggedEvent] = useState<PostEvent | null>(null);

  const jsonLabelId = useId();
  const formModal = useModal({ closeOnClickOutside: false });
  const scopeModal = useModal({ closeOnClickOutside: false });

  const visibleEvents = useMemo(
    () =>
      events
        .filter((event) => channels.includes(event.payload!.channel))
        .map((event) => ({
          ...event,
          variant: isPublished(event) ? 'filled' : 'light',
        })) as PostEvent[],
    [events, channels]
  );

  const visibleDrafts = unscheduled.filter((post) => channels.includes(post.channel));
  const range = getVisibleRange(view, date);
  const postsJson = useMemo(
    () =>
      JSON.stringify(
        getPostsInRange(visibleEvents, getVisibleRange(view, date)).map(toPostJson),
        null,
        2
      ),
    [visibleEvents, view, date]
  );

  const navigate = (direction: 1 | -1) =>
    setDate((current) =>
      dayjs(current)
        .add(direction, view === 'week' ? 'week' : 'month')
        .format(DATE_FORMAT)
    );

  const askScope = (issue: PostEvent, change: PostChange, action: 'updated' | 'moved') => {
    const apply = (scope: SeriesScope) => {
      scopeModal.close();
      setEvents((current) =>
        scope === 'issue'
          ? updateIssue(current, issue, change)
          : updateSeries(current, issue, change)
      );
      notify(
        `${scope === 'issue' ? 'Issue' : 'Series'} ${action}`,
        `${change.title} · ${formatWhen(change.start)}`
      );
    };

    scopeModal.open({
      title: 'Change newsletter issue',
      children: <SeriesScopeForm issueTitle={issue.title} onSubmit={apply} />,
    });
  };

  const unscheduleEvent = (event: PostEvent, change?: { title: string; channel: Channel }) => {
    setEvents((current) => current.filter((item) => item.id !== event.id));
    setUnscheduled((current) => [toUnscheduled(event, change), ...current]);
    notify('Draft unscheduled', change?.title ?? event.title);
  };

  const savePost = (target: PostTarget, values: PostFormValues) => {
    const channel = values.channel!;
    const start = values.date ? dayjs(values.date).format(DATE_TIME_FORMAT) : null;

    if (target.kind === 'event') {
      const { event } = target;
      if (!start) {
        unscheduleEvent(event, { title: values.title, channel });
        return;
      }

      const change = { title: values.title, channel, status: values.status, start };
      if (isSeriesIssue(event)) {
        askScope(event, change, 'updated');
        return;
      }

      setEvents((current) => updatePost(current, event.id, change));
      notify('Post updated', `${values.title} · ${formatWhen(start)}`);
      return;
    }

    const id = target.kind === 'unscheduled' ? target.post.id : createPostId();
    const author = target.kind === 'unscheduled' ? target.post.author : NEW_POST_AUTHOR;

    if (!start) {
      const post = { id, title: values.title, channel, author };
      setUnscheduled((current) =>
        target.kind === 'unscheduled'
          ? current.map((item) => (item.id === id ? post : item))
          : [post, ...current]
      );
      notify(
        target.kind === 'new' ? 'Draft created' : 'Draft updated',
        `${values.title} · Unscheduled`
      );
      return;
    }

    setUnscheduled((current) => current.filter((item) => item.id !== id));
    setEvents((current) => [
      ...current,
      createPostEvent({ id, title: values.title, channel, author, status: values.status, start }),
    ]);
    notify(
      target.kind === 'new' ? 'Post created' : 'Draft scheduled',
      `${values.title} · ${formatWhen(start)}`
    );
  };

  const openEditor = (target: PostTarget) => {
    const isEvent = target.kind === 'event';

    formModal.open({
      title: getFormTitle(target),
      children: (
        <PostForm
          initialValues={getFormValues(target)}
          isNew={target.kind === 'new'}
          dateLocked={isEvent && isPublished(target.event)}
          dateRequired={isEvent && isSeriesIssue(target.event)}
          onSubmit={(values) => {
            formModal.close();
            savePost(target, values);
          }}
        />
      ),
    });
  };

  const openNewPost = (day: string | null) =>
    openEditor({ kind: 'new', date: day === null ? null : withDefaultTime(day) });

  const handleEventDrop = ({ event, newStart }: { event: ScheduleEventData; newStart: string }) => {
    const post = event as PostEvent;
    const change = {
      title: post.title,
      channel: post.payload!.channel,
      status: post.payload!.status,
      start: newStart,
    };

    if (isSeriesIssue(post)) {
      askScope(post, change, 'moved');
      return;
    }

    setEvents((current) => updatePost(current, post.id, change));
    notify('Post moved', `${post.title} · ${formatWhen(newStart)}`);
  };

  const handleDraftDrop = (dataTransfer: DataTransfer, dropDateTime: string) => {
    const post = unscheduled.find((item) => item.id === dataTransfer.getData(DRAFT_DRAG_TYPE));
    if (!post) {
      return;
    }

    const start = withDefaultTime(dropDateTime);
    setUnscheduled((current) => current.filter((item) => item.id !== post.id));
    setEvents((current) => [...current, createPostEvent({ ...post, status: 'draft', start })]);
    notify('Draft scheduled', `${post.title} · ${formatWhen(start)}`);
  };

  const handleUnscheduleDrop = (eventId: string) => {
    const event = events.find((item) => String(item.id) === eventId);
    if (event && canUnschedule(event)) {
      unscheduleEvent(event);
    }
  };

  const dragProps = {
    events: visibleEvents,
    withEventsDragAndDrop: true,
    canDragEvent: (event: ScheduleEventData) => !isPublished(event as PostEvent),
    onEventDrop: handleEventDrop,
    onEventDragStart: (event: ScheduleEventData) => setDraggedEvent(event as PostEvent),
    onEventDragEnd: () => setDraggedEvent(null),
    canDropExternalEvent: ({ dataTransfer }: { dataTransfer: DataTransfer }) =>
      dataTransfer.types.includes(DRAFT_DRAG_TYPE),
    onExternalEventDrop: handleDraftDrop,
    onEventClick: (event: ScheduleEventData) =>
      openEditor({ kind: 'event', event: event as PostEvent }),
    renderEventBody: PostEventBody,
    renderEvent: renderPostEvent,
  };

  return (
    <Group align="flex-start" wrap="nowrap" gap="lg" className={classes.root}>
      <Sidebar
        channels={channels}
        onChannelsChange={setChannels}
        drafts={visibleDrafts}
        onNewPost={() => openNewPost(null)}
        onDraftClick={(post) => openEditor({ kind: 'unscheduled', post })}
        acceptsCalendarDrop={draggedEvent !== null && canUnschedule(draggedEvent)}
        onCalendarDrop={handleUnscheduleDrop}
      />

      <Box className={classes.main}>
        <CalendarHeader
          label={getRangeLabel(view, date)}
          view={view}
          onViewChange={setView}
          onPrevious={() => navigate(-1)}
          onNext={() => navigate(1)}
          onToday={() => setDate(dayjs().format(DATE_FORMAT))}
        />

        {view === 'month' && (
          <MonthView
            {...dragProps}
            date={date}
            onDateChange={setDate}
            withHeader={false}
            maxEventsPerDay={3}
            onDayClick={(day) => openNewPost(day)}
          />
        )}

        {view === 'week' && (
          <WeekView
            {...dragProps}
            date={date}
            onDateChange={setDate}
            withHeader={false}
            withAllDaySlots={false}
            startTime="07:00:00"
            endTime="21:00:00"
            intervalMinutes={30}
            startScrollTime="08:00:00"
            scrollAreaProps={{ mah: 640 }}
            onTimeSlotClick={({ slotStart }) => openNewPost(slotStart)}
          />
        )}

        {view === 'agenda' && (
          <AgendaView
            rangeStart={range.from.format(DATE_FORMAT)}
            rangeEnd={range.to.format(DATE_FORMAT)}
            events={visibleEvents}
            renderEvent={renderAgendaPost}
            onEventClick={(event) => openEditor({ kind: 'event', event: event as PostEvent })}
            classNames={{ agendaViewHeader: classes.hidden }}
          />
        )}

        <Text size="sm" fw={500} mt="lg" mb="xs" id={jsonLabelId}>
          Posts in view
        </Text>
        <ScrollArea.Autosize mah={420} type="auto">
          <Code block aria-labelledby={jsonLabelId}>
            {postsJson}
          </Code>
        </ScrollArea.Autosize>
      </Box>
    </Group>
  );
}
