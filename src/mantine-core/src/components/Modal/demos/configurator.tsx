import React, { useState } from 'react';
import { Button, Group } from '../../../index';
import { AuthenticationForm } from '../../../../demos/AuthenticationForm/AuthenticationForm';
import { Modal, ModalProps } from '..';

function Wrapper(props: ModalProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props}>
        <AuthenticationForm noPadding noShadow />
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open modal</Button>
      </Group>
    </div>
  );
}
const codeTemplate = (props: string) => `function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)}${props}>
        <AuthenticationForm />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open modal</Button>
      </Group>
    </>
  );
}`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'title', type: 'string', initialValue: 'Register', defaultValue: '' },
    {
      name: 'overflow',
      type: 'select',
      data: [
        { label: 'outside', value: 'outside' },
        { label: 'inside', value: 'inside' },
      ],
      defaultValue: 'outside',
      initialValue: 'outside',
    },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'padding', type: 'size', initialValue: 'lg', defaultValue: 'lg' },
    { name: 'shadow', type: 'size', initialValue: 'lg', defaultValue: 'lg' },
    { name: 'centered', type: 'boolean', defaultValue: false },
    { name: 'hideCloseButton', type: 'boolean', defaultValue: false },
    { name: 'closeOnClickOutside', type: 'boolean', defaultValue: true, initialValue: true },
  ],
};
