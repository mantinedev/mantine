import { IconAt } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { NumberInputStylesApi } from '@docs/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: NumberInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
