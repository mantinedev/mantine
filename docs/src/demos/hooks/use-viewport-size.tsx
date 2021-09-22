import React from 'react';
import { useViewportSize } from '@mantine/hooks';

const code = `
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <div>Width: {width}, height: {height}</div>
  );
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <div>Width: {width}, height: {height}</div>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
