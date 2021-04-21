import React from 'react';
import { Input } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="unstyled" placeholder="Unstyled variant" />
    </>
  );
}`;

export function InputVariantsDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <Input placeholder="Default variant" />
      <Input style={{ marginTop: 15 }} variant="filled" placeholder="Filled variant" />
      <Input style={{ marginTop: 15 }} variant="unstyled" placeholder="Unstyled variant" />
    </CodeDemo>
  );
}
