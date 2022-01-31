import React from 'react';
import { useMantineTheme, MediaQuery, Group, Box } from '@mantine/core';

const code = `
import { Group, Box, MediaQuery, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const highlight = {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.blue[7], 0.25)
        : theme.colors.blue[0],
    border: \`1px solid \${
      theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[3]
    }\`,
  };

  const boxStyles = {
    borderRadius: 3,
    padding: '3px 5px',
    border: '1px solid transparent',
  };

  return (
    <Group direction="column" spacing={5}>
      <MediaQuery largerThan="lg" styles={highlight}>
        <Box sx={boxStyles}>- larger than lg</Box>
      </MediaQuery>
      <MediaQuery smallerThan="lg" styles={highlight}>
        <Box sx={boxStyles}>- Smaller than lg</Box>
      </MediaQuery>
      <MediaQuery smallerThan="xl" largerThan="sm" styles={highlight}>
        <Box sx={boxStyles}>- Smaller than xl, larger than sm</Box>
      </MediaQuery>
      <MediaQuery smallerThan={1500} largerThan={800} styles={highlight}>
        <Box sx={boxStyles}>- Smaller than 1500px, larger than 800px</Box>
      </MediaQuery>
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const highlight = {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.blue[7], 0.25)
        : theme.colors.blue[0],
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[3]
    }`,
  };

  const boxStyles = {
    borderRadius: 3,
    padding: '3px 5px',
    border: '1px solid transparent',
  };

  return (
    <Group direction="column" spacing={5}>
      <MediaQuery largerThan="lg" styles={highlight}>
        <Box sx={boxStyles}>- larger than lg</Box>
      </MediaQuery>
      <MediaQuery smallerThan="lg" styles={highlight}>
        <Box sx={boxStyles}>- Smaller than lg</Box>
      </MediaQuery>
      <MediaQuery smallerThan="xl" largerThan="sm" styles={highlight}>
        <Box sx={boxStyles}>- Smaller than xl, larger than sm</Box>
      </MediaQuery>
      <MediaQuery smallerThan={1500} largerThan={800} styles={highlight}>
        <Box sx={boxStyles}>- Smaller than 1500px, larger than 800px</Box>
      </MediaQuery>
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
