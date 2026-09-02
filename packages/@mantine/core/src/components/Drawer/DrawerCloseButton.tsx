import cx from 'clsx';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { __CloseButtonProps, CloseButton } from '../CloseButton';
import { useModalBaseContext } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Drawer.module.css';

export type DrawerCloseButtonStylesNames = 'close';

export interface DrawerCloseButtonProps
  extends
    __CloseButtonProps,
    BoxProps,
    CompoundStylesApiProps<DrawerCloseButtonFactory>,
    ElementProps<'button'> {}

export type DrawerCloseButtonFactory = Factory<{
  props: DrawerCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: DrawerCloseButtonStylesNames;
  compound: true;
}>;

export const DrawerCloseButton = factory<DrawerCloseButtonFactory>((_props) => {
  const props = useProps('DrawerCloseButton', null, _props);
  const { classNames, className, style, styles, vars, onClick, ...others } = props;

  const ctx = useDrawerContext();
  const baseCtx = useModalBaseContext();

  const { className: stylesClassName, ...closeStyles } = ctx.getStyles('close', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <CloseButton
      {...others}
      {...closeStyles}
      onClick={(event) => {
        baseCtx.onClose();
        onClick?.(event);
      }}
      className={cx({ [baseClasses.close]: !baseCtx.unstyled }, stylesClassName)}
      unstyled={baseCtx.unstyled}
    />
  );
});

DrawerCloseButton.classes = classes;
DrawerCloseButton.displayName = '@mantine/core/DrawerCloseButton';
