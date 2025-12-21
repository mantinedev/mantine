import type {
  NavLinkCssVariables,
  NavLinkFactory,
  NavLinkProps,
  NavLinkStylesNames,
  NavLinkVariant,
} from './NavLink';

export { NavLink } from './NavLink';

export type {
  NavLinkProps,
  NavLinkStylesNames,
  NavLinkCssVariables,
  NavLinkFactory,
  NavLinkVariant,
};

export namespace NavLink {
  export type Props = NavLinkProps;
  export type StylesNames = NavLinkStylesNames;
  export type CssVariables = NavLinkCssVariables;
  export type Factory = NavLinkFactory;
  export type Variant = NavLinkVariant;
}
