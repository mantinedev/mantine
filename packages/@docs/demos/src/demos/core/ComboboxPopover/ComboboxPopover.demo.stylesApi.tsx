import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ComboboxPopoverStylesApi } from '@docs/styles-api';

const code = `
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
     {{props}}
      searchable
      dropdownOpened
      nothingFoundMessage="Nothing found..."
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node.js', 'Django'] },
      ]}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select technology</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`;

function Demo(props: any) {
  return (
    <ComboboxPopover
      {...props}
      searchable
      dropdownOpened
      nothingFoundMessage="Nothing found..."
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node.js', 'Django'] },
      ]}
      comboboxProps={{ middlewares: { flip: false, shift: false } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          Select technology
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ComboboxPopoverStylesApi,
  component: Demo,
  code,
  centered: true,
};
