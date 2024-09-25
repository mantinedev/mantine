import { TimeInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { TimeInput } from '@mantine/dates';


function Demo() {
  return (
    <TimeInput
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return <TimeInput {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
