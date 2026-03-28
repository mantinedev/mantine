import { createContext } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { DataAttributes, Factory, genericFactory, MantineSize, useProps } from '../../../core';
import { InputsGroupFieldset } from '../../../utils/InputsGroupFieldset';
import { Input, InputWrapperProps, InputWrapperStylesNames } from '../../Input';

export interface RadioGroupContextValue<Value extends string = string> {
  size: MantineSize | undefined;
  value: Value | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
  name: string;
  disabled: boolean | undefined;
}

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export type RadioGroupStylesNames = InputWrapperStylesNames;

export interface RadioGroupProps<Value extends string = string> extends Omit<
  InputWrapperProps,
  'onChange' | 'value' | 'defaultValue'
> {
  /** `Radio` components and any other elements */
  children: React.ReactNode;

  /** Controlled component value */
  value?: Value | null;

  /** Uncontrolled component default value */
  defaultValue?: Value | null;

  /** Called when value changes */
  onChange?: (value: Value) => void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: React.ComponentProps<'div'> & DataAttributes;

  /** Controls size of the `Input.Wrapper` @default 'sm' */
  size?: MantineSize;

  /** `name` attribute of child radio inputs. By default, `name` is generated randomly. */
  name?: string;

  /** If set, value cannot be changed */
  readOnly?: boolean;

  /** Sets `disabled` attribute, prevents interactions */
  disabled?: boolean;
}

export type RadioGroupFactory = Factory<{
  props: RadioGroupProps;
  ref: HTMLDivElement;
  stylesNames: RadioGroupStylesNames;
  signature: <Value extends string = string>(props: RadioGroupProps<Value>) => React.JSX.Element;
}>;

export const RadioGroup = genericFactory<RadioGroupFactory>(((props: RadioGroupProps<string>) => {
  const {
    value,
    defaultValue,
    onChange,
    size,
    wrapperProps,
    children,
    name,
    readOnly,
    disabled,
    ...others
  } = useProps('RadioGroup', null, props);

  const _name = useId(name);

  const [_value, setValue] = useUncontrolled<string | null>({
    value,
    defaultValue,
    finalValue: '',
    onChange: onChange as any,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | string) =>
    !readOnly && setValue(typeof event === 'string' ? event : event.currentTarget.value);

  return (
    <RadioGroupContext
      value={{ value: _value, onChange: handleChange, size, name: _name, disabled }}
    >
      <Input.Wrapper
        size={size}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="RadioGroup"
      >
        <InputsGroupFieldset role="radiogroup">{children}</InputsGroupFieldset>
      </Input.Wrapper>
    </RadioGroupContext>
  );
}) as any);

RadioGroup.classes = Input.Wrapper.classes;
RadioGroup.displayName = '@mantine/core/RadioGroup';
