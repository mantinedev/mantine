import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';

const getCodeTemplate = (component: string) => (props: string) =>
  `import { ${component} } from '@mantine/dates';

function Demo() {
  return <${component} defaultValue={new Date()}${props} />
}
`;

function getDemo(Component: React.FC<any>) {
  return (props: any) => (
    <Group position="center">
      <Component defaultValue={new Date()} {...props} />
    </Group>
  );
}

export function getPickerSizeConfiguratorDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'configurator',
    codeTemplate: getCodeTemplate(Component.displayName.replace('@mantine/dates/', '')),
    configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
    component: getDemo(Component),
  };
}
