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
import { useModalBaseContext, useOverlayBodyId } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Drawer.module.css';

export type DrawerBodyStylesNames = 'body';

export interface DrawerBodyProps
  extends BoxProps, CompoundStylesApiProps<DrawerBodyFactory>, ElementProps<'div'> {}

export type DrawerBodyFactory = Factory<{
  props: DrawerBodyProps;
  ref: HTMLDivElement;
  stylesNames: DrawerBodyStylesNames;
  compound: true;
}>;

export const DrawerBody = factory<DrawerBodyFactory>((_props) => {
  const props = useProps('DrawerBody', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();
  const baseCtx = useModalBaseContext();
  const bodyId = useOverlayBodyId();

  const { className: stylesClassName, ...bodyStyles } = ctx.getStyles('body', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      id={bodyId}
      className={cx({ [baseClasses.body]: !baseCtx.unstyled }, stylesClassName)}
      {...bodyStyles}
      {...others}
    />
  );
});

DrawerBody.classes = classes;
DrawerBody.displayName = '@mantine/core/DrawerBody';
