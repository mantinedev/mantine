import { useUncontrolled } from '@mantine/hooks';
import { useProps } from '../../../core';
import { MenuRadioGroupContext } from './MenuRadioGroup.context';

export interface MenuRadioGroupProps {
  /** Controlled selected value */
  value?: string | null;

  /** Uncontrolled default selected value */
  defaultValue?: string | null;

  /** Called with the new value when a `Menu.RadioItem` is selected */
  onChange?: (value: string) => void;

  /** `Menu.RadioItem` components and other elements */
  children?: React.ReactNode;
}

export function MenuRadioGroup(_props: MenuRadioGroupProps) {
  const props = useProps('MenuRadioGroup', null, _props);
  const { value, defaultValue, onChange, children } = props;

  const [_value, setValue] = useUncontrolled<string | null>({
    value,
    defaultValue,
    finalValue: null,
    onChange: onChange as (value: string | null) => void,
  });

  return (
    <MenuRadioGroupContext value={{ value: _value, onChange: (next) => setValue(next) }}>
      {children}
    </MenuRadioGroupContext>
  );
}

MenuRadioGroup.displayName = '@mantine/core/MenuRadioGroup';
