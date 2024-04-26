import { Image } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`;

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}

export const fallback: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
