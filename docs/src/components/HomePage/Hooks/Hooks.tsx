import React from 'react';
import { Box } from '@mantine/core';
import {
  IconArrowsMaximize,
  IconClock,
  IconForms,
  IconHandOff,
  IconMaximize,
  IconResize,
} from '@tabler/icons-react';
import { Demo } from '@mantine/ds';
import { FormDemos, HooksDemos } from '@mantine/demos';
import { DemoTabs } from '../DemoTabs/DemoTabs';

const data = [
  {
    demo: () => <Demo data={HooksDemos.useElementSizeDemo} demoProps={{ radius: 'md' }} />,
    icon: IconResize,
    name: 'use-element-size',
    description: 'Subscribe to element size changes',
  },
  {
    demo: () => <Demo data={HooksDemos.useDebouncedValueUsage} demoProps={{ radius: 'md' }} />,
    icon: IconClock,
    name: 'use-debounced-value',
    description: 'Debounce value changes',
  },
  {
    demo: () => <Demo data={HooksDemos.useIdleDemo} demoProps={{ radius: 'md' }} />,
    icon: IconHandOff,
    name: 'use-idle',
    description: 'Detect if user does nothing',
  },
  {
    demo: () => <Demo data={HooksDemos.useFullscreenDemo} demoProps={{ radius: 'md' }} />,
    icon: IconMaximize,
    name: 'use-fullscreen',
    description: 'Enter/exit fullscreen',
  },
  {
    demo: () => <Demo data={HooksDemos.useMoveUsage} demoProps={{ radius: 'md' }} />,
    icon: IconArrowsMaximize,
    name: 'use-move',
    description: 'Slide behavior over any element',
  },
  {
    demo: () => <Demo data={FormDemos.usage} demoProps={{ radius: 'md' }} />,
    icon: IconForms,
    name: 'use-form',
    description: 'Forms management library',
  },
];

export function Hooks() {
  return (
    <Box
      sx={(theme) => ({
        '& .mantine-Prism-code': {
          backgroundColor: `${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
          } !important`,
        },

        '& .mantine-CodeDemo-root': {
          marginTop: 0,
          boxShadow: theme.shadows.md,
        },
      })}
    >
      <DemoTabs data={data} title="Hooks library" />
    </Box>
  );
}
