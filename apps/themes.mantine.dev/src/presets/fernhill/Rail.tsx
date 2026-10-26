'use client';

import { IconSend } from '@tabler/icons-react';
import { Badge, Button, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import {
  dayKey,
  DOW_LONG,
  fromKey,
  MONTHS,
  PRACS,
  TODAY,
  typeOf,
  type WaitingPatient,
} from './data';
import classes from './Rail.module.css';

const TODAY_KEY = dayKey(TODAY);

interface RailProps {
  opened: boolean;
  current: string;
  month: string;
  onMonthChange: (month: string) => void;
  onDayChange: (day: string) => void;
  waitlist: WaitingPatient[];
  draggingId: string | null;
  onDragStart: (id: string, event: React.DragEvent<HTMLLIElement>) => void;
  onDragEnd: () => void;
  onOffer: (id: string) => void;
}

function dayLabel(key: string) {
  const date = fromKey(key);
  return `${DOW_LONG[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()]}${
    date.getDay() === 0 ? ', closed' : ''
  }`;
}

export function Rail({
  opened,
  current,
  month,
  onMonthChange,
  onDayChange,
  waitlist,
  draggingId,
  onDragStart,
  onDragEnd,
  onOffer,
}: RailProps) {
  const shownMonth = fromKey(month).getMonth();

  return (
    <aside
      className={classes.root}
      data-opened={opened || undefined}
      aria-label="Calendar and waiting list"
      data-rail
    >
      <section aria-label="Month">
        <DatePicker
          value={current}
          onChange={(value) => value && onDayChange(value)}
          date={month}
          onDateChange={onMonthChange}
          maxLevel="month"
          fullWidth
          size="xs"
          weekendDays={[]}
          highlightToday={false}
          classNames={{ monthCell: classes.monthCell, calendarHeader: classes.calendarHeader }}
          getDayProps={(date) => ({
            'data-fh-today': date === TODAY_KEY || undefined,
            'data-closed': fromKey(date).getDay() === 0 || undefined,
            'aria-label': dayLabel(date),
          })}
          renderDay={(date) => {
            const day = fromKey(date);
            const dot = day.getDay() !== 0 && day.getMonth() === shownMonth;
            return (
              <>
                {day.getDate()}
                {dot && <span className={classes.dot} />}
              </>
            );
          }}
        />
      </section>

      <section aria-labelledby="fernhill-wl-title">
        <div className={classes.head}>
          <Title order={2} id="fernhill-wl-title">
            Waiting for an earlier slot
          </Title>
          <span className={classes.count}>{waitlist.length}</span>
        </div>
        <div className={classes.sub}>
          Drag a patient into a free gap, or offer them the next one.
        </div>
        <ul className={classes.list}>
          {waitlist.length === 0 && (
            <li className={classes.empty}>
              Nobody is waiting. Patients who ask for an earlier appointment appear here.
            </li>
          )}
          {waitlist.map((item) => (
            <li
              key={item.id}
              className={classes.card}
              draggable
              data-dragging={draggingId === item.id || undefined}
              onDragStart={(event) => onDragStart(item.id, event)}
              onDragEnd={onDragEnd}
            >
              <span className={classes.grip} aria-hidden="true" />
              <span className={classes.name}>
                {item.patient}
                {item.urgent ? (
                  <Badge className={classes.tag} data-tone="red">
                    Urgent
                  </Badge>
                ) : (
                  <Badge className={classes.tag} data-tone="amber">
                    Waiting since {item.since}
                  </Badge>
                )}
              </span>
              <span className={classes.meta}>
                {item.type}, {typeOf(item.type).dur} min,{' '}
                {item.prac === null ? 'anyone' : PRACS[item.prac].name}
              </span>
              <span className={classes.meta}>{item.note}</span>
              <span className={classes.actions}>
                <Button
                  variant="default"
                  size="xs"
                  leftSection={<IconSend stroke={1.8} />}
                  onClick={() => onOffer(item.id)}
                >
                  Offer next slot
                </Button>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
