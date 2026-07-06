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

export type EditableSubmitTriggerStylesNames = 'submitTrigger';

export interface EditableSubmitTriggerProps
  extends BoxProps, CompoundStylesApiProps<EditableSubmitTriggerFactory>, ElementProps<'button'> {}

export type EditableSubmitTriggerFactory = Factory<{
  props: EditableSubmitTriggerProps;
  ref: HTMLButtonElement;
  stylesNames: EditableSubmitTriggerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditableSubmitTriggerProps> = {};

export const EditableSubmitTrigger = factory<EditableSubmitTriggerFactory>((_props) => {
  const props = useProps('EditableSubmitTrigger', defaultProps, _props);
  const { classNames, className, style, styles, vars, onClick, onMouseDown, ...others } = props;
  const ctx = useEditableContext();

  if (!ctx.controller.editing) {
    return null;
  }

  return (
    <Box
      component="button"
      {...others}
      type="button"
      {...ctx.getStyles('submitTrigger', { className, style, classNames, styles })}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }}
      onClick={(event) => {
        ctx.controller.submit();
        onClick?.(event);
      }}
    />
  );
});

EditableSubmitTrigger.classes = classes;
EditableSubmitTrigger.displayName = '@mantine/core/EditableSubmitTrigger';
