import { createContext } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { DataAttributes, Factory, genericFactory, MantineSize, useProps } from '../../../core';
import { InputsGroupFieldset } from '../../../utils/InputsGroupFieldset';
import { Input, InputWrapperProps, InputWrapperStylesNames } from '../../Input';

export interface SwitchGroupContextValue<Value extends string = string> {
  value: Value[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: MantineSize | (string & {}) | undefined;
  isDisabled?: (value: Value) => boolean;
}

export const SwitchGroupContext = createContext<SwitchGroupContextValue | null>(null);

export type SwitchGroupStylesNames = InputWrapperStylesNames;

export interface SwitchGroupProps<Value extends string = string> extends Omit<
  InputWrapperProps,
  'onChange'
> {
  /** `Switch` components */
  children: React.ReactNode;

  /** Controlled component value */
  value?: Value[];

  /** Default value for uncontrolled component */
  defaultValue?: Value[];

  /** Called when value changes */
  onChange?: (value: Value[]) => void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: React.ComponentProps<'div'> & DataAttributes;

  /** Controls size of the `Input.Wrapper` @default `'sm'` */
  size?: MantineSize | (string & {});

  /** If set, value cannot be changed */
  readOnly?: boolean;

  /** `name` attribute of the hidden input for uncontrolled forms */
  name?: string;

  /** Props passed down to the hidden input for uncontrolled forms */
  hiddenInputProps?: React.ComponentProps<'input'> & DataAttributes;

  /** Separator for values in the hidden input for uncontrolled forms @default `','` */
  hiddenInputValuesSeparator?: string;

  /** Maximum number of switches that can be selected. When the limit is reached, unselected switches will be disabled */
  maxSelectedValues?: number;

  /** Sets `disabled` attribute, prevents interactions */
  disabled?: boolean;
}

export type SwitchGroupFactory = Factory<{
  props: SwitchGroupProps;
  ref: HTMLDivElement;
  stylesNames: SwitchGroupStylesNames;
  signature: <Value extends string = string>(props: SwitchGroupProps<Value>) => React.JSX.Element;
}>;

const defaultProps = {
  hiddenInputValuesSeparator: ',',
} satisfies Partial<SwitchGroupProps>;

export const SwitchGroup = genericFactory<SwitchGroupFactory>(((
  props: SwitchGroupProps<string>
) => {
  const {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children,
    readOnly,
    name,
    hiddenInputValuesSeparator,
    hiddenInputProps,
    maxSelectedValues,
    disabled,
    ...others
  } = useProps('SwitchGroup', defaultProps, props);

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
    if (disabled) {
      return true;
    }

    if (!maxSelectedValues) {
      return false;
    }

    const isCurrentlySelected = _value.includes(switchValue);
    const hasReachedLimit = _value.length >= maxSelectedValues;
    return !isCurrentlySelected && hasReachedLimit;
  };

  const hiddenInputValue = _value.join(hiddenInputValuesSeparator);

  return (
    <SwitchGroupContext value={{ value: _value, onChange: handleChange, size, isDisabled }}>
      <Input.Wrapper
        size={size}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="SwitchGroup"
      >
        <InputsGroupFieldset role="group">{children}</InputsGroupFieldset>
        <input type="hidden" name={name} value={hiddenInputValue} {...hiddenInputProps} />
      </Input.Wrapper>
    </SwitchGroupContext>
  );
}) as any);

SwitchGroup.classes = Input.Wrapper.classes;
SwitchGroup.displayName = '@mantine/core/SwitchGroup';
