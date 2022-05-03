import React from 'react';
import { HoverCard, Button, Text } from '@mantine/core';

const code = `
import { HoverCard, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <HoverCard width={280} shadow="md">
      <HoverCard.Target>
        <Button>Hover to reveal the card</Button>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text size="sm">
          Hover card is revealed when user hovers over target element, it will be hidden once mouse
          is not over both target and dropdown elements
        </Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
`;

function Demo() {
  return (
    <HoverCard width={280} shadow="md">
      <HoverCard.Target>
        <Button>Hover to reveal the card</Button>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text size="sm">
          Hover card is revealed when user hovers over target element, it will be hidden once mouse
          is not over both target and dropdown elements
        </Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
