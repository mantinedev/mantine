'use client';

import { useRef } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Avatar, Badge, Card, Text, Title } from '@mantine/core';
import { type Availability, DATES_COUNT, PEOPLE } from './data';
import { type BestRun, formatDay, getDay, getRunHint, getRunLabel, isWeekend } from './trip';
import classes from './DatesGrid.module.css';

interface DatesGridProps {
  availability: Availability;
  counts: number[];
  run: BestRun | null;
  pillRef: React.Ref<HTMLDivElement>;
  onToggleDay: (index: number) => void;
}

const DAYS = Array.from({ length: DATES_COUNT }, (_, index) => getDay(index));

export function DatesGrid({ availability, counts, run, pillRef, onToggleDay }: DatesGridProps) {
  const tableRef = useRef<HTMLTableElement>(null);
  const inRun = (index: number) =>
    run !== null && index >= run.start && index < run.start + run.length;

  const focusDay = (index: number) => {
    const target = tableRef.current?.querySelector<HTMLElement>(`td[data-index="${index}"]`);
    target?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onToggleDay(index);
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      focusDay(
        Math.max(0, Math.min(DATES_COUNT - 1, index + (event.key === 'ArrowRight' ? 1 : -1)))
      );
    }
  };

  return (
    <Card className={classes.card} padding={0} data-card>
      <div className={classes.head}>
        <Title order={4}>When can everyone go?</Title>
        <Text size="sm" mt={2}>
          Tap the days in your row. The best stretch for the whole group lights up.
        </Text>
      </div>

      <div className={classes.scroll}>
        <table className={classes.grid} ref={tableRef}>
          <colgroup>
            <col />
            {DAYS.map((day, index) => (
              <col key={day.getDate()} className={inRun(index) ? classes.bestCol : undefined} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th className={classes.nameHead} aria-label="Person" />
              {DAYS.map((day, index) => (
                <th
                  key={day.getDate()}
                  scope="col"
                  data-weekend={isWeekend(day) || undefined}
                  data-best={inRun(index) || undefined}
                >
                  {formatDay(day).slice(0, 2)}
                  <b>{day.getDate()}</b>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PEOPLE.map((person) => {
              const me = person.id === 'sam';
              return (
                <tr key={person.id} data-me={me || undefined}>
                  <td className={classes.name}>
                    <span>
                      <Avatar size="xs" color={person.tone} title={person.name}>
                        {person.short}
                      </Avatar>
                      {person.name}
                    </span>
                  </td>
                  {availability[person.id].map((free, index) => {
                    const label = `${formatDay(DAYS[index])} March`;
                    return me ? (
                      <td
                        key={index}
                        className={classes.cell}
                        data-on={free === 1 || undefined}
                        data-index={index}
                        tabIndex={0}
                        role="checkbox"
                        aria-checked={free === 1}
                        aria-label={label}
                        onClick={() => onToggleDay(index)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                      />
                    ) : (
                      <td
                        key={index}
                        className={classes.cell}
                        data-on={free === 1 || undefined}
                        aria-label={`${person.name} ${free ? 'free' : 'busy'} ${formatDay(DAYS[index])}`}
                      />
                    );
                  })}
                </tr>
              );
            })}
            <tr className={classes.countRow}>
              <td className={classes.countName}>Free</td>
              {counts.map((count, index) => (
                <td key={index} aria-label={`${count} of 6 free`}>
                  <span
                    className={classes.bar}
                    data-full={count === PEOPLE.length || undefined}
                    style={{ height: Math.max(3, (count / PEOPLE.length) * 26) }}
                    title={`${count} of 6 free`}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.bestLine}>
        <Badge
          ref={pillRef}
          className={classes.bestPill}
          leftSection={run ? <IconCheck size={16} stroke={2.4} /> : undefined}
        >
          {run ? getRunLabel(run) : 'No overlap yet'}
        </Badge>
        <Text span size="sm">
          {run ? getRunHint(run) : 'Mark a few more days'}
        </Text>
      </div>

      <div className={classes.legend}>
        <span>
          <i className={classes.legendFree} />
          Free
        </span>
        <span>
          <i className={classes.legendBusy} />
          Busy
        </span>
        <span>
          <i className={classes.legendBest} />
          Everyone free
        </span>
      </div>
    </Card>
  );
}
