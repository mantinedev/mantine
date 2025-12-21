import type { SwitchCssVariables, SwitchFactory, SwitchProps, SwitchStylesNames } from './Switch';
import type {
  SwitchGroupContextValue,
  SwitchGroupFactory,
  SwitchGroupProps,
  SwitchGroupStylesNames,
} from './SwitchGroup/SwitchGroup';

export { Switch } from './Switch';
export { SwitchGroup, SwitchGroupContext } from './SwitchGroup/SwitchGroup';

export type {
  SwitchProps,
  SwitchStylesNames,
  SwitchCssVariables,
  SwitchFactory,
  SwitchGroupProps,
  SwitchGroupStylesNames,
  SwitchGroupFactory,
  SwitchGroupContextValue,
};

export namespace Switch {
  export type Props = SwitchProps;
  export type StylesNames = SwitchStylesNames;
  export type CssVariables = SwitchCssVariables;
  export type Factory = SwitchFactory;

  export namespace Group {
    export type Props = SwitchGroupProps;
    export type StylesNames = SwitchGroupStylesNames;
    export type Factory = SwitchGroupFactory;
    export type Context = SwitchGroupContextValue;
  }
}
