import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>;
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
