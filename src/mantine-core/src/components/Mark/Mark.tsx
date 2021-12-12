import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Mark.styles';

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  /** Background color from theme.colors */
  color?: MantineColor;
}

export const Mark = forwardRef<HTMLElement, MarkProps>(
  ({ color = 'yellow', className, classNames, styles, ...others }: MarkProps, ref) => {
    const { classes, cx } = useStyles({ color }, { classNames, styles, name: 'Mark' });
    return <Box component="mark" ref={ref} className={cx(classes.root, className)} {...others} />;
  }
);

Mark.displayName = '@mantine/core/Mark';
