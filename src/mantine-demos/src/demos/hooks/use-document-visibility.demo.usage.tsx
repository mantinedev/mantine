import React from 'react';
import { Text } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

const code = `
import { Text } from '@mantine/core';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`;

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);
  return <Text>Switch to another tab to see document title change</Text>;
}

export const useDocumentVisibilityDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
