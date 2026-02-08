import cx from 'clsx';
import { RemoveScroll } from 'react-remove-scroll';
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

export type AppShellHeaderStylesNames = 'header';

export interface AppShellHeaderProps
  extends BoxProps,
    AppShellCompoundProps,
    StylesApiProps<AppShellHeaderFactory>,
    ElementProps<'header'> {}

export type AppShellHeaderFactory = Factory<{
  props: AppShellHeaderProps;
  ref: HTMLElement;
  stylesNames: AppShellHeaderStylesNames;
}>;

export const AppShellHeader = factory<AppShellHeaderFactory>((_props, ref) => {
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
  } = useProps('AppShellHeader', null, _props);

  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="header"
      ref={ref}
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...ctx.getStyles('header', {
        className: cx({ [RemoveScroll.classNames.zeroRight]: ctx.offsetScrollbars }, className),
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
