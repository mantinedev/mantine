import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '@mantine/theme';
import { ComponentPassThrough } from '@mantine/types';
import useStyles from './ColorSwatch.styles';

interface ColorSwatchProps extends DefaultProps {
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
  ...others
}: ComponentPassThrough<T, ColorSwatchProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
  const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });

  return (
    <Element
      className={cx(classes.colorSwatch, className)}
      style={{ width: size, height: size, backgroundColor: color, ...style }}
      data-mantine-composable
      {...others}
    />
  );
}

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
