import React from 'react';
import { DEFAULT_THEME, rgba } from '../MantineProvider';
import { Box } from './Box';

export default { title: 'Box' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Box bg="pink" hiddenFrom="md">
        Hidden from md
      </Box>
      <Box bg="orange" visibleFrom="sm" ff="mono">
        Visible from sm
      </Box>
      <Box bg="blue" hiddenFrom="sm">
        Hidden from sm
      </Box>
    </div>
  );
}

export function ColorMix() {
  return (
    <div style={{ padding: 40 }}>
      <Box bg={rgba(DEFAULT_THEME.colors.pink[5], 0.6)} h={200} w={200}>
        Pink.6
      </Box>
      <Box bg="color-mix(in srgb, oklch(50.85% 0.2819 261.46), transparent 40%)" h={200} w={200}>
        Pink.6 color-mix
      </Box>
      <Box bg="color-mix(in oklch, oklch(50.85% 0.2819 261.46), transparent 40%)" h={200} w={200}>
        Pink.6 color-mix
      </Box>
    </div>
  );
}
