import { BiohazardIcon, RadioactiveIcon } from '@phosphor-icons/react';
import { Checkbox, CheckboxIconComponent } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Checkbox, CheckboxIconComponent } from '@mantine/core';
import { BiohazardIcon, RadioactiveIcon } from '@phosphor-icons/react';

const CheckboxIcon: CheckboxIconComponent = ({ indeterminate, ...others }) =>
  indeterminate ? <RadioactiveIcon {...others} /> : <BiohazardIcon {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`;

const CheckboxIcon: CheckboxIconComponent = ({ indeterminate, ...others }) =>
  indeterminate ? <RadioactiveIcon {...others} /> : <BiohazardIcon {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
