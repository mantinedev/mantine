import React, { useState } from 'react';
import { AuthenticationForm } from '../../../../demos';
import { Modal, Group, Button } from '../../../index';

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 322, '70%'];

function Demo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<string | number>('md');

  const buttons = SIZES.map((s) => (
    <Button
      key={s}
      variant="outline"
      onClick={() => {
        setSize(s);
        setOpened(true);
      }}
    >
      {typeof s === 'number' ? `${s}px` : s}
    </Button>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        size={size}
      >
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">{buttons}</Group>
    </>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
