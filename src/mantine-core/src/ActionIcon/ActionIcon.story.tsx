import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  GearIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  CheckIcon,
  LockOpen1Icon,
} from '@modulz/radix-icons';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import ActionIcon from './ActionIcon';

storiesOf('@mantine/core/ActionIcon', module).add('General Usage', () => (
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
));
