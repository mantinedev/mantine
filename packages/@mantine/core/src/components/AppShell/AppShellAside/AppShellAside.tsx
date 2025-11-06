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
import { AppShellCompoundProps } from '../AppShell.types';
import classes from '../AppShell.module.css';

export type AppShellAsideStylesNames = 'aside';

export interface AppShellAsideProps
  extends BoxProps,
    AppShellCompoundProps,
    StylesApiProps<AppShellAsideFactory>,
    ElementProps<'aside'> {}

export type AppShellAsideFactory = Factory<{
  props: AppShellAsideProps;
  ref: HTMLElement;
  stylesNames: AppShellAsideStylesNames;
}>;

export const AppShellAside = factory<AppShellAsideFactory>((_props, ref) => {
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
  } = useProps('AppShellAside', null, _props);

  const ctx = useAppShellContext();

  if (ctx.disabled) {
    return null;
  }

  return (
    <Box
      component="aside"
      ref={ref}
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...ctx.getStyles('aside', {
        className: cx({ [RemoveScroll.classNames.zeroRight]: ctx.offsetScrollbars }, className),
        classNames,
        styles,
        style,
      })}
      {...others}
      __vars={{ '--app-shell-aside-z-index': `calc(${zIndex ?? ctx.zIndex} + 1)` }}
    />
  );
});

AppShellAside.classes = classes;
AppShellAside.displayName = '@mantine/core/AppShellAside';
