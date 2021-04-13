import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function ElementsGroupWrapper(props: React.ComponentPropsWithoutRef<typeof ElementsGroup>) {
  return (
    <ElementsGroup {...props}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </ElementsGroup>
  );
}

const codeTemplate = (props: string) => `<ElementsGroup${props}>
  <Button variant="outline">1</Button>
  <Button variant="outline">2</Button>
  <Button variant="outline">3</Button>
</ElementsGroup>`;

export function ElementsGroupConfigurator() {
  return (
    <Configurator
      component={ElementsGroupWrapper}
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
        { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
      ]}
    />
  );
}
