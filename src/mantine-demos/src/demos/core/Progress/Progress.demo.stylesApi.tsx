import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Progress } from '@mantine/core';
import { ProgressStylesApi } from '@mantine/styles-api';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl"{{props}}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`;

function Demo(props: any) {
  return (
    <Progress.Root size="xl" {...props}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ProgressStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
