import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Container } from '@mantine/core';

const code = `
import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container>
    </>
  );
}
`;

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps} mt={0}>
        Default Container
      </Container>
      <Container size="xs" {...demoProps}>
        xs Container
      </Container>
      <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
