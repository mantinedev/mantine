import { BoxProps, ElementProps, NativeSelect } from '@mantine/core';
import { getControlLabel } from './get-control-label';
import { SelectData, transformSelectData } from './transform-select-data';
import { ConfiguratorControl } from './types';

export type ConfiguratorSelectControlOptions = ConfiguratorControl<
  'select',
  { data: SelectData; initialValue: string }
>;

export interface ConfiguratorSelectControlProps
  extends BoxProps,
    ElementProps<'select', 'onChange' | 'value' | 'size'> {
  value: string;
  data: SelectData;
  onChange: (value: string) => void;
  prop: string;
}

export function ConfiguratorSelectControl({
  value,
  onChange,
  prop,
  data,
  ...others
}: ConfiguratorSelectControlProps) {
  return (
    <NativeSelect
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      label={getControlLabel(prop)}
      data={transformSelectData(data)}
      {...others}
    />
  );
}
