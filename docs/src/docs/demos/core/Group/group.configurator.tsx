import React from 'react';
import { Button, Group } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function GroupWrapper(props: React.ComponentPropsWithoutRef<typeof Group>) {
  return (
    <Group {...props}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `<Group${props}>
  <Button variant="outline">1</Button>
  <Button variant="outline">2</Button>
  <Button variant="outline">3</Button>
</Group>`;

export function GroupConfigurator() {
  return (
    <Configurator
      component={GroupWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'grow', type: 'boolean', initialValue: false, defaultValue: false },
        {
          name: 'position',
          type: 'select',
          data: [
            { label: 'left', value: 'left' },
            { label: 'center', value: 'center' },
            { label: 'right', value: 'right' },
            { label: 'apart', value: 'apart' },
          ],
          initialValue: 'left',
          defaultValue: 'left',
        },
        {
          name: 'direction',
          type: 'select',
          data: [
            { label: 'row', value: 'row' },
            { label: 'column', value: 'column' },
          ],
          initialValue: 'row',
          defaultValue: 'row',
        },
        { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
      ]}
    />
  );
}
