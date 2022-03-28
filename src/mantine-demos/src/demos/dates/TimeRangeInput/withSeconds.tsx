import dayjs from 'dayjs';
import React from 'react';
import { Container } from '@mantine/core';
import { TimeRangeInput } from '@mantine/dates';

const code = `
import dayjs from 'dayjs';
import { TimeRangeInput } from '@mantine/dates';

function Demo() {
  return (
    <TimeRangeInput
      label="Appointment time"
      withSeconds
      defaultValue={[new Date(), dayjs(new Date()).add(30, 'minutes').toDate()]}
    />
  );
}
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeRangeInput
        label="Appointment time"
        withSeconds
        defaultValue={[new Date(), dayjs(new Date()).add(30, 'minutes').toDate()]}
      />
    </Container>
  );
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
