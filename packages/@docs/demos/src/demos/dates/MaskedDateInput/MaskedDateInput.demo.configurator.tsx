import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { MaskedDateInput } from '@mantine/dates';


function Demo() {
  return (
    <MaskedDateInput
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return <MaskedDateInput {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
