import { Cascader, useMatches } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';
import { data } from './data';

const code = `
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      {{props}}
      withColumns={withColumns}
      placeholder="Pick location"
      data={data}
    />
  );
}
`;

function Wrapper(props: any) {
  const withColumns = useMatches({ base: false, sm: true });
  return <Cascader {...props} withColumns={withColumns} placeholder="Pick location" data={data} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
