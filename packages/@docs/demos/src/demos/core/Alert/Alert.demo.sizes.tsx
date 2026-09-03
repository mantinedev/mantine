import { InfoIcon } from '@phosphor-icons/react';
import { Alert, MantineSize, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { InfoIcon } from '@phosphor-icons/react';
import { Alert, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Alert size="xs" icon={<InfoIcon />} title="Payment method expires soon" withCloseButton closeButtonLabel="Dismiss">
        The card ending in 4242 expires on 30 September.
      </Alert>
      <Alert size="sm" icon={<InfoIcon />} title="Payment method expires soon" withCloseButton closeButtonLabel="Dismiss">
        The card ending in 4242 expires on 30 September.
      </Alert>
      <Alert size="md" icon={<InfoIcon />} title="Payment method expires soon" withCloseButton closeButtonLabel="Dismiss">
        The card ending in 4242 expires on 30 September.
      </Alert>
      <Alert size="lg" icon={<InfoIcon />} title="Payment method expires soon" withCloseButton closeButtonLabel="Dismiss">
        The card ending in 4242 expires on 30 September.
      </Alert>
      <Alert size="xl" icon={<InfoIcon />} title="Payment method expires soon" withCloseButton closeButtonLabel="Dismiss">
        The card ending in 4242 expires on 30 September.
      </Alert>
    </Stack>
  );
}
`;

const sizeKeys: MantineSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

function Demo() {
  return (
    <Stack>
      {sizeKeys.map((size) => (
        <Alert
          key={size}
          size={size}
          icon={<InfoIcon />}
          title="Payment method expires soon"
          withCloseButton
          closeButtonLabel="Dismiss"
        >
          The card ending in 4242 expires on 30 September.
        </Alert>
      ))}
    </Stack>
  );
}

export const sizes: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 440,
};
