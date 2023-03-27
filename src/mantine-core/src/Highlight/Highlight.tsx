import React, { forwardRef } from 'react';
import { MantineColor, MantineTheme, CSSObject, useComponentDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Text, TextProps } from '../Text/Text';
import { Mark } from '../Mark/Mark';
import { highlighter } from './highlighter/highlighter';

export interface HighlightProps extends TextProps {
  /** Substring or an array of substrings to highlight in children */
  highlight: string | string[];

  /** Color from theme that is used for highlighting */
  highlightColor?: MantineColor;

  /** Styles applied to highlighted part */
  highlightStyles?: CSSObject | ((theme: MantineTheme) => CSSObject);

  /** Full string part of which will be highlighted */
  children: string;
}

const defaultProps: Partial<HighlightProps> = {
  highlightColor: 'yellow',
};

export const _Highlight = forwardRef<HTMLDivElement, HighlightProps>((props, ref) => {
  const { children, highlight, highlightColor, highlightStyles, unstyled, ...others } =
    useComponentDefaultProps('Highlight', defaultProps, props);
  const highlightChunks = highlighter(children, highlight);

  return (
    <Text unstyled={unstyled} ref={ref} __staticSelector="Highlight" {...others}>
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <Mark
            unstyled={unstyled}
            key={i}
            color={highlightColor}
            sx={highlightStyles}
            data-highlight={chunk}
          >
            {chunk}
          </Mark>
        ) : (
          <span key={i}>{chunk}</span>
        )
      )}
    </Text>
  );
});

_Highlight.displayName = '@mantine/core/Highlight';

export const Highlight = createPolymorphicComponent<'div', HighlightProps>(_Highlight);
