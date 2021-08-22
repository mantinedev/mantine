import React, { Children, cloneElement } from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '../../theme';
import { Paper } from '../Paper/Paper';
import { CardSection, CardSectionProps } from './CardSection/CardSection';
import { ComponentPassThrough } from '../../types';
import useStyles from './Card.styles';

export { CardSection };
export type { CardSectionProps };

export interface CardProps extends DefaultProps, React.ComponentPropsWithoutRef<typeof Paper> {
  /** Card content */
  children: React.ReactNode;
}

export function Card<T extends React.ElementType = 'div'>({
  component = 'div',
  className,
  themeOverride,
  padding = 'md',
  radius = 'sm',
  children,
  ...others
}: ComponentPassThrough<T, CardProps>) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, null, 'card');

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
      component={component}
      {...others}
    >
      {content}
    </Paper>
  );
}

Card.displayName = '@mantine/core/Card';
