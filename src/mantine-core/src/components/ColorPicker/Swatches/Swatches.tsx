import React from 'react';
import { DefaultProps, Selectors } from '@mantine/styles';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { parseColor } from '../converters/parsers';
import { HsvaColor } from '../types';
import useStyles from './Swatches.styles';

export type SwatchesStylesNames = Selectors<typeof useStyles>;

export interface SwatchesProps
  extends DefaultProps<SwatchesStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  data: string[];
  onSelect(color: HsvaColor): void;
  swatchesPerRow?: number;
  focusable?: boolean;
  __staticSelector?: string;
}

export function Swatches({
  data,
  onSelect,
  swatchesPerRow = 10,
  focusable = true,
  classNames,
  styles,
  __staticSelector = 'color-picker',
  ...others
}: SwatchesProps) {
  const { classes } = useStyles({ swatchesPerRow }, { classNames, styles, name: __staticSelector });

  const colors = data.map((color, index) => (
    <ColorSwatch
      className={classes.swatch}
      component="button"
      type="button"
      color={color}
      key={index}
      radius="sm"
      onClick={() => onSelect(parseColor(color))}
      style={{ cursor: 'pointer' }}
      aria-label={color}
      tabIndex={focusable ? 0 : -1}
    />
  ));

  return (
    <div className={classes.swatches} {...others}>
      {colors}
    </div>
  );
}

Swatches.displayName = '@mantine/core/Swatches';
