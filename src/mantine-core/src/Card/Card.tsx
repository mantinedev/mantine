import React, { Children, cloneElement, forwardRef } from 'react';
import { MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Paper, PaperProps } from '../Paper/Paper';
import { CardSection } from './CardSection/CardSection';
import useStyles from './Card.styles';
import { CardProvider } from './Card.context';

export interface CardProps extends PaperProps {
  variant?: string;

  /** Card padding used to offset Card.Section, use it instead of p prop */
  padding?: MantineNumberSize;

  /** Card content */
  children: React.ReactNode;
}

const defaultProps: Partial<CardProps> = {
  padding: 'md',
};

export const _Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, padding, radius, children, unstyled, variant, ...others } =
    useComponentDefaultProps('Card', defaultProps, props);
  const { classes, cx } = useStyles(null, { name: 'Card', unstyled, variant });
  const _children = Children.toArray(children);

  const content = _children.map((child, index) => {
    if (typeof child === 'object' && child && 'type' in child && child.type === CardSection) {
      return cloneElement(child, {
        variant,
        padding,
        'data-first': index === 0 || undefined,
        'data-last': index === _children.length - 1 || undefined,
      });
    }

    return child;
  });

  return (
    <CardProvider value={{ padding }}>
      <Paper
        className={cx(classes.root, className)}
        radius={radius}
        p={padding}
        ref={ref}
        {...others}
      >
        {content}
      </Paper>
    </CardProvider>
  );
}) as any;

_Card.Section = CardSection;
_Card.displayName = '@mantine/core/Card';

export const Card = createPolymorphicComponent<'div', CardProps, { Section: typeof CardSection }>(
  _Card
);
