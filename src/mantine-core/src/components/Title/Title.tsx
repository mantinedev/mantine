import React, { forwardRef } from 'react';
import { DefaultProps, useExtractedMargins } from '@mantine/styles';
import useStyles from './Title.styles';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps extends DefaultProps, React.ComponentPropsWithoutRef<'h1'> {
  /** Defines component and styles which will be used */
  order?: TitleOrder;

  /** Defined text-align */
  align?: 'right' | 'left' | 'center';
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, order = 1, children, align, style, ...others }: TitleProps, ref) => {
    if (![1, 2, 3, 4, 5, 6].includes(order)) {
      return null;
    }

    const element = `h${order}` as const;
    const { classes, cx } = useStyles({ element }, { name: 'Title' });
    const styles: React.CSSProperties = { ...style };

    if (align) {
      styles.textAlign = align;
    }

    const { mergedStyles, rest } = useExtractedMargins({ others, style: styles });

    return React.createElement(
      element,
      {
        className: cx(classes.title, className),
        style: mergedStyles,
        ref,
        ...rest,
      },
      children
    );
  }
);

Title.displayName = '@mantine/core/Title';
