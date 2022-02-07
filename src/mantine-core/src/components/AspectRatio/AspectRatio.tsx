import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { Box } from '../Box/Box';
import useStyles from './AspectRatio.styles';

export interface AspectRatioProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** aspect ratio of the container */
  ratio?: number;

  /** max-width of the container */
  maxWidth?: MantineNumberSize;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 1, maxWidth, children, ...others }: AspectRatioProps, ref) => {
    const { classes, cx } = useStyles({ ratio, maxWidth });
    return (
      <Box ref={ref} className={cx(classes.root, className)} {...others}>
        {children}
      </Box>
    );
  }
);

AspectRatio.displayName = '@mantine/core/AspectRatio';
