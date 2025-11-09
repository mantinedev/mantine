import { createContext } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { DataAttributes, Factory, genericFactory, MantineSize, useProps } from '../../../core';
import { InputsGroupFieldset } from '../../../utils/InputsGroupFieldset';
import { Input, InputWrapperProps, InputWrapperStylesNames } from '../../Input';

export interface CheckboxGroupContextValue<Value extends string = string> {
  value: Value[];
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  size: MantineSize | (string & {}) | undefined;
  isDisabled?: (value: Value) => boolean;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

export type CheckboxGroupStylesNames = InputWrapperStylesNames;

export interface CheckboxGroupProps<Value extends string = string>
  extends Omit<InputWrapperProps, 'onChange'> {
  /** `Checkbox` components and any other elements */
  children: React.ReactNode;

  /** Controlled component value */
  value?: Value[];

  /** Default value for uncontrolled component */
  defaultValue?: Value[];

  /** Called with an array of selected checkboxes values when value changes */
  onChange?: (value: Value[]) => void;

  /** Props passed down to the root element (`Input.Wrapper` component) */
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

  /** Maximum number of checkboxes that can be selected. When the limit is reached, unselected checkboxes will be disabled */

  maxSelectedValues?: number;

  /** Sets `disabled` attribute, prevents interactions */
  disabled?: boolean;
}

export type CheckboxGroupFactory = Factory<{
  props: CheckboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: CheckboxGroupStylesNames;
  signature: <Value extends string = string>(props: CheckboxGroupProps<Value>) => React.JSX.Element;
}>;

const defaultProps = {
  hiddenInputValuesSeparator: ',',
} satisfies Partial<CheckboxGroupProps>;

export const CheckboxGroup = genericFactory<CheckboxGroupFactory>(((
  props: CheckboxGroupProps<string>
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
  } = useProps('CheckboxGroup', defaultProps, props);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    const itemValue = typeof event === 'string' ? event : event.currentTarget.value;

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

  const isDisabled = (checkboxValue: string) => {
    if (disabled) {
      return true;
    }

    if (!maxSelectedValues) {
      return false;
    }

    const isCurrentlySelected = _value.includes(checkboxValue);
    const hasReachedLimit = _value.length >= maxSelectedValues;
    return !isCurrentlySelected && hasReachedLimit;
  };

  const hiddenInputValue = _value.join(hiddenInputValuesSeparator);

  return (
    <CheckboxGroupContext value={{ value: _value, onChange: handleChange, size, isDisabled }}>
      <Input.Wrapper
        size={size}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="CheckboxGroup"
      >
        <InputsGroupFieldset role="group">{children}</InputsGroupFieldset>
        <input type="hidden" name={name} value={hiddenInputValue} {...hiddenInputProps} />
      </Input.Wrapper>
    </CheckboxGroupContext>
  );
}) as any);

CheckboxGroup.classes = Input.Wrapper.classes;
CheckboxGroup.displayName = '@mantine/core/CheckboxGroup';
