import React from 'react';
import { storiesOf } from '@storybook/react';
import { LockClosedIcon } from '@modulz/radix-icons';
import Input from './Input';

storiesOf('@mantine/core/Input', module).add('General Usage', () => (
  <div style={{ maxWidth: 300 }}>
    <Input placeholder="Input" />
    <Input placeholder="Your password" icon={<LockClosedIcon />} style={{ marginTop: 15 }} />
  </div>
));
