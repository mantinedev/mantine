import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MediaQuery, Text, rem } from '@mantine/core';

const code = `
import { MediaQuery, Text } from '@mantine/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${rem(1200)}) and (min-width: ${rem(800)})"
      styles={{ fontSize: rem(20), '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>(max-width: ${rem(1200)}) and (min-width: ${rem(800)}) breakpoints</Text>
    </MediaQuery>
  );
}
`;

function Demo() {
  return (
    <MediaQuery
      query={`(max-width: ${rem(1200)}) and (min-width: ${rem(800)})`}
      styles={{ fontSize: rem(20), '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>
        (max-width: {rem(1200)}) and (min-width: {rem(800)}) breakpoints
      </Text>
    </MediaQuery>
  );
}

export const query: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
