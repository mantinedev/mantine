import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseOverlayProps, useModalBaseContext, useOverlayTransition } from '../ModalBase';
import { Overlay } from '../Overlay';
import { Transition } from '../Transition';
import { useModalContext } from './Modal.context';
import classes from './Modal.module.css';

export type ModalOverlayStylesNames = 'overlay';

export interface ModalOverlayProps
  extends ModalBaseOverlayProps, CompoundStylesApiProps<ModalOverlayFactory> {}

export type ModalOverlayFactory = Factory<{
  props: ModalOverlayProps;
  ref: HTMLDivElement;
  stylesNames: ModalOverlayStylesNames;
  compound: true;
}>;

export const ModalOverlay = factory<ModalOverlayFactory>((_props) => {
  const props = useProps('ModalOverlay', null, _props);
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

  const ctx = useModalContext();
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

ModalOverlay.classes = classes;
ModalOverlay.displayName = '@mantine/core/ModalOverlay';
