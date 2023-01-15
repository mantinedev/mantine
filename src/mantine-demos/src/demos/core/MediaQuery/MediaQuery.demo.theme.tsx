import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MediaQuery, Text, rem } from '@mantine/core';

const code = `
import { MediaQuery, Text } from '@mantine/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${rem(1200)}) and (min-width: ${rem(800)})"
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
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
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
    >
      <Text>
        (max-width: {rem(1200)}) and (min-width: {rem(800)}) breakpoints
      </Text>
    </MediaQuery>
  );
}

export const theme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
