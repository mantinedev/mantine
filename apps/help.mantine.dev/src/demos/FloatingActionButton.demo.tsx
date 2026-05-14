import { PhoneIcon } from '@phosphor-icons/react';
import { ActionIcon, Affix, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PhoneIcon } from '@phosphor-icons/react';
import { ActionIcon, Affix, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>Floating action button is at the bottom of the screen</Text>
      <Affix position={{ bottom: 40, right: 40 }}>
        <ActionIcon color="blue" radius="xl" size={60}>
          <PhoneIcon size={30} />
        </ActionIcon>
      </Affix>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text>Floating action button is at the bottom of the screen</Text>
      <Affix position={{ bottom: 40, right: 40 }}>
        <ActionIcon color="blue" radius="xl" size={60}>
          <PhoneIcon size={30} />
        </ActionIcon>
      </Affix>
    </>
  );
}

export const FloatingActionButtonDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
