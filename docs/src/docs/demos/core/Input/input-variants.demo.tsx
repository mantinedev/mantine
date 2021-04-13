import React from 'react';
import { Input } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Input } from '@mantine/core';

export function InputDemo() {
  return (
    <>
      <Input placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="unstyled" placeholder="Unstyled variant" />
    </>
  );
}`;

export function InputVariantsDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Input placeholder="Default variant" />
      <Input style={{ marginTop: 15 }} variant="filled" placeholder="Filled variant" />
      <Input style={{ marginTop: 15 }} variant="unstyled" placeholder="Unstyled variant" />
    </CodeDemo>
  );
}
