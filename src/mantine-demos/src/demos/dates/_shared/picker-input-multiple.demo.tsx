import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${name}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date[]>([]);
    return (
      <Component
        type="multiple"
        label="Pick dates"
        placeholder="Pick dates"
        value={value}
        onChange={setValue}
        mx="auto"
        maw={400}
      />
    );
  };
}

export function getPickerInputMultipleDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
