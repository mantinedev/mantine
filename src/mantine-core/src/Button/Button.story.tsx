import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('@mantine/core/Button', module).add('General usage', () => (
  <div>
    <Button>Button</Button>
  </div>
));
