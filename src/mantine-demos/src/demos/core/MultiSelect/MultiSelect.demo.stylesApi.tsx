import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { IconAt } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';
import { MultiSelectStylesApi } from '@mantine/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <MultiSelect
      {...props}
      dropdownOpened
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      withAsterisk
      label="MultiSelect"
      description="Description"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: MultiSelectStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
