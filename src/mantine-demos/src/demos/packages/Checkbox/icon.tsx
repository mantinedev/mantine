import React from 'react';
import { Biohazard, Radioactive } from 'tabler-icons-react';
import { Checkbox, CheckboxProps } from '@mantine/core';

const code = `
import { Biohazard, Radioactive } from 'tabler-icons-react';

const CheckboxIcon = ({ indeterminate, className }) =>
  indeterminate ? <Radioactive className={className} /> : <Biohazard className={className} />;

<Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
<Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
`;

const CheckboxIcon: CheckboxProps['icon'] = ({
  indeterminate,
  className,
}: React.ComponentProps<CheckboxProps['icon']>) =>
  indeterminate ? <Radioactive className={className} /> : <Biohazard className={className} />;

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
