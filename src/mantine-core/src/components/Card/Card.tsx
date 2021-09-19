import React, { Children, cloneElement } from 'react';
import { Paper, SharedPaperProps } from '../Paper/Paper';
import { CardSection, CardSectionProps } from './CardSection/CardSection';
import useStyles from './Card.styles';

export { CardSection };
export type { CardSectionProps };

interface _CardProps<C extends React.ElementType, R extends HTMLElement> extends SharedPaperProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

  /** Card content */
  children: React.ReactNode;
}

export type CardProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _CardProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _CardProps<C, R>>;

export function Card<C extends React.ElementType = 'div', R extends HTMLElement = HTMLDivElement>({
  component,
  className,
  padding = 'md',
  radius = 'sm',
  children,
  ...others
}: CardProps<C, R>) {
  const { classes, cx } = useStyles(null, null, 'card');

  const content = Children.map(children, (child) => {
    if (typeof child === 'object' && child && 'type' in child && child.type === CardSection) {
      return cloneElement(child, { padding });
    }

    return child;
  });

  return (
    <Paper
      className={cx(classes.card, className)}
      radius={radius}
      padding={padding}
      component={component as any}
      {...others}
    >
      {content}
    </Paper>
  );
}

Card.Section = CardSection;

Card.displayName = '@mantine/core/Card';
