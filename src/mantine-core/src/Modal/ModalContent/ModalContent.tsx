import React, { forwardRef } from 'react';
import { useComponentDefaultProps, rem } from '@mantine/styles';
import { ModalBase, ModalBaseContentProps } from '../../ModalBase';
import { useModalContext, ScrollAreaComponent } from '../Modal.context';

export interface ModalContentProps extends ModalBaseContentProps {
  /** Component used as scroll area, ScrollArea.Autosize by default */
  scrollAreaComponent?: ScrollAreaComponent;
}

const defaultProps: Partial<ModalContentProps> = {
  shadow: 'xl',
};

export const ModalContent = forwardRef<HTMLElement, ModalContentProps>((props, ref) => {
  const { children, scrollAreaComponent, ...others } = useComponentDefaultProps(
    'ModalContent',
    defaultProps,
    props
  );

  const ctx = useModalContext();
  const Scroll: React.FC<any> =
    scrollAreaComponent || ctx.scrollAreaComponent || ModalBase.NativeScrollArea;

  return (
    <ModalBase.Content ref={ref} radius={ctx.radius} {...others}>
      <Scroll style={{ maxHeight: `calc(100dvh - (${rem(ctx.yOffset)} * 2))` }}>{children}</Scroll>
    </ModalBase.Content>
  );
});
