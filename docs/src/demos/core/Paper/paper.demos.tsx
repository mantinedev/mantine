import React from 'react';
import { Paper } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/theme';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Paper } from '@mantine/core';

export function PaperDemo() {
  return (
    <>
      <Paper shadow="xs">
        Paper with predefined shadow from theme
      </Paper>

      <Paper shadow="13px 18px 25px #e5e5e5, 1px 3px 3px #e5e5e5, -1px 3px 3px #e5e5e5">
        Paper with custom shadow
      </Paper>
    </>
  );
}`;

export function PaperShadowDemo() {
  return (
    <CodeDemo code={code} language="tsx" demoBackground={DEFAULT_THEME.colors.gray[0]}>
      <div style={{ width: 260, margin: 'auto', padding: 40 }}>
        <Paper shadow="xs" padding="md">
          Paper with predefined shadow from theme
        </Paper>

        <Paper
          shadow="13px 18px 25px #e5e5e5, 1px 3px 3px #e5e5e5, -1px 3px 3px #e5e5e5"
          padding="md"
          style={{ marginTop: 40 }}
        >
          Paper with custom shadow
        </Paper>
      </div>
    </CodeDemo>
  );
}
