import React, { useState } from 'react';
import { Popover, PopoverProps } from '../Popover';
import { Button } from '../../Button/Button';
import { Group } from '../../Group/Group';
import { TextInput } from '../../TextInput/TextInput';

export function Wrapper(props: Partial<PopoverProps>) {
  const [opened, setOpened] = useState(props.opened);

  return (
    <Popover
      {...props}
      title="Hello!"
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened(true)}>Popover</Button>}
      withArrow
      withCloseButton
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
