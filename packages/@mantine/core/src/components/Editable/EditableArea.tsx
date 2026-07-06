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

export type EditableAreaStylesNames = 'area';

export interface EditableAreaProps
  extends BoxProps, CompoundStylesApiProps<EditableAreaFactory>, ElementProps<'div'> {}

export type EditableAreaFactory = Factory<{
  props: EditableAreaProps;
  ref: HTMLDivElement;
  stylesNames: EditableAreaStylesNames;
  compound: true;
}>;

const defaultProps: Partial<EditableAreaProps> = {};

export const EditableArea = factory<EditableAreaFactory>((_props) => {
  const props = useProps('EditableArea', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useEditableContext();

  return <Box {...others} {...ctx.getStyles('area', { className, style, classNames, styles })} />;
});

EditableArea.classes = classes;
EditableArea.displayName = '@mantine/core/EditableArea';
