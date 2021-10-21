import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header';

storiesOf('@mantine/core/AppShell/Header', module).add('General usage', () => (
  <Header>Just a header</Header>
));
