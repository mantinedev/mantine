import React from 'react';
import { Button, ElementsGroup } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';
import Configurator from '../../../../components/Configurator/Configurator';

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

function ButtonWrapper(props: React.ComponentPropsWithoutRef<typeof Button>) {
  const size = props.size in iconSizes ? props.size : 'md';
  return (
    <ElementsGroup position="center">
      <Button
        leftIcon={<GearIcon style={{ width: iconSizes[size], height: iconSizes[size] }} />}
        {...props}
      />
    </ElementsGroup>
  );
}

const codeTemplate = (props: string, children: string) => `<Button leftIcon={<GearIcon />}${props}>
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
