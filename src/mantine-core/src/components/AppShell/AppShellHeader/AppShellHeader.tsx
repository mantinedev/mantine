import cx from 'clsx';
import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '../../../core';
import classes from '../AppShell.module.css';
import { useAppShellContext } from '../AppShell.context';

export type AppShellHeaderStylesNames = 'header';
export type AppShellHeaderVariant = string;
export type AppShellHeaderCssVariables = {
  root: '--test';
};

export interface AppShellHeaderProps
  extends BoxProps,
    StylesApiProps<AppShellHeaderFactory>,
    ElementProps<'header'> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: string | number;
}

export type AppShellHeaderFactory = Factory<{
  props: AppShellHeaderProps;
  ref: HTMLElement;
  stylesNames: AppShellHeaderStylesNames;
  vars: AppShellHeaderCssVariables;
  variant: AppShellHeaderVariant;
}>;

const defaultProps: Partial<AppShellHeaderProps> = {};

export const AppShellHeader = factory<AppShellHeaderFactory>((_props, ref) => {
  const props = useProps('AppShellHeader', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, withBorder, zIndex, ...others } =
    props;
  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="header"
      ref={ref}
      mod={{ 'with-border': withBorder ?? ctx.withBorder }}
      {...ctx.getStyles('header', {
        className: cx(RemoveScroll.classNames.zeroRight, className),
        classNames,
        styles,
        style,
      })}
      {...others}
      __vars={{ '--app-shell-header-z-index': (zIndex ?? ctx.zIndex)?.toString() }}
    />
  );
});

AppShellHeader.classes = classes;
AppShellHeader.displayName = '@mantine/core/AppShellHeader';
