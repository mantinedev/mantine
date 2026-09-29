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
  const { classNames, className, style, styles, vars, onChange, onKeyDown, ref, ...others } = props;

  const ctx = useEditableContext();
  const field = useEditableField<HTMLTextAreaElement>({
    multiline: true,
    ref,
    onChange,
    onKeyDown,
  });

  if (field.hidden) {
    return null;
  }

  const shouldAutosize = ctx.autosize && getEnv() !== 'test';
  const autosizeProps = shouldAutosize ? { maxRows: ctx.maxRows, minRows: ctx.minRows } : {};

  return (
    <Box
      component={(shouldAutosize ? TextareaAutosize : 'textarea') as any}
      {...ctx.ariaProps}
      {...others}
      {...field.fieldProps}
      {...autosizeProps}
      rows={ctx.minRows}
      {...ctx.getStyles('input', { className, style, classNames, styles })}
    />
  );
});

EditableTextarea.classes = classes;
EditableTextarea.displayName = '@mantine/core/EditableTextarea';
