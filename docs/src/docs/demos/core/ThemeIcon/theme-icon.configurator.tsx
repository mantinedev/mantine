import React from 'react';
import { ThemeIcon } from '@mantine/core';
import { RocketIcon } from '@modulz/radix-icons';
import Configurator from '../../../../components/Configurator/Configurator';

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

function ThemeIconWrapper(props: any) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ThemeIcon {...props}>
        <RocketIcon style={{ width: iconSizes[props.size], height: iconSizes[props.size] }} />
      </ThemeIcon>
    </div>
  );
}

const codeTemplate = (props: string) => `<ThemeIcon${props}>
  <RocketIcon />
</ThemeIcon>`;

export function ThemeIconConfigurator() {
  return (
    <Configurator
      component={ThemeIconWrapper}
      codeTemplate={codeTemplate}
      props={[
        {
          name: 'variant',
          type: 'select',
          initialValue: 'filled',
          defaultValue: 'filled',
          data: [
            { label: 'light', value: 'light' },
            { label: 'filled', value: 'filled' },
          ],
        },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
        { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
      ]}
    />
  );
}
