import { Input } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { inputOnlyControls } from '../../../shared';

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`;

function Wrapper(props: any) {
  return <Input placeholder="Input component" {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputOnlyControls,
};
