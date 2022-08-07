import React from 'react';
import { DefaultProps, Selectors } from '@mantine/styles';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import useStyles from './Swatches.styles';

export type SwatchesStylesNames = Selectors<typeof useStyles>;

export interface SwatchesProps
  extends DefaultProps<SwatchesStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onSelect'> {
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  __staticSelector?: string;
  setValue(value: string): void;
}

export function Swatches({
  data,
  swatchesPerRow = 10,
  focusable = true,
  classNames,
  styles,
  __staticSelector = 'color-picker',
  unstyled,
  setValue,
  ...others
}: SwatchesProps) {
  const { classes } = useStyles(
    { swatchesPerRow },
    { classNames, styles, name: __staticSelector, unstyled }
  );

  const colors = data.map((color, index) => (
    <ColorSwatch
      className={classes.swatch}
      component="button"
      type="button"
      color={color}
      key={index}
      radius="sm"
      onClick={() => setValue(color)}
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
