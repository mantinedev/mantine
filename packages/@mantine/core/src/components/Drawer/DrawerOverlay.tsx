import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseOverlay, ModalBaseOverlayProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerOverlayStylesNames = 'overlay';

export interface DrawerOverlayProps
  extends ModalBaseOverlayProps,
    CompoundStylesApiProps<DrawerOverlayFactory> {}

export type DrawerOverlayFactory = Factory<{
  props: DrawerOverlayProps;
  ref: HTMLDivElement;
  stylesNames: DrawerOverlayStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerOverlayProps> = {};

export const DrawerOverlay = factory<DrawerOverlayFactory>((_props, ref) => {
  const props = useProps('DrawerOverlay', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseOverlay
      ref={ref}
      {...ctx.getStyles('overlay', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerOverlay.classes = classes;
DrawerOverlay.displayName = '@mantine/core/DrawerOverlay';
