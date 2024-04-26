import chroma from 'chroma-js';
import { ColorSwatch, Group, isLightColor } from '@mantine/core';
import classes from './ColorsList.module.css';

interface ColorsListProps {
  colors: chroma.Color[];
  baseColorIndex: number;
  displayColorsInfo: boolean | undefined;
}

export function ColorsList({ colors, baseColorIndex, displayColorsInfo }: ColorsListProps) {
  const items = colors.map((color, index) => (
    <div key={index} className={classes.item}>
      <ColorSwatch
        color={color.hex()}
        radius={0}
        className={classes.swatch}
        withShadow={false}
        data-base={index === baseColorIndex || undefined}
        c={isLightColor(color.hex()) ? 'black' : 'white'}
      >
        {displayColorsInfo && (
          <div className={classes.label}>
            <span className={classes.index}>{index}</span>
            <span className={classes.hex}>{color.hex()}</span>
          </div>
        )}
      </ColorSwatch>
    </div>
  ));

  return (
    <Group gap={0} wrap="nowrap" className={classes.root}>
      {items}
    </Group>
  );
}
