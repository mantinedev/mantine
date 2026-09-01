import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { useActionBarContext } from '../ActionBar.context';
import classes from '../ActionBar.module.css';

export type ActionBarDividerStylesNames = 'divider';

export interface ActionBarDividerProps
  extends BoxProps, CompoundStylesApiProps<ActionBarDividerFactory>, ElementProps<'div'> {}

export type ActionBarDividerFactory = Factory<{
  props: ActionBarDividerProps;
  ref: HTMLDivElement;
  stylesNames: ActionBarDividerStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ActionBarDividerProps> = {};

export const ActionBarDivider = factory<ActionBarDividerFactory>((_props) => {
  const props = useProps('ActionBarDivider', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    role,
    'aria-orientation': ariaOrientation,
    ...others
  } = props;
  const ctx = useActionBarContext();

  return (
    <Box
      {...ctx.getStyles('divider', { className, classNames, style, styles })}
      role={role ?? 'separator'}
      aria-orientation={ariaOrientation ?? 'vertical'}
      {...others}
    />
  );
});

ActionBarDivider.classes = classes;
ActionBarDivider.displayName = '@mantine/core/ActionBarDivider';
