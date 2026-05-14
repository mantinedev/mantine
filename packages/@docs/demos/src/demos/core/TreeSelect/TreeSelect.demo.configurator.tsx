import { TreeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';
import { data } from './data';

const code = `
import { TreeSelect } from '@mantine/core';
import { data } from './data';


function Demo() {
  return (
    <TreeSelect
      {{props}}
      placeholder="Pick value"
      data={data}
    />
  );
}
`;

function Wrapper(props: any) {
  return <TreeSelect {...props} placeholder="Pick value" data={data} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
