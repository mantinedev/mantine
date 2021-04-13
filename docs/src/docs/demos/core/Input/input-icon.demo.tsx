import React from 'react';
import { TwitterLogoIcon } from '@modulz/radix-icons';
import { Input, Badge } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Input, Badge } from '@mantine/core';
import { TwitterLogoIcon } from '@modulz/radix-icons';

export function InputDemo() {
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
  const rightSection = (
    <Badge color="blue" variant="filled">
      new
    </Badge>
  );

  return (
    <CodeDemo code={code} language="tsx">
      <Input
        icon={<TwitterLogoIcon />}
        placeholder="Your twitter"
        rightSectionWidth={70}
        rightSectionProps={{ style: { pointerEvents: 'none' } }}
        rightSection={rightSection}
      />
    </CodeDemo>
  );
}
