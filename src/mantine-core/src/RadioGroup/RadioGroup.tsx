import React, { Children, cloneElement, useState } from 'react';
import { useId } from '@mantine/hooks';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { InputWrapper, InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import { Radio } from './Radio/Radio';
import useStyles from './RadioGroup.styles';

export { Radio };

interface RadioGroupProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** <Radio /> components only */
  children: React.ReactNode;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?(value: string): void;
}

export function RadioGroup({
  className,
  themeOverride,
  name,
  children,
  value,
  defaultValue,
  onChange,
  ...others
}: RadioGroupProps) {
  const [_value, setValue] = useState(value || defaultValue || '');
  const finalValue = typeof value === 'string' ? value : _value;
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
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
        onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event.currentTarget.value),
      })
    );

  return (
    <InputWrapper labelElement="div" {...others}>
      <div role="radiogroup">{radios}</div>
    </InputWrapper>
  );
}

RadioGroup.displayName = '@mantine/core/RadioGroup';
