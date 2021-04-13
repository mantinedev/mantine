import React from 'react';
import { Container } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { useMantineTheme } from '@mantine/theme';
import { Container } from '@mantine/core';

export function ContainerDemo() {
  const theme = useMantineTheme();
  
  return (
    <>
      <Container style={{ backgroundColor: theme.colors.gray[0], height: 50 }}>
        Default container
      </Container>

      <Container
        size="xs"
        padding="xs"
        style={{ backgroundColor: theme.colors.red[0], height: 50, marginTop: 20 }}
      >
        xs container with xs horizontal padding
      </Container>

      <Container
        size={200}
        padding={0}
        style={{ backgroundColor: theme.colors.blue[0], height: 50, marginTop: 20 }}
      >
        200px container with 0 horizontal padding
      </Container>
    </>
  );
}`;

export function ContainerBaseDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <Container style={{ backgroundColor: theme.colors.gray[0], height: 50 }}>
        Default container
      </Container>

      <Container
        size="xs"
        padding="xs"
        style={{ backgroundColor: theme.colors.red[0], height: 50, marginTop: 20 }}
      >
        xs container with xs horizontal padding
      </Container>

      <Container
        size={200}
        padding={0}
        style={{ backgroundColor: theme.colors.blue[0], height: 50, marginTop: 20 }}
      >
        200px container with 0 horizontal padding
      </Container>
    </CodeDemo>
  );
}
