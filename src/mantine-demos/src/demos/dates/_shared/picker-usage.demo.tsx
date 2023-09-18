import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <${name} value={value} onChange={setValue} />;
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<Date | null>(null);
    return <Component value={value} onChange={setValue} />;
  };
}

export function getPickerUsageDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
