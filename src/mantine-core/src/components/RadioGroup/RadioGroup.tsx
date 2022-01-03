import React, { cloneElement, forwardRef } from 'react';
import { useUncontrolled, useUuid } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, MantineSize, MantineColor } from '@mantine/styles';
import { filterChildrenByType } from '../../utils';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Radio, RadioStylesNames } from './Radio/Radio';
import { Group } from '../Group/Group';

export type RadioGroupStylesNames = InputWrapperStylesNames | RadioStylesNames;

export interface RadioGroupProps
  extends DefaultProps<RadioGroupStylesNames>,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <Radio /> components only */
  children: React.ReactNode;

  /** Input name attribute, used to bind radios in one group, by default generated randomly with use-id hook */
  name?: string;

  /** Value of currently selected radio */
  value?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Initial value for uncontrolled component */
  defaultValue?: string;

  /** Radios position */
  variant?: 'horizontal' | 'vertical';

  /** Spacing between radios in horizontal variant */
  spacing?: MantineNumberSize;

  /** Active radio color from theme.colors */
  color?: MantineColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Props spread to InputWrapper */
  wrapperProps?: { [key: string]: any };
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      children,
      value,
      defaultValue,
      onChange,
      variant = 'horizontal',
      spacing = 'sm',
      color,
      size,
      classNames,
      styles,
      wrapperProps,
      ...others
    }: RadioGroupProps,
    ref
  ) => {
    const uuid = useUuid(name);
    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: '',
      onChange,
      rule: (val) => typeof val === 'string',
    });

    const radios = filterChildrenByType(children, Radio).map((radio, index) =>
      cloneElement(radio, {
        key: index,
        checked: _value === radio.props.value,
        name: uuid,
        color,
        size,
        classNames,
        styles,
        __staticSelector: 'RadioGroup',
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.currentTarget.value),
      })
    );

    return (
      <InputWrapper
        labelElement="div"
        size={size}
        __staticSelector="RadioGroup"
        classNames={classNames}
        styles={styles}
        ref={ref}
        {...wrapperProps}
        {...others}
      >
        <Group
          role="radiogroup"
          spacing={spacing}
          direction={variant === 'horizontal' ? 'row' : 'column'}
          style={{ paddingTop: 5 }}
        >
          {radios}
        </Group>
      </InputWrapper>
    );
  }
);

RadioGroup.displayName = '@mantine/core/RadioGroup';
