import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input, Badge, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Input, Badge } from '@mantine/core';
import { TwitterLogoIcon } from '@modulz/radix-icons';

function Demo() {
  const rightSection = (
    <Badge color="blue" variant="filled">
      new
    </Badge>
  );

  return (
    <Input
      icon={<TwitterLogoIcon />}
      placeholder="Your twitter"
      rightSectionWidth={70}
      rightSectionProps={{ style: { pointerEvents: 'none' } }}
      rightSection={rightSection}
    />
  );
}`;

export function InputIconDemo() {
  const theme = useMantineTheme();

  const rightSection = (
    <Badge color="blue" variant="filled">
      new
    </Badge>
  );

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <Input
        icon={<TwitterLogoIcon />}
        placeholder="Your twitter"
        rightSectionWidth={70}
        rightSectionProps={{ style: { pointerEvents: 'none' } }}
        rightSection={rightSection}
        variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
      />
    </CodeDemo>
  );
}
