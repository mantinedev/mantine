'use client';

import { useRef } from 'react';
import { CodeHighlightFileTree, type CodeHighlightFileTreeCode } from '@mantine/code-highlight';
import { Text } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { getCodeFileIcon, getCodeFolderIcon } from '@mantinex/dev-icons';
import type { SkillExample, SkillExampleCode } from '@/examples';
import { createFiller } from '@/examples/fill-utils';
import type { SkillData } from '@/skills-data';
import { wrapPrompt } from './wrap-prompt';
import classes from './ExampleDemo.module.css';

interface ExampleDemoProps {
  skill: SkillData;
  example: SkillExample;
}

const PROMPT_FILE = 'PROMPT.md';

function isTestFile(file: SkillExampleCode) {
  return /\.test\.tsx?$/.test(file.fileName);
}

function getFiles(example: SkillExample): CodeHighlightFileTreeCode[] {
  return [
    { fileName: PROMPT_FILE, language: 'markdown', code: wrapPrompt(example.prompt), pinned: true },
    ...example.code.filter((file) => !isTestFile(file)),
    ...example.code.filter(isTestFile),
  ];
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

        <div className={classes.inner}>
          <div className={classes.wrapper} key={example.id} ref={wrapperRef}>
            <example.component />
          </div>
        </div>
      </div>

      <div className={classes.code}>
        <CodeHighlightFileTree
          key={example.id}
          code={getFiles(example)}
          getFileIcon={getCodeFileIcon}
          getFolderIcon={getCodeFolderIcon}
          defaultActiveFile={PROMPT_FILE}
          treeWidth={270}
        />
      </div>
    </div>
  );
}
