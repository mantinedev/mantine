'use client';

import { Suspense, use, useRef } from 'react';
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

const codeRequests = new Map<string, Promise<CodeHighlightFileTreeCode[]>>();

function loadFiles(example: SkillExample) {
  let request = codeRequests.get(example.id);

  if (!request) {
    request = example.loadCode().then((module) => {
      const code = module.default as SkillExampleCode[];
      return [
        {
          fileName: PROMPT_FILE,
          language: 'markdown',
          code: wrapPrompt(example.prompt),
          pinned: true,
        },
        ...code.filter((file) => !isTestFile(file)),
        ...code.filter(isTestFile),
      ];
    });
    codeRequests.set(example.id, request);
  }

  return request;
}

function ExampleCode({ example }: { example: SkillExample }) {
  const files = use(loadFiles(example));

  return (
    <CodeHighlightFileTree
      key={example.id}
      code={files}
      getFileIcon={getCodeFileIcon}
      getFolderIcon={getCodeFolderIcon}
      defaultActiveFile={PROMPT_FILE}
      treeWidth={270}
      treeStickyTop="var(--app-shell-header-height)"
    />
  );
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
        <Suspense>
          <ExampleCode example={example} />
        </Suspense>
      </div>
    </div>
  );
}
