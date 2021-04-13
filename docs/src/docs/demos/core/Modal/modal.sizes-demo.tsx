import React, { useState } from 'react';
import { Modal, Button, ElementsGroup, Text, Portal } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 322, '70%'];

export function ModalSizesDemo() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState<string | number>('md');

  const buttons = SIZES.map((s) => (
    <Button
      key={s}
      onClick={() => {
        setSize(s);
        setOpened(true);
      }}
    >
      {typeof s === 'number' ? `${s}px` : s}
    </Button>
  ));

  return (
    <CodeDemo>
      <Portal zIndex={10}>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
          size={size}
        >
          <AuthenticationForm noShadow noPadding />
        </Modal>
      </Portal>

      <Text align="center">Choose modal size:</Text>
      <ElementsGroup position="center" style={{ marginTop: 15 }}>
        {buttons}
      </ElementsGroup>
    </CodeDemo>
  );
}
