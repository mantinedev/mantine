import { ColorSwatch, Group, isLightColor } from '@mantine/core';
import classes from './ColorsList.module.css';

interface ColorsListProps {
  hexColors: string[];
  displayColors: string[];
  baseColorIndex: number;
  displayColorsInfo: boolean | undefined;
}

export function ColorsList({
  hexColors,
  displayColors,
  baseColorIndex,
  displayColorsInfo,
}: ColorsListProps) {
  const items = hexColors.map((hex, index) => (
    <div key={index} className={classes.item}>
      <ColorSwatch
        color={hex}
        radius={0}
        className={classes.swatch}
        withShadow={false}
        data-base={index === baseColorIndex || undefined}
        c={isLightColor(hex) ? 'black' : 'white'}
      >
        {displayColorsInfo && (
          <div className={classes.label}>
            <span className={classes.index}>{index}</span>
            <span className={classes.hex}>{displayColors[index]}</span>
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
