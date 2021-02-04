import React from 'react';
import { storiesOf } from '@storybook/react';
import { LockClosedIcon } from '@modulz/radix-icons';
import Input from './Input';

storiesOf('@mantine/core/Input', module).add('General Usage', () => (
  <div style={{ maxWidth: 300 }}>
    <Input placeholder="Input" />
    <Input placeholder="Input" invalid style={{ marginTop: 15 }} />
    <Input placeholder="Your password" icon={<LockClosedIcon />} style={{ marginTop: 15 }} />
    <Input placeholder="Unstyled" variant="unstyled" style={{ marginTop: 15 }} />
    <Input
      placeholder="Unstyled with icon"
      variant="unstyled"
      icon={<LockClosedIcon />}
      style={{ marginTop: 15 }}
    />
  </div>
));
