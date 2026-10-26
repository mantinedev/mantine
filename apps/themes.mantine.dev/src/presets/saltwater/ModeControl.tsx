import { IconBike, IconCar, IconWalk } from '@tabler/icons-react';
import { SegmentedControl, type SegmentedControlProps } from '@mantine/core';
import type { Mode } from './data';

const ICON_PROPS = { size: 16, stroke: 1.8 };

const MODES = [
  { value: 'foot', icon: <IconWalk {...ICON_PROPS} />, label: 'On foot' },
  { value: 'bike', icon: <IconBike {...ICON_PROPS} />, label: 'Bike' },
  { value: 'car', icon: <IconCar {...ICON_PROPS} />, label: 'Car' },
];

interface ModeControlProps extends Omit<SegmentedControlProps, 'data' | 'value' | 'onChange'> {
  value: Mode;
  onChange: (mode: Mode) => void;
}

export function ModeControl({ value, onChange, ...others }: ModeControlProps) {
  return (
    <SegmentedControl
      aria-label="Travelling"
      value={value}
      onChange={(next) => onChange(next as Mode)}
      data={MODES.map((mode) => ({
        value: mode.value,
        label: (
          <>
            {mode.icon}
            {mode.label}
          </>
        ),
      }))}
      {...others}
    />
  );
}
