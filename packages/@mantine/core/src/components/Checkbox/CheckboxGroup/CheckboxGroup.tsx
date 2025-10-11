import { useUncontrolled } from '@mantine/hooks';
import { DataAttributes, factory, Factory, MantineSize, useProps } from '../../../core';
import { InputsGroupFieldset } from '../../../utils/InputsGroupFieldset';
import { Input, InputWrapperProps, InputWrapperStylesNames } from '../../Input';
import { CheckboxGroupProvider } from '../CheckboxGroup.context';

export type CheckboxGroupStylesNames = InputWrapperStylesNames;

export interface CheckboxGroupProps extends Omit<InputWrapperProps, 'onChange'> {
  /** `Checkbox` components and any other elements */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called with an array of selected checkboxes values when value changes */
  onChange?: (value: string[]) => void;

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
}

export type CheckboxGroupFactory = Factory<{
  props: CheckboxGroupProps;
  ref: HTMLDivElement;
  stylesNames: CheckboxGroupStylesNames;
}>;

const defaultProps = {
  hiddenInputValuesSeparator: ',',
} satisfies Partial<CheckboxGroupProps>;

export const CheckboxGroup = factory<CheckboxGroupFactory>((props) => {
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
    if (!maxSelectedValues) {
      return false;
    }

    const isCurrentlySelected = _value.includes(checkboxValue);
    const hasReachedLimit = _value.length >= maxSelectedValues;
    return !isCurrentlySelected && hasReachedLimit;
  };

  const hiddenInputValue = _value.join(hiddenInputValuesSeparator);

  return (
    <CheckboxGroupProvider value={{ value: _value, onChange: handleChange, size, isDisabled }}>
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
    </CheckboxGroupProvider>
  );
});

CheckboxGroup.classes = Input.Wrapper.classes;
CheckboxGroup.displayName = '@mantine/core/CheckboxGroup';
