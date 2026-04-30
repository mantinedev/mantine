import { MaskInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { MaskInput } from '@mantine/core';


function Demo() {
  return (
    <MaskInput
      {{props}}
      mask="(999) 999-9999"
      placeholder="(___) ___-____"
    />
  );
}
`;

function Wrapper(props: any) {
  return <MaskInput {...props} mask="(999) 999-9999" placeholder="(___) ___-____" />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
