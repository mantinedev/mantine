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

export type ModalHeaderStylesNames = 'header';

export interface ModalHeaderProps
  extends BoxProps, CompoundStylesApiProps<ModalHeaderFactory>, ElementProps<'header'> {}

export type ModalHeaderFactory = Factory<{
  props: ModalHeaderProps;
  ref: HTMLElement;
  stylesNames: ModalHeaderStylesNames;
  compound: true;
}>;

export const ModalHeader = factory<ModalHeaderFactory>((_props) => {
  const props = useProps('ModalHeader', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();
  const baseCtx = useModalBaseContext();

  const { className: stylesClassName, ...headerStyles } = ctx.getStyles('header', {
    classNames,
    style,
    styles,
    className,
  });

  return (
    <Box
      component="header"
      data-sticky={ctx.stickyHeader || undefined}
      className={cx({ [baseClasses.header]: !baseCtx.unstyled }, stylesClassName)}
      {...headerStyles}
      {...others}
    />
  );
});

ModalHeader.classes = classes;
ModalHeader.displayName = '@mantine/core/ModalHeader';
