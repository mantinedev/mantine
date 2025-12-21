import type {
  FloatingWindowFactory,
  FloatingWindowProps,
  FloatingWindowStylesNames,
} from './FloatingWindow';

export { FloatingWindow } from './FloatingWindow';

export type { FloatingWindowProps, FloatingWindowStylesNames, FloatingWindowFactory };

export namespace FloatingWindow {
  export type Props = FloatingWindowProps;
  export type StylesNames = FloatingWindowStylesNames;
  export type Factory = FloatingWindowFactory;
}
