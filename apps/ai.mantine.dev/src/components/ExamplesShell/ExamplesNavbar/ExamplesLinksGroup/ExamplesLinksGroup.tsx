'use client';

import Link from 'next/link';
import { Text } from '@mantine/core';
import type { SkillExample } from '@/examples';
import type { SkillData } from '@/skills-data';
import classes from './ExamplesLinksGroup.module.css';

interface ExamplesLinksGroupProps {
  skill: SkillData;
  items: SkillExample[];
  activeExample?: string;
  onClose: () => void;
}

export function ExamplesLinksGroup({
  skill,
  items,
  activeExample,
  onClose,
}: ExamplesLinksGroupProps) {
  const links = items.map((item) => (
    <Link
      href={`/skills/${skill.id}/${item.id}`}
      key={item.id}
      className={classes.link}
      data-navbar-link-active={activeExample === item.id || undefined}
      onClick={onClose}
    >
      <Text className={classes.linkTitle}>{item.title}</Text>
      <Text className={classes.linkDescription}>{item.description}</Text>
    </Link>
  ));

  return (
    <div className={classes.group}>
      <Text className={classes.title}>{skill.name}</Text>
      {links}
      {items.length === 0 && <Text className={classes.noExamples}>Coming soon</Text>}
    </div>
  );
}
