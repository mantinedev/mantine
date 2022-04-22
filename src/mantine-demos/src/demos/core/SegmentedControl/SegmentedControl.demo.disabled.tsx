import React from 'react';
import { SegmentedControl, Box, Stack, Text } from '@mantine/core';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Disabled control */}
      <SegmentedControl disabled={true} />

      {/* Disabled options */}
      <SegmentedControl
        data={[
          {
            value: 'preview',
            label: 'Preview',
            disabled: true
          },
          {
            value: 'code',
            label: 'Code'
          },
          {
            value: 'export',
            label: 'Export'
          }
        ]}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Stack align="center">
      <Box>
        <Text size="sm" weight={500} mb={3}>
          Disabled control
        </Text>
        <SegmentedControl
          // disabled={true}
          disabled
          data={[
            {
              value: 'preview',
              label: 'Preview',
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </Box>

      <Box>
        <Text size="sm" weight={500} mb={3}>
          Disabled options
        </Text>
        <SegmentedControl
          data={[
            {
              value: 'preview',
              label: 'Preview',
              disabled: true,
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </Box>
    </Stack>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
