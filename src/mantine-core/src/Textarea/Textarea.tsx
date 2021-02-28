import React, { forwardRef } from 'react';
import cx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import { useId } from '@mantine/hooks';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';
import useStyles from './Textarea.styles';

interface TextareaProps
  extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'textarea'>, 'onChange'> {
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** If true textarea will grow with content until maxRows are reached  */
  autosize?: boolean;
  placeholder?: string;

  /** Defines maxRows in autosize variant, not applicable to regular variant */
  maxRows?: number;

  /** Defined minRows in autosize variant and rows in regular variant */
  minRows?: number;
  radius?: MantineNumberSize;
  value?: string;
  onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export const Textarea = forwardRef(
  (
    {
      radius = 'sm',
      autosize = false,
      maxRows,
      minRows,
      label,
      error,
      description,
      id,
      placeholder,
      required,
      themeOverride,
      style,
      value,
      onChange,
      ...others
    }: TextareaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const uuid = useId(id);
    const classes = useStyles({ radius, theme: useMantineTheme(themeOverride) });

    return (
      <InputWrapper
        label={label}
        error={error}
        id={uuid}
        description={description}
        required={required}
        style={style}
      >
        {autosize ? (
          <TextareaAutosize
            aria-required={required}
            placeholder={placeholder}
            className={cx(classes.textarea, { [classes.invalid]: error })}
            maxRows={maxRows}
            minRows={minRows}
            id={uuid}
            ref={ref}
            value={value}
            onChange={onChange}
            {...others}
          />
        ) : (
          <textarea
            aria-required={required}
            id={uuid}
            placeholder={placeholder}
            className={cx(classes.textarea, { [classes.invalid]: error })}
            rows={minRows}
            ref={ref}
            value={value}
            onChange={onChange}
            {...others}
          />
        )}
      </InputWrapper>
    );
  }
);

Textarea.displayName = '@mantine/core/Textarea';
