import { Dropzone as _Dropzone } from './Dropzone.js';
import { DropzoneFullScreen } from './DropzoneFullScreen.js';

_Dropzone.FullScreen = DropzoneFullScreen;
export const Dropzone = _Dropzone;

export { DropzoneFullScreen };
export { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus.js';
export * from './mime-types.js';

export type {
  DropzoneStylesNames,
  DropzoneProps,
  DropzoneCssVariables,
  DropzoneFactory,
  DropzoneVariant,
} from './Dropzone';
export type {
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
  DropzoneFullScreenFactory,
} from './DropzoneFullScreen';
export type { DropzoneAcceptProps, DropzoneRejectProps, DropzoneIdleProps } from './DropzoneStatus';
export type { FileWithPath, FileRejection } from 'react-dropzone';
