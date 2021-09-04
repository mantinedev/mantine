import React, { useState } from 'react';
import { Button } from '../../Button/Button';
import { Group } from '../../Group/Group';
import { TextInput } from '../../TextInput/TextInput';
import { Text } from '../../Text/Text';
import { Dialog } from '../Dialog';

const code = `
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened((o) => !o)}>Toggle dialog</Button>
      </Group>
      <Dialog opened={opened} withCloseButton onClose={() => setOpened(false)}>
        <Text size="lg">Subscribe to email newsletter</Text>
        <Group>
          <TextInput label="Your email" placeholder="hello@gluesticker.com" />
          <Button>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
