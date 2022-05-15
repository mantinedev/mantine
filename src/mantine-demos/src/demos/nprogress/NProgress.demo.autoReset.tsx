import { Button, Group } from '@mantine/core';
import { NProgress, setNProgress } from '@mantine/nprogress';
import React from 'react';

const code = `
import { Button, Group } from '@mantine/core';
import { NProgress, setNProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NProgress autoReset />
      <Group position="center">
        <Button onClick={() => setNProgress(100)}>Set 100%</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <NProgress autoReset />
      <Group position="center">
        <Button onClick={() => setNProgress(100)}>Set 100%</Button>
      </Group>
    </>
  );
}

export const autoReset: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
