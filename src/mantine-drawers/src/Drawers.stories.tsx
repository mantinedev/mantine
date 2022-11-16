/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { Button, Group, Text } from '@mantine/core';
import { storiesOf } from '@storybook/react';

import {
  closeAllDrawers,
  closeDrawer,
  ContextDrawerProps,
  DrawersProvider,
  openConfirmDrawer,
  openContextDrawer,
  openDrawer,
} from './index';

function Demo() {
  const showContextDrawer = () =>
    openContextDrawer({
      drawerId: 'context-drawer',
      drawer: 'hello',
      title: 'Context drawer',
      onClose: () => console.log('context drawer closed'),
      innerProps: {
        contextProp: 'test-drawer',
      },
    });

  const showContentDrawer = () =>
    openDrawer({
      drawerId: 'content-drawer',
      title: 'Hello there',
      children: (
        <Text color="blue" onClick={() => closeDrawer('content-drawer')}>
          My content drawer
        </Text>
      ),
      onClose: () => console.log('content drawer 1 closed'),
    });

  const showSingleConfirmDrawer = () =>
    openConfirmDrawer({
      title: 'Just confirm',
      onCancel: () => console.log('Single confirm drawer cancelled'),
      onConfirm: () => console.log('Single confirm drawer confirmed'),
      onClose: () => console.log('Single confirm drawer closed'),
    });

  const showNestedDrawer = () =>
    openConfirmDrawer({
      title: 'Are you really sure?',
      closeOnConfirm: false,
      onConfirm: closeAllDrawers,
      onClose: () => console.log('confirm drawer 2 closed'),
    });

  const showConfirmDrawer = () =>
    openConfirmDrawer({
      title: 'Please confirm this action',
      confirmProps: { color: 'red' },
      closeOnConfirm: false,
      children: (
        <Text size="sm" color="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          magnam modi vitae molestias unde tempora exercitationem fugit, ex
          repellat doloribus maiores facilis quo quis, itaque temporibus
          obcaecati vel iusto praesentium.
        </Text>
      ),
      onCancel: () => console.log('Cancel'),
      onConfirm: showNestedDrawer,
      onClose: () => console.log('confirm drawer 1 closed'),
    });

  return (
    <Group sx={{ padding: 40 }}>
      <Button onClick={showContextDrawer}>Open context drawer</Button>
      <Button onClick={showConfirmDrawer} color="red">
        Open nested confirm drawer
      </Button>
      <Button onClick={showSingleConfirmDrawer} color="cyan">
        Open single confirm drawer
      </Button>
      <Button onClick={showContentDrawer} color="violet">
        Open content drawer
      </Button>
    </Group>
  );
}

storiesOf('Drawers Manager', module).add('Custom drawer', () => (
  <DrawersProvider
    drawers={{
      hello: ({
        context,
        id,
        innerProps,
      }: ContextDrawerProps<{ contextProp: string }>) => {
        console.log(innerProps, id, context);
        return (
          <div>
            <div>Test custom drawer: {innerProps.contextProp}</div>
            <Button onClick={() => context.closeDrawer(id)}>Close</Button>
          </div>
        );
      },
    }}
    labels={{ confirm: 'Confirm', cancel: 'Cancel' }}
  >
    <Demo />
  </DrawersProvider>
));
