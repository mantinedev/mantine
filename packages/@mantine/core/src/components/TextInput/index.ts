import type { TextInputFactory, TextInputProps } from './TextInput';

export { TextInput } from './TextInput';

export type { TextInputProps, TextInputFactory };

export namespace TextInput {
  export type Props = TextInputProps;
  export type Factory = TextInputFactory;
}
