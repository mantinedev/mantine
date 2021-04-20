import React from 'react';
import { Kbd, TextInput } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Kbd } from '@mantine/core';

function Demo() {
  const rightSection = (
    <div style={{ pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<MagnifyingGlassIcon />}
      rightSectionWidth={90}
      rightSection={rightSection}
    />
  );
}`;

export function KbdInputDemo() {
  const theme = useMantineTheme();

  const rightSection = (
    <div style={{ pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <div style={{ maxWidth: 440, margin: 'auto' }}>
        <TextInput
          placeholder="Search"
          icon={<MagnifyingGlassIcon />}
          rightSectionWidth={90}
          rightSection={rightSection}
        />
      </div>
    </CodeDemo>
  );
}
