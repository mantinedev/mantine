import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseOverlay, ModalBaseOverlayProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerOverlayStylesNames = 'overlay';

export interface DrawerOverlayProps
  extends ModalBaseOverlayProps, CompoundStylesApiProps<DrawerOverlayFactory> {}

export type DrawerOverlayFactory = Factory<{
  props: DrawerOverlayProps;
  ref: HTMLDivElement;
  stylesNames: DrawerOverlayStylesNames;
  compound: true;
}>;

export const DrawerOverlay = factory<DrawerOverlayFactory>((_props) => {
  const props = useProps('DrawerOverlay', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseOverlay
      {...ctx.getStyles('overlay', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerOverlay.classes = classes;
DrawerOverlay.displayName = '@mantine/core/DrawerOverlay';
