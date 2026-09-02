import {
  Box,
  BoxComponentProps,
  CompoundStylesApiProps,
  polymorphicFactory,
  PolymorphicFactory,
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
      onClick,
      ...others
    } = props as typeof props & {
      children?: React.ReactNode;
      component?: any;
      onClick?: React.MouseEventHandler<HTMLElement>;
    };
    const ctx = useToolbarContext();

    return (
      <Box
        component={component || 'button'}
        type={!component || component === 'button' ? 'button' : undefined}
        {...others}
        {...ctx.getStyles('toggle', { className, classNames, style, styles, focusable: true })}
        data-toolbar-toggle
        data-active={active || undefined}
        data-disabled={disabled || undefined}
        data-auto-width={autoWidth || undefined}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        aria-pressed={active}
        tabIndex={disabled ? -1 : 0}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          if (disabled) {
            event.preventDefault();
            return;
          }
          onClick?.(event);
        }}
      >
        {children}
      </Box>
    );
  }
);

ToolbarToggle.classes = classes;
ToolbarToggle.displayName = '@mantine/core/ToolbarToggle';
