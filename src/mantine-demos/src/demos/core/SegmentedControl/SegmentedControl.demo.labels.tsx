import React from 'react';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Center, SegmentedControl, Box, Group } from '@mantine/core';

const code = `
import { Center, SegmentedControl, Box } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <IconEye size="1rem" />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <IconCode size="1rem" />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <IconExternalLink size="1rem" />
              <Box ml={10}>Export</Box>
            </Center>
          ),
        },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <SegmentedControl
        data={[
          {
            value: 'preview',
            label: (
              <Center>
                <IconEye size="1rem" />
                <Box ml={10}>Preview</Box>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center>
                <IconCode size="1rem" />
                <Box ml={10}>Code</Box>
              </Center>
            ),
          },
          {
            value: 'export',
            label: (
              <Center>
                <IconExternalLink size="1rem" />
                <Box ml={10}>Export</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}

export const labels: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
