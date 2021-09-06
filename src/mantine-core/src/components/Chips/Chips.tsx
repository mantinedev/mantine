import React, { Children } from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import { Group } from '../Group/Group';
import { DefaultProps, MantineNumberSize, MantineSize } from '../../theme';
import { Chip, ChipProps } from './Chip/Chip';

export { Chip };
export type { ChipProps };

interface SharedChipsProps<T extends boolean = false>
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'defaultValue' | 'onChange'> {
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
}

export function Chips<T extends boolean>({
  value,
  defaultValue,
  onChange,
  spacing = 'xs',
  size = 'sm',
  multiple,
  children,
  id,
  ...others
}: SharedChipsProps<T>) {
  const uuid = useId(id);
  const [_value, setValue] = useUncontrolled<string | string[]>({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange,
    rule: (val) => (multiple ? Array.isArray(val) : typeof val === 'string'),
  });

  const chips = Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === Chip)
    .map((child: React.ReactElement, index) =>
      React.cloneElement(child, {
        name: uuid,
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
