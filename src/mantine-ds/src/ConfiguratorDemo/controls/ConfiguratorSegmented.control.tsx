import React from 'react';
import { SegmentedControl, Input, BoxProps, ElementProps } from '@mantine/core';
import { transformSelectData, SelectData } from './transform-select-data';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';

export type ConfiguratorSegmentedControlOptions = ConfiguratorControl<
  'segmented',
  { data: SelectData; initialValue: string }
>;

export interface ConfiguratorSegmentedControlProps
  extends BoxProps,
    ElementProps<'div', 'onChange'> {
  data: SelectData;
  value: string;
  onChange(value: string): void;
  prop: string;
}

export function ConfiguratorSegmentedControl({
  data,
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorSegmentedControlProps) {
  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <SegmentedControl
        data={transformSelectData(data)}
        value={value}
        onChange={onChange}
        fullWidth
        transitionDuration={150}
      />
    </Input.Wrapper>
  );
}
