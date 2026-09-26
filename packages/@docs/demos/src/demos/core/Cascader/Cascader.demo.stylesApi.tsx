import { Cascader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { CascaderStylesApi } from '@docs/styles-api';
import { data } from './data';

const code = `
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      {{props}}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Cascader
      {...props}
      defaultValue={['asia', 'jp']}
      defaultDropdownOpened
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ withinPortal: false }}
      data={data}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: CascaderStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
