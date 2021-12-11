import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor, ClassNames } from '@mantine/styles';
import { Box } from '../Box';
import { QuoteIcon } from './QuoteIcon';
import useStyles from './Blockquote.styles';

export type BlockquoteStylesNames = ClassNames<typeof useStyles>;

export interface BlockquoteProps
  extends DefaultProps<BlockquoteStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'blockquote'>, 'cite'> {
  /** Icon color from theme */
  color?: MantineColor;

  /** Icon, defaults to quote icon */
  icon?: React.ReactNode;

  /** Describe a reference to a cited quote */
  cite?: React.ReactNode;
}

const defaultIcon = <QuoteIcon />;

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    {
      className,
      color = 'gray',
      icon = defaultIcon,
      cite,
      children,
      classNames,
      styles,
      ...others
    }: BlockquoteProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ color }, { classNames, styles, name: 'Blockquote' });

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
