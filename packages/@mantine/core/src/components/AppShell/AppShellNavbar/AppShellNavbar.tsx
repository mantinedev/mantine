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
import classes from '../AppShell.module.css';
import type { AppShellCompoundProps } from '../AppShell.types';

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

  return (
    <Box
      component="nav"
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...ctx.getStyles('navbar', { className, classNames, styles, style })}
      {...others}
      __vars={{ '--app-shell-navbar-z-index': `calc(${zIndex ?? ctx.zIndex} + 1)` }}
    />
  );
});

AppShellNavbar.classes = classes;
AppShellNavbar.displayName = '@mantine/core/AppShellNavbar';
