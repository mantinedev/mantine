import React from 'react';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';
import { Notification } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Notification } from '@mantine/core';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';

export function NotificationDemo() {
  return (
    <>
      <Notification title="Default notification">
        This is default notification with title and body
      </Notification>

      <Notification icon={<CheckIcon />} color="teal" title="Teal notification">
        This is teal notification with icon
      </Notification>

      <Notification icon={<Cross1Icon />} color="red">
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
}`;

export function NotificationBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx" demoBackground={DEFAULT_THEME.colors.gray[0]}>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <Notification onClose={() => {}} title="Default notification">
          This is default notification with title and body
        </Notification>

        <Notification
          style={{ marginTop: DEFAULT_THEME.spacing.md }}
          onClose={() => {}}
          icon={<CheckIcon />}
          color="teal"
          title="Teal notification"
        >
          This is teal notification with icon
        </Notification>

        <Notification
          style={{ marginTop: DEFAULT_THEME.spacing.md }}
          onClose={() => {}}
          icon={<Cross1Icon />}
          color="red"
        >
          Bummer! Notification without title
        </Notification>

        <Notification
          style={{ marginTop: DEFAULT_THEME.spacing.md }}
          onClose={() => {}}
          loading
          title="Uploading data to the server"
          disallowClose
        >
          Please wait until data is uploaded, you cannot close this notification yet
        </Notification>
      </div>
    </CodeDemo>
  );
}
