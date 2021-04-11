import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Drawer } from './Drawer';

function Wrapper(props: Omit<React.ComponentPropsWithoutRef<typeof Drawer>, 'opened' | 'onClose'>) {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Drawer opened={opened} onClose={() => setOpened(false)} {...props} />
      <Button onClick={() => setOpened(true)}>Open drawer</Button>
    </div>
  );
}

storiesOf('@mantine/core/Drawer', module).add('General usage', () => (
  <Wrapper position="top">Drawer</Wrapper>
));
