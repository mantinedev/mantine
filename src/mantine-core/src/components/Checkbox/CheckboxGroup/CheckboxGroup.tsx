import React, { forwardRef } from 'react';
import { useUncontrolled } from '@mantine/utils';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  useMantineDefaultProps,
} from '@mantine/styles';
import { InputWrapper, InputWrapperBaseProps, InputWrapperStylesNames } from '../../InputWrapper';
import { InputsGroup } from './InputsGroup';
import { CheckboxGroupProvider } from '../CheckboxGroup.context';

export type CheckboxGroupStylesNames = InputWrapperStylesNames;

export interface CheckboxGroupProps
  extends DefaultProps<CheckboxGroupStylesNames>,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <Checkbox /> components only */
  children: React.ReactNode;

  /** Value of currently selected checkbox */
  value?: string[];

  /** Initial value for uncontrolled component */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?(value: string[]): void;

  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Spacing between checkboxes in horizontal orientation */
  spacing?: MantineNumberSize;

  /** Activated checkbox color from theme.colors */
  color?: MantineColor;

  /** Predefined label fontSize, checkbox width, height and border-radius */
  size?: MantineSize;

  /** Props spread to InputWrapper */
  wrapperProps?: Record<string, any>;
}

const defaultProps: Partial<CheckboxGroupProps> = {
  orientation: 'horizontal',
  spacing: 'lg',
  size: 'sm',
};

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props: CheckboxGroupProps, ref) => {
    const {
      children,
      value,
      defaultValue,
      onChange,
      orientation,
      spacing,
      color,
      size,
      classNames,
      styles,
      wrapperProps,
      errorProps,
      labelProps,
      descriptionProps,
      ...others
    } = useMantineDefaultProps('CheckboxGroup', defaultProps, props);

    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: [],
      onChange,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const itemValue = event.currentTarget.value;
      setValue(
        _value.includes(itemValue)
          ? _value.filter((item) => item !== itemValue)
          : [..._value, itemValue]
      );
    };

    return (
      <CheckboxGroupProvider value={{ value: _value, onChange: handleChange, size }}>
        <InputWrapper
          labelElement="div"
          size={size}
          __staticSelector="CheckboxGroup"
          classNames={classNames}
          styles={styles}
          ref={ref}
          errorProps={errorProps}
          descriptionProps={descriptionProps}
          labelProps={labelProps}
          {...wrapperProps}
          {...others}
        >
          <InputsGroup spacing={spacing} orientation={orientation}>
            {children}
          </InputsGroup>
        </InputWrapper>
      </CheckboxGroupProvider>
    );
  }
);

CheckboxGroup.displayName = '@mantine/core/CheckboxGroup';
