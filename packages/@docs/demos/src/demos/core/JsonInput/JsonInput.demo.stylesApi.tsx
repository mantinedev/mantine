import { IconAt } from '@tabler/icons-react';
import { JsonInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { JsonInputStylesApi } from '@docs/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: JsonInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
