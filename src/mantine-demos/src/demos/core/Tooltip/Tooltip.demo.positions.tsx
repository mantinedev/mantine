import React from 'react';
import { FloatingTooltip, Box, Group } from '@mantine/core';

function Demo() {
  return (
    <div style={{ width: 1200 }}>
      <Group position="right" mt={200} sx={{ width: '100%' }}>
        <FloatingTooltip position="right" gutter={15} width={150} wrapLines label="TOOLTIP LABEL">
          <Box>Ok Tooltip</Box>
        </FloatingTooltip>
        <FloatingTooltip position="right" gutter={15} width={150} label="WEIRD TOOLTIP LABEL">
          <Box>Weird Tooltip</Box>
        </FloatingTooltip>
      </Group>
    </div>
  );
}

export const positions: MantineDemo = {
  type: 'demo',
  component: Demo,
};
