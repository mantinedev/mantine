import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  GearIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  CheckIcon,
  LockOpen1Icon,
} from '@modulz/radix-icons';
import { MantineProvider } from '@mantine/theme';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import ActionIcon from './ActionIcon';

storiesOf('@mantine/core', module).add('ActionIcon', () => (
  <MantineProvider>
    <ElementsGroup>
      <ActionIcon>
        <GearIcon />
      </ActionIcon>

      <ActionIcon theme="primary">
        <LockOpen1Icon />
      </ActionIcon>

      <ActionIcon theme="danger">
        <TrashIcon />
      </ActionIcon>

      <ActionIcon theme="warning">
        <ExclamationTriangleIcon />
      </ActionIcon>

      <ActionIcon theme="success">
        <CheckIcon />
      </ActionIcon>
    </ElementsGroup>
  </MantineProvider>
));
