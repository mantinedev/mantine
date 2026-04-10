import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { scrollProgress } = useHeadroom({ fixedAt: 120, scrollDistance: 60 });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              zIndex: 1000000,
              transform: \`translateY(\${(scrollProgress - 1) * 100}%)\`,
              backgroundColor: 'var(--mantine-color-violet-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                Scroll-linked — {Math.round(scrollProgress * 100)}% visible
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}
`;

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { scrollProgress } = useHeadroom({ fixedAt: 120, scrollDistance: 60 });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: 60,
              zIndex: 1000000,
              transform: `translateY(${(scrollProgress - 1) * 100}%)`,
              backgroundColor: 'var(--mantine-color-violet-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                Scroll-linked — {Math.round(scrollProgress * 100)}% visible
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}

export const scrollProgress: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
