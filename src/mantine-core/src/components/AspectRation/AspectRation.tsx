import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { Box } from '../Box/Box';
import useStyles from './AspectRation.styles';

export interface AspectRationProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** aspect ratio of the container */
  ratio?: number;

  /** max-width of the container */
  maxWidth?: MantineNumberSize;
}

export const AspectRation = forwardRef<HTMLDivElement, AspectRationProps>(
  ({ className, ratio = 1, maxWidth, children, ...others }: AspectRationProps, ref) => {
    const { classes, cx } = useStyles({ ratio, maxWidth });
    return (
      <Box ref={ref} className={cx(classes.root, className)} {...others}>
        {children}
      </Box>
    );
  }
);

AspectRation.displayName = '@mantine/core/AspectRation';
