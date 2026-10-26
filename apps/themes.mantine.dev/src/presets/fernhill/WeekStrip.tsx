import { Progress, ScrollArea, UnstyledButton } from '@mantine/core';
import { addDays, type Appointment, dayKey, DOW, sameDay } from './data';
import classes from './WeekStrip.module.css';

interface WeekStripProps {
  current: Date;
  getDay: (date: Date) => Appointment[];
  onSelect: (date: Date) => void;
}

export function WeekStrip({ current, getDay, onSelect }: WeekStripProps) {
  const monday = addDays(current, -((current.getDay() + 6) % 7));

  return (
    <ScrollArea
      className={classes.root}
      classNames={{ content: classes.content }}
      scrollbars="x"
      scrollbarSize={6}
    >
      <div className={classes.grid} role="group" aria-label="This week">
        {Array.from({ length: 7 }, (_, index) => {
          const date = addDays(monday, index);
          const closed = date.getDay() === 0;
          const list = getDay(date).filter((a) => a.status !== 'cancelled');
          const capacity = closed ? 1 : date.getDay() === 6 ? 2 * 300 : 4 * 690;
          const used = list.reduce((sum, a) => sum + a.dur, 0);
          const pct = Math.min(100, Math.round((used / capacity) * 100));

          return (
            <UnstyledButton
              key={dayKey(date)}
              className={classes.day}
              aria-pressed={sameDay(date, current)}
              onClick={() => onSelect(date)}
            >
              <span className={classes.top}>
                <b>
                  {DOW[date.getDay()]} {date.getDate()}
                </b>
                <span className={classes.count}>{closed ? 'Closed' : list.length}</span>
              </span>
              <Progress
                value={closed ? 0 : pct}
                size={5}
                radius={3}
                aria-label={`${pct}% booked`}
              />
            </UnstyledButton>
          );
        })}
      </div>
    </ScrollArea>
  );
}
