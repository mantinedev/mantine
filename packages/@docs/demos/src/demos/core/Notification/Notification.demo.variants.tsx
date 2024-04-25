import React from 'react';
import { Notification } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <>
      <Notification variant="filled" color="red" title="Did something go wrong?">
        Yes
      </Notification>
      <Notification variant="outline" color="yellow" title="A word of warning" mt="md">
      Something might not be fine
    </Notification>
      <Notification variant="light" color="green" title="Better now!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Notification variant="filled" color="red" title="Did something go wrong?">
        Yes
      </Notification>
      <Notification variant="outline" color="yellow" title="A word of warning" mt="md">
        Something might not be fine
      </Notification>
      <Notification variant="light" color="green" title="Better now!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}

export const variants: MantineDemo = {
  type: 'code',
  component: Demo,
  dimmed: true,
  maxWidth: 400,
  centered: true,
  code,
};
