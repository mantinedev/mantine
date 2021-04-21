import React from 'react';
import { Progress } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <>
      <Progress value={10} />
      <Progress value={50} striped />
      <Progress value={100} color="teal" />
    </>
  );
}`;

export function ProgressBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Progress value={10} />
      <Progress style={{ marginTop: 10 }} value={50} striped />
      <Progress style={{ marginTop: 10 }} value={100} color="teal" />
    </CodeDemo>
  );
}
