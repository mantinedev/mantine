import React from 'react';
import { useMantineTheme, Breadcrumbs, Anchor } from '@mantine/core';

const code = `
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </>
  );
}
`;

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  const theme = useMantineTheme();

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator={theme.dir === 'ltr' ? '→' : '←'} style={{ marginTop: 10 }}>
        {items}
      </Breadcrumbs>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
