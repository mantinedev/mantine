import React, { Children, cloneElement } from 'react';
import cx from 'clsx';
import { useMantineTheme } from '../../theme';
import { Paper, PaperProps } from '../Paper/Paper';
import { CardSection, CardSectionProps } from './CardSection/CardSection';
import { ComponentPassThrough } from '../../types';
import useStyles from './Card.styles';

export { CardSection };
export type { CardSectionProps };

export interface CardProps extends PaperProps {
  /** Card content */
  children: React.ReactNode;
}

export function Card<T extends React.ElementType = 'div', U extends HTMLElement = HTMLDivElement>({
  component = 'div',
  className,
  themeOverride,
  padding = 'md',
  radius = 'sm',
  children,
  ...others
}: ComponentPassThrough<T, CardProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
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
