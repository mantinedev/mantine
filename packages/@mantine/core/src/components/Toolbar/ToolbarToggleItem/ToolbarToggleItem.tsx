import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useMantineTheme,
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
    children,
    onClick,
    ...others
  } = props;
  const ctx = useToolbarContext();
  const groupCtx = useToolbarToggleGroupContext();
  const theme = useMantineTheme();

  const isActive =
    groupCtx.type === 'single'
      ? groupCtx.value === value
      : (groupCtx.value as string[]).includes(value);

  const isDisabled = disabled || groupCtx.disabled;

  let variantStyles: React.CSSProperties | undefined;
  if (ctx.variant || ctx.color) {
    const activeColors = theme.variantColorResolver({
      color: ctx.color || theme.primaryColor,
      theme,
      variant: ctx.variant || 'light',
      autoContrast: ctx.autoContrast,
    });

    variantStyles = {
      '--toolbar-toggle-active-bg': activeColors.background,
      '--toolbar-toggle-active-hover': activeColors.hover,
      '--toolbar-toggle-active-color': activeColors.color,
    } as React.CSSProperties;
  }

  return (
    <Box
      component="button"
      {...others}
      type="button"
      {...ctx.getStyles('toggle', { className, classNames, styles, focusable: true })}
      style={[variantStyles, style]}
      data-toolbar-toggle
      data-active={isActive || undefined}
      data-disabled={isDisabled || undefined}
      disabled={isDisabled}
      tabIndex={0}
      aria-pressed={isActive}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        if (!isDisabled) {
          groupCtx.onChange(value);
          onClick?.(event);
        }
      }}
    >
      {children}
    </Box>
  );
});

ToolbarToggleItem.classes = classes;
ToolbarToggleItem.displayName = '@mantine/core/ToolbarToggleItem';
