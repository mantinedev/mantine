import React from 'react';
import { useViewportSize } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Text } from '@mantine/core';

const code = `
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text ta="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
