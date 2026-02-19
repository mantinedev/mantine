import { AtIcon } from '@phosphor-icons/react';
import { FileInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { FileInputStylesApi } from '@docs/styles-api';

const code = `
import { AtIcon } from '@phosphor-icons/react';
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<AtIcon size={18} />}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<AtIcon size={18} />}
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: FileInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
