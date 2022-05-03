import React, { useEffect } from 'react';
import { Group, Badge } from '@mantine/core';
import { useDocumentVisibility } from '@mantine/hooks';

const code = `
import React, { useEffect } from 'react';
import { Group, Badge } from '@mantine/core';
import { useDocumentVisibility } from '@mantine/hooks';

  useEffect(() => {
    console.log(documentVisibility);
  }, [documentVisibility]);

  return (
    <Group position="center">
      <Badge color="blue">Document Visibility: {documentVisibility}</Badge>
    </Group>
  );
}`;

function Demo() {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(documentVisibility);
  }, [documentVisibility]);

  return (
    <Group position="center">
      <Badge color="blue">Document Visibility: {documentVisibility}</Badge>
    </Group>
  );
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
