import type {
  RollingNumberCssVariables,
  RollingNumberFactory,
  RollingNumberProps,
  RollingNumberStylesNames,
} from './RollingNumber';

export { RollingNumber } from './RollingNumber';

export type {
  RollingNumberProps,
  RollingNumberStylesNames,
  RollingNumberCssVariables,
  RollingNumberFactory,
};

export namespace RollingNumber {
  export type Props = RollingNumberProps;
  export type StylesNames = RollingNumberStylesNames;
  export type CssVariables = RollingNumberCssVariables;
  export type Factory = RollingNumberFactory;
}
