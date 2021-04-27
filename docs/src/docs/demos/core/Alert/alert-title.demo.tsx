import React from 'react';
import { Alert, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Alert } from '@mantine/core';

function Demo() {
  return (
    <>
      <Alert color="red" title="Something went wrong">
        Alert with title
      </Alert>

      <Alert color="red">Alert without title</Alert>
    </>
  );
}`;

export function AlertTitleDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}
    >
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <Alert color="red" title="Something went wrong">
          Application crashed, try refreshing the page, if it does not help please contact our
          support
        </Alert>

        <Alert color="red" style={{ marginTop: 15 }}>
          Application crashed, try refreshing the page, if it does not help please contact our
          support
        </Alert>
      </div>
    </CodeDemo>
  );
}
