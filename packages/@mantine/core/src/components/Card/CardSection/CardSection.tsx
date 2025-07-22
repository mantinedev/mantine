import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  polymorphicFactory,
  PolymorphicFactory,
  useProps,
} from '../../../core';
import { useCardContext } from '../Card.context';
import classes from '../Card.module.css';

export type CardSectionStylesNames = 'section';

export interface CardSectionProps extends BoxProps, CompoundStylesApiProps<CardSectionFactory> {
  /** Adds border to the root element */
  withBorder?: boolean;

  /** If set, the section inherits padding from the parent `Card` */
  inheritPadding?: boolean;
}

export type CardSectionFactory = PolymorphicFactory<{
  props: CardSectionProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: CardSectionStylesNames;
  compound: true;
}>;

export const CardSection = polymorphicFactory<CardSectionFactory>((_props, ref) => {
  const props = useProps('CardSection', null, _props);
  const { classNames, className, style, styles, vars, withBorder, inheritPadding, mod, ...others } =
    props;
  const ctx = useCardContext();

  return (
    <Box
      ref={ref}
      mod={[{ 'with-border': withBorder, 'inherit-padding': inheritPadding }, mod]}
      {...ctx.getStyles('section', { className, style, styles, classNames })}
      {...others}
    />
  );
});

CardSection.classes = classes;
CardSection.displayName = '@mantine/core/CardSection';
