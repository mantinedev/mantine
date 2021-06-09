import React, { Children, cloneElement, useState } from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme, MantineSize } from '../../theme';
import {
  InputWrapper,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Radio, RadioProps } from './Radio/Radio';
import { sizes } from './Radio/Radio.styles';
import useStyles from './RadioGroup.styles';

export { Radio };
export type { RadioProps };

export const RADIO_SIZES = sizes;

export interface RadioGroupProps
  extends DefaultProps<InputWrapperStylesNames>,
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

  /** Active radio color */
  color?: string;

  /** Predefined label fontSize, radio width, height and border-radius */
  size?: MantineSize;
}

export function RadioGroup({
  className,
  themeOverride,
  name,
  children,
  value,
  defaultValue,
  onChange,
  variant = 'horizontal',
  spacing = 'md',
  color,
  size,
  ...others
}: RadioGroupProps) {
  const [_value, setValue] = useState(value || defaultValue || '');
  const finalValue = typeof value === 'string' ? value : _value;
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ spacing, variant, theme }, null, 'radio-group');
  const uuid = useId(name);

  const handleChange = (v: string) => {
    setValue(v);
    typeof onChange === 'function' && onChange(v);
  };

  const radios: any = (Children.toArray(children) as React.ReactElement[])
    .filter((item) => item.type === Radio)
    .map((radio, index) =>
      cloneElement(radio, {
        key: index,
        checked: finalValue === radio.props.value,
        name: uuid,
        color,
        size,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event.currentTarget.value),
      })
    );

  return (
    <InputWrapper labelElement="div" {...others}>
      <div role="radiogroup" className={classes.wrapper}>
        {radios}
      </div>
    </InputWrapper>
  );
}

RadioGroup.displayName = '@mantine/core/RadioGroup';
