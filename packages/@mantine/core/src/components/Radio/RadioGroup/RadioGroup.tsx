import { useId, useUncontrolled } from '@mantine/hooks';
import { DataAttributes, factory, Factory, MantineSize, useProps } from '../../../core';
import { InputsGroupFieldset } from '../../../utils/InputsGroupFieldset';
import { Input, InputWrapperProps, InputWrapperStylesNames } from '../../Input';
import { RadioGroupProvider } from '../RadioGroup.context';

export type RadioGroupStylesNames = InputWrapperStylesNames;

export interface RadioGroupProps
  extends Omit<InputWrapperProps, 'onChange' | 'value' | 'defaultValue'> {
  /** `Radio` components and any other elements */
  children: React.ReactNode;

  /** Controlled component value */
  value?: string | null;

  /** Uncontrolled component default value */
  defaultValue?: string | null;

  /** Called when value changes */
  onChange?: (value: string) => void;

  /** Props passed down to the `Input.Wrapper` */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & DataAttributes;

  /** Controls size of the `Input.Wrapper` @default `'sm'` */
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
}>;

export const RadioGroup = factory<RadioGroupFactory>((props, ref) => {
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

  const [_value, setValue] = useUncontrolled({
    value: value as string,
    defaultValue: defaultValue as string,
    finalValue: '',
    onChange,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | string) =>
    !readOnly && setValue(typeof event === 'string' ? event : event.currentTarget.value);

  return (
    <RadioGroupProvider
      value={{ value: _value, onChange: handleChange, size, name: _name, disabled }}
    >
      <Input.Wrapper
        size={size}
        ref={ref}
        {...wrapperProps}
        {...others}
        labelElement="div"
        __staticSelector="RadioGroup"
      >
        <InputsGroupFieldset role="radiogroup">{children}</InputsGroupFieldset>
      </Input.Wrapper>
    </RadioGroupProvider>
  );
});

RadioGroup.classes = Input.Wrapper.classes;
RadioGroup.displayName = '@mantine/core/RadioGroup';
