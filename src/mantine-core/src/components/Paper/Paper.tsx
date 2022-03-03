import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Paper.styles';

export interface SharedPaperProps extends DefaultProps {
  /** Predefined padding value from theme.spacing or number for padding in px */
  padding?: MantineNumberSize;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: MantineShadow;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme */
  withBorder?: boolean;
}

export type PaperProps<C> = PolymorphicComponentProps<C, SharedPaperProps>;

type PaperComponent = (<C = 'div'>(props: PaperProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Paper: PaperComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      children,
      padding = 0,
      radius = 'sm',
      withBorder = false,
      shadow,
      ...others
    }: PaperProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ radius, shadow, padding, withBorder }, { name: 'Paper' });

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
);

Paper.displayName = '@mantine/core/Paper';
