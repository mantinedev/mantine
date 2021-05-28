import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

export function UseDocumentTitleDemo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
      </Group>
    </CodeDemo>
  );
}
