import React from 'react';
import { storiesOf } from '@storybook/react';
import { GearIcon, TrashIcon, ExclamationTriangleIcon, CheckIcon } from '@modulz/radix-icons';
import ActionIcon from './ActionIcon';

storiesOf('@mantine/core/ActionIcon', module).add('General Usage', () => (
  <div>
    <div>
      <ActionIcon>
        <GearIcon />
      </ActionIcon>
    </div>
    <div>
      <ActionIcon theme="danger">
        <TrashIcon />
      </ActionIcon>
    </div>
    <div>
      <ActionIcon theme="warning">
        <ExclamationTriangleIcon />
      </ActionIcon>
    </div>
    <div>
      <ActionIcon theme="success">
        <CheckIcon />
      </ActionIcon>
    </div>
  </div>
));
