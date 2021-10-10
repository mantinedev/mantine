import React, { forwardRef } from 'react';
import {
  mergeStyles,
  DefaultProps,
  MantineColor,
  ClassNames,
  useExtractedMargins,
} from '@mantine/styles';
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
      style,
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
    const { classes, cx } = useStyles({ color }, classNames, 'blockquote');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });

    return (
      <blockquote className={cx(classes.root, className)} style={mergedStyles} ref={ref} {...rest}>
        <div className={classes.inner} style={_styles.inner}>
          {icon && (
            <div className={classes.icon} style={_styles.icon}>
              {icon}
            </div>
          )}

          <div className={classes.body} style={_styles.body}>
            {children}
            {cite && (
              <cite className={classes.cite} style={_styles.cite}>
                {cite}
              </cite>
            )}
          </div>
        </div>
      </blockquote>
    );
  }
);

Blockquote.displayName = '@mantine/core/Blockquote';
