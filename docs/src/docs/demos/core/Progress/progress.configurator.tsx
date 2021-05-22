import React from 'react';
import { Progress } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function ProgressWrapper(props: React.ComponentPropsWithoutRef<typeof Progress>) {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Progress {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `<Progress${props} />`;

export function ProgressConfigurator() {
  return (
    <Configurator
      component={ProgressWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'striped', type: 'boolean', initialValue: false, defaultValue: false },
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        { name: 'value', type: 'number', initialValue: 50, max: 100, min: 0, step: 10 },
      ]}
    />
  );
}
