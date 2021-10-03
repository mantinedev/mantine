import React from 'react';
import { useColorsState } from '../use-colors-state/use-colors-state';
import { ColorsGroup } from './ColorsGroup/ColorsGroup';

export function Colors({ colorsHandlers, colorsState }: ReturnType<typeof useColorsState>) {
  const groups = colorsState.map((color, index) => (
    <ColorsGroup
      name={color[0]}
      onNameChange={(name) => colorsHandlers.setName(index, name)}
      colors={color[1]}
      onRootColorChange={(hexValue) => colorsHandlers.setColors(index, hexValue)}
      onColorChange={(valueIndex, hexValue) => colorsHandlers.setColor(index, valueIndex, hexValue)}
      onRemove={() => colorsHandlers.removeColor(index)}
    />
  ));

  return <div>{groups}</div>;
}
