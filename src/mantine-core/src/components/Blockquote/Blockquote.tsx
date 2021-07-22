import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, mergeStyles } from '../../theme';
import { QuoteIcon } from './QuoteIcon';
import useStyles from './Blockquote.styles';

export type BlockquoteStylesNames = keyof ReturnType<typeof useStyles>;

export interface BlockquoteProps
  extends DefaultProps<BlockquoteStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'blockquote'>, 'cite'> {
  /** Border and icon color from theme */
  color?: string;

  /** Icon, defaults to quote icon */
  icon?: React.ReactNode;

  /** Describe a reference to a cited quote */
  cite?: React.ReactNode;
}

const defaultIcon = <QuoteIcon />;

export function Blockquote({
  className,
  style,
  color,
  icon = defaultIcon,
  cite,
  children,
  themeOverride,
  classNames,
  styles,
  ...others
}: BlockquoteProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, theme }, classNames, 'blockquote');
  const _styles = mergeStyles(classes, styles);

  return (
    <blockquote
      className={cx(classes.root, className)}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
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

Blockquote.displayName = '@mantine/core/Blockquote';
