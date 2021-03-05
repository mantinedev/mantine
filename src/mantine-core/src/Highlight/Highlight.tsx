import React from 'react';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
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
  children: string;
}

export function Highlight<T extends React.ElementType = 'div'>({
  children,
  highlight,
  className,
  component,
  themeOverride,
  ...others
}: ComponentPassThrough<T, HighlightProps>) {
  const theme = useMantineTheme(themeOverride);
  const { start, end, highlighted } = highlighter(children, highlight);

  return (
    <Text component={component} className={className} {...others}>
      {!!start && start}
      {!!highlighted && (
        <mark style={{ color: 'inherit', backgroundColor: theme.colors.yellow[2] }}>
          {highlighted}
        </mark>
      )}
      {!!end && end}
    </Text>
  );
}

Highlight.displayName = '@mantine/core/Highlight';
