import { Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { StatStylesApi } from '@docs/styles-api';

const code = `
import { Stat } from '@mantine/core';

function Demo() {
  return (
    <Stat
      label="Active users"
      value={92410}
      thousandSeparator
      prefix="$"
      diff={12.4}{{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Stat label="Active users" value={92410} thousandSeparator prefix="$" diff={12.4} {...props} />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: StatStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 260,
};
