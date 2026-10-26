import { useRef } from 'react';
import { UnstyledButton } from '@mantine/core';
import {
  BLACK_KEYS,
  DAY,
  type DayStatus,
  DOW,
  formatDate,
  getDayInfo,
  getDayLabel,
  NOTES,
} from './data';
import classes from './Keyboard.module.css';

interface KeyboardProps {
  weekStart: number;
  typeId: string;
  day: number | null;
  onPick: (day: number, index: number) => void;
  onUnavailable: (status: DayStatus) => void;
}

export function Keyboard({ weekStart, typeId, day, onPick, onUnavailable }: KeyboardProps) {
  const keyRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const days = Array.from({ length: 7 }, (_, index) => weekStart + index * DAY);
  const infos = days.map((t) => getDayInfo(t, typeId));
  const focusable =
    day !== null && days.includes(day)
      ? day
      : (days.find((_, index) => infos[index].status === 'open') ?? days[0]);

  const pick = (index: number) => {
    onPick(days[index], index);
    keyRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    for (let next = index + direction; next >= 0 && next < days.length; next += direction) {
      if (infos[next].status === 'open') {
        pick(next);
        return;
      }
    }
  };

  return (
    <>
      <div className={classes.keyboard}>
        <div className={classes.felt} aria-hidden="true" />
        <div className={classes.keys} role="radiogroup" aria-label="Days of the week">
          {days.map((t, index) => {
            const info = infos[index];
            const disabled = info.status !== 'open';
            const label = getDayLabel(info);
            return (
              <UnstyledButton
                key={t}
                ref={(node) => {
                  keyRefs.current[index] = node;
                }}
                className={classes.key}
                mod={{ status: info.status }}
                role="radio"
                aria-checked={day === t}
                aria-disabled={disabled}
                aria-label={`${formatDate(t)}, ${label}`}
                tabIndex={t === focusable ? 0 : -1}
                onClick={() => (disabled ? onUnavailable(info.status) : pick(index))}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className={classes.note} aria-hidden="true">
                  {NOTES[index]}
                </span>
                <span className={classes.dow}>{DOW[index]}</span>
                <span className={classes.day}>{new Date(t).getUTCDate()}</span>
                <span className={classes.avail}>{label}</span>
              </UnstyledButton>
            );
          })}
        </div>
        <div className={classes.blacks} aria-hidden="true">
          {BLACK_KEYS.map((position) => (
            <span
              key={position}
              className={classes.black}
              style={{ left: `calc(${position} * (100% / 7))` }}
            />
          ))}
        </div>
      </div>
      <div className={classes.legend}>
        <span>
          <i data-swatch="free" />
          Times free
        </span>
        <span>
          <i data-swatch="full" />
          Fully booked
        </span>
        <span>
          <i data-swatch="off" />
          No lessons
        </span>
      </div>
    </>
  );
}
