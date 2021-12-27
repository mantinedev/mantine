import React from 'react';
import { useUncontrolled, useUuid } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';
import { filterChildrenByType } from '../../utils';
import { Group, GroupProps } from '../Group/Group';
import { Chip, ChipStylesNames } from './Chip/Chip';

export interface ChipsProps<T extends boolean = false>
  extends DefaultProps<ChipStylesNames>,
    Omit<GroupProps, 'value' | 'defaultValue' | 'onChange' | 'classNames' | 'styles'> {
  /** Spacing between chips from theme or number to set value in px */
  spacing?: MantineNumberSize;

  /** Chip border-radius from theme or number to set value in px */
  radius?: MantineNumberSize;

  /** Predefined chip size */
  size?: MantineSize;

  /** Allow multiple values to be picked */
  multiple?: T;

  /** Controlled component value */
  value?: T extends true ? string[] : string;

  /** Uncontrolled component value */
  defaultValue?: T extends true ? string[] : string;

  /** Called when value changes */
  onChange?(value: T extends true ? string[] : string): void;

  /** Static id, used to generate inputs names */
  id?: string;

  /** <Chip /> components only */
  children?: React.ReactNode;

  /** Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
  variant?: 'filled' | 'outline';

  /** Active chip color, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Inputs name attribute */
  name?: string;
}

export function Chips<T extends boolean>({
  value,
  defaultValue,
  onChange,
  color,
  spacing = 'xs',
  radius = 'xl',
  size = 'sm',
  name,
  variant,
  multiple,
  children,
  id,
  classNames,
  styles,
  ...others
}: ChipsProps<T>) {
  const uuid = useUuid(id);
  const [_value, setValue] = useUncontrolled<string | string[]>({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange,
    rule: (val) => (multiple ? Array.isArray(val) : typeof val === 'string'),
  });

  const chips = filterChildrenByType(children, Chip).map((child, index) =>
    React.cloneElement(child, {
      variant,
      radius,
      color,
      __staticSelector: 'Chips',
      classNames,
      styles,
      name,
      size,
      id: `${uuid}-${index}`,
      type: multiple ? 'checkbox' : 'radio',
      checked: Array.isArray(_value)
        ? _value.includes(child.props.value)
        : child.props.value === _value,
      onChange: () => {
        const val = child.props.value;

        if (Array.isArray(_value)) {
          setValue(_value.includes(val) ? _value.filter((v) => v !== val) : [..._value, val]);
        } else {
          setValue(val);
        }
      },
    })
  );

  return (
    <Group spacing={spacing} id={uuid} {...others}>
      {chips}
    </Group>
  );
}

Chips.displayName = '@mantine/core/Chips';
