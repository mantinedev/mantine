import { Fragment } from 'react';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { ScrollArea, Text, UnstyledButton } from '@mantine/core';
import {
  clashPairs,
  DAY_NAMES,
  formatMinutes,
  HOURS,
  NOW,
  PX_PER_MINUTE,
  SETS,
  STAGES,
  type DayId,
  type FestivalSet,
  type GenreId,
  type StageId,
} from './data';
import { GenreIcon } from './Icons';
import { SetPopover } from './SetPopover';
import classes from './Timetable.module.css';

const HEAD_HEIGHT = 104;
const COLUMN_HEIGHT = HOURS * 60 * PX_PER_MINUTE;

interface TimetableProps {
  day: DayId;
  starred: Set<string>;
  genres: GenreId[];
  query: string;
  live: boolean;
  openSet: string | null;
  highlightedStage: StageId | null;
  nowLineRef: React.Ref<HTMLDivElement>;
  onOpenSetChange: (id: string | null) => void;
  onOpenSetById: (id: string) => void;
  onToggleStar: (id: string) => void;
  onHighlightStage: (stage: StageId | null) => void;
}

export function Timetable({
  day,
  starred,
  genres,
  query,
  live,
  openSet,
  highlightedStage,
  nowLineRef,
  onOpenSetChange,
  onOpenSetById,
  onToggleStar,
  onHighlightStage,
}: TimetableProps) {
  const search = query.trim().toLowerCase();
  const anyFilter = genres.length > 0 || search !== '';
  const clashIds = new Set(clashPairs(starred, day).flatMap(([a, b]) => [a.id, b.id]));
  const matches = (set: FestivalSet) =>
    (genres.length === 0 || genres.includes(set.genre)) &&
    (search === '' || set.name.toLowerCase().includes(search));
  const hits = anyFilter ? SETS.filter((set) => set.day === day && matches(set)).length : 0;

  return (
    <section className={classes.section} aria-label="Full timetable">
      <ScrollArea scrollbars="x">
        <div className={classes.scroll}>
          <div className={classes.tt} onMouseLeave={() => onHighlightStage(null)}>
            <div className={classes.grid}>
              <div />
              {STAGES.map((stage, index) => (
                <div
                  key={stage.id}
                  className={classes.head}
                  data-highlighted={highlightedStage === stage.id || undefined}
                  onMouseEnter={() => onHighlightStage(stage.id)}
                >
                  <img src={stage.image} alt="" />
                  <span className={classes.marker}>{index + 1}</span>
                  <span className={classes.stageName}>
                    {stage.name}
                    <small>{stage.sub}</small>
                  </span>
                </div>
              ))}

              <div className={classes.ruler} style={{ height: COLUMN_HEIGHT }} aria-hidden="true">
                {Array.from({ length: HOURS + 1 }, (_, hour) => (
                  <span key={hour} style={{ top: hour * 60 * PX_PER_MINUTE }}>
                    {String((12 + hour) % 24).padStart(2, '0')}
                    <small>00</small>
                  </span>
                ))}
              </div>

              {STAGES.map((stage) => (
                <div
                  key={stage.id}
                  className={classes.col}
                  style={{ height: COLUMN_HEIGHT }}
                  data-highlighted={highlightedStage === stage.id || undefined}
                  onMouseEnter={() => onHighlightStage(stage.id)}
                >
                  {SETS.filter((set) => set.day === day && set.stage === stage.id).map((set) => {
                    const top = set.start * PX_PER_MINUTE;
                    const height = (set.end - set.start) * PX_PER_MINUTE;
                    const isStarred = starred.has(set.id);
                    const isClash = clashIds.has(set.id);
                    const isMatch = matches(set);
                    const isLive = live && set.start <= NOW.minute && NOW.minute < set.end;

                    return (
                      <Fragment key={set.id}>
                        <SetPopover
                          set={set}
                          opened={openSet === set.id}
                          starred={isStarred}
                          onClose={() => onOpenSetChange(null)}
                          onToggleStar={() => onToggleStar(set.id)}
                          onOpenSet={onOpenSetById}
                        >
                          <UnstyledButton
                            className={classes.set}
                            style={{ top: top + 2, height: height - 4 }}
                            mod={{
                              head: set.head,
                              compact: height < 52,
                              starred: isStarred,
                              clash: isClash,
                              dim: anyFilter && !isMatch,
                              hit: anyFilter && isMatch && search !== '',
                              past: live && set.end <= NOW.minute,
                            }}
                            aria-label={`${set.name}, ${formatMinutes(set.start)} to ${formatMinutes(set.end)}, ${stage.name}${isStarred ? ', in my timetable' : ''}${isClash ? ', clashes with another starred set' : ''}`}
                            onClick={() => onOpenSetChange(openSet === set.id ? null : set.id)}
                          >
                            <span className={classes.setTime}>
                              <GenreIcon genre={set.genre} size={10} />
                              {formatMinutes(set.start)}–{formatMinutes(set.end)}
                            </span>
                            <span className={classes.setName}>{set.name}</span>
                            {isLive && (
                              <span className={classes.onNow}>
                                <i />
                                On now
                              </span>
                            )}
                          </UnstyledButton>
                        </SetPopover>
                        <UnstyledButton
                          className={classes.star}
                          style={{ top: top + 4 }}
                          aria-pressed={isStarred}
                          aria-label={`${isStarred ? 'Remove' : 'Add'} ${set.name} ${isStarred ? 'from' : 'to'} my timetable`}
                          onClick={() => onToggleStar(set.id)}
                        >
                          {isStarred ? (
                            <IconStarFilled size={17} />
                          ) : (
                            <IconStar size={17} stroke={1.9} />
                          )}
                        </UnstyledButton>
                      </Fragment>
                    );
                  })}
                </div>
              ))}
            </div>

            {live && day === NOW.day && (
              <div
                ref={nowLineRef}
                className={classes.nowLine}
                style={{ top: HEAD_HEIGHT + NOW.minute * PX_PER_MINUTE }}
              >
                <span>{formatMinutes(NOW.minute)}</span>
              </div>
            )}
          </div>

          <div className={classes.legend}>
            <span>
              <i data-kind="set" />
              Set
            </span>
            <span>
              <i data-kind="starred" />
              In my timetable
            </span>
            <span>
              <i data-kind="clash" />
              Clash
            </span>
            <span>
              <i data-kind="now" />
              Now
            </span>
          </div>

          {anyFilter && hits === 0 && (
            <Text fw={500} mt="sm">
              Nothing on {DAY_NAMES[day]} matches. Try another day or clear the search and genres.
            </Text>
          )}
        </div>
      </ScrollArea>
    </section>
  );
}
