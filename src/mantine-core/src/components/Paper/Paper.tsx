import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineShadow,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
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

export type PaperProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedPaperProps
>;

type PaperComponent = <C extends React.ElementType = 'div'>(
  props: PaperProps<C>
) => React.ReactElement;

export const Paper: PaperComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      children,
      padding = 0,
      radius = 'sm',
      withBorder = false,
      shadow,
      style,
      ...others
    }: PaperProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ radius, shadow, padding, withBorder }, { name: 'Paper' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const Element = component || 'div';

    return (
      <Element className={cx(classes.paper, className)} ref={ref} style={mergedStyles} {...rest}>
        {children}
      </Element>
    );
  }
);

Paper.displayName = '@mantine/core/Paper';
