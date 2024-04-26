import TextareaAutosize from 'react-textarea-autosize';
import {
  BoxProps,
  ElementProps,
  factory,
  Factory,
  getEnv,
  StylesApiProps,
  useProps,
} from '../../core';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';

export interface TextareaProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<TextareaFactory>,
    ElementProps<'textarea', 'size'> {
  __staticSelector?: string;

  /** Determines whether the textarea height should grow with its content, `false` by default */
  autosize?: boolean;

  /** Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set */
  maxRows?: number;

  /** Minimum rows of autosize textarea, ignored if `autosize` prop is not set */
  minRows?: number;

  /** Controls `resize` CSS property, `'none'` by default */
  resize?: React.CSSProperties['resize'];
}

export type TextareaFactory = Factory<{
  props: TextareaProps;
  ref: HTMLTextAreaElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps: Partial<TextareaProps> = {};

export const Textarea = factory<TextareaFactory>((props, ref) => {
  const { autosize, maxRows, minRows, __staticSelector, resize, ...others } = useProps(
    'Textarea',
    defaultProps,
    props
  );

  const shouldAutosize = autosize && getEnv() !== 'test';
  const autosizeProps = shouldAutosize ? { maxRows, minRows } : {};

  return (
    <InputBase<any>
      component={shouldAutosize ? TextareaAutosize : 'textarea'}
      ref={ref}
      {...others}
      __staticSelector={__staticSelector || 'Textarea'}
      multiline
      data-no-overflow={(autosize && maxRows === undefined) || undefined}
      __vars={{ '--input-resize': resize }}
      {...autosizeProps}
    />
  );
});

Textarea.classes = InputBase.classes;
Textarea.displayName = '@mantine/core/Textarea';
