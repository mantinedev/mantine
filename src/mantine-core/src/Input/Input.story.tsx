import React from 'react';
import { storiesOf } from '@storybook/react';
import { MagnifyingGlassIcon, LockClosedIcon } from '@modulz/radix-icons';
import { Input } from './Input';

storiesOf('@mantine/core/Input', module).add('Input', () => (
  <div style={{ maxWidth: 300, padding: 50 }}>
    <Input placeholder="Input" />
    <Input placeholder="Input" invalid style={{ marginTop: 15 }} />
    <Input
      placeholder="Filled variant"
      icon={<MagnifyingGlassIcon />}
      variant="filled"
      style={{ marginTop: 15 }}
      radius="xl"
    />
    <Input
      placeholder="Filled variant"
      icon={<MagnifyingGlassIcon />}
      variant="filled"
      style={{ marginTop: 15 }}
      disabled
      radius="xl"
    />
    <Input placeholder="Disabled" disabled style={{ marginTop: 15 }} />
    <Input
      radius="lg"
      placeholder="Your password"
      icon={<LockClosedIcon />}
      style={{ marginTop: 15 }}
    />
    <Input placeholder="Unstyled" variant="unstyled" style={{ marginTop: 15 }} />
    <Input
      placeholder="Unstyled with icon"
      variant="unstyled"
      icon={<LockClosedIcon />}
      style={{ marginTop: 15 }}
    />
  </div>
));
