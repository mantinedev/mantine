import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseOverlay, ModalBaseOverlayProps, useModalBaseStackContext } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerOverlayStylesNames = 'overlay';

export interface DrawerOverlayProps
  extends ModalBaseOverlayProps,
    CompoundStylesApiProps<DrawerOverlayFactory> {
  withOverlay?: boolean;
}

export type DrawerOverlayFactory = Factory<{
  props: DrawerOverlayProps;
  ref: HTMLDivElement;
  stylesNames: DrawerOverlayStylesNames;
  compound: true;
}>;

export const DrawerOverlay = factory<DrawerOverlayFactory>((_props, ref) => {
  const props = useProps('DrawerOverlay', null, _props);
  const { classNames, className, style, styles, vars, withOverlay, ...others } = props;

  const ctx = useDrawerContext();
  const drawerStackCtx = useModalBaseStackContext();

  const overlayVisible =
    withOverlay === false
      ? false
      : ctx.stackId && drawerStackCtx
        ? drawerStackCtx.currentId === ctx.stackId
        : ctx.opened;

  return (
    <ModalBaseOverlay
      ref={ref}
      {...ctx.getStyles('overlay', { classNames, style, styles, className })}
      {...others}
      visible={overlayVisible}
      transitionProps={drawerStackCtx && ctx.stackId ? { duration: 0 } : undefined}
    />
  );
});

DrawerOverlay.classes = classes;
DrawerOverlay.displayName = '@mantine/core/DrawerOverlay';
