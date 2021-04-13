import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function TabsWrapper(props: React.ComponentPropsWithoutRef<typeof Tabs>) {
  return (
    <Tabs {...props}>
      <Tab label="First">First tab content</Tab>
      <Tab label="Second">Second tab content</Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `<Tabs${props}>
  <Tab label="First">First tab content</Tab>
  <Tab label="Second">Second tab content</Tab>
  <Tab label="Third">Third tab content</Tab>
</Tabs>`;

export function TabsPositionConfigurator() {
  return (
    <Configurator
      component={TabsWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'grow', type: 'boolean', defaultValue: false },
        {
          name: 'position',
          type: 'select',
          initialValue: 'left',
          defaultValue: 'left',
          data: [
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'center', value: 'center' },
            { label: 'apart', value: 'apart' },
          ],
        },
      ]}
    />
  );
}

export function TabsColorConfigurator() {
  return (
    <Configurator
      component={TabsWrapper}
      codeTemplate={codeTemplate}
      props={[{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' }]}
    />
  );
}
