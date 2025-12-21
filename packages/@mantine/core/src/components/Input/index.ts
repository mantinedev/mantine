import type {
  __BaseInputProps,
  __InputProps,
  __InputStylesNames,
  InputCssVariables,
  InputFactory,
  InputProps,
  InputStylesNames,
  InputVariant,
} from './Input';
import type {
  InputClearButtonFactory,
  InputClearButtonProps,
} from './InputClearButton/InputClearButton';
import type {
  InputDescriptionCssVariables,
  InputDescriptionFactory,
  InputDescriptionProps,
  InputDescriptionStylesNames,
} from './InputDescription/InputDescription';
import type {
  InputErrorCssVariables,
  InputErrorFactory,
  InputErrorProps,
  InputErrorStylesNames,
} from './InputError/InputError';
import type {
  InputLabelCssVariables,
  InputLabelFactory,
  InputLabelProps,
  InputLabelStylesNames,
} from './InputLabel/InputLabel';
import type {
  InputPlaceholderFactory,
  InputPlaceholderProps,
  InputPlaceholderStylesNames,
} from './InputPlaceholder/InputPlaceholder';
import type {
  __InputWrapperProps,
  InputWrapperFactory,
  InputWrapperProps,
  InputWrapperStylesNames,
} from './InputWrapper/InputWrapper';

export { Input } from './Input';
export { InputWrapper } from './InputWrapper/InputWrapper';
export { InputDescription } from './InputDescription/InputDescription';
export { InputError } from './InputError/InputError';
export { InputLabel } from './InputLabel/InputLabel';
export { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
export { InputClearButton } from './InputClearButton/InputClearButton';
export { useInputProps } from './use-input-props';
export { InputWrapperContext } from './InputWrapper.context';

export type {
  InputProps,
  __InputProps,
  __BaseInputProps,
  InputStylesNames,
  __InputStylesNames,
  InputVariant,
  InputCssVariables,
  InputFactory,
  InputWrapperProps,
  __InputWrapperProps,
  InputWrapperStylesNames,
  InputWrapperFactory,
  InputDescriptionProps,
  InputDescriptionCssVariables,
  InputDescriptionStylesNames,
  InputDescriptionFactory,
  InputErrorProps,
  InputErrorCssVariables,
  InputErrorStylesNames,
  InputErrorFactory,
  InputLabelProps,
  InputLabelCssVariables,
  InputLabelStylesNames,
  InputLabelFactory,
  InputPlaceholderProps,
  InputPlaceholderStylesNames,
  InputPlaceholderFactory,
  InputClearButtonProps,
  InputClearButtonFactory,
};

export namespace Input {
  export type Props = InputProps;
  export type StylesNames = InputStylesNames;
  export type CssVariables = InputCssVariables;
  export type Factory = InputFactory;

  export namespace Wrapper {
    export type Props = InputWrapperProps;
    export type StylesNames = InputWrapperStylesNames;
    export type Factory = InputWrapperFactory;
  }

  export namespace Description {
    export type Props = InputDescriptionProps;
    export type StylesNames = InputDescriptionStylesNames;
    export type CssVariables = InputDescriptionCssVariables;
    export type Factory = InputDescriptionFactory;
  }

  export namespace Error {
    export type Props = InputErrorProps;
    export type StylesNames = InputErrorStylesNames;
    export type CssVariables = InputErrorCssVariables;
    export type Factory = InputErrorFactory;
  }

  export namespace Label {
    export type Props = InputLabelProps;
    export type StylesNames = InputLabelStylesNames;
    export type CssVariables = InputLabelCssVariables;
    export type Factory = InputLabelFactory;
  }

  export namespace Placeholder {
    export type Props = InputPlaceholderProps;
    export type StylesNames = InputPlaceholderStylesNames;
    export type Factory = InputPlaceholderFactory;
  }

  export namespace ClearButton {
    export type Props = InputClearButtonProps;
    export type Factory = InputClearButtonFactory;
  }
}
