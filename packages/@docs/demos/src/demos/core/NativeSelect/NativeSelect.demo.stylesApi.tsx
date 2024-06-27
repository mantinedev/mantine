import { NativeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { NativeSelectStylesApi } from '@docs/styles-api';

const code = `
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`;

function Demo(props: any) {
  return (
    <NativeSelect
      {...props}
      data={['React', 'Angular']}
      label="NativeSelect label"
      description="NativeSelect description"
      error="NativeSelect error"
      withAsterisk
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: NativeSelectStylesApi,
  component: Demo,
  centered: true,
  maxWidth: 340,
  code,
};
