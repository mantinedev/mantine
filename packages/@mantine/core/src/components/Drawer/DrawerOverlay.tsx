import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseOverlayProps, useModalBaseContext, useOverlayTransition } from '../ModalBase';
import { Overlay } from '../Overlay';
import { Transition } from '../Transition';
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
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onClick,
    transitionProps,
    visible,
    ...others
  } = props;

  const ctx = useDrawerContext();
  const baseCtx = useModalBaseContext();
  const transition = useOverlayTransition(transitionProps);

  const { style: overlayStyle, ...overlayStyles } = ctx.getStyles('overlay', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Transition
      mounted={visible !== undefined ? visible : baseCtx.opened}
      {...transition}
      transition="fade"
    >
      {(transitionStyles) => (
        <Overlay
          fixed
          style={[overlayStyle, transitionStyles]}
          zIndex={baseCtx.zIndex}
          unstyled={baseCtx.unstyled}
          onClick={(event) => {
            onClick?.(event);
            baseCtx.closeOnClickOutside && baseCtx.onClose();
          }}
          {...overlayStyles}
          {...others}
        />
      )}
    </Transition>
  );
});

DrawerOverlay.classes = classes;
DrawerOverlay.displayName = '@mantine/core/DrawerOverlay';
