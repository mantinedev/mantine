import React from 'react';
import { storiesOf } from '@storybook/react';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { Input } from './Input';

const actionIcon = (
  <ActionIcon size="sm">
    <MagnifyingGlassIcon />
  </ActionIcon>
);

const getStates = (props?: any) => (
  <div style={{ maxWidth: 300, padding: 50 }}>
    <Input placeholder="Input" {...props} />
    <Input
      placeholder="Invalid"
      icon={<MagnifyingGlassIcon />}
      invalid
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input placeholder="Disabled" disabled style={{ marginTop: 15 }} {...props} />
    <Input
      placeholder="With icon"
      icon={<MagnifyingGlassIcon />}
      style={{ marginTop: 15 }}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder="With right section"
      rightSection={actionIcon}
      {...props}
    />
    <Input
      style={{ marginTop: 15 }}
      placeholder="Right Section width"
      rightSection={actionIcon}
      rightSectionWidth={50}
      {...props}
    />
  </div>
);

storiesOf('@mantine/core/Input', module)
  .add('Default variant', () => <>{getStates()}</>)
  .add('Filled variant', () => <>{getStates({ variant: 'filled' })}</>)
  .add('Unstyled variant', () => <>{getStates({ variant: 'unstyled' })}</>);
