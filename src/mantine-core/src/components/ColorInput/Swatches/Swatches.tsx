import React from 'react';
import { chunk } from '../../../utils';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { Group } from '../../Group/Group';
import { parseColor } from '../converters/parsers';
import { HsvaColor } from '../types';

interface SwatchesProps {
  data: string[];
  onSelect(color: HsvaColor): void;
}

export function Swatches({ data, onSelect }: SwatchesProps) {
  const colors = chunk(10, data).map((group, groupIndex) => {
    const items = group.map((color, index) => (
      <ColorSwatch
        component="button"
        type="button"
        color={color}
        key={index}
        size={16}
        radius="sm"
        onClick={() => onSelect(parseColor(color))}
        style={{ cursor: 'pointer' }}
      />
    ));

    return (
      <Group spacing={4.45} key={groupIndex} style={{ marginTop: 5 }}>
        {items}
      </Group>
    );
  });

  return <>{colors}</>;
}

Swatches.displayName = '@mantine/core/Swatches';
