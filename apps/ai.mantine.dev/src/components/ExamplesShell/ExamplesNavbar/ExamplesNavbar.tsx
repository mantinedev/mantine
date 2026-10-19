'use client';

import { useEffect } from 'react';
import { ScrollArea } from '@mantine/core';
import { EXAMPLES } from '@/examples';
import { SKILLS, type SkillId } from '@/skills-data';
import { ExamplesLinksGroup } from './ExamplesLinksGroup/ExamplesLinksGroup';
import classes from './ExamplesNavbar.module.css';

interface ExamplesNavbarProps {
  activeSkill: SkillId;
  activeExample?: string;
  opened: boolean;
  onClose: () => void;
}

export function ExamplesNavbar({
  activeSkill,
  activeExample,
  opened,
  onClose,
}: ExamplesNavbarProps) {
  useEffect(() => {
    document
      .querySelector('[data-navbar-link-active]')
      ?.scrollIntoView({ block: 'center', behavior: 'instant' });
  }, []);

  return (
    <nav className={classes.navbar} data-hidden={!opened || undefined}>
      <ScrollArea className={classes.scroll} type="scroll" scrollbarSize={6}>
        {SKILLS.map((skill) => (
          <ExamplesLinksGroup
            key={skill.id}
            skill={skill}
            items={EXAMPLES[skill.id]}
            activeExample={skill.id === activeSkill ? activeExample : undefined}
            onClose={onClose}
          />
        ))}
      </ScrollArea>
    </nav>
  );
}
