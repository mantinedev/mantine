import React from 'react';
import { Image, Group, Text } from '@mantine/core';

const code = `
<Image
  width={200}
  height={120}
  src={null}
  alt="Without placeholder"
/>

<Image
  width={200}
  height={120}
  src={null}
  alt="With default placeholder"
  withPlaceholder
/>

<Image
  height={120}
  width={200}
  src="42.png"
  alt="With custom placeholder"
  withPlaceholder
  placeholder={<Text align="center">This image contained the meaning of life</Text>}
/>
`;

function Demo() {
  return (
    <Group position="center">
      <Image width={200} height={120} src={null} alt="Without placeholder" />

      <Image width={200} height={120} src={null} alt="With default placeholder" withPlaceholder />

      <Image
        height={120}
        width={200}
        src="42.png"
        alt="With custom placeholder"
        withPlaceholder
        placeholder={<Text align="center">This image contained the meaning of life</Text>}
      />
    </Group>
  );
}

export const placeholders: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
