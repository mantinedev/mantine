import React from 'react';
import { EyeOpenIcon, CodeIcon, ExternalLinkIcon } from '@modulz/radix-icons';
import { Group } from '../../Group/Group';
import { Center } from '../../Center/Center';
import { SegmentedControl } from '../SegmentedControl';

const code = `
import { Center, SegmentedControl } from '@mantine/core';
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
              <div style={{ marginLeft: 10 }}>Preview</div>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center>
              <CodeIcon />
              <div style={{ marginLeft: 10 }}>Code</div>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center>
              <ExternalLinkIcon />
              <div style={{ marginLeft: 10 }}>Export</div>
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
                <div style={{ marginLeft: 10 }}>Preview</div>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center>
                <CodeIcon />
                <div style={{ marginLeft: 10 }}>Code</div>
              </Center>
            ),
          },
          {
            value: 'export',
            label: (
              <Center>
                <ExternalLinkIcon />
                <div style={{ marginLeft: 10 }}>Export</div>
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
