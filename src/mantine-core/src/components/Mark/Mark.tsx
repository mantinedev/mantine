import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor, useExtractedMargins } from '@mantine/styles';
import useStyles from './Mark.styles';

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  /** Background color from theme.colors */
  color?: MantineColor;
}

export const Mark = forwardRef<HTMLElement, MarkProps>(
  ({ color = 'yellow', style, sx, className, classNames, styles, ...others }: MarkProps, ref) => {
    const { classes, cx } = useStyles({ color }, { sx, classNames, styles, name: 'Mark' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    return (
      <mark ref={ref} style={mergedStyles} className={cx(classes.root, className)} {...rest} />
    );
  }
);

Mark.displayName = '@mantine/core/Mark';
