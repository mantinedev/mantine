import { CompoundStylesApiProps, factory, Factory, useProps } from '../../core';
import { ModalBaseBody, ModalBaseBodyProps } from '../ModalBase';
import { useModalContext } from './Modal.context';
import classes from './Modal.module.css';

export type ModalBodyStylesNames = 'body';

export interface ModalBodyProps
  extends ModalBaseBodyProps,
    CompoundStylesApiProps<ModalBodyFactory> {}

export type ModalBodyFactory = Factory<{
  props: ModalBodyProps;
  ref: HTMLDivElement;
  stylesNames: ModalBodyStylesNames;
  compound: true;
}>;

const defaultProps: Partial<ModalBodyProps> = {};

export const ModalBody = factory<ModalBodyFactory>((_props, ref) => {
  const props = useProps('ModalBody', defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;

  const ctx = useModalContext();

  return (
    <ModalBaseBody
      ref={ref}
      {...ctx.getStyles('body', { classNames, style, styles, className })}
      {...others}
    />
  );
});

ModalBody.classes = classes;
ModalBody.displayName = '@mantine/core/ModalBody';
