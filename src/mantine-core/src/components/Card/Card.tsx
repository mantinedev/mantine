import React, { Children, cloneElement, forwardRef } from 'react';
import { useMantineDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Paper, SharedPaperProps } from '../Paper/Paper';
import { CardSection } from './CardSection/CardSection';
import useStyles from './Card.styles';
import { CardProvider } from './Card.context';

export interface CardProps extends SharedPaperProps {
  /** Card content */
  children: React.ReactNode;
}

const defaultProps: Partial<CardProps> = {
  p: 'md',
};

export const _Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, p, radius, children, classNames, styles, ...others } = useMantineDefaultProps(
    'Card',
    defaultProps,
    props
  );
  const { classes, cx } = useStyles(null, { name: 'Card', classNames, styles });
  const _children = Children.toArray(children);

  const content = _children.map((child, index) => {
    if (typeof child === 'object' && child && 'type' in child && child.type === CardSection) {
      return cloneElement(child, {
        padding: p,
        'data-first': index === 0 || undefined,
        'data-last': index === _children.length - 1 || undefined,
      });
    }

    return child;
  });

  return (
    <CardProvider value={{ padding: p }}>
      <Paper className={cx(classes.root, className)} radius={radius} p={p} ref={ref} {...others}>
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
