import React, { useState } from 'react';
import { Textarea, useMantineTheme } from '../../src';

interface JsonInputProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Textarea>, 'error' | 'onChange'> {
  value: string;
  onChange(value: string): void;
}

export function JsonInput({
  value,
  onChange,
  onBlur,
  onFocus,
  inputStyle,
  ...others
}: JsonInputProps) {
  const [valid, setValid] = useState(true);
  const theme = useMantineTheme();

  return (
    <Textarea
      autosize
      value={value}
      minRows={2}
      error={!valid && 'Invalid json'}
      inputStyle={{
        fontFamily: theme.fontFamilyMonospace,
        fontSize: theme.fontSizes.xs,
        ...inputStyle,
      }}
      onChange={(event) => onChange(event.currentTarget.value)}
      onFocus={(event) => {
        setValid(true);
        typeof onFocus === 'function' && onFocus(event);
      }}
      onBlur={(event) => {
        typeof onBlur === 'function' && onBlur(event);
        try {
          onChange(JSON.stringify(JSON.parse(event.currentTarget.value), null, 2));
        } catch (e) {
          setValid(false);
        }
      }}
      {...others}
    />
  );
}
