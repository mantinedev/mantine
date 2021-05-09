import React, { useState } from 'react';
import { Drawer, Button, Group, Portal } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function DrawerWrapper(props: React.ComponentPropsWithoutRef<typeof Drawer>) {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Portal zIndex={100}>
        <Drawer opened={opened} onClose={() => setOpened(false)} {...props}>
          Press escape to close the drawer if you are trapped
        </Drawer>
      </Portal>
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
        Press escape to close the  drawer if you are trapped
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open drawer</Button>
      </Group>
    </>
  );
}`;

export function DrawerConfigurator() {
  return (
    <Configurator
      component={DrawerWrapper}
      codeTemplate={codeTemplate}
      props={[
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
        {
          name: 'size',
          type: 'select',
          initialValue: 'md',
          defaultValue: 'md',
          capitalize: false,
          data: [
            { label: 'xs', value: 'xs' },
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
            { label: 'lg', value: 'lg' },
            { label: 'xl', value: 'xl' },
            { label: 'full', value: 'full' },
          ],
        },
        { name: 'padding', type: 'size', initialValue: 'md', defaultValue: 0 },
        { name: 'shadow', type: 'size', initialValue: 'xs', defaultValue: 'md' },
        { name: 'noOverlay', type: 'boolean', defaultValue: false },
        { name: 'noFocusTrap', type: 'boolean', defaultValue: false },
        { name: 'noScrollLock', type: 'boolean', defaultValue: false },
        { name: 'noCloseOnClickOutside', type: 'boolean', defaultValue: false },
        { name: 'noCloseOnEscape', type: 'boolean', defaultValue: false },
      ]}
    />
  );
}
