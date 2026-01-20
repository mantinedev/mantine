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
import { AppShellCompoundProps } from '../AppShell.types';

export type AppShellFooterStylesNames = 'footer';

export interface AppShellFooterProps
  extends
    BoxProps,
    AppShellCompoundProps,
    StylesApiProps<AppShellFooterFactory>,
    ElementProps<'footer'> {}

export type AppShellFooterFactory = Factory<{
  props: AppShellFooterProps;
  ref: HTMLElement;
  stylesNames: AppShellFooterStylesNames;
}>;

export const AppShellFooter = factory<AppShellFooterFactory>((_props) => {
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
  } = useProps('AppShellFooter', null, _props);

  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="footer"
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...ctx.getStyles('footer', {
        className: cx({ [RemoveScroll.classNames.zeroRight]: ctx.offsetScrollbars }, className),
        classNames,
        styles,
        style,
      })}
      {...others}
      __vars={{ '--app-shell-footer-z-index': (zIndex ?? ctx.zIndex)?.toString() }}
    />
  );
});

AppShellFooter.classes = classes;
AppShellFooter.displayName = '@mantine/core/AppShellFooter';
