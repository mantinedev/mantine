import { AtIcon } from '@phosphor-icons/react';
import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { MultiSelectStylesApi } from '@docs/styles-api';

const code = `
import { AtIcon } from '@phosphor-icons/react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<AtIcon size={18} />}
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
      leftSection={<AtIcon size={18} />}
      withAsterisk
      label="MultiSelect"
      description="Description"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      comboboxProps={{ hideDetached: false }}
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
