import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
} from '../../../core';
import { useAppShellContext } from '../AppShell.context';
import classes from '../AppShell.module.css';

export type AppShellNavbarStylesNames = 'navbar';

export interface AppShellNavbarProps
  extends BoxProps,
    StylesApiProps<AppShellNavbarFactory>,
    ElementProps<'div'> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: string | number;
}

export type AppShellNavbarFactory = Factory<{
  props: AppShellNavbarProps;
  ref: HTMLElement;
  stylesNames: AppShellNavbarStylesNames;
}>;

const defaultProps: Partial<AppShellNavbarProps> = {};

export const AppShellNavbar = factory<AppShellNavbarFactory>((_props, ref) => {
  const props = useProps('AppShellNavbar', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    withBorder,
    zIndex,
    mod,
    ...others
  } = props;
  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="nav"
      ref={ref}
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...ctx.getStyles('navbar', { className, classNames, styles, style })}
      {...others}
      __vars={{
        '--app-shell-navbar-z-index': `calc(${zIndex ?? ctx.zIndex} + 1)`,
      }}
    />
  );
});

AppShellNavbar.classes = classes;
AppShellNavbar.displayName = '@mantine/core/AppShellNavbar';
