import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '../../theme';
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
  themeOverride,
  children,
  ...others
}: ColorSwatchProps<C, R>) {
  const classes = useStyles(
    { radius, size, theme: useMantineTheme(themeOverride) },
    null,
    'color-swatch'
  );

  const Element = component || 'div';

  return (
    <Element className={cx(classes.colorSwatch, className)} {...others}>
      <div className={cx(classes.alphaOverlay, classes.overlay)} />
      <div className={cx(classes.shadowOverlay, classes.overlay)} />
      <div className={classes.overlay} style={{ backgroundColor: color }} />
      <div className={cx(classes.children, classes.overlay)}>{children}</div>
    </Element>
  );
}

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
