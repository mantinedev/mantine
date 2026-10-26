import { IconLayoutGrid, IconList, IconSearch } from '@tabler/icons-react';
import { Chip, SegmentedControl, Switch, Tabs, TextInput } from '@mantine/core';
import { DAYS, GENRES, starredForDay, type DayId, type GenreId, type View } from './data';
import { GenreIcon } from './Icons';
import classes from './Controls.module.css';

interface ControlsProps {
  day: DayId;
  starred: Set<string>;
  view: View;
  genres: GenreId[];
  query: string;
  live: boolean;
  onDayChange: (day: DayId) => void;
  onViewChange: (view: View) => void;
  onGenresChange: (genres: GenreId[]) => void;
  onQueryChange: (query: string) => void;
  onLiveChange: (live: boolean) => void;
}

export function Controls({
  day,
  starred,
  view,
  genres,
  query,
  live,
  onDayChange,
  onViewChange,
  onGenresChange,
  onQueryChange,
  onLiveChange,
}: ControlsProps) {
  return (
    <div className={classes.controls}>
      <div className={classes.row}>
        <Tabs
          value={day}
          onChange={(value) => value && onDayChange(value as DayId)}
          variant="pills"
          activateTabWithKeyboard
          classNames={{ list: classes.days, tab: classes.day, tabLabel: classes.dayLabel }}
        >
          <Tabs.List aria-label="Day">
            {DAYS.map((item) => {
              const count = starredForDay(starred, item.id).length;
              return (
                <Tabs.Tab key={item.id} value={item.id}>
                  <b className={classes.dayName}>{item.label}</b>
                  <span className={classes.dayDate}>
                    {item.date}
                    {count > 0 && `, ${count} starred`}
                  </span>
                </Tabs.Tab>
              );
            })}
          </Tabs.List>
        </Tabs>

        <SegmentedControl
          aria-label="View"
          value={view}
          onChange={(value) => onViewChange(value as View)}
          data={[
            {
              value: 'all',
              label: (
                <span className={classes.viewLabel}>
                  <IconLayoutGrid size={18} stroke={1.9} />
                  Full timetable
                </span>
              ),
            },
            {
              value: 'mine',
              label: (
                <span className={classes.viewLabel}>
                  <IconList size={18} stroke={1.9} />
                  My timetable
                </span>
              ),
            },
          ]}
        />

        <span className={classes.spacer} />

        <Switch
          label="Live now"
          checked={live}
          onChange={(event) => onLiveChange(event.currentTarget.checked)}
        />
      </div>

      <div className={classes.row}>
        <Chip.Group
          multiple
          value={genres}
          onChange={(value) => onGenresChange(value as GenreId[])}
        >
          <div className={classes.chips} role="group" aria-label="Genres">
            {GENRES.map((genre) => (
              <Chip key={genre.id} value={genre.id}>
                <span className={classes.chipContent}>
                  <GenreIcon genre={genre.id} />
                  {genre.name}
                </span>
              </Chip>
            ))}
          </div>
        </Chip.Group>

        <span className={classes.spacer} />

        <TextInput
          type="search"
          className={classes.search}
          placeholder="Find an act"
          aria-label="Find an act"
          leftSection={<IconSearch size={16} stroke={1.9} />}
          value={query}
          onChange={(event) => onQueryChange(event.currentTarget.value)}
        />
      </div>
    </div>
  );
}
