import React from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './SegmentedControl.styles';

interface SegmentedControlItem {
  value: string;
  label: React.ReactNode;
}

interface SegmentedControlProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Data based on which controls are rendered */
  data: SegmentedControlItem[];

  /** Current selected value */
  value: string;

  /** Called when value changes */
  onChange(value: string): void;

  /** Name of the radio group, default to random id */
  name?: string;

  /** True if component should have 100% width */
  fullWidth?: boolean;

  /** Active control color from theme, defaults to white in light color scheme and theme.colors.dark[9] in dark */
  color?: string;
}

export function SegmentedControl({
  className,
  themeOverride,
  data,
  name,
  value,
  onChange,
  color,
  fullWidth,
  ...others
}: SegmentedControlProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride), fullWidth, color });
  const uuid = useId(name);

  const controls = data.map((item) => (
    <div>
      <input
        type="radio"
        name={uuid}
        value={item.value}
        id={`${uuid}-${item.value}`}
        checked={value === item.value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />

      <label htmlFor={`${uuid}-${item.value}`}>{item.label}</label>
    </div>
  ));

  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {controls}
    </div>
  );
}

SegmentedControl.displayName = '@mantine/core/SegmentedControl';
