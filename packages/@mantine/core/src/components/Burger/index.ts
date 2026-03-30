import type { BurgerCssVariables, BurgerFactory, BurgerProps, BurgerStylesNames } from './Burger';

export { Burger } from './Burger';

export type { BurgerProps, BurgerStylesNames, BurgerCssVariables, BurgerFactory };

export namespace Burger {
  export type Props = BurgerProps;
  export type StylesNames = BurgerStylesNames;
  export type CssVariables = BurgerCssVariables;
  export type Factory = BurgerFactory;
}
