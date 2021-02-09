import React from 'react';
import cx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import { useId } from '@mantine/hooks';
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper';
import useStyles from './Textarea.styles';

interface TextareaProps extends DefaultProps, InputWrapperBaseProps {
  id?: string;
  placeholder?: string;
  autosize?: boolean;
  maxRows?: number;
  minRows?: number;
}

export default function Textarea({
  autosize = false,
  maxRows = 4,
  minRows,
  label,
  error,
  description,
  id,
  placeholder,
  required,
  themeOverride,
}: TextareaProps) {
  const uuid = useId(id);
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  return (
    <InputWrapper
      label={label}
      error={error}
      id={uuid}
      description={description}
      required={required}
    >
      {autosize ? (
        <TextareaAutosize
          placeholder={placeholder}
          className={cx(classes.textarea, { [classes.invalid]: error })}
          maxRows={maxRows}
          minRows={minRows}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          className={cx(classes.textarea, { [classes.invalid]: error })}
          rows={maxRows}
        />
      )}
    </InputWrapper>
  );
}

Textarea.displayName = '@mantine/core/Textarea';
