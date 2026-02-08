import { useState } from 'react';
import { Box, SemiCircleProgress, Slider, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SemiCircleProgress, Stack, Text } from '@mantine/core';
import { useState } from 'react';

const getBatteryColor = (level: number) => {
  switch (true) {
    case level < 20:
      return 'red';
    case level < 50:
      return 'yellow';
    default:
      return 'green';
  }
};

function Demo() {
  const [batteryLevel, setBatteryLevel] = useState(75);

  return (
    <Stack align="center" gap="md">
      <div style={{ position: 'relative', width: 200, height: 120 }}>
        <SemiCircleProgress
          value={batteryLevel}
          filledSegmentColor={getBatteryColor(batteryLevel)}
          label={\`\${batteryLevel}%\`}
          labelPosition="center"
          size={200}
          thickness={12}
        />
      </div>
      <Text size="sm" c="dimmed">
        Battery Level
      </Text>
      <input
        type="range"
        min="0"
        max="100"
        value={batteryLevel}
        onChange={(e) => setBatteryLevel(Number(e.target.value))}
        style={{ width: 200 }}
      />
    </Stack>
  );
}
`;

const getBatteryColor = (level: number) => {
  switch (true) {
    case level < 20:
      return 'red';
    case level < 50:
      return 'yellow';
    default:
      return 'green';
  }
};

function Demo() {
  const [batteryLevel, setBatteryLevel] = useState(75);

  return (
    <Stack align="center" gap="md">
      <div style={{ position: 'relative', width: 200, height: 120 }}>
        <SemiCircleProgress
          value={batteryLevel}
          filledSegmentColor={getBatteryColor(batteryLevel)}
          label={`${batteryLevel}%`}
          labelPosition="center"
          size={200}
          thickness={12}
        />
      </div>
      <Text size="sm" c="dimmed">
        Battery Level
      </Text>
      <Box w={200}>
        <Slider min={0} max={100} value={batteryLevel} onChange={setBatteryLevel} />
      </Box>
    </Stack>
  );
}

export const batteryIndicator: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
  centered: true,
};
