import { Cascader, CascaderOption, useMatches } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Cascader, CascaderOption, useMatches } from '@mantine/core';

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      { value: 'jp', label: 'Japan', children: [{ value: 'tokyo', label: 'Tokyo' }] },
      { value: 'kr', label: 'South Korea', disabled: true },
    ],
  },
  { value: 'antarctica', label: 'Antarctica', disabled: true },
];

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`;

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      { value: 'jp', label: 'Japan', children: [{ value: 'tokyo', label: 'Tokyo' }] },
      { value: 'kr', label: 'South Korea', disabled: true },
    ],
  },
  { value: 'antarctica', label: 'Antarctica', disabled: true },
];

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader withColumns={withColumns} label="Location" placeholder="Pick location" data={data} />
  );
}

export const disabledOptions: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
