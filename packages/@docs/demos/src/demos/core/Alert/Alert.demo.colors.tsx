import { CheckCircleIcon, InfoIcon, WarningIcon, XCircleIcon } from '@phosphor-icons/react';
import { Alert, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CheckCircleIcon, InfoIcon, WarningIcon, XCircleIcon } from '@phosphor-icons/react';
import { Alert, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Alert
        color="blue"
        icon={<InfoIcon />}
        title="Payment method expires soon"
        withCloseButton
        closeButtonLabel="Dismiss"
      >
        The card ending in 4242 expires on 30 September. Update it to keep your subscription
        active.
      </Alert>

      <Alert color="teal" icon={<CheckCircleIcon />} title="Changes saved">
        Your notification preferences were updated.
      </Alert>

      <Alert color="yellow" icon={<WarningIcon />} title="Storage almost full">
        You have used 92% of your 50 GB plan. Delete files or upgrade to keep uploading.
      </Alert>

      <Alert color="red" icon={<XCircleIcon />} title="Build failed">
        Two required environment variables are missing: DATABASE_URL and SESSION_SECRET.
      </Alert>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Alert
        color="blue"
        icon={<InfoIcon />}
        title="Payment method expires soon"
        withCloseButton
        closeButtonLabel="Dismiss"
      >
        The card ending in 4242 expires on 30 September. Update it to keep your subscription active.
      </Alert>

      <Alert color="teal" icon={<CheckCircleIcon />} title="Changes saved">
        Your notification preferences were updated.
      </Alert>

      <Alert color="yellow" icon={<WarningIcon />} title="Storage almost full">
        You have used 92% of your 50 GB plan. Delete files or upgrade to keep uploading.
      </Alert>

      <Alert color="red" icon={<XCircleIcon />} title="Build failed">
        Two required environment variables are missing: DATABASE_URL and SESSION_SECRET.
      </Alert>
    </Stack>
  );
}

export const colors: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 440,
};
