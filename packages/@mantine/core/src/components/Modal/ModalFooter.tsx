import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseFooter, ModalBaseFooterProps } from '../ModalBase';
import { useModalContext } from './Modal.context';
import classes from './Modal.module.css';

export type ModalFooterStylesNames = 'footer';

export interface ModalFooterProps
  extends ModalBaseFooterProps,
    CompoundStylesApiProps<ModalFooterFactory> {}

export type ModalFooterFactory = Factory<{
  props: ModalFooterProps;
  ref: HTMLElement;
  stylesNames: ModalFooterStylesNames;
  compound: true;
}>;

export const ModalFooter = factory<ModalFooterFactory>((_props, ref) => {
  const props = useProps('ModalFooter', null, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();

  return (
    <ModalBaseFooter
      ref={ref}
      {...ctx.getStyles('footer', { classNames, style, styles, className })}
      {...others}
    />
  );
});

ModalFooter.classes = classes;
ModalFooter.displayName = '@mantine/core/ModalFooter';
