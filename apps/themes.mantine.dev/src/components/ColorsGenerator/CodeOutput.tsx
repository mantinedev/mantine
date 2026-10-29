'use client';

import { CodeHighlight } from '@mantine/code-highlight';
import { Text } from '@mantine/core';
import { getColorsJson, getThemeCode, type Palette } from './palette';
import classes from './ColorsGenerator.module.css';

interface CodeOutputProps {
  name: string;
  light: Palette;
  dark: Palette | null;
}

export function CodeOutput({ name, light, dark }: CodeOutputProps) {
  return (
    <div className={classes.code}>
      <div>
        <Text size="sm" className={classes.sectionLabel} mb="sm">
          {dark ? 'Colors arrays' : 'Colors array'}
        </Text>
        <CodeHighlight
          code={getColorsJson({ light, dark })}
          language="json"
          className={classes.codeBlock}
        />
      </div>
      <div>
        <Text size="sm" className={classes.sectionLabel} mb="sm">
          Usage with MantineProvider
        </Text>
        <CodeHighlight
          code={getThemeCode({ name, light, dark })}
          language="tsx"
          className={classes.codeBlock}
        />
      </div>
    </div>
  );
}
