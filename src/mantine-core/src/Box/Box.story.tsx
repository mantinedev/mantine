import React from 'react';
import { Box } from './Box';

export default { title: 'Box' };

export function SystemProps() {
  return (
    <div style={{ padding: 40 }}>
      <Box sx={{ backgroundColor: 'pink' }} pl={{ base: 30, sm: 100, md: 200 }}>
        Some box
      </Box>
    </div>
  );
}
