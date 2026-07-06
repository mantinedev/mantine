import { Box, Stack, Text } from '@mantine/core';
import { useTilt } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Stack, Text } from '@mantine/core';
import { useTilt } from '@mantine/hooks';

function Demo() {
  const { ref, roll, tilt } = useTilt<HTMLDivElement>({
    // Invert the direction and amplify the response
    mouseRollAdjust: (value) => -value * 1.6,
    mouseTiltAdjust: (value) => -value * 1.6,
  });

  return (
    <Box style={{ perspective: 800 }}>
      <Stack
        ref={ref}
        align="center"
        justify="center"
        gap={4}
        p="xl"
        style={{
          width: 320,
          height: 220,
          color: 'var(--mantine-color-white)',
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage:
            'linear-gradient(135deg, var(--mantine-color-teal-6), var(--mantine-color-cyan-7))',
          transform: \`rotateX(\${roll * 20}deg) rotateY(\${tilt * 20}deg)\`,
          transition: 'transform 100ms ease-out',
        }}
      >
        <Text fw={600} fz="lg">The card tilts away from the cursor</Text>
        <Text size="sm" opacity={0.8}>
          roll: {roll.toFixed(2)} · tilt: {tilt.toFixed(2)}
        </Text>
      </Stack>
    </Box>
  );
}
`;

function Demo() {
  const { ref, roll, tilt } = useTilt<HTMLDivElement>({
    mouseRollAdjust: (value) => -value * 1.6,
    mouseTiltAdjust: (value) => -value * 1.6,
  });

  return (
    <Box style={{ perspective: 800 }}>
      <Stack
        ref={ref}
        align="center"
        justify="center"
        gap={4}
        p="xl"
        style={{
          width: 320,
          height: 220,
          color: 'var(--mantine-color-white)',
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage:
            'linear-gradient(135deg, var(--mantine-color-teal-6), var(--mantine-color-cyan-7))',
          transform: `rotateX(${roll * 20}deg) rotateY(${tilt * 20}deg)`,
          transition: 'transform 100ms ease-out',
        }}
      >
        <Text fw={600} fz="lg">
          The card tilts away from the cursor
        </Text>
        <Text size="sm" opacity={0.8}>
          roll: {roll.toFixed(2)} · tilt: {tilt.toFixed(2)}
        </Text>
      </Stack>
    </Box>
  );
}

export const adjust: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
