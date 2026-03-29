import type {
  FloatingWindowFactory,
  FloatingWindowProps,
  FloatingWindowStylesNames,
} from './FloatingWindow';

export { FloatingWindow } from './FloatingWindow';

export type { FloatingWindowProps, FloatingWindowStylesNames, FloatingWindowFactory };

export type { FloatingWindowDimensions } from './FloatingWindow.context';

export type {
  FloatingWindowResizeHandleProps,
  FloatingWindowResizeHandleFactory,
} from './FloatingWindowResizeHandle';

export namespace FloatingWindow {
  export type Props = FloatingWindowProps;
  export type StylesNames = FloatingWindowStylesNames;
  export type Factory = FloatingWindowFactory;
}
