import { Avatar } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { avatars } from './_mockdata';

const code = `
import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group max={2} total={12}>
      <Avatar src="image-1.png" />
      <Avatar src="image-2.png" />
      <Avatar src="image-3.png" />
    </Avatar.Group>
  );
}
`;

function Demo() {
  return (
    <Avatar.Group max={2} total={12}>
      {avatars.map((avatar) => (
        <Avatar src={avatar} key={avatar} />
      ))}
    </Avatar.Group>
  );
}

export const groupMax: MantineDemo = {
  type: 'code',
  centered: true,
  code,
  component: Demo,
};
