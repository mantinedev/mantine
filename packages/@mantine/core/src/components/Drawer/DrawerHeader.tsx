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

export type DrawerHeaderStylesNames = 'header';

export interface DrawerHeaderProps
  extends BoxProps, CompoundStylesApiProps<DrawerHeaderFactory>, ElementProps<'header'> {}

export type DrawerHeaderFactory = Factory<{
  props: DrawerHeaderProps;
  ref: HTMLElement;
  stylesNames: DrawerHeaderStylesNames;
  compound: true;
}>;

export const DrawerHeader = factory<DrawerHeaderFactory>((_props) => {
  const props = useProps('DrawerHeader', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();
  const baseCtx = useModalBaseContext();

  const { className: stylesClassName, ...headerStyles } = ctx.getStyles('header', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      component="header"
      data-sticky={ctx.stickyHeader || undefined}
      className={cx({ [baseClasses.header]: !baseCtx.unstyled }, stylesClassName)}
      {...headerStyles}
      {...others}
    />
  );
});

DrawerHeader.classes = classes;
DrawerHeader.displayName = '@mantine/core/DrawerHeader';
