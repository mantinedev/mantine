'use client';

import { useState } from 'react';
import { Burger, Text } from '@mantine/core';
import type { SkillId } from '@/skills-data';
import { ExamplesNavbar } from './ExamplesNavbar/ExamplesNavbar';
import classes from './ExamplesShell.module.css';

interface ExamplesShellProps {
  /** Skill of the displayed example */
  activeSkill: SkillId;

  /** Id of the displayed example, undefined when the skill has no examples */
  activeExample?: string;

  children: React.ReactNode;
}

export function ExamplesShell({ activeSkill, activeExample, children }: ExamplesShellProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={classes.root}>
      <ExamplesNavbar
        activeSkill={activeSkill}
        activeExample={activeExample}
        opened={opened}
        onClose={() => setOpened(false)}
      />
      <div className={classes.main}>
        <div className={classes.mobileBar}>
          <Burger
            opened={opened}
            onClick={() => setOpened((current) => !current)}
            size="sm"
            aria-label="Toggle examples list"
          />
          <Text size="sm" className={classes.mobileTitle}>
            Examples
          </Text>
        </div>
        {children}
      </div>
    </div>
  );
}
