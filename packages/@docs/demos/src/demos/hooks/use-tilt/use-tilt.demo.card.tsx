import { Box, Group, Stack, Text } from '@mantine/core';
import { useTilt } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Group, Stack, Text } from '@mantine/core';
import { useTilt } from '@mantine/hooks';

function Demo() {
  const { ref, roll, tilt } = useTilt<HTMLDivElement>();

  // Animate 2x slower when the card returns to its neutral position
  const isNeutral = roll === 0 && tilt === 0;
  const transition = \`transform \${isNeutral ? 300 : 150}ms ease-out\`;

  return (
    <Box ref={ref} style={{ perspective: 1000, display: 'inline-block' }}>
      <Box
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: 340,
          height: 214,
          padding: 'var(--mantine-spacing-xl)',
          borderRadius: 'var(--mantine-radius-lg)',
          color: 'var(--mantine-color-white)',
          backgroundImage: 'linear-gradient(135deg, #4263eb 0%, #7048e8 55%, #ae3ec9 100%)',
          boxShadow: 'var(--mantine-shadow-xl)',
          transform: \`rotateX(\${roll * 18}deg) rotateY(\${tilt * 18}deg)\`,
          transition,
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0) 55%)',
            transform: \`translate(\${tilt * 55}%, \${-roll * 55}%)\`,
            transition,
          }}
        />

        <Stack justify="space-between" h="100%" gap={0} style={{ position: 'relative' }}>
          <Group justify="space-between" align="flex-start">
            <Box
              style={{
                width: 44,
                height: 32,
                borderRadius: 6,
                backgroundImage: 'linear-gradient(135deg, #ffd43b, #f59f00)',
              }}
            />
            <Text fw={700} fz="lg" fs="italic">
              VISA
            </Text>
          </Group>

          <Text fz="md" ff="monospace" style={{ letterSpacing: 1, whiteSpace: 'nowrap' }}>
            4242 4242 4242 4242
          </Text>

          <Group justify="space-between">
            <Stack gap={2}>
              <Text fz={10} opacity={0.7} tt="uppercase">Card holder</Text>
              <Text fw={500}>Jane Cooper</Text>
            </Stack>
            <Stack gap={2}>
              <Text fz={10} opacity={0.7} tt="uppercase">Expires</Text>
              <Text fw={500}>08 / 28</Text>
            </Stack>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
}
`;

function Demo() {
  const { ref, roll, tilt } = useTilt<HTMLDivElement>();

  const isNeutral = roll === 0 && tilt === 0;
  const transition = `transform ${isNeutral ? 300 : 150}ms ease-out`;

  return (
    <Box ref={ref} style={{ perspective: 1000, display: 'inline-block' }}>
      <Box
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: 340,
          height: 214,
          padding: 'var(--mantine-spacing-xl)',
          borderRadius: 'var(--mantine-radius-lg)',
          color: 'var(--mantine-color-white)',
          backgroundImage: 'linear-gradient(135deg, #4263eb 0%, #7048e8 55%, #ae3ec9 100%)',
          boxShadow: 'var(--mantine-shadow-xl)',
          transform: `rotateX(${roll * 18}deg) rotateY(${tilt * 18}deg)`,
          transition,
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0) 55%)',
            transform: `translate(${tilt * 55}%, ${-roll * 55}%)`,
            transition,
          }}
        />

        <Stack justify="space-between" h="100%" gap={0} style={{ position: 'relative' }}>
          <Group justify="space-between" align="flex-start">
            <Box
              style={{
                width: 44,
                height: 32,
                borderRadius: 6,
                backgroundImage: 'linear-gradient(135deg, #ffd43b, #f59f00)',
              }}
            />
            <Text fw={700} fz="lg" fs="italic">
              VISA
            </Text>
          </Group>

          <Text fz="md" ff="monospace" style={{ letterSpacing: 1, whiteSpace: 'nowrap' }}>
            4242 4242 4242 4242
          </Text>

          <Group justify="space-between">
            <Stack gap={2}>
              <Text fz={10} opacity={0.7} tt="uppercase">
                Card holder
              </Text>
              <Text fw={500}>Jane Cooper</Text>
            </Stack>
            <Stack gap={2}>
              <Text fz={10} opacity={0.7} tt="uppercase">
                Expires
              </Text>
              <Text fw={500}>08 / 28</Text>
            </Stack>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
}

export const card: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
