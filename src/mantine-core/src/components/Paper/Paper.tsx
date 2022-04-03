import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  PolymorphicComponentProps,
  PolymorphicRef,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Paper.styles';

export interface SharedPaperProps extends DefaultProps {
  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: MantineShadow;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme */
  withBorder?: boolean;

  /** Paper children */
  children?: React.ReactNode;
}

export type PaperProps<C> = PolymorphicComponentProps<C, SharedPaperProps>;

type PaperComponent = (<C = 'div'>(props: PaperProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<PaperProps<any>> = {};

export const Paper: PaperComponent = forwardRef(
  (props: PaperProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const { component, className, children, radius, withBorder, shadow, ...others } =
      useMantineDefaultProps('Paper', defaultProps, props);
    const { classes, cx } = useStyles({ radius, shadow, withBorder }, { name: 'Paper' });

    return (
      <Box<any>
        component={component || 'div'}
        className={cx(classes.root, className)}
        ref={ref}
        {...others}
      >
        {children}
      </Box>
    );
  }
) as any;

Paper.displayName = '@mantine/core/Paper';
