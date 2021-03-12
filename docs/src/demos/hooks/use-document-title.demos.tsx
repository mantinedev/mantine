import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDocumentTitle } from '@mantine/hooks';
import { ElementsGroup, Button } from '@mantine/core';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDocumentTitle } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function UseDocumentTitleDemo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);
  
  return (
    <Button onClick={() => setTitle(nanoid())}>
      Set document title to random id
    </Button>;
  );
}`;

export function UseDocumentTitleDemo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <CodeDemo
      code={code}
      language="tsx"
      title="Demo"
      demoLink="/hooks/use-document-title.demos.tsx"
    >
      <ElementsGroup position="center">
        <Button onClick={() => setTitle(nanoid())}>Set document title to random id</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
