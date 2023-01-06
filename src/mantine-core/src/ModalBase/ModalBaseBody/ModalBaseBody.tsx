import React, { forwardRef, useEffect } from 'react';
import { DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import { useModalBaseContext } from '../ModalBase.context';
import useStyles from './ModalBaseBody.styles';

export type ModalBaseBodyStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseBodyProps extends DefaultProps, React.ComponentPropsWithoutRef<'h2'> {}

const defaultProps: Partial<ModalBaseBodyProps> = {};

export const ModalBaseBody = forwardRef<HTMLHeadingElement, ModalBaseBodyProps>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Body`,
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ padding: ctx.padding }, ctx.stylesApi);

  useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);

  return <Box id={ctx.getBodyId()} className={cx(classes.body, className)} ref={ref} {...others} />;
});
