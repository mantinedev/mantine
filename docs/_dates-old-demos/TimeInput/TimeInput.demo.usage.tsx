import React from 'react';
import { Container } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { TimeInput } from '@mantine/dates-old';

const code = `
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput label="What time is it now?" />;
}
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" />
    </Container>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
