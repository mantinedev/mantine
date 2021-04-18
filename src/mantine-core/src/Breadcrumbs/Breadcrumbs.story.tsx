import React from 'react';
import { storiesOf } from '@storybook/react';
import { CaretRightIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/theme';
import { Text } from '../Text/Text';
import { Breadcrumbs } from './Breadcrumbs';

const items = [
  { title: 'Mantine', href: 'https://mantine.dev' },
  { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
  { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
].map((item, index) => (
  <Text<'a'> variant="link" component="a" href={item.href} key={index}>
    {item.title}
  </Text>
));

storiesOf('@mantine/core/Breadcrumbs', module)
  .add('General usage', () => (
    <div style={{ padding: 50 }}>
      <Breadcrumbs>{items}</Breadcrumbs>
    </div>
  ))
  .add('Custom separator', () => (
    <div style={{ padding: 50 }}>
      <Breadcrumbs style={{ marginTop: 20 }} separator="→">
        {items}
      </Breadcrumbs>
      <Breadcrumbs
        style={{ marginTop: 20 }}
        separator={<CaretRightIcon style={{ width: 18, height: 18 }} />}
      >
        {items}
      </Breadcrumbs>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Breadcrumbs themeOverride={{ colorScheme: 'dark' }}>
        {[
          { title: 'Mantine', href: 'https://mantine.dev' },
          { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
          { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
        ].map((item, index) => (
          <Text<'a'>
            variant="link"
            component="a"
            href={item.href}
            key={index}
            themeOverride={{ colorScheme: 'dark' }}
          >
            {item.title}
          </Text>
        ))}
      </Breadcrumbs>
    </div>
  ));
