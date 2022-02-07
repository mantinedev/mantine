import React from 'react';
import { Container } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput label="What time is it now?" />
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
