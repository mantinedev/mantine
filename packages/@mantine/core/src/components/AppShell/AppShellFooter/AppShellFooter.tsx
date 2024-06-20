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

export type AppShellFooterStylesNames = 'footer';

export interface AppShellFooterProps
  extends BoxProps,
    StylesApiProps<AppShellFooterFactory>,
    ElementProps<'footer'> {
  /** Determines whether component should have a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Component `z-index`, by default inherited from the `AppShell` */
  zIndex?: string | number;
}

export type AppShellFooterFactory = Factory<{
  props: AppShellFooterProps;
  ref: HTMLElement;
  stylesNames: AppShellFooterStylesNames;
}>;

const defaultProps: Partial<AppShellFooterProps> = {};

export const AppShellFooter = factory<AppShellFooterFactory>((_props, ref) => {
  const props = useProps('AppShellFooter', defaultProps, _props);
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
      component="footer"
      ref={ref}
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
