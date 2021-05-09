import React from 'react';
import { InfoCircledIcon } from '@modulz/radix-icons';
import { Input, Tooltip, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Input, Tooltip } from '@mantine/core';
import { InfoCircledIcon } from '@modulz/radix-icons';

function Demo() {
  const rightSection = (
    <Tooltip
      label="We do not send spam"
      position="top"
      placement="end"
      withArrow
    >
      <InfoCircledIcon style={{ width: 18, height: 18, display: 'block' }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}`;

export function InputTooltipDemo() {
  const theme = useMantineTheme();

  const rightSection = (
    <Tooltip label="We do not send spam" position="top" placement="end" withArrow>
      <InfoCircledIcon style={{ width: 18, height: 18, display: 'block' }} />
    </Tooltip>
  );

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <Input placeholder="Your email" rightSection={rightSection} />
    </CodeDemo>
  );
}
