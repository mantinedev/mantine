import React from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { ModalBase, ModalBaseDefaultProps, ModalBaseSettings } from '../../ModalBase';
import useStyles from './ModalRoot.styles';

export interface ModalRootProps extends ModalBaseSettings {
  /** Top modal offset, 5vh by default */
  topOffset?: React.CSSProperties['marginTop'];
}

const defaultProps: Partial<ModalRootProps> = {
  ...ModalBaseDefaultProps,
  topOffset: '5vh',
};

export function ModalRoot(props: ModalRootProps) {
  const { classNames, variant, size, topOffset, ...others } = useComponentDefaultProps(
    'ModalRoot',
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ topOffset }, { name: 'Modal', variant, size });

  return (
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
  );
}
