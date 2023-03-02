import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { Box } from '../Box';
import { QuoteIcon } from './QuoteIcon';
import useStyles, { BlockquoteStylesParams } from './Blockquote.styles';

export type BlockquoteStylesNames = Selectors<typeof useStyles>;

export interface BlockquoteProps
  extends DefaultProps<BlockquoteStylesNames, BlockquoteStylesParams>,
    Omit<React.ComponentPropsWithoutRef<'blockquote'>, 'cite'> {
  variant?: string;

  /** Icon color from theme */
  color?: MantineColor;

  /** Icon, defaults to quote icon */
  icon?: React.ReactNode;

  /** Describe a reference to a cited quote */
  cite?: React.ReactNode;
}

const defaultProps: Partial<BlockquoteProps> = {
  color: 'gray',
  icon: <QuoteIcon />,
};

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props: BlockquoteProps, ref) => {
    const {
      className,
      color,
      icon,
      cite,
      children,
      classNames,
      styles,
      unstyled,
      variant,
      ...others
    } = useComponentDefaultProps('Blockquote', defaultProps, props);
    const { classes, cx } = useStyles(
      { color },
      { classNames, styles, unstyled, name: 'Blockquote', variant }
    );

    return (
      <Box component="blockquote" className={cx(classes.root, className)} ref={ref} {...others}>
        <div className={classes.inner}>
          {icon && <div className={classes.icon}>{icon}</div>}
          <div className={classes.body}>
            {children}
            {cite && <cite className={classes.cite}>{cite}</cite>}
          </div>
        </div>
      </Box>
    );
  }
);

Blockquote.displayName = '@mantine/core/Blockquote';
