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
import classes from './Editable.module.css';

export type EditableEditTriggerStylesNames = 'editTrigger';

export interface EditableEditTriggerProps
  extends BoxProps, CompoundStylesApiProps<EditableEditTriggerFactory>, ElementProps<'button'> {}

export type EditableEditTriggerFactory = Factory<{
  props: EditableEditTriggerProps;
  ref: HTMLButtonElement;
  stylesNames: EditableEditTriggerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditableEditTriggerProps> = {};

export const EditableEditTrigger = factory<EditableEditTriggerFactory>((_props) => {
  const props = useProps('EditableEditTrigger', defaultProps, _props);
  const { classNames, className, style, styles, vars, onClick, ...others } = props;
  const ctx = useEditableContext();

  if (ctx.controller.editing) {
    return null;
  }

  return (
    <Box
      component="button"
      {...others}
      type="button"
      disabled={ctx.controller.disabled || ctx.controller.readOnly}
      {...ctx.getStyles('editTrigger', { className, style, classNames, styles })}
      onClick={(event) => {
        ctx.controller.edit();
        onClick?.(event);
      }}
    />
  );
});

EditableEditTrigger.classes = classes;
EditableEditTrigger.displayName = '@mantine/core/EditableEditTrigger';
