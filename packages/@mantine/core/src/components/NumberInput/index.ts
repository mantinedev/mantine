import type {
  NumberInputCssVariables,
  NumberInputFactory,
  NumberInputHandlers,
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
};

export namespace NumberInput {
  export type Props = NumberInputProps;
  export type StylesNames = NumberInputStylesNames;
  export type Factory = NumberInputFactory;
  export type CssVariables = NumberInputCssVariables;
  export type Handlers = NumberInputHandlers;
}
