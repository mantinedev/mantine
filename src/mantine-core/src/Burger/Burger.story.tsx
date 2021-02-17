import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { Burger } from './Burger';

function WrappedBurger(props: Omit<React.ComponentProps<typeof Burger>, 'opened' | 'onChange'>) {
  const [opened, onChange] = useState(false);
  return (
    <div style={{ padding: 10 }}>
      <Burger opened={opened} onClick={() => onChange((s) => !s)} {...props} />
    </div>
  );
}

storiesOf('@mantine/core', module).add('Burger', () => (
  <MantineProvider>
    <WrappedBurger size="xs" />
    <WrappedBurger size="sm" />
    <WrappedBurger size="md" />
    <WrappedBurger size="lg" />
    <WrappedBurger size="xl" color="teal" />
    <WrappedBurger size={120} color="blue" />
  </MantineProvider>
));
