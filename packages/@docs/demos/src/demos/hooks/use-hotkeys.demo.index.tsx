import { Box, Group, Kbd } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { MantineDemo } from '@mantinex/demo';

const shortcutCode = `
import { Box, Group, Kbd } from '@mantine/core';

export function Shortcut({ symbol, description }: { symbol: string; description: string }) {
  return (
    <Group gap={7} p={10}>
      <Kbd size={20}>Ctrl</Kbd>
      <Box fz={22} fw={500}>
        +
      </Box>
      <Kbd size={20} w={40}>
        {symbol}
      </Kbd>

      <Box fz={18} ms="sm">
        – {description}
      </Box>
    </Group>
  );
}
`;

const code = `
import { useHotkeys } from '@mantine/hooks';
import { spotlight } from '@mantine/spotlight';
import { useMantineColorScheme } from '@mantine/core';
import { Shortcut } from './Shortcut';

function Demo() {
  const { toggleColorScheme } = useMantineColorScheme();

  useHotkeys([
    ['mod + K', () => spotlight.open()],
    ['mod + J', () => toggleColorScheme()],
    ['mod + shift + alt + X', () => secret()],
  ]);

  return (
    <>
      <Shortcut symbol="K" description="Open search" />
      <Shortcut symbol="J" description="Toggle color scheme" />
    </>
  );
}
`;

function Shortcut({ symbol, description }: { symbol: string; description: string }) {
  return (
    <Group gap={7} p={10}>
      <Kbd fz={{ base: 16, sm: 20 }}>Ctrl</Kbd>
      <Box fz={22} fw={500}>
        +
      </Box>
      <Kbd fz={{ base: 16, sm: 20 }} w={40}>
        {symbol}
      </Kbd>

      <Box fz={{ base: 14, sm: 18 }} ms="sm">
        – {description}
      </Box>
    </Group>
  );
}

function Demo() {
  useHotkeys([
    [
      'mod + shift + alt + X',
      () =>
        modals.open({
          withCloseButton: false,
          padding: 0,
          size: 500,
          styles: {
            content: {
              height: 300,
              overflow: 'hidden',
            },
          },
          children: (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              style={{ border: 0, margin: 0, width: '100%', height: 300 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ),
        }),
    ],
  ]);

  return (
    <>
      <Shortcut symbol="K" description="Open search" />
      <Shortcut symbol="J" description="Toggle color scheme" />
    </>
  );
}

export const useHotkeysDemoIndex: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: shortcutCode, language: 'tsx', fileName: 'Shortcut.tsx' },
  ],
  centered: true,
  defaultExpanded: false,
};
