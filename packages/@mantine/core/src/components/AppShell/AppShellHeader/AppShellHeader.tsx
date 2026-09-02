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
import type { AppShellCompoundProps } from '../AppShell.types';
import { AppShellResizeHandle } from '../AppShellResizeHandle/AppShellResizeHandle';
import classes from '../AppShell.module.css';

export type AppShellHeaderStylesNames = 'header';

export interface AppShellHeaderProps
  extends
    BoxProps,
    AppShellCompoundProps,
    StylesApiProps<AppShellHeaderFactory>,
    ElementProps<'header'> {}

export type AppShellHeaderFactory = Factory<{
  props: AppShellHeaderProps;
  ref: HTMLElement;
  stylesNames: AppShellHeaderStylesNames;
}>;

export const AppShellHeader = factory<AppShellHeaderFactory>((_props) => {
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
  const sectionId = useId(others.id);

  if (ctx.disabled) {
    return null;
  }

  const isResizable = ctx.resize?.header.enabled ?? false;
  const boxProps = ctx.getStyles('header', {
    className: cx({ [RemoveScroll.classNames.zeroRight]: ctx.offsetScrollbars }, className),
    classNames,
    styles,
    style,
  });

  if (!isResizable) {
    return (
      <Box
        component="header"
        mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
        {...boxProps}
        {...others}
        __vars={{ '--app-shell-header-z-index': (zIndex ?? ctx.zIndex)?.toString() }}
      />
    );
  }

  const { children, dangerouslySetInnerHTML, ...rest } = others;

  return (
    <Box
      component="header"
      mod={[{ 'with-border': withBorder ?? ctx.withBorder }, mod]}
      {...boxProps}
      {...rest}
      __vars={{ '--app-shell-header-z-index': (zIndex ?? ctx.zIndex)?.toString() }}
      id={sectionId}
    >
      {dangerouslySetInnerHTML ? (
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      ) : (
        children
      )}
      <AppShellResizeHandle section="header" sectionId={sectionId} />
    </Box>
  );
});

AppShellHeader.classes = classes;
AppShellHeader.displayName = '@mantine/core/AppShellHeader';
