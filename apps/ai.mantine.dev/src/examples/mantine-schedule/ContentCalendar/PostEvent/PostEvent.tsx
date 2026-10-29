import dayjs from 'dayjs';
import type { CSSProperties } from 'react';
import {
  IconArticle,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconCheck,
  IconMail,
  type Icon,
} from '@tabler/icons-react';
import { Group, Text, UnstyledButton } from '@mantine/core';
import type { ScheduleEventData } from '@mantine/schedule';
import { CHANNEL_LABELS, STATUS_LABELS } from '../channels';
import type { Channel, PostPayload } from '../types';
import classes from './PostEvent.module.css';

const CHANNEL_ICONS: Record<Channel, Icon> = {
  blog: IconArticle,
  newsletter: IconMail,
  linkedin: IconBrandLinkedin,
  instagram: IconBrandInstagram,
};

type RootProps = Record<string, any>;

function getPayload(event: ScheduleEventData) {
  return event.payload as PostPayload;
}

function getAccessibleName(event: ScheduleEventData) {
  const { channel, status } = getPayload(event);
  return `${event.title}, ${CHANNEL_LABELS[channel]}, ${STATUS_LABELS[status]}`;
}

export function PostEventBody(event: ScheduleEventData) {
  const { channel, status } = getPayload(event);
  const ChannelIcon = CHANNEL_ICONS[channel];

  return (
    <div className={classes.body}>
      <span className={classes.title}>
        <ChannelIcon size={12} className={classes.icon} />
        {status === 'published' && <IconCheck size={12} stroke={2.5} className={classes.icon} />}
        <span className={classes.titleText}>{event.title}</span>
      </span>
      <span className={classes.meta}>
        {CHANNEL_LABELS[channel]} · {dayjs(event.start).format('HH:mm')}
      </span>
    </div>
  );
}

/** Drafts are outlined instead of filled: the package paints the box from `--event-bg` */
export function renderPostEvent(event: ScheduleEventData, props: RootProps) {
  const isDraft = getPayload(event).status === 'draft';
  const style = isDraft
    ? {
        ...(props.style as CSSProperties),
        '--event-bg': 'transparent',
        '--event-hover': 'var(--mantine-color-default-hover)',
      }
    : props.style;

  return (
    <UnstyledButton
      {...props}
      className={isDraft ? `${props.className} ${classes.draft}` : props.className}
      style={style}
      aria-label={getAccessibleName(event)}
    />
  );
}

export function renderAgendaPost(event: ScheduleEventData, props: RootProps) {
  const { channel, status } = getPayload(event);

  return (
    <UnstyledButton {...props} aria-label={getAccessibleName(event)}>
      <Group justify="space-between" wrap="nowrap" gap="sm" className={classes.agendaRow}>
        {props.children}
        <Text size="xs" className={classes.agendaMeta}>
          {CHANNEL_LABELS[channel]} · {STATUS_LABELS[status]}
        </Text>
      </Group>
    </UnstyledButton>
  );
}
