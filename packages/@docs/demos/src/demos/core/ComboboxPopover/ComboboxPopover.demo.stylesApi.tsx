import { Button, ComboboxPopover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ComboboxStylesApi } from '@docs/styles-api';

const code = `
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      dropdownOpened
      data={[
        { group: 'First group', items: ['First', 'Second'] },
        { group: 'Second group', items: ['Third', 'Fourth'] },
      ]}
      {{props}}
    >
      <ComboboxPopover.Target>
        <Button variant="default">Select value</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`;

function Demo(props: any) {
  return (
    <ComboboxPopover
      dropdownOpened
      data={[
        { group: 'First group', items: ['First', 'Second'] },
        { group: 'Second group', items: ['Third', 'Fourth'] },
      ]}
      {...props}
      comboboxProps={{ middlewares: { flip: false, shift: false } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default">Select value</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ComboboxStylesApi,
  component: Demo,
  code,
};
