import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Group, Button } from '@mantine/core';

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

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
