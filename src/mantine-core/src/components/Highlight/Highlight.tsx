/* eslint-disable react/jsx-pascal-case */
import React, { forwardRef } from 'react';
import cx from 'clsx';
import { MantineColor, PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
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

interface _HighlightProps extends SharedTextProps {
  /** Substring or an array of substrings to highlight in children */
  highlight: string | string[];

  /** Color from theme that is used for highlighting */
  highlightColor?: MantineColor;

  /** Full string part of which will be highlighted */
  children: string;
}

export type HighlightProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _HighlightProps
>;

type HighlightComponent = <C extends React.ElementType = 'div'>(
  props: HighlightProps<C>
) => React.ReactElement;

export const Highlight: HighlightComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      children,
      highlight,
      highlightColor = 'yellow',
      className,
      component,
      ...others
    }: HighlightProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const highlightChunks = highlighter(children, highlight);
    const _Text = Text as any;

    return (
      <_Text
        component={component}
        className={cx('mantine-highlight', className)}
        ref={ref}
        {...others}
      >
        {highlightChunks.map(({ chunk, highlighted }, i) =>
          highlighted ? (
            <Mark key={i} color={highlightColor}>
              {chunk}
            </Mark>
          ) : (
            <span key={i}>{chunk}</span>
          )
        )}
      </_Text>
    );
  }
);

Highlight.displayName = '@mantine/core/Highlight';
