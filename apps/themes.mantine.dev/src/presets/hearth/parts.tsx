import { IconMail, IconMessage, IconPhone } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
import { type AvatarTone, type Channel, PRIORITY_LABEL } from './data';
import classes from './parts.module.css';

const PLACEHOLDER_SIZES: Record<number, number> = { 24: 10, 32: 11, 44: 15 };

interface PersonAvatarProps {
  initials: string;
  tone?: AvatarTone;
  size?: number;
}

export function PersonAvatar({ initials, tone, size = 24 }: PersonAvatarProps) {
  return (
    <Avatar
      size={size}
      className={classes.avatar}
      data-tone={tone}
      style={
        {
          '--avatar-placeholder-fz': `${PLACEHOLDER_SIZES[size] ?? 10}px`,
        } as React.CSSProperties
      }
    >
      {initials}
    </Avatar>
  );
}

export function ChannelIcon({ channel, size = 15 }: { channel: Channel; size?: number }) {
  const props = { size, stroke: 1.75 };
  if (channel === 'chat') {
    return <IconMessage {...props} />;
  }
  if (channel === 'phone') {
    return <IconPhone {...props} />;
  }
  return <IconMail {...props} />;
}

export function Priority({ priority }: { priority: number }) {
  return (
    <span className={classes.priority} data-urgent={priority === 3 || undefined}>
      <span className={classes.bars} aria-hidden="true">
        {[1, 2, 3].map((level) => (
          <i key={level} data-on={level <= priority || undefined} />
        ))}
      </span>
      {PRIORITY_LABEL[priority]}
    </span>
  );
}
