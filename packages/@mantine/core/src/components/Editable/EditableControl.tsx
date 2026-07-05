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

export type EditableControlStylesNames = 'control';

export interface EditableControlProps
  extends BoxProps, CompoundStylesApiProps<EditableControlFactory>, ElementProps<'div'> {}

export type EditableControlFactory = Factory<{
  props: EditableControlProps;
  ref: HTMLDivElement;
  stylesNames: EditableControlStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditableControlProps> = {};

export const EditableControl = factory<EditableControlFactory>((_props) => {
  const props = useProps('EditableControl', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useEditableContext();

  return (
    <Box {...others} {...ctx.getStyles('control', { className, style, classNames, styles })} />
  );
});

EditableControl.classes = classes;
EditableControl.displayName = '@mantine/core/EditableControl';
