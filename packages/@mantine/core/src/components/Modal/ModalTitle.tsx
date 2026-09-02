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
import { useModalBaseContext, useOverlayTitleId } from '../ModalBase';
import { useModalContext } from './Modal.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Modal.module.css';

export type ModalTitleStylesNames = 'title';

export interface ModalTitleProps
  extends BoxProps, CompoundStylesApiProps<ModalTitleFactory>, ElementProps<'h2'> {}

export type ModalTitleFactory = Factory<{
  props: ModalTitleProps;
  ref: HTMLHeadingElement;
  stylesNames: ModalTitleStylesNames;
  compound: true;
}>;

export const ModalTitle = factory<ModalTitleFactory>((_props) => {
  const props = useProps('ModalTitle', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();
  const baseCtx = useModalBaseContext();
  const titleId = useOverlayTitleId();

  const { className: stylesClassName, ...titleStyles } = ctx.getStyles('title', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      component="h2"
      className={cx({ [baseClasses.title]: !baseCtx.unstyled }, stylesClassName)}
      id={titleId}
      {...titleStyles}
      {...others}
    />
  );
});

ModalTitle.classes = classes;
ModalTitle.displayName = '@mantine/core/ModalTitle';
