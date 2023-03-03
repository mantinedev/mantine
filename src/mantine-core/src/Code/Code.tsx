import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import useStyles, { CodeStylesParams } from './Code.styles';

export interface CodeProps
  extends DefaultProps<never, CodeStylesParams>,
    React.ComponentPropsWithoutRef<'code'> {
  variant?: string;

  /** Code content */
  children: React.ReactNode;

  /** Code color and background from theme, defaults to gray in light theme and to dark in dark theme */
  color?: MantineColor;

  /** True for code block, false for inline code */
  block?: boolean;
}

const defaultProps: Partial<CodeProps> = {};

export const Code = forwardRef<HTMLElement, CodeProps>((props: CodeProps, ref) => {
  const { className, children, block, color, unstyled, variant, ...others } =
    useComponentDefaultProps('Code', defaultProps, props);

  const { classes, cx } = useStyles({ color }, { name: 'Code', unstyled, variant });

  if (block) {
    return (
      <Box
        component="pre"
        dir="ltr"
        className={cx(classes.root, classes.block, className)}
        ref={ref as any}
        {...others}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box component="code" className={cx(classes.root, className)} ref={ref} dir="ltr" {...others}>
      {children}
    </Box>
  );
});

Code.displayName = '@mantine/core/Code';
