import React from 'react';
import { Slider, Text } from '@mantine/core';

const code = `
// Disable label
<Slider label={null} />

// Format label with function
<Slider label={(value) => \`\${value} °C\`} />

// Always display label
<Slider labelAlwaysOn />

// Change label transition
<Slider
  labelTransition="skew-down"
  labelTransitionDuration={150}
  labelTransitionTimingFunction="ease"
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Text>No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text style={{ marginTop: 20 }}>Formatted label</Text>
      <Slider defaultValue={40} label={(value) => `${value} °C`} />

      <Text style={{ marginTop: 20 }}>Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text style={{ marginTop: 20 }}>Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransition="skew-down"
        labelTransitionDuration={150}
        labelTransitionTimingFunction="ease"
      />
    </div>
  );
}

export const label: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
