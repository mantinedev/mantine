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
      <ActionIcon color="gray">
        <GearIcon />
      </ActionIcon>

      <ActionIcon color="blue">
        <LockOpen1Icon />
      </ActionIcon>

      <ActionIcon color="red">
        <TrashIcon />
      </ActionIcon>

      <ActionIcon color="yellow">
        <ExclamationTriangleIcon />
      </ActionIcon>

      <ActionIcon color="teal">
        <CheckIcon />
      </ActionIcon>
    </ElementsGroup>
  </MantineProvider>
));
