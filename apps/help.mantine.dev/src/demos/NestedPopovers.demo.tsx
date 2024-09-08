import { Button, Popover, Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const codeWithIssue = `
import { Button, Popover, Select } from '@mantine/core';
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          placeholder="Choose your framework"
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
          ]}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function DemoWithIssue() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
          ]}
          placeholder="Choose your framework"
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export const NestedPopovers: MantineDemo = {
  type: 'code',
  component: DemoWithIssue,
  code: codeWithIssue,
  centered: true,
};

const codeWithoutIssue = `
import { Button, Popover, Select } from '@mantine/core';
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          comboboxProps={{ withinPortal: false }}
          placeholder="Choose your framework"
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
          ]}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function DemoWithoutIssue() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          comboboxProps={{ withinPortal: false }}
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
          ]}
          placeholder="Choose your framework"
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export const NestedPopoversWorking: MantineDemo = {
  type: 'code',
  component: DemoWithoutIssue,
  code: codeWithoutIssue,
  centered: true,
};
