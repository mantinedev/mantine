import React from 'react';
import { Tooltip, Button, Group } from '../../../index';

function Demo() {
  const tooltips = (['top', 'right', 'bottom', 'left'] as const).map((position, index) => {
    const placements = (['start', 'center', 'end'] as const).map((placement) => (
      <Tooltip
        data-mantine-composable
        key={placement}
        placement={placement}
        position={position}
        label={`${position}-${placement}`}
        withArrow
        gutter={10}
      >
        <Button variant="outline" color="gray" size="xl">
          {`${position}-${placement}`}
        </Button>
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
