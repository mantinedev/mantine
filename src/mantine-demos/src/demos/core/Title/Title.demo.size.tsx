import React from 'react';
import { Title } from '@mantine/core';

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size={12}>H1 heading with 12px size</Title>
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
      <Title size={12}>H1 heading with 12px size</Title>
    </>
  );
}

export const size: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
