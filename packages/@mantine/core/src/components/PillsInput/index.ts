import type { PillsInputFactory, PillsInputProps } from './PillsInput';
import type { PillsInputContextValue } from './PillsInput.context';
import type {
  PillsInputFieldFactory,
  PillsInputFieldProps,
  PillsInputFieldStylesNames,
} from './PillsInputField/PillsInputField';

export { PillsInput } from './PillsInput';
export { PillsInputField } from './PillsInputField/PillsInputField';
export { PillsInputContext } from './PillsInput.context';

export type {
  PillsInputProps,
  PillsInputFactory,
  PillsInputFieldProps,
  PillsInputFieldFactory,
  PillsInputFieldStylesNames,
  PillsInputContextValue,
};

export namespace PillsInput {
  export type Props = PillsInputProps;
  export type Factory = PillsInputFactory;
  export type ContextValue = PillsInputContextValue;

  export namespace Field {
    export type Props = PillsInputFieldProps;
    export type Factory = PillsInputFieldFactory;
    export type StylesNames = PillsInputFieldStylesNames;
  }
}
