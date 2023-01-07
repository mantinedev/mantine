import React from 'react';
import { MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { ModalBase, ModalBaseDefaultProps, ModalBaseSettings } from '../../ModalBase';
import { DrawerProvider, ScrollAreaComponent } from '../Drawer.context';
import useStyles from './DrawerRoot.styles';

export interface DrawerRootProps extends ModalBaseSettings {
  /** Top/bottom modal offset, 5vh by default */
  yOffset?: React.CSSProperties['marginTop'];

  /** Left/right modal offset, 5vw by default */
  xOffset?: React.CSSProperties['marginLeft'];

  /** Scroll area component, ScrollArea.Autosize by default */
  scrollAreaComponent?: ScrollAreaComponent;

  /** Key of theme.radius or number to set Modal content border-radius in px, defaults to theme.defaultRadius */
  radius?: MantineNumberSize;

  /** Determines whether the modal should be centered vertically, false by default */
  centered?: boolean;

  /** Determines whether the modal should take the entire screen */
  fullScreen?: boolean;
}

const defaultProps: Partial<DrawerRootProps> = {
  ...ModalBaseDefaultProps,
  yOffset: '5vh',
  xOffset: '5vw',
};

export function DrawerRoot(props: DrawerRootProps) {
  const {
    classNames,
    variant,
    size,
    yOffset,
    xOffset,
    scrollAreaComponent,
    radius,
    centered,
    fullScreen,
    ...others
  } = useComponentDefaultProps('DrawerRoot', defaultProps, props);

  const { classes, cx } = useStyles(null, { name: 'Modal', variant, size });

  return (
    <DrawerProvider value={{ scrollAreaComponent }}>
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
    </DrawerProvider>
  );
}
