import React from 'react';
import { Container } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput label="What time is it now?" withSeconds />
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" withSeconds defaultValue={new Date()} />
    </Container>
  );
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
