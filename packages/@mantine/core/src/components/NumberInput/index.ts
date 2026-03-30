import type {
  NumberInputCssVariables,
  NumberInputFactory,
  NumberInputHandlers,
  NumberInputMode,
  NumberInputNumericType,
  NumberInputProps,
  NumberInputStylesNames,
} from './NumberInput';

export { NumberInput } from './NumberInput';

export type {
  NumberInputProps,
  NumberInputStylesNames,
  NumberInputFactory,
  NumberInputCssVariables,
  NumberInputHandlers,
  NumberInputMode,
  NumberInputNumericType,
};

export namespace NumberInput {
  export type Props<T extends NumberInputNumericType = number> = NumberInputProps<T>;
  export type StylesNames = NumberInputStylesNames;
  export type Factory = NumberInputFactory;
  export type CssVariables = NumberInputCssVariables;
  export type Handlers = NumberInputHandlers;
}
