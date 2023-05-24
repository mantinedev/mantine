import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  useComponentDefaultProps,
  MantineSize,
  rem,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Container.styles';

export interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  variant?: string;

  /** Predefined container max-width or number for max-width */
  size?: MantineNumberSize;

  /** If fluid is set to true, size prop is ignored and Container can expand to 100% of width */
  fluid?: boolean;

  /** Container sizes */
  sizes?: Record<MantineSize, number | string>;
}

const defaultProps: Partial<ContainerProps> = {
  sizes: {
    xs: rem(540),
    sm: rem(720),
    md: rem(960),
    lg: rem(1140),
    xl: rem(1320),
  },
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props: ContainerProps, ref) => {
    const { className, fluid, size, unstyled, sizes, variant, ...others } =
      useComponentDefaultProps('Container', defaultProps, props);

    const { classes, cx } = useStyles(
      { fluid, sizes },
      { unstyled, name: 'Container', variant, size }
    );

    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

Container.displayName = '@mantine/core/Container';
