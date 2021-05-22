import React from 'react';
import { SegmentedControlWrapper } from './segmented-control-wrapper';
import Configurator from '../../../../components/Configurator/Configurator';

const codeTemplate = (props: string) => `<SegmentedControl${props} />`;

export function SegmentedControlColorConfigurator() {
  return (
    <Configurator
      component={SegmentedControlWrapper}
      codeTemplate={codeTemplate}
      props={[{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: null }]}
    />
  );
}
