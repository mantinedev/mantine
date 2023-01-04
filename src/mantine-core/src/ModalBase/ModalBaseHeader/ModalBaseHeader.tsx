import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles from './ModalBaseHeader.styles';
import { useModalBaseContext } from '../ModalBase.context';

export interface ModalBaseHeaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

const defaultProps: Partial<ModalBaseHeaderProps> = {};

export const ModalBaseHeader = forwardRef<HTMLDivElement, ModalBaseHeaderProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Header`,
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ padding: ctx.padding }, { name: ctx.__staticSelector });

  return <Box ref={ref} className={cx(classes.header, className)} {...others} />;
});
