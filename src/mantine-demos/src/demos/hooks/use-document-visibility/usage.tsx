import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

const code = `
import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useDocumentVisibility } from '@mantine/hooks';

function Demo() {
  const visible = useDocumentVisibility();

  return (
    <Group position="center">
      <Badge color="blue">Document Visibility: {visible}</Badge>
    </Group>
  );
}`;

function Demo() {
  const visible = useDocumentVisibility();

  useDocumentTitle(`Document is ${visible}`);

  return (
    <Group position="center">
      <Badge color="blue">Document Visibility: {visible}</Badge>
    </Group>
  );
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
