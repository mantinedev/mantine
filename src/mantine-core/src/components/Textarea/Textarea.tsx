import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { factory, ElementProps, useProps, Factory } from '../../core';
import { InputBase, InputBaseProps } from '../InputBase';
import { __InputStylesNames } from '../Input';

export interface TextareaProps extends InputBaseProps, ElementProps<'textarea', 'size'> {
  /** Determines whether the textarea height should grow with its content, `false` by default */
  autosize?: boolean;

  /** Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set */
  maxRows?: number;

  /** Minimum rows of autosize textarea, ignored if `autosize` prop is not set */
  minRows?: number;
}

export type TextareaFactory = Factory<{
  props: TextareaProps;
  ref: HTMLTextAreaElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<TextareaProps> = {};

export const Textarea = factory<TextareaFactory>((props, ref) => {
  const { autosize, maxRows, minRows, __staticSelector, ...others } = useProps(
    'Textarea',
    defaultProps,
    props
  );

  const autosizeProps = autosize ? { maxRows, minRows } : {};

  return (
    <InputBase<any>
      component={autosize ? TextareaAutosize : 'textarea'}
      ref={ref}
      {...others}
      __staticSelector={__staticSelector || 'Textarea'}
      multiline
      data-no-overflow={(autosize && maxRows === undefined) || undefined}
      {...autosizeProps}
    />
  );
});

Textarea.classes = InputBase.classes;
Textarea.displayName = '@mantine/core/Textarea';
