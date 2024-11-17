import { Kbd } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Kbd } from '@mantine/core';

function Demo() {
  return <Kbd{{props}}>Shift</Kbd>;
}
`;

function Wrapper(props: any) {
  return <Kbd {...props}>Shift</Kbd>;
}

export const size: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' }],
};
