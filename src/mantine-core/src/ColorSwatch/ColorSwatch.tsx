import React from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/types';
import classes from './ColorSwatch.styles.less';

interface ColorSwatchProps extends DefaultProps {
  color: string;
}

export default function ColorSwatch({ className, color, style, ...others }: ColorSwatchProps) {
  return (
    <div
      className={cx(classes.colorSwatch, className)}
      style={{ ...style, backgroundColor: color }}
      data-composable
      {...others}
    />
  );
}

ColorSwatch.displayName = '@mantine/core/ColorSwatch';
