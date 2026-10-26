import { Fragment } from 'react';
import { IconAlertTriangle, IconWalk, IconX } from '@tabler/icons-react';
import { ActionIcon, Button, Paper, Title } from '@mantine/core';
import {
  clashPairs,
  DAY_NAMES,
  formatMinutes,
  GENRE_NAMES,
  STAGE_BY_ID,
  starredForDay,
  walkMinutes,
  type DayId,
  type FestivalSet,
} from './data';
import classes from './MyTimetable.module.css';

interface MyTimetableProps {
  day: DayId;
  starred: Set<string>;
  onToggleStar: (id: string) => void;
  onShowAll: () => void;
}

function walkText(previous: FestivalSet, set: FestivalSet) {
  const gap = set.start - previous.end;
  const walk = walkMinutes(previous.stage, set.stage);
  const stage = STAGE_BY_ID[set.stage].name;

  if (previous.stage === set.stage) {
    return {
      bad: false,
      text: gap > 0 ? `Stay at the ${stage}, ${gap} minutes free` : 'Straight on, same stage',
    };
  }

  if (gap < walk) {
    return {
      bad: true,
      text: `Walk ${walk} minutes to the ${stage}. You’ll miss ${Math.min(set.end - set.start, walk - gap)} minutes of ${set.name}`,
    };
  }

  return {
    bad: false,
    text: `Walk ${walk} minutes to the ${stage}, ${gap - walk} minutes to spare`,
  };
}

export function MyTimetable({ day, starred, onToggleStar, onShowAll }: MyTimetableProps) {
  const list = starredForDay(starred, day);
  const pairs = clashPairs(starred, day);
  const clashIds = new Set(pairs.flatMap(([a, b]) => [a.id, b.id]));

  if (list.length === 0) {
    return (
      <section className={classes.plan} aria-label="My timetable">
        <div className={classes.empty}>
          <b>Nothing starred for {DAY_NAMES[day]}</b>
          Open the full timetable and tap the star on any set. It shows up here with walking times
          between stages.
          <div>
            <Button mt={14} onClick={onShowAll}>
              Open the full timetable
            </Button>
          </div>
        </div>
        <div />
      </section>
    );
  }

  const music = list.reduce((total, set) => total + (set.end - set.start), 0);
  const walking = list
    .slice(1)
    .reduce((total, set, index) => total + walkMinutes(list[index].stage, set.stage), 0);

  const stats: [string, string | number][] = [
    ['Sets', list.length],
    ['Music', `${Math.floor(music / 60)}h ${music % 60}m`],
    ['Walking', `${walking} min`],
    ['Clashes', pairs.length],
    ['First set', formatMinutes(list[0].start)],
    ['Last set ends', formatMinutes(list[list.length - 1].end)],
  ];

  return (
    <section className={classes.plan} aria-label="My timetable">
      <ol className={classes.list}>
        {list.map((set, index) => {
          const walk = index > 0 ? walkText(list[index - 1], set) : null;
          return (
            <Fragment key={set.id}>
              {walk && (
                <li className={classes.walk} data-bad={walk.bad || undefined}>
                  {walk.bad ? (
                    <IconAlertTriangle size={16} stroke={1.9} />
                  ) : (
                    <IconWalk size={16} stroke={1.9} />
                  )}
                  {walk.text}
                </li>
              )}
              <li className={classes.set} data-clash={clashIds.has(set.id) || undefined}>
                <span className={classes.time}>
                  {formatMinutes(set.start)}
                  <small>until {formatMinutes(set.end)}</small>
                </span>
                <span>
                  <span className={classes.name}>{set.name}</span>
                  <span className={classes.stage}>
                    {STAGE_BY_ID[set.stage].name}, {GENRE_NAMES[set.genre]}
                  </span>
                </span>
                <ActionIcon
                  className={classes.remove}
                  aria-label={`Remove ${set.name}`}
                  onClick={() => onToggleStar(set.id)}
                >
                  <IconX size={18} stroke={1.9} />
                </ActionIcon>
              </li>
            </Fragment>
          );
        })}
      </ol>

      <Paper component="aside" className={classes.side}>
        <Title order={3} mb={10}>
          {DAY_NAMES[day]} at a glance
        </Title>
        <dl className={classes.stats}>
          {stats.map(([label, value]) => (
            <Fragment key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </Fragment>
          ))}
        </dl>
      </Paper>
    </section>
  );
}
