import React, { forwardRef } from 'react';
import { useComponentDefaultProps, rem } from '@mantine/styles';
import { ScrollArea } from '../../ScrollArea';
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
  const Scroll = scrollAreaComponent || ctx.scrollAreaComponent || ScrollArea.Autosize;

  return (
    <ModalBase.Content ref={ref} radius={ctx.radius} {...others}>
      <Scroll mah={`calc(100vh - (${rem(ctx.yOffset)} * 2))`}>{children}</Scroll>
    </ModalBase.Content>
  );
});
