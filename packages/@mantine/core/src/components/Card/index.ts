import type { CardCssVariables, CardFactory, CardProps, CardStylesNames } from './Card';
import type { CardSectionProps } from './CardSection/CardSection';

export { Card } from './Card';
export { CardSection } from './CardSection/CardSection';

export type { CardProps, CardStylesNames, CardCssVariables, CardFactory, CardSectionProps };

export namespace Card {
  export type Props = CardProps;
  export type StylesNames = CardStylesNames;
  export type CssVariables = CardCssVariables;
  export type Factory = CardFactory;
  export type SectionProps = CardSectionProps;

  export namespace Section {
    export type Props = CardSectionProps;
  }
}
