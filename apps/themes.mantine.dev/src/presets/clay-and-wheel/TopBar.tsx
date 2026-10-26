'use client';

import { IconListDetails, IconMoon, IconSun } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Button,
  Progress,
  ThemeIcon,
  useMantineColorScheme,
} from '@mantine/core';
import { TOTAL_LESSONS } from './data';
import { PotIcon } from './icons';
import classes from './TopBar.module.css';

interface TopBarProps {
  doneCount: number;
  outlineOpened: boolean;
  onOutlineToggle: () => void;
}

export function TopBar({ doneCount, outlineOpened, onOutlineToggle }: TopBarProps) {
  const { toggleColorScheme } = useMantineColorScheme();
  const percent = Math.round((doneCount / TOTAL_LESSONS) * 100);

  return (
    <header className={classes.root}>
      <a href="#" className={classes.brand} onClick={(event) => event.preventDefault()}>
        <ThemeIcon radius="xl" size={34}>
          <PotIcon />
        </ThemeIcon>
        <span className={classes.brandName}>Clay &amp; Wheel</span>
      </a>

      <Button
        variant="default"
        size="xs"
        className={classes.outlineButton}
        leftSection={<IconListDetails size={17} stroke={1.75} />}
        onClick={onOutlineToggle}
        aria-expanded={outlineOpened}
      >
        Course outline
      </Button>

      <div className={classes.progress}>
        <Progress
          value={(doneCount / TOTAL_LESSONS) * 100}
          className={classes.bar}
          aria-label="Course progress"
        />
        <span className={classes.progressText}>
          <b>
            {doneCount} of {TOTAL_LESSONS}
          </b>
          <span> lessons, {percent}%</span>
        </span>
      </div>

      <div className={classes.actions}>
        <ActionIcon onClick={toggleColorScheme} aria-label="Switch color scheme">
          <IconMoon size={18} stroke={1.75} className={classes.moon} />
          <IconSun size={18} stroke={1.75} className={classes.sun} />
        </ActionIcon>
        <Avatar title="Jess Moreno">JM</Avatar>
      </div>
    </header>
  );
}
