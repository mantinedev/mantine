import React from 'react';
import cx from 'clsx';
import { MantineColor } from '@mantine/theme';
import { Text, SharedTextProps } from '../Text/Text';
import { Mark } from '../Mark/Mark';

export function highlighter(value: string, highlight: string | string[]) {
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

  const re = new RegExp(`(${matcher})`, 'gi');
  const chunks = value
    .split(re)
    .map((part) => ({ chunk: part, highlighted: re.test(part) }))
    .filter(({ chunk }) => chunk);

  return chunks;
}

interface _HighlightProps<C extends React.ElementType, R extends HTMLElement>
  extends SharedTextProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

  /** Substring or an array of substrings to highlight in children */
  highlight: string | string[];

  /** Color from theme that is used for highlighting */
  highlightColor?: MantineColor;

  /** Full string part of which will be highlighted */
  children: string;
}

export type HighlightProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _HighlightProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _HighlightProps<C, R>>;

export function Highlight<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
>({ children, highlight, highlightColor = 'yellow', className, ...others }: HighlightProps<C, R>) {
  const highlightChunks = highlighter(children, highlight);

  return (
    <Text className={cx('mantine-highlight', className)} {...others}>
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <Mark key={i} color={highlightColor}>
            {chunk}
          </Mark>
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </Text>
  );
}

Highlight.displayName = '@mantine/core/Highlight';
