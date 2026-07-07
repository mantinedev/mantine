import { Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return <Stat label="Active users" value={92410} thousandSeparator diff={12.4} {...props} />;
}

const code = `
import { Stat } from '@mantine/core';

function Demo() {
  return (
    <Stat
      label="Active users"
      value={92_410}
      thousandSeparator
      diff={12.4}{{props}}
    />
  );
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 260,
  controls: [
    { prop: 'size', type: 'size', libraryValue: 'md', initialValue: 'md' },
    { prop: 'diff', type: 'number', initialValue: 12.4, libraryValue: '__', min: -100, max: 100 },
    { prop: 'withDiffIcon', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'animate', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'loading', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
