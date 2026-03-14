import type {
  UnstyledButtonFactory,
  UnstyledButtonProps,
  UnstyledButtonStylesNames,
} from './UnstyledButton';

export { UnstyledButton } from './UnstyledButton';

export type { UnstyledButtonProps, UnstyledButtonStylesNames, UnstyledButtonFactory };

export namespace UnstyledButton {
  export type Props = UnstyledButtonProps;
  export type StylesNames = UnstyledButtonStylesNames;
  export type Factory = UnstyledButtonFactory;
}
