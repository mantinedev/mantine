import React from 'react';
import { Tooltip, Badge, Group } from '@mantine/core';

function Demo() {
  const tooltips = (['top', 'right', 'bottom', 'left'] as const).map((position, index) => {
    const placements = (['start', 'center', 'end'] as const).map((placement) => (
      <Tooltip
        key={placement}
        placement={placement}
        position={position}
        label={`${position}-${placement}`}
        withArrow
        gutter={10}
      >
        <Badge color="blue" size="lg">
          {`${position}-${placement}`}
        </Badge>
      </Tooltip>
    ));

    return (
      <Group key={position} position="center" style={{ marginTop: index !== 0 && 10 }}>
        {placements}
      </Group>
    );
  });

  return <>{tooltips}</>;
}

export const positions: MantineDemo = {
  type: 'demo',
  component: Demo,
};
