import { IconAlertTriangle } from '@tabler/icons-react';
import { Title, Tooltip, UnstyledButton } from '@mantine/core';
import {
  type Appointment,
  type Clashes,
  DAY_END,
  DAY_START,
  hm,
  NOW_MIN,
  PRACS,
  sameDay,
  shortDate,
  TODAY,
  TREATMENT_ROOMS,
} from './data';
import classes from './RoomRibbon.module.css';

const pctX = (minutes: number) => ((minutes - DAY_START) / (DAY_END - DAY_START)) * 100;
const AXIS = [480, 600, 720, 840, 960, 1080];

interface RoomRibbonProps {
  current: Date;
  list: Appointment[];
  clashes: Clashes;
  highlightId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (appointment: Appointment) => void;
}

export function RoomRibbon({
  current,
  list,
  clashes,
  highlightId,
  onHover,
  onSelect,
}: RoomRibbonProps) {
  const isToday = sameDay(current, TODAY);
  const isPast = current < TODAY;
  const closed = current.getDay() === 0;
  let totalFree = 0;

  const rows = TREATMENT_ROOMS.map((room) => {
    const items = list
      .filter((a) => a.room === room && a.status !== 'cancelled' && a.status !== 'noshow')
      .sort((a, b) => a.start - b.start);
    const gaps: [number, number][] = [];
    if (!isPast && !closed) {
      let t = isToday ? Math.max(DAY_START, Math.ceil(NOW_MIN / 15) * 15) : DAY_START;
      [...items.map((a): [number, number] => [a.start, a.start + a.dur]), [DAY_END, DAY_END]]
        .sort((x, y) => x[0] - y[0])
        .forEach(([start, end]) => {
          if (start - t >= 30) {
            gaps.push([t, start]);
            totalFree += start - t;
          }
          t = Math.max(t, end);
        });
    }
    return { room, items, gaps };
  });

  const clashCount = clashes.ranges['Room 1'].length + clashes.ranges['Room 2'].length;
  const booked = list
    .filter((a) => (a.room === 'Room 1' || a.room === 'Room 2') && a.status !== 'cancelled')
    .reduce((sum, a) => sum + a.dur, 0);

  return (
    <section className={classes.root} aria-labelledby="fernhill-rb-title">
      <div className={classes.head}>
        <Title order={2} id="fernhill-rb-title">
          Treatment rooms, {isToday ? 'today' : shortDate(current)}
        </Title>
        <div className={classes.stats}>
          <span>
            <b>{Math.round((booked / (2 * 690)) * 100)}%</b> booked
          </span>
          {!isPast && !closed && (
            <span>
              <b>
                {Math.floor(totalFree / 60)} h {totalFree % 60} min
              </b>{' '}
              free{isToday ? ' from now' : ''}
            </span>
          )}
          {clashCount ? (
            <span className={classes.bad}>
              <IconAlertTriangle size={14} stroke={1.8} />
              {clashCount} {clashCount === 1 ? 'clash' : 'clashes'}
            </span>
          ) : (
            <span>No clashes</span>
          )}
        </div>
      </div>

      <div className={classes.grid}>
        {rows.map(({ room, items, gaps }) => (
          <div key={room} className={classes.row}>
            <span className={classes.label}>{room}</span>
            <div className={classes.track} aria-label={`${room}, ${items.length} bookings`}>
              {items.map((a) => (
                <Tooltip
                  key={a.id}
                  label={`${hm(a.start)} to ${hm(a.start + a.dur)}, ${a.patient} with ${PRACS[a.prac].name}`}
                  openDelay={250}
                >
                  <UnstyledButton
                    className={classes.seg}
                    data-done={a.status === 'done' || undefined}
                    data-hl={highlightId === a.id || undefined}
                    style={{
                      left: `${pctX(a.start)}%`,
                      width: `${pctX(a.start + a.dur) - pctX(a.start)}%`,
                    }}
                    aria-label={`${hm(a.start)} to ${hm(a.start + a.dur)}, ${a.patient} with ${PRACS[a.prac].name}`}
                    onMouseEnter={() => onHover(a.id)}
                    onMouseLeave={() => onHover(null)}
                    onFocus={() => onHover(a.id)}
                    onBlur={() => onHover(null)}
                    onClick={() => onSelect(a)}
                  >
                    {PRACS[a.prac].short}
                  </UnstyledButton>
                </Tooltip>
              ))}
              {gaps.map(([start, end]) => (
                <span
                  key={`gap-${start}`}
                  className={classes.gap}
                  style={{ left: `${pctX(start)}%`, width: `${pctX(end) - pctX(start)}%` }}
                >
                  {end - start >= 45 ? `${end - start} min free` : ''}
                </span>
              ))}
              {clashes.ranges[room].map(([start, end]) => (
                <span
                  key={`clash-${start}`}
                  className={classes.clash}
                  style={{
                    left: `${pctX(start)}%`,
                    width: `${Math.max(0.6, pctX(end) - pctX(start))}%`,
                  }}
                  aria-label={`Double-booked ${hm(start)} to ${hm(end)}`}
                />
              ))}
              {isToday && <span className={classes.now} style={{ left: `${pctX(NOW_MIN)}%` }} />}
            </div>
          </div>
        ))}
        <div className={classes.axis} aria-hidden="true">
          {AXIS.map((minutes) => (
            <span key={minutes} style={{ left: `${pctX(minutes)}%` }}>
              {hm(minutes)}
            </span>
          ))}
        </div>
      </div>
      <div className={classes.note}>Gym sessions and video calls don’t need a treatment room.</div>
    </section>
  );
}
