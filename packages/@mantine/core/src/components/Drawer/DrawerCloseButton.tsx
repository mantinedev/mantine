import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseCloseButton, ModalBaseCloseButtonProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerCloseButtonStylesNames = 'close';

export interface DrawerCloseButtonProps
  extends ModalBaseCloseButtonProps, CompoundStylesApiProps<DrawerCloseButtonFactory> {}

export type DrawerCloseButtonFactory = Factory<{
  props: DrawerCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: DrawerCloseButtonStylesNames;
  compound: true;
}>;

export const DrawerCloseButton = factory<DrawerCloseButtonFactory>((_props) => {
  const props = useProps('DrawerCloseButton', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseCloseButton
      {...ctx.getStyles('close', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerCloseButton.classes = classes;
DrawerCloseButton.displayName = '@mantine/core/DrawerCloseButton';
