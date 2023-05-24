import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { ModalBase, ModalBaseContentProps } from '../../ModalBase';
import { useDrawerContext, ScrollAreaComponent } from '../Drawer.context';

export interface DrawerContentProps extends ModalBaseContentProps {
  /** Component used as scroll area, ScrollArea.Autosize by default */
  scrollAreaComponent?: ScrollAreaComponent;
}

const defaultProps: Partial<DrawerContentProps> = {
  shadow: 'xl',
};

export const DrawerContent = forwardRef<HTMLElement, DrawerContentProps>((props, ref) => {
  const { children, scrollAreaComponent, ...others } = useComponentDefaultProps(
    'ModalContent',
    defaultProps,
    props
  );

  const ctx = useDrawerContext();

  const Scroll: React.FC<any> =
    scrollAreaComponent || ctx.scrollAreaComponent || ModalBase.NativeScrollArea;

  return (
    <ModalBase.Content ref={ref} radius={0} {...others}>
      <Scroll style={{ height: '100vh' }}>{children}</Scroll>
    </ModalBase.Content>
  );
});
