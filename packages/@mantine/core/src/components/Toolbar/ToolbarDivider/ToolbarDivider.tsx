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

export type ToolbarDividerStylesNames = 'divider';

export interface ToolbarDividerProps
  extends BoxProps, CompoundStylesApiProps<ToolbarDividerFactory>, ElementProps<'div'> {}

export type ToolbarDividerFactory = Factory<{
  props: ToolbarDividerProps;
  ref: HTMLDivElement;
  stylesNames: ToolbarDividerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ToolbarDividerProps> = {};

export const ToolbarDivider = factory<ToolbarDividerFactory>((_props) => {
  const props = useProps('ToolbarDivider', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    'aria-orientation': ariaOrientation,
    ...others
  } = props;
  const ctx = useToolbarContext();

  return (
    <Box
      {...others}
      role="separator"
      aria-orientation={
        ariaOrientation ?? (ctx.orientation === 'horizontal' ? 'vertical' : 'horizontal')
      }
      {...ctx.getStyles('divider', { className, classNames, style, styles })}
      data-orientation={ctx.orientation === 'horizontal' ? 'horizontal' : 'vertical'}
    />
  );
});

ToolbarDivider.classes = classes;
ToolbarDivider.displayName = '@mantine/core/ToolbarDivider';
