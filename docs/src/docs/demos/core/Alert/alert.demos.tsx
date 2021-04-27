import React from 'react';
import { Alert, Text, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Alert } from '@mantine/core';

function Demo() {
  return (
    <Alert color="red" title="Something went wrong">
      Application crashed, try refreshing the page, 
      if it does not help please contact our support
      
      <br /><br />
      
      Error message:
      <Text color="red" size="sm">
        undefined is not a function
      </Text>
    </Alert>
  );
}`;

export function AlertBaseDemo() {
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
          <br />
          <br />
          Error message:
          <Text color="red" size="sm">
            undefined is not a function
          </Text>
        </Alert>
      </div>
    </CodeDemo>
  );
}
