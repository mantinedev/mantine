import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Navbar } from '../Navbar/Navbar';
import { User } from './_user';
import { Brand } from './_brand';
import { MainLinks } from './_mainLinks';

const code = `
import { Scrollbars } from 'react-custom-scrollbars';
import { Navbar } from '@mantine/core';

function Demo() {
  return (
    <Navbar height={600} padding="xs">
      <Navbar.Section mt="xs"><Brand /></Navbar.Section>

      <Navbar.Section grow mt="lg">
        <Scrollbars>
          {/* scrollable content here */}
        </Scrollbars>
      </Navbar.Section>

      <Navbar.Section><User /></Navbar.Section>
    </Navbar>
  );
}
`;

function Demo() {
  return (
    <Navbar height={600} padding="xs">
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow mt="lg">
        <Scrollbars>
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
        </Scrollbars>
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  demoProps: { spacing: false },
  code,
};
