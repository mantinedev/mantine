import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from './Navbar';

storiesOf('@mantine/core/AppShell/Navbar', module).add('General usage', () => (
  <Navbar>
    <Navbar.Section>First section</Navbar.Section>
    <Navbar.Section>Second section</Navbar.Section>
    <Navbar.Section grow style={{ backgroundColor: 'silver' }}>
      Grow section
    </Navbar.Section>
    <Navbar.Section>Last section</Navbar.Section>
  </Navbar>
));
