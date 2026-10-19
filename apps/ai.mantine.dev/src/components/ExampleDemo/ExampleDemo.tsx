'use client';

import { useRef } from 'react';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { Text } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import type { SkillExample } from '@/examples';
import { createFiller } from '@/examples/fill-utils';
import type { SkillData } from '@/skills-data';
import { PromptText } from './PromptText';
import classes from './ExampleDemo.module.css';

interface ExampleDemoProps {
  skill: SkillData;
  example: SkillExample;
}

export function ExampleDemo({ skill, example }: ExampleDemoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useHotkeys([
    [
      'mod+shift+E',
      () => {
        if (wrapperRef.current && example.fill) {
          example.fill(createFiller(wrapperRef.current));
        }
      },
    ],
  ]);

  return (
    <div className={classes.root}>
      <div className={classes.preview}>
        <div className={classes.header}>
          <Text className={classes.title}>{example.title}</Text>
          <Text className={classes.description}>Built with the {skill.name} skill</Text>
        </div>

        <div className={classes.prompt}>
          <Text className={classes.promptLabel}>Prompt</Text>
          <PromptText text={example.prompt} />
        </div>

        <div className={classes.inner}>
          <div className={classes.wrapper} key={example.id} ref={wrapperRef}>
            <example.component />
          </div>
        </div>
      </div>

      <div className={classes.code}>
        <CodeHighlightTabs key={example.id} code={example.code} getFileIcon={getCodeFileIcon} />
      </div>
    </div>
  );
}
