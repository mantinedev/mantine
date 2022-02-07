import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../Box/Box';
import useStyles from './AspectRatio.styles';

export interface AspectRatioProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Aspect ratio, e.g. 16 / 9, 4 / 3, 1920 / 1080 */
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 1, children, ...others }: AspectRatioProps, ref) => {
    const { classes, cx } = useStyles({ ratio });
    return (
      <Box ref={ref} className={cx(classes.root, className)} {...others}>
        {children}
      </Box>
    );
  }
);

AspectRatio.displayName = '@mantine/core/AspectRatio';
