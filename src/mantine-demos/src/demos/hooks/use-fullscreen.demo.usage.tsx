import React from 'react';
import { useFullscreen } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';

const code = `
import { useFullscreen } from '@mantine/hooks';
import { Button } from '@mantine/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}

export const useFullscreenDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
