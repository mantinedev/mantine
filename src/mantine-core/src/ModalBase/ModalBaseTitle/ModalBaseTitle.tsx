import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useModalBaseContext } from '../ModalBase.context';
import useStyles from './ModalBaseTitle.styles';

export interface ModalBaseTitleProps extends DefaultProps, React.ComponentPropsWithoutRef<'h2'> {}

const defaultProps: Partial<ModalBaseTitleProps> = {};

export const ModalBaseTitle = forwardRef<HTMLHeadingElement, ModalBaseTitleProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Title`,
    defaultProps,
    props
  );

  const { classes, cx } = useStyles();

  return <Box component="h2" className={cx(classes.title, className)} ref={ref} {...others} />;
});
