import { IconExclamationCircle } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={<IconExclamationCircle size={20} color="var(--mantine-color-error)" />}
      />
    </>
  );
}

export const error: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
