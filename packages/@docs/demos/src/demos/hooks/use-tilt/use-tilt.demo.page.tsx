import { Box, Text } from '@mantine/core';
import { clamp, useTilt } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Text } from '@mantine/core';
import { clamp, useTilt } from '@mantine/hooks';

function Demo() {
  // With trackWindow: true the effect follows the cursor everywhere on the page,
  // not only while the element is hovered
  const { ref, roll, tilt } = useTilt<HTMLDivElement>({ trackWindow: true });

  return (
    <Box
      style={{
        perspective: 1000,
        minHeight: 260,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box ref={ref} style={{ display: 'inline-block' }}>
        <Box
          style={{
            transform: \`rotateX(\${clamp(roll, -0.5, 0.5) * 30}deg) rotateY(\${clamp(tilt, -0.5, 0.5) * 30}deg)\`,
            transition: 'transform 120ms ease-out',
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 'var(--mantine-spacing-md)',
            fontWeight: 600,
            color: 'var(--mantine-color-white)',
            borderRadius: 'var(--mantine-radius-lg)',
            backgroundImage: 'radial-gradient(circle at 30% 30%, #4dabf7, #1971c2)',
            boxShadow: 'var(--mantine-shadow-lg)',
          }}
        >
          <Text inherit>Move your cursor anywhere on the page</Text>
        </Box>
      </Box>
    </Box>
  );
}
`;

function Demo() {
  const { ref, roll, tilt } = useTilt<HTMLDivElement>({ trackWindow: true });

  return (
    <Box
      style={{
        perspective: 1000,
        minHeight: 260,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box ref={ref} style={{ display: 'inline-block' }}>
        <Box
          style={{
            transform: `rotateX(${clamp(roll, -0.5, 0.5) * 30}deg) rotateY(${clamp(tilt, -0.5, 0.5) * 30}deg)`,
            transition: 'transform 120ms ease-out',
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 'var(--mantine-spacing-md)',
            fontWeight: 600,
            color: 'var(--mantine-color-white)',
            borderRadius: 'var(--mantine-radius-lg)',
            backgroundImage: 'radial-gradient(circle at 30% 30%, #4dabf7, #1971c2)',
            boxShadow: 'var(--mantine-shadow-lg)',
          }}
        >
          <Text inherit>Move your cursor anywhere on the page</Text>
        </Box>
      </Box>
    </Box>
  );
}

export const page: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
