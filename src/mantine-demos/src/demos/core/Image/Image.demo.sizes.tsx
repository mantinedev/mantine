import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Image, Group } from '@mantine/core';

const image =
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80';

const code = `
import { Image } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* By default image will have object-fit: cover */}
      <Image width={200} height={80} src="./image.png" />

      {/* Set fit="contain" to preserve image proportions in this case image wrapper will still have given width and height */}
      <Image width={200} height={80} fit="contain" src="./image.png" />

      {/* It's not necessary to use both width and height */}
      <Image height={80} src="./image.png" />
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Image width={200} height={80} src={image} />
      <Image width={200} height={80} fit="contain" src={image} />
      <Image height={80} src={image} />
    </Group>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
