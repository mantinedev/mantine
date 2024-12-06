import { IconAt } from '@tabler/icons-react';
import { TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { TagsInputStylesApi } from '@docs/styles-api';

const code = `
import { IconAt } from '@tabler/icons-react';
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
     {{props}}
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="TagsInput"
      description="Description"
      error="Error"
      placeholder="TagsInput"
      defaultValue={['First', 'Second']}
      data={['React', 'Angular']}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <TagsInput
      {...props}
      dropdownOpened
      leftSection={<IconAt size={18} stroke={1.5} />}
      withAsterisk
      label="TagsInput"
      description="Description"
      placeholder="TagsInput"
      defaultValue={['First', 'Second']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: TagsInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
