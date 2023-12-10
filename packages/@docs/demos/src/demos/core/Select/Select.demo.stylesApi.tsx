import React from 'react';
import { IconAt } from '@tabler/icons-react';
import { rem, Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { SelectStylesApi } from '@docs/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { Select, rem } from '@mantine/core';

function Demo() {
  return (
    <Select
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Select"
      description="Description"
      error="Error"
      placeholder="Select"
      data={['React', 'Angular']}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Select
      {...props}
      dropdownOpened
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      withAsterisk
      label="Select"
      description="Description"
      placeholder="Select"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: SelectStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
