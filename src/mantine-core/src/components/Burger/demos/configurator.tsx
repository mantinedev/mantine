import React, { useState } from 'react';
import { Burger, BurgerProps } from '../Burger';
import { Group } from '../../Group/Group';

function Wrapper(props: BurgerProps) {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Open navigation' : 'Close navigation';

  return (
    <Group position="center">
      <Burger
        title={title}
        aria-label={title}
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        {...props}
      />
    </Group>
  );
}

const codeTemplate = (props: string) => `<Burger${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
  ],
};
