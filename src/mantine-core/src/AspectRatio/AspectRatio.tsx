import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box/Box';
import useStyles from './AspectRatio.styles';

export interface AspectRatioProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Aspect ratio, e.g. 16 / 9, 4 / 3, 1920 / 1080 */
  ratio: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (props: AspectRatioProps, ref) => {
    const { className, ratio, children, unstyled, variant, ...others } = useComponentDefaultProps(
      'AspectRatio',
      {},
      props
    );

    const { classes, cx } = useStyles({ ratio }, { name: 'AspectRatio', unstyled, variant });

    return (
      <Box ref={ref} className={cx(classes.root, className)} {...others}>
        {children}
      </Box>
    );
  }
);

AspectRatio.displayName = '@mantine/core/AspectRatio';
