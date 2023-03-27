import React, { forwardRef } from 'react';
import { useUncontrolled, useId } from '@mantine/hooks';
import { DefaultProps, MantineSize, useComponentDefaultProps } from '@mantine/styles';
import { Input, InputWrapperBaseProps, InputWrapperStylesNames } from '../../Input';
import { RadioGroupProvider } from '../RadioGroup.context';

export type RadioGroupStylesNames = InputWrapperStylesNames;

export interface RadioGroupProps
  extends DefaultProps<RadioGroupStylesNames>,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <Radio /> components */
  children: React.ReactNode;

  /** Value of currently selected radio */
  value?: string;

  /** Initial value for uncontrolled component */
  defaultValue?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Props spread to root element */
  wrapperProps?: Record<string, any>;

  /** Name attribute of radio inputs */
  name?: string;
}

const defaultProps: Partial<RadioGroupProps> = {
  size: 'sm',
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const {
      children,
      value,
      defaultValue,
      onChange,
      size,
      wrapperProps,
      unstyled,
      name,
      ...others
    } = useComponentDefaultProps('RadioGroup', defaultProps, props);
    const _name = useId(name);

    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '',
      onChange,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value);

    return (
      <RadioGroupProvider value={{ value: _value, onChange: handleChange, size, name: _name }}>
        <Input.Wrapper
          labelElement="div"
          size={size}
          __staticSelector="RadioGroup"
          ref={ref}
          unstyled={unstyled}
          {...wrapperProps}
          {...others}
        >
          {children}
        </Input.Wrapper>
      </RadioGroupProvider>
    );
  }
);

RadioGroup.displayName = '@mantine/core/RadioGroup';
