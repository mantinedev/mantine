import { Box, Text, Tilt, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Text, Tilt, Title } from '@mantine/core';

function Demo() {
  return (
    <Tilt maxRotate={14} radius="lg">
      <Box
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: 320,
          height: 220,
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage: 'linear-gradient(160deg, #1b1f3b 0%, #3b2f63 60%, #7b3fa0 100%)',
        }}
      >
        {/* Background layer moves the least */}
        <Tilt.Layer depth={0.25} shift={16} style={{ position: 'absolute', inset: 0 }}>
          <Box
            style={{
              position: 'absolute',
              top: 120,
              left: '50%',
              width: 220,
              height: 220,
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              backgroundImage: 'radial-gradient(circle at 40% 35%, #ffd43b, #f76707)',
            }}
          />
        </Tilt.Layer>

        {/* Foreground text pops out the most */}
        <Tilt.Layer
          depth={1.4}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Title order={2} c="white">
            PARALLAX
          </Title>
          <Text c="rgba(255, 255, 255, 0.7)">depth in motion</Text>
        </Tilt.Layer>
      </Box>
    </Tilt>
  );
}
`;

function Demo() {
  return (
    <Tilt maxRotate={14} radius="lg">
      <Box
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: 320,
          height: 220,
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage: 'linear-gradient(160deg, #1b1f3b 0%, #3b2f63 60%, #7b3fa0 100%)',
        }}
      >
        <Tilt.Layer depth={0.25} shift={16} style={{ position: 'absolute', inset: 0 }}>
          <Box
            style={{
              position: 'absolute',
              top: 120,
              left: '50%',
              width: 220,
              height: 220,
              transform: 'translateX(-50%)',
              borderRadius: '50%',
              backgroundImage: 'radial-gradient(circle at 40% 35%, #ffd43b, #f76707)',
            }}
          />
        </Tilt.Layer>

        <Tilt.Layer
          depth={1.4}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Title order={2} c="white">
            PARALLAX
          </Title>
          <Text c="rgba(255, 255, 255, 0.7)">depth in motion</Text>
        </Tilt.Layer>
      </Box>
    </Tilt>
  );
}

export const layers: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
