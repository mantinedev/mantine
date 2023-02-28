import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text } from '@mantine/core';

const code = `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text fz="xs">Extra small text</Text>
      <Text fz="sm">Small text</Text>
      <Text fz="md">Default text</Text>
      <Text fz="lg">Large text</Text>
      <Text fz="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text fz="xs">Extra small text</Text>
      <Text fz="sm">Small text</Text>
      <Text fz="md">Default text</Text>
      <Text fz="lg">Large text</Text>
      <Text fz="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
