import { Badge, Cascader, CascaderOption, CascaderProps, Group, useMatches } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Badge, Cascader, CascaderOption, CascaderProps, Group, useMatches } from '@mantine/core';
import { data } from './data';

const flags: Record<string, string> = {
  jp: '🇯🇵', kr: '🇰🇷', fr: '🇫🇷', de: '🇩🇪', us: '🇺🇸', ca: '🇨🇦',
};

function countCities(option: CascaderOption): number {
  if (!option.children || option.children.length === 0) {
    return 1;
  }
  return option.children.reduce((acc, child) => acc + countCities(child), 0);
}

// Regions display the number of cities, countries display a flag, cities display nothing extra
const renderCascaderOption: CascaderProps['renderOption'] = (option, level) => (
  <Group gap="xs" justify="space-between" wrap="nowrap" flex="1">
    <Group gap={6} wrap="nowrap">
      {level === 1 && <span>{flags[option.value]}</span>}
      <span>{option.label}</span>
    </Group>
    {level === 0 && (
      <Badge size="xs" variant="light" color="gray">
        {countCities(option)} cities
      </Badge>
    )}
  </Group>
);

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      renderOption={renderCascaderOption}
      data={data}
    />
  );
}
`;

const flags: Record<string, string> = {
  jp: '🇯🇵',
  kr: '🇰🇷',
  fr: '🇫🇷',
  de: '🇩🇪',
  us: '🇺🇸',
  ca: '🇨🇦',
};

function countCities(option: CascaderOption): number {
  if (!option.children || option.children.length === 0) {
    return 1;
  }
  return option.children.reduce((acc, child) => acc + countCities(child), 0);
}

const renderCascaderOption: CascaderProps['renderOption'] = (option, level) => (
  <Group gap="xs" justify="space-between" wrap="nowrap" flex="1">
    <Group gap={6} wrap="nowrap">
      {level === 1 && <span>{flags[option.value]}</span>}
      <span>{option.label}</span>
    </Group>
    {level === 0 && (
      <Badge size="xs" variant="light" color="gray">
        {countCities(option)} cities
      </Badge>
    )}
  </Group>
);

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      label="Location"
      placeholder="Pick location"
      renderOption={renderCascaderOption}
      data={data}
    />
  );
}

export const renderOption: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 360,
  centered: true,
};
