import React from 'react';
import { FloatingTooltip, Badge, Group } from '@mantine/core';

function Demo() {
  const tooltips = (['top', 'right', 'bottom', 'left'] as const).map((position, index) => (
    <Group key={position} position="center" style={{ marginTop: index !== 0 && 10 }}>
      <FloatingTooltip position={position} label={`${position}`}>
        <Badge color="blue" size="lg">
          {`${position}`}
        </Badge>
      </FloatingTooltip>
    </Group>
  ));

  return <>{tooltips}</>;
}

export const positions: MantineDemo = {
  type: 'demo',
  component: Demo,
};
