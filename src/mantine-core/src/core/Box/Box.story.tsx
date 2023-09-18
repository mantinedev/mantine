import React from 'react';
import { Box } from './Box';

export default { title: 'Box' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Box bg="pink" hiddenFrom="md">
        Hidden from md
      </Box>
      <Box bg="orange" visibleFrom="sm">
        Visible from sm
      </Box>
      <Box bg="blue" hiddenFrom="sm">
        Hidden from sm
      </Box>
    </div>
  );
}
