import React from 'react';
import { Textarea, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />
      
      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}`;

export function TextareaAutosizeDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <Textarea
          placeholder="Autosize with no rows limit"
          label="Autosize with no rows limit"
          autosize
          minRows={2}
        />

        <Textarea
          label="Autosize with 4 rows max"
          placeholder="Autosize with 4 rows max"
          autosize
          minRows={2}
          maxRows={4}
          style={{ marginTop: 15 }}
        />
      </div>
    </CodeDemo>
  );
}
