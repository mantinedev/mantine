import React from 'react';
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
import type { AppShellCompoundProps } from '../AppShell.types';
import { AppShellResizeHandle } from '../AppShellResizeHandle/AppShellResizeHandle';
import classes from '../AppShell.module.css';

export type AppShellNavbarStylesNames = 'navbar';

export interface AppShellNavbarProps
  extends
    BoxProps,
    AppShellCompoundProps,
    StylesApiProps<AppShellNavbarFactory>,
    ElementProps<'div'> {}

export type AppShellNavbarFactory = Factory<{
  props: AppShellNavbarProps;
  ref: HTMLElement;
  stylesNames: AppShellNavbarStylesNames;
}>;

export const AppShellNavbar = factory<AppShellNavbarFactory>((_props) => {
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
  } = useProps('AppShellNavbar', null, _props);

  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  const isResizable = ctx.resize?.navbar.enabled ?? false;
  const boxProps = ctx.getStyles('navbar', { className, classNames, styles, style });

  if (!isResizable) {
    return (
      <Box
        component="nav"
        mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
        {...boxProps}
        {...others}
        __vars={{ '--app-shell-navbar-z-index': `calc(${zIndex ?? ctx.zIndex} + 1)` }}
      />
    );
  }

  const { children, ...rest } = others;

  return (
    <Box
      component="nav"
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...boxProps}
      {...rest}
      __vars={{ '--app-shell-navbar-z-index': `calc(${zIndex ?? ctx.zIndex} + 1)` }}
    >
      {children}
      <AppShellResizeHandle section="navbar" />
    </Box>
  );
});

AppShellNavbar.classes = classes;
AppShellNavbar.displayName = '@mantine/core/AppShellNavbar';
