import React from 'react';
import { StarIcon } from '@modulz/radix-icons';
import { Avatar, Group } from '@mantine/core';

const code = `
// Default placeholder
<Avatar src={null} alt="no image here" />

// Default placeholder with custom color
<Avatar src={null} alt="no image here" color="indigo" />

// Placeholder with initials
<Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

// Placeholder with custom icon
<Avatar color="blue" radius="xl">
  <StarIcon />
</Avatar>
`;

function Demo() {
  return (
    <Group position="center">
      <Group position="center">
        <Avatar src={null} alt="no image here" />
        <Avatar src={null} alt="no image here" color="indigo" />
        <Avatar src={null} alt="no image here" color="red">
          VR
        </Avatar>
        <Avatar color="blue" radius="xl">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </Group>
    </Group>
  );
}

export const placeholders: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
