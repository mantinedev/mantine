import { Checkbox } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { CheckboxStylesApi } from '@docs/styles-api';

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: CheckboxStylesApi,
  component: Demo,
  code,
  centered: true,
};
