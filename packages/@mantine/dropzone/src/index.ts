import type { FileRejection, FileWithPath } from 'react-dropzone';
import type {
  DropzoneCssVariables,
  DropzoneFactory,
  DropzoneProps,
  DropzoneStylesNames,
  DropzoneVariant,
} from './Dropzone';
import { Dropzone as _Dropzone } from './Dropzone.js';
import type {
  DropzoneFullScreenFactory,
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
} from './DropzoneFullScreen';
import { DropzoneFullScreen } from './DropzoneFullScreen.js';
import type { DropzoneAcceptProps, DropzoneIdleProps, DropzoneRejectProps } from './DropzoneStatus';

_Dropzone.FullScreen = DropzoneFullScreen;
export const Dropzone = _Dropzone;

export { DropzoneFullScreen };
export { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus.js';
export * from './mime-types.js';

export type {
  DropzoneProps,
  DropzoneStylesNames,
  DropzoneCssVariables,
  DropzoneFactory,
  DropzoneVariant,
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
  DropzoneFullScreenFactory,
  DropzoneAcceptProps,
  DropzoneRejectProps,
  DropzoneIdleProps,
  FileWithPath,
  FileRejection,
};

export namespace Dropzone {
  export type Props = DropzoneProps;
  export type StylesNames = DropzoneStylesNames;
  export type CssVariables = DropzoneCssVariables;
  export type Factory = DropzoneFactory;

  export namespace FullScreen {
    export type Props = DropzoneFullScreenProps;
    export type StylesNames = DropzoneFullScreenStylesNames;
    export type Factory = DropzoneFullScreenFactory;
  }
}
