import React from 'react';
import { MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { ModalBase, ModalBaseDefaultProps, ModalBaseSettings } from '../../ModalBase';
import { ModalProvider, ScrollAreaComponent } from '../Modal.context';
import useStyles from './ModalRoot.styles';

// centered
// fullScreen

export interface ModalRootProps extends ModalBaseSettings {
  /** Top/bottom modal offset, 5vh by default */
  yOffset?: React.CSSProperties['marginTop'];

  /** Left/right modal offset, 5vw by default */
  xOffset?: React.CSSProperties['marginLeft'];

  /** Scroll area component, ScrollArea.Autosize by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Key of theme.radius or number to set Modal content border-radius in px, defaults to theme.defaultRadius */
  radius?: MantineNumberSize;
}

const defaultProps: Partial<ModalRootProps> = {
  ...ModalBaseDefaultProps,
  yOffset: '5vh',
  xOffset: '5vw',
};

export function ModalRoot(props: ModalRootProps) {
  const { classNames, variant, size, yOffset, xOffset, scrollAreaComponent, radius, ...others } =
    useComponentDefaultProps('ModalRoot', defaultProps, props);

  const { classes, cx } = useStyles({ yOffset, xOffset }, { name: 'Modal', variant, size });

  return (
    <ModalProvider value={{ yOffset, scrollAreaComponent, radius }}>
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
