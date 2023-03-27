import React from 'react';
import { Box } from './Box';

export default { title: 'Box' };

export function SystemProps() {
  return (
    <div style={{ padding: 40 }}>
      <Box
        bg={{
          base: 'red',
          xs: 'pink.5',
          sm: '#e5e5e5',
        }}
        pl={{ base: 30, md: 100, xs: 300 }}
        pt="xl"
        w={400}
        h={560}
        display="flex"
      >
        Some box
      </Box>
    </div>
  );
}

export function FontWeight() {
  return <Box fw={900}>900 fw</Box>;
}
