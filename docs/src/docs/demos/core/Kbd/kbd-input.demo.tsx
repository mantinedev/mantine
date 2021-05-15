import React from 'react';
import { Kbd, TextInput, useMantineTheme } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Kbd, TextInput, useMantineTheme } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

function Demo() {
  const theme = useMantineTheme();

  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
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
      rightSectionProps={{ style: { pointerEvents: 'none' } }}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}`;

export function KbdInputDemo() {
  const theme = useMantineTheme();

  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Kbd>Ctrl</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  );

  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 440, margin: 'auto' }}>
        <TextInput
          placeholder="Search"
          icon={<MagnifyingGlassIcon />}
          rightSectionWidth={90}
          rightSection={rightSection}
          rightSectionProps={{ style: { pointerEvents: 'none' } }}
          variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
        />
      </div>
    </CodeDemo>
  );
}
