import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { useFavicon } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { useFavicon } from '@mantine/hooks';
import { Group, Button } from '@mantine/core';

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');
  const setMantineUIFavicon = () => setFavicon('https://ui.mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
      <Button onClick={setMantineUIFavicon}>Mantine UI favicon</Button>
    </Group>
  );
}
`;

function Demo() {
  const [favicon, setFavicon] = useState('https://mantine.dev/favicon.svg');
  const setMantineFavicon = () => setFavicon('https://mantine.dev/favicon.svg');
  const setMantineUIFavicon = () => setFavicon('https://ui.mantine.dev/favicon.svg');

  useFavicon(favicon);

  return (
    <Group justify="center">
      <Button onClick={setMantineFavicon}>Mantine favicon</Button>
      <Button onClick={setMantineUIFavicon}>Mantine UI favicon</Button>
    </Group>
  );
}

export const useFaviconUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
