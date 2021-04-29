import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function ButtonWrapper(props: React.ComponentPropsWithoutRef<typeof Button>) {
  return (
    <ElementsGroup position="center">
      <Button {...props} />
    </ElementsGroup>
  );
}

const codeTemplate = (props: string, children: string) => `<Button${props}>
  ${children}
</Button>`;

export function ButtonConfigurator() {
  return (
    <Configurator
      component={ButtonWrapper}
      codeTemplate={codeTemplate}
      props={[
        {
          name: 'variant',
          type: 'select',
          data: [
            { label: 'filled', value: 'filled' },
            { label: 'light', value: 'light' },
            { label: 'outline', value: 'outline' },
            { label: 'link', value: 'link' },
          ],
          initialValue: 'filled',
          defaultValue: 'filled',
        },
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        { name: 'children', type: 'string', initialValue: 'Settings' },
      ]}
    />
  );
}
