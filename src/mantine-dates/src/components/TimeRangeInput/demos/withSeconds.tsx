import React from 'react';
import { Container } from '@mantine/core';
import { TimeRangeInput } from '../TimeRangeInput';

const code = `
<TimeRangeInput withSeconds />
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeRangeInput
        label="Appointment time"
        withSeconds
        value={[new Date(), new Date(new Date().valueOf() + 1000)]}
      />
    </Container>
  );
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
