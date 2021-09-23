import React from 'react';
import { useViewportSize } from '@mantine/hooks';

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
    <div style={{ textAlign: 'center' }}>
      Width: {width}, height: {height}
    </div>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
