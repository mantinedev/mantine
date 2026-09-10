import { CheckIcon } from '@phosphor-icons/react';
import { Notification, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CheckIcon } from '@phosphor-icons/react';
import { Notification, Stack } from '@mantine/core';

function Demo() {
  const icon = <CheckIcon />;

  return (
    <Stack>
      <Notification variant="filled" icon={icon} color="teal" title="Changes saved">
        Your profile was updated
      </Notification>
      <Notification variant="light" icon={icon} color="teal" title="Changes saved">
        Your profile was updated
      </Notification>
      <Notification variant="transparent" icon={icon} color="teal" title="Changes saved">
        Your profile was updated
      </Notification>
    </Stack>
  );
}
`;

function Demo() {
  const icon = <CheckIcon />;

  return (
    <Stack>
      <Notification variant="filled" icon={icon} color="teal" title="Changes saved">
        Your profile was updated
      </Notification>
      <Notification variant="light" icon={icon} color="teal" title="Changes saved">
        Your profile was updated
      </Notification>
      <Notification variant="transparent" icon={icon} color="teal" title="Changes saved">
        Your profile was updated
      </Notification>
    </Stack>
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
