import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, getThemeColor } from '../../theme';
import { ComponentPassThrough } from '../../types';
import { Text, TextProps } from '../Text/Text';

export interface HighlighterOptions {
  noPartial?: boolean
  caseSensitive?: boolean
}

const HIGHTLIGHTER_DEFAULTS: HighlighterOptions = {
  caseSensitive: false,
  noPartial: false,
};

export function highlighter(
  value: string,
  highlight: string | string[],
  options: HighlighterOptions = HIGHTLIGHTER_DEFAULTS
) {
  const shouldHighlight = Array.isArray(highlight)
    ? highlight.filter((part) => part.trim().length > 0).length > 0
    : highlight.trim() !== '';

  if (!shouldHighlight) {
    return [{ chunk: value, highlighted: false }];
  }

  const matcher =
    typeof highlight === 'string'
      ? highlight.trim()
      : highlight
        .filter((part) => part.trim().length !== 0)
        .map((part) => part.trim())
        .join('|');

  let pattern = `(${matcher})`;

  if (options.noPartial) {
    pattern = `\\b${pattern}\\b`;
  }

  const re = new RegExp(pattern, `g${options.caseSensitive ? '' : 'i'}`);
  return value
    .split(re)
    .map((part) => ({ chunk: part, highlighted: re.test(part) }))
    .filter(({ chunk }) => chunk);
}

export interface HighlightProps extends DefaultProps, Omit<TextProps, 'children'> {
  /** Substring or an array of substrings to highlight in children */
  highlight: string | string[];

  /** Color from theme that is used for highlighting */
  highlightColor?: string;

  /** Full string part of which will be highlighted */
  children: string;

  /** Only highlight when the words are matched exactly */
  options?: HighlighterOptions
}

export function Highlight<T extends React.ElementType = 'div'>({
  children,
  highlight,
  component,
  themeOverride,
  highlightColor = 'yellow',
  className,
  options = HIGHTLIGHTER_DEFAULTS,
  ...others
}: ComponentPassThrough<T, HighlightProps>) {
  const theme = useMantineTheme(themeOverride);
  const color = getThemeColor({
    theme,
    color: highlightColor,
    shade: theme.colorScheme === 'dark' ? 5 : 2,
  });

  const highlightChunks = highlighter(children, highlight, options);

  return (
    <Text
      component={component}
      themeOverride={themeOverride}
      className={cx('mantine-highlight', className)}
      {...others}
    >
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <mark
            key={i}
            style={{
              backgroundColor: color,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
            }}
          >
            {chunk}
          </mark>
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </Text>
  );
}

Highlight.displayName = '@mantine/core/Highlight';
