import React, { useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { ElementsGroup, Button } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { Button } from '@mantine/core';

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function UseDocumentTitleDemo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);
  
  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function UseDocumentTitleDemo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
