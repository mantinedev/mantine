import type {
  OverlayCssVariables,
  OverlayFactory,
  OverlayProps,
  OverlayStylesNames,
} from './Overlay';

export { Overlay } from './Overlay';

export type { OverlayProps, OverlayStylesNames, OverlayFactory, OverlayCssVariables };

export namespace Overlay {
  export type Props = OverlayProps;
  export type StylesNames = OverlayStylesNames;
  export type Factory = OverlayFactory;
  export type CssVariables = OverlayCssVariables;
}
