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

export type EditableCancelTriggerStylesNames = 'cancelTrigger';

export interface EditableCancelTriggerProps
  extends BoxProps, CompoundStylesApiProps<EditableCancelTriggerFactory>, ElementProps<'button'> {}

export type EditableCancelTriggerFactory = Factory<{
  props: EditableCancelTriggerProps;
  ref: HTMLButtonElement;
  stylesNames: EditableCancelTriggerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditableCancelTriggerProps> = {};

export const EditableCancelTrigger = factory<EditableCancelTriggerFactory>((_props) => {
  const props = useProps('EditableCancelTrigger', defaultProps, _props);
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
      {...ctx.getStyles('cancelTrigger', { className, style, classNames, styles })}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }}
      onClick={(event) => {
        ctx.controller.cancel();
        onClick?.(event);
      }}
    />
  );
});

EditableCancelTrigger.classes = classes;
EditableCancelTrigger.displayName = '@mantine/core/EditableCancelTrigger';
