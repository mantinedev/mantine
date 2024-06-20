import { Input } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { InputWrapperStylesApi } from '@docs/styles-api';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`;

function Demo(props: any) {
  return (
    <Input.Wrapper
      label="Input label"
      description="Input description"
      error="Input error"
      withAsterisk
      {...props}
    >
      <Input placeholder="Input" />
    </Input.Wrapper>
  );
}

export const wrapperStylesApi: MantineDemo = {
  type: 'styles-api',
  data: InputWrapperStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
