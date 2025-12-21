import type {
  PillCssVariables,
  PillFactory,
  PillProps,
  PillStylesNames,
  PillVariant,
} from './Pill';
import type {
  PillGroupCssVariables,
  PillGroupFactory,
  PillGroupProps,
  PillGroupStylesNames,
} from './PillGroup/PillGroup';

export { Pill } from './Pill';
export { PillGroup } from './PillGroup/PillGroup';

export type {
  PillProps,
  PillStylesNames,
  PillCssVariables,
  PillFactory,
  PillVariant,
  PillGroupProps,
  PillGroupStylesNames,
  PillGroupCssVariables,
  PillGroupFactory,
};

export namespace Pill {
  export type Props = PillProps;
  export type StylesNames = PillStylesNames;
  export type CssVariables = PillCssVariables;
  export type Factory = PillFactory;
  export type Variant = PillVariant;

  export namespace Group {
    export type Props = PillGroupProps;
    export type StylesNames = PillGroupStylesNames;
    export type CssVariables = PillGroupCssVariables;
    export type Factory = PillGroupFactory;
  }
}
