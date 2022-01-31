import React from 'react';
import { Navbar } from '@mantine/core';
import { User } from './_user';
import { Brand } from './_brand';
import { MainLinks } from './_mainLinks';

const code = `
<Navbar height={600} padding="xs" width={{ base: 300 }}>
  <Navbar.Section><Brand /></Navbar.Section>
  <Navbar.Section grow mt="lg"><MainLinks /></Navbar.Section>
  <Navbar.Section><User /></Navbar.Section>
</Navbar>
`;

function Demo() {
  return (
    <Navbar height={600} padding="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow mt="lg">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}

export const navbar: MantineDemo = {
  type: 'demo',
  component: Demo,
  demoProps: { spacing: false },
  code,
};
