import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { IconAt } from '@tabler/icons-react';
import { Autocomplete, rem } from '@mantine/core';
import { AutocompleteStylesApi } from '@mantine/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { Autocomplete, rem } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <Autocomplete
      {...props}
      dropdownOpened
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      withAsterisk
      label="Autocomplete"
      description="Description"
      placeholder="Autocomplete"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: AutocompleteStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
