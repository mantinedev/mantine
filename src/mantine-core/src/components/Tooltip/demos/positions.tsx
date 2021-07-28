import React from 'react';
import { Tooltip, Badge, Group } from '../../../index';

function Demo() {
  const tooltips = (['top', 'right', 'bottom', 'left'] as const).map((position, index) => {
    const placements = (['start', 'center', 'end'] as const).map((placement, placementIndex) => (
      <Tooltip
        key={placement}
        placement={placement}
        position={position}
        label={`${position}-${placement}`}
        withArrow
        gutter={10}
        style={{ zIndex: 6 - index - (position === 'right' ? placementIndex : -placementIndex) }}
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
