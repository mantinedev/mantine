import { useState } from 'react';
import { Box, Button, Code, Group, Portal, Stack, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Box, Button, Code, Group, Portal, Stack, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) =>
    setLog((prev) => [\`\${new Date().toLocaleTimeString()} — \${msg}\`, ...prev].slice(0, 10));

  const { pinned } = useHeadroom({
    fixedAt: 80,
    onPin: () => addLog('onPin'),
    onRelease: () => addLog('onRelease'),
    onFix: () => addLog('onFix'),
  });

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
              transform: \`translate3d(0, \${pinned ? 0 : '-110px'}, 0)\`,
              transition: 'transform 400ms ease',
              backgroundColor: pinned
                ? 'var(--mantine-color-teal-6)'
                : 'var(--mantine-color-red-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                {pinned ? 'Pinned' : 'Released'}
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Stack>
        <Button onClick={handlers.toggle} variant="default">
          {showHeader ? 'Hide' : 'Show'} header
        </Button>
        <Code block>
          {log.length === 0 ? 'Scroll to see callback events' : log.join('\\n')}
        </Code>
      </Stack>
    </>
  );
}
`;

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) =>
    setLog((prev) => [`${new Date().toLocaleTimeString()} — ${msg}`, ...prev].slice(0, 10));

  const { pinned } = useHeadroom({
    fixedAt: 80,
    onPin: () => addLog('onPin'),
    onRelease: () => addLog('onRelease'),
    onFix: () => addLog('onFix'),
  });

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
              transform: `translate3d(0, ${pinned ? 0 : '-110px'}, 0)`,
              transition: 'transform 400ms ease',
              backgroundColor: pinned
                ? 'var(--mantine-color-teal-6)'
                : 'var(--mantine-color-red-6)',
            }}
          >
            <Group justify="center" h="100%">
              <Text c="white" fw={500}>
                {pinned ? 'Pinned' : 'Released'}
              </Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Stack>
        <Button onClick={handlers.toggle} variant="default">
          {showHeader ? 'Hide' : 'Show'} header
        </Button>
        <Code block>{log.length === 0 ? 'Scroll to see callback events' : log.join('\n')}</Code>
      </Stack>
    </>
  );
}

export const callbacks: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
