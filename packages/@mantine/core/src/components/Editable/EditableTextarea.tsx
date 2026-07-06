import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  getEnv,
  useProps,
} from '../../core';
import { TextareaAutosize } from '../Textarea/Autosize';
import { useEditableContext } from './Editable.context';
import { useEditableField } from './use-editable-field';
import classes from './Editable.module.css';

export type EditableTextareaStylesNames = 'input';

export interface EditableTextareaProps
  extends
    BoxProps,
    CompoundStylesApiProps<EditableTextareaFactory>,
    ElementProps<'textarea', 'value' | 'defaultValue'> {}

export type EditableTextareaFactory = Factory<{
  props: EditableTextareaProps;
  ref: HTMLTextAreaElement;
  stylesNames: EditableTextareaStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditableTextareaProps> = {};

export const EditableTextarea = factory<EditableTextareaFactory>((_props) => {
  const props = useProps('EditableTextarea', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onChange,
    onKeyDown,
    onBlur,
    ref,
    ...others
  } = props;

  const ctx = useEditableContext();
  const field = useEditableField(true);
  const mergedRef = useMergedRef(ctx.inputRef as React.Ref<HTMLTextAreaElement>, ref);

  if (field.hidden) {
    return null;
  }

  const shouldAutosize = ctx.autosize && getEnv() !== 'test';
  const autosizeProps = shouldAutosize ? { maxRows: ctx.maxRows, minRows: ctx.minRows } : {};

  return (
    <Box
      component={(shouldAutosize ? TextareaAutosize : 'textarea') as any}
      {...others}
      {...field.attributes}
      {...autosizeProps}
      ref={mergedRef}
      rows={ctx.minRows}
      {...ctx.getStyles('input', { className, style, classNames, styles })}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        field.onChange(event);
        onChange?.(event);
      }}
      onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        field.onKeyDown(event);
        onKeyDown?.(event);
      }}
      onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => {
        field.onBlur();
        onBlur?.(event);
      }}
    />
  );
});

EditableTextarea.classes = classes;
EditableTextarea.displayName = '@mantine/core/EditableTextarea';
