import React from 'react';
import { IconCheck, IconX } from '@tabler/icons-react';
import { Notification } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { demoBase } from './_demo-base';

const code = `
import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Notification title="Default notification">
        This is default notification with title and body
      </Notification>

      <Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification icon={<IconX size="1.1rem" />} color="red">
        Bummer! Notification without title
      </Notification>

      <Notification
        loading
        title="Uploading data to the server"
        withCloseButton={false}
      >
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Notification title="Default notification" onClose={() => {}}>
        This is default notification with title and body
      </Notification>

      <Notification
        mt="md"
        icon={<IconCheck size="1.1rem" />}
        color="teal"
        title="Teal notification"
        onClose={() => {}}
      >
        This is teal notification with icon
      </Notification>

      <Notification mt="md" icon={<IconX size="1.1rem" />} color="red" onClose={() => {}}>
        Bummer! Notification without title
      </Notification>

      <Notification
        mt="md"
        loading
        title="Uploading data to the server"
        withCloseButton={false}
        onClose={() => {}}
      >
        Please wait until data is uploaded, you cannot close this notification yet
      </Notification>
    </>
  );
}

export const usage: MantineDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};
