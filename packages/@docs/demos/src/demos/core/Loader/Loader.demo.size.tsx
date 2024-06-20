import { Loader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`;

function Wrapper(props: any) {
  return <Loader {...props} />;
}

export const size: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  minHeight: 70,
  controls: [
    { type: 'number', prop: 'size', initialValue: 30, min: 10, max: 50, libraryValue: '__none__' },
  ],
};
