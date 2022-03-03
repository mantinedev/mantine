import React, { Children, cloneElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Paper, SharedPaperProps } from '../Paper/Paper';
import { CardSection } from './CardSection/CardSection';
import useStyles from './Card.styles';

interface _CardProps extends SharedPaperProps {
  /** Card content */
  children: React.ReactNode;
}

export type CardProps<C> = PolymorphicComponentProps<C, _CardProps>;

type CardComponent = (<C = 'div'>(props: CardProps<C>) => React.ReactElement) & {
  displayName?: string;
  Section: typeof CardSection;
};

export const Card: CardComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      padding = 'md',
      radius = 'sm',
      children,
      classNames,
      styles,
      ...others
    }: CardProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(null, { name: 'Card', classNames, styles });
    const _children = Children.toArray(children);

    const content = _children.map((child, index) => {
      if (typeof child === 'object' && child && 'type' in child && child.type === CardSection) {
        return cloneElement(child, {
          padding,
          first: index === 0,
          last: index === _children.length - 1,
        });
      }

      return child;
    });

    return (
      <Paper
        className={cx(classes.root, className)}
        radius={radius}
        padding={padding}
        component={component as any}
        ref={ref}
        {...others}
      >
        {content}
      </Paper>
    );
  }
) as any;

Card.Section = CardSection;
Card.displayName = '@mantine/core/Card';
