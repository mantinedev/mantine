import React from 'react';
import { mergeStyles, DefaultProps } from '@mantine/tss';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { parseColor } from '../converters/parsers';
import { HsvaColor } from '../types';
import useStyles from './Swatches.styles';

export type SwatchesStylesNames = keyof ReturnType<typeof useStyles>['classes'];

interface SwatchesProps
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
  style,
  __staticSelector = 'color-picker',
  ...others
}: SwatchesProps) {
  const { classes } = useStyles({ swatchesPerRow }, classNames, __staticSelector);
  const _styles = mergeStyles(classes, styles);

  const colors = data.map((color, index) => (
    <ColorSwatch
      className={classes.swatch}
      component="button"
      type="button"
      color={color}
      key={index}
      radius="sm"
      onClick={() => onSelect(parseColor(color))}
      style={{ cursor: 'pointer', ..._styles.swatch }}
      aria-label={color}
      tabIndex={focusable ? 0 : -1}
    />
  ));

  return (
    <div className={classes.swatches} style={{ ...style, ..._styles.swatches }} {...others}>
      {colors}
    </div>
  );
}

Swatches.displayName = '@mantine/core/Swatches';
