import React, { Children, cloneElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Paper, SharedPaperProps } from '../Paper/Paper';
import { CardSection, CardSectionProps } from './CardSection/CardSection';
import useStyles from './Card.styles';

interface _CardProps extends SharedPaperProps {
  /** Card content */
  children: React.ReactNode;
}

export type CardProps<C extends React.ElementType> = PolymorphicComponentProps<C, _CardProps>;

type CardComponent = <C extends React.ElementType = 'div'>(
  props: CardProps<C>
) => React.ReactElement;

export const Card: CardComponent & { displayName?: string; Section: React.FC<CardSectionProps> } =
  forwardRef(
    <C extends React.ElementType = 'div'>(
      { component, className, padding = 'md', radius = 'sm', children, ...others }: CardProps<C>,
      ref: PolymorphicRef<C>
    ) => {
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
