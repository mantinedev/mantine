import cx from 'clsx';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useModalBaseContext } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Drawer.module.css';

export type DrawerFooterStylesNames = 'footer';

export interface DrawerFooterProps
  extends BoxProps, CompoundStylesApiProps<DrawerFooterFactory>, ElementProps<'footer'> {}

export type DrawerFooterFactory = Factory<{
  props: DrawerFooterProps;
  ref: HTMLElement;
  stylesNames: DrawerFooterStylesNames;
  compound: true;
}>;

export const DrawerFooter = factory<DrawerFooterFactory>((_props) => {
  const props = useProps('DrawerFooter', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();
  const baseCtx = useModalBaseContext();

  const { className: stylesClassName, ...footerStyles } = ctx.getStyles('footer', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      component="footer"
      data-sticky={ctx.stickyFooter || undefined}
      className={cx({ [baseClasses.footer]: !baseCtx.unstyled }, stylesClassName)}
      {...footerStyles}
      {...others}
    />
  );
});

DrawerFooter.classes = classes;
DrawerFooter.displayName = '@mantine/core/DrawerFooter';
