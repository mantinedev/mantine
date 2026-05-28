import { useCallback } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { useProps } from '../../../core';
import { MenuCheckboxGroupContext } from './MenuCheckboxGroup.context';

export interface MenuCheckboxGroupProps {
  /** Controlled selected values */
  value?: string[];

  /** Uncontrolled default selected values */
  defaultValue?: string[];

  /** Called with the new array of selected values when a `Menu.CheckboxItem` is toggled */
  onChange?: (value: string[]) => void;

  /** `Menu.CheckboxItem` components and other elements */
  children?: React.ReactNode;
}

export function MenuCheckboxGroup(_props: MenuCheckboxGroupProps) {
  const props = useProps('MenuCheckboxGroup', null, _props);
  const { value, defaultValue, onChange, children } = props;

  const [_value, setValue] = useUncontrolled<string[]>({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const toggle = useCallback(
    (next: string) => {
      setValue(_value.includes(next) ? _value.filter((item) => item !== next) : [..._value, next]);
    },
    [_value, setValue]
  );

  return (
    <MenuCheckboxGroupContext value={{ values: _value, onChange: toggle }}>
      {children}
    </MenuCheckboxGroupContext>
  );
}

MenuCheckboxGroup.displayName = '@mantine/core/MenuCheckboxGroup';
