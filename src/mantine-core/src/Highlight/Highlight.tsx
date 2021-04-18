import React from 'react';
import { DefaultProps, useMantineTheme, getThemeColor } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import { Text, TextProps } from '../Text/Text';

export function highlighter(value: string, highlightPart: string) {
  const normalizedValue = value.trim().toLowerCase();
  const normalizedHighlight = highlightPart.trim().toLowerCase();
  const diff = highlightPart.length - normalizedHighlight.length;
  const highlightLength = highlightPart.length - diff;

  const highlightIndex = normalizedValue.indexOf(normalizedHighlight);
  if (highlightIndex === -1) {
    return { start: value, highlighted: '', end: '' };
  }

  const start = value.slice(0, highlightIndex);
  const highlighted = value.slice(highlightIndex, highlightIndex + highlightLength);
  const end = value.slice(highlightIndex + highlightLength);

  return { start, highlighted, end };
}

interface HighlightProps extends DefaultProps, Omit<TextProps, 'children'> {
  /** String part to highligh in children */
  highlight: string;

  /** Color from theme that is used for highlighting */
  highlightColor?: string;

  /** Full string part of which will be highlighted */
  children: string;
}

export function Highlight<T extends React.ElementType = 'div'>({
  children,
  highlight,
  component,
  themeOverride,
  highlightColor = 'yellow',
  ...others
}: ComponentPassThrough<T, HighlightProps>) {
  const theme = useMantineTheme(themeOverride);
  const color = getThemeColor({
    theme,
    color: highlightColor,
    shade: 2,
  });

  const { start, end, highlighted } = highlighter(children, highlight);

  return (
    <Text component={component} themeOverride={themeOverride} {...others}>
      {!!start && start}
      {!!highlighted && (
        <mark
          style={{
            backgroundColor: color,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
          }}
        >
          {highlighted}
        </mark>
      )}
      {!!end && end}
    </Text>
  );
}

Highlight.displayName = '@mantine/core/Highlight';
