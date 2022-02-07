import React, { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';
import { Text } from '@mantine/core';

const code = `
import { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';
import { Text } from '@mantine/core';

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <>Mouse left the page {leftsCount} times</>;
}
`;

function Demo() {
  const [leftsCount, setLeftsCount] = useState(0);
  usePageLeave(() => setLeftsCount((p) => p + 1));
  return <Text align="center">Mouse left the page {leftsCount} times</Text>;
}

export const usePageLeaveDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
