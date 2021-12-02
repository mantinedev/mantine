import React from 'react';
import { storiesOf } from '@storybook/react';
import { RtlProvider } from '@mantine/ds/src';
import { Anchor } from '../../Anchor';
import { Breadcrumbs } from '../Breadcrumbs';

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

storiesOf('@mantine/core/Breadcrumbs/stories', module).add('RTL', () => (
  <RtlProvider>
    <div style={{ padding: 40 }}>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="–" mt="md">
        {items}
      </Breadcrumbs>
    </div>
  </RtlProvider>
));
