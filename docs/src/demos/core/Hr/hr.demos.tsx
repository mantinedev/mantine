import React from 'react';
import { Hr } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Hr } from '@mantine/core';

export function HrDemo() {
  return (
    <>
      <Hr />
      <Hr variant="solid" />
      <Hr variant="dotted" />
    </>
  );
}`;

export function HrBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Hr />
      <Hr variant="solid" />
      <Hr variant="dotted" />
    </CodeDemo>
  );
}
