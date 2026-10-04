import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useToolbarContext } from '../Toolbar.context';
import classes from '../Toolbar.module.css';

export type ToolbarGroupStylesNames = 'group';

export interface ToolbarGroupProps
  extends BoxProps, CompoundStylesApiProps<ToolbarGroupFactory>, ElementProps<'div'> {}

export type ToolbarGroupFactory = Factory<{
  props: ToolbarGroupProps;
  ref: HTMLDivElement;
  stylesNames: ToolbarGroupStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ToolbarGroupProps> = {};

export const ToolbarGroup = factory<ToolbarGroupFactory>((_props) => {
  const props = useProps('ToolbarGroup', defaultProps, _props);
  const { classNames, className, style, styles, vars, children, ...others } = props;
  const ctx = useToolbarContext();

  return (
    <Box
      {...others}
      role="group"
      {...ctx.getStyles('group', { className, classNames, style, styles })}
      data-orientation={ctx.orientation}
    >
      {children}
    </Box>
  );
});

ToolbarGroup.classes = classes;
ToolbarGroup.displayName = '@mantine/core/ToolbarGroup';
