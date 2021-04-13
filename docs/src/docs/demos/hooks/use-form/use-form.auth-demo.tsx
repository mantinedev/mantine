import React from 'react';
import { AuthenticationForm } from '@mantine/demos';
import { DEFAULT_THEME } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/AuthenticationForm/AuthenticationForm';

export function UseFormAuthDemo() {
  return (
    <CodeDemo code={code} language="tsx" demoBackground={DEFAULT_THEME.colors.gray[0]}>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <AuthenticationForm />
      </div>
    </CodeDemo>
  );
}
