import React from 'react';
import { useMantineTheme, Container } from '@mantine/core';

const code = `
<Container>
  Default container
</Container>

<Container size="xs" padding="xs">
  xs container with xs horizontal padding
</Container>

<Container size={200} padding={0}>
  200px container with 0 horizontal padding
</Container>
`;

function Demo() {
  const theme = useMantineTheme();
  const color = theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0];

  return (
    <>
      <Container style={{ backgroundColor: color, height: 50 }}>Default container</Container>

      <Container
        size="xs"
        padding="xs"
        style={{ backgroundColor: color, height: 50, marginTop: 20 }}
      >
        xs container with xs horizontal padding
      </Container>

      <Container
        size={200}
        padding={0}
        style={{ backgroundColor: color, height: 50, marginTop: 20 }}
      >
        200px container with 0 horizontal padding
      </Container>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
