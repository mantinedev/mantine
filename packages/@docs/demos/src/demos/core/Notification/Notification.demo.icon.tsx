import { CheckIcon, XIcon } from '@phosphor-icons/react';
import { Notification } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { XIcon, CheckIcon } from '@phosphor-icons/react';
import { Notification } from '@mantine/core';

function Demo() {
  const xIcon = <XIcon size={20} />;
  const checkIcon = <CheckIcon size={20} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
`;

function Demo() {
  const xIcon = <XIcon size={20} />;
  const checkIcon = <CheckIcon size={20} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  dimmed: true,
  maxWidth: 400,
  centered: true,
  code,
};
