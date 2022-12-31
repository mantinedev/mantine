import React, { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineSize, useComponentDefaultProps } from '@mantine/styles';
import { extractSystemStyles } from '../Box';
import { InputWrapperBaseProps, Input, InputSharedProps } from '../Input';
import { TextInputStylesNames } from '../TextInput/TextInput';
import useStyles from './Textarea.styles';

export interface TextareaProps
  extends DefaultProps<TextInputStylesNames>,
    InputWrapperBaseProps,
    InputSharedProps,
    React.ComponentPropsWithoutRef<'textarea'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** If true textarea will grow with content until maxRows are reached  */
  autosize?: boolean;

  /** Defines maxRows in autosize variant, not applicable to regular variant */
  maxRows?: number;

  /** Defined minRows in autosize variant and rows in regular variant */
  minRows?: number;

  /** Props passed to root element */
  wrapperProps?: Record<string, any>;

  /** Input size */
  size?: MantineSize;

  /** Static selectors base */
  __staticSelector?: string;
}

const defaultProps: Partial<TextareaProps> = {
  autosize: false,
  size: 'sm',
  __staticSelector: 'Textarea',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    autosize,
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
    size,
    __staticSelector,
    sx,
    errorProps,
    descriptionProps,
    labelProps,
    inputWrapperOrder,
    inputContainer,
    unstyled,
    withAsterisk,
    variant,
    ...others
  } = useComponentDefaultProps('Textarea', defaultProps, props);

  const uuid = useId(id);
  const { classes, cx } = useStyles();
  const { systemStyles, rest } = extractSystemStyles(others);
  const sharedProps = {
    required,
    ref,
    error,
    id: uuid,
    classNames: { ...classNames, input: cx(classes.input, classNames?.input) },
    styles,
    __staticSelector,
    size,
    multiline: true,
    unstyled,
    variant,
    ...rest,
  };

  return (
    <Input.Wrapper
      label={label}
      error={error}
      id={uuid}
      description={description}
      required={required}
      style={style}
      className={className}
      classNames={classNames}
      styles={styles}
      size={size}
      __staticSelector={__staticSelector}
      sx={sx}
      errorProps={errorProps}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      inputContainer={inputContainer}
      inputWrapperOrder={inputWrapperOrder}
      unstyled={unstyled}
      withAsterisk={withAsterisk}
      variant={variant}
      {...systemStyles}
      {...wrapperProps}
    >
      {autosize ? (
        <Input<typeof TextareaAutosize>
          {...sharedProps}
          component={TextareaAutosize}
          maxRows={maxRows}
          minRows={minRows}
        />
      ) : (
        <Input<'textarea'> {...sharedProps} component="textarea" rows={minRows} />
      )}
    </Input.Wrapper>
  );
});

Textarea.displayName = '@mantine/core/Textarea';
