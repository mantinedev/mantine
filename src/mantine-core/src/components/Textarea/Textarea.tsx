import React, { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { DefaultProps, MantineSize, useUuid, useExtractedMargins } from '@mantine/styles';
import { InputWrapperBaseProps, InputWrapper } from '../InputWrapper/InputWrapper';
import { TextInputStylesNames } from '../TextInput/TextInput';
import { Input, InputBaseProps } from '../Input/Input';
import useStyles from './Textarea.styles';

export interface TextareaProps
  extends DefaultProps<TextInputStylesNames>,
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
      __staticSelector = 'Textarea',
      sx,
      ...others
    }: TextareaProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const { classes, cx } = useStyles();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const _classNames = { ...classNames, input: cx(classes.input, classNames?.input) };

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
        sx={sx}
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
            classNames={_classNames}
            styles={styles}
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
            classNames={_classNames}
            styles={styles}
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
