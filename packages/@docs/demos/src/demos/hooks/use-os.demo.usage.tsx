import React from 'react';
import { useOs } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Text } from '@mantine/core';

const code = `
import { useOs } from '@mantine/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text ta="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
