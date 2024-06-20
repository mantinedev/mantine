import { BoxProps, ElementProps, TextInput } from '@mantine/core';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';

export type ConfiguratorStringControlOptions = ConfiguratorControl<
  'string',
  { initialValue: string }
>;

export interface ConfiguratorStringControlProps
  extends BoxProps,
    ElementProps<'input', 'onChange' | 'value' | 'size'> {
  value: string;
  onChange: (value: string) => void;
  prop: string;
}

export function ConfiguratorStringControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorStringControlProps) {
  return (
    <TextInput
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      label={getControlLabel(prop)}
      placeholder="Enter prop value"
      {...others}
    />
  );
}
