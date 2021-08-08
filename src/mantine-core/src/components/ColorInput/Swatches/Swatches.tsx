import React from 'react';
import { chunk } from '../../../utils';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { Group } from '../../Group/Group';

interface SwatchesProps {
  data: string[];
}

export function Swatches({ data }: SwatchesProps) {
  const colors = chunk(10, data).map((group, groupIndex) => {
    const items = group.map((color, index) => (
      <ColorSwatch color={color} key={index} size={16} radius="sm" />
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
