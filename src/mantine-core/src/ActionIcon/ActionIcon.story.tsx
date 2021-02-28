import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  GearIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  CheckIcon,
  LockOpen1Icon,
} from '@modulz/radix-icons';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { ActionIcon } from './ActionIcon';

storiesOf('@mantine/core', module).add('ActionIcon', () => (
  <>
    <ElementsGroup>
      <ActionIcon color="gray">
        <GearIcon />
      </ActionIcon>

      <ActionIcon color="blue" radius="xl">
        <LockOpen1Icon />
      </ActionIcon>

      <ActionIcon color="red" radius={0}>
        <TrashIcon />
      </ActionIcon>

      <ActionIcon color="yellow">
        <ExclamationTriangleIcon />
      </ActionIcon>

      <ActionIcon color="teal">
        <CheckIcon />
      </ActionIcon>
    </ElementsGroup>
  </>
));
