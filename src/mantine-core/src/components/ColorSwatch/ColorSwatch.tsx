import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import useStyles from './ColorSwatch.styles';

interface _ColorSwatchProps extends DefaultProps {
  /** Swatch color value in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width, height and border-radius in px */
  size?: number;

  /** Swatch border-radius predefined from theme or number for px value */
  radius?: MantineNumberSize;
}

export type ColorSwatchProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _ColorSwatchProps
>;

type ColorSwatchComponent = <C extends React.ElementType = 'div'>(
  props: ColorSwatchProps<C>
) => React.ReactElement;

export const ColorSwatch: ColorSwatchComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      color,
      size = 25,
      radius = 25,
      className,
      children,
      style,
      sx,
      ...others
    }: ColorSwatchProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ radius, size }, { sx, name: 'ColorSwatch' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    const Element = component || 'div';

    return (
      <Element className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        <div className={cx(classes.alphaOverlay, classes.overlay)} />
        <div className={cx(classes.shadowOverlay, classes.overlay)} />
        <div className={classes.overlay} style={{ backgroundColor: color }} />
        <div className={cx(classes.children, classes.overlay)}>{children}</div>
      </Element>
    );
  }
);

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
