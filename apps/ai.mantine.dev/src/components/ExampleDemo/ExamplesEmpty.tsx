import { Text, Title } from '@mantine/core';
import type { SkillData } from '@/skills-data';
import classes from './ExamplesEmpty.module.css';

interface ExamplesEmptyProps {
  skill: SkillData;
}

export function ExamplesEmpty({ skill }: ExamplesEmptyProps) {
  return (
    <div className={classes.root}>
      <Title order={2} className={classes.title}>
        {skill.name}
      </Title>
      <Text size="sm" mt="xs">
        Examples for this skill are coming.
      </Text>
    </div>
  );
}
