import cx from 'clsx';
import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useModalBaseContext, useOverlayBodyId } from '../ModalBase';
import { useModalContext } from './Modal.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Modal.module.css';

export type ModalBodyStylesNames = 'body';

export interface ModalBodyProps
  extends BoxProps, CompoundStylesApiProps<ModalBodyFactory>, ElementProps<'div'> {}

export type ModalBodyFactory = Factory<{
  props: ModalBodyProps;
  ref: HTMLDivElement;
  stylesNames: ModalBodyStylesNames;
  compound: true;
}>;

export const ModalBody = factory<ModalBodyFactory>((_props) => {
  const props = useProps('ModalBody', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();
  const baseCtx = useModalBaseContext();
  const bodyId = useOverlayBodyId();

  const { className: stylesClassName, ...bodyStyles } = ctx.getStyles('body', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      id={bodyId}
      className={cx({ [baseClasses.body]: !baseCtx.unstyled }, stylesClassName)}
      {...bodyStyles}
      {...others}
    />
  );
});

ModalBody.classes = classes;
ModalBody.displayName = '@mantine/core/ModalBody';
