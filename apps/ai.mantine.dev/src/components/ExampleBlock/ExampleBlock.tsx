'use client';

import { Surface, Text } from '@mantine/core';
import { Demo } from '@mantinex/demo';
import { MdxTitle } from '@/components/MdxElements';
import type { SkillExample } from '@/examples';
import classes from './ExampleBlock.module.css';

interface ExampleBlockProps {
  example: SkillExample;
}

export function ExampleBlock({ example }: ExampleBlockProps) {
  return (
    <section className={classes.root}>
      <MdxTitle order={2} id={example.id}>
        {example.title}
      </MdxTitle>

      <Text size="sm" className={classes.label}>
        Prompt
      </Text>
      <Surface withBorder p="md" className={classes.prompt}>
        <Text className={classes.promptText}>{example.prompt}</Text>
      </Surface>

      <Text size="sm" className={classes.label}>
        Result
      </Text>
      <Demo data={{ type: 'code', component: example.component, code: example.code }} />
    </section>
  );
}
