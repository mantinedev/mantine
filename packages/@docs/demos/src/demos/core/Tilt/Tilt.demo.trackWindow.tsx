import { Box, Text, Tilt } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Text, Tilt } from '@mantine/core';

function Demo() {
  // trackWindow makes the element follow the cursor anywhere on the page,
  // not only while it is hovered
  return (
    <Tilt trackWindow maxRotate={12} radius="lg">
      <Box
        w={220}
        h={220}
        c="white"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--mantine-spacing-md)',
          fontWeight: 600,
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage: 'radial-gradient(circle at 30% 30%, #4dabf7, #1971c2)',
        }}
      >
        <Text inherit>Move your cursor anywhere on the page</Text>
      </Box>
    </Tilt>
  );
}
`;

function Demo() {
  return (
    <Tilt trackWindow maxRotate={12} radius="lg">
      <Box
        w={220}
        h={220}
        c="white"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--mantine-spacing-md)',
          fontWeight: 600,
          borderRadius: 'var(--mantine-radius-lg)',
          backgroundImage: 'radial-gradient(circle at 30% 30%, #4dabf7, #1971c2)',
        }}
      >
        <Text inherit>Move your cursor anywhere on the page</Text>
      </Box>
    </Tilt>
  );
}

export const trackWindow: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
