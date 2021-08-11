import React from 'react';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { parseColor } from '../converters/parsers';
import { HsvaColor } from '../types';
import useStyles from './Swatches.styles';

interface SwatchesProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  data: string[];
  onSelect(color: HsvaColor): void;
  swatchesPerRow?: number;
}

export function Swatches({ data, onSelect, swatchesPerRow = 10, ...others }: SwatchesProps) {
  const classes = useStyles({ swatchesPerRow });

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
    />
  ));

  return (
    <div className={classes.group} {...others}>
      {colors}
    </div>
  );
}

Swatches.displayName = '@mantine/core/Swatches';
