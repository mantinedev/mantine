import { useState } from 'react';
import { InlineDateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { InlineDateTimePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);

  return (
    <InlineDateTimePicker
      type="range"
      value={value}
      onChange={setValue}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);

  return <InlineDateTimePicker type="range" value={value} onChange={setValue} />;
}

export const rangeControlled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 280,
  component: Demo,
  code,
};
