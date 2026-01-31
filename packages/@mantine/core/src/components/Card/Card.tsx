import { Children, cloneElement } from 'react';
import {
  BoxProps,
  createVarsResolver,
  getSpacing,
  MantineRadius,
  MantineShadow,
  MantineSpacing,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Paper } from '../Paper';
import { CardProvider } from './Card.context';
import classes from './Card.module.css';
import { CardSection } from './CardSection/CardSection';

export type CardStylesNames = 'root' | 'section';
export type CardCssVariables = {
  root: '--card-padding';
};

export interface CardProps extends BoxProps, StylesApiProps<CardFactory> {
  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow` */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Adds border to the card */
  withBorder?: boolean;

  /** Key of `theme.spacing` or any valid CSS value to set padding @default 'md' */
  padding?: MantineSpacing;

  /** Card content */
  children?: React.ReactNode;

  /** Card orientation @default 'vertical' */
  orientation?: 'horizontal' | 'vertical';
}

export type CardFactory = PolymorphicFactory<{
  props: CardProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: CardStylesNames;
  vars: CardCssVariables;
  staticComponents: {
    Section: typeof CardSection;
  };
}>;

const varsResolver = createVarsResolver<CardFactory>((_, { padding }) => ({
  root: {
    '--card-padding': getSpacing(padding),
  },
}));

const defaultProps = {
  orientation: 'vertical',
} satisfies Partial<CardProps>;

export const Card = polymorphicFactory<CardFactory>((_props) => {
  const props = useProps('Card', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    children,
    padding,
    attributes,
    orientation,
    ...others
  } = props;

  const getStyles = useStyles<CardFactory>({
    name: 'Card',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const _children = Children.toArray(children);
  const content = _children.map((child, index) => {
    if (typeof child === 'object' && child && 'type' in child && child.type === CardSection) {
      return cloneElement(child, {
        'data-orientation': orientation,
        'data-first-section': index === 0 || undefined,
        'data-last-section': index === _children.length - 1 || undefined,
      } as any);
    }

    return child;
  });

  return (
    <CardProvider value={{ getStyles }}>
      <Paper unstyled={unstyled} data-orientation={orientation} {...getStyles('root')} {...others}>
        {content}
      </Paper>
    </CardProvider>
  );
});

Card.classes = classes;
Card.varsResolver = varsResolver;
Card.displayName = '@mantine/core/Card';
Card.Section = CardSection;
