import {
  Box,
  BoxComponentProps,
  CompoundStylesApiProps,
  polymorphicFactory,
  PolymorphicFactory,
  useMantineTheme,
  useProps,
} from '../../../core';
import { useToolbarContext } from '../Toolbar.context';
import classes from '../Toolbar.module.css';

export type ToolbarToggleStylesNames = 'toggle';

export interface ToolbarToggleProps
  extends BoxComponentProps, CompoundStylesApiProps<ToolbarToggleFactory> {
  /** If set, the toggle is disabled */
  disabled?: boolean;

  /** If set, the toggle is displayed in active state */
  active?: boolean;

  /** If set, the toggle width adjusts to content instead of being square, `false` by default */
  autoWidth?: boolean;
}

export type ToolbarToggleFactory = PolymorphicFactory<{
  props: ToolbarToggleProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
  stylesNames: ToolbarToggleStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ToolbarToggleProps> = {};

export const ToolbarToggle = polymorphicFactory<ToolbarToggleFactory>(
  (_props: ToolbarToggleProps & { component?: any }) => {
    const props = useProps('ToolbarToggle', defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      disabled,
      active,
      autoWidth,
      children,
      component,
      ...others
    } = props as typeof props & { children?: React.ReactNode; component?: any };
    const ctx = useToolbarContext();
    const theme = useMantineTheme();

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
        component={component || 'button'}
        type={!component || component === 'button' ? 'button' : undefined}
        {...others}
        {...ctx.getStyles('toggle', { className, classNames, styles, focusable: true })}
        style={[variantStyles, style]}
        data-toolbar-toggle
        data-active={active || undefined}
        data-disabled={disabled || undefined}
        data-auto-width={autoWidth || undefined}
        disabled={disabled}
        aria-pressed={active}
        tabIndex={0}
      >
        {children}
      </Box>
    );
  }
);

ToolbarToggle.classes = classes;
ToolbarToggle.displayName = '@mantine/core/ToolbarToggle';
