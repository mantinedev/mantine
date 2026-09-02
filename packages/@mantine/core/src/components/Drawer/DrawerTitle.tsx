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
import { useModalBaseContext, useOverlayTitleId } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Drawer.module.css';

export type DrawerTitleStylesNames = 'title';

export interface DrawerTitleProps
  extends BoxProps, CompoundStylesApiProps<DrawerTitleFactory>, ElementProps<'h2'> {}

export type DrawerTitleFactory = Factory<{
  props: DrawerTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: DrawerTitleStylesNames;
  compound: true;
}>;

export const DrawerTitle = factory<DrawerTitleFactory>((_props) => {
  const props = useProps('DrawerTitle', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();
  const baseCtx = useModalBaseContext();
  const titleId = useOverlayTitleId();

  const { className: stylesClassName, ...titleStyles } = ctx.getStyles('title', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      component="h2"
      className={cx({ [baseClasses.title]: !baseCtx.unstyled }, stylesClassName)}
      id={titleId}
      {...titleStyles}
      {...others}
    />
  );
});

DrawerTitle.classes = classes;
DrawerTitle.displayName = '@mantine/core/DrawerTitle';
