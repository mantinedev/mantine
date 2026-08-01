import { Button, Cascader, Popover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Button, Cascader, Popover } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Popover width={320} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Cascader
          withColumns={false}
          label="Location"
          placeholder="Pick location"
          comboboxProps={{ withinPortal: false }}
          data={data}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={320} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Cascader
          withColumns={false}
          label="Location"
          placeholder="Pick location"
          comboboxProps={{ withinPortal: false }}
          data={data}
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export const withinPopover: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  centered: true,
};
