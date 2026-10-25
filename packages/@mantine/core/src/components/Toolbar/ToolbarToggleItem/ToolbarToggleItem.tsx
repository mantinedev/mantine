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
import { useToolbarToggleGroupContext } from '../ToolbarToggleGroup/ToolbarToggleGroup.context';
import classes from '../Toolbar.module.css';

export type ToolbarToggleItemStylesNames = 'toggle';

export interface ToolbarToggleItemProps
  extends BoxProps, CompoundStylesApiProps<ToolbarToggleItemFactory>, ElementProps<'button'> {
  /** Value used to identify the item in ToggleGroup */
  value: string;

  /** If set, the toggle item is disabled */
  disabled?: boolean;

  /** If set, the toggle item width adjusts to content instead of being square, `false` by default */
  autoWidth?: boolean;
}

export type ToolbarToggleItemFactory = Factory<{
  props: ToolbarToggleItemProps;
  ref: HTMLButtonElement;
  stylesNames: ToolbarToggleItemStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ToolbarToggleItemProps> = {};

export const ToolbarToggleItem = factory<ToolbarToggleItemFactory>((_props) => {
  const props = useProps('ToolbarToggleItem', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    value,
    disabled,
    autoWidth,
    children,
    onClick,
    ...others
  } = props;
  const ctx = useToolbarContext();
  const groupCtx = useToolbarToggleGroupContext();

  const isActive =
    groupCtx.type === 'single'
      ? groupCtx.value === value
      : (groupCtx.value as string[]).includes(value);

  const isDisabled = disabled || groupCtx.disabled;

  return (
    <Box
      component="button"
      {...others}
      type="button"
      {...ctx.getStyles('toggle', { className, classNames, style, styles, focusable: true })}
      data-toolbar-toggle
      data-active={isActive || undefined}
      data-disabled={isDisabled || undefined}
      data-auto-width={autoWidth || undefined}
      disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      aria-pressed={isActive}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if (isDisabled) {
          event.preventDefault();
          return;
        }
        groupCtx.onChange(value);
        onClick?.(event);
      }}
    >
      {children}
    </Box>
  );
});

ToolbarToggleItem.classes = classes;
ToolbarToggleItem.displayName = '@mantine/core/ToolbarToggleItem';
