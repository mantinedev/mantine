import { IconAt } from '@tabler/icons-react';
import { Autocomplete } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { AutocompleteStylesApi } from '@docs/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt size={18} stroke={1.5} />}
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
      leftSection={<IconAt size={18} stroke={1.5} />}
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

const data = { ...AutocompleteStylesApi };
delete (data as any).selectors.empty;

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
