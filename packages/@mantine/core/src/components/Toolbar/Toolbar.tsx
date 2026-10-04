import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getSize,
  MantineColor,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import { ToggleVariant } from '../Toggle';
import { ToolbarProvider } from './Toolbar.context';
import { ToolbarDivider, ToolbarDividerStylesNames } from './ToolbarDivider/ToolbarDivider';
import { ToolbarGroup, ToolbarGroupStylesNames } from './ToolbarGroup/ToolbarGroup';
import { ToolbarToggle, ToolbarToggleStylesNames } from './ToolbarToggle/ToolbarToggle';
import { ToolbarToggleGroup } from './ToolbarToggleGroup/ToolbarToggleGroup';
import {
  ToolbarToggleItem,
  ToolbarToggleItemStylesNames,
} from './ToolbarToggleItem/ToolbarToggleItem';
import { useToolbarNavigation } from './use-toolbar-navigation';
import classes from './Toolbar.module.css';

export type ToolbarStylesNames =
  | 'root'
  | ToolbarGroupStylesNames
  | ToolbarToggleStylesNames
  | ToolbarToggleItemStylesNames
  | ToolbarDividerStylesNames;

export type ToolbarCssVariables = {
  root: '--toolbar-toggle-size' | '--toolbar-padding' | '--toolbar-gap' | '--toolbar-radius';
  toggle:
    | '--toolbar-toggle-active-bg'
    | '--toolbar-toggle-active-hover'
    | '--toolbar-toggle-active-color';
};

export interface ToolbarProps
  extends BoxProps, StylesApiProps<ToolbarFactory>, ElementProps<'div'> {
  /** Toolbar orientation, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';

  /** Whether arrow key navigation wraps from last to first item, `true` by default */
  loop?: boolean;

  /** Controls size of toggle components, padding, and gap, `'md'` by default */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, propagated to all children, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Determines whether the toolbar has a border, `true` by default */
  withBorder?: boolean;

  /** Key of `theme.colors` or any valid CSS color, controls color of child toggle components */
  color?: MantineColor;

  /** Determines whether icon color with filled variant should be changed based on the given `color` prop */
  autoContrast?: boolean;

  /** Toolbar content */
  children: React.ReactNode;
}

export type ToolbarFactory = Factory<{
  props: ToolbarProps;
  ref: HTMLDivElement;
  stylesNames: ToolbarStylesNames;
  vars: ToolbarCssVariables;
  variant: ToggleVariant;
  staticComponents: {
    Group: typeof ToolbarGroup;
    Toggle: typeof ToolbarToggle;
    ToggleGroup: typeof ToolbarToggleGroup;
    ToggleItem: typeof ToolbarToggleItem;
    Divider: typeof ToolbarDivider;
  };
}>;

const defaultProps = {
  orientation: 'horizontal',
  loop: true,
  withBorder: true,
  variant: 'filled',
} satisfies Partial<ToolbarProps>;

const varsResolver = createVarsResolver<ToolbarFactory>(
  (theme, { size, radius, color, variant, autoContrast }) => {
    const activeColors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || 'filled',
      autoContrast,
    });

    return {
      root: {
        '--toolbar-toggle-size':
          size !== undefined ? getSize(size, 'toolbar-toggle-size') : undefined,
        '--toolbar-padding': size !== undefined ? getSize(size, 'toolbar-padding') : undefined,
        '--toolbar-gap': size !== undefined ? getSize(size, 'toolbar-gap') : undefined,
        '--toolbar-radius': radius !== undefined ? getRadius(radius) : undefined,
      },
      toggle: {
        '--toolbar-toggle-active-bg': activeColors.background,
        '--toolbar-toggle-active-hover': activeColors.hover,
        '--toolbar-toggle-active-color': activeColors.color,
      },
    };
  }
);

export const Toolbar = factory<ToolbarFactory>((_props) => {
  const props = useProps('Toolbar', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    orientation,
    loop,
    size,
    radius,
    withBorder,
    color,
    autoContrast,
    variant,
    children,
    attributes,
    onKeyDown,
    onFocus,
    ref,
    ...others
  } = props;

  const { dir } = useDirection();

  const getStyles = useStyles<ToolbarFactory>({
    name: 'Toolbar',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { toolbarRef, handleKeyDown, handleItemFocus } = useToolbarNavigation({
    orientation: orientation!,
    loop: loop!,
    dir,
  });

  const mergedRef = useMergedRef(toolbarRef, ref);

  return (
    <ToolbarProvider value={{ getStyles, orientation: orientation! }}>
      <Box
        ref={mergedRef}
        role="toolbar"
        aria-orientation={orientation}
        {...getStyles('root')}
        data-orientation={orientation}
        data-with-border={withBorder || undefined}
        variant={variant}
        size={size}
        {...others}
        onKeyDown={(event) => {
          handleKeyDown(event);
          onKeyDown?.(event);
        }}
        onFocus={(event) => {
          handleItemFocus(event);
          onFocus?.(event);
        }}
      >
        {children}
      </Box>
    </ToolbarProvider>
  );
});

Toolbar.classes = classes;
Toolbar.displayName = '@mantine/core/Toolbar';
Toolbar.Group = ToolbarGroup;
Toolbar.Toggle = ToolbarToggle;
Toolbar.ToggleGroup = ToolbarToggleGroup;
Toolbar.ToggleItem = ToolbarToggleItem;
Toolbar.Divider = ToolbarDivider;
