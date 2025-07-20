import { useUncontrolled } from '@mantine/hooks';
import { DataAttributes, factory, Factory, MantineSize, useProps } from '../../../core';
import { InputsGroupFieldset } from '../../../utils/InputsGroupFieldset';
import { Input, InputWrapperProps, InputWrapperStylesNames } from '../../Input';
import { SwitchGroupProvider } from '../SwitchGroup.context';

export type SwitchGroupStylesNames = InputWrapperStylesNames;

export interface SwitchGroupProps extends Omit<InputWrapperProps, 'onChange'> {
  /** `Switch` components */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?: (value: string[]) => void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & DataAttributes;

  /** Controls size of the `Input.Wrapper` @default `'sm'` */
  size?: MantineSize | (string & {});

  /** If set, value cannot be changed */
  readOnly?: boolean;

  /** Maximum number of switches that can be selected. When the limit is reached, unselected switches will be disabled */
  maxSelectedValues?: number;
}

export type SwitchGroupFactory = Factory<{
  props: SwitchGroupProps;
  ref: HTMLDivElement;
  stylesNames: SwitchGroupStylesNames;
}>;

export const SwitchGroup = factory<SwitchGroupFactory>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children,
    readOnly,
    maxSelectedValues,
    ...others
  } = useProps('SwitchGroup', null, props);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const itemValue = event.currentTarget.value;

    if (readOnly) {
      return;
    }

    const isCurrentlySelected = _value.includes(itemValue);

    if (!isCurrentlySelected && maxSelectedValues && _value.length >= maxSelectedValues) {
      return;
    }

    setValue(
      isCurrentlySelected ? _value.filter((item) => item !== itemValue) : [..._value, itemValue]
    );
  };

  const isDisabled = (switchValue: string) => {
    if (!maxSelectedValues) {
      return false;
    }

    const isCurrentlySelected = _value.includes(switchValue);
    const hasReachedLimit = _value.length >= maxSelectedValues;
    return !isCurrentlySelected && hasReachedLimit;
  };

  return (
    <SwitchGroupProvider value={{ value: _value, onChange: handleChange, size, isDisabled }}>
      <Input.Wrapper
        size={size}
        ref={ref}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="SwitchGroup"
      >
        <InputsGroupFieldset role="group">{children}</InputsGroupFieldset>
      </Input.Wrapper>
    </SwitchGroupProvider>
  );
});

SwitchGroup.classes = Input.Wrapper.classes;
SwitchGroup.displayName = '@mantine/core/SwitchGroup';
