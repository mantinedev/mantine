import React from 'react';
import { Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="1rem">H1 heading with 1rem size</Title>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="1rem">H1 heading with 1rem size</Title>
    </>
  );
}

export const size: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
