import React, { useState } from 'react';
import { Button, Group, Drawer, DrawerProps } from '@mantine/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

function Wrapper(props: DrawerProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Drawer opened={opened} onClose={() => setOpened(false)} {...props}>
        <AuthenticationForm noPadding noShadow />
      </Drawer>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open drawer</Button>
      </Group>
    </div>
  );
}
const codeTemplate = (props: string) => `function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer opened={opened} onClose={() => setOpened(false)}${props}>
        <AuthenticationForm />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open drawer</Button>
      </Group>
    </>
  );
}`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'position',
      type: 'select',
      initialValue: 'left',
      defaultValue: 'left',
      data: [
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'top', value: 'top' },
        { label: 'bottom', value: 'bottom' },
      ],
    },
    { name: 'title', type: 'string', initialValue: 'Register', defaultValue: '' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'padding', type: 'size', initialValue: 'md', defaultValue: 0 },
    { name: 'shadow', type: 'size', initialValue: 'xs', defaultValue: 'md' },
    { name: 'hideCloseButton', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'noOverlay', type: 'boolean', defaultValue: false },
    { name: 'noFocusTrap', type: 'boolean', defaultValue: false },
    { name: 'noScrollLock', type: 'boolean', defaultValue: false },
    { name: 'noCloseOnClickOutside', type: 'boolean', defaultValue: false },
    { name: 'noCloseOnEscape', type: 'boolean', defaultValue: false },
  ],
};
