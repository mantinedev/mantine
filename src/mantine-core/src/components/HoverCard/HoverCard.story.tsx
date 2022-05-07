import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { Button } from '../Button';
import { HoverCard } from './HoverCard';

export default { title: 'HoverCard' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <HoverCard>
        <HoverCard.Target>
          <Button>Hover to reveal</Button>
        </HoverCard.Target>

        <HoverCard.Dropdown>Hello</HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}

export function StylesOnMantineProvider() {
  return (
    <MantineProvider
      inherit
      styles={{
        HoverCard: {
          root: { backgroundColor: 'red' },
        },
      }}
    >
      <Usage />
    </MantineProvider>
  );
}
