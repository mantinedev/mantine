import React from 'react';
import { storiesOf } from '@storybook/react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Navbar } from './Navbar';

const lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum perspiciatis possimus, sapiente dolorem magnam quibusdam sint temporibus explicabo perferendis delectus!';

storiesOf('@mantine/core/AppShell/Navbar', module)
  .add('General usage', () => (
    <Navbar>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section>Second section</Navbar.Section>
      <Navbar.Section grow style={{ backgroundColor: 'silver' }}>
        Grow section
      </Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  ))
  .add('Grow section with scrollbars', () => (
    <Navbar>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section grow style={{ backgroundColor: 'silver' }}>
        <Scrollbars>
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <p key={i}>{lorem}</p>
            ))}
        </Scrollbars>
      </Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
      <Navbar.Section>Last section 2</Navbar.Section>
    </Navbar>
  ))
  .add('Fixed position', () => (
    <Navbar fixed position={{ top: 60, left: 0 }}>
      <Navbar.Section>First section</Navbar.Section>
      <Navbar.Section>Second section</Navbar.Section>
      <Navbar.Section grow style={{ backgroundColor: 'silver' }}>
        Grow section
      </Navbar.Section>
      <Navbar.Section>Last section</Navbar.Section>
    </Navbar>
  ))
  .add('With width breakpoints', () => (
    <Navbar
      style={{ background: 'silver' }}
      width={{
        base: 400,
        breakpoints: { 900: 300, md: 350, xs: '100%' },
      }}
    >
      This is navbar
    </Navbar>
  ));
