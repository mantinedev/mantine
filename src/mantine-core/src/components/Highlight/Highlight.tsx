import React, { forwardRef } from 'react';
import { MantineColor, MantineTheme, CSSObject, useMantineDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Text, SharedTextProps } from '../Text/Text';
import { Mark } from '../Mark/Mark';
import { highlighter } from './highlighter/highlighter';

export interface HighlightProps extends SharedTextProps {
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
  const { children, highlight, highlightColor, highlightStyles, ...others } =
    useMantineDefaultProps('Highlight', defaultProps, props);
  const highlightChunks = highlighter(children, highlight);

  return (
    <Text ref={ref} {...others}>
      {highlightChunks.map(({ chunk, highlighted }, i) =>
        highlighted ? (
          <Mark key={i} color={highlightColor} sx={highlightStyles}>
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
