import React from 'react';
import { Check, X } from 'tabler-icons-react';
import { Notification } from '@mantine/core';
import { demoBase } from './_demo-base';

const code = `
import { Notification } from '@mantine/core';
import { Check, X } from 'tabler-icons-react';

function Demo() {
  return (
    <>
      <Notification title="Default notification">
        This is default notification with title and body
      </Notification>

      <Notification icon={<Check size={18} />} color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification icon={<X size={18} />} color="red">
        Bummer! Notification without title
      </Notification>

      <Notification
        loading
        title="Uploading data to the server"
        disallowClose
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
        style={{ marginTop: 15 }}
        icon={<Check size={18} />}
        color="teal"
        title="Teal notification"
        onClose={() => {}}
      >
        This is teal notification with icon
      </Notification>

      <Notification style={{ marginTop: 15 }} icon={<X size={18} />} color="red" onClose={() => {}}>
        Bummer! Notification without title
      </Notification>

      <Notification
        style={{ marginTop: 15 }}
        loading
        title="Uploading data to the server"
        disallowClose
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
