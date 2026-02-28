import TextareaAutosize from 'react-textarea-autosize';
import { useEffect } from 'react';
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

  /** If set, enables textarea height growing with its content @default `false` */
  autosize?: boolean;

  /** Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set */
  maxRows?: number;

  /** Minimum rows of autosize textarea, ignored if `autosize` prop is not set */
  minRows?: number;

  /** Controls `resize` CSS property @default `'none'` */
  resize?: React.CSSProperties['resize'];
}

export type TextareaFactory = Factory<{
  props: TextareaProps;
  ref: HTMLTextAreaElement;
  stylesNames: __InputStylesNames;
}>;

const defaultProps = {
  size: 'sm',
} satisfies Partial<TextareaProps>;

export const Textarea = factory<TextareaFactory>((props, ref) => {
  const { autosize, maxRows, minRows, __staticSelector, resize, ...others } = useProps(
    'Textarea',
    defaultProps,
    props
  );

  const shouldAutosize = autosize && getEnv() !== 'test';
  const autosizeProps = shouldAutosize ? { maxRows, minRows } : {};

  useEffect(() => {
    if (!shouldAutosize || typeof document === 'undefined') {
      return undefined;
    }

    const setMirrorAttributes = () => {
      document
        .querySelectorAll<HTMLTextAreaElement>('textarea[aria-hidden="true"][tabindex="-1"]')
        .forEach((element) => {
          if (
            element.style.position === 'absolute' &&
            element.style.visibility === 'hidden' &&
            element.style.zIndex === '-1000'
          ) {
            element.setAttribute('role', 'presentation');
            element.setAttribute('aria-label', 'autosize measurement mirror textarea');
          }
        });
    };

    // Workaround for react-textarea-autosize hidden mirror textarea.
    // Remove when upstream sets required accessibility attributes on mirror textarea.
    requestAnimationFrame(setMirrorAttributes);

    return undefined;
  }, [shouldAutosize]);

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
