import React, { forwardRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Input, InputWrapperBaseProps, InputWrapperStylesNames } from '../../Input';
import { InputsGroup } from './InputsGroup';
import { CheckboxGroupProvider } from '../CheckboxGroup.context';

export type CheckboxGroupStylesNames = InputWrapperStylesNames;

export interface CheckboxGroupProps
  extends DefaultProps<CheckboxGroupStylesNames>,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  variant?: string;

  /** <Checkbox /> components */
  children: React.ReactNode;

  /** Value of selected checkboxes, use for controlled components */
  value?: string[];

  /** Initial selected checkboxes, use for uncontrolled components, overridden by value prop */
  defaultValue?: string[];

  /** Called when value changes */
  onChange?(value: string[]): void;

  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Spacing between checkboxes in horizontal orientation */
  spacing?: MantineNumberSize;

  /** Space between label and inputs */
  offset?: MantineNumberSize;

  /** Controls label font-size and checkbox width and height */
  size?: MantineSize;

  /** Props added to Input.Wrapper component (root element) */
  wrapperProps?: Record<string, any>;
}

const defaultProps: Partial<CheckboxGroupProps> = {
  orientation: 'horizontal',
  spacing: 'lg',
  size: 'sm',
  offset: 'xs',
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
      size,
      wrapperProps,
      offset,
      ...others
    } = useComponentDefaultProps('CheckboxGroup', defaultProps, props);

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
        <Input.Wrapper
          labelElement="div"
          size={size}
          __staticSelector="CheckboxGroup"
          ref={ref}
          {...wrapperProps}
          {...others}
        >
          <InputsGroup spacing={spacing} orientation={orientation} offset={offset}>
            {children}
          </InputsGroup>
        </Input.Wrapper>
      </CheckboxGroupProvider>
    );
  }
);

CheckboxGroup.displayName = '@mantine/core/CheckboxGroup';
