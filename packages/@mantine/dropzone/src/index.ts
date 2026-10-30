import type { FileRejection, FileWithPath } from 'react-dropzone';
import {
  Dropzone as _Dropzone,
  type DropzoneCssVariables,
  type DropzoneFactory,
  type DropzoneProps,
  type DropzoneStylesNames,
  type DropzoneVariant,
} from './Dropzone.js';
import {
  DropzoneFullScreen,
  type DropzoneFullScreenFactory,
  type DropzoneFullScreenProps,
  type DropzoneFullScreenStylesNames,
} from './DropzoneFullScreen.js';
import type {
  DropzoneAcceptProps,
  DropzoneIdleProps,
  DropzoneRejectProps,
} from './DropzoneStatus.js';

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
