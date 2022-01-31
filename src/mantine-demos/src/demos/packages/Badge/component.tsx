import React from 'react';
import { Group, Badge } from '@mantine/core';

const code = `
const CustomComponent = ({ pads, children, ...others }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

<Badge component="a" href="https://mantine.dev" variant="outline">
  Link badge
</Badge>

<Badge component={CustomComponent} pads="$$$" variant="filled">
  Get lots of money
</Badge>
`;

const CustomComponent = ({ pads, children, ...others }: any) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://mantine.dev" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
