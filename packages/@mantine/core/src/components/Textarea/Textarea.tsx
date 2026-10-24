import {
  BoxProps,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getEnv,
  StylesApiProps,
  useProps,
} from '../../core';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { InputBase } from '../InputBase';
import { TextareaAutosize } from './Autosize';

type BottomSectionProps = React.ComponentProps<'div'> & DataAttributes;

export interface TextareaProps
  extends
    BoxProps,
    __BaseInputProps,
    StylesApiProps<TextareaFactory>,
    ElementProps<'textarea', 'size'> {
  __staticSelector?: string;

  /** If set, enables textarea height growing with its content @default false @category appearance */
  autosize?: boolean;

  /** Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set @category appearance */
  maxRows?: number;

  /** Minimum rows of autosize textarea, ignored if `autosize` prop is not set @category appearance */
  minRows?: number;

  /** Controls `resize` CSS property @default 'none' @category appearance */
  resize?: React.CSSProperties['resize'];

  /** Content rendered at the bottom of the input, inside the border @category appearance */
  bottomSection?: React.ReactNode;

  /** Props passed down to the `bottomSection` element */
  bottomSectionProps?: BottomSectionProps;

  /** Sets `pointer-events` styles on the `bottomSection` element. Use `'all'` when section contains interactive elements (buttons, links). @default 'none' */
  bottomSectionPointerEvents?: React.CSSProperties['pointerEvents'];
}

export type TextareaFactory = Factory<{
  props: TextareaProps;
  ref: HTMLTextAreaElement;
  stylesNames: __InputStylesNames;
}>;

export const Textarea = factory<TextareaFactory>((props) => {
  const {
    autosize,
    maxRows,
    minRows,
    __staticSelector,
    resize,
    bottomSection,
    bottomSectionProps,
    bottomSectionPointerEvents,
    ...others
  } = useProps(['Input', 'InputWrapper', 'Textarea'], null, props);

  const shouldAutosize = autosize && getEnv() !== 'test';
  const autosizeProps = shouldAutosize ? { maxRows, minRows } : {};

  return (
    <InputBase<any>
      component={shouldAutosize ? TextareaAutosize : 'textarea'}
      {...others}
      __staticSelector={__staticSelector || 'Textarea'}
      __bottomSection={bottomSection}
      __bottomSectionProps={bottomSectionProps}
      __bottomSectionPointerEvents={bottomSectionPointerEvents}
      multiline
      data-no-overflow={(autosize && maxRows === undefined) || undefined}
      __vars={{ '--input-resize': resize }}
      {...autosizeProps}
    />
  );
});

Textarea.classes = InputBase.classes;
Textarea.displayName = '@mantine/core/Textarea';

export namespace Textarea {
  export type Props = TextareaProps;
  export type Factory = TextareaFactory;
}
