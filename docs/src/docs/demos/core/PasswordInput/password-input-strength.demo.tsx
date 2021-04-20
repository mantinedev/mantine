import React from 'react';
import { PasswordStrength } from '@mantine/demos';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/PasswordStrength/PasswordStrength';

export function PasswordInputStrengthDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/PasswordStrength/PasswordStrength.tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <div style={{ maxWidth: 340, margin: 'auto' }}>
        <PasswordStrength alwaysMounted />
      </div>
    </CodeDemo>
  );
}
