import React, { cloneElement, forwardRef } from 'react';
import { useUncontrolled, useUuid } from '@mantine/hooks';
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  useMantineDefaultProps,
} from '@mantine/styles';
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

  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Spacing between radios in horizontal orientation */
  spacing?: MantineNumberSize;

  /** Active radio color from theme.colors */
  color?: MantineColor;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;

  /** Props spread to InputWrapper */
  wrapperProps?: { [key: string]: any };
}

const defaultProps: Partial<RadioGroupProps> = {
  orientation: 'horizontal',
  spacing: 'sm',
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const {
      id,
      name,
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
    } = useMantineDefaultProps('RadioGroup', defaultProps, props);

    const rootId = useUuid(id);
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
        id={rootId}
        labelElement="div"
        size={size}
        __staticSelector="RadioGroup"
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
          role="radiogroup"
          aria-labelledby={`${rootId}-label`}
          spacing={spacing}
          direction={orientation === 'horizontal' ? 'row' : 'column'}
          style={{ paddingTop: 5 }}
        >
          {radios}
        </Group>
      </InputWrapper>
    );
  }
);

RadioGroup.displayName = '@mantine/core/RadioGroup';
