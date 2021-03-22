import React, { forwardRef } from 'react';
import cx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { useId } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, MantineNumberSize } from '@mantine/theme';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';
import useStyles from './Textarea.styles';

interface TextareaProps
  extends DefaultProps,
    InputWrapperBaseProps,
    React.ComponentPropsWithoutRef<'textarea'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** If true textarea will grow with content until maxRows are reached  */
  autosize?: boolean;

  /** Defines maxRows in autosize variant, not applicable to regular variant */
  maxRows?: number;

  /** Defined minRows in autosize variant and rows in regular variant */
  minRows?: number;

  /** Textarea border-radius defined in theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Style properties added to input element */
  inputStyle?: React.CSSProperties;

  /** Class name added to input element */
  inputClassName?: string;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;
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
      className,
      required,
      themeOverride,
      style,
      wrapperProps,
      inputStyle,
      inputClassName,
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
        className={className}
        {...wrapperProps}
      >
        {autosize ? (
          <TextareaAutosize
            aria-required={required}
            className={cx(classes.textarea, { [classes.invalid]: error }, inputClassName)}
            maxRows={maxRows}
            minRows={minRows}
            id={uuid}
            ref={ref}
            style={{ ...inputStyle, height: undefined }}
            {...others}
          />
        ) : (
          <textarea
            aria-required={required}
            id={uuid}
            className={cx(classes.textarea, { [classes.invalid]: error }, inputClassName)}
            rows={minRows}
            ref={ref}
            style={inputStyle}
            {...others}
          />
        )}
      </InputWrapper>
    );
  }
);

Textarea.displayName = '@mantine/core/Textarea';
