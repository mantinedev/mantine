import React from 'react';
import { Loader, ElementsGroup } from '@mantine/core';
import Configurator from '../../../components/Configurator/Configurator';

function LoaderWrapper(props: React.ComponentPropsWithoutRef<typeof Loader>) {
  return (
    <ElementsGroup position="center">
      <Loader data-mantine-composable {...props} />
    </ElementsGroup>
  );
}

const codeTemplate = (props: string) => `<Loader${props} />`;

export function LoaderConfigurator() {
  return (
    <Configurator
      component={LoaderWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
      ]}
    />
  );
}
