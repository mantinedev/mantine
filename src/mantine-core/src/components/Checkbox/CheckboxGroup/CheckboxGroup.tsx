import React, { cloneElement, forwardRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  useMantineDefaultProps,
} from '@mantine/styles';
import { filterChildrenByType } from '../../../utils';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../../InputWrapper/InputWrapper';
import { Checkbox, CheckboxStylesNames } from '../Checkbox';
import { Group } from '../../Group/Group';

export type CheckboxGroupStylesNames = InputWrapperStylesNames | CheckboxStylesNames;

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
  wrapperProps?: { [key: string]: any };
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
      rule: (val) => Array.isArray(val),
    });

    const checkboxes = filterChildrenByType(children, Checkbox).map((checkbox, index) =>
      cloneElement(checkbox, {
        key: index,
        checked: _value.includes(checkbox.props.value),
        color,
        size,
        classNames,
        styles,
        __staticSelector: 'CheckboxGroup',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
          const itemValue = event.currentTarget.value;
          setValue(
            _value.includes(itemValue)
              ? _value.filter((item) => item !== itemValue)
              : [..._value, itemValue]
          );
        },
      })
    );

    return (
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
        <Group
          spacing={spacing}
          direction={orientation === 'horizontal' ? 'row' : 'column'}
          sx={{ paddingTop: 5 }}
        >
          {checkboxes}
        </Group>
      </InputWrapper>
    );
  }
);

CheckboxGroup.displayName = '@mantine/core/CheckboxGroup';
