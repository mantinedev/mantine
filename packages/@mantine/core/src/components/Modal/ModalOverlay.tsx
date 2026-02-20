import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseOverlay, ModalBaseOverlayProps } from '../ModalBase';
import { useModalBaseStackContext } from '../ModalBase/ModalBaseStack';
import { useModalContext } from './Modal.context';
import classes from './Modal.module.css';

export type ModalOverlayStylesNames = 'overlay';

export interface ModalOverlayProps
  extends ModalBaseOverlayProps,
    CompoundStylesApiProps<ModalOverlayFactory> {
  withOverlay?: boolean;
}

export type ModalOverlayFactory = Factory<{
  props: ModalOverlayProps;
  ref: HTMLDivElement;
  stylesNames: ModalOverlayStylesNames;
  compound: true;
}>;

export const ModalOverlay = factory<ModalOverlayFactory>((_props, ref) => {
  const props = useProps('ModalOverlay', null, _props);
  const { classNames, className, style, styles, vars, withOverlay, ...others } = props;

  const ctx = useModalContext();
  const modalStackCtx = useModalBaseStackContext();

  const overlayVisible =
    withOverlay === false
      ? false
      : ctx.stackId && modalStackCtx
        ? modalStackCtx.currentId === ctx.stackId
        : ctx.opened;

  return (
    <ModalBaseOverlay
      ref={ref}
      {...ctx.getStyles('overlay', { classNames, style, styles, className })}
      {...others}
      visible={overlayVisible}
      transitionProps={modalStackCtx && ctx.stackId ? { duration: 0 } : undefined}
    />
  );
});

ModalOverlay.classes = classes;
ModalOverlay.displayName = '@mantine/core/ModalOverlay';
