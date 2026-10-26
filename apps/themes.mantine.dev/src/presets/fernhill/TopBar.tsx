'use client';

import {
  IconChevronLeft,
  IconChevronRight,
  IconLayoutSidebar,
  IconLeaf,
  IconMoon,
  IconPlus,
  IconSearch,
  IconSun,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  SegmentedControl,
  TextInput,
  useMantineColorScheme,
} from '@mantine/core';
import type { ViewId } from './data';
import classes from './TopBar.module.css';

const ICON = { size: 18, stroke: 1.8 };

interface TopBarProps {
  title: string;
  view: ViewId;
  onViewChange: (view: ViewId) => void;
  query: string;
  onQueryChange: (query: string) => void;
  railOpen: boolean;
  onRailToggle: () => void;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onBook: () => void;
}

export function TopBar({
  title,
  view,
  onViewChange,
  query,
  onQueryChange,
  railOpen,
  onRailToggle,
  onPrev,
  onNext,
  onToday,
  onBook,
}: TopBarProps) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={classes.root}>
      <ActionIcon
        className={classes.railToggle}
        onClick={onRailToggle}
        aria-label="Show calendar and waiting list"
        aria-expanded={railOpen}
        data-rail-toggle
      >
        <IconLayoutSidebar {...ICON} />
      </ActionIcon>

      <div className={classes.brand}>
        <span className={classes.brandMark}>
          <IconLeaf {...ICON} />
        </span>
        <span className={classes.brandName}>Fernhill Physio</span>
      </div>

      <div className={classes.dayNav}>
        <ActionIcon onClick={onPrev} aria-label="Previous day">
          <IconChevronLeft {...ICON} />
        </ActionIcon>
        <Button variant="default" className={classes.today} onClick={onToday}>
          Today
        </Button>
        <ActionIcon onClick={onNext} aria-label="Next day">
          <IconChevronRight {...ICON} />
        </ActionIcon>
        <span className={classes.dayTitle} aria-live="polite">
          {title}
        </span>
      </div>

      <span className={classes.spacer} />

      <SegmentedControl
        className={classes.views}
        value={view}
        onChange={(value) => onViewChange(value as ViewId)}
        data={[
          { value: 'prac', label: 'Practitioners' },
          { value: 'room', label: 'Rooms' },
        ]}
        aria-label="Columns"
      />

      <TextInput
        className={classes.search}
        type="search"
        placeholder="Find a patient"
        aria-label="Find a patient"
        leftSection={<IconSearch size={16} stroke={1.8} />}
        value={query}
        onChange={(event) => onQueryChange(event.currentTarget.value)}
      />

      <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
        <IconMoon {...ICON} className={classes.moon} />
        <IconSun {...ICON} className={classes.sun} />
      </ActionIcon>

      <Button leftSection={<IconPlus />} onClick={onBook}>
        Book
      </Button>
    </header>
  );
}
