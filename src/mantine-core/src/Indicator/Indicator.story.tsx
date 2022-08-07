import React from 'react';
import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Group } from '../Group';
import { Indicator } from './Indicator';

export default { title: 'Indicator' };

const positions = ['top', 'middle', 'bottom'] as const;
const placements = ['start', 'center', 'end'] as const;

export const Positions = () => {
  const items = positions.map((position) => {
    const _items = placements.map((placement) => (
      <Indicator position={`${position}-${placement}`}>
        <Avatar radius={0} />
      </Indicator>
    ));

    return <Group mt="md">{_items}</Group>;
  });

  return <Box sx={{ padding: 40 }}>{items}</Box>;
};

export const Inline = () => (
  <Box sx={{ padding: 40 }}>
    <Indicator inline withBorder>
      <Avatar radius={0} />
    </Indicator>
  </Box>
);

export const WithRadius = () => (
  <Box sx={{ padding: 40 }}>
    <Indicator inline offset={12} size={20} position="bottom-end" withBorder color="red">
      <Avatar
        radius={50000}
        size="xl"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
    </Indicator>
  </Box>
);

export const WithLabel = () => (
  <Box sx={{ padding: 40 }}>
    <Indicator inline label="New" size={18}>
      <Avatar radius={0} />
    </Indicator>
  </Box>
);
