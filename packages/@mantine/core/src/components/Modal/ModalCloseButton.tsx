import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseCloseButton, ModalBaseCloseButtonProps } from '../ModalBase';
import { useModalContext } from './Modal.context';
import classes from './Modal.module.css';

export type ModalCloseButtonStylesNames = 'close';

export interface ModalCloseButtonProps
  extends ModalBaseCloseButtonProps,
    CompoundStylesApiProps<ModalCloseButtonFactory> {}

export type ModalCloseButtonFactory = Factory<{
  props: ModalCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: ModalCloseButtonStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ModalCloseButtonProps> = {};

export const ModalCloseButton = factory<ModalCloseButtonFactory>((_props, ref) => {
  const props = useProps('ModalCloseButton', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();

  return (
    <ModalBaseCloseButton
      ref={ref}
      {...ctx.getStyles('close', { classNames, style, styles, className })}
      {...others}
    />
  );
});

ModalCloseButton.classes = classes;
ModalCloseButton.displayName = '@mantine/core/ModalCloseButton';
