import type {
  BadgeCssVariables,
  BadgeFactory,
  BadgeProps,
  BadgeStylesNames,
  BadgeVariant,
} from './Badge';

export { Badge } from './Badge';

export type { BadgeProps, BadgeStylesNames, BadgeCssVariables, BadgeVariant, BadgeFactory };

export namespace Badge {
  export type Props = BadgeProps;
  export type StylesNames = BadgeStylesNames;
  export type CssVariables = BadgeCssVariables;
  export type Variant = BadgeVariant;
  export type Factory = BadgeFactory;
}
