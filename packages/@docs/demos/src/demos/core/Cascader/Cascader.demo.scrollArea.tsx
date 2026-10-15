import { Cascader, CascaderOption } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function getCities(country: string) {
  return Array.from({ length: 30 }, (_, index) => ({
    value: `${country}-city-${index + 1}`,
    label: `City ${index + 1}`,
  }));
}

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [{ value: 'jp', label: 'Japan', children: getCities('jp') }],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [{ value: 'fr', label: 'France', children: getCities('fr') }],
  },
];

const code = `
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'jp-city-3']}
      maxDropdownHeight={180}
      scrollAreaProps={{ type: 'always' }}
      data={data}
    />
  );
}
`;

const dataCode = `
import { CascaderOption } from '@mantine/core';

function getCities(country: string) {
  return Array.from({ length: 30 }, (_, index) => ({
    value: \`\${country}-city-\${index + 1}\`,
    label: \`City \${index + 1}\`,
  }));
}

export const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [{ value: 'jp', label: 'Japan', children: getCities('jp') }],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [{ value: 'fr', label: 'France', children: getCities('fr') }],
  },
];
`;

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp', 'jp-city-3']}
      maxDropdownHeight={180}
      scrollAreaProps={{ type: 'always' }}
      data={data}
    />
  );
}

export const scrollArea: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
