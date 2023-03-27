import React from 'react';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Checkbox, CheckboxProps } from '@mantine/core';

const code = `
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, className }) =>
  indeterminate ? <IconRadioactive className={className} /> : <IconBiohazard className={className} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`;

const CheckboxIcon: CheckboxProps['icon'] = ({
  indeterminate,
  className,
}: React.ComponentProps<CheckboxProps['icon']>) =>
  indeterminate ? (
    <IconRadioactive className={className} />
  ) : (
    <IconBiohazard className={className} />
  );

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
