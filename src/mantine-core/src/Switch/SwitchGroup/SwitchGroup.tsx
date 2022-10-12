import React, { forwardRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Input, InputWrapperBaseProps, InputWrapperStylesNames } from '../../Input';
import { InputsGroup } from '../../Checkbox/CheckboxGroup/InputsGroup';
import { SwitchGroupProvider } from '../SwitchGroup.context';

export type SwitchGroupStylesNames = InputWrapperStylesNames;

export interface SwitchGroupProps
  extends DefaultProps<SwitchGroupStylesNames>,
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

  /** Space between label and inputs */
  offset?: MantineNumberSize;

  /** Predefined label fontSize, checkbox width, height and border-radius */
  size?: MantineSize;

  /** Props spread to InputWrapper */
  wrapperProps?: Record<string, any>;
}

const defaultProps: Partial<SwitchGroupProps> = {
  orientation: 'horizontal',
  spacing: 'lg',
  size: 'sm',
  offset: 'xs',
};

export const SwitchGroup = forwardRef<HTMLDivElement, SwitchGroupProps>(
  (props: SwitchGroupProps, ref) => {
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
    } = useComponentDefaultProps('SwitchGroup', defaultProps, props);

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
      <SwitchGroupProvider value={{ value: _value, onChange: handleChange, size }}>
        <Input.Wrapper
          labelElement="div"
          size={size}
          __staticSelector="SwitchGroup"
          ref={ref}
          {...wrapperProps}
          {...others}
        >
          <InputsGroup spacing={spacing} orientation={orientation} offset={offset}>
            {children}
          </InputsGroup>
        </Input.Wrapper>
      </SwitchGroupProvider>
    );
  }
);

SwitchGroup.displayName = '@mantine/core/SwitchGroup';
