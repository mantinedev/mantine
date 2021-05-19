import React from 'react';
import { Container, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Container, useMantineTheme } from '@mantine/core';

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
}`;

export function ContainerBaseDemo() {
  const theme = useMantineTheme();
  const color = theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0];

  return (
    <CodeDemo code={code} language="tsx">
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
    </CodeDemo>
  );
}
