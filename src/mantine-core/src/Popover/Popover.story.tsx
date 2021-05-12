import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '../TextInput/TextInput';
import { Group } from '../Group/Group';
import { Button } from '../Button/Button';
import { Popover } from './Popover';

function Wrapper(props: any) {
  const [opened, setOpened] = useState(true);
  return (
    <Popover
      {...props}
      opened={opened}
      onClose={() => setOpened(true)}
      control={<Button onClick={() => setOpened(true)}>Popover</Button>}
    >
      <TextInput label="Text input" placeholder="text input" style={{ minWidth: 300 }} />
      <Group position="center" style={{ marginTop: 15 }}>
        <Button variant="outline" color="gray">
          Cancel
        </Button>
        <Button>Submit</Button>
      </Group>
    </Popover>
  );
}

storiesOf('@mantine/core/Popover', module).add('General usage', () => (
  <div style={{ padding: 400 }}>
    <Wrapper position="bottom" placement="center" />
  </div>
));
