import { Input } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { inputWrapperOnlyControls } from '../../../shared';

const code = `
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Input.Wrapper {...props}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}

export const wrapper: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 440,
  controls: inputWrapperOnlyControls,
};
