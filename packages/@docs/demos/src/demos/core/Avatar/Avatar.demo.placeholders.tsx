import { StarIcon } from '@phosphor-icons/react';
import { Avatar, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar } from '@mantine/core';
import { StarIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <StarIcon size={20} />
      </Avatar>
    </>
  );
}

`;

function Demo() {
  return (
    <Group justify="center">
      <Avatar src={null} alt="no image here" />
      <Avatar src={null} alt="no image here" color="indigo" />
      <Avatar src={null} alt="no image here" color="red">
        VR
      </Avatar>
      <Avatar color="blue" radius="xl">
        <StarIcon size={20} />
      </Avatar>
    </Group>
  );
}

export const placeholders: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
