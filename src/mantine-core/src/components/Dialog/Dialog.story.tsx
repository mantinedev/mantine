import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Dialog, DialogProps } from './Dialog';

function Wrapper(props: Omit<DialogProps, 'opened' | 'onClosed'>) {
  const [opened, setOpened] = useState(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => setOpened((o) => !o)}>toggle</Button>
      <Dialog {...props} opened={opened} onClose={() => setOpened(false)} withCloseButton>
        Hello there
      </Dialog>
    </div>
  );
}

storiesOf('@mantine/core/Dialog', module).add('General usage', () => <Wrapper />);
