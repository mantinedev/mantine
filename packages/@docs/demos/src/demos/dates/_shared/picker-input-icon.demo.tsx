import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <${name}
      leftSection={<IconCalendar size={18} stroke={1.5} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Component
        leftSection={<IconCalendar size={18} stroke={1.5} />}
        leftSectionPointerEvents="none"
        label="Pick date"
        placeholder="Pick date"
        value={value}
        onChange={setValue}
      />
    );
  };
}

export function getPickerInputIconDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
