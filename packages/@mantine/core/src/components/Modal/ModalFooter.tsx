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
import { useModalBaseContext } from '../ModalBase';
import { useModalContext } from './Modal.context';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Modal.module.css';

export type ModalFooterStylesNames = 'footer';

export interface ModalFooterProps
  extends BoxProps, CompoundStylesApiProps<ModalFooterFactory>, ElementProps<'footer'> {}

export type ModalFooterFactory = Factory<{
  props: ModalFooterProps;
  ref: HTMLElement;
  stylesNames: ModalFooterStylesNames;
  compound: true;
}>;

export const ModalFooter = factory<ModalFooterFactory>((_props) => {
  const props = useProps('ModalFooter', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();
  const baseCtx = useModalBaseContext();

  const { className: stylesClassName, ...footerStyles } = ctx.getStyles('footer', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      component="footer"
      data-sticky={ctx.stickyFooter || undefined}
      className={cx({ [baseClasses.footer]: !baseCtx.unstyled }, stylesClassName)}
      {...footerStyles}
      {...others}
    />
  );
});

ModalFooter.classes = classes;
ModalFooter.displayName = '@mantine/core/ModalFooter';
