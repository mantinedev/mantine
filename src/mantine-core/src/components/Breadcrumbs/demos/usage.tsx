import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Anchor } from '../../Anchor/Anchor';

const code = `
import React from 'react';
import { Breadcrumbs, Text } from '@mantine/core';

function Demo() {
  const items = [
    { title: 'Mantine', href: 'https://mantine.dev' },
    { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→">{items}</Breadcrumbs>
    </>
  );
}
`;

function Demo() {
  const items = [
    { title: 'Mantine', href: 'https://mantine.dev' },
    { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" style={{ marginTop: 10 }}>
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
