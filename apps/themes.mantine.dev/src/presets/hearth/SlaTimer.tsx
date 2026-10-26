import { IconClock } from '@tabler/icons-react';
import { Badge } from '@mantine/core';
import type { Ticket } from './data';
import classes from './SlaTimer.module.css';

export function formatMinutes(minutes: number) {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return `${hours} h${rest ? ` ${String(rest).padStart(2, '0')} min` : ''}`;
}

interface SlaTimerProps {
  ticket: Ticket;
  elapsed: number;
}

export function SlaTimer({ ticket, elapsed }: SlaTimerProps) {
  if (ticket.status === 'solved') {
    return <span className={classes.calm}>Solved</span>;
  }

  if (ticket.status === 'pending' || ticket.deadlineIn === null) {
    return (
      <span className={classes.calm}>
        <IconClock size={13} stroke={2} />
        Paused
      </span>
    );
  }

  const left = ticket.deadlineIn - elapsed;

  if (left < 0) {
    return (
      <Badge color="red" size="md" className={classes.breached}>
        Breached {formatMinutes(-left)} ago
      </Badge>
    );
  }

  return (
    <span className={classes.running}>
      <IconClock size={13} stroke={2} />
      Breaches in {formatMinutes(left)}
    </span>
  );
}
