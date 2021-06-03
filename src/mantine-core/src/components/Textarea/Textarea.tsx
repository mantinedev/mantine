import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useId } from '@mantine/hooks';
import { useMantineTheme, DefaultProps } from '../../theme';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';
import { Input, InputProps } from '../Input/Input';

export interface TextareaProps
  extends DefaultProps,
    InputWrapperBaseProps,
    InputProps,
    React.ComponentPropsWithoutRef<'textarea'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** If true textarea will grow with content until maxRows are reached  */
  autosize?: boolean;

  /** Defines maxRows in autosize variant, not applicable to regular variant */
  maxRows?: number;

  /** Defined minRows in autosize variant and rows in regular variant */
  minRows?: number;

  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLTextAreaElement>;
}

export function Textarea({
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
  elementRef,
  ...others
}: TextareaProps) {
  const uuid = useId(id);
  const theme = useMantineTheme(themeOverride);

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
        <Input<typeof TextareaAutosize, HTMLTextAreaElement>
          required={required}
          component={TextareaAutosize}
          invalid={!!error}
          maxRows={maxRows}
          minRows={minRows}
          id={uuid}
          elementRef={elementRef}
          styles={{
            input: {
              paddingTop: theme.spacing.xs,
              paddingBottom: theme.spacing.xs,
              height: undefined,
            },
          }}
          {...others}
        />
      ) : (
        <Input<'textarea', HTMLTextAreaElement>
          component="textarea"
          required={required}
          id={uuid}
          invalid={!!error}
          rows={minRows}
          elementRef={elementRef}
          styles={{
            input: {
              paddingTop: theme.spacing.xs,
              paddingBottom: theme.spacing.xs,
            },
          }}
          {...others}
        />
      )}
    </InputWrapper>
  );
}

Textarea.displayName = '@mantine/core/Textarea';
