import React from 'react';
import { DefaultProps, MantineNumberSize, useExtractedMargins } from '@mantine/styles';
import useStyles from './ColorSwatch.styles';

interface _ColorSwatchProps<C extends React.ElementType, R extends HTMLElement>
  extends DefaultProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

  /** Swatch color value in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width, height and border-radius in px */
  size?: number;

  /** Swatch border-radius predefined from theme or number for px value */
  radius?: MantineNumberSize;
}

export type ColorSwatchProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _ColorSwatchProps<C, R> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof _ColorSwatchProps<C, R>>;

export function ColorSwatch<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
>({
  component,
  color,
  size = 25,
  radius = 25,
  className,
  children,
  style,
  ...others
}: ColorSwatchProps<C, R>) {
  const { classes, cx } = useStyles({ radius, size }, null, 'color-swatch');
  const { mergedStyles, rest } = useExtractedMargins({ others, style });

  const Element = component || 'div';

  return (
    <Element className={cx(classes.colorSwatch, className)} style={mergedStyles} {...rest}>
      <div className={cx(classes.alphaOverlay, classes.overlay)} />
      <div className={cx(classes.shadowOverlay, classes.overlay)} />
      <div className={classes.overlay} style={{ backgroundColor: color }} />
      <div className={cx(classes.children, classes.overlay)}>{children}</div>
    </Element>
  );
}

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
