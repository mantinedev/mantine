import React from 'react';
import { Button, Tooltip, Group } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const Wrapper = (props: any) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip data-mantine-composable {...props}>
        <Button variant="outline" color="gray" size="xl">
          With tooltip
        </Button>
      </Tooltip>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `<Tooltip
 ${props}
>
  <Button variant="outline" color="gray" size="xl">
    With tooltip
  </Button>
</Tooltip>`;

export function TooltipConfigurator() {
  return (
    <Configurator
      component={Wrapper}
      codeTemplate={codeTemplate}
      multiline
      props={[
        {
          name: 'label',
          type: 'string',
          initialValue: 'Tooltip',
        },
        {
          name: 'color',
          type: 'color',
          initialValue: 'gray',
          defaultValue: 'gray',
        },
        {
          name: 'position',
          type: 'select',
          data: [
            { label: 'top', value: 'top' },
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'bottom', value: 'bottom' },
          ],
          initialValue: 'top',
          defaultValue: 'top',
        },
        {
          name: 'placement',
          type: 'select',
          data: [
            { label: 'start', value: 'start' },
            { label: 'center', value: 'center' },
            { label: 'end', value: 'end' },
          ],
          initialValue: 'center',
          defaultValue: 'center',
        },
        { name: 'withArrow', type: 'boolean', initialValue: true, defaultValue: false },
      ]}
    />
  );
}
