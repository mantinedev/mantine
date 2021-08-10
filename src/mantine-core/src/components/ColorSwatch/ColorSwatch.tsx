import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '../../theme';
import { ComponentPassThrough } from '../../types';
import useStyles from './ColorSwatch.styles';

export interface ColorSwatchProps extends DefaultProps {
  /** Swatch color value in any css valid format (hex, rgb, etc.) */
  color: string;

  /** Width, height and border-radius in px */
  size?: number;

  /** Swatch border-radius predefined from theme or number for px value */
  radius?: MantineNumberSize;
}

export function ColorSwatch<T extends React.ElementType = 'div', U = HTMLDivElement>({
  component: Element = 'div',
  color,
  size = 25,
  style,
  radius = 25,
  className,
  themeOverride,
  children,
  ...others
}: ComponentPassThrough<T, ColorSwatchProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
  const classes = useStyles(
    { radius, theme: useMantineTheme(themeOverride) },
    null,
    'color-swatch'
  );

  return (
    <Element
      className={cx(classes.colorSwatch, className)}
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <div className={cx(classes.alphaOverlay, classes.overlay)} />
      <div className={cx(classes.shadowOverlay, classes.overlay)} />
      <div className={classes.overlay} style={{ backgroundColor: color }} />
      <div className={cx(classes.children, classes.overlay)}>{children}</div>
    </Element>
  );
}

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
