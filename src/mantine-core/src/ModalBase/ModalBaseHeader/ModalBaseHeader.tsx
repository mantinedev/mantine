import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useModalBaseContext } from '../ModalBase.context';
import useStyles from './ModalBaseHeader.styles';

export type ModalBaseHeaderStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseHeaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {}

const defaultProps: Partial<ModalBaseHeaderProps> = {};

export const ModalBaseHeader = forwardRef<HTMLDivElement, ModalBaseHeaderProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Header`,
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ padding: ctx.padding }, ctx.stylesApi);

  return <Box ref={ref} className={cx(classes.header, className)} {...others} />;
});
