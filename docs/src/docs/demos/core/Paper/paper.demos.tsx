import React from 'react';
import { Paper, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Paper, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const gray = theme.colors.gray[3];
  const dark = theme.colors.dark[8];
  const customShadow =
    theme.colorScheme === 'dark'
      ? \`13px 18px 25px \${dark}, 1px 3px 3px \${dark}, -1px 3px 3px \${dark}\`
      : \`13px 18px 25px \${gray}, 1px 3px 3px $\{gray}, -1px 3px 3px $\{gray}\`;
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
  const theme = useMantineTheme();
  const gray = theme.colors.gray[3];
  const dark = theme.colors.dark[8];
  const customShadow =
    theme.colorScheme === 'dark'
      ? `13px 18px 25px ${dark}, 1px 3px 3px ${dark}, -1px 3px 3px ${dark}`
      : `13px 18px 25px ${gray}, 1px 3px 3px ${gray}, -1px 3px 3px ${gray}`;

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0]}
    >
      <div style={{ width: 260, margin: 'auto', padding: 40 }}>
        <Paper shadow="xs" padding="md">
          Paper with predefined shadow from theme
        </Paper>

        <Paper shadow={customShadow} padding="md" style={{ marginTop: 40 }}>
          Paper with custom shadow
        </Paper>
      </div>
    </CodeDemo>
  );
}
