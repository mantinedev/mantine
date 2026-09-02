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
import { useModalContext } from './Modal.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Modal.module.css';

export type ModalCloseButtonStylesNames = 'close';

export interface ModalCloseButtonProps
  extends
    __CloseButtonProps,
    BoxProps,
    CompoundStylesApiProps<ModalCloseButtonFactory>,
    ElementProps<'button'> {}

export type ModalCloseButtonFactory = Factory<{
  props: ModalCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: ModalCloseButtonStylesNames;
  compound: true;
}>;

export const ModalCloseButton = factory<ModalCloseButtonFactory>((_props) => {
  const props = useProps('ModalCloseButton', null, _props);
  const { classNames, className, style, styles, vars, onClick, ...others } = props;

  const ctx = useModalContext();
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

ModalCloseButton.classes = classes;
ModalCloseButton.displayName = '@mantine/core/ModalCloseButton';
