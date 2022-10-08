import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Title } from '@mantine/core';

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} weight={100} align="center">
        H3 heading aligned to center with 100 font-weight
      </Title>
      <Title order={4} underline color="blue.5">
        Underlined h4 heading with blue color
      </Title>
      <Title order={5} color="dimmed" italic>
        Italic dimmed h5 heading
      </Title>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Title order={3} weight={100} align="center">
        H3 heading aligned to center with 100 font-weight
      </Title>
      <Title order={4} underline color="blue.5">
        Underlined h4 heading with blue color
      </Title>
      <Title order={5} color="dimmed" italic>
        Italic dimmed h5 heading
      </Title>
    </>
  );
}

export const textProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
