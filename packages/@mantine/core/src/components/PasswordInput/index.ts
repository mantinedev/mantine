import type {
  PasswordInputCssVariables,
  PasswordInputFactory,
  PasswordInputProps,
  PasswordInputStylesNames,
} from './PasswordInput';

export { PasswordInput } from './PasswordInput';

export type {
  PasswordInputProps,
  PasswordInputStylesNames,
  PasswordInputCssVariables,
  PasswordInputFactory,
};

export namespace PasswordInput {
  export type Props = PasswordInputProps;
  export type StylesNames = PasswordInputStylesNames;
  export type CssVariables = PasswordInputCssVariables;
  export type Factory = PasswordInputFactory;
}
