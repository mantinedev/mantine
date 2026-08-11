import { Cascader, CascaderOption } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const cities = Array.from({ length: 30 }, (_, index) => ({
  value: `city-${index + 1}`,
  label: `City ${index + 1}`,
}));

const data: CascaderOption[] = [
  { value: 'asia', label: 'Asia', children: [{ value: 'jp', label: 'Japan', children: cities }] },
  {
    value: 'europe',
    label: 'Europe',
    children: [{ value: 'fr', label: 'France', children: cities }],
  },
];

const code = `
import { Cascader, CascaderOption } from '@mantine/core';

const cities = Array.from({ length: 30 }, (_, index) => ({
  value: \`city-\${index + 1}\`,
  label: \`City \${index + 1}\`,
}));

const data: CascaderOption[] = [
  { value: 'asia', label: 'Asia', children: [{ value: 'jp', label: 'Japan', children: cities }] },
  { value: 'europe', label: 'Europe', children: [{ value: 'fr', label: 'France', children: cities }] },
];

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp']}
      maxDropdownHeight={180}
      data={data}
    />
  );
}
`;

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      defaultValue={['asia', 'jp']}
      maxDropdownHeight={180}
      data={data}
    />
  );
}

export const scrollArea: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
