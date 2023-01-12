import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { useMantineTheme, Container } from '@mantine/core';

const code = `
import { Container } from '@mantine/core';

function Demo() {
  return (
    <>
      <Container>
        Default container
      </Container>

      <Container size="xs" px="xs">
        xs container with xs horizontal padding
      </Container>

      <Container size="30rem" px={0}>
        30rem container with 0 horizontal padding
      </Container>
    </>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const color = theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0];

  return (
    <>
      <Container bg={color} h={50}>
        Default container
      </Container>

      <Container size="xs" px="xs" bg={color} h={50} mt={20}>
        xs container with xs horizontal padding
      </Container>

      <Container size="30rem" px={0} bg={color} h={50} mt={20}>
        30rem container with 0 horizontal padding
      </Container>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
