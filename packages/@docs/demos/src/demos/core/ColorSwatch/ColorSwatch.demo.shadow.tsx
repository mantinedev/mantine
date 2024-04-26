import { ColorSwatch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
`;

function Wrapper(props: any) {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)" {...props} />;
}

export const shadow: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'boolean', prop: 'withShadow', initialValue: true, libraryValue: true }],
};
