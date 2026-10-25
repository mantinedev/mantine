import cx from 'clsx';
import { RemoveScroll } from 'react-remove-scroll';
import { useId } from '@mantine/hooks';
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
import { AppShellResizeHandle } from '../AppShellResizeHandle/AppShellResizeHandle';
import classes from '../AppShell.module.css';

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
  const sectionId = useId(others.id);

  if (ctx.disabled) {
    return null;
  }

  const isResizable = ctx.resize?.footer.enabled ?? false;
  const boxProps = ctx.getStyles('footer', {
    className: cx({ [RemoveScroll.classNames.zeroRight]: ctx.offsetScrollbars }, className),
    classNames,
    styles,
    style,
  });

  if (!isResizable) {
    return (
      <Box
        component="footer"
        mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
        {...boxProps}
        {...others}
        __vars={{ '--app-shell-footer-z-index': (zIndex ?? ctx.zIndex)?.toString() }}
      />
    );
  }

  const { children, dangerouslySetInnerHTML, ...rest } = others;

  return (
    <Box
      component="footer"
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...boxProps}
      {...rest}
      __vars={{ '--app-shell-footer-z-index': (zIndex ?? ctx.zIndex)?.toString() }}
      id={sectionId}
    >
      {dangerouslySetInnerHTML ? (
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      ) : (
        children
      )}
      <AppShellResizeHandle section="footer" sectionId={sectionId} />
    </Box>
  );
});

AppShellFooter.classes = classes;
AppShellFooter.displayName = '@mantine/core/AppShellFooter';
