import React from 'react';
import { IconPhoto } from '@tabler/icons';
import { ThemeIcon, ThemeIconProps } from '@mantine/core';

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

function Wrapper(props: ThemeIconProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ThemeIcon {...props}>
        <IconPhoto size={iconSizes[props.size]} />
      </ThemeIcon>
    </div>
  );
}

const codeTemplate = (props: string) => `
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons';

function Demo() {
  return (
    <ThemeIcon${props}>
      <IconPhoto />
    </ThemeIcon>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'select',
      initialValue: 'filled',
      defaultValue: 'filled',
      data: [
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
      ],
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
  ],
};
