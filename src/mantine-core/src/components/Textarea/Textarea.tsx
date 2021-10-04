import React, { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {
  useMantineTheme,
  DefaultProps,
  MantineSize,
  useUuid,
  useExtractedMargins,
} from '@mantine/styles';
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
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Input size */
  size?: MantineSize;

  /** Static selectors base */
  __staticSelector?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      autosize = false,
      maxRows,
      minRows,
      label,
      error,
      description,
      id,
      className,
      required,
      style,
      wrapperProps,
      classNames,
      styles,
      size = 'sm',
      __staticSelector = 'textarea',
      ...others
    }: TextareaProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const theme = useMantineTheme();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    const inputStyles = {
      ...styles,
      input: {
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
        ...styles?.input,
      },
    };

    return (
      <InputWrapper
        label={label}
        error={error}
        id={uuid}
        description={description}
        required={required}
        style={mergedStyles}
        className={className}
        classNames={classNames}
        styles={styles}
        size={size}
        __staticSelector={__staticSelector}
        {...wrapperProps}
      >
        {autosize ? (
          <Input<typeof TextareaAutosize>
            required={required}
            component={TextareaAutosize}
            invalid={!!error}
            maxRows={maxRows}
            minRows={minRows}
            id={uuid}
            ref={ref}
            classNames={classNames}
            styles={inputStyles}
            size={size}
            multiline
            {...rest}
          />
        ) : (
          <Input<'textarea'>
            component="textarea"
            required={required}
            id={uuid}
            invalid={!!error}
            rows={minRows}
            ref={ref}
            classNames={classNames}
            styles={inputStyles}
            size={size}
            __staticSelector={__staticSelector}
            multiline
            {...rest}
          />
        )}
      </InputWrapper>
    );
  }
);

Textarea.displayName = '@mantine/core/Textarea';
