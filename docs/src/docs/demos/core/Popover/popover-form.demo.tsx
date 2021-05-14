import React from 'react';
import { EditUserPopover } from '@mantine/demos';
import { useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/EditUserPopover/EditUserPopover';

export function PopoverFormDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/EditUserPopover/EditUserPopover.tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
      zIndex={4}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <EditUserPopover />
      </div>
    </CodeDemo>
  );
}
