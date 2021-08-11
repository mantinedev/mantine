import React from 'react';
import { chunk } from '../../../utils';
import { ColorSwatch } from '../../ColorSwatch/ColorSwatch';
import { Grid, Col } from '../../Grid/Grid';
import { parseColor } from '../converters/parsers';
import { HsvaColor } from '../types';

interface SwatchesProps {
  data: string[];
  onSelect(color: HsvaColor): void;
}

export function Swatches({ data, onSelect }: SwatchesProps) {
  const colors = chunk(10, data).map((group, groupIndex) => {
    const items = group.map((color, index) => (
      <Col span={1}>
        <ColorSwatch
          component="button"
          type="button"
          color={color}
          key={index}
          size={16}
          radius="sm"
          onClick={() => onSelect(parseColor(color))}
          style={{ cursor: 'pointer' }}
          aria-label={color}
        />
      </Col>
    ));

    return (
      <Grid key={groupIndex} style={{ marginTop: 0 }} columns={10} gutter={4.5}>
        {items}
      </Grid>
    );
  });

  return <>{colors}</>;
}

Swatches.displayName = '@mantine/core/Swatches';
