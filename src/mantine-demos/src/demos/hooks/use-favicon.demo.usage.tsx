import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

const code = `
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
    </Group>
  );
}
`;

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setTwitterFavicon = () => setFavicon('https://twitter.com/favicon.ico');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setTwitterFavicon}>Twitter favicon</Button>
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
    </Group>
  );
}

export const useFaviconUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
