import React from 'react';
import { storiesOf } from '@storybook/react';
import { ScrollArea } from '../ScrollArea/ScrollArea';
import { Navbar } from './Navbar/Navbar';

storiesOf('AppShell/Navbar', module)
  .add('Navbar', () => (
    <Navbar width={{ base: 300 }}>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section>Second section</Navbar.Section>
      <Navbar.Section grow>Grow section</Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  ))
  .add('Grow section with scrollbars', () => (
    <Navbar p="md" width={{ base: 300 }}>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section grow component={ScrollArea}>
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quo aliquam nesciunt
              tempore, repellendus molestias nobis, hic earum autem suscipit, neque quam
              perspiciatis ullam a error. Nemo, possimus ad! Dolorem.
            </p>
          ))}
      </Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
      <Navbar.Section>Last section 2</Navbar.Section>
    </Navbar>
  ))
  .add('Fixed position', () => (
    <Navbar fixed position={{ top: 60, left: 0 }} width={{ base: 100, sm: 300 }}>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section>Second section</Navbar.Section>
      <Navbar.Section grow>Grow section</Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  ))
  .add('With width breakpoints', () => (
    <Navbar style={{ background: 'silver' }} width={{ sm: 300, lg: 400 }}>
      This is navbar
    </Navbar>
  ));
