import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useId } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, MantineSize } from '../../theme';
import {
  InputWrapperBaseProps,
  InputWrapper,
  InputWrapperStylesNames,
} from '../InputWrapper/InputWrapper';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';

export type TextareaStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface TextareaProps
  extends DefaultProps<TextareaStylesNames>,
    InputWrapperBaseProps,
    InputBaseProps,
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

  /** Input size */
  size?: MantineSize;
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
  classNames,
  styles,
  size = 'sm',
  __staticSelector = 'textarea',
  ...others
}: TextareaProps) {
  const uuid = useId(id);
  const theme = useMantineTheme(themeOverride);
  const _styles = styles as any;
  const inputStyles = {
    ..._styles,
    input: {
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      ..._styles?.input,
    },
  } as any;

  return (
    <InputWrapper
      label={label}
      error={error}
      id={uuid}
      description={description}
      required={required}
      style={style}
      className={className}
      classNames={classNames as any}
      styles={styles as any}
      size={size}
      __staticSelector={__staticSelector}
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
          classNames={classNames as any}
          styles={inputStyles}
          size={size}
          multiline
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
          classNames={classNames as any}
          styles={inputStyles}
          size={size}
          __staticSelector={__staticSelector}
          multiline
          {...others}
        />
      )}
    </InputWrapper>
  );
}

Textarea.displayName = '@mantine/core/Textarea';
