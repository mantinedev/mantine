import React, { Children, cloneElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, useMantineDefaultProps } from '@mantine/styles';
import { Paper, SharedPaperProps } from '../Paper/Paper';
import { CardSection } from './CardSection/CardSection';
import useStyles from './Card.styles';

interface _CardProps extends SharedPaperProps {
  /** Card content */
  children: React.ReactNode;
}

export type CardProps<C extends React.ElementType> = PolymorphicComponentProps<C, _CardProps>;

type CardComponent = (<C extends React.ElementType = 'div'>(
  props: CardProps<C>
) => React.ReactElement) & { displayName?: string; Section: typeof CardSection };

const defaultProps: Partial<CardProps<any>> = {
  padding: 'md',
};

export const Card: CardComponent = forwardRef(
  <C extends React.ElementType = 'div'>(props: CardProps<C>, ref: PolymorphicRef<C>) => {
    const { component, className, padding, radius, children, classNames, styles, ...others } =
      useMantineDefaultProps('Card', defaultProps, props);
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
