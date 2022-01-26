import React from 'react';
import { EyeOpenIcon, CodeIcon, ExternalLinkIcon } from '@modulz/radix-icons';
import { Group } from '../../Group/Group';
import { Box } from '../../Box/Box';
import { Center } from '../../Center/Center';
import { SegmentedControl } from '../SegmentedControl';

const code = `
import { Center, SegmentedControl, Box } from '@mantine/core';
import { EyeOpenIcon, CodeIcon, ExternalLinkIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center>
              <EyeOpenIcon />
              <Box ml={10}>Preview</Box>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <CodeIcon />
              <Box ml={10}>Code</Box>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <ExternalLinkIcon />
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
                <EyeOpenIcon />
                <Box ml={10}>Preview</Box>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center>
                <CodeIcon />
                <Box ml={10}>Code</Box>
              </Center>
            ),
          },
          {
            value: 'export',
            label: (
              <Center>
                <ExternalLinkIcon />
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
