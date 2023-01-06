import React from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { ModalBase, ModalBaseDefaultProps, ModalBaseSettings } from '../../ModalBase';
import { ModalProvider, ScrollAreaComponent } from '../Modal.context';
import useStyles from './ModalRoot.styles';

export interface ModalRootProps extends ModalBaseSettings {
  /** Top/bottom modal offset, 5vh by default */
  yOffset?: React.CSSProperties['marginTop'];

  /** Left/right modal offset, 5vw by default */
  xOffset?: React.CSSProperties['marginLeft'];

  /** Scroll area component, ScrollArea.Autosize by default */
  scrollAreaComponent?: ScrollAreaComponent;
}

const defaultProps: Partial<ModalRootProps> = {
  ...ModalBaseDefaultProps,
  yOffset: '5vh',
  xOffset: '5vw',
};

export function ModalRoot(props: ModalRootProps) {
  const { classNames, variant, size, yOffset, xOffset, scrollAreaComponent, ...others } =
    useComponentDefaultProps('ModalRoot', defaultProps, props);

  const { classes, cx } = useStyles({ yOffset, xOffset }, { name: 'Modal', variant, size });

  return (
    <ModalProvider value={{ yOffset, scrollAreaComponent }}>
      <ModalBase
        __staticSelector="Modal"
        size={size}
        variant={variant}
        classNames={{
          ...classNames,
          content: cx(classes.content, classNames?.content),
          inner: cx(classes.inner, classNames?.inner),
        }}
        {...others}
      />
    </ModalProvider>
  );
}
