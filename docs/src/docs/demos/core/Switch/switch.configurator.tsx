import React from 'react';
import { Switch } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const codeTemplate = (props: string) => `<Switch
 ${props}
/>`;

export function SwitchConfigurator() {
  return (
    <Configurator
      component={(props: any) => <Switch {...props} defaultChecked />}
      codeTemplate={codeTemplate}
      multiline
      props={[
        {
          name: 'label',
          type: 'string',
          initialValue: 'I agree to sell my privacy',
        },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
        { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
      ]}
    />
  );
}
