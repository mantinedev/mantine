import React, { forwardRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Input, InputWrapperBaseProps, InputWrapperStylesNames } from '../../Input';
import { InputsGroup } from '../../Checkbox/CheckboxGroup/InputsGroup';
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

  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Spacing between radios in horizontal orientation */
  spacing?: MantineNumberSize;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Props spread to root element */
  wrapperProps?: Record<string, any>;
}

const defaultProps: Partial<RadioGroupProps> = {
  orientation: 'horizontal',
  spacing: 'lg',
  size: 'sm',
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const {
      children,
      value,
      defaultValue,
      onChange,
      orientation,
      spacing,
      size,
      classNames,
      styles,
      wrapperProps,
      errorProps,
      labelProps,
      descriptionProps,
      inputContainer,
      inputWrapperOrder,
      unstyled,
      ...others
    } = useMantineDefaultProps('RadioGroup', defaultProps, props);

    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '',
      onChange,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.currentTarget.value);

    return (
      <RadioGroupProvider value={{ value: _value, onChange: handleChange, size }}>
        <Input.Wrapper
          labelElement="div"
          size={size}
          __staticSelector="RadioGroup"
          classNames={classNames}
          styles={styles}
          ref={ref}
          errorProps={errorProps}
          descriptionProps={descriptionProps}
          labelProps={labelProps}
          inputContainer={inputContainer}
          inputWrapperOrder={inputWrapperOrder}
          unstyled={unstyled}
          {...wrapperProps}
          {...others}
        >
          <InputsGroup
            spacing={spacing}
            orientation={orientation}
            unstyled={unstyled}
            role="radiogroup"
          >
            {children}
          </InputsGroup>
        </Input.Wrapper>
      </RadioGroupProvider>
    );
  }
);

RadioGroup.displayName = '@mantine/core/RadioGroup';
