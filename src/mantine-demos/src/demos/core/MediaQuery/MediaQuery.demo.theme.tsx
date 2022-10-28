import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MediaQuery, Text } from '@mantine/core';

const code = `
import { MediaQuery, Text } from '@mantine/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: 1200px) and (min-width: 800px)"
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
    >
      <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
    </MediaQuery>
  );
}
`;

function Demo() {
  return (
    <MediaQuery
      query="(max-width: 1200px) and (min-width: 800px)"
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
    >
      <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
    </MediaQuery>
  );
}

export const theme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
