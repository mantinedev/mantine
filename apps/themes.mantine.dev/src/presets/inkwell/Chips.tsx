import { IconCheck, IconClock } from '@tabler/icons-react';
import { Avatar, Badge } from '@mantine/core';
import { CMYK, dayDate, INKS, type Order, PEOPLE, type PersonId, shortDate } from './data';
import classes from './Chips.module.css';

export function InkChip({ name }: { name: string }) {
  return (
    <span className={classes.ink}>
      {name === 'CMYK' ? (
        <span className={classes.cmyk} aria-hidden="true">
          {CMYK.map((color) => (
            <i key={color} style={{ background: color }} />
          ))}
        </span>
      ) : (
        <i className={classes.swatch} style={{ background: INKS[name] }} aria-hidden="true" />
      )}
      {name}
    </span>
  );
}

export function InkList({ inks }: { inks: string[] }) {
  return (
    <div className={classes.inks}>
      {inks.map((ink) => (
        <InkChip key={ink} name={ink} />
      ))}
    </div>
  );
}

function dueInfo(order: Order): { tone: string; label: string } {
  if (order.stage === 'pickup') {
    return {
      tone: 'done',
      label: `Ready ${order.due === 0 ? 'today' : `since ${shortDate(order.due)}`}`,
    };
  }
  if (order.due < 0) {
    return { tone: 'late', label: `Overdue, ${shortDate(order.due)}` };
  }
  if (order.due === 0) {
    return { tone: 'today', label: 'Due today' };
  }
  return {
    tone: 'default',
    label: order.due === 1 ? 'Tomorrow' : dayDate(order.due),
  };
}

export function DueChip({ order }: { order: Order }) {
  const { tone, label } = dueInfo(order);
  const Icon = tone === 'done' ? IconCheck : IconClock;

  return (
    <Badge className={classes.due} data-tone={tone} leftSection={<Icon size={13} stroke={2.2} />}>
      {label}
    </Badge>
  );
}

interface PersonAvatarProps {
  who: PersonId;
  size?: number;
}

export function PersonAvatar({ who, size = 26 }: PersonAvatarProps) {
  return (
    <Avatar
      size={size}
      className={classes.person}
      data-tone={PEOPLE[who].tone}
      title={PEOPLE[who].name}
    >
      {who}
    </Avatar>
  );
}

export function StageTag({ children }: { children: React.ReactNode }) {
  return <span className={classes.stageTag}>{children}</span>;
}
