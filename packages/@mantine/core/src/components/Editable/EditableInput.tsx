import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useEditableContext } from './Editable.context';
import { useEditableField } from './use-editable-field';
import classes from './Editable.module.css';

export type EditableInputStylesNames = 'input';

export interface EditableInputProps
  extends
    BoxProps,
    CompoundStylesApiProps<EditableInputFactory>,
    ElementProps<'input', 'value' | 'defaultValue'> {}

export type EditableInputFactory = Factory<{
  props: EditableInputProps;
  ref: HTMLInputElement;
  stylesNames: EditableInputStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditableInputProps> = {};

export const EditableInput = factory<EditableInputFactory>((_props) => {
  const props = useProps('EditableInput', defaultProps, _props);
  const { classNames, className, style, styles, vars, onChange, onKeyDown, ref, ...others } = props;

  const ctx = useEditableContext();
  const field = useEditableField<HTMLInputElement>({
    multiline: false,
    ref,
    onChange,
    onKeyDown,
  });

  if (field.hidden) {
    return null;
  }

  return (
    <Box
      component="input"
      {...ctx.ariaProps}
      {...others}
      {...field.fieldProps}
      {...ctx.getStyles('input', { className, style, classNames, styles })}
    />
  );
});

EditableInput.classes = classes;
EditableInput.displayName = '@mantine/core/EditableInput';
