import { Box, Stack, Text, Title } from '@mantine/core';
import { useTilt } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Stack, Text, Title } from '@mantine/core';
import { useTilt } from '@mantine/hooks';

function Demo() {
  const { ref, roll, tilt, source } = useTilt<HTMLDivElement>();

  return (
    <Box style={{ perspective: 800 }}>
      <Box
        ref={ref}
        style={{
          transform: \`rotateX(\${roll * 20}deg) rotateY(\${tilt * 20}deg)\`,
          transition: 'transform 100ms ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        <Stack
          align="center"
          justify="center"
          gap={4}
          p="xl"
          style={{
            width: 320,
            height: 220,
            borderRadius: 'var(--mantine-radius-lg)',
            color: 'var(--mantine-color-white)',
            backgroundImage:
              'linear-gradient(135deg, var(--mantine-color-indigo-6), var(--mantine-color-grape-6))',
          }}
        >
          <Title order={3}>Move your cursor</Title>
          <Text>The card tilts towards the pointer</Text>
          <Text size="sm" opacity={0.8}>
            source: {source} · roll: {roll.toFixed(2)} · tilt: {tilt.toFixed(2)}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
`;

function Demo() {
  const { ref, roll, tilt, source } = useTilt<HTMLDivElement>();

  return (
    <Box style={{ perspective: 800 }}>
      <Box
        ref={ref}
        style={{
          transform: `rotateX(${roll * 20}deg) rotateY(${tilt * 20}deg)`,
          transition: 'transform 100ms ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        <Stack
          align="center"
          justify="center"
          gap={4}
          p="xl"
          style={{
            width: 320,
            height: 220,
            borderRadius: 'var(--mantine-radius-lg)',
            color: 'var(--mantine-color-white)',
            backgroundImage:
              'linear-gradient(135deg, var(--mantine-color-indigo-6), var(--mantine-color-grape-6))',
          }}
        >
          <Title order={3}>Move your cursor</Title>
          <Text>The card tilts towards the pointer</Text>
          <Text size="sm" opacity={0.8}>
            source: {source} · roll: {roll.toFixed(2)} · tilt: {tilt.toFixed(2)}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
