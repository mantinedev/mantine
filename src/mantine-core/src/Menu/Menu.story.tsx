import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Menu } from './Menu';

function MenuWrapper(
  props: Omit<React.ComponentPropsWithoutRef<typeof Menu>, 'opened' | 'onClose'>
) {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <div style={{ position: 'relative' }}>
        <Menu opened={opened} onClose={() => setOpened(false)} {...props} />
        <Button onClick={() => setOpened(true)}>Open menu</Button>
      </div>
    </div>
  );
}

storiesOf('@mantine/core/Menu', module).add('General usage', () => <MenuWrapper />);
