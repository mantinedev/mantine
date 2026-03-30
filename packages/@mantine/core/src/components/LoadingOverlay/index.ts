import type {
  LoadingOverlayCssVariables,
  LoadingOverlayFactory,
  LoadingOverlayProps,
  LoadingOverlayStylesNames,
} from './LoadingOverlay';

export { LoadingOverlay } from './LoadingOverlay';

export type {
  LoadingOverlayProps,
  LoadingOverlayStylesNames,
  LoadingOverlayCssVariables,
  LoadingOverlayFactory,
};

export namespace LoadingOverlay {
  export type Props = LoadingOverlayProps;
  export type StylesNames = LoadingOverlayStylesNames;
  export type CssVariables = LoadingOverlayCssVariables;
  export type Factory = LoadingOverlayFactory;
}
